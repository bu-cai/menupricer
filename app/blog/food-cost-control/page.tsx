import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

const DATE_PUBLISHED = "2026-09-29";
const DATE_DISPLAY = "September 2026";

export const metadata: Metadata = {
  title: "Food Cost Control: 8 Proven Strategies to Reduce Restaurant Waste (2026)",
  description:
    "The most effective food cost control strategies for restaurants — portion control, inventory management, supplier negotiations, waste tracking, and more. With actionable steps.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/food-cost-control" },
  openGraph: {
    title: "Food Cost Control: 8 Proven Strategies to Reduce Restaurant Waste",
    description:
      "8 actionable food cost control strategies — portion control, inventory management, waste tracking, supplier negotiations, and more.",
    url: "https://www.aimenupricer.com/blog/food-cost-control",
    type: "article",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "MenuPricer — AI-powered menu pricing for restaurants" }],
  },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Food Cost Control: 8 Proven Strategies to Reduce Restaurant Waste",
  description:
    "A practical guide to food cost control for restaurants — covering portion standardization, inventory methods, waste tracking, supplier management, and menu optimization.",
  url: "https://www.aimenupricer.com/blog/food-cost-control",
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
    { "@type": "ListItem", position: 3, name: "Food Cost Control", item: "https://www.aimenupricer.com/blog/food-cost-control" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is food cost control in restaurants?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Food cost control is the set of practices restaurants use to keep ingredient spending within target percentages of revenue. It includes portion standardization, inventory management, waste tracking, supplier negotiations, and menu engineering. The goal is to close the gap between theoretical (ideal) food cost and actual food cost.",
      },
    },
    {
      "@type": "Question",
      name: "What is the most effective way to control food cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The single highest-impact action is standardizing portion sizes with written recipes, portion scales, and portioning tools. Portion creep — staff serving more than the recipe specifies — is the most common cause of unexplained food cost variance. After that, implementing FIFO inventory rotation and weekly inventory counts close the most gaps.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between actual and theoretical food cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Theoretical food cost is what you should have spent based on your recipes and sales mix — the ideal number if every portion was perfect and there was no waste. Actual food cost is what you actually spent, from your inventory formula. The variance between them reveals waste, theft, over-portioning, and costing errors.",
      },
    },
    {
      "@type": "Question",
      name: "How do you track food cost in a restaurant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Track food cost weekly with this formula: Beginning Inventory + Purchases − Ending Inventory = Food Cost. Compare this to your sales revenue to get food cost percentage. Compare that to your theoretical food cost % to find the variance. Investigate any variance above 2–3 percentage points.",
      },
    },
  ],
};

