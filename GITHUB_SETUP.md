# GitHub API 연동 가이드

이 가이드는 GitHub API를 통해 블로그 포스트를 자동으로 가져오는 설정 방법을 안내합니다.

## 1. GitHub Personal Access Token 생성

1. GitHub에 로그인 후 Settings → Developer settings → Personal access tokens → Tokens (classic) 이동
2. "Generate new token (classic)" 클릭
3. 토큰 설정:
   - **Note**: `Blog Portfolio Token` (또는 원하는 이름)
   - **Expiration**: 원하는 기간 설정
   - **Scopes**: `public_repo` 체크 (public 저장소 접근용)
4. "Generate token" 클릭 후 토큰 복사 (한 번만 표시됨)

## 2. 블로그 저장소 설정

### 옵션 1: 별도 저장소 생성 (권장)
```
your-username/blog-posts
├── posts/
│   ├── first-post.md
│   ├── second-post.md
│   └── ...
└── README.md
```

### 옵션 2: 기존 저장소 활용
기존 저장소에 `posts` 폴더를 만들어 사용할 수 있습니다.

## 3. 마크다운 파일 형식

각 블로그 포스트는 다음과 같은 frontmatter를 포함해야 합니다:

```markdown
---
title: "포스트 제목"
date: "2025-01-01"
tags: ["React", "Next.js"]
excerpt: "포스트 요약 (선택사항)"
author: "작성자 이름 (선택사항)"
published: true
---

# 포스트 내용

여기에 마크다운 내용을 작성합니다...
```

## 4. 환경변수 설정

프로젝트 루트에 `.env.local` 파일을 생성하고 다음 내용을 추가:

```bash
# GitHub API 설정
GITHUB_TOKEN=your_github_personal_access_token_here
NEXT_PUBLIC_GITHUB_USERNAME=your_github_username
NEXT_PUBLIC_GITHUB_REPO=your_blog_repo_name
NEXT_PUBLIC_BLOG_FOLDER=posts
```

### 환경변수 설명
- `GITHUB_TOKEN`: 생성한 Personal Access Token
- `NEXT_PUBLIC_GITHUB_USERNAME`: GitHub 사용자명
- `NEXT_PUBLIC_GITHUB_REPO`: 블로그 포스트가 있는 저장소명
- `NEXT_PUBLIC_BLOG_FOLDER`: 마크다운 파일이 있는 폴더명 (기본값: posts)

## 5. 배포 시 환경변수 설정

### Vercel
1. 프로젝트 Settings → Environment Variables
2. 위의 환경변수들을 추가
3. `GITHUB_TOKEN`은 모든 환경에서 필요

### 다른 플랫폼
각 배포 플랫폼의 환경변수 설정 방법에 따라 추가

## 6. 테스트

1. 개발 서버 실행: `npm run dev`
2. `/blog` 페이지에서 포스트 목록 확인
3. 개별 포스트 클릭하여 내용 표시 확인

## 7. 캐싱

- 포스트는 1시간마다 자동 갱신됩니다 (revalidate: 3600)
- 메모리 캐시로 5분간 빠른 응답 제공
- 수동 캐시 무효화 방법: 서버 재시작

## 8. 문제 해결

### API 호출 제한
- GitHub API는 시간당 5000회 호출 제한 (인증된 요청)
- 개발 중에는 캐시를 활용하여 API 호출 최소화

### 토큰 권한 오류
- `public_repo` 권한이 있는지 확인
- 토큰이 올바르게 설정되었는지 확인

### 포스트가 보이지 않는 경우
- frontmatter 형식이 올바른지 확인
- `published: false`로 설정되지 않았는지 확인
- 파일이 `.md` 확장자인지 확인