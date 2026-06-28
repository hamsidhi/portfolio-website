import Link from 'next/link'
import { PlayCircle, GitBranch, FileText, ArrowRight } from 'lucide-react'
import { Reveal, Stagger, StaggerItem } from '@/components/reveal'
import { SectionLabel } from '@/components/section'
import { businessValue } from '@/lib/content'

const tags = ['AI Voice', 'Automation', 'Lead Qualification', 'Prompt Engineering', 'Business']

export function VoiceAgentFeature() {
  return (
    <section id="demo" className="relative scroll-mt-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionLabel>Featured · AI Voice Agent</SectionLabel>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Experience AI before reading my resume
            </h2>
            <div className="mt-5 space-y-4 text-pretty leading-relaxed text-muted-foreground">
              <p>Rather than telling you what I can build, I&apos;d rather show you.</p>
              <p>
                This AI Voice Agent was developed to help a real estate business automate customer
                conversations, qualify leads, answer property-related questions, and provide
                continuous support without requiring additional staffing.
              </p>
              <p>
                It demonstrates how I approach AI—not as a technology demo, but as a practical
                business solution.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/projects/ai-voice-agent#demo"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <PlayCircle className="size-4" />
                Try Live Demo
              </Link>
              <Link
                href="/projects/ai-voice-agent#architecture"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-card"
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

          <Stagger className="grid grid-cols-2 gap-4">
            {businessValue.map((v) => (
              <StaggerItem key={v.title}>
                <div className="h-full rounded-2xl border border-border bg-card/50 p-5 transition-colors hover:border-primary/40">
                  <p className="text-sm font-semibold">{v.title}</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{v.body}</p>
                </div>
              </StaggerItem>
            ))}
            <StaggerItem className="col-span-2">
              <Link
                href="/projects/ai-voice-agent"
                className="group flex items-center justify-between rounded-2xl border border-primary/30 bg-primary/10 p-5 transition-colors hover:bg-primary/15"
              >
                <span className="text-sm font-medium text-primary">
                  Read the full case study
                </span>
                <ArrowRight className="size-4 text-primary transition-transform group-hover:translate-x-0.5" />
              </Link>
            </StaggerItem>
          </Stagger>
        </div>
      </div>
    </section>
  )
}
