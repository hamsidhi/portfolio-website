'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'motion/react'
import { ArrowUpRight, Sparkles, Lock } from 'lucide-react'
import { Github } from '@/components/icons'
import { Tilt } from '@/components/tilt'
import type { Project } from '@/lib/projects'

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const detailHref = project.href
  const hasDetail = Boolean(detailHref)

  return (
    <Tilt className="h-full">
      <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.21, 0.5, 0.25, 1] }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl glass-panel antigravity-hover hover:border-primary/40"
    >
      {/* Full-card click target for detail pages or github */}
      {(hasDetail || project.github) && (
        <Link
          href={hasDetail ? detailHref! : project.github!}
          target={hasDetail ? undefined : '_blank'}
          rel={hasDetail ? undefined : 'noopener noreferrer'}
          aria-label={`Open ${project.title}`}
          className="absolute inset-0 z-0"
        />
      )}

      {/* Project image preview */}
      {project.image && (
        <div className="image-showcase overflow-hidden rounded-none border-0 border-b border-border">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            width={600}
            height={340}
            className="h-44 w-full object-cover object-top"
            loading="lazy"
          />
        </div>
      )}

      <div className="pointer-events-none relative z-[1] flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {project.flagship && (
              <span className="inline-flex items-center gap-1 rounded-full border border-primary/40 bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                <Sparkles className="size-3" /> Flagship
              </span>
            )}
            {project.comingSoon && (
              <span className="inline-flex items-center gap-1 rounded-full border border-border bg-secondary px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                <Lock className="size-3" /> Coming Soon
              </span>
            )}
          </div>
          {hasDetail && (
            <ArrowUpRight className="size-5 text-muted-foreground transition-all group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          )}
        </div>

        <h3 className="mt-4 text-lg font-semibold tracking-tight">{project.title}</h3>
        {project.fullTitle && project.fullTitle !== project.title && (
          <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {project.fullTitle}
          </p>
        )}
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.summary}
        </p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border bg-secondary/60 px-2 py-0.5 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Interactive buttons sit above the full-card link */}
      <div className="relative z-20 border-t border-border px-6 py-4 flex flex-wrap gap-2">
        {hasDetail && (
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={detailHref!}
              className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3.5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              View Case Study
            </Link>
          </motion.div>
        )}
        {project.github && (
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3.5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <Github className="size-4" />
              GitHub
            </Link>
          </motion.div>
        )}
        {project.demo && (
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={project.demo}
              className="inline-flex items-center gap-1.5 rounded-lg border border-primary/30 bg-primary/10 px-3.5 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
            >
              Live Demo
            </Link>
          </motion.div>
        )}
        {project.comingSoon && !hasDetail && !project.github && (
          <span className="inline-flex items-center rounded-lg border border-dashed border-border px-3.5 py-2 text-sm text-muted-foreground">
            In development
          </span>
        )}
      </div>
      </motion.article>
    </Tilt>
  )
}
