import { Link } from 'react-router-dom'
import { ArrowUp, Mail, MapPin, Phone } from 'lucide-react'
import InstagramIcon from '@/components/ui/InstagramIcon'
import { useScrollFlag } from '@/hooks/useScrollFlag'
import { nav, site } from '@/data/site.config'
import { services } from '@/data/services'

const linkClass =
  'inline-flex min-h-10 items-center text-sm text-mist transition-colors hover:text-gold'

export default function Footer() {
  const { phones, email, address, mapLink } = site.contact
  const showTop = useScrollFlag(700)

  return (
    <footer className="relative border-t border-line bg-ink">
      <div className="hairline absolute inset-x-0 top-0" aria-hidden="true" />

      <div className="container-x grid gap-12 py-16 md:grid-cols-12 md:gap-10 md:py-20">
        <div className="md:col-span-5">
          <Link to="/" className="inline-flex items-center" aria-label="Krishna Events — Home">
            <img
              src={site.logo}
              alt="Krishna Events — Your Wedding Architect"
              width="180"
              height="152"
              className="h-[4.75rem] w-auto object-contain object-left md:h-[5.25rem]"
              decoding="async"
            />
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-mist">
            {site.role} in {site.location}. Destination and luxury weddings designed with
            architectural care.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-3 text-sm text-ivory transition-colors hover:text-gold"
            >
              <InstagramIcon className="size-4 text-gold" />
              {site.social.instagramHandle}
            </a>
            {site.social.youtube && (
              <a
                href={site.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-3 text-sm text-mist transition-colors hover:text-gold"
              >
                YouTube · Wedding Concepts
              </a>
            )}
          </div>
        </div>

        <div className="md:col-span-2">
          <h3 className="mb-5 text-[0.68rem] uppercase tracking-[0.2em] text-gold">Explore</h3>
          <ul className="space-y-1">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/consultation" className={linkClass}>
                Book Consultation
              </Link>
            </li>
            <li>
              <Link to="/faq" className={linkClass}>
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="mb-5 text-[0.68rem] uppercase tracking-[0.2em] text-gold">Services</h3>
          <ul className="space-y-1">
            {services.slice(0, 5).map((s) => (
              <li key={s.id}>
                <Link to={`/services/${s.id}`} className={linkClass}>
                  {s.title}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/services" className={`${linkClass} text-gold`}>
                All services →
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h3 className="mb-5 text-[0.68rem] uppercase tracking-[0.2em] text-gold">Contact</h3>
          <ul className="space-y-2 text-sm text-mist">
            {phones.map((p) => (
              <li key={p.tel}>
                <a href={`tel:${p.tel}`} className={`${linkClass} gap-3`}>
                  <Phone className="size-3.5 text-gold" aria-hidden="true" />
                  {p.display}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${email}`} className={`${linkClass} gap-3 break-all`}>
                <Mail className="size-3.5 shrink-0 text-gold" aria-hidden="true" />
                {email}
              </a>
            </li>
            <li>
              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex gap-3 py-2 leading-relaxed transition-colors hover:text-gold"
              >
                <MapPin className="mt-1 size-3.5 shrink-0 text-gold" aria-hidden="true" />
                <span>{address.full}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-mist sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="font-display text-base italic text-gold-soft/90">{site.tagline}</p>
        </div>
      </div>

      {showTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="fixed bottom-24 right-5 z-40 grid size-11 place-items-center border border-gold/40 bg-ink/95 text-gold transition-colors hover:bg-gold hover:text-ink md:right-8"
        >
          <ArrowUp className="size-4" />
        </button>
      )}
    </footer>
  )
}
