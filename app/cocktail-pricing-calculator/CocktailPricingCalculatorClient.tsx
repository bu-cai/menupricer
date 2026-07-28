"use client";

import { useState } from "react";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

const BENCHMARKS = [
  { type: "Spirit-forward classics", range: "18–22%", note: "Martinis, Old Fashioneds — mostly spirit, minimal mixers" },
  { type: "Standard mixed cocktails", range: "20–26%", note: "Balanced spirit and mixer ratio" },
  { type: "Craft / house cocktails", range: "22–28%", note: "Fresh juice, house syrups, garnish-heavy" },
  { type: "Wine by the glass", range: "25–35%", note: "Higher pour cost than spirits, lower labor" },
  { type: "Draft beer", range: "18–24%", note: "Lowest labor cost per pour" },
];

const FAQS = [
  { q: "What is pour cost for a cocktail?", a: "Pour cost is the cost of the alcohol and other ingredients in a drink, expressed as a percentage of the menu price — the beverage equivalent of food cost percentage. Most bars target 18-24% for spirit-forward cocktails." },
  { q: "How do I calculate the cost of a cocktail?", a: "Add the cost of every liquid ingredient by the actual amount used: base spirit, modifiers, juices, syrups, plus a garnish allowance. Cost per ounce comes from bottle price divided by ounces per bottle (a standard 750ml bottle holds about 25.4 oz)." },
  { q: "Why is pour cost usually lower than food cost?", a: "Alcohol carries less labor and spoilage risk than food, and liquor licensing and overhead costs are already priced into the margin expectation. A 20% pour cost on cocktails is roughly equivalent in profit contribution to a 30-32% food cost on a dish." },
  { q: "Should I price cocktails the same way across the whole menu?", a: "No — use pour cost as a target range, not a fixed rule. Signature cocktails with expensive fresh ingredients can run a slightly higher pour cost if they drive traffic, offset by simpler drinks priced below the range." },
];

export default function CocktailPricingCalculatorClient() {
  const [spiritCostPerOz, setSpiritCostPerOz] = useState("");
  const [ozPoured, setOzPoured] = useState("2");
  const [mixerCost, setMixerCost] = useState("");
  const [garnishCost, setGarnishCost] = useState("0.25");
  const [targetPourCostPct, setTargetPourCostPct] = useState("20");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const spiritOz = parseFloat(ozPoured) || 0;
  const spiritCost = (parseFloat(spiritCostPerOz) || 0) * spiritOz;
  const mixer = parseFloat(mixerCost) || 0;
  const garnish = parseFloat(garnishCost) || 0;
  const totalCost = spiritCost + mixer + garnish;
  const targetPct = Math.min(Math.max(parseFloat(targetPourCostPct) || 20, 1), 60);
  const suggestedPrice = totalCost > 0 ? totalCost / (targetPct / 100) : 0;

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <LogoIcon size={28} />
            <span className="font-black text-gray-900 tracking-tight text-lg">Menu<span className="text-orange-500">Pricer</span></span>
          </Link>
          <span className="text-gray-300 text-sm">·</span>
          <span className="text-sm text-gray-500">Cocktail Pricing Calculator</span>
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
            Cocktail Pricing Calculator<br /><span className="text-orange-500">Pour Cost to Menu Price</span>
          </h1>
          <p className="text-sm text-gray-400 mb-4">Last reviewed: July 28, 2026</p>
          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Enter your spirit, mixer, and garnish costs to get the right cocktail price at your target pour cost.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-5">
            <h2 className="text-base font-black text-gray-900">Enter Your Numbers</h2>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Spirit Cost / oz ($)</label>
                <input type="number" min="0" step="0.1" placeholder="e.g. 0.85" value={spiritCostPerOz} onChange={(e) => setSpiritCostPerOz(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-lg font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400" />
                <p className="text-xs text-gray-400 mt-1">Bottle price ÷ 25.4 oz (750ml)</p>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Oz Poured</label>
                <input type="number" min="0" step="0.25" value={ozPoured} onChange={(e) => setOzPoured(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-lg font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Mixers / Juice / Syrup Cost ($)</label>
              <input type="number" min="0" step="0.05" placeholder="e.g. 0.40" value={mixerCost} onChange={(e) => setMixerCost(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-lg font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Garnish Cost ($)</label>
              <input type="number" min="0" step="0.05" value={garnishCost} onChange={(e) => setGarnishCost(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-lg font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Target Pour Cost %</label>
              <div className="flex items-center gap-3">
                <input type="range" min="10" max="40" step="1" value={targetPourCostPct} onChange={(e) => setTargetPourCostPct(e.target.value)}
                  className="flex-1 accent-orange-500" />
                <input type="number" min="1" max="60" value={targetPourCostPct} onChange={(e) => setTargetPourCostPct(e.target.value)}
                  className="w-20 text-center border border-gray-200 rounded-xl px-3 py-2 font-black text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400" />
                <span className="text-gray-500 font-bold">%</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-orange-500 rounded-2xl p-6 text-white">
              <p className="text-sm font-semibold text-orange-100 mb-1">Suggested Menu Price</p>
              <p className="text-5xl font-black">{suggestedPrice > 0 ? `$${suggestedPrice.toFixed(2)}` : "—"}</p>
              <p className="text-sm text-orange-100 mt-2">At {targetPct}% pour cost</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
              <p className="text-xs text-gray-500 mb-1">Total Ingredient Cost</p>
              <p className="text-xl font-black text-gray-900">{totalCost > 0 ? `$${totalCost.toFixed(2)}` : "—"}</p>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
              <p className="text-xs font-bold text-blue-700 uppercase tracking-wide mb-2">Formula</p>
              <p className="text-sm font-mono text-blue-800">
                Menu Price = Total Ingredient Cost ÷ Target Pour Cost %
              </p>
            </div>
            <Link href="/" className="block w-full bg-gray-900 hover:bg-gray-800 text-white font-bold px-6 py-3.5 rounded-xl text-center text-sm transition-colors">
              🤖 Get AI pricing for your full food menu too →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 border-t border-gray-100 py-14">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-black text-gray-900 mb-2">Pour Cost Benchmarks by Drink Type</h2>
          <p className="text-gray-500 text-sm mb-8">Target ranges — use these to see how your pricing compares.</p>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <th className="text-left px-5 py-3.5 font-bold text-gray-700">Drink Type</th>
                  <th className="text-left px-5 py-3.5 font-bold text-gray-700">Target Pour Cost</th>
                  <th className="text-left px-5 py-3.5 font-bold text-gray-700">Why</th>
                </tr>
              </thead>
              <tbody>
                {BENCHMARKS.map((b, i) => (
                  <tr key={i} className="border-b border-gray-50 hover:bg-orange-50/40 transition-colors">
                    <td className="px-5 py-3.5 font-semibold text-gray-800">{b.type}</td>
                    <td className="px-5 py-3.5"><span className="bg-orange-100 text-orange-700 font-bold px-2.5 py-0.5 rounded-full text-xs">{b.range}</span></td>
                    <td className="px-5 py-3.5 text-gray-600">{b.note}</td>
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
            <Link href="/restaurant-markup-calculator" className="hover:text-orange-500 transition-colors">Markup Calculator</Link>
            <Link href="/food-cost-calculator" className="hover:text-orange-500 transition-colors">Food Cost Calculator</Link>
            <Link href="/tools" className="hover:text-orange-500 transition-colors">All Tools</Link>
          </div>
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} MenuPricer</p>
        </div>
      </footer>
    </div>
  );
}
