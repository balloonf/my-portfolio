import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function POST(request: NextRequest) {
  try {
    // Vercel 환경에서 보안을 위한 간단한 인증
    const authHeader = request.headers.get('authorization')
    const secret = process.env.REVALIDATE_SECRET || 'your-secret-key'
    
    if (authHeader !== `Bearer ${secret}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // 블로그 관련 경로 재검증
    revalidatePath('/blog')
    revalidatePath('/blog/[slug]', 'page')
    
    console.log('✅ Blog pages revalidated on Vercel')
    
    return NextResponse.json({ 
      revalidated: true,
      timestamp: new Date().toISOString(),
      message: 'Blog cache cleared successfully'
    })
  } catch (error) {
    console.error('❌ Revalidation error:', error)
    return NextResponse.json(
      { error: 'Failed to revalidate', details: error.message },
      { status: 500 }
    )
  }
}

// GET 요청도 지원 (브라우저에서 직접 접근 가능)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const secret = searchParams.get('secret')
    const expectedSecret = process.env.REVALIDATE_SECRET || 'your-secret-key'
    
    if (secret !== expectedSecret) {
      return NextResponse.json({ error: 'Invalid secret' }, { status: 401 })
    }

    // 블로그 관련 경로 재검증
    revalidatePath('/blog')
    revalidatePath('/blog/[slug]', 'page')
    
    console.log('✅ Blog pages revalidated via GET on Vercel')
    
    return NextResponse.json({ 
      revalidated: true,
      timestamp: new Date().toISOString(),
      message: 'Blog cache cleared via GET request'
    })
  } catch (error) {
    console.error('❌ GET revalidation error:', error)
    return NextResponse.json(
      { error: 'Failed to revalidate' },
      { status: 500 }
    )
  }
}
