"use client";

import { useState } from "react";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

const FAQS = [
  { q: "How do you price food truck menu items?", a: "Ingredient cost + labor per item + overhead per item = total cost. Divide by (1 - target margin). For a taco costing $1.50 in ingredients with $0.50 labor and $0.80 overhead = $2.80 total cost. At 65% margin: $2.80 ÷ 0.35 = $8 price." },
  { q: "What is the average profit margin for a food truck?", a: "Food trucks typically net 6–9% profit. Food cost averages 28–35%, labor 25–30%, overhead 15–25% (truck payment, fuel, permits, commissary). Keep prime cost (food + labor) below 60–65% of revenue." },
  { q: "How much overhead should I add per food truck item?", a: "Calculate daily fixed costs (truck payment, insurance, fuel, permits, commissary) and divide by expected daily covers. If overhead is $350/day and you sell 175 items, overhead per item is $2. Build this into every price." },
  { q: "Should food truck prices be higher than restaurant prices?", a: "Not necessarily. Food trucks have lower overhead than restaurants but higher per-event costs. Food truck prices are typically similar to fast casual restaurants — $8–$15 per item — and customers expect value for the experience." },
  { q: "What is a good food cost percentage for a food truck?", a: "25–35% food cost is healthy for most food trucks. Items with lower food cost (drinks, sides) subsidize higher-cost proteins. Track your blended food cost percentage across the full menu, not just individual items." },
];

