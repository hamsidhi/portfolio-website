import { Hero } from '@/components/home/hero'
import { VoiceAgentFeature } from '@/components/home/voice-agent-feature'
import { AgmisFeature } from '@/components/home/agmis-feature'
import { WhyHireMe } from '@/components/home/why-hire-me'
import { SelectedProjects } from '@/components/home/selected-projects'
import {
  ExperienceHighlight,
  CertificationsHighlight,
  AboutPreview,
  ContactCta,
} from '@/components/home/sections'

export default function HomePage() {
  return (
    <>
      <Hero />
      <VoiceAgentFeature />
      <AgmisFeature />
      <WhyHireMe />
      <SelectedProjects />
      <ExperienceHighlight />
      <CertificationsHighlight />
      <AboutPreview />
      <ContactCta />
    </>
  )
}
