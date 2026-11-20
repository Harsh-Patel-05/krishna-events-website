import { useCallback, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Seo from '@/components/layout/Seo'
import PageHero from '@/components/layout/PageHero'
import Lightbox from '@/components/ui/Lightbox'
import FinalCTA from '@/components/sections/FinalCTA'
import { gallery, galleryFilters } from '@/data/gallery'
import { cn } from '@/lib/utils'

export default function Gallery() {
  const [filter, setFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const items = useMemo(
    () => (filter === 'All' ? gallery : gallery.filter((g) => g.category === filter)),
    [filter],
  )

  const close = useCallback(() => setLightbox(null), [])

  return (
    <>
      <Seo
        title="Gallery"
        description="A look at weddings, destination celebrations, birthday setups and décor by Krishna Events, Jaipur."
      />
      <PageHero
        eyebrow="Gallery"
        title={
          <>
            Moments, <span className="gold-text">captured.</span>
          </>
        }
        subtitle="A glimpse of the stages, entrances and celebrations we’ve designed."
        image="/images/gallery-16.jpg"
        imageAlt="Draped white pathway with crystal chandeliers and floral borders"
        position="center 60%"
      />

      <section className="section-y">
        <div className="container-x">
          <div role="tablist" aria-label="Filter gallery" className="mb-12 flex flex-wrap gap-x-2 gap-y-1">
            {galleryFilters.map((f) => (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
                className={cn(
                  'min-h-11 border-b px-4 text-[0.76rem] font-medium uppercase tracking-[0.2em] transition-colors duration-300',
                  filter === f ? 'border-gold text-gold' : 'border-transparent text-mist hover:text-ivory',
                )}
              >
                {f}
              </button>
            ))}
          </div>

          {items.length === 0 ? (
            <p className="py-20 text-center text-mist">No photographs in this category yet.</p>
          ) : (
            <ul className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>li]:mb-4">
              <AnimatePresence mode="popLayout">
                {items.map((item, i) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.5 }}
                    className="break-inside-avoid"
                  >
                    <button
                      type="button"
                      onClick={() => setLightbox(i)}
                      aria-label={`Open image: ${item.alt}`}
                      className="zoom-wrap group relative block w-full overflow-hidden bg-surface"
                    >
                      <img src={item.src} alt={item.alt} loading="lazy" className="h-auto w-full" />
                      <span className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-ink/90 to-transparent p-4 text-left opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                        <span className="eyebrow text-[0.64rem]">{item.category}</span>
                      </span>
                    </button>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
          )}
        </div>
      </section>

      <Lightbox items={items} index={lightbox} onClose={close} onChange={setLightbox} />
      <FinalCTA />
    </>
  )
}
