import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ThemeProvider } from '@/components/theme-provider'
import { ScrollProgress } from '@/components/scroll-progress'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const siteUrl = 'https://hamsidhi.me'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Hamza Siddiqui | AI Engineer | Data Analyst | Automation Builder',
    template: '%s | Hamza Siddiqui',
  },
  description:
    'AI Engineer building intelligent systems, data analytics platforms, and production-ready automation solutions.',
  keywords: [
    'AI Engineer',
    'Data Analyst',
    'Automation Builder',
    'Applied AI',
    'Machine Learning',
    'Data Analytics',
    'Hamza Siddiqui',
  ],
  authors: [{ name: 'Hamza Siddiqui', url: siteUrl }],
  creator: 'Hamza Siddiqui',
  alternates: { canonical: siteUrl },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Hamza Siddiqui | AI Engineer | Data Analyst | Automation Builder',
    description:
      'AI Engineer building intelligent systems, data analytics platforms, and production-ready automation solutions.',
    siteName: 'Hamza Siddiqui',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hamza Siddiqui | AI Engineer',
    description:
      'Building data-driven systems and production-ready software that solves real business problems.',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0A0A0A',
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
      className={`${geistSans.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          themes={['dark', 'beige']}
          disableTransitionOnChange
        >
        <ScrollProgress />
        <Navbar />
        <main id="main">{children}</main>
          <Footer />
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  )
}
