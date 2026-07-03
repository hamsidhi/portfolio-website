# Hamza Siddiqui — Portfolio Master Blueprint

This document details the brand positioning, full code architecture, directory structure, components, styles, case studies, and recommendations for handoff to tools like Z.ai (v0.dev, Cursor, Bolt, etc.) to perform further UI/UX and feature enhancements on Hamza Siddiqui's portfolio website.

---

## Part 1 – Brand Identity & Positioning

*   **Brand Name:** Hamza Siddiqui
*   **Domain:** `hamsidhi.me`
*   **Positioning:** Data Science Graduate & Automation Builder | Data Analyst
*   **Mission:** Building practical, data-driven systems, analytics dashboards, and workflow automations while continuously learning.
*   **Core Values:** Business Thinking, Pragmatic Execution, Curiosity, Ownership, Continuous Learning.
*   **Primary Audience:** 80% Technical Recruiters, 10% Freelance Clients, 10% Universities.
*   **Desired Impression:** Premium, modern, execution-focused, and builder-first.

---

## Part 2 – Frontend Architecture & Folder Structure

The project is built using a modern React framework stack:
*   **Core Framework:** Next.js 15 (App Router)
*   **CSS Styling:** Tailwind CSS v4
*   **Animations:** Framer Motion
*   **Language:** TypeScript
*   **Deployment:** Vercel

### File & Directory Tree

```
portfolio-website-build/
├── app/                       # App Router Pages & Layouts
│   ├── layout.tsx            # Global HTML wrapper, metadata, layout layers
│   ├── page.tsx              # Homepage featuring flagship sections
│   ├── globals.css           # Custom Tailwind v4 stylesheet and design variables
│   ├── about/                # Biography, core principles & timeline route
│   │   └── page.tsx
│   ├── resume/               # Interactive, print-friendly resume route
│   │   └── page.tsx
│   ├── projects/             # Case studies list and dynamic slug route
│   │   ├── page.tsx
│   │   └── [slug]/           # Dynamic project detail & case study renderer
│   │       └── page.tsx
│   ├── contact/              # Interactive contact form page
│   │   └── page.tsx
│   ├── experience/           # Career timeline route
│   │   └── page.tsx
│   └── certifications/       # Interactive credential directory
│       └── page.tsx
├── components/                # Reusable UI Components
│   ├── home/                 # Homepage sections
│   │   ├── hero.tsx          # Center-aligned typography & overlay layers
│   │   ├── hero-canvas.tsx   # Three.js fiber canvas rendering interactive icosphere
│   │   ├── why-hire-me.tsx   # Bento grid, counting stats, typewriter terminal
│   │   ├── selected-projects.tsx # Preview cards of flagship projects
│   │   └── sections.tsx      # Stripe vertical timeline, scrolling credentials marquee
│   ├── voice-demo.tsx        # Audio context oscillator oscillator visualizer mockup
│   ├── navbar.tsx            # Floating glass header with active link states
│   ├── footer.tsx            # Spotlight reveal signature text & CSS confetti particles
│   ├── magnetic-button.tsx   # 6px cursor-pull spring motion wrapper
│   ├── cursor-glow.tsx       # Mouse-tracking radial gradient glow (lerped)
│   ├── scroll-progress.tsx   # Top gradient progress bar with glow shadow
│   ├── case-study.tsx        # Primitive components for case study rendering
│   ├── image-gallery.tsx     # Horizontal sliding image viewer for screenshots
│   └── browser-frame.tsx     # Mock browser window frame for project previews
├── lib/                       # Static data databases and utilities
│   ├── site.ts               # Core website metadata and rotating roles
│   ├── content.ts            # Skills data, work experience, certifications lists
│   ├── projects.ts           # Flagship projects metadata & case studies text
│   └── utils.ts              # Clsx and Tailwind merge class consolidator
└── public/                    # Static assets (images, PDFs, documents)
    ├── resume/               # PDF version of resume
    └── assets/               # Screenshots, certificate uploads, and credentials
```

---

## Part 3 – Design System, Color Theory, & Themes

Design DNA matches a blend of Apple (premium minimal typography), Stripe (fluid transitions, glowing gradients), and Linear (dark luxury aesthetics, crisp borders).

### Color Palette & Theme Variables (globals.css)

The website supports two main themes by changing CSS root variables dynamically:

