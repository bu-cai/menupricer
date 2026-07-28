import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "Free Restaurant Pricing Calculators",
  description:
    "Ten free calculators for restaurant, bakery, café, food truck, and catering pricing — food cost, menu markup, profit margin, delivery commission, and more. No signup required.",
  alternates: { canonical: "https://www.aimenupricer.com/tools" },
  openGraph: {
    title: "Free Restaurant Pricing Calculators | MenuPricer",
    description:
      "Ten free calculators for menu pricing, food cost, profit margin, and delivery commission — no signup required.",
    url: "https://www.aimenupricer.com/tools",
  },
};

const BREADCRUMB = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Free Tools", item: "https://www.aimenupricer.com/tools" },
  ],
};

const CORE_TOOLS = [
  {
    href: "/food-cost-calculator",
    name: "Food Cost Calculator",
    icon: "🧮",
    desc: "Enter ingredient costs and get your food cost percentage, suggested menu price, and profit margin.",
  },
  {
    href: "/recipe-cost-calculator",
    name: "Recipe Cost Calculator",
    icon: "📋",
    desc: "Add every ingredient and quantity to get total recipe cost, cost per serving, and ideal price.",
  },
  {
    href: "/menu-cost-calculator",
    name: "Menu Cost Calculator",
    icon: "📄",
    desc: "Set your target margin and get the right menu price for any dish, instantly.",
  },
  {
    href: "/restaurant-markup-calculator",
    name: "Restaurant Markup Calculator",
    icon: "📈",
    desc: "Enter ingredient cost and markup percentage to get menu price, gross margin, and profit per dish.",
  },
  {
    href: "/restaurant-profit-calculator",
    name: "Restaurant Profit Margin Calculator",
    icon: "💰",
    desc: "Enter revenue, food cost, labor, and overhead to see net profit and how to improve it.",
  },
];

const VERTICAL_TOOLS = [
  {
    href: "/bakery-pricing-calculator",
    name: "Bakery Pricing Calculator",
    icon: "🥐",
    desc: "Price cakes, bread, cookies, and pastries based on ingredient cost, labor, and overhead.",
  },
  {
    href: "/catering-pricing-calculator",
    name: "Catering Pricing Calculator",
    icon: "🍽️",
    desc: "Calculate cost per person for weddings, corporate lunches, and parties from headcount and menu.",
  },
  {
    href: "/coffee-shop-pricing-calculator",
    name: "Coffee Shop Pricing Calculator",
    icon: "☕",
    desc: "Price espresso, lattes, cold brew, and specialty drinks based on ingredient cost and overhead.",
  },
  {
    href: "/food-truck-pricing-calculator",
    name: "Food Truck Pricing Calculator",
    icon: "🚚",
    desc: "Price your menu based on ingredient cost, prep time, truck overhead, and event fees.",
  },
  {
    href: "/delivery-platform-calculator",
    name: "DoorDash & Uber Eats Commission Calculator",
    icon: "🛵",
    desc: "See exactly how much delivery platforms take, and the price you need to protect your margin.",
  },
];

export default function ToolsHubPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />

      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <LogoIcon size={28} />
            <span className="font-black text-gray-900 tracking-tight text-lg">
              Menu<span className="text-orange-500">Pricer</span>
            </span>
          </Link>
          <span className="text-gray-300 text-sm">·</span>
          <span className="text-sm text-gray-500">Free Tools</span>
          <Link href="/" className="ml-auto text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors">
            AI Pricing Tool →
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden bg-white border-b border-gray-100">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:48px_48px] opacity-50" />
        <div className="relative max-w-3xl mx-auto px-6 pt-14 pb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-4">
            Free Restaurant<br /><span className="text-orange-500">Pricing Calculators</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Ten free calculators covering food cost, menu markup, profit margin, and delivery
            commission — plus dedicated tools for bakeries, cafés, food trucks, and caterers. No
            signup required for a single calculation.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-14">
        <h2 className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-5">
          Core pricing tools
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {CORE_TOOLS.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="group block bg-white border border-gray-200 hover:border-orange-300 hover:shadow-md rounded-2xl p-6 transition-all"
            >
              <div className="text-2xl mb-3">{t.icon}</div>
              <h3 className="font-black text-gray-900 group-hover:text-orange-600 transition-colors mb-2">
                {t.name}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{t.desc}</p>
              <span className="text-xs font-semibold text-orange-500 group-hover:underline">
                Open calculator →
              </span>
            </Link>
          ))}
        </div>

        <h2 className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-5">
          By business type
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {VERTICAL_TOOLS.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="group block bg-white border border-gray-200 hover:border-orange-300 hover:shadow-md rounded-2xl p-6 transition-all"
            >
              <div className="text-2xl mb-3">{t.icon}</div>
              <h3 className="font-black text-gray-900 group-hover:text-orange-600 transition-colors mb-2">
                {t.name}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{t.desc}</p>
              <span className="text-xs font-semibold text-orange-500 group-hover:underline">
                Open calculator →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-orange-500 py-14">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
            Want AI to price your whole menu at once?
          </h2>
          <p className="text-orange-100 mb-8">
            These calculators handle one dish at a time. MenuPricer's AI drafts the ingredient
            breakdown from just a dish name and prices your entire menu in minutes.
          </p>
          <Link
            href="/"
            className="inline-block bg-white text-orange-600 font-black px-8 py-3.5 rounded-xl hover:bg-orange-50 transition-colors shadow-lg shadow-orange-600/20"
          >
            Try MenuPricer Free →
          </Link>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-100 py-6">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <LogoIcon size={20} />
            <span className="font-black text-gray-900 text-sm">
              Menu<span className="text-orange-500">Pricer</span>
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <Link href="/menu-pricing" className="hover:text-orange-500 transition-colors">By Restaurant Type</Link>
            <Link href="/glossary" className="hover:text-orange-500 transition-colors">Glossary</Link>
            <Link href="/blog" className="hover:text-orange-500 transition-colors">Blog</Link>
          </div>
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} MenuPricer</p>
        </div>
      </footer>
    </div>
  );
}
