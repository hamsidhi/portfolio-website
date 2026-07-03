'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { Award, BadgeCheck, ExternalLink, ShieldCheck, Sparkles, Hourglass, Bookmark } from 'lucide-react'
import { PageHero } from '@/components/section'
import { Stagger, StaggerItem, Reveal } from '@/components/reveal'
import { certificationsTier1, certificationsTier2 } from '@/lib/content'

const issuerColors: Record<string, string> = {
  IBM: 'border-accent-1/30 bg-accent-1/5 text-accent-1',
  Intel: 'border-accent-2/30 bg-accent-2/5 text-accent-2',
  Microsoft: 'border-accent-3/30 bg-accent-3/5 text-accent-3',
  'GoGo A1': 'border-accent-warn/30 bg-accent-warn/5 text-accent-warn',
  Atharva: 'border-accent-1/30 bg-accent-1/5 text-accent-1',
  'Sahil Dresses': 'border-accent-3/30 bg-accent-3/5 text-accent-3',
  'Skill Nation': 'border-accent-2/30 bg-accent-2/5 text-accent-2',
  Various: 'border-border bg-secondary/60 text-muted-foreground',
}

const statsSummary = [
  { value: 8, label: 'Core AI & Data Credentials', suffix: '', icon: ShieldCheck },
  { value: 5, label: 'Technical Domain Pillars', suffix: '', icon: Sparkles },
  { value: 120, label: 'Verified Structured Hours', suffix: '+', icon: Hourglass },
  { value: 13, label: 'Total Career Milestones', suffix: '', icon: Bookmark },
]

export default function CertificationsPage() {
  return (
    <>
      <PageHero
        label="Certifications"
        title="Deliberate, applied learning"
        description="A curated set of credentials focused on AI agents, retrieval-augmented generation, multiagent systems, and analytics — quality over quantity."
      />

      {/* ─── CountUp Statistics Block ─── */}
      <section className="border-b border-border bg-card/30 py-10">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <Stagger className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {statsSummary.map((stat, idx) => {
              const Icon = stat.icon
              return (
                <StaggerItem key={idx}>
                  <div className="rounded-2xl glass-panel p-5 flex items-center gap-4 antigravity-hover">
                    <span className="grid size-10 place-items-center rounded-xl border border-border bg-secondary/40 text-accent-1">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <p className="text-2xl font-bold tracking-tight text-foreground">
                        <CountUpNumber value={stat.value} suffix={stat.suffix} />
                      </p>
                      <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wide">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              )
            })}
          </Stagger>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
        <Reveal>
          <div className="flex items-center gap-2">
            <BadgeCheck className="size-5 text-accent-1" />
            <h2 className="text-lg font-semibold text-foreground">Core Certifications</h2>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Industry-recognized credentials from leading technology organizations.
          </p>
        </Reveal>

        <Stagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certificationsTier1.map((c) => {
            const colorClass = issuerColors[c.issuer] || issuerColors.Various
            const CardContent = (
              <div className="group h-full rounded-2xl glass-panel p-5 transition-colors hover:bg-card border border-border hover:border-accent-1/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <Award className="size-5 text-accent-1" />
                    <span className={`rounded-full border px-2 py-0.5 text-[9px] font-semibold tracking-wider ${colorClass}`}>
                      {c.issuer}
                    </span>
                  </div>
                  <h3 className="mt-4 text-sm font-semibold leading-snug text-foreground group-hover:text-accent-1 transition-colors">
                    {c.name}
                  </h3>
                </div>
                {c.credentialUrl && (
                  <div className="mt-4 flex items-center gap-1 text-[10px] font-bold text-accent-1 opacity-0 transition-opacity group-hover:opacity-100">
                    <ExternalLink className="size-3" />
                    View credential
                  </div>
                )}
              </div>
            )

            return (
              <StaggerItem key={c.name}>
                <TiltCard>
                  {c.credentialUrl ? (
                    <a href={c.credentialUrl} target="_blank" rel="noopener noreferrer" className="block h-full cursor-pointer">
                      {CardContent}
                    </a>
                  ) : (
                    CardContent
                  )}
                </TiltCard>
              </StaggerItem>
            )
          })}
        </Stagger>

        <Reveal className="mt-16">
          <h2 className="text-lg font-semibold text-foreground">Supporting Credentials</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Additional workshops, participation certificates, and learning credentials.
          </p>
        </Reveal>

        <Stagger className="mt-8 grid gap-4 sm:grid-cols-3">
          {certificationsTier2.map((c) => {
            const CardContent = (
              <div className="h-full rounded-2xl glass-panel p-5 group transition-colors hover:bg-card border border-border hover:border-accent-1/30 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-semibold leading-snug text-foreground group-hover:text-accent-1 transition-colors">
                    {c.name}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">{c.issuer}</p>
                </div>
                {c.credentialUrl && (
                  <div className="mt-4 flex items-center gap-1 text-[10px] font-bold text-accent-1 opacity-0 transition-opacity group-hover:opacity-100">
                    <ExternalLink className="size-3" />
                    View credential
                  </div>
                )}
              </div>
            )
            return (
              <StaggerItem key={c.name}>
                <TiltCard>
                  {c.credentialUrl ? (
                    <a href={c.credentialUrl} target="_blank" rel="noopener noreferrer" className="block h-full cursor-pointer">
                      {CardContent}
                    </a>
                  ) : (
                    CardContent
                  )}
                </TiltCard>
              </StaggerItem>
            )
          })}
        </Stagger>
      </section>
    </>
  )
}

function CountUpNumber({ value, suffix = '', duration = 1500 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let startTimestamp = Date.now()
    const step = () => {
      const elapsed = Date.now() - startTimestamp
      const progress = Math.min(elapsed / duration, 1)
      const current = Math.floor(progress * value)
      setCount(current)
      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }
    window.requestAnimationFrame(step)
  }, [isInView, value, duration])

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  )
}

function TiltCard({ children }: { children: React.ReactNode }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left - width / 2
    const mouseY = e.clientY - rect.top - height / 2

    // Max 8 degrees tilt to keep text readable
    const rX = -(mouseY / (height / 2)) * 8
    const rY = (mouseX / (width / 2)) * 8

    setRotateX(rX)
    setRotateY(rY)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      style={{ transformStyle: 'preserve-3d' }}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
      className="h-full"
    >
      {children}
    </motion.div>
  )
}
