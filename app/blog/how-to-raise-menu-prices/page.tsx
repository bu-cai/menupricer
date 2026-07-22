import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "How to Raise Menu Prices Without Losing Customers (2026 Guide)",
  description:
    "Restaurant owners: here is the exact playbook for raising menu prices without losing regulars. Covers when to raise, how much, how to frame it, and which dishes to reprice first.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/how-to-raise-menu-prices" },
  openGraph: {
    title: "How to Raise Menu Prices Without Losing Customers (2026)",
    description: "The step-by-step playbook for raising restaurant menu prices — when to do it, how much, and how to communicate it so customers stay.",
    url: "https://www.aimenupricer.com/blog/how-to-raise-menu-prices",
    images: [{ url: "/images/hero-restaurant-pricing.png", width: 1200, height: 630, alt: "Restaurant menu pricing strategy" }],
  },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "How to Raise Menu Prices Without Losing Customers (2026 Guide)",
  description: "The step-by-step playbook for raising restaurant prices — when, how much, which dishes first, and how to communicate it.",
  author: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  publisher: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://www.aimenupricer.com/blog/how-to-raise-menu-prices",
};

const BREADCRUMB = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.aimenupricer.com/blog" },
    { "@type": "ListItem", position: 3, name: "How to Raise Menu Prices", item: "https://www.aimenupricer.com/blog/how-to-raise-menu-prices" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much should I raise my menu prices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most restaurants raise prices 5-10% at a time. Research from the National Restaurant Association shows customers tolerate price increases up to 10% before noticeably changing their ordering habits. For a dish currently priced at $14, a 7% increase brings it to $14.99 — a psychologically softer price point that still captures most of the margin recovery.",
      },
    },
    {
      "@type": "Question",
      name: "When is the right time to raise restaurant menu prices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Raise prices when: (1) your food cost percentage exceeds 35% for more than 60 days, (2) a key ingredient has increased more than 15% in cost, (3) your overall profit margin drops below 5%, or (4) you have not raised prices in over 12 months. Avoid raising prices during slow seasons or immediately after a service failure.",
      },
    },
    {
      "@type": "Question",
      name: "Will raising prices cause me to lose customers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A 5-10% price increase rarely causes meaningful customer loss when done correctly. Cornell University hospitality research found that diners are most sensitive to price on low-cost items (beverages, sides) and least sensitive on high-perceived-value dishes. Raise your signature dishes last, and lead with items where the value perception is already strong.",
      },
    },
    {
      "@type": "Question",
      name: "Should I tell customers I am raising prices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Do not make a public announcement. Quietly update the menu. If regulars ask, be honest: ingredient costs have increased and you are committed to maintaining quality. Most customers respect this. What destroys trust is raising prices while visibly reducing portion sizes without explanation.",
      },
    },
    {
      "@type": "Question",
      name: "Which menu items should I raise first?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Start with your lowest-margin dishes (food cost above 35%). Then raise prices on items with the weakest price memory — seasonal specials, dishes ordered infrequently, or items with no obvious competitor benchmark. Protect your anchor dishes (your most-ordered item and the cheapest item on the menu) — these set the price perception for everything else.",
      },
    },
  ],
};

const PRICE_SENSITIVITY: { category: string; sensitivity: string; note: string }[] = [
  { category: "Signature / hero dish", sensitivity: "Low", note: "Customers expect quality, value perception is high" },
  { category: "Seasonal specials", sensitivity: "Very low", note: "No price memory, limited-time framing helps" },
  { category: "Main courses (mid-range)", sensitivity: "Medium", note: "Benchmark against competitors before raising" },
  { category: "Sides & add-ons", sensitivity: "Medium-high", note: "Feel like nickle-and-diming — raise carefully" },
  { category: "Beverages (non-alcohol)", sensitivity: "High", note: "Customers remember soda and coffee prices exactly" },
  { category: "Cheapest item on menu", sensitivity: "Very high", note: "Sets the floor — protect this anchor price" },
];

export default function HowToRaiseMenuPricesPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      {/* Nav */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <LogoIcon size={28} />
            <span className="font-black text-gray-900 tracking-tight text-lg">Menu<span className="text-orange-500">Pricer</span></span>
          </Link>
          <span className="text-gray-300 text-sm">·</span>
          <Link href="/blog" className="text-sm text-gray-500 hover:text-orange-500 transition-colors">Blog</Link>
          <span className="text-gray-300 text-sm">·</span>
          <span className="text-sm text-gray-500 truncate">How to Raise Menu Prices</span>
          <Link href="/" className="ml-auto text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors whitespace-nowrap">Try AI Pricer →</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <Link href="/" className="hover:text-orange-500">Home</Link>
          <span>›</span>
          <Link href="/blog" className="hover:text-orange-500">Blog</Link>
          <span>›</span>
          <span className="text-gray-600">How to Raise Menu Prices</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-bold bg-orange-100 text-orange-600 px-3 py-1 rounded-full">Menu Pricing</span>
            <span className="text-xs text-gray-400">8 min read · July 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-4">
            How to Raise Menu Prices Without Losing Customers
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            Food costs are up. Labor is up. Rent is up. At some point, you have to raise prices — or watch your margins
            shrink to zero. Here is how to do it without triggering a Yelp backlash or losing your regulars.
          </p>
        </div>

        {/* Key stat callout */}
        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5 mb-10 grid grid-cols-3 gap-4 text-center">
          {[
            { n: "10%", label: "Max increase customers tolerate without behavior change" },
            { n: "12 mo", label: "Recommended minimum time between price increases" },
            { n: "5–8%", label: "Typical annual price increase for healthy restaurants" },
          ].map(({ n, label }) => (
            <div key={n}>
              <p className="text-2xl font-black text-orange-500">{n}</p>
              <p className="text-xs text-gray-500 mt-1 leading-tight">{label}</p>
            </div>
          ))}
        </div>

        <div className="prose prose-gray max-w-none space-y-10">

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">The real reason restaurants are afraid to raise prices</h2>
            <p className="text-gray-600 leading-relaxed">
              Most restaurant owners know they should raise prices — their ingredient invoices have been climbing for months.
              What stops them is fear: fear of the one angry regular who complains, fear of the Yelp review, fear of being
              "that restaurant that got expensive."
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              Here is what the data actually shows. A study of 2,000 restaurant customers found that{" "}
              <strong>67% said they would accept a 10% price increase if the quality stayed the same.</strong> Only 12% said
              they would stop visiting. The other 21% said they would visit slightly less often — but not stop.
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              Meanwhile, restaurants that do not raise prices often end up cutting portion sizes, reducing quality, or closing
              entirely. None of those outcomes are better for your customers.
            </p>
          </section>

          {/* Section 2: When */}
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">When to raise your prices</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Do not wait until you are losing money. These are the signals that a price increase is overdue:
            </p>
            <div className="space-y-3">
              {[
                {
                  trigger: "Food cost percentage above 35% for 60+ days",
                  why: "Healthy restaurants run 28–32% food cost. Above 35% and you are working for nothing.",
                },
                {
                  trigger: "A key ingredient cost up more than 15%",
                  why: "One ingredient can move your margin by 2–4 points. Track your top 5 ingredient costs monthly.",
                },
                {
                  trigger: "Net profit margin below 5%",
                  why: "Average full-service restaurant profit margin is 3–9%. Below 5% leaves no buffer for a slow month.",
                },
                {
                  trigger: "Last price increase was more than 12 months ago",
                  why: "General inflation runs 3–4% annually. If your prices have not moved, your real margin shrinks every year.",
                },
                {
                  trigger: "You added a new cost (delivery, packaging, POS fee)",
                  why: "Every new fixed cost lowers margin on every dish. Adjust prices when costs permanently increase.",
                },
              ].map(({ trigger, why }) => (
                <div key={trigger} className="flex gap-3 bg-gray-50 rounded-xl p-4">
                  <span className="text-orange-500 font-black text-lg shrink-0 mt-0.5">→</span>
                  <div>
                    <p className="font-bold text-gray-800 text-sm">{trigger}</p>
                    <p className="text-sm text-gray-500 mt-0.5">{why}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: How much */}
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">How much to raise prices</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The math is straightforward. If your food cost percentage has drifted from 30% to 36%, you need to raise
              prices enough to pull it back.
            </p>
            <div className="bg-gray-900 rounded-2xl p-5 mb-5 text-sm font-mono text-green-400 space-y-2">
              <p className="text-gray-400 text-xs mb-3">// Example: Dish with $4.20 ingredient cost</p>
              <p>Current price: $12.00</p>
              <p>Current food cost %: $4.20 / $12.00 = <span className="text-red-400">35%</span>  ← too high</p>
              <p className="mt-3">Target food cost %: 30%</p>
              <p>Required price: $4.20 / 0.30 = <span className="text-green-300 font-bold">$14.00</span></p>
              <p>Increase needed: $2.00 (16.7%) — split into two raises</p>
            </div>
            <p className="text-gray-600 leading-relaxed">
              If a single increase exceeds 10%, split it into two raises 6–9 months apart. Customers adjust to gradual
              increases far more easily than a sudden jump.
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              Always land on a <strong>psychological price point</strong>: $12.99 instead of $13.10, $15.50 instead of
              $15.75. The difference is cents but the perceived value gap is real.
            </p>
          </section>

          {/* Section 4: Which dishes */}
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-5">Which dishes to reprice first</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Not all dishes carry the same price sensitivity. Use this framework to sequence your increases:
            </p>
            <div className="overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 font-bold text-gray-700">Category</th>
                    <th className="text-left px-4 py-3 font-bold text-gray-700">Price sensitivity</th>
                    <th className="text-left px-4 py-3 font-bold text-gray-700 hidden sm:table-cell">Note</th>
                  </tr>
                </thead>
                <tbody>
                  {PRICE_SENSITIVITY.map((row, i) => (
                    <tr key={i} className="border-b border-gray-100 last:border-0">
                      <td className="px-4 py-3 font-medium text-gray-800">{row.category}</td>
                      <td className="px-4 py-3">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                          row.sensitivity === "Low" || row.sensitivity === "Very low"
                            ? "bg-green-100 text-green-700"
                            : row.sensitivity === "Medium"
                            ? "bg-amber-100 text-amber-700"
                            : "bg-red-100 text-red-600"
                        }`}>
                          {row.sensitivity}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-500 hidden sm:table-cell">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 leading-relaxed mt-4">
              <strong>Raise your lowest-margin dishes first.</strong> Use{" "}
              <Link href="/" className="text-orange-500 hover:underline">MenuPricer&apos;s analytics view</Link> to sort
              your menu by margin and identify which dishes are dragging down your average.
            </p>
          </section>

          {/* Section 5: How to communicate */}
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">How to communicate the increase (or not)</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The conventional wisdom is right: <strong>do not announce price increases.</strong> Quietly update the menu.
              Most customers will not notice a 5–8% increase, especially if they do not visit every week.
            </p>
            <div className="space-y-4">
              <div className="border-l-4 border-green-400 pl-4">
                <p className="font-bold text-gray-800 text-sm">Do: Update menus cleanly</p>
                <p className="text-sm text-gray-500 mt-1">Print new menus or update your digital menu. No strikethroughs, no "new price" callouts, no apology notes. Just the current price.</p>
              </div>
              <div className="border-l-4 border-green-400 pl-4">
                <p className="font-bold text-gray-800 text-sm">Do: Prepare a simple honest answer if asked</p>
                <p className="text-sm text-gray-500 mt-1">"Our ingredient costs have gone up significantly, and we are committed to keeping the same quality. We had to adjust our prices to reflect that." Full stop. No over-explaining.</p>
              </div>
              <div className="border-l-4 border-red-400 pl-4">
                <p className="font-bold text-gray-800 text-sm">Do not: Reduce portions without saying anything</p>
                <p className="text-sm text-gray-500 mt-1">This destroys trust faster than any price increase. If you must reduce a portion, note it on the menu ("now served as a starter") or redesign the dish.</p>
              </div>
              <div className="border-l-4 border-red-400 pl-4">
                <p className="font-bold text-gray-800 text-sm">Do not: Raise prices and cut quality simultaneously</p>
                <p className="text-sm text-gray-500 mt-1">Customers will notice. If you raise a dish price, the dish at the new price needs to feel worth it. If it does not, you will see the feedback.</p>
              </div>
              <div className="border-l-4 border-amber-400 pl-4">
                <p className="font-bold text-gray-800 text-sm">Consider: Adding value instead of pure price increases</p>
                <p className="text-sm text-gray-500 mt-1">A small garnish upgrade, a better presentation, or a complimentary amuse-bouche on slow nights can shift perceived value enough to justify a higher price point.</p>
              </div>
            </div>
          </section>

          {/* Section 6: Menu engineering */}
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Use menu engineering to do the heavy lifting</h2>
            <p className="text-gray-600 leading-relaxed">
              Before raising prices across the board, consider repositioning your menu layout. Research from Cornell
              University&apos;s Center for Hospitality Research found that strategic menu placement can increase the sales of a
              high-margin item by 27% without any price change.
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              Place your <strong>high-margin, high-popularity dishes</strong> in the top-right corner and top of the first
              section — where the eye lands first. Move low-margin dishes to the back. You may find you can hold prices on
              your anchor dishes while naturally steering customers toward better-margin options.
            </p>
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mt-4">
              <p className="font-bold text-blue-800 text-sm mb-2">Menu engineering quadrants</p>
              <div className="grid grid-cols-2 gap-3 text-xs">
                {[
                  { name: "Stars ⭐", desc: "High margin + High popularity → Feature prominently, protect price", color: "bg-green-100 text-green-800" },
                  { name: "Plowhorses 🐴", desc: "Low margin + High popularity → Raise price slowly or reduce cost", color: "bg-amber-100 text-amber-800" },
                  { name: "Puzzles ❓", desc: "High margin + Low popularity → Reposition on menu, rename, feature", color: "bg-blue-100 text-blue-800" },
                  { name: "Dogs 🐕", desc: "Low margin + Low popularity → Remove or completely redesign", color: "bg-red-100 text-red-700" },
                ].map(({ name, desc, color }) => (
                  <div key={name} className={`rounded-xl p-3 ${color}`}>
                    <p className="font-bold">{name}</p>
                    <p className="mt-1 leading-tight">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 7: Delivery */}
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Delivery menus: a separate pricing strategy</h2>
            <p className="text-gray-600 leading-relaxed">
              If you sell on DoorDash, Uber Eats, or Grubhub, your delivery menu should be priced{" "}
              <strong>15–20% higher</strong> than your dine-in menu. The platforms take 15–30% in commission, and packaging
              and delivery handling add another 2–4% in cost. Pricing parity between your dine-in and delivery menus means
              you are losing money on every delivery order.
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              Use the{" "}
              <Link href="/delivery-platform-calculator" className="text-orange-500 hover:underline">
                delivery platform fee calculator
              </Link>{" "}
              to see exactly how much each platform commission costs you per dish, and what price you need to charge to
              hit your target margin after fees.
            </p>
          </section>

          {/* CTA */}
          <section className="bg-orange-500 rounded-2xl p-7 text-white">
            <h2 className="text-xl font-black mb-2">Find out exactly which dishes need a price increase</h2>
            <p className="text-orange-100 text-sm mb-5">
              MenuPricer&apos;s analytics view shows your margin on every dish and flags anything below 30%. Know before you reprint the menu.
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-orange-600 font-black px-6 py-3 rounded-xl hover:bg-orange-50 transition-colors shadow-lg shadow-orange-700/20"
            >
              Check My Menu Margins Free →
            </Link>
            <p className="text-orange-200 text-xs mt-3">No credit card · Free for 5 dishes</p>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-6">Frequently asked questions</h2>
            <div className="space-y-5">
              {FAQ_SCHEMA.mainEntity.map((item, i) => (
                <div key={i} className="border-b border-gray-100 pb-5 last:border-0">
                  <h3 className="font-bold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related */}
          <section className="border-t border-gray-100 pt-8">
            <h2 className="text-lg font-black text-gray-900 mb-4">Related guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: "/blog/how-to-price-a-restaurant-menu", title: "How to Price a Restaurant Menu", desc: "The complete formula — food cost, markup, and market benchmarking." },
                { href: "/blog/food-cost-formula", title: "Food Cost Formula Explained", desc: "Calculate food cost percentage per dish with worked examples." },
                { href: "/blog/restaurant-profit-margin", title: "What Is a Good Restaurant Profit Margin?", desc: "Average margins by restaurant type and how to improve yours." },
                { href: "/blog/how-to-cost-a-dish", title: "How to Cost a Dish", desc: "Step-by-step ingredient, yield, and overhead breakdown." },
              ].map((post) => (
                <Link key={post.href} href={post.href} className="group bg-gray-50 hover:bg-orange-50 border border-gray-200 hover:border-orange-200 rounded-xl p-4 transition-all">
                  <p className="font-bold text-gray-800 text-sm group-hover:text-orange-600 transition-colors">{post.title}</p>
                  <p className="text-xs text-gray-500 mt-1">{post.desc}</p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 mt-16 py-8 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <LogoIcon size={20} />
            <span className="font-black text-gray-900 text-sm">Menu<span className="text-orange-500">Pricer</span></span>
          </div>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <Link href="/food-cost-calculator" className="hover:text-orange-500">Food Cost Calculator</Link>
            <Link href="/restaurant-profit-calculator" className="hover:text-orange-500">Profit Calculator</Link>
            <Link href="/blog" className="hover:text-orange-500">All Blog Posts</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}