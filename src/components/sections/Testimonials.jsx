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
      className="section-y section-ivory"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="container-x">
        <SectionHeading
          eyebrow="Client love"
          title="In their words."
          body="Words from couples and families who trusted us with their wedding day."
        />

        <div className="relative mt-12 grid gap-6 md:grid-cols-12 md:gap-8">
          <span
            aria-hidden="true"
            className="pointer-events-none select-none font-display text-[5rem] leading-none text-gold/50 md:col-span-2 md:text-[7rem]"
          >
            “
          </span>

          <div className="md:col-span-10" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.figure
                key={index}
                initial={reduced ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? { opacity: 0 } : { opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease }}
                className="min-h-[11rem]"
              >
                <blockquote className="font-display text-2xl leading-snug text-ink md:text-3xl lg:text-[2.15rem]">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <span aria-hidden="true" className="h-px w-10 bg-gold-deep/60" />
                  <span>
                    <span className="block text-sm font-medium tracking-wide text-gold-deep">{t.name}</span>
                    <span className="mt-0.5 block text-sm text-ink/55">{t.context}</span>
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>

            <div className="mt-10 flex items-center gap-3">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="grid size-12 place-items-center border border-ink/15 text-ink transition-colors hover:border-gold-deep hover:text-gold-deep"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="grid size-12 place-items-center border border-ink/15 text-ink transition-colors hover:border-gold-deep hover:text-gold-deep"
              >
                <ChevronRight className="size-5" />
              </button>
              <div className="ml-2 flex items-center">
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
                        i === index ? 'w-10 bg-gold-deep' : 'w-5 bg-ink/20',
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
