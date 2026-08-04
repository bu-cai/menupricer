"use client";

import { useState } from "react";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";
import type { DishPriceData } from "./data";

export default function DishPriceClient({ data }: { data: DishPriceData }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const suggestedPrice = data.worked.totalCost / (data.worked.targetFoodCostPct / 100);
  const actualFoodCostPct = (data.worked.totalCost / suggestedPrice) * 100;

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <LogoIcon size={28} />
            <span className="font-black text-gray-900 tracking-tight text-lg">Menu<span className="text-orange-500">Pricer</span></span>
          </Link>
          <span className="text-gray-300 text-sm">·</span>
          <Link href="/how-to-price" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">How to Price</Link>
          <Link href="/" className="ml-auto text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors">AI Pricing Tool →</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <Link href="/" className="hover:text-gray-600">Home</Link>
          <span>›</span>
          <Link href="/how-to-price" className="hover:text-gray-600">How to Price</Link>
          <span>›</span>
          <span className="text-gray-600">{data.name}</span>
        </nav>

        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
          {data.category}
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-3">
          How to Price {data.name}: Food Cost Breakdown & Menu Price Guide
        </h1>
        <p className="text-sm text-gray-400 mb-6">Last reviewed: July 28, 2026</p>

        {/* Direct answer box */}
        <div className="bg-gray-50 border-l-4 border-orange-400 rounded-r-xl p-5 mb-8">
          <p className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-2">Short answer</p>
          <p className="text-gray-700 leading-relaxed">
            {data.name} typically runs a food cost of <strong>{data.foodCostRange}</strong>, supporting
            a menu price of <strong>{data.typicalPriceRange}</strong> depending on portion size and
            ingredient quality. A worked example below shows the exact math for one common version.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">What Drives {data.name} Cost</h2>
          <div className="space-y-3">
            {data.costBreakdown.map((c, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-4">
                <div className="flex items-center justify-between gap-3 mb-1">
                  <p className="font-semibold text-gray-900 text-sm">{c.ingredient}</p>
                  <span className="text-xs font-bold bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full whitespace-nowrap">
                    {c.costShare} of cost
                  </span>
                </div>
                <p className="text-sm text-gray-600">{c.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Worked Example</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-bold text-gray-700">Ingredient</th>
                  <th className="text-left px-4 py-3 font-bold text-gray-700">Amount</th>
                  <th className="text-right px-4 py-3 font-bold text-gray-700">Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {data.worked.items.map((it, i) => (
                  <tr key={i}>
                    <td className="px-4 py-3 text-gray-800">{it.ingredient}</td>
                    <td className="px-4 py-3 text-gray-500">{it.amount}</td>
                    <td className="px-4 py-3 text-right font-mono text-gray-800">${it.cost.toFixed(2)}</td>
                  </tr>
                ))}
                <tr className="bg-gray-50 font-bold">
                  <td className="px-4 py-3 text-gray-900" colSpan={2}>Total ingredient cost</td>
                  <td className="px-4 py-3 text-right font-mono text-gray-900">${data.worked.totalCost.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
              <p className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-1">Target Food Cost</p>
              <p className="text-2xl font-black text-gray-900">{data.worked.targetFoodCostPct}%</p>
            </div>
            <div className="bg-orange-500 rounded-xl p-4 text-white">
              <p className="text-xs font-bold text-orange-100 uppercase tracking-wide mb-1">Suggested Menu Price</p>
              <p className="text-2xl font-black">${suggestedPrice.toFixed(2)}</p>
              <p className="text-xs text-orange-100 mt-0.5">Actual food cost: {actualFoodCostPct.toFixed(1)}%</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Common Pricing Mistakes</h2>
          <div className="space-y-3">
            {data.mistakes.map((m, i) => (
              <div key={i} className="border-l-4 border-red-300 pl-4 py-1">
                <p className="font-bold text-gray-800 text-sm">{m.title}</p>
                <p className="text-sm text-gray-500 mt-1">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-orange-500 rounded-2xl p-8 text-center mb-10">
          <h2 className="text-2xl font-bold text-white mb-2">Price Every {data.name} Dish on Your Menu</h2>
          <p className="text-orange-100 mb-5">
            MenuPricer drafts the ingredient breakdown from the dish name and gives you 3 price
            tiers with the resulting margin. No spreadsheets, no data entry.
          </p>
          <Link href="/" className="inline-block bg-white text-orange-500 font-bold px-8 py-3 rounded-xl hover:bg-orange-50 transition-colors">
            Price your first dish free →
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
            <Link href="/how-to-price" className="border border-gray-200 rounded-xl p-4 hover:border-orange-300 transition-colors group">
              <p className="font-semibold text-gray-900 group-hover:text-orange-500 transition-colors text-sm mb-1">All Dish Pricing Guides</p>
              <p className="text-xs text-gray-500">Cost breakdowns for pizza, burgers, sushi, and more.</p>
            </Link>
            <Link href="/food-cost-calculator" className="border border-gray-200 rounded-xl p-4 hover:border-orange-300 transition-colors group">
              <p className="font-semibold text-gray-900 group-hover:text-orange-500 transition-colors text-sm mb-1">Food Cost Calculator</p>
              <p className="text-xs text-gray-500">Run your own ingredient numbers through the full formula.</p>
            </Link>
            <Link href="/menu-pricing" className="border border-gray-200 rounded-xl p-4 hover:border-orange-300 transition-colors group">
              <p className="font-semibold text-gray-900 group-hover:text-orange-500 transition-colors text-sm mb-1">Pricing by Restaurant Type</p>
              <p className="text-xs text-gray-500">Margin targets and benchmarks for your specific concept.</p>
            </Link>
            <Link href="/restaurant-pricing" className="border border-gray-200 rounded-xl p-4 hover:border-orange-300 transition-colors group">
              <p className="font-semibold text-gray-900 group-hover:text-orange-500 transition-colors text-sm mb-1">Pricing by Country</p>
              <p className="text-xs text-gray-500">UK, Canada, and Australia pricing guides — tax and currency included.</p>
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
