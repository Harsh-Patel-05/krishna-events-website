import WhatsAppIcon from '@/components/ui/WhatsAppIcon'
import { site } from '@/data/site.config'
import { whatsappLink } from '@/lib/utils'

export default function FloatingWhatsApp() {
  const href = whatsappLink(
    site.contact.whatsapp,
    'Hello Krishna Events, I would like to know more about planning my wedding.',
  )

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Krishna Events on WhatsApp"
      className="fixed bottom-5 right-5 z-[60] grid size-12 place-items-center border border-emerald/30 bg-[#128C7E] text-white shadow-[0_14px_36px_-12px_rgba(18,140,126,0.55)] transition-transform duration-400 hover:scale-[1.04] focus-visible:scale-[1.04] md:bottom-7 md:right-7"
    >
      <WhatsAppIcon className="size-5" />
    </a>
  )
}
