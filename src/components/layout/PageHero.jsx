import { motion } from 'framer-motion'
import { ease } from '@/lib/animations'
import { useReducedMotion } from '@/hooks/useReducedMotion'

/** Reusable full-bleed page banner. */
export default function PageHero({ eyebrow, title, subtitle, image, imageAlt = '', position = 'center' }) {
  const reduced = useReducedMotion()
  const item = (delay) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 26 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, ease, delay },
        }

  return (
    <section className="relative isolate flex min-h-[58svh] items-end overflow-hidden bg-surface md:min-h-[68svh]">
      {image && (
        <img
          src={image}
          alt={imageAlt}
          className="kenburns absolute inset-0 -z-20 h-full w-full object-cover"
          style={{ objectPosition: position }}
          fetchPriority="high"
        />
      )}
      <div className="scrim-hero absolute inset-0 -z-10" aria-hidden="true" />

      <div className="container-x pb-14 pt-32 md:pb-20">
        {eyebrow && (
          <motion.p {...item(0.1)} className="eyebrow mb-5 flex items-center gap-4">
            <span aria-hidden="true" className="h-px w-10 bg-gold/70" />
            {eyebrow}
          </motion.p>
        )}
        <motion.h1 {...item(0.2)} className="display-xl max-w-4xl text-ivory">
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p {...item(0.35)} className="mt-6 max-w-2xl text-base text-ivory/80 md:text-lg">
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
