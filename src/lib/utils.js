import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

/** Build a wa.me link with optional prefilled text. */
export function whatsappLink(number, text = '') {
  const base = `https://wa.me/${number}`
  return text ? `${base}?text=${encodeURIComponent(text)}` : base
}

export function isExternal(href = '') {
  return /^(https?:|mailto:|tel:|whatsapp:)/i.test(href)
}
