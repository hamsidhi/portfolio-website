import Link from 'next/link'
import { Mail, FileText } from 'lucide-react'
import { Github, Linkedin } from '@/components/icons'
import { site } from '@/lib/site'

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
        <div className="rounded-2xl glass-panel p-8 sm:p-12">
          <p className="text-sm font-medium text-primary">Let&apos;s build something useful</p>
          <h2 className="mt-3 max-w-2xl text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
            Looking for an AI Engineer who builds practical, production-ready systems?
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
              AI Engineer · Data Analyst · Automation Builder
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {[
              { label: 'GitHub', href: site.github, icon: Github, external: true },
              { label: 'LinkedIn', href: site.linkedin, icon: Linkedin, external: true },
              { label: 'Email', href: `mailto:${site.email}`, icon: Mail, external: true },
              { label: 'Resume', href: '/resume', icon: FileText, external: false },
            ].map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="group inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary/5 hover:text-foreground"
                >
                  <Icon className="size-4" />
                  {item.label}
                </Link>
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
