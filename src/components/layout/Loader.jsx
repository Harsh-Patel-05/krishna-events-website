import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { site } from '@/data/site.config'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const KEY = 'ke-intro-seen'

export default function Loader() {
  const reduced = useReducedMotion()
  const [show, setShow] = useState(() => {
    if (typeof window === 'undefined') return false
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
    return !sessionStorage.getItem(KEY)
  })

  useEffect(() => {
    if (!show || reduced) return undefined
    sessionStorage.setItem(KEY, '1')
    const t = setTimeout(() => setShow(false), 700)
    return () => clearTimeout(t)
  }, [show, reduced])

  return (
    <AnimatePresence>
      {show && !reduced && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          aria-hidden="true"
        >
          <div className="text-center">
            <motion.div
              className="mx-auto inline-flex"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={site.logo}
                alt=""
                className="h-28 w-auto object-contain md:h-32"
                decoding="async"
              />
            </motion.div>
            <motion.div
              className="mx-auto mt-6 h-px w-16 origin-center bg-gold/60"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.45, delay: 0.12 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
