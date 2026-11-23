import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import { whyUs } from '@/data/site.config'
import { media } from '@/data/media'

export default function WhyUs() {
  return (
    <section className="section-y relative overflow-hidden bg-surface">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/4 size-[28rem] rounded-full bg-peacock/10 blur-3xl"
      />
      <div className="container-x relative grid gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Why Krishna Events"
              title="The architecture behind your wedding."
              body="What couples in Ahmedabad and beyond can expect when we plan their wedding."
            />
            <Reveal delay={0.12}>
              <div className="img-frame mt-10 hidden aspect-[4/5] overflow-hidden lg:block">
                <img
                  src={media.homeWhyUs}
                  alt="Stage and floral décor by Krishna Events"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>

        <ol className="lg:col-span-7">
          {whyUs.map((item, i) => (
            <li key={item.title} className="border-t border-line py-7 last:border-b">
              <Reveal delay={0.03}>
                <div className="grid gap-3 sm:grid-cols-[3.25rem_1fr] sm:gap-8">
                  <span className="font-display text-lg text-gold/80">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-display text-xl text-ivory md:text-2xl">{item.title}</h3>
                    <p className="mt-2.5 max-w-lg text-sm leading-relaxed text-mist md:text-[0.95rem]">
                      {item.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
