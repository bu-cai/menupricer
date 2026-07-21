"use client";

import { useState } from "react";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

interface Ingredient {
  name: string;
  amount: string;
  unit: string;
  packageSize: string;
  packageCost: string;
}

const EMPTY_ING = (): Ingredient => ({ name: "", amount: "", unit: "g", packageSize: "", packageCost: "" });

const UNITS = ["g", "kg", "oz", "lb", "ml", "L", "cup", "tbsp", "tsp", "pc", "slice"];

const FAQS = [
  { q: "How do you calculate recipe cost?", a: "For each ingredient: (Amount used ÷ Package size) × Package price. Sum all ingredient costs to get total recipe cost. Divide by number of servings for cost per serving." },
  { q: "What should I charge for a dish?", a: "Divide cost per serving by your target food cost percentage. At 30% food cost: $3.50 cost ÷ 0.30 = $11.67 suggested price. Most restaurants target 28–35%." },
  { q: "Does recipe cost include labor?", a: "Recipe cost covers ingredients only. Labor (25–35% of revenue) and overhead are covered by keeping food cost below 35%, leaving room for these expenses plus profit." },
  { q: "What is a waste factor?", a: "Waste factor accounts for trimming, cooking loss, and spoilage. If a 1kg piece of beef yields 700g after trimming, the yield is 70%. Divide ingredient cost by yield % to get true cost." },
  { q: "How accurate is recipe costing?", a: "Recipe costing based on current supplier invoices is highly accurate. Use your actual purchase prices — not retail — and weigh portions consistently for best results." },
];

