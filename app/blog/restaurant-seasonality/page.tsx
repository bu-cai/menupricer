import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "Restaurant Seasonality: How to Adjust Menu Prices When Ingredient Costs Change",
  description: "How restaurant seasonality affects food costs, menu pricing, and profit. Learn when to update prices, how to build seasonal menus, and how to protect your margins year-round.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/restaurant-seasonality" },
  openGraph: {
    title: "Restaurant Seasonality: How to Adjust Menu Prices When Ingredient Costs Change",
    description: "Manage restaurant seasonality — adjust menu prices as ingredient costs shift with the seasons without alienating regular customers.",
    url: "https://www.aimenupricer.com/blog/restaurant-seasonality",
  },
};

const SCHEMA = {
  "@context": "https://schema.org", "@type": "BlogPosting",
  headline: "Restaurant Seasonality: How to Adjust Menu Prices When Ingredient Costs Change",
  description: "Guide to managing restaurant seasonality — how ingredient cost swings affect food cost percentage, when to reprice the menu, how to build seasonal menus, and how to protect profit margins.",
  author: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  publisher: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  datePublished: "2026-07-25", dateModified: "2026-07-25",
  mainEntityOfPage: "https://www.aimenupricer.com/blog/restaurant-seasonality",
};

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.aimenupricer.com/blog" },
    { "@type": "ListItem", position: 3, name: "Restaurant Seasonality", item: "https://www.aimenupricer.com/blog/restaurant-seasonality" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How does seasonality affect restaurant food costs?", acceptedAnswer: { "@type": "Answer", text: "Seasonal ingredient cost swings of 20–50% are common in produce, seafood, and some proteins. When you have fixed menu prices, a tomato that cost $0.80/lb in August costing $2.50/lb in February raises your food cost percentage dramatically without any change in your menu. A dish priced at $14 with a $3.50 food cost (25%) now costs $5.00 to make (36%) — erasing most of the profit on that item. This is why seasonal menu updates and ingredient substitutions matter." } },
    { "@type": "Question", name: "How often should restaurants update their menu prices?", acceptedAnswer: { "@type": "Answer", text: "Most full-service restaurants should review menu prices at least twice a year — typically in late winter (before spring menus) and late summer (before fall menus). Fast casual and QSR concepts may update more frequently. The trigger for an urgent price update is when any core ingredient cost rises more than 15% above the cost used when you last set your prices. Do not let food cost creep above 35% for more than 2–3 weeks without a pricing response." } },
    { "@type": "Question", name: "How do I raise menu prices without losing customers?", acceptedAnswer: { "@type": "Answer", text: "Raise prices gradually and strategically: (1) Increase prices on the highest-cost items first, not across the board. (2) Time increases with a menu refresh — new design, seasonal language — so it feels like an update, not a cash grab. (3) Raise prices 5–8% rather than 15–20% all at once. (4) Add value alongside the increase — a garnish upgrade, a side substitution, a new description. (5) Your regulars will accept reasonable increases; it's your new guests who set price expectations." } },
    { "@type": "Question", name: "What ingredients have the highest seasonal price swings?", acceptedAnswer: { "@type": "Answer", text: "The highest seasonal price volatility is in: (1) Fresh produce — tomatoes, berries, herbs, and delicate greens can swing 2–4x in price between peak and off-season. (2) Wild-caught seafood — availability-driven, often 30–60% seasonal swings. (3) Local or specialty proteins — grass-fed beef, heritage pork from small farms have limited off-season supply. (4) Eggs — weather and disease outbreaks can cause sharp spikes. Pantry staples (oils, grains, dried goods) are much more stable but subject to commodity market cycles." } },
  ],
};

const SEASONAL_EXAMPLES = [
  { ingredient: "Tomatoes (fresh)", peak: "July–Sept", peakCost: "$0.80–1.20/lb", offSeason: "Nov–March", offCost: "$2.00–3.50/lb", swing: "150–200%" },
  { ingredient: "Strawberries", peak: "May–June", peakCost: "$1.00–1.50/lb", offSeason: "Dec–Feb", offCost: "$3.00–5.00/lb", swing: "200–300%" },
  { ingredient: "Wild salmon", peak: "June–Sept", peakCost: "$6–9/lb", offSeason: "Nov–April", offCost: "$10–16/lb", swing: "60–80%" },
  { ingredient: "Fresh basil", peak: "June–Sept", peakCost: "$1.50–2.50/bunch", offSeason: "Nov–Feb", offCost: "$3.50–6.00/bunch", swing: "130–160%" },
  { ingredient: "Butternut squash", peak: "Sept–Nov", peakCost: "$0.60–0.90/lb", offSeason: "March–July", offCost: "$1.20–1.80/lb", swing: "80–100%" },
];

