"use client";

import { useState } from "react";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

function clamp(v: number, min: number, max: number) {
  return Math.min(Math.max(v, min), max);
}

const MARGIN_PRESETS = [
  { label: "Fine Dining", margin: 72 },
  { label: "Casual Dining", margin: 68 },
  { label: "Fast Casual", margin: 70 },
  { label: "Food Truck", margin: 65 },
  { label: "Bakery / Café", margin: 67 },
];

const COST_EXAMPLES = [
  { dish: "Grilled Salmon", cost: 8.5, price: 28, margin: 70 },
  { dish: "Margherita Pizza", cost: 3.2, price: 14, margin: 77 },
  { dish: "Caesar Salad", cost: 2.1, price: 12, margin: 83 },
  { dish: "Beef Burger", cost: 4.8, price: 16, margin: 70 },
  { dish: "Pasta Carbonara", cost: 3.6, price: 18, margin: 80 },
  { dish: "Chicken Wings", cost: 5.2, price: 18, margin: 71 },
];

const FAQS = [
  {
    q: "How do I calculate menu item cost?",
    a: "Add up the cost of every ingredient used in one serving of the dish — including oils, garnishes, sauces, and packaging for delivery. That total is your menu item cost. Use the calculator above to instantly turn that number into a profitable menu price.",
  },
  {
    q: "What is the menu pricing formula?",
    a: "Menu Price = Ingredient Cost ÷ (1 − Target Margin %). For example, if a dish costs $4 to make and you want a 70% margin, the price is $4 ÷ 0.30 = $13.33. Alternatively: Menu Price = Ingredient Cost ÷ Target Food Cost %. Both formulas give the same result.",
  },
  {
    q: "What profit margin should I target for menu items?",
    a: "Most restaurants target 65–75% gross margin (25–35% food cost). Fine dining can go higher (70–80%) due to premium pricing. Fast casual typically targets 65–72%. The key is covering labor, rent, and overhead while staying competitive on price.",
  },
  {
    q: "How do I calculate menu cost for a full restaurant menu?",
    a: "Calculate the ingredient cost for each dish individually, then apply your target margin to get the price for each item. Use MenuPricer's batch pricing tool to price up to 20 dishes at once — the AI estimates ingredient costs and generates 3 pricing tiers per dish automatically.",
  },
  {
    q: "How does delivery affect menu pricing?",
    a: "DoorDash, Uber Eats, and Grubhub charge 15–30% commission. A dish priced at $15 in-house nets you ~$10.50–$12.75 on delivery. MenuPricer automatically calculates delivery-adjusted prices so your margin stays intact across all channels.",
  },
  {
    q: "What is menu engineering and how does it affect pricing?",
    a: "Menu engineering is the practice of analyzing which dishes are most profitable AND most popular, then using that data to adjust prices, placement, and descriptions. High-margin, high-popularity dishes ('Stars') should be featured prominently. MenuPricer's analytics dashboard shows you exactly which items are your Stars, Plowhorses, Puzzles, and Dogs.",
  },
  {
    q: "How to calculate restaurant menu prices for a new restaurant?",
    a: "Start by researching competitor prices in your area, then work backwards: set your target food cost (28–35%) and calculate prices based on actual ingredient costs. For a new restaurant, use MenuPricer to get AI-estimated ingredient costs for dishes you haven't costed yet.",
  },
];

