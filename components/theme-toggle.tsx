'use client'

import { useTheme } from 'next-themes'
import { motion } from 'motion/react'
import { Sun, Moon, Palette } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return <div className="h-9 w-24 rounded-lg border border-border bg-card/60" />
  }

  const currentTheme = theme === 'system' ? resolvedTheme : theme

  const cycleTheme = () => {
    if (currentTheme === 'dark') setTheme('beige')
    else setTheme('dark')
  }

  return (
    <motion.button
      onClick={cycleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex w-[88px] items-center justify-center gap-2 rounded-lg border border-border bg-card/60 px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-card/80"
      aria-label="Toggle theme"
    >
      {currentTheme === 'dark' && (
        <>
          <Moon className="size-4 text-primary" />
          <span>Dark</span>
        </>
      )}
      {currentTheme === 'beige' && (
        <>
          <Palette className="size-4 text-primary" />
          <span>Beige</span>
        </>
      )}
    </motion.button>
  )
}
