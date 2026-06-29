'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowRight, Download, MessageSquare, ChevronDown, Radio, GraduationCap, HeartPulse } from 'lucide-react'
import { RotatingRole } from '@/components/rotating-role'

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.5, 0.25, 1] } },
}

const floatingCards = [
  {
    icon: Radio,
    title: 'AI Voice Agent',
    body: '24/7 Customer Interaction',
    tag: 'Live Demo',
    href: '/projects/ai-voice-agent',
  },
  {
    icon: GraduationCap,
    title: 'AGMIS',
    body: 'Academic Intelligence Platform',
    tag: 'Flagship',
    href: '/projects/agmis',
  },
  {
    icon: HeartPulse,
    title: 'Healthcare AI',
    body: 'Clinical & operational intelligence',
    tag: 'Coming Soon',
    href: '/projects',
  },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="glow-blue absolute -top-32 left-1/4 size-[600px] rounded-full mix-blend-screen opacity-70 animate-pulse" style={{ animationDuration: '4s' }} />
      <div aria-hidden className="glow-purple absolute -top-10 right-1/4 size-[500px] rounded-full mix-blend-screen opacity-60 animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
      <div aria-hidden className="glow-teal absolute top-40 left-1/3 size-[400px] rounded-full mix-blend-screen opacity-50 animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }} />
      <div className="bg-grid absolute inset-0 opacity-[0.25]" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-32 lg:px-8 lg:pt-40">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div variants={container} initial="hidden" animate="visible">
            <motion.div variants={item}>
              <span className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-full glass-panel px-4 py-1.5 text-xs text-foreground shadow-lg border-primary/20 bg-primary/5">
                <span className="inline-block size-2 animate-ping absolute rounded-full bg-primary opacity-75" />
                <span className="inline-block size-2 relative rounded-full bg-primary" />
                <span className="font-medium tracking-wide">Data Science Student & Analytics Builder</span>
                <span className="text-primary/40">•</span>
                <span className="text-muted-foreground">Open to Data Roles</span>
                <span className="text-primary/40">•</span>
                <span className="text-muted-foreground">Based in UAE</span>
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-6 text-balance text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
            >
              Hi, I&apos;m Hamza Siddiqui. I build <span className="text-gradient">data-driven products</span> that solve real business problems.
            </motion.h1>

            <motion.div variants={item} className="mt-5 flex items-center gap-2 font-mono text-base text-muted-foreground sm:text-lg">
              <span className="text-foreground/70">I am an</span>
              <RotatingRole />
            </motion.div>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground"
            >
              I don&apos;t just study Data Science—I build intelligent, data-driven systems that
              businesses and people can actually use. My work combines data analytics, applied AI,
              automation, and product thinking to create solutions that reduce manual work,
              uncover insights, and deliver measurable value.
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground antigravity-hover hover:gap-2.5"
              >
                Explore My Work
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/50 px-5 py-3 text-sm font-medium text-foreground antigravity-hover"
              >
                <Download className="size-4" />
                Download Resume
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <MessageSquare className="size-4" />
                Let&apos;s Connect
              </Link>
            </motion.div>
          </motion.div>

          {/* Hero visual: floating product cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.5, 0.25, 1] }}
            className="relative"
          >
            <div className="relative mx-auto flex max-w-md flex-col gap-4">
              {floatingCards.map((card, i) => {
                const Icon = card.icon
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.35 + i * 0.12 }}
                  >
                    <motion.div className={i % 2 === 0 ? "animate-float" : "animate-float-delayed"}>
                      <Link
                        href={card.href}
                        className="group flex items-center gap-4 rounded-2xl glass-panel p-4 antigravity-hover"
                        style={{ marginLeft: i % 2 === 1 ? '2rem' : 0 }}
                      >
                        <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-border bg-secondary text-primary">
                          <Icon className="size-5" />
                        </span>
                        <span className="min-w-0">
                          <span className="flex items-center gap-2">
                            <span className="truncate text-sm font-semibold">{card.title}</span>
                            <span className="shrink-0 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-primary shadow-sm">
                              {card.tag}
                            </span>
                          </span>
                          <span className="mt-0.5 block truncate text-xs text-muted-foreground">
                            {card.body}
                          </span>
                        </span>
                        <ArrowRight className="ml-auto size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground"
        >
          <span>Discover My Work</span>
          <motion.span animate={{ y: [0, 4, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
            <ChevronDown className="size-4" />
          </motion.span>
        </motion.div>
      </div>
    </section>
  )
}
