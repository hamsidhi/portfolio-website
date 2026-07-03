'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Mail, FileText } from 'lucide-react'
import { motion, useInView } from 'motion/react'
import { Github, Linkedin } from '@/components/icons'
import { site } from '@/lib/site'
import { MagneticButton } from '@/components/magnetic-button'

interface Particle {
  id: number
  x: string
  y: string
  r: string
  br: string
  size: string
  color: string
  duration: string
}

export function Footer() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [fired, setFired] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-20px' })

  useEffect(() => {
    if (isInView && !fired) {
      setFired(true)
      const colors = ['var(--accent-1)', 'var(--accent-2)', 'var(--accent-3)', 'var(--accent-warn)']
      const items: Particle[] = Array.from({ length: 65 }).map((_, idx) => {
        // Generate values for upward/outward spread
        const angle = (Math.random() * 120 + 30) * (Math.PI / 180) // 30deg to 150deg
        const velocity = Math.random() * 160 + 80
        const x = Math.cos(angle) * velocity
        const y = -Math.sin(angle) * velocity

        return {
          id: idx,
          x: `${x}px`,
          y: `${y}px`,
          r: `${Math.random() * 360 + 180}deg`,
          br: Math.random() > 0.45 ? '50%' : '2px', // circles or square confetti
          size: `${Math.random() * 6 + 5}px`,
          color: colors[Math.floor(Math.random() * colors.length)],
          duration: `${Math.random() * 0.7 + 1.1}s`,
        }
      })
      setParticles(items)
    }
  }, [isInView, fired])

  return (
    <footer className="relative border-t border-border bg-background overflow-hidden">
      {/* Confetti emitter anchor */}
      <div
        ref={containerRef}
        className="absolute left-1/2 top-[75%] -translate-x-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none select-none"
        aria-hidden
      >
        {particles.map((p) => (
          <span
            key={p.id}
            className="confetti-particle"
            style={
              {
                '--x': p.x,
                '--y': p.y,
                '--r': p.r,
                '--br': p.br,
                '--size': p.size,
                '--c': p.color,
                '--duration': p.duration,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
        {/* CTA Card */}
        <div className="rounded-2xl glass-panel p-8 sm:p-12">
          <p className="text-sm font-medium text-accent-1">Let&apos;s build something useful</p>
          <h2 className="mt-3 max-w-2xl text-balance text-2xl font-semibold tracking-[-0.02em] sm:text-3xl text-foreground">
            Looking for someone to build practical, data-driven systems and automations?
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <MagneticButton>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-accent-1 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-accent-1/90 shadow-lg shadow-accent-1/20 btn-glow cursor-pointer"
              >
                Get in touch
              </Link>
            </MagneticButton>
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 rounded-lg glass-panel px-5 py-2.5 text-sm font-medium text-foreground transition-colors cursor-pointer"
            >
              <FileText className="size-4" />
              View resume
            </Link>
          </div>
        </div>

        {/* Social links row */}
        <div className="mt-12 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-foreground">{site.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Data Science Graduate · Data Analyst · Automation Builder
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {[
              { label: 'GitHub', href: site.github, icon: Github, external: true },
              { label: 'LinkedIn', href: site.linkedin, icon: Linkedin, external: true },
              { label: 'Email', href: `mailto:${site.email}`, icon: Mail, external: true },
              { label: 'Resume', href: '/resume', icon: FileText, external: false },
            ].map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="group inline-flex items-center gap-1.5 rounded-lg glass-panel px-3 py-2 text-sm text-muted-foreground transition-all hover:border-accent-1/30 hover:bg-accent-1/5 hover:text-foreground cursor-pointer"
                >
                  <Icon className="size-4" />
                  {item.label}
                </Link>
              )
            })}
          </div>
        </div>

        {/* Massive outlined name with Spotlight Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 overflow-hidden"
        >
          <SpotlightText text="Hamza Siddiqui" />
        </motion.div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {site.name} · {site.domain}
          </p>
        </div>
      </div>
    </footer>
  )
}

function SpotlightText({ text }: { text: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setMousePos({ x, y })
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative text-center select-none cursor-default py-4"
    >
      {/* Background Layer: Outlined text */}
      <h2
        className="text-outline font-bold leading-none select-none"
        style={{ fontSize: 'clamp(3rem, 10vw, 8rem)' }}
      >
        {text}
      </h2>

      {/* Foreground Layer: Spotlight illuminated text */}
      <h2
        className="absolute inset-0 font-bold leading-none pointer-events-none transition-opacity duration-300 py-4"
        style={{
          fontSize: 'clamp(3rem, 10vw, 8rem)',
          background: 'linear-gradient(135deg, var(--accent-1), var(--accent-2), var(--accent-3))',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          opacity: isHovered ? 1 : 0,
          WebkitMaskImage: `radial-gradient(circle 100px at ${mousePos.x}px ${mousePos.y}px, black 30%, transparent 100%)`,
          maskImage: `radial-gradient(circle 100px at ${mousePos.x}px ${mousePos.y}px, black 30%, transparent 100%)`,
        }}
      >
        {text}
      </h2>
    </div>
  )
}
