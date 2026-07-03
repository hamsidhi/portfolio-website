'use client'

import { useTheme } from 'next-themes'
import { motion } from 'motion/react'
import { Moon } from 'lucide-react'
import { useEffect, useState } from 'react'

function SandIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M2 18c4-4 8-4 12 0" />
      <path d="M10 18c3-4 7-4 10 0" />
      <path d="M6 18c4-5 9-5 13-1" />
    </svg>
  )
}

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return <div className="h-9 w-9 rounded-lg border border-border bg-card/60" />
  }

  const currentTheme = theme === 'system' ? resolvedTheme : theme

  const cycleTheme = () => {
    const nextTheme = currentTheme === 'dark' ? 'beige' : 'dark'
    
    if (!document.startViewTransition) {
      setTheme(nextTheme)
      return
    }

    document.startViewTransition(() => {
      setTheme(nextTheme)
    })
  }

  return (
    <motion.button
      onClick={cycleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex size-9 items-center justify-center rounded-lg border border-border bg-card/60 text-foreground transition-colors hover:bg-card/85 cursor-pointer"
      aria-label={`Switch to ${currentTheme === 'dark' ? 'Dune' : 'Obsidian'} theme`}
      aria-live="polite"
    >
      {currentTheme === 'dark' ? (
        <Moon className="size-[18px] text-accent-1" />
      ) : (
        <SandIcon className="size-[18px] text-accent-1" />
      )}
    </motion.button>
  )
}