export default function RecipeCostCalculatorClient() {
  const [recipeName, setRecipeName] = useState("");
  const [servings, setServings] = useState("1");
  const [targetPct, setTargetPct] = useState("30");
  const [ingredients, setIngredients] = useState<Ingredient[]>([EMPTY_ING(), EMPTY_ING(), EMPTY_ING()]);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const addRow = () => setIngredients((prev) => [...prev, EMPTY_ING()]);
  const removeRow = (i: number) => setIngredients((prev) => prev.filter((_, idx) => idx !== i));
  const updateIng = (i: number, field: keyof Ingredient, val: string) =>
    setIngredients((prev) => prev.map((ing, idx) => (idx === i ? { ...ing, [field]: val } : ing)));

  const ingCosts = ingredients.map((ing) => {
    const amount = parseFloat(ing.amount) || 0;
    const pkgSize = parseFloat(ing.packageSize) || 0;
    const pkgCost = parseFloat(ing.packageCost) || 0;
    if (amount <= 0 || pkgSize <= 0 || pkgCost <= 0) return 0;
    return (amount / pkgSize) * pkgCost;
  });

  const totalRecipeCost = ingCosts.reduce((s, c) => s + c, 0);
  const numServings = Math.max(1, parseFloat(servings) || 1);
  const costPerServing = totalRecipeCost / numServings;
  const tp = Math.max(1, Math.min(99, parseFloat(targetPct) || 30));
  const suggestedPrice = costPerServing > 0 ? costPerServing / (tp / 100) : 0;
  const grossMargin = 100 - tp;

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <LogoIcon size={28} />
            <span className="font-black text-gray-900 tracking-tight text-lg">Menu<span className="text-orange-500">Pricer</span></span>
          </Link>
          <span className="text-gray-300 text-sm">·</span>
          <span className="text-sm text-gray-500">Recipe Cost Calculator</span>
          <Link href="/" className="ml-auto text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors">AI Pricing Tool →</Link>
        </div>
      </header>

      <section className="relative overflow-hidden bg-white border-b border-gray-100">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:48px_48px] opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/8 rounded-full blur-3xl" />
        <div className="relative max-w-3xl mx-auto px-6 pt-14 pb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1.5 rounded-full mb-5 uppercase tracking-wide">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
            Free Tool · No Sign-up Required
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-4">
            Recipe Cost Calculator<br /><span className="text-orange-500">for Restaurants</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Add your ingredients to get exact recipe cost, cost per serving, and the ideal menu price — instantly.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left: inputs */}
          <div className="lg:col-span-3 space-y-5">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <div className="flex items-center justify-between mb-5">
                <div className="flex-1 mr-4">
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Recipe Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Grilled Salmon"
                    value={recipeName}
                    onChange={(e) => setRecipeName(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Servings</label>
                  <input
                    type="number"
                    min="1"
                    value={servings}
                    onChange={(e) => setServings(e.target.value)}
                    className="w-20 border border-gray-200 rounded-xl px-3 py-2.5 text-sm font-bold text-gray-900 text-center focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>
              </div>

              <h2 className="text-sm font-black text-gray-900 mb-3">Ingredients</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left border-b border-gray-100">
                      <th className="pb-2 font-semibold text-gray-500 text-xs pr-2">Ingredient</th>
                      <th className="pb-2 font-semibold text-gray-500 text-xs pr-2">Amount</th>
                      <th className="pb-2 font-semibold text-gray-500 text-xs pr-2">Unit</th>
                      <th className="pb-2 font-semibold text-gray-500 text-xs pr-2">Pkg Size</th>
                      <th className="pb-2 font-semibold text-gray-500 text-xs pr-2">Pkg Cost $</th>
                      <th className="pb-2 font-semibold text-gray-500 text-xs">Cost</th>
                      <th className="pb-2" />
                    </tr>
                  </thead>
                  <tbody>
                    {ingredients.map((ing, i) => (
                      <tr key={i} className="border-b border-gray-50">
                        <td className="py-2 pr-2">
                          <input
                            type="text"
                            placeholder="Flour"
                            value={ing.name}
                            onChange={(e) => updateIng(i, "name", e.target.value)}
                            className="w-full border border-gray-200 rounded-lg px-2.5 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-orange-400"
                          />
                        </td>
                        <td className="py-2 pr-2">
                          <input
                            type="number"
                            min="0"
                            step="any"
                            placeholder="200"
                            value={ing.amount}
                            onChange={(e) => updateIng(i, "amount", e.target.value)}
                            className="w-16 border border-gray-200 rounded-lg px-2.5 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-orange-400"
                          />
                        </td>
                        <td className="py-2 pr-2">
                          <select
                            value={ing.unit}
                            onChange={(e) => updateIng(i, "unit", e.target.value)}
                            className="border border-gray-200 rounded-lg px-1 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-orange-400"
                          >
                            {UNITS.map((u) => <option key={u}>{u}</option>)}
                          </select>
                        </td>
                        <td className="py-2 pr-2">
                          <input
                            type="number"
                            min="0"
                            step="any"
                            placeholder="1000"
                            value={ing.packageSize}
                            onChange={(e) => updateIng(i, "packageSize", e.target.value)}
                            className="w-16 border border-gray-200 rounded-lg px-2.5 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-orange-400"
                          />
                        </td>
                        <td className="py-2 pr-2">
                          <input
                            type="number"
                            min="0"
                            step="0.01"
                            placeholder="3.50"
                            value={ing.packageCost}
                            onChange={(e) => updateIng(i, "packageCost", e.target.value)}
                            className="w-16 border border-gray-200 rounded-lg px-2.5 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-orange-400"
                          />
                        </td>
                        <td className="py-2 pr-2 font-bold text-orange-600 text-xs tabular-nums">
                          {ingCosts[i] > 0 ? `$${ingCosts[i].toFixed(3)}` : "—"}
                        </td>
                        <td className="py-2">
                          <button
                            onClick={() => removeRow(i)}
                            className="text-gray-300 hover:text-red-400 transition-colors text-sm"
                          >×</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <button
                onClick={addRow}
                className="mt-3 text-sm text-orange-500 font-bold hover:text-orange-600 transition-colors"
              >
                + Add Ingredient
              </button>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Target Food Cost Percentage</label>
              <div className="flex items-center gap-3">
                <input
                  type="range" min="15" max="50" step="1"
                  value={targetPct}
                  onChange={(e) => setTargetPct(e.target.value)}
                  className="flex-1 accent-orange-500"
                />
                <span className="w-14 text-center font-black text-orange-500 text-lg">{targetPct}%</span>
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>15% (high margin)</span><span>50% (low margin)</span>
              </div>
            </div>
          </div>

          {/* Right: results */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-orange-500 rounded-2xl p-6 text-white">
              <p className="text-sm font-semibold text-orange-100 mb-1">Suggested Menu Price</p>
              <p className="text-5xl font-black">{suggestedPrice > 0 ? `$${suggestedPrice.toFixed(2)}` : "—"}</p>
              <p className="text-sm text-orange-100 mt-2">At {tp}% food cost · {grossMargin}% gross margin</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <p className="text-xs text-gray-500 mb-1">Total Recipe Cost</p>
                <p className="text-2xl font-black text-gray-900">{totalRecipeCost > 0 ? `$${totalRecipeCost.toFixed(2)}` : "—"}</p>
                <p className="text-xs text-gray-400 mt-1">All ingredients combined</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <p className="text-xs text-gray-500 mb-1">Cost Per Serving</p>
                <p className="text-2xl font-black text-gray-900">{costPerServing > 0 ? `$${costPerServing.toFixed(3)}` : "—"}</p>
                <p className="text-xs text-gray-400 mt-1">{numServings} serving{numServings !== 1 ? "s" : ""}</p>
              </div>
            </div>

            {totalRecipeCost > 0 && (
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                <p className="text-xs font-bold text-blue-700 uppercase tracking-wide mb-2">Formula</p>
                <p className="text-sm font-mono text-blue-800">
                  ${costPerServing.toFixed(3)} ÷ {(tp / 100).toFixed(2)} = ${suggestedPrice.toFixed(2)}
                </p>
              </div>
            )}

            <Link
              href="/"
              className="block w-full bg-gray-900 hover:bg-gray-800 text-white font-bold px-6 py-3.5 rounded-xl text-center text-sm transition-colors"
            >
              🤖 Let AI do this automatically →
            </Link>
            <p className="text-xs text-center text-gray-400">AI estimates costs from your dish name — no manual entry</p>
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
                  <div className="px-5 pb-4 text-sm text-gray-500 leading-relaxed border-t border-gray-50 pt-3">{item.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 py-14">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">Skip the manual entry</h2>
          <p className="text-orange-100 mb-8 text-base">
            Type your dish name — MenuPricer AI estimates all ingredients, calculates costs, and generates 3 pricing tiers with menu copy in 30 seconds.
          </p>
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
            <Link href="/restaurant-markup-calculator" className="hover:text-orange-500 transition-colors">Markup Calculator</Link>
            <Link href="/restaurant-profit-calculator" className="hover:text-orange-500 transition-colors">Profit Calculator</Link>
            <Link href="/menu-cost-calculator" className="hover:text-orange-500 transition-colors">Menu Cost Calculator</Link>
          </div>
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} MenuPricer</p>
        </div>
      </footer>
    </div>
  );
}
