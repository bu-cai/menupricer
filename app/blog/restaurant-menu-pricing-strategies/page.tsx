import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

const DATE_PUBLISHED = "2026-09-29";
const DATE_DISPLAY = "September 2026";

export const metadata: Metadata = {
  title: "7 Restaurant Menu Pricing Strategies (with Examples) — 2026",
  description:
    "The most effective restaurant menu pricing strategies explained — cost-plus, competitive, psychological, value-based, and more. With real examples and when to use each.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/restaurant-menu-pricing-strategies" },
  openGraph: {
    title: "7 Restaurant Menu Pricing Strategies (with Examples)",
    description:
      "Cost-plus, psychological pricing, competitive, value-based — the 7 key restaurant pricing strategies with examples and guidance on when to use each.",
    url: "https://www.aimenupricer.com/blog/restaurant-menu-pricing-strategies",
    type: "article",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "MenuPricer — AI-powered menu pricing for restaurants" }],
  },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "7 Restaurant Menu Pricing Strategies (with Examples)",
  description:
    "A comprehensive guide to restaurant menu pricing strategies — cost-plus, psychological pricing, competitive pricing, value-based, bundle pricing, and more.",
  url: "https://www.aimenupricer.com/blog/restaurant-menu-pricing-strategies",
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
    { "@type": "ListItem", position: 3, name: "Restaurant Menu Pricing Strategies", item: "https://www.aimenupricer.com/blog/restaurant-menu-pricing-strategies" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the main menu pricing strategies for restaurants?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The main restaurant menu pricing strategies are: (1) Cost-plus pricing — add a markup over food cost; (2) Competitive pricing — benchmark against local competitors; (3) Psychological pricing — use $9.99 instead of $10; (4) Value-based pricing — price based on perceived customer value; (5) Bundle pricing — combo meals and prix fixe; (6) Dynamic pricing — adjust prices by time or demand; (7) Menu engineering — use placement and design to steer choices.",
      },
    },
    {
      "@type": "Question",
      name: "What is the most common restaurant pricing method?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cost-plus pricing is the most common starting point — calculate your food cost per dish and divide by your target food cost percentage to get the minimum selling price. Most restaurants then adjust upward using psychological pricing and competitive benchmarking.",
      },
    },
    {
      "@type": "Question",
      name: "What is psychological pricing in restaurants?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Psychological pricing uses price points that feel lower than they are. Common techniques: charm pricing ($9.95 instead of $10), removing dollar signs from menu prices to reduce 'pain of paying', anchoring with a high-priced item to make others feel affordable, and odd-number pricing to signal value.",
      },
    },
    {
      "@type": "Question",
      name: "How should a restaurant set menu prices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Start with cost-plus pricing: calculate your food cost per dish and divide by your target food cost % (usually 28–35%). Then adjust using competitive benchmarking (what do similar restaurants charge?) and psychological pricing (charm pricing, anchor dishes). Finally, use menu engineering to position high-margin items prominently.",
      },
    },
  ],
};

