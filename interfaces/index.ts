export interface Address {
  city: string
  country: string
}

export interface Review {
  id: string
  name: string
  avatar: string
  rating: number // 0-5
  comment: string
  date?: string
}

export interface HostInfo {
  name: string
  avatar?: string
  about?: string
}

export interface PropertyProps {
  name: string
  rating: number
  address: Address
  image: string
  images?: string[]
  description: string
  category: string[] // amenities/services
  price: number // nightly
  reviews: Review[]
  host?: HostInfo
}
