"use client";

import { useState } from "react";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

const BENCHMARKS = [
  { type: "Quick Service", range: "25–30%", note: "Lean staffing, high transaction volume" },
  { type: "Fast Casual", range: "28–32%", note: "Some table service, moderate staffing" },
  { type: "Casual Dining", range: "30–35%", note: "Full front and back of house staffing" },
  { type: "Fine Dining", range: "35–40%", note: "Higher service ratio, specialized kitchen roles" },
  { type: "Bar / Nightlife", range: "22–28%", note: "Beverage-led revenue needs less labor per dollar" },
];

const FAQS = [
  { q: "What is labor cost percentage in a restaurant?", a: "Labor cost percentage is total labor cost — wages, payroll tax, and benefits — divided by revenue, expressed as a percentage. It's one half of prime cost, alongside food cost percentage, and one of the two numbers you have the most direct control over." },
  { q: "What is a good labor cost percentage?", a: "Most restaurants target 28-35% of revenue, with the right number depending heavily on service style. Quick service runs leaner (25-30%) because staffing is lower per transaction; fine dining runs higher (35-40%) because of specialized roles and full table service." },
  { q: "Should I include payroll tax and benefits in labor cost?", a: "Yes. Labor cost percentage should include everything it actually costs to employ someone — base wages, payroll tax, health benefits, paid time off — not just the hourly rate. Leaving these out understates your real cost and can make pricing decisions look more comfortable than they are." },
  { q: "How do I reduce labor cost percentage without cutting quality?", a: "Schedule against forecasted covers rather than habit or gut feel, cross-train staff to cover multiple roles during slow periods, and review overtime patterns weekly. Reducing labor cost by cutting service quality usually costs more in lost repeat business than it saves." },
];

export default function LaborCostCalculatorClient() {
  const [revenue, setRevenue] = useState("");
  const [wages, setWages] = useState("");
  const [payrollTax, setPayrollTax] = useState("");
  const [benefits, setBenefits] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const rev = parseFloat(revenue) || 0;
  const w = parseFloat(wages) || 0;
  const pt = parseFloat(payrollTax) || 0;
  const b = parseFloat(benefits) || 0;
  const totalLabor = w + pt + b;
  const laborPct = rev > 0 ? (totalLabor / rev) * 100 : 0;

  const health =
    laborPct === 0 ? { label: "—", color: "text-gray-400" }
    : laborPct <= 30 ? { label: "Lean", color: "text-green-600" }
    : laborPct <= 35 ? { label: "Healthy", color: "text-green-600" }
    : laborPct <= 40 ? { label: "Watch closely", color: "text-orange-500" }
    : { label: "High", color: "text-red-500" };

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <LogoIcon size={28} />
            <span className="font-black text-gray-900 tracking-tight text-lg">Menu<span className="text-orange-500">Pricer</span></span>
          </Link>
          <span className="text-gray-300 text-sm">·</span>
          <span className="text-sm text-gray-500">Labor Cost Calculator</span>
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
            Labor Cost Calculator<br /><span className="text-orange-500">Percentage of Revenue</span>
          </h1>
          <p className="text-sm text-gray-400 mb-4">Last reviewed: July 28, 2026</p>
          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Enter wages, payroll tax, benefits, and revenue to get your labor cost percentage — and see how it compares to your restaurant type.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-5">
            <h2 className="text-base font-black text-gray-900">Enter Your Numbers</h2>
            <p className="text-xs text-gray-400 -mt-3">Use one consistent period — typically one month.</p>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Total Revenue ($)</label>
              <input type="number" min="0" step="100" placeholder="e.g. 60000" value={revenue} onChange={(e) => setRevenue(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-lg font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Total Wages ($)</label>
              <input type="number" min="0" step="100" placeholder="e.g. 16000" value={wages} onChange={(e) => setWages(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-lg font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Payroll Tax ($)</label>
                <input type="number" min="0" step="50" placeholder="e.g. 1600" value={payrollTax} onChange={(e) => setPayrollTax(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-lg font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Benefits ($)</label>
                <input type="number" min="0" step="50" placeholder="e.g. 1600" value={benefits} onChange={(e) => setBenefits(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-lg font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400" />
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
              <p className="text-xs font-bold text-blue-700 uppercase tracking-wide mb-2">Formula</p>
              <p className="text-sm font-mono text-blue-800">
                Labor Cost % = (Wages + Tax + Benefits) ÷ Revenue × 100
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-orange-500 rounded-2xl p-6 text-white">
              <p className="text-sm font-semibold text-orange-100 mb-1">Labor Cost %</p>
              <p className="text-5xl font-black">{laborPct > 0 ? `${laborPct.toFixed(1)}%` : "—"}</p>
              <p className="text-sm font-bold mt-2 text-orange-100">{health.label !== "—" ? health.label : ""}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
              <p className="text-xs text-gray-500 mb-1">Total Labor Cost</p>
              <p className="text-xl font-black text-gray-900">{totalLabor > 0 ? `$${totalLabor.toFixed(2)}` : "—"}</p>
            </div>
            <Link href="/" className="block w-full bg-gray-900 hover:bg-gray-800 text-white font-bold px-6 py-3.5 rounded-xl text-center text-sm transition-colors">
              🤖 Get AI pricing that keeps food + labor in balance →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 border-t border-gray-100 py-14">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-black text-gray-900 mb-2">Labor Cost Benchmarks by Restaurant Type</h2>
          <p className="text-gray-500 text-sm mb-8">Target ranges — use these to see how your operation compares.</p>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <th className="text-left px-5 py-3.5 font-bold text-gray-700">Type</th>
                  <th className="text-left px-5 py-3.5 font-bold text-gray-700">Target Labor Cost</th>
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
            <Link href="/prime-cost-calculator" className="hover:text-orange-500 transition-colors">Prime Cost Calculator</Link>
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
