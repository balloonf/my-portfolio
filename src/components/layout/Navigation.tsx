"use client"

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Home, User, BookOpen, Github, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { cn } from '@/lib/utils'

import { siteConfig } from '@/config/site'

const navItems = [
  { href: '/', label: '홈', icon: Home },
  { href: '/portfolio', label: '포트폴리오', icon: User },
  { href: '/blog', label: '블로그', icon: BookOpen },
]

const socialLinks = [
  { href: siteConfig.contact.github, label: 'GitHub', icon: Github },
  { href: `mailto:${siteConfig.contact.email}`, label: 'Email', icon: Mail },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* 로고 */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600" />
              <span className="text-xl font-bold hidden sm:inline-block">
                {siteConfig.profile.name}
              </span>
            </Link>
          </div>

          {/* 데스크톱 네비게이션 */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}                  className={cn(
                    "flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary",
                    pathname === item.href
                      ? "text-primary bg-muted"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </div>

          {/* 소셜 링크 및 테마 토글 */}
          <div className="hidden md:flex md:items-center md:space-x-4">
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
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </Button>
              )
            })}
            <ThemeToggle />
          </div>

          {/* 모바일 메뉴 버튼 */}
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              aria-label="메뉴 토글"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        {/* 모바일 메뉴 */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium",
                      pathname === item.href
                        ? "text-primary bg-muted"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    )}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </Link>
                )
              })}
              
              <div className="pt-4 border-t">
                <div className="flex items-center space-x-4 px-3">
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
                        >
                          <Icon className="h-4 w-4" />
                        </a>
                      </Button>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}