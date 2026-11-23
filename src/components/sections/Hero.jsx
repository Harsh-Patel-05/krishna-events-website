import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Button from '@/components/ui/Button'
import { hero } from '@/data/site.config'
import { ease } from '@/lib/animations'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export default function Hero() {
  const reduced = useReducedMotion()

  const item = (delay) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, ease, delay },
        }

  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink">
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <img
          src={hero.image}
          alt={hero.imageAlt}
          width={1400}
          height={1750}
          className={`absolute inset-0 h-full w-full object-cover object-[58%_center] ${reduced ? '' : 'kenburns'}`}
          fetchPriority="high"
          decoding="async"
        />
      </div>
      <div className="scrim-hero absolute inset-0 -z-10" aria-hidden="true" />

      <div className="container-x relative z-[2] w-full pb-16 pt-28 md:pb-20 md:pt-32 lg:pb-24 lg:pt-36">
        <motion.p {...item(0.04)} className="eyebrow mb-5 text-gold-soft/90 md:mb-6">
          {hero.eyebrow}
        </motion.p>

        <motion.h1 {...item(0.12)} className="display-xl max-w-[12ch] text-white">
          <span className="block">{hero.headline[0]}</span>
          <span className="block italic text-warm-ivory">{hero.headline[1]}</span>
        </motion.h1>

        <motion.p
          {...item(0.22)}
          className="mt-6 max-w-[28rem] text-[0.98rem] leading-relaxed text-white/70 md:mt-7 md:text-[1.05rem]"
        >
          {hero.sub}
        </motion.p>

        <motion.div {...item(0.32)} className="mt-9 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center">
          <Button to={hero.primaryCta.to} variant="gold" size="lg">
            {hero.primaryCta.label}
          </Button>
          <Button to={hero.secondaryCta.to} variant="outline" size="lg">
            {hero.secondaryCta.label}
          </Button>
        </motion.div>
      </div>

      <a
        href="#intro"
        aria-label="Scroll to introduction"
        className="scroll-indicator absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/45 transition-colors hover:text-white md:flex"
      >
        <span className="text-[0.6rem] uppercase tracking-[0.28em]">Scroll</span>
        <ArrowDown className="size-3.5" />
      </a>
    </section>
  )
}
