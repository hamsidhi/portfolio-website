'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section'

/* ─── SVG Data Pipeline Flow Lines ─── */
function DataPipelineLines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
      viewBox="0 0 600 400"
      fill="none"
      aria-hidden
    >
      <motion.path
        d="M 50 50 Q 200 30 300 100 T 550 80"
        stroke="url(#pipeline-gradient)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.6 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: 'easeOut', delay: 0.3 }}
      />
      <motion.path
        d="M 80 200 Q 250 150 350 220 T 570 200"
        stroke="url(#pipeline-gradient-2)"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.4 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: 'easeOut', delay: 0.6 }}
      />
      <motion.path
        d="M 30 320 Q 180 280 320 340 T 580 310"
        stroke="url(#pipeline-gradient)"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.3 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: 'easeOut', delay: 0.9 }}
      />
      {/* Dots along paths */}
      {[
        { cx: 150, cy: 65, delay: 1 },
        { cx: 300, cy: 100, delay: 1.3 },
        { cx: 450, cy: 85, delay: 1.6 },
      ].map((dot, i) => (
        <motion.circle
          key={i}
          cx={dot.cx}
          cy={dot.cy}
          r="4"
          fill="#3B82F6"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.8, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: dot.delay, duration: 0.4, ease: 'easeOut' }}
        />
      ))}
      <defs>
        <linearGradient id="pipeline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
          <stop offset="30%" stopColor="#3B82F6" />
          <stop offset="70%" stopColor="#22D3EE" />
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="pipeline-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#22D3EE" stopOpacity="0" />
          <stop offset="30%" stopColor="#22D3EE" />
          <stop offset="70%" stopColor="#2DD4BF" />
          <stop offset="100%" stopColor="#2DD4BF" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function AgmisFeature() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-card/50">
      <div aria-hidden className="glow-blue absolute -right-20 top-0 size-[420px] rounded-full" />
      <div className="relative mx-auto max-w-6xl px-5 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          {/* Left: Dashboard with 3D tilt and pipeline lines */}
          <Reveal className="order-2 lg:order-1">
            <div className="relative" style={{ perspective: '1000px' }}>
              <motion.div
                initial={{ rotateY: 0, rotateX: 0 }}
                whileInView={{ rotateY: -4, rotateX: 2 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="relative"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="relative rounded-2xl glass-panel overflow-hidden shadow-2xl shadow-blue-500/10">
                  <DataPipelineLines />
                  <Image
                    src="/assets/agmis/1.jpg"
                    alt="AGMIS Dashboard overview"
                    width={600}
                    height={400}
                    className="w-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
              </motion.div>

              {/* Secondary images */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="image-showcase overflow-hidden rounded-xl">
                  <Image
                    src="/assets/agmis/2.jpg"
                    alt="AGMIS Analytics"
                    width={300}
                    height={200}
                    className="aspect-video w-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <div className="image-showcase overflow-hidden rounded-xl">
                  <Image
                    src="/assets/agmis/3.jpg"
                    alt="AGMIS Charts"
                    width={300}
                    height={200}
                    className="aspect-video w-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: Text */}
          <Reveal className="order-1 lg:order-2">
            <SectionLabel>Featured Project — AGMIS</SectionLabel>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.02em] sm:text-4xl text-foreground">
              Academic Guidance &amp; Monitoring Intelligence System
            </h2>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-foreground/90">
              Transforming educational data into actionable insights for students, teachers, and
              institutions.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Educational institutions collect academic data but rarely convert it into actionable
              insights. AGMIS is a practical intelligence system that helps identify risks, improve
              academic monitoring, and support better decisions across every role.
            </p>

            <div className="mt-6 flex flex-wrap gap-1.5">
              {['Data Analytics', 'EdTech', 'Dashboards', 'Business Intelligence'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-border bg-secondary/30 px-2.5 py-1 text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/projects/agmis"
                className="group inline-flex items-center gap-2 rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white transition-all hover:bg-blue-600 shadow-lg shadow-blue-500/20 btn-glow"
              >
                View Case Study
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-lg glass-panel px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary/30"
              >
                All Projects
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
