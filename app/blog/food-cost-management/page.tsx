import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

const DATE_PUBLISHED = "2026-09-27";
const DATE_DISPLAY = "September 2026";

export const metadata: Metadata = {
  title: "Food Cost Management for Restaurants: 7 Proven Methods (2026)",
  description:
    "Food cost management is how restaurants keep ingredient spend under control. This guide covers the 7 most effective methods, what to measure, and how to act on the numbers.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/food-cost-management" },
  openGraph: {
    title: "Food Cost Management for Restaurants: 7 Proven Methods",
    description:
      "Practical food cost management — what to measure, what levers to pull, and how much each one moves the number.",
    url: "https://www.aimenupricer.com/blog/food-cost-management",
    type: "article",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "MenuPricer — AI-powered menu pricing for restaurants" }],
  },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Food Cost Management for Restaurants: 7 Proven Methods",
  description:
    "How restaurants keep food cost under control — measuring theoretical vs. actual, repricing, portion control, menu engineering, and supplier management.",
  url: "https://www.aimenupricer.com/blog/food-cost-management",
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
    {
      "@type": "ListItem",
      position: 3,
      name: "Food Cost Management",
      item: "https://www.aimenupricer.com/blog/food-cost-management",
    },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is food cost management?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Food cost management is the ongoing process of monitoring, measuring, and controlling what a restaurant spends on ingredients relative to its revenue. It involves tracking food cost percentage, identifying where the gap between theoretical and actual cost comes from, and taking action — through pricing, portion control, purchasing, or menu changes — to keep ingredient spend within target.",
      },
    },
    {
      "@type": "Question",
      name: "What is a good food cost management system?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A good food cost management system has three parts: measurement (regular inventory counts to calculate actual food cost), benchmarking (comparing actual against theoretical to find the gap), and action (a defined process for investigating and closing the gap when it exceeds a threshold). Software can automate parts of this, but the system is the process — not the tool.",
      },
    },
    {
      "@type": "Question",
      name: "How often should a restaurant check food cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A minimum of monthly, with weekly checks for high-volume or high-cost-percentage operations. Daily food cost tracking — which requires either software like MarginEdge or a manual invoice-to-P&L process — lets you spot problems in the same week they start rather than a month later. The faster the feedback loop, the faster you can act on it.",
      },
    },
    {
      "@type": "Question",
      name: "What is the biggest driver of high food cost in restaurants?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Underpriced menu items are the most common driver of high food cost percentages. When ingredient costs rise — through supplier price increases or inflation — menus that are not repriced see their food cost percentage climb automatically. The second biggest driver is waste: over-portioning, spoilage, and prep inefficiency. Repricing is usually faster to fix than waste, which is why it should be addressed first.",
      },
    },
  ],
};

