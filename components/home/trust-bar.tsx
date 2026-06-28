import { Reveal, Stagger, StaggerItem } from '@/components/reveal'
import { techStack } from '@/lib/content'

export function TrustBar() {
  return (
    <section className="border-y border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
        <Reveal className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Focused on Building Practical AI Solutions
          </p>
        </Reveal>

        <Stagger className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
          {techStack.map((tech) => (
            <StaggerItem key={tech}>
              <span className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground/90">
                {tech}
              </span>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mx-auto mt-8 max-w-2xl text-center" delay={0.1}>
          <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
            Building intelligent systems using modern AI technologies, business analytics, and
            automation to create practical solutions for real-world problems.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
