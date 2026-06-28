'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { rotatingRoles } from '@/lib/site'

export function RotatingRole() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % rotatingRoles.length)
    }, 2500)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="relative inline-flex h-[1.4em] items-center overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.21, 0.5, 0.25, 1] }}
          className="whitespace-nowrap text-primary"
        >
          {rotatingRoles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
