import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "MenuPricer vs Spreadsheets — Why Restaurant Owners Switch",
  description:
    "Comparing MenuPricer vs Excel or Google Sheets for menu pricing. See why AI-powered menu pricing beats manual spreadsheets for restaurant food cost calculation.",
  alternates: { canonical: "https://www.aimenupricer.com/compare/menupricer-vs-spreadsheet" },
  openGraph: {
    title: "MenuPricer vs Spreadsheets for Restaurant Menu Pricing",
    description: "AI menu pricing in 30 seconds vs. 2-hour spreadsheet builds that break when you edit them.",
    url: "https://www.aimenupricer.com/compare/menupricer-vs-spreadsheet",
  },
};

const COMPARISON_ROWS = [
  { feature: "Setup time", mp: "0 minutes — open and type a dish name", ss: "2–4 hours to build formulas and ingredient lists" },
  { feature: "Ingredient cost data", mp: "AI estimates wholesale costs automatically", ss: "Manual research and entry required for every item" },
  { feature: "Food cost % calculation", mp: "Automatic, updates instantly", ss: "Manual formula — breaks when rows change" },
  { feature: "3 pricing tiers", mp: "Budget / Standard / Premium for every dish", ss: "Single price — requires custom formula per tier" },
  { feature: "Delivery platform markup", mp: "DoorDash & Uber Eats offset built in", ss: "Not included — requires separate calculation" },
  { feature: "Menu copy", mp: "AI writes 15–30 word menu description", ss: "None — written separately" },
  { feature: "PDF export", mp: "One click — branded PDF per dish or full menu", ss: "Manual formatting — breaks on edit" },
  { feature: "Cloud sync", mp: "Auto-saved, access from any device", ss: "Manual file sharing, version conflicts" },
  { feature: "Collaboration", mp: "Share link — anyone can view", ss: "File attachment or Google Drive permissions" },
  { feature: "Mobile use", mp: "Fully responsive web app", ss: "Poor mobile experience" },
  { feature: "Price", mp: "Free for 5 dishes · $9/mo unlimited", ss: "Free (but your time isn't)" },
];

const FAQS = [
  { q: "Can't I just use a spreadsheet to calculate food cost?", a: "Yes — and many restaurant owners do. The problem is setup time (2–4 hours to build a working template), maintenance (formulas break when you add rows), and missing data (you still need to look up ingredient costs manually). MenuPricer eliminates all three." },
  { q: "Is MenuPricer more accurate than a spreadsheet?", a: "For ingredient cost estimates, a spreadsheet with manually entered data from your actual invoices is more accurate. MenuPricer uses AI estimates based on typical North American wholesale prices — great for quick decisions and new menu items, but best combined with your real supplier costs." },
  { q: "What if I already have a spreadsheet I like?", a: "Keep it for your actual invoices and bookkeeping. Use MenuPricer for fast pricing of new items, checking margins across your menu, and generating PDF cost sheets for your team. They complement each other well." },
  { q: "Does MenuPricer replace restaurant accounting software?", a: "No. MenuPricer is a menu pricing and food cost calculator — not accounting software. It helps you set the right price before a dish goes on the menu. Use it alongside your accounting software, not instead of it." },
];

export default function VsSpreadsheetPage() {
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
          <span className="text-sm text-gray-500">vs Spreadsheets</span>
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
            MenuPricer vs<br /><span className="text-orange-500">Spreadsheets</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Excel and Google Sheets work. They just take hours to set up, break when you edit them, and don't know what your ingredients cost.
          </p>
        </div>
      </section>

      {/* Hero comparison */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 gap-4 mb-12">
          <div className="bg-orange-500 rounded-2xl p-6 text-white text-center">
            <p className="text-xs font-bold uppercase tracking-wide text-orange-200 mb-2">MenuPricer</p>
            <p className="text-5xl font-black mb-2">30s</p>
            <p className="text-sm text-orange-100">From dish name to priced menu item</p>
          </div>
          <div className="bg-gray-100 rounded-2xl p-6 text-center">
            <p className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">Spreadsheet</p>
            <p className="text-5xl font-black text-gray-400 mb-2">2–4h</p>
            <p className="text-sm text-gray-400">To build a working pricing template</p>
          </div>
        </div>

        {/* Feature table */}
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left px-5 py-4 font-bold text-gray-600 w-1/4">Feature</th>
                <th className="text-left px-5 py-4 font-bold text-orange-600 w-[37.5%]">
                  <div className="flex items-center gap-2">
                    <LogoIcon size={18} />MenuPricer
                  </div>
                </th>
                <th className="text-left px-5 py-4 font-bold text-gray-400 w-[37.5%]">📊 Spreadsheet</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row, i) => (
                <tr key={i} className={`border-b border-gray-50 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/40"}`}>
                  <td className="px-5 py-3.5 font-semibold text-gray-700 text-xs">{row.feature}</td>
                  <td className="px-5 py-3.5 text-xs text-gray-700">
                    <span className="text-green-500 mr-1.5">✓</span>{row.mp}
                  </td>
                  <td className="px-5 py-3.5 text-xs text-gray-400">
                    <span className="text-gray-300 mr-1.5">–</span>{row.ss}
                  </td>
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
              title: "The spreadsheet problem isn't the math — it's the data",
              body: "Building a food cost formula in Excel is straightforward. The real work is populating it: researching wholesale prices for every ingredient, converting units (oz to kg, each to case), and keeping it updated when supplier prices change. Most restaurant owners spend 2–4 hours on setup, then abandon the spreadsheet when it gets stale.",
            },
            {
              title: "MenuPricer starts with AI-estimated ingredient costs",
              body: "Type a dish name — \"Chicken Tikka Masala\" or \"Classic Cheeseburger\" — and MenuPricer's AI estimates the typical wholesale ingredient costs for that dish. You can edit any number. The point isn't perfect accuracy on every line item; it's getting a useful price in 30 seconds instead of 4 hours.",
            },
            {
              title: "Three tiers, not one",
              body: "A spreadsheet gives you one price. MenuPricer gives you three: Budget (highest volume, delivery-friendly), Standard (dine-in anchor), and Premium (special occasion, small batch). Each has its own food cost %, gross margin, and context — so you can position dishes across your menu, not just calculate a single number.",
            },
          ].map((s) => (
            <div key={s.title}>
              <h2 className="text-xl font-black text-gray-900 mb-3">{s.title}</h2>
              <p className="text-gray-500 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
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
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">Try it — no spreadsheet setup required</h2>
          <p className="text-orange-100 mb-8">Type a dish name. Get food cost %, margin, and 3 prices in 30 seconds. Free for up to 5 dishes.</p>
          <Link href="/" className="inline-block bg-white text-orange-600 font-black px-8 py-3.5 rounded-xl hover:bg-orange-50 transition-colors shadow-lg shadow-orange-600/20">Try MenuPricer Free →</Link>
          <p className="text-orange-200 text-xs mt-4">No credit card · No setup</p>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-100 py-6">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2"><LogoIcon size={20} /><span className="font-black text-gray-900 text-sm">Menu<span className="text-orange-500">Pricer</span></span></div>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <Link href="/compare" className="hover:text-orange-500">All Comparisons</Link>
            <Link href="/compare/menupricer-vs-square" className="hover:text-orange-500">vs Square</Link>
            <Link href="/compare/menupricer-vs-toast" className="hover:text-orange-500">vs Toast</Link>
            <Link href="/food-cost-calculator" className="hover:text-orange-500">Food Cost Calculator</Link>
          </div>
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} MenuPricer</p>
        </div>
      </footer>
    </div>
  );
}