export default function RestaurantSeasonalityPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <LogoIcon size={28} />
            <span className="font-black text-gray-900 tracking-tight text-lg">Menu<span className="text-orange-500">Pricer</span></span>
          </Link>
          <span className="text-gray-300 text-sm">·</span>
          <Link href="/blog" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">Blog</Link>
          <Link href="/" className="ml-auto text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors">AI Pricing Tool →</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <Link href="/" className="hover:text-gray-600">Home</Link>
          <span>›</span>
          <Link href="/blog" className="hover:text-gray-600">Blog</Link>
          <span>›</span>
          <span className="text-gray-600">Restaurant Seasonality</span>
        </nav>

        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">Menu Strategy</div>
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-4">
          Restaurant Seasonality: How to Adjust Menu Prices When Ingredient Costs Change
        </h1>
        <p className="text-sm text-gray-400 mb-6">Last updated: July 25, 2026</p>
        <p className="text-lg text-gray-500 leading-relaxed mb-8">
          A tomato that costs $0.90/lb in August can cost $3.00/lb in February. If your menu price stays the same, your food cost percentage doubles on that dish. Here is how to manage seasonal ingredient swings without constantly raising prices or quietly losing margin.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">The Seasonality Problem: A Real Example</h2>
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-4">
            <p className="font-semibold text-gray-900 mb-3">Caprese Salad — Same Dish, Different Seasons</p>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <p className="font-bold text-green-700 mb-2">Summer (August)</p>
                <div className="space-y-1 text-gray-600">
                  <div className="flex justify-between"><span>Tomatoes (6oz)</span><span>$0.34</span></div>
                  <div className="flex justify-between"><span>Fresh mozzarella (3oz)</span><span>$1.20</span></div>
                  <div className="flex justify-between"><span>Fresh basil</span><span>$0.25</span></div>
                  <div className="flex justify-between"><span>Olive oil, salt</span><span>$0.15</span></div>
                  <div className="flex justify-between font-bold border-t border-gray-200 pt-1 mt-1"><span>Food cost</span><span>$1.94</span></div>
                  <div className="flex justify-between font-bold text-green-700"><span>Menu price $12</span><span>Food cost: 16%</span></div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-red-200">
                <p className="font-bold text-red-600 mb-2">Winter (February)</p>
                <div className="space-y-1 text-gray-600">
                  <div className="flex justify-between"><span>Tomatoes (6oz)</span><span>$1.13</span></div>
                  <div className="flex justify-between"><span>Fresh mozzarella (3oz)</span><span>$1.20</span></div>
                  <div className="flex justify-between"><span>Fresh basil</span><span>$0.75</span></div>
                  <div className="flex justify-between"><span>Olive oil, salt</span><span>$0.15</span></div>
                  <div className="flex justify-between font-bold border-t border-gray-200 pt-1 mt-1"><span>Food cost</span><span>$3.23</span></div>
                  <div className="flex justify-between font-bold text-red-600"><span>Menu price $12</span><span>Food cost: 27%</span></div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-gray-600 text-sm">Same dish, same menu price, same labor. But winter food cost jumped from 16% to 27% — an 11-point hit on just one item. Multiply that across your whole menu and this is how restaurants silently lose thousands per month without realizing why.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">High-Volatility Ingredients: Seasonal Price Swings</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-3 py-3 font-semibold text-gray-700 border-b border-gray-200">Ingredient</th>
                  <th className="text-left px-3 py-3 font-semibold text-gray-700 border-b border-gray-200">Peak Season</th>
                  <th className="text-right px-3 py-3 font-semibold text-gray-700 border-b border-gray-200">Peak Cost</th>
                  <th className="text-left px-3 py-3 font-semibold text-gray-700 border-b border-gray-200">Off-Season</th>
                  <th className="text-right px-3 py-3 font-semibold text-gray-700 border-b border-gray-200">Off Cost</th>
                  <th className="text-center px-3 py-3 font-semibold text-gray-700 border-b border-gray-200">Swing</th>
                </tr>
              </thead>
              <tbody>
                {SEASONAL_EXAMPLES.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-3 py-3 font-medium text-gray-800 border-b border-gray-100">{row.ingredient}</td>
                    <td className="px-3 py-3 text-green-700 text-xs border-b border-gray-100">{row.peak}</td>
                    <td className="px-3 py-3 text-right text-green-700 font-semibold border-b border-gray-100">{row.peakCost}</td>
                    <td className="px-3 py-3 text-red-600 text-xs border-b border-gray-100">{row.offSeason}</td>
                    <td className="px-3 py-3 text-right text-red-600 font-semibold border-b border-gray-100">{row.offCost}</td>
                    <td className="px-3 py-3 text-center border-b border-gray-100">
                      <span className="bg-red-100 text-red-700 font-bold text-xs px-2 py-0.5 rounded-full">+{row.swing}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">* Approximate national averages. Local markets vary. Prices as of 2025–2026.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">4 Strategies for Managing Seasonal Price Swings</h2>
          <div className="space-y-4">
            {[
              {
                num: "1", title: "Build Seasonal Menus (2–4 per year)",
                content: "The most sustainable approach: design menus around what is currently cheap and abundant. Summer tomatoes go on 6 dishes. By October, they come off. You price based on current costs, not what you hope future costs will be. This is how fine dining restaurants maintain consistent food cost percentages despite volatile markets.",
              },
              {
                num: "2", title: "Engineer Substitution Into the Recipe",
                content: "Design recipes with seasonal flexibility built in: 'roasted seasonal squash' instead of 'butternut squash.' Train your kitchen to execute the dish with whatever variety is cheapest and best. The dish stays on the menu year-round; the ingredient underneath it rotates with the season.",
              },
              {
                num: "3", title: "Price to the Off-Season Cost",
                content: "If a dish needs to stay on year-round, price it based on the off-season (higher) cost, not the peak-season cost. You will make extra margin in summer — but you will not lose money in winter. This is the conservative approach, appropriate for signature items with year-round demand.",
              },
              {
                num: "4", title: "Monitor Food Cost Weekly and Reprice Triggers",
                content: "Set a rule: if any ingredient that makes up more than 15% of a dish cost rises more than 20%, recalculate that dish and decide: increase the price, substitute an ingredient, or temporarily take it off the menu. Catch these triggers early — waiting until your monthly P&L arrives means 4 weeks of eroded margin.",
              },
            ].map((item) => (
              <div key={item.num} className="flex gap-4 border border-gray-200 rounded-xl p-5">
                <div className="flex-shrink-0 w-9 h-9 bg-orange-500 text-white font-black rounded-full flex items-center justify-center">{item.num}</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">How to Raise Prices Without Losing Regulars</h2>
          <p className="text-gray-600 mb-4">When you do need to increase prices, do it thoughtfully:</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { do: true, text: "Increase prices on affected dishes specifically — not across the board" },
              { do: true, text: "Time increases with a seasonal menu refresh or redesign" },
              { do: true, text: "Raise prices 5–8% at a time, not 20% all at once" },
              { do: true, text: "Communicate value — upgrade a garnish or portion alongside the increase" },
              { do: false, text: "Announce 'prices are going up' — let the new menu speak for itself" },
              { do: false, text: "Raise prices on items customers use as price anchors (well drinks, house burger)" },
            ].map((item, i) => (
              <div key={i} className={`flex items-start gap-3 border rounded-xl p-3 ${item.do ? "border-green-200 bg-green-50" : "border-red-100 bg-red-50"}`}>
                <span className={`font-bold text-lg ${item.do ? "text-green-600" : "text-red-500"}`}>{item.do ? "✓" : "✗"}</span>
                <p className="text-sm text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-orange-500 rounded-2xl p-8 text-center mb-10">
          <h2 className="text-2xl font-bold text-white mb-2">Reprice Your Menu Before Season Shifts</h2>
          <p className="text-orange-100 mb-5">Enter your updated ingredient costs and MenuPricer recalculates the right price for every dish — so seasonal cost changes never silently kill your margins.</p>
          <Link href="/" className="inline-block bg-white text-orange-500 font-bold px-8 py-3 rounded-xl hover:bg-orange-50 transition-colors">
            Try MenuPricer Free →
          </Link>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
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
          <h2 className="text-lg font-bold text-gray-900 mb-4">Related Articles</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: "/blog/food-cost-formula", title: "Food Cost Formula", desc: "Calculate food cost percentage for any dish or season." },
              { href: "/blog/restaurant-bookkeeping", title: "Restaurant Bookkeeping 101", desc: "How to track food cost, labor, and profit the right way." },
              { href: "/blog/menu-engineering", title: "Menu Engineering Guide", desc: "How to redesign your menu to protect high-margin items." },
              { href: "/blog/food-cost-formula", title: "How to Calculate Food Cost", desc: "Step-by-step guide to accurate food cost calculation." },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="border border-gray-200 rounded-xl p-4 hover:border-orange-300 transition-colors group">
                <p className="font-semibold text-gray-900 group-hover:text-orange-500 transition-colors text-sm mb-1">{link.title}</p>
                <p className="text-xs text-gray-500">{link.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-100 mt-16 py-8">
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