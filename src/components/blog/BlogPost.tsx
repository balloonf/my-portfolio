import { ArrowLeft, Calendar, Clock, Tag, User } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import type { BlogPost } from '@/types/blog'
import { formatDate } from '@/lib/markdown'

interface BlogPostProps {
  post: BlogPost
}

export function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      {/* 뒤로가기 버튼 */}
      <div className="mb-6">
        <Button variant="ghost" asChild>
          <Link href="/blog">
            <ArrowLeft className="w-4 h-4 mr-2" />
            블로그로 돌아가기
          </Link>
        </Button>
      </div>

      {/* 헤더 */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          {post.title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(post.date)}</span>
          </div>
          
          {post.author && (
            <div className="flex items-center space-x-1">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
          )}
          
          {post.readingTime && (
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{post.readingTime}분 읽기</span>
            </div>
          )}
        </div>

        {/* 태그 */}
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </Badge>
          ))}
        </div>

        <Separator />
      </header>
      {/* 본문 */}
      <div 
        className="prose prose-gray dark:prose-invert max-w-none
                   prose-headings:font-bold prose-headings:text-foreground
                   prose-p:text-foreground prose-p:leading-7
                   prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                   prose-strong:text-foreground prose-strong:font-semibold
                   prose-code:text-primary prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                   prose-pre:bg-muted prose-pre:border prose-pre:border-border
                   prose-blockquote:border-l-primary prose-blockquote:border-l-4 prose-blockquote:pl-4
                   prose-hr:border-border
                   prose-table:border-collapse prose-table:border prose-table:border-border
                   prose-th:border prose-th:border-border prose-th:bg-muted prose-th:p-2
                   prose-td:border prose-td:border-border prose-td:p-2"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* 푸터 */}
      <footer className="mt-12 pt-8 border-t">
        <div className="flex justify-between items-center">
          <p className="text-sm text-muted-foreground">
            이 글이 도움이 되었다면 공유해주세요!
          </p>
          
          <Button variant="outline" asChild>
            <Link href="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              목록으로
            </Link>
          </Button>
        </div>
      </footer>
    </article>
  )
}