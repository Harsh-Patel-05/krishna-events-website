import { media } from '@/data/media'

export const destinations = [
  {
    name: 'Ahmedabad',
    note: 'Our home city',
    image: media.destinations.ahmedabad,
    imageAlt: 'Wedding celebration moment in Ahmedabad by Krishna Events',
  },
  {
    name: 'Goa',
    note: 'Sun-and-sand shores',
    image: media.destinations.goa,
    imageAlt: 'Destination wedding energy styled by Krishna Events',
  },
  { name: 'Himmatnagar', note: 'Gujarat celebrations' },
  { name: 'Vadodara', note: 'Gujarat celebrations' },
  { name: 'Surat', note: 'Coastal Gujarat' },
  { name: 'Bali', note: 'Island destination weddings' },
  { name: 'Phuket', note: 'International celebrations' },
  { name: 'Udaipur', note: 'The City of Lakes' },
  { name: 'Mount Abu', note: 'Hill-station weddings' },
]

export const cityNames = destinations.map((d) => d.name)

export default destinations
