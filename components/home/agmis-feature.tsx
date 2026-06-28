import Link from 'next/link'
import {
  GraduationCap,
  Users,
  ShieldCheck,
  Sparkles,
  Gauge,
  LineChart,
  ArrowRight,
} from 'lucide-react'
import { Reveal, Stagger, StaggerItem } from '@/components/reveal'
import { SectionLabel } from '@/components/section'

const features = [
  { icon: GraduationCap, label: 'Student Dashboard' },
  { icon: Users, label: 'Faculty Dashboard' },
  { icon: ShieldCheck, label: 'Principal Dashboard' },
  { icon: Sparkles, label: 'AI Guidance' },
  { icon: Gauge, label: 'Motivation Engine' },
  { icon: LineChart, label: 'Analytics' },
]

export function AgmisFeature() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-card/30">
      <div aria-hidden className="glow-blue absolute -right-20 top-0 size-[420px] rounded-full" />
      <div className="relative mx-auto max-w-6xl px-5 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Stagger className="order-2 grid grid-cols-2 gap-4 lg:order-1">
            {features.map((f) => {
              const Icon = f.icon
              return (
                <StaggerItem key={f.label}>
                  <div className="flex h-full items-center gap-3 rounded-2xl border border-border bg-card/60 p-4 backdrop-blur transition-colors hover:border-primary/40">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-border bg-secondary text-primary">
                      <Icon className="size-5" />
                    </span>
                    <span className="text-sm font-medium">{f.label}</span>
                  </div>
                </StaggerItem>
              )
            })}
          </Stagger>

          <Reveal className="order-1 lg:order-2">
            <SectionLabel>Featured Project — AGMIS</SectionLabel>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Academic Guidance &amp; Monitoring Intelligence System
            </h2>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-foreground/90">
              Transforming educational data into actionable insights for students, teachers, and
              institutions.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Educational institutions collect academic data but rarely convert it into actionable
              insights. AGMIS is a practical intelligence system that helps identify risks, improve
              academic monitoring, and support better decisions across every role.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/projects/agmis"
                className="group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                View Case Study
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-card"
              >
                All Projects
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
