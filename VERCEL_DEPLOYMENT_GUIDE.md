# Vercel 배포 가이드

## 🚀 Vercel 배포 단계별 가이드

### 📋 사전 준비사항 체크리스트

#### ✅ 완료된 항목들
- [x] GitHub 레포지토리 생성 (my-portfolio)
- [x] GitHub 레포지토리 생성 (blog-posts)
- [x] 로컬 Git 커밋 완료
- [x] 프로덕션 빌드 테스트 완료
- [x] 모든 TypeScript/ESLint 오류 해결

#### ⏳ 진행 중인 항목들
- [ ] GitHub 레포지토리에 코드 푸시
- [ ] Vercel 계정 생성/로그인
- [ ] GitHub 연동 및 프로젝트 임포트
- [ ] 환경변수 설정
- [ ] 배포 실행

---

## 🔧 1단계: GitHub 레포지토리 푸시

### 메인 포트폴리오 레포지토리 푸시
```bash
cd D:\nodejs\blog\my-portfolio
git remote add origin https://github.com/balloonf/my-portfolio.git
git push -u origin main
```

### 블로그 포스트 레포지토리 푸시 (이미 원격 저장소 설정됨)
```bash
cd D:\nodejs\blog\blog-posts
git push -u origin main
```

---

## 🌐 2단계: Vercel 계정 설정

### Vercel 회원가입/로그인
1. **Vercel 웹사이트 접속**: https://vercel.com
2. **GitHub 계정으로 로그인**: "Continue with GitHub" 클릭
3. **권한 승인**: Vercel이 GitHub 레포지토리에 접근할 수 있도록 승인

### GitHub 연동 확인
- Vercel 대시보드에서 GitHub 계정이 연결되었는지 확인
- 필요시 추가 권한 부여

---

## 📦 3단계: 프로젝트 임포트

### New Project 생성
1. Vercel 대시보드에서 **"New Project"** 클릭
2. **Import Git Repository** 섹션에서 `my-portfolio` 레포지토리 선택
3. **Import** 클릭

### 프로젝트 설정
- **Framework Preset**: Next.js (자동 감지됨)
- **Root Directory**: `.` (기본값)
- **Build Command**: `npm run build` (자동 설정됨)
- **Output Directory**: `.next` (자동 설정됨)
- **Install Command**: `npm install` (자동 설정됨)

---

## 🔐 4단계: 환경변수 설정

### Vercel 환경변수 추가
프로젝트 설정 페이지에서 다음 환경변수들을 추가:

#### 필수 환경변수
```env
NEXT_PUBLIC_GITHUB_USERNAME=balloonf
NEXT_PUBLIC_GITHUB_REPO=blog-posts
NEXT_PUBLIC_BLOG_FOLDER=posts
```

#### 선택적 환경변수 (성능 향상용)
```env
GITHUB_TOKEN=your_personal_access_token_here
```

### 환경변수 설정 방법
1. 프로젝트 설정 → **Environment Variables** 탭
2. **Name**과 **Value** 입력
3. **All Environments** 선택 (Production, Preview, Development 모두 적용)
4. **Add** 클릭

---

## 🚀 5단계: 배포 실행

### 첫 배포
1. 환경변수 설정 완료 후 **"Deploy"** 클릭
2. 빌드 과정 모니터링 (약 2-5분 소요)
3. 배포 완료 후 생성된 URL 확인

### 배포 URL 확인
- **임시 URL**: `https://my-portfolio-balloonf.vercel.app` (예시)
- **프로덕션 URL**: 커스텀 도메인 설정 시 변경 가능

---

## 🔄 6단계: 자동 배포 설정

### GitHub Integration 설정
- **Production Branch**: `main` (기본 설정됨)
- **Auto-deploy**: 기본 활성화됨
- **Preview Branches**: 모든 브랜치 (선택사항)

### 배포 트리거
- `main` 브랜치에 푸시할 때마다 자동 배포
- Pull Request 생성 시 Preview 배포
- 블로그 포스트 추가 시 자동 재배포 (ISR 덕분에)

---

## 🌍 7단계: 커스텀 도메인 설정 (선택사항)

