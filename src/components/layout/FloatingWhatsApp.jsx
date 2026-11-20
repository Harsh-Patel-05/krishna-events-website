import WhatsAppIcon from '@/components/ui/WhatsAppIcon'
import { site } from '@/data/site.config'
import { whatsappLink } from '@/lib/utils'

export default function FloatingWhatsApp() {
  const href = whatsappLink(
    site.contact.whatsapp,
    'Hello Krishna Events, I would like to know more about planning my event.',
  )

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Krishna Events on WhatsApp"
      className="fixed bottom-5 right-5 z-[60] grid size-14 place-items-center rounded-full bg-whatsapp text-ink shadow-gold transition-transform duration-500 hover:scale-110 focus-visible:scale-110 md:bottom-7 md:right-7"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  )
}
