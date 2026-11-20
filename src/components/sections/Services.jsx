import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import { services } from '@/data/services'
import { cn } from '@/lib/utils'

/**
 * Services overview — an editorial index. Each row is a link to the detailed
 * section on /services; hovering (or focusing) a row previews its image.
 */
export default function Services() {
  const [active, setActive] = useState(0)

  return (
    <section className="section-y bg-surface">
      <div className="container-x">
        <SectionHeading
          eyebrow="What we do"
          title="Celebrations, designed end to end."
          body="Five disciplines, one team — from the first concept to the final farewell."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          <ol className="lg:col-span-7">
            {services.map((s, i) => (
              <li key={s.id} className="border-t border-line last:border-b">
                <Reveal delay={i * 0.05}>
                  <Link
                    to={`/services#${s.id}`}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    className="group flex min-h-24 items-center gap-5 py-6 md:gap-8"
                  >
                    <span className="w-8 font-display text-xl text-gold/80">{String(i + 1).padStart(2, '0')}</span>
                    <span className="flex-1">
                      <span
                        className={cn(
                          'block font-display text-3xl transition-colors duration-500 md:text-4xl',
                          active === i ? 'text-gold-soft' : 'text-ivory',
                        )}
                      >
                        {s.title}
                      </span>
                      <span className="mt-1 block max-w-md text-sm text-mist">{s.short}</span>
                    </span>
                    <ArrowUpRight className="size-6 text-gold transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </Link>
                </Reveal>
              </li>
            ))}
          </ol>

          <div className="relative hidden lg:col-span-5 lg:block">
            <div className="sticky top-28 aspect-[4/5] overflow-hidden bg-surface-2">
              {services.map((s, i) => (
                <img
                  key={s.id}
                  src={s.image}
                  alt={s.imageAlt}
                  loading="lazy"
                  className={cn(
                    'absolute inset-0 h-full w-full object-cover transition-opacity duration-700',
                    active === i ? 'opacity-100' : 'opacity-0',
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
