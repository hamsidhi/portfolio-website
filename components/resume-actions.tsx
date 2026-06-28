'use client'

import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

import { motion } from 'motion/react'

export function ResumeActions() {
  return (
    <div className="flex flex-wrap items-center gap-3 print:hidden">
      <motion.a
        href="/resume/Hamza_Siddiqui_UAE_CV.pdf"
        download="Hamza Siddiqui _UAE_CV.pdf"
        target="_blank"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-md transition-colors hover:bg-primary/90"
      >
        <Download className="size-4" aria-hidden="true" />
        UAE Resume
      </motion.a>

      <motion.a
        href="/resume/Hamza_Siddiqui_India_CV.pdf"
        download="Hamza Siddiqui Indian CV.pdf"
        target="_blank"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/50 px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:border-primary/40"
      >
        <Download className="size-4" aria-hidden="true" />
        Indian Resume
      </motion.a>
    </div>
  )
}
