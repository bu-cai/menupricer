import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

const DATE_PUBLISHED = "2026-09-29";
const DATE_DISPLAY = "September 2026";

export const metadata: Metadata = {
  title: "How to Price Food to Sell: 6 Steps That Maximize Orders (2026)",
  description:
    "How to price food to sell â€?covering food cost targets, psychological pricing, competitive research, and strategies that maximize both volume and profit margin.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/how-to-price-food-to-sell" },
  openGraph: {
    title: "How to Price Food to Sell: 6 Steps That Maximize Orders",
    description:
      "A 6-step guide to pricing food so it sells â€?from calculating your cost floor to using psychological pricing, competitive benchmarking, and menu placement.",
    url: "https://www.aimenupricer.com/blog/how-to-price-food-to-sell",
    type: "article",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "MenuPricer â€?AI-powered menu pricing for restaurants" }],
  },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "How to Price Food to Sell: 6 Steps That Maximize Orders",
  description:
    "A practical guide to pricing food so it actually sells â€?balancing profitability and customer perception with a 6-step process for restaurants and food businesses.",
  url: "https://www.aimenupricer.com/blog/how-to-price-food-to-sell",
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
    { "@type": "ListItem", position: 3, name: "How to Price Food to Sell", item: "https://www.aimenupricer.com/blog/how-to-price-food-to-sell" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do you price food to sell well?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To price food so it sells: (1) Calculate your ingredient cost floor using the formula Selling Price = Food Cost Ã· Target Food Cost %. (2) Benchmark 3â€? local competitors. (3) Apply psychological pricing like $9.95 instead of $10. (4) Offer a value anchor â€?a slightly higher-priced item that makes others look affordable. (5) Place best-selling and high-margin items prominently. (6) Test with specials before committing to permanent pricing.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best way to price food for a restaurant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most reliable method is cost-plus pricing: calculate your food cost per dish, divide by your target food cost % (28â€?5% for most restaurants), then adjust upward with psychological pricing and competitive benchmarking. This ensures every item is profitable while staying competitive.",
      },
    },
    {
      "@type": "Question",
      name: "What food cost percentage should I target to sell at a competitive price?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Target 28â€?5% food cost for most restaurant types. This gives you enough room to price competitively while covering labor, rent, and overhead. If your food cost target is 30%, your selling price should be at least 3.33Ã— your ingredient cost.",
      },
    },
    {
      "@type": "Question",
      name: "Why isn't my food selling even though my prices seem fair?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Common reasons food does not sell despite fair pricing: (1) Menu placement â€?items buried in the middle of a category get fewer orders; move your best items to the top or add a box around them. (2) No value anchor â€?without a higher-priced item nearby, mid-priced items feel expensive. (3) Weak menu descriptions â€?describing taste and texture increases orders by up to 27%. (4) Inconsistent quality â€?price is rarely the reason for low sales if quality varies.",
      },
    },
  ],
};

