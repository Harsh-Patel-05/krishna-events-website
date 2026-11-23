// Single source of truth — Krishna Events (Mitesh Jain), Ahmedabad · @krishna_eventss
import { withPublicUrls } from '@/lib/publicUrl'

export const site = withPublicUrls({
  name: 'Krishna Events',
  tagline: 'Your Wedding Architect',
  role: 'Wedding Planning Service',
  owner: 'Mitesh Jain',
  location: 'Ahmedabad, Gujarat',
  url: 'https://www.instagram.com/krishna_eventss/',
  logo: '/logos/krishna-events-logo.png',
  logoNav: '/logos/krishna-events-nav.png',
  logoMark: '/logos/krishna-events-logo.png',
  description:
    'Krishna Events is a wedding planning service in Ahmedabad, Gujarat — your one-stop solution for wedding décor, grand entries, varmala concepts and destination celebrations.',
  bio: 'Your one-stop solution for your wedding-related needs — a mesmerizing entry on your special day.',

  contact: {
    phones: [{ display: '+91 97244 25565', tel: '+919724425565' }],
    whatsapp: '919724425565',
    whatsappDisplay: '+91 97244 25565',
    email: 'djmitjain@gmail.com',
    address: {
      lines: [
        'F-39/2, Opp. Sahajanand Society',
        'Near Union Bank & Mangaldeep School',
        'Swaminarayan Park, Nava Vadaj',
        'Ahmedabad, Gujarat 382480',
      ],
      full: 'F-39/2, Opp. Sahajanand Society, Swaminarayan Park, Nava Vadaj, Ahmedabad, Gujarat 382480',
    },
    mapQuery:
      'F-39 Krishna Event opp Sahajanand Society Nava Vadaj Ahmedabad',
    mapEmbed:
      'https://www.google.com/maps?q=F-39%2F2%20Opp.%20Sahajanand%20Society%2C%20Nava%20Vadaj%2C%20Ahmedabad%2C%20Gujarat&output=embed',
    mapLink:
      'https://www.google.com/maps/search/?api=1&query=F-39%2F2%20Opp.%20Sahajanand%20Society%2C%20Nava%20Vadaj%2C%20Ahmedabad',
  },

  social: {
    instagram: 'https://www.instagram.com/krishna_eventss/',
    instagramHandle: '@krishna_eventss',
    youtube: 'https://www.youtube.com/@WeddingConceptsKrishnaEvents',
  },

  instagramStats: {
    posts: '891',
    followers: '6K+',
    following: '1.3K',
  },
})

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Weddings', to: '/weddings' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Work', to: '/work' },
  { label: 'Contact', to: '/contact' },
]

export const announcement = {
  text: 'Grand entries · varmala concepts · sangeet & carnival weddings across Gujarat & beyond.',
  cta: { label: 'Book a consultation', to: '/consultation' },
}

export const hero = withPublicUrls({
  eyebrow: 'Krishna Events · Ahmedabad',
  headline: ['We create moments', 'that last forever.'],
  sub: 'Your one-stop wedding planning service in Ahmedabad — décor, mesmerizing entries and celebrations that stay with you.',
  image: '/images/instagram/ig-15-hero.jpg',
  imageAlt: 'Grand wedding entrance walkway designed by Krishna Events, Ahmedabad',
  primaryCta: { label: 'Explore Our Work', to: '/work' },
  secondaryCta: { label: 'Plan Your Wedding', to: '/consultation' },
})

export const whyUs = [
  {
    title: 'Mesmerizing entries',
    body: 'Bride, groom and couple entries designed as the first wow moment of your celebration — carnival, royal or completely custom.',
  },
  {
    title: 'Varmala with a story',
    body: 'From Krishna-theme varmalas to statement floral setups — the exchange becomes a memory guests still talk about.',
  },
  {
    title: 'Décor that photographs',
    body: 'Stages, walkways, lighting and props built for how the room feels in person and how it looks on camera.',
  },
  {
    title: 'One team for the whole wedding',
    body: 'Planning, décor and on-ground execution stay with us — so every function connects as one celebration.',
  },
]

export const citiesHeading = 'Where we plan weddings'

export const processSteps = [
  {
    step: '01',
    title: 'Listen & discover',
    body: 'We begin with your love story, guest list, traditions and budget — before any décor board is drawn.',
  },
  {
    step: '02',
    title: 'Shape the concept',
    body: 'Colour, entry ideas, varmala concepts and function flow come together into a plan that feels yours.',
  },
  {
    step: '03',
    title: 'Prepare the details',
    body: 'Venues, vendors and logistics are locked in through our network, with you reviewing every important choice.',
  },
  {
    step: '04',
    title: 'Execute with care',
    body: 'On the day, our team runs the timeline so ceremonies, entries and evenings unfold without stress.',
  },
]

export const stats = [
  { value: '891', label: 'Instagram posts' },
  { value: '6K+', label: 'Instagram followers' },
  { value: '17+', label: 'Years of experience' },
  { value: '10+', label: 'Cities & destinations' },
]

export const cta = withPublicUrls({
  eyebrow: 'Begin your wedding story',
  title: 'Let’s create a wedding you’ll never forget.',
  body: 'Share your date, city and vision — from Ahmedabad celebrations to Goa, Bali and beyond.',
  image: '/images/instagram/ig-19.jpg',
  primaryCta: { label: 'Start Planning', to: '/consultation' },
  secondaryCta: { label: 'Contact Us', to: '/contact' },
})

export const eventTypes = [
  'Luxury Wedding Planning',
  'Destination Wedding',
  'Wedding Decor & Design',
  'Bride & Groom Entry',
  'Varmala Ceremony',
  'Sangeet / Carnival',
  'Engagement Ceremony',
  'Wedding Reception',
  'Other',
]

export const consultationTimes = [
  'Morning (10:00 – 12:00)',
  'Afternoon (12:00 – 16:00)',
  'Evening (16:00 – 19:00)',
]
