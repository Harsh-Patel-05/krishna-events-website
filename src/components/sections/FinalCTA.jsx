import Button from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon'
import { cta, site } from '@/data/site.config'
import { whatsappLink } from '@/lib/utils'

export default function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={cta.image}
        alt=""
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_30%]"
      />
      <div className="absolute inset-0 -z-10 bg-ink/75" aria-hidden="true" />
      <div className="scrim-hero absolute inset-0 -z-10 opacity-80" aria-hidden="true" />

      <div className="container-x section-y text-center">
        <Reveal>
          <p className="eyebrow mb-5">{cta.eyebrow}</p>
          <h2 className="display-lg mx-auto max-w-3xl">{cta.title}</h2>
          <p className="mx-auto mt-6 max-w-xl text-ivory/80">{cta.body}</p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button to="/contact" size="lg">
              Plan Your Event
            </Button>
            <Button to="/contact" variant="outline" size="lg">
              Contact Us
            </Button>
            <Button
              href={whatsappLink(site.contact.whatsapp, 'Hello Krishna Events, I would like to plan an event.')}
              variant="ghost"
              size="lg"
            >
              <WhatsAppIcon className="size-5" />
              WhatsApp
            </Button>
          </div>
          <p className="mt-8 text-sm text-mist">
            Or call{' '}
            {site.contact.phones.map((p, i) => (
              <span key={p.tel}>
                {i > 0 && ' / '}
                <a href={`tel:${p.tel}`} className="inline-flex min-h-11 items-center text-ivory hover:text-gold">
                  {p.display}
                </a>
              </span>
            ))}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
