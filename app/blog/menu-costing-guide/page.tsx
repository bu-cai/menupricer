import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

const DATE_PUBLISHED = "2026-09-27";
const DATE_DISPLAY = "September 2026";

export const metadata: Metadata = {
  title: "Menu Costing 101: How to Cost a Restaurant Menu from Scratch (2026)",
  description:
    "Menu costing is how restaurants know whether their prices are sustainable. This guide covers ingredient cost, yield, food cost percentage, and a step-by-step process for costing a full menu.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/menu-costing-guide" },
  openGraph: {
    title: "Menu Costing 101: How to Cost a Restaurant Menu from Scratch",
    description: "A practical guide to menu costing — ingredient cost, yield, food cost percentage, and how to build a costed menu from scratch.",
    url: "https://www.aimenupricer.com/blog/menu-costing-guide",
    type: "article",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "MenuPricer — AI-powered menu pricing for restaurants" }],
  },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Menu Costing 101: How to Cost a Restaurant Menu from Scratch",
  description: "A complete guide to menu costing for restaurant operators: ingredient cost, yield percentage, food cost percentage calculation, and step-by-step process.",
  url: "https://www.aimenupricer.com/blog/menu-costing-guide",
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
    { "@type": "ListItem", position: 3, name: "Menu Costing Guide", item: "https://www.aimenupricer.com/blog/menu-costing-guide" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is menu costing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Menu costing is the process of calculating the ingredient cost of every dish on a restaurant menu, comparing that cost to the menu price, and verifying that the resulting food cost percentage is within a sustainable range. It is how restaurants know whether their prices actually cover the cost of the food, and by how much. A costed menu shows the food cost percentage of every dish, making it easy to identify underpriced items and prioritize repricing.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to cost a restaurant menu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Manually costing a menu of 30–50 dishes takes 2–5 hours for an operator who has their supplier invoices and recipe specs in hand. Building the ingredient price database from scratch adds another 2–4 hours. Using an AI tool that estimates ingredient costs from a dish name reduces the initial costing to 15–30 minutes for a full menu, with less accuracy on unusual or highly local ingredients.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between menu costing and menu pricing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Menu costing calculates what a dish costs to make — the ingredient cost, and ideally the yield-adjusted cost that accounts for trim loss. Menu pricing decides what to charge for it. Costing tells you your floor (the price cannot be below cost). Pricing considers market rates, competition, perceived value, and your target food cost percentage. Most operators need both: costing first to establish the minimum, then pricing to set the actual menu price.",
      },
    },
    {
      "@type": "Question",
      name: "How do I cost a menu without formal recipes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Many working restaurants do not have formal written recipes with gram-level precision. You can still cost a menu by estimating portion sizes: use a kitchen scale to weigh a plated dish once, note the key ingredients and approximate quantities, and cost from there. AI pricing tools can also estimate ingredient cost from a dish name and description when you do not have exact recipes. The result is less precise than a full recipe cost but accurate enough to identify significantly underpriced dishes.",
      },
    },
  ],
};

