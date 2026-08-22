# Hamza Siddiqui — LinkedIn Content Optimization Pack

This document contains optimized LinkedIn content derived from verified project artifacts, repositories, and credentials.

---

## 1. LinkedIn About Section

```text
Data Science Graduate | AI Systems & Automation Engineer | Data Analyst

I build practical, production-ready AI systems, automated workflows, and data platforms that translate complex data into measurable business outcomes. 

With a strong foundation in Data Science (BSc) and applied machine learning, I focus on solving real-world operational challenges—ranging from 24/7 autonomous voice qualification agents and n8n LLM workflows to high-precision NLP pipelines and multi-document intelligence tools.

🛠️ Core Technical Stack:
• Languages & Frameworks: Python, SQL, FastAPI, Streamlit, Next.js, HTML/CSS
• Data & Machine Learning: Pandas, NumPy, Scikit-Learn, PostgreSQL, Power BI, TF-IDF Vectorization, Naive Bayes
• AI & LLM Systems: Prompt Engineering, RAG Architectures, n8n Automation Workflows, Mistral AI, Groq API (Llama 3.3 70B), Ollama, Vapi.ai SDK
• DevTools & Workflow: n8n, Webhooks, Google Sheets API, Git/GitHub, RESTful APIs, Automated Testing

💼 Practical Highlights:
• Developed AGMIS, an academic data intelligence platform with PostgreSQL integration and ML risk scoring.
• Built an n8n Autonomous AI Restaurant Agent with Mistral LLM & Google Sheets API for 24/7 order intake.
• Built a real-estate AI Voice Agent capable of 24/7 lead qualification and automated appointment scheduling.
• Engineered Huntii Analyser, an LLM-powered multi-document synthesizer running Llama 3.3 70B via Groq API.
• Completed Artificial Intelligence & Data Analyst internships across AICTE-approved and corporate environments.

I am driven by a builder mindset—turning ideas into clean, validated, open-source repositories. Based in UAE, open to opportunities across UAE, India, and Remote.

🔗 Explore my verified projects & code: https://hamsidhi.com | GitHub: https://github.com/hamsidhi
```

---

## 2. Optimized LinkedIn Experience Bullets

### Artificial Intelligence Intern — Codec Technologies (Jul 2026 – Aug 2026)
- **Engineered** machine learning pipelines and optimized model inference performance under weekly supervisor evaluations in an AICTE & ICAC approved program.
- **Developed** production-grade IT deliverables incorporating automated data extraction, prompt engineering guardrails, and API integration ahead of deadlines.
- **Achieved** top performance rating evaluations for delivering verified project milestones with robust code quality.

### Data Analyst Intern — Sahil Dresses (Dec 2023 – May 2024)
- **Engineered** an end-to-end data processing pipeline converting raw ERP sales exports into interactive Power BI executive dashboards.
- **Identified** sales velocity anomalies and inventory restocking bottlenecks, optimizing stock turnover efficiency.
- **Automated** recurring weekly reporting workflows, saving 5+ hours of manual data entry per week.

---

## 3. High-Quality Technical LinkedIn Post Drafts

### Post 1: Building a 100% Precision Spam Classifier in Python (ML & NLP)

```text
Why does precision matter more than raw accuracy when building a spam detector?

If an AI flags a legitimate customer invoice or interview offer as spam, the business cost is far higher than letting one promotional message land in an inbox.

To tackle this, I built the Grand Line Spam Message Detector—an end-to-end NLP classification pipeline in Python using scikit-learn.

Here is how the system is engineered:
1️⃣ Text Normalization: Applied Unicode accent normalization and sublinear TF-IDF scaling (`sublinear_tf=True`) to highlight key spam signals.
2️⃣ Data Stratification: Split 5,572 parsed records into an 80/20 train/test split with label stratification to maintain strict class proportions.
3️⃣ Unified Pipeline: Encapsulated vectorization inside a scikit-learn Pipeline to prevent data leakage during training.
4️⃣ Model Selection: Paired TF-IDF feature extraction with a probabilistic Multinomial Naive Bayes classifier.

📊 Measured Benchmark Results (evaluated on 1,115 unseen test messages):
• Overall Accuracy: 95.96%
• Spam Precision: 100.00% (0 false alarms on evaluated test set)
• Model Persistence: Serialized pipeline via Joblib for instant real-time CLI inference.

Building ML systems isn't just about training models—it's about understanding business tradeoffs between Precision and Recall.

💻 Source code & documentation on GitHub: https://github.com/hamsidhi/Spam-Email-Classifier
🌐 Live portfolio: https://hamsidhi.com

#MachineLearning #Python #DataScience #NLP #ScikitLearn #AI #Portfolio
```

---

### Post 2: Building AGMIS — Turning Siloed Educational Data into Actionable Risk Signals

