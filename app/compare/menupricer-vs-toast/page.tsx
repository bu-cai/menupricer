import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "MenuPricer vs Toast POS — Restaurant Menu Pricing Comparison",
  description:
    "MenuPricer vs Toast POS for restaurant menu pricing. Toast manages your restaurant operations. MenuPricer calculates food cost and sets profitable prices for every dish.",
  alternates: { canonical: "https://www.aimenupricer.com/compare/menupricer-vs-toast" },
  openGraph: {
    title: "MenuPricer vs Toast POS — Menu Pricing Comparison",
    description: "Toast is a full restaurant platform. MenuPricer is a dedicated food cost and menu pricing calculator. Here's when you need each.",
    url: "https://www.aimenupricer.com/compare/menupricer-vs-toast",
  },
};

const COMPARISON_ROWS = [
  { feature: "Primary purpose", mp: "Menu pricing & food cost calculator", ss: "Full-service restaurant management platform" },
  { feature: "Menu pricing tool", mp: "AI-powered — food cost, margin, 3 tiers per dish", ss: "Manual price entry — no cost analysis included" },
  { feature: "Food cost %", mp: "Auto-calculated from ingredient costs", ss: "Available via Toast Food Cost add-on (extra cost)" },
  { feature: "AI ingredient cost estimation", mp: "Built in — estimates costs from dish name", ss: "Not available — manual ingredient entry only" },
  { feature: "Delivery platform margin", mp: "DoorDash & Uber Eats offset built in", ss: "Integrates with platforms, no margin impact tool" },
  { feature: "Hardware", mp: "None — any browser", ss: "Toast-proprietary hardware required" },
  { feature: "Contract", mp: "Month-to-month, cancel anytime", ss: "Annual or 2-year contracts standard" },
  { feature: "Monthly cost", mp: "Free (5 dishes) · $9/mo unlimited", ss: "$110–$165+/mo starter; hardware $627+ upfront" },
  { feature: "Setup time", mp: "Zero — open browser, start typing", ss: "Days to weeks including hardware installation" },
  { feature: "Best for", mp: "Independent operators setting profitable prices", ss: "Full-service restaurants needing enterprise POS" },
];

const FAQS = [
  { q: "Does Toast have a food cost calculator?", a: "Toast offers a \"Food Cost\" feature as part of their higher-tier plans, but it requires manually entering every ingredient and updating prices as supplier costs change. It also doesn't include AI-estimated costs or delivery platform offset calculations." },
  { q: "Is Toast worth it for small restaurants?", a: "Toast is powerful but expensive for small operators — hardware costs $600+, software starts at $110/month, and contracts are typically 1–2 years. Independent restaurants with 1–2 locations often get better value from lighter tools." },
  { q: "Can I use MenuPricer with Toast?", a: "Yes. Use MenuPricer to calculate the right price for every dish, then enter those prices into your Toast menu. They're complementary — MenuPricer sets prices, Toast manages operations and payments." },
  { q: "Does MenuPricer replace Toast?", a: "No. Toast handles payments, kitchen displays, staff scheduling, inventory, and much more. MenuPricer only does menu pricing and food cost calculation — and it does that one thing much faster and with AI assistance." },
];

const BREADCRUMB = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Compare", item: "https://www.aimenupricer.com/compare" },
    { "@type": "ListItem", position: 3, name: "MenuPricer vs Toast", item: "https://www.aimenupricer.com/compare/menupricer-vs-toast" },
  ],
};

export default function VsToastPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <LogoIcon size={28} />
            <span className="font-black text-gray-900 tracking-tight text-lg">Menu<span className="text-orange-500">Pricer</span></span>
          </Link>
          <span className="text-gray-300 text-sm">·</span>
          <Link href="/compare" className="text-sm text-gray-400 hover:text-gray-600">Compare</Link>
          <span className="text-gray-300 text-sm">·</span>
          <span className="text-sm text-gray-500">vs Toast</span>
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
            MenuPricer vs<br /><span className="text-orange-500">Toast POS</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Toast is a full restaurant management platform — hardware, POS, payroll, inventory. MenuPricer is a focused tool for one job: getting every dish priced to profit.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 gap-4 mb-12">
          <div className="bg-orange-500 rounded-2xl p-6 text-white">
            <p className="text-xs font-bold uppercase tracking-wide text-orange-200 mb-3">MenuPricer</p>
            <p className="text-2xl font-black mb-1">$0–$9/mo</p>
            <p className="text-sm text-orange-100 mb-3">No hardware · No contract · Start free</p>
            <p className="text-xs text-orange-200">Purpose-built for menu pricing</p>
          </div>
          <div className="bg-gray-100 rounded-2xl p-6">
            <p className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-3">Toast</p>
            <p className="text-2xl font-black text-gray-600 mb-1">$110–$165+/mo</p>
            <p className="text-sm text-gray-400 mb-3">+ $627+ hardware · Annual contract</p>
            <p className="text-xs text-gray-400">Full restaurant management platform</p>
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
                <th className="text-left px-5 py-4 font-bold text-gray-400 w-[37.5%]">🍞 Toast</th>
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

      <section className="bg-gray-50 border-t border-gray-100 py-14">
        <div className="max-w-3xl mx-auto px-6 space-y-10">
          {[
            {
              title: "Toast does a lot. Menu pricing isn't its focus.",
              body: "Toast is an impressive platform — kitchen display systems, online ordering, payroll, inventory, loyalty programs. For full-service restaurants needing an enterprise POS, it's a serious choice. But \"what should I charge for this dish?\" is not a question Toast is designed to answer. You enter prices into Toast; you figure out what those prices should be elsewhere.",
            },
            {
              title: "Toast's food cost feature isn't the same as a pricing tool",
              body: "Toast offers food cost tracking as an add-on — you can enter recipe ingredients and it'll calculate cost. But it doesn't estimate ingredients from a dish name, doesn't give you 3 pricing tiers, and doesn't calculate delivery platform offsets. It's inventory management with a cost view, not a pricing tool.",
            },
            {
              title: "For independent operators, Toast is often overkill",
              body: "If you're running a 1–2 location independent restaurant, food truck, or catering operation, Toast's $110+/month plus hardware costs and annual contract commitment is a heavy investment. Many operators use a lighter POS (Square, Clover, or even cash) and a dedicated tool like MenuPricer for pricing — getting 80% of the value at 10% of the cost.",
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
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">Price your menu in 30 seconds — no hardware needed</h2>
          <p className="text-orange-100 mb-8">MenuPricer runs in any browser. No contract, no hardware, no lengthy setup. Just type a dish and get the right price.</p>
          <Link href="/" className="inline-block bg-white text-orange-600 font-black px-8 py-3.5 rounded-xl hover:bg-orange-50 transition-colors shadow-lg shadow-orange-600/20">Try MenuPricer Free →</Link>
          <p className="text-orange-200 text-xs mt-4">Free for 5 dishes · $9/mo for unlimited</p>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-100 py-6">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2"><LogoIcon size={20} /><span className="font-black text-gray-900 text-sm">Menu<span className="text-orange-500">Pricer</span></span></div>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <Link href="/compare" className="hover:text-orange-500">All Comparisons</Link>
            <Link href="/compare/menupricer-vs-spreadsheet" className="hover:text-orange-500">vs Spreadsheets</Link>
            <Link href="/compare/menupricer-vs-square" className="hover:text-orange-500">vs Square</Link>
          </div>
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} MenuPricer</p>
        </div>
      </footer>
    </div>
  );
}
