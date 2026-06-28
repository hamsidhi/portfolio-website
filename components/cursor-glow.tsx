'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'motion/react'

export function CursorGlow() {
  const [mounted, setMounted] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth out the mouse movement
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })
  const gradient = useMotionTemplate`radial-gradient(600px circle at ${springX}px ${springY}px, rgba(255,255,255,0.04), transparent 40%)`

  useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  if (!mounted) return null

  return (
    <>
      <motion.div
        className="pointer-events-none fixed inset-0 z-40 transition-opacity duration-300"
        style={{
          background: gradient,
        }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/30 bg-primary/10 mix-blend-screen"
        style={{
          x: springX,
          y: springY,
        }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary mix-blend-screen"
        style={{
          x: mouseX,
          y: mouseY,
        }}
      />
    </>
  )
}
