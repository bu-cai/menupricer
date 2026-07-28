"use client";

import { useState } from "react";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

const FAQS = [
  { q: "What is portion cost?", a: "Portion cost is the ingredient cost of a single serving — for example, the cost of the 6oz portion of salmon in a dish, before adding sides and garnish. It's the building block you sum across every component to get a dish's full plate cost." },
  { q: "How do I calculate cost per portion from a batch recipe?", a: "Divide the total cost of the batch by the number of portions it yields. If a soup batch costs $18 and yields 12 servings, cost per portion is $1.50. Always count real portions the batch actually produced, not the theoretical number a recipe assumes." },
  { q: "Why does portion cost drift over time?", a: "Portion drift happens when the amount actually served creeps above the recipe spec — a slightly heavier scoop, a bigger pour — without anyone deciding to change it. It's one of the most common invisible sources of rising food cost because no single instance looks significant." },
  { q: "Should I use purchase weight or yield weight for portion cost?", a: "Yield weight — what survives trimming and cooking loss. Costing against raw purchase weight understates true portion cost, especially for proteins that lose 20-30% of their weight before reaching the plate." },
];

export default function PortionCostCalculatorClient() {
  const [batchCost, setBatchCost] = useState("");
  const [portions, setPortions] = useState("");
  const [targetFoodCostPct, setTargetFoodCostPct] = useState("30");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const bc = parseFloat(batchCost) || 0;
  const p = parseFloat(portions) || 0;
  const targetPct = Math.min(Math.max(parseFloat(targetFoodCostPct) || 30, 1), 95);

  const costPerPortion = p > 0 ? bc / p : 0;
  const suggestedPrice = costPerPortion > 0 ? costPerPortion / (targetPct / 100) : 0;

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <LogoIcon size={28} />
            <span className="font-black text-gray-900 tracking-tight text-lg">Menu<span className="text-orange-500">Pricer</span></span>
          </Link>
          <span className="text-gray-300 text-sm">·</span>
          <span className="text-sm text-gray-500">Portion Cost Calculator</span>
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
            Portion Cost Calculator<br /><span className="text-orange-500">Batch Cost to Cost Per Serving</span>
          </h1>
          <p className="text-sm text-gray-400 mb-4">Last reviewed: July 28, 2026</p>
          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Enter batch cost and portions produced to get cost per serving — and the price it takes to hit your target food cost.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-5">
            <h2 className="text-base font-black text-gray-900">Enter Your Numbers</h2>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Total Batch Cost ($)</label>
              <input type="number" min="0" step="0.5" placeholder="e.g. 18.00" value={batchCost} onChange={(e) => setBatchCost(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-lg font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400" />
              <p className="text-xs text-gray-400 mt-1">Cost of every ingredient in the full batch, as actually made.</p>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Portions Produced</label>
              <input type="number" min="0" step="1" placeholder="e.g. 12" value={portions} onChange={(e) => setPortions(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-lg font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400" />
              <p className="text-xs text-gray-400 mt-1">Count real portions the batch produced, not a theoretical number.</p>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Target Food Cost %</label>
              <div className="flex items-center gap-3">
                <input type="range" min="10" max="60" step="1" value={targetFoodCostPct} onChange={(e) => setTargetFoodCostPct(e.target.value)}
                  className="flex-1 accent-orange-500" />
                <input type="number" min="1" max="95" value={targetFoodCostPct} onChange={(e) => setTargetFoodCostPct(e.target.value)}
                  className="w-20 text-center border border-gray-200 rounded-xl px-3 py-2 font-black text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400" />
                <span className="text-gray-500 font-bold">%</span>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
              <p className="text-xs font-bold text-blue-700 uppercase tracking-wide mb-2">Formula</p>
              <p className="text-sm font-mono text-blue-800">
                Cost per Portion = Batch Cost ÷ Portions Produced
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-orange-500 rounded-2xl p-6 text-white">
              <p className="text-sm font-semibold text-orange-100 mb-1">Cost per Portion</p>
              <p className="text-5xl font-black">{costPerPortion > 0 ? `$${costPerPortion.toFixed(2)}` : "—"}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
              <p className="text-xs text-gray-500 mb-1">Suggested Menu Price</p>
              <p className="text-xl font-black text-gray-900">{suggestedPrice > 0 ? `$${suggestedPrice.toFixed(2)}` : "—"}</p>
              <p className="text-xs text-gray-400 mt-1">At {targetPct}% target food cost</p>
            </div>
            <Link href="/" className="block w-full bg-gray-900 hover:bg-gray-800 text-white font-bold px-6 py-3.5 rounded-xl text-center text-sm transition-colors">
              🤖 Cost a full dish, not just one component →
            </Link>
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
            <Link href="/recipe-cost-calculator" className="hover:text-orange-500 transition-colors">Recipe Cost Calculator</Link>
            <Link href="/food-cost-calculator" className="hover:text-orange-500 transition-colors">Food Cost Calculator</Link>
            <Link href="/tools" className="hover:text-orange-500 transition-colors">All Tools</Link>
          </div>
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} MenuPricer</p>
        </div>
      </footer>
    </div>
  );
}
