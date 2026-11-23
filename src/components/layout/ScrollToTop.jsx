import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Scrolls to top on route change, or to the #hash target when present. */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useLayoutEffect(() => {
    if (hash) {
      // Wait a frame so the target section has rendered.
      const id = decodeURIComponent(hash.slice(1))
      const raf = requestAnimationFrame(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'auto', block: 'start' })
      })
      return () => cancelAnimationFrame(raf)
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    return undefined
  }, [pathname, hash])

  return null
}
