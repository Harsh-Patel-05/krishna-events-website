import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'
import InstagramIcon from '@/components/ui/InstagramIcon'
import { gallery } from '@/data/gallery'
import { site } from '@/data/site.config'

// A static strip of our own photography that links out to the real Instagram profile.
// (A live feed would need Instagram's API — this keeps the page fast and honest.)
const ids = ['gallery-04', 'gallery-10', 'gallery-02', 'gallery-12', 'gallery-15', 'gallery-06']
const picks = ids.map((id) => gallery.find((g) => g.id === id))

export default function InstagramFeed() {
  return (
    <section className="section-y bg-surface">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <p className="eyebrow mb-4 flex items-center gap-3">
              <InstagramIcon className="size-4" />
              {site.social.instagramHandle}
            </p>
            <h2 className="display-lg max-w-xl">Follow the celebrations.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Button href={site.social.instagram} variant="outline">
              Follow on Instagram
            </Button>
          </Reveal>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-3 lg:grid-cols-6">
          {picks.map((p, i) => (
            <li key={p.id}>
              <Reveal delay={i * 0.05}>
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Krishna Events on Instagram"
                  className="zoom-wrap group relative block aspect-square overflow-hidden"
                >
                  <img src={p.src} alt={p.alt} loading="lazy" className="h-full w-full object-cover" />
                  <span className="absolute inset-0 grid place-items-center bg-ink/55 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
                    <InstagramIcon className="size-7 text-gold" />
                  </span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
