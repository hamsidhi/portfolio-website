'use client'

import { motion } from 'motion/react'
import { ReactNode } from 'react'

export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15, scale: 0.99 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.45,
        ease: [0.21, 0.5, 0.25, 1], // Custom calm premium easing
      }}
    >
      {children}
    </motion.div>
  )
}