### 도메인 연결
1. 프로젝트 설정 → **Domains** 탭
2. **Add** 클릭하여 도메인 입력
3. DNS 설정 안내에 따라 도메인 제공업체에서 설정

### 권장 도메인 예시
- `balloonf.dev`
- `balloonf.me`
- `balloonf-portfolio.com`

### DNS 설정 (도메인 보유 시)
```
Type: CNAME
Name: www (또는 @)
Value: cname.vercel-dns.com
```

---

## 📊 8단계: 성능 및 모니터링 설정

### Vercel Analytics (선택사항)
1. 프로젝트 설정 → **Analytics** 탭
2. **Enable Analytics** 클릭
3. 트래픽 및 성능 데이터 모니터링

### Speed Insights
1. 프로젝트 설정 → **Speed Insights** 탭
2. **Enable Speed Insights** 클릭
3. Core Web Vitals 모니터링

---

## 🔧 9단계: 고급 설정

### Build & Deployment 최적화
```json
// vercel.json (프로젝트 루트에 생성, 선택사항)
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install",
  "functions": {
    "app/api/**/*.ts": {
      "maxDuration": 30
    }
  },
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options", 
          "value": "nosniff"
        }
      ]
    }
  ]
}
```

### ISR (Incremental Static Regeneration) 설정
```typescript
// 이미 설정됨 (src/app/blog/page.tsx)
export const revalidate = 3600; // 1시간마다 재검증
```

---

## 🚨 트러블슈팅

### 일반적인 문제들

#### 1. 빌드 실패
```bash
# 로컬에서 빌드 테스트
npm run build
```
- 로컬에서 빌드 성공하면 Vercel에서도 성공해야 함

#### 2. 환경변수 문제
- Vercel 환경변수 설정 재확인
- `NEXT_PUBLIC_` 접두사 확인
- 대소문자 정확성 확인

#### 3. GitHub API 연동 문제
- Personal Access Token 유효성 확인
- 블로그 레포지토리 Public 설정 확인
- 레포지토리 이름 및 경로 확인

#### 4. 도메인 연결 문제
- DNS 전파 시간 (최대 48시간)
- CNAME 레코드 정확성 확인
- SSL 인증서 자동 생성 대기

---

## 📋 배포 후 체크리스트

### 필수 확인 사항
- [ ] 메인 페이지 정상 로딩
- [ ] 포트폴리오 페이지 정상 표시
- [ ] 블로그 페이지 정상 로딩 (fallback 데이터)
- [ ] 다크/라이트 모드 정상 동작
- [ ] 모바일 반응형 정상 동작
- [ ] SEO 메타데이터 정상 확인

### 성능 확인
- [ ] Google PageSpeed Insights 테스트
- [ ] Lighthouse 점수 확인
- [ ] Core Web Vitals 확인

### 기능 확인
- [ ] 네비게이션 정상 동작
- [ ] 테마 토글 정상 동작
- [ ] 이미지 로딩 확인 (placeholder)
- [ ] 폰트 로딩 확인

---

## 🎯 성공 기준

### 배포 성공 지표
- ✅ 빌드 성공 (초록색 체크마크)
- ✅ 배포 URL 접근 가능
- ✅ 모든 페이지 정상 로딩
- ✅ 반응형 디자인 정상 동작
- ✅ 다크모드 정상 동작

### 성능 목표
- 🎯 Lighthouse Performance: 90+ 점
- 🎯 First Contentful Paint: 1.5초 이하
- 🎯 Largest Contentful Paint: 2.5초 이하
- 🎯 Cumulative Layout Shift: 0.1 이하

---

## 📞 지원 및 문서

### Vercel 공식 문서
- **Next.js 배포**: https://vercel.com/docs/frameworks/nextjs
- **환경변수 설정**: https://vercel.com/docs/projects/environment-variables
- **커스텀 도메인**: https://vercel.com/docs/projects/domains

### GitHub API 관련
- **Personal Access Token**: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token
- **Repository API**: https://docs.github.com/en/rest/repos

---

**🚀 준비 완료! 위 단계를 순서대로 따라하시면 성공적으로 배포됩니다.**
