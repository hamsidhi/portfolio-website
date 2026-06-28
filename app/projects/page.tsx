import type { Metadata } from 'next'
import { PageHero } from '@/components/section'
import { ProjectsGrid } from '@/components/projects-grid'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'AI products, machine learning systems, RAG/voice systems, and automation work by Hamza Siddiqui — flagship products first.',
}

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        label="Projects"
        title="AI products, ML systems, and automation that solve real problems"
        description="Flagship products lead the list, followed by supporting projects across data science, RAG, voice, and automation. Every card opens a detailed view where available."
      />
      <ProjectsGrid />
    </>
  )
}
