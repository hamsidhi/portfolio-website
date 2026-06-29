export const techStack = [
  'Python',
  'Data Analytics',
  'Power BI',
  'PostgreSQL',
  'Machine Learning',
  'Applied AI',
  'Automation',
  'Data Science',
]

export const whyWorkWithMe = [
  {
    title: 'Business Thinking',
    body: 'I start from the problem and the outcome, not the framework. Technology is a means to a measurable result.',
  },
  {
    title: 'Applied Data Science & AI',
    body: 'I build data-driven products people actually use — predictive analytics, intelligent agents, and scalable data systems, not just demos.',
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
    body: 'Data science and AI move fast. I keep learning deliberately and translate new capabilities into practical business value.',
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
  },
  {
    role: 'Independent Data Science & Analytics Development',
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
      'Applied coursework toward real, deployable data science and AI projects.',
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
}

export const certificationsTier1: Certification[] = [
  { title: 'IBM SkillsBuild', issuer: 'IBM' },
  { title: 'Make Agentic AI Work for You', issuer: 'IBM' },
  { title: 'Introduction to Retrieval-Augmented Generation', issuer: 'IBM' },
  { title: 'Unleashing the Power of AI Agents', issuer: 'IBM' },
  { title: 'The Rise of Multiagent Systems', issuer: 'IBM' },
  { title: 'Intel AI For All', issuer: 'Intel' },
  { title: 'Microsoft Excel', issuer: 'Microsoft' },
  { title: 'Power BI', issuer: 'Microsoft' },
]

export const certificationsTier2: Certification[] = [
  { title: 'AI & Data Science Workshops', issuer: 'Various' },
  { title: 'Participation Certificates', issuer: 'Various' },
  { title: 'Supporting Learning Credentials', issuer: 'Various' },
]
