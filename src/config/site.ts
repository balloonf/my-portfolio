// 개인 프로필 및 사이트 설정
export const siteConfig = {
  // 기본 정보
  name: "balloonf",
  title: "balloonf - 개발자 포트폴리오",
  description: "웹 개발과 사용자 경험에 관심이 많은 풀스택 개발자의 포트폴리오입니다.",
  
  // 개인 정보
  profile: {
    name: "balloonf",
    title: "시니어 백엔드 개발자",
    bio: "15년 이상의 엔터프라이즈 시스템 개발 경험을 보유한 시니어 백엔드 개발자입니다. Java, Spring Framework를 중심으로 한 대규모 SI/SM 프로젝트 수행 경험이 풍부하며, 넷마블, 포스코, CGV 등 다양한 업계에서 안정적인 시스템 구축 및 운영 업무를 담당해왔습니다.",
    location: "대한민국",
    avatar: "/images/profile/avatar.png",
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
    projectsCompleted: "30+",
    yearsExperience: "15+",
    technologiesUsed: "25+",
    openSourceContributions: "5+"
  },

  // SEO 및 소셜 미디어
  seo: {
    keywords: ["시니어 백엔드 개발자", "Java", "Spring Framework", "Oracle", "엔터프라이즈 시스템", "SI", "SM", "Unix", "Linux"],
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
  // Backend
  { name: "Java", category: "backend", level: "expert", experience: "15년+" },
  { name: "Python", category: "backend", level: "advanced", experience: "5년+" },
  { name: ".NET", category: "backend", level: "intermediate", experience: "1년" },
  { name: "Spring Framework", category: "backend", level: "expert", experience: "10년+" },
  { name: "EJB", category: "backend", level: "advanced", experience: "5년+" },
  { name: "ASP.NET", category: "backend", level: "intermediate", experience: "1년" },
  
  // Frontend
  { name: "Flex", category: "frontend", level: "advanced", experience: "3년" },
  { name: "Miplatform", category: "frontend", level: "intermediate", experience: "1년" },
  { name: "JavaScript", category: "frontend", level: "advanced", experience: "8년+" },
  { name: "HTML/CSS", category: "frontend", level: "advanced", experience: "10년+" },
  
  // Database
  { name: "Oracle", category: "database", level: "expert", experience: "12년+" },
  { name: "Oracle 10g", category: "database", level: "expert", experience: "10년+" },
  { name: "MS-SQL", category: "database", level: "advanced", experience: "8년+" },
  
  // OS & Environment
  { name: "Unix", category: "os", level: "expert", experience: "15년+" },
  { name: "Linux", category: "os", level: "expert", experience: "15년+" },
  { name: "Ubuntu", category: "os", level: "advanced", experience: "5년+" },
  { name: "Windows", category: "os", level: "advanced", experience: "10년+" },
  
  // Development Tools
  { name: "Eclipse", category: "tools", level: "expert", experience: "15년+" },
  { name: "Visual Studio", category: "tools", level: "intermediate", experience: "1년" },
  
  // Frameworks
  { name: "eGovFrame", category: "framework", level: "advanced", experience: "5년+" },
  { name: "Glue Framework", category: "framework", level: "intermediate", experience: "1년" },
  
  // Project Types
  { name: "SI (System Integration)", category: "project", level: "expert", experience: "10년+" },
  { name: "SM (System Management)", category: "project", level: "expert", experience: "15년+" }
] as const

// 경력 정보
export const experiences = [
  {
    id: "1",
    title: "시스템 운영관리(SM)",
    company: "넷마블",
    location: "서울, 대한민국",
    startDate: "2020-12-01",
    current: true,
    description: "넷마블 재무관리 NERP 시스템의 운영 및 관리를 담당하고 있습니다. Unix/Ubuntu 환경에서 Java와 Python을 활용한 시스템 운영, eGovFrame 기반 정부표준프레임워크 적용 및 MS-SQL 데이터베이스 관리 업무를 수행하고 있습니다.",
    achievements: [
      "전사적 자원관리 시스템의 안정적 운영 및 관리",
      "eGovFrame 기반 정부표준프레임워크 적용으로 시스템 표준화",
      "Java/Python 기반 시스템 개선 및 최적화",
      "MS-SQL 데이터베이스 성능 튜닝으로 처리 속도 30% 향상"
    ],
    technologies: ["Java", "Python", "MS-SQL", "Eclipse", "eGovFrame", "Unix", "Ubuntu"]
  },
  {
    id: "2",
    title: "SI/SM 개발자",
    company: "포스코",
    location: "서울, 대한민국",
    startDate: "2011-01-01",
    endDate: "2020-12-31",
    description: "포스코 그룹통합 SRM(공급업체 관계관리) 시스템의 구축 및 10년간 장기 운영관리를 담당했습니다. Unix/Linux 환경에서 Java 기반 엔터프라이즈 시스템 개발 및 Oracle 10g 데이터베이스 관리, Flex를 활용한 리치 인터넷 애플리케이션 구현 경험을 쌓았습니다.",
    achievements: [
      "포스코 그룹 전체 공급업체 관리 시스템 성공적 구축 및 운영",
      "10년간 장기 프로젝트 수행으로 시스템 안정성 및 신뢰성 확보",
      "Oracle 10g 기반 대용량 데이터 처리 시스템 최적화",
      "Flex 기반 사용자 친화적 인터페이스 구현으로 업무 효율성 향상"
    ],
    technologies: ["Java", "Oracle 10g", "Flex", "Eclipse", "Unix", "Linux"]
  },
  {
    id: "3",
    title: "SI 개발자",
    company: "CGV",
    location: "서울, 대한민국",
    startDate: "2010-01-01",
    endDate: "2010-12-31",
    description: "CGV 전산관리 시스템 중 포스(POS) 매표관리 시스템 구축 프로젝트에 참여했습니다. Miplatform 기반 클라이언트 애플리케이션과 Spring Framework를 활용한 백엔드 시스템을 개발하여 영화관 매표업무의 전산화를 담당했습니다.",
    achievements: [
      "영화관 포스(POS) 매표관리 시스템 성공적 구축",
      "Miplatform을 활용한 사용자 친화적 클라이언트 개발",
      "Spring Framework 기반 안정적 백엔드 시스템 구현",
      "실시간 좌석 예약 및 매표 처리 시스템 개발"
    ],
    technologies: ["Java", "Oracle", "Miplatform", "Spring Framework", "Unix", "Linux"]
  },
  {
    id: "4",
    title: "SI 개발자",
    company: "현대제철",
    location: "서울, 대한민국",
    startDate: "2009-06-01",
    endDate: "2009-12-31",
    description: "현대제철 일관제철소의 환경 및 에너지 관리 시스템 구축 프로젝트에 참여했습니다. 제철소 특화 산업용 시스템 개발 경험을 쌓았으며, Glue Framework를 활용한 시스템 아키텍처 구현 업무를 담당했습니다.",
    achievements: [
      "일관제철소 환경/에너지 관리 시스템 성공적 구축",
      "Glue Framework 기반 확장 가능한 시스템 아키텍처 구현",
      "실시간 환경 데이터 모니터링 시스템 개발",
      "제철소 특화 산업용 시스템 개발 노하우 습득"
    ],
    technologies: ["Java", "Oracle", "Eclipse", "Glue Framework", "Unix", "Linux"]
  }
] as const

// 실제 프로젝트 데이터
export const projects = [
  {
    id: "1",
    title: "넷마블 재무관리 NERP",
    description: "넷마블의 전사적 자원관리 시스템으로, 재무관리 부문의 효율성 향상을 위한 시스템 운영 및 관리를 담당하고 있습니다.",
    longDescription: "넷마블의 핵심 재무관리 시스템으로, 전사적 자원관리(ERP) 시스템의 재무 모듈을 담당하여 회계, 예산관리, 비용관리 등의 업무를 지원합니다. Unix 환경에서 Java와 Python을 활용하여 시스템 운영 및 개선 업무를 수행하고 있습니다.",
    technologies: ["Java", "Python", "MS-SQL", "Eclipse", "eGovFrame", "Unix", "Ubuntu"],
    category: "Enterprise System",
    status: "ongoing",
    company: "넷마블",
    projectType: "SM",
    imageUrl: "/images/projects/netmarble-nerp.svg",
    startDate: "2020-12-01",
    current: true,
    featured: true,
    highlights: [
      "전사적 자원관리 시스템의 재무관리 모듈 운영",
      "Java/Python 기반 시스템 운영 및 개선",
      "eGovFrame을 활용한 정부표준프레임워크 적용",
      "MS-SQL 데이터베이스 관리 및 최적화",
      "Unix/Ubuntu 환경에서의 시스템 관리"
    ]
  },
  {
    id: "2",
    title: "포스코 그룹통합 SRM",
    description: "포스코 그룹의 공급업체 관계관리 시스템으로, 10년간 시스템 구축 및 운영관리를 담당했습니다.",
    longDescription: "포스코 그룹 전체의 공급업체 관계관리(SRM) 시스템 구축 및 운영 프로젝트입니다. 공급업체 등록, 평가, 계약관리 등 전체 공급망 관리 프로세스를 지원하는 대규모 엔터프라이즈 시스템입니다.",
    technologies: ["Java", "Oracle 10g", "Flex", "Eclipse", "Unix", "Linux"],
    category: "Enterprise System",
    status: "completed",
    company: "포스코",
    projectType: "SI, SM",
    imageUrl: "/images/projects/posco-srm.svg",
    startDate: "2011-01-01",
    endDate: "2020-12-31",
    featured: true,
    highlights: [
      "포스코 그룹 전체의 공급업체 관계관리 시스템 구축",
      "10년간 장기 프로젝트 수행으로 안정적 시스템 운영",
      "Oracle 10g 기반 대용량 데이터 처리",
      "Flex를 활용한 리치 인터넷 애플리케이션 구현",
      "Unix/Linux 환경에서의 엔터프라이즈 시스템 관리"
    ]
  },
  {
    id: "3",
    title: "CGV 전산관리 시스템 - 포스 매표관리 시스템",
    description: "CGV의 포스(POS) 매표관리 시스템 구축 프로젝트로, 영화관 매표업무의 전산화를 담당했습니다.",
    longDescription: "CGV 영화관의 포스(POS) 매표관리 시스템 구축 프로젝트입니다. 영화 상영시간표 관리, 좌석 예약, 매표, 결제 등 영화관 운영에 필요한 핵심 기능들을 개발했습니다.",
    technologies: ["Java", "Oracle", "Miplatform", "Spring Framework", "Unix", "Linux"],
    category: "Retail System",
    status: "completed",
    company: "CGV",
    projectType: "SI",
    imageUrl: "/images/projects/cgv-pos.svg",
    startDate: "2010-01-01",
    endDate: "2010-12-31",
    highlights: [
      "영화관 포스(POS) 매표관리 시스템 구축",
      "Miplatform 기반 클라이언트 애플리케이션 개발",
      "Spring Framework를 활용한 백엔드 시스템 구현",
      "실시간 좌석 예약 및 매표 처리 시스템",
      "Oracle 데이터베이스 기반 안정적 데이터 관리"
    ]
  },
  {
    id: "4",
    title: "현대제철 일관제철 시스템 (환경, 에너지)",
    description: "현대제철의 일관제철소 환경 및 에너지 관리 시스템 구축 프로젝트를 담당했습니다.",
    longDescription: "현대제철 일관제철소의 환경관리 및 에너지 관리 시스템 구축 프로젝트입니다. 제철소 운영 중 발생하는 환경 데이터와 에너지 소비량을 실시간으로 모니터링하고 관리하는 시스템을 개발했습니다.",
    technologies: ["Java", "Oracle", "Eclipse", "Glue Framework", "Unix", "Linux"],
    category: "Industrial System",
    status: "completed",
    company: "현대제철",
    projectType: "SI",
    imageUrl: "/images/projects/hyundai-steel.svg",
    startDate: "2009-06-01",
    endDate: "2009-12-31",
    highlights: [
      "일관제철소 환경 및 에너지 관리 시스템 구축",
      "Glue Framework를 활용한 시스템 아키텍처 구현",
      "실시간 환경 데이터 모니터링 시스템",
      "에너지 소비량 분석 및 최적화 기능",
      "제철소 특화 산업용 시스템 개발 경험"
    ]
  },
  {
    id: "5",
    title: "원일용 국회의원 일정관리 프로그램",
    description: ".NET 기반의 국회의원 일정관리 시스템을 개발했습니다.",
    longDescription: "원일용 국회의원실의 일정관리 프로그램 개발 프로젝트입니다. .NET Framework와 MS-SQL을 활용하여 의원의 국정감사, 회의, 지역구 일정 등을 통합 관리하는 시스템을 구축했습니다.",
    technologies: [".Net", "MS-SQL", "Visual Studio", "ASP.NET", "Windows"],
    category: "Management System",
    status: "completed",
    company: "아토스",
    projectType: "SI",
    imageUrl: "/images/projects/parliament-schedule.svg",
    startDate: "2009-02-01",
    endDate: "2009-05-31",
    highlights: [
      ".NET Framework 기반 Windows 애플리케이션 개발",
      "ASP.NET을 활용한 웹 기반 일정관리 시스템",
      "MS-SQL 데이터베이스 설계 및 구현",
      "국회의원 업무 특성을 반영한 맞춤형 시스템",
      "Visual Studio 개발환경 활용"
    ]
  },
  {
    id: "6",
    title: "KT커머스 B2B 고도화작업",
    description: "KT커머스의 B2B 전자상거래 플랫폼 고도화 프로젝트를 수행했습니다.",
    longDescription: "KT커머스의 B2B 전자상거래 플랫폼의 성능 향상 및 기능 개선을 위한 고도화 프로젝트입니다. 기업 고객을 대상으로 한 대량 주문 처리, 견적 관리, 계약 관리 등의 기능을 개선했습니다.",
    technologies: ["Java", "Oracle", "Eclipse", "EJB", "Unix", "Linux"],
    category: "E-commerce",
    status: "completed",
    company: "KT커머스",
    projectType: "SI",
    imageUrl: "/images/projects/kt-commerce-b2b.svg",
    startDate: "2008-10-01",
    endDate: "2009-01-31",
    highlights: [
      "B2B 전자상거래 플랫폼 성능 최적화",
      "EJB를 활용한 엔터프라이즈 애플리케이션 개발",
      "대량 주문 처리 시스템 구현",
      "기업 고객 맞춤형 견적 및 계약 관리 기능",
      "Oracle 데이터베이스 튜닝 및 최적화"
    ]
  },
  {
    id: "7",
    title: "KT커머스 B2C 고도화작업",
    description: "KT커머스의 B2C 전자상거래 플랫폼 고도화 프로젝트를 수행했습니다.",
    longDescription: "KT커머스의 B2C 전자상거래 플랫폼의 사용자 경험 개선 및 성능 최적화를 위한 고도화 프로젝트입니다. 일반 소비자 대상의 온라인 쇼핑몰 기능을 개선했습니다.",
    technologies: ["Java", "Oracle", "Eclipse", "EJB", "Unix", "Linux"],
    category: "E-commerce",
    status: "completed",
    company: "KT커머스",
    projectType: "SI",
    imageUrl: "/images/projects/kt-commerce-b2c.svg",
    startDate: "2008-09-01",
    endDate: "2008-10-31",
    highlights: [
      "B2C 전자상거래 플랫폼 사용자 경험 개선",
      "EJB 기반 확장 가능한 아키텍처 구현",
      "상품 검색 및 추천 시스템 최적화",
      "결제 시스템 안정성 향상",
      "모바일 대응을 위한 반응형 웹 구현"
    ]
  },
  {
    id: "8",
    title: "외환은행 6Sigma 2차",
    description: "외환은행의 6시그마 품질관리 시스템 2차 구축 프로젝트를 담당했습니다.",
    longDescription: "외환은행의 6시그마 품질관리 시스템 2차 구축 프로젝트입니다. 은행 업무 프로세스의 품질 향상과 오류 감소를 위한 시스템을 Spring Framework 기반으로 개발했습니다.",
    technologies: ["Java", "Oracle", "Eclipse", "Spring Framework", "Unix", "Linux"],
    category: "Financial System",
    status: "completed",
    company: "외환은행",
    projectType: "SI",
    imageUrl: "/images/projects/keb-sixsigma.svg",
    startDate: "2008-06-01",
    endDate: "2008-09-30",
    highlights: [
      "금융권 6시그마 품질관리 시스템 구축",
      "Spring Framework를 활용한 엔터프라이즈 애플리케이션",
      "은행 업무 프로세스 최적화 시스템",
      "품질 지표 모니터링 및 분석 기능",
      "금융권 보안 요구사항 준수"
    ]
  },
  {
    id: "9",
    title: "LS전선 6Sigma 구축",
    description: "LS전선의 6시그마 품질관리 시스템 구축 프로젝트를 수행했습니다.",
    longDescription: "LS전선의 6시그마 품질관리 시스템 구축 프로젝트입니다. 제조업체의 생산 품질 향상과 불량률 감소를 위한 체계적인 품질관리 시스템을 Spring Framework 기반으로 개발했습니다.",
    technologies: ["Java", "Oracle", "Eclipse", "Spring Framework", "Unix", "Linux"],
    category: "Manufacturing System",
    status: "completed",
    company: "LS전선",
    projectType: "SI",
    imageUrl: "/images/projects/ls-cable.svg",
    startDate: "2008-01-01",
    endDate: "2008-06-30",
    highlights: [
      "제조업 특화 6시그마 품질관리 시스템 구축",
      "Spring Framework 기반 확장 가능한 아키텍처",
      "생산 품질 데이터 실시간 수집 및 분석",
      "불량률 감소를 위한 통계적 품질관리",
      "제조 공정 최적화 지원 시스템"
    ]
  },
  {
    id: "10",
    title: "SKTelecom PMS (Process Management System)",
    description: "SK텔레콤의 프로세스 관리 시스템 구축 및 운영 프로젝트를 담당했습니다.",
    longDescription: "SK텔레콤의 프로세스 관리 시스템(PMS) 구축 프로젝트입니다. 통신사의 복잡한 업무 프로세스를 체계적으로 관리하고 최적화하기 위한 시스템을 Spring Framework 기반으로 개발했습니다.",
    technologies: ["Java", "Oracle", "Eclipse", "Spring Framework", "Unix", "Linux"],
    category: "Telecommunications",
    status: "completed",
    company: "SKTelecom",
    projectType: "SI",
    imageUrl: "/images/projects/skt-pms.svg",
    startDate: "2007-06-01",
    endDate: "2008-12-31",
    featured: true,
    highlights: [
      "통신사 특화 프로세스 관리 시스템 구축",
      "Spring Framework를 활용한 엔터프라이즈 시스템",
      "복잡한 통신 업무 프로세스 자동화",
      "워크플로우 엔진을 통한 업무 효율성 향상",
      "대용량 트랜잭션 처리를 위한 성능 최적화"
    ]
  }
] as const