// 성능 모니터링을 위한 Web Vitals 리포터
interface WebVitalMetric {
  name: string
  value: number
  id: string
}

export function reportWebVitals(metric: WebVitalMetric) {
  if (process.env.NODE_ENV === 'production') {
    // 프로덕션에서만 실행
    const { name, value, id } = metric;
    
    // Google Analytics로 전송하는 경우
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
      const gtag = (window as unknown as { gtag: (...args: unknown[]) => void }).gtag;
      gtag('event', name, {
        event_category: 'Web Vitals',
        event_label: id,
        value: Math.round(name === 'CLS' ? value * 1000 : value),
        non_interaction: true,
      });
    }
    
    // 개발 중에는 콘솔에 출력
    console.log(`[Web Vitals] ${name}:`, value);
  }
}

// Core Web Vitals 임계값
export const WEB_VITALS_THRESHOLDS = {
  // Largest Contentful Paint (LCP) - 2.5초 이하가 Good
  LCP: { good: 2500, poor: 4000 },
  
  // First Input Delay (FID) - 100ms 이하가 Good  
  FID: { good: 100, poor: 300 },
  
  // Cumulative Layout Shift (CLS) - 0.1 이하가 Good
  CLS: { good: 0.1, poor: 0.25 },
  
  // First Contentful Paint (FCP) - 1.8초 이하가 Good
  FCP: { good: 1800, poor: 3000 },
  
  // Time to First Byte (TTFB) - 800ms 이하가 Good
  TTFB: { good: 800, poor: 1800 }
};
