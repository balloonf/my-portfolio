import { BlogPostMeta } from '@/types/blog'

// GitHub API 사용 불가시 사용할 fallback 데이터
export const fallbackPosts: BlogPostMeta[] = [
  {
    slug: 'react-hooks-guide',
    title: 'React Hooks 완벽 가이드',
    excerpt: 'React Hooks의 기본 개념부터 고급 패턴까지 상세히 알아보겠습니다. useState, useEffect, useContext 등의 기본 Hook부터 커스텀 Hook 작성까지...',
    date: '2025-01-15',
    tags: ['React', 'JavaScript', 'Frontend'],
    readingTime: 8,
  },
  {
    slug: 'nextjs-performance-optimization',
    title: 'Next.js 성능 최적화 전략',
    excerpt: 'Next.js 애플리케이션의 성능을 향상시키는 다양한 방법들을 살펴보겠습니다. Image 최적화, Code Splitting, SSR vs SSG 선택 등...',
    date: '2025-01-10',
    tags: ['Next.js', 'Performance', 'React'],
    readingTime: 12,
  },
  {
    slug: 'typescript-advanced-types',
    title: 'TypeScript 고급 타입 시스템',
    excerpt: 'TypeScript의 고급 타입 기능들을 활용하여 더 안전하고 표현력 있는 코드를 작성하는 방법을 알아보겠습니다.',
    date: '2025-01-05',
    tags: ['TypeScript', 'JavaScript'],
    readingTime: 15,
  },
  {
    slug: 'tailwind-css-best-practices',
    title: 'Tailwind CSS 베스트 프랙티스',
    excerpt: 'Tailwind CSS를 효과적으로 사용하기 위한 팁과 트릭들을 공유합니다. 컴포넌트 설계부터 성능 최적화까지...',
    date: '2024-12-28',
    tags: ['CSS', 'Tailwind', 'Frontend'],
    readingTime: 6,
  },
  {
    slug: 'git-workflow-strategies',
    title: 'Git 워크플로우 전략',
    excerpt: '효과적인 Git 브랜치 전략과 팀 협업을 위한 워크플로우를 소개합니다. Git Flow, GitHub Flow, GitLab Flow 비교...',
    date: '2024-12-20',
    tags: ['Git', 'DevOps', 'Collaboration'],
    readingTime: 10,
  },
]

export const fallbackTags = Array.from(new Set(fallbackPosts.flatMap(post => post.tags))).sort()