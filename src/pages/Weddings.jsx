import { Link } from 'react-router-dom'
import Seo from '@/components/layout/Seo'
import PageHero from '@/components/layout/PageHero'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'
import FinalCTA from '@/components/sections/FinalCTA'
import Destinations from '@/components/sections/Destinations'
import { gallery } from '@/data/gallery'
import { services } from '@/data/services'
import { media } from '@/data/media'

const experiences = [
  {
    title: 'Wedding ceremonies',
    body: 'Sacred mandap settings and ceremony flows designed with reverence and visual poetry.',
    image: media.featured[2].src,
  },
  {
    title: 'Wedding decoration',
    body: 'Floral density, fabric, light and colour composed into spaces guests remember.',
    image: media.featured[0].src,
  },
  {
    title: 'Wedding experiences',
    body: 'Guest hospitality, entrances and evening atmospheres that feel cinematic and calm.',
    image: media.featured[1].src,
  },
]

export default function Weddings() {
  // Use later gallery items so this page doesn’t repeat the home featured set.
  const galleryPreview = gallery.slice(12, 20)

  return (
    <>
      <Seo
        title="Weddings"
        description="Luxury and destination wedding planning by Krishna Events, Ahmedabad — décor, ceremonies and celebrations across India."
      />
      <PageHero
        eyebrow="Weddings"
        title={
          <>
            Luxury weddings, <span className="gold-text">architected.</span>
          </>
        }
        subtitle="From Ahmedabad celebrations to destination weekends — weddings planned with personal care and clear creative direction."
        image={media.pageHeroes.weddings}
        imageAlt="Venue overview from a Krishna Events celebration"
        position="center 50%"
      />

      <Destinations />

      <section className="section-y">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow mb-4">Wedding planning services</p>
            <h2 className="display-lg max-w-2xl">Everything your wedding needs — under one creative direction.</h2>
          </Reveal>
          <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <li key={s.id}>
                <Reveal delay={i * 0.05}>
                  <Link
                    to={`/services/${s.id}`}
                    className="group block border-t border-line pt-6 transition-colors hover:border-gold/50"
                  >
                    <h3 className="font-display text-2xl text-ivory group-hover:text-gold">{s.title}</h3>
                    <p className="mt-3 text-sm text-mist">{s.short}</p>
                    <span className="mt-5 inline-block text-[0.72rem] uppercase tracking-[0.16em] text-gold">
                      Explore →
                    </span>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x grid gap-8 md:grid-cols-3">
          {experiences.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <figure>
                <div className="zoom-wrap aspect-[4/5] overflow-hidden">
                  <img src={item.image} alt={item.title} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <figcaption className="mt-5">
                  <h3 className="font-display text-xl text-ivory">{item.title}</h3>
                  <p className="mt-2 text-sm text-mist">{item.body}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {galleryPreview.length > 0 && (
        <section className="section-y">
          <div className="container-x">
            <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <Reveal>
                <p className="eyebrow mb-3">From our gallery</p>
                <h2 className="display-lg">Real wedding moments.</h2>
              </Reveal>
              <Button to="/gallery" variant="outline" size="sm">
                View full gallery
              </Button>
            </div>
            <ul className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {galleryPreview.map((g, i) => (
                <li key={g.id}>
                  <Reveal delay={i * 0.04}>
                    <div className="zoom-wrap aspect-square overflow-hidden">
                      <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover" />
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <FinalCTA />
    </>
  )
}
