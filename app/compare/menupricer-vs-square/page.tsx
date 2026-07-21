import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "MenuPricer vs Square for Restaurants — Menu Pricing Comparison",
  description:
    "MenuPricer vs Square for Restaurants: Square tracks sales after the fact. MenuPricer sets the right menu prices before dishes go live — with AI food cost calculation.",
  alternates: { canonical: "https://www.aimenupricer.com/compare/menupricer-vs-square" },
  openGraph: {
    title: "MenuPricer vs Square for Restaurants",
    description: "Square is a POS. MenuPricer is a menu pricing tool. They solve different problems — here's how they compare.",
    url: "https://www.aimenupricer.com/compare/menupricer-vs-square",
  },
};

const COMPARISON_ROWS = [
  { feature: "Primary purpose", mp: "Menu pricing & food cost calculator", ss: "Point-of-sale (POS) system" },
  { feature: "Menu pricing", mp: "AI-powered — food cost, margin, 3 tiers per dish", ss: "Manual price entry — no cost analysis" },
  { feature: "Food cost %", mp: "Calculated automatically from ingredient costs", ss: "Not available — tracks revenue, not cost" },
  { feature: "Ingredient cost tracking", mp: "AI estimates + manual entry per dish", ss: "Not available in base plan" },
  { feature: "Delivery platform math", mp: "DoorDash & Uber Eats offset built in", ss: "Integration via third-party apps, no margin analysis" },
  { feature: "PDF menu export", mp: "Branded PDF per dish or full menu", ss: "Menu export available, no cost breakdown" },
  { feature: "Hardware required", mp: "None — browser-based", ss: "Square Terminal or Reader recommended" },
  { feature: "Monthly cost", mp: "Free (5 dishes) · $9/mo unlimited", ss: "Free POS + 2.6% transaction fee; Restaurant plan $60/mo+" },
  { feature: "Best for", mp: "Setting profitable prices before launch", ss: "Processing payments and tracking sales" },
];

const FAQS = [
  { q: "Does Square help me set menu prices?", a: "Square lets you enter menu item prices and tracks what sells — but it doesn't calculate food cost percentage, ingredient costs, or margin. It tells you what you sold, not whether the price was right." },
  { q: "Can I use MenuPricer with Square?", a: "Yes. Use MenuPricer to calculate the right price for each dish, then enter those prices into Square. They work well together — MenuPricer sets the price, Square processes the payment." },
  { q: "Does Square have a food cost calculator?", a: "Square for Restaurants (paid plan) includes some recipe costing features, but it requires manual ingredient entry and doesn't provide AI-assisted pricing or delivery platform offset calculations." },
  { q: "Is MenuPricer a POS system?", a: "No. MenuPricer is a menu pricing and food cost calculator — not a POS. It helps you determine the right price for each dish before it goes on your menu. You still need a POS like Square or Toast to process payments." },
];

