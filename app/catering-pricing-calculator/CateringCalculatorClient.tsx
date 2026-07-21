"use client";

import { useState } from "react";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

const EVENT_TYPES = [
  { label: "Corporate Lunch / Buffet", foodPerPerson: 18, serviceMultiplier: 1.0 },
  { label: "Wedding Reception", foodPerPerson: 55, serviceMultiplier: 1.4 },
  { label: "Cocktail Party", foodPerPerson: 22, serviceMultiplier: 1.1 },
  { label: "BBQ / Casual Event", foodPerPerson: 15, serviceMultiplier: 0.9 },
  { label: "Seated Dinner (formal)", foodPerPerson: 45, serviceMultiplier: 1.3 },
  { label: "Birthday / Private Party", foodPerPerson: 25, serviceMultiplier: 1.0 },
  { label: "Custom", foodPerPerson: 0, serviceMultiplier: 1.0 },
];

const FAQS = [
  { q: "How do you calculate catering cost per person?", a: "Add food cost + labor cost + overhead and supplies, then divide by guest count. Apply your markup (30–40%) to get the client price per person. Formula: Price Per Person = (Food + Labor + Overhead) ÷ Guests × (1 + Markup %)." },
  { q: "What is the average catering cost per person?", a: "Corporate lunch buffets: $25–$45/person. Wedding receptions: $85–$150+/person. Cocktail parties: $35–$65/person. BBQ events: $20–$40/person. These include food, basic service, and disposables." },
  { q: "How much profit should a caterer make?", a: "Caterers typically aim for 25–35% net profit margin. Food cost should be 28–35% of client price, labor 25–30%, overhead 10–15%. The remaining 20–35% is gross profit before business overhead." },
  { q: "Should I charge a gratuity on catering?", a: "Yes — add a service charge of 18–22% on full-service catering (plated dinners, wedding receptions). For drop-off or buffet catering, gratuity is optional but typically 10–15%. Always state it clearly in the quote." },
  { q: "How do I price a catering minimum?", a: "Most caterers require a food minimum ($500–$2,000 for small events, $5,000+ for large events). Set your minimum based on your break-even point: fixed costs per event ÷ desired margin = minimum revenue needed." },
];

