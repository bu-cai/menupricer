import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "Menu Pricing Formula: How to Turn Food Cost Into the Right Price (2026)",
  description:
    "The menu pricing formula that turns ingredient cost into a sellable price — including the Q factor buffer, a manual ingredient cost calculator walkthrough, and worked examples.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/menu-pricing-formula" },
  openGraph: {
    title: "Menu Pricing Formula: How to Turn Food Cost Into the Right Price",
    description: "Menu Price = Total Cost ÷ (1 − Target Margin). The full formula, a manual ingredient cost calculator walkthrough, the Q factor buffer, and worked examples.",
    url: "https://www.aimenupricer.com/blog/menu-pricing-formula",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "MenuPricer — AI-powered menu pricing for restaurants" }],
  },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Menu Pricing Formula: How to Turn Food Cost Into the Right Price (2026)",
  description: "The menu pricing formula for turning ingredient cost into a sellable price — the Q factor buffer, a manual ingredient cost calculator walkthrough, and worked examples.",
  author: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  publisher: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  datePublished: "2026-09-27",
  dateModified: "2026-09-27",
  mainEntityOfPage: "https://www.aimenupricer.com/blog/menu-pricing-formula",
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
      acceptedAnswer: { "@type": "Answer", text: "Menu Price = Total Cost ÷ (1 − Target Margin). Total cost is ingredient cost (plus a Q factor buffer for untracked items) plus labor % and overhead % of that ingredient cost, plus any packaging. If a dish's total cost is $10.52 and your target margin is 70%, the price is $10.52 ÷ (1 − 0.70) = $35.07. This is different from the food-cost-percentage formula, which only divides by ingredient cost and ignores labor and overhead." },
    },
    {
      "@type": "Question",
      name: "How do you calculate ingredient cost for a dish?",
      acceptedAnswer: { "@type": "Answer", text: "Convert every ingredient to a cost per unit (package price ÷ package size), multiply by the quantity the recipe actually uses, and add every line together. A recipe with 4 ingredients costing $2.10, $1.40, $0.85, and $0.60 has an ingredient cost of $4.95. Add a small Q factor buffer — typically 3-8% — for garnishes, oil, salt, and condiments you don't want to itemize line by line." },
    },
    {
      "@type": "Question",
      name: "What is the Q factor in recipe costing?",
      acceptedAnswer: { "@type": "Answer", text: "The Q factor is a small percentage added to a recipe's itemized ingredient cost to cover items that are real costs but not worth tracking individually — cooking oil, salt, pepper, a squeeze of lemon, a sprig of garnish. Most kitchens use 3% to 8% of the itemized ingredient cost. Below that, the labor of itemizing every garnish costs more than the accuracy it buys; skip it entirely and every dish quietly under-costs by a few percent." },
    },
    {
      "@type": "Question",
      name: "Should I price from food cost percentage or from margin?",
      acceptedAnswer: { "@type": "Answer", text: "They describe the same economics from two different angles. Food cost percentage (ingredient cost ÷ price) is the traditional restaurant-industry number and is what most POS reports show. Margin (1 − total cost ÷ price) is more complete because it also accounts for labor and overhead, which is why software-based pricing tools tend to default to it. Track food cost % because your team already benchmarks against it — but price from full-cost margin, because that's the number that actually determines whether a dish makes you money." },
    },
  ],
};

