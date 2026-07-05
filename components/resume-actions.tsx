'use client'

import { Download, Eye } from 'lucide-react'
import { motion } from 'motion/react'

export function ResumeActions() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center print:hidden w-full sm:w-auto">
      {/* UAE Resume Card/Group */}
      <div className="flex flex-col gap-3 rounded-2xl border border-border bg-card/45 p-4 shadow-sm backdrop-blur-md min-w-[220px] flex-1 sm:flex-initial">
        <div className="flex items-center justify-between gap-2 border-b border-border pb-2 mb-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent-1">
            UAE Resume
          </span>
          <span className="inline-flex items-center rounded-full bg-accent-1/10 px-2 py-0.5 text-[10px] font-medium text-accent-1">
            Gulf & Intl
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <motion.a
            href="/resume/Hamza_Siddiqui_UAE_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex h-9 items-center justify-center gap-1.5 rounded-xl border border-border bg-background px-3 text-xs font-medium text-foreground transition-all hover:bg-muted cursor-pointer"
          >
            <Eye className="size-3.5" aria-hidden="true" />
            View
          </motion.a>
          <motion.a
            href="/resume/Hamza_Siddiqui_UAE_CV.pdf"
            download="Hamza Siddiqui _UAE_CV.pdf"
            target="_blank"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex h-9 items-center justify-center gap-1.5 rounded-xl bg-primary px-3 text-xs font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90 cursor-pointer"
          >
            <Download className="size-3.5" aria-hidden="true" />
            Download
          </motion.a>
        </div>
      </div>

      {/* Indian Resume Card/Group */}
      <div className="flex flex-col gap-3 rounded-2xl border border-border bg-card/45 p-4 shadow-sm backdrop-blur-md min-w-[220px] flex-1 sm:flex-initial">
        <div className="flex items-center justify-between gap-2 border-b border-border pb-2 mb-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent-2">
            Indian Resume
          </span>
          <span className="inline-flex items-center rounded-full bg-accent-2/10 px-2 py-0.5 text-[10px] font-medium text-accent-2">
            Domestic (IN)
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <motion.a
            href="/resume/Hamza_Siddiqui_India_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex h-9 items-center justify-center gap-1.5 rounded-xl border border-border bg-background px-3 text-xs font-medium text-foreground transition-all hover:bg-muted cursor-pointer"
          >
            <Eye className="size-3.5" aria-hidden="true" />
            View
          </motion.a>
          <motion.a
            href="/resume/Hamza_Siddiqui_India_CV.pdf"
            download="Hamza Siddiqui Indian CV.pdf"
            target="_blank"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex h-9 items-center justify-center gap-1.5 rounded-xl bg-primary px-3 text-xs font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90 cursor-pointer"
          >
            <Download className="size-3.5" aria-hidden="true" />
            Download
          </motion.a>
        </div>
      </div>
    </div>
  )
}
