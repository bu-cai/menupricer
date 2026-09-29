import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

const DATE_PUBLISHED = "2026-09-29";
const DATE_DISPLAY = "September 2026";

export const metadata: Metadata = {
  title: "What Does MP Mean on a Menu? Market Price Explained (2026)",
  description:
    "MP on a menu means 'market price' â€?the dish is priced based on the current cost of the ingredient. Learn why restaurants use MP, what it means for diners, and when to ask.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/what-does-mp-mean-on-a-menu" },
  openGraph: {
    title: "What Does MP Mean on a Menu? Market Price Explained",
    description:
      "MP on a menu means market price. Learn why restaurants list certain dishes this way, how much MP dishes typically cost, and whether you should ask before ordering.",
    url: "https://www.aimenupricer.com/blog/what-does-mp-mean-on-a-menu",
    type: "article",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "MenuPricer â€?AI-powered menu pricing for restaurants" }],
  },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "What Does MP Mean on a Menu? Market Price Explained",
  description:
    "MP on a restaurant menu stands for 'market price' â€?the item is priced based on the current wholesale cost of the ingredient. This guide explains why restaurants use MP and what diners should know.",
  url: "https://www.aimenupricer.com/blog/what-does-mp-mean-on-a-menu",
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
    { "@type": "ListItem", position: 3, name: "What Does MP Mean on a Menu", item: "https://www.aimenupricer.com/blog/what-does-mp-mean-on-a-menu" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does MP mean on a menu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MP on a menu stands for 'market price.' It means the dish is priced according to the current wholesale cost of the main ingredient, which fluctuates with supply and demand. Restaurants use MP most often for seafood (lobster, crab, oysters), whole fish, and seasonal specials where the cost changes daily or weekly.",
      },
    },
    {
      "@type": "Question",
      name: "Should I ask what the MP price is before ordering?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes â€?always ask your server for the current price of any MP item before ordering. MP dishes are often significantly more expensive than other menu items. There is no social awkwardness in asking; servers expect it and should have the current price ready.",
      },
    },
    {
      "@type": "Question",
      name: "Why do restaurants use market price instead of listing a fixed price?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Restaurants use market price for ingredients whose wholesale cost changes frequently â€?often daily for fresh seafood or weekly for seasonal produce. Printing a fixed price on a menu that is reprinted monthly would either lock the restaurant into a loss when costs spike, or mislead customers when costs drop. MP lets the restaurant adjust the selling price in real time to maintain a consistent food cost percentage.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a market price dish typically cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MP dishes are almost always among the most expensive items on the menu. Live lobster typically runs $45â€?5 depending on size and season. Whole fish MP dishes usually fall in the $35â€?5 range. Oysters priced MP are often $3â€? each. The price depends on the restaurant type, location, and current wholesale market.",
      },
    },
  ],
};