export default function MenuPricingFormulaPost() {
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
          <span className="text-xs font-bold bg-orange-100 text-orange-600 px-2.5 py-1 rounded-full">Menu Pricing</span>
          <span className="text-xs text-gray-400">7 min read</span>
          <span className="text-xs text-gray-400">·</span>
          <time dateTime="2026-09-27" className="text-xs text-gray-400">Updated September 2026</time>
          <span className="text-xs text-gray-400">·</span>
          <span className="text-xs text-gray-400">Reviewed by the MenuPricer Team</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-6">
          Menu Pricing Formula: Turn Food Cost Into the Right Price
        </h1>
        <p className="text-xl text-gray-500 leading-relaxed mb-10 border-b border-gray-100 pb-10">
          Most food cost guides stop at the percentage. This one goes one step further — the exact formula for turning an ingredient list into a sellable menu price, including the buffer professional kitchens add for costs too small to itemize.
        </p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">The menu pricing formula</h2>
            <p>
              The food-cost-percentage formula everyone learns first — Food Cost % = Ingredient Cost ÷ Price — only accounts
              for ingredients. It quietly ignores labor and overhead, which is fine for benchmarking but leaves a gap when
              you're actually setting a price. The fuller version restaurants use to go from cost to price in one pass:
            </p>
            <div className="bg-gray-900 rounded-xl p-6 my-4 text-center">
              <p className="font-mono text-lg text-green-400 font-bold">Menu Price = Total Cost ÷ (1 − Target Margin)</p>
            </div>
            <p>Where <strong>Total Cost</strong> is everything that goes into serving the dish once:</p>
            <div className="bg-orange-50 rounded-xl p-5 my-4 border border-orange-100 font-mono text-sm text-orange-700">
              <p>Total Cost = Ingredient Cost + Q Factor + Labor % + Overhead % + Packaging</p>
            </div>
            <p>
              This isn't a replacement for the food-cost-percentage formula — see{" "}
              <Link href="/blog/food-cost-formula" className="text-orange-600 font-semibold hover:underline">Food Cost Formula</Link> for that side of it —
              it's the version that answers the question owners actually have: <em>given everything this dish costs me, what do I charge?</em>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Step 1: Calculate ingredient cost (a manual ingredient cost calculator)</h2>
            <p>
              Before any formula matters, you need one clean number: what the ingredients in a single serving actually cost.
              The math is always the same three moves, done ingredient by ingredient:
            </p>
            <ol className="list-decimal pl-5 mt-3 space-y-2">
              <li>Cost per unit: <span className="font-mono bg-gray-100 px-1.5 py-0.5 rounded text-sm">Package Price ÷ Package Size</span></li>
              <li>Cost per portion: <span className="font-mono bg-gray-100 px-1.5 py-0.5 rounded text-sm">Cost per unit × Quantity used in the recipe</span></li>
              <li>Add every ingredient's portion cost together</li>
            </ol>

            <div className="bg-gray-50 rounded-xl p-5 my-5 border border-gray-200">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Worked example: Grilled Salmon</p>
              <table className="w-full text-sm">
                <thead><tr className="border-b border-gray-200 text-left">
                  <th className="pb-2 text-gray-500 font-semibold">Ingredient</th>
                  <th className="pb-2 text-gray-500 font-semibold">Pkg size / cost</th>
                  <th className="pb-2 text-gray-500 font-semibold">Qty used</th>
                  <th className="pb-2 text-gray-500 font-semibold text-right">Cost</th>
                </tr></thead>
                <tbody className="divide-y divide-gray-100 text-gray-600">
                  {[
                    ["Salmon fillet", "$14 / lb", "6 oz", "$5.25"],
                    ["Lemon-butter sauce (butter, wine, herbs)", "batch-prepped", "1 portion", "$0.85"],
                    ["Seasonal vegetable side", "$3.50 / lb", "0.4 lb", "$1.40"],
                    ["Rice pilaf", "$1.20 / lb", "0.5 lb", "$0.60"],
                  ].map(([i, p, q, c]) => (
                    <tr key={i}><td className="py-1.5">{i}</td><td className="py-1.5 text-gray-400 text-xs">{p}</td><td className="py-1.5 text-gray-400 text-xs">{q}</td><td className="py-1.5 text-right font-mono">{c}</td></tr>
                  ))}
                  <tr className="font-bold text-gray-900 border-t border-gray-200">
                    <td className="pt-2" colSpan={3}>Itemized ingredient cost</td>
                    <td className="pt-2 text-right font-mono text-orange-600">$8.10</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              That $8.10 covers everything you bothered to itemize. It's not the whole ingredient cost — which is exactly
              what the Q factor below fixes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Step 2: Add the Q factor</h2>
            <p>
              The Q factor is a small percentage added on top of your itemized ingredient cost to cover everything real but
              not worth tracking line by line: cooking oil, salt, pepper, a squeeze of lemon, the garnish sprig, a splash of
              wine that goes into a dozen sauces at once. None of it is free, and across a full menu it adds up — but pricing
              a recipe card down to the individual peppercorn costs more in kitchen time than the accuracy is worth.
            </p>
            <p>Most kitchens use a flat 3% to 8% of the itemized ingredient cost, scaled to how garnish-heavy the dish is:</p>
            <div className="overflow-x-auto rounded-xl border border-gray-200 my-4">
              <table className="w-full text-sm">
                <thead><tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-bold text-gray-600">Dish style</th>
                  <th className="text-left px-4 py-3 font-bold text-gray-600">Typical Q factor</th>
                </tr></thead>
                <tbody className="divide-y divide-gray-50 text-sm">
                  {[
                    ["Simple plate, minimal garnish (bowls, sandwiches)", "3–4%"],
                    ["Standard entrée with sauce and sides", "4–6%"],
                    ["Composed fine-dining plate, multiple garnishes", "6–8%"],
                  ].map(([type, q]) => (
                    <tr key={type} className="hover:bg-orange-50/30 transition-colors">
                      <td className="px-4 py-2.5 font-semibold text-gray-700">{type}</td>
                      <td className="px-4 py-2.5"><span className="font-bold text-orange-600">{q}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>For the Grilled Salmon, at a 5% Q factor:</p>
            <div className="bg-orange-50 rounded-xl p-5 my-4 border border-orange-100 font-mono text-sm text-orange-700">
              <p>$8.10 × 1.05 = <strong className="text-xl">$8.51</strong> adjusted ingredient cost</p>
            </div>
            <p>
              Skip the Q factor entirely and every dish on your menu under-costs by that same 3–8% — small per plate,
              meaningful across a few hundred covers a week.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Step 3: Add labor, overhead, and packaging</h2>
            <p>
              Labor and overhead are applied as a percentage of the adjusted ingredient cost — the same convention
              MenuPricer's own calculator uses, so the two stay consistent if you check your numbers against it:
            </p>
            <div className="bg-gray-50 rounded-xl p-5 my-5 border border-gray-200">
              <table className="w-full text-sm">
                <tbody className="divide-y divide-gray-100 text-gray-600">
                  <tr><td className="py-1.5">Adjusted ingredient cost</td><td className="py-1.5 text-right font-mono">$8.51</td></tr>
                  <tr><td className="py-1.5">Labor (15% of ingredient cost)</td><td className="py-1.5 text-right font-mono">$1.28</td></tr>
                  <tr><td className="py-1.5">Overhead (10% of ingredient cost)</td><td className="py-1.5 text-right font-mono">$0.85</td></tr>
                  <tr><td className="py-1.5">Packaging (dine-in, plated)</td><td className="py-1.5 text-right font-mono">$0.00</td></tr>
                  <tr className="font-bold text-gray-900 border-t border-gray-200">
                    <td className="pt-2">Total cost</td>
                    <td className="pt-2 text-right font-mono text-orange-600">$10.64</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Step 4: Solve for price</h2>
            <p>Plug the total cost into the formula with a target margin. Full-service casual dining typically targets a 68–72% gross margin:</p>
            <div className="bg-gray-900 rounded-xl p-5 my-4 font-mono text-sm text-green-400">
              <p>Menu Price = $10.64 ÷ (1 − 0.70)</p>
            </div>
            <div className="bg-orange-50 rounded-xl p-5 my-4 border border-orange-100 font-mono text-sm text-orange-700">
              <p>$10.64 ÷ 0.30 = <strong className="text-2xl">$35.47</strong> → price at $36</p>
              <p className="text-orange-500 text-xs mt-1">Food cost % on this price: ($8.51 ÷ $36) × 100 = 23.6% — comfortably inside a fine-casual target</p>
            </div>
            <p>
              Rounding to $36 instead of $35.47 isn't arbitrary — see{" "}
              <Link href="/blog/how-to-price-a-restaurant-menu" className="text-orange-600 font-semibold hover:underline">How to Price a Restaurant Menu</Link>{" "}
              for how charm pricing and menu-wide price anchoring should shape the final number.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Picking a target margin</h2>
            <p>
              The target margin (or its mirror, target food cost %) is the one input in this formula you have to choose
              rather than calculate. It depends on restaurant type, not on this dish specifically — full benchmarks by
              concept are in{" "}
              <Link href="/blog/food-cost-percentage-by-restaurant-type" className="text-orange-600 font-semibold hover:underline">Food Cost Percentage by Restaurant Type</Link>.
              As a starting point:
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-1.5">
              <li>Fast casual / high volume: 28–33% target food cost (67–72% margin)</li>
              <li>Full-service casual dining: 30–35% target food cost (65–70% margin)</li>
              <li>Fine dining: 25–30% target food cost (70–75% margin)</li>
              <li>Coffee / beverage-led: 15–22% target food cost (78–85% margin)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Where this formula breaks down</h2>
            <p>Three situations where a straight cost-plus-margin number needs a second look before it goes on the menu:</p>
            <div className="space-y-3 my-4">
              {[
                { cause: "Delivery vs. dine-in", fix: "Price delivery 15–20% higher to offset platform commission — same formula, different target margin per channel." },
                { cause: "A price the formula gives that's obviously out of line with competitors", fix: "The formula is a floor, not a mandate. If it prices you well above or below the market, that's a signal to revisit portion size or ingredient choice, not to skip the formula." },
                { cause: "A new dish with no sales history", fix: "Estimate ingredient cost the same way, but hold price decisions loosely until a few weeks of actual sales confirm the margin holds up in practice." },
              ].map((item) => (
                <div key={item.cause} className="flex items-start gap-3 bg-white border border-gray-200 rounded-xl p-4">
                  <span className="text-red-400 font-bold text-sm shrink-0">→</span>
                  <div>
                    <p className="text-sm font-bold text-gray-800">{item.cause}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{item.fix}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* CTA */}
        <div className="bg-orange-500 rounded-2xl p-8 mt-12 text-center">
          <h2 className="text-2xl font-black text-white mb-2">Skip the manual math</h2>
          <p className="text-orange-100 mb-6 text-sm">MenuPricer estimates ingredient cost from any dish name, applies labor, overhead, and your target margin automatically, and gives you three ready-to-use price tiers in seconds.</p>
          <Link href="/" className="inline-block bg-white text-orange-600 font-black px-8 py-3 rounded-xl hover:bg-orange-50 transition-colors text-sm shadow-lg shadow-orange-600/20">
            Try MenuPricer Free →
          </Link>
          <p className="text-orange-200 text-xs mt-3">No credit card · Free for 5 dishes</p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Related guides</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/blog/food-cost-formula" className="group block border border-gray-200 hover:border-orange-300 rounded-xl p-4 transition-all">
              <p className="text-xs text-gray-400 mb-1">Food Cost</p>
              <p className="font-bold text-gray-900 text-sm group-hover:text-orange-600 transition-colors">Food Cost Formula: Calculate Food Cost Percentage →</p>
            </Link>
            <Link href="/blog/how-to-price-a-restaurant-menu" className="group block border border-gray-200 hover:border-orange-300 rounded-xl p-4 transition-all">
              <p className="text-xs text-gray-400 mb-1">Menu Pricing</p>
              <p className="font-bold text-gray-900 text-sm group-hover:text-orange-600 transition-colors">How to Price a Restaurant Menu: Complete Guide →</p>
            </Link>
            <Link href="/recipe-cost-calculator" className="group block border border-gray-200 hover:border-orange-300 rounded-xl p-4 transition-all">
              <p className="text-xs text-gray-400 mb-1">Free Tool</p>
              <p className="font-bold text-gray-900 text-sm group-hover:text-orange-600 transition-colors">Recipe Cost Calculator — Free Online Tool →</p>
            </Link>
            <Link href="/menu-cost-calculator" className="group block border border-gray-200 hover:border-orange-300 rounded-xl p-4 transition-all">
              <p className="text-xs text-gray-400 mb-1">Free Tool</p>
              <p className="font-bold text-gray-900 text-sm group-hover:text-orange-600 transition-colors">Menu Cost Calculator — Price Any Dish in 30 Seconds →</p>
            </Link>
          </div>
        </div>
      </article>

      <footer className="bg-white border-t border-gray-100 py-6">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2"><LogoIcon size={20} /><span className="font-black text-gray-900 text-sm">Menu<span className="text-orange-500">Pricer</span></span></div>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <Link href="/blog" className="hover:text-orange-500">Blog</Link>
            <Link href="/food-cost-calculator" className="hover:text-orange-500">Food Cost Calculator</Link>
            <Link href="/recipe-cost-calculator" className="hover:text-orange-500">Recipe Cost Calculator</Link>
          </div>
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} MenuPricer</p>
        </div>
      </footer>
    </div>
  );
}
