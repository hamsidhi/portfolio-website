import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section'

export function CaseStudyHero({
  badge,
  title,
  subtitle,
  tags,
  children,
}: {
  badge: string
  title: string
  subtitle: string
  tags: string[]
  children?: React.ReactNode
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div aria-hidden className="glow-blue absolute -top-32 left-1/3 size-[560px] rounded-full" />
      <div className="bg-grid absolute inset-0 opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-4xl px-5 pb-16 pt-32 lg:px-8 lg:pt-36">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
          All projects
        </Link>
        <Reveal className="mt-8 flex flex-col gap-5">
          <SectionLabel>{badge}</SectionLabel>
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {subtitle}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          {children}
        </Reveal>
      </div>
    </section>
  )
}

export function CaseSection({
  id,
  label,
  title,
  children,
}: {
  id?: string
  label?: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-24 border-b border-border">
      <div className="mx-auto max-w-4xl px-5 py-14 lg:px-8">
        <Reveal>
          {label && <SectionLabel>{label}</SectionLabel>}
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
          <div className="mt-5 space-y-4 text-pretty leading-relaxed text-muted-foreground">
            {children}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function CaseList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-muted-foreground">
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function CaseCardGrid({
  items,
}: {
  items: { title: string; body: string }[]
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-border bg-card/50 p-5 transition-colors hover:border-primary/40"
        >
          <p className="text-sm font-semibold text-foreground">{item.title}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
        </div>
      ))}
    </div>
  )
}

export function CaseStudyCta({
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  title: string
  description: string
  primaryHref: string
  primaryLabel: string
  secondaryHref?: string
  secondaryLabel?: string
}) {
  return (
    <section className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
      <Reveal className="relative overflow-hidden rounded-3xl border border-primary/30 bg-primary/10 p-10 text-center sm:p-12">
        <div aria-hidden className="glow-blue absolute inset-0" />
        <div className="relative">
          <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            {description}
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href={primaryHref}
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {primaryLabel}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            {secondaryHref && secondaryLabel && (
              <Link
                href={secondaryHref}
                target={secondaryHref.startsWith('http') ? '_blank' : undefined}
                rel={secondaryHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background/60 px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-card"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
