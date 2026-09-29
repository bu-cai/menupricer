import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

const DATE_PUBLISHED = "2026-09-29";
const DATE_DISPLAY = "September 2026";

export const metadata: Metadata = {
  title: "5 Best Supy Alternatives for Restaurant Food Costing (2026)",
  description:
    "Looking for Supy alternatives? Compare the best food costing and inventory management tools for restaurants — including free options and AI-powered platforms.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/supy-alternatives" },
  openGraph: {
    title: "5 Best Supy Alternatives for Restaurant Food Costing (2026)",
    description:
      "Compare Supy alternatives for restaurant food costing — MenuPricer, MarketMan, Craftable, MarginEdge, and Meez. Pricing, features, and who each is best for.",
    url: "https://www.aimenupricer.com/blog/supy-alternatives",
    type: "article",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "MenuPricer — AI-powered menu pricing for restaurants" }],
  },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "5 Best Supy Alternatives for Restaurant Food Costing (2026)",
  description:
    "A comparison of the best Supy alternatives for restaurant food costing and inventory management — with pricing, key features, and guidance on which tool fits which restaurant.",
  url: "https://www.aimenupricer.com/blog/supy-alternatives",
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_PUBLISHED,
  author: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  publisher: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
};

const BREADCRUMB = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.aimenupricer.com/blog" },
    { "@type": "ListItem", position: 3, name: "Supy Alternatives", item: "https://www.aimenupricer.com/blog/supy-alternatives" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Supy used for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Supy is a restaurant inventory management and food costing platform used primarily by restaurants and hotel F&B operations in the Middle East and internationally. It handles purchase orders, supplier management, inventory tracking, and food cost reporting.",
      },
    },
    {
      "@type": "Question",
      name: "What are the best Supy alternatives?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best Supy alternatives for food costing and inventory management are: (1) MenuPricer — AI-powered menu pricing with instant cost analysis; (2) MarketMan — full inventory and procurement management; (3) Craftable — enterprise F&B cost management; (4) MarginEdge — accounting-integrated food costing; (5) Meez — recipe costing with culinary focus.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a free Supy alternative?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MenuPricer offers a free tier that lets you cost dishes and get AI-suggested menu prices without a subscription. It is the most accessible free Supy alternative for independent restaurants focused on pricing rather than full inventory management.",
      },
    },
  ],
};

