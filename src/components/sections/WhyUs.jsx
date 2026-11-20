import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import { whyUs } from '@/data/site.config'

export default function WhyUs() {
  return (
    <section className="section-y relative overflow-hidden bg-surface">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 size-[32rem] rounded-full bg-peacock/15 blur-3xl"
      />
      <div className="container-x relative grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Why Krishna Events"
              title="The architecture behind your big day."
              body="What you can expect when you hand us the vision."
            />
          </div>
        </div>

        <ol className="lg:col-span-8">
          {whyUs.map((item, i) => (
            <li key={item.title} className="border-t border-line py-8 last:border-b md:py-10">
              <Reveal delay={0.04}>
                <div className="grid gap-4 md:grid-cols-[4rem_1fr_1.2fr] md:gap-8">
                  <span className="font-display text-2xl text-gold">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="font-display text-3xl text-ivory">{item.title}</h3>
                  <p className="text-mist">{item.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
