import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import { processSteps } from '@/data/site.config'

export default function Process() {
  return (
    <section className="section-y bg-surface">
      <div className="container-x">
        <SectionHeading eyebrow="How we work" title="From first conversation to final farewell." />
        <ol className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {processSteps.map((p, i) => (
            <li key={p.step} className="relative lg:pr-10">
              <Reveal delay={i * 0.1}>
                <span className="gold-text font-display text-6xl">{p.step}</span>
                <div aria-hidden="true" className="my-5 h-px w-full bg-gradient-to-r from-gold/60 to-transparent" />
                <h3 className="font-display text-3xl text-ivory">{p.title}</h3>
                <p className="mt-3 text-sm text-mist">{p.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
