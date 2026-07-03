export interface ProjectCaseStudy {
  problem?: string;
  research?: string;
  userRoles?: { title: string; body: string }[];
  architecture?: string;
  dataPipeline?: string[];
  aiComponents?: string[];
  dashboards?: { title: string; body: string }[];
  futureRoadmap?: string[];
  clientProblem?: string;
  promptEngineering?: string;
  conversationFlow?: string[];
  costSavings?: string;
  technologies?: string[];
  galleryImages?: { src: string; alt: string; caption: string }[];
}

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
  image?: string // preview image path
  caseStudy?: ProjectCaseStudy
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
    image: '/assets/agmis/1.jpg',
    caseStudy: {
      problem: 'Educational institutions collect academic data constantly — grades, attendance, assessments — but rarely convert it into actionable insights. The data lives in spreadsheets and disconnected systems, so risks go unnoticed until it’s too late.',
      research: 'Through deep dives into institutional workflows, it became clear that each role sees only a fragment: students see a report card, faculty see a class, and administrators see summaries. Without a shared intelligence layer, no one can act early.',
      userRoles: [
        { title: 'Student Dashboard', body: 'Personalized view of performance, risks, and guidance to help students stay on track.' },
        { title: 'Faculty Dashboard', body: 'Class-level monitoring that surfaces struggling students early and supports interventions.' },
        { title: 'Principal / Admin Dashboard', body: 'Institution-wide analytics for decisions on resources, programs, and academic policy.' },
      ],
      architecture: 'A data pipeline ingests and cleans academic records into a consistent model. AI/ML components score risk and generate guidance. A presentation layer renders role-specific dashboards. The design favors clarity and maintainability.',
      dataPipeline: [
        'Data ingestion — automated extraction of records from ERP systems.',
        'Cleaning and validation — handling missing values and normalizing scales.',
        'Feature engineering — calculating rolling averages and momentum scores.',
      ],
      aiComponents: [
        'Risk scoring — predicting likelihood of academic probation.',
        'Context-aware guidance — tailored recommendations for study habits.',
      ],
      dashboards: [
        { title: 'Student View', body: 'Performance, risks, and personalized guidance in one place.' },
        { title: 'Faculty View', body: 'Early-warning signals and class-level monitoring.' },
      ],
      futureRoadmap: [
        'Predictive risk models for early dropout detection.',
        'Deeper personalization in the AI guidance engine.',
        'Parent and counselor views for a fuller support network.',
        'Integrations with existing LMS and ERP systems.',
        'Automated reporting for accreditation and reviews.',
      ],
      galleryImages: [
        { src: '/assets/agmis/1.jpg', alt: 'AGMIS Dashboard Overview', caption: 'Main dashboard with student performance overview' },
        { src: '/assets/agmis/2.jpg', alt: 'AGMIS Analytics View', caption: 'Analytics and monitoring dashboard' },
        { src: '/assets/agmis/3.jpg', alt: 'AGMIS Reports', caption: 'Detailed reports and insights view' },
      ],
    }
  },
  {
    slug: 'ai-voice-agent',
    title: 'AI Voice Agent',
    fullTitle: 'AI Voice Agent for Real Estate',
    category: 'Intelligent Systems',
    flagship: true,
    summary:
      'A voice agent that automates customer conversations, qualifies leads, and answers property questions 24/7 for a real estate business.',
    tags: ['Intelligent Automation', 'AI Voice', 'Lead Qualification', 'Prompt Engineering'],
    href: '/projects/ai-voice-agent',
    demo: 'https://vapi.ai?demo=true&shareKey=0dc98dc6-9b4d-49b6-9f7c-4933a0b3ded3&assistantId=5e52cf1e-3160-47db-befe-7eefb58fb02e',
    image: '/assets/voice-agent/1.png',
    caseStudy: {
      clientProblem: 'A real estate business was losing potential clients because calls came in around the clock, but staff could only respond during working hours. Routine questions about availability, pricing, and locations consumed time that the team needed for closing deals.',
      promptEngineering: 'The agent’s reliability comes from structure: a clear role, explicit goals, a step-by-step qualification framework, and guardrails for what it should and shouldn’t say. This keeps conversations natural while staying predictable and safe.',
      conversationFlow: [
        'Greeting and intent detection — understand why the caller is reaching out.',
        'Qualification — capture budget, location, timeline, and bedroom requirements.',
        'Property guidance — match needs to available listings and answer questions.',
        'Scheduling — collect contact details and route to a human agent for viewing.',
        'Graceful handoff — summarize the conversation and confirm next steps.',
      ],
      costSavings: 'Enabled 24/7 availability without additional staffing costs. Faster response times capture leads before competitors. Consistent qualification improves the quality of handed-off leads, resulting in an estimated 35% reduction in operational overhead for support.',
      technologies: [
        'Python', 'FastAPI', 'LLM Prompt Engineering', 'Speech-to-Text', 'Text-to-Speech',
        'Conversation State', 'Webhooks', 'Automation',
      ],
      galleryImages: [
        { src: '/assets/voice-agent/1.png', alt: 'AI Voice Agent Interface', caption: 'Voice agent conversation interface' },
        { src: '/assets/voice-agent/2.png', alt: 'AI Voice Agent Workflow', caption: 'Conversation workflow and automation' },
        { src: '/assets/voice-agent/3.png', alt: 'AI Voice Agent Features', caption: 'Feature overview and configuration' },
      ],
    }
  },
  {
    slug: 'doc-summarizer',
    title: 'Huntii Analyser',
    fullTitle: 'AI-Powered Multi-Document Analysis Tool',
    category: 'Intelligent Systems',
    flagship: false,
    summary:
      'A professional-grade multi-document analysis tool that extracts, analyzes, and synthesizes insights from financial, agricultural, educational, and other domain-specific documents using Groq LLMs.',
    tags: ['AI', 'NLP', 'Document Analysis', 'Streamlit', 'LLM'],
    href: '/projects/doc-summarizer',
    github: 'https://github.com/hamsidhi/Doc-summrizer',
    image: '/assets/doc-summarizer/1.png',
    caseStudy: {
      problem: 'Professionals across finance, agriculture, education, and other domains spend hours manually reading and extracting insights from multi-format documents. There was no unified tool to intelligently analyze PDFs, DOCX, and TXT files simultaneously while adapting to the specific domain context.',
      architecture: 'Built with Streamlit for the frontend and Groq LLMs (Llama 3.3 70B) as the intelligence engine. The system automatically detects document domains, extracts text and metadata, applies smart truncation for token limits, and generates investor-grade structured reports with key metrics, risks, and opportunities.',
      aiComponents: [
        'Domain detection — automatically identifies Finance, Tech, Agriculture, Education, etc. and adjusts the analysis framework.',
        'Intelligent extraction — automatic text extraction and metadata detection from PDF, DOCX, and TXT files.',
        'Smart truncation — preserves critical introductory and concluding contexts within model token limits.',
        'Structured synthesis — generates reports with key metrics, insights, risks, and opportunities.',
      ],
      technologies: [
        'Python', 'Streamlit', 'Groq API', 'Llama 3.3 70B', 'PyPDF2',
        'python-docx', 'mammoth', 'markdown', 'NLP',
      ],
      futureRoadmap: [
        'Support for Excel and CSV file analysis.',
        'Comparative analysis across multiple documents.',
        'Custom domain templates for specialized industries.',
        'Integration with cloud storage (Google Drive, Dropbox).',
        'Real-time collaborative analysis features.',
      ],
      galleryImages: [
        { src: '/assets/doc-summarizer/1.png', alt: 'Huntii Analyser Interface', caption: 'Main document upload and analysis interface' },
        { src: '/assets/doc-summarizer/2.png', alt: 'Document Analysis Results', caption: 'AI-generated analysis with key insights' },
        { src: '/assets/doc-summarizer/3.png', alt: 'Domain Detection', caption: 'Automatic domain detection and framework adaptation' },
        { src: '/assets/doc-summarizer/4.png', alt: 'Report Generation', caption: 'Professional report export in Word format' },
        { src: '/assets/doc-summarizer/5.png', alt: 'Multi-Document Support', caption: 'Simultaneous multi-format document processing' },
      ],
    }
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

export const orderedProjects = [...projects].sort((a, b) => {
  const order = ['agmis', 'ai-voice-agent', 'doc-summarizer']
  const ai = order.indexOf(a.slug)
  const bi = order.indexOf(b.slug)
  if (ai !== -1 || bi !== -1) {
    return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi)
  }
  return 0
})
