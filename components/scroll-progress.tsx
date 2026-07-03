'use client'

import { motion, useScroll, useSpring } from 'motion/react'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left"
    >
      <div className="h-full w-full bg-gradient-to-r from-accent-1 via-accent-2 to-accent-3" />
      <div className="absolute inset-0 bg-gradient-to-r from-accent-1 via-accent-2 to-accent-3 blur-sm opacity-60" />
    </motion.div>
  )
}