const STRATEGIES = [
  {
    n: 1,
    name: "Cost-Plus Pricing",
    tagline: "The math-first baseline",
    desc: "Calculate your food cost per portion, then divide by your target food cost percentage to set the floor price. Every other strategy starts here.",
    formula: "Menu Price = Food Cost ÷ Target Food Cost %",
    example: "Pasta costs $3.20 to make. Target 30% food cost → minimum price $10.67 → round to $12.95",
    best: "All restaurants, as a starting point. Never price below this floor.",
    risk: "Can underprice if your market can bear more, or overprice if you are in a cost-sensitive segment.",
  },
  {
    n: 2,
    name: "Competitive Pricing",
    tagline: "Benchmark against local rivals",
    desc: "Research what 3–5 direct competitors charge for similar dishes. Price within 10–15% of the market median, then differentiate on quality or experience.",
    formula: "Your Price ≈ Competitor Median × (1 ± positioning premium)",
    example: "Local burgers average $14. You use premium beef → price at $16 (14% premium, justified by ingredients).",
    best: "High-competition areas, delivery platforms where customers compare prices directly.",
    risk: "Ignores your cost structure. Profitable competitors may have lower costs than you.",
  },
  {
    n: 3,
    name: "Psychological Pricing",
    tagline: "The perception layer",
    desc: "Small price adjustments that change how customers perceive value. These are applied on top of your cost-plus baseline.",
    formula: "Round down to .95 or .99 — or drop the cents entirely for upscale menus",
    example: "$12.99 feels much cheaper than $13.00. But $28 (no cents) signals fine dining better than $27.99.",
    best: "Fast casual and casual dining for value perception. Fine dining: use whole numbers, no dollar signs.",
    risk: "Overused pricing tricks can feel cheap. Match the technique to your brand positioning.",
  },
  {
    n: 4,
    name: "Value-Based Pricing",
    tagline: "Price what it is worth to the customer",
    desc: "Set prices based on the perceived value to the customer rather than just your cost. Works for signature dishes, chef specials, and exclusive ingredients.",
    formula: "Price = Customer willingness to pay (tested through observation and competitor analysis)",
    example: "A wagyu burger costs $9 to make. Customers routinely pay $32 for wagyu burgers in your city → price at $28–30, not the cost-plus floor of $26.",
    best: "Signature dishes, tasting menus, items with strong brand recognition or exclusive sourcing.",
    risk: "Requires market knowledge. Overpricing kills volume; underpricing leaves money on the table.",
  },
  {
    n: 5,
    name: "Bundle Pricing",
    tagline: "Combo meals and prix fixe",
    desc: "Sell multiple items together at a price lower than the sum of parts. Increases average check and moves slower items alongside high-demand items.",
    formula: "Bundle Price = Sum of items × (0.85–0.92) — still at 28–35% food cost on the bundle",
    example: "Burger $14 + fries $5 + drink $3 = $22 à la carte. Bundle for $18.95. Customer saves $3, you sell more volume.",
    best: "Fast casual, lunch specials, family meals, catering. Especially effective for delivery.",
    risk: "If the anchor item is already discounted, the bundle may undermine margin. Cost the bundle as a whole.",
  },
  {
    n: 6,
    name: "Dynamic Pricing",
    tagline: "Adjust prices by time and demand",
    desc: "Charge different prices for the same item at different times — happy hour, surge pricing at peak, lunch specials. Balances demand and maximizes revenue per seat.",
    formula: "Off-peak price = standard × 0.70–0.85. Peak price = standard × 1.10–1.20",
    example: "Steak $34 at dinner → $24 at lunch prix fixe. Same steak, different contribution to covers-per-seat.",
    best: "Restaurants with predictable peaks, bars, delivery platforms. Requires customer communication.",
    risk: "Customers feel manipulated if pricing feels unfair. Transparent labeling ('lunch price') is essential.",
  },
  {
    n: 7,
    name: "Menu Engineering",
    tagline: "Use placement to steer choices",
    desc: "Price anchoring and visual design influence what customers order. Place a high-priced item at the top of a category to make others look reasonable. Put high-margin items in the golden triangle (upper-right, first item listed).",
    formula: "No formula — it is positioning, not arithmetic",
    example: "List a $48 lobster at the top of mains. The $28 salmon below it now feels like good value — even though $28 is your real target price.",
    best: "All restaurants. The easiest ROI improvement on a menu reprint.",
    risk: "Works only if you know which items are high-margin. Requires accurate food cost data first.",
  },
];

