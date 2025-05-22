import { Github, Mail, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/config/site'

const socialLinks = [
  { href: siteConfig.contact.github, label: 'GitHub', icon: Github },
  { href: siteConfig.contact.linkedin, label: 'LinkedIn', icon: Linkedin },
  { href: `mailto:${siteConfig.contact.email}`, label: 'Email', icon: Mail },
]

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="flex flex-col items-center space-y-2 md:items-start">
            <p className="text-sm text-muted-foreground">
              © 2025 {siteConfig.profile.name}. 모든 권리 보유.
            </p>
            <p className="text-xs text-muted-foreground">
              Next.js, Tailwind CSS, shadcn/ui로 제작
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <Button
                  key={link.href}
                  variant="ghost"
                  size="sm"
                  asChild
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </Button>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}