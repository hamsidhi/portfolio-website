import Link from 'next/link'
import { Mail, FileText, ArrowUpRight } from 'lucide-react'
import { Github, Linkedin } from '@/components/icons'
import { Link001 } from '@/components/ui/skiper-ui/skiper40'
import { site } from '@/lib/site'

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
        <div className="rounded-2xl glass-panel p-8 sm:p-12">
          <p className="text-sm font-medium text-primary">Let&apos;s build something useful</p>
          <h2 className="mt-3 max-w-2xl text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
            Looking for someone who builds practical AI systems and understands the business behind them?
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground antigravity-hover"
            >
              Get in touch
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground antigravity-hover"
            >
              <FileText className="size-4" />
              View resume
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold">{site.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Made with curiosity, AI, and lots of coffee.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {[
              { label: 'GitHub', href: site.github, icon: Github, external: true },
              { label: 'LinkedIn', href: site.linkedin, icon: Linkedin, external: true },
              { label: 'Email', href: `mailto:${site.email}`, icon: Mail, external: true },
              { label: 'Resume', href: '/resume', icon: FileText, external: false },
            ].map((item) => {
              const Icon = item.icon
              return (
                <Link001
                  key={item.label}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
                >
                  <span className="flex items-center gap-1.5">
                    <Icon className="size-4" />
                    {item.label}
                  </span>
                </Link001>
              )
            })}
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {site.name} · {site.domain}
          </p>
        </div>
      </div>
    </footer>
  )
}
