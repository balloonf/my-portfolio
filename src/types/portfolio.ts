export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  technologies: readonly string[]
  category: string
  status: 'completed' | 'in-progress' | 'planning'
  githubUrl?: string
  demoUrl?: string
  imageUrl?: string
  startDate: string
  endDate?: string
  featured?: boolean
  highlights?: readonly string[]
}

export interface Experience {
  id: string
  title: string
  company: string
  location?: string
  startDate: string
  endDate?: string
  current?: boolean
  description: string
  achievements?: readonly string[]
  technologies?: readonly string[]
}

export interface Skill {
  name: string
  category: 'frontend' | 'backend' | 'mobile' | 'devops' | 'database' | 'other'
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  experience?: string // e.g., "2년"
  color?: string
}

export interface Education {
  id: string
  degree: string
  school: string
  location?: string
  startDate: string
  endDate?: string
  current?: boolean
  description?: string
  gpa?: string
  relevantCourses?: string[]
}