// 개인 프로필 및 사이트 설정
export const siteConfig = {
  // 기본 정보
  name: "balloonf",
  title: "balloonf - 개발자 포트폴리오",
  description: "웹 개발과 사용자 경험에 관심이 많은 풀스택 개발자의 포트폴리오입니다.",
  
  // 개인 정보
  profile: {
    name: "balloonf",
    title: "풀스택 개발자",
    bio: "웹 개발과 사용자 경험에 관심이 많은 개발자입니다. 새로운 기술을 배우고 적용하는 것을 좋아하며, 깔끔하고 효율적인 코드를 작성하려고 노력합니다.",
    location: "대한민국",
    avatar: "/images/profile/avatar.jpg",
    resume: "/files/resume.pdf"
  },

  // 연락처 정보
  contact: {
    email: "balloonf@example.com",
    github: "https://github.com/balloonf",
    linkedin: "https://linkedin.com/in/balloonf",
    twitter: "https://twitter.com/balloonf",
    blog: "https://balloonf.dev"
  },

  // 기술 통계
  stats: {
    projectsCompleted: "15+",
    yearsExperience: "3+",
    technologiesUsed: "20+",
    openSourceContributions: "10+"
  },

  // SEO 및 소셜 미디어
  seo: {
    keywords: ["풀스택 개발자", "React", "Next.js", "TypeScript", "웹 개발", "프론트엔드", "백엔드"],
    ogImage: "/images/og-image.jpg",
    twitterCard: "summary_large_image",
    author: "balloonf",
    creator: "balloonf"
  },

  // 소셜 링크
  social: [
    {
      name: "GitHub",
      url: "https://github.com/balloonf",
      icon: "Github"
    },
    {
      name: "LinkedIn", 
      url: "https://linkedin.com/in/balloonf",
      icon: "Linkedin"
    },
    {
      name: "Email",
      url: "mailto:balloonf@example.com",
      icon: "Mail"
    }
  ],

  // 내비게이션
  navigation: [
    { name: "홈", href: "/" },
    { name: "포트폴리오", href: "/portfolio" },
    { name: "블로그", href: "/blog" },
    { name: "연락처", href: "#contact" }
  ]
}
// 기술 스택 (실제 데이터로 업데이트)
export const skills = [
  // Frontend
  { name: "React", category: "frontend", level: "advanced", experience: "3년" },
  { name: "Next.js", category: "frontend", level: "advanced", experience: "2년" },
  { name: "TypeScript", category: "frontend", level: "advanced", experience: "2년" },
  { name: "JavaScript", category: "frontend", level: "expert", experience: "4년" },
  { name: "HTML/CSS", category: "frontend", level: "expert", experience: "5년" },
  { name: "Tailwind CSS", category: "frontend", level: "advanced", experience: "2년" },
  { name: "Vue.js", category: "frontend", level: "intermediate", experience: "1년" },
  
  // Backend
  { name: "Node.js", category: "backend", level: "intermediate", experience: "2년" },
  { name: "Express", category: "backend", level: "intermediate", experience: "2년" },
  { name: "Python", category: "backend", level: "intermediate", experience: "1년" },
  { name: "FastAPI", category: "backend", level: "beginner", experience: "6개월" },
  
  // Database
  { name: "PostgreSQL", category: "database", level: "intermediate", experience: "1년" },
  { name: "MongoDB", category: "database", level: "intermediate", experience: "1년" },
  { name: "Redis", category: "database", level: "beginner", experience: "6개월" },
  
  // DevOps & Tools
  { name: "Git", category: "other", level: "advanced", experience: "4년" },
  { name: "Docker", category: "devops", level: "intermediate", experience: "1년" },
  { name: "AWS", category: "devops", level: "beginner", experience: "6개월" },
  { name: "Vercel", category: "devops", level: "advanced", experience: "2년" },
  { name: "Figma", category: "other", level: "intermediate", experience: "2년" }
] as const

// 경력 정보
export const experiences = [
  {
    id: "1",
    title: "프론트엔드 개발자",
    company: "Tech Innovation Co.",
    location: "서울, 대한민국",
    startDate: "2022-03-01",
    current: true,
    description: "React와 TypeScript를 주력으로 하는 웹 애플리케이션 개발을 담당하고 있습니다. 사용자 중심의 인터페이스 구현과 성능 최적화에 집중하며, 팀의 코드 품질 향상에 기여하고 있습니다.",
    achievements: [
      "사용자 경험 개선으로 이탈률 25% 감소 달성",
      "컴포넌트 라이브러리 구축으로 개발 효율성 40% 향상",
      "웹 접근성 가이드라인 준수로 WCAG 2.1 AA 등급 달성",
      "코드 리뷰 프로세스 도입으로 버그 발생률 30% 감소"
    ],
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Jest", "Storybook"]
  },
  {
    id: "2",
    title: "풀스택 개발자 인턴",
    company: "Digital Solutions Inc.",
    location: "서울, 대한민국",
    startDate: "2021-06-01",
    endDate: "2022-02-28",
    description: "스타트업 환경에서 다양한 클라이언트 프로젝트에 참여하며 풀스택 개발 경험을 쌓았습니다. 프론트엔드부터 백엔드, 배포까지 전체 개발 과정을 경험했습니다.",
    achievements: [
      "12개 이상의 클라이언트 프로젝트 성공적 완료",
      "반응형 웹사이트 개발 전문성 확보",
      "팀 내 Git 워크플로우 개선에 기여",
      "신입 개발자 멘토링 담당"
    ],
    technologies: ["Vue.js", "Node.js", "Express", "MongoDB", "Docker", "AWS"]
  }
] as const

