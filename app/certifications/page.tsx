import type { Metadata } from 'next'
import { Award, BadgeCheck } from 'lucide-react'
import { PageHero } from '@/components/section'
import { Stagger, StaggerItem, Reveal } from '@/components/reveal'
import { certificationsTier1, certificationsTier2 } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Certifications',
  description:
    'Curated certifications in AI agents, RAG, multiagent systems, and analytics — IBM SkillsBuild, Intel AI For All, Microsoft, and more.',
}

export default function CertificationsPage() {
  return (
    <>
      <PageHero
        label="Certifications"
        title="Deliberate, applied learning"
        description="A curated set of credentials focused on AI agents, retrieval-augmented generation, multiagent systems, and analytics — quality over quantity."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
        <Reveal>
          <div className="flex items-center gap-2">
            <BadgeCheck className="size-5 text-primary" />
            <h2 className="text-lg font-semibold">Core Certifications</h2>
          </div>
        </Reveal>
        <Stagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certificationsTier1.map((c) => (
            <StaggerItem key={c.title}>
              <div className="group h-full rounded-2xl glass-panel p-5 antigravity-hover hover:border-primary/40">
                <Award className="size-5 text-primary" />
                <h3 className="mt-4 text-sm font-semibold leading-snug">{c.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{c.issuer}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-16">
          <h2 className="text-lg font-semibold">Supporting Credentials</h2>
        </Reveal>
        <Stagger className="mt-8 grid gap-4 sm:grid-cols-3">
          {certificationsTier2.map((c) => (
            <StaggerItem key={c.title}>
              <div className="h-full rounded-2xl glass-panel p-5 antigravity-hover hover:border-primary/40">
                <h3 className="text-sm font-semibold leading-snug">{c.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{c.issuer}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </>
  )
}
