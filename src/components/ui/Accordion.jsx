import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ease } from '@/lib/animations'

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const open = openIndex === i
        return (
          <div key={item.q}>
            <h3 className="font-sans text-base font-normal">
              <button
                type="button"
                aria-expanded={open}
                onClick={() => setOpenIndex(open ? -1 : i)}
                className="flex min-h-[3.75rem] w-full items-center justify-between gap-6 py-5 text-left text-ivory transition-colors hover:text-gold"
              >
                <span className="font-display text-xl leading-snug md:text-2xl">{item.q}</span>
                <Plus
                  className={cn(
                    'size-4 shrink-0 text-gold transition-transform duration-500',
                    open && 'rotate-45',
                  )}
                  strokeWidth={1.5}
                />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-6 text-[0.95rem] leading-relaxed text-mist">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
