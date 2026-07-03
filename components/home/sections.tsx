'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import {
  Brain,
  Briefcase,
  Rocket,
  Boxes,
  Workflow,
  GraduationCap,
  ArrowRight,
  Award,
  MapPin,
} from 'lucide-react'
import { Reveal, Stagger, StaggerItem } from '@/components/reveal'
import { SectionHeading, SectionLabel } from '@/components/section'
import { experienceTimeline, certificationsTier1 } from '@/lib/content'

/* ─── Experience Highlight with Glowing Timeline ─── */
export function ExperienceHighlight() {
  const ref = useRef<HTMLElement>(null)
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
  const lineHeight = useTransform(scrollYProgress, [0, 0.5], ['0%', '100%'])

  const item = experienceTimeline[0]

  return (
    <section ref={ref} className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <SectionHeading
          label="Experience"
          title="Hands-on with real business data"
          description="From ERP data to Power BI dashboards — turning raw data into decisions."
        />
        <Reveal>
          <div className="relative pl-8">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border" aria-hidden />
            {/* Glowing progress line */}
            <motion.div
              className="timeline-growth-line absolute left-0 top-0 w-px bg-gradient-to-b from-accent-1 to-accent-2"
              style={hasScrollTimeline ? {} : { height: lineHeight }}
              aria-hidden
            />
            {/* Dot */}
            <motion.div
              initial={hasScrollTimeline ? {} : { scale: 0 }}
              whileInView={hasScrollTimeline ? {} : { scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.4, type: 'spring' }}
              className="absolute left-[-5px] top-0 size-[11px] rounded-full bg-accent-1 border-2 border-background shadow-lg shadow-accent-1/50"
              aria-hidden
            />

            <div className="timeline-card rounded-2xl glass-panel p-7 antigravity-hover hover:border-accent-1/30">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-accent-1">{item.company}</p>
                </div>
                <span className="rounded-full border border-border bg-secondary/30 px-3 py-1 text-xs text-muted-foreground">
                  {item.date}
                </span>
              </div>
              <ul className="mt-5 space-y-2.5">
                {item.achievements.slice(0, 4).map((p) => (
                  <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-1" />
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                href="/experience"
                className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent-1 cursor-pointer"
              >
                See full experience &amp; journey
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ─── Certifications with Marquee ─── */
export function CertificationsHighlight() {
  return (
    <section className="border-y border-border bg-card/50">
      <div className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            label="Certifications"
            title="Deliberate, applied learning"
            description="A curated set of credentials in AI agents, RAG, multiagent systems, and analytics."
          />
          <Link
            href="/certifications"
            className="group inline-flex shrink-0 items-center gap-2 rounded-lg glass-panel px-4 py-2.5 text-sm font-medium text-foreground transition-colors cursor-pointer"
          >
            View all
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Seamless Marquee */}
        <div className="mt-12 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-background to-transparent" aria-hidden />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-background to-transparent" aria-hidden />
          <div className="marquee-track">
            {/* Duplicate for seamless loop */}
            {[...certificationsTier1, ...certificationsTier1].map((c, i) => (
              <div
                key={`${c.name}-${i}`}
                className="flex-shrink-0 mx-2 w-64 rounded-2xl glass-panel p-5 antigravity-hover hover:border-accent-1/30 transition-all group cursor-default"
              >
                <div className="flex items-center gap-3">
                  <Award className="size-5 text-accent-1 opacity-50 group-hover:opacity-100 transition-opacity" />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold leading-snug text-foreground truncate">{c.name}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{c.issuer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grid below for regular display */}
        <Stagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certificationsTier1.slice(0, 4).map((c) => (
            <StaggerItem key={c.name}>
              <div className="h-full rounded-2xl glass-panel p-5 antigravity-hover hover:border-accent-1/30">
                <Award className="size-5 text-accent-1" />
                <h3 className="mt-4 text-sm font-semibold leading-snug text-foreground">{c.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{c.issuer}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

/* ─── About Preview with Parallax Photo ─── */
export function AboutPreview() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const photoY = useTransform(scrollYProgress, [0, 1], [30, -30])

  return (
    <section ref={ref} className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
      <Reveal className="relative overflow-hidden rounded-3xl glass-panel p-8 sm:p-12">
        <div aria-hidden className="glow-accent-1 absolute -left-10 -top-10 size-72 rounded-full" />
        <div className="relative flex flex-col md:flex-row md:items-center gap-8">
          {/* Photo with parallax and duotone */}
          <motion.div className="shrink-0" style={{ y: photoY }}>
            <div className="profile-glow rounded-full">
              <div className="relative overflow-hidden rounded-full">
                <Image
                  src="/assets/profile/profile-main.jpg"
                  alt="Hamza Siddiqui"
                  width={160}
                  height={160}
                  className="rounded-full border-2 border-accent-1/20 object-cover shadow-2xl"
                />
                {/* Duotone overlay */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-1/20 to-transparent mix-blend-color pointer-events-none" />
              </div>
            </div>
          </motion.div>

          {/* Text with line-by-line reveal */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground"
            >
              <MapPin className="size-4 text-accent-1" />
              Based in UAE · Available in UAE, India &amp; Remote
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-5 max-w-2xl text-balance text-2xl font-semibold tracking-[-0.02em] sm:text-3xl text-foreground"
            >
              Calm, honest, and business-minded. I build data-driven systems that simplify complexity and solve real problems.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Link
                href="/about"
                className="group mt-7 inline-flex items-center gap-2 rounded-lg glass-panel px-5 py-3 text-sm font-medium text-foreground transition-colors cursor-pointer"
              >
                Read my story
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

/* ─── Contact CTA with Pulsing Aura ─── */
export function ContactCta() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-8 pt-0 lg:px-8">
      <Reveal className="relative overflow-hidden rounded-3xl border border-accent-1/20 bg-accent-1/5 p-10 text-center sm:p-16">
        {/* Massive pulsating aura */}
        <div aria-hidden className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="size-[500px] rounded-full bg-accent-1/10 blur-[100px] animate-pulse-aura" />
        </div>
        <div aria-hidden className="glow-accent-1 absolute inset-0" />

        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-balance text-3xl font-semibold tracking-[-0.02em] sm:text-4xl text-foreground">
            Let&apos;s build something that solves a real problem.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Interested in discussing Data Science, Data Analytics, Business Intelligence, or Automation? I&apos;d
            be happy to connect.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent-1 px-8 py-3.5 text-sm font-medium text-white shadow-lg shadow-accent-1/25 transition-all hover:bg-accent-1/90 hover:shadow-accent-1/40 btn-glow cursor-pointer"
            >
              Contact Me
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 rounded-full glass-panel px-8 py-3.5 text-sm font-medium text-foreground transition-all cursor-pointer"
            >
              Download Resume
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
