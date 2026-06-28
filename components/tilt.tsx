'use client'

import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'

export function Tilt({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Smooth out the tilt
  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  // Map mouse position to rotation (-5deg to +5deg max)
  const rotateX = useTransform(springY, [-0.5, 0.5], ['5deg', '-5deg'])
  const rotateY = useTransform(springX, [-0.5, 0.5], ['-5deg', '5deg'])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    
    // Calculate relative mouse position (0 to 1)
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    
    // Convert to centered position (-0.5 to 0.5)
    const centerX = (mouseX / rect.width) - 0.5
    const centerY = (mouseY / rect.height) - 0.5

    x.set(centerX)
    y.set(centerY)
  }

  const handleMouseLeave = () => {
    // Reset to center
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
