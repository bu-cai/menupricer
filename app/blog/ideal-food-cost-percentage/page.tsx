import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

const DATE_PUBLISHED = "2026-09-29";
const DATE_DISPLAY = "September 2026";

export const metadata: Metadata = {
  title: "Ideal Food Cost Percentage: Industry Benchmarks by Restaurant Type (2026)",
  description:
    "What is the ideal food cost percentage for a restaurant? The answer depends on your segment. See benchmarks by type, why 28–35% is the standard, and how to hit your target.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/ideal-food-cost-percentage" },
  openGraph: {
    title: "Ideal Food Cost Percentage: Industry Benchmarks by Restaurant Type",
    description:
      "The ideal food cost percentage for restaurants is 28–35%. See benchmarks by segment, why the range varies, and how to calculate your own target.",
    url: "https://www.aimenupricer.com/blog/ideal-food-cost-percentage",
    type: "article",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "MenuPricer — AI-powered menu pricing for restaurants" }],
  },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Ideal Food Cost Percentage: Industry Benchmarks by Restaurant Type",
  description:
    "A data-driven guide to ideal food cost percentages for restaurants — what the industry standard is, why it varies by segment, and how to calculate and hit your target.",
  url: "https://www.aimenupricer.com/blog/ideal-food-cost-percentage",
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
    { "@type": "ListItem", position: 3, name: "Ideal Food Cost Percentage", item: "https://www.aimenupricer.com/blog/ideal-food-cost-percentage" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the ideal food cost percentage for a restaurant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The ideal food cost percentage for most restaurants is 28–35%. Fast food and fast casual target 25–30%. Fine dining allows up to 38% because of higher ticket prices. The 'ideal' percentage is the one that lets you cover labor and overhead and still generate profit — typically meaning prime cost (food + labor) stays under 60% of revenue.",
      },
    },
    {
      "@type": "Question",
      name: "What is a good food cost percentage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A good food cost percentage is one that fits your restaurant type and leaves room for a profitable prime cost. For most casual dining and fast casual restaurants, 28–32% is considered good. Below 25% is excellent but may require sacrificing ingredient quality. Above 38% is a warning sign unless you are a high-end fine dining operation.",
      },
    },
    {
      "@type": "Question",
      name: "Why does the ideal food cost percentage vary between restaurants?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It varies because of differences in average check size, ingredient quality, labor model, and menu mix. A fine dining restaurant serves a $60 entrée with $18 in ingredients — 30% food cost. A fast food restaurant serves a $10 meal with $2.50 in ingredients — 25% food cost. Both are 'ideal' for their segment because the rest of their cost structure is designed around that ratio.",
      },
    },
    {
      "@type": "Question",
      name: "How do you calculate your ideal food cost percentage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ideal food cost % = the highest food cost % you can sustain while keeping prime cost (food + labor) under 60% of revenue. If your labor runs 30%, your maximum food cost is 30% to hit the 60% prime cost target. If your labor runs 25%, you can afford 35% food cost.",
      },
    },
    {
      "@type": "Question",
      name: "Is 30% food cost good?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — 30% food cost is generally considered good for most full-service restaurants. It allows a gross margin of 70%, which when combined with 28–32% labor leaves roughly 38–42% of revenue to cover rent, utilities, marketing, and profit. The key check is whether prime cost (food + labor) is under 60%.",
      },
    },
  ],
};

const BENCHMARKS = [
  { type: "Fast Food / QSR", ideal: "25–28%", range: "22–30%", why: "High volume, standardized recipes, minimal table service labor", prime: "50–58%" },
  { type: "Fast Casual", ideal: "28–32%", range: "25–33%", why: "Better ingredients than QSR, counter service reduces FOH labor", prime: "53–62%" },
  { type: "Casual Dining", ideal: "28–33%", range: "26–36%", why: "Full table service, mixed menu with proteins and starches", prime: "56–65%" },
  { type: "Fine Dining", ideal: "30–35%", range: "28–40%", why: "Premium proteins, high ticket prices offset higher ingredient cost", prime: "58–68%" },
  { type: "Bakery / Café", ideal: "28–33%", range: "25–38%", why: "High labor content in baked goods; pastry margin varies widely", prime: "55–65%" },
  { type: "Bar / Gastropub", ideal: "22–28%", range: "20–32%", why: "Beverage sales at 15–25% cost pull overall average down significantly", prime: "50–60%" },
  { type: "Pizza", ideal: "25–30%", range: "22–33%", why: "High-margin dough base; cheese is the main cost driver", prime: "52–62%" },
  { type: "Food Truck", ideal: "28–35%", range: "25–38%", why: "Lower rent offsets slightly higher food cost flexibility", prime: "55–65%" },
  { type: "Catering", ideal: "25–32%", range: "22–38%", why: "Volume purchasing discounts; labor model is event-based", prime: "50–62%" },
];

