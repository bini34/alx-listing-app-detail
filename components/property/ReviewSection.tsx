import Image from 'next/image'
import type { Review } from '@/interfaces'

const Stars = ({ rating }: { rating: number }) => {
  return (
    <div className="text-yellow-500" aria-label={`${rating} stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < Math.round(rating) ? '★' : '☆'}</span>
      ))}
    </div>
  )
}

const ReviewSection: React.FC<{ reviews: Review[] }> = ({ reviews }) => {
  return (
    <div className="mt-6">
      <h3 className="text-2xl font-semibold">Reviews</h3>
      <div className="mt-4 space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b pb-4">
            <div className="flex items-center gap-4">
              <Image src={review.avatar} alt={review.name} width={48} height={48} className="rounded-full" />
              <div>
                <p className="font-semibold">{review.name}</p>
                <Stars rating={review.rating} />
              </div>
            </div>
            <p className="mt-3 text-gray-700 leading-relaxed">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ReviewSection