#### 1. Obsidian Theme (`html.dark`)
*   **Background:** `#0A0A0A`
*   **Accent 1:** `#3B82F6` (Electric Blue)
*   **Accent 2:** `#8B5CF6` (Purple/Violet)
*   **Accent 3:** `#10B981` (Emerald Green)

#### 2. Dune Theme (`html.beige`)
*   **Background:** `#1C1712` (rich, dark warm sand) with a `0.075` opacity grain overlay texture.
*   **Accent 1:** `#D4A574` (Sand/Gold)
*   **Accent 2:** `#C07A60` (Terracotta)
*   **Accent 3:** `#8F9D7B` (Sage/Olive)

---

## Part 4 – Component & Feature Details

### 1. CursorGlow (`components/cursor-glow.tsx`)
A client-side utility that listens to mouse movements and positions a blurred radial gradient glowing circle using `requestAnimationFrame` (RAF) and a linear interpolation (lerp) smoothing algorithm.

### 2. Interactive Hero Sphere (`components/home/hero-canvas.tsx`)
Renders an interactive, GPU-accelerated 350-particle icosphere in WebGL. Utilizes an ambient breathing scale cycle and responds to cursor coordinates with dampened parallax tilt. Includes an automatic fade-out handler linked to the viewport scroll position.

### 3. Voice Agent Simulator (`components/voice-demo.tsx`)
Includes a 3D tilted laptop frame mockup holding a simulated dialogue console. Connects a silent Web Audio API oscillator node to draw a real-time wave frequency canvas feed. Refactored context management prevents thread blocks.

### 4. AGMIS Dashboard (`components/home/agmis-feature.tsx`)
Features a 3D-angled mock academic performance dashboard. Implements client-side role toggle controls (Student, Faculty, Principal) that trigger smooth document view transitions to morph layout cards and Recharts graphs.

### 5. Spotlight Signature Text (`components/footer.tsx`)
Positions two overlapping copies of the signature text. Uses mouse coordinate tracking to apply a `radial-gradient` mask to the foreground layer, creating a 100px spotlight radius that reveals the filled text underneath the cursor.

---

## Part 5 – Key Project Case Studies

### 1. AGMIS (Academic Guidance & Monitoring Intelligence System)
*   **Focus:** Academic Performance Tracking, Risk Score Prediction, Data Pipelines.
*   **Stack:** Next.js, PostgreSQL, Power BI, Python, Scikit-Learn.
*   **Key Features:** Student performance dashboard, early intervention alerts for faculty, principal administrative dashboards. Data pipeline handles ERP ingestion, rolling grade momentum, and risk score generation.

### 2. AI Voice Agent (Real Estate Lead Qualification)
*   **Focus:** Speech AI, Conversation Flow Automation, Prompt Engineering.
*   **Stack:** Python, FastAPI, Vapi.ai SDK, Webhooks, LLM Prompting.
*   **Key Features:** 24/7 lead qualification, natural conversation flows (Greeting -> Intent -> Qualification -> Guidance -> Handoff). Reduces support overhead by 35%.

### 3. Huntii Analyser (AI-Powered Document Summarizer)
*   **Focus:** Multi-Document Analysis, Domain-Specific Report Generation, NLP.
*   **Stack:** Python, Streamlit, Groq LLM (Llama 3.3 70B), mammoth, python-docx.
*   **Key Features:** Domain auto-detection (Finance, Agriculture, Tech, Education), smart token-limit text truncation, multi-document processing, and Word document report exports.

---

## Part 6 – Certification Directory & Documents

The certifications are fully populated with 13+ verified credentials, linked directly to PNG, JPG, and PDF assets under `public/assets/credentials/`:
1.  **IBM SkillsBuild:** AI Aware Certificate & Badge
2.  **IBM SkillsBuild:** AI Appreciate Certificate & Badge
3.  **IBM SkillsBuild:** Make Agentic AI Work for You (Badge)
4.  **IBM SkillsBuild:** Introduction to Retrieval-Augmented Generation
5.  **IBM SkillsBuild:** Unleashing the Power of AI Agents
6.  **IBM SkillsBuild:** The Rise of Multiagent Systems
7.  **Microsoft Certified:** Power BI (Data Analyst)
8.  **Microsoft Excel:** Excel from Beginner to Advanced
9.  **Industrial Training:** EV Conversion & Automotive Tech (GoGo A1)
10. **Industry Training:** Atharva Engineering Certificate
11. **Data Analyst Intern:** Sahil Dresses Internship Certificate
12. **AI & Data Science Workshops:** Skill Nation Certificate
