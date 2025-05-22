export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  tags: string[]
  author?: string
  readingTime?: number
  published?: boolean
}

export interface BlogPostMeta {
  slug: string
  title: string
  excerpt: string
  date: string
  tags: string[]
  author?: string
  readingTime?: number
  published?: boolean
}

export interface FrontMatter {
  title: string
  date: string
  tags?: string[]
  excerpt?: string
  author?: string
  published?: boolean
  [key: string]: unknown
}