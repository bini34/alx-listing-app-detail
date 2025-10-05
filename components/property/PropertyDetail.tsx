import Image from 'next/image'
import { useMemo, useState } from 'react'
import BookingSection from './BookingSection'
import ReviewSection from './ReviewSection'
import type { PropertyProps } from '@/interfaces'

type TabKey = 'offer' | 'reviews' | 'host'

const tabs: { key: TabKey; label: string }[] = [
  { key: 'offer', label: 'What we offer' },
  { key: 'reviews', label: 'Reviews' },
  { key: 'host', label: 'About host' }
]

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const [active, setActive] = useState<TabKey>('offer')
  const gallery = useMemo(() => [property.image, ...(property.images ?? [])], [property])

  return (
    <div className="container mx-auto p-6">
      <header>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{property.name}</h1>
        <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-gray-700">
          <span className="inline-flex items-center gap-1">
            <span className="text-yellow-500">★</span>
            <span className="font-medium">{property.rating.toFixed(1)}</span>
          </span>
          <span className="text-gray-400">•</span>
          <span>
            {property.address.city}, {property.address.country}
          </span>
        </div>
      </header>

      <section className="mt-5 grid grid-cols-1 md:grid-cols-5 gap-3">
        <div className="md:col-span-3">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-3">
            <div className="col-span-2 md:col-span-2">
              <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-xl">
                <Image src={gallery[0]} alt={property.name} fill className="object-cover" priority />
              </div>
            </div>
            {gallery.slice(1, 5).map((src, i) => (
              <div key={i} className="relative w-full h-36 md:h-44 overflow-hidden rounded-xl">
                <Image src={src} alt={`${property.name} ${i + 2}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        <aside className="md:col-span-2 md:pl-4">
          <div className="sticky top-6">
            <BookingSection price={property.price} />
          </div>
        </aside>
      </section>

      <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <nav className="flex gap-2 border-b">
            {tabs.map(t => (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={`px-4 py-2 -mb-px border-b-2 transition-colors ${
                  active === t.key ? 'border-black text-black' : 'border-transparent text-gray-500 hover:text-black'
                }`}
              >
                {t.label}
              </button>
            ))}
          </nav>

          <div className="mt-4">
            {active === 'offer' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold">Description</h2>
                  <p className="mt-2 text-gray-700 leading-relaxed">{property.description}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">What this place offers</h3>
                  <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {property.category.map((amenity, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="text-green-600">✓</span>
                        <span>{amenity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            {active === 'reviews' && <ReviewSection reviews={property.reviews} />}
            {active === 'host' && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Meet your host</h3>
                <div className="flex items-center gap-3">
                  {property.host?.avatar && (
                    <Image src={property.host.avatar} alt={property.host.name} width={56} height={56} className="rounded-full" />
                  )}
                  <div>
                    <p className="font-medium">{property.host?.name}</p>
                    {property.host?.about && <p className="text-gray-700 mt-1">{property.host.about}</p>}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="md:col-span-1">
          <div className="rounded-xl border p-4 md:hidden">
            <BookingSection price={property.price} />
          </div>
        </div>
      </section>

      <section className="mt-10 md:hidden">
        {/* Mobile full reviews section duplicate when tab not used */}
      </section>
    </div>
  )
}

export default PropertyDetail
