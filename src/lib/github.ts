import { Octokit } from 'octokit'
import { BlogPost, BlogPostMeta } from '@/types/blog'
import { parseMarkdown, markdownToHtml, calculateReadingTime, createSlug } from './markdown'
import { fallbackPosts, fallbackTags } from './fallback-data'

// GitHub API 클라이언트 초기화
const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
})

// 환경변수에서 GitHub 설정 가져오기
const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'balloonf'
const GITHUB_REPO = process.env.NEXT_PUBLIC_GITHUB_REPO || 'blog-posts'
const BLOG_FOLDER = process.env.NEXT_PUBLIC_BLOG_FOLDER || 'posts'

// GitHub에서 마크다운 파일 목록 가져오기
export async function getBlogPosts(): Promise<BlogPostMeta[]> {
  try {
    const { data } = await octokit.rest.repos.getContent({
      owner: GITHUB_USERNAME,
      repo: GITHUB_REPO,
      path: BLOG_FOLDER,
    })

    if (!Array.isArray(data)) {
      console.warn('Blog folder not found or is not a directory')
      return []
    }

    const markdownFiles = data.filter(file => 
      file.type === 'file' && file.name?.endsWith('.md')
    )

    const posts: BlogPostMeta[] = []

    for (const file of markdownFiles) {
      try {
        const content = await getFileContent(file.path)
        const { frontMatter, content: markdownContent, excerpt } = parseMarkdown(content)
        
        if (frontMatter.published !== false) { // 기본적으로 published
          const slug = createSlug(file.name!)
          const readingTime = calculateReadingTime(markdownContent)

          posts.push({
            slug,
            title: frontMatter.title || file.name!.replace('.md', ''),
            excerpt: excerpt,
            date: frontMatter.date || new Date().toISOString(),
            tags: frontMatter.tags || [],
            author: frontMatter.author,
            readingTime,
            published: frontMatter.published ?? true,
          })
        }
      } catch (error) {
        console.error(`Error processing file ${file.name}:`, error)
      }
    }

    // 날짜순 정렬 (최신순)
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}
// 개별 블로그 포스트 가져오기
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const posts = await getBlogPosts()
    const postMeta = posts.find(post => post.slug === slug)
    
    if (!postMeta) {
      return null
    }

    // 실제 파일명 찾기
    const { data } = await octokit.rest.repos.getContent({
      owner: GITHUB_USERNAME,
      repo: GITHUB_REPO,
      path: BLOG_FOLDER,
    })

    if (!Array.isArray(data)) {
      return null
    }

    const markdownFile = data.find(file => 
      file.type === 'file' && 
      file.name?.endsWith('.md') && 
      createSlug(file.name) === slug
    )

    if (!markdownFile) {
      return null
    }

    const content = await getFileContent(markdownFile.path)
    const { content: markdownContent } = parseMarkdown(content)
    const htmlContent = await markdownToHtml(markdownContent)

    return {
      ...postMeta,
      content: htmlContent,
    }
  } catch (error) {
    console.error(`Error fetching blog post ${slug}:`, error)
    return null
  }
}

// GitHub에서 파일 내용 가져오기 (Base64 디코딩)
async function getFileContent(path: string): Promise<string> {
  const { data } = await octokit.rest.repos.getContent({
    owner: GITHUB_USERNAME,
    repo: GITHUB_REPO,
    path,
  })

  if ('content' in data) {
    return Buffer.from(data.content, 'base64').toString('utf-8')
  }

  throw new Error('File content not found')
}
// GitHub 레포지토리 정보 가져오기
export async function getRepoInfo() {
  try {
    const { data } = await octokit.rest.repos.get({
      owner: GITHUB_USERNAME,
      repo: GITHUB_REPO,
    })

    return {
      name: data.name,
      description: data.description,
      url: data.html_url,
      stars: data.stargazers_count,
      forks: data.forks_count,
      lastUpdated: data.updated_at,
    }
  } catch (error) {
    console.error('Error fetching repo info:', error)
    return null
  }
}

// 모든 태그 추출
export async function getAllTags(): Promise<string[]> {
  const posts = await getBlogPosts()
  const allTags = posts.flatMap(post => post.tags)
  return Array.from(new Set(allTags)).sort()
}

// 캐싱을 위한 헬퍼 함수들
export const cache = {
  posts: null as BlogPostMeta[] | null,
  tags: null as string[] | null,
  lastFetch: 0,
  ttl: 5 * 60 * 1000, // 5분 캐시

  async getPosts(): Promise<BlogPostMeta[]> {
    if (this.posts && Date.now() - this.lastFetch < this.ttl) {
      return this.posts
    }
    
    this.posts = await getBlogPosts()
    this.lastFetch = Date.now()
    return this.posts
  },

  async getTags(): Promise<string[]> {
    if (this.tags && Date.now() - this.lastFetch < this.ttl) {
      return this.tags
    }
    
    this.tags = await getAllTags()
    return this.tags
  },

  clear() {
    this.posts = null
    this.tags = null
    this.lastFetch = 0
  }
}
// GitHub API에서 블로그 포스트 가져오기 (fallback 포함)
export async function getBlogPostsWithFallback(): Promise<BlogPostMeta[]> {
  // GitHub Token이 없으면 fallback 데이터 사용
  if (!process.env.GITHUB_TOKEN) {
    console.warn('GITHUB_TOKEN not found, using fallback data')
    return fallbackPosts
  }

  try {
    const posts = await getBlogPosts()
    return posts.length > 0 ? posts : fallbackPosts
  } catch (error) {
    console.error('GitHub API error, using fallback data:', error)
    return fallbackPosts
  }
}

// 모든 태그 가져오기 (fallback 포함)
export async function getAllTagsWithFallback(): Promise<string[]> {
  if (!process.env.GITHUB_TOKEN) {
    return fallbackTags
  }

  try {
    const tags = await getAllTags()
    return tags.length > 0 ? tags : fallbackTags
  } catch (error) {
    console.error('GitHub API error, using fallback tags:', error)
    return fallbackTags
  }
}

// 개별 포스트 가져오기 (fallback 포함)
export async function getBlogPostWithFallback(slug: string): Promise<BlogPost | null> {
  if (!process.env.GITHUB_TOKEN) {
    const post = fallbackPosts.find(p => p.slug === slug)
    if (post) {
      // fallback 데이터에는 HTML 내용이 없으므로 기본 내용 제공
      return {
        ...post,
        content: `
          <h2>${post.title}</h2>
          <p>${post.excerpt}</p>
          <p><em>이 포스트는 GitHub API 연동 전 데모 데이터입니다.</em></p>
          <p>실제 블로그 포스트를 보려면 GitHub API를 설정해주세요.</p>
        `
      }
    }
    return null
  }

  try {
    return await getBlogPost(slug)
  } catch (error) {
    console.error(`GitHub API error for post ${slug}, trying fallback:`, error)
    const post = fallbackPosts.find(p => p.slug === slug)
    return post ? {
      ...post,
      content: `
        <h2>${post.title}</h2>
        <p>${post.excerpt}</p>
        <p><em>GitHub API에 연결할 수 없어 기본 내용을 표시합니다.</em></p>
      `
    } : null
  }
}