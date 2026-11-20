import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import { featured, gallery } from '@/data/gallery'

/** Home "Featured work": an asymmetric editorial collage that leads into the full gallery. */
export default function FeaturedWork() {
  const [a, b] = featured
  const c = gallery.find((g) => g.id === 'gallery-09')
  const d = gallery.find((g) => g.id === 'gallery-16')

  return (
    <section className="section-y">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading eyebrow="Featured work" title="Moments we’ve had the joy of designing." />
          <Reveal>
            <Link
              to="/gallery"
              className="group inline-flex min-h-11 items-center gap-3 text-[0.78rem] font-medium uppercase tracking-[0.22em] text-gold transition-colors hover:text-gold-soft"
            >
              Full gallery
              <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-1.5" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-12 md:gap-6">
          <Reveal className="md:col-span-7">
            <figure className="zoom-wrap relative aspect-[4/3] overflow-hidden">
              <img src={a.src} alt={a.alt} loading="lazy" className="h-full w-full object-cover" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-6">
                <span className="eyebrow">{a.category}</span>
                <span className="mt-1 block font-display text-2xl">{a.title}</span>
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-5 md:row-span-2">
            <figure className="zoom-wrap relative h-full min-h-[24rem] overflow-hidden">
              <img src={c.src} alt={c.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            </figure>
          </Reveal>
          <Reveal delay={0.05} className="md:col-span-4">
            <figure className="zoom-wrap relative aspect-[4/3] overflow-hidden">
              <img src={b.src} alt={b.alt} loading="lazy" className="h-full w-full object-cover" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-5">
                <span className="eyebrow">{b.category}</span>
                <span className="mt-1 block font-display text-xl">{b.title}</span>
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={0.15} className="md:col-span-3">
            <figure className="zoom-wrap relative aspect-[4/3] overflow-hidden md:h-full md:aspect-auto">
              <img src={d.src} alt={d.alt} loading="lazy" className="h-full w-full object-cover" />
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
