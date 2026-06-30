'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'motion/react'
import { ArrowRight, Download, MessageSquare, ChevronDown } from 'lucide-react'
import { RotatingRole } from '@/components/rotating-role'

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.5, 0.25, 1] } },
}

const stats = [
  { value: '5+', label: 'Projects Shipped' },
  { value: '8+', label: 'Certifications' },
  { value: '6mo', label: 'Industry Experience' },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Premium background effects */}
      <div aria-hidden className="glow-blue absolute -top-40 left-1/4 size-[700px] rounded-full mix-blend-screen opacity-60 animate-pulse" style={{ animationDuration: '5s' }} />
      <div aria-hidden className="glow-purple absolute -top-20 right-1/4 size-[550px] rounded-full mix-blend-screen opacity-50 animate-pulse" style={{ animationDuration: '7s', animationDelay: '1s' }} />
      <div aria-hidden className="glow-teal absolute top-60 left-1/2 size-[400px] rounded-full mix-blend-screen opacity-40 animate-pulse" style={{ animationDuration: '6s', animationDelay: '2.5s' }} />
      <div className="bg-dot-grid absolute inset-0 opacity-[0.15]" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-32 lg:px-8 lg:pt-40">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left content */}
          <motion.div variants={container} initial="hidden" animate="visible">
            <motion.div variants={item}>
              <span className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-full glass-panel px-4 py-1.5 text-xs text-foreground shadow-lg border-primary/20 bg-primary/5">
                <span className="inline-block size-2 animate-ping absolute rounded-full bg-primary opacity-75" />
                <span className="inline-block size-2 relative rounded-full bg-primary" />
                <span className="font-medium tracking-wide">AI Engineer & Automation Builder</span>
                <span className="text-primary/40">•</span>
                <span className="text-muted-foreground">Open to Opportunities</span>
                <span className="text-primary/40">•</span>
                <span className="text-muted-foreground">Based in UAE</span>
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-6 text-balance text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]"
            >
              Hi, I&apos;m Hamza Siddiqui. I build <span className="text-gradient">data-driven systems</span> and production-ready software.
            </motion.h1>

            <motion.div variants={item} className="mt-5 flex items-center gap-2 font-mono text-base text-muted-foreground sm:text-lg">
              <span className="text-foreground/70">I am</span>
              <RotatingRole />
            </motion.div>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground"
            >
              I don&apos;t just study AI—I build it. From voice agents to analytics platforms,
              I create intelligent systems that automate work, uncover insights, and deliver
              measurable value for businesses.
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

            {/* Stats bar */}
            <motion.div variants={item} className="mt-10 flex gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-2xl font-bold tracking-tight text-gradient-static">{stat.value}</span>
                  <span className="mt-0.5 text-xs text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side: Profile image card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.5, 0.25, 1] }}
            className="relative flex items-center justify-center"
          >
            <div className="relative">
              {/* Decorative ring */}
              <div aria-hidden className="absolute -inset-3 rounded-3xl border border-primary/20 opacity-60" />
              <div aria-hidden className="absolute -inset-6 rounded-3xl border border-primary/10 opacity-40" />
              
              {/* Glass card with profile */}
              <div className="relative overflow-hidden rounded-2xl glass-panel p-6 sm:p-8">
                <div className="flex flex-col items-center gap-5">
                  {/* Profile image */}
                  <div className="profile-glow rounded-full">
                    <Image
                      src="/assets/profile/profile-main.jpg"
                      alt="Hamza Siddiqui — AI Engineer"
                      width={160}
                      height={160}
                      className="rounded-full border-2 border-primary/20 object-cover shadow-2xl"
                      priority
                    />
                  </div>
                  
                  {/* Identity badges */}
                  <div className="flex flex-col items-center gap-2 text-center">
                    <h2 className="text-lg font-semibold tracking-tight">Hamza Siddiqui</h2>
                    <div className="flex flex-wrap justify-center gap-1.5">
                      {['AI Engineer', 'Data Analyst', 'Automation Builder'].map((role) => (
                        <span
                          key={role}
                          className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Quick links */}
                  <div className="flex gap-2 pt-2">
                    <Link
                      href="/projects/agmis"
                      className="group flex items-center gap-2 rounded-xl border border-border bg-secondary/60 px-3.5 py-2.5 text-xs font-medium transition-colors hover:border-primary/40 hover:bg-primary/10"
                    >
                      <span className="size-1.5 rounded-full bg-emerald-400" />
                      AGMIS
                      <ArrowRight className="size-3 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                    </Link>
                    <Link
                      href="/projects/ai-voice-agent"
                      className="group flex items-center gap-2 rounded-xl border border-border bg-secondary/60 px-3.5 py-2.5 text-xs font-medium transition-colors hover:border-primary/40 hover:bg-primary/10"
                    >
                      <span className="size-1.5 rounded-full bg-blue-400" />
                      Voice Agent
                      <ArrowRight className="size-3 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
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
