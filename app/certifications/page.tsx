import type { Metadata } from 'next'
import { Award, BadgeCheck, ExternalLink } from 'lucide-react'
import { PageHero } from '@/components/section'
import { Stagger, StaggerItem, Reveal } from '@/components/reveal'
import { certificationsTier1, certificationsTier2 } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Certifications',
  description:
    'Curated certifications in AI agents, RAG, multiagent systems, and analytics — IBM SkillsBuild, Intel AI For All, Microsoft, and more.',
}

const issuerColors: Record<string, string> = {
  IBM: 'border-blue-500/30 bg-blue-500/10 text-blue-400',
  Intel: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400',
  Microsoft: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
  'GoGo A1': 'border-orange-500/30 bg-orange-500/10 text-orange-400',
  Various: 'border-border bg-secondary/60 text-muted-foreground',
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
          <p className="mt-2 text-sm text-muted-foreground">
            Industry-recognized credentials from leading technology organizations.
          </p>
        </Reveal>
        <Stagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certificationsTier1.map((c) => {
            const colorClass = issuerColors[c.issuer] || issuerColors.Various
            const Card = (
              <div className="group h-full rounded-2xl glass-panel p-5 antigravity-hover hover:border-primary/40 transition-colors hover:bg-card">
                <div className="flex items-start justify-between gap-2">
                  <Award className="size-5 text-primary" />
                  <span className={`rounded-full border px-2 py-0.5 text-[10px] font-medium ${colorClass}`}>
                    {c.issuer}
                  </span>
                </div>
                <h3 className="mt-4 text-sm font-semibold leading-snug">{c.title}</h3>
                {c.credential && (
                  <div className="mt-3 flex items-center gap-1 text-[10px] text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    <ExternalLink className="size-3" />
                    View credential
                  </div>
                )}
              </div>
            )

            return (
              <StaggerItem key={c.title}>
                {c.credential ? (
                  <a href={c.credential} target="_blank" rel="noopener noreferrer" className="block h-full">
                    {Card}
                  </a>
                ) : (
                  Card
                )}
              </StaggerItem>
            )
          })}
        </Stagger>

        <Reveal className="mt-16">
          <h2 className="text-lg font-semibold">Supporting Credentials</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Additional workshops, participation certificates, and learning credentials.
          </p>
        </Reveal>
        <Stagger className="mt-8 grid gap-4 sm:grid-cols-3">
          {certificationsTier2.map((c) => {
            const Card = (
              <div className="h-full rounded-2xl glass-panel p-5 antigravity-hover hover:border-primary/40 group transition-colors hover:bg-card">
                <h3 className="text-sm font-semibold leading-snug">{c.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{c.issuer}</p>
                {c.credential && (
                  <div className="mt-3 flex items-center gap-1 text-[10px] text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    <ExternalLink className="size-3" />
                    View credential
                  </div>
                )}
              </div>
            )
            return (
              <StaggerItem key={c.title}>
                {c.credential ? (
                  <a href={c.credential} target="_blank" rel="noopener noreferrer" className="block h-full">
                    {Card}
                  </a>
                ) : (
                  Card
                )}
              </StaggerItem>
            )
          })}
        </Stagger>
      </section>
    </>
  )
}
