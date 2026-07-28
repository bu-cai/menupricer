"use client";

import { useState } from "react";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

const BENCHMARKS = [
  { type: "Quick Service", range: "55–60%", note: "Lower food cost offsets higher labor efficiency needs" },
  { type: "Fast Casual", range: "58–62%", note: "Balanced food and labor cost" },
  { type: "Casual Dining", range: "60–65%", note: "Full service labor cost" },
  { type: "Fine Dining", range: "65–70%", note: "Premium ingredients and service staffing" },
  { type: "Bar / Nightlife", range: "50–58%", note: "High-margin beverage sales" },
];

const FAQS = [
  { q: "What is prime cost in a restaurant?", a: "Prime cost is food cost plus labor cost, combined as one percentage of revenue. It's the fastest single diagnostic for restaurant health because it captures your two largest and most controllable expenses in one number." },
  { q: "What is a good prime cost percentage?", a: "Most healthy restaurants run prime cost between 55% and 65% of revenue. Below 55% is excellent. Above 70% usually means the business is unprofitable once rent and other overhead are covered, since prime cost alone leaves only 30% or less for everything else." },
  { q: "How do I lower my prime cost?", a: "Reprice dishes running above target food cost, tighten portion control, schedule labor against forecasted covers instead of habit, and renegotiate supplier pricing on your top ingredients by spend. Repricing is usually the fastest lever because it needs no operational change." },
  { q: "Is prime cost the same as cost of goods sold?", a: "No. Cost of goods sold (COGS) is food and beverage cost only. Prime cost adds labor cost — wages, payroll tax, and benefits — on top of COGS. Prime cost is the broader and more useful number for judging overall operational health." },
];

export default function PrimeCostCalculatorClient() {
  const [revenue, setRevenue] = useState("");
  const [foodCost, setFoodCost] = useState("");
  const [laborCost, setLaborCost] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const rev = parseFloat(revenue) || 0;
  const fc = parseFloat(foodCost) || 0;
  const lc = parseFloat(laborCost) || 0;

  const foodCostPct = rev > 0 ? (fc / rev) * 100 : 0;
  const laborCostPct = rev > 0 ? (lc / rev) * 100 : 0;
  const primeCostPct = foodCostPct + laborCostPct;

  const health =
    primeCostPct === 0 ? { label: "—", color: "text-gray-400" }
    : primeCostPct <= 55 ? { label: "Excellent", color: "text-green-600" }
    : primeCostPct <= 60 ? { label: "Good", color: "text-green-600" }
    : primeCostPct <= 65 ? { label: "Acceptable", color: "text-orange-500" }
    : primeCostPct <= 70 ? { label: "Marginal", color: "text-orange-500" }
    : { label: "Concerning", color: "text-red-500" };

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <LogoIcon size={28} />
            <span className="font-black text-gray-900 tracking-tight text-lg">Menu<span className="text-orange-500">Pricer</span></span>
          </Link>
          <span className="text-gray-300 text-sm">·</span>
          <span className="text-sm text-gray-500">Prime Cost Calculator</span>
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
            Prime Cost Calculator<br /><span className="text-orange-500">Food + Labor Cost, In One Number</span>
          </h1>
          <p className="text-sm text-gray-400 mb-4">Last reviewed: July 28, 2026</p>
          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Enter your revenue, food cost, and labor cost to see your prime cost percentage — the fastest diagnostic for restaurant profitability.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-5">
            <h2 className="text-base font-black text-gray-900">Enter Your Numbers</h2>
            <p className="text-xs text-gray-400 -mt-3">Use figures for the same period — typically one month.</p>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Total Revenue ($)</label>
              <input type="number" min="0" step="100" placeholder="e.g. 60000" value={revenue} onChange={(e) => setRevenue(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-lg font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Food & Beverage Cost ($)</label>
              <input type="number" min="0" step="100" placeholder="e.g. 19800" value={foodCost} onChange={(e) => setFoodCost(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-lg font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Total Labor Cost ($)</label>
              <input type="number" min="0" step="100" placeholder="e.g. 19200" value={laborCost} onChange={(e) => setLaborCost(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-lg font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400" />
              <p className="text-xs text-gray-400 mt-1">Include wages, payroll tax, and benefits.</p>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
              <p className="text-xs font-bold text-blue-700 uppercase tracking-wide mb-2">Formula</p>
              <p className="text-sm font-mono text-blue-800">
                Prime Cost % = (Food Cost + Labor Cost) ÷ Revenue × 100
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-orange-500 rounded-2xl p-6 text-white">
              <p className="text-sm font-semibold text-orange-100 mb-1">Prime Cost</p>
              <p className="text-5xl font-black">{primeCostPct > 0 ? `${primeCostPct.toFixed(1)}%` : "—"}</p>
              <p className={`text-sm font-bold mt-2 ${health.color === "text-red-500" ? "text-red-100" : "text-orange-100"}`}>{health.label !== "—" ? health.label : ""}</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <p className="text-xs text-gray-500 mb-1">Food Cost %</p>
                <p className="text-xl font-black text-gray-900">{foodCostPct > 0 ? `${foodCostPct.toFixed(1)}%` : "—"}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <p className="text-xs text-gray-500 mb-1">Labor Cost %</p>
                <p className="text-xl font-black text-gray-900">{laborCostPct > 0 ? `${laborCostPct.toFixed(1)}%` : "—"}</p>
              </div>
            </div>
            <Link href="/" className="block w-full bg-gray-900 hover:bg-gray-800 text-white font-bold px-6 py-3.5 rounded-xl text-center text-sm transition-colors">
              🤖 Find which dishes are dragging down your prime cost →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 border-t border-gray-100 py-14">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-black text-gray-900 mb-2">Prime Cost Benchmarks by Restaurant Type</h2>
          <p className="text-gray-500 text-sm mb-8">Target ranges — use these to see how your operation compares.</p>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <th className="text-left px-5 py-3.5 font-bold text-gray-700">Type</th>
                  <th className="text-left px-5 py-3.5 font-bold text-gray-700">Target Prime Cost</th>
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
            <Link href="/labor-cost-calculator" className="hover:text-orange-500 transition-colors">Labor Cost Calculator</Link>
            <Link href="/food-cost-calculator" className="hover:text-orange-500 transition-colors">Food Cost Calculator</Link>
            <Link href="/restaurant-profit-calculator" className="hover:text-orange-500 transition-colors">Profit Calculator</Link>
            <Link href="/tools" className="hover:text-orange-500 transition-colors">All Tools</Link>
          </div>
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} MenuPricer</p>
        </div>
      </footer>
    </div>
  );
}
