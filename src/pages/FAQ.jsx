import Seo from '@/components/layout/Seo'
import PageHero from '@/components/layout/PageHero'
import Reveal from '@/components/ui/Reveal'
import Accordion from '@/components/ui/Accordion'
import FinalCTA from '@/components/sections/FinalCTA'
import { faqs } from '@/data/faqs'
import { media } from '@/data/media'

export default function FAQ() {
  return (
    <>
      <Seo
        title="FAQ"
        description="Frequently asked questions about wedding planning, destination weddings, décor and booking with Krishna Events, Ahmedabad."
      />
      <PageHero
        eyebrow="Wedding FAQ"
        title={
          <>
            Questions, <span className="gold-text">answered.</span>
          </>
        }
        subtitle="Clear answers about wedding planning, destinations, décor and how to begin with Krishna Events."
        image={media.pageHeroes.faq}
        imageAlt="Varmala celebration by Krishna Events"
        position="center 35%"
      />

      <section className="section-y">
        <div className="container-x mx-auto max-w-3xl">
          <Reveal>
            <Accordion items={faqs} />
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
