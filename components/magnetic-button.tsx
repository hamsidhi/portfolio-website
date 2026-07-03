'use client'

import { useRef, useState } from 'react'
import { motion } from 'motion/react'

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  pullAmount?: number
}

export function MagneticButton({ children, className = '', pullAmount = 6 }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const centerX = left + width / 2
    const centerY = top + height / 2

    // Max movement is scaled to pullAmount (defaults to 6px)
    const x = ((e.clientX - centerX) / (width / 2)) * pullAmount
    const y = ((e.clientY - centerY) / (height / 2)) * pullAmount

    setPosition({ x, y })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 220, damping: 16 }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  )
}