const TOOLS = [
  {
    rank: 1,
    name: "MenuPricer",
    tag: "Best for: AI-powered menu pricing",
    url: "https://www.aimenupricer.com",
    description: "MenuPricer focuses on the core task of converting ingredient costs into optimal menu prices. Enter your ingredients, get your food cost, theoretical food cost %, and an AI-suggested price based on dish type and market context.",
    pros: [
      "AI-suggested menu prices (not just formula math)",
      "Free tier available — no credit card required",
      "Instant dish costing, no onboarding required",
      "Supports delivery platform price calculations",
    ],
    cons: [
      "No full inventory management or purchase orders",
      "Not designed for enterprise multi-unit operations",
    ],
    price: "Free tier available. Paid plans from $0/mo.",
    bestFor: "Independent restaurants and small chains that need fast, accurate menu pricing without a full inventory system.",
  },
  {
    rank: 2,
    name: "MarketMan",
    tag: "Best for: Full inventory + procurement",
    url: null,
    description: "MarketMan is a comprehensive inventory management platform covering purchase orders, supplier management, actual vs. theoretical cost reporting, and waste tracking. A direct feature-for-feature Supy competitor.",
    pros: [
      "Full procurement and purchase order workflow",
      "Actual vs. theoretical food cost reporting",
      "POS integrations (Square, Toast, Clover)",
      "Multi-location support",
    ],
    cons: [
      "Higher price point ($249–$549/mo)",
      "Longer onboarding curve",
      "Overkill for single-location operators",
    ],
    price: "From ~$249/month.",
    bestFor: "Multi-unit restaurant groups that need full inventory control and supplier management.",
  },
  {
    rank: 3,
    name: "Craftable",
    tag: "Best for: Enterprise F&B groups",
    url: null,
    description: "Craftable (formerly Bevager/Foodager) targets enterprise F&B operations — hotels, large restaurant groups, and venues. Covers ordering, invoicing, recipe costing, and variance analysis.",
    pros: [
      "Enterprise-grade multi-unit support",
      "Covers both food and beverage costing",
      "Strong accounting integrations (QuickBooks, Xero)",
      "Mobile receiving and inventory apps",
    ],
    cons: [
      "Enterprise pricing — not disclosed publicly",
      "Complex setup for smaller operators",
      "Not suitable for single restaurants",
    ],
    price: "Custom pricing for enterprise clients.",
    bestFor: "Hotel F&B departments and restaurant groups with 5+ locations needing enterprise-level cost control.",
  },
  {
    rank: 4,
    name: "MarginEdge",
    tag: "Best for: Accounting-integrated costing",
    url: null,
    description: "MarginEdge connects your invoices, POS, and accounting software to give you real-time food cost data without manual data entry. It automates invoice processing and reconciles actual spend against theoretical cost.",
    pros: [
      "Automated invoice scanning (no manual entry)",
      "Deep accounting integration (QuickBooks, Sage)",
      "Daily food cost reporting",
      "Invoice audit trail for AP teams",
    ],
    cons: [
      "Pricing at ~$300/location/month",
      "Focused on back-of-house finance, not menu strategy",
      "Less useful if you don't have formal accounting processes",
    ],
    price: "~$300/location/month.",
    bestFor: "Restaurant groups with established accounting workflows that want automated, real-time cost data.",
  },
  {
    rank: 5,
    name: "Meez",
    tag: "Best for: Recipe-centric costing",
    url: null,
    description: "Meez is a recipe management and food costing platform built for chefs. It focuses on recipe scaling, version control, and nutritional data alongside cost tracking — making it popular with culinary-first operations.",
    pros: [
      "Chef-friendly recipe interface",
      "Recipe scaling and version management",
      "Nutritional analysis included",
      "Team collaboration features",
    ],
    cons: [
      "Less focus on procurement and purchasing",
      "No deep POS integration for sales-mix costing",
      "Pricing not publicly listed",
    ],
    price: "Custom pricing.",
    bestFor: "Culinary-driven restaurants and catering operations that want professional recipe management with cost tracking.",
  },
];

