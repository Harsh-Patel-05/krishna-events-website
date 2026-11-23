import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Seo from '@/components/layout/Seo'
import PageHero from '@/components/layout/PageHero'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'
import Process from '@/components/sections/Process'
import FinalCTA from '@/components/sections/FinalCTA'
import { services } from '@/data/services'
import { media } from '@/data/media'

export default function Services() {
  return (
    <>
      <Seo
        title="Wedding Services"
        description="Luxury wedding planning, destination weddings, décor, engagements, pre-wedding events and receptions by Krishna Events, Ahmedabad."
      />
      <PageHero
        eyebrow="Wedding services"
        title={
          <>
            Every wedding chapter, <span className="italic text-warm-ivory/90">designed.</span>
          </>
        }
        subtitle="Six wedding disciplines under one creative roof — from destination celebrations to mandap décor."
        image={media.pageHeroes.services}
        imageAlt="Wedding celebration overview by Krishna Events"
        position="center 55%"
      />

      <section className="section-y">
        <div className="container-x">
          <ul>
            {services.map((s, i) => (
              <li key={s.id} className="border-t border-line last:border-b">
                <Reveal delay={(i % 4) * 0.03}>
                  <Link
                    to={`/services/${s.id}`}
                    className="group grid items-center gap-6 py-8 md:grid-cols-12 md:gap-8 md:py-10"
                  >
                    <span className="font-display text-sm text-gold/70 md:col-span-1">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="md:col-span-4">
                      <div className="img-frame zoom-wrap aspect-[16/11] overflow-hidden md:aspect-[4/3]">
                        <img
                          src={s.image}
                          alt={s.imageAlt}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <h2 className="font-display text-2xl text-ivory transition-colors group-hover:text-gold md:text-3xl">
                        {s.title}
                      </h2>
                      <p className="mt-3 max-w-xl text-sm leading-relaxed text-mist md:text-[0.95rem]">
                        {s.short}
                      </p>
                    </div>
                    <span className="hidden justify-self-end text-mist transition-colors group-hover:text-gold md:col-span-1 md:block">
                      <ArrowUpRight className="size-5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Process />

      <section className="section-y bg-surface">
        <div className="container-x text-center">
          <Reveal>
            <p className="eyebrow mb-5 justify-center">Next step</p>
            <h2 className="display-md">Ready to plan your wedding?</h2>
            <p className="lede mx-auto mt-4 max-w-lg">
              Tell us about your date, destination and vision — we’ll guide the next steps.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Button to="/consultation" variant="gold">
                Book consultation
              </Button>
              <Button to="/contact" variant="outline">
                Contact us
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
