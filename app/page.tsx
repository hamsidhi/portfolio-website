import { Hero } from '@/components/home/hero'
import { TrustBar } from '@/components/home/trust-bar'
import { VoiceAgentFeature } from '@/components/home/voice-agent-feature'
import { AgmisFeature } from '@/components/home/agmis-feature'
import { SelectedProjects } from '@/components/home/selected-projects'
import {
  WhoIAm,
  WhyWorkWithMe,
  ExperienceHighlight,
  CertificationsHighlight,
  AboutPreview,
  ContactCta,
} from '@/components/home/sections'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <VoiceAgentFeature />
      <WhoIAm />
      <WhyWorkWithMe />
      <AgmisFeature />
      <SelectedProjects />
      <ExperienceHighlight />
      <CertificationsHighlight />
      <AboutPreview />
      <ContactCta />
    </>
  )
}
