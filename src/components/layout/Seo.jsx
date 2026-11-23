import { useEffect } from 'react'
import { site } from '@/data/site.config'

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
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
  }, [title, description])

  return null
}
