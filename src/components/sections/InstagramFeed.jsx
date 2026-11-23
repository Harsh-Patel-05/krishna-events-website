import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'
import InstagramIcon from '@/components/ui/InstagramIcon'
import { media } from '@/data/media'
import { site } from '@/data/site.config'

const picks = media.instagramFeed.map((src, i) => ({
  id: `feed-${i + 1}`,
  src,
  alt: `Krishna Events wedding moment ${i + 1}`,
}))

export default function InstagramFeed() {
  return (
    <section className="section-y bg-surface">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <p className="eyebrow mb-5">
              <InstagramIcon className="size-3.5" />
              {site.social.instagramHandle}
            </p>
            <h2 className="display-lg max-w-xl">Follow the weddings.</h2>
            <p className="mt-4 max-w-md text-sm text-mist">
              Real celebrations from our Instagram — entries, varmalas, décor and destination moments.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Button href={site.social.instagram} variant="outline">
              Follow on Instagram
            </Button>
          </Reveal>
        </div>

        <ul className="mt-12 grid grid-cols-3 gap-2 lg:gap-2.5">
          {picks.map((p, i) => (
            <li key={p.id}>
              <Reveal delay={i * 0.04}>
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Krishna Events on Instagram"
                  className="zoom-wrap group relative block aspect-square overflow-hidden"
                >
                  <img src={p.src} alt={p.alt} loading="lazy" className="h-full w-full object-cover" />
                  <span className="absolute inset-0 grid place-items-center bg-ink/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
                    <InstagramIcon className="size-6 text-gold" />
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
