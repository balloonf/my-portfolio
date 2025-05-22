import { SkillBadge } from './SkillBadge'
import { Skill } from '@/types/portfolio'

interface SkillsGridProps {
  skills: readonly Skill[]
  variant?: 'simple' | 'detailed'
  groupByCategory?: boolean
}

const categoryNames = {
  frontend: '프론트엔드',
  backend: '백엔드',
  mobile: '모바일',
  devops: 'DevOps',
  database: '데이터베이스',
  other: '기타',
}

export function SkillsGrid({ 
  skills, 
  variant = 'simple', 
  groupByCategory = false 
}: SkillsGridProps) {
  if (!groupByCategory) {
    return (
      <div className={`grid gap-4 ${
        variant === 'detailed' 
          ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
          : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
      }`}>
        {skills.map((skill) => (
          <SkillBadge 
            key={skill.name} 
            skill={skill} 
            variant={variant}
            showLevel={variant === 'detailed'}
          />
        ))}
      </div>
    )
  }

  // 카테고리별 그룹화
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {} as Record<string, Skill[]>)

  return (
    <div className="space-y-8">
      {Object.entries(groupedSkills).map(([category, categorySkills]) => (
        <div key={category} className="space-y-4">
          <h3 className="text-lg font-semibold">
            {categoryNames[category as keyof typeof categoryNames] || category}
          </h3>
          
          {variant === 'simple' ? (
            <div className="flex flex-wrap gap-2">
              {categorySkills.map((skill) => (
                <SkillBadge key={skill.name} skill={skill} />
              ))}
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {categorySkills.map((skill) => (
                <SkillBadge 
                  key={skill.name} 
                  skill={skill} 
                  variant="detailed"
                  showLevel
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}