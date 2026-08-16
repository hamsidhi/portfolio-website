export const techSkills = [
  {
    name: 'Python',
    icon: 'SiPython',
    color: '#3776AB',
    description: 'The backbone of my AI systems. I use it for building FastAPI backends, NLP pipelines, and data processing scripts.',
  },
  {
    name: 'Power BI',
    icon: 'BarChart3',
    color: '#F2C811',
    description: 'My go-to tool for business intelligence. I build interactive dashboards that translate raw ERP data into strategic insights.',
  },
  {
    name: 'PostgreSQL',
    icon: 'SiPostgresql',
    color: '#4169E1',
    description: 'My primary relational database. I use it to securely store and query complex data for applications like AGMIS.',
  },
  {
    name: 'Machine Learning',
    icon: 'BrainCircuit',
    color: '#8B5CF6',
    description: 'Applied ML models. I focus on practical implementations like sentiment analysis and predictive scoring.',
  },
  {
    name: 'Prompt Engineering',
    icon: 'TbBrandOpenai',
    color: '#10A37F',
    description: 'Crafting structured, constraint-based prompts to make LLMs predictable and reliable for business workflows.',
  },
  {
    name: 'Data Analytics',
    icon: 'SiPandas',
    color: '#150458',
    description: 'Processing and cleaning messy datasets. I transform raw data into analysis-ready formats for stakeholders.',
  },
  {
    name: 'Automation',
    icon: 'Workflow',
    color: '#F97316',
    description: 'Connecting systems together. I design automated pipelines and webhooks that eliminate repetitive manual work.',
  },
]

export interface SkillCategory {
  title: 'AI' | 'Data' | 'Automation' | 'Backend' | 'BI' | 'Soft Skills';
  skills: string[];
}

export const categorizedSkills: SkillCategory[] = [
  { title: 'AI', skills: ['Applied AI', 'Prompt Engineering', 'RAG Systems', 'NLP', 'AI Agents', 'LLMs'] },
  { title: 'Data', skills: ['Data Cleaning', 'Data Engineering', 'Pandas', 'SQL'] },
  { title: 'Automation', skills: ['Workflow Automation', 'Webhooks', 'Process Optimization', 'Voice Systems'] },
  { title: 'Backend', skills: ['Python', 'FastAPI', 'PostgreSQL', 'REST APIs'] },
  { title: 'BI', skills: ['Power BI', 'Excel', 'Data Visualization', 'Business Dashboards'] },
  { title: 'Soft Skills', skills: ['Business Thinking', 'Product Ownership', 'Problem Solving', 'Communication'] },
]

export const whyWorkWithMe = [
  {
    title: 'Business Thinking',
    body: 'I start from the problem and the outcome, not the framework. Technology is a means to a measurable result.',
  },
  {
    title: 'Applied AI & Data Science',
    body: 'I build AI-driven products people actually use — predictive analytics, intelligent agents, and scalable data systems, not just demos.',
  },
  {
    title: 'Execution',
    body: 'Ideas turn into production-ready systems. I ship, iterate, and pay attention to the details that matter.',
  },
  {
    title: 'Product Thinking',
    body: 'I design for real users and real workflows, balancing usefulness, clarity, and long-term maintainability.',
  },
  {
    title: 'Automation Mindset',
    body: 'I look for repetitive, manual work and replace it with reliable automation that frees people for higher-value tasks.',
  },
  {
    title: 'Continuous Learning',
    body: 'AI moves fast. I keep learning deliberately and translate new capabilities into practical business value.',
  },
]

export const businessValue = [
  {
    title: '24/7 Availability',
    body: 'Customers are answered any time of day without additional staffing.',
  },
  {
    title: 'Reduced Operational Cost',
    body: 'Automating routine conversations lowers the cost of customer support.',
  },
  {
    title: 'Lead Qualification',
    body: 'Conversations capture intent and qualify leads before they reach the team.',
  },
  {
    title: 'Natural Conversations',
    body: 'Structured prompts keep responses human, helpful, and on-brand.',
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
    description: 'Engineered AI workflows and intelligent solutions in an AICTE & ICAC approved internship program.',
    achievements: [
      'Gained hands-on industry experience building AI solutions and optimizing algorithmic performance under weekly supervisor evaluations.',
      'Worked on real-world IT and business consultancy project deliverables across intelligent data pipelines and model implementations.',
      'Earned high performance ratings for delivering quality project milestones ahead of deadlines.',
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
    description: 'Transformed business data into strategic insights for operational decision-making.',
    achievements: [
      'Engineered an end-to-end data pipeline from raw ERP exports to interactive Power BI dashboards.',
      'Identified sales anomalies that improved inventory restocking efficiency.',
      'Automated weekly reporting, saving hours of manual data entry per week.',
    ],
    type: 'work',
    credentialUrl: '/assets/credentials/Sahil_Dresses.jpg',
  },
  {
    title: 'AI & Data Science Development',
    company: 'Personal Projects',
    date: '2024 – Present',
    description: 'Building practical, production-ready AI systems and automations.',
    achievements: [
      'Architected AGMIS, an academic data intelligence platform with secure PostgreSQL integration.',
      'Developed a real-estate AI voice agent capable of autonomous lead qualification.',
      'Designed automated workflow automations and RAG search pipelines.',
    ],
    type: 'project',
  },
  {
    title: 'BSc in Data Science',
    company: 'Atharva College of Engineering',
    date: '2022 – 2025',
    description: 'Academic foundation in Data Science, Machine Learning, Statistics, and Database Management.',
    achievements: [
      'Specialized in Python programming, machine learning models, and SQL/PostgreSQL databases.',
      'Completed practical coursework in business intelligence and data visualization with Power BI.',
    ],
    type: 'education',
  },
  {
    title: 'National Cadet Corps (NCC) Leadership',
    company: 'NCC Unit',
    date: '2022 – 2024',
    description: 'Rigorous discipline, squad leadership, and teamwork in structured operational environments.',
    achievements: [
      'Developed strong leadership, communication, and decision-making under high-pressure scenarios.',
      'Led cadet units in drill exercises and community outreach programs.',
    ],
    type: 'leadership',
  },
  {
    title: 'State-Level Basketball Player',
    company: 'State Sports Association',
    date: '2021 – 2023',
    description: 'Competitive athlete representing at state-level sports competitions.',
    achievements: [
      'Mastered teamwork, adaptability, composure under pressure, and relentless execution.',
      'Fostered collaborative strategies and fast-paced communication in team settings.',
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
    institution: 'University Placeholder',
    timeline: '2022 - Present',
    cgpi: '8.5',
    coursework: ['Machine Learning', 'Database Management', 'Statistical Modeling', 'Data Structures'],
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
  { name: 'Industry Training (Atharva)', issuer: 'Atharva', credentialUrl: '/assets/credentials/Indrustry_traning_(Atharva).jpg', date: '2023' },
  { name: 'Data Analyst Intern Certificate', issuer: 'Sahil Dresses', credentialUrl: '/assets/credentials/Sahil_Dresses.jpg', date: '2024' },
  { name: 'AI & Data Science Workshops', issuer: 'Skill Nation', credentialUrl: '/assets/credentials/Skill_Nation.jpg', date: '2023' },
  { name: 'Workshops Participation Certificate', issuer: 'Various', credentialUrl: '/assets/credentials/certificate.jpg', date: '2023' },
]
