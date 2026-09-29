import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

const DATE_PUBLISHED = "2026-09-29";
const DATE_DISPLAY = "September 2026";

export const metadata: Metadata = {
  title: "The Menu Pricing Formula: Calculate the Right Price for Every Dish (2026)",
  description:
    "The menu pricing formula is: Selling Price = Food Cost ÷ Target Food Cost %. Learn how to use it, adjust for delivery, and set prices that are both profitable and competitive.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/menu-pricing-formula" },
  openGraph: {
    title: "The Menu Pricing Formula: Calculate the Right Price for Every Dish",
    description:
      "How to use the menu pricing formula to set profitable, competitive prices — with examples, variations, and a free calculator.",
    url: "https://www.aimenupricer.com/blog/menu-pricing-formula",
    type: "article",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "MenuPricer — AI-powered menu pricing for restaurants" }],
  },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "The Menu Pricing Formula: Calculate the Right Price for Every Dish",
  description:
    "A complete guide to the menu pricing formula — Selling Price = Food Cost ÷ Food Cost % — with worked examples, delivery adjustments, and common mistakes.",
  url: "https://www.aimenupricer.com/blog/menu-pricing-formula",
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
    { "@type": "ListItem", position: 3, name: "Menu Pricing Formula", item: "https://www.aimenupricer.com/blog/menu-pricing-formula" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the menu pricing formula?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The menu pricing formula is: Selling Price = Food Cost ÷ Target Food Cost %. For example, if a dish costs $4.50 to make and you target a 30% food cost, the selling price should be $4.50 ÷ 0.30 = $15.00.",
      },
    },
    {
      "@type": "Question",
      name: "How do you calculate menu price from food cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Menu Price = Food Cost per Portion ÷ Target Food Cost %. First calculate the total ingredient cost for one serving. Then divide by your target food cost percentage (expressed as a decimal). Round up to a psychologically appealing price point.",
      },
    },
    {
      "@type": "Question",
      name: "What is the formula for food cost percentage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Food Cost % = (Food Cost ÷ Selling Price) × 100. If a dish costs $4.50 to make and sells for $15, the food cost percentage is ($4.50 ÷ $15) × 100 = 30%.",
      },
    },
    {
      "@type": "Question",
      name: "What target food cost percentage should I use in the formula?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use 28–35% for most full-service restaurants. Fast casual targets 25–30%. Fine dining allows 30–38%. The formula gives you the minimum price to hit your target. You can price higher if the market allows it.",
      },
    },
    {
      "@type": "Question",
      name: "How do you adjust the menu pricing formula for delivery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Add the delivery platform commission to the formula: Delivery Price = Food Cost ÷ (Target Food Cost % × (1 − Commission %)). For a 25% commission: Food Cost ÷ (0.30 × 0.75) = Food Cost ÷ 0.225. This is roughly a 33% price increase over your dine-in price.",
      },
    },
  ],
};

