'use client'

import Link from 'next/link'
import { Mail, FileText } from 'lucide-react'
import { motion } from 'motion/react'
import { Github, Linkedin } from '@/components/icons'
import { site } from '@/lib/site'

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
        {/* CTA Card */}
        <div className="rounded-2xl glass-panel p-8 sm:p-12">
          <p className="text-sm font-medium text-blue-400">Let&apos;s build something useful</p>
          <h2 className="mt-3 max-w-2xl text-balance text-2xl font-semibold tracking-[-0.02em] sm:text-3xl text-foreground">
            Looking for someone to build practical, data-driven systems and automations?
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-blue-600 shadow-lg shadow-blue-500/20 btn-glow"
            >
              Get in touch
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 rounded-lg glass-panel px-5 py-2.5 text-sm font-medium text-foreground transition-colors"
            >
              <FileText className="size-4" />
              View resume
            </Link>
          </div>
        </div>

        {/* Social links row */}
        <div className="mt-12 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-foreground">{site.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Data Science Graduate · Data Analyst · Automation Builder
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
                  className="group inline-flex items-center gap-1.5 rounded-lg glass-panel px-3 py-2 text-sm text-muted-foreground transition-all hover:border-blue-500/30 hover:bg-blue-500/5 hover:text-foreground"
                >
                  <Icon className="size-4" />
                  {item.label}
                </Link>
              )
            })}
          </div>
        </div>

        {/* Massive outlined name */}
        <div className="mt-16 overflow-hidden">
          <motion.h2
            className="text-outline text-center font-bold leading-none select-none cursor-default"
            style={{ fontSize: 'clamp(3rem, 10vw, 8rem)' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Hamza Siddiqui
          </motion.h2>
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
