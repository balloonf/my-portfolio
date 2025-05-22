import { Metadata } from 'next'
import { ProjectCard } from '@/components/portfolio/ProjectCard'
import { SkillsGrid } from '@/components/portfolio/SkillsGrid'
import { ExperienceTimeline } from '@/components/portfolio/ExperienceTimeline'
import { StatsCard } from '@/components/portfolio/StatsCard'
import { StructuredData } from '@/components/seo/StructuredData'
import { Button } from '@/components/ui/button'
import { Github, Mail, Download, Code, Briefcase, Award, TrendingUp } from 'lucide-react'
import { siteConfig, skills, experiences, projects } from '@/config/site'

export const metadata: Metadata = {
  title: '포트폴리오',
  description: siteConfig.description,
  keywords: siteConfig.seo.keywords,
  openGraph: {
    title: `포트폴리오 | ${siteConfig.name}`,
    description: siteConfig.description,
    type: 'website',
  },
}

export default function PortfolioPage() {
  const featuredProjects = projects.slice(0, 2) // 처음 2개를 featured로 간주
  const allProjects = projects

  return (
    <>
      <StructuredData type="portfolio" />
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Hero Section */}
        <section className="text-center section-spacing">
          <div className="space-y-6">
            <h1 className="heading-responsive">포트폴리오</h1>
            <p className="body-responsive text-muted-foreground max-w-2xl mx-auto">
              {siteConfig.profile.bio}
            </p>
          </div>
          
          {/* 통계 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mt-8">
            <StatsCard 
              title="완료 프로젝트" 
              value={siteConfig.stats.projectsCompleted} 
              icon={<Code className="w-5 h-5 md:w-6 md:h-6" />}
            />
            <StatsCard 
              title="개발 경험" 
              value={siteConfig.stats.yearsExperience} 
              icon={<TrendingUp className="w-5 h-5 md:w-6 md:h-6" />}
            />
            <StatsCard 
              title="사용 기술" 
              value={siteConfig.stats.technologiesUsed} 
              icon={<Award className="w-5 h-5 md:w-6 md:h-6" />}
            />
            <StatsCard 
              title="오픈소스 기여" 
              value={siteConfig.stats.openSourceContributions} 
              icon={<Github className="w-5 h-5 md:w-6 md:h-6" />}
            />
          </div>
          
          <div className="flex-responsive-center mt-8">
            <Button asChild className="hover-lift">
              <a href="#projects">
                <Code className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">프로젝트 보기</span>
                <span className="sm:hidden">프로젝트</span>
              </a>
            </Button>
            <Button variant="outline" asChild className="hover-lift">
              <a href="#experience">
                <Briefcase className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">경험</span>
                <span className="sm:hidden">경험</span>
              </a>
            </Button>
            <Button variant="outline" asChild className="hover-lift">
              <a href="#skills">
                <Award className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">기술 스택</span>
                <span className="sm:hidden">기술</span>
              </a>
            </Button>
          </div>
        </section>
        {/* Featured Projects */}
        <section id="projects" className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">주요 프로젝트</h2>
            <p className="text-muted-foreground">특별히 자랑하고 싶은 프로젝트들입니다</p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} variant="featured" />
            ))}
          </div>
        </section>

        {/* All Projects */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">모든 프로젝트</h2>
            <p className="text-muted-foreground">지금까지 작업한 프로젝트들을 확인해보세요</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {allProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">기술 스택</h2>
            <p className="text-muted-foreground">현재 사용하고 있는 기술들입니다</p>
          </div>
          
          <SkillsGrid skills={skills} variant="detailed" groupByCategory />
        </section>

        {/* Experience Section */}
        <section id="experience" className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">경험</h2>
            <p className="text-muted-foreground">지금까지의 개발 여정입니다</p>
          </div>
          
          <ExperienceTimeline experiences={experiences} />
        </section>

        {/* Contact Section */}
        <section className="bg-muted/50 rounded-lg p-8 text-center space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">함께 작업하고 싶으신가요?</h2>
            <p className="text-muted-foreground">
              새로운 프로젝트나 협업 기회가 있다면 언제든 연락주세요!
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild>
              <a href={`mailto:${siteConfig.contact.email}`}>
                <Mail className="w-4 h-4 mr-2" />
                이메일 보내기
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href={siteConfig.contact.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub 방문
              </a>
            </Button>
            {siteConfig.profile.resume && (
              <Button variant="outline" asChild>
                <a href={siteConfig.profile.resume} target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4 mr-2" />
                  이력서 다운로드
                </a>
              </Button>
            )}
          </div>
        </section>

      </div>
    </div>
    </>
  )
}