const STEPS = [
  {
    num: "01",
    title: "Collect current supplier prices",
    body: "Pull your most recent invoices for every ingredient you use regularly. You need the purchase unit and the price per unit — for example, $4.50 per head of romaine or $6.80 per pound of chicken breast. If prices fluctuate, use a recent average rather than your last delivery price.",
    tip: "Create a simple ingredient price list in a spreadsheet. This is the foundation of every cost calculation.",
  },
  {
    num: "02",
    title: "List every ingredient in each dish",
    body: "For each menu item, write down every ingredient that goes into the dish — including garnishes, sauces, oils used for cooking, and any accompaniments included in the price (bread, side salad, fries). It is common to miss small ingredients that add up: a $0.08 lemon wedge on every plate is $2.40 per shift if 30 covers order the dish.",
    tip: "Include packaging for takeaway items — containers, bags, and cutlery are part of the cost.",
  },
  {
    num: "03",
    title: "Calculate portion cost with yield adjustment",
    body: "For each ingredient, calculate the cost of the amount used in one portion. Multiply quantity by cost per unit. For proteins, produce, and anything with significant trim loss, apply a yield factor: divide the cost by the yield percentage. A 6 oz chicken breast at $6/lb costs $2.25 per pound basis, but if yield after trimming is 83%, the true cost is $2.25 ÷ 0.83 = $2.71.",
    tip: "A 5–10% yield error on your highest-cost ingredient compounds across every service.",
  },
  {
    num: "04",
    title: "Sum the ingredient costs per dish",
    body: "Add all the ingredient portion costs together to get the total ingredient cost per dish. This is your food cost baseline — the minimum the dish costs you before any labor or overhead.",
    tip: "Add a 3–5% contingency for small ingredients you may have missed.",
  },
  {
    num: "05",
    title: "Calculate food cost percentage",
    body: "Divide ingredient cost by your current menu price and multiply by 100. A dish costing $5.40 that sells for $19 has a food cost percentage of 28.4%. Compare this to your target (typically 28–32% for a full-service restaurant). Dishes significantly above target are candidates for repricing.",
    tip: "Sort your menu by food cost % from highest to lowest. The top five items are your immediate repricing candidates.",
  },
  {
    num: "06",
    title: "Set or adjust prices",
    body: "For underpriced dishes, calculate what price would bring them to your target food cost percentage: target price = ingredient cost ÷ target food cost percentage. A dish costing $5.40 at a 30% target should sell for $18.00. Compare this to your current price and to what competitors charge for similar dishes before deciding on the new price.",
    tip: "Raise prices gradually — two or three dishes at a time rather than the whole menu at once.",
  },
  {
    num: "07",
    title: "Review when costs change",
    body: "A costed menu is accurate on the day it is completed. Ingredient prices change constantly. Build a habit of recalculating your five highest-cost dishes whenever you receive a supplier price increase, and do a full menu recosting at least once a quarter.",
    tip: "Set a calendar reminder every 90 days. A price check costs less than 30 minutes; running underpriced dishes all quarter costs real money.",
  },
];