export default function IdealFoodCostPercentagePage() {
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
            <span className="text-gray-300">Ideal Food Cost Percentage</span>
          </nav>

          <header className="mb-10">
            <div className="flex items-center gap-2 text-orange-400 text-sm font-medium mb-3">
              <LogoIcon className="w-4 h-4" />
              <span>MenuPricer Guide · {DATE_DISPLAY}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
              Ideal Food Cost Percentage: Industry Benchmarks by Restaurant Type
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              The ideal food cost percentage is not one number — it depends on your segment, labor model, and check average. Here is what the data says for each restaurant type.
            </p>
          </header>

          {/* Quick answer */}
          <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-5 mb-10">
            <p className="text-orange-300 font-semibold text-sm mb-2">The one-sentence answer</p>
            <p className="text-white font-medium text-lg">
              The ideal food cost percentage for most restaurants is <strong>28–35%</strong> — but what matters more is keeping prime cost (food + labor) under <strong>60%</strong> of revenue.
            </p>
          </div>

          <div className="space-y-10 text-gray-300 leading-relaxed">

            {/* Benchmarks table */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Ideal Food Cost % by Restaurant Type</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 pr-4 text-gray-400 font-semibold">Type</th>
                      <th className="text-right py-3 pr-4 text-gray-400 font-semibold">Ideal FC%</th>
                      <th className="text-right py-3 pr-4 text-gray-400 font-semibold">Typical range</th>
                      <th className="text-right py-3 text-gray-400 font-semibold">Prime Cost</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {BENCHMARKS.map(({ type, ideal, range, prime }) => (
                      <tr key={type}>
                        <td className="py-3 pr-4 text-white">{type}</td>
                        <td className="py-3 pr-4 text-right text-orange-400 font-mono font-semibold">{ideal}</td>
                        <td className="py-3 pr-4 text-right text-gray-400 font-mono text-xs">{range}</td>
                        <td className="py-3 text-right text-blue-300 font-mono text-xs">{prime}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-gray-500 text-xs mt-2">Prime cost = food cost + labor cost. The 60% prime cost target is the key profitability threshold.</p>
            </section>

            {/* Why it varies */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Why the Ideal Percentage Varies</h2>
              <p>
                Three factors determine what food cost percentage is &quot;ideal&quot; for a specific restaurant:
              </p>
              <div className="mt-4 space-y-4">
                {[
                  {
                    factor: "Average check size",
                    detail: "A fine dining restaurant selling $60 entrées can afford $18–20 in ingredient cost (30–33%). A fast food restaurant selling $10 combos can only afford $2.50–3.00 (25–30%). Higher check = more room for expensive ingredients.",
                  },
                  {
                    factor: "Labor cost model",
                    detail: "Prime cost = food + labor. If your labor runs 28%, you can afford 32% food cost and still hit 60% prime cost. If labor runs 35% (full-service), you need food cost below 25% — or accept a 60%+ prime cost that compresses profit.",
                  },
                  {
                    factor: "Menu category mix",
                    detail: "Beverage and dessert categories typically run 15–25% food cost. Proteins run 35–45%. A bar that derives 50% of revenue from beverages can run a much lower overall food cost % than a steakhouse. Mix matters as much as individual dish costs.",
                  },
                ].map(({ factor, detail }) => (
                  <div key={factor} className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                    <p className="text-white font-semibold mb-2">{factor}</p>
                    <p className="text-gray-400 text-sm">{detail}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* How to calculate your own */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">How to Calculate Your Own Ideal Food Cost %</h2>
              <p>
                Your ideal food cost % is the highest food cost you can sustain while keeping prime cost under 60%. Here is the formula:
              </p>
              <div className="mt-4 bg-gray-900 rounded-xl p-5 border border-gray-800">
                <pre className="text-green-400 font-mono text-sm leading-relaxed whitespace-pre-wrap">{`Ideal FC% = 60% − Your Labor Cost %

Example:
  Your labor cost runs 30% of revenue
  Ideal food cost = 60% − 30% = 30%

  If labor = 28% → can afford 32% food cost
  If labor = 35% → must target 25% food cost`}</pre>
              </div>
              <p className="mt-4 text-sm">
                This is your <em>prime cost ceiling</em>. You can run higher food cost if you have unusually low rent, no debt service, or other below-average fixed costs — but 60% prime cost is the standard safety line.
              </p>
            </section>

            {/* Warning zones */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Food Cost % Warning Zones</h2>
              <div className="space-y-3">
                {[
                  { range: "Under 22%", color: "bg-blue-500/20 border-blue-500/40 text-blue-300", label: "Investigate", note: "Very low food cost can mean portion sizes are too small, ingredient quality is suffering, or menu prices are too high for your market." },
                  { range: "22–28%", color: "bg-green-500/20 border-green-500/40 text-green-300", label: "Excellent", note: "Typical for QSR, fast food, or bar programs with strong beverage mix. Healthy if intentional." },
                  { range: "28–35%", color: "bg-green-500/20 border-green-500/40 text-green-300", label: "Target zone", note: "Industry standard for most restaurant types. Strong profitability if labor is controlled." },
                  { range: "35–40%", color: "bg-yellow-500/20 border-yellow-500/40 text-yellow-300", label: "Caution", note: "Acceptable for fine dining or specialty protein concepts, but requires below-average labor cost. Monitor closely." },
                  { range: "Above 40%", color: "bg-red-500/20 border-red-500/40 text-red-300", label: "Warning", note: "Unsustainable for most concepts. Indicates menu underpricing, uncontrolled waste, or over-purchasing. Immediate review needed." },
                ].map(({ range, color, label, note }) => (
                  <div key={range} className={`border rounded-xl p-4 ${color}`}>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-mono font-semibold text-sm">{range}</span>
                      <span className="text-xs font-semibold">{label}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{note}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Is 30% good? */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Is 30% Food Cost Good?</h2>
              <p>
                Yes — 30% is generally considered a solid food cost for most full-service restaurants. Here is why:
              </p>
              <div className="mt-4 bg-gray-900 rounded-xl p-5 border border-gray-800">
                <pre className="text-green-400 font-mono text-sm leading-relaxed whitespace-pre-wrap">{`On $100 of revenue:
  Food cost (30%):     $30.00
  Labor (30%):         $30.00
  Prime cost:          $60.00  ← hits the 60% threshold

  Rent (7%):            $7.00
  Utilities (4%):       $4.00
  Other costs (6%):     $6.00

  Net profit (3%):      $3.00  ← thin but viable`}</pre>
              </div>
              <p className="mt-4 text-sm">
                Notice that 30% food cost at 30% labor leaves almost no margin. This is why restaurants with typical labor models (28–32%) target food cost closer to 28–30%, not 33–35%.
              </p>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  { q: "What is the ideal food cost percentage for a restaurant?", a: "28–35% for most restaurants. Fast food 25–28%. Fine dining up to 38%. The real benchmark is prime cost (food + labor) staying under 60% of revenue." },
                  { q: "What is a good food cost percentage?", a: "28–32% is considered good for most casual dining and fast casual restaurants. Below 25% is excellent but risks quality. Above 38% is a warning sign unless you are a high-end operation with high check averages." },
                  { q: "Why does the ideal percentage vary between restaurants?", a: "Average check size, labor model, and menu mix all determine what is sustainable. Fine dining can afford 33% food cost because check averages are high. Bars can run lower because beverages cost 15–20% to produce." },
                  { q: "Is 30% food cost good?", a: "Yes, generally. At 30% food cost and 30% labor, prime cost is 60% — right at the industry threshold. Profit depends on keeping rent, utilities, and other costs under 30% of revenue." },
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
              <h2 className="text-2xl font-bold text-white mb-3">Check Your Current Food Cost %</h2>
              <p className="text-gray-300 mb-6 max-w-lg mx-auto">
                Enter your dish ingredients and see your actual food cost percentage — and whether you are hitting your ideal target.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold px-8 py-3 rounded-xl transition-colors text-lg"
              >
                <LogoIcon className="w-5 h-5" />
                Calculate Your Food Cost %
              </Link>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">Related Guides</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  ["/blog/what-is-food-cost-percentage", "What Is Food Cost Percentage?"],
                  ["/blog/what-should-food-cost-be", "What Should Food Cost Be?"],
                  ["/blog/food-cost-control", "Food Cost Control Strategies"],
                  ["/blog/food-cost-management", "Food Cost Management"],
                  ["/food-cost-calculator", "Free Food Cost Calculator"],
                  ["/prime-cost-calculator", "Prime Cost Calculator"],
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
