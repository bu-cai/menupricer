"use client";

import { useState } from "react";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

const PLATFORMS = [
  { name: "DoorDash Basic", commission: 25, processing: 2.9 },
  { name: "DoorDash Plus", commission: 20, processing: 2.9 },
  { name: "DoorDash Premier", commission: 15, processing: 2.9 },
  { name: "Uber Eats Standard", commission: 25, processing: 3.0 },
  { name: "Uber Eats Plus", commission: 30, processing: 3.0 },
  { name: "Grubhub Basic", commission: 15, processing: 3.05 },
  { name: "Grubhub Premium", commission: 25, processing: 3.05 },
  { name: "Custom", commission: 25, processing: 3.0 },
];

const FAQS = [
  { q: "What percentage does DoorDash take from restaurants?", a: "DoorDash charges 15–30% commission depending on plan: Basic (25–30%), Plus (20–25%), Premier (15%). Payment processing adds ~2.9%. Most restaurants pay 25–30% total on each order." },
  { q: "How much does Uber Eats charge restaurants?", a: "Uber Eats charges 15–30% commission: Lite (15%, limited area), Standard (25%), Plus (30%, more marketing). Plus payment processing of ~3%. Net payout is typically 67–82% of the menu price." },
  { q: "Should restaurants charge more on delivery platforms?", a: "Yes — most restaurants add 15–25% to delivery platform prices to offset commissions. A dish at $12 dine-in should be $14–$15 on DoorDash to achieve the same net revenue. Many platforms now allow separate menus." },
  { q: "How do I calculate my delivery profit margin?", a: "Net Revenue = Price × (1 − Commission − Processing). Profit = Net Revenue − Food Cost − Labor. At 25% commission on a $14 item: $14 × 0.722 = $10.11 net. Minus $4 food cost = $6.11 profit vs. $8 dine-in." },
  { q: "Can I have different prices on delivery apps vs. dine-in?", a: "Yes. DoorDash, Uber Eats, and Grubhub all allow you to set different prices for your delivery menu. This is the recommended approach — add 15–25% to offset commissions and maintain your margin." },
];

