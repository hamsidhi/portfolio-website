'use client'

import { motion } from 'motion/react'
import { Briefcase, GraduationCap, Rocket, Shield, ExternalLink } from 'lucide-react'
import { timeline, type Experience } from '@/lib/content'

const iconFor = (type: Experience['type']) => {
  switch (type) {
    case 'work':
      return Briefcase
    case 'education':
      return GraduationCap
    case 'project':
      return Rocket
    default:
      return Shield
  }
}

export function Timeline() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute left-[19px] top-2 bottom-2 w-px bg-border sm:left-[23px]"
      />
      <ul className="space-y-8">
        {timeline.map((item, i) => {
          const Icon = iconFor(item.type)
          return (
            <motion.li
              key={`${item.role}-${i}`}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.21, 0.5, 0.25, 1] }}
              className="relative flex gap-5"
            >
              <span className="relative z-[1] grid size-10 shrink-0 place-items-center rounded-xl border border-border bg-card text-primary sm:size-12">
                <Icon className="size-5" />
              </span>
              <div className="flex-1 rounded-2xl glass-panel p-5 antigravity-hover hover:border-primary/40 sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-base font-semibold sm:text-lg">{item.role}</h3>
                    <p className="text-sm text-primary">
                      {item.org} · {item.location}
                    </p>
                  </div>
                  <span className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-muted-foreground">
                    {item.period}
                  </span>
                </div>
                <ul className="mt-4 space-y-2">
                  {item.points.map((p) => (
                    <li
                      key={p}
                      className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/70" />
                      {p}
                    </li>
                  ))}
                </ul>
                {item.credential && (
                  <div className="mt-5">
                    <a
                      href={item.credential}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      View Credential <ExternalLink className="size-3" />
                    </a>
                  </div>
                )}
              </div>
            </motion.li>
          )
        })}
      </ul>
    </div>
  )
}
