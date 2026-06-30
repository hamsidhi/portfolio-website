import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section'

export function AgmisFeature() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-card/30">
      <div aria-hidden className="glow-blue absolute -right-20 top-0 size-[420px] rounded-full" />
      <div className="relative mx-auto max-w-6xl px-5 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Screenshot showcase */}
          <Reveal className="order-2 lg:order-1">
            <div className="space-y-4">
              <div className="image-showcase overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/assets/agmis/1.jpg"
                  alt="AGMIS Dashboard overview"
                  width={600}
                  height={400}
                  className="w-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="image-showcase overflow-hidden rounded-xl">
                  <Image
                    src="/assets/agmis/2.jpg"
                    alt="AGMIS Analytics"
                    width={300}
                    height={200}
                    className="aspect-video w-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <div className="image-showcase overflow-hidden rounded-xl">
                  <Image
                    src="/assets/agmis/3.jpg"
                    alt="AGMIS Charts"
                    width={300}
                    height={200}
                    className="aspect-video w-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </Reveal>

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

            <div className="mt-6 flex flex-wrap gap-1.5">
              {['Data Analytics', 'EdTech', 'Dashboards', 'Business Intelligence'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

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
