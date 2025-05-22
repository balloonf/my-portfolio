import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'
import { BlogPostMeta, FrontMatter } from '@/types/blog'

// 읽기 시간 계산 (평균 200 단어/분)
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const textLength = content.split(/\s+/).length
  const readingTime = Math.ceil(textLength / wordsPerMinute)
  return readingTime
}

// 마크다운을 HTML로 변환
export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(remarkHtml).process(markdown)
  return result.toString()
}

// frontmatter와 content 파싱
export function parseMarkdown(fileContent: string): {
  frontMatter: FrontMatter
  content: string
  excerpt: string
} {
  const { data, content } = matter(fileContent)
  
  // excerpt 자동 생성 (첫 번째 문단 또는 150자)
  const excerpt = data.excerpt || 
    content.split('\n\n')[0].replace(/[#*`]/g, '').substring(0, 150) + '...'
  
  return {
    frontMatter: data as FrontMatter,
    content,
    excerpt
  }
}

// 슬러그 생성 (파일명에서)
export function createSlug(filename: string): string {
  return filename
    .replace(/\.md$/, '')
    .replace(/[^a-zA-Z0-9가-힣]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase()
}

// 날짜 포맷팅
export function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long', 
    day: 'numeric',
  }
  return new Date(dateString).toLocaleDateString('ko-KR', options)
}

// 태그별 포스트 필터링
export function filterPostsByTag(posts: BlogPostMeta[], tag: string): BlogPostMeta[] {
  return posts.filter(post => 
    post.tags.some(postTag => 
      postTag.toLowerCase() === tag.toLowerCase()
    )
  )
}

// 포스트 검색
export function searchPosts(posts: BlogPostMeta[], query: string): BlogPostMeta[] {
  const searchTerm = query.toLowerCase()
  return posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm) ||
    post.excerpt.toLowerCase().includes(searchTerm) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  )
}