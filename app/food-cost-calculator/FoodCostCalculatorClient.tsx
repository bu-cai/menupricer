"use client";

import { useState } from "react";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

function clamp(v: number, min: number, max: number) {
  return Math.min(Math.max(v, min), max);
}

const BENCHMARKS = [
  { type: "Fine Dining", range: "25–35%", ideal: "28%" },
  { type: "Casual Dining", range: "28–35%", ideal: "32%" },
  { type: "Fast Casual", range: "25–32%", ideal: "28%" },
  { type: "Food Truck", range: "25–35%", ideal: "30%" },
  { type: "Bakery / Café", range: "25–35%", ideal: "30%" },
  { type: "Pizza / Pasta", range: "28–38%", ideal: "33%" },
];

const FAQS = [
  {
    q: "What is food cost percentage?",
    a: "Food cost percentage is the ratio of ingredient costs to the selling price of a dish. For example, if a dish costs $3 to make and sells for $10, the food cost percentage is 30%. Most restaurants target 28–35%.",
  },
  {
    q: "What is the food cost formula?",
    a: "Food Cost % = (Ingredient Cost ÷ Selling Price) × 100. To find the ideal selling price: Selling Price = Ingredient Cost ÷ Target Food Cost %. For example, if ingredients cost $4 and you want a 30% food cost, price the dish at $4 ÷ 0.30 = $13.33.",
  },
  {
    q: "What is a good food cost percentage for a restaurant?",
    a: "Most restaurants target 28–35% food cost. Fine dining restaurants can afford higher percentages (30–38%) because they charge premium prices. Fast food and fast casual target lower percentages (25–30%) due to high volume.",
  },
  {
    q: "Does food cost percentage include labor?",
    a: "No — food cost percentage only covers the cost of ingredients. Your total cost includes labor (typically 25–35% of revenue) and overhead (rent, utilities, etc.). A healthy restaurant targets total costs below 65% of revenue.",
  },
  {
    q: "How do delivery platforms affect food cost?",
    a: "Apps like DoorDash and Uber Eats charge 15–30% commission. This means your effective food cost percentage rises significantly on delivery orders. Many restaurants add a 10–20% markup for delivery prices to maintain margins.",
  },
  {
    q: "How do I reduce food cost percentage?",
    a: "Key strategies: negotiate better supplier prices, reduce portion sizes slightly, minimize food waste, use seasonal ingredients, and design a tight menu (fewer dishes = better purchasing power). A 2–3% reduction in food cost goes directly to profit.",
  },
];