const STRATEGIES = [
  {
    n: 1,
    title: "Standardize Portions with Written Recipes",
    impact: "High",
    effort: "Low",
    body: "Every dish must have a written recipe with exact weights and measures. Without standardization, portion sizes drift — especially on high-turnover shifts.",
    action: "Create a recipe card for every menu item with gram weights for proteins, sauces, and toppings. Post laminated cards at each station.",
    stat: "Portion creep accounts for 2–4% of unexplained food cost variance in most restaurants.",
  },
  {
    n: 2,
    title: "Implement FIFO Inventory Rotation",
    impact: "High",
    effort: "Low",
    body: "First In, First Out (FIFO) means newer deliveries go to the back of the shelf; older stock comes forward for use first. This prevents expensive spoilage.",
    action: "Label all deliveries with a date sticker. Train every staff member receiving deliveries to rotate stock immediately.",
    stat: "The average restaurant wastes 4–10% of food purchased. FIFO typically cuts spoilage waste by 30–40%.",
  },
  {
    n: 3,
    title: "Count Inventory Weekly (Not Monthly)",
    impact: "High",
    effort: "Medium",
    body: "Monthly inventory counts mean problems hide for 30 days. Weekly counts surface issues quickly — a theft pattern, spoilage spike, or portion creep — before they compound.",
    action: "Schedule a weekly inventory count every Monday morning before deliveries arrive. Assign ownership of each section to a specific staff member.",
    stat: "Restaurants that count inventory weekly run 1–2% lower actual food cost than those that count monthly.",
  },
  {
    n: 4,
    title: "Track Actual vs. Theoretical Food Cost",
    impact: "High",
    effort: "Medium",
    body: "Theoretical food cost is what you should have spent based on your recipes and sales mix. Actual food cost is what you actually spent. The gap between them is your variance — and it tells you where the money is going.",
    action: "Calculate theoretical FC% weekly from your POS data + recipe costs. Compare to actual FC%. Any variance above 2–3% needs investigation.",
    body2: "",
  },
  {
    n: 5,
    title: "Negotiate Supplier Contracts and Prices",
    impact: "Medium",
    effort: "Medium",
    body: "Most restaurants accept the first supplier quote. Regular price reviews, multi-item ordering from fewer vendors, and buying on contract can reduce ingredient costs 5–15%.",
    action: "Get competing quotes from 2–3 suppliers for your top 10 highest-spend ingredients annually. Consolidate orders to earn volume discounts.",
    stat: "Consolidating from 5 suppliers to 2–3 typically saves 8–12% on food purchasing through volume incentives.",
  },
  {
    n: 6,
    title: "Reduce Over-Ordering with Par Level Management",
    impact: "Medium",
    effort: "Low",
    body: "Par levels are the minimum and maximum quantities you should have of each ingredient. Ordering to par — not more — prevents over-purchasing that leads to spoilage.",
    action: "Set par levels for each ingredient based on 3–5 days of usage. Build a par-level sheet that shows current stock and required order quantity.",
    stat: "",
  },
  {
    n: 7,
    title: "Engineer Your Menu to Favor High-Margin Items",
    impact: "Medium",
    effort: "Low",
    body: "Not all menu items carry the same food cost. Menu engineering — promoting high-margin Stars and limiting low-margin Dogs — shifts your sales mix toward lower overall food cost.",
    action: "Calculate food cost % for every menu item. Promote items with FC% under 25% with better placement, descriptions, or server recommendations.",
    stat: "Shifting 10% of orders from high-cost to high-margin items can reduce total food cost % by 1–2 points.",
  },
  {
    n: 8,
    title: "Reprice Menus When Supplier Costs Rise",
    impact: "High",
    effort: "Low",
    body: "Many restaurants absorb supplier price increases silently. A 10% increase in beef prices with unchanged menu prices erases your beef margin entirely.",
    action: "Set a trigger: if any ingredient cost increases by more than 8–10%, recalculate that dish's food cost and adjust the menu price at the next reprint.",
    stat: "Restaurants that reprice when costs rise maintain food cost % within 1–2 points of target. Those that don't drift 4–6 points over a year.",
  },
];