const STEPS = [
  {
    n: 1,
    title: "Calculate your cost floor first",
    subtitle: "Never price below this number",
    body: "Before anything else, calculate your ingredient cost per portion. This is the absolute floor â€?pricing below it means selling at a loss.",
    detail: `Selling Price = Food Cost Ã· Target Food Cost %

Example:
  Pasta dish costs $3.80 to make
  Target 30% food cost
  Minimum price = $3.80 Ã· 0.30 = $12.67
  â†?Price at $13.95 or $14.50`,
    tip: "Price above the floor, never at it. You need room for waste, portion variance, and price promotions.",
  },
  {
    n: 2,
    title: "Research what your market will actually pay",
    subtitle: "Competitive benchmarking",
    body: "Visit or check menus from 3â€? competitors that serve the same customer type. What do they charge for comparable dishes? This tells you the price range customers in your area expect.",
    detail: `Research questions:
  â€?What is the local median price for this dish?
  â€?Are you above or below that median â€?intentionally?
  â€?What is the highest price this dish type commands locally?
  â€?Are there any outliers (very low or very high) and why?`,
    tip: "Price 10â€?5% above the median if you offer better quality or experience. Match the median if you compete on value.",
  },
  {
    n: 3,
    title: "Apply psychological pricing",
    subtitle: "Small tweaks, real impact",
    body: "Psychological pricing changes how customers perceive the price â€?not the actual value. Two key techniques work for food:",
    detail: `Charm pricing (casual dining):
  $13.95 feels noticeably cheaper than $14.00
  $9.99 feels much cheaper than $10.00

Round number pricing (fine dining):
  $28 signals quality better than $27.95
  $45 is more premium-feeling than $44.99

Removing dollar signs:
  "Pasta 14" feels less expensive than "Pasta $14"
  (Research shows this reduces 'pain of paying')`,
    tip: "Match the technique to your brand. Charm pricing for casual, round numbers for upscale.",
  },
  {
    n: 4,
    title: "Create a value anchor",
    subtitle: "Make your real target price look affordable",
    body: "An anchor is a high-priced item whose job is to make everything else look reasonable. You are not trying to sell the anchor â€?you are using it to reframe customer perception.",
    detail: `Without anchor:
  Steak $32 â†?feels expensive

With anchor:
  Wagyu Steak $58
  Steak $32 â†?now feels like good value

The anchor shifts the mental reference point.
Customers compare prices to each other on the menu,
not to an abstract idea of 'fair.'`,
    tip: "Your anchor should be real, not fake. It can be a premium ingredient, a larger portion, or a chef's special.",
  },
  {
    n: 5,
    title: "Use placement to drive orders",
    subtitle: "Menu engineering 101",
    body: "Where a dish appears on the menu is as important as its price. The first item in any category gets the most orders. The upper-right of a two-column menu is the 'golden triangle' that eyes land on first.",
    detail: `High-sell placement:
  â€?First item in a category
  â€?Items in a box or with a photo
  â€?Items marked 'Chef's Pick' or 'Most Popular'

Low-sell placement:
  â€?Middle of a long list
  â€?Items without descriptions
  â€?Items on the back page or a separate insert

Move your highest-margin dishes to high-sell positions.`,
    tip: "Test placement changes before a full menu reprint. Add a 'staff recommend' verbal or table tent for two weeks and measure the lift.",
  },
  {
    n: 6,
    title: "Test before committing",
    subtitle: "Use specials and limited offers",
    body: "If you are unsure whether customers will pay your target price, test it as a special before adding it permanently to the menu. A two-week special gives you real sales data with no commitment.",
    detail: `Testing approach:
  Week 1â€?: Run at target price as a special
  Measure: orders per service, send-backs, feedback

  If it sells well: add to the permanent menu
  If price resistance: reduce by $1â€? and retest
  If it flies: consider whether you priced too low`,
    tip: "Track your specials data. The sell-through rate of a special at different price points is the most reliable pricing research you can do.",
  },
];

