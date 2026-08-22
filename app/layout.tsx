import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ThemeProvider } from '@/components/theme-provider'
import { ScrollProgress } from '@/components/scroll-progress'
import { CursorGlow } from '@/components/cursor-glow'
import { CommandPalette } from '@/components/command-palette'
import { site } from '@/lib/site'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const instrumentSerif = Instrument_Serif({
  variable: '--font-serif',
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

const siteUrl = 'https://hamsidhi.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Hamza Siddiqui | Data Science Graduate & AI Systems Engineer',
    template: '%s | Hamza Siddiqui',
  },
  description:
    'Official portfolio of Hamza Siddiqui — Data Science Graduate, Data Analyst, and AI Systems Builder specializing in RAG, voice agents, predictive ML pipelines, and automations.',
  keywords: [
    'Hamza Siddiqui',
    'Data Science Graduate',
    'Data Analyst',
    'AI Engineer',
    'RAG Systems',
    'Voice AI Agent',
    'FastAPI',
    'Python',
    'Machine Learning',
    'Power BI',
    'NLP',
    'Spam Classifier',
    'AGMIS',
  ],
  authors: [{ name: 'Hamza Siddiqui', url: siteUrl }],
  creator: 'Hamza Siddiqui',
  alternates: { canonical: siteUrl },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Hamza Siddiqui | Data Science Graduate & AI Systems Engineer',
    description:
      'Official portfolio of Hamza Siddiqui — Data Science Graduate, Data Analyst, and AI Systems Builder specializing in RAG, voice agents, predictive ML pipelines, and automations.',
    siteName: 'Hamza Siddiqui',
    images: [{ url: '/portfolio.png', width: 1200, height: 630, alt: 'Hamza Siddiqui Portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hamza Siddiqui | Data Science Graduate & AI Systems Engineer',
    description:
      'Official portfolio of Hamza Siddiqui — Data Science Graduate, Data Analyst, and AI Systems Builder specializing in RAG, voice agents, predictive ML pipelines, and automations.',
    images: ['/portfolio.png'],
  },
  icons: {
    icon: '/icon-dark-32x32.png',
    shortcut: '/icon-dark-32x32.png',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0A0A0F',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLdPerson = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Hamza Siddiqui',
    jobTitle: 'Data Science Graduate & AI Systems Engineer',
    url: 'https://hamsidhi.com',
    sameAs: [
      'https://github.com/hamsidhi',
      'https://www.linkedin.com/in/hamza-siddiqui-b84717393/',
      'https://hamsidhi.com',
    ],
    knowsAbout: [
      'Data Science',
      'Machine Learning',
      'Natural Language Processing',
      'Retrieval-Augmented Generation',
      'FastAPI',
      'Python',
      'PostgreSQL',
      'Power BI',
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Atharva College of Engineering',
    },
  }

  const jsonLdWebsite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Hamza Siddiqui Portfolio',
    url: 'https://hamsidhi.com',
    author: {
      '@type': 'Person',
      name: 'Hamza Siddiqui',
    },
  }

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} bg-background`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          themes={['dark', 'beige']}
          disableTransitionOnChange
        >
          {/* Fixed background layers */}
          <div className="bg-grid-fixed" aria-hidden />
          <div className="noise-overlay" aria-hidden />
          <CursorGlow />
          <CommandPalette />
          
          <ScrollProgress />
          <Navbar />
          <main id="main" className="relative z-10">{children}</main>
          <Footer />
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  )
}
