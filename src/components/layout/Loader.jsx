import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { site } from '@/data/site.config'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const SHOW_MS = 2200

export default function Loader() {
  const reduced = useReducedMotion()
  const [show, setShow] = useState(() => {
    if (typeof window === 'undefined') return false
    return !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })

  useEffect(() => {
    if (!show || reduced) return undefined
    const t = setTimeout(() => setShow(false), SHOW_MS)
    return () => clearTimeout(t)
  }, [show, reduced])

  return (
    <AnimatePresence>
      {show && !reduced && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        >
          <div className="text-center">
            <motion.div
              className="mx-auto inline-flex"
              initial={{ opacity: 0, y: 14, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src={site.logo}
                alt=""
                className="h-28 w-auto object-contain md:h-32"
                decoding="async"
              />
            </motion.div>
            <motion.div
              className="mx-auto mt-7 h-px w-20 origin-center bg-gold/60"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.85, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
