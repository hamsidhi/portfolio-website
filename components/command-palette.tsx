'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Search, Moon, Download, ArrowRight, CornerDownLeft, Sparkles, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/navigation'

const chatAnswers: Record<string, string> = {
  "What is AGMIS?": "AGMIS (Academic Guidance & Monitoring Intelligence System) is a data intelligence platform that converts educational performance data into actionable metrics. It features multi-role dashboards for students, faculty, and principals to improve academic monitoring and detect performance risks early.",
  "Explain the Voice Agent": "The AI Voice Agent is an automated real-estate voice system integrated with Web Audio API analyzers. It helps real estate businesses qualify leads, answer property inquiries, and schedule viewings 24/7 with realistic natural-language understanding.",
  "What is your tech stack?": "Hamza's core stack includes Python, SQL (PostgreSQL), FastAPI, Pandas, Power BI, Tailwind CSS, Next.js, and React. He specializes in data engineering pipelines, dashboarding, and practical workflow automations.",
  "Download Resume": "You can download my full resume by clicking the 'Download Resume' chip in this control center or using the main navigation bar. It is compiled with my complete Data Science BSc curriculum, certifications, and industry experiences."
}

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [activeChip, setActiveChip] = useState<string | null>(null)
  const [chatAnswer, setChatAnswer] = useState('')
  const [isStreaming, setIsStreaming] = useState(false)
  
  const { theme, resolvedTheme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? resolvedTheme : theme
  const router = useRouter()
  
  const searchInputRef = useRef<HTMLInputElement>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Listen to keyboard shortcut (Cmd/Ctrl + K and Esc)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setIsOpen((prev) => !prev)
      } else if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Auto-focus search input when palette opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus()
      }, 80)
    } else {
      setSearch('')
      setActiveChip(null)
      setChatAnswer('')
      setIsStreaming(false)
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isOpen])

  // Clean up interval on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  const handleNavigation = (path: string) => {
    setIsOpen(false)
    router.push(path)
  }

  const cycleTheme = () => {
    const nextTheme = currentTheme === 'dark' ? 'beige' : 'dark'
    if (document.startViewTransition) {
      document.startViewTransition(() => setTheme(nextTheme))
    } else {
      setTheme(nextTheme)
    }
  }

  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/resume/Hamza_Siddiqui_UAE_CV.pdf'
    link.download = 'Hamza_Siddiqui_UAE_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleChipClick = (question: string) => {
    setActiveChip(question)
    const fullAnswer = chatAnswers[question]
    if (!fullAnswer) return

    setChatAnswer('')
    setIsStreaming(true)
    let charIdx = 0

    if (intervalRef.current) clearInterval(intervalRef.current)

    intervalRef.current = setInterval(() => {
      if (charIdx < fullAnswer.length) {
        setChatAnswer((prev) => prev + fullAnswer.charAt(charIdx))
        charIdx++
      } else {
        setIsStreaming(false)
        if (intervalRef.current) clearInterval(intervalRef.current)
      }
    }, 15)
  }

  // Pre-defined menu actions
  const actions = [
    { name: 'Jump to Home', path: '/' },
    { name: 'Jump to Projects', path: '/projects' },
    { name: 'Jump to Experience', path: '/experience' },
    { name: 'Jump to About', path: '/about' },
    { name: 'Jump to Contact', path: '/contact' },
  ]

  const filteredActions = actions.filter((action) =>
    action.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh]">
          {/* Backdrop blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/75 backdrop-blur-md"
          />

          {/* Floating Command Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="relative w-full max-w-xl rounded-2xl border border-border bg-card shadow-2xl p-4 overflow-hidden z-10 flex flex-col max-h-[75vh]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="command-palette-title"
          >
            {/* Command search header */}
            <div className="flex items-center gap-3 border-b border-border pb-3 mb-3">
              <Search className="size-5 text-muted-foreground" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search commands or jump to section..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />
              <button 
                onClick={() => setIsOpen(false)}
                className="rounded-md p-1 hover:bg-secondary/40 text-muted-foreground transition-colors cursor-pointer"
                aria-label="Close command palette"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-4 pr-1">
              
              {/* Jump to Sections Actions */}
              <div>
                <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-2 px-1">Navigation</h4>
                <div className="space-y-1">
                  {filteredActions.map((act) => (
                    <button
                      key={act.path}
                      onClick={() => handleNavigation(act.path)}
                      className="w-full flex items-center justify-between rounded-lg px-3 py-2 text-xs font-medium text-muted-foreground hover:bg-secondary/35 hover:text-foreground transition-colors text-left cursor-pointer"
                    >
                      <span>{act.name}</span>
                      <CornerDownLeft className="size-3 opacity-40" />
                    </button>
                  ))}
                  {filteredActions.length === 0 && (
                    <p className="text-xs text-muted-foreground px-3 py-2">No matching sections found.</p>
                  )}
                </div>
              </div>

              {/* Quick Actions */}
              <div>
                <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-2 px-1">Utilities</h4>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={cycleTheme}
                    className="flex items-center gap-2.5 rounded-lg border border-border/80 bg-background/30 p-2.5 text-xs text-muted-foreground hover:border-accent-1/40 hover:text-foreground transition-all cursor-pointer"
                  >
                    <Moon className="size-4 text-accent-1" />
                    <span>Toggle Theme (Obsidian/Dune)</span>
                  </button>
                  <button
                    onClick={handleDownloadResume}
                    className="flex items-center gap-2.5 rounded-lg border border-border/80 bg-background/30 p-2.5 text-xs text-muted-foreground hover:border-accent-1/40 hover:text-foreground transition-all cursor-pointer"
                  >
                    <Download className="size-4 text-accent-1" />
                    <span>Download CV (PDF)</span>
                  </button>
                </div>
              </div>

              {/* Interactive AI Chat Stub Container */}
              <div className="border-t border-border pt-4 mt-2">
                <div className="flex items-center gap-2 mb-2 px-1">
                  <Sparkles className="size-4 text-accent-1 animate-pulse" />
                  <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">AI Assistant Stub</h4>
                </div>
                
                {/* 4 predefined chips */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {Object.keys(chatAnswers).map((question) => (
                    <button
                      key={question}
                      onClick={() => handleChipClick(question)}
                      className={`rounded-full px-2.5 py-1 text-[11px] font-medium border transition-all cursor-pointer ${
                        activeChip === question
                          ? 'border-accent-1 bg-accent-1/5 text-accent-1'
                          : 'border-border bg-background/20 text-muted-foreground hover:border-accent-1/30 hover:text-foreground'
                      }`}
                    >
                      {question}
                    </button>
                  ))}
                </div>

                {/* Simulated response container */}
                {activeChip && (
                  <div className="rounded-xl border border-border bg-background/30 p-3 min-h-[60px] relative">
                    <p className="text-[10px] font-bold text-muted-foreground tracking-wide uppercase mb-1">Response</p>
                    <p className="text-[12px] leading-relaxed text-foreground select-text">
                      {chatAnswer}
                      {isStreaming && (
                        <span className="inline-block w-1.5 h-3 ml-0.5 bg-accent-1 animate-pulse" />
                      )}
                    </p>
                  </div>
                )}
              </div>

            </div>

            {/* command footer */}
            <div className="flex items-center justify-between border-t border-border pt-3 mt-3 text-[10px] text-muted-foreground">
              <span>Press <kbd className="bg-secondary/80 px-1.5 py-0.5 rounded border border-border font-mono">⌘K</kbd> or <kbd className="bg-secondary/80 px-1.5 py-0.5 rounded border border-border font-mono">Ctrl+K</kbd> to toggle</span>
              <span>ESC to close</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
