import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 성능 최적화 설정
  compress: true,
  
  // 이미지 최적화
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['github.com', 'raw.githubusercontent.com'],
  },

  // 실험적 기능
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },

  // 출력 최적화
  poweredByHeader: false,
  
  // 보안 헤더
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ]
  },

  // PNG 아이콘 요청을 SVG로 리다이렉트 (임시 해결책)
  async rewrites() {
    return [
      {
        source: '/images/icons/icon-72x72.png',
        destination: '/images/icons/icon-72x72.svg',
      },
      {
        source: '/images/icons/icon-96x96.png',
        destination: '/images/icons/icon-96x96.svg',
      },
      {
        source: '/images/icons/icon-128x128.png',
        destination: '/images/icons/icon-144x144.svg',
      },
      {
        source: '/images/icons/icon-144x144.png',
        destination: '/images/icons/icon-144x144.svg',
      },
      {
        source: '/images/icons/icon-152x152.png',
        destination: '/images/icons/icon-144x144.svg',
      },
      {
        source: '/images/icons/icon-192x192.png',
        destination: '/images/icons/icon-192x192.svg',
      },
      {
        source: '/images/icons/icon-384x384.png',
        destination: '/images/icons/icon-512x512.svg',
      },
      {
        source: '/images/icons/icon-512x512.png',
        destination: '/images/icons/icon-512x512.svg',
      },
    ]
  }
};

export default nextConfig;
