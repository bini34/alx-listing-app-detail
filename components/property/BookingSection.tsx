import { useMemo, useState } from 'react'

const dayMs = 24 * 60 * 60 * 1000

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkIn, setCheckIn] = useState<string>("")
  const [checkOut, setCheckOut] = useState<string>("")

  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 0
    const start = new Date(checkIn)
    const end = new Date(checkOut)
    const diff = (end.getTime() - start.getTime()) / dayMs
    return diff > 0 ? Math.ceil(diff) : 0
  }, [checkIn, checkOut])

  const total = nights * price

  return (
    <div className="bg-white p-5 shadow-md rounded-xl border">
      <div className="flex items-end gap-1">
        <h3 className="text-2xl font-bold">${price}</h3>
        <span className="text-gray-500">night</span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium">Check-in</label>
          <input
            type="date"
            className="mt-1 border rounded-md p-2 w-full"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Check-out</label>
          <input
            type="date"
            className="mt-1 border rounded-md p-2 w-full"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-700 flex justify-between">
        <span>
          ${price} × {nights} night{nights === 1 ? '' : 's'}
        </span>
        <span>${total || 0}</span>
      </div>

      <button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2.5 px-4 rounded-md font-medium">
        Reserve now
      </button>
    </div>
  )
}

export default BookingSection
