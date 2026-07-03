import { cn } from '@/lib/utils'
import { Reveal } from '@/components/reveal'

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-blue-400">
      <span className="h-px w-6 bg-blue-500/50" />
      {children}
    </span>
  )
}

export function SectionHeading({
  label,
  title,
  description,
  align = 'left',
  className,
}: {
  label?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <Reveal
      className={cn(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      {label && <SectionLabel>{label}</SectionLabel>}
      <h2 className="text-balance text-3xl font-semibold tracking-[-0.02em] sm:text-4xl text-foreground">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'text-pretty leading-relaxed text-muted-foreground',
            align === 'center' ? 'max-w-2xl' : 'max-w-3xl',
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  )
}

export function PageHero({
  label,
  title,
  description,
}: {
  label: string
  title: string
  description?: string
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div aria-hidden className="glow-blue absolute -top-40 left-1/2 size-[520px] -translate-x-1/2 rounded-full" />
      <div className="bg-grid absolute inset-0 opacity-20" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-32 lg:px-8 lg:pt-36">
        <Reveal className="flex flex-col gap-5">
          <SectionLabel>{label}</SectionLabel>
          <h1 className="max-w-3xl text-balance text-4xl font-semibold tracking-[-0.02em] sm:text-5xl text-foreground">
            {title}
          </h1>
          {description && (
            <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  )
}
