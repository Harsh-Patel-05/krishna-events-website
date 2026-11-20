import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import { destinations } from '@/data/destinations'
import { citiesHeading } from '@/data/site.config'

export default function Destinations() {
  const withImage = destinations.filter((d) => d.image)
  const rest = destinations.filter((d) => !d.image)

  return (
    <section className="section-y">
      <div className="container-x">
        <SectionHeading
          eyebrow={citiesHeading}
          title="From palaces of Rajasthan to the shores of Goa."
          body="Wherever your story is set, we bring our planning, vendors and detail-first approach to the venue."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2 md:gap-6">
          {withImage.map((d, i) => (
            <Reveal key={d.name} delay={i * 0.1}>
              <figure className="zoom-wrap relative aspect-[4/5] overflow-hidden md:aspect-[5/6]">
                <img src={d.image} alt={d.imageAlt} loading="lazy" className="h-full w-full object-cover" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/70 to-transparent p-7 pt-24">
                  <span className="block font-display text-5xl text-ivory">{d.name}</span>
                  <span className="mt-1 block text-sm text-gold-soft">{d.note}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <ul className="mt-12 grid border-t border-line sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((d, i) => (
            <li key={d.name} className="border-b border-line">
              <Reveal delay={i * 0.04} className="py-7 sm:pr-6">
                <span className="block font-display text-3xl text-ivory">{d.name}</span>
                <span className="block text-sm text-mist">{d.note}</span>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
