"use client";

import { useState } from "react";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

const FAQS = [
  { q: "What is the average profit margin for a restaurant?", a: "The average net profit margin for a restaurant is 3–9%. Full-service restaurants average 3–5%, fast casual 6–9%, and bars/nightclubs up to 10–15%. Many restaurants operate on very thin margins, making cost control critical." },
  { q: "What are the main cost categories in a restaurant?", a: "The 'prime cost' (food + labor) typically accounts for 55–65% of revenue. Food cost: 28–35%. Labor cost: 25–35%. Overhead (rent, utilities, insurance, supplies): 5–15%. Net profit is revenue minus all three." },
  { q: "How can I improve my restaurant profit margin?", a: "Key levers: (1) Reduce food cost % by repricing or renegotiating with suppliers. (2) Optimize staffing to reduce labor waste. (3) Raise check average through menu engineering. Even a 2–3% improvement in food cost goes directly to profit." },
  { q: "What is prime cost in a restaurant?", a: "Prime cost = Food Cost + Labor Cost. Most profitable restaurants keep prime cost below 60% of revenue. Above 65% typically means the business is struggling. Calculate it monthly to catch problems early." },
];

export default function ProfitCalculatorClient() {
  const [revenue, setRevenue] = useState("");
  const [foodCost, setFoodCost] = useState("");
  const [laborCost, setLaborCost] = useState("");
  const [overhead, setOverhead] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mode, setMode] = useState<"dollar" | "pct">("dollar");

  const rev = parseFloat(revenue) || 0;

  let fc = parseFloat(foodCost) || 0;
  let lc = parseFloat(laborCost) || 0;
  let oh = parseFloat(overhead) || 0;

  if (mode === "pct" && rev > 0) {
    fc = (fc / 100) * rev;
    lc = (lc / 100) * rev;
    oh = (oh / 100) * rev;
  }

  const primeCost = fc + lc;
  const totalCosts = fc + lc + oh;
  const netProfit = rev > 0 ? rev - totalCosts : 0;
  const netMarginPct = rev > 0 ? (netProfit / rev) * 100 : 0;
  const primeCostPct = rev > 0 ? (primeCost / rev) * 100 : 0;
  const foodCostPct = rev > 0 ? (fc / rev) * 100 : 0;
  const laborCostPct = rev > 0 ? (lc / rev) * 100 : 0;
  const overheadPct = rev > 0 ? (oh / rev) * 100 : 0;

  const marginColor = netMarginPct >= 6 ? "text-green-600" : netMarginPct >= 3 ? "text-orange-500" : "text-red-500";

  const bar = (pct: number, color: string) => (
    <div className="flex items-center gap-3">
      <div className="flex-1 bg-gray-100 rounded-full h-2">
        <div className={`h-2 rounded-full ${color}`} style={{ width: `${Math.min(100, Math.max(0, pct))}%` }} />
      </div>
      <span className="text-xs font-bold tabular-nums w-10 text-right text-gray-600">{pct.toFixed(1)}%</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <LogoIcon size={28} />
            <span className="font-black text-gray-900 tracking-tight text-lg">Menu<span className="text-orange-500">Pricer</span></span>
          </Link>
          <span className="text-gray-300 text-sm">·</span>
          <span className="text-sm text-gray-500">Profit Calculator</span>
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
            Restaurant Profit Calculator<br /><span className="text-orange-500">Net Profit & Margin Estimator</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Enter your revenue, food cost, labor, and overhead to calculate your net profit and see where your money goes.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-5">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-black text-gray-900">Enter Your Numbers</h2>
              <div className="flex rounded-lg border border-gray-200 overflow-hidden text-xs font-bold">
                <button onClick={() => setMode("dollar")} className={`px-3 py-1.5 transition-colors ${mode === "dollar" ? "bg-orange-500 text-white" : "text-gray-500 hover:bg-gray-50"}`}>$ Dollars</button>
                <button onClick={() => setMode("pct")} className={`px-3 py-1.5 transition-colors ${mode === "pct" ? "bg-orange-500 text-white" : "text-gray-500 hover:bg-gray-50"}`}>% of Revenue</button>
              </div>
            </div>

            {[
              { label: "Monthly Revenue", value: revenue, setter: setRevenue, placeholder: "e.g. 50000", prefix: "$", always: true },
              { label: `Food Cost ${mode === "pct" ? "(% of revenue)" : "($)"}`, value: foodCost, setter: setFoodCost, placeholder: mode === "pct" ? "e.g. 32" : "e.g. 16000", prefix: mode === "dollar" ? "$" : "", suffix: mode === "pct" ? "%" : "" },
              { label: `Labor Cost ${mode === "pct" ? "(% of revenue)" : "($)"}`, value: laborCost, setter: setLaborCost, placeholder: mode === "pct" ? "e.g. 30" : "e.g. 15000", prefix: mode === "dollar" ? "$" : "", suffix: mode === "pct" ? "%" : "" },
              { label: `Overhead ${mode === "pct" ? "(% of revenue)" : "($)"}`, value: overhead, setter: setOverhead, placeholder: mode === "pct" ? "e.g. 10" : "e.g. 5000", prefix: mode === "dollar" ? "$" : "", suffix: mode === "pct" ? "%" : "" },
            ].map(({ label, value, setter, placeholder, prefix, suffix }) => (
              <div key={label}>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">{label}</label>
                <div className="relative">
                  {prefix && <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">{prefix}</span>}
                  <input
                    type="number" min="0" step="any" placeholder={placeholder}
                    value={value} onChange={(e) => setter(e.target.value)}
                    className={`w-full border border-gray-200 rounded-xl py-3 text-lg font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400 ${prefix ? "pl-8 pr-4" : "px-4"}`}
                  />
                  {suffix && <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">{suffix}</span>}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <div className={`rounded-2xl p-6 text-white ${netProfit >= 0 ? "bg-orange-500" : "bg-red-500"}`}>
              <p className="text-sm font-semibold opacity-80 mb-1">Net Profit (Monthly)</p>
              <p className="text-5xl font-black">{rev > 0 ? `${netProfit >= 0 ? "" : "-"}$${Math.abs(netProfit).toFixed(0)}` : "—"}</p>
              <p className={`text-sm mt-2 opacity-80`}>{rev > 0 ? `${netMarginPct.toFixed(1)}% net margin` : "Enter numbers above"}</p>
            </div>

            {rev > 0 && (
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 space-y-4">
                <h3 className="text-sm font-black text-gray-900">Revenue Breakdown</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs mb-1"><span className="text-gray-500">Food Cost</span><span className="font-bold">${fc.toFixed(0)}</span></div>
                    {bar(foodCostPct, "bg-orange-400")}
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1"><span className="text-gray-500">Labor Cost</span><span className="font-bold">${lc.toFixed(0)}</span></div>
                    {bar(laborCostPct, "bg-blue-400")}
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1"><span className="text-gray-500">Overhead</span><span className="font-bold">${oh.toFixed(0)}</span></div>
                    {bar(overheadPct, "bg-purple-400")}
                  </div>
                  <div className="border-t border-gray-100 pt-3">
                    <div className="flex justify-between text-xs mb-1"><span className="font-bold text-gray-700">Prime Cost (Food+Labor)</span><span className="font-bold">${primeCost.toFixed(0)}</span></div>
                    {bar(primeCostPct, primeCostPct <= 60 ? "bg-green-400" : primeCostPct <= 65 ? "bg-yellow-400" : "bg-red-400")}
                    <p className="text-xs text-gray-400 mt-1">{primeCostPct <= 60 ? "✓ Healthy (target: below 60%)" : primeCostPct <= 65 ? "⚠ Borderline (target: below 60%)" : "❌ Too high (target: below 60%)"}</p>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1"><span className={`font-bold ${netMarginPct >= 0 ? "text-gray-700" : "text-red-600"}`}>Net Profit</span><span className={`font-bold ${netMarginPct >= 0 ? "text-green-600" : "text-red-600"}`}>${netProfit.toFixed(0)}</span></div>
                    {bar(Math.max(0, netMarginPct), "bg-green-500")}
                  </div>
                </div>
              </div>
            )}

            <Link href="/" className="block w-full bg-gray-900 hover:bg-gray-800 text-white font-bold px-6 py-3.5 rounded-xl text-center text-sm transition-colors">
              🤖 Optimize dish pricing to improve margins →
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
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">Improve margins by repricing your menu</h2>
          <p className="text-orange-100 mb-8">MenuPricer shows you the right price for every dish — with AI-calculated food cost, margin, and 3 pricing tiers. A 2% food cost improvement on a $50k/month restaurant adds $1,000/month to profit.</p>
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
            <Link href="/menu-cost-calculator" className="hover:text-orange-500 transition-colors">Menu Cost Calculator</Link>
          </div>
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} MenuPricer</p>
        </div>
      </footer>
    </div>
  );
}