export default function SupyAlternativesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      <div className="min-h-screen bg-[#0a0a0a] text-white">
        <div className="max-w-3xl mx-auto px-4 py-12">

          <nav className="text-sm text-gray-500 mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-orange-400 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-gray-300">Supy Alternatives</span>
          </nav>

          <header className="mb-10">
            <div className="flex items-center gap-2 text-orange-400 text-sm font-medium mb-3">
              <LogoIcon size={16} />
              <span>MenuPricer Comparison · {DATE_DISPLAY}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
              5 Best Supy Alternatives for Restaurant Food Costing (2026)
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              Supy is a capable inventory platform, but it is not the right fit for every restaurant. Here are the five best alternatives — from free AI-powered pricing tools to enterprise-grade inventory systems.
            </p>
          </header>

          {/* Quick comparison */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 mb-10 overflow-x-auto">
            <p className="text-orange-400 text-sm font-semibold mb-3">Quick comparison</p>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left pb-2 pr-4 text-gray-400 font-medium">Tool</th>
                  <th className="text-left pb-2 pr-4 text-gray-400 font-medium">Starting price</th>
                  <th className="text-left pb-2 text-gray-400 font-medium">Best for</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {[
                  ["MenuPricer", "Free", "Menu pricing & AI pricing"],
                  ["MarketMan", "~$249/mo", "Full inventory + procurement"],
                  ["Craftable", "Custom", "Enterprise F&B groups"],
                  ["MarginEdge", "~$300/loc/mo", "Accounting-integrated costing"],
                  ["Meez", "Custom", "Recipe-centric costing"],
                ].map(([tool, price, best]) => (
                  <tr key={tool}>
                    <td className="py-2 pr-4 text-white font-medium">{tool}</td>
                    <td className="py-2 pr-4 text-orange-300 font-mono text-xs">{price}</td>
                    <td className="py-2 text-gray-400 text-xs">{best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="space-y-8 text-gray-300 leading-relaxed">

            {TOOLS.map((t) => (
              <section key={t.rank} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <div className="flex items-start gap-3 mb-2">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500/20 border border-orange-500/40 rounded-full flex items-center justify-center text-orange-400 font-bold text-sm">
                    {t.rank}
                  </div>
                  <div>
                    <h2 className="text-white font-bold text-xl">{t.name}</h2>
                    <p className="text-orange-400 text-xs">{t.tag}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-4">{t.description}</p>
                <div className="grid sm:grid-cols-2 gap-3 mb-4">
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                    <p className="text-green-400 font-semibold text-xs mb-2">Pros</p>
                    <ul className="space-y-1">
                      {t.pros.map((p) => (
                        <li key={p} className="text-gray-300 text-xs flex gap-2"><span className="text-green-400">+</span>{p}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                    <p className="text-red-400 font-semibold text-xs mb-2">Cons</p>
                    <ul className="space-y-1">
                      {t.cons.map((c) => (
                        <li key={c} className="text-gray-300 text-xs flex gap-2"><span className="text-red-400">−</span>{c}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 text-xs">
                  <div className="bg-gray-800 rounded-lg px-3 py-2">
                    <span className="text-gray-500">Price: </span>
                    <span className="text-white">{t.price}</span>
                  </div>
                  <div className="bg-gray-800 rounded-lg px-3 py-2 flex-1">
                    <span className="text-gray-500">Best for: </span>
                    <span className="text-gray-300">{t.bestFor}</span>
                  </div>
                </div>
                {t.rank === 1 && (
                  <div className="mt-4">
                    <Link href="/" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold px-5 py-2 rounded-xl transition-colors text-sm">
                      <LogoIcon size={16} />
                      Try MenuPricer Free
                    </Link>
                  </div>
                )}
              </section>
            ))}

            {/* How to choose */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">How to Choose the Right Supy Alternative</h2>
              <div className="space-y-3">
                {[
                  { q: "You need menu pricing and food cost analysis only", a: "→ MenuPricer. Free to start, AI-powered, no complex onboarding." },
                  { q: "You need full inventory and supplier management", a: "→ MarketMan. The closest direct Supy alternative with comparable inventory depth." },
                  { q: "You are a hotel F&B department or large restaurant group", a: "→ Craftable. Built for enterprise multi-unit operations." },
                  { q: "You want automated invoice-to-cost-report workflows", a: "→ MarginEdge. Best for operators with formal accounting processes." },
                  { q: "You are culinary-driven and want recipe management + costing", a: "→ Meez. Chef-friendly interface with strong recipe version control." },
                ].map(({ q, a }) => (
                  <div key={q} className="bg-gray-900 border border-gray-800 rounded-lg p-4">
                    <p className="text-white text-sm font-medium mb-1">{q}</p>
                    <p className="text-orange-400 text-sm">{a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  { q: "What is Supy used for?", a: "Supy is a restaurant inventory management and food costing platform used primarily in the Middle East and internationally. It handles purchase orders, supplier management, inventory tracking, and food cost reporting." },
                  { q: "What are the best Supy alternatives?", a: "MenuPricer (AI menu pricing, free tier), MarketMan (full inventory), Craftable (enterprise), MarginEdge (accounting-integrated), and Meez (recipe-centric costing)." },
                  { q: "Is there a free Supy alternative?", a: "Yes — MenuPricer offers a free tier for dish costing and AI-suggested menu prices. It covers the pricing side of what Supy does, without the inventory management layer." },
                ].map(({ q, a }) => (
                  <div key={q} className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                    <p className="text-white font-semibold mb-2">{q}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">Related Comparisons</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  ["/alternatives/marketman-alternatives", "MarketMan Alternatives"],
                  ["/alternatives/marginedge-alternatives", "MarginEdge Alternatives"],
                  ["/alternatives/meez-alternatives", "Meez Alternatives"],
                  ["/blog/best-food-costing-software", "Best Food Costing Software (2026)"],
                  ["/compare/menupricer-vs-spreadsheet", "MenuPricer vs. Spreadsheet"],
                  ["/food-cost-calculator", "Free Food Cost Calculator"],
                ].map(([href, label]) => (
                  <Link key={href} href={href} className="flex items-center gap-2 text-orange-400 hover:text-orange-300 text-sm transition-colors bg-gray-900 border border-gray-800 rounded-lg px-4 py-3">
                    <span className="text-gray-600">→</span>{label}
                  </Link>
                ))}
              </div>
            </section>

          </div>
        </div>
      </div>
    </>
  );
}
