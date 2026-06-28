import Link from 'next/link'
import Image from 'next/image'
import {
  Brain,
  Briefcase,
  Rocket,
  Boxes,
  Workflow,
  GraduationCap,
  ArrowRight,
  Award,
  MapPin,
} from 'lucide-react'
import { Reveal, Stagger, StaggerItem } from '@/components/reveal'
import { SectionHeading } from '@/components/section'
import { whyWorkWithMe, timeline, certificationsTier1 } from '@/lib/content'

const whyIcons = [Briefcase, Brain, Rocket, Boxes, Workflow, GraduationCap]

export function WhoIAm() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <SectionHeading label="Who I Am" title="An AI builder with a business mindset" />
        <Reveal className="space-y-5 text-pretty text-lg leading-relaxed text-muted-foreground">
          <p>
            My journey started with curiosity in Data Science and grew into building practical AI
            systems that people and businesses can actually use.
          </p>
          <p>
            I believe technology should solve real problems, and that AI should empower people
            rather than replace them. My focus areas are{' '}
            <span className="text-foreground">Healthcare AI</span>,{' '}
            <span className="text-foreground">Business Intelligence</span>, and{' '}
            <span className="text-foreground">Automation</span>.
          </p>
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 text-sm font-medium text-primary"
          >
            More about my philosophy
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

export function WhyWorkWithMe() {
  return (
    <section className="border-y border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
        <SectionHeading
          label="Why Work With Me"
          title="Why organizations choose builders instead of just developers"
          description="Modern businesses don't need more code. They need solutions. Instead of asking 'Which framework should we use?', I first ask 'What problem are we trying to solve?'"
        />

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyWorkWithMe.map((item, i) => {
            const Icon = whyIcons[i % whyIcons.length]
            return (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-2xl glass-panel p-6 antigravity-hover hover:border-primary/40">
                  <span className="grid size-10 place-items-center rounded-xl border border-border bg-secondary text-primary">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}

export function ExperienceHighlight() {
  const item = timeline[0]
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <SectionHeading
          label="Experience"
          title="Hands-on with real business data"
          description="From ERP data to Power BI dashboards — turning raw data into decisions."
        />
        <Reveal>
          <div className="rounded-2xl border border-border bg-card/50 p-7">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold">{item.role}</h3>
                <p className="text-sm text-primary">{item.org} · {item.location}</p>
              </div>
              <span className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-muted-foreground">
                {item.period}
              </span>
            </div>
            <ul className="mt-5 space-y-2.5">
              {item.points.slice(0, 4).map((p) => (
                <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  {p}
                </li>
              ))}
            </ul>
            <Link
              href="/experience"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary"
            >
              See full experience &amp; journey
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function CertificationsHighlight() {
  return (
    <section className="border-y border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            label="Certifications"
            title="Deliberate, applied learning"
            description="A curated set of credentials in AI agents, RAG, multiagent systems, and analytics."
          />
          <Link
            href="/certifications"
            className="group inline-flex shrink-0 items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-card"
          >
            View all
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certificationsTier1.slice(0, 4).map((c) => (
            <StaggerItem key={c.title}>
              <div className="h-full rounded-2xl glass-panel p-5 antigravity-hover hover:border-primary/40">
                <Award className="size-5 text-primary" />
                <h3 className="mt-4 text-sm font-semibold leading-snug">{c.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{c.issuer}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

export function AboutPreview() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
      <Reveal className="relative overflow-hidden rounded-3xl border border-border bg-card/50 p-8 sm:p-12">
        <div aria-hidden className="glow-blue absolute -left-10 -top-10 size-72 rounded-full" />
        <div className="relative flex flex-col md:flex-row md:items-center gap-8">
          <div className="shrink-0">
            <Image 
              src="/my-image/profile.jpg" 
              alt="Hamza Siddiqui" 
              width={160} 
              height={160} 
              className="rounded-full border border-border bg-card/60 object-cover shadow-2xl" 
            />
          </div>
          <div>
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4 text-primary" />
              Based in UAE · Available in UAE, India &amp; Remote
            </span>
          <h2 className="mt-5 max-w-2xl text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
            Calm, honest, and business-minded. I build AI that empowers people, not replaces them.
          </h2>
          <Link
            href="/about"
            className="group mt-7 inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-card"
          >
            Read my story
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export function ContactCta() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-8 pt-0 lg:px-8">
      <Reveal className="relative overflow-hidden rounded-3xl border border-primary/30 bg-primary/10 p-10 text-center sm:p-16">
        <div aria-hidden className="glow-blue absolute inset-0" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Let&apos;s build something that solves a real problem.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Interested in discussing AI, Data Analytics, Business Intelligence, or Automation? I&apos;d
            be happy to connect.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground antigravity-hover"
            >
              Start a conversation
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background/60 px-6 py-3 text-sm font-medium text-foreground antigravity-hover"
            >
              Download Resume
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
