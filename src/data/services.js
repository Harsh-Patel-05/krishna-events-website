/** Services — each service image + related set is exclusive (no shared files). */
import { withPublicUrls } from '@/lib/publicUrl'

export const services = withPublicUrls([
  {
    id: 'luxury-wedding-planning',
    title: 'Luxury Wedding Planning',
    short: 'End-to-end planning for intimate or grand weddings — shaped around your taste.',
    image: '/images/instagram/ig-14.jpg',
    imageAlt: 'Wedding celebration styling by Krishna Events',
    longDescription:
      'From the first idea to the last farewell, we plan your wedding as a reflection of your taste — including décor, entries, varmala concepts and function flow — so you can celebrate while we handle the moving parts.',
    highlights: ['Concept & themes', 'Entries & varmala', 'Venues & vendors', 'Budget-aware planning'],
    offers: [
      'Full wedding planning & timeline',
      'Function-wise creative direction',
      'Vendor sourcing and supervision',
      'Guest hospitality coordination',
    ],
    process: [
      'Wedding vision & brief discovery',
      'Creative concept presentation',
      'Vendor & venue coordination',
      'On-site wedding day execution',
    ],
    faqs: [
      {
        q: 'How early should we book full wedding planning?',
        a: 'For peak seasons and destination dates, connect several months ahead. Smaller Ahmedabad weddings can often move faster once the venue is clear.',
      },
      {
        q: 'Do you manage all vendors?',
        a: 'We can source and supervise vendors under one plan, or work with trusted partners you already have — whichever fits your wedding better.',
      },
    ],
    relatedImages: ['/images/instagram/ig-20.jpg', '/images/instagram/ig-21.jpg'],
  },
  {
    id: 'destination-weddings',
    title: 'Destination Weddings',
    short: 'Destination weddings from Goa to Bali & Phuket — planned from our Ahmedabad base.',
    image: '/images/instagram/ig-15.jpg',
    imageAlt: 'Grand aisle styling for a destination-ready celebration',
    longDescription:
      'We design destination weddings at resorts and heritage venues — Goa, Bali, Phuket, Udaipur and beyond. Logistics, local vendors and guest flow are handled so you enjoy the celebration with your people.',
    highlights: ['Venue selection', 'Guest travel flow', 'Vendor coordination', 'On-ground management'],
    offers: [
      'Destination venue shortlisting',
      'Multi-day wedding planning',
      'Guest arrival & hospitality flow',
      'Local vendor orchestration',
    ],
    process: [
      'Destination brief & shortlist',
      'Venue visits & concept lock',
      'Travel & vendor planning',
      'On-ground multi-day execution',
    ],
    faqs: [
      {
        q: 'Which destinations do you cover?',
        a: 'Goa, Bali, Phuket, Udaipur, Mount Abu and other cities you love — we plan the logistics from Ahmedabad and travel with the wedding when needed.',
      },
      {
        q: 'Can guests from Gujarat travel comfortably?',
        a: 'Yes. We plan arrival windows, stays and function timing so outstation guests feel looked after without the day feeling rushed.',
      },
    ],
    relatedImages: ['/images/instagram/ig-30.jpg', '/images/instagram/ig-31.jpg'],
  },
  {
    id: 'wedding-decor-design',
    title: 'Wedding Decor & Design',
    short: 'Mandaps, stages and entrances designed in colour, flowers and light.',
    image: '/images/instagram/ig-13.jpg',
    imageAlt: 'Mirrored Pegasus décor by Krishna Events',
    longDescription:
      'Décor is where a wedding finds its personality. We design stages, entrances, mandaps and function-wise setups — from glam mirrored installations to soft floral canopies — with detail that photographs beautifully and works for guests.',
    highlights: ['Stage & mandap design', 'Floral installations', 'Entry walkways', 'Lighting & props'],
    offers: [
      'Function-wise décor concepts',
      'Floral & fabric installations',
      'Lighting design direction',
      'Entrance & photo moments',
    ],
    process: [
      'Mood & colour discovery',
      'Concept boards per function',
      'Material & vendor prep',
      'On-site décor execution',
    ],
    faqs: [
      {
        q: 'Can we hire you only for décor?',
        a: 'Yes. Many couples engage us for décor and styling alone while managing other vendors themselves.',
      },
      {
        q: 'Do you work with outdoor and indoor venues in Ahmedabad?',
        a: 'Yes. Banquets, lawns, farmhouses and destination venues — we design for the space you choose.',
      },
    ],
    relatedImages: ['/images/instagram/ig-18.jpg', '/images/instagram/ig-32.jpg'],
  },
  {
    id: 'engagement-ceremonies',
    title: 'Engagement Ceremonies',
    short: 'Intimate or grand engagements styled with warmth and refined detail.',
    image: '/images/instagram/ig-26.jpg',
    imageAlt: 'Engagement celebration styling by Krishna Events',
    longDescription:
      'Engagements deserve their own chapter. We create warm, photogenic settings — floral arcs, soft lighting and thoughtful guest seating — whether you want a close gathering or a celebratory evening.',
    highlights: ['Romantic décor', 'Stage styling', 'Guest seating', 'Photo-ready moments'],
    offers: [
      'Engagement theme design',
      'Stage and floral styling',
      'Seating & lounge layouts',
      'Coordination on the day',
    ],
    process: [
      'Style & guest-count brief',
      'Theme and layout proposal',
      'Vendor & décor prep',
      'Ceremony-day coordination',
    ],
    faqs: [
      {
        q: 'How long does engagement décor take to plan?',
        a: 'Often a few weeks is enough once the venue and date are fixed — longer if you want a fuller production.',
      },
      {
        q: 'Can engagement décor match our wedding theme?',
        a: 'Yes. We can keep a gentle link to your wedding colours, or give the engagement its own distinct look.',
      },
    ],
    relatedImages: ['/images/instagram/ig-17.jpg', '/images/instagram/ig-12.jpg'],
  },
  {
    id: 'pre-wedding-events',
    title: 'Pre-Wedding Events',
    short: 'Mehndi, haldi, sangeet and carnival evenings with their own character.',
    image: '/images/instagram/ig-25.jpg',
    imageAlt: 'Sangeet entry celebration by Krishna Events',
    longDescription:
      'Pre-wedding functions set the tone. We craft colourful mehndi setups, energetic sangeet stages and carnival concepts — each with its own visual language inside one wedding story.',
    highlights: ['Mehndi themes', 'Sangeet production', 'Carnival concepts', 'Function-wise décor'],
    offers: [
      'Function-specific concepts',
      'Entry & stage setups',
      'Colourful floral accents',
      'Timeline coordination',
    ],
    process: [
      'Function-wise brief',
      'Look & flow for each evening',
      'Stage and vendor prep',
      'Live event management',
    ],
    faqs: [
      {
        q: 'Can each function have a different theme?',
        a: 'Yes — and we still keep the overall wedding story cohesive so nothing feels random.',
      },
      {
        q: 'Do you coordinate entertainment for sangeet?',
        a: 'We can plan the stage, flow and vendor needs for performances; you choose the artists you love.',
      },
    ],
    relatedImages: ['/images/instagram/ig-28.jpg', '/images/instagram/ig-16.jpg'],
  },
  {
    id: 'reception-planning',
    title: 'Wedding Receptions',
    short: 'Reception evenings with strong entrances, dining flow and atmosphere.',
    image: '/images/instagram/ig-19.jpg',
    imageAlt: 'Reception entry moment by Krishna Events',
    longDescription:
      'Reception evenings are about arrival, atmosphere and celebration. We design entrances, stages, dining layouts and lighting so the night feels elegant for guests and easy for you.',
    highlights: ['Entrance design', 'Reception stage', 'Dining ambience', 'Evening lighting'],
    offers: [
      'Reception creative concept',
      'Entrance & aisle moments',
      'Stage and seating design',
      'Evening production support',
    ],
    process: [
      'Reception brief & guest flow',
      'Entrance and stage concept',
      'Layout & lighting prep',
      'Evening on-site management',
    ],
    faqs: [
      {
        q: 'Can reception be planned separately from the wedding?',
        a: 'Yes. Many families host a reception in Ahmedabad after a destination wedding — we can plan that evening alone.',
      },
      {
        q: 'Do you handle seating and entry cues?',
        a: 'Yes. Clear seating, entry timing and stage cues keep the evening smooth for hosts and guests.',
      },
    ],
    relatedImages: ['/images/instagram/ig-23.jpg', '/images/instagram/ig-24.jpg'],
  },
])

export function getServiceById(id) {
  return services.find((s) => s.id === id)
}

export default services
