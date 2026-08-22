export const techSkills = [
  {
    name: 'Python',
    icon: 'SiPython',
    color: '#3776AB',
    description: 'Core backbone for AI systems, FastAPI backends, NLP pipelines, data processing, and automation CLI tools.',
  },
  {
    name: 'Power BI',
    icon: 'BarChart3',
    color: '#F2C811',
    description: 'Primary BI platform for transforming raw ERP exports into interactive dashboards and operational metrics.',
  },
  {
    name: 'PostgreSQL & SQL',
    icon: 'SiPostgresql',
    color: '#4169E1',
    description: 'Relational database querying, schema design, and transactional data storage for data platforms like AGMIS.',
  },
  {
    name: 'Machine Learning',
    icon: 'BrainCircuit',
    color: '#8B5CF6',
    description: 'Supervised ML modeling with Scikit-learn, TF-IDF vectorization, Naive Bayes, and predictive risk scoring.',
  },
  {
    name: 'RAG & AI Agents',
    icon: 'TbBrandOpenai',
    color: '#10A37F',
    description: 'Designing structured system prompts, vector document retrieval, and low-latency voice conversational agents.',
  },
  {
    name: 'Data Science & Pandas',
    icon: 'SiPandas',
    color: '#150458',
    description: 'Data cleaning, feature engineering, statistical analysis, and exploratory data visualization across large datasets.',
  },
  {
    name: 'Workflow Automation',
    icon: 'Workflow',
    color: '#F97316',
    description: 'Connecting APIs, webhooks, CLI scripts, and local LLM pipelines to eliminate manual operational overhead.',
  },
]

export interface SkillCategory {
  title: 'AI & LLM Systems' | 'Data Science & Analytics' | 'Automation' | 'Backend & Databases' | 'Business Intelligence' | 'Professional Mindset';
  skills: string[];
}

export const categorizedSkills: SkillCategory[] = [
  { title: 'AI & LLM Systems', skills: ['Applied AI', 'Prompt Engineering', 'RAG Systems', 'NLP', 'AI Agents', 'LLM Integration', 'Groq API', 'Ollama'] },
  { title: 'Data Science & Analytics', skills: ['Data Cleaning', 'Feature Engineering', 'Pandas', 'NumPy', 'Scikit-Learn', 'Statistical Modeling', 'Predictive Scoring'] },
  { title: 'Automation', skills: ['Workflow Automation', 'Webhooks', 'Process Optimization', 'CLI Tools', 'Media Automation', 'Automated Testing'] },
  { title: 'Backend & Databases', skills: ['Python', 'FastAPI', 'PostgreSQL', 'SQL', 'REST APIs', 'JSON Schema', 'Joblib'] },
  { title: 'Business Intelligence', skills: ['Power BI', 'Microsoft Excel', 'Data Visualization', 'Interactive Dashboards', 'KPI Tracking'] },
  { title: 'Professional Mindset', skills: ['Business Thinking', 'Product Ownership', 'Problem Solving', 'Technical Communication', 'Execution First'] },
]

export const whyWorkWithMe = [
  {
    title: 'Business-First Mindset',
    body: 'I start with the operational problem and target outcome, choosing technology that drives verifiable business results.',
  },
  {
    title: 'Production-Ready AI Systems',
    body: 'I engineer functional AI systems—voice agents, RAG search pipelines, and document synthesizers—backed by clean repositories.',
  },
  {
    title: 'Relentless Execution',
    body: 'Ideas become working code quickly. I ship fast, iterate deliberately, and focus on system reliability.',
  },
  {
    title: 'Product & UX Focus',
    body: 'I design applications for real users and real workflows, balancing interface clarity with technical efficiency.',
  },
  {
    title: 'Automation Bias',
    body: 'I identify repetitive manual bottlenecks and replace them with predictable script automations and webhooks.',
  },
  {
    title: 'Continuous Technical Growth',
    body: 'AI moves rapidly. I continuously build hands-on projects to translate new model capabilities into practical tools.',
  },
]

