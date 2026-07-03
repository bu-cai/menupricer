"use client";

import { useState } from "react";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";
import { RestaurantTypeData, ALL_TYPES } from "./data";

interface Props { data: RestaurantTypeData; }

export default function MenuPricingClient({ data }: Props) {
  const [cost, setCost] = useState("");
  const [margin, setMargin] = useState(String(data.targetMargin));
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const ic = parseFloat(cost) || 0;
  const tm = parseFloat(margin) || data.targetMargin;
  const suggestedPrice = ic > 0 ? ic / (1 - tm / 100) : 0;
  const profit = suggestedPrice > 0 ? suggestedPrice - ic : 0;

  const related = ALL_TYPES.filter((t) => t.slug !== data.slug).slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <LogoIcon size={28} />
            <span className="font-black text-gray-900 tracking-tight text-lg">
              Menu<span className="text-orange-500">Pricer</span>
            </span>
          </Link>
          <span className="text-gray-300 text-sm">·</span>
          <span className="text-sm text-gray-500">{data.name} Pricing</span>
          <Link href="/" className="ml-auto text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors">
            AI Pricing Tool →
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-white border-b border-gray-100">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:48px_48px] opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/8 rounded-full blur-3xl" />
        <div className="relative max-w-3xl mx-auto px-6 pt-14 pb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1.5 rounded-full mb-5 uppercase tracking-wide">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
            Free Tool · {data.name} Specialists
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-4">
            {data.name} Menu<br />
            <span className="text-orange-500">Pricing Calculator</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            {data.tagline}. Target <strong className="text-gray-700">{data.marginRange}</strong> gross margin with real {data.name.toLowerCase()} benchmarks.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-gray-500">
            <span className="flex items-center gap-1.5"><span className="text-green-500 font-bold">✓</span> Target margin: {data.marginRange}</span>
            <span className="flex items-center gap-1.5"><span className="text-green-500 font-bold">✓</span> Avg check: {data.avgCheckSize}</span>
            <span className="flex items-center gap-1.5"><span className="text-green-500 font-bold">✓</span> Food cost: {data.foodCostPct}%</span>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Inputs */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-5">
            <h2 className="text-base font-black text-gray-900">Calculate Your {data.name} Menu Price</h2>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Ingredient Cost per Serving ($)</label>
              <input
                type="number" min="0" step="0.01" placeholder="e.g. 4.50"
                value={cost} onChange={(e) => setCost(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-lg font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <div className="flex flex-wrap gap-1.5 mt-2">
                {data.dishes.slice(0, 3).map((d) => (
                  <button key={d.name} onClick={() => setCost(String(d.cost))}
                    className="text-xs text-orange-500 border border-orange-200 rounded-full px-2 py-0.5 hover:bg-orange-50 transition-colors">
                    {d.name} ${d.cost}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Target Gross Margin (%)</label>
              <div className="flex items-center gap-3">
                <input type="range" min="30" max="90" step="1" value={margin}
                  onChange={(e) => setMargin(e.target.value)} className="flex-1 accent-orange-500" />
                <span className="w-14 text-center font-black text-orange-500 text-lg">{margin}%</span>
              </div>
              <p className="text-xs text-gray-400 mt-1">{data.name} industry standard: {data.marginRange}</p>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-4">
            <div className="bg-orange-500 rounded-2xl p-6 text-white">
              <p className="text-sm font-semibold text-orange-100 mb-1">Recommended Menu Price</p>
              <p className="text-5xl font-black">{suggestedPrice > 0 ? `$${suggestedPrice.toFixed(2)}` : "—"}</p>
              <p className="text-sm text-orange-100 mt-2">
                At {tm}% margin · ${profit > 0 ? profit.toFixed(2) : "—"} profit per dish
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
              <p className="text-xs font-bold text-blue-700 uppercase tracking-wide mb-2">{data.name} Pricing Formula</p>
              <p className="text-sm font-mono text-blue-800">
                Price = ${ic > 0 ? ic.toFixed(2) : "cost"} ÷ (1 − {tm}%) = {suggestedPrice > 0 ? `$${suggestedPrice.toFixed(2)}` : "?"}
              </p>
            </div>
            <Link href="/" className="block w-full bg-gray-900 hover:bg-gray-800 text-white font-bold px-6 py-3.5 rounded-xl text-center text-sm transition-colors">
              🤖 Get AI pricing with 3 tiers + delivery markup →
            </Link>
            <p className="text-xs text-center text-gray-400">AI estimates ingredient costs — no spreadsheet needed</p>
          </div>
        </div>
      </section>

      {/* Dish examples table */}
      <section className="bg-gray-50 border-t border-gray-100 py-14">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-black text-gray-900 mb-2">{data.name} Menu Pricing Examples</h2>
          <p className="text-gray-500 text-sm mb-8">Real dish costs and prices for {data.nameFull.toLowerCase()}s. Click any row to load it into the calculator above.</p>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <th className="text-left px-5 py-3.5 font-bold text-gray-700">Dish</th>
                  <th className="text-left px-5 py-3.5 font-bold text-gray-700">Ingredient Cost</th>
                  <th className="text-left px-5 py-3.5 font-bold text-gray-700">Menu Price</th>
                  <th className="text-left px-5 py-3.5 font-bold text-gray-700">Gross Margin</th>
                  <th className="text-left px-5 py-3.5 font-bold text-gray-700"></th>
                </tr>
              </thead>
              <tbody>
                {data.dishes.map((d, i) => (
                  <tr key={i} className="border-b border-gray-50 hover:bg-orange-50/40 transition-colors cursor-pointer"
                    onClick={() => setCost(String(d.cost))}>
                    <td className="px-5 py-3.5 font-semibold text-gray-800">{d.name}</td>
                    <td className="px-5 py-3.5 text-gray-600">${d.cost.toFixed(2)}</td>
                    <td className="px-5 py-3.5 text-gray-600">${d.price.toFixed(2)}</td>
                    <td className="px-5 py-3.5">
                      <span className="bg-green-100 text-green-700 font-bold px-2.5 py-0.5 rounded-full text-xs">{d.margin}%</span>
                    </td>
                    <td className="px-5 py-3.5 text-orange-500 text-xs font-semibold">Load →</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Key challenge + tips */}
      <section className="max-w-4xl mx-auto px-6 py-14">
        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 mb-10">
          <p className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-1">Key Pricing Challenge</p>
          <p className="text-gray-800 font-semibold">{data.keyChallenge}</p>
        </div>
        <h2 className="text-2xl font-black text-gray-900 mb-8">{data.name} Menu Pricing Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.tips.map((tip, i) => (
            <div key={i} className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 font-black text-sm flex items-center justify-center shrink-0 mt-0.5">{i + 1}</div>
              <div>
                <h3 className="font-bold text-gray-800 text-sm mb-1">{tip.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{tip.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 border-t border-gray-100 py-14">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-black text-gray-900 mb-8">{data.name} Menu Pricing — FAQ</h2>
          <div className="space-y-2">
            {data.faqs.map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left text-sm font-semibold text-gray-800 hover:text-orange-600 transition-colors">
                  <span>{item.q}</span>
                  <span className={`text-orange-400 transition-transform duration-200 ml-4 shrink-0 ${openFaq === i ? "rotate-180" : ""}`}>▾</span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-sm text-gray-500 leading-relaxed border-t border-gray-50 pt-3">{item.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related types */}
      <section className="max-w-4xl mx-auto px-6 py-14">
        <h2 className="text-xl font-black text-gray-900 mb-6">Menu Pricing by Restaurant Type</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {related.map((t) => (
            <Link key={t.slug} href={`/menu-pricing/${t.slug}`}
              className="block bg-gray-50 hover:bg-orange-50 border border-gray-200 hover:border-orange-200 rounded-xl p-4 text-center transition-colors group">
              <p className="font-bold text-gray-800 group-hover:text-orange-600 text-sm transition-colors">{t.name}</p>
              <p className="text-xs text-gray-400 mt-1">{t.marginRange} margin</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-orange-500 py-14">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
            Let AI price your entire {data.name.toLowerCase()} menu
          </h2>
          <p className="text-orange-100 mb-8 text-base">
            Type any dish name — MenuPricer AI estimates ingredients, calculates costs, and gives you 3 pricing tiers with delivery markups. Built for {data.nameFull.toLowerCase()}s.
          </p>
          <Link href="/" className="inline-block bg-white text-orange-600 font-black px-8 py-3.5 rounded-xl text-base hover:bg-orange-50 transition-colors shadow-lg shadow-orange-600/20">
            Try MenuPricer Free →
          </Link>
          <p className="text-orange-200 text-xs mt-4">No credit card · No sign-up required</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-6">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <LogoIcon size={20} />
            <span className="font-black text-gray-900 text-sm">Menu<span className="text-orange-500">Pricer</span></span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
            <Link href="/" className="hover:text-orange-500 transition-colors">AI Pricing Tool</Link>
            <Link href="/menu-cost-calculator" className="hover:text-orange-500 transition-colors">Menu Cost Calculator</Link>
            <Link href="/food-cost-calculator" className="hover:text-orange-500 transition-colors">Food Cost Calculator</Link>
            {ALL_TYPES.map((t) => (
              <Link key={t.slug} href={`/menu-pricing/${t.slug}`} className="hover:text-orange-500 transition-colors">
                {t.name} Pricing
              </Link>
            ))}
          </div>
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} MenuPricer</p>
        </div>
      </footer>
    </div>
  );
}
