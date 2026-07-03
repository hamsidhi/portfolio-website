'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { Briefcase, GraduationCap, Rocket, Shield, ExternalLink } from 'lucide-react'
import { experienceTimeline, type TimelineItem } from '@/lib/content'

const iconFor = (type: TimelineItem['type']) => {
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
  const ref = useRef<HTMLDivElement>(null)
  const [hasScrollTimeline, setHasScrollTimeline] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && 'CSS' in window) {
      setHasScrollTimeline(CSS.supports('animation-timeline', 'view()'))
    }
  }, [])

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  
  // Fallback animation transform if ScrollTimeline is unsupported
  const lineHeight = useTransform(scrollYProgress, [0, 0.6], ['0%', '100%'])

  return (
    <div ref={ref} className="relative">
      {/* Background gray line */}
      <div
        aria-hidden
        className="absolute left-[19px] top-2 bottom-2 w-px bg-border sm:left-[23px]"
      />
      {/* Glowing progress line */}
      <motion.div
        aria-hidden
        className="timeline-growth-line absolute left-[19px] top-2 w-px bg-gradient-to-b from-accent-1 via-accent-2 to-transparent sm:left-[23px]"
        style={hasScrollTimeline ? {} : { height: lineHeight }}
      />

      <ul className="space-y-8">
        {experienceTimeline.map((item, i) => {
          const Icon = iconFor(item.type)
          return (
            <motion.li
              key={`${item.title}-${i}`}
              initial={hasScrollTimeline ? {} : { opacity: 0, x: -16 }}
              whileInView={hasScrollTimeline ? {} : { opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.21, 0.5, 0.25, 1] }}
              className="relative flex gap-5"
            >
              {/* Timeline dot */}
              <motion.span
                initial={hasScrollTimeline ? {} : { scale: 0 }}
                whileInView={hasScrollTimeline ? {} : { scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, type: 'spring', stiffness: 300 }}
                className="relative z-[1] grid size-10 shrink-0 place-items-center rounded-xl border border-border bg-card text-accent-1 sm:size-12 shadow-lg shadow-accent-1/10"
              >
                <Icon className="size-5" />
              </motion.span>

              {/* Timeline card with clip-path circle reveal */}
              <div className="timeline-card flex-1 rounded-2xl glass-panel p-5 antigravity-hover hover:border-accent-1/30 sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-base font-semibold sm:text-lg text-foreground">{item.title}</h3>
                    <p className="text-sm text-accent-1">
                      {item.company}
                    </p>
                  </div>
                  <span className="rounded-full border border-border bg-secondary/30 px-3 py-1 text-xs text-muted-foreground">
                    {item.date}
                  </span>
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                <ul className="mt-4 space-y-2">
                  {item.achievements.map((p) => (
                    <li
                      key={p}
                      className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-1/70" />
                      {p}
                    </li>
                  ))}
                </ul>
                {item.credentialUrl && (
                  <div className="mt-5">
                    <a
                      href={item.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-accent-1/20 bg-accent-1/5 px-4 py-2 text-xs font-medium text-accent-1 transition-all hover:bg-accent-1 hover:text-white cursor-pointer"
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
