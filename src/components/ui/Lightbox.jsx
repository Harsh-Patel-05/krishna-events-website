import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

/**
 * Fullscreen image viewer.
 * `index === null` means closed. Keyboard: Esc, ← →. Touch: swipe.
 */
export default function Lightbox({ items, index, onClose, onChange }) {
  const open = index !== null && index !== undefined
  const touchX = useRef(null)
  const total = items.length

  const go = (dir) => onChange((index + dir + total) % total)

  useEffect(() => {
    if (!open) return undefined
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onChange((index + 1) % total)
      if (e.key === 'ArrowLeft') onChange((index - 1 + total) % total)
    }
    window.addEventListener('keydown', onKey)

    // Prefetch neighbors for snappy prev/next
    ;[1, -1].forEach((dir) => {
      const neighbor = items[(index + dir + total) % total]
      if (!neighbor?.src) return
      const img = new Image()
      img.src = neighbor.src
    })

    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [open, index, total, onClose, onChange, items])

  const item = open ? items[index] : null

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] flex flex-col bg-ink"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onTouchStart={(e) => {
            touchX.current = e.touches[0].clientX
          }}
          onTouchEnd={(e) => {
            if (touchX.current === null) return
            const dx = e.changedTouches[0].clientX - touchX.current
            if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1)
            touchX.current = null
          }}
        >
          <div className="flex items-center justify-between px-4 py-3 text-sm text-mist md:px-8">
            <span className="tracking-[0.2em]">
              {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close viewer"
              className="grid size-11 place-items-center text-ivory transition-colors hover:text-gold"
            >
              <X className="size-6" />
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center px-2 md:px-16" onClick={onClose}>
            <button
              type="button"
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation()
                go(-1)
              }}
              className="absolute left-1 z-10 grid size-12 place-items-center bg-ink/60 text-ivory transition-colors hover:text-gold md:left-4"
            >
              <ChevronLeft className="size-7" />
            </button>
            <motion.img
              key={item.src}
              src={item.src}
              alt={item.alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-full max-w-full object-contain"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            />
            <button
              type="button"
              aria-label="Next image"
              onClick={(e) => {
                e.stopPropagation()
                go(1)
              }}
              className="absolute right-1 z-10 grid size-12 place-items-center bg-ink/60 text-ivory transition-colors hover:text-gold md:right-4"
            >
              <ChevronRight className="size-7" />
            </button>
          </div>

          <p className="px-6 py-4 text-center text-sm text-mist">{item.alt}</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
