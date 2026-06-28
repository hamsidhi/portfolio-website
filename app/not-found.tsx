import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-5">
      <div aria-hidden className="glow-blue absolute left-1/2 top-1/3 size-[420px] -translate-x-1/2 rounded-full" />
      <div className="relative flex max-w-md flex-col items-center gap-5 text-center">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">404</span>
        <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          This page took a different route.
        </h1>
        <p className="text-pretty leading-relaxed text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back to the work.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Back Home
          </Link>
          <Link
            href="/projects"
            className="inline-flex h-11 items-center justify-center rounded-full border border-border px-6 text-sm font-medium text-foreground transition-colors hover:bg-card"
          >
            View Projects
          </Link>
        </div>
      </div>
    </section>
  )
}
