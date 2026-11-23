import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import { services } from '@/data/services'

/** Editorial wedding services index — text-first to avoid repeating gallery photos on Home. */
export default function Services() {
  return (
    <section className="section-y bg-surface">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Wedding services"
            title="Every chapter of your wedding, designed."
            body="From destination celebrations to mandap décor — each discipline under one wedding creative direction."
          />
          <Reveal>
            <Link to="/services" className="text-link shrink-0">
              View all services
              <ArrowUpRight className="size-3.5" />
            </Link>
          </Reveal>
        </div>

        <ol className="mt-14 max-w-4xl">
          {services.map((s, i) => (
            <li key={s.id} className="border-t border-line last:border-b">
              <Reveal delay={i * 0.04}>
                <Link
                  to={`/services/${s.id}`}
                  className="group grid grid-cols-[3rem_1fr_auto] items-center gap-3 py-5 md:gap-5 md:py-6"
                >
                  <span className="font-display text-base text-gold/70">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span>
                    <span className="block font-display text-xl text-ivory transition-colors duration-400 group-hover:text-gold md:text-2xl lg:text-[1.65rem]">
                      {s.title}
                    </span>
                    <span className="mt-1.5 block max-w-md text-sm text-mist opacity-90 md:text-[0.9rem]">
                      {s.short}
                    </span>
                  </span>
                  <ArrowUpRight className="size-5 text-mist/50 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" />
                </Link>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
