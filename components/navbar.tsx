'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X, Download } from 'lucide-react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { navLinks, site } from '@/lib/site'
import { ThemeToggle } from '@/components/theme-toggle'

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-[3px] z-50 transition-all duration-500',
        scrolled
          ? 'bg-background/60 backdrop-blur-xl border-b border-border'
          : 'bg-transparent border-b border-transparent',
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:px-8"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-sm font-semibold tracking-tight"
        >
          <span className="grid size-8 place-items-center rounded-lg border border-border bg-secondary/30 p-1 backdrop-blur-sm">
            <Image src="/logo/logo.png" alt="Logo" width={24} height={24} className="h-auto w-auto" />
          </span>
          <span className="hidden sm:inline text-foreground">{site.name}</span>
        </Link>

        <div className="hidden items-center gap-0.5 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'relative rounded-lg px-3.5 py-2 text-sm transition-colors',
                isActive(link.href)
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              {link.label}
              {isActive(link.href) && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-x-2 -bottom-px h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          {/* Live Indicator */}
          <div className="hidden sm:flex items-center gap-1.5 rounded-full border border-accent-3/20 bg-accent-3/5 px-2.5 py-1 text-[11px] font-medium text-accent-3 select-none">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-3 opacity-75" />
              <span className="relative inline-flex size-1.5 rounded-full bg-accent-3" />
            </span>
            Live · Jul 2026
          </div>
          <ThemeToggle />
          <Link
            href="/resume"
            className="hidden items-center gap-1.5 rounded-lg border border-accent-1/30 bg-accent-1/10 px-3.5 py-2 text-sm font-medium text-accent-1 transition-all hover:bg-accent-1/20 hover:border-accent-1/40 md:inline-flex btn-glow"
          >
            <Download className="size-3.5" />
            Resume
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="grid size-9 place-items-center rounded-lg border border-border bg-secondary/30 text-foreground md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'rounded-lg px-3 py-3 text-base transition-colors',
                    isActive(link.href)
                      ? 'bg-secondary/30 text-foreground'
                      : 'text-muted-foreground hover:bg-secondary/30 hover:text-foreground',
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/resume"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg border border-blue-500/30 bg-blue-500/10 px-4 py-3 text-base font-medium text-blue-400"
              >
                <Download className="size-4" />
                Resume
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
