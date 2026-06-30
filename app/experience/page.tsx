import type { Metadata } from 'next'
import { PageHero } from '@/components/section'
import { Timeline } from '@/components/timeline'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'Experience, education, leadership, and journey of Hamza Siddiqui — from a Data Analyst internship to building data-driven systems.',
}

const highlights = [
  { label: 'Industry Experience', value: '6 months' },
  { label: 'Flagship Products', value: '2 shipped' },
  { label: 'Certifications', value: '8+ earned' },
  { label: 'Focus Areas', value: 'AI · Data · Automation' },
]

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        label="Experience & Journey"
        title="From business data to data-driven systems"
        description="A timeline of work, education, projects, and the experiences that shaped how I build production-ready solutions."
      />

      {/* Quick highlights */}
      <section className="border-b border-border bg-card/30">
        <div className="mx-auto max-w-6xl px-5 py-10 lg:px-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {highlights.map((h) => (
              <Reveal key={h.label}>
                <div className="stat-card rounded-xl glass-panel p-4 text-center antigravity-hover">
                  <p className="text-lg font-bold text-gradient-static">{h.value}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{h.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
        <Timeline />
      </section>
    </>
  )
}
