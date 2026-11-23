import { lazy, Suspense } from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp'
import Loader from '@/components/layout/Loader'
import ScrollToTop from '@/components/layout/ScrollToTop'

const Home = lazy(() => import('@/pages/Home'))
const About = lazy(() => import('@/pages/About'))
const Services = lazy(() => import('@/pages/Services'))
const ServiceDetail = lazy(() => import('@/pages/ServiceDetail'))
const Weddings = lazy(() => import('@/pages/Weddings'))
const Gallery = lazy(() => import('@/pages/Gallery'))
const Portfolio = lazy(() => import('@/pages/Portfolio'))
const Contact = lazy(() => import('@/pages/Contact'))
const Consultation = lazy(() => import('@/pages/Consultation'))
const FAQ = lazy(() => import('@/pages/FAQ'))
const NotFound = lazy(() => import('@/pages/NotFound'))

function PageFallback() {
  return (
    <div className="grid min-h-[50svh] place-items-center text-mist" role="status">
      Loading…
    </div>
  )
}

function Layout() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:bg-gold focus:px-4 focus:py-3 focus:text-ink"
      >
        Skip to content
      </a>
      <Loader />
      <Navbar />
      <main id="main">
        <Suspense fallback={<PageFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:serviceId" element={<ServiceDetail />} />
          <Route path="weddings" element={<Weddings />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="work" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="consultation" element={<Consultation />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
