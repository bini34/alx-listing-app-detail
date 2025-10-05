import { useRouter } from 'next/router'
import PropertyDetail from '@/components/property/PropertyDetail'
import { PROPERTYLISTINGSAMPLE } from '@/constants'

export default function PropertyPage() {
  const router = useRouter()
  const { id } = router.query
  const key = typeof id === 'string' ? decodeURIComponent(id) : ''
  const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === key)

  if (!property) return <p className="p-6">Property not found</p>

  return (
    <div>
      <PropertyDetail property={property} />
    </div>
  )
}
