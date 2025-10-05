import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-4">ALX Listing App</h1>
      <p className="mb-4">Go to a sample property detail page:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <Link className="text-blue-600 underline" href="/property/Cozy%20Loft%20in%20Downtown">Cozy Loft in Downtown</Link>
        </li>
      </ul>
    </main>
  )
}
