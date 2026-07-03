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
      <div className="h-full w-full bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 blur-sm opacity-60" />
    </motion.div>
  )
}
