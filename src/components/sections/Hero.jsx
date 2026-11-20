import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Button from '@/components/ui/Button'
import { hero, site } from '@/data/site.config'
import { ease } from '@/lib/animations'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export default function Hero() {
  const reduced = useReducedMotion()
  const item = (delay) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1, ease, delay },
        }

  return (
    <section className="relative isolate flex min-h-[calc(100svh-7rem)] items-end overflow-hidden bg-surface">
      <img
        src={hero.image}
        alt={hero.imageAlt}
        className="kenburns absolute inset-0 -z-20 h-full w-full object-cover object-[60%_center]"
        fetchPriority="high"
      />
      <div className="scrim-hero absolute inset-0 -z-10" aria-hidden="true" />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/85 via-ink/45 to-transparent"
        aria-hidden="true"
      />

      <div className="container-x w-full pb-20 pt-32 md:pb-28">
        <motion.p {...item(0.1)} className="eyebrow mb-6 flex items-center gap-4">
          <span aria-hidden="true" className="h-px w-10 bg-gold/70" />
          {hero.eyebrow}
        </motion.p>

        <motion.h1 {...item(0.2)} className="display-xl text-ivory">
          <span className="gold-text block">{site.name}</span>
          <span className="sr-only"> — {site.tagline}</span>
        </motion.h1>

        <motion.p {...item(0.35)} className="mt-4 font-display text-2xl italic text-ivory md:text-4xl">
          {hero.headline[0]} <span className="text-gold-soft">{hero.headline[1]}</span>
        </motion.p>

        <motion.p {...item(0.5)} className="mt-6 max-w-xl text-base text-ivory/80 md:text-lg">
          {hero.sub}
        </motion.p>

        <motion.div {...item(0.65)} className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button to={hero.primaryCta.to} size="lg">
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
        className="absolute bottom-6 right-6 hidden size-11 place-items-center border border-gold/40 text-gold transition-colors hover:bg-gold hover:text-ink md:grid"
      >
        <ArrowDown className="size-5" />
      </a>
    </section>
  )
}
