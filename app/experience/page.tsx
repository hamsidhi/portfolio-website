import type { Metadata } from 'next'
import { PageHero } from '@/components/section'
import { Timeline } from '@/components/timeline'

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'Experience, education, leadership, and journey of Hamza Siddiqui — from a Data Analyst internship to building AI products.',
}

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        label="Experience & Journey"
        title="From real business data to real AI products"
        description="A timeline of work, education, projects, and the experiences that shaped how I build."
      />
      <section className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
        <Timeline />
      </section>
    </>
  )
}
