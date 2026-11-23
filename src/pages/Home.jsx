import { lazy, Suspense } from 'react'
import Seo from '@/components/layout/Seo'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import FeaturedWork from '@/components/sections/Gallery'
import WhyUs from '@/components/sections/WhyUs'
import Process from '@/components/sections/Process'

const Stats = lazy(() => import('@/components/sections/Stats'))
const Destinations = lazy(() => import('@/components/sections/Destinations'))
const Testimonials = lazy(() => import('@/components/sections/Testimonials'))
const InstagramFeed = lazy(() => import('@/components/sections/InstagramFeed'))
const FinalCTA = lazy(() => import('@/components/sections/FinalCTA'))

function BelowFold() {
  return (
    <Suspense fallback={null}>
      <Stats />
      <Destinations />
      <Testimonials />
      <InstagramFeed />
      <FinalCTA />
    </Suspense>
  )
}

export default function Home() {
  return (
    <>
      <Seo />
      <Hero />
      <About />
      <Services />
      <FeaturedWork />
      <WhyUs />
      <Process />
      <BelowFold />
    </>
  )
}
