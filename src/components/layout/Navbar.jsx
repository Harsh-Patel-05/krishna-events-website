import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Phone, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import InstagramIcon from '@/components/ui/InstagramIcon'
import { useScrollFlag } from '@/hooks/useScrollFlag'
import { nav, site } from '@/data/site.config'
import { cn } from '@/lib/utils'

function Brand({ onClick }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className="inline-flex min-h-11 items-center"
      aria-label="Krishna Events — Home"
    >
      <img
        src={site.logoNav}
        alt="Krishna Events"
        width="260"
        height="64"
        className="h-11 w-auto object-contain object-left md:h-12"
        decoding="async"
      />
    </Link>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrollFlag(36)
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const solid = scrolled || !isHome || open

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          solid ? 'glass' : 'nav-transparent',
        )}
      >
        <div className="container-x flex h-[4.25rem] items-center justify-between gap-5 md:h-[4.75rem]">
          <Brand />

          <nav aria-label="Primary" className="hidden items-center gap-5 lg:flex xl:gap-6">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className="link-underline inline-flex min-h-10 items-center text-[0.7rem] uppercase tracking-[0.15em] text-mist/85 hover:text-ivory"
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button to="/consultation" size="sm" variant="outline-gold" className="hidden sm:inline-flex">
              Plan Wedding
            </Button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="grid size-11 place-items-center text-ivory transition-colors hover:text-gold lg:hidden"
            >
              {open ? <X className="size-5" strokeWidth={1.5} /> : <Menu className="size-5" strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-ink/96" />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex h-full flex-col px-7 pb-10 pt-24"
            >
              <nav aria-label="Mobile" className="flex flex-col">
                {nav.map((item, i) => (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 + i * 0.035 }}
                  >
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        cn(
                          'flex min-h-[3.25rem] items-center border-b border-line/70 font-display text-[1.65rem] transition-colors',
                          isActive ? 'text-gold' : 'text-ivory hover:text-gold',
                        )
                      }
                    >
                      {item.label}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto space-y-6 pt-10">
                <Button to="/consultation" className="w-full" variant="gold" onClick={() => setOpen(false)}>
                  Plan Your Wedding
                </Button>
                <div className="space-y-1 text-sm text-mist">
                  {site.contact.phones.map((p) => (
                    <a key={p.tel} href={`tel:${p.tel}`} className="flex min-h-11 items-center gap-3 hover:text-gold">
                      <Phone className="size-3.5 text-gold" aria-hidden="true" />
                      {p.display}
                    </a>
                  ))}
                  <a
                    href={site.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-11 items-center gap-3 hover:text-gold"
                  >
                    <InstagramIcon className="size-3.5 text-gold" />
                    {site.social.instagramHandle}
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