export default function MenuCostingGuidePage() {
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
          <span className="text-xs font-bold bg-orange-100 text-orange-600 px-2.5 py-1 rounded-full">Menu Costing</span>
          <span className="text-xs text-gray-400">8 min read</span>
          <span className="text-xs text-gray-400">·</span>
          <time dateTime={DATE_PUBLISHED} className="text-xs text-gray-400">Updated {DATE_DISPLAY}</time>
        </div>

        <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-6">
          Menu Costing 101
        </h1>
        <p className="text-xl text-gray-500 leading-relaxed mb-10 border-b border-gray-100 pb-10">
          Menu costing is how you know whether your prices are actually sustainable. This guide walks through the complete process — from collecting ingredient prices to setting a final menu price — with a step-by-step method you can follow for any restaurant type.
        </p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Why menu costing matters</h2>
            <p>
              A restaurant menu is a financial document. Every dish is a transaction: the guest
              pays the menu price, the kitchen consumes ingredients worth some fraction of that.
              The gap is what funds the rest of the business.
            </p>
            <p className="mt-3">
              Without costing, you do not know which gap is too small. A dish that looked profitable
              when you opened may be running at 40% food cost today if ingredient prices have risen
              and you have not repriced it. The only way to know is to calculate the number.
            </p>
            <div className="bg-gray-50 border-l-4 border-orange-400 rounded-r-xl p-5 my-4">
              <p className="text-sm text-gray-700">
                <strong>The most common scenario:</strong> an operator knows intuitively that something
                is off but does not know which dishes are the problem. A complete menu cost analysis
                almost always reveals two or three dishes significantly above target — often the same
                dishes that have not been repriced since opening or since the last menu overhaul.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-6">The 7-step menu costing process</h2>
            <div className="space-y-5">
              {STEPS.map((s) => (
                <div key={s.num} className="border border-gray-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl font-black text-orange-300">{s.num}</span>
                    <h3 className="text-lg font-black text-gray-900">{s.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">{s.body}</p>
                  <div className="bg-orange-50 rounded-lg px-4 py-2 border border-orange-100">
                    <p className="text-xs text-gray-700"><span className="font-bold text-orange-600">Tip:</span> {s.tip}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">What a costed menu looks like</h2>
            <p className="mb-4">After completing the process, you should have a spreadsheet or tool output that shows, for every dish:</p>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-900 text-left">
                    <th className="px-4 py-3 text-gray-300 font-semibold text-xs">Dish</th>
                    <th className="px-4 py-3 text-gray-300 font-semibold text-xs">Ingredient cost</th>
                    <th className="px-4 py-3 text-gray-300 font-semibold text-xs">Menu price</th>
                    <th className="px-4 py-3 text-orange-400 font-semibold text-xs">Food cost %</th>
                    <th className="px-4 py-3 text-gray-300 font-semibold text-xs">Target price (30%)</th>
                    <th className="px-4 py-3 text-gray-300 font-semibold text-xs">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { dish: "House burger", cost: 5.40, price: 18.00, target: 30 },
                    { dish: "Grilled salmon", cost: 9.20, price: 24.00, target: 30 },
                    { dish: "Caesar salad", cost: 4.10, price: 16.00, target: 30 },
                    { dish: "Mushroom risotto", cost: 3.80, price: 19.00, target: 30 },
                    { dish: "NY strip (12 oz)", cost: 14.50, price: 36.00, target: 30 },
                  ].map((row, i) => {
                    const fcp = (row.cost / row.price) * 100;
                    const targetPrice = row.cost / (row.target / 100);
                    const overTarget = fcp > row.target;
                    return (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-4 py-3 text-gray-800 font-medium border-b border-gray-100">{row.dish}</td>
                        <td className="px-4 py-3 text-gray-700 font-mono border-b border-gray-100">${row.cost.toFixed(2)}</td>
                        <td className="px-4 py-3 text-gray-700 font-mono border-b border-gray-100">${row.price.toFixed(2)}</td>
                        <td className={`px-4 py-3 font-black font-mono border-b border-gray-100 ${overTarget ? "text-red-500" : "text-green-600"}`}>{fcp.toFixed(1)}%</td>
                        <td className="px-4 py-3 text-gray-500 font-mono border-b border-gray-100">${targetPrice.toFixed(2)}</td>
                        <td className="px-4 py-3 border-b border-gray-100">
                          {overTarget ? (
                            <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-full">Reprice</span>
                          ) : (
                            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">OK</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3 bg-gray-50 rounded-lg p-3">
              The grilled salmon at 38.3% food cost and NY strip at 40.3% are both over the 30% target. Both are candidates for a price increase or a portion adjustment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">How AI changes menu costing</h2>
            <p>
              Traditional menu costing requires a complete ingredient database with current prices,
              yield percentages, and exact recipe quantities. Building that database for a 40-dish
              menu takes several hours.
            </p>
            <p className="mt-3">
              AI-powered tools estimate ingredient costs from a dish name and description, skipping
              the database build. The accuracy is lower than a precision recipe cost — unusual
              ingredients or highly local pricing will not be reflected — but it is close enough
              to identify dishes that are significantly underpriced, which is where most of the
              value is.
            </p>
            <p className="mt-3">
              A practical approach: use AI to identify the candidates, then manually verify the
              cost of the two or three dishes that look most underpriced before raising prices.
            </p>
          </section>

        </div>

        <div className="bg-orange-500 rounded-2xl p-8 text-center my-12">
          <p className="text-orange-100 text-sm font-bold uppercase tracking-widest mb-2">Cost your menu in minutes</p>
          <h2 className="text-2xl font-bold text-white mb-3">No ingredient database required</h2>
          <p className="text-orange-100 mb-5">
            Type a dish name and get the estimated ingredient cost, suggested price, and food cost
            percentage — without building a spreadsheet first. Free for your first 5 dishes.
          </p>
          <Link href="/" className="inline-block bg-white text-orange-500 font-bold px-8 py-3 rounded-xl hover:bg-orange-50 transition-colors">
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
              { href: "/recipe-costing-template", title: "Recipe Costing Template", desc: "A free spreadsheet template for costing dishes with yield percentages." },
              { href: "/food-cost-spreadsheet", title: "Food Cost Spreadsheet", desc: "Track food cost % across your whole menu in one place." },
              { href: "/blog/food-cost-formula", title: "Food Cost Formula", desc: "The underlying calculation behind every menu cost." },
              { href: "/blog/how-to-price-a-restaurant-menu", title: "How to Price a Restaurant Menu", desc: "The complete guide to setting menu prices that work." },
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
