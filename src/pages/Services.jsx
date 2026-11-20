import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import Seo from '@/components/layout/Seo'
import PageHero from '@/components/layout/PageHero'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'
import Process from '@/components/sections/Process'
import FinalCTA from '@/components/sections/FinalCTA'
import { services } from '@/data/services'
import { cn } from '@/lib/utils'

export default function Services() {
  return (
    <>
      <Seo
        title="Services"
        description="Destination weddings, wedding planning, wedding decorations, birthday celebrations and event production & management by Krishna Events, Jaipur."
      />
      <PageHero
        eyebrow="Our services"
        title={
          <>
            Every celebration, <span className="gold-text">designed.</span>
          </>
        }
        subtitle="Destination weddings, planning, décor, birthdays and complete event management — under one creative roof."
        image="/images/gallery-02.jpg"
        imageAlt="Palace courtyard with a white floral pavilion and reflecting pool"
        position="center 55%"
      />

      {/* In-page index */}
      <nav aria-label="Services" className="border-b border-line bg-surface">
        <ul className="container-x flex gap-x-8 overflow-x-auto py-1">
          {services.map((s) => (
            <li key={s.id} className="shrink-0">
              <Link
                to={`/services#${s.id}`}
                className="link-underline inline-flex min-h-12 items-center text-[0.74rem] uppercase tracking-[0.18em] text-mist"
              >
                {s.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {services.map((s, i) => {
        const flip = i % 2 === 1
        return (
          <section key={s.id} id={s.id} className={cn('section-y scroll-mt-20', i % 2 === 1 && 'bg-surface')}>
            <div className="container-x grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
              <div className={cn('lg:col-span-6', flip && 'lg:order-2')}>
                <Reveal>
                  <figure className="zoom-wrap relative aspect-[4/5] overflow-hidden">
                    <img src={s.image} alt={s.imageAlt} loading="lazy" className="h-full w-full object-cover" />
                  </figure>
                </Reveal>
              </div>
              <div className={cn('lg:col-span-6', flip && 'lg:order-1')}>
                <Reveal>
                  <p className="gold-text font-display text-6xl">{String(i + 1).padStart(2, '0')}</p>
                  <h2 className="display-lg mt-2">{s.title}</h2>
                  <p className="mt-6 text-lg text-mist">{s.longDescription}</p>
                </Reveal>
                <Reveal delay={0.1}>
                  <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                    {s.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-ivory/90">
                        <Check className="mt-1 size-4 shrink-0 text-gold" aria-hidden="true" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Button to="/contact" variant="outline" className="mt-10">
                    Enquire about this
                  </Button>
                </Reveal>
              </div>
            </div>
          </section>
        )
      })}

      <Process />
      <FinalCTA />
    </>
  )
}
