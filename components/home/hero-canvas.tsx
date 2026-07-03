'use client'

import { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useTheme } from 'next-themes'

const PARTICLE_COUNT = 350

function ParticleSphere({ scrollOffset }: { scrollOffset: number }) {
  const groupRef = useRef<THREE.Group>(null)
  const pointsMaterialRef = useRef<THREE.PointsMaterial>(null)
  const linesMaterialRef = useRef<THREE.LineBasicMaterial>(null)
  
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const currentTheme = theme === 'system' ? resolvedTheme : theme

  // Generate particle positions, velocities, and line indices (run once)
  const { originalPositions, lineIndices } = useMemo(() => {
    const orig = new Float32Array(PARTICLE_COUNT * 3)
    const indices: number[] = []
    const r = 2.3 // Radius of sphere

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // Fibonacci sphere distribution
      const phi = Math.acos(1 - 2 * (i / PARTICLE_COUNT))
      const theta = Math.PI * (1 + Math.sqrt(5)) * i

      const x = Math.sin(phi) * Math.cos(theta) * r
      const y = Math.sin(phi) * Math.sin(theta) * r
      const z = Math.cos(phi) * r

      orig[i * 3] = x
      orig[i * 3 + 1] = y
      orig[i * 3 + 2] = z

      // Connect each particle to next index to form a mesh
      indices.push(i, (i + 1) % PARTICLE_COUNT)
      if (i % 3 === 0) {
        indices.push(i, (i + 5) % PARTICLE_COUNT)
      }
    }

    return { originalPositions: orig, lineIndices: new Uint16Array(indices) }
  }, [])

  // Create buffers for immutable positions (no updates needed per frame)
  const { positions, linePositions } = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3)
    const linePos = new Float32Array(lineIndices.length * 3)

    for (let i = 0; i < PARTICLE_COUNT * 3; i++) {
      pos[i] = originalPositions[i]
    }

    for (let i = 0; i < lineIndices.length; i++) {
      const idx = lineIndices[i]
      linePos[i * 3] = originalPositions[idx * 3]
      linePos[i * 3 + 1] = originalPositions[idx * 3 + 1]
      linePos[i * 3 + 2] = originalPositions[idx * 3 + 2]
    }

    return { positions: pos, linePositions: linePos }
  }, [originalPositions, lineIndices])

  // Map theme colors
  const colors = useMemo(() => {
    if (!mounted) return { particle: '#3b82f6', line: '#8b5cf6' }
    return currentTheme === 'beige'
      ? { particle: '#d4a574', line: '#c97b5a' } // Dune colors
      : { particle: '#3b82f6', line: '#8b5cf6' } // Obsidian colors
  }, [currentTheme, mounted])

  useFrame((state) => {
    if (!groupRef.current) return

    const time = state.clock.getElapsedTime()
    
    // Slow 14-second breathing loop (calm and subtle)
    const breatheScale = 1 + Math.sin(time * (Math.PI * 2 / 14.0)) * 0.03
    groupRef.current.scale.setScalar(breatheScale)

    // Very slow spin
    groupRef.current.rotation.y = time * 0.02
    groupRef.current.rotation.z = time * 0.005

    // Subtle mouse parallax tilt (slowed and dampened)
    const targetRotX = -state.pointer.y * 0.08
    const targetRotY = state.pointer.x * 0.08
    
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.04)
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.04)

    // Apply scroll fade out directly to materials without React re-render lag
    if (pointsMaterialRef.current) {
      pointsMaterialRef.current.opacity = Math.max(0, 0.22 - scrollOffset * 0.7)
    }
    if (linesMaterialRef.current) {
      linesMaterialRef.current.opacity = Math.max(0, 0.05 - scrollOffset * 0.18)
    }
  })

  return (
    <group ref={groupRef}>
      {/* Particle points */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          ref={pointsMaterialRef}
          color={colors.particle}
          size={0.03}
          sizeAttenuation={true}
          transparent
          opacity={0.22}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* Connection lines */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          ref={linesMaterialRef}
          color={colors.line}
          transparent
          opacity={0.05}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  )
}

export default function HeroCanvas() {
  const [scrollOffset, setScrollOffset] = useState(0)
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      const height = window.innerHeight
      // Fade out completely by 45% scroll
      const offset = Math.min(1.0, window.scrollY / (height * 0.45))
      setScrollOffset(offset)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) return null

  const currentTheme = theme === 'system' ? resolvedTheme : theme
  const isDune = currentTheme === 'beige'

  return (
    <div 
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        filter: isDune
          ? 'drop-shadow(0 0 10px rgba(212, 165, 116, 0.15))'
          : 'drop-shadow(0 0 15px rgba(59, 130, 246, 0.25))',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 6.5], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <ParticleSphere scrollOffset={scrollOffset} />
      </Canvas>
    </div>
  )
}
