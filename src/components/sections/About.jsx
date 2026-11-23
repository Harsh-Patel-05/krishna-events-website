import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import { about } from '@/data/about'
import { media } from '@/data/media'

export default function About() {
  return (
    <section id="intro" className="section-y scroll-mt-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
        <div className="relative lg:col-span-5">
          <Reveal>
            <div className="img-frame zoom-wrap relative aspect-[4/5] overflow-hidden">
              <img
                src={media.homeAbout}
                alt="Wedding celebration styling by Krishna Events, Ahmedabad"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow mb-5">The wedding architect</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="display-lg max-w-[11ch]">Your vision. Our architecture.</h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="lede mt-7 max-w-xl">{about.intro}</p>
            <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-mist/90">{about.philosophy}</p>
          </Reveal>
          <Reveal delay={0.18}>
            <Link to="/about" className="text-link mt-9">
              Our Philosophy
              <ArrowRight className="size-3.5" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
