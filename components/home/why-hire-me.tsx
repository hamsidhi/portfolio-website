'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'motion/react'
import { Shield, Rocket, Search, LineChart, Key, BookOpen } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/section'

/* ─── Animated Counter ─── */
function AnimatedCounter({ value, suffix = '', duration = 2000 }: { value: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let startTime = Date.now()

    const tick = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      // easeOutExpo curve
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      const current = Math.floor(eased * value)
      setCount(current)
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [isInView, value, duration])

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  )
}

interface CoreValue {
  title: string
  description: string
  icon: React.ElementType
  span?: string
}

const coreValues: CoreValue[] = [
  {
    title: 'Integrity',
    description: 'I build honest systems and maintain transparent communication. No over-promising, just reliable delivery.',
    icon: Shield,
    span: 'col-span-1',
  },
  {
    title: 'Execution',
    description: 'Ideas turn into production-ready systems. I ship, iterate, and pay attention to the details that matter.',
    icon: Rocket,
    span: 'col-span-1 sm:col-span-2 lg:col-span-1',
  },
  {
    title: 'Curiosity',
    description: 'Constantly exploring new AI paradigms and data structures to bring the best possible solutions to the table.',
    icon: Search,
    span: 'col-span-1',
  },
  {
    title: 'Business Thinking',
    description: 'I start from the problem and the outcome, not the framework. Technology is a means to a measurable result.',
    icon: LineChart,
    span: 'col-span-1 sm:col-span-2',
  },
  {
    title: 'Ownership',
    description: 'I take full responsibility for the systems I build, from initial architecture to final deployment and maintenance.',
    icon: Key,
    span: 'col-span-1',
  },
  {
    title: 'Continuous Learning',
    description: 'AI moves fast. I keep learning deliberately and translate new capabilities into practical business value.',
    icon: BookOpen,
    span: 'col-span-1 sm:col-span-2 lg:col-span-1',
  },
]

const stats = [
  { value: 5, suffix: '+', label: 'AI Systems Built' },
  { value: 8, suffix: '+', label: 'Certifications' },
  { value: 35, suffix: '%', label: 'Cost Reduction' },
  { value: 24, suffix: '/7', label: 'Availability' },
]

export function WhyHireMe() {
  return (
    <section className="border-y border-border bg-card/50">
      <div className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
        {/* Header */}
        <Reveal className="text-center mb-16">
          <SectionLabel>Why Hire Me</SectionLabel>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.02em] sm:text-4xl text-foreground">
            I don&apos;t just learn AI—I build AI applications that solve real business problems.
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            The principles that guide my work, ensuring I deliver not just code, but real business value.
          </p>
        </Reveal>

        {/* Animated Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="stat-card rounded-2xl glass-panel p-6 text-center antigravity-hover"
            >
              <div className="text-3xl sm:text-4xl font-bold text-gradient">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Bento Grid of Values */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.06, duration: 0.5, ease: [0.21, 0.5, 0.25, 1] }}
                className={`${item.span || 'col-span-1'} rounded-2xl glass-panel p-6 antigravity-hover hover:border-blue-500/30 group`}
              >
                <span className="grid size-11 place-items-center rounded-xl border border-border bg-secondary/30 text-blue-400 transition-colors group-hover:bg-blue-500/10 group-hover:border-blue-500/30">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
