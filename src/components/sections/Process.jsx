import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import { processSteps } from '@/data/site.config'

export default function Process() {
  return (
    <section className="section-y">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our process"
          title="From first conversation to your wedding day."
          body="Four clear steps — so you always know what comes next."
        />

        <ol className="relative mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-5 hidden h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent lg:block"
          />
          {processSteps.map((p, i) => (
            <li key={p.step} className="relative">
              <Reveal delay={i * 0.07}>
                <span className="relative z-[1] inline-flex size-10 items-center justify-center border border-gold/40 bg-ink font-display text-sm text-gold">
                  {p.step}
                </span>
                <h3 className="mt-6 font-display text-xl text-ivory md:text-[1.35rem]">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{p.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
