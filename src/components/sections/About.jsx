import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import { about } from '@/data/about'
import { site } from '@/data/site.config'

/** Brand intro for the home page — editorial two-column layout. */
export default function About() {
  return (
    <section id="intro" className="section-y scroll-mt-24">
      <div className="container-x grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="relative lg:col-span-5">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="/images/gallery-03.jpg"
                alt="Bride and groom beneath a floral canopy at a heritage venue"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute -bottom-5 -right-5 -z-10 hidden size-2/3 border border-gold/40 md:block"
            />
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow mb-5 flex items-center gap-4">
              <span aria-hidden="true" className="h-px w-10 bg-gold/70" />
              {site.tagline}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display-lg">
              A wedding architect, <em className="gold-text pr-1 italic">from the Pink City.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-8 max-w-2xl text-lg text-ivory/90">{about.intro}</p>
            <p className="mt-5 max-w-2xl text-mist">{about.story[1]}</p>
          </Reveal>
          <Reveal delay={0.24}>
            <Link
              to="/about"
              className="group mt-9 inline-flex min-h-11 items-center gap-3 text-[0.78rem] font-medium uppercase tracking-[0.22em] text-gold transition-colors hover:text-gold-soft"
            >
              Our story
              <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-1.5" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
