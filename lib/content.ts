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

export const skillCategories = [
  {
    title: 'AI & Machine Learning',
    skills: ['Applied AI', 'Prompt Engineering', 'RAG Systems', 'NLP', 'AI Agents', 'LLMs'],
  },
  {
    title: 'Data & Analytics',
    skills: ['Power BI', 'Data Cleaning', 'ERP Data', 'Business Intelligence', 'Excel', 'Data Visualization'],
  },
  {
    title: 'Engineering',
    skills: ['Python', 'FastAPI', 'PostgreSQL', 'GitHub', 'REST APIs', 'Webhooks'],
  },
  {
    title: 'Automation & Product',
    skills: ['Workflow Automation', 'Voice Systems', 'Product Thinking', 'System Design', 'Speech-to-Text', 'Text-to-Speech'],
  },
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

export type Experience = {
  role: string
  org: string
  location: string
  period: string
  type: 'work' | 'education' | 'project' | 'leadership'
  points: string[]
  credential?: string
}

export const timeline: Experience[] = [
  {
    role: 'Data Analyst Intern',
    org: 'Sahil Dresses',
    location: 'Mumbai, India',
    period: 'Dec 2023 – May 2024',
    type: 'work',
    points: [
      'Collected and transformed ERP business data into analysis-ready datasets.',
      'Performed data cleaning and validation to improve reporting accuracy.',
      'Built Excel and Power BI reports for business stakeholders.',
      'Identified trends and anomalies that supported operational decisions.',
      'Collaborated with business teams to translate questions into insights.',
    ],
    credential: '/assets/credentials/Sahil_Dresses.jpg',
  },
  {
    role: 'Independent AI & Data Science Development',
    org: 'Personal Projects',
    location: 'Remote',
    period: 'Ongoing',
    type: 'project',
    points: [
      'Designed and built AGMIS, an academic data analytics and intelligence platform.',
      'Developed an AI Voice Agent to automate real-estate lead qualification.',
      'Explored RAG, sentiment analysis, and automation systems end to end.',
    ],
  },
  {
    role: 'BSc Data Science',
    org: 'University',
    location: 'India',
    period: 'In Progress',
    type: 'education',
    points: [
      'Foundations in statistics, machine learning, and data engineering.',
      'Applied coursework toward real, deployable AI and data science projects.',
    ],
  },
  {
    role: 'National Cadet Corps (NCC)',
    org: 'NCC',
    location: 'India',
    period: 'Cadet',
    type: 'leadership',
    points: [
      'Developed discipline, structure, and a steady approach under pressure.',
    ],
  },
  {
    role: 'State-Level Basketball',
    org: 'Competitive Athletics',
    location: 'India',
    period: 'Player',
    type: 'leadership',
    points: [
      'Competed at state level — teamwork, consistency, and resilience.',
    ],
  },
]

export type Certification = {
  title: string
  issuer: string
  image?: string
  credential?: string
}

export const certificationsTier1: Certification[] = [
  { title: 'IBM SkillsBuild', issuer: 'IBM', credential: '/assets/credentials/Hamza_Siddiqui_AI_AWARE_CERTIFICATE.png' },
  { title: 'Make Agentic AI Work for You', issuer: 'IBM', credential: '/assets/credentials/MakeAgenticAIWorkforYou_Badge20260407-30-d6j8n3.pdf' },
  { title: 'Introduction to Retrieval-Augmented Generation', issuer: 'IBM', credential: '/assets/credentials/Digital_Sticker__Introduction_to_Retrieval-Augmented_Generation.png' },
  { title: 'Unleashing the Power of AI Agents', issuer: 'IBM', credential: '/assets/credentials/Digital_Sticker_Unleashing_the_Power_of_AI_Agents.png' },
  { title: 'The Rise of Multiagent Systems', issuer: 'IBM', credential: '/assets/credentials/Digital_Sticker_The_Rise_of_Multiagent_Systems.png' },
  { title: 'Intel AI For All', issuer: 'Intel', credential: '/assets/credentials/Hamza_Siddiqui_AI_APPRECIATE_CERTIFICATE.png' },
  { title: 'Microsoft Excel', issuer: 'Microsoft', credential: '/assets/credentials/Microsoft_Excel_-_Excel_from_Beginner_to_Advanced.pdf' },
  { title: 'Power BI', issuer: 'Microsoft', credential: '/assets/credentials/PowerBI.pdf' },
]

export const certificationsTier2: Certification[] = [
  { title: 'AI & Data Science Workshops', issuer: 'Various', credential: '/assets/credentials/Skill_Nation.jpg' },
  { title: 'Participation Certificates', issuer: 'Various', credential: '/assets/credentials/certificate.jpg' },
  { title: 'Supporting Learning Credentials', issuer: 'Various', credential: '/assets/credentials/Indrustry_traning_(Atharva).jpg' },
  { title: 'GoGo A1 Vehicle Conversions', issuer: 'GoGo A1', credential: '/assets/credentials/GOGOA1.jpg' },
]
