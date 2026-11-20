// Single source of truth for verified Krishna Events brand data.
// Only information supplied/verified by the brand lives here — no invented stats.

export const site = {
  name: 'Krishna Events',
  tagline: 'Your Wedding Architect',
  role: 'Destination Wedding Planner & Event Management Company',
  location: 'Jaipur, Rajasthan',
  url: 'https://krishnaeventss.com/',
  logo: '/logo.png',
  logoWide: '/logos/logo-site.png',
  description:
    'Krishna Events is a destination wedding planner and event management company in Jaipur, Rajasthan — planning weddings, décor, birthdays and bespoke celebrations across India.',

  contact: {
    phones: [
      { display: '+91 75974 24186', tel: '+917597424186' },
      { display: '+91 88528 42770', tel: '+918852842770' },
    ],
    whatsapp: '917597424186',
    whatsappDisplay: '+91 75974 24186',
    email: 'krishnaeventsjaipur@gmail.com',
    address: {
      lines: ['B-24, Alankar Plaza', 'Central Spine, Vidhayadhar Nagar', 'Jaipur, Rajasthan'],
      full: 'B-24, Alankar Plaza, Central Spine, Vidhayadhar Nagar, Jaipur',
    },
    mapQuery: 'B-24, Alankar Plaza, Central Spine, Vidhayadhar Nagar, Jaipur',
    // Google Maps search embed using the verified address (no API key required).
    mapEmbed:
      'https://www.google.com/maps?q=B-24%2C%20Alankar%20Plaza%2C%20Central%20Spine%2C%20Vidhayadhar%20Nagar%2C%20Jaipur&output=embed',
    mapLink:
      'https://www.google.com/maps/search/?api=1&query=B-24%2C%20Alankar%20Plaza%2C%20Central%20Spine%2C%20Vidhayadhar%20Nagar%2C%20Jaipur',
  },

  social: {
    instagram: 'https://www.instagram.com/krishna_eventss/',
    instagramHandle: '@krishna_eventss',
  },
}

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

export const announcement = {
  text: 'Destination weddings across Rajasthan, Goa, Kerala & beyond — let’s plan yours.',
  cta: { label: 'Talk to us', to: '/contact' },
}

export const hero = {
  eyebrow: 'Destination Wedding Planner · Jaipur',
  headline: ['Creating Moments.', 'Crafting Memories.'],
  sub: 'Krishna Events is your wedding architect — designing destination weddings and celebrations with exceptional attention to detail, wholly within your budget.',
  image: '/images/hero-1.jpg',
  imageAlt: 'Couple on a sandstone pavilion terrace at a Rajasthan heritage venue',
  primaryCta: { label: 'Plan Your Event', to: '/contact' },
  secondaryCta: { label: 'View Our Work', to: '/gallery' },
}

// Qualitative strengths drawn from the brand's own About page — no numeric claims.
export const whyUs = [
  {
    title: 'Detail, to the last thread',
    body: 'Exceptional attention and intricate detail go into every event, from the grand entrance to the smallest tabletop.',
  },
  {
    title: 'Elegance within your budget',
    body: 'We design cost-effective celebrations so you get the finest within the budget guidelines you set.',
  },
  {
    title: 'A planner who treats it as their own',
    body: 'Personal attention from a dedicated, friendly team who treat your event like theirs while you enjoy the celebrations.',
  },
  {
    title: 'Vendor network across cities',
    body: 'A strong network of vendors in major cities — invitations, venues, caterers, guest gifts and wedding themes.',
  },
  {
    title: 'Bespoke, never templated',
    body: 'Small and intimate or big and exotic — each event is personalised as a reflection of your taste.',
  },
  {
    title: 'Current, trend-aware ideas',
    body: 'A creative team that keeps pace with the latest in the wedding and event industry.',
  },
]

export const citiesHeading = 'Cities we celebrate in'

export const processSteps = [
  {
    step: '01',
    title: 'Listen',
    body: 'We begin with your vision, your family, your guest list and your budget — before a single mood-board is made.',
  },
  {
    step: '02',
    title: 'Ideate & Design',
    body: 'Themes, décor, stage and layouts are shaped into a concept that is unmistakably yours.',
  },
  {
    step: '03',
    title: 'Plan & Curate',
    body: 'Venues, caterers, invitations, gifts and vendors are lined up through our network across cities.',
  },
  {
    step: '04',
    title: 'Execute & Celebrate',
    body: 'On the day, our team manages every detail so you can relax with the people who matter.',
  },
]

export const cta = {
  eyebrow: 'Begin your story',
  title: 'Let’s Create Something Unforgettable.',
  body: 'Tell us about your wedding or event — we will reach out to discuss your vision and budget.',
  image: '/images/cta-bg.jpg',
}

export const eventTypes = [
  'Destination Wedding',
  'Wedding Planning',
  'Wedding Decoration',
  'Birthday Celebration',
  'Event Production & Management',
  'Other',
]
