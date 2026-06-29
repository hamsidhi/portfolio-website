export type Project = {
  slug: string
  title: string
  fullTitle?: string
  category: 'Data Science & Analytics' | 'Machine Learning' | 'Automation' | 'Intelligent Systems'
  flagship: boolean
  comingSoon?: boolean
  summary: string
  tags: string[]
  href?: string // dedicated detail route, if any
  github?: string
  demo?: string
}

export const projects: Project[] = [
  {
    slug: 'agmis',
    title: 'AGMIS',
    fullTitle: 'Academic Guidance & Monitoring Intelligence System',
    category: 'Data Science & Analytics',
    flagship: true,
    summary:
      'Transforming educational data into actionable insights for students, teachers, and institutions.',
    tags: ['Data Analytics', 'Dashboards', 'EdTech', 'Business Intelligence'],
    href: '/projects/agmis',
    github: 'https://github.com/hamsidhi',
  },
  {
    slug: 'ai-voice-agent',
    title: 'AI Voice Agent',
    fullTitle: 'AI Voice Agent for Real Estate',
    category: 'Intelligent Systems',
    flagship: true,
    summary:
      'A voice agent that automates customer conversations, qualifies leads, and answers property questions 24/7 for a real estate business.',
    tags: ['Intelligent Automation', 'Data-Driven', 'Lead Qualification', 'Prompt Engineering'],
    href: '/projects/ai-voice-agent',
    demo: '#demo',
  },
  {
    slug: 'sentiment-analysis',
    title: 'Sentiment Analysis Engine',
    category: 'Machine Learning',
    flagship: false,
    summary:
      'An NLP pipeline that classifies customer feedback into actionable sentiment signals to support better business decisions.',
    tags: ['NLP', 'Machine Learning', 'Python', 'Analytics'],
    github: 'https://github.com/hamsidhi',
  },
  {
    slug: 'natural-voice-rag',
    title: 'Natural Voice RAG',
    category: 'Intelligent Systems',
    flagship: false,
    summary:
      'A Retrieval-Augmented Generation system with natural voice interaction that grounds answers in trusted documents.',
    tags: ['RAG', 'Voice', 'LLM', 'Vector Search'],
    github: 'https://github.com/hamsidhi',
  },
  {
    slug: 'healthcare-ai',
    title: 'Healthcare Intelligence',
    category: 'Data Science & Analytics',
    flagship: false,
    comingSoon: true,
    summary:
      'An upcoming healthcare analytics product focused on turning clinical and operational data into earlier, safer decisions.',
    tags: ['Healthcare Analytics', 'Data Science', 'Coming Soon'],
  },
]

export const projectCategories = [
  'All',
  'Data Science & Analytics',
  'Machine Learning',
  'Automation',
  'Intelligent Systems',
] as const

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}

// Ordered for selected/featured listings — AGMIS first, Voice Agent second.
export const orderedProjects = [...projects].sort((a, b) => {
  const order = ['agmis', 'ai-voice-agent']
  const ai = order.indexOf(a.slug)
  const bi = order.indexOf(b.slug)
  if (ai !== -1 || bi !== -1) {
    return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi)
  }
  return 0
})
