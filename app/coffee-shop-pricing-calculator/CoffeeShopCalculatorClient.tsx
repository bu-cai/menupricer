"use client";

import { useState } from "react";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

const DRINK_PRESETS = [
  { name: "Espresso (single)", coffee: 0.35, milk: 0, syrup: 0, other: 0.05 },
  { name: "Latte (12oz)", coffee: 0.70, milk: 0.45, syrup: 0.20, other: 0.08 },
  { name: "Cappuccino (8oz)", coffee: 0.70, milk: 0.30, syrup: 0, other: 0.08 },
  { name: "Cold Brew (12oz)", coffee: 1.10, milk: 0, syrup: 0.10, other: 0.05 },
  { name: "Matcha Latte", coffee: 0, milk: 0.45, syrup: 0.15, other: 0.85 },
  { name: "Mocha (12oz)", coffee: 0.70, milk: 0.45, syrup: 0.30, other: 0.08 },
  { name: "Custom", coffee: 0, milk: 0, syrup: 0, other: 0 },
];

const BENCHMARKS = [
  { drink: "Espresso", costRange: "$0.35–$0.55", sellRange: "$3.00–$4.50", foodCost: "10–15%" },
  { drink: "Latte (12oz)", costRange: "$1.20–$1.60", sellRange: "$5.00–$7.00", foodCost: "18–25%" },
  { drink: "Cold Brew (12oz)", costRange: "$0.90–$1.20", sellRange: "$4.50–$6.50", foodCost: "16–22%" },
  { drink: "Matcha Latte", costRange: "$1.30–$1.80", sellRange: "$5.50–$7.50", foodCost: "20–26%" },
  { drink: "Drip Coffee (12oz)", costRange: "$0.20–$0.35", sellRange: "$2.50–$4.00", foodCost: "8–13%" },
  { drink: "Cappuccino (8oz)", costRange: "$0.90–$1.20", sellRange: "$4.00–$5.50", foodCost: "18–24%" },
];

const FAQS = [
  { q: "What is a good profit margin for a coffee shop?", a: "Espresso-based drinks have ingredient costs of $0.50–$1.50 and sell for $4–$7, giving 75–85% gross margin per drink. Net profit after all expenses (rent, labor, equipment) is typically 6–15% for well-run coffee shops." },
  { q: "How do you calculate the cost of a coffee drink?", a: "Add: coffee/espresso cost + milk or alternative + syrups and sweeteners + cup and lid. A standard latte costs $0.80–$1.50 to make. Divide by your target food cost % to get the selling price." },
  { q: "What percentage of coffee shop revenue is food cost?", a: "Beverage food cost is typically 15–25% (much lower than food). Food items run 28–35%. Blended coffee shop food cost averages 25–30%. Low beverage food cost is why coffee shops can thrive despite high rent and labor." },
  { q: "How do I price specialty coffee drinks?", a: "Calculate ingredient cost, then use the formula: Price = Cost ÷ Target Food Cost %. For a latte costing $1.40 at a 22% food cost target: $1.40 ÷ 0.22 = $6.36. Round to $6.50 or $6.75 for psychological pricing." },
];

