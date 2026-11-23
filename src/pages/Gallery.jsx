import { useCallback, useState } from 'react'
import { motion } from 'framer-motion'
import Seo from '@/components/layout/Seo'
import PageHero from '@/components/layout/PageHero'
import Lightbox from '@/components/ui/Lightbox'
import Button from '@/components/ui/Button'
import FinalCTA from '@/components/sections/FinalCTA'
import { gallery } from '@/data/gallery'
import { media } from '@/data/media'
import { ease } from '@/lib/animations'

const PAGE_SIZE = 9

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)
  const [visible, setVisible] = useState(PAGE_SIZE)
  const close = useCallback(() => setLightbox(null), [])
  const shown = gallery.slice(0, visible)
  const hasMore = visible < gallery.length

  return (
    <>
      <Seo
        title="Wedding Gallery"
        description="Real wedding photos by Krishna Events, Ahmedabad — entries, décor, varmala and celebrations from @krishna_eventss."
      />
      <PageHero
        eyebrow="Wedding gallery"
        title={
          <>
            Moments, <span className="italic text-warm-ivory/90">captured.</span>
          </>
        }
        subtitle="Real celebrations from Krishna Events — entrances, décor and wedding moments."
        image={media.pageHeroes.gallery}
        imageAlt="Night celebration setup by Krishna Events"
        position="center 60%"
      />

      <section className="section-y">
        <div className="container-x">
          <ul className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>li]:mb-4">
            {shown.map((item, i) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '80px' }}
                transition={{ duration: 0.35, ease, delay: Math.min((i % PAGE_SIZE) * 0.03, 0.24) }}
                className="break-inside-avoid"
              >
                <button
                  type="button"
                  onClick={() => setLightbox(i)}
                  aria-label={`Open image: ${item.alt}`}
                  className="img-frame zoom-wrap group relative block w-full overflow-hidden bg-surface"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-auto w-full"
                  />
                  {item.title && (
                    <span className="absolute inset-x-0 bottom-0 translate-y-1 bg-gradient-to-t from-ink/85 to-transparent p-4 text-left opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                      <span className="text-[0.65rem] uppercase tracking-[0.18em] text-gold">
                        {item.title}
                      </span>
                    </span>
                  )}
                </button>
              </motion.li>
            ))}
          </ul>

          {hasMore && (
            <div className="mt-10 flex justify-center">
              <Button
                type="button"
                variant="outline-gold"
                onClick={() => setVisible((n) => Math.min(n + PAGE_SIZE, gallery.length))}
              >
                Load more photos
              </Button>
            </div>
          )}
        </div>
      </section>

      <Lightbox items={gallery} index={lightbox} onClose={close} onChange={setLightbox} />
      <FinalCTA />
    </>
  )
}
