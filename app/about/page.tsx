import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { HeartPulse, BarChart3, Workflow, Compass, Shield, Trophy, ArrowRight, MapPin } from 'lucide-react'
import { PageHero } from '@/components/section'
import { Reveal, Stagger, StaggerItem } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Hamza Siddiqui — Data Science Graduate, Data Analyst, and Automation Builder. Dedicated to building practical, data-driven systems and automations.',
}

const stats = [
  { value: '5+', label: 'Projects Built' },
  { value: '10+', label: 'Certifications' },
  { value: '6mo', label: 'Industry Experience' },
  { value: '2', label: 'Flagship Products' },
]

const journey = [
  { year: '2023', title: 'Curiosity Begins', body: 'Started exploring Data Science, statistics, and the fundamentals of machine learning.' },
  { year: '2023–24', title: 'First Industry Experience', body: 'Interned as a Data Analyst at Sahil Dresses — transforming ERP data into Power BI dashboards.' },
  { year: '2024', title: 'Building AGMIS', body: 'Designed and built a full academic intelligence platform from the ground up.' },
  { year: '2025', title: 'Voice Agent Automation', body: 'Created a conversational agent for real estate lead qualification using prompt engineering.' },
  { year: 'Now', title: 'Building Practical Automations', body: 'Building practical data systems, automation pipelines, and analytics solutions that businesses can use.' },
]

const focus = [
  { icon: HeartPulse, title: 'Healthcare Intelligence', body: 'Turning clinical and operational data into earlier, safer decisions.' },
  { icon: BarChart3, title: 'Business Intelligence', body: 'Making data understandable and actionable for the people who decide.' },
  { icon: Workflow, title: 'Automation', body: 'Removing repetitive manual work so people can focus on what matters.' },
]

const principles = [
  { icon: Compass, title: 'Solve real problems', body: 'Technology should serve a clear purpose, not exist for its own sake.' },
  { icon: Shield, title: 'Empower, not replace', body: 'Technology should make people more capable — not push them out.' },
  { icon: Trophy, title: 'Discipline & consistency', body: 'NCC and state-level basketball shaped how I show up and follow through.' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About"
        title="I build data-driven systems and practical automations"
        description="From curiosity in Data Science to building functional analytics pipelines and automations that businesses can actually use."
      />

      {/* Profile + Bio */}
      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[auto_1fr] lg:items-start">
          <Reveal>
            <div className="flex flex-col items-center gap-4">
              <div className="profile-glow rounded-full">
                <Image
                  src="/assets/profile/profile-main.jpg"
                  alt="Hamza Siddiqui"
                  width={200}
                  height={200}
                  className="rounded-full border-2 border-primary/20 object-cover shadow-2xl"
                />
              </div>
              <div className="text-center">
                <p className="font-semibold">Hamza Siddiqui</p>
                <p className="text-sm text-muted-foreground">Data Science Graduate · Data Analyst</p>
                <span className="mt-2 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="size-3 text-primary" />
                  UAE · India · Remote
                </span>
              </div>
            </div>
          </Reveal>
          
          <Reveal className="space-y-5 text-pretty text-lg leading-relaxed text-muted-foreground" delay={0.1}>
            <p>
              I started with a simple curiosity about data — how numbers could explain behavior and
              guide better decisions. That curiosity grew into a conviction: the real value of technology
              isn&apos;t in complex algorithms, it&apos;s in the problems it solves for people and businesses.
            </p>
            <p>
              So I stopped just studying Data Science and started building it. I now build data-driven
              applications, practical automation workflows, and analytics dashboards — from voice automations to
              academic intelligence platforms — always anchored to a practical outcome.
            </p>
            <p>
              I believe technology should solve real problems and that technology should empower people, not
              replace them. I&apos;m calm, honest, and business-minded — more interested in shipping
              something useful than in chasing hype.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-card/30">
        <div className="mx-auto max-w-6xl px-5 py-12 lg:px-8">
          <Stagger className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="stat-card rounded-2xl glass-panel p-6 text-center antigravity-hover">
                  <p className="text-3xl font-bold tracking-tight text-gradient-static">{stat.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
        <Reveal>
          <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            My Journey
          </h2>
        </Reveal>
        <div className="relative mt-8">
          <div aria-hidden className="absolute left-[19px] top-2 bottom-2 w-px bg-border" />
          <div className="space-y-6">
            {journey.map((step, i) => (
              <Reveal key={step.year} delay={i * 0.06}>
                <div className="relative flex gap-5">
                  <span className="relative z-[1] grid size-10 shrink-0 place-items-center rounded-xl border border-border bg-card text-xs font-bold text-primary">
                    {step.year.length > 4 ? '→' : step.year.slice(-2)}
                  </span>
                  <div className="flex-1 rounded-2xl glass-panel p-5 antigravity-hover hover:border-primary/40">
                    <div className="flex flex-wrap items-baseline gap-3">
                      <h3 className="text-base font-semibold">{step.title}</h3>
                      <span className="rounded-full border border-border bg-secondary px-2.5 py-0.5 text-[10px] text-muted-foreground">
                        {step.year}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Focus areas */}
      <section className="border-y border-border bg-card/30">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
          <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Where I focus
          </h2>
          <Stagger className="mt-8 grid gap-5 sm:grid-cols-3">
            {focus.map((f) => {
              const Icon = f.icon
              return (
                <StaggerItem key={f.title}>
                  <div className="h-full rounded-2xl glass-panel p-6 antigravity-hover hover:border-primary/40">
                    <span className="grid size-10 place-items-center rounded-xl border border-border bg-secondary text-primary">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mt-5 text-base font-semibold">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                  </div>
                </StaggerItem>
              )
            })}
          </Stagger>
        </div>
      </section>

      {/* Principles */}
      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
        <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
          What I believe
        </h2>
        <Stagger className="mt-8 grid gap-5 sm:grid-cols-3">
          {principles.map((p) => {
            const Icon = p.icon
            return (
              <StaggerItem key={p.title}>
                <div className="h-full rounded-2xl glass-panel p-6 antigravity-hover hover:border-primary/40">
                  <span className="grid size-10 place-items-center rounded-xl border border-border bg-secondary text-primary">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </StaggerItem>
            )
          })}
        </Stagger>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-16 lg:px-8">
        <Reveal className="relative overflow-hidden rounded-3xl border border-primary/30 bg-primary/10 p-10 text-center sm:p-12">
          <div aria-hidden className="glow-blue absolute inset-0" />
          <div className="relative">
            <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
              Want to work together?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              I&apos;m always open to discussing Data Science, data systems, automation, and interesting problems.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Get in touch
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background/60 px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-card"
              >
                View my work
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}
