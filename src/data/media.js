/**
 * Unique photo map for Krishna Events.
 * Home spotlight placements never share a file.
 * Inner pages use a separate set so browsing feels fresh.
 */
import { withPublicUrls } from '@/lib/publicUrl'

export const media = withPublicUrls({
  homeHero: '/images/instagram/ig-15.jpg',
  homeAbout: '/images/instagram/ig-14.jpg',
  homeWhyUs: '/images/instagram/ig-18.jpg',
  homeCta: '/images/instagram/ig-19.jpg',

  featured: [
    {
      src: '/images/instagram/ig-13.jpg',
      title: 'Mirrored Pegasus centrepiece',
      destination: 'Ahmedabad',
      theme: 'Silver Glam',
      eventType: 'Wedding Decor',
      description: 'A statement mirrored Pegasus installation with florals and disco accents.',
      alt: 'Mirrored Pegasus décor sculpture by Krishna Events',
    },
    {
      src: '/images/instagram/ig-16.jpg',
      title: 'Carnival wedding entry',
      destination: 'Ahmedabad',
      theme: 'Shaadi Ka Carnival',
      eventType: 'Couple Entry',
      description: 'A playful carnival-inspired entry that sets the tone for the celebration.',
      alt: 'Carnival-themed bride and groom entry by Krishna Events',
    },
    {
      src: '/images/instagram/ig-17.jpg',
      title: 'Varmala ceremony setup',
      destination: 'Ahmedabad',
      theme: 'Varmala',
      eventType: 'Wedding Ceremony',
      description: 'A photogenic varmala setup designed for the couple’s exchange moment.',
      alt: 'Varmala ceremony styling by Krishna Events',
    },
  ],

  destinations: {
    ahmedabad: '/images/instagram/ig-20.jpg',
    goa: '/images/instagram/ig-21.jpg',
  },

  instagramFeed: [
    '/images/instagram/ig-22.jpg',
    '/images/instagram/ig-23.jpg',
    '/images/instagram/ig-24.jpg',
    '/images/instagram/ig-33.jpg',
    '/images/instagram/ig-34.jpg',
    '/images/instagram/ig-36.jpg',
  ],

  pageHeroes: {
    about: '/images/instagram/ig-28.jpg',
    aboutTeam: '/images/instagram/ig-29.jpg',
    services: '/images/instagram/ig-30.jpg',
    weddings: '/images/instagram/ig-31.jpg',
    gallery: '/images/instagram/ig-32.jpg',
    work: '/images/instagram/ig-12.jpg',
    contact: '/images/instagram/ig-25.jpg',
    consultation: '/images/instagram/ig-26.jpg',
    faq: '/images/instagram/ig-27.jpg',
  },

  weddingsExperiences: [
    '/images/instagram/ig-28.jpg',
    '/images/instagram/ig-29.jpg',
    '/images/instagram/ig-12.jpg',
  ],
})

