import Seo from '@/components/layout/Seo'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Stats from '@/components/sections/Stats'
import Services from '@/components/sections/Services'
import FeaturedWork from '@/components/sections/Gallery'
import WhyUs from '@/components/sections/WhyUs'
import Destinations from '@/components/sections/Destinations'
import Process from '@/components/sections/Process'
import Testimonials from '@/components/sections/Testimonials'
import InstagramFeed from '@/components/sections/InstagramFeed'
import FinalCTA from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <>
      <Seo />
      <Hero />
      <About />
      <Stats />
      <Services />
      <FeaturedWork />
      <WhyUs />
      <Destinations />
      <Process />
      <Testimonials />
      <InstagramFeed />
      <FinalCTA />
    </>
  )
}
