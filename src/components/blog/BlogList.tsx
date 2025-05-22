"use client"

import { useState, useMemo } from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { BlogCard } from './BlogCard'
import { BlogPostMeta } from '@/types/blog'
import { filterPostsByTag, searchPosts } from '@/lib/markdown'

interface BlogListProps {
  posts: BlogPostMeta[]
  allTags: string[]
}

export function BlogList({ posts, allTags }: BlogListProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const filteredPosts = useMemo(() => {
    let filtered = posts

    // 태그 필터링
    if (selectedTag) {
      filtered = filterPostsByTag(filtered, selectedTag)
    }

    // 검색 필터링
    if (searchQuery.trim()) {
      filtered = searchPosts(filtered, searchQuery)
    }

    return filtered
  }, [posts, selectedTag, searchQuery])

  const handleTagClick = (tag: string) => {
    setSelectedTag(selectedTag === tag ? null : tag)
  }

  return (
    <div className="space-y-8">
      {/* 검색 및 필터 영역 */}
      <div className="space-y-4">
        {/* 검색바 */}
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="블로그 포스트 검색..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        {/* 태그 필터 */}
        <div className="flex flex-wrap gap-2">
          <Badge
            variant={selectedTag === null ? "default" : "outline"}
            className="cursor-pointer"
            onClick={() => setSelectedTag(null)}
          >
            전체
          </Badge>
          {allTags.map((tag) => (
            <Badge
              key={tag}
              variant={selectedTag === tag ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* 검색 결과 정보 */}
      <div className="text-sm text-muted-foreground">
        {selectedTag && (
          <span>#{selectedTag} 태그 포스트 </span>
        )}
        {searchQuery && (
          <span>&quot;{searchQuery}&quot; 검색 결과 </span>
        )}
        <span>총 {filteredPosts.length}개의 포스트</span>
      </div>

      {/* 포스트 목록 */}
      {filteredPosts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-4">
            검색 조건에 맞는 포스트가 없습니다.
          </p>
          <Badge 
            variant="outline" 
            className="cursor-pointer"
            onClick={() => {
              setSearchQuery('')
              setSelectedTag(null)
            }}
          >
            필터 초기화
          </Badge>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}