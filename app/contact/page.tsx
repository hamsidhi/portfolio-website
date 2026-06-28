import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail, Phone, FileText, MapPin } from 'lucide-react'
import { Github, Linkedin } from '@/components/icons'
import { PageHero } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { ContactForm } from '@/components/contact-form'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Hamza Siddiqui to discuss AI, Data Analytics, Business Intelligence, or Automation. Available in the UAE, India, and remote.',
}

const contactItems = [
  { icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: 'India', value: site.phoneIndia, href: `tel:${site.phoneIndia.replace(/\s/g, '')}` },
  { icon: Phone, label: 'UAE', value: site.phoneUae, href: `tel:${site.phoneUae.replace(/\s/g, '')}` },
  { icon: Github, label: 'GitHub', value: 'github.com/hamsidhi', href: site.github, external: true },
  { icon: Linkedin, label: 'LinkedIn', value: 'in/hamza-siddiqui--', href: site.linkedin, external: true },
  { icon: FileText, label: 'Resume', value: 'View interactive resume', href: '/resume' },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Let's connect"
        description="Interested in discussing AI, Data Analytics, Business Intelligence, or Automation? I'd be happy to connect."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <Reveal>
            <div className="rounded-3xl glass-panel p-6 sm:p-8">
              <h2 className="text-lg font-semibold">Send a message</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Tell me about your project or opportunity and I&apos;ll get back to you.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
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
                    <Link
                      key={item.label}
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      className="group flex items-center gap-4 rounded-2xl glass-panel p-4 antigravity-hover hover:border-primary/40"
                    >
                      <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-border bg-secondary text-primary">
                        <Icon className="size-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs uppercase tracking-wide text-muted-foreground">
                          {item.label}
                        </span>
                        <span className="block truncate text-sm font-medium text-foreground">
                          {item.value}
                        </span>
                      </span>
                    </Link>
                  )
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
