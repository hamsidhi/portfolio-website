'use client'

import { useMemo, useState } from 'react'
import { motion } from 'motion/react'
import { ProjectCard } from '@/components/project-card'
import { orderedProjects, projectCategories } from '@/lib/projects'
import { cn } from '@/lib/utils'

export function ProjectsGrid() {
  const [active, setActive] = useState<(typeof projectCategories)[number]>('All')

  const flagship = useMemo(
    () => orderedProjects.filter((p) => p.flagship),
    [],
  )
  const supporting = useMemo(
    () => orderedProjects.filter((p) => !p.flagship),
    [],
  )

  const filterFn = (p: (typeof orderedProjects)[number]) =>
    active === 'All' || p.category === active

  const filteredFlagship = flagship.filter(filterFn)
  const filteredSupporting = supporting.filter(filterFn)

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
      <div className="flex flex-wrap gap-2">
        {projectCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={cn(
              'rounded-lg border px-3.5 py-2 text-sm font-medium transition-colors',
              active === cat
                ? 'border-primary/40 bg-primary/10 text-primary'
                : 'border-border text-muted-foreground hover:bg-card hover:text-foreground',
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {filteredFlagship.length > 0 && (
        <div className="mt-12">
          <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Flagship Products
          </h2>
          <motion.div layout className="mt-6 grid gap-5 sm:grid-cols-2">
            {filteredFlagship.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </motion.div>
        </div>
      )}

      {filteredSupporting.length > 0 && (
        <div className="mt-14">
          <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Supporting Projects
          </h2>
          <motion.div layout className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredSupporting.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </motion.div>
        </div>
      )}

      {filteredFlagship.length === 0 && filteredSupporting.length === 0 && (
        <p className="mt-16 text-center text-sm text-muted-foreground">
          No projects in this category yet.
        </p>
      )}
    </div>
  )
}
