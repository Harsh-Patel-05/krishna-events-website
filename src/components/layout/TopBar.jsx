import { Link } from 'react-router-dom'
import { Mail, Phone } from 'lucide-react'
import InstagramIcon from '@/components/ui/InstagramIcon'
import { announcement, site } from '@/data/site.config'

const linkClass =
  'inline-flex min-h-11 items-center gap-2 transition-colors hover:text-peacock-soft focus-visible:text-gold'

export default function TopBar() {
  const { phones, email } = site.contact

  return (
    <div className="border-b border-line bg-ink text-[0.78rem] text-mist">
      <div className="container-x flex items-center justify-between gap-4">
        <div className="flex items-center gap-x-5">
          {phones.map((p, i) => (
            <a
              key={p.tel}
              href={`tel:${p.tel}`}
              className={`${linkClass} ${i > 0 ? 'hidden sm:inline-flex' : ''}`}
              aria-label={`Call ${p.display}`}
            >
              <Phone className="size-3.5 text-peacock" aria-hidden="true" />
              {p.display}
            </a>
          ))}
          <a href={`mailto:${email}`} className={`${linkClass} hidden lg:inline-flex`}>
            <Mail className="size-3.5 text-peacock" aria-hidden="true" />
            {email}
          </a>
        </div>

        <p className="hidden truncate text-center font-display text-base italic text-ivory/80 2xl:block">
          {announcement.text}
        </p>

        <div className="flex items-center gap-1 sm:gap-4">
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Krishna Events on Instagram"
            className="grid size-11 place-items-center transition-colors hover:text-gold"
          >
            <InstagramIcon className="size-[18px]" />
          </a>
          <Link
            to="/contact"
            className="inline-flex min-h-11 items-center text-sm font-medium text-gold transition-colors hover:text-peacock-soft"
          >
            Plan Your Wedding
          </Link>
        </div>
      </div>
    </div>
  )
}
