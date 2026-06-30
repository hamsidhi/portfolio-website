import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { PlayCircle, GitBranch } from 'lucide-react'
import {
  CaseStudyHero,
  CaseSection,
  CaseList,
  CaseCardGrid,
  CaseStudyCta,
} from '@/components/case-study'
import { ImageGallery } from '@/components/image-gallery'
import { Reveal } from '@/components/reveal'
import { businessValue } from '@/lib/content'

export const metadata: Metadata = {
  title: 'AI Voice Agent — Case Study',
  description:
    'An AI Voice Agent built to automate customer conversations, qualify leads, and provide 24/7 support for a real estate business.',
}

const conversationFlow = [
  'Greeting and intent detection — understand why the caller is reaching out.',
  'Qualification — capture budget, location, timeline, and bedroom requirements.',
  'Property guidance — match needs to available listings and answer questions.',
  'Scheduling — collect contact details and route to a human agent for viewing.',
  'Graceful handoff — summarize the conversation and confirm next steps.',
]

const technologies = [
  'Python', 'FastAPI', 'LLM Prompt Engineering', 'Speech-to-Text', 'Text-to-Speech',
  'Conversation State', 'Webhooks', 'Automation',
]

const futureImprovements = [
  'CRM integration', 'Automatic appointment scheduling', 'Call summary generation',
  'Customer sentiment analysis', 'Multi-language support', 'Analytics dashboard',
  'Lead scoring', 'WhatsApp integration', 'Email automation', 'Calendar integration',
]

const lessons = [
  'Structured prompts and guardrails matter more than clever wording — predictability builds trust.',
  'Designing for graceful handoff to humans is as important as automation itself.',
  'Capturing the right qualification data early dramatically improves downstream value.',
  'Business outcomes, not model novelty, should drive every design decision.',
]

const galleryImages = [
  { src: '/assets/voice-agent/1.png', alt: 'AI Voice Agent Interface', caption: 'Voice agent conversation interface' },
  { src: '/assets/voice-agent/2.png', alt: 'AI Voice Agent Workflow', caption: 'Conversation workflow and automation' },
  { src: '/assets/voice-agent/3.png', alt: 'AI Voice Agent Features', caption: 'Feature overview and configuration' },
]

