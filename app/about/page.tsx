import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "About MenuPricer — AI Menu Pricing Tool for Restaurant Owners",
  description:
    "MenuPricer is an AI-powered menu pricing calculator that helps restaurant owners, food truck operators, bakeries, and caterers calculate food cost, profit margin, and optimal menu prices in seconds.",
  alternates: { canonical: "https://www.aimenupricer.com/about" },
  openGraph: {
    title: "About MenuPricer — AI Menu Pricing Tool for Restaurant Owners",
    description:
      "MenuPricer helps restaurant owners price their menus accurately. AI-powered food cost calculation, 3 pricing tiers, delivery platform markup, and PDF export.",
    url: "https://www.aimenupricer.com/about",
  },
};

const TOOLS = [
  { href: "/food-cost-calculator", label: "Food Cost Calculator" },
  { href: "/recipe-cost-calculator", label: "Recipe Cost Calculator" },
  { href: "/menu-cost-calculator", label: "Menu Cost Calculator" },
  { href: "/restaurant-markup-calculator", label: "Markup Calculator" },
  { href: "/restaurant-profit-calculator", label: "Profit Calculator" },
  { href: "/bakery-pricing-calculator", label: "Bakery Pricing" },
  { href: "/catering-pricing-calculator", label: "Catering Calculator" },
  { href: "/coffee-shop-pricing-calculator", label: "Coffee Shop Pricing" },
  { href: "/food-truck-pricing-calculator", label: "Food Truck Pricing" },
  { href: "/delivery-platform-calculator", label: "Delivery Commission" },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "MenuPricer",
            url: "https://www.aimenupricer.com",
            logo: "https://www.aimenupricer.com/og-image.png",
            description:
              "AI MenuPricer is a web-based SaaS tool that helps restaurant owners, café operators, food truck vendors, caterers, and bakery owners calculate the correct selling price for any menu item. It uses AI to estimate ingredient costs, then calculates food cost percentage, gross margin, and recommended price across three tiers (Budget, Standard, Premium).",
            sameAs: [
              "https://www.producthunt.com/products/menupricer",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer support",
              email: "support@aimenupricer.com",
            },
          }),
        }}
      />

      <div className="min-h-screen bg-white">
        {/* Nav */}
        <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-6 h-14 flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <LogoIcon size={28} />
              <span className="font-black text-gray-900 tracking-tight text-lg">Menu<span className="text-orange-500">Pricer</span></span>
            </Link>
            <Link href="/" className="ml-auto text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors">Try the Tool Free →</Link>
          </div>
        </header>

        {/* Hero */}
        <section className="max-w-3xl mx-auto px-6 pt-20 pb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wide">
            About MenuPricer
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-6">
            Built for restaurant owners who are tired of guessing at menu prices
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed mb-4">
            Most restaurant owners set menu prices based on gut feel, competitor menus, or outdated spreadsheets. The result: dishes that look profitable but aren't — because the math was never done properly.
          </p>
          <p className="text-lg text-gray-500 leading-relaxed">
            MenuPricer solves this. Type a dish name, enter your ingredient costs (or let AI estimate them), and get the right price in under 30 seconds — with food cost percentage, gross margin, and three pricing tiers calibrated for Budget, Standard, and Premium positioning.
          </p>
        </section>

        {/* What it is */}
        <section className="bg-gray-50 border-t border-gray-100 py-16">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-2xl font-black text-gray-900 mb-8">What MenuPricer does</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { icon: "🧮", title: "AI ingredient cost estimation", desc: "Type a dish name — AI estimates typical North American wholesale ingredient costs automatically. No manual entry needed to start." },
                { icon: "📊", title: "3 pricing tiers", desc: "Every dish gets Budget, Standard, and Premium price points — each with food cost %, gross margin, and context for where it fits (delivery, dine-in, special occasions)." },
                { icon: "🚗", title: "Delivery platform markup", desc: "See how DoorDash and Uber Eats commissions (15–30%) affect your margin, and get a delivery-adjusted price that protects your profit." },
                { icon: "📝", title: "AI menu copy", desc: "Every pricing report includes a 15–30 word menu description ready to copy onto your menu or delivery listing." },
                { icon: "📄", title: "PDF export", desc: "Export any dish's cost analysis as a branded PDF. Export your full menu at once from the Menu tab." },
                { icon: "☁️", title: "Cloud sync", desc: "Sign in with Google to save your menu, recipes, and history across devices. Up to 5 dishes free — unlimited with Pro." },
              ].map((f) => (
                <div key={f.title} className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="text-2xl mb-3">{f.icon}</div>
                  <h3 className="font-bold text-gray-900 text-sm mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Who uses MenuPricer</h2>
          <p className="text-gray-500 mb-8">MenuPricer is built for independent food service operators — not enterprise chains with dedicated finance teams.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              "Restaurant owners", "Café & coffee shop operators", "Food truck vendors",
              "Catering companies", "Bakery owners", "Home-based food businesses",
              "Ghost kitchen operators", "Menu consultants", "Culinary school students",
            ].map((who) => (
              <div key={who} className="bg-orange-50 border border-orange-100 rounded-xl px-4 py-3 text-sm font-semibold text-orange-800">{who}</div>
            ))}
          </div>
        </section>

        {/* Definition block — for GEO */}
        <section className="bg-gray-900 py-16">
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">What is AI MenuPricer?</p>
            <p className="text-white text-lg leading-relaxed">
              AI MenuPricer is a web-based SaaS tool that helps restaurant owners, café operators, food truck vendors, caterers, and bakery owners calculate the correct selling price for any menu item. It uses AI to estimate ingredient costs, then calculates food cost percentage, gross margin, and recommended price across three tiers (Budget, Standard, Premium). It also calculates delivery platform pricing offsets for DoorDash, Uber Eats, and Grubhub. Available free for up to 5 dishes; Pro plan at $9/month or $79/year for unlimited dishes and batch pricing.
            </p>
          </div>
        </section>

        {/* Free Tools */}
        <section className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-black text-gray-900 mb-3">Free calculators</h2>
          <p className="text-gray-500 mb-8">All tools below are free — no account required.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {TOOLS.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="border border-gray-200 rounded-xl px-4 py-3 text-sm font-semibold text-gray-700 hover:border-orange-300 hover:text-orange-600 transition-colors"
              >
                {t.label} →
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-orange-500 py-14">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">Start pricing your menu correctly</h2>
            <p className="text-orange-100 mb-8">Free to start. No credit card. First dish in 30 seconds.</p>
            <Link href="/" className="inline-block bg-white text-orange-600 font-black px-8 py-3.5 rounded-xl text-base hover:bg-orange-50 transition-colors shadow-lg shadow-orange-600/20">
              Try MenuPricer Free →
            </Link>
          </div>
        </section>

        <footer className="bg-white border-t border-gray-100 py-6">
          <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2"><LogoIcon size={20} /><span className="font-black text-gray-900 text-sm">Menu<span className="text-orange-500">Pricer</span></span></div>
            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
              <Link href="/pricing" className="hover:text-orange-500 transition-colors">Pricing</Link>
              <Link href="/food-cost-calculator" className="hover:text-orange-500 transition-colors">Food Cost Calculator</Link>
              <Link href="/privacy" className="hover:text-orange-500 transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-orange-500 transition-colors">Terms</Link>
            </div>
            <p className="text-xs text-gray-400">© {new Date().getFullYear()} MenuPricer</p>
          </div>
        </footer>
      </div>
    </>
  );
}