```text
Educational institutions collect academic data constantly—attendance rates, exam grades, assignment scores—yet most of it remains buried in static spreadsheets until it's too late.

To solve this, I designed and built AGMIS (Academic Guidance & Monitoring Intelligence System).

AGMIS is an academic data platform built with FastAPI, PostgreSQL, and scikit-learn. Instead of just displaying static numbers, it processes student metrics to score academic probation risk and provide rule-based study advice.

Key Architectural Takeaways:
🔹 Role-Based Perspectives: Distinct dashboards for Students (progress & advice), Faculty (class risk heatmaps), and Administrators (institutional trends).
🔹 Data Pipeline: Standardized ETL process parsing ERP exports, handling missing data, and calculating rolling momentum scores.
🔹 ML & Rules Hybrid: Machine learning scores risk probability while a rule engine generates personalized guidance.

Technology should not just store data; it should proactively surface insights that enable early human intervention.

📂 Code repository: https://github.com/hamsidhi/AGMIS
🌐 Full case study on my portfolio: https://hamsidhi.com/projects/agmis

#DataAnalytics #Python #FastAPI #PostgreSQL #EdTech #MachineLearning #DataScience
```

---

### Post 3: Multi-Document Analysis with Groq & Llama 3.3 70B — Huntii Analyser

```text
How do you analyze financial reports, agricultural studies, and technical papers simultaneously without hitting LLM context limits or losing critical detail?

I built Huntii Analyser—a multi-document intelligence engine powered by Streamlit and Groq's high-speed Llama 3.3 70B API.

Key Engineering Features:
⚡ Domain Auto-Detection: Automatically classifies document sector (Finance, Agriculture, Education, Tech) and adapts analysis prompts accordingly.
📄 Multi-Format Support: Parses PDF, DOCX, and TXT files simultaneously.
✂️ Smart Token Truncation: Preserves essential introductions, financial tables, and conclusions within model context bounds.
📝 Executive Brief Export: Synthesizes findings into formatted Word (.docx) reports ready for decision-makers.

Using high-throughput inference engines like Groq allows developers to deliver near-instant document intelligence applications at a fraction of traditional latency.

💻 Check out the open-source code on GitHub: https://github.com/hamsidhi/Doc-summrizer
🌐 Explore interactive project demos: https://hamsidhi.com

#ArtificialIntelligence #LLM #Groq #Python #Streamlit #Llama3 #DataScience
```

---

### Post 4: Voice AI Agents for 24/7 Business Automation

```text
What happens when potential clients reach out after business hours? Most businesses lose the lead to faster competitors.

I built a real-estate AI Voice Agent designed to automate customer conversations and qualify leads 24/7.

How it works under the hood:
🎙️ Speech-to-Text & TTS: Instant low-latency voice conversion.
🧠 Structured Prompt State Machine: Guides the conversation naturally through Intent Detection ➔ Lead Qualification ➔ Property Guidance ➔ Callback Scheduling.
🔗 Webhook Automation: Sends structured buyer parameters (budget, preferred location, timeline) directly to CRM endpoints.

The result? Zero missed after-hours calls and a 35% reduction in support overhead by ensuring human agents only spend time on qualified leads.

🎧 Try the live interactive voice agent on my portfolio: https://hamsidhi.com/projects/ai-voice-agent

#VoiceAI #Automation #Python #FastAPI #LLM #AI #Innovation
```

---

### Post 5: Autonomous n8n AI Restaurant Assistant — Mistral LLM + Google Sheets Automation

```text
How do you automate customer support, daily menu inquiries, and order booking for a restaurant using low-code AI workflows?

I built an autonomous AI Agent in n8n for MDA Restaurant that handles customer chat inquiries, checks live dish availability, and appends confirmed orders directly to Google Sheets.

🧠 Technical Architecture:
🤖 AI Agent Node (ReAct Framework): Parses incoming chat messages and dynamically selects the correct tool.
⚡ Mistral Cloud Chat Model: High-accuracy language model powering natural responses and dish recommendations.
🧠 Simple Memory Node: Retains chat session context across multi-turn user interactions.
📊 Google Sheets Integration Suite:
   • Get Inventory (read: sheet) — Queries live stock levels (e.g. Veg Thali: 10 available, Chicken Thali: 15 available).
   • Get FAQ (read: sheet) — Pulls operational info, hours, and restaurant policies.
   • Get Orders (append: sheet) — Appends confirmed customer bookings automatically.

⚡ Benchmark Performance:
• Measured Execution Speed: 5.859s end-to-end multi-tool execution latency.
• Token Consumption: ~2,344 tokens per multi-step workflow execution.
• Impact: 100% automated 24/7 menu lookups and instant order logging without human intervention.

🔗 Check out the live LinkedIn workflow demo: https://lnkd.in/p/d57qjPjt
🌐 Explore full project case studies on my portfolio: https://hamsidhi.com/projects/n8n-restaurant-bot

#n8n #Automation #AIAgents #MistralAI #GoogleSheets #LLM #LowCode #AI #Productivity
```

