import { PropertyProps } from '@/interfaces'

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: 'Cozy Loft in Downtown',
    rating: 4.8,
    address: { city: 'San Francisco', country: 'USA' },
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop'
    ],
    description:
      'Experience the heart of the city in this stylish loft with modern amenities, close to cafes, museums, and public transport.',
    category: [
      'Wi‑Fi',
      'Kitchen',
      'Air conditioning',
      'Washer',
      'Dedicated workspace',
      'Self check‑in',
      'Free parking on premises'
    ],
    price: 180,
    reviews: [
      {
        id: 'r1',
        name: 'Alex Johnson',
        avatar: 'https://i.pravatar.cc/100?img=12',
        rating: 5,
        comment: 'Amazing stay! The location was perfect and the loft was spotless.'
      },
      {
        id: 'r2',
        name: 'Maria Gomez',
        avatar: 'https://i.pravatar.cc/100?img=32',
        rating: 4,
        comment: 'Great place, a bit noisy at night but overall very comfortable.'
      }
    ],
    host: {
      name: 'Taylor',
      avatar: 'https://i.pravatar.cc/100?img=5',
      about: 'Superhost with 5+ years of hosting experience. Loves food, travel, and design.'
    }
  }
]
