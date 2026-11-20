// Verified cities. Images are provided only where we have a suitable file.
// Notes are descriptive epithets of the places themselves — not claims about past events.
export const destinations = [
  { name: 'Jaipur', note: 'The Pink City — our home', image: '/images/dest-jaipur.jpg', imageAlt: 'Bright pink and orange lattice décor with floral seating' },
  { name: 'Udaipur', note: 'The City of Lakes', image: '/images/dest-udaipur.jpg', imageAlt: 'Yellow draped canopy with a marigold ring backdrop on a lawn' },
  { name: 'Jodhpur', note: 'The Blue City' },
  { name: 'Goa', note: 'Sun-and-sand shores' },
  { name: 'Kerala', note: 'God’s Own Country' },
  { name: 'Agra', note: 'Home of the Taj Mahal' },
  { name: 'Delhi', note: 'The capital city' },
  { name: 'Lucknow', note: 'The City of Nawabs' },
  { name: 'Hyderabad', note: 'The City of Pearls' },
]

export const cityNames = destinations.map((d) => d.name)

export default destinations
