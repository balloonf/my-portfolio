import { Badge } from '@/components/ui/badge'
import { Tag } from 'lucide-react'

interface TagListProps {
  tags: string[]
  selectedTag?: string | null
  onTagClick?: (tag: string) => void
  showCount?: boolean
  tagCounts?: Record<string, number>
}

export function TagList({ 
  tags, 
  selectedTag, 
  onTagClick, 
  showCount = false,
  tagCounts = {}
}: TagListProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => {
        const isSelected = selectedTag === tag
        const count = tagCounts[tag] || 0
        
        return (
          <Badge
            key={tag}
            variant={isSelected ? "default" : "outline"}
            className={`cursor-pointer transition-colors ${
              onTagClick ? 'hover:bg-primary/80' : ''
            }`}
            onClick={() => onTagClick?.(tag)}
          >
            <Tag className="w-3 h-3 mr-1" />
            {tag}
            {showCount && count > 0 && (
              <span className="ml-1 text-xs">({count})</span>
            )}
          </Badge>
        )
      })}
    </div>
  )
}

// 태그별 포스트 개수 계산
export function getTagCounts(posts: { tags: string[] }[]): Record<string, number> {
  const tagCounts: Record<string, number> = {}
  
  posts.forEach(post => {
    post.tags.forEach(tag => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1
    })
  })
  
  return tagCounts
}

// 인기 태그 정렬 (포스트 개수 기준)
export function getPopularTags(posts: { tags: string[] }[], limit = 10): string[] {
  const tagCounts = getTagCounts(posts)
  return Object.entries(tagCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, limit)
    .map(([tag]) => tag)
}