export default function HowToPriceFoodToSellPage() {
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
            <span className="text-gray-300">How to Price Food to Sell</span>
          </nav>

          <header className="mb-10">
            <div className="flex items-center gap-2 text-orange-400 text-sm font-medium mb-3">
              <LogoIcon size={16} />
              <span>MenuPricer Guide Â· {DATE_DISPLAY}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
              How to Price Food to Sell: 6 Steps That Maximize Orders
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              Pricing food correctly means two things at once: high enough to be profitable, and positioned so customers actually order it. Here is the 6-step process that achieves both.
            </p>
          </header>

          {/* Tension box */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 mb-10">
            <p className="text-white font-semibold mb-3">The pricing tension every restaurant faces</p>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                <p className="text-red-300 font-semibold mb-1">Price too low</p>
                <p className="text-gray-400">Sells well but unprofitable. You are working hard for nothing.</p>
              </div>
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3">
                <p className="text-yellow-300 font-semibold mb-1">Price too high</p>
                <p className="text-gray-400">Good margin per dish but volume drops. Total profit still falls.</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-3">The 6 steps below find the sweet spot â€?profitable <em>and</em> attractive to customers.</p>
          </div>

          <div className="space-y-6 text-gray-300 leading-relaxed">

            {STEPS.map((s) => (
              <section key={s.n} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <div className="flex items-start gap-4 mb-3">
                  <div className="flex-shrink-0 w-9 h-9 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {s.n}
                  </div>
                  <div>
                    <h2 className="text-white font-bold text-xl">{s.title}</h2>
                    <p className="text-orange-400 text-xs">{s.subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-3">{s.body}</p>
                <div className="bg-[#0a0a0a] rounded-lg p-4 mb-3 border border-gray-800">
                  <pre className="text-green-400 font-mono text-xs leading-relaxed whitespace-pre-wrap">{s.detail}</pre>
                </div>
                <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg px-4 py-3">
                  <p className="text-orange-300 text-sm"><strong>Tip:</strong> {s.tip}</p>
                </div>
              </section>
            ))}

            {/* Why food doesn't sell */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Why Food Does Not Sell (It Is Rarely the Price)</h2>
              <p>If an item is not selling despite what feels like a fair price, check these before reducing the price:</p>
              <div className="mt-4 space-y-3">
                {[
                  ["Menu placement", "Items in the middle of a long list rarely get ordered. Move slow-sellers to the top of their category or add a box, and measure the change."],
                  ["No value anchor", "Without a more expensive item nearby, mid-range prices feel expensive. Add a premium option above your target item."],
                  ["Weak description", "A dish described as 'Grilled Salmon, lemon butter' will outsell 'Salmon' every time. Sensory descriptions increase orders."],
                  ["Inconsistent quality", "If customers have had a bad experience, they stop ordering the item regardless of price. Check execution consistency first."],
                  ["No social proof", "'Chef's Favourite', 'Most Popular', or staff recommendations can lift a slow-seller 20â€?0% with zero price change."],
                ].map(([issue, desc]) => (
                  <div key={issue} className="flex gap-3 bg-gray-900 border border-gray-800 rounded-lg p-4">
                    <span className="text-orange-400 font-bold text-sm mt-0.5 flex-shrink-0">Â·</span>
                    <div>
                      <p className="text-white font-semibold text-sm">{issue}</p>
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
                  { q: "How do you price food to sell well?", a: "Calculate your cost floor (Food Cost Ã· Target FC%), benchmark competitors, apply psychological pricing, create a value anchor, place high-margin items prominently, and test with specials before committing." },
                  { q: "What is the best way to price food for a restaurant?", a: "Cost-plus pricing: calculate food cost per dish, divide by target FC% (28â€?5%), then adjust using psychological pricing and competitive benchmarking." },
                  { q: "What food cost percentage should I target to stay competitive?", a: "28â€?5% for most restaurants. This gives you room to price competitively while covering overhead. At 30% target, your price should be at least 3.33Ã— your ingredient cost." },
                  { q: "Why isn't my food selling even though prices seem fair?", a: "Usually not the price. Check menu placement first (top of category sells more), then add a value anchor, improve dish descriptions, and check execution consistency." },
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
              <h2 className="text-2xl font-bold text-white mb-3">Price Every Dish in Seconds</h2>
              <p className="text-gray-300 mb-6 max-w-lg mx-auto">
                MenuPricer calculates your cost floor, applies AI pricing analysis, and suggests an optimal selling price â€?covering steps 1 and 2 in under a minute.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold px-8 py-3 rounded-xl transition-colors text-lg"
              >
                <LogoIcon size={20} />
                Price My Menu Now
              </Link>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">Related Guides</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  ["/blog/restaurant-menu-pricing-strategies", "7 Menu Pricing Strategies"],
                  ["/blog/menu-pricing-formula", "The Menu Pricing Formula"],
                  ["/blog/menu-engineering", "Menu Engineering Guide"],
                  ["/blog/menu-pricing-mistakes", "Common Menu Pricing Mistakes"],
                  ["/blog/food-costing-101", "Food Costing 101"],
                  ["/food-cost-calculator", "Free Food Cost Calculator"],
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
