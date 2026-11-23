import { Link, Navigate, useParams } from 'react-router-dom'
import { Check } from 'lucide-react'
import Seo from '@/components/layout/Seo'
import PageHero from '@/components/layout/PageHero'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'
import Accordion from '@/components/ui/Accordion'
import FinalCTA from '@/components/sections/FinalCTA'
import { getServiceById, services } from '@/data/services'

export default function ServiceDetail() {
  const { serviceId } = useParams()
  const service = getServiceById(serviceId)

  if (!service) return <Navigate to="/services" replace />

  const related = services.filter((s) => s.id !== service.id).slice(0, 3)

  return (
    <>
      <Seo title={service.title} description={service.short} />
      <PageHero
        eyebrow="Service"
        title={service.title}
        subtitle={service.short}
        image={service.image}
        imageAlt={service.imageAlt}
        position="center 45%"
      />

      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow mb-4">Introduction</p>
              <h2 className="display-md">Designed with intention.</h2>
              <p className="mt-5 text-base leading-relaxed text-mist md:text-lg">{service.longDescription}</p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <ul className="space-y-3 border border-line bg-surface p-6">
                {service.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-ivory/90">
                    <Check className="mt-1 size-4 shrink-0 text-gold" aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow mb-4">What we offer</p>
            <h2 className="display-md mb-6">Included in this service</h2>
            <ul className="space-y-4">
              {service.offers.map((o) => (
                <li key={o} className="border-b border-line pb-4 font-display text-xl text-ivory">
                  {o}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow mb-4">Planning process</p>
            <h2 className="display-md mb-6">How we deliver</h2>
            <ol className="space-y-5">
              {service.process.map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="gold-text font-display text-2xl">{String(i + 1).padStart(2, '0')}</span>
                  <p className="pt-1 text-mist">{step}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow mb-4">Related portfolio</p>
            <h2 className="display-md mb-8">Visual references</h2>
          </Reveal>
          <ul className="grid gap-4 sm:grid-cols-3">
            {service.relatedImages.map((src, i) => (
              <li key={src}>
                <Reveal delay={i * 0.06}>
                  <div className="zoom-wrap aspect-[4/5] overflow-hidden">
                    <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button to="/work" variant="outline">
              View our work
            </Button>
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x mx-auto max-w-3xl">
          <Reveal>
            <p className="eyebrow mb-4">FAQ</p>
            <h2 className="display-md mb-8">Common questions</h2>
            <Accordion items={service.faqs} />
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button to="/consultation" variant="gold">
              Book consultation
            </Button>
            <Button to="/contact" variant="outline">
              Contact us
            </Button>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          <p className="eyebrow mb-6">More services</p>
          <ul className="grid gap-4 md:grid-cols-3">
            {related.map((s) => (
              <li key={s.id}>
                <Link to={`/services/${s.id}`} className="group block border border-line p-5 hover:border-gold/40">
                  <h3 className="font-display text-xl text-ivory group-hover:text-gold">{s.title}</h3>
                  <p className="mt-2 text-sm text-mist">{s.short}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
