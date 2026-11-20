import Seo from '@/components/layout/Seo'
import PageHero from '@/components/layout/PageHero'
import Reveal from '@/components/ui/Reveal'
import Process from '@/components/sections/Process'
import WhyUs from '@/components/sections/WhyUs'
import FinalCTA from '@/components/sections/FinalCTA'
import { about } from '@/data/about'
import { site } from '@/data/site.config'

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Krishna Events is a leading wedding and event management company based in Jaipur, Rajasthan — our story, mission, objective and quality policy."
      />
      <PageHero
        eyebrow="About Krishna Events"
        title={
          <>
            Your <span className="gold-text">Wedding Architect.</span>
          </>
        }
        subtitle={about.intro}
        image={about.heroImage}
        imageAlt={about.heroImageAlt}
        position="center 30%"
      />

      {/* Story */}
      <section className="section-y">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow mb-5 flex items-center gap-4">
                <span aria-hidden="true" className="h-px w-10 bg-gold/70" />
                Our story
              </p>
              <h2 className="display-lg">Passion, planned to the last detail.</h2>
            </Reveal>
          </div>
          <div className="space-y-6 text-lg text-mist lg:col-span-8">
            {about.story.map((p, i) => (
              <Reveal key={i} delay={0.05}>
                <p className={i === 0 ? 'text-xl text-ivory/90 md:text-2xl' : undefined}>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Objective */}
      <section className="section-y bg-surface">
        <div className="container-x grid gap-px bg-line md:grid-cols-2">
          {[
            { label: 'Our Mission', text: about.mission },
            { label: 'Our Objective', text: about.objective },
          ].map((b) => (
            <div key={b.label} className="bg-surface py-4 md:p-12 md:py-4 md:first:pl-0 md:last:pr-0">
              <Reveal>
                <p className="eyebrow mb-5">{b.label}</p>
                <p className="font-display text-3xl leading-snug text-ivory md:text-4xl">{b.text}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* Quality policy */}
      <section className="section-y relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-0 size-[30rem] rounded-full bg-peacock/15 blur-3xl"
        />
        <div className="container-x relative mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="eyebrow mb-8">Quality policy</p>
            <blockquote className="gold-text font-display text-4xl italic leading-tight md:text-6xl">
              “{about.qualityPolicy.quote}”
            </blockquote>
            <p className="mt-6 text-sm uppercase tracking-[0.3em] text-mist">— {about.qualityPolicy.attribution}</p>
            <p className="mx-auto mt-10 max-w-2xl text-lg text-mist">{about.qualityPolicy.body}</p>
          </Reveal>
        </div>
      </section>

      <WhyUs />
      <Process />

      <section className="section-y">
        <div className="container-x text-center">
          <Reveal>
            <p className="eyebrow mb-4">Find us</p>
            <p className="font-display text-3xl md:text-4xl">{site.contact.address.full}</p>
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
