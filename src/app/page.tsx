import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { StructuredData } from '@/components/seo/StructuredData'
import { ArrowRight, Code, User, BookOpen, Mail, MapPin } from 'lucide-react'
import { siteConfig } from '@/config/site'

export default function Home() {
  return (
    <>
      <StructuredData type="person" />
      <StructuredData type="website" />
      <div className="flex flex-col">
      {/* Hero Section */}
      <section className="section-spacing">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto text-center">
            <div className="element-spacing">
              <div className="relative avatar-responsive mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-primary/10 hover-glow">
                <Image
                  src={siteConfig.profile.avatar}
                  alt={siteConfig.profile.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h1 className="heading-responsive mb-4">
                안녕하세요, <br className="sm:hidden" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                  {siteConfig.profile.name}
                </span>입니다
              </h1>
              <p className="subheading-responsive text-muted-foreground mb-2">
                {siteConfig.profile.title}
              </p>
              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-6">
                <MapPin className="w-4 h-4" />
                <span className="text-sm sm:text-base">{siteConfig.profile.location}</span>
              </div>
              <p className="body-responsive text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {siteConfig.profile.bio}
              </p>
            </div>
            
            <div className="flex-responsive-center">
              <Button asChild size="lg" className="button-responsive hover-lift">
                <Link href="/portfolio">
                  <Code className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">포트폴리오 보기</span>
                  <span className="sm:hidden">포트폴리오</span>
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="button-responsive hover-lift">
                <Link href="/blog">
                  <BookOpen className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">블로그 읽기</span>
                  <span className="sm:hidden">블로그</span>
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="button-responsive hover-lift">
                <a href={siteConfig.contact.email}>
                  <Mail className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">연락하기</span>
                  <span className="sm:hidden">연락</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">주요 특징</h2>
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <Code className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">개발 프로젝트</h3>
                <p className="text-muted-foreground">
                  다양한 웹 개발 프로젝트와 오픈소스 기여 경험
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <BookOpen className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">기술 블로그</h3>
                <p className="text-muted-foreground">
                  개발 경험과 학습 과정을 기록하고 공유
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <User className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">지속적 성장</h3>
                <p className="text-muted-foreground">
                  새로운 기술 학습과 개인 발전을 위한 노력
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">기술 스택</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Python', 'Git'].map((tech) => (
                <Badge key={tech} variant="secondary" className="px-3 py-1 text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">함께 작업하고 싶으신가요?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            새로운 프로젝트나 협업 기회가 있다면 언제든 연락주세요.
          </p>
          <Button size="lg" asChild>
            <a href="mailto:contact@example.com">
              연락하기
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </section>
    </div>
    </>
  )
}