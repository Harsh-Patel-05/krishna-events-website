export const galleryFilters = ['All', 'Weddings', 'Destination', 'Birthday', 'Decor']

// Categories are best-effort labels based on what each photograph shows.
// An item may belong to one category; "All" shows everything.
const items = [
  ['01', 'Destination', 'Heritage banquet hall with chandeliers, blue ceiling and a marigold stage backdrop'],
  ['02', 'Destination', 'Palace courtyard with a white floral pavilion and a reflecting pool'],
  ['03', 'Weddings', 'Bride and groom beneath a floral canopy at a heritage venue'],
  ['04', 'Decor', 'Floral archways over a rainbow walkway at a mehndi lawn'],
  ['05', 'Decor', 'Peacock-motif blue stage with seating and marigold arrangements'],
  ['06', 'Weddings', 'Floral-topped entrance gates draped in blue velvet along a patterned carpet'],
  ['07', 'Decor', 'Rajasthani-themed hall with charpai seating and folk-art cut-outs'],
  ['08', 'Decor', 'Colourful lattice stage with Rajasthani umbrellas and folk figures'],
  ['09', 'Birthday', 'Whimsical rainbow walkway with sculpted animals and floral arches'],
  ['10', 'Decor', 'Marigold curtain stage backdrop with umbrellas and patchwork seating'],
  ['11', 'Destination', 'Pastel canopy with peacock backdrop and floating flower bowls'],
  ['12', 'Decor', 'Mehndi entrance with umbrellas, tassels and handcrafted camel figures'],
  ['13', 'Weddings', 'Illuminated LED stage with a royal sofa and floral stage-front'],
  ['14', 'Weddings', 'Bridal entry with dancers and a lit floral sunburst at a grand banquet'],
  ['15', 'Weddings', 'Red-draped reception entrance with mirror-ball pendants at night'],
  ['16', 'Destination', 'Draped white pathway with crystal chandeliers and floral borders'],
]

export const gallery = items.map(([n, category, alt]) => ({
  id: `gallery-${n}`,
  src: `/images/gallery-${n}.jpg`,
  category,
  alt,
}))

// Curated picks for the home page "Featured work".
export const featured = [
  {
    id: 'featured-1',
    src: '/images/featured-1.jpg',
    title: 'Floral entrance, lit in crimson',
    category: 'Weddings',
    alt: 'Flower-covered wedding entrance arch with hanging blooms and lit pillars',
  },
  {
    id: 'featured-2',
    src: '/images/featured-2.jpg',
    title: 'Twilight stage in blue',
    category: 'Decor',
    alt: 'Royal wedding sofa on a blue stage with fairy lights and rose-filled urns',
  },
]

export default gallery