export default function CoffeeShopCalculatorClient() {
  const [presetIdx, setPresetIdx] = useState(1);
  const [drinkName, setDrinkName] = useState("");
  const [coffeeCost, setCoffeeCost] = useState("0.70");
  const [milkCost, setMilkCost] = useState("0.45");
  const [syrupCost, setSyrupCost] = useState("0.20");
  const [otherCost, setOtherCost] = useState("0.08");
  const [targetFoodCost, setTargetFoodCost] = useState("22");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const loadPreset = (idx: number) => {
    setPresetIdx(idx);
    if (idx < DRINK_PRESETS.length - 1) {
      const p = DRINK_PRESETS[idx];
      setCoffeeCost(p.coffee.toString());
      setMilkCost(p.milk.toString());
      setSyrupCost(p.syrup.toString());
      setOtherCost(p.other.toString());
    }
  };

  const totalCost = (parseFloat(coffeeCost) || 0) + (parseFloat(milkCost) || 0) + (parseFloat(syrupCost) || 0) + (parseFloat(otherCost) || 0);
  const tp = Math.max(1, Math.min(99, parseFloat(targetFoodCost) || 22));
  const suggestedPrice = totalCost > 0 ? totalCost / (tp / 100) : 0;
  const grossMargin = 100 - tp;
  const profitPerDrink = suggestedPrice - totalCost;

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <LogoIcon size={28} />
            <span className="font-black text-gray-900 tracking-tight text-lg">Menu<span className="text-orange-500">Pricer</span></span>
          </Link>
          <span className="text-gray-300 text-sm">·</span>
          <span className="text-sm text-gray-500">Coffee Shop Pricing</span>
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
            Coffee Shop Pricing Calculator<br /><span className="text-orange-500">Price Every Drink Correctly</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Enter ingredient costs for any coffee drink and get the right selling price, gross margin, and profit per cup instantly.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-5">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <h2 className="text-base font-black text-gray-900 mb-4">Quick Presets</h2>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {DRINK_PRESETS.map((p, i) => (
                  <button key={i} onClick={() => loadPreset(i)}
                    className={`text-xs font-semibold px-3 py-2 rounded-xl border transition-colors text-left ${presetIdx === i ? "bg-orange-500 text-white border-orange-500" : "border-gray-200 text-gray-600 hover:border-orange-300"}`}>
                    {p.name}
                  </button>
                ))}
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1">Drink Name (optional)</label>
                <input type="text" placeholder="e.g. Oat Milk Latte" value={drinkName} onChange={(e) => setDrinkName(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-orange-400" />
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-4">
              <h2 className="text-base font-black text-gray-900">Ingredient Costs</h2>
              {[
                { label: "Coffee / Espresso ($)", value: coffeeCost, setter: setCoffeeCost, hint: "Per shot or per 12oz brew" },
                { label: "Milk / Milk Alternative ($)", value: milkCost, setter: setMilkCost, hint: "Amount used per drink" },
                { label: "Syrups & Sweeteners ($)", value: syrupCost, setter: setSyrupCost, hint: "All syrups, sauces, sugars" },
                { label: "Cup, Lid & Other ($)", value: otherCost, setter: setOtherCost, hint: "Packaging, toppings, whip" },
              ].map(({ label, value, setter, hint }) => (
                <div key={label}>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">{label}</label>
                  <input type="number" min="0" step="0.01" value={value} onChange={(e) => setter(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 font-bold focus:outline-none focus:ring-2 focus:ring-orange-400" />
                  <p className="text-xs text-gray-400 mt-0.5">{hint}</p>
                </div>
              ))}

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Target Food Cost %</label>
                <div className="flex items-center gap-3">
                  <input type="range" min="10" max="40" step="1" value={targetFoodCost} onChange={(e) => setTargetFoodCost(e.target.value)} className="flex-1 accent-orange-500" />
                  <span className="font-black text-orange-500 w-10 text-right">{targetFoodCost}%</span>
                </div>
                <p className="text-xs text-gray-400 mt-1">Beverages: 15–25% · Food items: 28–35%</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-orange-500 rounded-2xl p-6 text-white">
              <p className="text-sm font-semibold text-orange-100 mb-1">{drinkName || "Suggested Price"}</p>
              <p className="text-5xl font-black">{suggestedPrice > 0 ? `$${suggestedPrice.toFixed(2)}` : "—"}</p>
              <p className="text-sm text-orange-100 mt-2">At {tp}% food cost · {grossMargin}% gross margin</p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <p className="text-xs text-gray-500 mb-1">Total Cost</p>
                <p className="text-xl font-black text-gray-900">{totalCost > 0 ? `$${totalCost.toFixed(3)}` : "—"}</p>
                <p className="text-xs text-gray-400 mt-0.5">per drink</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <p className="text-xs text-gray-500 mb-1">Gross Margin</p>
                <p className="text-xl font-black text-gray-900">{grossMargin > 0 ? `${grossMargin}%` : "—"}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <p className="text-xs text-gray-500 mb-1">Profit/Cup</p>
                <p className="text-xl font-black text-green-600">{profitPerDrink > 0 ? `$${profitPerDrink.toFixed(2)}` : "—"}</p>
              </div>
            </div>

            {totalCost > 0 && (
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                <p className="text-xs font-bold text-blue-700 uppercase tracking-wide mb-2">Formula</p>
                <p className="text-sm font-mono text-blue-800">${totalCost.toFixed(3)} ÷ {(tp / 100).toFixed(2)} = ${suggestedPrice.toFixed(2)}</p>
              </div>
            )}

            <Link href="/" className="block w-full bg-gray-900 hover:bg-gray-800 text-white font-bold px-6 py-3.5 rounded-xl text-center text-sm transition-colors">
              🤖 Price food menu items with AI →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 border-t border-gray-100 py-14">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-black text-gray-900 mb-2">Coffee Drink Price Benchmarks</h2>
          <p className="text-sm text-gray-500 mb-8">North American café market averages.</p>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead><tr className="border-b border-gray-100 bg-gray-50">
                <th className="text-left px-5 py-3.5 font-bold text-gray-700">Drink</th>
                <th className="text-left px-5 py-3.5 font-bold text-gray-700">Ingredient Cost</th>
                <th className="text-left px-5 py-3.5 font-bold text-gray-700">Typical Price</th>
                <th className="text-left px-5 py-3.5 font-bold text-gray-700">Food Cost %</th>
              </tr></thead>
              <tbody>
                {BENCHMARKS.map((b, i) => (
                  <tr key={i} className="border-b border-gray-50 hover:bg-orange-50/40 transition-colors">
                    <td className="px-5 py-3.5 font-semibold text-gray-800">{b.drink}</td>
                    <td className="px-5 py-3.5 text-gray-600">{b.costRange}</td>
                    <td className="px-5 py-3.5"><span className="bg-orange-100 text-orange-700 font-bold px-2.5 py-0.5 rounded-full text-xs">{b.sellRange}</span></td>
                    <td className="px-5 py-3.5 text-gray-600">{b.foodCost}</td>
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
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">Also serve food? Price your whole menu.</h2>
          <p className="text-orange-100 mb-8">MenuPricer AI prices any dish — sandwiches, pastries, breakfast items — with food cost, margin, and 3 pricing tiers in 30 seconds.</p>
          <Link href="/" className="inline-block bg-white text-orange-600 font-black px-8 py-3.5 rounded-xl text-base hover:bg-orange-50 transition-colors shadow-lg shadow-orange-600/20">Try MenuPricer Free →</Link>
          <p className="text-orange-200 text-xs mt-4">No credit card · No sign-up required</p>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-100 py-6">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2"><LogoIcon size={20} /><span className="font-black text-gray-900 text-sm">Menu<span className="text-orange-500">Pricer</span></span></div>
          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
            <Link href="/food-cost-calculator" className="hover:text-orange-500 transition-colors">Food Cost Calculator</Link>
            <Link href="/bakery-pricing-calculator" className="hover:text-orange-500 transition-colors">Bakery Pricing</Link>
            <Link href="/restaurant-markup-calculator" className="hover:text-orange-500 transition-colors">Markup Calculator</Link>
          </div>
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} MenuPricer</p>
        </div>
      </footer>
    </div>
  );
}
