"use client";

import { useState } from "react";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

function clamp(v: number, min: number, max: number) { return Math.min(Math.max(v, min), max); }

const BENCHMARKS = [
  { type: "Fine Dining", markup: "200–350%", foodCost: "28–35%", margin: "65–72%" },
  { type: "Casual Dining", markup: "200–300%", foodCost: "30–35%", margin: "65–70%" },
  { type: "Fast Casual", markup: "220–350%", foodCost: "25–32%", margin: "68–75%" },
  { type: "Pizza / Pasta", markup: "180–280%", foodCost: "28–38%", margin: "62–72%" },
  { type: "Food Truck", markup: "200–300%", foodCost: "25–35%", margin: "65–75%" },
  { type: "Bakery / Café", markup: "200–350%", foodCost: "25–35%", margin: "65–75%" },
  { type: "Bar / Beverages", markup: "400–600%", foodCost: "15–25%", margin: "75–85%" },
];

const FAQS = [
  { q: "What is a typical restaurant markup on food?", a: "Most restaurants mark up food 200–400%. A dish costing $3 typically sells for $9–$12 (300–400% markup). This corresponds to a 25–33% food cost percentage. Beverages are marked up even more — often 400–600%." },
  { q: "What is the difference between markup and margin?", a: "Markup is based on cost: (Price - Cost) ÷ Cost × 100. Margin is based on price: (Price - Cost) ÷ Price × 100. A 300% markup equals 75% gross margin. Always clarify which you're using." },
  { q: "How do I calculate menu price from food cost?", a: "Divide ingredient cost by target food cost percentage. At 30% food cost: $4.00 ÷ 0.30 = $13.33 menu price. This is equivalent to a 233% markup." },
  { q: "Should I use the same markup for every dish?", a: "No — use value-based pricing. Price signature dishes higher based on perceived value, and anchor dishes lower to drive traffic. The goal is a blended food cost of 28–35% across your menu." },
];

