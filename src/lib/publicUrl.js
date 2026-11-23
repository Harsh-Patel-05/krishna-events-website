/** Prefix a public/ path with Vite BASE_URL (needed for GitHub Pages). */
export function publicUrl(path = '') {
  const cleaned = String(path).replace(/^\//, '')
  return `${import.meta.env.BASE_URL}${cleaned}`
}

/** Recursively prefix /images and /logos paths for GitHub Pages. */
export function withPublicUrls(value) {
  if (typeof value === 'string') {
    if (value.startsWith('/images/') || value.startsWith('/logos/')) {
      return publicUrl(value)
    }
    return value
  }
  if (Array.isArray(value)) return value.map(withPublicUrls)
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, nested]) => [key, withPublicUrls(nested)]),
    )
  }
  return value
}
