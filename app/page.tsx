import AboutHero from "@/components/AboutHero";
import IDXEmbed from "@/components/IDXEmbed";
import BlogSection from "@/components/BlogSection";
import Goal from "@/components/Goal";
import Hero from "@/components/Hero";
import Listing from "@/components/Listing";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
// import VideoSection from "@/components/VideoSection";

export default function Home() {
  return (
    <>
    <Hero />
    {/* <Listing /> */}

 <main className="min-h-screen bg-gray-50">
      {/* Page header */}
      <section className="bg-white border-b border-gray-200 px-6 py-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Search Kansas City Homes
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          Use the map or filters below to find your perfect home. Contact{" "}
          <a
            href="mailto:rebecca@keyhomeskc.com"
            className="text-blue-600 underline"
          >
            Rebecca Graham
          </a>{" "}
          with any questions.
        </p>
      </section>

      {/* Tab-style navigation between search views */}
      <nav className="flex justify-center gap-4 py-4 bg-white border-b border-gray-100">
        <a
          href="/idx"
          className="px-4 py-2 text-sm font-medium rounded-full bg-blue-600 text-white"
        >
          All Office Listings
        </a>
        <a
          href="/idx/map"
          className="px-4 py-2 text-sm font-medium rounded-full text-gray-600 hover:bg-gray-100 transition"
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

      {/* IDX iframe */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <IDXEmbed view="officeListings" height="750px" title="Office Listings" />
      </div>
    </main>

    <Goal />
    <Team />
    <Testimonials />
    {/* <AboutHero /> */}
    {/* <VideoSection /> */}
    <BlogSection />
    </>
  );
}
