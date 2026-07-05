'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Copy, Check, Download, ExternalLink, Eye, FileText } from 'lucide-react'
import { Github, Linkedin } from '@/components/icons'
import { ContactForm } from '@/components/contact-form'
import { motion } from 'motion/react'
import { site } from '@/lib/site'

const contactItems = [
  { icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}`, copyable: true },
  { icon: Phone, label: 'UAE Phone', value: site.phoneUae, href: `tel:${site.phoneUae.replace(/\s/g, '')}`, copyable: true },
  { icon: Phone, label: 'India Phone', value: site.phoneIndia, href: `tel:${site.phoneIndia.replace(/\s/g, '')}`, copyable: true },
  { icon: Github, label: 'GitHub', value: 'github.com/hamsidhi', href: site.github, external: true },
  { icon: Linkedin, label: 'LinkedIn', value: 'in/hamza-siddiqui--', href: site.linkedin, external: true },
]

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="relative z-10 grid size-8 place-items-center rounded-lg border border-border bg-secondary/85 text-muted-foreground transition-all hover:bg-accent-1/10 hover:text-accent-1 cursor-pointer"
      aria-label={`Copy ${text}`}
    >
      {copied ? <Check className="size-3.5 text-accent-3" /> : <Copy className="size-3.5" />}
    </button>
  )
}

export default function ContactPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div aria-hidden className="glow-accent-1 absolute -top-40 left-1/2 size-[520px] -translate-x-1/2 rounded-full" />
        <div className="bg-dot-grid absolute inset-0 opacity-[0.12]" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-32 lg:px-8 lg:pt-36">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.21, 0.5, 0.25, 1] }}
            className="flex flex-col gap-5"
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent-1">
              <span className="h-px w-6 bg-accent-1/50" />
              Contact
            </span>
            <h1 className="max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl text-foreground">
              Let&apos;s connect
            </h1>
            <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Interested in discussing Data Science, Data Analytics, Business Intelligence, or Automation? I&apos;d be happy to connect.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.21, 0.5, 0.25, 1] }}
          >
            <div className="rounded-3xl glass-panel p-6 sm:p-8">
              <h2 className="text-lg font-semibold text-foreground">Send a message</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Tell me about your project or opportunity and I&apos;ll get back to you.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.21, 0.5, 0.25, 1] }}
          >
            <div className="space-y-4">
              <div className="rounded-2xl glass-panel p-5">
                <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="size-4 text-accent-1" />
                  Available for opportunities in the UAE, India, and remote.
                </span>
              </div>

              {/* World Map SVG arc animation */}
              <WorldMapAnimation />

              <div className="grid gap-3">
                {contactItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.label} className="relative">
                      <Link
                        href={item.href}
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noopener noreferrer' : undefined}
                        className="group flex items-center gap-4 rounded-2xl glass-panel p-4 antigravity-hover hover:border-accent-1/30 cursor-pointer"
                      >
                        <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-border bg-secondary text-accent-1">
                          <Icon className="size-5" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-xs uppercase tracking-wide text-muted-foreground">
                            {item.label}
                          </span>
                          <span className="block truncate text-sm font-medium text-foreground group-hover:text-accent-1 transition-colors">
                            {item.value}
                          </span>
                        </span>
                        {item.copyable && <CopyButton text={item.value} />}
                      </Link>
                    </div>
                  )
                })}
              </div>

              {/* Resume download */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="flex flex-col gap-3 rounded-2xl glass-panel p-4">
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-border bg-accent-1/10 text-accent-1">
                      <FileText className="size-5" />
                    </span>
                    <div className="min-w-0">
                      <span className="block text-xs uppercase tracking-wide text-muted-foreground">
                        UAE Option
                      </span>
                      <span className="block text-sm font-medium text-foreground">
                        UAE Resume
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href="/resume/Hamza_Siddiqui_UAE_CV.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-8 items-center justify-center gap-1 rounded-xl border border-border bg-background/50 text-xs font-medium text-foreground hover:bg-muted transition-colors cursor-pointer"
                    >
                      <Eye className="size-3.5" />
                      View
                    </a>
                    <a
                      href="/resume/Hamza_Siddiqui_UAE_CV.pdf"
                      download="Hamza_Siddiqui_UAE_CV.pdf"
                      className="inline-flex h-8 items-center justify-center gap-1 rounded-xl bg-primary text-xs font-medium text-primary-foreground hover:bg-primary/90 transition-colors cursor-pointer"
                    >
                      <Download className="size-3.5" />
                      Download
                    </a>
                  </div>
                </div>

                <div className="flex flex-col gap-3 rounded-2xl glass-panel p-4">
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-border bg-accent-2/10 text-accent-2">
                      <FileText className="size-5" />
                    </span>
                    <div className="min-w-0">
                      <span className="block text-xs uppercase tracking-wide text-muted-foreground">
                        India Option
                      </span>
                      <span className="block text-sm font-medium text-foreground">
                        India Resume
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href="/resume/Hamza_Siddiqui_India_CV.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-8 items-center justify-center gap-1 rounded-xl border border-border bg-background/50 text-xs font-medium text-foreground hover:bg-muted transition-colors cursor-pointer"
                    >
                      <Eye className="size-3.5" />
                      View
                    </a>
                    <a
                      href="/resume/Hamza_Siddiqui_India_CV.pdf"
                      download="Hamza_Siddiqui_India_CV.pdf"
                      className="inline-flex h-8 items-center justify-center gap-1 rounded-xl bg-primary text-xs font-medium text-primary-foreground hover:bg-primary/90 transition-colors cursor-pointer"
                    >
                      <Download className="size-3.5" />
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

function WorldMapAnimation() {
  return (
    <div className="rounded-2xl glass-panel p-5 overflow-hidden relative border border-border bg-card/45 flex flex-col justify-between">
      <div className="flex items-center gap-2 mb-2">
        <MapPin className="size-4 text-accent-1" />
        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Global Connectivity</span>
      </div>

      {/* Visual map container */}
      <div className="w-full h-[140px] relative mt-1 flex items-center justify-center select-none">
        <svg className="w-full h-full max-w-[340px]" viewBox="0 0 340 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Map background grids/dots */}
          <g opacity="0.15" fill="var(--muted-foreground)">
            {/* North America dots */}
            <circle cx="30" cy="30" r="1.5" /><circle cx="50" cy="40" r="1.5" /><circle cx="40" cy="60" r="1.5" />
            {/* Europe dots */}
            <circle cx="130" cy="25" r="1.5" /><circle cx="150" cy="35" r="1.5" /><circle cx="140" cy="45" r="1.5" />
            {/* Africa dots */}
            <circle cx="160" cy="85" r="1.5" /><circle cx="180" cy="105" r="1.5" />
            {/* East Asia / Australia dots */}
            <circle cx="280" cy="45" r="1.5" /><circle cx="300" cy="100" r="1.5" />
          </g>

          <defs>
            <linearGradient id="map-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--accent-1)" />
              <stop offset="100%" stopColor="var(--accent-2)" />
            </linearGradient>

            <filter id="glow-filter">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Dubai Node (Point A) */}
          <circle cx="120" cy="70" r="4" fill="var(--accent-1)" />
          <circle cx="120" cy="70" r="8" stroke="var(--accent-1)" strokeWidth="1" className="animate-ping opacity-60" />

          {/* Mira Road/Mumbai Node (Point B) */}
          <circle cx="210" cy="90" r="4" fill="var(--accent-2)" />
          <circle cx="210" cy="90" r="8" stroke="var(--accent-2)" strokeWidth="1" className="animate-ping opacity-60" />

          {/* Connection Arc path */}
          <path
            d="M 120 70 Q 165 40 210 90"
            fill="none"
            stroke="url(#map-grad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="animate-map-path"
            filter="url(#glow-filter)"
          />

          {/* Labels */}
          <text x="100" y="85" fill="var(--foreground)" fontSize="9" fontWeight="bold" textAnchor="end">Mumbai (IN)</text>
          <text x="230" y="105" fill="var(--foreground)" fontSize="9" fontWeight="bold" textAnchor="start">Dubai (UAE)</text>
        </svg>
      </div>

      <div className="text-center text-[10px] text-muted-foreground mt-2">
        Connecting operations across borders seamlessly.
      </div>
    </div>
  )
}