export default function CateringCalculatorClient() {
  const [guests, setGuests] = useState("50");
  const [eventTypeIdx, setEventTypeIdx] = useState(0);
  const [customFoodPerPerson, setCustomFoodPerPerson] = useState("");
  const [staffCount, setStaffCount] = useState("3");
  const [staffHours, setStaffHours] = useState("6");
  const [staffRate, setStaffRate] = useState("20");
  const [overheadPct, setOverheadPct] = useState("15");
  const [markupPct, setMarkupPct] = useState("35");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const numGuests = Math.max(1, parseInt(guests) || 50);
  const eventType = EVENT_TYPES[eventTypeIdx];
  const foodPerPerson = eventTypeIdx === EVENT_TYPES.length - 1
    ? (parseFloat(customFoodPerPerson) || 0)
    : eventType.foodPerPerson;

  const totalFoodCost = foodPerPerson * numGuests;
  const laborCost = (parseInt(staffCount) || 0) * (parseFloat(staffHours) || 0) * (parseFloat(staffRate) || 20);
  const overheadCost = (totalFoodCost + laborCost) * (parseFloat(overheadPct) / 100);
  const totalCost = totalFoodCost + laborCost + overheadCost;
  const markup = parseFloat(markupPct) / 100;
  const totalClientPrice = totalCost * (1 + markup);
  const pricePerPerson = numGuests > 0 ? totalClientPrice / numGuests : 0;
  const profitTotal = totalClientPrice - totalCost;
  const profitMarginPct = totalClientPrice > 0 ? (profitTotal / totalClientPrice) * 100 : 0;

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <LogoIcon size={28} />
            <span className="font-black text-gray-900 tracking-tight text-lg">Menu<span className="text-orange-500">Pricer</span></span>
          </Link>
          <span className="text-gray-300 text-sm">·</span>
          <span className="text-sm text-gray-500">Catering Calculator</span>
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
            Catering Pricing Calculator<br /><span className="text-orange-500">Cost Per Person & Event Quote</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Enter guest count, food cost, labor, and overhead to get total event cost, price per person, and profit margin instantly.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Inputs */}
          <div className="space-y-5">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-5">
              <h2 className="text-base font-black text-gray-900">Event Details</h2>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Number of Guests</label>
                <input type="number" min="1" placeholder="e.g. 80" value={guests} onChange={(e) => setGuests(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-2xl font-black text-gray-900 text-center focus:outline-none focus:ring-2 focus:ring-orange-400" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Event Type</label>
                <div className="grid grid-cols-2 gap-2">
                  {EVENT_TYPES.map((et, i) => (
                    <button key={i} onClick={() => setEventTypeIdx(i)}
                      className={`text-xs font-semibold px-3 py-2.5 rounded-xl border transition-colors text-left ${eventTypeIdx === i ? "bg-orange-500 text-white border-orange-500" : "border-gray-200 text-gray-600 hover:border-orange-300"}`}>
                      {et.label}
                      {i < EVENT_TYPES.length - 1 && <span className="block font-normal opacity-70">${et.foodPerPerson}/person est.</span>}
                    </button>
                  ))}
                </div>
              </div>

              {eventTypeIdx === EVENT_TYPES.length - 1 && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Food Cost Per Person ($)</label>
                  <input type="number" min="0" step="0.5" placeholder="e.g. 28" value={customFoodPerPerson} onChange={(e) => setCustomFoodPerPerson(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-lg font-bold focus:outline-none focus:ring-2 focus:ring-orange-400" />
                </div>
              )}
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-4">
              <h2 className="text-base font-black text-gray-900">Labor & Overhead</h2>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Staff Count", value: staffCount, setter: setStaffCount, placeholder: "3" },
                  { label: "Hours Each", value: staffHours, setter: setStaffHours, placeholder: "6" },
                  { label: "Rate ($/hr)", value: staffRate, setter: setStaffRate, placeholder: "20" },
                ].map(({ label, value, setter, placeholder }) => (
                  <div key={label}>
                    <label className="block text-xs font-semibold text-gray-500 mb-1">{label}</label>
                    <input type="number" min="0" step="any" placeholder={placeholder} value={value} onChange={(e) => setter(e.target.value)}
                      className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm font-bold text-center focus:outline-none focus:ring-2 focus:ring-orange-400" />
                  </div>
                ))}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Overhead % (supplies, rentals, transport)</label>
                <div className="flex items-center gap-3">
                  <input type="range" min="0" max="30" step="1" value={overheadPct} onChange={(e) => setOverheadPct(e.target.value)} className="flex-1 accent-orange-500" />
                  <span className="font-black text-orange-500 w-10 text-right">{overheadPct}%</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Your Markup %</label>
                <div className="flex items-center gap-3">
                  <input type="range" min="10" max="80" step="5" value={markupPct} onChange={(e) => setMarkupPct(e.target.value)} className="flex-1 accent-orange-500" />
                  <span className="font-black text-orange-500 w-10 text-right">{markupPct}%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-4">
            <div className="bg-orange-500 rounded-2xl p-6 text-white">
              <p className="text-sm font-semibold text-orange-100 mb-1">Price Per Person</p>
              <p className="text-6xl font-black">{pricePerPerson > 0 ? `$${pricePerPerson.toFixed(2)}` : "—"}</p>
              <p className="text-sm text-orange-100 mt-2">{numGuests} guests · {eventType.label}</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <p className="text-xs text-gray-500 mb-1">Total Quote</p>
                <p className="text-2xl font-black text-gray-900">{totalClientPrice > 0 ? `$${totalClientPrice.toFixed(0)}` : "—"}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <p className="text-xs text-gray-500 mb-1">Your Profit</p>
                <p className="text-2xl font-black text-green-600">{profitTotal > 0 ? `$${profitTotal.toFixed(0)}` : "—"}</p>
                <p className="text-xs text-gray-400 mt-0.5">{profitMarginPct > 0 ? `${profitMarginPct.toFixed(1)}% margin` : ""}</p>
              </div>
            </div>

            {totalCost > 0 && (
              <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-3">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Cost Breakdown</p>
                {[
                  { label: "Food cost", value: totalFoodCost, color: "bg-orange-400" },
                  { label: "Labor", value: laborCost, color: "bg-blue-400" },
                  { label: "Overhead", value: overheadCost, color: "bg-purple-400" },
                  { label: "Your profit", value: profitTotal, color: "bg-green-500" },
                ].map(({ label, value, color }) => (
                  <div key={label}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-500">{label}</span>
                      <span className="font-bold">${value.toFixed(0)}</span>
                    </div>
                    <div className="bg-gray-100 rounded-full h-1.5">
                      <div className={`h-1.5 rounded-full ${color}`} style={{ width: `${totalClientPrice > 0 ? Math.min(100, (value / totalClientPrice) * 100) : 0}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            )}

            <Link href="/" className="block w-full bg-gray-900 hover:bg-gray-800 text-white font-bold px-6 py-3.5 rounded-xl text-center text-sm transition-colors">
              🤖 Price individual dishes with AI →
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
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">Need AI pricing for individual dishes?</h2>
          <p className="text-orange-100 mb-8">MenuPricer calculates food cost, margin, and 3 price tiers for any dish — with delivery platform markup built in.</p>
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
            <Link href="/bakery-pricing-calculator" className="hover:text-orange-500 transition-colors">Bakery Pricing</Link>
            <Link href="/restaurant-profit-calculator" className="hover:text-orange-500 transition-colors">Profit Calculator</Link>
          </div>
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} MenuPricer</p>
        </div>
      </footer>
    </div>
  );
}