// 실제 프로젝트 데이터
export const projects = [
  {
    id: "1",
    title: "포트폴리오 & 블로그 플랫폼",
    description: "GitHub API와 연동되는 개인 포트폴리오 및 블로그 사이트입니다. 마크다운 기반 블로그 시스템과 반응형 포트폴리오 페이지를 포함합니다.",
    longDescription: "Next.js와 TypeScript를 기반으로 제작한 개인 포트폴리오 사이트입니다. GitHub API를 활용하여 마크다운 파일을 자동으로 블로그 포스트로 변환하는 시스템을 구축했습니다.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "GitHub API", "Vercel"],
    category: "Portfolio",
    status: "completed",
    githubUrl: "https://github.com/balloonf/portfolio",
    demoUrl: "https://balloonf.dev",
    imageUrl: "/images/projects/portfolio.jpg",
    startDate: "2024-12-01",
    endDate: "2025-01-15",
    featured: true,
    highlights: [
      "GitHub API 연동으로 자동 블로그 포스트 생성",
      "Tailwind CSS를 활용한 완전 반응형 디자인",
      "다크/라이트 모드 지원",
      "SEO 최적화 및 성능 최적화",
      "TypeScript로 타입 안전성 확보"
    ]
  },
  {
    id: "2",
    title: "실시간 채팅 애플리케이션",
    description: "Socket.io와 React를 활용한 실시간 채팅 애플리케이션입니다. 다중 채팅방, 파일 공유, 온라인 상태 표시 기능을 포함합니다.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    category: "Web Application",
    status: "completed",
    githubUrl: "https://github.com/balloonf/chat-app",
    demoUrl: "https://chat-demo.balloonf.dev",
    imageUrl: "/images/projects/chat-app.jpg",
    startDate: "2024-08-01",
    endDate: "2024-10-30",
    featured: true,
    highlights: [
      "Socket.io를 활용한 실시간 메시징",
      "다중 채팅방 및 개인 메시지 지원",
      "파일 업로드 및 이미지 미리보기",
      "사용자 온라인/오프라인 상태 표시",
      "JWT 기반 인증 시스템"
    ]
  },
  {
    id: "3",
    title: "태스크 관리 대시보드",
    description: "팀 협업을 위한 칸반 스타일의 태스크 관리 도구입니다. 드래그 앤 드롭, 실시간 협업, 진행률 추적 기능을 제공합니다.",
    technologies: ["Vue.js", "Vuetify", "Firebase", "PWA"],
    category: "Productivity",
    status: "completed",
    githubUrl: "https://github.com/balloonf/task-manager",
    demoUrl: "https://tasks.balloonf.dev",
    imageUrl: "/images/projects/task-manager.jpg",
    startDate: "2024-05-01",
    endDate: "2024-07-15",
    highlights: [
      "드래그 앤 드롭 인터페이스",
      "실시간 팀 협업 기능",
      "PWA로 모바일 앱처럼 사용 가능",
      "Firebase를 활용한 실시간 데이터베이스",
      "진행률 및 통계 대시보드"
    ]
  },
  {
    id: "4",
    title: "날씨 정보 대시보드",
    description: "OpenWeather API를 활용한 인터랙티브 날씨 대시보드입니다. 현재 날씨, 예보, 날씨 차트를 제공합니다.",
    technologies: ["React", "TypeScript", "Chart.js", "OpenWeather API"],
    category: "Data Visualization",
    status: "completed",
    githubUrl: "https://github.com/balloonf/weather-dashboard",
    demoUrl: "https://weather.balloonf.dev",
    imageUrl: "/images/projects/weather-dashboard.jpg",
    startDate: "2024-02-01",
    endDate: "2024-03-30",
    highlights: [
      "Chart.js를 활용한 데이터 시각화",
      "위치 기반 날씨 정보 제공",
      "7일 예보 및 시간별 상세 정보",
      "반응형 디자인",
      "TypeScript로 타입 안전성 확보"
    ]
  },
  {
    id: "5",
    title: "E-commerce 플랫폼",
    description: "PostgreSQL과 Stripe을 연동한 풀스택 이커머스 플랫폼입니다. 상품 관리, 장바구니, 결제 시스템을 포함합니다.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Express"],
    category: "E-commerce",
    status: "completed",
    githubUrl: "https://github.com/balloonf/ecommerce",
    imageUrl: "/images/projects/ecommerce.jpg",
    startDate: "2023-10-01",
    endDate: "2024-01-15",
    highlights: [
      "Stripe 결제 시스템 통합",
      "상품 검색 및 필터링",
      "관리자 대시보드",
      "주문 관리 시스템",
      "이메일 알림 기능"
    ]
  }
] as const