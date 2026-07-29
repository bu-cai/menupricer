"use client";

import { useState } from "react";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";
import type { CountryPricingData } from "./data";

export default function CountryPricingClient({ data }: { data: CountryPricingData }) {
  const [cost, setCost] = useState("");
  const [targetPct, setTargetPct] = useState("30");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const ic = parseFloat(cost) || 0;
  const tp = Math.min(Math.max(parseFloat(targetPct) || 30, 1), 60);
  const price = ic > 0 ? ic / (tp / 100) : 0;

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <LogoIcon size={28} />
            <span className="font-black text-gray-900 tracking-tight text-lg">Menu<span className="text-orange-500">Pricer</span></span>
          </Link>
          <span className="text-gray-300 text-sm">·</span>
          <Link href="/restaurant-pricing" className="text-sm text-gray-500 hover:text-orange-500">Restaurant Pricing</Link>
          <Link href="/" className="ml-auto text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors">AI Pricing Tool →</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <Link href="/" className="hover:text-orange-500">Home</Link><span>›</span>
          <Link href="/restaurant-pricing" className="hover:text-orange-500">Restaurant Pricing</Link><span>›</span>
          <span className="text-gray-600">{data.name}</span>
        </nav>

        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
          {data.name} · {data.currencyCode}
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-3">
          Restaurant Menu Pricing in {data.name}
        </h1>
        <p className="text-sm text-gray-400 mb-6">Last updated: July 28, 2026 · Reviewed by the MenuPricer Team</p>
        <p className="text-lg text-gray-500 leading-relaxed mb-8">
          Food cost formulas are universal, but the tax treatment, labor cost structure, and pricing
          conventions around them are not. Here's what's specifically different about pricing a menu
          in {data.name}.
        </p>

        <div className="bg-gray-50 border-l-4 border-orange-400 rounded-r-xl p-5 mb-10">
          <p className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-2">The key difference</p>
          <p className="font-bold text-gray-900 mb-2">{data.keyDifference.title}</p>
          <p className="text-gray-700 leading-relaxed text-sm">{data.keyDifference.body}</p>
        </div>

        {/* Calculator */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Price Calculator ({data.currencyCode})</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-white border border-gray-200 rounded-2xl p-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Ingredient Cost per Serving ({data.currencySymbol})
                </label>
                <input
                  type="number" min="0" step="0.01" placeholder="e.g. 4.50"
                  value={cost} onChange={(e) => setCost(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-lg font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Target Food Cost %</label>
                <div className="flex items-center gap-3">
                  <input type="range" min="15" max="45" step="1" value={targetPct} onChange={(e) => setTargetPct(e.target.value)} className="flex-1 accent-orange-500" />
                  <input type="number" min="1" max="60" value={targetPct} onChange={(e) => setTargetPct(e.target.value)} className="w-16 text-center border border-gray-200 rounded-xl px-2 py-2 font-black text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400" />
                  <span className="text-gray-500 font-bold text-sm">%</span>
                </div>
                <p className="text-xs text-gray-400 mt-1">{data.name} typical range: {data.foodCostRange}</p>
              </div>
            </div>
            <div className="flex flex-col justify-center bg-orange-500 rounded-xl p-6 text-white">
              <p className="text-sm font-semibold text-orange-100 mb-1">Suggested Menu Price</p>
              <p className="text-4xl font-black">{price > 0 ? `${data.currencySymbol}${price.toFixed(2)}` : "—"}</p>
              <p className="text-xs text-orange-100 mt-2">{data.taxNote}</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{data.taxName} and Cost Structure</h2>
          <div className="space-y-3">
            {data.taxDetails.map((t, i) => (
              <div key={i} className="border-l-4 border-orange-300 pl-4 py-1">
                <p className="font-bold text-gray-800 text-sm">{t.title}</p>
                <p className="text-sm text-gray-500 mt-1">{t.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Benchmarks by Restaurant Type ({data.name})</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-bold text-gray-700">Type</th>
                  <th className="text-left px-4 py-3 font-bold text-gray-700">Food Cost %</th>
                  <th className="text-left px-4 py-3 font-bold text-gray-700">Labor Cost %</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {data.benchmarks.map((b) => (
                  <tr key={b.type}>
                    <td className="px-4 py-3 font-semibold text-gray-800">{b.type}</td>
                    <td className="px-4 py-3"><span className="bg-orange-100 text-orange-700 font-bold px-2 py-0.5 rounded-full text-xs">{b.foodCost}</span></td>
                    <td className="px-4 py-3 text-gray-600">{b.labor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="bg-orange-500 rounded-2xl p-8 text-center mb-10">
          <h2 className="text-2xl font-bold text-white mb-2">Price your menu in {data.currencyCode}</h2>
          <p className="text-orange-100 mb-5">
            MenuPricer supports {data.currencyCode}, so you can cost and price every dish in your
            local currency — no manual conversion needed.
          </p>
          <Link href="/" className="inline-block bg-white text-orange-500 font-bold px-8 py-3 rounded-xl hover:bg-orange-50 transition-colors">
            Price a Dish Free →
          </Link>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-2">
            {data.faqs.map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between px-5 py-4 text-left text-sm font-semibold text-gray-800 hover:text-orange-600 transition-colors">
                  <span>{item.q}</span>
                  <span className={`text-orange-400 transition-transform duration-200 ml-4 shrink-0 ${openFaq === i ? "rotate-180" : ""}`}>▾</span>
                </button>
                {openFaq === i && <div className="px-5 pb-4 text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-3">{item.a}</div>}
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-gray-100 pt-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Related</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/blog/food-cost-formula" className="border border-gray-200 rounded-xl p-4 hover:border-orange-300 transition-colors group">
              <p className="font-semibold text-gray-900 group-hover:text-orange-500 transition-colors text-sm mb-1">Food Cost Formula</p>
              <p className="text-xs text-gray-500">The universal formula this page's tax and labor rules build on.</p>
            </Link>
            <Link href="/food-cost-calculator" className="border border-gray-200 rounded-xl p-4 hover:border-orange-300 transition-colors group">
              <p className="font-semibold text-gray-900 group-hover:text-orange-500 transition-colors text-sm mb-1">Food Cost Calculator</p>
              <p className="text-xs text-gray-500">Full calculator with all 6 supported currencies.</p>
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-100 mt-16 py-8">
        <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <LogoIcon size={24} />
            <span className="font-black text-gray-900 text-sm">Menu<span className="text-orange-500">Pricer</span></span>
          </Link>
          <p className="text-xs text-gray-400">© 2026 MenuPricer. AI-powered menu pricing for restaurant owners.</p>
        </div>
      </footer>
    </div>
  );
}