export default function RestaurantMenuPricingStrategiesPage() {
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
            <span className="text-gray-300">Menu Pricing Strategies</span>
          </nav>

          <header className="mb-10">
            <div className="flex items-center gap-2 text-orange-400 text-sm font-medium mb-3">
              <LogoIcon className="w-4 h-4" />
              <span>MenuPricer Guide · {DATE_DISPLAY}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
              7 Restaurant Menu Pricing Strategies (with Examples)
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              How you price your menu determines your profit margins, customer perception, and competitive position. Here are the seven strategies used by successful restaurants — and when to apply each.
            </p>
          </header>

          {/* Quick-pick table */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 mb-10 overflow-x-auto">
            <p className="text-orange-400 text-sm font-semibold mb-3">Which strategy should you use?</p>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left pb-2 pr-4 text-gray-400 font-medium">Strategy</th>
                  <th className="text-left pb-2 pr-4 text-gray-400 font-medium">Best for</th>
                  <th className="text-left pb-2 text-gray-400 font-medium">Complexity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {[
                  ["Cost-plus", "Every restaurant — baseline", "Low"],
                  ["Competitive", "High-competition / delivery", "Low"],
                  ["Psychological", "Fast casual, casual dining", "Low"],
                  ["Value-based", "Signatures, upscale", "Medium"],
                  ["Bundle", "Fast casual, lunch, delivery", "Medium"],
                  ["Dynamic", "Bars, predictable peaks", "High"],
                  ["Menu engineering", "Every menu reprint", "Medium"],
                ].map(([s, b, c]) => (
                  <tr key={s}>
                    <td className="py-2 pr-4 text-white font-medium">{s}</td>
                    <td className="py-2 pr-4 text-gray-400 text-xs">{b}</td>
                    <td className="py-2">
                      <span className={`text-xs px-2 py-0.5 rounded-full ${c === "Low" ? "bg-green-500/20 text-green-300" : c === "Medium" ? "bg-yellow-500/20 text-yellow-300" : "bg-red-500/20 text-red-300"}`}>
                        {c}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="space-y-8 text-gray-300 leading-relaxed">

            {STRATEGIES.map((s) => (
              <section key={s.n} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-9 h-9 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {s.n}
                  </div>
                  <div>
                    <h2 className="text-white font-bold text-xl">{s.name}</h2>
                    <p className="text-orange-400 text-sm">{s.tagline}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">{s.desc}</p>
                <div className="bg-[#0a0a0a] rounded-lg p-4 mb-3 border border-gray-800">
                  <p className="text-xs text-gray-500 mb-1">Formula</p>
                  <p className="text-green-400 font-mono text-sm">{s.formula}</p>
                </div>
                <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg px-4 py-3 mb-3">
                  <p className="text-orange-300 text-sm"><strong>Example:</strong> {s.example}</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-3 text-xs">
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg px-3 py-2">
                    <p className="text-green-400 font-semibold mb-1">Best for</p>
                    <p className="text-gray-300">{s.best}</p>
                  </div>
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                    <p className="text-red-400 font-semibold mb-1">Watch out</p>
                    <p className="text-gray-300">{s.risk}</p>
                  </div>
                </div>
              </section>
            ))}

            {/* How to combine */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">How to Combine Multiple Strategies</h2>
              <p>Most successful restaurants layer 3–4 strategies. A common sequence:</p>
              <div className="mt-4 space-y-3">
                {[
                  ["Step 1", "Cost-plus", "Calculate the floor price for every dish. This is non-negotiable."],
                  ["Step 2", "Competitive benchmarking", "Check if the floor price is in line with local competitors. Adjust positioning."],
                  ["Step 3", "Psychological pricing", "Apply charm pricing or clean whole numbers depending on your brand."],
                  ["Step 4", "Menu engineering", "Place high-margin dishes in anchor positions. Add an aspirational item to make others look affordable."],
                ].map(([step, name, desc]) => (
                  <div key={step} className="flex gap-3 items-start">
                    <div className="flex-shrink-0 text-orange-400 font-mono text-sm w-14">{step}</div>
                    <div>
                      <span className="text-white font-semibold text-sm">{name}: </span>
                      <span className="text-gray-400 text-sm">{desc}</span>
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
                  {
                    q: "What are the main menu pricing strategies for restaurants?",
                    a: "The seven main strategies are: cost-plus, competitive, psychological, value-based, bundle, dynamic, and menu engineering. Most restaurants use cost-plus as the baseline, then layer psychological and competitive pricing on top.",
                  },
                  {
                    q: "What is the most common restaurant pricing method?",
                    a: "Cost-plus pricing — calculate food cost per dish, divide by target food cost % — is the most common starting point. It ensures every item covers its ingredient cost before anything else.",
                  },
                  {
                    q: "What is psychological pricing in restaurants?",
                    a: "Using $9.95 instead of $10, removing dollar signs, and anchoring with a premium item to make others feel affordable. Fine dining restaurants often use whole round numbers ($28 not $27.99) to signal quality.",
                  },
                  {
                    q: "How should a restaurant set menu prices?",
                    a: "Start with cost-plus to find the floor. Benchmark competitors to calibrate positioning. Apply psychological pricing. Use menu engineering to steer customers toward high-margin choices.",
                  },
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
              <h2 className="text-2xl font-bold text-white mb-3">Start With the Right Floor Price</h2>
              <p className="text-gray-300 mb-6 max-w-lg mx-auto">
                Every pricing strategy starts with accurate food cost data. MenuPricer calculates your cost-plus floor price and AI-suggested optimal price in seconds.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold px-8 py-3 rounded-xl transition-colors text-lg"
              >
                <LogoIcon className="w-5 h-5" />
                Calculate Your Menu Prices
              </Link>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">Related Guides</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  ["/blog/menu-pricing-formula", "The Menu Pricing Formula"],
                  ["/blog/menu-costing-guide", "Menu Costing Guide (7 Steps)"],
                  ["/blog/menu-pricing-mistakes", "Common Menu Pricing Mistakes"],
                  ["/blog/food-cost-formula", "Food Cost Formula"],
                  ["/blog/how-often-to-reprice-menu", "When to Reprice Your Menu"],
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
