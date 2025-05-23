import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  subject?: string;
  message: string;
  phone?: string;
}

interface GoogleScriptResponse {
  success: boolean;
  error?: string;
  message?: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();
    
    // 데이터 유효성 검사
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { 
          success: false, 
          error: '필수 필드를 입력해주세요. (이름, 이메일, 메시지)' 
        },
        { status: 400 }
      );
    }

    // 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { 
          success: false, 
          error: '올바른 이메일 형식을 입력해주세요.' 
        },
        { status: 400 }
      );
    }

    // 메시지 길이 검증
    if (data.message.trim().length < 10) {
      return NextResponse.json(
        { 
          success: false, 
          error: '메시지는 최소 10자 이상 입력해주세요.'         },
        { status: 400 }
      );
    }

    // Google Apps Script 웹 앱 URL
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;
    
    if (!GOOGLE_SCRIPT_URL) {
      console.error('GOOGLE_SCRIPT_URL environment variable is not configured');
      return NextResponse.json(
        { 
          success: false, 
          error: '서버 설정 오류가 발생했습니다.' 
        },
        { status: 500 }
      );
    }

    // 전송할 데이터 정리
    const cleanedData = {
      name: data.name.trim(),
      email: data.email.trim(),
      company: data.company?.trim() || '',
      subject: data.subject?.trim() || '',
      message: data.message.trim(),
      phone: data.phone?.trim() || ''
    };

    console.log('Sending contact form data to Google Apps Script:', {
      name: cleanedData.name,
      email: cleanedData.email,
      hasCompany: !!cleanedData.company,
      hasSubject: !!cleanedData.subject,
      messageLength: cleanedData.message.length,
      hasPhone: !!cleanedData.phone
    });

    // Google Apps Script로 데이터 전송
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cleanedData),
    });

    if (!response.ok) {
      console.error('Google Apps Script response not ok:', response.status, response.statusText);
      return NextResponse.json(
        { 
          success: false, 
          error: '외부 서비스 연결 오류가 발생했습니다.' 
        },
        { status: 502 }
      );
    }
    const result: GoogleScriptResponse = await response.json();

    if (result.success) {
      console.log('Contact form successfully sent to Google Sheets');
      return NextResponse.json({
        success: true,
        message: result.message || '문의가 성공적으로 전송되었습니다.'
      });
    } else {
      console.error('Google Apps Script returned error:', result.error);
      return NextResponse.json(
        { 
          success: false, 
          error: result.error || '전송 중 오류가 발생했습니다.' 
        },
        { status: 400 }
      );
    }
    
  } catch (error) {
    console.error('Contact form API error:', error);
    
    // 네트워크 오류 처리
    if (error instanceof TypeError && error.message.includes('fetch')) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Google Apps Script 연결에 실패했습니다. 잠시 후 다시 시도해주세요.' 
        },
        { status: 503 }
      );
    }
    
    return NextResponse.json(
      { 
        success: false, 
        error: '서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.' 
      },
      { status: 500 }
    );
  }
}

// GET 요청 처리 (API 상태 확인용)
export async function GET() {
  return NextResponse.json({
    status: 'Contact API is running',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV
  });
}