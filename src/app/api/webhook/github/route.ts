import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import crypto from 'crypto'

// GitHub Webhook payload 타입 정의
interface GitHubCommit {
  added?: string[]
  modified?: string[]
  removed?: string[]
}

interface GitHubWebhookPayload {
  action?: string
  commits?: GitHubCommit[]
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const signature = request.headers.get('x-hub-signature-256')
    const webhookSecret = process.env.GITHUB_WEBHOOK_SECRET

    // GitHub Webhook 서명 검증 (보안)
    if (webhookSecret && signature) {
      const expectedSignature = 'sha256=' + crypto
        .createHmac('sha256', webhookSecret)
        .update(body)
        .digest('hex')

      if (signature !== expectedSignature) {
        console.error('❌ Invalid GitHub webhook signature')
        return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
      }
    }

    const payload: GitHubWebhookPayload = JSON.parse(body)
    
    // push 이벤트인지 확인
    if (payload.action || request.headers.get('x-github-event') === 'push') {
      // 블로그 폴더의 파일이 변경되었는지 확인
      const blogFolder = process.env.NEXT_PUBLIC_BLOG_FOLDER || 'posts'
      const hasBlogChanges = payload.commits?.some((commit: GitHubCommit) => 
        commit.added?.some((file: string) => file.startsWith(blogFolder)) ||
        commit.modified?.some((file: string) => file.startsWith(blogFolder)) ||
        commit.removed?.some((file: string) => file.startsWith(blogFolder))
      ) || true // 확실하지 않으면 항상 갱신

      if (hasBlogChanges) {
        // 블로그 관련 경로 재검증
        revalidatePath('/blog')
        revalidatePath('/blog/[slug]', 'page')
        
        console.log('✅ Blog updated via GitHub webhook, cache revalidated')
        
        return NextResponse.json({ 
          revalidated: true,
          timestamp: new Date().toISOString(),
          message: 'Blog cache updated via GitHub webhook',
          commits: payload.commits?.length || 0
        })
      }
    }

    return NextResponse.json({ 
      message: 'Webhook received but no blog changes detected' 
    })

  } catch (error) {
    console.error('❌ GitHub webhook error:', error)
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    )
  }
}

