import { useEffect } from 'react'
import { site } from '@/data/site.config'
import { publicUrl } from '@/lib/publicUrl'

const SITE_OG =
  'https://harsh-patel-05.github.io/krishna-events-website/og-image.png'

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function ogImageUrl() {
  if (typeof window !== 'undefined' && window.location.hostname.includes('github.io')) {
    return SITE_OG
  }
  return new URL(publicUrl('og-image.png'), window.location.origin).href
}

/** Sets document title + description (and matching Open Graph tags) per page. */
export default function Seo({ title, description = site.description }) {
  useEffect(() => {
    const full = title
      ? `${title} | ${site.name}`
      : `${site.name} — ${site.tagline} | ${site.location}`
    document.title = full
    setMeta('name', 'description', description)
    setMeta('property', 'og:title', full)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:site_name', site.name)
    setMeta('property', 'og:image', ogImageUrl())
    setMeta('name', 'twitter:image', ogImageUrl())
  }, [title, description])

  return null
}