const METHODS = [
  {
    num: "01",
    title: "Know your theoretical food cost",
    body: "Theoretical food cost is what you would spend if every dish was made exactly to spec — correct portions, no waste, no spoilage. It is calculated from your recipes, not your invoices. Without knowing your theoretical food cost, you have no baseline to measure against and no way to know whether a high actual food cost is a pricing problem or an operational problem.",
    action: "Cost every dish on your menu at its current supplier prices. This is the starting point.",
  },
  {
    num: "02",
    title: "Calculate actual food cost — and track the gap",
    body: "Actual food cost is what you actually spent on ingredients, measured against what you sold. The standard formula: (Opening inventory + Purchases − Closing inventory) ÷ Sales. The gap between theoretical and actual — typically 2–5% in a well-run kitchen — is your waste number: over-portioning, spoilage, comps, and theft combined.",
    action: "Do a proper inventory count weekly or monthly. The gap will tell you where to investigate.",
  },
  {
    num: "03",
    title: "Reprice underpriced dishes first",
    body: "If ingredient costs have risen since you last set your menu prices, your food cost percentage is higher today than your recipes suggest. Repricing is the fastest lever available — it requires no operational change, takes effect immediately, and has zero impact on kitchen workflow. A $1.50 price increase on a dish selling 40 covers per day is $60 per day or $1,800 per month. Start here before addressing waste.",
    action: "Identify which dishes have not been repriced in more than six months and cost them at current prices.",
  },
  {
    num: "04",
    title: "Standardize your recipes and portions",
    body: "If each cook portions protein differently, your theoretical food cost percentage is fiction. A standardized recipe card with gram-level portion specs — including plated garnishes and sauces — closes the gap between what your recipes say and what the kitchen produces. Portion scales at protein stations are not optional for high-cost items.",
    action: "Weigh and photograph a plated version of each dish as the reference standard for new staff training.",
  },
  {
    num: "05",
    title: "Manage your top five ingredients by spend",
    body: "In most restaurants, five ingredients account for 60–70% of total food cost. Identify which those are and focus your cost management effort there. A 5% reduction on your top five ingredients — whether through better yield, portion adjustment, or a supplier conversation — delivers more impact than optimizing everything else combined.",
    action: "Run a spend report by ingredient for the last 90 days and identify your top five by total cost.",
  },
  {
    num: "06",
    title: "Use menu engineering to shift sales mix",
    body: "Not all dishes are equally profitable, and guests are not choosing randomly. Menu engineering is the practice of positioning your high-margin dishes where they are more likely to be chosen — through placement, description, and server recommendation — while de-emphasizing or repricing your low-margin items. A well-engineered menu can move food cost percentage by 2–4 points without changing a single recipe.",
    action: "Plot your menu items on a margin × popularity matrix and identify which dishes are candidates for repositioning or repricing.",
  },
  {
    num: "07",
    title: "Track food cost at the shift level, not the month",
    body: "A monthly food cost figure tells you something happened in the last 30 days. A weekly figure narrows the window. A per-shift figure — which requires either POS integration or a simple tally system — tells you whether the Tuesday dinner service was the problem. The faster the feedback loop, the faster you can address it. Software that connects invoice data to sales data daily is the professional solution; a manual end-of-shift waste log is the low-tech version.",
    action: "Start with a simple daily food cost estimate: use yesterday's purchases and sales as a proxy before moving to proper inventory-based tracking.",
  },
];

