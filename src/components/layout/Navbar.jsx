import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Phone } from 'lucide-react'
import Button from '@/components/ui/Button'
import Sheet from '@/components/ui/Sheet'
import InstagramIcon from '@/components/ui/InstagramIcon'
import { nav, site } from '@/data/site.config'

function Brand({ onClick }) {
  return (
    <Link to="/" onClick={onClick} className="flex min-h-11 items-center gap-3" aria-label="Krishna Events — Home">
      <img src={site.logo} alt="" width="40" height="40" className="size-10 object-contain" />
      <span className="leading-none">
        <span className="block font-display text-2xl tracking-wide text-ivory">{site.name}</span>
        <span className="mt-1 block text-[0.62rem] uppercase tracking-[0.34em] text-gold">{site.tagline}</span>
      </span>
    </Link>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // Close the mobile sheet whenever the route changes.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <>
      <header className="glass sticky top-0 z-50">
      <div className="container-x flex h-[4.5rem] items-center justify-between gap-6">
        <Brand />

        <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className="link-underline inline-flex min-h-11 items-center text-[0.78rem] font-normal uppercase tracking-[0.2em] text-ivory/90"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button to="/contact" size="sm" className="hidden md:inline-flex">
            Plan Your Event
          </Button>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="grid size-11 place-items-center text-ivory transition-colors hover:text-gold lg:hidden"
          >
            <Menu className="size-7" />
          </button>
        </div>
      </div>
      </header>

      {/* Sheet lives outside the header: backdrop-filter would otherwise trap position:fixed */}
      <Sheet open={open} onClose={() => setOpen(false)} label="Site menu">
        <div className="flex h-full flex-col px-7 pb-8 pt-20">
          <nav aria-label="Mobile" className="flex flex-col">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex min-h-14 items-center border-b border-line font-display text-3xl transition-colors hover:text-gold ${
                    isActive ? 'text-gold' : 'text-ivory'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-auto space-y-5">
            <Button to="/contact" className="w-full" onClick={() => setOpen(false)}>
              Plan Your Event
            </Button>
            <div className="space-y-1 text-sm text-mist">
              {site.contact.phones.map((p) => (
                <a key={p.tel} href={`tel:${p.tel}`} className="flex min-h-11 items-center gap-3 hover:text-gold">
                  <Phone className="size-4 text-gold" aria-hidden="true" />
                  {p.display}
                </a>
              ))}
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 items-center gap-3 hover:text-gold"
              >
                <InstagramIcon className="size-4 text-gold" />
                {site.social.instagramHandle}
              </a>
            </div>
          </div>
        </div>
      </Sheet>
    </>
  )
}
