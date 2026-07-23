'use client'

import { Download, Eye } from 'lucide-react'
import { motion } from 'motion/react'

export function ResumeActions() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center print:hidden w-full sm:w-auto">
      <motion.a
        href="/resume/Hamza_Siddiqui_.pdf"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-medium text-primary-foreground shadow-md transition-all hover:bg-primary/90 cursor-pointer"
      >
        <Eye className="size-4" aria-hidden="true" />
        <Download className="size-4" aria-hidden="true" />
        Review and Download Resume
      </motion.a>
    </div>
  )
}

