import { useEffect } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

/** Lenis smooth scrolling — disabled when prefers-reduced-motion is on. */
export default function SmoothScroll() {
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) return undefined
    let destroyed = false
    let lenis
    let rafId

    ;(async () => {
      const { default: Lenis } = await import('lenis')
      if (destroyed) return
      lenis = new Lenis({
        duration: 1.05,
        smoothWheel: true,
        touchMultiplier: 1.2,
      })
      const raf = (time) => {
        lenis.raf(time)
        rafId = requestAnimationFrame(raf)
      }
      rafId = requestAnimationFrame(raf)
    })()

    return () => {
      destroyed = true
      if (rafId) cancelAnimationFrame(rafId)
      lenis?.destroy()
    }
  }, [reduced])

  return null
}
