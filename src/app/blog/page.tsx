import { Metadata } from 'next'
import { BlogList } from '@/components/blog/BlogList'
import { getBlogPostsWithFallback, getAllTagsWithFallback } from '@/lib/github'
import { BlogPostMeta } from '@/types/blog'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: '블로그',
  description: '개발 관련 글과 생각을 공유합니다.',
}

// 정적 생성을 위한 revalidate 설정 (1시간마다 갱신)
export const revalidate = 3600

export default async function BlogPage() {
  let posts: BlogPostMeta[] = []
  let allTags: string[] = []
  let error: string | null = null

  try {
    [posts, allTags] = await Promise.all([
      getBlogPostsWithFallback(),
      getAllTagsWithFallback()
    ])
  } catch (err) {
    console.error('Error loading blog posts:', err)
    error = 'GitHub API에서 블로그 포스트를 불러오는데 실패했습니다.'
    posts = []
    allTags = []
  }

  return (
    <div className="container-responsive section-spacing">
      <div className="max-w-6xl mx-auto">
        {/* 헤더 */}
        <div className="text-center element-spacing">
          <h1 className="heading-responsive mb-4">블로그</h1>
          <p className="body-responsive text-muted-foreground max-w-2xl mx-auto">
            개발 경험과 학습한 내용을 기록하고 공유합니다.
          </p>
          
          {posts.length > 0 && (
            <p className="text-sm text-muted-foreground mt-4">
              총 {posts.length}개의 포스트
            </p>
          )}
        </div>

        {/* 에러 표시 */}
        {error && (
          <Alert className="mb-8">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              {error} 잠시 후 다시 시도해주세요.
            </AlertDescription>
          </Alert>
        )}

        {/* 블로그 포스트가 없는 경우 */}
        {posts.length === 0 && !error && (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground mb-4">
              아직 작성된 블로그 포스트가 없습니다.
            </p>
            <p className="text-sm text-muted-foreground">
              GitHub 저장소에 마크다운 파일을 추가하면 자동으로 블로그 포스트가 생성됩니다.
            </p>
          </div>
        )}

        {/* 블로그 목록 */}
        {posts.length > 0 && (
          <BlogList posts={posts} allTags={allTags} />
        )}
      </div>
    </div>
  )
}