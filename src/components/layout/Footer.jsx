import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import InstagramIcon from '@/components/ui/InstagramIcon'
import { nav, site } from '@/data/site.config'
import { services } from '@/data/services'
import { cityNames } from '@/data/destinations'

const col = 'text-sm text-mist'
const linkClass = 'inline-flex min-h-11 items-center transition-colors hover:text-gold'

export default function Footer() {
  const { phones, email, address, mapLink } = site.contact

  return (
    <footer className="relative border-t border-line bg-surface">
      <div className="hairline absolute inset-x-0 top-0" aria-hidden="true" />
      <div className="container-x grid gap-14 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <Link to="/" className="inline-flex items-center gap-3" aria-label="Krishna Events — Home">
            <img src={site.logo} alt="" width="48" height="48" className="size-12 object-contain" />
            <span>
              <span className="block font-display text-3xl text-ivory">{site.name}</span>
              <span className="block text-[0.65rem] uppercase tracking-[0.34em] text-gold">{site.tagline}</span>
            </span>
          </Link>
          <p className="mt-6 max-w-sm text-sm text-mist">
            {site.role} in {site.location}. Planning destination weddings and celebrations across{' '}
            {cityNames.slice(0, -1).join(', ')} and {cityNames[cityNames.length - 1]}.
          </p>
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-11 items-center gap-3 text-sm text-ivory transition-colors hover:text-gold"
          >
            <InstagramIcon className="size-5 text-gold" />
            {site.social.instagramHandle}
          </a>
        </div>

        <div className="md:col-span-2">
          <h3 className="eyebrow mb-4 font-sans">Explore</h3>
          <ul className={col}>
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="eyebrow mb-4 font-sans">Services</h3>
          <ul className={col}>
            {services.map((s) => (
              <li key={s.id}>
                <Link to={`/services#${s.id}`} className={linkClass}>
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h3 className="eyebrow mb-4 font-sans">Contact</h3>
          <ul className={`${col} space-y-1`}>
            {phones.map((p) => (
              <li key={p.tel}>
                <a href={`tel:${p.tel}`} className={`${linkClass} gap-3`}>
                  <Phone className="size-4 text-gold" aria-hidden="true" />
                  {p.display}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${email}`} className={`${linkClass} gap-3 break-all`}>
                <Mail className="size-4 shrink-0 text-gold" aria-hidden="true" />
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
                <MapPin className="mt-1 size-4 shrink-0 text-gold" aria-hidden="true" />
                <span>{address.full}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs text-mist sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="font-display text-base italic text-gold-soft">Creating Moments. Crafting Memories.</p>
        </div>
      </div>
    </footer>
  )
}
