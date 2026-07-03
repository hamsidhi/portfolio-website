'use client'

import Link from 'next/link'
import { motion, type Variants } from 'motion/react'
import { ArrowRight, Download, MessageSquare, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import dynamic from 'next/dynamic'

const HeroCanvas = dynamic(() => import('./hero-canvas'), {
  ssr: false,
})

/* ─── 3D Wireframe Sphere (SVG) ─── */
function WireframeSphere() {
  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-[0.07] animate-rotate-slow pointer-events-none" aria-hidden>
      <svg width="700" height="700" viewBox="0 0 700 700" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Horizontal circles */}
        {[0, 30, 60, 90, 120, 150].map((angle) => (
          <ellipse
            key={`h-${angle}`}
            cx="350"
            cy="350"
            rx="300"
            ry={300 * Math.cos((angle * Math.PI) / 180)}
            stroke="var(--accent-1)"
            strokeWidth="0.8"
            fill="none"
          />
        ))}
        {/* Vertical circles */}
        {[0, 30, 60, 90, 120, 150].map((angle) => (
          <ellipse
            key={`v-${angle}`}
            cx="350"
            cy="350"
            rx={300 * Math.cos((angle * Math.PI) / 180)}
            ry="300"
            stroke="var(--accent-2)"
            strokeWidth="0.6"
            fill="none"
            transform={`rotate(${angle} 350 350)`}
          />
        ))}
        {/* Outer ring */}
        <circle cx="350" cy="350" r="300" stroke="var(--accent-1)" strokeWidth="1" fill="none" opacity="0.5" />
      </svg>
    </div>
  )
}

/* ─── Word-by-word mask reveal ─── */
function MaskRevealHeadline({ text }: { text: string }) {
  const words = text.split(' ')
  return (
    <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.08] tracking-[-0.02em] sm:text-5xl lg:text-[3.5rem] text-foreground">
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
          <motion.span
            className="inline-block"
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.1 + i * 0.06,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </h1>
  )
}

const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.4 } },
}
const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stats = [
  { value: '5+', label: 'Projects Shipped' },
  { value: '10+', label: 'Certifications' },
  { value: '6mo', label: 'Industry Experience' },
]

export function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const width = window.innerWidth
    const height = window.innerHeight
    const x = (clientX / width) - 0.5
    const y = (clientY / height) - 0.5
    setMousePos({ x, y })
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden min-h-screen flex items-center"
    >
      {/* 3D Wireframe Sphere background / WebGL canvas */}
      <div className="hidden md:block absolute inset-0 z-0">
        <HeroCanvas />
      </div>
      <div className="block md:hidden absolute inset-0 z-0">
        <WireframeSphere />
      </div>

      {/* Radial overlay to dim the center sphere behind typography for readability */}
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,var(--background)_82%)] z-[1] pointer-events-none" />

      {/* Ambient glows */}
      <div aria-hidden className="glow-blue absolute -top-40 left-1/4 size-[700px] rounded-full mix-blend-screen opacity-40 animate-pulse" style={{ animationDuration: '5s' }} />
      <div aria-hidden className="glow-cyan absolute -top-20 right-1/4 size-[550px] rounded-full mix-blend-screen opacity-30 animate-pulse" style={{ animationDuration: '7s', animationDelay: '1s' }} />
      <div aria-hidden className="glow-teal absolute top-60 left-1/2 size-[400px] rounded-full mix-blend-screen opacity-25 animate-pulse" style={{ animationDuration: '6s', animationDelay: '2.5s' }} />
      <div className="bg-dot-grid absolute inset-0 opacity-[0.08]" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-1/50 to-transparent" aria-hidden />

      <div className="relative z-10 mx-auto max-w-6xl w-full px-5 pb-20 pt-32 lg:px-8 lg:pt-40">
        <div className="flex flex-col items-center text-center">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <span className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-full glass-panel px-4 py-1.5 text-xs text-foreground shadow-lg border-accent-1/20 bg-accent-1/5">
              <span className="relative flex size-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-1 opacity-75" />
                <span className="relative inline-flex rounded-full size-2 bg-accent-1" />
              </span>
              <span className="font-medium tracking-wide">Data Science Graduate & Automation Builder</span>
              <span className="text-accent-1/40">•</span>
              <span className="text-muted-foreground">Open to Opportunities</span>
            </span>
          </motion.div>

          {/* Mask reveal headline */}
          <MaskRevealHeadline text="Hi, I'm Hamza Siddiqui. Building Data-Driven Systems & Practical Automations." />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-6 max-w-2xl text-pretty text-lg sm:text-xl leading-relaxed text-muted-foreground"
          >
            BSc Data Science graduate building practical data systems, automation pipelines, and analytics platforms while continuously learning.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-wrap justify-center gap-3"
          >
            <motion.div variants={item}>
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 rounded-full bg-accent-1 px-7 py-3.5 text-sm font-medium text-white shadow-lg shadow-accent-1/25 transition-all hover:bg-accent-1/90 hover:shadow-accent-1/40 hover:gap-3 btn-glow"
              >
                Explore My Work
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
            <motion.div variants={item}>
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 rounded-full glass-panel px-7 py-3.5 text-sm font-medium text-foreground transition-all"
              >
                <Download className="size-4" />
                Download Resume
              </Link>
            </motion.div>
            <motion.div variants={item}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <MessageSquare className="size-4" />
                Contact Me
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-14 flex flex-wrap justify-center gap-6 sm:gap-12"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="flex flex-col items-center px-6 py-4 rounded-xl border border-border/45 bg-card/25 backdrop-blur-sm shadow-sm select-none"
                style={{
                  transform: `translate3d(${mousePos.x * (15 + i * 5)}px, ${mousePos.y * (15 + i * 5)}px, 0px)`,
                }}
                transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              >
                <span className="text-3xl font-bold tracking-tight text-gradient">{stat.value}</span>
                <span className="mt-1.5 text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
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
