import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "MenuPricer vs Craftable: Which Is Better for Restaurant Pricing? (2026)",
  description: "Comparing MenuPricer vs Craftable for restaurant menu pricing and food cost management. Feature comparison, pricing, and which tool fits your operation.",
  alternates: { canonical: "https://www.aimenupricer.com/compare/menupricer-vs-craftable" },
  openGraph: {
    title: "MenuPricer vs Craftable: Which Is Better for Restaurant Pricing? (2026)",
    description: "MenuPricer vs Craftable side-by-side: features, pricing, and which restaurant cost management tool fits your operation.",
    url: "https://www.aimenupricer.com/compare/menupricer-vs-craftable",
  },
};

const SCHEMA = {
  "@context": "https://schema.org", "@type": "WebPage",
  name: "MenuPricer vs Craftable Comparison",
  description: "Side-by-side comparison of MenuPricer and Craftable for restaurant menu pricing and food cost management.",
  url: "https://www.aimenupricer.com/compare/menupricer-vs-craftable",
};

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Compare", item: "https://www.aimenupricer.com/compare" },
    { "@type": "ListItem", position: 3, name: "MenuPricer vs Craftable", item: "https://www.aimenupricer.com/compare/menupricer-vs-craftable" },
  ],
};

const FEATURES = [
  { feature: "AI-powered price recommendations", mp: true, cr: false, note: "MenuPricer suggests optimal prices, not just costs" },
  { feature: "Food cost calculator", mp: true, cr: true, note: "" },
  { feature: "Recipe costing", mp: true, cr: true, note: "" },
  { feature: "Inventory management", mp: false, cr: true, note: "Craftable specializes in inventory tracking" },
  { feature: "POS integration", mp: false, cr: true, note: "Craftable integrates with major POS systems" },
  { feature: "Vendor invoice management", mp: false, cr: true, note: "Craftable handles AP and ordering" },
  { feature: "Batch pricing (20 dishes at once)", mp: true, cr: false, note: "MenuPricer Pro" },
  { feature: "PDF menu export", mp: true, cr: false, note: "MenuPricer Pro" },
  { feature: "Delivery platform margin analysis", mp: true, cr: false, note: "" },
  { feature: "Menu engineering quadrant view", mp: true, cr: false, note: "" },
  { feature: "Free tier available", mp: true, cr: false, note: "MenuPricer: 5 dishes free. Craftable: demo only" },
  { feature: "Setup time", mp: true, cr: false, note: "MenuPricer: instant. Craftable: days-to-weeks onboarding" },
  { feature: "Mobile-friendly", mp: true, cr: false, note: "Craftable is primarily desktop-focused" },
  { feature: "Price", mp: true, cr: false, note: "MenuPricer from $9/mo. Craftable: $200-800+/mo" },
];

const PRICING_COMPARE = [
  { plan: "Free tier", mp: "5 dishes free, no credit card", cr: "No free tier (demo only)" },
  { plan: "Starter", mp: "$9/mo (monthly) or $79/yr", cr: "~$200/mo (estimated)" },
  { plan: "Enterprise", mp: "Contact us", cr: "$500–800+/mo" },
  { plan: "Onboarding time", mp: "Instant — price first dish in 60 seconds", cr: "1-3 weeks setup and training" },
];

