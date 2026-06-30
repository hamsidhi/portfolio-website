import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Github, Linkedin } from '@/components/icons'
import { PageHero } from '@/components/section'
import { Reveal } from '@/components/reveal'
import { ResumeActions } from '@/components/resume-actions'
import { site } from '@/lib/site'
import { timeline, certificationsTier1, techSkills } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Resume',
  description:
    'Interactive resume of Hamza Siddiqui — AI Engineer, Data Analyst, and Automation Builder. Download or print a clean copy.',
}

const summary =
  'AI Engineer and Automation Builder who builds practical AI products, intelligent voice agents, and data analytics platforms. I translate business problems into production-ready AI solutions across applied ML, RAG systems, prompt engineering, and business intelligence.'

const technicalAreas = [
  { label: 'AI & ML', items: 'Applied AI, Prompt Engineering, RAG, Agents, NLP' },
  { label: 'Data & Analytics', items: 'Power BI, Excel, Data Cleaning, ERP Data' },
  { label: 'Engineering', items: 'Python, FastAPI, PostgreSQL, GitHub' },
  { label: 'Practice', items: 'Automation, Product Thinking, Business Intelligence' },
]

export default function ResumePage() {
  return (
    <>
      <PageHero
        label="Resume"
        title="Interactive Resume"
        description="A focused snapshot of who I am, what I have built, and the value I bring. Download or print a clean copy any time."
      />

      <section className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
        <Reveal className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">{site.name}</h2>
            <p className="mt-1 text-muted-foreground">{site.identity}</p>
          </div>
          <ResumeActions />
        </Reveal>

        <Reveal>
          <article className="rounded-2xl glass-panel p-6 sm:p-10 print:border-0 print:bg-transparent print:p-0">
            {/* Contact row */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 border-b border-border pb-6 text-sm text-muted-foreground">
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 hover:text-foreground">
                <Mail className="size-4" aria-hidden="true" /> {site.email}
              </a>
              <span className="inline-flex items-center gap-2">
                <Phone className="size-4" aria-hidden="true" /> {site.phoneUae}
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="size-4" aria-hidden="true" /> UAE · India · Remote
              </span>
              <a href={site.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-foreground">
                <Github className="size-4" aria-hidden="true" /> hamsidhi
              </a>
              <a href={site.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-foreground">
                <Linkedin className="size-4" aria-hidden="true" /> hamza-siddiqui
              </a>
            </div>

            {/* Summary */}
            <div className="mt-8">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Professional Summary
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{summary}</p>
            </div>

            {/* Experience */}
            <div className="mt-8">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Experience &amp; Journey
              </h3>
              <div className="mt-4 flex flex-col gap-5">
                {timeline.map((item) => (
                  <div key={`${item.role}-${item.org}`}>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <p className="font-medium text-foreground">
                        {item.role} <span className="text-muted-foreground">· {item.org}</span>
                      </p>
                      <p className="text-sm text-muted-foreground">{item.period}</p>
                    </div>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical areas */}
            <div className="mt-8">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Technical Areas
              </h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {technicalAreas.map((area) => (
                  <div key={area.label}>
                    <p className="font-medium text-foreground">{area.label}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{area.items}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {techSkills.map((tech) => (
                  <span
                    key={tech.name}
                    className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="mt-8">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Certifications Overview
              </h3>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {certificationsTier1.map((cert) => (
                  <li key={cert.title} className="text-sm text-muted-foreground">
                    <span className="text-foreground">{cert.title}</span> · {cert.issuer}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </Reveal>

        <Reveal className="mt-10 flex flex-col items-center gap-3 text-center print:hidden">
          <p className="text-sm text-muted-foreground">
            Prefer to talk it through? I&apos;m open to AI Engineering opportunities.
          </p>
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Let&apos;s Connect
          </Link>
        </Reveal>
      </section>
    </>
  )
}
