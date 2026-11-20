import Seo from '@/components/layout/Seo'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <section className="section-y grid min-h-[60svh] place-items-center text-center">
      <Seo title="Page not found" />
      <div className="container-x">
        <p className="eyebrow mb-4">Error 404</p>
        <h1 className="display-lg">This page wandered off.</h1>
        <p className="mx-auto mt-5 max-w-md text-mist">The page you’re looking for doesn’t exist or has moved.</p>
        <Button to="/" className="mt-10">
          Back to Home
        </Button>
      </div>
    </section>
  )
}
