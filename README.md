# Portfolio Website

balloonf의 개인 포트폴리오 웹사이트입니다. Next.js 15, React 19, TypeScript로 구축되었습니다.

## 주요 기능

- 🎨 **모던한 디자인**: Tailwind CSS와 Radix UI 컴포넌트
- 🌙 **다크모드 지원**: 시스템 테마 연동
- 📱 **반응형 디자인**: 모바일과 데스크톱 최적화
- 📊 **포트폴리오 섹션**: 실제 프로젝트 경험 소개
- 📝 **GitHub 블로그 연동**: 마크다운 기반 블로그
- 📧 **연락 폼**: Google Sheets 연동 문의 시스템
- 🔍 **SEO 최적화**: 메타데이터 및 소셜 미디어 최적화

## 시작하기

### 1. 환경 설정

`.env.local.example` 파일을 복사하여 `.env.local` 파일을 생성하고 환경변수를 설정하세요:

```bash
cp .env.local.example .env.local
```

### 2. 환경변수 설정

#### GitHub 블로그 연동 (선택사항)
```env
GITHUB_TOKEN=your_github_personal_access_token_here
NEXT_PUBLIC_GITHUB_USERNAME=your_github_username
NEXT_PUBLIC_GITHUB_REPO=your_blog_repo_name
NEXT_PUBLIC_BLOG_FOLDER=posts
```

#### 사이트 설정
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_SITE_NAME=Your_Site_Name
```

#### 연락 폼 설정
```env
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```
### 3. 개발 서버 실행

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

## 연락 폼 설정

연락 폼이 작동하려면 Google Apps Script를 설정해야 합니다:

1. **Google Sheets 생성**: 문의 데이터를 저장할 스프레드시트 생성
2. **Google Apps Script 설정**: 폼 데이터를 처리할 스크립트 작성
3. **웹 앱 배포**: 스크립트를 웹 앱으로 배포하여 URL 획득
4. **환경변수 설정**: 획득한 URL을 `GOOGLE_SCRIPT_URL`에 설정

자세한 설정 방법은 `docs/` 폴더의 가이드를 참조하세요.

## 개인화

포트폴리오를 개인화하려면 다음 파일을 수정하세요:

- `src/config/site.ts`: 개인 정보, 프로젝트, 경력 등
- `public/images/`: 프로필 사진, 프로젝트 이미지 등
- `public/files/`: 이력서 PDF 등

## 스크립트

```bash
npm run dev        # 개발 서버 실행
npm run build      # 프로덕션 빌드
npm run start      # 프로덕션 서버 실행
npm run lint       # ESLint 실행
npm run analyze    # 번들 분석
```

## 배포

### Vercel (권장)

1. GitHub 저장소에 푸시
2. [Vercel](https://vercel.com)에서 프로젝트 import
3. 환경변수 설정
4. 배포 완료

### 기타 플랫폼

- Netlify
- AWS Amplify
- GitHub Pages (정적 빌드)

## 기술 스택

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, Radix UI
- **Icons**: Lucide React
- **Content**: Markdown, Gray Matter
- **Deployment**: Vercel

## 라이선스

MIT License

## 지원

문의사항이 있으시면 포트폴리오의 연락 폼을 이용해주세요.