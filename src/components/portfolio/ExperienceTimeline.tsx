import { Calendar, MapPin, Building } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Experience } from '@/types/portfolio'

interface ExperienceTimelineProps {
  experiences: readonly Experience[]
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long'
    })
  }

  const calculateDuration = (startDate: string, endDate?: string) => {
    const start = new Date(startDate)
    const end = endDate ? new Date(endDate) : new Date()
    const months = (end.getFullYear() - start.getFullYear()) * 12 + 
                   (end.getMonth() - start.getMonth())
    
    if (months < 12) {
      return `${months}개월`
    } else {
      const years = Math.floor(months / 12)
      const remainingMonths = months % 12
      return remainingMonths > 0 ? `${years}년 ${remainingMonths}개월` : `${years}년`
    }
  }

  return (
    <div className="space-y-6">
      {experiences.map((experience, index) => (
        <div key={experience.id} className="relative">
          {/* 타임라인 라인 */}
          {index < experiences.length - 1 && (
            <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-border -translate-x-0.5" />
          )}
          
          {/* 타임라인 포인트 */}
          <div className="absolute left-6 top-6 w-3 h-3 bg-primary rounded-full -translate-x-1.5 border-2 border-background" />
          
          {/* 경험 카드 */}
          <Card className="ml-16">
            <CardContent className="pt-6">
              <div className="space-y-4">
                {/* 헤더 */}
                <div className="space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">{experience.title}</h3>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Building className="w-4 h-4" />
                        <span className="font-medium">{experience.company}</span>
                        {experience.location && (
                          <>
                            <span>•</span>
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-3 h-3" />
                              <span className="text-sm">{experience.location}</span>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    
                    {experience.current && (
                      <Badge variant="default" className="shrink-0">
                        현재
                      </Badge>
                    )}
                  </div>
                  
                  {/* 날짜 및 기간 */}
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {formatDate(experience.startDate)} - {' '}
                        {experience.current ? '현재' : formatDate(experience.endDate!)}
                      </span>
                    </div>
                    <span>•</span>
                    <span>{calculateDuration(experience.startDate, experience.endDate)}</span>
                  </div>
                </div>

                {/* 설명 */}
                <p className="text-muted-foreground leading-relaxed">
                  {experience.description}
                </p>

                {/* 주요 성과 */}
                {experience.achievements && experience.achievements.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">주요 성과</h4>
                    <ul className="space-y-1">
                      {experience.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start text-sm text-muted-foreground">
                          <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* 기술 스택 */}
                {experience.technologies && experience.technologies.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">사용 기술</h4>
                    <div className="flex flex-wrap gap-1">
                      {experience.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  )
}