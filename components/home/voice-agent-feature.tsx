'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { PlayCircle, GitBranch, FileText, ArrowRight } from 'lucide-react'
import { Reveal, Stagger, StaggerItem } from '@/components/reveal'
import { SectionLabel } from '@/components/section'
import { businessValue } from '@/lib/content'
import { VoiceDemo } from '@/components/voice-demo'

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
                ? 'linear-gradient(to top, var(--accent-1), var(--accent-2))'
                : 'linear-gradient(to top, var(--accent-2), var(--accent-3))',
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
                className="inline-flex items-center gap-2 rounded-lg bg-accent-1 px-5 py-3 text-sm font-medium text-white transition-all hover:bg-accent-1/90 shadow-lg shadow-accent-1/25 btn-glow cursor-pointer"
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

          {/* Voice Simulator 3D Laptop Frame */}
          <Reveal delay={0.15}>
            <div className="space-y-6">
              
              <div className="relative border-none" style={{ perspective: '1000px' }}>
                <motion.div
                  initial={{ rotateY: -3, rotateX: 1.5 }}
                  whileHover={{ rotateY: -6, rotateX: 3 }}
                  transition={{ type: 'spring', stiffness: 100, damping: 15 }}
                  className="relative"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="relative mx-auto max-w-[580px]">
                    {/* Screen Frame */}
                    <div className="relative rounded-t-2xl border-4 border-muted/80 bg-background/30 p-2 shadow-2xl backdrop-blur-sm overflow-hidden">
                      {/* Camera dot */}
                      <div className="absolute top-1 left-1/2 -translate-x-1/2 size-1.5 rounded-full bg-muted-foreground/30 z-20" />
                      
                      {/* Interactive Voice Demo */}
                      <VoiceDemo />
                    </div>
                    {/* Keyboard Base hinge */}
                    <div className="relative h-3.5 w-full rounded-b-2xl bg-muted/80 border-t border-muted-foreground/20 shadow-xl flex justify-center">
                      <div className="w-20 h-1 rounded-full bg-muted-foreground/15 mt-0.5" />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Business value cards */}
              <Stagger className="grid grid-cols-2 gap-3">
                {businessValue.slice(0, 4).map((v) => (
                  <StaggerItem key={v.title}>
                    <motion.div 
                      className="h-full rounded-xl glass-panel p-4 transition-all hover:border-accent-1/30 antigravity-hover"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 12 }}
                    >
                      <p className="text-xs font-semibold text-foreground">{v.title}</p>
                      <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground">{v.body}</p>
                    </motion.div>
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
