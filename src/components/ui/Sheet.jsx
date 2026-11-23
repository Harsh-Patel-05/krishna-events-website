import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ease } from '@/lib/animations'

/** Accessible slide-in sheet (mobile menu). Escape + backdrop close, scroll lock, focus on open. */
export default function Sheet({ open, onClose, label = 'Menu', side = 'right', children, className }) {
  const panelRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    panelRef.current?.focus()
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  const from = side === 'left' ? '-100%' : '100%'

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[80]" role="dialog" aria-modal="true" aria-label={label}>
          <motion.button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            ref={panelRef}
            tabIndex={-1}
            className={cn(
              'absolute inset-y-0 flex w-[min(24rem,88vw)] flex-col border-gold/20 bg-surface outline-none',
              side === 'left' ? 'left-0 border-r' : 'right-0 border-l',
              className,
            )}
            initial={{ x: from }}
            animate={{ x: 0 }}
            exit={{ x: from }}
            transition={{ duration: 0.5, ease }}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="absolute right-3 top-3 grid size-11 place-items-center text-ivory transition-colors hover:text-gold"
            >
              <X className="size-6" />
            </button>
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
