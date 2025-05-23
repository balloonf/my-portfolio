'use client';

import { useState } from 'react';
import { Mail, Phone, Building, User, MessageSquare, Send, AlertCircle, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
  phone: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    phone: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  // 이메일 유효성 검사
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  // 폼 유효성 검사
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = '이름을 입력해주세요.';
    }

    if (!formData.email.trim()) {
      newErrors.email = '이메일을 입력해주세요.';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = '올바른 이메일 형식을 입력해주세요.';
    }

    if (!formData.message.trim()) {
      newErrors.message = '메시지를 입력해주세요.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = '메시지는 최소 10자 이상 입력해주세요.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // 실시간 에러 제거
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: '문의가 성공적으로 전송되었습니다. 빠른 시일 내에 답변드리겠습니다.'
        });
        setFormData({
          name: '',
          email: '',
          company: '',
          subject: '',
          message: '',
          phone: ''
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || '전송 중 오류가 발생했습니다.'
        });
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message: '네트워크 오류가 발생했습니다. 다시 시도해주세요.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-spacing bg-gradient-to-br from-muted/30 to-muted/60 dark:from-muted/10 dark:to-muted/30">
      <div className="container-responsive">
        <div className="text-center element-spacing">
          <h2 className="heading-responsive text-foreground mb-4">
            연락하기
          </h2>
          <p className="body-responsive text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            프로젝트 문의나 협업 제안이 있으시면 언제든 연락주세요. 성심껏 답변드리겠습니다.
          </p>
        </div>

        <div className="bg-card dark:bg-card rounded-2xl shadow-xl hover-glow p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="form-responsive">            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label htmlFor="name" className="flex items-center text-sm font-medium text-foreground mb-3">
                  <User className="w-4 h-4 mr-2 text-primary" />
                  이름 *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`input-responsive border rounded-lg shadow-sm focus-ring dark-mode-transition ${
                    errors.name ? 'border-destructive' : 'border-border'
                  } bg-background text-foreground`}
                  placeholder="홍길동"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-destructive flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.name}
                  </p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="flex items-center text-sm font-medium text-foreground mb-3">
                  <Mail className="w-4 h-4 mr-2 text-primary" />
                  이메일 *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`input-responsive border rounded-lg shadow-sm focus-ring dark-mode-transition ${
                    errors.email ? 'border-destructive' : 'border-border'
                  } bg-background text-foreground`}
                  placeholder="hong@example.com"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-destructive flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.email}
                  </p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label htmlFor="company" className="flex items-center text-sm font-medium text-foreground mb-3">
                  <Building className="w-4 h-4 mr-2 text-primary" />
                  회사/조직
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="input-responsive border border-border rounded-lg shadow-sm focus-ring dark-mode-transition bg-background text-foreground"
                  placeholder="(주)테크컴퍼니"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="flex items-center text-sm font-medium text-foreground mb-3">
                  <Phone className="w-4 h-4 mr-2 text-primary" />
                  전화번호
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input-responsive border border-border rounded-lg shadow-sm focus-ring dark-mode-transition bg-background text-foreground"
                  placeholder="010-1234-5678"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="flex items-center text-sm font-medium text-foreground mb-3">
                <MessageSquare className="w-4 h-4 mr-2 text-primary" />
                제목
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="input-responsive border border-border rounded-lg shadow-sm focus-ring dark-mode-transition bg-background text-foreground"
                placeholder="프로젝트 협업 문의"
              />
            </div>
            <div>
              <label htmlFor="message" className="flex items-center text-sm font-medium text-foreground mb-3">
                <MessageSquare className="w-4 h-4 mr-2 text-primary" />
                메시지 *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className={`input-responsive border rounded-lg shadow-sm focus-ring dark-mode-transition resize-none ${
                  errors.message ? 'border-destructive' : 'border-border'
                } bg-background text-foreground`}
                placeholder="안녕하세요! 포트폴리오를 보고 연락드립니다..."
              />
              {errors.message && (
                <p className="mt-2 text-sm text-destructive flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.message}
                </p>
              )}
            </div>

            {submitStatus.type && (
              <div className={`p-4 rounded-lg flex items-center ${
                submitStatus.type === 'success' 
                  ? 'bg-green-50 text-green-800 border border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800' 
                  : 'bg-red-50 text-red-800 border border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800'
              }`}>
                {submitStatus.type === 'success' ? (
                  <CheckCircle className="w-5 h-5 mr-2" />
                ) : (
                  <AlertCircle className="w-5 h-5 mr-2" />
                )}
                {submitStatus.message}
              </div>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-primary-foreground font-medium button-responsive rounded-lg dark-mode-transition focus-ring hover-lift flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground mr-2"></div>
                  전송 중...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  메시지 보내기
                </>
              )}
            </button>
          </form>
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            또는 직접 연락주세요
          </p>
          <div className="flex-responsive-center">
            <a 
              href="mailto:balloonf@gmail.com" 
              className="flex items-center text-primary hover:text-primary/80 dark-mode-transition hover-lift"
            >
              <Mail className="w-5 h-5 mr-2" />
              balloonf@gmail.com
            </a>
            <a 
              href="https://github.com/balloonf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-muted-foreground hover:text-foreground dark-mode-transition hover-lift"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}