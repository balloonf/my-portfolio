import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Skill } from '@/types/portfolio'

interface SkillBadgeProps {
  skill: Skill
  showLevel?: boolean
  variant?: 'default' | 'detailed' | 'simple'
}

const categoryColors = {
  frontend: 'bg-blue-500/10 text-blue-700 dark:text-blue-300',
  backend: 'bg-green-500/10 text-green-700 dark:text-green-300',
  mobile: 'bg-purple-500/10 text-purple-700 dark:text-purple-300',
  devops: 'bg-orange-500/10 text-orange-700 dark:text-orange-300',
  database: 'bg-red-500/10 text-red-700 dark:text-red-300',
  other: 'bg-gray-500/10 text-gray-700 dark:text-gray-300',
}

const levelProgress = {
  beginner: 25,
  intermediate: 50,
  advanced: 75,
  expert: 100,
}

export function SkillBadge({ skill, showLevel = false, variant = 'default' }: SkillBadgeProps) {
  const colorClass = skill.color || categoryColors[skill.category]

  if (variant === 'detailed') {
    return (
      <div className="p-4 border rounded-lg space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-medium">{skill.name}</h3>
          <Badge variant="outline" className={colorClass}>
            {skill.category}
          </Badge>
        </div>
        
        {showLevel && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">숙련도</span>
              <span className="capitalize">{skill.level}</span>
            </div>
            <Progress value={levelProgress[skill.level]} className="h-2" />
          </div>
        )}
        
        {skill.experience && (
          <p className="text-sm text-muted-foreground">
            경험: {skill.experience}
          </p>
        )}
      </div>
    )
  }

  return (
    <Badge 
      variant="secondary" 
      className={`${colorClass} transition-colors hover:opacity-80`}
    >
      {skill.name}
      {showLevel && (
        <span className="ml-1 text-xs opacity-70">
          ({skill.level})
        </span>
      )}
    </Badge>
  )
}