export default function DeliveryCalculatorClient() {
  const [platformIdx, setPlatformIdx] = useState(0);
  const [customCommission, setCustomCommission] = useState("25");
  const [customProcessing, setCustomProcessing] = useState("3.0");
  const [dineInPrice, setDineInPrice] = useState("");
  const [foodCost, setFoodCost] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const platform = PLATFORMS[platformIdx];
  const isCustom = platformIdx === PLATFORMS.length - 1;
  const commission = isCustom ? (parseFloat(customCommission) || 25) : platform.commission;
  const processing = isCustom ? (parseFloat(customProcessing) || 3) : platform.processing;
  const totalFee = commission + processing;

  const dip = parseFloat(dineInPrice) || 0;
  const fc = parseFloat(foodCost) || 0;

  // Net revenue at dine-in price on delivery
  const netOnDelivery = dip * (1 - totalFee / 100);
  const dineInProfit = dip > 0 && fc > 0 ? dip - fc : 0;
  const deliveryProfit = netOnDelivery > 0 && fc > 0 ? netOnDelivery - fc : 0;
  const profitLoss = deliveryProfit - dineInProfit;

  // Price needed on delivery to match dine-in net revenue
  const breakEvenDeliveryPrice = dip > 0 ? dip / (1 - totalFee / 100) : 0;
  // Price needed to match dine-in profit margin
  const matchProfitDeliveryPrice = fc > 0 && dip > 0
    ? (dip - fc) / (1 - totalFee / 100) + fc
    : 0;

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <LogoIcon size={28} />
            <span className="font-black text-gray-900 tracking-tight text-lg">Menu<span className="text-orange-500">Pricer</span></span>
          </Link>
          <span className="text-gray-300 text-sm">·</span>
          <span className="text-sm text-gray-500">Delivery Commission Calculator</span>
          <Link href="/" className="ml-auto text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors">AI Pricing Tool →</Link>
        </div>
      </header>

      <section className="relative overflow-hidden bg-white border-b border-gray-100">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:48px_48px] opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/8 rounded-full blur-3xl" />
        <div className="relative max-w-3xl mx-auto px-6 pt-14 pb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1.5 rounded-full mb-5 uppercase tracking-wide">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />Free Tool · DoorDash · Uber Eats · Grubhub
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-4">
            Delivery Platform<br /><span className="text-orange-500">Commission Calculator</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            See exactly how much DoorDash, Uber Eats, and Grubhub take per order — and calculate the delivery price you need to protect your margin.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-5">
            {/* Platform selector */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <h2 className="text-base font-black text-gray-900 mb-4">Select Platform & Plan</h2>
              <div className="grid grid-cols-2 gap-2">
                {PLATFORMS.map((p, i) => (
                  <button key={i} onClick={() => setPlatformIdx(i)}
                    className={`text-xs font-semibold px-3 py-2.5 rounded-xl border transition-colors text-left ${platformIdx === i ? "bg-orange-500 text-white border-orange-500" : "border-gray-200 text-gray-600 hover:border-orange-300"}`}>
                    {p.name}
                    {i < PLATFORMS.length - 1 && <span className="block font-normal opacity-75">{p.commission}% commission</span>}
                  </button>
                ))}
              </div>
              {isCustom && (
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1">Commission %</label>
                    <input type="number" min="0" max="50" step="0.5" value={customCommission} onChange={(e) => setCustomCommission(e.target.value)}
                      className="w-full border border-gray-200 rounded-xl px-3 py-2 font-bold text-center focus:outline-none focus:ring-2 focus:ring-orange-400" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1">Processing %</label>
                    <input type="number" min="0" max="10" step="0.1" value={customProcessing} onChange={(e) => setCustomProcessing(e.target.value)}
                      className="w-full border border-gray-200 rounded-xl px-3 py-2 font-bold text-center focus:outline-none focus:ring-2 focus:ring-orange-400" />
                  </div>
                </div>
              )}
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-4">
              <h2 className="text-base font-black text-gray-900">Your Dish</h2>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Dine-In Menu Price ($)</label>
                <input type="number" min="0" step="0.25" placeholder="e.g. 12.00" value={dineInPrice} onChange={(e) => setDineInPrice(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-lg font-bold focus:outline-none focus:ring-2 focus:ring-orange-400" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Food Cost per Dish ($)</label>
                <input type="number" min="0" step="0.01" placeholder="e.g. 3.50" value={foodCost} onChange={(e) => setFoodCost(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-lg font-bold focus:outline-none focus:ring-2 focus:ring-orange-400" />
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-4">
            {/* Fee summary */}
            <div className="bg-gray-900 rounded-2xl p-6 text-white">
              <p className="text-sm font-semibold text-gray-400 mb-3">{isCustom ? "Custom Platform" : platform.name} — Total Fee</p>
              <p className="text-5xl font-black text-orange-400">{totalFee.toFixed(1)}%</p>
              <p className="text-sm text-gray-400 mt-2">{commission}% commission + {processing}% processing</p>
              {dip > 0 && (
                <p className="text-sm mt-3 text-white">On a ${dip.toFixed(2)} order → <span className="font-black text-red-400">−${(dip * totalFee / 100).toFixed(2)}</span> in fees → <span className="font-black text-green-400">${netOnDelivery.toFixed(2)}</span> net</p>
              )}
            </div>

            {/* Comparison */}
            {dip > 0 && fc > 0 && (
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 space-y-4">
                <h3 className="text-sm font-black text-gray-900">Profit Comparison</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-green-50 border border-green-100 rounded-xl p-4">
                    <p className="text-xs text-gray-500 mb-1">Dine-In Profit</p>
                    <p className="text-2xl font-black text-green-600">${dineInProfit.toFixed(2)}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{dip > 0 ? ((dineInProfit / dip) * 100).toFixed(1) : 0}% margin</p>
                  </div>
                  <div className={`border rounded-xl p-4 ${deliveryProfit < dineInProfit ? "bg-red-50 border-red-100" : "bg-green-50 border-green-100"}`}>
                    <p className="text-xs text-gray-500 mb-1">Delivery Profit <span className="text-gray-400">(same price)</span></p>
                    <p className={`text-2xl font-black ${deliveryProfit < 0 ? "text-red-600" : deliveryProfit < dineInProfit ? "text-orange-600" : "text-green-600"}`}>${deliveryProfit.toFixed(2)}</p>
                    <p className={`text-xs mt-0.5 font-semibold ${profitLoss < 0 ? "text-red-500" : "text-green-500"}`}>
                      {profitLoss < 0 ? `−$${Math.abs(profitLoss).toFixed(2)} vs dine-in` : `+$${profitLoss.toFixed(2)} vs dine-in`}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Recommended delivery prices */}
            {dip > 0 && (
              <div className="bg-orange-50 border border-orange-100 rounded-xl p-5 space-y-3">
                <p className="text-xs font-bold text-orange-700 uppercase tracking-wide">Recommended Delivery Prices</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Break even on revenue</span>
                    <span className="font-black text-gray-900">${breakEvenDeliveryPrice.toFixed(2)}</span>
                  </div>
                  {fc > 0 && (
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Match dine-in profit $</span>
                      <span className="font-black text-orange-600">${matchProfitDeliveryPrice.toFixed(2)}</span>
                    </div>
                  )}
                </div>
                <p className="text-xs text-gray-500">Set your delivery menu to these prices to protect your margin.</p>
              </div>
            )}

            <Link href="/" className="block w-full bg-gray-900 hover:bg-gray-800 text-white font-bold px-6 py-3.5 rounded-xl text-center text-sm transition-colors">
              🤖 Get AI pricing with delivery offset built in →
            </Link>
          </div>
        </div>
      </section>

      {/* Platform fee table */}
      <section className="bg-gray-50 border-t border-gray-100 py-14">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-black text-gray-900 mb-2">Delivery Platform Commission Rates (2026)</h2>
          <p className="text-sm text-gray-500 mb-8">Rates vary by market and negotiated contract. Verify with your account rep.</p>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead><tr className="border-b border-gray-100 bg-gray-50">
                <th className="text-left px-5 py-3.5 font-bold text-gray-700">Platform & Plan</th>
                <th className="text-left px-5 py-3.5 font-bold text-gray-700">Commission</th>
                <th className="text-left px-5 py-3.5 font-bold text-gray-700">Processing</th>
                <th className="text-left px-5 py-3.5 font-bold text-gray-700">Total Fee</th>
                <th className="text-left px-5 py-3.5 font-bold text-gray-700">Net on $12 dish</th>
              </tr></thead>
              <tbody>
                {PLATFORMS.slice(0, -1).map((p, i) => (
                  <tr key={i} className="border-b border-gray-50 hover:bg-orange-50/40 transition-colors">
                    <td className="px-5 py-3.5 font-semibold text-gray-800">{p.name}</td>
                    <td className="px-5 py-3.5 text-gray-600">{p.commission}%</td>
                    <td className="px-5 py-3.5 text-gray-600">{p.processing}%</td>
                    <td className="px-5 py-3.5"><span className="bg-red-100 text-red-700 font-bold px-2.5 py-0.5 rounded-full text-xs">{(p.commission + p.processing).toFixed(1)}%</span></td>
                    <td className="px-5 py-3.5 font-bold text-green-700">${(12 * (1 - (p.commission + p.processing) / 100)).toFixed(2)}</td>
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
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">MenuPricer calculates delivery offset automatically</h2>
          <p className="text-orange-100 mb-8">Every AI pricing report includes DoorDash and Uber Eats adjusted prices — so you always know the right delivery price without doing the math manually.</p>
          <Link href="/" className="inline-block bg-white text-orange-600 font-black px-8 py-3.5 rounded-xl text-base hover:bg-orange-50 transition-colors shadow-lg shadow-orange-600/20">Try MenuPricer Free →</Link>
          <p className="text-orange-200 text-xs mt-4">No credit card · No sign-up required</p>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-100 py-6">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2"><LogoIcon size={20} /><span className="font-black text-gray-900 text-sm">Menu<span className="text-orange-500">Pricer</span></span></div>
          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
            <Link href="/food-cost-calculator" className="hover:text-orange-500 transition-colors">Food Cost Calculator</Link>
            <Link href="/restaurant-profit-calculator" className="hover:text-orange-500 transition-colors">Profit Calculator</Link>
            <Link href="/restaurant-markup-calculator" className="hover:text-orange-500 transition-colors">Markup Calculator</Link>
          </div>
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} MenuPricer</p>
        </div>
      </footer>
    </div>
  );
}
