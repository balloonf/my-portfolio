// 환경변수 검증 및 설정 확인
export function validateGitHubConfig(): {
  isValid: boolean
  missingVars: string[]
  warnings: string[]
} {
  const requiredVars = [
    'NEXT_PUBLIC_GITHUB_USERNAME',
    'NEXT_PUBLIC_GITHUB_REPO',
  ]

  const missingVars: string[] = []
  const warnings: string[] = []

  // 필수 변수 확인
  for (const varName of requiredVars) {
    if (!process.env[varName]) {
      missingVars.push(varName)
    }
  }

  // 선택적 변수 확인
  if (!process.env.GITHUB_TOKEN) {
    warnings.push('GITHUB_TOKEN이 설정되지 않아 fallback 데이터를 사용합니다.')
  }

  if (!process.env.NEXT_PUBLIC_BLOG_FOLDER) {
    warnings.push('NEXT_PUBLIC_BLOG_FOLDER가 설정되지 않아 기본값 "posts"를 사용합니다.')
  }

  return {
    isValid: missingVars.length === 0,
    missingVars,
    warnings
  }
}

// 개발 모드에서 설정 상태 출력
export function logGitHubConfigStatus() {
  if (process.env.NODE_ENV === 'development') {
    const config = validateGitHubConfig()
    
    console.log('🔧 GitHub API 설정 상태:')
    console.log(`✓ Username: ${process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'NOT SET'}`)
    console.log(`✓ Repository: ${process.env.NEXT_PUBLIC_GITHUB_REPO || 'NOT SET'}`)
    console.log(`✓ Blog Folder: ${process.env.NEXT_PUBLIC_BLOG_FOLDER || 'posts (default)'}`)
    console.log(`✓ Token: ${process.env.GITHUB_TOKEN ? 'SET' : 'NOT SET'}`)
    
    if (config.warnings.length > 0) {
      console.log('⚠️  경고:')
      config.warnings.forEach(warning => console.log(`   ${warning}`))
    }
    
    if (!config.isValid) {
      console.log('❌ 누락된 필수 환경변수:')
      config.missingVars.forEach(varName => console.log(`   ${varName}`))
    }
  }
}