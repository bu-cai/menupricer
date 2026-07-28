"use client";

import { useState } from "react";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

const FAQS = [
  { q: "What is the break-even point for a restaurant?", a: "The break-even point is the revenue level at which total costs equal total revenue — profit is exactly zero. Below it you lose money; above it, every additional dollar of revenue drops mostly to profit once fixed costs are already covered." },
  { q: "How do I calculate break-even covers per day?", a: "Divide your monthly break-even revenue by your average check size to get break-even covers for the month, then divide by the number of days you're open to get a daily target." },
  { q: "What counts as a fixed cost vs. a variable cost?", a: "Fixed costs don't change with sales volume — rent, insurance, most salaried management pay, loan payments. Variable costs scale with each sale — ingredients, hourly labor tied to volume, credit card processing fees. Break-even math depends on separating the two correctly." },
  { q: "Why is my restaurant busy but still not profitable?", a: "Being above break-even in covers doesn't guarantee profit if your average check or variable cost ratio has shifted since you last calculated it. Recalculate break-even whenever rent, staffing, or menu prices change materially." },
];

export default function BreakEvenCalculatorClient() {
  const [fixedCosts, setFixedCosts] = useState("");
  const [avgCheck, setAvgCheck] = useState("");
  const [variableCostPct, setVariableCostPct] = useState("35");
  const [daysOpen, setDaysOpen] = useState("26");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const fc = parseFloat(fixedCosts) || 0;
  const check = parseFloat(avgCheck) || 0;
  const vcPct = Math.min(Math.max(parseFloat(variableCostPct) || 0, 0), 95);
  const days = parseFloat(daysOpen) || 26;

  const contributionMarginPct = 100 - vcPct;
  const breakEvenRevenue = contributionMarginPct > 0 ? fc / (contributionMarginPct / 100) : 0;
  const breakEvenCovers = check > 0 ? breakEvenRevenue / check : 0;
  const coversPerDay = days > 0 ? breakEvenCovers / days : 0;

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <LogoIcon size={28} />
            <span className="font-black text-gray-900 tracking-tight text-lg">Menu<span className="text-orange-500">Pricer</span></span>
          </Link>
          <span className="text-gray-300 text-sm">·</span>
          <span className="text-sm text-gray-500">Break-Even Calculator</span>
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
            Restaurant Break-Even Calculator<br /><span className="text-orange-500">How Many Covers Do You Need?</span>
          </h1>
          <p className="text-sm text-gray-400 mb-4">Last reviewed: July 28, 2026</p>
          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Enter fixed costs, average check, and variable cost percentage to see the revenue and covers you need just to break even.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-5">
            <h2 className="text-base font-black text-gray-900">Enter Your Numbers</h2>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Monthly Fixed Costs ($)</label>
              <input type="number" min="0" step="100" placeholder="e.g. 18000" value={fixedCosts} onChange={(e) => setFixedCosts(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-lg font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400" />
              <p className="text-xs text-gray-400 mt-1">Rent, insurance, salaried management, loan payments.</p>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Average Check Size ($)</label>
              <input type="number" min="0" step="1" placeholder="e.g. 28" value={avgCheck} onChange={(e) => setAvgCheck(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-lg font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Variable Cost % of Revenue</label>
              <div className="flex items-center gap-3">
                <input type="range" min="10" max="80" step="1" value={variableCostPct} onChange={(e) => setVariableCostPct(e.target.value)}
                  className="flex-1 accent-orange-500" />
                <input type="number" min="0" max="95" value={variableCostPct} onChange={(e) => setVariableCostPct(e.target.value)}
                  className="w-20 text-center border border-gray-200 rounded-xl px-3 py-2 font-black text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400" />
                <span className="text-gray-500 font-bold">%</span>
              </div>
              <p className="text-xs text-gray-400 mt-1">Food cost plus hourly labor and card fees tied to each sale.</p>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Days Open per Month</label>
              <input type="number" min="1" max="31" step="1" value={daysOpen} onChange={(e) => setDaysOpen(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-lg font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400" />
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-orange-500 rounded-2xl p-6 text-white">
              <p className="text-sm font-semibold text-orange-100 mb-1">Break-Even Revenue / Month</p>
              <p className="text-4xl font-black">{breakEvenRevenue > 0 ? `$${breakEvenRevenue.toLocaleString(undefined, { maximumFractionDigits: 0 })}` : "—"}</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <p className="text-xs text-gray-500 mb-1">Covers / Month</p>
                <p className="text-xl font-black text-gray-900">{breakEvenCovers > 0 ? Math.ceil(breakEvenCovers).toLocaleString() : "—"}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <p className="text-xs text-gray-500 mb-1">Covers / Day</p>
                <p className="text-xl font-black text-gray-900">{coversPerDay > 0 ? Math.ceil(coversPerDay) : "—"}</p>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
              <p className="text-xs font-bold text-blue-700 uppercase tracking-wide mb-2">Formula</p>
              <p className="text-sm font-mono text-blue-800">
                Break-Even Revenue = Fixed Costs ÷ Contribution Margin %<br />
                Contribution Margin % = 100% − Variable Cost %
              </p>
            </div>
            <Link href="/" className="block w-full bg-gray-900 hover:bg-gray-800 text-white font-bold px-6 py-3.5 rounded-xl text-center text-sm transition-colors">
              🤖 Price dishes to clear break-even faster →
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
            <Link href="/prime-cost-calculator" className="hover:text-orange-500 transition-colors">Prime Cost Calculator</Link>
            <Link href="/restaurant-profit-calculator" className="hover:text-orange-500 transition-colors">Profit Calculator</Link>
            <Link href="/tools" className="hover:text-orange-500 transition-colors">All Tools</Link>
          </div>
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} MenuPricer</p>
        </div>
      </footer>
    </div>
  );
}