export default function FoodTruckCalculatorClient() {
  const [dishName, setDishName] = useState("");
  const [ingredientCost, setIngredientCost] = useState("");
  const [prepMins, setPrepMins] = useState("5");
  const [staffRate, setStaffRate] = useState("18");
  const [dailyFixed, setDailyFixed] = useState("350");
  const [dailyCovers, setDailyCovers] = useState("120");
  const [targetMargin, setTargetMargin] = useState("65");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const ic = parseFloat(ingredientCost) || 0;
  const laborPerItem = (parseFloat(prepMins) / 60) * (parseFloat(staffRate) || 18);
  const overheadPerItem = (parseFloat(dailyFixed) || 0) / Math.max(1, parseInt(dailyCovers) || 120);
  const totalCost = ic + laborPerItem + overheadPerItem;
  const tm = Math.max(1, Math.min(99, parseFloat(targetMargin) || 65));
  const suggestedPrice = totalCost > 0 ? totalCost / (1 - tm / 100) : 0;
  const foodCostPct = suggestedPrice > 0 ? (ic / suggestedPrice) * 100 : 0;
  const profitPerItem = suggestedPrice - totalCost;

  const fcColor = foodCostPct === 0 ? "text-gray-400" : foodCostPct <= 35 ? "text-green-600" : "text-orange-500";

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <LogoIcon size={28} />
            <span className="font-black text-gray-900 tracking-tight text-lg">Menu<span className="text-orange-500">Pricer</span></span>
          </Link>
          <span className="text-gray-300 text-sm">·</span>
          <span className="text-sm text-gray-500">Food Truck Pricing</span>
          <Link href="/" className="ml-auto text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors">AI Pricing Tool →</Link>
        </div>
      </header>

      <section className="relative overflow-hidden bg-white border-b border-gray-100">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:48px_48px] opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/8 rounded-full blur-3xl" />
        <div className="relative max-w-3xl mx-auto px-6 pt-14 pb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1.5 rounded-full mb-5 uppercase tracking-wide">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />Free Tool · Built for Food Trucks
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-4">
            Food Truck Pricing Calculator<br /><span className="text-orange-500">Price Street Food Profitably</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Includes ingredients, prep labor, and daily truck overhead — see the real cost behind every item and the price you need to hit your margin.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-5">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-4">
              <h2 className="text-base font-black text-gray-900">Per-Item Costs</h2>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Item Name</label>
                <input type="text" placeholder="e.g. Street Taco" value={dishName} onChange={(e) => setDishName(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-orange-400" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Ingredient Cost per Item ($)</label>
                <input type="number" min="0" step="0.01" placeholder="e.g. 1.50" value={ingredientCost} onChange={(e) => setIngredientCost(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-lg font-bold focus:outline-none focus:ring-2 focus:ring-orange-400" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Prep Time (mins)</label>
                  <input type="number" min="0" step="0.5" value={prepMins} onChange={(e) => setPrepMins(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 font-bold text-center focus:outline-none focus:ring-2 focus:ring-orange-400" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Staff Rate ($/hr)</label>
                  <input type="number" min="0" step="1" value={staffRate} onChange={(e) => setStaffRate(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 font-bold text-center focus:outline-none focus:ring-2 focus:ring-orange-400" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-4">
              <h2 className="text-base font-black text-gray-900">Truck Overhead</h2>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Daily Fixed Costs ($)</label>
                <input type="number" min="0" step="10" value={dailyFixed} onChange={(e) => setDailyFixed(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 font-bold focus:outline-none focus:ring-2 focus:ring-orange-400" />
                <p className="text-xs text-gray-400 mt-1">Truck payment + fuel + permits + commissary + insurance</p>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Expected Daily Covers</label>
                <input type="number" min="1" step="5" value={dailyCovers} onChange={(e) => setDailyCovers(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 font-bold focus:outline-none focus:ring-2 focus:ring-orange-400" />
                <p className="text-xs text-gray-400 mt-1">Items sold per day (overhead per item = {overheadPerItem > 0 ? `$${overheadPerItem.toFixed(2)}` : "—"})</p>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Target Gross Margin</label>
                <div className="flex items-center gap-3">
                  <input type="range" min="40" max="80" step="5" value={targetMargin} onChange={(e) => setTargetMargin(e.target.value)} className="flex-1 accent-orange-500" />
                  <span className="font-black text-orange-500 w-10 text-right">{targetMargin}%</span>
                </div>
                <p className="text-xs text-gray-400 mt-1">Food trucks typically target 60–70% gross margin</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-orange-500 rounded-2xl p-6 text-white">
              <p className="text-sm font-semibold text-orange-100 mb-1">{dishName || "Suggested Price"}</p>
              <p className="text-5xl font-black">{suggestedPrice > 0 ? `$${suggestedPrice.toFixed(2)}` : "—"}</p>
              <p className="text-sm text-orange-100 mt-2">At {tm}% gross margin</p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <p className="text-xs text-gray-500 mb-1">Total Cost</p>
                <p className="text-xl font-black text-gray-900">{totalCost > 0 ? `$${totalCost.toFixed(2)}` : "—"}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <p className="text-xs text-gray-500 mb-1">Food Cost %</p>
                <p className={`text-xl font-black ${fcColor}`}>{foodCostPct > 0 ? `${foodCostPct.toFixed(1)}%` : "—"}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <p className="text-xs text-gray-500 mb-1">Profit/Item</p>
                <p className="text-xl font-black text-green-600">{profitPerItem > 0 ? `$${profitPerItem.toFixed(2)}` : "—"}</p>
              </div>
            </div>

            {totalCost > 0 && (
              <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-3">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Cost Breakdown</p>
                {[
                  { label: "Ingredients", value: ic, color: "bg-orange-400" },
                  { label: "Labor", value: laborPerItem, color: "bg-blue-400" },
                  { label: "Overhead", value: overheadPerItem, color: "bg-purple-400" },
                ].map(({ label, value, color }) => (
                  <div key={label}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-500">{label}</span>
                      <span className="font-bold">${value.toFixed(2)}</span>
                    </div>
                    <div className="bg-gray-100 rounded-full h-1.5">
                      <div className={`h-1.5 rounded-full ${color}`} style={{ width: `${totalCost > 0 ? Math.min(100, (value / totalCost) * 100) : 0}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            )}

            <Link href="/" className="block w-full bg-gray-900 hover:bg-gray-800 text-white font-bold px-6 py-3.5 rounded-xl text-center text-sm transition-colors">
              🤖 Get AI pricing for your full menu →
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
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">Want AI to price your whole food truck menu?</h2>
          <p className="text-orange-100 mb-8">Type a dish name — MenuPricer estimates ingredient costs, calculates food cost %, and gives 3 pricing tiers with delivery markup. 30 seconds per dish.</p>
          <Link href="/" className="inline-block bg-white text-orange-600 font-black px-8 py-3.5 rounded-xl text-base hover:bg-orange-50 transition-colors shadow-lg shadow-orange-600/20">Try MenuPricer Free →</Link>
          <p className="text-orange-200 text-xs mt-4">No credit card · No sign-up required</p>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-100 py-6">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2"><LogoIcon size={20} /><span className="font-black text-gray-900 text-sm">Menu<span className="text-orange-500">Pricer</span></span></div>
          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
            <Link href="/food-cost-calculator" className="hover:text-orange-500 transition-colors">Food Cost Calculator</Link>
            <Link href="/catering-pricing-calculator" className="hover:text-orange-500 transition-colors">Catering Calculator</Link>
            <Link href="/restaurant-profit-calculator" className="hover:text-orange-500 transition-colors">Profit Calculator</Link>
          </div>
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} MenuPricer</p>
        </div>
      </footer>
    </div>
  );
}
