export type Project = {
  slug: string
  title: string
  fullTitle?: string
  category: 'AI Products' | 'Data Science / Machine Learning' | 'Automation' | 'RAG / Voice Systems'
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
    category: 'AI Products',
    flagship: true,
    summary:
      'Transforming educational data into actionable insights for students, teachers, and institutions.',
    tags: ['AI Product', 'Analytics', 'EdTech', 'Dashboards', 'Product Thinking'],
    href: '/projects/agmis',
    github: 'https://github.com/hamsidhi',
  },
  {
    slug: 'ai-voice-agent',
    title: 'AI Voice Agent',
    fullTitle: 'AI Voice Agent for Real Estate',
    category: 'RAG / Voice Systems',
    flagship: true,
    summary:
      'A voice agent that automates customer conversations, qualifies leads, and answers property questions 24/7 for a real estate business.',
    tags: ['AI Voice', 'Automation', 'Lead Qualification', 'Prompt Engineering', 'Business'],
    href: '/projects/ai-voice-agent',
    demo: '#demo',
  },
  {
    slug: 'sentiment-analysis',
    title: 'Sentiment Analysis Engine',
    category: 'Data Science / Machine Learning',
    flagship: false,
    summary:
      'An NLP pipeline that classifies customer feedback into actionable sentiment signals to support better business decisions.',
    tags: ['NLP', 'Machine Learning', 'Python', 'Analytics'],
    github: 'https://github.com/hamsidhi',
  },
  {
    slug: 'natural-voice-rag',
    title: 'Natural Voice RAG',
    category: 'RAG / Voice Systems',
    flagship: false,
    summary:
      'A Retrieval-Augmented Generation system with natural voice interaction that grounds answers in trusted documents.',
    tags: ['RAG', 'Voice', 'LLM', 'Vector Search'],
    github: 'https://github.com/hamsidhi',
  },
  {
    slug: 'healthcare-ai',
    title: 'Healthcare Intelligence',
    category: 'AI Products',
    flagship: false,
    comingSoon: true,
    summary:
      'An upcoming healthcare intelligence product focused on turning clinical and operational data into earlier, safer decisions.',
    tags: ['Healthcare AI', 'Analytics', 'Coming Soon'],
  },
]

export const projectCategories = [
  'All',
  'AI Products',
  'Data Science / Machine Learning',
  'Automation',
  'RAG / Voice Systems',
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
