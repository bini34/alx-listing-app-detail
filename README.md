ALX Listing App Detail

This project implements a responsive Property Detail Page in Next.js + Tailwind CSS based on the provided mockup. It demonstrates dynamic routing, reusable components, typed data, and a booking/reviews UI.

Key files
- pages/property/[id].tsx: Dynamic route for property pages
- components/property/PropertyDetail.tsx: Main detail layout with image grid, tabs, amenities
- components/property/BookingSection.tsx: Sticky booking card with date inputs and total calculation
- components/property/ReviewSection.tsx: Review list with avatars and stars
- interfaces/index.ts: TypeScript interfaces for property data
- constants/index.ts: Sample property data

How to run
1) Install deps
2) Start dev server

Try it
- Open http://localhost:3000
- Click the link to "Cozy Loft in Downtown"

Notes
- Images use Next Image with permissive remotePatterns
- Tailwind configured in tailwind.config.ts
# alx-listing-app-detail