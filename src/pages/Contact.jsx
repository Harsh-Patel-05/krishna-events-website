import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import Seo from '@/components/layout/Seo'
import PageHero from '@/components/layout/PageHero'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'
import InstagramIcon from '@/components/ui/InstagramIcon'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon'
import ContactForm from '@/components/sections/Contact'
import FAQ from '@/components/sections/FAQ'
import { site } from '@/data/site.config'
import { media } from '@/data/media'
import { whatsappLink } from '@/lib/utils'

const row = 'flex items-start gap-4 border-t border-line py-5'
const label = 'eyebrow mb-1 text-[0.66rem] text-mist'
const link = 'inline-flex min-h-11 items-center text-lg text-ivory transition-colors hover:text-gold'

export default function Contact() {
  const { phones, email, address, mapEmbed, mapLink } = site.contact

  return (
    <>
      <Seo
        title="Contact"
        description="Plan your wedding with Krishna Events, Ahmedabad — call, WhatsApp, email or send an enquiry."
      />
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let’s plan your <span className="gold-text">wedding.</span>
          </>
        }
        subtitle="Tell us about your wedding and we’ll reach out to discuss your vision and budget. Prefer a scheduled chat? Book a consultation."
        image={media.pageHeroes.contact}
        imageAlt="Sangeet celebration by Krishna Events"
        position="center 40%"
      />

      <section className="section-y">
        <div className="container-x grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="display-md mb-8">Reach us directly</h2>
              <ul>
                <li className={row}>
                  <Phone className="mt-1 size-5 shrink-0 text-gold" aria-hidden="true" />
                  <div>
                    <p className={label}>Call</p>
                    {phones.map((p) => (
                      <a key={p.tel} href={`tel:${p.tel}`} className={`${link} block`}>
                        {p.display}
                      </a>
                    ))}
                  </div>
                </li>
                <li className={row}>
                  <WhatsAppIcon className="mt-1 size-5 shrink-0 text-gold" />
                  <div>
                    <p className={label}>WhatsApp</p>
                    <a
                      href={whatsappLink(site.contact.whatsapp, 'Hello Krishna Events!')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={link}
                    >
                      {site.contact.whatsappDisplay}
                    </a>
                  </div>
                </li>
                <li className={row}>
                  <Mail className="mt-1 size-5 shrink-0 text-gold" aria-hidden="true" />
                  <div className="min-w-0">
                    <p className={label}>Email</p>
                    <a href={`mailto:${email}`} className={`${link} break-all`}>
                      {email}
                    </a>
                  </div>
                </li>
                <li className={row}>
                  <MapPin className="mt-1 size-5 shrink-0 text-gold" aria-hidden="true" />
                  <div>
                    <p className={label}>Visit</p>
                    <address className="text-lg not-italic leading-snug text-ivory">
                      {address.lines.map((l) => (
                        <span key={l} className="block">
                          {l}
                        </span>
                      ))}
                    </address>
                    <a
                      href={mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex min-h-11 items-center text-sm text-gold hover:text-gold-soft"
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                </li>
                <li className={`${row} border-b`}>
                  <InstagramIcon className="mt-1 size-5 shrink-0 text-gold" />
                  <div>
                    <p className={label}>Instagram</p>
                    <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className={link}>
                      {site.social.instagramHandle}
                    </a>
                  </div>
                </li>
              </ul>
              <p className="mt-6 flex items-start gap-3 text-sm text-mist">
                <Clock className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                Prefer to talk it through? Call or message us on WhatsApp and we’ll take it from there.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="border-t border-line pt-2 sm:pt-4">
                <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h2 className="display-md">Send a wedding enquiry</h2>
                    <p className="mt-3 text-mist">Share a few details — the more we know, the better we can plan.</p>
                  </div>
                  <Button to="/consultation" variant="outline-gold" size="sm">
                    Book consultation
                  </Button>
                </div>
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section aria-label="Map" className="border-y border-line bg-surface">
        <div className="relative h-[24rem] w-full md:h-[30rem]">
          <iframe
            title="Krishna Events location — Ahmedabad, Gujarat"
            src={mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full border-0 opacity-90"
          />
        </div>
        <div className="container-x flex flex-col items-start justify-between gap-4 py-6 sm:flex-row sm:items-center">
          <p className="text-mist">{address.full}</p>
          <Button href={mapLink} variant="outline" size="sm">
            Get directions
          </Button>
        </div>
      </section>

      <FAQ />
    </>
  )
}
