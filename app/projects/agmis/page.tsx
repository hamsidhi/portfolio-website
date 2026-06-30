import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { GraduationCap, Users, ShieldCheck } from 'lucide-react'
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
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'AGMIS — Academic Guidance & Monitoring Intelligence System',
  description:
    'AGMIS turns fragmented academic data into actionable insights for students, faculty, and institutions — a flagship data analytics product case study.',
}

const roles = [
  {
    icon: GraduationCap,
    title: 'Student Dashboard',
    body: 'Personalized view of performance, risks, and guidance to help students stay on track.',
  },
  {
    icon: Users,
    title: 'Faculty Dashboard',
    body: 'Class-level monitoring that surfaces struggling students early and supports interventions.',
  },
  {
    icon: ShieldCheck,
    title: 'Principal / Admin Dashboard',
    body: 'Institution-wide analytics for decisions on resources, programs, and academic policy.',
  },
]

const keyFeatures = [
  { title: 'Student Dashboard', body: 'Performance, risks, and personalized guidance in one place.' },
  { title: 'Faculty Dashboard', body: 'Early-warning signals and class-level monitoring.' },
  { title: 'Principal Dashboard', body: 'Institution-wide analytics for strategic decisions.' },
  { title: 'AI Guidance', body: 'Context-aware recommendations tailored to each student.' },
  { title: 'Motivation Engine', body: 'Nudges and goals that encourage consistent progress.' },
  { title: 'Analytics Layer', body: 'Trends, cohorts, and risk indicators across the institution.' },
]

const roadmap = [
  'Predictive risk models for early dropout detection.',
  'Deeper personalization in the AI guidance engine.',
  'Parent and counselor views for a fuller support network.',
  'Integrations with existing LMS and ERP systems.',
  'Automated reporting for accreditation and reviews.',
]

const galleryImages = [
  { src: '/assets/agmis/1.jpg', alt: 'AGMIS Dashboard Overview', caption: 'Main dashboard with student performance overview' },
  { src: '/assets/agmis/2.jpg', alt: 'AGMIS Analytics View', caption: 'Analytics and monitoring dashboard' },
  { src: '/assets/agmis/3.jpg', alt: 'AGMIS Reports', caption: 'Detailed reports and insights view' },
  { src: '/assets/agmis/4.jpg', alt: 'AGMIS Login', caption: 'Secure login portal' },
  { src: '/assets/agmis/5.jpg', alt: 'AGMIS Analytics', caption: 'Advanced analytics and charts' },
  { src: '/assets/agmis/6.jpg', alt: 'AGMIS Insights', caption: 'Comprehensive institutional view' },
]

export default function AgmisPage() {
  return (
    <>
      <CaseStudyHero
        badge="Flagship Data Product · EdTech Analytics"
        title="AGMIS — Academic Guidance & Monitoring Intelligence System"
        subtitle="Transforming educational data into actionable insights for students, teachers, and institutions."
        tags={['Data Analytics', 'EdTech', 'Dashboards', 'Business Intelligence']}
      >
        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Github className="size-4" />
            View on GitHub
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-card"
          >
            Discuss this project
          </Link>
        </div>
      </CaseStudyHero>

      {/* Hero screenshot */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-5 py-14 lg:px-8">
          <Reveal>
            <div className="image-showcase overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/assets/agmis/1.jpg"
                alt="AGMIS Dashboard — main overview"
                width={1200}
                height={700}
                className="w-full object-cover"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CaseSection label="The Problem" title="Data is collected, but insight is lost">
        <p>
          Educational institutions collect academic data constantly — grades, attendance,
          assessments — but rarely convert it into actionable insights. The data lives in
          spreadsheets and disconnected systems, so risks go unnoticed until it&apos;s too late to
          help a student.
        </p>
      </CaseSection>

      <CaseSection label="Context" title="Why institutions struggle with fragmented academic data">
        <p>
          Each role sees only a fragment: students see a report card, faculty see a class, and
          administrators see summaries. Without a shared intelligence layer, no one can act early or
          consistently. AGMIS exists to connect these fragments into one coherent, decision-ready
          picture.
        </p>
      </CaseSection>

      <CaseSection label="User Roles" title="One system, three perspectives">
        <div className="grid gap-4 sm:grid-cols-3">
          {roles.map((r) => {
            const Icon = r.icon
            return (
              <div
                key={r.title}
                className="rounded-2xl border border-border bg-card/50 p-5 transition-colors hover:border-primary/40"
              >
                <span className="grid size-10 place-items-center rounded-xl border border-border bg-secondary text-primary">
                  <Icon className="size-5" />
                </span>
                <p className="mt-4 text-sm font-semibold">{r.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
              </div>
            )
          })}
        </div>
      </CaseSection>

      {/* Screenshot Gallery */}
      <section className="border-b border-border bg-card/20">
        <div className="mx-auto max-w-5xl px-5 py-14 lg:px-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-primary">
              <span className="h-px w-6 bg-primary/50" />
              Screenshots
            </span>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Platform in action</h2>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
              Click any screenshot to view in full resolution.
            </p>
          </Reveal>
          <div className="mt-8">
            <ImageGallery images={galleryImages} />
          </div>
        </div>
      </section>

      <CaseSection label="Intelligence" title="AI guidance, motivation, and analytics">
        <p>
          On top of the dashboards sits the intelligence layer. AI guidance provides context-aware
          recommendations for each student. A motivation engine encourages consistent progress with
          goals and nudges. The analytics layer reveals trends, cohorts, and risk indicators across
          the institution.
        </p>
      </CaseSection>

      <CaseSection id="architecture" label="Architecture" title="From raw records to decisions">
        <p>
          A data pipeline ingests and cleans academic records into a consistent model. AI/ML
          components score risk and generate guidance. A presentation layer renders role-specific
          dashboards. The design favors clarity and maintainability so the system stays useful as
          institutions grow.
        </p>
        <CaseList
          items={[
            'Data pipeline — ingestion, cleaning, and validation of academic records.',
            'AI / ML components — risk scoring and personalized guidance.',
            'Analytics layer — trends, cohorts, and institution-wide indicators.',
            'Role-based dashboards — tailored views for students, faculty, and admins.',
          ]}
        />
      </CaseSection>

      <CaseSection label="Key Features" title="What AGMIS delivers">
        <CaseCardGrid items={keyFeatures} />
      </CaseSection>

      <CaseSection label="Product Thinking" title="Designed for real institutions">
        <p>
          AGMIS was designed around the people who use it, not just the data. The goal isn&apos;t a
          dashboard for its own sake — it&apos;s helping a teacher notice a struggling student a week
          earlier, or helping a principal allocate resources where they matter. Usefulness and
          trust drove every decision.
        </p>
      </CaseSection>

      <CaseSection label="Roadmap" title="Where AGMIS goes next">
        <CaseList items={roadmap} />
      </CaseSection>

      <CaseStudyCta
        title="Want to see the code or talk through it?"
        description="AGMIS is my flagship product and I'm happy to walk through the architecture, decisions, and trade-offs."
        primaryHref={site.github}
        primaryLabel="View on GitHub"
        secondaryHref="/projects/ai-voice-agent"
        secondaryLabel="See the AI Voice Agent"
      />

      <div className="sr-only">
        <Reveal>End of AGMIS case study</Reveal>
      </div>
    </>
  )
}
