import { useState } from 'react'
import Seo from '@/components/layout/Seo'
import PageHero from '@/components/layout/PageHero'
import Reveal from '@/components/ui/Reveal'
import Lightbox from '@/components/ui/Lightbox'
import FinalCTA from '@/components/sections/FinalCTA'
import { portfolio } from '@/data/portfolio'
import { media } from '@/data/media'

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(null)
  const [lightbox, setLightbox] = useState(null)

  const openGallery = (project, index = 0) => {
    setActiveProject(project)
    setLightbox(index)
  }

  const lightboxItems =
    activeProject?.images.map((src, i) => ({
      id: `${activeProject.id}-${i}`,
      src,
      alt: `${activeProject.title} — image ${i + 1}`,
    })) ?? []

  return (
    <>
      <Seo
        title="Our Wedding Work"
        description="Wedding portfolio by Krishna Events, Ahmedabad — real celebrations from @krishna_eventss."
      />
      <PageHero
        eyebrow="Our work"
        title={
          <>
            Portfolio of <span className="gold-text">crafted weddings.</span>
          </>
        }
        subtitle="Selected wedding stories from Ahmedabad and beyond — real work by Krishna Events."
        image={media.pageHeroes.work}
        imageAlt="Wedding celebration vibes by Krishna Events"
        position="center 40%"
      />

      <section className="section-y">
        <div className="container-x">
          <ul className="grid gap-8 md:grid-cols-2">
            {portfolio.map((project, i) => (
              <li key={project.id}>
                <Reveal delay={(i % 2) * 0.08}>
                  <article className="group overflow-hidden border-t border-line pt-6">
                    <button
                      type="button"
                      onClick={() => openGallery(project, 0)}
                      className="zoom-wrap relative block aspect-[16/11] w-full overflow-hidden text-left"
                    >
                      <img
                        src={project.cover}
                        alt={project.coverAlt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </button>
                    <div className="mt-5 flex flex-wrap items-end justify-between gap-3">
                      <div>
                        <p className="text-[0.65rem] uppercase tracking-[0.18em] text-gold">
                          {project.destination} · {project.eventType}
                        </p>
                        <h2 className="mt-2 font-display text-2xl text-ivory md:text-3xl">{project.title}</h2>
                        <p className="mt-2 max-w-md text-sm text-mist">{project.description}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => openGallery(project, 0)}
                        className="text-[0.72rem] uppercase tracking-[0.16em] text-gold transition-colors hover:text-gold-soft"
                      >
                        View photos →
                      </button>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Lightbox
        items={lightboxItems}
        index={lightbox}
        onClose={() => {
          setLightbox(null)
          setActiveProject(null)
        }}
        onChange={setLightbox}
      />
      <FinalCTA />
    </>
  )
}
