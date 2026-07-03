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

const siteUrl = 'https://hamsidhi.me'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Hamza Siddiqui | Data Science Graduate | Data Analyst | Automation Builder',
    template: '%s | Hamza Siddiqui',
  },
  description:
    'BSc Data Science graduate building data-driven systems, practical automations, healthcare intelligence solutions, and analytics platforms.',
  keywords: [
    'Data Science Graduate',
    'Healthcare Analytics',
    'Business Intelligence',
    'Automation',
    'Data Analytics',
    'Machine Learning',
    'Prompt Engineering',
    'FastAPI',
    'Python',
    'Power BI',
  ],
  authors: [{ name: 'Hamza Siddiqui', url: siteUrl }],
  creator: 'Hamza Siddiqui',
  alternates: { canonical: siteUrl },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Hamza Siddiqui | Data Science Graduate | Data Analyst | Automation Builder',
    description:
      'BSc Data Science graduate building data-driven systems, practical automations, healthcare intelligence solutions, and analytics platforms.',
    siteName: 'Hamza Siddiqui',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hamza Siddiqui | Data Science Graduate | Data Analyst | Automation Builder',
    description:
      'BSc Data Science graduate building data-driven systems, practical automations, healthcare intelligence solutions, and analytics platforms.',
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Hamza Siddiqui",
              "jobTitle": "Data Science Graduate & Automation Builder",
              "url": "https://hamsidhi.me"
            })
          }}
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