export default function MenuPricerVsCraftablePage() {
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
          <span className="text-gray-600">MenuPricer vs Craftable</span>
        </nav>
        <div className="mb-10 text-center">
          <span className="text-xs font-bold bg-orange-100 text-orange-600 px-3 py-1 rounded-full">Comparison</span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight mt-4 mb-4">MenuPricer vs Craftable</h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">MenuPricer and Craftable solve different problems. If you need a quick, AI-powered way to price your menu, they are very different tools. Here is the honest comparison.</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 mb-10 text-sm text-blue-800">
          <strong>TL;DR:</strong> Craftable is a full restaurant management platform (inventory, ordering, AP, labor) for multi-unit operators. MenuPricer is a focused menu pricing and food cost tool for independent restaurants and growing concepts. They solve different problems — and Craftable costs 20-50× more.
        </div>
        <div className="grid grid-cols-2 gap-4 mb-10">
          <div className="border-2 border-orange-400 rounded-2xl p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-3"><LogoIcon size={28} /><span className="font-black text-lg text-gray-900">Menu<span className="text-orange-500">Pricer</span></span></div>
            <p className="text-sm text-gray-500 mb-4">AI-powered menu pricing for restaurants, cafes, food trucks, and caterers. Instant setup. Price your first dish in under 60 seconds.</p>
            <p className="font-black text-gray-900 mb-1">Free + $9/mo Pro</p>
            <p className="text-xs text-gray-400 mb-4">Annual: $79/yr</p>
            <Link href="/" className="inline-block w-full bg-orange-500 text-white font-black py-2.5 rounded-xl hover:bg-orange-600 transition-colors text-sm">Try MenuPricer Free</Link>
          </div>
          <div className="border border-gray-200 rounded-2xl p-6 text-center bg-gray-50">
            <p className="font-black text-lg text-gray-700 mb-3">Craftable</p>
            <p className="text-sm text-gray-500 mb-4">Full-platform restaurant management: inventory, ordering, AP automation, recipe costing, labor. Designed for multi-unit restaurant groups.</p>
            <p className="font-black text-gray-900 mb-1">$200–800+/mo</p>
            <p className="text-xs text-gray-400 mb-4">Enterprise pricing, weeks of onboarding</p>
            <div className="w-full border border-gray-300 text-gray-500 font-bold py-2.5 rounded-xl text-sm text-center">Craftable</div>
          </div>
        </div>
        <section className="mb-12">
          <h2 className="text-2xl font-black text-gray-900 mb-5">Feature comparison</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-sm">
              <thead><tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left px-4 py-3 font-bold text-gray-700">Feature</th>
                <th className="text-center px-4 py-3 font-bold text-orange-600 w-24">MenuPricer</th>
                <th className="text-center px-4 py-3 font-bold text-gray-600 w-24">Craftable</th>
              </tr></thead>
              <tbody>
                {FEATURES.map((row, i) => (
                  <tr key={i} className="border-b border-gray-100 last:border-0">
                    <td className="px-4 py-3 text-gray-700">
                      {row.feature}
                      {row.note && <span className="text-xs text-gray-400 ml-1">({row.note})</span>}
                    </td>
                    <td className="px-4 py-3 text-center">{row.mp ? <span className="text-green-500 text-lg">✓</span> : <span className="text-gray-300 text-lg">—</span>}</td>
                    <td className="px-4 py-3 text-center">{row.cr ? <span className="text-green-500 text-lg">✓</span> : <span className="text-gray-300 text-lg">—</span>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-black text-gray-900 mb-5">Pricing comparison</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-sm">
              <thead><tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left px-4 py-3 font-bold text-gray-700"></th>
                <th className="text-left px-4 py-3 font-bold text-orange-600">MenuPricer</th>
                <th className="text-left px-4 py-3 font-bold text-gray-600">Craftable</th>
              </tr></thead>
              <tbody>
                {PRICING_COMPARE.map((row, i) => (
                  <tr key={i} className="border-b border-gray-100 last:border-0">
                    <td className="px-4 py-3 font-medium text-gray-700">{row.plan}</td>
                    <td className="px-4 py-3 text-gray-700">{row.mp}</td>
                    <td className="px-4 py-3 text-gray-500">{row.cr}</td>
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
              <p className="font-black text-orange-700 mb-3">Choose MenuPricer if you are:</p>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  "An independent restaurant, cafe, or food truck",
                  "A growing concept that needs pricing right, fast",
                  "Starting from scratch and want AI guidance on prices",
                  "Budget-conscious (under $100/mo tools budget)",
                  "Operating 1-3 locations",
                  "Looking for a tool that works in minutes, not weeks",
                ].map(item => (
                  <li key={item} className="flex items-start gap-2"><span className="text-orange-500 shrink-0 mt-0.5">✓</span>{item}</li>
                ))}
              </ul>
            </div>
            <div className="border border-gray-200 bg-gray-50 rounded-2xl p-5">
              <p className="font-black text-gray-700 mb-3">Craftable may fit if you are:</p>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  "A multi-unit restaurant group (5+ locations)",
                  "Already using Craftable for inventory and AP",
                  "Running a high-volume operation that needs real-time inventory",
                  "Willing to invest weeks in onboarding and $200+/mo",
                ].map(item => (
                  <li key={item} className="flex items-start gap-2"><span className="text-gray-400 shrink-0 mt-0.5">→</span>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section className="bg-orange-500 rounded-2xl p-7 text-white text-center">
          <h2 className="text-2xl font-black mb-2">Try MenuPricer — price your menu in 60 seconds</h2>
          <p className="text-orange-100 text-sm mb-5 max-w-xl mx-auto">No onboarding. No enterprise contract. Price 5 dishes free, then upgrade if you need more.</p>
          <Link href="/" className="inline-block bg-white text-orange-600 font-black px-8 py-3.5 rounded-xl hover:bg-orange-50 transition-colors">Start Free Now →</Link>
        </section>
        <section className="mt-10 border-t border-gray-100 pt-8">
          <h2 className="text-lg font-black text-gray-900 mb-4">More comparisons</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { href: "/compare/menupricer-vs-menutotal", title: "MenuPricer vs MenuTotal", desc: "AI pricing vs recipe cost calculator" },
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