export default function MenuPricingFormulaPage() {
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
            <span className="text-gray-300">Menu Pricing Formula</span>
          </nav>

          <header className="mb-10">
            <div className="flex items-center gap-2 text-orange-400 text-sm font-medium mb-3">
              <LogoIcon size={16} />
              <span>MenuPricer Guide · {DATE_DISPLAY}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
              The Menu Pricing Formula: Calculate the Right Price for Every Dish
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              The menu pricing formula turns your food cost into a selling price. Here is how it works, how to adjust it for delivery, and how to avoid the most common mistakes.
            </p>
          </header>

          {/* Formula hero */}
          <div className="bg-gray-900 border border-orange-500/40 rounded-2xl p-6 mb-10">
            <p className="text-orange-400 text-sm font-semibold mb-3">The core formula</p>
            <div className="bg-[#0a0a0a] rounded-xl p-5 mb-4">
              <pre className="text-green-400 font-mono text-lg leading-relaxed">{`Selling Price = Food Cost ÷ Target Food Cost %`}</pre>
            </div>
            <div className="grid sm:grid-cols-3 gap-3 text-center text-sm">
              <div className="bg-gray-800 rounded-lg p-3">
                <p className="text-gray-400 text-xs mb-1">Food Cost</p>
                <p className="text-white font-bold text-lg">$4.50</p>
                <p className="text-gray-500 text-xs">ingredients per portion</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-3">
                <p className="text-gray-400 text-xs mb-1">Target FC%</p>
                <p className="text-white font-bold text-lg">30%</p>
                <p className="text-gray-500 text-xs">÷ 0.30</p>
              </div>
              <div className="bg-orange-500/20 border border-orange-500/40 rounded-lg p-3">
                <p className="text-gray-400 text-xs mb-1">Selling Price</p>
                <p className="text-orange-400 font-bold text-lg">$15.00</p>
                <p className="text-gray-500 text-xs">minimum price</p>
              </div>
            </div>
          </div>

          <div className="space-y-10 text-gray-300 leading-relaxed">

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">The Two Versions of the Formula</h2>
              <p>You will use both versions regularly:</p>
              <div className="mt-4 space-y-4">
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                  <p className="text-white font-semibold mb-2">Version 1 — Find the selling price</p>
                  <pre className="text-green-400 font-mono text-sm">{`Selling Price = Food Cost ÷ Target FC%
Use when: pricing a new dish or repricing after cost changes`}</pre>
                </div>
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                  <p className="text-white font-semibold mb-2">Version 2 — Check your current food cost %</p>
                  <pre className="text-green-400 font-mono text-sm">{`Food Cost % = (Food Cost ÷ Selling Price) × 100
Use when: auditing existing menu prices`}</pre>
                </div>
              </div>
            </section>

            {/* Worked examples */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Worked Examples: 5 Common Dishes</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 pr-4 text-gray-400 font-semibold">Dish</th>
                      <th className="text-right py-3 pr-4 text-gray-400 font-semibold">Food Cost</th>
                      <th className="text-right py-3 pr-4 text-gray-400 font-semibold">Target FC%</th>
                      <th className="text-right py-3 pr-4 text-gray-400 font-semibold">Min Price</th>
                      <th className="text-right py-3 text-gray-400 font-semibold">Rounded Price</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {[
                      ["Margherita Pizza", "$2.80", "30%", "$9.33", "$9.95"],
                      ["Grilled Salmon", "$6.60", "32%", "$20.63", "$22.00"],
                      ["Caesar Salad", "$2.20", "28%", "$7.86", "$8.95"],
                      ["Beef Burger", "$4.10", "30%", "$13.67", "$14.95"],
                      ["Chocolate Lava Cake", "$1.60", "25%", "$6.40", "$7.50"],
                    ].map(([dish, fc, pct, min, rounded]) => (
                      <tr key={dish}>
                        <td className="py-3 pr-4 text-white">{dish}</td>
                        <td className="py-3 pr-4 text-right text-gray-400 font-mono">{fc}</td>
                        <td className="py-3 pr-4 text-right text-gray-400 font-mono">{pct}</td>
                        <td className="py-3 pr-4 text-right text-gray-400 font-mono">{min}</td>
                        <td className="py-3 text-right text-orange-300 font-mono font-semibold">{rounded}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-gray-500 text-xs mt-3">Rounded prices use charm pricing (.95/.99) for casual dining. Fine dining would use whole numbers.</p>
            </section>

            {/* Target FC% by segment */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Which Target Food Cost % to Use</h2>
              <p className="mb-4">The denominator in the formula directly controls your price. Use the target that matches your restaurant type:</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 pr-6 text-gray-400 font-semibold">Segment</th>
                      <th className="text-right py-3 pr-6 text-gray-400 font-semibold">Target FC%</th>
                      <th className="text-right py-3 text-gray-400 font-semibold">Price multiplier</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {[
                      ["Fast food / QSR", "25–28%", "3.6× – 4.0× cost"],
                      ["Fast casual", "28–32%", "3.1× – 3.6× cost"],
                      ["Casual dining", "30–35%", "2.9× – 3.3× cost"],
                      ["Fine dining", "32–38%", "2.6× – 3.1× cost"],
                      ["Bakery / café", "28–35%", "2.9× – 3.6× cost"],
                      ["Bar food", "25–30%", "3.3× – 4.0× cost"],
                    ].map(([seg, pct, mult]) => (
                      <tr key={seg}>
                        <td className="py-3 pr-6 text-white">{seg}</td>
                        <td className="py-3 pr-6 text-right text-orange-300 font-mono">{pct}</td>
                        <td className="py-3 text-right text-gray-400 font-mono text-xs">{mult}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-sm">The <em>price multiplier</em> is a shortcut: multiply your food cost by 3.3× and you get roughly a 30% food cost target.</p>
            </section>

            {/* Delivery adjustment */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Adjusting the Formula for Delivery Platforms</h2>
              <p>
                Delivery apps (DoorDash, Uber Eats, Grubhub) charge 15–30% commission on every order. If you use the same price as dine-in, your effective food cost skyrockets.
              </p>
              <div className="mt-4 bg-gray-900 rounded-xl p-5 border border-gray-800">
                <pre className="text-green-400 font-mono text-sm leading-relaxed whitespace-pre-wrap">{`Delivery Price = Food Cost ÷ (Target FC% × (1 − Commission%))

Example (25% commission, 30% target):
  Delivery Price = $4.50 ÷ (0.30 × (1 − 0.25))
                = $4.50 ÷ (0.30 × 0.75)
                = $4.50 ÷ 0.225
                = $20.00  (vs. $15.00 dine-in)`}</pre>
              </div>
              <p className="mt-3 text-sm text-gray-400">
                A 25% platform commission requires a ~33% delivery price premium to maintain the same food cost percentage as dine-in.
              </p>
            </section>

            {/* Markup vs margin */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Menu Pricing Formula vs. Markup Formula</h2>
              <p>These two formulas look similar but produce different results:</p>
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                  <p className="text-white font-semibold mb-2">Food Cost Formula (margin-based)</p>
                  <pre className="text-green-400 font-mono text-sm">{`Price = Cost ÷ FC%
$4.50 ÷ 0.30 = $15.00
Margin = 70%`}</pre>
                  <p className="text-gray-400 text-xs mt-2">Restaurant standard. FC% is a share of price.</p>
                </div>
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                  <p className="text-white font-semibold mb-2">Markup Formula (cost-based)</p>
                  <pre className="text-green-400 font-mono text-sm">{`Price = Cost × (1 + Markup%)
$4.50 × 3.33 = $14.99
Markup = 233%`}</pre>
                  <p className="text-gray-400 text-xs mt-2">Retail standard. Less common in restaurants.</p>
                </div>
              </div>
              <p className="mt-4 text-sm">Restaurants use the <em>margin-based</em> formula because food cost percentage is how restaurant P&Ls are structured.</p>
            </section>

            {/* Common mistakes */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4 Common Mistakes with the Menu Pricing Formula</h2>
              <div className="space-y-3">
                {[
                  ["Not accounting for yield/waste", "Raw ingredient cost ≠ usable cost. Divide by yield percentage before applying the formula."],
                  ["Using retail ingredient prices", "Always use your wholesale invoice prices. Retail prices will make you underprice."],
                  ["Setting the same FC% for all dishes", "High-margin categories (desserts, drinks) can target 20–25%. Low-margin proteins may need 35%. Mix intentionally."],
                  ["Never updating the formula inputs", "Supplier prices change. Recalculate every 3–6 months, or when a major ingredient cost shifts by more than 10%."],
                ].map(([title, desc]) => (
                  <div key={title} className="flex gap-3 bg-gray-900 border border-gray-800 rounded-lg p-4">
                    <span className="text-red-400 font-bold text-sm mt-0.5 flex-shrink-0">✗</span>
                    <div>
                      <p className="text-white font-semibold text-sm">{title}</p>
                      <p className="text-gray-400 text-sm mt-1">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  { q: "What is the menu pricing formula?", a: "Selling Price = Food Cost ÷ Target Food Cost %. Divide the ingredient cost per portion by your target food cost percentage (as a decimal) to get the minimum selling price." },
                  { q: "How do you calculate menu price from food cost?", a: "Calculate total ingredient cost for one portion, then divide by your target food cost % (e.g. 0.30 for 30%). Round the result up to a psychologically appealing price." },
                  { q: "What target food cost percentage should I use?", a: "28–35% for most restaurants. Fast casual 25–30%. Fine dining 30–38%. The formula gives your floor price — you can price higher if your market allows." },
                  { q: "How do you adjust for delivery platform commissions?", a: "Use: Delivery Price = Food Cost ÷ (Target FC% × (1 − Commission %)). A 25% commission requires roughly a 33% price increase over dine-in to maintain the same margin." },
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
              <h2 className="text-2xl font-bold text-white mb-3">Apply the Formula Instantly</h2>
              <p className="text-gray-300 mb-6 max-w-lg mx-auto">
                Enter your ingredients and target food cost % — MenuPricer runs the formula and adds AI-powered pricing analysis for your market.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold px-8 py-3 rounded-xl transition-colors text-lg"
              >
                <LogoIcon size={20} />
                Try the Pricing Calculator
              </Link>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">Related Guides</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  ["/blog/food-cost-formula", "Food Cost Formula"],
                  ["/blog/what-is-food-cost-percentage", "What Is Food Cost Percentage?"],
                  ["/blog/restaurant-menu-pricing-strategies", "7 Menu Pricing Strategies"],
                  ["/blog/markup-vs-margin", "Markup vs. Margin Explained"],
                  ["/food-cost-calculator", "Free Food Cost Calculator"],
                  ["/ingredient-cost-calculator", "Ingredient Cost Calculator"],
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
