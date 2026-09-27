import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

const DATE_PUBLISHED = "2026-09-27";
const DATE_DISPLAY = "September 2026";

export const metadata: Metadata = {
  title: "How to Price Baked Goods: The Formula Every Bakery Needs (2026)",
  description:
    "How to price baked goods correctly: ingredient cost, overhead allocation, labor, and the markup formula that gives you a sustainable margin. Works for home bakers and commercial bakeries.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/how-to-price-baked-goods" },
  openGraph: {
    title: "How to Price Baked Goods: The Formula Every Bakery Needs",
    description: "The step-by-step pricing formula for baked goods — from ingredient cost to overhead to final price.",
    url: "https://www.aimenupricer.com/blog/how-to-price-baked-goods",
    type: "article",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "MenuPricer — AI-powered menu pricing for restaurants" }],
  },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "How to Price Baked Goods: The Formula Every Bakery Needs",
  description: "Step-by-step baked goods pricing: ingredient cost per unit, overhead allocation, labor, markup formula, and worked examples for cookies, cakes, and bread.",
  url: "https://www.aimenupricer.com/blog/how-to-price-baked-goods",
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
    { "@type": "ListItem", position: 3, name: "How to Price Baked Goods", item: "https://www.aimenupricer.com/blog/how-to-price-baked-goods" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do you calculate the price of baked goods?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The basic formula is: Price = (Ingredient cost + Overhead allocation + Labor cost) ÷ (1 − target profit margin). Start by calculating ingredient cost per unit: add up the cost of every ingredient in the batch and divide by the number of units produced. Add overhead (packaging, utilities, rent per hour of kitchen use) and labor (your hourly rate × time to make the batch ÷ units produced). Then mark up to your target profit margin. For a bakery, a final price of 3× to 4× ingredient cost is typical.",
      },
    },
    {
      "@type": "Question",
      name: "What is a good markup for baked goods?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For retail bakery sales, a markup of 3× to 5× ingredient cost is typical. Ingredient cost should represent 25–35% of your selling price. A cookie that costs $0.30 in ingredients should sell for $1.00–$1.25 at minimum. Wholesale prices are typically 40–50% of retail, so the same cookie sells to wholesale accounts at $0.45–$0.60. Custom cakes and specialty items can support higher markups because of the labor and skill premium.",
      },
    },
    {
      "@type": "Question",
      name: "Should I charge for my time when pricing baked goods?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, always. Many home bakers and small bakeries price based on ingredient cost alone and then wonder why they cannot sustain the business. Your labor must be included in the price. Use your target hourly rate — a professional baker commands at least minimum wage, and skilled specialty work justifies significantly more. Divide your total batch labor cost by the number of units to get labor cost per unit.",
      },
    },
    {
      "@type": "Question",
      name: "How do you price a custom cake?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For custom cakes, calculate ingredient cost for the specific order (including specialty decorations, fondant, and custom elements), then add labor time at your hourly rate — including design consultation, baking, and decoration time. Add a materials overhead for packaging, boards, and delivery if applicable. Then mark up to your target margin. Custom work typically commands a premium over standard items because of the skill and time involved. Minimum order pricing protects against orders that are too small to be worth the fixed setup time.",
      },
    },
  ],
};

export default function HowToPriceBakedGoodsPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <LogoIcon size={28} />
            <span className="font-black text-gray-900 tracking-tight text-lg">Menu<span className="text-orange-500">Pricer</span></span>
          </Link>
          <span className="text-gray-300 text-sm">·</span>
          <Link href="/blog" className="text-sm text-gray-400 hover:text-gray-600">Blog</Link>
          <Link href="/" className="ml-auto text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors">AI Pricing Tool →</Link>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-6 py-14">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-bold bg-orange-100 text-orange-600 px-2.5 py-1 rounded-full">Bakery Pricing</span>
          <span className="text-xs text-gray-400">7 min read</span>
          <span className="text-xs text-gray-400">·</span>
          <time dateTime={DATE_PUBLISHED} className="text-xs text-gray-400">Updated {DATE_DISPLAY}</time>
        </div>

        <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-6">
          How to Price Baked Goods
        </h1>
        <p className="text-xl text-gray-500 leading-relaxed mb-10 border-b border-gray-100 pb-10">
          Most bakeries undercharge because they only count ingredient cost. Here is the complete pricing formula — ingredient cost, overhead, labor, and profit margin — with worked examples for cookies, loaves, and custom cakes.
        </p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">The complete baked goods pricing formula</h2>
            <div className="bg-gray-900 rounded-xl p-6 my-4">
              <p className="font-mono text-sm text-green-400 font-bold mb-3">Price per unit = (Ingredient cost + Overhead + Labor) ÷ (1 − Profit margin)</p>
              <div className="space-y-1 text-xs text-gray-400 font-mono">
                <p>Ingredient cost = total ingredient cost per batch ÷ units per batch</p>
                <p>Overhead = packaging + utilities + kitchen rent per hour × hours ÷ units</p>
                <p>Labor = hourly rate × batch time ÷ units produced</p>
                <p>Profit margin = target as decimal (e.g., 0.20 for 20%)</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 bg-gray-50 rounded-lg p-3">
              Many bakers skip overhead and labor, then wonder why their business does not cover their costs. Every component must be in the price.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Worked example: Chocolate chip cookies</h2>
            <p>A batch of 24 cookies. Target food cost percentage: 30%.</p>

            <div className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden my-4">
              <div className="px-5 py-3 bg-gray-900">
                <p className="text-xs font-bold text-gray-300 uppercase tracking-wide">Step 1: Ingredient cost per batch</p>
              </div>
              <table className="w-full text-sm">
                <thead><tr className="border-b border-gray-200"><th className="text-left px-4 py-2 text-gray-500 font-medium text-xs">Ingredient</th><th className="text-right px-4 py-2 text-gray-500 font-medium text-xs">Cost</th></tr></thead>
                <tbody>
                  {[
                    ["All-purpose flour (2 cups)", "$0.40"],
                    ["Butter (1 cup)", "$1.20"],
                    ["Sugar + brown sugar (1.5 cups)", "$0.45"],
                    ["Eggs (2 large)", "$0.60"],
                    ["Chocolate chips (1.5 cups)", "$2.10"],
                    ["Vanilla, salt, baking soda", "$0.15"],
                  ].map(([item, cost], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-2 text-gray-700">{item}</td>
                      <td className="px-4 py-2 text-gray-700 text-right font-mono">{cost}</td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-gray-300 bg-orange-50">
                    <td className="px-4 py-2 font-bold text-gray-900">Total batch cost</td>
                    <td className="px-4 py-2 font-bold text-orange-600 text-right font-mono">$4.90</td>
                  </tr>
                  <tr className="bg-orange-50">
                    <td className="px-4 py-2 font-bold text-gray-900">Cost per cookie (÷24)</td>
                    <td className="px-4 py-2 font-bold text-orange-600 text-right font-mono">$0.20</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden my-4">
              <div className="px-5 py-3 bg-gray-900">
                <p className="text-xs font-bold text-gray-300 uppercase tracking-wide">Step 2: Overhead per cookie</p>
              </div>
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ["Packaging (bag + label)", "$0.12"],
                    ["Utilities (oven, cooling)", "$0.04"],
                    ["Kitchen / space allocation", "$0.03"],
                  ].map(([item, cost], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-2 text-gray-700">{item}</td>
                      <td className="px-4 py-2 text-gray-700 text-right font-mono">{cost}</td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-gray-300 bg-orange-50">
                    <td className="px-4 py-2 font-bold text-gray-900">Overhead per cookie</td>
                    <td className="px-4 py-2 font-bold text-orange-600 text-right font-mono">$0.19</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden my-4">
              <div className="px-5 py-3 bg-gray-900">
                <p className="text-xs font-bold text-gray-300 uppercase tracking-wide">Step 3: Labor per cookie</p>
              </div>
              <div className="px-5 py-4 text-sm text-gray-700">
                <p>Batch time: 45 min. Hourly rate: $20/hr. Labor per batch: $15.00</p>
                <p className="font-mono text-orange-600 font-bold mt-1">$15 ÷ 24 cookies = $0.63 per cookie</p>
              </div>
            </div>

            <div className="bg-orange-50 rounded-xl border border-orange-200 p-5 my-4">
              <p className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-3">Step 4: Calculate selling price (20% profit target)</p>
              <div className="font-mono text-sm space-y-1 text-gray-700">
                <p>Total cost per cookie = $0.20 + $0.19 + $0.63 = <strong>$1.02</strong></p>
                <p>Selling price = $1.02 ÷ (1 − 0.20) = <strong className="text-orange-600 text-lg">$1.28</strong></p>
                <p className="text-xs text-gray-500 mt-2">Round up to $1.50 or $1.75 depending on your market</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Common baked goods pricing mistakes</h2>
            <div className="space-y-3">
              {[
                {
                  mistake: "Pricing based on ingredient cost only",
                  fix: "Ingredient cost should be 25–35% of your selling price — not the whole cost. A cookie with $0.20 ingredient cost does not sell for $0.60 just because 3× is &ldquo;standard markup.&rdquo; Add overhead and labor first.",
                },
                {
                  mistake: "Undervaluing your time",
                  fix: "Charging $15/hr or less for skilled baking work is the most common way bakeries stay permanently unprofitable. Your rate needs to reflect skill, experience, and what the market pays for similar work.",
                },
                {
                  mistake: "Pricing custom work the same as production items",
                  fix: "Custom cakes require design time, client communication, and specialized technique. That work must be in the price. Consider a flat rate for the first consultation hour plus a per-hour rate for design and decoration time.",
                },
                {
                  mistake: "Not reviewing prices when ingredient costs rise",
                  fix: "Butter, eggs, flour, and chocolate are all commodity-priced and fluctuate significantly. A price list that was accurate last year may be costing you money today.",
                },
              ].map((x, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-4">
                  <p className="text-sm font-bold text-red-600 mb-2">✗ {x.mistake}</p>
                  <p className="text-sm text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: `→ ${x.fix}` }} />
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Retail vs. wholesale pricing</h2>
            <p>
              Wholesale prices are typically 40–50% of your retail price. This accounts for the
              bulk discount while still covering your costs. Before taking a wholesale account,
              confirm that the order volume justifies the margin reduction: a wholesale order that
              does not cover fully allocated labor and overhead is a money-losing order.
            </p>
            <div className="overflow-x-auto my-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Channel</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Typical price</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Retail (own storefront / café)", "Full price", "Best margin; build loyal customers here"],
                    ["Farmers market / pop-up", "Full price or slight premium", "Can command artisan premium; offset with stall fee"],
                    ["Restaurant / café wholesale", "40–50% of retail", "Volume needed to offset lower margin"],
                    ["Grocery / specialty store", "40–50% of retail", "Consistent volume; slower payment cycles"],
                    ["Online / delivery", "Full or slight premium", "Add packaging and delivery cost; deduct platform fee"],
                  ].map(([channel, price, note], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 text-gray-800 font-medium border-b border-gray-100">{channel}</td>
                      <td className="px-4 py-3 text-orange-600 font-bold border-b border-gray-100">{price}</td>
                      <td className="px-4 py-3 text-gray-600 text-xs border-b border-gray-100">{note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

        </div>

        <div className="bg-orange-500 rounded-2xl p-8 text-center my-12">
          <h2 className="text-2xl font-bold text-white mb-3">Price any baked good in under 30 seconds</h2>
          <p className="text-orange-100 mb-5">
            Type the item name and MenuPricer returns the estimated ingredient cost, suggested price
            tiers, and food cost percentage. Works for cookies, cakes, bread, and pastries.
            Free for your first 5 items.
          </p>
          <Link href="/" className="inline-block bg-white text-orange-500 font-bold px-8 py-3 rounded-xl hover:bg-orange-50 transition-colors">
            Price My First Item Free →
          </Link>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Frequently asked questions</h2>
          <div className="space-y-4">
            {FAQ_SCHEMA.mainEntity.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-2">{faq.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-gray-100 pt-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Related reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: "/bakery-pricing-calculator", title: "Bakery Pricing Calculator", desc: "Calculate the right price for any bakery item instantly." },
              { href: "/blog/bakery-pricing-guide", title: "Bakery Pricing Guide", desc: "The full guide to pricing a bakery menu, from pastries to custom cakes." },
              { href: "/blog/food-cost-formula", title: "Food Cost Formula", desc: "The math that underpins every pricing decision." },
              { href: "/recipe-costing-template", title: "Recipe Costing Template", desc: "A free spreadsheet template for costing any recipe." },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="border border-gray-200 rounded-xl p-4 hover:border-orange-300 transition-colors group">
                <p className="font-semibold text-gray-900 group-hover:text-orange-500 transition-colors text-sm mb-1">{link.title}</p>
                <p className="text-xs text-gray-500">{link.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </article>

      <footer className="border-t border-gray-100 mt-8 py-8">
        <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <LogoIcon size={24} />
            <span className="font-black text-gray-900 text-sm">Menu<span className="text-orange-500">Pricer</span></span>
          </Link>
          <p className="text-xs text-gray-400">© 2026 MenuPricer. AI-powered menu pricing for restaurant owners.</p>
        </div>
      </footer>
    </div>
  );
}
