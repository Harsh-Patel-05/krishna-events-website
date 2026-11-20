import Reveal from '@/components/ui/Reveal'
import { cityNames } from '@/data/destinations'
import { citiesHeading } from '@/data/site.config'

// Only verifiable facts: the count is derived from the verified city list.
// Remaining items are qualitative, taken from the brand's About page.
const qualities = [
  { title: 'Personal attention', body: 'Your event treated like ours.' },
  { title: 'Within your budget', body: 'Cost-effective, never compromised.' },
  { title: 'Bespoke by design', body: 'A reflection of your taste.' },
]

export default function Stats() {
  return (
    <section className="border-y border-line bg-ink" aria-label="At a glance">
      <div className="container-x grid gap-10 py-12 md:grid-cols-12 md:items-center md:py-16">
        <Reveal className="flex items-baseline gap-5 md:col-span-4">
          <span className="gold-text font-display text-7xl leading-none md:text-8xl">{cityNames.length}</span>
          <span className="eyebrow max-w-[9rem] leading-relaxed">{citiesHeading}</span>
        </Reveal>

        <ul className="grid gap-8 sm:grid-cols-3 md:col-span-8">
          {qualities.map((q, i) => (
            <li key={q.title}>
              <Reveal delay={i * 0.08} className="border-l border-gold/40 pl-5">
                <p className="font-display text-2xl text-ivory">{q.title}</p>
                <p className="mt-1 text-sm text-mist">{q.body}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
