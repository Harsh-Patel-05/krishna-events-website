/** Portfolio — each project uses a fully exclusive image set (no shared files). */
import { withPublicUrls } from '@/lib/publicUrl'

export const portfolio = withPublicUrls([
  {
    id: 'ahmedabad-chevron-entrance',
    title: 'Diamond Light Aisle',
    destination: 'Ahmedabad',
    theme: 'Modern Glamour',
    eventType: 'Wedding Entrance',
    description:
      'A dramatic walkway with diamond light frames, disco canopy and floral pedestals.',
    cover: '/images/instagram/ig-15.jpg',
    coverAlt: 'Illuminated diamond-frame aisle with disco canopy',
    images: [
      '/images/instagram/ig-15.jpg',
      '/images/instagram/ig-30.jpg',
      '/images/instagram/ig-31.jpg',
    ],
  },
  {
    id: 'mirrored-pegasus',
    title: 'Mirrored Pegasus Décor',
    destination: 'Ahmedabad',
    theme: 'Silver Glam',
    eventType: 'Wedding Decor',
    description:
      'A statement mirrored Pegasus centrepiece with pampas, florals and disco accents.',
    cover: '/images/instagram/ig-13.jpg',
    coverAlt: 'Mirrored Pegasus décor sculpture',
    images: [
      '/images/instagram/ig-13.jpg',
      '/images/instagram/ig-32.jpg',
      '/images/instagram/ig-12.jpg',
    ],
  },
  {
    id: 'carnival-entry',
    title: 'Shaadi Ka Carnival Entry',
    destination: 'Ahmedabad',
    theme: 'Carnival',
    eventType: 'Couple Entry',
    description:
      'A playful carnival-inspired bride and groom entry that opens the celebration with energy.',
    cover: '/images/instagram/ig-16.jpg',
    coverAlt: 'Carnival-themed wedding entry',
    images: [
      '/images/instagram/ig-16.jpg',
      '/images/instagram/ig-28.jpg',
      '/images/instagram/ig-19.jpg',
    ],
  },
  {
    id: 'rishi-drasti-varmala',
    title: 'Rishi & Drasti Varmala',
    destination: 'Himmatnagar',
    theme: 'Krishna Theme',
    eventType: 'Varmala Ceremony',
    description:
      'A Krishna-theme varmala concept crafted for Rishi and Drasti — personal, royal and photogenic.',
    cover: '/images/instagram/ig-27.jpg',
    coverAlt: 'Krishna-theme varmala for Rishi and Drasti',
    images: [
      '/images/instagram/ig-27.jpg',
      '/images/instagram/ig-17.jpg',
      '/images/instagram/ig-20.jpg',
    ],
  },
  {
    id: 'sangeet-night',
    title: 'Sangeet Night Energy',
    destination: 'Ahmedabad',
    theme: 'Sangeet',
    eventType: 'Pre-Wedding Event',
    description:
      'A high-energy sangeet with a memorable entry moment for the couple and their families.',
    cover: '/images/instagram/ig-25.jpg',
    coverAlt: 'Sangeet entry celebration',
    images: [
      '/images/instagram/ig-25.jpg',
      '/images/instagram/ig-21.jpg',
      '/images/instagram/ig-22.jpg',
    ],
  },
  {
    id: 'reception-glam',
    title: 'Reception Glam Night',
    destination: 'Ahmedabad',
    theme: 'Reception',
    eventType: 'Wedding Reception',
    description:
      'Reception styling with statement décor, lighting and a celebration-ready atmosphere.',
    cover: '/images/instagram/ig-14.jpg',
    coverAlt: 'Reception glam styling',
    images: [
      '/images/instagram/ig-14.jpg',
      '/images/instagram/ig-23.jpg',
      '/images/instagram/ig-24.jpg',
    ],
  },
  {
    id: 'disha-hemish',
    title: 'Disha & Hemish',
    destination: 'Ahmedabad',
    theme: 'Romantic Portrait',
    eventType: 'Wedding Day',
    description:
      'A same-day wedding highlight with soft garden light, cold sparks and timeless couple frames.',
    cover: '/images/instagram/ig-33.jpg',
    coverAlt: 'Disha and Hemish wedding portrait',
    images: [
      '/images/instagram/ig-33.jpg',
      '/images/instagram/ig-34.jpg',
      '/images/instagram/ig-36.jpg',
    ],
  },
  {
    id: 'live-night-production',
    title: 'Live Night Production',
    destination: 'Ahmedabad',
    theme: 'Concert Energy',
    eventType: 'Sangeet & Stage',
    description:
      'Confetti, lasers, baraat energy and stage production that turns a wedding night into a show.',
    cover: '/images/instagram/ig-50.jpg',
    coverAlt: 'Sangeet stage with confetti and LED performers',
    images: [
      '/images/instagram/ig-50.jpg',
      '/images/instagram/ig-38.jpg',
      '/images/instagram/ig-58.jpg',
    ],
  },
])

export function getProjectById(id) {
  return portfolio.find((p) => p.id === id)
}

export default portfolio
