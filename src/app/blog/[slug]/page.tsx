import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { BlogPost as BlogPostComponent } from '@/components/blog/BlogPost'
import { getBlogPostWithFallback, getBlogPostsWithFallback } from '@/lib/github'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPostWithFallback(slug)
  
  if (!post) {
    return {
      title: '포스트를 찾을 수 없습니다',
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getBlogPostWithFallback(slug)

  if (!post) {
    notFound()
  }

  return <BlogPostComponent post={post} />
}

// 정적 경로 생성 (GitHub API에서 실제 포스트 가져오기)
export async function generateStaticParams() {
  try {
    const posts = await getBlogPostsWithFallback()
    return posts.map((post) => ({
      slug: post.slug,
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

// 정적 생성을 위한 revalidate 설정
export const revalidate = 3600