export default function FoodCostControlPage() {
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
            <span className="text-gray-300">Food Cost Control</span>
          </nav>

          <header className="mb-10">
            <div className="flex items-center gap-2 text-orange-400 text-sm font-medium mb-3">
              <LogoIcon size={16} />
              <span>MenuPricer Guide · {DATE_DISPLAY}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
              Food Cost Control: 8 Proven Strategies to Reduce Restaurant Waste
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              Food cost is your most controllable expense. These eight strategies close the gap between what you should spend and what you actually spend — without sacrificing quality.
            </p>
          </header>

          {/* Priority/Effort matrix */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 mb-10">
            <p className="text-orange-400 text-sm font-semibold mb-3">Priority order — start with high impact, low effort</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left pb-2 pr-4 text-gray-400 font-medium">#</th>
                    <th className="text-left pb-2 pr-4 text-gray-400 font-medium">Strategy</th>
                    <th className="text-left pb-2 pr-4 text-gray-400 font-medium">Impact</th>
                    <th className="text-left pb-2 text-gray-400 font-medium">Effort</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {STRATEGIES.map((s) => (
                    <tr key={s.n}>
                      <td className="py-2 pr-4 text-gray-500 font-mono text-xs">{s.n}</td>
                      <td className="py-2 pr-4 text-white text-sm">{s.title}</td>
                      <td className="py-2 pr-4">
                        <span className={`text-xs px-2 py-0.5 rounded-full ${s.impact === "High" ? "bg-green-500/20 text-green-300" : "bg-yellow-500/20 text-yellow-300"}`}>{s.impact}</span>
                      </td>
                      <td className="py-2">
                        <span className={`text-xs px-2 py-0.5 rounded-full ${s.effort === "Low" ? "bg-green-500/20 text-green-300" : "bg-yellow-500/20 text-yellow-300"}`}>{s.effort}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-6 text-gray-300 leading-relaxed">

            {STRATEGIES.map((s) => (
              <section key={s.n} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <div className="flex items-start gap-4 mb-3">
                  <div className="flex-shrink-0 w-9 h-9 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {s.n}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h2 className="text-white font-bold text-lg">{s.title}</h2>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${s.impact === "High" ? "bg-green-500/20 text-green-300" : "bg-yellow-500/20 text-yellow-300"}`}>{s.impact} impact</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-3 ml-13">{s.body}</p>
                {s.stat && (
                  <div className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 mb-3 text-xs text-gray-300">
                    <span className="text-orange-400 font-semibold">Data: </span>{s.stat}
                  </div>
                )}
                <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg px-4 py-3">
                  <p className="text-orange-300 text-sm"><strong>Action:</strong> {s.action}</p>
                </div>
              </section>
            ))}

            {/* Actual vs theoretical */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Actual vs. Theoretical Food Cost: The Key Diagnostic</h2>
              <p>
                The most powerful food cost control tool is comparing your <strong className="text-white">actual</strong> food cost (what you spent) to your <strong className="text-white">theoretical</strong> food cost (what you should have spent given your sales mix and recipes).
              </p>
              <div className="mt-4 bg-gray-900 rounded-xl p-5 border border-gray-800">
                <pre className="text-green-400 font-mono text-sm leading-relaxed whitespace-pre-wrap">{`Theoretical FC% = Σ (dishes sold × recipe cost) ÷ Total Revenue
Actual FC%      = (Beg. Inventory + Purchases − End Inventory) ÷ Revenue

Variance = Actual FC% − Theoretical FC%

If variance > 2–3%: investigate immediately
  • 0–1%: within tolerance
  • 1–3%: portion creep or minor waste
  • 3–5%: significant waste or costing errors
  • 5%+: potential theft or major process breakdown`}</pre>
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  { q: "What is food cost control in restaurants?", a: "The practices used to keep ingredient spending within target percentages — portion standardization, inventory management, waste tracking, and supplier negotiations. The goal is to close the gap between theoretical and actual food cost." },
                  { q: "What is the most effective way to control food cost?", a: "Standardizing portion sizes with written recipes and portion scales. Portion creep is the most common cause of unexplained food cost variance — and it is free to fix." },
                  { q: "What is the difference between actual and theoretical food cost?", a: "Theoretical food cost is what you should have spent based on recipes and sales. Actual food cost is what you actually spent. The variance reveals waste, theft, and over-portioning." },
                  { q: "How do you track food cost in a restaurant?", a: "Weekly: (Beginning Inventory + Purchases − Ending Inventory) ÷ Revenue = Actual FC%. Compare to theoretical FC%. Investigate any variance above 2–3%." },
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
              <h2 className="text-2xl font-bold text-white mb-3">Know Your Theoretical Food Cost</h2>
              <p className="text-gray-300 mb-6 max-w-lg mx-auto">
                You can&apos;t close the variance gap without knowing your theoretical food cost. MenuPricer calculates the exact cost per dish and ideal menu price from your ingredient data.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold px-8 py-3 rounded-xl transition-colors text-lg"
              >
                <LogoIcon className="w-5 h-5" />
                Calculate Your Food Cost
              </Link>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">Related Guides</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  ["/blog/food-cost-management", "Food Cost Management Strategies"],
                  ["/blog/what-is-food-cost-percentage", "What Is Food Cost Percentage?"],
                  ["/blog/portion-control-food-cost", "Portion Control & Food Cost"],
                  ["/blog/supplier-price-increases", "Handling Supplier Price Increases"],
                  ["/blog/menu-engineering", "Menu Engineering Guide"],
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
