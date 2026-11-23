import { media, uniqueGallery } from '@/data/media'

/** Gallery = unique Krishna Events photos only (no duplicates). */
export const gallery = uniqueGallery

export const featured = media.featured.map((item, i) => ({
  id: `featured-${i + 1}`,
  ...item,
}))

export default gallery
