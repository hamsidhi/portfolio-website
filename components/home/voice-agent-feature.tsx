'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { PlayCircle, GitBranch, FileText, ArrowRight } from 'lucide-react'
import { Reveal, Stagger, StaggerItem } from '@/components/reveal'
import { SectionLabel } from '@/components/section'
import { businessValue } from '@/lib/content'

const tags = ['AI Voice', 'Automation', 'Lead Qualification', 'Prompt Engineering', 'Business']

/* ─── Animated Waveform ─── */
function AnimatedWaveform() {
  const barCount = 32
  return (
    <div className="flex items-end justify-center gap-[3px] h-40 px-6">
      {Array.from({ length: barCount }).map((_, i) => {
        const isBlue = i % 3 !== 0
        return (
          <motion.div
            key={i}
            className="w-[3px] rounded-full"
            style={{
              background: isBlue
                ? 'linear-gradient(to top, #3B82F6, #60A5FA)'
                : 'linear-gradient(to top, #22D3EE, #67E8F9)',
            }}
            animate={{
              height: [
                `${20 + Math.random() * 30}%`,
                `${50 + Math.random() * 50}%`,
                `${20 + Math.random() * 30}%`,
              ],
            }}
            transition={{
              duration: 1.2 + Math.random() * 0.8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.05,
            }}
          />
        )
      })}
    </div>
  )
}

export function VoiceAgentFeature() {
  return (
    <section id="demo" className="relative scroll-mt-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionLabel>Featured · Practical Automation</SectionLabel>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.02em] sm:text-4xl text-foreground">
              Experience practical automation before reading my resume
            </h2>
            <div className="mt-5 space-y-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              <p>Rather than telling you what I can build, I&apos;d rather show you.</p>
              <p>
                This conversational agent was developed to help a real estate business automate customer
                conversations, qualify leads, answer property-related questions, and provide
                continuous support without requiring additional staffing.
              </p>
              <p>
                It demonstrates how I approach building intelligent systems—not as a technology demo, but as a practical
                business solution.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-1.5">
              {tags.map((tag) => (
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
                href="/projects/ai-voice-agent#demo"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white transition-all hover:bg-blue-600 shadow-lg shadow-blue-500/20 btn-glow"
              >
                <PlayCircle className="size-4" />
                Try Live Demo
              </Link>
              <Link
                href="/projects/ai-voice-agent#architecture"
                className="inline-flex items-center gap-2 rounded-lg glass-panel px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary/30"
              >
                <GitBranch className="size-4" />
                View Architecture
              </Link>
              <Link
                href="/projects/ai-voice-agent"
                className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <FileText className="size-4" />
                Read Case Study
              </Link>
            </div>
          </Reveal>

          {/* Waveform showcase card */}
          <Reveal delay={0.15}>
            <div className="space-y-4">
              {/* Floating glass card with waveform */}
              <div className="relative rounded-2xl glass-panel p-6 animate-breathe overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5" aria-hidden />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="size-3 rounded-full bg-blue-500 animate-pulse" />
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Live Audio Waveform</span>
                  </div>
                  <AnimatedWaveform />
                </div>
              </div>

              {/* Business value cards */}
              <Stagger className="grid grid-cols-2 gap-3">
                {businessValue.slice(0, 4).map((v) => (
                  <StaggerItem key={v.title}>
                    <div className="h-full rounded-xl glass-panel p-4 transition-all hover:border-blue-500/30 antigravity-hover">
                      <p className="text-xs font-semibold text-foreground">{v.title}</p>
                      <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground">{v.body}</p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>

              <StaggerItem>
                <Link
                  href="/projects/ai-voice-agent"
                  className="group flex items-center justify-between rounded-xl border border-blue-500/30 bg-blue-500/10 p-4 transition-all hover:bg-blue-500/15 hover:border-blue-500/40"
                >
                  <span className="text-sm font-medium text-blue-400">
                    Read the full case study
                  </span>
                  <ArrowRight className="size-4 text-blue-400 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </StaggerItem>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
