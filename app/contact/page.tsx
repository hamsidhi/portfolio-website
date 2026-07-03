'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, Phone, FileText, MapPin, Copy, Check, Download } from 'lucide-react'
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
      className="relative z-10 grid size-8 place-items-center rounded-lg border border-border bg-secondary/80 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
      aria-label={`Copy ${text}`}
    >
      {copied ? <Check className="size-3.5 text-emerald-400" /> : <Copy className="size-3.5" />}
    </button>
  )
}

export default function ContactPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div aria-hidden className="glow-blue absolute -top-40 left-1/2 size-[520px] -translate-x-1/2 rounded-full" />
        <div className="bg-dot-grid absolute inset-0 opacity-[0.12]" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-32 lg:px-8 lg:pt-36">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.21, 0.5, 0.25, 1] }}
            className="flex flex-col gap-5"
          >
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-primary">
              <span className="h-px w-6 bg-primary/50" />
              Contact
            </span>
            <h1 className="max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
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
              <h2 className="text-lg font-semibold">Send a message</h2>
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
                  <MapPin className="size-4 text-primary" />
                  Available for opportunities in the UAE, India, and remote.
                </span>
              </div>

              <div className="grid gap-3">
                {contactItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.label} className="relative">
                      <Link
                        href={item.href}
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noopener noreferrer' : undefined}
                        className="group flex items-center gap-4 rounded-2xl glass-panel p-4 antigravity-hover hover:border-primary/40"
                      >
                        <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-border bg-secondary text-primary">
                          <Icon className="size-5" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-xs uppercase tracking-wide text-muted-foreground">
                            {item.label}
                          </span>
                          <span className="block truncate text-sm font-medium text-foreground">
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
                <a
                  href="/resume/Hamza_Siddiqui_UAE_CV.pdf"
                  download="Hamza_Siddiqui_UAE_CV.pdf"
                  className="group flex items-center gap-3 rounded-2xl glass-panel p-4 antigravity-hover hover:border-primary/40"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-border bg-primary/10 text-primary">
                    <Download className="size-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-wide text-muted-foreground">
                      Download
                    </span>
                    <span className="block text-sm font-medium text-foreground">
                      UAE Resume
                    </span>
                  </span>
                </a>
                <a
                  href="/resume/Hamza_Siddiqui_India_CV.pdf"
                  download="Hamza_Siddiqui_India_CV.pdf"
                  className="group flex items-center gap-3 rounded-2xl glass-panel p-4 antigravity-hover hover:border-primary/40"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-border bg-primary/10 text-primary">
                    <Download className="size-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-wide text-muted-foreground">
                      Download
                    </span>
                    <span className="block text-sm font-medium text-foreground">
                      India Resume
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
