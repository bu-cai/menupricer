import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";
import { ALL_TYPES } from "./[type]/data";

export const metadata: Metadata = {
  title: "Menu Pricing by Restaurant Type — Free Calculators | MenuPricer",
  description:
    "Free menu pricing calculators for every restaurant type. Fine dining, fast casual, food truck, bakery, pizza, and café — get industry-specific benchmarks and pricing tools.",
  alternates: { canonical: "https://www.aimenupricer.com/menu-pricing" },
  openGraph: {
    title: "Menu Pricing by Restaurant Type — MenuPricer",
    description: "Industry-specific menu pricing calculators and benchmarks for restaurant owners.",
    url: "https://www.aimenupricer.com/menu-pricing",
  },
};

export default function MenuPricingHubPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <LogoIcon size={28} />
            <span className="font-black text-gray-900 tracking-tight text-lg">
              Menu<span className="text-orange-500">Pricer</span>
            </span>
          </Link>
          <span className="text-gray-300 text-sm">·</span>
          <span className="text-sm text-gray-500">Menu Pricing Guide</span>
          <Link href="/" className="ml-auto text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors">
            AI Pricing Tool →
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden bg-white border-b border-gray-100">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:48px_48px] opacity-50" />
        <div className="relative max-w-3xl mx-auto px-6 pt-14 pb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-4">
            Menu Pricing Calculator<br />
            <span className="text-orange-500">by Restaurant Type</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Every restaurant type has different margin targets, cost structures, and pricing strategies. Choose yours below.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ALL_TYPES.map((t) => (
            <Link key={t.slug} href={`/menu-pricing/${t.slug}`}
              className="group block bg-white border border-gray-200 hover:border-orange-300 hover:shadow-md rounded-2xl p-6 transition-all">
              <div className="flex items-start justify-between mb-3">
                <h2 className="font-black text-gray-900 group-hover:text-orange-600 transition-colors">{t.name}</h2>
                <span className="text-orange-500 text-sm font-bold">→</span>
              </div>
              <p className="text-sm text-gray-500 mb-4 leading-relaxed">{t.tagline}</p>
              <div className="space-y-1.5 text-xs text-gray-500">
                <div className="flex justify-between"><span>Target margin</span><span className="font-bold text-gray-700">{t.marginRange}</span></div>
                <div className="flex justify-between"><span>Food cost %</span><span className="font-bold text-gray-700">{t.foodCostPct}%</span></div>
                <div className="flex justify-between"><span>Avg check</span><span className="font-bold text-gray-700">{t.avgCheckSize}</span></div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="text-xs font-semibold text-orange-500 group-hover:underline">
                  Open {t.name} Calculator →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-orange-500 py-14">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">Want AI to price your whole menu?</h2>
          <p className="text-orange-100 mb-8">Enter any dish name — MenuPricer gives you 3 pricing tiers, delivery markup, and AI-written menu copy in 30 seconds.</p>
          <Link href="/" className="inline-block bg-white text-orange-600 font-black px-8 py-3.5 rounded-xl hover:bg-orange-50 transition-colors shadow-lg shadow-orange-600/20">
            Try MenuPricer Free →
          </Link>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-100 py-6">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <LogoIcon size={20} />
            <span className="font-black text-gray-900 text-sm">Menu<span className="text-orange-500">Pricer</span></span>
          </div>
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <Link href="/" className="hover:text-orange-500 transition-colors">AI Pricing Tool</Link>
            <Link href="/menu-cost-calculator" className="hover:text-orange-500 transition-colors">Menu Cost Calculator</Link>
            <Link href="/food-cost-calculator" className="hover:text-orange-500 transition-colors">Food Cost Calculator</Link>
          </div>
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} MenuPricer</p>
        </div>
      </footer>
    </div>
  );
}
