import { motion } from 'framer-motion'
import { ease } from '@/lib/animations'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt = '',
  position = 'center',
}) {
  const reduced = useReducedMotion()
  const item = (delay) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, ease, delay },
        }

  return (
    <section className="relative isolate flex min-h-[46svh] items-end overflow-hidden bg-ink md:min-h-[54svh]">
      {image && (
        <img
          src={image}
          alt={imageAlt}
          className={`absolute inset-0 -z-20 h-full w-full object-cover ${reduced ? '' : 'kenburns'}`}
          style={{ objectPosition: position }}
          fetchPriority="high"
          decoding="async"
        />
      )}
      <div className="scrim-hero absolute inset-0 -z-10" aria-hidden="true" />

      <div className="container-x pb-12 pt-28 md:pb-16 md:pt-36">
        {eyebrow && (
          <motion.p {...item(0.05)} className="eyebrow mb-5">
            {eyebrow}
          </motion.p>
        )}
        <motion.h1 {...item(0.12)} className="display-xl max-w-4xl text-white">
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p {...item(0.22)} className="mt-5 max-w-xl text-[0.98rem] leading-relaxed text-white/70 md:text-base">
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
