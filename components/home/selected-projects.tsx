import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/section'
import { ProjectCard } from '@/components/project-card'
import { orderedProjects } from '@/lib/projects'

export function SelectedProjects() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          label="Selected Work"
          title="Projects built to solve real problems"
          description="A curated set of AI products, machine learning systems, and automation work — flagship products first."
        />
        <Link
          href="/projects"
          className="group inline-flex shrink-0 items-center gap-2 rounded-lg glass-panel px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary/30"
        >
          View all projects
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {orderedProjects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