export const businessValue = [
  {
    title: '24/7 Service Availability',
    body: 'Automated AI agents handle customer inquiries instantly outside standard business hours.',
  },
  {
    title: 'Lower Operational Costs',
    body: 'Automating routine intake and reporting frees up team members for higher-leverage strategic work.',
  },
  {
    title: 'Instant Lead Qualification',
    body: 'Conversational agents structure and qualify customer intent before routing to sales teams.',
  },
  {
    title: 'Grounded & Predictable AI',
    body: 'Structured prompts and vector retrieval ensure AI outputs remain accurate, safe, and on-brand.',
  },
]

export interface CredentialLink {
  label: string
  url: string
}

export interface TimelineItem {
  title: string
  company: string
  date: string
  description: string
  achievements: string[]
  type: 'work' | 'education' | 'project' | 'leadership'
  credentialUrl?: string
  credentials?: CredentialLink[]
}

export const experienceTimeline: TimelineItem[] = [
  {
    title: 'Artificial Intelligence Intern',
    company: 'Codec Technologies',
    date: 'Jul 2026 – Aug 2026',
    description: 'Engineered intelligent AI workflows and predictive automation solutions in an AICTE & ICAC approved program.',
    achievements: [
      'Engineered machine learning pipelines and optimized model inference performance under weekly supervisor evaluations.',
      'Delivered production-grade IT project milestones covering data extraction, prompt engineering, and API integration ahead of target deadlines.',
      'Earned top performance evaluation ratings for delivering robust, validated technical deliverables.',
    ],
    type: 'work',
    credentials: [
      { label: 'View Offer Letter', url: '/assets/credentials/Codec_Technologies_AI_Intern_Offer_Letter.pdf' },
      { label: 'View Certificate', url: '/assets/credentials/Codec_Technologies_AI_Intern_Certificate.pdf' },
    ],
  },
  {
    title: 'Data Analyst Intern',
    company: 'Sahil Dresses',
    date: 'Dec 2023 – May 2024',
    description: 'Transformed operational sales and inventory data into actionable business intelligence dashboards.',
    achievements: [
      'Built end-to-end data processing pipelines converting raw ERP exports into interactive Power BI dashboards for management decision-making.',
      'Identified key sales anomalies and stock velocity metrics that improved inventory restocking efficiency.',
      'Automated recurring weekly reporting, eliminating manual spreadsheet entry and saving 5+ hours per week.',
    ],
    type: 'work',
    credentialUrl: '/assets/credentials/Sahil_Dresses.jpg',
  },
  {
    title: 'AI & Data Systems Development',
    company: 'Personal & Open Source Projects',
    date: '2024 – Present',
    description: 'Architected and published 10+ open-source AI applications, data analytics platforms, and automation tools on GitHub.',
    achievements: [
      'Architected AGMIS, an academic data intelligence platform with PostgreSQL integration and ML risk scoring.',
      'Developed a real-estate AI voice agent achieving 24/7 automated lead qualification and appointment scheduling.',
      'Created Huntii Analyser and Natural Voice RAG engines for multi-document synthesis and sub-4s voice Q&A.',
      'Created an autonomous n8n AI Restaurant Agent combining Mistral LLM, Simple Memory, and Google Sheets APIs for live menu & order automation.',
    ],
    type: 'project',
  },
  {
    title: 'BSc in Data Science',
    company: 'Atharva College of Engineering',
    date: '2022 – 2025',
    description: 'Academic degree in Data Science, Machine Learning, Statistical Modeling, and Relational Database Management.',
    achievements: [
      'Maintained CGPI of 8.5 with specialized focus on Python programming, scikit-learn models, and SQL/PostgreSQL databases.',
      'Completed practical coursework in business analytics, data visualization with Power BI, and machine learning pipelines.',
    ],
    type: 'education',
  },
  {
    title: 'National Cadet Corps (NCC) Leadership',
    company: 'NCC Unit',
    date: '2022 – 2024',
    description: 'Disciplined squad leadership, drill coordination, and operational team management under structured conditions.',
    achievements: [
      'Developed strong decision-making, crisis communication, and execution discipline across field exercises.',
      'Led cadet units in official drill parades and community outreach leadership initiatives.',
    ],
    type: 'leadership',
  },
  {
    title: 'State-Level Basketball Player',
    company: 'State Sports Association',
    date: '2021 – 2023',
    description: 'Competitive athlete representing regional teams in state-level championship tournaments.',
    achievements: [
      'Fostered high-pressure composure, split-second decision making, and team collaboration in competitive environments.',
    ],
    type: 'leadership',
  },
]

