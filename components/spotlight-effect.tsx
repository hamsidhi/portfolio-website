'use client'

import { useEffect } from 'react'

/**
 * Feeds the cursor position into `--mx` / `--my` on whichever `.glass-panel`
 * is under the pointer, so cards can paint a soft spotlight that follows it.
 * One delegated listener for the whole site.
 */
export function SpotlightEffect() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf = 0
    const onMove = (e: PointerEvent) => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        const card = (e.target as Element | null)?.closest?.('.glass-panel') as HTMLElement | null
        if (!card) return
        const r = card.getBoundingClientRect()
        card.style.setProperty('--mx', `${e.clientX - r.left}px`)
        card.style.setProperty('--my', `${e.clientY - r.top}px`)
      })
    }

    document.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      document.removeEventListener('pointermove', onMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return null
}
