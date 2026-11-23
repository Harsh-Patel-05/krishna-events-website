import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import { featured } from '@/data/gallery'

export default function FeaturedWork() {
  const [a, b, c] = featured

  return (
    <section className="section-y">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Featured weddings"
            title="Moments we’ve had the joy of designing."
          />
          <Reveal>
            <Link to="/weddings" className="text-link">
              View all weddings
              <ArrowRight className="size-3.5" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-12 md:gap-6">
          <Reveal className="md:col-span-7">
            <Link to="/work" className="group block">
              <figure className="img-frame zoom-wrap relative aspect-[4/3] overflow-hidden md:aspect-[5/4]">
                <img src={a.src} alt={a.alt} loading="lazy" className="h-full w-full object-cover" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/55 to-transparent p-6 pt-20 md:p-8">
                  <span className="text-[0.68rem] uppercase tracking-[0.2em] text-gold">
                    {a.destination} · {a.eventType}
                  </span>
                  <span className="mt-2 block font-display text-2xl text-ivory md:text-3xl">{a.title}</span>
                </figcaption>
              </figure>
            </Link>
          </Reveal>

          <div className="flex flex-col gap-5 md:col-span-5 md:gap-6">
            <Reveal delay={0.08}>
              <Link to="/work" className="group block">
                <figure className="img-frame zoom-wrap relative aspect-[4/3] overflow-hidden">
                  <img src={b.src} alt={b.alt} loading="lazy" className="h-full w-full object-cover" />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-5 pt-14">
                    <span className="text-[0.65rem] uppercase tracking-[0.18em] text-gold">{b.theme}</span>
                    <span className="mt-1 block font-display text-xl text-ivory">{b.title}</span>
                  </figcaption>
                </figure>
              </Link>
            </Reveal>
            <Reveal delay={0.14}>
              <Link to="/work" className="group block">
                <figure className="img-frame zoom-wrap relative aspect-[16/10] overflow-hidden md:flex-1 md:aspect-auto md:min-h-[11rem]">
                  <img src={c.src} alt={c.alt} loading="lazy" className="h-full w-full object-cover" />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-5 pt-12">
                    <span className="text-[0.65rem] uppercase tracking-[0.18em] text-gold">{c.destination}</span>
                    <span className="mt-1 block font-display text-xl text-ivory">{c.title}</span>
                  </figcaption>
                </figure>
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
