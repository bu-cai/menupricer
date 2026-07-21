"use client";

import { useState } from "react";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

const FAQS = [
  { q: "How do you price baked goods for sale?", a: "Add ingredient cost + labor cost (your hourly rate × time) + overhead per batch. Then divide by number of units and apply your target margin. Most bakeries target 25–35% food cost on ingredients, with a 3× to 4× markup on total costs." },
  { q: "What is a good profit margin for a bakery?", a: "Bakery net profit margins typically range from 4–9%. Ingredient cost (food cost %) should be 28–35%. With labor and overhead, total costs run 70–80% of revenue, leaving 20–30% gross margin." },
  { q: "Should I include my labor time in bakery pricing?", a: "Always include your time at a fair hourly rate. Home bakers commonly underprice by ignoring labor. If you spend 2 hours making 24 cookies and value your time at $20/hr, that adds $0.83 per cookie in labor before ingredients." },
  { q: "How do I price a custom cake?", a: "Calculate ingredient cost + labor hours × your rate + overhead contribution. Add a design complexity premium (10–30% for intricate decorations). Most custom cake orders are priced at $3–$8+ per serving depending on complexity and local market." },
  { q: "What is the markup formula for baked goods?", a: "Selling Price = Total Cost Per Unit × (1 + Target Markup %). For a 200% markup on a $1.50 total cost per cookie: $1.50 × 3 = $4.50 per cookie. This covers all costs and provides a healthy profit margin." },
];

