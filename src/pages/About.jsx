import Seo from '@/components/layout/Seo'
import PageHero from '@/components/layout/PageHero'
import Reveal from '@/components/ui/Reveal'
import Process from '@/components/sections/Process'
import FinalCTA from '@/components/sections/FinalCTA'
import { about } from '@/data/about'
import { site } from '@/data/site.config'
import { media } from '@/data/media'

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Krishna Events is a wedding planner based in Ahmedabad, Gujarat — our story, vision and wedding philosophy."
      />
      <PageHero
        eyebrow="About Krishna Events"
        title={
          <>
            Passion. Precision. <span className="gold-text">Weddings.</span>
          </>
        }
        subtitle={about.intro}
        image={about.heroImage}
        imageAlt={about.heroImageAlt}
        position="center 30%"
      />

      <section className="section-y">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow mb-3">Our story</p>
              <h2 className="display-lg">Rooted in Ahmedabad. Built for your day.</h2>
            </Reveal>
          </div>
          <div className="space-y-4 text-sm text-mist md:text-base lg:col-span-8">
            {about.story.map((p, i) => (
              <Reveal key={i} delay={0.05}>
                <p className={i === 0 ? 'text-base text-ivory/90 md:text-lg' : undefined}>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow mb-3">Who we are</p>
            <h2 className="display-md">Wedding architects for modern couples.</h2>
            <p className="mt-4 text-mist">{about.whoWeAre}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="eyebrow mb-3">Our philosophy</p>
            <h2 className="display-md">Listen. Design. Execute.</h2>
            <p className="mt-4 text-mist">{about.philosophy}</p>
          </Reveal>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid gap-px bg-line md:grid-cols-2">
          {[
            { label: 'Our Vision', text: about.vision },
            { label: 'Our Mission', text: about.mission },
          ].map((b) => (
            <div key={b.label} className="bg-ink p-6 md:p-8">
              <Reveal>
                <p className="eyebrow mb-3">{b.label}</p>
                <p className="font-display text-lg leading-snug text-ivory md:text-xl">{b.text}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <Process />

      <section className="section-y relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-0 size-[30rem] rounded-full bg-peacock/15 blur-3xl"
        />
        <div className="container-x relative mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="eyebrow mb-5">Quality policy</p>
            <blockquote className="gold-text font-display text-xl leading-snug md:text-2xl lg:text-3xl">
              “{about.qualityPolicy.quote}”
            </blockquote>
            <p className="mt-4 text-xs uppercase tracking-[0.24em] text-mist">
              — {about.qualityPolicy.attribution}
            </p>
            <p className="mx-auto mt-6 max-w-xl text-sm text-mist md:text-base">{about.qualityPolicy.body}</p>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="zoom-wrap aspect-[4/5] overflow-hidden">
                <img
                  src={media.pageHeroes.aboutTeam}
                  alt="Wedding celebration by Krishna Events, Ahmedabad"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow mb-3">Our team</p>
              <h2 className="display-lg">Dedicated planners. Personal attention.</h2>
              <p className="mt-5 max-w-xl text-mist">{about.teamNote}</p>
              <p className="mt-8 font-display text-xl text-ivory md:text-2xl">{site.contact.address.full}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
