import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";
import { ALL_COUNTRIES } from "./[country]/data";

export const metadata: Metadata = {
  title: "Restaurant Menu Pricing by Country",
  description: "Tax treatment, labor cost rules, and pricing benchmarks for the UK, Canada, and Australia — what's different from US restaurant pricing in each market.",
  alternates: { canonical: "https://www.aimenupricer.com/restaurant-pricing" },
  openGraph: {
    title: "Restaurant Menu Pricing by Country | MenuPricer",
    description: "Tax treatment, labor cost rules, and pricing benchmarks by country.",
    url: "https://www.aimenupricer.com/restaurant-pricing",
  },
};

const BREADCRUMB = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Restaurant Pricing", item: "https://www.aimenupricer.com/restaurant-pricing" },
  ],
};

export default function RestaurantPricingIndexPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />

      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <LogoIcon size={28} />
            <span className="font-black text-gray-900 tracking-tight text-lg">
              Menu<span className="text-orange-500">Pricer</span>
            </span>
          </Link>
          <span className="text-gray-300 text-sm">·</span>
          <span className="text-sm text-gray-500">Restaurant Pricing by Country</span>
          <Link href="/" className="ml-auto text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors">
            AI Pricing Tool →
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <Link href="/" className="hover:text-gray-600">Home</Link>
          <span>›</span>
          <span className="text-gray-600">Restaurant Pricing by Country</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-4">
          Restaurant Menu Pricing by Country
        </h1>
        <p className="text-lg text-gray-500 leading-relaxed mb-8">
          The food cost formula is the same everywhere. What's different is tax treatment, labor cost
          rules, and pricing conventions — and those genuinely change the numbers. Pick your market.
        </p>

        <div className="space-y-4 mb-10">
          {ALL_COUNTRIES.map((c) => (
            <Link
              key={c.slug}
              href={`/restaurant-pricing/${c.slug}`}
              className="block border border-gray-200 rounded-xl p-5 hover:border-orange-300 transition-colors group"
            >
              <div className="flex items-center justify-between mb-2">
                <p className="font-black text-gray-900 group-hover:text-orange-500 transition-colors">
                  {c.name} →
                </p>
                <span className="text-xs font-bold bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">
                  {c.currencyCode}
                </span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{c.keyDifference.title}</p>
            </Link>
          ))}
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-5 mb-10">
          <p className="text-sm text-gray-700 leading-relaxed">
            MenuPricer supports USD, CNY, EUR, GBP, CAD, and AUD, so you can price your menu in your
            local currency regardless of which market you operate in.
          </p>
        </div>

        <section className="border-t border-gray-100 pt-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Also useful</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/food-cost-calculator" className="border border-gray-200 rounded-xl p-4 hover:border-orange-300 transition-colors group">
              <p className="font-semibold text-gray-900 group-hover:text-orange-500 transition-colors text-sm mb-1">Food Cost Calculator</p>
              <p className="text-xs text-gray-500">Works in all 6 supported currencies.</p>
            </Link>
            <Link href="/blog/food-cost-percentage-by-restaurant-type" className="border border-gray-200 rounded-xl p-4 hover:border-orange-300 transition-colors group">
              <p className="font-semibold text-gray-900 group-hover:text-orange-500 transition-colors text-sm mb-1">Food Cost Benchmarks by Type</p>
              <p className="text-xs text-gray-500">General benchmarks by restaurant concept, not by country.</p>
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-100 mt-16 py-8">
        <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <LogoIcon size={24} />
            <span className="font-black text-gray-900 text-sm">
              Menu<span className="text-orange-500">Pricer</span>
            </span>
          </Link>
          <p className="text-xs text-gray-400">© 2026 MenuPricer. AI-powered menu pricing for restaurant owners.</p>
        </div>
      </footer>
    </div>
  );
}
