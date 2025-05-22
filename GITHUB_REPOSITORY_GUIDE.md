# GitHub 레포지토리 설정 가이드

## 📋 필요한 GitHub 레포지토리

### 1. 메인 포트폴리오 레포지토리
**권장 이름**: `my-portfolio` 또는 `{username}.github.io`

**용도**: 
- 포트폴리오 웹사이트 소스코드
- Vercel 배포 연동

**설정 방법**:
1. GitHub에서 새 레포지토리 생성
2. Public으로 설정 (무료 Vercel 배포를 위해)
3. README.md는 체크하지 않기 (이미 있음)

### 2. 블로그 포스트 레포지토리
**권장 이름**: `blog-posts` 또는 `{username}-blog`

**용도**:
- 마크다운 블로그 포스트 저장
- GitHub API를 통해 자동으로 웹사이트에 표시

**구조**:
```
blog-posts/
├── posts/
│   ├── 2024-12-01-hello-world.md
│   ├── 2024-12-15-react-tips.md
│   └── 2024-12-20-nextjs-guide.md
└── README.md
```

## 🚀 실행할 명령어들

### 메인 포트폴리오 레포지토리 연결
```bash
# 현재 디렉토리: D:\nodejs\blog\my-portfolio

# 1. GitHub에서 레포지토리 생성 후 URL 복사
# 2. 원격 저장소 추가
git remote add origin https://github.com/balloonf/my-portfolio.git

# 3. 메인 브랜치 푸시
git push -u origin main
```

### 블로그 포스트 레포지토리 생성
```bash
# 새 디렉토리에서 실행
mkdir blog-posts
cd blog-posts
git init
git branch -m main

# posts 디렉토리 생성
mkdir posts

# 샘플 포스트 생성
echo "---
title: \"Hello World\"
date: \"2024-12-01\"
tags: [\"intro\", \"blog\"]
published: true
---

# 안녕하세요!

이것은 첫 번째 블로그 포스트입니다." > posts/2024-12-01-hello-world.md

# README 생성
echo "# 블로그 포스트

이 레포지토리에는 포트폴리오 사이트의 블로그 포스트들이 저장됩니다.

## 포스트 작성 방법

1. \`posts/\` 디렉토리에 \`YYYY-MM-DD-title.md\` 형식으로 파일 생성
2. Front matter (메타데이터) 작성:
   - title: 포스트 제목
   - date: 작성 날짜
   - tags: 태그 배열
   - published: 공개 여부 (true/false)
3. 마크다운 내용 작성
4. Git에 커밋 및 푸시

## 자동 연동

포트폴리오 사이트가 GitHub API를 통해 자동으로 이 레포지토리의 포스트들을 가져와 표시합니다." > README.md

# 커밋 및 푸시
git add .
git commit -m "feat: Initialize blog posts repository with sample post"
git remote add origin https://github.com/balloonf/blog-posts.git
git push -u origin main
```

## 🔧 환경변수 설정

포트폴리오 사이트의 `.env.local` 파일에서 다음 값들을 설정:

```env
# GitHub 설정 (공개 정보)
NEXT_PUBLIC_GITHUB_USERNAME=balloonf
NEXT_PUBLIC_GITHUB_REPO=blog-posts
NEXT_PUBLIC_BLOG_FOLDER=posts

# GitHub API 토큰 (선택사항, rate limit 증가용)
GITHUB_TOKEN=your_personal_access_token_here
```

### GitHub Personal Access Token 생성 방법
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. "Generate new token (classic)" 클릭
3. Note: "Portfolio Blog Access"
4. Expiration: 1 year
5. Scopes: `public_repo` 또는 `repo` (private인 경우) 선택
6. "Generate token" 클릭
7. 토큰을 복사하여 `.env.local`에 추가

## 📝 다음 단계

1. **GitHub 레포지토리 생성**
   - 메인 포트폴리오용 레포지토리 생성
   - 블로그 포스트용 레포지토리 생성

2. **로컬에서 원격 저장소 연결**
   ```bash
   git remote add origin [레포지토리 URL]
   git push -u origin main
   ```

3. **환경변수 설정**
   - `.env.local` 파일에 GitHub 정보 추가
   - Personal Access Token 설정 (선택사항)

4. **Vercel 배포 준비**
   - GitHub 레포지토리와 Vercel 연동
   - 환경변수를 Vercel에도 설정

## ⚠️ 주의사항

- `.env.local` 파일은 Git에 커밋되지 않습니다 (보안)
- Personal Access Token은 절대 공개하지 마세요
- 블로그 레포지토리는 Public으로 설정해야 API 접근 가능
- 메인 레포지토리도 Public으로 설정 (무료 Vercel 배포)

## 🔍 현재 상태

✅ Git 초기화 완료
✅ 로컬 커밋 완료 (58 files, 7,327 insertions)
✅ main 브랜치로 변경 완료
⏳ GitHub 원격 저장소 연결 대기
⏳ 블로그 레포지토리 생성 대기
