import Button from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'
import { cta, site } from '@/data/site.config'
import { whatsappLink } from '@/lib/utils'

export default function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={cta.image}
        alt=""
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_28%]"
      />
      <div className="absolute inset-0 -z-10 bg-ink/80" aria-hidden="true" />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/40 to-ink/70"
        aria-hidden="true"
      />

      <div className="container-x section-y text-center">
        <Reveal>
          <p className="eyebrow mb-6 justify-center">{cta.eyebrow}</p>
          <h2 className="display-lg mx-auto max-w-3xl">{cta.title}</h2>
          <p className="lede mx-auto mt-5 max-w-lg">{cta.body}</p>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button to={cta.primaryCta.to} variant="gold" size="lg">
              {cta.primaryCta.label}
            </Button>
            <Button to={cta.secondaryCta.to} variant="outline" size="lg">
              {cta.secondaryCta.label}
            </Button>
          </div>
          <p className="mt-8 text-sm text-mist">
            Or{' '}
            <a
              href={whatsappLink(site.contact.whatsapp, 'Hello Krishna Events — I would like to plan my wedding.')}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-soft"
            >
              WhatsApp us
            </a>
            {' · '}
            <a href={`tel:${site.contact.phones[0].tel}`} className="text-ivory hover:text-gold">
              {site.contact.phones[0].display}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
