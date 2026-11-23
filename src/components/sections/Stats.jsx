import Reveal from '@/components/ui/Reveal'
import { stats } from '@/data/site.config'

export default function Stats() {
  return (
    <section className="border-y border-line bg-surface" aria-label="At a glance">
      <div className="container-x py-12 md:py-14">
        <ul className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-6">
          {stats.map((stat, i) => (
            <li key={stat.label} className="text-center lg:text-left">
              <Reveal delay={i * 0.05}>
                <p className="gold-text font-display text-4xl leading-none md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-3 font-display text-lg text-ivory md:text-xl">{stat.label}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
