import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "MenuPricer vs MenuTotal: Which Menu Pricing Tool Is Better? (2026)",
  description: "Comparing MenuPricer vs MenuTotal for restaurant menu pricing. See feature-by-feature comparison, pricing, and which tool is the better fit for your restaurant.",
  alternates: { canonical: "https://www.aimenupricer.com/compare/menupricer-vs-menutotal" },
  openGraph: {
    title: "MenuPricer vs MenuTotal: Which Menu Pricing Tool Is Better? (2026)",
    description: "Feature-by-feature comparison of MenuPricer and MenuTotal. Which menu costing tool should you use for your restaurant?",
    url: "https://www.aimenupricer.com/compare/menupricer-vs-menutotal",
  },
};

const SCHEMA = {
  "@context": "https://schema.org", "@type": "WebPage",
  name: "MenuPricer vs MenuTotal Comparison",
  description: "Side-by-side comparison of MenuPricer and MenuTotal for restaurant menu pricing and food cost calculation.",
  url: "https://www.aimenupricer.com/compare/menupricer-vs-menutotal",
};

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Compare", item: "https://www.aimenupricer.com/compare" },
    { "@type": "ListItem", position: 3, name: "MenuPricer vs MenuTotal", item: "https://www.aimenupricer.com/compare/menupricer-vs-menutotal" },
  ],
};

const FEATURES = [
  { feature: "AI-powered price suggestions", mp: true, mt: false, note: "MenuPricer uses AI to recommend optimal prices" },
  { feature: "Food cost calculator", mp: true, mt: true, note: "" },
  { feature: "Recipe costing", mp: true, mt: true, note: "" },
  { feature: "Ingredient yield adjustment", mp: true, mt: true, note: "" },
  { feature: "Batch pricing (20 dishes at once)", mp: true, mt: false, note: "MenuPricer Pro only" },
  { feature: "PDF menu export", mp: true, mt: false, note: "MenuPricer Pro only" },
  { feature: "Delivery platform margin calculator", mp: true, mt: false, note: "DoorDash, Uber Eats, Grubhub" },
  { feature: "Menu engineering quadrant view", mp: true, mt: false, note: "" },
  { feature: "Cost warning / margin alerts", mp: true, mt: false, note: "" },
  { feature: "Cloud sync across devices", mp: true, mt: false, note: "MenuPricer Pro only" },
  { feature: "Free tier available", mp: true, mt: false, note: "MenuPricer: 5 dishes free" },
  { feature: "Mobile-friendly interface", mp: true, mt: false, note: "" },
  { feature: "Bilingual (EN/ZH)", mp: true, mt: false, note: "" },
];

export default function MenuPricerVsMenuTotalPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2"><LogoIcon size={28} /><span className="font-black text-gray-900 tracking-tight text-lg">Menu<span className="text-orange-500">Pricer</span></span></Link>
          <span className="text-gray-300 text-sm">·</span>
          <Link href="/compare" className="text-sm text-gray-500 hover:text-orange-500">Compare</Link>
          <Link href="/" className="ml-auto text-sm font-semibold text-orange-500 hover:text-orange-600 whitespace-nowrap">Try Free →</Link>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-12">
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <Link href="/" className="hover:text-orange-500">Home</Link><span>›</span>
          <Link href="/compare" className="hover:text-orange-500">Compare</Link><span>›</span>
          <span className="text-gray-600">MenuPricer vs MenuTotal</span>
        </nav>
        <div className="mb-10 text-center">
          <span className="text-xs font-bold bg-orange-100 text-orange-600 px-3 py-1 rounded-full">Comparison</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight mt-4 mb-4">MenuPricer vs MenuTotal</h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">Looking for the best menu pricing tool? Here is a direct comparison of MenuPricer and MenuTotal across features, pricing, and use case fit — so you can make the right call for your restaurant.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-10">
          <div className="border-2 border-orange-400 rounded-2xl p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-3"><LogoIcon size={28} /><span className="font-black text-lg text-gray-900">Menu<span className="text-orange-500">Pricer</span></span></div>
            <p className="text-sm text-gray-500 mb-4">AI-powered menu pricing for restaurants, cafes, food trucks, and caterers. Built for operators who want a price recommendation, not just a calculator.</p>
            <p className="font-black text-gray-900 mb-1">Free + $9/mo Pro</p>
            <p className="text-xs text-gray-400 mb-4">Annual: $79/yr</p>
            <Link href="/" className="inline-block w-full bg-orange-500 text-white font-black py-2.5 rounded-xl hover:bg-orange-600 transition-colors text-sm">Try MenuPricer Free</Link>
          </div>
          <div className="border border-gray-200 rounded-2xl p-6 text-center bg-gray-50">
            <p className="font-black text-lg text-gray-700 mb-3">MenuTotal</p>
            <p className="text-sm text-gray-500 mb-4">Recipe and food cost calculator. Primarily focused on ingredient-level costing and recipe management for restaurant back-of-house teams.</p>
            <p className="font-black text-gray-900 mb-1">Paid plans only</p>
            <p className="text-xs text-gray-400 mb-4">No free tier</p>
            <div className="w-full border border-gray-300 text-gray-500 font-bold py-2.5 rounded-xl text-sm text-center">MenuTotal</div>
          </div>
        </div>
        <section className="mb-12">
          <h2 className="text-2xl font-black text-gray-900 mb-5">Feature comparison</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-sm">
              <thead><tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left px-4 py-3 font-bold text-gray-700">Feature</th>
                <th className="text-center px-4 py-3 font-bold text-orange-600 w-24">MenuPricer</th>
                <th className="text-center px-4 py-3 font-bold text-gray-600 w-24">MenuTotal</th>
              </tr></thead>
              <tbody>
                {FEATURES.map((row, i) => (
                  <tr key={i} className="border-b border-gray-100 last:border-0">
                    <td className="px-4 py-3 text-gray-700">
                      {row.feature}
                      {row.note && <span className="text-xs text-gray-400 ml-1">({row.note})</span>}
                    </td>
                    <td className="px-4 py-3 text-center">{row.mp ? <span className="text-green-500 text-lg">✓</span> : <span className="text-gray-300 text-lg">—</span>}</td>
                    <td className="px-4 py-3 text-center">{row.mt ? <span className="text-green-500 text-lg">✓</span> : <span className="text-gray-300 text-lg">—</span>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-black text-gray-900 mb-5">Which should you use?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="border-2 border-orange-200 bg-orange-50 rounded-2xl p-5">
              <p className="font-black text-orange-700 mb-3">Choose MenuPricer if you want:</p>
              <ul className="space-y-2 text-sm text-gray-700">
                {["AI-suggested prices, not just cost calculations", "A free tier to try before committing", "Mobile-friendly interface for quick updates", "Delivery platform margin analysis built in", "Batch pricing for your entire menu at once", "PDF export to send directly to your printer"].map(item => (
                  <li key={item} className="flex items-start gap-2"><span className="text-orange-500 shrink-0 mt-0.5">✓</span>{item}</li>
                ))}
              </ul>
            </div>
            <div className="border border-gray-200 bg-gray-50 rounded-2xl p-5">
              <p className="font-black text-gray-700 mb-3">MenuTotal may fit if you need:</p>
              <ul className="space-y-2 text-sm text-gray-700">
                {["Deep recipe management with ingredient sub-recipes", "Integration with existing POS or inventory systems", "Multi-location restaurant group management", "Back-of-house team collaboration features"].map(item => (
                  <li key={item} className="flex items-start gap-2"><span className="text-gray-400 shrink-0 mt-0.5">→</span>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section className="bg-orange-500 rounded-2xl p-7 text-white text-center">
          <h2 className="text-2xl font-black mb-2">Try MenuPricer free — no credit card needed</h2>
          <p className="text-orange-100 text-sm mb-5 max-w-xl mx-auto">Price your first 5 dishes instantly. See exactly what AI-powered pricing looks like before committing to Pro.</p>
          <Link href="/" className="inline-block bg-white text-orange-600 font-black px-8 py-3.5 rounded-xl hover:bg-orange-50 transition-colors">Start Free Now →</Link>
        </section>
        <section className="mt-10 border-t border-gray-100 pt-8">
          <h2 className="text-lg font-black text-gray-900 mb-4">More comparisons</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { href: "/compare/menupricer-vs-craftable", title: "MenuPricer vs Craftable", desc: "AI pricing tool vs restaurant management platform" },
              { href: "/compare/menupricer-vs-square", title: "MenuPricer vs Square", desc: "Menu pricing vs POS with basic costing" },
              { href: "/compare/menupricer-vs-toast", title: "MenuPricer vs Toast", desc: "Pricing tool vs full restaurant management suite" },
            ].map((post) => (
              <Link key={post.href} href={post.href} className="group bg-gray-50 hover:bg-orange-50 border border-gray-200 hover:border-orange-200 rounded-xl p-4 transition-all">
                <p className="font-bold text-gray-800 text-sm group-hover:text-orange-600 transition-colors">{post.title}</p>
                <p className="text-xs text-gray-500 mt-1">{post.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <footer className="border-t border-gray-100 mt-16 py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2"><LogoIcon size={20} /><span className="font-black text-gray-900 text-sm">Menu<span className="text-orange-500">Pricer</span></span></div>
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} MenuPricer · aimenupricer.com</p>
        </div>
      </footer>
    </div>
  );
}