export default function BakeryCalculatorClient() {
  const [productName, setProductName] = useState("");
  const [batchSize, setBatchSize] = useState("12");
  const [ingredientCost, setIngredientCost] = useState("");
  const [laborHours, setLaborHours] = useState("");
  const [hourlyRate, setHourlyRate] = useState("20");
  const [overheadPct, setOverheadPct] = useState("15");
  const [targetMarkup, setTargetMarkup] = useState("200");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const ic = parseFloat(ingredientCost) || 0;
  const hours = parseFloat(laborHours) || 0;
  const rate = parseFloat(hourlyRate) || 20;
  const batch = Math.max(1, parseInt(batchSize) || 12);
  const ohPct = parseFloat(overheadPct) || 15;
  const markup = parseFloat(targetMarkup) || 200;

  const laborCostBatch = hours * rate;
  const totalBatchCost = ic + laborCostBatch;
  const overheadCost = totalBatchCost * (ohPct / 100);
  const totalWithOverhead = totalBatchCost + overheadCost;
  const costPerUnit = totalWithOverhead / batch;
  const sellingPrice = costPerUnit * (1 + markup / 100);
  const profitPerUnit = sellingPrice - costPerUnit;
  const profitPerBatch = profitPerUnit * batch;
  const foodCostPct = sellingPrice > 0 ? (ic / batch / sellingPrice) * 100 : 0;

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <LogoIcon size={28} />
            <span className="font-black text-gray-900 tracking-tight text-lg">Menu<span className="text-orange-500">Pricer</span></span>
          </Link>
          <span className="text-gray-300 text-sm">·</span>
          <span className="text-sm text-gray-500">Bakery Pricing Calculator</span>
          <Link href="/" className="ml-auto text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors">AI Pricing Tool →</Link>
        </div>
      </header>

      <section className="relative overflow-hidden bg-white border-b border-gray-100">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:48px_48px] opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/8 rounded-full blur-3xl" />
        <div className="relative max-w-3xl mx-auto px-6 pt-14 pb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1.5 rounded-full mb-5 uppercase tracking-wide">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />Free Tool · Home Bakers & Professional Bakeries
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-4">
            Bakery Pricing Calculator<br /><span className="text-orange-500">Price Any Baked Good Correctly</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Include ingredients, labor time, and overhead to find the right selling price for cakes, cookies, bread, and pastries.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-5">
            <h2 className="text-base font-black text-gray-900">Your Batch Details</h2>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Product Name</label>
                <input type="text" placeholder="e.g. Chocolate Cake" value={productName} onChange={(e) => setProductName(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-orange-400" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Units per Batch</label>
                <input type="number" min="1" value={batchSize} onChange={(e) => setBatchSize(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold text-center focus:outline-none focus:ring-2 focus:ring-orange-400" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Total Ingredient Cost (per batch) $</label>
              <input type="number" min="0" step="0.01" placeholder="e.g. 12.50" value={ingredientCost} onChange={(e) => setIngredientCost(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-lg font-bold focus:outline-none focus:ring-2 focus:ring-orange-400" />
              <p className="text-xs text-gray-400 mt-1">All ingredients combined for one batch</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Labor Hours</label>
                <input type="number" min="0" step="0.25" placeholder="e.g. 2" value={laborHours} onChange={(e) => setLaborHours(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 font-bold focus:outline-none focus:ring-2 focus:ring-orange-400" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Your Hourly Rate $</label>
                <input type="number" min="0" step="1" value={hourlyRate} onChange={(e) => setHourlyRate(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 font-bold focus:outline-none focus:ring-2 focus:ring-orange-400" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Overhead % (utilities, packaging, rent)</label>
              <div className="flex items-center gap-3">
                <input type="range" min="0" max="40" step="1" value={overheadPct} onChange={(e) => setOverheadPct(e.target.value)} className="flex-1 accent-orange-500" />
                <span className="w-12 text-center font-black text-orange-500">{overheadPct}%</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Target Markup on Total Cost %</label>
              <div className="flex items-center gap-3">
                <input type="range" min="50" max="500" step="10" value={targetMarkup} onChange={(e) => setTargetMarkup(e.target.value)} className="flex-1 accent-orange-500" />
                <span className="w-14 text-center font-black text-orange-500">{targetMarkup}%</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-orange-500 rounded-2xl p-6 text-white">
              <p className="text-sm font-semibold text-orange-100 mb-1">Selling Price Per Unit</p>
              <p className="text-5xl font-black">{sellingPrice > 0 ? `$${sellingPrice.toFixed(2)}` : "—"}</p>
              <p className="text-sm text-orange-100 mt-2">{productName || "Per item"} · {targetMarkup}% markup on total cost</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <p className="text-xs text-gray-500 mb-1">Cost Per Unit</p>
                <p className="text-2xl font-black text-gray-900">{costPerUnit > 0 ? `$${costPerUnit.toFixed(3)}` : "—"}</p>
                <p className="text-xs text-gray-400 mt-1">incl. labor + overhead</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <p className="text-xs text-gray-500 mb-1">Profit Per Unit</p>
                <p className="text-2xl font-black text-green-600">{profitPerUnit > 0 ? `$${profitPerUnit.toFixed(2)}` : "—"}</p>
              </div>
            </div>

            {profitPerBatch > 0 && (
              <div className="bg-green-50 border border-green-100 rounded-xl p-4">
                <p className="text-xs font-bold text-green-700 uppercase tracking-wide mb-2">Batch Summary</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div><span className="text-gray-500">Ingredient cost:</span> <span className="font-bold">${ic.toFixed(2)}</span></div>
                  <div><span className="text-gray-500">Labor cost:</span> <span className="font-bold">${laborCostBatch.toFixed(2)}</span></div>
                  <div><span className="text-gray-500">Overhead:</span> <span className="font-bold">${overheadCost.toFixed(2)}</span></div>
                  <div><span className="text-gray-500">Profit/batch:</span> <span className="font-bold text-green-600">${profitPerBatch.toFixed(2)}</span></div>
                </div>
              </div>
            )}

            <Link href="/" className="block w-full bg-gray-900 hover:bg-gray-800 text-white font-bold px-6 py-3.5 rounded-xl text-center text-sm transition-colors">
              🤖 AI pricing for restaurant-style menu items →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 border-t border-gray-100 py-14">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-black text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-2">
            {FAQS.map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between px-5 py-4 text-left text-sm font-semibold text-gray-800 hover:text-orange-600 transition-colors">
                  <span>{item.q}</span>
                  <span className={`text-orange-400 transition-transform duration-200 ml-4 shrink-0 ${openFaq === i ? "rotate-180" : ""}`}>▾</span>
                </button>
                {openFaq === i && <div className="px-5 pb-4 text-sm text-gray-500 leading-relaxed border-t border-gray-50 pt-3">{item.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-orange-500 py-14">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">Sell at a café or restaurant?</h2>
          <p className="text-orange-100 mb-8">MenuPricer helps restaurant-style operations price dishes with AI — estimating ingredient costs, calculating 3 price tiers, and writing menu descriptions. Free to start.</p>
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
            <Link href="/restaurant-markup-calculator" className="hover:text-orange-500 transition-colors">Markup Calculator</Link>
            <Link href="/restaurant-profit-calculator" className="hover:text-orange-500 transition-colors">Profit Calculator</Link>
          </div>
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} MenuPricer</p>
        </div>
      </footer>
    </div>
  );
}