export default function VoiceAgentPage() {
  return (
    <>
      <CaseStudyHero
        badge="Intelligent Automation · Voice System"
        title="AI Voice Agent for Real Estate"
        subtitle="An intelligent voice agent that automates customer conversations, qualifies leads, and answers property questions 24/7 — built as a practical business solution."
        tags={['Intelligent Automation', 'AI Voice', 'Lead Qualification', 'Prompt Engineering']}
      >
        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="https://vapi.ai?demo=true&shareKey=0dc98dc6-9b4d-49b6-9f7c-4933a0b3ded3&assistantId=5e52cf1e-3160-47db-befe-7eefb58fb02e"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <PlayCircle className="size-4" />
            Try Live Demo
          </Link>
          <Link
            href="#architecture"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-card"
          >
            <GitBranch className="size-4" />
            View Architecture
          </Link>
        </div>
      </CaseStudyHero>

      {/* Hero screenshot */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-5 py-14 lg:px-8">
          <Reveal>
            <div className="image-showcase overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/assets/voice-agent/1.png"
                alt="AI Voice Agent — main interface"
                width={1200}
                height={700}
                className="w-full object-cover"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Live demo */}
      <section id="demo" className="scroll-mt-24 border-b border-border">
        <div className="mx-auto max-w-4xl px-5 py-14 lg:px-8">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Live demo</h2>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
              Experience the AI Voice Agent in real time. Click below to start a live conversation and see how it qualifies leads and answers questions natively.
            </p>
            <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card/50 shadow-xl">
              <div className="flex flex-col items-center justify-center p-12 text-center sm:p-20">
                <div className="mb-6 flex size-20 items-center justify-center rounded-full bg-primary/10">
                  <PlayCircle className="size-10 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold tracking-tight">Interactive Voice Demo</h3>
                <p className="mb-8 max-w-md text-sm text-muted-foreground">
                  Because this demo requests microphone access to speak with you directly, it must run in a secure, dedicated window. 
                </p>
                <Link
                  href="https://vapi.ai?demo=true&shareKey=0dc98dc6-9b4d-49b6-9f7c-4933a0b3ded3&assistantId=5e52cf1e-3160-47db-befe-7eefb58fb02e"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-all hover:scale-105 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
                >
                  <PlayCircle className="size-5" />
                  Connect to Voice Agent
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CaseSection label="The Problem" title="Customer conversations don't scale with staff">
        <p>
          A real estate business was losing potential clients because calls came in around the
          clock, but staff could only respond during working hours. Routine questions about
          availability, pricing, and locations consumed time that the team needed for closing
          deals — and every missed call was a missed lead.
        </p>
      </CaseSection>

      <CaseSection label="Why It Mattered" title="Every missed call is a missed opportunity">
        <p>
          In real estate, response speed often decides who wins the client. Hiring more staff to
          cover 24/7 availability is expensive and hard to scale. The business needed a way to be
          consistently responsive without growing headcount — while still feeling human.
        </p>
      </CaseSection>

      <CaseSection label="Solution Overview" title="An always-on conversational agent">
        <p>
          I built an AI Voice Agent that answers calls, understands intent, qualifies leads, and
          answers property questions naturally. It captures the information the sales team needs,
          then routes qualified leads to a human for the final step.
        </p>
        <CaseCardGrid items={businessValue} />
      </CaseSection>

      {/* Screenshot Gallery */}
      <section className="border-b border-border bg-card/20">
        <div className="mx-auto max-w-5xl px-5 py-14 lg:px-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-primary">
              <span className="h-px w-6 bg-primary/50" />
              Screenshots
            </span>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Voice Agent in action</h2>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
              Click any screenshot to view in full resolution.
            </p>
          </Reveal>
          <div className="mt-8">
            <ImageGallery images={galleryImages} />
          </div>
        </div>
      </section>

      <CaseSection id="architecture" label="Conversation Flow" title="How a call moves from hello to qualified lead">
        <CaseList items={conversationFlow} />
      </CaseSection>

      <CaseSection label="My Contribution" title="What I designed and built">
        <CaseList
          items={[
            'Defined the business problem and success criteria with the stakeholder.',
            'Designed the end-to-end conversation flow and qualification logic.',
            'Engineered structured prompts with guardrails for consistent, on-brand responses.',
            'Connected speech, language, and automation layers into one reliable system.',
            'Built the handoff that routes qualified leads to the human team.',
          ]}
        />
      </CaseSection>

      <CaseSection label="Prompt Engineering" title="Structured prompts over clever wording">
        <p>
          The agent&apos;s reliability comes from structure: a clear role, explicit goals, a
          step-by-step qualification framework, and guardrails for what it should and shouldn&apos;t
          say. This keeps conversations natural while staying predictable and safe — exactly what a
          business needs to trust automation with its customers.
        </p>
      </CaseSection>

      <CaseSection label="Business Value" title="Measurable outcomes, not novelty">
        <CaseList
          items={[
            '24/7 availability without additional staffing costs.',
            'Faster response times that capture leads before competitors.',
            'Consistent qualification that improves the quality of handed-off leads.',
            'Natural conversations that protect the brand experience.',
          ]}
        />
      </CaseSection>

      <CaseSection label="Technologies" title="What it's built with">
        <div className="flex flex-wrap gap-1.5">
          {technologies.map((t) => (
            <span
              key={t}
              className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 text-xs text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </CaseSection>

      <CaseSection label="Lessons Learned" title="What this project taught me">
        <CaseList items={lessons} />
      </CaseSection>

      <CaseSection label="Future Improvements" title="Where it goes next">
        <div className="flex flex-wrap gap-1.5">
          {futureImprovements.map((t) => (
            <span
              key={t}
              className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 text-xs text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </CaseSection>

      <CaseStudyCta
        title="Next: AGMIS — my flagship product"
        description="See how I turn fragmented academic data into an intelligence system for students, faculty, and institutions."
        primaryHref="/projects/agmis"
        primaryLabel="Read the AGMIS case study"
        secondaryHref="/contact"
        secondaryLabel="Let's talk"
      />
    </>
  )
}
