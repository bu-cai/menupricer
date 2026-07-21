import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "MenuPricer vs Alternatives — Compare Menu Pricing Tools",
  description:
    "See how MenuPricer compares to spreadsheets, Square, Toast, and other restaurant tools. Side-by-side feature comparison for menu pricing and food cost calculation.",
  alternates: { canonical: "https://www.aimenupricer.com/compare" },
  openGraph: {
    title: "MenuPricer vs Alternatives — Compare Menu Pricing Tools",
    description: "Side-by-side comparison of MenuPricer vs spreadsheets, Square, Toast, and more.",
    url: "https://www.aimenupricer.com/compare",
  },
};

const COMPARISONS = [
  {
    slug: "menupricer-vs-spreadsheet",
    competitor: "Spreadsheets",
    icon: "📊",
    tagline: "Excel & Google Sheets",
    verdict: "MenuPricer takes 30 seconds. Spreadsheets take 2 hours.",
    keyWin: "AI ingredient cost estimation — no manual data entry",
  },
  {
    slug: "menupricer-vs-square",
    competitor: "Square for Restaurants",
    icon: "◾",
    tagline: "POS system with basic reporting",
    verdict: "Square tracks sales. MenuPricer sets the right prices before they go on the menu.",
    keyWin: "Dedicated menu pricing tool, not a POS add-on",
  },
  {
    slug: "menupricer-vs-toast",
    competitor: "Toast POS",
    icon: "🍞",
    tagline: "Restaurant management platform",
    verdict: "Toast manages your restaurant. MenuPricer ensures every dish is priced to profit.",
    keyWin: "Purpose-built food cost and pricing calculator — no hardware lock-in",
  },
];

export default function CompareHubPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <LogoIcon size={28} />
            <span className="font-black text-gray-900 tracking-tight text-lg">Menu<span className="text-orange-500">Pricer</span></span>
          </Link>
          <span className="text-gray-300 text-sm">·</span>
          <span className="text-sm text-gray-500">Compare</span>
          <Link href="/" className="ml-auto text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors">Try Free →</Link>
        </div>
      </header>

      <section className="relative overflow-hidden bg-white border-b border-gray-100">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:48px_48px] opacity-50" />
        <div className="relative max-w-3xl mx-auto px-6 pt-14 pb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-4">
            MenuPricer vs<br /><span className="text-orange-500">Every Alternative</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Most restaurant tools track what happened. MenuPricer sets the right prices before you go to market — so every dish is profitable from day one.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-14">
        <div className="space-y-4">
          {COMPARISONS.map((c) => (
            <Link key={c.slug} href={`/compare/${c.slug}`}
              className="group flex items-start gap-5 bg-white border border-gray-200 hover:border-orange-300 hover:shadow-md rounded-2xl p-6 transition-all">
              <div className="text-4xl shrink-0">{c.icon}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-orange-500 uppercase tracking-wide">MenuPricer vs</span>
                  <h2 className="font-black text-gray-900 group-hover:text-orange-600 transition-colors">{c.competitor}</h2>
                  <span className="text-xs text-gray-400">({c.tagline})</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{c.verdict}</p>
                <p className="text-xs font-semibold text-green-600">✓ {c.keyWin}</p>
              </div>
              <span className="text-orange-400 font-bold shrink-0 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 border-t border-gray-100 py-14">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-black text-gray-900 mb-2 text-center">Why restaurant owners switch to MenuPricer</h2>
          <p className="text-gray-500 text-center mb-10">Three things no other tool does together.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: "🤖", title: "AI ingredient cost estimation", desc: "Type a dish name — AI estimates wholesale ingredient costs. No manual research, no spreadsheet setup." },
              { icon: "📐", title: "3 pricing tiers per dish", desc: "Budget, Standard, and Premium prices — each with food cost %, gross margin, and context for where it fits." },
              { icon: "🚗", title: "Delivery platform math built in", desc: "Every report shows the DoorDash and Uber Eats adjusted price that protects your margin." },
            ].map((f) => (
              <div key={f.title} className="bg-white rounded-xl border border-gray-200 p-5 text-center">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-bold text-gray-900 text-sm mb-2">{f.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-orange-500 py-14">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">Try it free — first dish in 30 seconds</h2>
          <p className="text-orange-100 mb-8">No credit card. No spreadsheet setup. No POS integration required.</p>
          <Link href="/" className="inline-block bg-white text-orange-600 font-black px-8 py-3.5 rounded-xl hover:bg-orange-50 transition-colors shadow-lg shadow-orange-600/20">Try MenuPricer Free →</Link>
          <p className="text-orange-200 text-xs mt-4">Free for up to 5 dishes · Pro from $9/month</p>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-100 py-6">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2"><LogoIcon size={20} /><span className="font-black text-gray-900 text-sm">Menu<span className="text-orange-500">Pricer</span></span></div>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <Link href="/compare/menupricer-vs-spreadsheet" className="hover:text-orange-500 transition-colors">vs Spreadsheets</Link>
            <Link href="/compare/menupricer-vs-square" className="hover:text-orange-500 transition-colors">vs Square</Link>
            <Link href="/compare/menupricer-vs-toast" className="hover:text-orange-500 transition-colors">vs Toast</Link>
          </div>
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} MenuPricer</p>
        </div>
      </footer>
    </div>
  );
}
