import { ExternalLink, Github, Calendar, Star } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Project } from '@/types/portfolio'
import Image from 'next/image'

interface ProjectCardProps {
  project: Project
  variant?: 'default' | 'featured'
}

export function ProjectCard({ project, variant = 'default' }: ProjectCardProps) {
  const isFeatured = variant === 'featured' || project.featured

  return (
    <Card className={`h-full hover:shadow-lg transition-all duration-300 ${
      isFeatured ? 'ring-2 ring-primary/20 border-primary/20' : ''
    }`}>
      {/* 프로젝트 이미지 */}
      {project.imageUrl && (
        <div className="relative overflow-hidden rounded-t-lg">
          <Image 
            src={project.imageUrl} 
            alt={project.title}
            width={400}
            height={200}
            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
          />
          {isFeatured && (
            <div className="absolute top-2 right-2">
              <Badge variant="default" className="bg-primary">
                <Star className="w-3 h-3 mr-1" />
                추천
              </Badge>
            </div>
          )}
        </div>
      )}

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h3 className={`font-semibold leading-tight ${
              isFeatured ? 'text-xl' : 'text-lg'
            }`}>
              {project.title}
            </h3>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Badge variant="outline" className="text-xs">
                {project.category}
              </Badge>
              <span className="capitalize">{project.status}</span>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1">
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* 하이라이트 */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-medium mb-2">주요 특징</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              {project.highlights.slice(0, 3).map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* 기술 스택 */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium">기술 스택</h4>
          <div className="flex flex-wrap gap-1">
            {project.technologies.slice(0, 6).map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 6 && (
              <Badge variant="outline" className="text-xs">
                +{project.technologies.length - 6}개
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-4">
        <div className="flex items-center justify-between w-full">
          {/* 날짜 정보 */}
          <div className="flex items-center text-xs text-muted-foreground">
            <Calendar className="w-3 h-3 mr-1" />
            <span>
              {new Date(project.startDate).getFullYear()}
              {project.endDate && ` - ${new Date(project.endDate).getFullYear()}`}
            </span>
          </div>

          {/* 링크 버튼 */}
          <div className="flex space-x-2">
            {project.githubUrl && (
              <Button size="sm" variant="outline" asChild>
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub 저장소"
                >
                  <Github className="w-4 h-4" />
                </a>
              </Button>
            )}
            {project.demoUrl && (
              <Button size="sm" variant="outline" asChild>
                <a 
                  href={project.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="라이브 데모"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}