export default function WhatDoesMpMeanOnAMenuPage() {
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
            <span className="text-gray-300">What Does MP Mean on a Menu</span>
          </nav>

          <header className="mb-10">
            <div className="flex items-center gap-2 text-orange-400 text-sm font-medium mb-3">
              <LogoIcon size={16} />
              <span>MenuPricer Guide Â· {DATE_DISPLAY}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
              What Does MP Mean on a Menu? Market Price Explained
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              You see &ldquo;Lobster â€?MP&rdquo; on the menu. What does MP mean, how much should you expect to pay, and should you ask before ordering?
            </p>
          </header>

          {/* Quick answer box */}
          <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-5 mb-10">
            <p className="text-orange-300 font-semibold text-sm mb-2">Quick answer</p>
            <p className="text-white font-medium text-lg">
              <strong>MP = Market Price.</strong> The dish is priced based on the current wholesale cost of the main ingredient. Always ask your server for the price before ordering.
            </p>
          </div>

          <div className="space-y-10 text-gray-300 leading-relaxed">

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">What MP Means on a Menu</h2>
              <p>
                MP stands for <strong className="text-white">market price</strong> â€?also written as &ldquo;mkt price&rdquo; or occasionally spelled out in full. It means the restaurant is not listing a fixed price for the dish because the cost of the ingredient fluctuates.
              </p>
              <p className="mt-3">
                Instead of printing one price that may be wrong within days, the kitchen sets the selling price based on what they paid for the ingredient that week (or even that day).
              </p>
              <div className="mt-4 bg-gray-900 border border-gray-800 rounded-xl p-5">
                <p className="text-white font-semibold mb-3">You will most often see MP next to:</p>
                <ul className="space-y-2 text-sm">
                  {[
                    ["Live lobster", "Highly seasonal; price can double between summer and winter"],
                    ["Whole fresh fish", "Depends on the catch; varies by day at fish markets"],
                    ["King or snow crab", "Supply-driven market with sharp seasonal swings"],
                    ["Oysters", "Priced per piece at MP; seasonal and region-dependent"],
                    ["Seasonal specials", "Ingredients sourced from local farms at fluctuating prices"],
                  ].map(([item, reason]) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-orange-400 font-bold mt-0.5 flex-shrink-0">Â·</span>
                      <span><strong className="text-white">{item}:</strong> {reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Why Restaurants Use Market Price Instead of a Fixed Number</h2>
              <p>Menus are expensive to reprint. A printed menu that lists &ldquo;Lobster $48&rdquo; creates two problems:</p>
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                  <p className="text-red-400 font-semibold text-sm mb-2">When wholesale price goes UP</p>
                  <p className="text-gray-400 text-sm">The restaurant sells at a loss, or has to remove the dish. A $48 lobster with a $24 wholesale cost becomes unprofitable if the wholesale price rises to $32.</p>
                </div>
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                  <p className="text-yellow-400 font-semibold text-sm mb-2">When wholesale price goes DOWN</p>
                  <p className="text-gray-400 text-sm">Customers feel overcharged, or the restaurant leaves margin on the table by not lowering the price to attract more orders.</p>
                </div>
              </div>
              <p className="mt-4">
                Market price solves both problems. The kitchen adjusts the selling price daily or weekly to maintain a consistent food cost percentage â€?typically 30â€?8% for premium seafood â€?regardless of what the market does.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">How Much Does a Market Price Dish Cost?</h2>
              <p>MP dishes are almost always among the most expensive items on the menu. Here are typical ranges:</p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 pr-4 text-gray-400 font-semibold">Item</th>
                      <th className="text-right py-3 pr-4 text-gray-400 font-semibold">Typical MP range</th>
                      <th className="text-right py-3 text-gray-400 font-semibold">When it spikes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {[
                      ["Live Maine lobster", "$45â€?5", "Winter, holiday season"],
                      ["Whole fish (branzino, sea bass)", "$35â€?5", "Winter, weather disruptions"],
                      ["King crab legs (per lb)", "$55â€?0", "Off-season (late summer)"],
                      ["Oysters (each)", "$3â€?", "Summer spawning season"],
                      ["Dungeness crab", "$40â€?0", "Early season (Novâ€“Dec)"],
                      ["Sea urchin (uni)", "$28â€?5", "Demand exceeds supply year-round"],
                    ].map(([item, range, spike]) => (
                      <tr key={item}>
                        <td className="py-3 pr-4 text-white">{item}</td>
                        <td className="py-3 pr-4 text-right text-orange-300 font-mono">{range}</td>
                        <td className="py-3 text-right text-gray-500 text-xs">{spike}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-gray-500 text-xs mt-2">Prices vary significantly by restaurant type and location. Fine dining in major cities will be at the high end of these ranges.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Should You Always Ask the Price Before Ordering MP?</h2>
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-5">
                <p className="text-green-300 font-semibold mb-2">Yes â€?always ask.</p>
                <p className="text-gray-300 text-sm">
                  There is no social awkwardness in asking your server for the current price of any MP item. Servers expect this question and should have the price ready. MP dishes frequently cost 2â€?Ã— more than the next most expensive item on the menu, and you have every right to know the price before you commit.
                </p>
              </div>
              <p className="mt-4">If a server cannot tell you the current price or seems uncertain, ask them to check with the kitchen before you order.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">MP from a Restaurant&apos;s Perspective: How It Works</h2>
              <p>Here is how a restaurant manager or chef typically sets the market price each day:</p>
              <div className="mt-4 space-y-3">
                {[
                  ["1. Check the wholesale invoice", "The invoice from the fish market or supplier shows the cost per pound or per piece for that delivery."],
                  ["2. Apply food cost formula", "Selling Price = Ingredient Cost Ã· Target Food Cost %. For a whole branzino at $12/lb with a 33% target: $12 Ã· 0.33 = $36.36 â†?price at $38."],
                  ["3. Brief the staff", "Servers are told the current MP price each shift. This is part of the pre-service staff meeting."],
                  ["4. Adjust as needed", "If the daily delivery cost rises sharply mid-week, the price is updated for the next service."],
                ].map(([step, desc]) => (
                  <div key={step} className="flex gap-3 bg-gray-900 border border-gray-800 rounded-lg p-4">
                    <span className="text-orange-400 font-semibold text-sm flex-shrink-0 mt-0.5">{step}</span>
                    <p className="text-gray-300 text-sm">{desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  { q: "What does MP mean on a menu?", a: "MP stands for market price. The dish is priced based on the current wholesale cost of the main ingredient, which changes with supply and demand. Common for lobster, whole fish, crab, and oysters." },
                  { q: "Should I ask what the MP price is before ordering?", a: "Yes, always. MP dishes are often the most expensive items on the menu. Servers expect the question and should have the current price ready." },
                  { q: "Why do restaurants use market price instead of a fixed price?", a: "Because the ingredient cost changes too frequently to print a reliable price. MP lets the kitchen adjust the selling price daily or weekly to maintain a consistent food cost percentage without reprinting menus." },
                  { q: "How much does a market price dish typically cost?", a: "MP dishes vary widely. Live lobster typically runs $45â€?5, whole fish $35â€?5, king crab $55â€?0/lb, and oysters $3â€? each. Always ask your server for the current price." },
                ].map(({ q, a }) => (
                  <div key={q} className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                    <p className="text-white font-semibold mb-2">{q}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/30 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-3">Set Your Own Market Price Correctly</h2>
              <p className="text-gray-300 mb-6 max-w-lg mx-auto">
                If you are a restaurant operator, MenuPricer helps you calculate the right selling price from your current ingredient cost â€?so your MP dishes always hit your target margin.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold px-8 py-3 rounded-xl transition-colors text-lg"
              >
                <LogoIcon size={20} />
                Calculate Menu Prices
              </Link>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">Related Guides</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  ["/blog/menu-pricing-formula", "The Menu Pricing Formula"],
                  ["/blog/what-is-food-cost", "What Is Food Cost?"],
                  ["/blog/restaurant-menu-pricing-strategies", "7 Menu Pricing Strategies"],
                  ["/blog/ideal-food-cost-percentage", "Ideal Food Cost Percentage"],
                  ["/food-cost-calculator", "Free Food Cost Calculator"],
                  ["/blog/how-often-to-reprice-menu", "When to Reprice Your Menu"],
                ].map(([href, label]) => (
                  <Link key={href} href={href} className="flex items-center gap-2 text-orange-400 hover:text-orange-300 text-sm transition-colors bg-gray-900 border border-gray-800 rounded-lg px-4 py-3">
                    <span className="text-gray-600">â†?/span>{label}
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
