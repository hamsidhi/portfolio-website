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

export type ProjectCategory = 
  | 'AI & LLM Systems' 
  | 'Data Science & Analytics' 
  | 'Machine Learning' 
  | 'Automation' 
  | 'Research/Academic Systems';

export type Project = {
  slug: string
  title: string
  fullTitle?: string
  category: ProjectCategory
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
      'An intelligent academic data platform engineered with FastAPI, PostgreSQL, and scikit-learn to score student performance risk and deliver automated guidance.',
    tags: ['Data Analytics', 'FastAPI', 'PostgreSQL', 'Scikit-Learn', 'EdTech'],
    href: '/projects/agmis',
    github: 'https://github.com/hamsidhi/AGMIS',
    image: '/assets/agmis/1.jpg',
    caseStudy: {
      problem: 'Educational institutions collect vast amounts of academic data—grades, attendance, and assessment scores—which remain siloed in static spreadsheets. Risk factors for student probation or dropout are often discovered too late for effective intervention.',
      research: 'Interviews with faculty and institutional leadership revealed that students, teachers, and administrators view isolated fragments of performance data. Creating a unified intelligence layer bridges this gap, giving stakeholders proactive early warnings.',
      userRoles: [
        { title: 'Student Dashboard', body: 'Personalized analytics showing current trajectory, grade momentum, risk indicators, and customized study guidance.' },
        { title: 'Faculty View', body: 'Class-wide monitoring dashboard identifying struggling students early to enable targeted academic support.' },
        { title: 'Executive Admin Dashboard', body: 'Institution-wide reporting on overall performance trends, course pass rates, and policy impact.' },
      ],
      architecture: 'Lightweight FastAPI backend connected to a PostgreSQL database. Data pipelines normalize raw ERP records, extract rolling performance features, and feed a scikit-learn model to output risk scores and rule-based advice.',
      dataPipeline: [
        'Automated data ingestion from standardized CSV/ERP exports into PostgreSQL.',
        'Data cleaning, missing value handling, and grade scale normalization.',
        'Feature engineering computing rolling grade momentum and attendance risk factors.',
      ],
      aiComponents: [
        'Supervised machine learning classification for student risk scoring.',
        'Rule-based expert decision system generating actionable guidance recommendations.',
      ],
      dashboards: [
        { title: 'Student View', body: 'Performance metrics, risk status, and personalized study milestones.' },
        { title: 'Faculty View', body: 'Class roster heatmaps and early warning alerts.' },
      ],
      futureRoadmap: [
        'Integration with Canvas and Moodle LMS webhooks for real-time grade sync.',
        'Deep learning sequential models for long-term degree completion forecasting.',
        'Automated notification engine pushing risk alerts via email and WhatsApp API.',
      ],
      galleryImages: [
        { src: '/assets/agmis/1.jpg', alt: 'AGMIS Student Dashboard Overview', caption: 'Main student performance and academic risk dashboard' },
        { src: '/assets/agmis/2.jpg', alt: 'AGMIS Analytics View', caption: 'Faculty analytics and intervention tracking interface' },
        { src: '/assets/agmis/3.jpg', alt: 'AGMIS Administrative Reports', caption: 'Administrative reporting and policy analysis view' },
        { src: '/assets/agmis/4.jpg', alt: 'AGMIS Subject Trajectory', caption: 'Detailed course and subject performance breakdown' },
        { src: '/assets/agmis/5.jpg', alt: 'AGMIS Risk Indicators', caption: 'Attendance monitoring and automated warning system' },
        { src: '/assets/agmis/6.jpg', alt: 'AGMIS ML Recommendations', caption: 'Scikit-learn model risk scoring and recommendation engine' },
      ],
    }
  },
  {
    slug: 'ai-voice-agent',
    title: 'AI Voice Agent',
    fullTitle: 'AI Voice Agent for Real Estate Lead Qualification',
    category: 'AI & LLM Systems',
    flagship: true,
    summary:
      'Autonomous voice agent automating inbound customer inquiries, property consultations, and lead qualification 24/7 with zero support latency.',
    tags: ['AI Voice', 'LLM Prompt Engineering', 'FastAPI', 'Webhooks', 'Vapi.ai'],
    href: '/projects/ai-voice-agent',
    demo: 'https://vapi.ai?demo=true&shareKey=0dc98dc6-9b4d-49b6-9f7c-4933a0b3ded3&assistantId=5e52cf1e-3160-47db-befe-7eefb58fb02e',
    image: '/assets/voice-agent/1.png',
    caseStudy: {
      clientProblem: 'Real estate agencies lose high-intent leads during non-business hours. Human sales agents spend excessive time asking repetitive intake questions regarding budget, location preferences, and timelines instead of focusing on closing deals.',
      promptEngineering: 'Engineered a multi-stage prompt state machine with explicit system instructions, role guardrails, and structured turn-taking logic. The LLM extracts buyer metadata while maintaining a natural, empathetic tone.',
      conversationFlow: [
        'Greeting & Intent Detection — Warmly greet caller and classify inquiry context.',
        'Structured Lead Qualification — Collect budget range, preferred locations, property type, and target timeline.',
        'Knowledge Grounding — Match buyer parameters against available property listings in real time.',
        'Appointment Scheduling — Confirm callback preferences and write lead data via webhook.',
      ],
      costSavings: 'Provides 24/7 coverage with immediate responses. Eliminates missed after-hours leads, boosting qualified sales pipeline volume while reducing manual support overhead by an estimated 35%.',
      technologies: [
        'Python', 'FastAPI', 'LLM Prompt Engineering', 'Vapi.ai SDK', 'Speech-to-Text', 'Text-to-Speech', 'Webhooks',
      ],
      galleryImages: [
        { src: '/assets/voice-agent/1.png', alt: 'AI Voice Agent Interface', caption: 'Voice agent call simulation and state monitoring' },
        { src: '/assets/voice-agent/2.png', alt: 'AI Voice Agent Workflow', caption: 'Conversation state machine and webhook triggers' },
        { src: '/assets/voice-agent/3.png', alt: 'AI Voice Agent Features', caption: 'System prompt architecture and guardrail configurations' },
      ],
    }
  },
  {
    slug: 'doc-summarizer',
    title: 'Huntii Analyser',
    fullTitle: 'AI-Powered Multi-Document Analysis & Synthesis Engine',
    category: 'AI & LLM Systems',
    flagship: true,
    summary:
      'Multi-document intelligence tool powered by Groq LLMs (Llama 3.3 70B) that ingests PDFs, DOCX, and TXT files to synthesize domain-specific reports and insights.',
    tags: ['Groq API', 'Llama 3.3 70B', 'Streamlit', 'Python', 'NLP'],
    href: '/projects/doc-summarizer',
    github: 'https://github.com/hamsidhi/Doc-summrizer',
    image: '/assets/doc-summarizer/1.png',
    caseStudy: {
      problem: 'Analysts in finance, agriculture, and tech waste hours reading multi-page documents to extract key metrics, risks, and strategic takeaways. Generic tools lack domain awareness and struggle with context length constraints across multiple file formats.',
      architecture: 'Streamlit frontend paired with high-throughput Groq cloud inference running Llama 3.3 70B. Built-in domain detection automatically selects tailored analysis frameworks (Finance, AgTech, Education, Legal). Smart token truncation preserves critical headers and executive summaries.',
      aiComponents: [
        'Domain Auto-Classifier — Identifies sector context to dynamically apply domain-tailored extraction prompts.',
        'Multi-Format Ingestion — Parses PDF (PyPDF2), DOCX (python-docx), and TXT files simultaneously.',
        'Token-Aware Smart Truncation — Maintains contextual balance between document introduction, data tables, and conclusions.',
        'Export Synthesizer — Generates formatted Word (.docx) executive briefs ready for stakeholder distribution.',
      ],
      technologies: [
        'Python', 'Streamlit', 'Groq API', 'Llama 3.3 70B', 'PyPDF2', 'python-docx', 'mammoth', 'NLP',
      ],
      futureRoadmap: [
        'Support for tabular datasets (.xlsx, .csv) with integrated chart generation.',
        'RAG vector store integration for instant cross-document semantic searching.',
        'Multi-lingual summary translation into 10+ languages.',
      ],
      galleryImages: [
        { src: '/assets/doc-summarizer/1.png', alt: 'Huntii Analyser Interface', caption: 'Multi-document drag-and-drop upload console' },
        { src: '/assets/doc-summarizer/2.png', alt: 'Document Analysis Results', caption: 'AI-synthesized domain executive report' },
        { src: '/assets/doc-summarizer/3.png', alt: 'Domain Detection', caption: 'Automatic domain detection adapting prompt frameworks' },
        { src: '/assets/doc-summarizer/4.png', alt: 'Comparative Document Insights', caption: 'Cross-document metrics extraction and key takeaways' },
        { src: '/assets/doc-summarizer/5.png', alt: 'Word Export & Summary Generation', caption: 'Instant Word (.docx) brief generator interface' },
      ],
    }
  },
  {
    slug: 'n8n-restaurant-bot',
    title: 'n8n AI Restaurant Agent',
    fullTitle: 'n8n Autonomous AI Restaurant Support & Order Agent',
    category: 'Automation',
    flagship: true,
    summary:
      'Autonomous AI agent workflow built in n8n leveraging Mistral Cloud LLM, Simple Memory session buffer, and live Google Sheets integrations for 24/7 menu lookups, inventory verification, and automated order booking.',
    tags: ['n8n', 'AI Agents', 'Mistral AI', 'Google Sheets API', 'Workflow Automation', 'Webhooks'],
    href: '/projects/n8n-restaurant-bot',
    demo: 'https://lnkd.in/p/d57qjPjt',
    image: '/assets/n8n-restaurant-bot/1.png',
    caseStudy: {
      clientProblem: 'MDA Restaurant experienced peak-hour customer support bottlenecks where manual staff spent hours handling repetitive chat inquiries regarding daily menu items, stock availability, and order intake instead of focusing on food preparation.',
      architecture: 'n8n visual workflow orchestrating an AI Agent node connected to Mistral Cloud Chat Model, Simple Memory session buffer, and dynamic Google Sheets tool endpoints (`Get Inventory`, `Get FAQ`, `Get Orders`) for real-time data reads and transactional appends.',
      aiComponents: [
        'AI Agent Node (ReAct Framework) — Dynamically parses incoming chat intents and invokes appropriate tools.',
        'Mistral Cloud Chat Model — Delivers high-precision natural language understanding and menu recommendations.',
        'Simple Memory Buffer — Maintains conversation state across multi-turn customer chat sessions.',
        'Google Sheets Tool Suite — Performs real-time stock checks (`read: sheet`) and logs customer bookings (`append: sheet`).',
      ],
      dataPipeline: [
        'Real-time webhook trigger capturing incoming customer messages.',
        'Dynamic tool selection querying `Get Inventory` or `Get FAQ` based on intent classification.',
        'Transactional record append to `Get Orders` spreadsheet upon order confirmation.',
      ],
      conversationFlow: [
        'Greeting & Options Presentation — Welcomes customer with interactive choices (Place order, View menu, Info, Order status).',
        'Live Inventory Query — Retrieves real-time stock counts (e.g. Veg Thali: 10, Chicken Thali: 15 available).',
        'FAQ & Policy Lookup — Answers inquiries regarding operating hours, delivery parameters, and dish details.',
        'Order Intake & Sheet Append — Collects items, confirms order, and writes record directly to live Google Sheet.',
      ],
      costSavings: 'Delivers sub-6-second (5.859s) responses using ~2,344 tokens per query. Eliminates 100% of routine menu inquiry overhead and provides 24/7 automated order booking.',
      technologies: [
        'n8n', 'Mistral Cloud AI', 'Google Sheets API', 'Webhooks', 'ReAct AI Agents', 'JSON Schema', 'REST APIs',
      ],
      galleryImages: [
        { src: '/assets/n8n-restaurant-bot/1.png', alt: 'n8n AI Agent Workflow Canvas & Execution Logs', caption: 'n8n visual workflow canvas showing AI Agent connected to Mistral LLM, Memory, and Google Sheets tools with live chat logs' },
      ],
      futureRoadmap: [
        'Integration with WhatsApp Business API and Telegram messaging webhooks.',
        'Stripe payment gateway integration for automated order pre-payment.',
        'PostgreSQL database migration for multi-branch concurrent order processing.',
      ],
    }
  },
  {
    slug: 'spam-email-classifier',
    title: 'Spam Message & Email Classifier',
    fullTitle: 'Grand Line Message Bounty Detector — NLP Classifier',
    category: 'Machine Learning',
    flagship: false,
    summary:
      'Binary text classification pipeline coupling TF-IDF vectorization with Multinomial Naive Bayes to classify spam messages with 100% precision on test data.',
    tags: ['NLP', 'Scikit-Learn', 'TF-IDF', 'Naive Bayes', 'Python', 'CLI'],
    href: '/projects/spam-email-classifier',
    github: 'https://github.com/hamsidhi/Spam-Email-Classifier',
    image: '/assets/projects/spam-email-classifier/1.png',
    caseStudy: {
      problem: 'Unsolicited promotional and fraudulent spam messages clutter user communication and pose security risks. Building a lightweight, high-precision NLP engine is essential to eliminate false alarms where critical messages are misclassified.',
      architecture: 'Scikit-learn unified pipeline encapsulating text preprocessing, sublinear TF-IDF vectorization (`sublinear_tf=True`), and a Multinomial Naive Bayes classifier. Evaluated on 5,572 records with stratified 80/20 train/test splitting.',
      dataPipeline: [
        'Raw dataset parsing and validation over 5,572 records (4,825 ham, 747 spam).',
        'Accent normalization and sublinear TF-IDF feature extraction inside pipeline.',
        'Stratified 80/20 train/test split ensuring zero data leakage.',
      ],
      aiComponents: [
        'Multinomial Naive Bayes probabilistic intent scoring.',
        'Model serialization using `joblib` for instant real-time CLI inference.',
      ],
      costSavings: 'Achieved 95.96% accuracy and 100.00% precision on evaluated test set (0 false positives), ensuring legitimate messages are never lost.',
      technologies: [
        'Python', 'Scikit-Learn', 'Pandas', 'TF-IDF', 'Joblib', 'PowerShell CLI',
      ],
      futureRoadmap: [
        'Expand evaluation to MIME email header datasets (Enron Spam & SpamAssassin).',
        'Incorporate bi-gram and tri-gram n-gram features.',
        'Build a FastAPI microservice endpoint for live web UI integration.',
      ],
      galleryImages: [
        { src: '/assets/spam-email-classifier/1.png', alt: 'Spam Classifier Dashboard', caption: 'Interactive web frontend interface for spam detection' },
        { src: '/assets/spam-email-classifier/2.png', alt: 'Model Metrics & Evaluation', caption: 'Classification matrix and confusion matrix evaluation' },
        { src: '/assets/spam-email-classifier/3.png', alt: 'TF-IDF Feature Analysis', caption: 'Sublinear TF-IDF feature weight breakdown' },
        { src: '/assets/spam-email-classifier/4.png', alt: 'CLI Batch Processing', caption: 'High-speed CLI batch message bounty detector' },
      ],
    }
  },
  {
    slug: 'natural-voice-rag',
    title: 'Natural Voice RAG',
    fullTitle: 'Ultra-Fast Natural Voice Retrieval-Augmented Generation Engine',
    category: 'AI & LLM Systems',
    flagship: false,
    summary:
      'Offline RAG system combining vector document search (Phi-3:mini via Ollama) with natural human speech synthesis, delivering grounded audio answers in under 4 seconds.',
    tags: ['RAG', 'Ollama', 'Phi-3:mini', 'Voice AI', 'Vector Search', 'Streamlit'],
    href: '/projects/natural-voice-rag',
    github: 'https://github.com/hamsidhi/Natural-Voice-RAG',
    caseStudy: {
      problem: 'Traditional document Q&A tools require users to read long text responses. Existing voice RAG solutions suffer from high latency (>15 seconds), making spoken interaction frustrating.',
      architecture: 'Local Streamlit UI connected to an offline vector index and Ollama running Phi-3:mini. Document chunks are retrieved via semantic embedding comparison, fed to the LLM for grounded answer generation, and synthesized into speech via low-latency local TTS.',
      aiComponents: [
        'Document Chunking & Vector Indexing for instant similarity lookup.',
        'Phi-3:mini LLM for grounded, hallucination-resistant answer generation.',
        'Sub-4-second speech synthesis engine converting text answers into natural audio.',
      ],
      technologies: ['Python', 'Streamlit', 'Ollama', 'Phi-3:mini', 'Vector Store', 'TTS Engine'],
    }
  },
  {
    slug: 'codeexplainer',
    title: 'CodeExplainer',
    fullTitle: 'AI Codebase Explainer & Audio Narration Generator',
    category: 'AI & LLM Systems',
    flagship: false,
    summary:
      'Offline CLI tool that parses source code across 15+ languages, generating structured, accessible breakdowns and human voice MP3 audio narrations.',
    tags: ['DevTools', 'Ollama', 'TTS', 'Python', 'AST', 'CLI'],
    href: '/projects/codeexplainer',
    github: 'https://github.com/hamsidhi/codeexplainer',
    caseStudy: {
      problem: 'Developers joining new codebases or students learning to code spend hours deciphering complex syntax without quick, conceptual overviews.',
      architecture: 'CLI tool scanning project directories, constructing simplified AST representations, prompting local LLMs for modular explanations, and invoking Edge-TTS to produce audio MP3 summaries.',
      technologies: ['Python', 'Ollama', 'Qwen2.5-Coder', 'Edge-TTS', 'Click/Typer CLI'],
    }
  },
  {
    slug: 'code-comments-generator',
    title: 'AI Code Comments Generator',
    fullTitle: 'Offline Automated Docstring & Inline Comment Generator',
    category: 'Automation',
    flagship: false,
    summary:
      'Automated CLI documentation tool leveraging local Qwen2.5-Coder LLM via Ollama to generate production-grade docstrings and inline comments across 6 programming languages.',
    tags: ['Automation', 'Ollama', 'Qwen2.5-Coder', 'DevTools', 'Python'],
    href: '/projects/code-comments-generator',
    github: 'https://github.com/hamsidhi/code-comments-generator',
    caseStudy: {
      problem: 'Undocumented code reduces maintainability, yet writing docstrings manually for hundreds of functions is repetitive and time-consuming.',
      architecture: 'Fully offline CLI scanning Python, JS, Java, C++, Go, and Rust files. Uses AST parsing to isolate un-commented functions and prompts Qwen2.5-Coder to inject compliant docstrings.',
      technologies: ['Python', 'Ollama', 'Qwen2.5-Coder', 'AST Parsers'],
    }
  },
  {
    slug: 'sentiment-analysis',
    title: 'Multilingual Sentiment Analysis Engine',
    fullTitle: '1.4M Dataset Multilingual Sentiment Classifier',
    category: 'Machine Learning',
    flagship: false,
    summary:
      'Natural language processing pipeline trained on ~1.4 million English and Turkish text samples to classify customer reviews and feedback sentiment.',
    tags: ['NLP', 'Machine Learning', 'TF-IDF', 'Python', 'Scikit-Learn'],
    href: '/projects/sentiment-analysis',
    github: 'https://github.com/hamsidhi/Sentiment-Analysis',
    caseStudy: {
      problem: 'Global businesses receive customer feedback in multiple languages, requiring automated sentiment analysis that scales across large text volumes.',
      architecture: 'Preprocessing pipeline cleaning text noise, applying TF-IDF vectorization, and benchmarking Logistic Regression, Naive Bayes, and SGD classifiers over 1.4 million samples.',
      technologies: ['Python', 'Scikit-Learn', 'TF-IDF', 'Pandas', 'NLTK'],
    }
  },
  {
    slug: 'ai-system-auditor',
    title: 'AI System Auditor',
    fullTitle: 'Automated AI Model & Data Leakage Auditing Framework',
    category: 'AI & LLM Systems',
    flagship: false,
    summary:
      'Automated testing framework evaluating machine learning models for data leakage, accuracy metrics validation, and structural specification compliance.',
    tags: ['AI Governance', 'Model Auditing', 'Python', 'Scikit-Learn', 'PyTest'],
    href: '/projects/ai-system-auditor',
    github: 'https://github.com/hamsidhi/AI_system_auditor',
    caseStudy: {
      problem: 'Machine learning models deployed to production often suffer from hidden data leakage, unvalidated assumptions, and silent degradation.',
      architecture: 'Suite of automated audit scripts performing split leakage checks, feature importance validation, and performance benchmark verifications.',
      technologies: ['Python', 'Scikit-Learn', 'PyTest', 'Data Validation'],
    }
  },
  {
    slug: 'skilmind-ai',
    title: 'SkillMind AI Engine',
    fullTitle: 'Personalized Python Learning Platform with NLP Persona Classification',
    category: 'Research/Academic Systems',
    flagship: false,
    summary:
      'Adaptive educational platform utilizing NLP classification to identify learner personas and generate personalized Python coding curricula.',
    tags: ['EdTech', 'NLP', 'Python', 'Curriculum Generation'],
    href: '/projects/skilmind-ai',
    github: 'https://github.com/hamsidhi/-Skilmind-AI-Engine-trying-testing',
    caseStudy: {
      problem: 'One-size-fits-all coding tutorials lead to high student dropouts because learning pace and prior experience vary significantly.',
      architecture: 'Persona classification engine analyzing student baseline assessments and generating custom lesson paths.',
      technologies: ['Python', 'NLP', 'FastAPI', 'Machine Learning'],
    }
  },
  {
    slug: 'snapchat-organizer',
    title: 'Snapchat Media & Face Organizer',
    fullTitle: 'Automated EXIF & Facial Recognition Media Sorting Toolkit',
    category: 'Automation',
    flagship: false,
    summary:
      'Python automation utility that parses Snapchat download archives, extracts EXIF creation timestamps, and categorizes photos using facial recognition.',
    tags: ['Automation', 'Computer Vision', 'Face Recognition', 'Python', 'EXIF'],
    href: '/projects/snapchat-organizer',
    github: 'https://github.com/hamsidhi/snapchat-media-organizer',
    caseStudy: {
      problem: 'Raw media exports from social apps lack organized folder structures, leaving thousands of unsorted photos with scrambled filenames.',
      architecture: 'Parallelized Python script reading image metadata, parsing date timestamps, and grouping photos by recognized faces.',
      technologies: ['Python', 'face_recognition', 'Pillow', 'EXIF Parser'],
    }
  },
  {
    slug: 'archaeomind',
    title: 'ArchaeoMind',
    fullTitle: 'Historical Artifact & Record Knowledge Extraction Engine',
    category: 'Research/Academic Systems',
    flagship: false,
    summary:
      'Specialized NLP knowledge extraction pipeline designed for parsing unstructured historical records and archaeological research publications.',
    tags: ['Research', 'NLP', 'Knowledge Extraction', 'Python'],
    href: '/projects/archaeomind',
    github: 'https://github.com/hamsidhi/archaeomind',
    caseStudy: {
      problem: 'Historical research records are stored in heterogeneous, unstructured text formats, making systematic cross-referencing difficult.',
      architecture: 'Text extraction pipeline extracting entity relations, excavation locations, and time period markers from research papers.',
      technologies: ['Python', 'NLP', 'Information Retrieval', 'Spacy'],
    }
  },
]

export const projectCategories = [
  'All',
  'AI & LLM Systems',
  'Data Science & Analytics',
  'Machine Learning',
  'Automation',
  'Research/Academic Systems',
] as const

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}

export const orderedProjects = [...projects].sort((a, b) => {
  if (a.flagship && !b.flagship) return -1
  if (!a.flagship && b.flagship) return 1
  return 0
})
