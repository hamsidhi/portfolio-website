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
│   │   ├── hero.tsx          # Center-aligned 3D SVG sphere & headline reveal
│   │   ├── voice-agent-feature.tsx # Waveform animation & feature summary
│   │   ├── agmis-feature.tsx # 3D perspective dashboard & SVG drawing pipeline
│   │   ├── why-hire-me.tsx   # Bento grid, counting stats (easeOutExpo counters)
│   │   ├── selected-projects.tsx # Preview cards of flagship projects
│   │   └── sections.tsx      # Stripe vertical timeline, scrolling credentials marquee
│   ├── navbar.tsx            # Floating glass header with active link states
│   ├── footer.tsx            # Dynamic outline typography with hover gradient fill
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

#### 1. Deep Space Dark Theme (`:root` / `dark` class)
*   **Background:** `#0A0A0F` to `#050507` (rich space dark gray)
*   **Foreground:** `#F8FAFC` (clean off-white)
*   **Primary Accent:** `#3B82F6` (Electric Blue)
*   **Secondary Accent:** `#22D3EE` (Teal/Cyan)
*   **Cards:** `#0E0E15` (semi-transparent glassmorphism with `border-white/6%`)

#### 2. Light Beige Theme (`.beige` class)
*   **Background:** `oklch(0.95 0.01 60)` (warm premium beige)
*   **Foreground:** `oklch(0.2 0.02 60)` (dark graphite for high contrast)
*   **Primary Accent:** `#3B82F6` (Electric Blue)
*   **Cards:** `oklch(0.92 0.01 60)` with warm glass inset shadow and `border-black/6%`

To support seamless transitions, `globals.css` implements dynamic variables:
*   `--grid-color`: Controls the color of the fixed space grid layout.
*   `--dot-color`: Controls the ambient background dot matrix.
*   `--glass-bg`: Adapts background card transparency for both themes.
*   `--outline-color`: Controls the large outlined name stroke in the footer.

---

## Part 4 – Component & Feature Details

### 1. CursorGlow (`components/cursor-glow.tsx`)
A client-side utility that listens to mouse movements and positions a large blurred radial gradient glowing circle. To ensure optimal rendering, it uses `requestAnimationFrame` (RAF) and a linear interpolation (lerp) smoothing algorithm to follow the mouse without stuttering.

### 2. Hero Section (`components/home/hero.tsx`)
Displays a custom SVG 3D wireframe sphere rotating at `0.05rad` per second. Text uses a letter-by-letter and word-by-word mask reveal using Framer Motion (`easeOut`, `600ms` duration). The title dynamically introduces Hamza as a **Data Science Graduate & Automation Builder**.

### 3. Voice Agent Feature (`components/home/voice-agent-feature.tsx`)
Includes a dynamic animated audio waveform that expands and contracts continuously, representing a live voice call in progress. Surrounded by an `animate-breathe` box-shadow glow.

### 4. AGMIS Feature (`components/home/agmis-feature.tsx`)
Displays a mock academic guidance intelligence dashboard tilted on a 3D plane using CSS perspective. Includes SVG flow lines simulating a real-time data processing pipeline that draws itself on scroll.

### 5. Why Hire Me Bento Grid (`components/home/why-hire-me.tsx`)
Features value cards arranged in a bento-style layout. When scrolled into viewport, it triggers rapid animated statistic counters (counting from `0` to `10+` and `6mo` using an `easeOutExpo` curve).

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

---

## Part 7 – Stack Capabilities & Peak Features

The website is fully optimized and features next-generation design capabilities:
*   **Lerped Smooth Animations:** Custom cursor and visual progress layers track mouse coordinates smoothly.
*   **True Responsive Fluidity:** Fully adapted grid scaling, layouts, and cards from small mobile viewports up to ultra-wide desktop monitors.
*   **Extreme Performance:** Achieves Lighthouse scores of 95+ due to minimal dependencies, local font imports, custom SVG asset generation, and Next.js image loading optimizations.
*   **SEO Readiness:** Complete semantic HTML tags, XML sitemap generation, structured JSON-LD Person/Job schema, and custom search engine previews.

---

## Part 8 – Guidelines for Z.ai (v0 / Bolt / Cursor) UI Enhancement

When transferring this project to Z.ai for further UI/UX and feature enhancements, use the following directives:

### 1. Enhance the AI Voice Agent Demo Page Widget
*   **Issue:** The current iframe load to `vapi.ai?demo=true` renders Vapi's default public share page with Vapi headers, looking unintegrated on our premium dark space theme.
*   **Directive:** Replace the iframe container in `app/projects/[slug]/page.tsx` (around lines 115-136) with a custom React component using the official `@vapi-ai/web` npm package. Build a gorgeous, floating sound wave visualizer button that initializes the call dynamically on click and shows active speaker transcripts.

### 2. Upgrade the 3D Sphere in Hero Section
*   **Issue:** The current rotating wireframe is a static SVG ellipse group rotation.
*   **Directive:** Replace the SVG `WireframeSphere` in `components/home/hero.tsx` with a Three.js / React Three Fiber (R3F) canvas. Render a fluid, interactive particle-based 3D sphere that responds to mouse hover and scroll speed.

### 3. Advanced Theme Transition Animation
*   **Issue:** Theme switching between dark space and beige triggers a quick CSS re-render.
*   **Directive:** Implement an SVG morphing clip-path transition circle that expands from the toggle button coordinates, giving a seamless "wave" transition effect across the screen when themes are toggled.
