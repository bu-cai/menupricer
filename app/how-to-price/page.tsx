import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";
import { ALL_DISHES } from "./[dish]/data";

export const metadata: Metadata = {
  title: "How to Price Any Dish — Food Cost Breakdowns by Dish",
  description:
    "Ingredient cost breakdowns, worked pricing examples, and common mistakes for pizza, burgers, sushi, tacos, ramen, and more. See the exact math for what to charge.",
  alternates: { canonical: "https://www.aimenupricer.com/how-to-price" },
  openGraph: {
    title: "How to Price Any Dish | MenuPricer",
    description: "Food cost breakdowns and worked pricing examples by dish.",
    url: "https://www.aimenupricer.com/how-to-price",
  },
};

const BREADCRUMB = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "How to Price", item: "https://www.aimenupricer.com/how-to-price" },
  ],
};

export default function HowToPriceIndexPage() {
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
          <span className="text-sm text-gray-500">How to Price</span>
          <Link href="/" className="ml-auto text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors">
            AI Pricing Tool →
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden bg-white border-b border-gray-100">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:48px_48px] opacity-50" />
        <div className="relative max-w-3xl mx-auto px-6 pt-14 pb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-4">
            How to Price<br /><span className="text-orange-500">Any Dish</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Ingredient cost breakdowns and worked examples for {ALL_DISHES.length} common dishes —
            what drives the cost, a real worked example, and the mistakes that quietly erode margin.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ALL_DISHES.map((d) => (
            <Link
              key={d.slug}
              href={`/how-to-price/${d.slug}`}
              className="group block bg-white border border-gray-200 hover:border-orange-300 hover:shadow-md rounded-2xl p-6 transition-all"
            >
              <span className="text-xs font-bold bg-orange-100 text-orange-600 px-2.5 py-1 rounded-full">{d.category}</span>
              <h2 className="font-black text-gray-900 group-hover:text-orange-600 transition-colors mt-3 mb-2">
                {d.name}
              </h2>
              <div className="flex justify-between text-xs text-gray-500">
                <span>Food cost {d.foodCostRange}</span>
                <span>{d.typicalPriceRange}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-orange-500 py-14">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">Don't see your dish?</h2>
          <p className="text-orange-100 mb-8">
            MenuPricer's AI drafts an ingredient breakdown for any dish name and prices it in 30 seconds.
          </p>
          <Link href="/" className="inline-block bg-white text-orange-600 font-black px-8 py-3.5 rounded-xl hover:bg-orange-50 transition-colors shadow-lg shadow-orange-600/20">
            Try MenuPricer Free →
          </Link>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-100 py-6">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <LogoIcon size={20} />
            <span className="font-black text-gray-900 text-sm">Menu<span className="text-orange-500">Pricer</span></span>
          </div>
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} MenuPricer</p>
        </div>
      </footer>
    </div>
  );
}