export default function MenuCostCalculatorClient() {
  const [ingredientCost, setIngredientCost] = useState("");
  const [targetMargin, setTargetMargin] = useState("70");
  const [sellingPrice, setSellingPrice] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activePreset, setActivePreset] = useState<string | null>(null);

  const ic = parseFloat(ingredientCost) || 0;
  const tm = clamp(parseFloat(targetMargin) || 70, 1, 99);
  const sp = parseFloat(sellingPrice) || 0;

  const suggestedPrice = ic > 0 ? ic / (1 - tm / 100) : 0;
  const actualMargin = ic > 0 && sp > 0 ? ((sp - ic) / sp) * 100 : 0;
  const profitPerDish = sp > 0 ? sp - ic : suggestedPrice > 0 ? suggestedPrice - ic : 0;
  const foodCostPct = suggestedPrice > 0 ? (ic / suggestedPrice) * 100 : 0;

  const marginColor =
    actualMargin === 0
      ? "text-gray-400"
      : actualMargin >= 65
      ? "text-green-600"
      : actualMargin >= 50
      ? "text-orange-500"
      : "text-red-500";

  function applyPreset(margin: number, label: string) {
    setTargetMargin(String(margin));
    setActivePreset(label);
  }

  function loadExample(cost: number) {
    setIngredientCost(String(cost));
  }

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
          <span className="text-sm text-gray-500">Menu Cost Calculator</span>
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
            Menu Cost Calculator<br />
            <span className="text-orange-500">for Restaurants</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Calculate your menu item cost, set your profit margin, and instantly get the right selling price — free for restaurant owners.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="max-w-4xl mx-auto px-6 py-12">

        {/* Margin presets */}
        <div className="mb-6">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">Quick Preset by Restaurant Type</p>
          <div className="flex flex-wrap gap-2">
            {MARGIN_PRESETS.map((p) => (
              <button
                key={p.label}
                onClick={() => applyPreset(p.margin, p.label)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                  activePreset === p.label
                    ? "bg-orange-500 text-white border-orange-500"
                    : "bg-white text-gray-600 border-gray-200 hover:border-orange-300 hover:text-orange-600"
                }`}
              >
                {p.label} — {p.margin}% margin
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Inputs */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-5">
            <h2 className="text-base font-black text-gray-900">Enter Menu Item Cost</h2>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Ingredient Cost per Serving ($)
              </label>
              <input
                type="number"
                min="0"
                step="0.01"
                placeholder="e.g. 4.50"
                value={ingredientCost}
                onChange={(e) => { setIngredientCost(e.target.value); }}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-lg font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
              />
              <p className="text-xs text-gray-400 mt-1">Total cost of all ingredients for one portion</p>
              {/* Quick examples */}
              <div className="flex flex-wrap gap-1.5 mt-2">
                {COST_EXAMPLES.slice(0, 3).map((ex) => (
                  <button
                    key={ex.dish}
                    onClick={() => loadExample(ex.cost)}
                    className="text-xs text-orange-500 border border-orange-200 rounded-full px-2 py-0.5 hover:bg-orange-50 transition-colors"
                  >
                    {ex.dish} ${ex.cost}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Target Gross Margin (%)
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="30"
                  max="90"
                  step="1"
                  value={targetMargin}
                  onChange={(e) => { setTargetMargin(e.target.value); setActivePreset(null); }}
                  className="flex-1 accent-orange-500"
                />
                <span className="w-14 text-center font-black text-orange-500 text-lg">{targetMargin}%</span>
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>30% (low margin)</span>
                <span>90% (premium)</span>
              </div>
              <p className="text-xs text-gray-400 mt-1">Industry standard: 65–75% for most restaurant types</p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Your Current Price ($) <span className="text-gray-400 font-normal">(optional — to check if it&apos;s profitable)</span>
              </label>
              <input
                type="number"
                min="0"
                step="0.01"
                placeholder="e.g. 16.00"
                value={sellingPrice}
                onChange={(e) => setSellingPrice(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-lg font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
              />
            </div>
          </div>

          {/* Results */}
          <div className="space-y-4">
            <div className="bg-orange-500 rounded-2xl p-6 text-white">
              <p className="text-sm font-semibold text-orange-100 mb-1">Recommended Menu Price</p>
              <p className="text-5xl font-black">
                {suggestedPrice > 0 ? `$${suggestedPrice.toFixed(2)}` : "—"}
              </p>
              <p className="text-sm text-orange-100 mt-2">
                At {tm}% gross margin · Food cost {foodCostPct > 0 ? `${foodCostPct.toFixed(0)}%` : "—"}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <p className="text-xs text-gray-500 mb-1">Your Margin</p>
                <p className={`text-2xl font-black ${marginColor}`}>
                  {sp > 0 ? `${actualMargin.toFixed(1)}%` : tm + "%"}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {sp > 0
                    ? actualMargin >= 65 ? "✓ Healthy margin" : "⚠ Below target"
                    : "Target margin"}
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <p className="text-xs text-gray-500 mb-1">Profit per Dish</p>
                <p className="text-2xl font-black text-gray-900">
                  {profitPerDish > 0 ? `$${profitPerDish.toFixed(2)}` : "—"}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {profitPerDish > 0 ? "Before labor & overhead" : "Enter cost above"}
                </p>
              </div>
            </div>

            {/* Formula */}
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
              <p className="text-xs font-bold text-blue-700 uppercase tracking-wide mb-2">Menu Pricing Formula</p>
              <p className="text-sm font-mono text-blue-800">
                Price = ${ic > 0 ? ic.toFixed(2) : "cost"} ÷ (1 − {tm}%) = {suggestedPrice > 0 ? `$${suggestedPrice.toFixed(2)}` : "?"}
              </p>
            </div>

            <Link
              href="/"
              className="block w-full bg-gray-900 hover:bg-gray-800 text-white font-bold px-6 py-3.5 rounded-xl text-center text-sm transition-colors"
            >
              🤖 Get AI pricing with 3 tiers + delivery markup →
            </Link>
            <p className="text-xs text-center text-gray-400">
              AI estimates ingredient costs — no spreadsheet needed
            </p>
          </div>
        </div>
      </section>

      {/* Example menu items */}
      <section className="bg-gray-50 border-t border-gray-100 py-14">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-black text-gray-900 mb-2">Menu Cost Examples</h2>
          <p className="text-gray-500 text-sm mb-8">Real-world menu item costs and typical restaurant pricing. Click any row to load it into the calculator.</p>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <th className="text-left px-5 py-3.5 font-bold text-gray-700">Dish</th>
                  <th className="text-left px-5 py-3.5 font-bold text-gray-700">Ingredient Cost</th>
                  <th className="text-left px-5 py-3.5 font-bold text-gray-700">Typical Price</th>
                  <th className="text-left px-5 py-3.5 font-bold text-gray-700">Gross Margin</th>
                  <th className="text-left px-5 py-3.5 font-bold text-gray-700"></th>
                </tr>
              </thead>
              <tbody>
                {COST_EXAMPLES.map((ex, i) => (
                  <tr key={i} className="border-b border-gray-50 hover:bg-orange-50/40 transition-colors cursor-pointer" onClick={() => loadExample(ex.cost)}>
                    <td className="px-5 py-3.5 font-semibold text-gray-800">{ex.dish}</td>
                    <td className="px-5 py-3.5 text-gray-600">${ex.cost.toFixed(2)}</td>
                    <td className="px-5 py-3.5 text-gray-600">${ex.price.toFixed(2)}</td>
                    <td className="px-5 py-3.5">
                      <span className="bg-green-100 text-green-700 font-bold px-2.5 py-0.5 rounded-full text-xs">{ex.margin}%</span>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className="text-orange-500 text-xs font-semibold hover:underline">Load →</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How to calculate menu cost */}
      <section className="max-w-4xl mx-auto px-6 py-14">
        <h2 className="text-2xl font-black text-gray-900 mb-3">How to Calculate Menu Cost (Step-by-Step)</h2>
        <p className="text-gray-500 mb-8">Follow these steps to calculate an accurate menu item cost for any dish in your restaurant.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {[
            {
              step: "1",
              title: "List every ingredient",
              desc: "Write down all ingredients in one serving — protein, vegetables, sauces, garnishes, cooking oil, and packaging for delivery orders. Even small items like salt add up across high-volume dishes.",
            },
            {
              step: "2",
              title: "Calculate each ingredient cost",
              desc: "For each ingredient: (Amount used per dish ÷ Package size) × Package cost. Example: if you use 6oz of chicken breast and buy 5lb bags for $18, the cost is (6 ÷ 80) × $18 = $1.35.",
            },
            {
              step: "3",
              title: "Add up total menu item cost",
              desc: "Sum all ingredient costs to get your total menu item cost per serving. This is the number you enter into the calculator above to find your ideal price.",
            },
            {
              step: "4",
              title: "Apply your margin target",
              desc: "Use the formula: Price = Menu Cost ÷ (1 − Target Margin). For a 70% margin on a $4.50 cost dish: $4.50 ÷ 0.30 = $15.00. The calculator does this math automatically.",
            },
          ].map(({ step, title, desc }) => (
            <div key={step} className="flex gap-4">
              <div className="w-9 h-9 rounded-full bg-orange-100 text-orange-600 font-black text-base flex items-center justify-center shrink-0 mt-0.5">{step}</div>
              <div>
                <h3 className="font-bold text-gray-800 text-sm mb-1">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 rounded-2xl p-6 text-white">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-4">Menu Pricing Formulas</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white/10 rounded-xl p-4">
              <p className="text-xs text-gray-400 mb-2">Find ideal price</p>
              <p className="font-mono text-orange-300 text-xs">Menu Price =</p>
              <p className="font-mono text-white text-xs">Cost ÷ (1 − Margin %)</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <p className="text-xs text-gray-400 mb-2">Check your margin</p>
              <p className="font-mono text-orange-300 text-xs">Gross Margin =</p>
              <p className="font-mono text-white text-xs">(Price − Cost) ÷ Price</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <p className="text-xs text-gray-400 mb-2">Food cost %</p>
              <p className="font-mono text-orange-300 text-xs">Food Cost % =</p>
              <p className="font-mono text-white text-xs">Cost ÷ Price × 100</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 border-t border-gray-100 py-14">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-black text-gray-900 mb-8">Menu Cost Calculator — FAQ</h2>
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

      {/* Compare tools */}
      <section className="max-w-4xl mx-auto px-6 py-14">
        <h2 className="text-2xl font-black text-gray-900 mb-2">MenuPricer vs. a Basic Menu Cost Calculator</h2>
        <p className="text-gray-500 text-sm mb-8">This free calculator gives you a quick price. MenuPricer&apos;s AI tool goes much further.</p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm bg-white">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="text-left px-5 py-3.5 font-bold text-gray-700">Feature</th>
                <th className="text-center px-5 py-3.5 font-bold text-gray-500">This Calculator</th>
                <th className="text-center px-5 py-3.5 font-bold text-orange-600">MenuPricer AI</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Calculate menu item price", true, true],
                ["Food cost % & profit margin", true, true],
                ["3 pricing tiers (budget / standard / premium)", false, true],
                ["AI estimates ingredient costs for you", false, true],
                ["Delivery platform markup (DoorDash, Uber Eats)", false, true],
                ["AI-written menu copy & dish descriptions", false, true],
                ["Batch price 20 dishes at once", false, true],
                ["Analytics dashboard (margin chart, top performers)", false, true],
                ["PDF menu export with your branding", false, true],
                ["Cloud sync across devices", false, true],
              ].map(([feature, basic, ai], i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-gray-50/50">
                  <td className="px-5 py-3.5 text-gray-700">{feature}</td>
                  <td className="px-5 py-3.5 text-center">
                    {basic ? <span className="text-green-500 font-bold">✓</span> : <span className="text-gray-300">—</span>}
                  </td>
                  <td className="px-5 py-3.5 text-center">
                    {ai ? <span className="text-orange-500 font-bold">✓</span> : <span className="text-gray-300">—</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-orange-500 py-14">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
            Let AI calculate your menu cost for you
          </h2>
          <p className="text-orange-100 mb-8 text-base">
            Type any dish name — MenuPricer AI estimates ingredients, calculates the menu cost, and gives you 3 pricing tiers with delivery markups and menu copy. In 30 seconds.
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
            <Link href="/menu-cost-calculator" className="hover:text-orange-500 transition-colors">Menu Cost Calculator</Link>
            <Link href="/food-cost-calculator" className="hover:text-orange-500 transition-colors">Food Cost Calculator</Link>
          </div>
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} MenuPricer</p>
        </div>
      </footer>
    </div>
  );
}
