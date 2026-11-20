import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { site } from '@/data/site.config'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const KEY = 'ke-intro-seen'

/** Brief brand intro, shown once per browser session. Skipped for reduced-motion users. */
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
    const t = setTimeout(() => setShow(false), 1500)
    return () => clearTimeout(t)
  }, [show, reduced])

  return (
    <AnimatePresence>
      {show && !reduced && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          aria-hidden="true"
        >
          <div className="text-center">
            <motion.img
              src={site.logo}
              alt=""
              className="mx-auto size-16 object-contain"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />
            <motion.p
              className="gold-text mt-5 font-display text-4xl"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {site.name}
            </motion.p>
            <motion.p
              className="eyebrow mt-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {site.tagline}
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
