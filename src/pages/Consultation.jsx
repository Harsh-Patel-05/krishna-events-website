import Seo from '@/components/layout/Seo'
import PageHero from '@/components/layout/PageHero'
import Reveal from '@/components/ui/Reveal'
import ConsultationForm from '@/components/forms/ConsultationForm'
import { site } from '@/data/site.config'
import { media } from '@/data/media'
import { whatsappLink } from '@/lib/utils'

export default function Consultation() {
  return (
    <>
      <Seo
        title="Book a Consultation"
        description="Request a wedding consultation with Krishna Events, Ahmedabad. Share your date, city and vision — then reach us on call or WhatsApp to confirm."
      />
      <PageHero
        eyebrow="Wedding consultation"
        title={
          <>
            Let’s design your <span className="gold-text">wedding.</span>
          </>
        }
        subtitle="Share a few wedding details so we can prepare for your call. Prefer to talk now? Reach us on WhatsApp or phone."
        image={media.pageHeroes.consultation}
        imageAlt="Couple photoshoot moment by Krishna Events"
        position="center 55%"
      />

      <section className="section-y">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <h2 className="display-md">What to expect</h2>
              <ul className="mt-6 space-y-4 text-sm text-mist">
                <li className="border-b border-line pb-4">
                  A conversation about your wedding date, destination and celebration style.
                </li>
                <li className="border-b border-line pb-4">
                  Guidance on scope — full wedding planning, décor, or destination coordination.
                </li>
                <li className="border-b border-line pb-4">
                  Clear next steps. Prefer to talk now? Call or WhatsApp us directly.
                </li>
              </ul>
              <div className="mt-8 space-y-2 text-sm">
                {site.contact.phones.map((p) => (
                  <a key={p.tel} href={`tel:${p.tel}`} className="block text-ivory hover:text-gold">
                    {p.display}
                  </a>
                ))}
                <a
                  href={whatsappLink(site.contact.whatsapp, 'Hello Krishna Events — I would like to book a wedding consultation.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gold hover:text-gold-soft"
                >
                  WhatsApp {site.contact.whatsappDisplay}
                </a>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal delay={0.1}>
              <div className="border-t border-line pt-2 sm:pt-4">
                <h2 className="display-md">Request a wedding consultation</h2>
                <p className="mb-8 mt-3 text-mist">All required fields must be completed before submitting.</p>
                <ConsultationForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
