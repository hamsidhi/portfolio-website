'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { SiPython, SiPostgresql, SiPandas } from 'react-icons/si'
import { TbBrandOpenai } from 'react-icons/tb'
import { BrainCircuit, Workflow, BarChart3, X, Sparkles, Award, CheckCircle2 } from 'lucide-react'
import { Reveal, Stagger, StaggerItem } from '@/components/reveal'
import { techSkills } from '@/lib/content'

const iconMap: Record<string, React.ElementType> = {
  SiPython,
  SiPostgresql,
  BrainCircuit,
  TbBrandOpenai,
  SiPandas,
  Workflow,
  BarChart3,
}

const skillHighlights: Record<string, { category: string; stats: string; details: string[] }> = {
  "Python": {
    category: "Backend & Data Science Core",
    stats: "3+ Years Practice",
    details: [
      "Core language used for all academic AI modeling and workflow tools.",
      "Built custom FastAPI services integrated with PostgreSQL databases.",
      "Engineered automated ETL pipelines with pandas and NumPy."
    ]
  },
  "Power BI": {
    category: "Business Intelligence",
    stats: "Microsoft Certified Specialist",
    details: [
      "Engineered end-to-end data pipeline from raw ERP data for Sahil Dresses.",
      "Developed high-impact sales analytics dashboard for inventory restocks.",
      "Automated weekly reporting mechanisms, saving hours of manual labor."
    ]
  },
  "PostgreSQL": {
    category: "Relational Database Management",
    stats: "Production Integration",
    details: [
      "Designed and optimized the database schema for the AGMIS academic platform.",
      "Handled secure student record authentication, tracking, and indexing.",
      "Implemented efficient querying mechanisms for real-time dashboard updates."
    ]
  },
  "Machine Learning": {
    category: "Intelligent Algorithms",
    stats: "Applied Practice",
    details: [
      "Constructed predictive academic scoring engines within the AGMIS system.",
      "Implemented NLP sentiment analysis algorithms for survey intelligence.",
      "Applied regression models to track and forecast performance trends."
    ]
  },
  "Prompt Engineering": {
    category: "Generative AI Systems",
    stats: "Systemic Reliability",
    details: [
      "Developed constraints-based templates for conversational AI lead qualification.",
      "Implemented multi-step agents using RAG architecture for healthcare & real estate.",
      "Mitigated hallucination risks to ensure reliable business output."
    ]
  },
  "Data Analytics": {
    category: "Data Processing Core",
    stats: "Pandas & SQL Specialist",
    details: [
      "Transformed raw, unstructured datasets into clean, analysis-ready formats.",
      "Conducted anomaly detection on business sales figures to increase margins.",
      "Created reproducible notebook workflows for stakeholder demonstrations."
    ]
  },
  "Automation": {
    category: "Systems Integration",
    stats: "Workflow Engineering",
    details: [
      "Integrated Web Audio visualizers and FastAPI backends for real-time demos.",
      "Automated notification triggers, email reports, and scheduling workflows.",
      "Optimized legacy operational systems with direct webhook connections."
    ]
  }
}

