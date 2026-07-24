import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "Food Cost Percentage: Formula, Benchmarks & How to Calculate It",
  description: "How to calculate food cost percentage for any dish or restaurant — the exact formula, industry benchmarks by restaurant type, and step-by-step examples.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/food-cost-percentage-calculator" },
  openGraph: {
    title: "Food Cost Percentage: Formula, Benchmarks & How to Calculate It",
    description: "The food cost percentage formula every restaurant owner needs — with examples, benchmarks, and a free calculator.",
    url: "https://www.aimenupricer.com/blog/food-cost-percentage-calculator",
  },
};

const SCHEMA = {
  "@context": "https://schema.org", "@type": "BlogPosting",
  headline: "Food Cost Percentage: Formula, Benchmarks & How to Calculate It",
  description: "How to calculate food cost percentage — the formula, worked examples, and industry benchmarks for restaurants, cafes, food trucks, and bakeries.",
  author: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  publisher: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  datePublished: "2026-07-24", dateModified: "2026-07-24",
  mainEntityOfPage: "https://www.aimenupricer.com/blog/food-cost-percentage-calculator",
};

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.aimenupricer.com/blog" },
    { "@type": "ListItem", position: 3, name: "Food Cost Percentage", item: "https://www.aimenupricer.com/blog/food-cost-percentage-calculator" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is the food cost percentage formula?", acceptedAnswer: { "@type": "Answer", text: "Food cost percentage = (Cost of ingredients ÷ Menu price) × 100. For example, if a dish costs $4.20 in ingredients and sells for $14, the food cost percentage is ($4.20 ÷ $14) × 100 = 30%. Most restaurants target 28–35% food cost percentage, meaning every dollar of revenue leaves 65–72 cents to cover labor, overhead, and profit." } },
    { "@type": "Question", name: "What is a good food cost percentage for a restaurant?", acceptedAnswer: { "@type": "Answer", text: "A good food cost percentage is 28–35% for most full-service restaurants. Fine dining can run 25–35% due to premium ingredients. Fast casual targets 25–30%. Food trucks and cafes aim for 25–35%. Bakeries typically run 28–33%. If your food cost exceeds 38%, you are likely underpricing your menu, over-portioning, or experiencing significant waste. The key is to track food cost per dish, not just overall — an average hides which items are dragging down your margin." } },
    { "@type": "Question", name: "How do I find food cost percentage for a specific dish?", acceptedAnswer: { "@type": "Answer", text: "To calculate food cost percentage for a dish: (1) List every ingredient and its cost per the quantity used. (2) Sum all ingredient costs for one serving — this is your plate cost. (3) Divide plate cost by the menu price. (4) Multiply by 100 to get the percentage. Example: pasta dish with $3.50 in ingredients, menu price $13. Food cost % = (3.50 ÷ 13) × 100 = 26.9%. Anything under 30% is strong for a pasta dish." } },
    { "@type": "Question", name: "What is the difference between food cost percentage and gross profit margin?", acceptedAnswer: { "@type": "Answer", text: "Food cost percentage measures ingredient cost as a share of revenue. Gross profit margin measures everything left after ingredient cost. They are inverses: a 30% food cost means a 70% gross margin on that dish. Net profit margin is different again — it subtracts labor, rent, utilities, and overhead. Restaurants typically net 3–9% after all costs. Tracking food cost percentage per dish is the most actionable lever because you control it directly through pricing and portioning." } },
    { "@type": "Question", name: "How do I reduce my food cost percentage?", acceptedAnswer: { "@type": "Answer", text: "The fastest ways to reduce food cost percentage without cutting quality: (1) Reprice dishes where food cost exceeds 35% — even a $1 price increase on a high-volume dish can shift your overall cost 2–3 points. (2) Audit portion sizes — a 10% portion reduction on protein-heavy dishes often goes unnoticed by guests. (3) Review your menu for low-margin items and either reprice or remove them. (4) Negotiate supplier pricing on your top 5 ingredients by spend. (5) Track waste daily — untracked waste is the most common cause of actual food cost running above theoretical." } },
  ],
};

const BENCHMARKS = [
  { type: "Fine Dining", range: "25–35%", note: "Premium ingredients, smaller portions" },
  { type: "Casual Dining", range: "28–35%", note: "Broad menu, mid-range ingredients" },
  { type: "Fast Casual", range: "25–30%", note: "Standardized recipes, controlled portions" },
  { type: "Food Truck", range: "25–35%", note: "Lower overhead offsets slightly higher food cost" },
  { type: "Bakery", range: "28–33%", note: "Ingredient-heavy but scalable recipes" },
  { type: "Coffee Shop", range: "20–30%", note: "Drinks carry very low food cost" },
  { type: "Pizza", range: "25–30%", note: "High-margin dough base, lower ingredient cost" },
];

export default function FoodCostPercentageCalculatorPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2"><LogoIcon size={28} /><span className="font-black text-gray-900 tracking-tight text-lg">Menu<span className="text-orange-500">Pricer</span></span></Link>
          <span className="text-gray-300 text-sm">·</span>
          <Link href="/blog" className="text-sm text-gray-500 hover:text-orange-500">Blog</Link>
          <Link href="/food-cost-calculator" className="ml-auto text-sm font-semibold text-orange-500 hover:text-orange-600 whitespace-nowrap">Food Cost Calculator →</Link>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-12">
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <Link href="/" className="hover:text-orange-500">Home</Link><span>›</span>
          <Link href="/blog" className="hover:text-orange-500">Blog</Link><span>›</span>
          <span className="text-gray-600">Food Cost Percentage</span>
        </nav>
        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-bold bg-orange-100 text-orange-600 px-3 py-1 rounded-full">Food Cost</span>
            <span className="text-xs text-gray-400">7 min read · July 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-4">Food Cost Percentage: Formula, Benchmarks & How to Calculate It</h1>
          <p className="text-lg text-gray-500 leading-relaxed">Food cost percentage is the single most important number in restaurant operations. It tells you whether your prices are right, your portions are controlled, and your menu is actually making money. Here is everything you need to calculate it, benchmark it, and fix it.</p>
        </div>

        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 mb-10">
          <p className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-3">The Formula</p>
          <div className="bg-white rounded-xl p-4 font-mono text-center text-lg font-black text-gray-900 mb-3">
            Food Cost % = (Ingredient Cost ÷ Menu Price) × 100
          </div>
          <p className="text-sm text-gray-500 text-center">Target: 28–35% for most restaurant types</p>
        </div>

        <div className="prose prose-gray max-w-none space-y-10">
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">How to calculate food cost percentage: step by step</h2>
            <p className="text-gray-600 leading-relaxed mb-5">The calculation works at two levels — per dish, and across your whole menu. Start with per-dish, which is where the real insights are.</p>

            <div className="space-y-4">
              {[
                { n: "1", title: "List every ingredient in the dish", body: "Include every ingredient, even garnishes, oils, and condiments. Small items add up — a parsley garnish, a lemon wedge, and a dipping sauce can easily add $0.30–0.50 to your plate cost." },
                { n: "2", title: "Calculate cost per quantity used", body: "Convert bulk purchase prices to cost per the unit you actually use. If ground beef costs $8/lb and you use 6oz per burger: ($8 ÷ 16oz) × 6oz = $3.00 per serving." },
                { n: "3", title: "Sum all ingredient costs", body: "Add every ingredient cost together. This is your plate cost (also called recipe cost or food cost per serving)." },
                { n: "4", title: "Divide by menu price, multiply by 100", body: "Plate cost ÷ Menu price × 100 = food cost percentage. If plate cost is $4.20 and menu price is $14: ($4.20 ÷ $14) × 100 = 30%." },
              ].map(step => (
                <div key={step.n} className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-orange-500 text-white font-black text-sm flex items-center justify-center shrink-0 mt-0.5">{step.n}</span>
                  <div><p className="font-bold text-gray-800">{step.title}</p><p className="text-sm text-gray-500 mt-1">{step.body}</p></div>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-2xl p-5 mt-6 text-sm">
              <p className="font-bold text-gray-800 mb-3">Worked example: classic cheeseburger</p>
              <div className="space-y-1.5 text-gray-600">
                {[
                  ["Ground beef (6oz)", "$3.00"],
                  ["Brioche bun", "$0.45"],
                  ["American cheese (1 slice)", "$0.18"],
                  ["Lettuce, tomato, onion", "$0.25"],
                  ["Condiments + packaging", "$0.20"],
                  ["Total plate cost", "$4.08"],
                ].map(([item, cost], i) => (
                  <div key={i} className={`flex justify-between ${i === 5 ? "border-t border-gray-200 pt-1.5 font-bold text-gray-900" : ""}`}>
                    <span>{item}</span><span>{cost}</span>
                  </div>
                ))}
                <div className="flex justify-between font-black text-orange-600 text-base border-t border-gray-300 pt-1.5">
                  <span>Food cost % at $14 menu price</span><span>29.1%</span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-5">Food cost percentage benchmarks by restaurant type</h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full text-sm">
                <thead><tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-bold text-gray-700">Restaurant type</th>
                  <th className="text-center px-4 py-3 font-bold text-gray-700">Target range</th>
                  <th className="text-left px-4 py-3 font-bold text-gray-700 hidden sm:table-cell">Why</th>
                </tr></thead>
                <tbody>
                  {BENCHMARKS.map((row, i) => (
                    <tr key={i} className="border-b border-gray-100 last:border-0">
                      <td className="px-4 py-3 font-medium text-gray-800">{row.type}</td>
                      <td className="px-4 py-3 text-center font-black text-orange-600">{row.range}</td>
                      <td className="px-4 py-3 text-gray-500 text-xs hidden sm:table-cell">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Why food cost percentage alone is not enough</h2>
            <p className="text-gray-600 leading-relaxed mb-4">A 30% food cost burger and a 30% food cost salad are not the same business situation. What matters is the dollar margin per dish:</p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="font-black text-gray-800 mb-2">Burger at 30% food cost</p>
                <div className="space-y-1 text-gray-600">
                  <div className="flex justify-between"><span>Menu price</span><span>$14.00</span></div>
                  <div className="flex justify-between"><span>Ingredient cost</span><span>$4.20</span></div>
                  <div className="flex justify-between font-bold text-green-600 border-t border-gray-200 pt-1"><span>Dollar margin</span><span>$9.80</span></div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="font-black text-gray-800 mb-2">Side salad at 30% food cost</p>
                <div className="space-y-1 text-gray-600">
                  <div className="flex justify-between"><span>Menu price</span><span>$7.00</span></div>
                  <div className="flex justify-between"><span>Ingredient cost</span><span>$2.10</span></div>
                  <div className="flex justify-between font-bold text-orange-500 border-t border-gray-200 pt-1"><span>Dollar margin</span><span>$4.90</span></div>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-3">Same food cost percentage, half the dollar margin. That is why menu engineering looks at both metrics together — not just percentage, but absolute margin per cover.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">5 ways to reduce food cost percentage</h2>
            <div className="space-y-3">
              {[
                { t: "Reprice underpriced dishes first", b: "Run the food cost % calculation on every dish. Any item above 35% either needs a price increase or a recipe adjustment. A $1.50 price increase on a dish you sell 40 times a day is $2,190/month of recovered margin." },
                { t: "Audit portions at least quarterly", b: "Portion drift is silent and common. A cook plating 7oz instead of 6oz adds 16% to your protein cost on that dish. Weigh portions spot-check at least once per quarter." },
                { t: "Track actual vs theoretical food cost", b: "Theoretical food cost is what you should spend based on recipes. Actual is what you really spent. A gap of more than 3–4 points usually signals waste, over-portioning, or unrecorded spoilage." },
                { t: "Remove or reprice your Dogs", b: "Every menu has items that sell poorly and carry high food cost. These Dogs take up space and drag your overall food cost up. Remove them or reprice them — neither outcome hurts revenue meaningfully." },
                { t: "Negotiate on your top 5 ingredients by spend", b: "You do not need to negotiate everything. Find the 5 ingredients that represent the most spend and negotiate those. A 5% reduction in beef cost can move your total food cost by a full percentage point." },
              ].map(({ t, b }) => (
                <div key={t} className="border-l-4 border-orange-300 pl-4">
                  <p className="font-bold text-gray-800 text-sm">{t}</p>
                  <p className="text-sm text-gray-500 mt-1">{b}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-orange-500 rounded-2xl p-7 text-white">
            <h2 className="text-xl font-black mb-2">Calculate food cost % for every dish instantly</h2>
            <p className="text-orange-100 text-sm mb-5">Enter your ingredients, MenuPricer calculates food cost percentage and tells you the price you need to hit your target margin.</p>
            <Link href="/food-cost-calculator" className="inline-block bg-white text-orange-600 font-black px-6 py-3 rounded-xl hover:bg-orange-50 transition-colors">Open Food Cost Calculator →</Link>
          </section>

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

          <section className="border-t border-gray-100 pt-8">
            <h2 className="text-lg font-black text-gray-900 mb-4">Related guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: "/blog/food-cost-formula", title: "Food Cost Formula", desc: "The complete food cost formula explained." },
                { href: "/blog/how-to-cost-a-dish", title: "How to Cost a Dish", desc: "Step-by-step ingredient costing with yield." },
                { href: "/blog/food-cost-percentage-by-restaurant-type", title: "Food Cost % by Restaurant Type", desc: "Benchmarks for every concept." },
                { href: "/blog/menu-engineering", title: "Menu Engineering", desc: "Use food cost data to redesign your menu." },
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
      <footer className="border-t border-gray-100 mt-16 py-8 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2"><LogoIcon size={20} /><span className="font-black text-gray-900 text-sm">Menu<span className="text-orange-500">Pricer</span></span></div>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <Link href="/food-cost-calculator" className="hover:text-orange-500">Food Cost Calculator</Link>
            <Link href="/blog" className="hover:text-orange-500">All Guides</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}