export interface Education {
  degree: string
  institution: string
  timeline: string
  cgpi?: string
  coursework?: string[]
}

export const educationTimeline: Education[] = [
  {
    degree: 'BSc in Data Science',
    institution: 'Atharva College of Engineering',
    timeline: '2022 – 2025',
    cgpi: '8.5',
    coursework: ['Machine Learning', 'Database Management (SQL)', 'Statistical Modeling', 'Python Programming', 'Data Visualization'],
  }
]

export interface Certification {
  name: string
  issuer: string
  logoPath?: string
  date?: string
  credentialUrl?: string
}

export const certificationsTier1: Certification[] = [
  { name: 'IBM SkillsBuild: AI Aware Certificate', issuer: 'IBM', credentialUrl: '/assets/credentials/Hamza_Siddiqui_AI_AWARE_CERTIFICATE.png', date: '2024' },
  { name: 'IBM SkillsBuild: AI Appreciate Certificate', issuer: 'IBM', credentialUrl: '/assets/credentials/Hamza_Siddiqui_AI_APPRECIATE_CERTIFICATE.png', date: '2024' },
  { name: 'Make Agentic AI Work for You', issuer: 'IBM', credentialUrl: '/assets/credentials/MakeAgenticAIWorkforYou_Badge20260407-30-d6j8n3.pdf', date: '2026' },
  { name: 'IBM SkillsBuild: Introduction to Retrieval-Augmented Generation', issuer: 'IBM', credentialUrl: '/assets/credentials/Digital_Sticker__Introduction_to_Retrieval-Augmented_Generation.png', date: '2024' },
  { name: 'IBM SkillsBuild: Unleashing the Power of AI Agents', issuer: 'IBM', credentialUrl: '/assets/credentials/Digital_Sticker_Unleashing_the_Power_of_AI_Agents.png', date: '2024' },
  { name: 'IBM SkillsBuild: The Rise of Multiagent Systems', issuer: 'IBM', credentialUrl: '/assets/credentials/Digital_Sticker_The_Rise_of_Multiagent_Systems.png', date: '2024' },
  { name: 'Microsoft Certified: Power BI', issuer: 'Microsoft', credentialUrl: '/assets/credentials/PowerBI.pdf', date: '2024' },
  { name: 'Microsoft Excel: Excel from Beginner to Advanced', issuer: 'Microsoft', credentialUrl: '/assets/credentials/Microsoft_Excel_-_Excel_from_Beginner_to_Advanced.pdf', date: '2024' },
]

export const certificationsTier2: Certification[] = [
  { name: 'Artificial Intelligence Intern Certificate', issuer: 'Codec Technologies', credentialUrl: '/assets/credentials/Codec_Technologies_AI_Intern_Certificate.pdf', date: '2026' },
  { name: 'Industrial Training: EV Conversion & Automotive Tech', issuer: 'GoGo A1', credentialUrl: '/assets/credentials/GOGOA1.jpg', date: '2023' },
  { name: 'Industry Training (Atharva)', issuer: 'Atharva Engineering', credentialUrl: '/assets/credentials/Indrustry_traning_(Atharva).jpg', date: '2023' },
  { name: 'Data Analyst Intern Certificate', issuer: 'Sahil Dresses', credentialUrl: '/assets/credentials/Sahil_Dresses.jpg', date: '2024' },
  { name: 'AI & Data Science Workshops', issuer: 'Skill Nation', credentialUrl: '/assets/credentials/Skill_Nation.jpg', date: '2023' },
  { name: 'Workshops Participation Certificate', issuer: 'Various', credentialUrl: '/assets/credentials/certificate.jpg', date: '2023' },
]