export default function FoodCostManagementPage() {
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
          <span className="text-xs font-bold bg-orange-100 text-orange-600 px-2.5 py-1 rounded-full">Food Cost</span>
          <span className="text-xs text-gray-400">8 min read</span>
          <span className="text-xs text-gray-400">·</span>
          <time dateTime={DATE_PUBLISHED} className="text-xs text-gray-400">Updated {DATE_DISPLAY}</time>
          <span className="text-xs text-gray-400">·</span>
          <span className="text-xs text-gray-400">Reviewed by the MenuPricer Team</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-6">
          Food Cost Management for Restaurants: 7 Proven Methods
        </h1>
        <p className="text-xl text-gray-500 leading-relaxed mb-10 border-b border-gray-100 pb-10">
          Food cost management is how restaurants keep ingredient spend under control. This guide covers the seven most effective methods — what to measure, what to act on, and in what order.
        </p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">What food cost management actually means</h2>
            <p>
              Food cost management is not a software category — it is a process. Specifically, it is
              the ongoing cycle of measuring what you spend on ingredients, comparing that to what
              your recipes predict you should spend, identifying where the gap comes from, and taking
              action to close it.
            </p>
            <p className="mt-3">
              Many restaurants run high food costs not because of operational problems but because
              their menus have not been repriced since ingredient costs rose. That is a pricing
              problem, and no amount of waste reduction will fix it. The first step in managing food
              cost is knowing which problem you have.
            </p>
            <div className="bg-gray-50 rounded-xl p-5 my-4 border border-gray-200">
              <p className="text-sm font-bold text-gray-700 mb-2">The two main causes of high food cost:</p>
              <ul className="text-sm text-gray-600 space-y-1 list-disc pl-4">
                <li><strong>Underpriced menus:</strong> dishes priced before ingredient costs rose. Fix: reprice.</li>
                <li><strong>Operational waste:</strong> over-portioning, spoilage, theft, comps. Fix: measure and reduce the gap between theoretical and actual.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-6">7 methods that actually move food cost</h2>
            <div className="space-y-6">
              {METHODS.map((m) => (
                <div key={m.num} className="border border-gray-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl font-black text-orange-300">{m.num}</span>
                    <h3 className="text-lg font-black text-gray-900">{m.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{m.body}</p>
                  <div className="bg-orange-50 rounded-lg px-4 py-3 border border-orange-100">
                    <p className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-1">Action</p>
                    <p className="text-sm text-gray-700">{m.action}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">The order matters</h2>
            <p>
              Most food cost management advice treats all these methods as equally important.
              They are not. Repricing underpriced dishes (method 3) has the highest immediate impact
              and the lowest implementation cost — no operational change required. Tracking food cost
              at the shift level (method 7) has a potentially high impact but requires meaningful
              setup.
            </p>
            <div className="overflow-x-auto my-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Method</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Impact</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Effort</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Do first?</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Know your theoretical food cost", "High", "Low", "Yes"],
                    ["Track actual vs. theoretical gap", "High", "Medium", "Yes"],
                    ["Reprice underpriced dishes", "Very high", "Very low", "First"],
                    ["Standardize recipes and portions", "Medium–High", "Medium", "Second"],
                    ["Focus on top 5 ingredients", "High", "Low", "Yes"],
                    ["Menu engineering", "Medium–High", "Medium", "After pricing is fixed"],
                    ["Shift-level food cost tracking", "High (long-term)", "High", "When ready"],
                  ].map(([method, impact, effort, order], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 text-gray-800 border-b border-gray-100">{method}</td>
                      <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{impact}</td>
                      <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{effort}</td>
                      <td className={`px-4 py-3 border-b border-gray-100 font-semibold ${order === "First" ? "text-orange-500" : "text-gray-500"}`}>{order}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Do you need food cost management software?</h2>
            <p>
              Not necessarily, and not before you have done the manual version. A spreadsheet that
              tracks opening inventory, purchases, and closing inventory gives you an actual food cost
              number once a week. A pricing tool that costs each dish at current prices tells you
              which dishes are underpriced. Those two tools together cover the most impactful parts
              of food cost management for most independent restaurants.
            </p>
            <p className="mt-3">
              Dedicated food cost management software — MarginEdge, MarketMan, Meez — adds value
              when the manual process fails because of volume or complexity: you have 200+ SKUs from
              10 suppliers, or you need daily P&L rather than weekly, or you run multiple locations.
              At single-location scale, the system matters more than the tool.
            </p>
          </section>

        </div>

        <div className="bg-orange-500 rounded-2xl p-8 text-center my-12">
          <p className="text-orange-100 text-sm font-bold uppercase tracking-widest mb-2">Start with pricing</p>
          <h2 className="text-2xl font-bold text-white mb-3">Find out which dishes are underpriced</h2>
          <p className="text-orange-100 mb-5">
            The fastest fix for a high food cost percentage is repricing underpriced dishes.
            MenuPricer costs any dish in under 30 seconds. Free for your first 5 dishes.
          </p>
          <Link
            href="/"
            className="inline-block bg-white text-orange-500 font-bold px-8 py-3 rounded-xl hover:bg-orange-50 transition-colors"
          >
            Price My First Dish Free →
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
              { href: "/blog/what-is-food-cost-percentage", title: "What Is Food Cost Percentage?", desc: "The definition, formula, and targets for every restaurant type." },
              { href: "/blog/food-cost-formula", title: "Food Cost Formula", desc: "Step-by-step calculation with worked examples." },
              { href: "/blog/menu-engineering", title: "Menu Engineering", desc: "How to shift sales mix toward your highest-margin dishes." },
              { href: "/blog/how-often-to-reprice-menu", title: "How Often to Reprice Your Menu", desc: "When a menu price increase is justified and how to time it." },
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
