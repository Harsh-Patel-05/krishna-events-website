import { useEffect, useState } from 'react'

/** Boolean scroll threshold with rAF + flip-only updates (avoids scroll jank). */
export function useScrollFlag(threshold = 36) {
  const [active, setActive] = useState(false)

  useEffect(() => {
    let ticking = false

    const update = () => {
      const next = window.scrollY > threshold
      setActive((prev) => (prev === next ? prev : next))
      ticking = false
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return active
}

export default useScrollFlag
