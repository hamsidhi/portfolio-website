import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getProject, projects } from '@/lib/projects'
import { PlayCircle } from 'lucide-react'
import { Github } from '@/components/icons'
import {
  CaseStudyHero,
  CaseSection,
  CaseList,
  CaseCardGrid,
  CaseStudyCta,
} from '@/components/case-study'
import { ImageGallery } from '@/components/image-gallery'
import { Reveal } from '@/components/reveal'
import { BrowserFrame } from '@/components/browser-frame'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = await params
  const project = getProject(p.slug)
  if (!project) return {}
  return {
    title: `${project.title} — Case Study`,
    description: project.summary,
  }
}

export default async function DynamicProjectPage({ params }: Props) {
  const p = await params
  const project = getProject(p.slug)

  if (!project) {
    notFound()
  }

  const cs = project.caseStudy

  if (!cs) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center text-center px-5">
        <h1 className="text-2xl font-semibold">Case Study Coming Soon</h1>
        <p className="mt-2 text-muted-foreground">The details for {project.title} are currently being written.</p>
        <Link href="/projects" className="mt-6 text-primary hover:underline">Return to Projects</Link>
      </div>
    )
  }

  return (
    <>
      <CaseStudyHero
        badge={project.category}
        title={project.fullTitle || project.title}
        subtitle={project.summary}
        tags={project.tags}
      >
        <div className="flex flex-wrap gap-3 pt-2">
          {project.demo && (
            <Link
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <PlayCircle className="size-4" />
              Live Demo
            </Link>
          )}
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-card"
            >
              <Github className="size-4" />
              View Source
            </Link>
          )}
        </div>
      </CaseStudyHero>

      {/* Main Image */}
      {project.image && (
        <section className="border-b border-border">
          <div className="mx-auto max-w-5xl px-5 py-14 lg:px-8">
            <Reveal>
              <BrowserFrame url={project.slug + '.local'}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1200}
                  height={700}
                  className="w-full object-cover"
                  priority
                />
              </BrowserFrame>
            </Reveal>
          </div>
        </section>
      )}

      {/* Interactive voice widget for Voice Agent */}
      {project.slug === 'ai-voice-agent' && (
        <section id="demo" className="scroll-mt-24 border-b border-border bg-card/20">
          <div className="mx-auto max-w-4xl px-5 py-14 lg:px-8">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-primary">
                <span className="h-px w-6 bg-primary/50" />
                Live Interaction
              </span>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Talk to the AI Agent</h2>
              <p className="mt-2 text-muted-foreground">
                Experience the conversational agent in real-time. Give it microphone permissions and click the button in the widget below to start.
              </p>
              <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-background shadow-2xl">
                <iframe
                  src="https://vapi.ai?demo=true&shareKey=0dc98dc6-9b4d-49b6-9f7c-4933a0b3ded3&assistantId=5e52cf1e-3160-47db-befe-7eefb58fb02e"
                  className="w-full h-[550px] border-0"
                  allow="microphone"
                  title="AI Voice Agent Live Demo"
                />
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {cs.clientProblem && (
        <CaseSection label="The Challenge" title="Client Problem">
          <p>{cs.clientProblem}</p>
        </CaseSection>
      )}

      {cs.problem && (
        <CaseSection label="The Problem" title="Why this matters">
          <p>{cs.problem}</p>
        </CaseSection>
      )}

      {cs.research && (
        <CaseSection label="Research" title="Understanding the Context">
          <p>{cs.research}</p>
        </CaseSection>
      )}

      {cs.userRoles && (
        <CaseSection label="User Roles" title="Different perspectives, one system">
          <CaseCardGrid items={cs.userRoles} />
        </CaseSection>
      )}

      {cs.architecture && (
        <CaseSection label="Architecture" title="System Design">
          <p>{cs.architecture}</p>
        </CaseSection>
      )}

      {cs.dataPipeline && (
        <CaseSection label="Data Pipeline" title="Handling data accurately">
          <CaseList items={cs.dataPipeline} />
        </CaseSection>
      )}

      {cs.aiComponents && (
        <CaseSection label="AI Intelligence" title="Machine Learning & Agents">
          <CaseList items={cs.aiComponents} />
        </CaseSection>
      )}

      {cs.promptEngineering && (
        <CaseSection label="Prompt Engineering" title="Controlling the LLM">
          <p>{cs.promptEngineering}</p>
        </CaseSection>
      )}

      {cs.conversationFlow && (
        <CaseSection label="Workflow" title="Conversation Flow">
          <CaseList items={cs.conversationFlow} />
        </CaseSection>
      )}

      {cs.dashboards && (
        <CaseSection label="UI / UX" title="Dashboards & Interfaces">
          <CaseCardGrid items={cs.dashboards} />
        </CaseSection>
      )}

      {cs.costSavings && (
        <CaseSection label="Business Value" title="Measurable Outcomes & Cost Savings">
          <p>{cs.costSavings}</p>
        </CaseSection>
      )}

      {cs.technologies && (
        <CaseSection label="Stack" title="Technologies Used">
          <div className="flex flex-wrap gap-1.5 mt-2">
            {cs.technologies.map((t) => (
              <span
                key={t}
                className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 text-xs text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </CaseSection>
      )}

      {cs.galleryImages && cs.galleryImages.length > 0 && (
        <section className="border-b border-border bg-card/20">
          <div className="mx-auto max-w-5xl px-5 py-14 lg:px-8">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-primary">
                <span className="h-px w-6 bg-primary/50" />
                Screenshots
              </span>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">System in action</h2>
            </Reveal>
            <div className="mt-8">
              <ImageGallery images={cs.galleryImages} />
            </div>
          </div>
        </section>
      )}

      {cs.futureRoadmap && (
        <CaseSection label="Roadmap" title="Future Improvements">
          <CaseList items={cs.futureRoadmap} />
        </CaseSection>
      )}

      <CaseStudyCta
        title="Ready to dive deeper?"
        description="Explore the architecture, commits, and implementation details of this project."
        primaryHref={project.github || "https://github.com/hamsidhi"}
        primaryLabel="Explore the source code on GitHub"
        secondaryHref="/projects"
        secondaryLabel="View other projects"
      />
    </>
  )
}