export default function VsSquarePage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <LogoIcon size={28} />
            <span className="font-black text-gray-900 tracking-tight text-lg">Menu<span className="text-orange-500">Pricer</span></span>
          </Link>
          <span className="text-gray-300 text-sm">·</span>
          <Link href="/compare" className="text-sm text-gray-400 hover:text-gray-600">Compare</Link>
          <span className="text-gray-300 text-sm">·</span>
          <span className="text-sm text-gray-500">vs Square</span>
          <Link href="/" className="ml-auto text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors">Try Free →</Link>
        </div>
      </header>

      <section className="relative overflow-hidden bg-white border-b border-gray-100">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:48px_48px] opacity-50" />
        <div className="relative max-w-3xl mx-auto px-6 pt-14 pb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1.5 rounded-full mb-5 uppercase tracking-wide">
            Comparison
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-4">
            MenuPricer vs<br /><span className="text-orange-500">Square for Restaurants</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Square is a POS that tracks what you sold. MenuPricer ensures every dish was priced to profit in the first place. They solve different problems.
          </p>
        </div>
      </section>

      {/* The core difference */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 gap-4 mb-12">
          <div className="bg-orange-500 rounded-2xl p-6 text-white">
            <p className="text-xs font-bold uppercase tracking-wide text-orange-200 mb-3">MenuPricer</p>
            <p className="text-lg font-black mb-2">Sets the right price</p>
            <p className="text-sm text-orange-100">Before the dish goes on the menu — based on real food cost, margin targets, and delivery platform fees.</p>
          </div>
          <div className="bg-gray-100 rounded-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-3">Square</p>
            <p className="text-lg font-black text-gray-600 mb-2">Tracks what you sold</p>
            <p className="text-sm text-gray-400">After the sale — revenue, transaction history, and basic sales analytics.</p>
          </div>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left px-5 py-4 font-bold text-gray-600 w-1/4">Feature</th>
                <th className="text-left px-5 py-4 font-bold text-orange-600 w-[37.5%]">
                  <div className="flex items-center gap-2"><LogoIcon size={18} />MenuPricer</div>
                </th>
                <th className="text-left px-5 py-4 font-bold text-gray-400 w-[37.5%]">◾ Square</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row, i) => (
                <tr key={i} className={`border-b border-gray-50 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/40"}`}>
                  <td className="px-5 py-3.5 font-semibold text-gray-700 text-xs">{row.feature}</td>
                  <td className="px-5 py-3.5 text-xs text-gray-700"><span className="text-green-500 mr-1.5">✓</span>{row.mp}</td>
                  <td className="px-5 py-3.5 text-xs text-gray-400"><span className="text-gray-300 mr-1.5">–</span>{row.ss}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Narrative */}
      <section className="bg-gray-50 border-t border-gray-100 py-14">
        <div className="max-w-3xl mx-auto px-6 space-y-10">
          {[
            {
              title: "Square tells you what happened. MenuPricer tells you what to charge.",
              body: "Square's core job is payment processing and sales reporting. It's excellent at both. But when you're building your menu — deciding what to charge for a dish — Square doesn't help. There's no food cost calculation, no margin analysis, no guidance on whether $14 or $18 is the right price for your pasta.",
            },
            {
              title: "Use both tools together",
              body: "The most profitable restaurant owners use MenuPricer to set prices, then Square to process payments and track which dishes actually sell. MenuPricer doesn't replace Square — it ensures the prices in your Square menu are the right ones.",
            },
            {
              title: "The delivery platform blind spot",
              body: "Square integrates with DoorDash and Uber Eats for order management — but it doesn't calculate whether your current menu prices are profitable after 25–30% commission. MenuPricer calculates the break-even delivery price for every dish, so you know exactly what to charge on each platform.",
            },
          ].map((s) => (
            <div key={s.title}>
              <h2 className="text-xl font-black text-gray-900 mb-3">{s.title}</h2>
              <p className="text-gray-500 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-14">
        <h2 className="text-2xl font-black text-gray-900 mb-8">Common questions</h2>
        <div className="space-y-5">
          {FAQS.map((item, i) => (
            <div key={i} className="border-b border-gray-100 pb-5">
              <h3 className="font-bold text-gray-900 mb-2">{item.q}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-orange-500 py-14">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">Price your menu before it goes into Square</h2>
          <p className="text-orange-100 mb-8">MenuPricer calculates food cost, margin, and the right selling price for every dish. Then enter those numbers into Square with confidence.</p>
          <Link href="/" className="inline-block bg-white text-orange-600 font-black px-8 py-3.5 rounded-xl hover:bg-orange-50 transition-colors shadow-lg shadow-orange-600/20">Try MenuPricer Free →</Link>
          <p className="text-orange-200 text-xs mt-4">No credit card · No hardware required</p>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-100 py-6">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2"><LogoIcon size={20} /><span className="font-black text-gray-900 text-sm">Menu<span className="text-orange-500">Pricer</span></span></div>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <Link href="/compare" className="hover:text-orange-500">All Comparisons</Link>
            <Link href="/compare/menupricer-vs-spreadsheet" className="hover:text-orange-500">vs Spreadsheets</Link>
            <Link href="/compare/menupricer-vs-toast" className="hover:text-orange-500">vs Toast</Link>
          </div>
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} MenuPricer</p>
        </div>
      </footer>
    </div>
  );
}
