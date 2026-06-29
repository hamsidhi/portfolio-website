import type { Metadata } from 'next'
import { HeartPulse, BarChart3, Workflow, Compass, Shield, Trophy } from 'lucide-react'
import { PageHero } from '@/components/section'
import { Reveal, Stagger, StaggerItem } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Hamza Siddiqui — from curiosity in data science to building practical, data-driven systems. Calm, honest, and business-minded.',
}

const focus = [
  { icon: HeartPulse, title: 'Healthcare AI', body: 'Turning clinical and operational data into earlier, safer decisions.' },
  { icon: BarChart3, title: 'Business Intelligence', body: 'Making data understandable and actionable for the people who decide.' },
  { icon: Workflow, title: 'Automation', body: 'Removing repetitive manual work so people can focus on what matters.' },
]

const principles = [
  { icon: Compass, title: 'Solve real problems', body: 'Technology should serve a clear purpose, not exist for its own sake.' },
  { icon: Shield, title: 'Empower, not replace', body: 'AI should make people more capable — not push them out.' },
  { icon: Trophy, title: 'Discipline & consistency', body: 'NCC and state-level basketball shaped how I show up and follow through.' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About"
        title="I build data-driven systems that solve real problems — and empower people"
        description="My journey went from curiosity in Data Science to building practical intelligent systems businesses can actually use."
      />

      <section className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
        <Reveal className="space-y-5 text-pretty text-lg leading-relaxed text-muted-foreground">
          <p>
            I started with a simple curiosity about data — how numbers could explain behavior and
            guide better decisions. That curiosity grew into a conviction: the real value of AI
            isn&apos;t in complex algorithms, it&apos;s in the problems they solve for people and businesses.
          </p>
          <p>
            So I stopped just studying Data Science and started building it. I now build data-driven
            applications, intelligent automation, and analytics dashboards — from voice agents to
            academic intelligence platforms — always anchored to a practical outcome.
          </p>
          <p>
            I believe technology should solve real problems and that data and AI should empower people, not
            replace them. I&apos;m calm, honest, and business-minded — more interested in shipping
            something useful than in chasing hype.
          </p>
        </Reveal>
      </section>

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
    </>
  )
}
