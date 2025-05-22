import { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.contact.blog || 'https://balloonf.dev'
  
  // 기본 페이지들
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
  ]

  // 프로젝트 페이지들 추가 (동적으로)
  // TODO: 실제 프로젝트 데이터가 있을 때 추가
  // projects.forEach(project => {
  //   routes.push({
  //     url: `${baseUrl}/portfolio/${project.id}`,
  //     lastModified: new Date(project.endDate || project.startDate),
  //     changeFrequency: 'monthly' as const,
  //     priority: 0.6,
  //   })
  // })

  return routes
}
