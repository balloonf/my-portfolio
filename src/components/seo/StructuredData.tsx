import { siteConfig } from '@/config/site'

interface StructuredDataProps {
  type: 'person' | 'website' | 'article' | 'portfolio'
  data?: {
    title?: string
    description?: string
    image?: string
    publishedDate?: string
    modifiedDate?: string
    url?: string
  }
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseUrl = siteConfig.contact.blog || 'https://balloonf.dev'
    
    switch (type) {
      case 'person':
        return {
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: siteConfig.profile.name,
          jobTitle: siteConfig.profile.title,
          description: siteConfig.profile.bio,
          url: baseUrl,
          image: `${baseUrl}${siteConfig.profile.avatar}`,
          email: siteConfig.contact.email,
          sameAs: [
            siteConfig.contact.github,
            siteConfig.contact.linkedin,
            siteConfig.contact.twitter,
          ].filter(Boolean),
          address: {
            '@type': 'Place',
            name: siteConfig.profile.location,
          },
          knowsAbout: siteConfig.seo.keywords,
        }
      
      case 'website':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: siteConfig.title,
          description: siteConfig.description,
          url: baseUrl,
          author: {
            '@type': 'Person',
            name: siteConfig.profile.name,
            url: baseUrl,
          },
          inLanguage: 'ko-KR',
          copyrightYear: new Date().getFullYear(),
          potentialAction: {
            '@type': 'SearchAction',
            target: `${baseUrl}/search?q={search_term_string}`,
            'query-input': 'required name=search_term_string',
          },
        }
      
      case 'article':
        return {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: data?.title || siteConfig.title,
          description: data?.description || siteConfig.description,
          image: data?.image || `${baseUrl}${siteConfig.seo.ogImage}`,
          author: {
            '@type': 'Person',
            name: siteConfig.profile.name,
            url: baseUrl,
          },
          publisher: {
            '@type': 'Person',
            name: siteConfig.profile.name,
            url: baseUrl,
          },
          datePublished: data?.publishedDate,
          dateModified: data?.modifiedDate,
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': data?.url || baseUrl,
          },
        }
      
      case 'portfolio':
        return {
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          '@id': `${baseUrl}/portfolio`,
          name: `${siteConfig.profile.name} - Portfolio`,
          description: 'Professional portfolio showcasing web development projects and skills',
          creator: {
            '@type': 'Person',
            name: siteConfig.profile.name,
            jobTitle: siteConfig.profile.title,
            url: baseUrl,
          },
          about: siteConfig.seo.keywords,
          dateCreated: '2024-12-01',
          dateModified: new Date().toISOString(),
          inLanguage: 'ko-KR',
        }
      
      default:
        return null
    }
  }

  const structuredData = getStructuredData()
  
  if (!structuredData) return null

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
