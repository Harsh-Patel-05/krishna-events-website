import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import { destinations } from '@/data/destinations'
import { citiesHeading } from '@/data/site.config'

export default function Destinations() {
  const withImage = destinations.filter((d) => d.image)
  const rest = destinations.filter((d) => !d.image)

  return (
    <section className="section-y bg-surface">
      <div className="container-x">
        <SectionHeading
          eyebrow={citiesHeading}
          title="From Ahmedabad to Goa, Bali & Phuket."
          body="Local Gujarat celebrations and destination weddings — the same creative care wherever you say “I do”."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 md:gap-5">
          {withImage.map((d, i) => (
            <Reveal key={d.name} delay={i * 0.08}>
              <figure className="img-frame zoom-wrap relative aspect-[16/11] overflow-hidden md:aspect-[5/3.6]">
                <img src={d.image} alt={d.imageAlt} loading="lazy" className="h-full w-full object-cover" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/55 to-transparent p-6 pt-16">
                  <span className="block font-display text-2xl text-ivory md:text-3xl">{d.name}</span>
                  <span className="mt-1 block text-sm text-gold-soft/90">{d.note}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <ul className="mt-10 grid border-t border-line sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((d, i) => (
            <li key={d.name} className="border-b border-line sm:border-r sm:odd:border-r lg:[&:nth-child(4n)]:border-r-0">
              <Reveal delay={i * 0.04} className="px-0 py-6 sm:pr-6">
                <span className="block font-display text-xl text-ivory">{d.name}</span>
                <span className="mt-1 block text-sm text-mist">{d.note}</span>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