export default function FoodCostCalculatorClient() {
  const [ingredientCost, setIngredientCost] = useState("");
  const [targetPct, setTargetPct] = useState("30");
  const [sellingPrice, setSellingPrice] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const ic = parseFloat(ingredientCost) || 0;
  const tp = clamp(parseFloat(targetPct) || 30, 1, 99);
  const sp = parseFloat(sellingPrice) || 0;

  const suggestedPrice = ic > 0 ? ic / (tp / 100) : 0;
  const actualPct = ic > 0 && sp > 0 ? (ic / sp) * 100 : 0;
  const grossMargin = sp > 0 ? ((sp - ic) / sp) * 100 : 0;
  const profitPerDish = sp > 0 ? sp - ic : 0;

  const pctColor =
    actualPct === 0
      ? "text-gray-400"
      : actualPct < 28
      ? "text-green-600"
      : actualPct <= 35
      ? "text-orange-500"
      : "text-red-500";

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
          <span className="text-sm text-gray-500">Food Cost Calculator</span>
          <Link
            href="/"
            className="ml-auto text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors"
          >
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
            Free Tool · No Sign-up Required
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-4">
            Food Cost Calculator<br />
            <span className="text-orange-500">for Restaurants</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Calculate your food cost percentage, find the ideal menu price, and see your profit margin — instantly.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Inputs */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-5">
            <h2 className="text-base font-black text-gray-900">Enter Your Numbers</h2>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Ingredient Cost per Serving ($)
              </label>
              <input
                type="number"
                min="0"
                step="0.01"
                placeholder="e.g. 3.50"
                value={ingredientCost}
                onChange={(e) => setIngredientCost(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-lg font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
              />
              <p className="text-xs text-gray-400 mt-1">Total cost of all ingredients for one serving</p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Target Food Cost Percentage (%)
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="15"
                  max="50"
                  step="1"
                  value={targetPct}
                  onChange={(e) => setTargetPct(e.target.value)}
                  className="flex-1 accent-orange-500"
                />
                <span className="w-14 text-center font-black text-orange-500 text-lg">{targetPct}%</span>
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>15% (high margin)</span>
                <span>50% (low margin)</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Your Current Selling Price ($) <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <input
                type="number"
                min="0"
                step="0.01"
                placeholder="e.g. 12.00"
                value={sellingPrice}
                onChange={(e) => setSellingPrice(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-lg font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
              />
              <p className="text-xs text-gray-400 mt-1">Fill this to check if your current price is profitable</p>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-4">
            {/* Suggested price */}
            <div className="bg-orange-500 rounded-2xl p-6 text-white">
              <p className="text-sm font-semibold text-orange-100 mb-1">Suggested Menu Price</p>
              <p className="text-5xl font-black">
                {suggestedPrice > 0 ? `$${suggestedPrice.toFixed(2)}` : "—"}
              </p>
              <p className="text-sm text-orange-100 mt-2">
                At {tp}% food cost · {ic > 0 ? (100 - tp).toFixed(0) : "—"}% gross margin
              </p>
            </div>

            {/* Metric cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <p className="text-xs text-gray-500 mb-1">Your Food Cost %</p>
                <p className={`text-2xl font-black ${pctColor}`}>
                  {actualPct > 0 ? `${actualPct.toFixed(1)}%` : "—"}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {actualPct === 0 ? "Enter selling price above" : actualPct <= 35 ? "✓ Within target range" : "⚠ Above ideal range"}
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <p className="text-xs text-gray-500 mb-1">Gross Margin</p>
                <p className="text-2xl font-black text-gray-900">
                  {grossMargin > 0 ? `${grossMargin.toFixed(1)}%` : "—"}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {profitPerDish > 0 ? `$${profitPerDish.toFixed(2)} profit/dish` : "Enter price above"}
                </p>
              </div>
            </div>

            {/* Formula box */}
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
              <p className="text-xs font-bold text-blue-700 uppercase tracking-wide mb-2">Formula Used</p>
              <p className="text-sm font-mono text-blue-800">
                Price = ${ic > 0 ? ic.toFixed(2) : "cost"} ÷ {(tp / 100).toFixed(2)} = {suggestedPrice > 0 ? `$${suggestedPrice.toFixed(2)}` : "?"}
              </p>
            </div>

            {/* CTA to AI tool */}
            <Link
              href="/"
              className="block w-full bg-gray-900 hover:bg-gray-800 text-white font-bold px-6 py-3.5 rounded-xl text-center text-sm transition-colors"
            >
              🤖 Get AI-powered pricing analysis →
            </Link>
            <p className="text-xs text-center text-gray-400">
              AI gives you 3 pricing tiers + delivery markup + menu copy
            </p>
          </div>
        </div>
      </section>

      {/* Industry Benchmarks */}
      <section className="bg-gray-50 border-t border-gray-100 py-14">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-black text-gray-900 mb-2">Food Cost % Benchmarks by Restaurant Type</h2>
          <p className="text-gray-500 text-sm mb-8">Industry averages — use these to check if your costs are competitive.</p>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <th className="text-left px-5 py-3.5 font-bold text-gray-700">Restaurant Type</th>
                  <th className="text-left px-5 py-3.5 font-bold text-gray-700">Typical Range</th>
                  <th className="text-left px-5 py-3.5 font-bold text-gray-700">Sweet Spot</th>
                  <th className="text-left px-5 py-3.5 font-bold text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody>
                {BENCHMARKS.map((b, i) => (
                  <tr key={i} className="border-b border-gray-50 hover:bg-orange-50/40 transition-colors">
                    <td className="px-5 py-3.5 font-semibold text-gray-800">{b.type}</td>
                    <td className="px-5 py-3.5 text-gray-600">{b.range}</td>
                    <td className="px-5 py-3.5">
                      <span className="bg-orange-100 text-orange-700 font-bold px-2.5 py-0.5 rounded-full text-xs">{b.ideal}</span>
                    </td>
                    <td className="px-5 py-3.5 text-gray-400 text-xs">
                      {actualPct > 0 && ic > 0 && sp > 0
                        ? actualPct <= parseFloat(b.range.split("–")[1])
                          ? <span className="text-green-600 font-semibold">✓ You're good</span>
                          : <span className="text-red-500 font-semibold">⚠ Too high</span>
                        : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How it works / educational content */}
      <section className="max-w-4xl mx-auto px-6 py-14">
        <h2 className="text-2xl font-black text-gray-900 mb-8">How to Calculate Food Cost Percentage</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            {
              step: "1",
              title: "List all ingredients",
              desc: "Write down every ingredient in one serving of the dish — including garnishes, sauces, and oils. Don't forget packaging if it's for delivery.",
            },
            {
              step: "2",
              title: "Calculate total ingredient cost",
              desc: "For each ingredient: (Amount used ÷ Package size) × Package cost. Add them all up to get your total ingredient cost per serving.",
            },
            {
              step: "3",
              title: "Apply the formula",
              desc: "Food Cost % = (Ingredient Cost ÷ Menu Price) × 100. Target 28–35% for most restaurant types. Divide cost by target % to get your ideal price.",
            },
          ].map(({ step, title, desc }) => (
            <div key={step} className="flex flex-col gap-3">
              <div className="w-9 h-9 rounded-full bg-orange-100 text-orange-600 font-black text-base flex items-center justify-center shrink-0">{step}</div>
              <h3 className="font-bold text-gray-800 text-sm">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Formula callout */}
        <div className="bg-gray-900 rounded-2xl p-6 text-white">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-4">The Two Key Formulas</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-xl p-4">
              <p className="text-xs text-gray-400 mb-2">Check if your price is right</p>
              <p className="font-mono text-orange-300 text-sm">Food Cost % =</p>
              <p className="font-mono text-white text-sm">Ingredient Cost ÷ Price × 100</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <p className="text-xs text-gray-400 mb-2">Find the right price</p>
              <p className="font-mono text-orange-300 text-sm">Menu Price =</p>
              <p className="font-mono text-white text-sm">Ingredient Cost ÷ Target Cost %</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 border-t border-gray-100 py-14">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-black text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-2">
            {FAQS.map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left text-sm font-semibold text-gray-800 hover:text-orange-600 transition-colors"
                >
                  <span>{item.q}</span>
                  <span className={`text-orange-400 transition-transform duration-200 ml-4 shrink-0 ${openFaq === i ? "rotate-180" : ""}`}>▾</span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-sm text-gray-500 leading-relaxed border-t border-gray-50 pt-3">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-orange-500 py-14">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
            Want AI to do all this for you?
          </h2>
          <p className="text-orange-100 mb-8 text-base">
            Just type your dish name — MenuPricer estimates ingredients, calculates costs, and gives you 3 pricing tiers with menu copy. In 30 seconds.
          </p>
          <Link
            href="/"
            className="inline-block bg-white text-orange-600 font-black px-8 py-3.5 rounded-xl text-base hover:bg-orange-50 transition-colors shadow-lg shadow-orange-600/20"
          >
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
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <Link href="/" className="hover:text-orange-500 transition-colors">AI Pricing Tool</Link>
            <Link href="/food-cost-calculator" className="hover:text-orange-500 transition-colors">Food Cost Calculator</Link>
          </div>
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} MenuPricer</p>
        </div>
      </footer>
    </div>
  );
}
