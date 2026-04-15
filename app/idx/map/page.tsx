// app/idx/map/page.tsx
// Route: /idx/map  →  Map-based property search

import IDXEmbed from "@/components/IDXEmbed";

export const metadata = {
  title: "Map Search | Key Homes KC",
  description: "Search Kansas City properties on an interactive map.",
};

export default function MapSearchPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-white border-b border-gray-200 px-6 py-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Map Search</h1>
        <p className="text-gray-500">
          Explore listings visually on the map below.
        </p>
      </section>

      <nav className="flex justify-center gap-4 py-4 bg-white border-b border-gray-100">
        <a
          href="/idx"
          className="px-4 py-2 text-sm font-medium rounded-full text-gray-600 hover:bg-gray-100 transition"
        >
          All Office Listings
        </a>
        <a
          href="/idx/map"
          className="px-4 py-2 text-sm font-medium rounded-full bg-blue-600 text-white"
        >
          Map Search
        </a>
        <a
          href="/idx/my-listings"
          className="px-4 py-2 text-sm font-medium rounded-full text-gray-600 hover:bg-gray-100 transition"
        >
          My Listings
        </a>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <IDXEmbed view="mapSearch" height="750px" title="Map Search" />
      </div>
    </main>
  );
}