export function TrustBar() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)

  const handleCardClick = (skillName: string) => {
    setSelectedSkill(skillName)
    dialogRef.current?.showModal()
  }

  const handleClose = () => {
    dialogRef.current?.close()
    setSelectedSkill(null)
  }

  // Handle escape button and backdrop click
  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      handleClose()
    }
  }

  const activeHighlight = selectedSkill ? skillHighlights[selectedSkill] : null

  return (
    <section className="border-y border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
        <Reveal className="text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent-1">
            Core Expertise Grid · Click for Details
          </p>
        </Reveal>

        <Stagger className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {techSkills.map((tech) => {
            const Icon = iconMap[tech.icon]
            return (
              <StaggerItem key={tech.name}>
                <MagneticSkillCard pullAmount={12}>
                  <button
                    onClick={() => handleCardClick(tech.name)}
                    className="flowing-border w-24 sm:w-28 h-24 sm:h-28 rounded-2xl bg-card p-4 transition-all duration-300 flex flex-col items-center justify-center gap-2 hover:scale-[1.02] cursor-pointer shadow-lg outline-none focus-visible:ring-2 focus-visible:ring-accent-1 relative z-10"
                    aria-label={`View details for ${tech.name}`}
                  >
                    {Icon ? (
                      <Icon className="size-7 sm:size-9 transition-transform group-hover:scale-115 relative z-10" style={{ color: tech.color }} />
                    ) : (
                      <div className="size-7 sm:size-9 bg-muted rounded-md relative z-10" />
                    )}
                    <span className="text-[11px] font-semibold text-foreground truncate max-w-full relative z-10">{tech.name}</span>
                  </button>
                </MagneticSkillCard>
              </StaggerItem>
            )
          })}
        </Stagger>

        <Reveal className="mx-auto mt-12 max-w-2xl text-center" delay={0.1}>
          <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
            Click any skill node above to inspect my hands-on application pipelines, verified certifications, and business values.
          </p>
        </Reveal>
      </div>

      {/* Native HTML Dialog modal */}
      <dialog
        ref={dialogRef}
        onClick={handleBackdropClick}
        onClose={handleClose}
        className="dialog-modal rounded-3xl p-6 max-w-md w-full border border-border bg-card text-foreground outline-none shadow-2xl backdrop:bg-black/75 backdrop:backdrop-blur-sm relative overflow-hidden"
      >
        <div aria-hidden className="glow-accent-1 absolute -right-20 -top-20 size-60 rounded-full opacity-40" />

        {selectedSkill && activeHighlight && (
          <div className="relative z-10 flex flex-col gap-5">
            {/* Header */}
            <div className="flex justify-between items-start border-b border-border/60 pb-3">
              <div>
                <span className="text-[9px] font-bold text-accent-1 uppercase tracking-wider block mb-1">
                  {activeHighlight.category}
                </span>
                <h3 className="text-xl font-semibold tracking-tight text-foreground flex items-center gap-2">
                  {selectedSkill}
                </h3>
              </div>
              <button
                onClick={handleClose}
                className="rounded-lg p-1.5 hover:bg-secondary/50 text-muted-foreground hover:text-foreground transition-colors cursor-pointer outline-none"
                aria-label="Close dialog"
              >
                <X className="size-4.5" />
              </button>
            </div>

            {/* Stats / Badges */}
            <div className="flex items-center gap-2 bg-secondary/35 rounded-xl px-3 py-2 border border-border/40">
              <Award className="size-4 text-accent-1 shrink-0" />
              <span className="text-xs font-semibold text-muted-foreground">
                Verified: <span className="text-foreground">{activeHighlight.stats}</span>
              </span>
            </div>

            {/* List Details */}
            <div className="space-y-3">
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Hands-on Proofpoints</p>
              <ul className="space-y-2.5">
                {activeHighlight.details.map((detail, idx) => (
                  <li key={idx} className="flex gap-3 text-xs leading-relaxed text-muted-foreground">
                    <CheckCircle2 className="size-4 text-accent-3 mt-0.5 shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action close button */}
            <div className="flex justify-end gap-2 mt-2 pt-2 border-t border-border/40">
              <button
                onClick={handleClose}
                className="rounded-xl bg-accent-1 px-4 py-2 text-xs font-semibold text-white hover:bg-accent-1/90 shadow-md shadow-accent-1/25 transition-all cursor-pointer"
              >
                Got it
              </button>
            </div>
          </div>
        )}
      </dialog>
    </section>
  )
}

function MagneticSkillCard({ children, pullAmount = 12 }: { children: React.ReactNode; pullAmount?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const centerX = left + width / 2
    const centerY = top + height / 2

    // Calculate distance from center, scale to pullAmount
    const x = ((e.clientX - centerX) / (width / 2)) * pullAmount
    const y = ((e.clientY - centerY) / (height / 2)) * pullAmount

    setPosition({ x, y })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 180, damping: 14 }}
      className="group"
    >
      {children}
    </motion.div>
  )
}