export default function MarkupCalculatorClient() {
  const [cost, setCost] = useState("");
  const [markupPct, setMarkupPct] = useState("300");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const ic = parseFloat(cost) || 0;
  const mu = clamp(parseFloat(markupPct) || 300, 0, 2000);
  const menuPrice = ic > 0 ? ic * (1 + mu / 100) : 0;
  const foodCostPct = menuPrice > 0 ? (ic / menuPrice) * 100 : 0;
  const grossMargin = menuPrice > 0 ? ((menuPrice - ic) / menuPrice) * 100 : 0;
  const profitPerDish = menuPrice > 0 ? menuPrice - ic : 0;

  const fcColor = foodCostPct === 0 ? "text-gray-400"
    : foodCostPct < 28 ? "text-green-600"
    : foodCostPct <= 35 ? "text-orange-500"
    : "text-red-500";

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <LogoIcon size={28} />
            <span className="font-black text-gray-900 tracking-tight text-lg">Menu<span className="text-orange-500">Pricer</span></span>
          </Link>
          <span className="text-gray-300 text-sm">·</span>
          <span className="text-sm text-gray-500">Markup Calculator</span>
          <Link href="/" className="ml-auto text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors">AI Pricing Tool →</Link>
        </div>
      </header>

      <section className="relative overflow-hidden bg-white border-b border-gray-100">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:48px_48px] opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/8 rounded-full blur-3xl" />
        <div className="relative max-w-3xl mx-auto px-6 pt-14 pb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1.5 rounded-full mb-5 uppercase tracking-wide">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />Free Tool · No Sign-up Required
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-4">
            Restaurant Markup Calculator<br /><span className="text-orange-500">Food Cost → Menu Price</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Enter ingredient cost and markup % to get your menu price, food cost percentage, and gross margin.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-5">
            <h2 className="text-base font-black text-gray-900">Enter Your Numbers</h2>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Ingredient Cost per Serving ($)</label>
              <input
                type="number" min="0" step="0.01" placeholder="e.g. 4.00"
                value={cost} onChange={(e) => setCost(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-lg font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Markup Percentage (%)</label>
              <div className="flex items-center gap-3">
                <input
                  type="range" min="50" max="1000" step="10"
                  value={markupPct} onChange={(e) => setMarkupPct(e.target.value)}
                  className="flex-1 accent-orange-500"
                />
                <input
                  type="number" min="0" step="10"
                  value={markupPct} onChange={(e) => setMarkupPct(e.target.value)}
                  className="w-20 text-center border border-gray-200 rounded-xl px-3 py-2 font-black text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <span className="text-gray-500 font-bold">%</span>
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>50% (low margin)</span><span>1000% (premium)</span>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
              <p className="text-xs font-bold text-blue-700 uppercase tracking-wide mb-2">Formula</p>
              <p className="text-sm font-mono text-blue-800">
                Menu Price = Cost × (1 + Markup%)<br />
                ${ic > 0 ? ic.toFixed(2) : "cost"} × {(1 + mu / 100).toFixed(2)} = {menuPrice > 0 ? `$${menuPrice.toFixed(2)}` : "?"}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-orange-500 rounded-2xl p-6 text-white">
              <p className="text-sm font-semibold text-orange-100 mb-1">Menu Price</p>
              <p className="text-5xl font-black">{menuPrice > 0 ? `$${menuPrice.toFixed(2)}` : "—"}</p>
              <p className="text-sm text-orange-100 mt-2">At {mu}% markup on ${ic > 0 ? ic.toFixed(2) : "?"} cost</p>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <p className="text-xs text-gray-500 mb-1">Food Cost %</p>
                <p className={`text-xl font-black ${fcColor}`}>{foodCostPct > 0 ? `${foodCostPct.toFixed(1)}%` : "—"}</p>
                <p className="text-xs text-gray-400 mt-1">{foodCostPct > 0 && foodCostPct <= 35 ? "✓ In range" : foodCostPct > 35 ? "⚠ High" : ""}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <p className="text-xs text-gray-500 mb-1">Gross Margin</p>
                <p className="text-xl font-black text-gray-900">{grossMargin > 0 ? `${grossMargin.toFixed(1)}%` : "—"}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <p className="text-xs text-gray-500 mb-1">Profit/Dish</p>
                <p className="text-xl font-black text-green-600">{profitPerDish > 0 ? `$${profitPerDish.toFixed(2)}` : "—"}</p>
              </div>
            </div>
            <Link href="/" className="block w-full bg-gray-900 hover:bg-gray-800 text-white font-bold px-6 py-3.5 rounded-xl text-center text-sm transition-colors">
              🤖 Get AI pricing with 3 tiers + menu copy →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 border-t border-gray-100 py-14">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-black text-gray-900 mb-2">Markup Benchmarks by Restaurant Type</h2>
          <p className="text-gray-500 text-sm mb-8">Industry standards — use these to see how your markup compares.</p>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <th className="text-left px-5 py-3.5 font-bold text-gray-700">Type</th>
                  <th className="text-left px-5 py-3.5 font-bold text-gray-700">Typical Markup</th>
                  <th className="text-left px-5 py-3.5 font-bold text-gray-700">Food Cost %</th>
                  <th className="text-left px-5 py-3.5 font-bold text-gray-700">Gross Margin</th>
                </tr>
              </thead>
              <tbody>
                {BENCHMARKS.map((b, i) => (
                  <tr key={i} className="border-b border-gray-50 hover:bg-orange-50/40 transition-colors">
                    <td className="px-5 py-3.5 font-semibold text-gray-800">{b.type}</td>
                    <td className="px-5 py-3.5 text-gray-600">{b.markup}</td>
                    <td className="px-5 py-3.5"><span className="bg-orange-100 text-orange-700 font-bold px-2.5 py-0.5 rounded-full text-xs">{b.foodCost}</span></td>
                    <td className="px-5 py-3.5 text-gray-600">{b.margin}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-white border-t border-gray-100 py-14">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-black text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-2">
            {FAQS.map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between px-5 py-4 text-left text-sm font-semibold text-gray-800 hover:text-orange-600 transition-colors">
                  <span>{item.q}</span>
                  <span className={`text-orange-400 transition-transform duration-200 ml-4 shrink-0 ${openFaq === i ? "rotate-180" : ""}`}>▾</span>
                </button>
                {openFaq === i && <div className="px-5 pb-4 text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-3">{item.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-orange-500 py-14">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">Want AI to price your whole menu?</h2>
          <p className="text-orange-100 mb-8">MenuPricer generates 3 pricing tiers (Budget · Standard · Premium) for any dish — with food cost, margin, and menu copy. 30 seconds per dish.</p>
          <Link href="/" className="inline-block bg-white text-orange-600 font-black px-8 py-3.5 rounded-xl text-base hover:bg-orange-50 transition-colors shadow-lg shadow-orange-600/20">
            Try MenuPricer Free →
          </Link>
          <p className="text-orange-200 text-xs mt-4">No credit card · No sign-up required</p>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-100 py-6">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2"><LogoIcon size={20} /><span className="font-black text-gray-900 text-sm">Menu<span className="text-orange-500">Pricer</span></span></div>
          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
            <Link href="/food-cost-calculator" className="hover:text-orange-500 transition-colors">Food Cost Calculator</Link>
            <Link href="/recipe-cost-calculator" className="hover:text-orange-500 transition-colors">Recipe Cost Calculator</Link>
            <Link href="/restaurant-profit-calculator" className="hover:text-orange-500 transition-colors">Profit Calculator</Link>
            <Link href="/menu-cost-calculator" className="hover:text-orange-500 transition-colors">Menu Cost Calculator</Link>
          </div>
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} MenuPricer</p>
        </div>
      </footer>
    </div>
  );
}
