'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { SiPython, SiPostgresql, SiPandas } from 'react-icons/si'
import { TbBrandOpenai } from 'react-icons/tb'
import { BrainCircuit, Workflow, BarChart3 } from 'lucide-react'
import { Reveal, Stagger, StaggerItem } from '@/components/reveal'
import { techSkills } from '@/lib/content'

const iconMap: Record<string, React.ElementType> = {
  SiPython,
  SiPostgresql,
  BrainCircuit,
  TbBrandOpenai,
  SiPandas,
  Workflow,
  BarChart3,
}

export function TrustBar() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section className="border-y border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
        <Reveal className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Building Production-Ready AI & Data Solutions
          </p>
        </Reveal>

        <Stagger className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {techSkills.map((tech) => {
            const Icon = iconMap[tech.icon]
            return (
              <StaggerItem key={tech.name}>
                <div 
                  className="relative group cursor-help"
                  onMouseEnter={() => setHoveredSkill(tech.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="rounded-2xl border border-border bg-card p-4 transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/5 group-hover:-translate-y-1 group-hover:shadow-[0_4px_20px_rgba(var(--primary),0.15)]">
                    {Icon ? <Icon className="size-6 sm:size-8 transition-transform group-hover:scale-110" style={{ color: tech.color }} /> : <div className="size-6 sm:size-8 bg-muted rounded-md" />}
                  </div>
                  
                  {/* Tooltip */}
                  <AnimatePresence>
                    {hoveredSkill === tech.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-4 w-60 -translate-x-1/2"
                      >
                        <div className="rounded-xl border border-border glass-panel p-4 shadow-xl text-center">
                          <h4 className="font-semibold text-foreground mb-1.5">{tech.name}</h4>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {tech.description}
                          </p>
                          <div className="absolute -bottom-2 left-1/2 size-4 -translate-x-1/2 rotate-45 border-b border-r border-border bg-card/90" />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </StaggerItem>
            )
          })}
        </Stagger>

        <Reveal className="mx-auto mt-12 max-w-2xl text-center" delay={0.1}>
          <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
            Building data-driven systems using applied machine learning, prompt engineering, and
            automation to create practical solutions for real-world problems.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
