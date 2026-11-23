import SectionHeading from '@/components/ui/SectionHeading'
import Accordion from '@/components/ui/Accordion'
import { faqs } from '@/data/faqs'

export default function FAQ() {
  return (
    <section className="section-y">
      <div className="container-x grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading eyebrow="Good to know" title="Questions, answered." />
        </div>
        <div className="lg:col-span-8">
          <Accordion items={faqs} />
        </div>
      </div>
    </section>
  )
}
