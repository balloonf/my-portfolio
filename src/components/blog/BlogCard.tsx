import Link from 'next/link'
import { Calendar, Clock, Tag } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BlogPostMeta } from '@/types/blog'
import { formatDate } from '@/lib/markdown'

interface BlogCardProps {
  post: BlogPostMeta
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <Link href={`/blog/${post.slug}`}>
          <h3 className="text-xl font-semibold line-clamp-2 hover:text-primary transition-colors">
            {post.title}
          </h3>
        </Link>
      </CardHeader>
      
      <CardContent className="flex-1">
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex items-center text-sm text-muted-foreground space-x-4 mb-4">
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(post.date)}</span>
          </div>
          
          {post.readingTime && (
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{post.readingTime}분 읽기</span>
            </div>
          )}
        </div>
      </CardContent>
      
      <CardFooter>
        <div className="flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </Badge>
          ))}
          {post.tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{post.tags.length - 3}개
            </Badge>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}