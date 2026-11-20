import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { testimonials } from '@/data/testimonials'
import { cn } from '@/lib/utils'
import { ease } from '@/lib/animations'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const reduced = useReducedMotion()
  const total = testimonials.length

  const go = useCallback((dir) => setIndex((i) => (i + dir + total) % total), [total])

  useEffect(() => {
    if (paused || reduced) return undefined
    const t = setInterval(() => go(1), 8000)
    return () => clearInterval(t)
  }, [paused, reduced, go])

  const t = testimonials[index]

  return (
    <section
      className="section-y relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="container-x">
        <SectionHeading eyebrow="Client love" title="In their words." />

        <div className="relative mt-14 grid gap-8 md:grid-cols-12">
          <span
            aria-hidden="true"
            className="gold-text pointer-events-none select-none font-display text-[9rem] leading-none md:col-span-2 md:text-[14rem]"
          >
            “
          </span>

          <div className="md:col-span-10" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.figure
                key={index}
                initial={reduced ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? { opacity: 0 } : { opacity: 0, y: -16 }}
                transition={{ duration: 0.6, ease }}
                className="min-h-[16rem]"
              >
                <blockquote className="font-display text-3xl italic leading-snug text-ivory md:text-5xl">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <span aria-hidden="true" className="h-px w-10 bg-gold" />
                  <span>
                    <span className="block text-sm font-medium uppercase tracking-[0.2em] text-gold">{t.name}</span>
                    <span className="block text-sm text-mist">{t.context}</span>
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>

            <div className="mt-10 flex items-center gap-3">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="grid size-12 place-items-center border border-line text-ivory transition-colors hover:border-gold hover:text-gold"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="grid size-12 place-items-center border border-line text-ivory transition-colors hover:border-gold hover:text-gold"
              >
                <ChevronRight className="size-5" />
              </button>
              <div className="ml-3 flex items-center">
                {testimonials.map((item, i) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Show testimonial ${i + 1}`}
                    aria-current={i === index}
                    className="grid size-11 place-items-center"
                  >
                    <span
                      className={cn(
                        'block h-0.5 transition-all duration-500',
                        i === index ? 'w-10 bg-gold' : 'w-5 bg-line',
                      )}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