/** Deduped gallery — one file each, no near-duplicates. */
export const uniqueGallery = withPublicUrls([
  { id: 'ig-13', src: '/images/instagram/ig-13.jpg', title: 'Mirrored Pegasus décor', alt: 'Mirrored Pegasus sculpture with florals and disco accents' },
  { id: 'ig-14', src: '/images/instagram/ig-14.jpg', title: 'Reception glam styling', alt: 'Glamorous reception styling by Krishna Events in Ahmedabad' },
  { id: 'ig-15', src: '/images/instagram/ig-15.jpg', title: 'Diamond light aisle', alt: 'Illuminated diamond-frame aisle with disco canopy' },
  { id: 'ig-16', src: '/images/instagram/ig-16.jpg', title: 'Carnival wedding entry', alt: 'Carnival-themed bride and groom entry by Krishna Events' },
  { id: 'ig-17', src: '/images/instagram/ig-17.jpg', title: 'Varmala ceremony', alt: 'Varmala ceremony styling by Krishna Events' },
  { id: 'ig-18', src: '/images/instagram/ig-18.jpg', title: 'Stage & florals', alt: 'Stage and floral décor by Krishna Events' },
  { id: 'ig-19', src: '/images/instagram/ig-19.jpg', title: 'Grand entry moment', alt: 'Grand wedding entry moment by Krishna Events' },
  { id: 'ig-20', src: '/images/instagram/ig-20.jpg', title: 'Couple celebration', alt: 'Couple celebration moment with Krishna Events' },
  { id: 'ig-21', src: '/images/instagram/ig-21.jpg', title: 'Wedding night energy', alt: 'Wedding night celebration energy by Krishna Events' },
  { id: 'ig-22', src: '/images/instagram/ig-22.jpg', title: 'Function highlight', alt: 'Wedding function highlight by Krishna Events' },
  { id: 'ig-23', src: '/images/instagram/ig-23.jpg', title: 'Celebration reel', alt: 'Wedding celebration moment by Krishna Events' },
  { id: 'ig-24', src: '/images/instagram/ig-24.jpg', title: 'Event production', alt: 'Wedding event production by Krishna Events' },
  { id: 'ig-25', src: '/images/instagram/ig-25.jpg', title: 'Sangeet entry', alt: 'Sangeet entry celebration by Krishna Events' },
  { id: 'ig-26', src: '/images/instagram/ig-26.jpg', title: 'Bride & groom shoot', alt: 'Bride and groom photoshoot moment with Krishna Events' },
  { id: 'ig-27', src: '/images/instagram/ig-27.jpg', title: 'Rishi & Drasti varmala', alt: 'Krishna-theme varmala crafted for Rishi and Drasti' },
  { id: 'ig-28', src: '/images/instagram/ig-28.jpg', title: 'Carnival sangeet', alt: 'Carnival-inspired sangeet celebration' },
  { id: 'ig-29', src: '/images/instagram/ig-29.jpg', title: 'Wedding vibe', alt: 'Wedding celebration vibe by Krishna Events' },
  { id: 'ig-12', src: '/images/instagram/ig-12.jpg', title: 'Sangeet & carnival', alt: 'Sangeet and carnival wedding vibes' },
  { id: 'ig-30', src: '/images/instagram/ig-30.jpg', title: 'Wide celebration shot', alt: 'Wide celebration shot from a Krishna Events wedding' },
  { id: 'ig-31', src: '/images/instagram/ig-31.jpg', title: 'Venue overview', alt: 'Venue overview from a Krishna Events celebration' },
  { id: 'ig-32', src: '/images/instagram/ig-32.jpg', title: 'Night celebration', alt: 'Night celebration setup by Krishna Events' },
  { id: 'ig-33', src: '/images/instagram/ig-33.jpg', title: 'Disha & Hemish portrait', alt: 'Disha and Hemish wedding portrait styled by Krishna Events' },
  { id: 'ig-34', src: '/images/instagram/ig-34.jpg', title: 'Disha & Hemish black & white', alt: 'Black and white couple portrait from a Krishna Events wedding' },
  { id: 'ig-36', src: '/images/instagram/ig-36.jpg', title: 'Cold spark couple moment', alt: 'Bride and groom under cold sparks and petals by Krishna Events' },
  { id: 'ig-37', src: '/images/instagram/ig-37.jpg', title: 'Golden mandir arch', alt: 'Couple framed in a golden mandir arch by Krishna Events' },
  { id: 'ig-38', src: '/images/instagram/ig-38.jpg', title: 'Baraat on wheels', alt: 'Baraat on wheels celebration with dhol in Ahmedabad' },
  { id: 'ig-39', src: '/images/instagram/ig-39.jpg', title: 'Live stage energy', alt: 'Live stage performance energy at a Krishna Events night' },
  { id: 'ig-40', src: '/images/instagram/ig-40.jpg', title: 'Production control desk', alt: 'Behind-the-scenes lighting and sound control at an event' },
  { id: 'ig-41', src: '/images/instagram/ig-41.jpg', title: 'Karnavati Club fireworks', alt: 'Fireworks moment at Karnavati Club Ahmedabad' },
  { id: 'ig-42', src: '/images/instagram/ig-42.jpg', title: 'Osman Mir concert vibe', alt: 'Concert-style Gujarati stage show with CO2 jets' },
  { id: 'ig-43', src: '/images/instagram/ig-43.jpg', title: 'Celebration highlight', alt: 'Wedding celebration highlight by Krishna Events' },
  { id: 'ig-44', src: '/images/instagram/ig-44.jpg', title: 'Live show moment', alt: 'Live show moment from a Krishna Events production' },
  { id: 'ig-45', src: '/images/instagram/ig-45.jpg', title: 'Varmala couple', alt: 'Bride and groom varmala moment by Krishna Events' },
  { id: 'ig-46', src: '/images/instagram/ig-46.jpg', title: 'Silhouette entry', alt: 'Grand silhouette entry with fireworks by Krishna Events' },
  { id: 'ig-47', src: '/images/instagram/ig-47.jpg', title: 'Raas Garba night', alt: 'Raas Garba night celebration managed by Krishna Events' },
  { id: 'ig-48', src: '/images/instagram/ig-48.jpg', title: 'Groom entry night', alt: 'Grand groom entry with beats and lights' },
  { id: 'ig-49', src: '/images/instagram/ig-49.jpg', title: 'Colourful celebration', alt: 'Vibrant colourful wedding celebration details' },
  { id: 'ig-50', src: '/images/instagram/ig-50.jpg', title: 'Sangeet confetti', alt: 'Couple on stage with confetti and LED performers' },
  { id: 'ig-51', src: '/images/instagram/ig-51.jpg', title: 'Grand baraat', alt: 'Grand baraat procession styled by Krishna Events' },
  { id: 'ig-52', src: '/images/instagram/ig-52.jpg', title: 'DJ & sound night', alt: 'DJ and sound production at a Krishna Events celebration' },
  { id: 'ig-53', src: '/images/instagram/ig-53.jpg', title: 'Fireworks finale', alt: 'Fireworks finale moment at a wedding night' },
  { id: 'ig-54', src: '/images/instagram/ig-54.jpg', title: 'Peacock varmala', alt: 'Magical peacock-inspired varmala entrance' },
  { id: 'ig-55', src: '/images/instagram/ig-55.jpg', title: 'Green stage lights', alt: 'Live stage with green lighting and videography' },
  { id: 'ig-56', src: '/images/instagram/ig-56.jpg', title: 'Laser couple entry', alt: 'Bride and groom laser entry concept by Krishna Events' },
  { id: 'ig-57', src: '/images/instagram/ig-57.jpg', title: 'Sangeet entry vibe', alt: 'Sangeet entry celebration vibes' },
  { id: 'ig-58', src: '/images/instagram/ig-58.jpg', title: 'Retro sangeet floor', alt: 'Retro sangeet décor with chevron floor by Krishna Events' },
])

export default media
