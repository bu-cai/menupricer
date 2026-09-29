import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "Restaurant Profit Margins by Type: Bar, Café, Pizza & More (2026)",
  description: "Average profit margins vary widely by restaurant type: bars 10–15%, cafés 6–9%, fast food 6–9%, fine dining 4–8%. Full breakdown by format with benchmarks.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/restaurant-profit-margin-by-type" },
  openGraph: {
    title: "Restaurant Profit Margins by Type: Bar, Café, Pizza & More (2026)",
    description: "Net profit margin benchmarks for bars, cafés, pizza restaurants, fast food, fine dining, and more — with the cost drivers that explain the differences.",
    url: "https://www.aimenupricer.com/blog/restaurant-profit-margin-by-type",
    type: "article",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "MenuPricer — AI-powered menu pricing for restaurants" }],
  },
};

const SCHEMA = {
  "@context": "https://schema.org", "@type": "BlogPosting",
  headline: "Restaurant Profit Margins by Type: Bar, Café, Pizza & More (2026)",
  description: "Net profit margin benchmarks for different restaurant and foodservice types, with the cost structure differences that explain why margins vary so widely.",
  author: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  publisher: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  datePublished: "2026-09-29", dateModified: "2026-09-29",
  mainEntityOfPage: "https://www.aimenupricer.com/blog/restaurant-profit-margin-by-type",
};

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.aimenupricer.com/blog" },
    { "@type": "ListItem", position: 3, name: "Restaurant Profit Margin by Type", item: "https://www.aimenupricer.com/blog/restaurant-profit-margin-by-type" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question", name: "What is the average profit margin for a bar?",
      acceptedAnswer: { "@type": "Answer", text: "Bars and taverns typically achieve net profit margins of 10–15%, making them among the most profitable foodservice formats. The main reason is beverage cost: alcohol cost runs 18–28% of beverage revenue, compared to 28–35% food cost for restaurant food. Bars also have lower labor-to-revenue ratios because bartenders serve many guests simultaneously. A well-run bar with consistent volume can reach 20%+ net margin, though one with high rent or staffing overhead may sit closer to 8–10%." }
    },
    {
      "@type": "Question", name: "What is the average profit margin for a coffee shop or café?",
      acceptedAnswer: { "@type": "Answer", text: "Coffee shops and cafés typically see net profit margins of 6–9%, with strong operators reaching 12–15%. Beverage cost on espresso drinks is very low (12–18% for a latte), but cafés have high fixed costs: rent in high-traffic locations, equipment maintenance (espresso machines, grinders), and relatively high labor per transaction for handcrafted drinks. Cafés that sell food alongside drinks improve margins by increasing average transaction size without proportional labor increases." }
    },
    {
      "@type": "Question", name: "What is the average profit margin for a pizza restaurant?",
      acceptedAnswer: { "@type": "Answer", text: "Pizza restaurants typically achieve 7–12% net profit margins, which is above average for full-service restaurants. Dough, cheese, and sauce have relatively low food cost (25–30% for a pizza), and the format is efficient: one pizza oven can produce high volume with limited labor. Delivery-only or counter-service pizza formats have lower rent and service labor costs, which can push margins toward 12–15%. Dine-in pizza restaurants with table service and alcohol face higher costs and typically fall in the 7–10% range." }
    },
    {
      "@type": "Question", name: "Why do fine dining restaurants have lower margins than fast food?",
      acceptedAnswer: { "@type": "Answer", text: "Fine dining typically achieves net margins of 4–8%, lower than fast food's 6–9%, despite much higher average checks. The reason is cost structure: fine dining has high food cost (30–38% of revenue), high labor (server-to-guest ratios of 1:8–12 vs. fast food's 1:30+), high rent for premium locations, and high fixed costs (linen, glassware, décor replacement). Fast food benefits from standardized recipes with low food cost (25–30%), minimal table service, and high volume efficiency. Revenue is higher at fine dining, but costs are proportionally even higher." }
    },
  ],
};

const MARGINS_DATA = [
  { type: "Bar / Tavern", net: "10–15%", food: "N/A", beverage: "18–28%", labor: "28–35%", note: "Beverage-led format drives best margins" },
  { type: "Coffee shop / Café", net: "6–9%", food: "28–35%", beverage: "12–18%", labor: "35–42%", note: "High rent + equipment costs offset low COGS" },
  { type: "Quick service (fast food)", net: "6–9%", food: "28–32%", beverage: "N/A", labor: "25–30%", note: "Volume efficiency + low service labor" },
  { type: "Pizza restaurant", net: "7–12%", food: "25–30%", beverage: "N/A", labor: "30–38%", note: "Efficient production; delivery format helps" },
  { type: "Casual dining", net: "3–6%", food: "30–35%", beverage: "22–28%", labor: "35–40%", note: "High labor; mid-range check averages" },
  { type: "Fast casual", net: "6–10%", food: "28–33%", beverage: "N/A", labor: "28–35%", note: "Better than casual; less labor than full service" },
  { type: "Full-service / upscale casual", net: "4–8%", food: "32–37%", beverage: "22–28%", labor: "36–42%", note: "Bar program helps margins" },
  { type: "Fine dining", net: "4–8%", food: "32–38%", beverage: "24–30%", labor: "38–45%", note: "High check; high costs nearly offset it" },
  { type: "Food truck", net: "8–12%", food: "28–35%", beverage: "N/A", labor: "28–35%", note: "Low rent; offset by commissary + events" },
  { type: "Ghost kitchen / delivery-only", net: "10–15%", food: "28–35%", beverage: "N/A", labor: "25–32%", note: "Low rent; platform fees offset it partially" },
];

export default function RestaurantProfitMarginByTypePage() {
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
          <Link href="/menu-cost-calculator" className="ml-auto text-sm font-semibold text-orange-500 hover:text-orange-600 whitespace-nowrap">Menu Calculator →</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <Link href="/" className="hover:text-orange-500">Home</Link><span>›</span>
          <Link href="/blog" className="hover:text-orange-500">Blog</Link><span>›</span>
          <span className="text-gray-600">Restaurant Profit Margin by Type</span>
        </nav>

        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-bold bg-orange-100 text-orange-600 px-3 py-1 rounded-full">Profitability</span>
            <span className="text-xs text-gray-400">7 min read · September 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-4">Restaurant Profit Margins by Type: Bar, Café, Pizza & More (2026)</h1>
          <p className="text-sm text-gray-400 mb-6">Last updated: September 29, 2026 · Reviewed by the MenuPricer Team</p>
          <p className="text-lg text-gray-500 leading-relaxed">The &ldquo;average restaurant margin&rdquo; figure you see in industry reports masks enormous variation by format. A bar and a fine dining restaurant can both be called restaurants — and have net margins that differ by 10 percentage points. This guide breaks down the benchmarks by type so you can compare yourself to the right peer group.</p>
        </div>

        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 mb-10">
          <p className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-3">Net profit margin by restaurant type (2026 benchmarks)</p>
          <div className="grid grid-cols-3 gap-3 text-center text-sm">
            {[
              { label: "Bar / tavern", range: "10–15%", sub: "net margin" },
              { label: "Pizza / QSR", range: "6–12%", sub: "net margin" },
              { label: "Fine dining", range: "4–8%", sub: "net margin" },
            ].map(({ label, range, sub }) => (
              <div key={label} className="bg-white rounded-xl p-3">
                <p className="text-xs text-gray-400">{label}</p>
                <p className="font-black text-orange-600 text-xl">{range}</p>
                <p className="text-xs text-gray-500">{sub}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="prose prose-gray max-w-none space-y-10">

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-5">Net profit margin by restaurant format</h2>
            <p className="text-gray-600 mb-4">These figures represent net profit margin — revenue minus all costs: food, beverage, labor, rent, utilities, and overhead. They are US industry averages; high-volume, well-managed operators often exceed the upper end.</p>
            <div className="overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full text-sm">
                <thead><tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-bold text-gray-700">Restaurant type</th>
                  <th className="text-center px-4 py-3 font-bold text-orange-600">Net margin</th>
                  <th className="text-center px-4 py-3 font-bold text-gray-700 hidden sm:table-cell">Food cost</th>
                  <th className="text-center px-4 py-3 font-bold text-gray-700 hidden sm:table-cell">Labor cost</th>
                  <th className="text-left px-4 py-3 font-bold text-gray-700 hidden md:table-cell">Key driver</th>
                </tr></thead>
                <tbody>
                  {MARGINS_DATA.map((row, i) => (
                    <tr key={i} className="border-b border-gray-100 last:border-0">
                      <td className="px-4 py-3 font-medium text-gray-800 text-xs sm:text-sm">{row.type}</td>
                      <td className="px-4 py-3 text-center font-black text-orange-600 text-xs whitespace-nowrap">{row.net}</td>
                      <td className="px-4 py-3 text-center text-gray-600 text-xs hidden sm:table-cell">{row.food}</td>
                      <td className="px-4 py-3 text-center text-gray-600 text-xs hidden sm:table-cell">{row.labor}</td>
                      <td className="px-4 py-3 text-gray-500 text-xs hidden md:table-cell">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-2">Net margin = net profit ÷ total revenue. These are typical ranges; individual operators vary. Source: National Restaurant Association data + industry benchmarks, updated 2026.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Why margins differ so much by format</h2>
            <p className="text-gray-600 mb-4">Three cost buckets explain most of the variation: food/beverage cost, labor, and rent. The format that wins on all three is usually the one with the best margin.</p>
            <div className="space-y-4">
              {[
                {
                  title: "Bars lead on beverage cost",
                  detail: "Alcohol cost of goods is 18–28% of beverage revenue, well below food cost at 28–38%. Bars also have a high revenue-per-square-foot because drinks are quick to make and require little table space. A bar doing $800,000/year in a 2,000 sq ft space is not unusual; the same footprint in a full-service restaurant would be hard-pressed to match it.",
                },
                {
                  title: "Fast food wins on labor efficiency",
                  detail: "Quick service restaurants have a labor cost of 25–30% of revenue because the model is designed around speed and standardization. A single employee at the counter handles many transactions with no tableside service. Fine dining needs 1 server per 8–12 guests; fast food needs 1 employee per 30+ customers.",
                },
                {
                  title: "Food trucks and ghost kitchens save on rent",
                  detail: "Traditional restaurants spend 6–12% of revenue on rent. Food trucks spend 1–3% (commissary fees replace lease costs). Ghost kitchens pay $1,500–3,000/month for a commissary station rather than $8,000–20,000+ for a full dining room lease. These savings directly improve the bottom line, partially offset by delivery platform fees (15–30%) for ghost kitchens.",
                },
                {
                  title: "Fine dining high revenue does not guarantee high margin",
                  detail: "A $300 check per guest sounds profitable — and gross margin often looks fine at 60–65%. But fine dining has disproportionately high costs in every line item: premium ingredients, skilled kitchen labor, service staff, prime real estate, linen and glassware replacement, and décor upkeep. When all of those are subtracted, net margin typically falls to 4–8%, below the industry median.",
                },
              ].map(({ title, detail }) => (
                <div key={title} className="bg-gray-50 rounded-xl p-4">
                  <p className="font-bold text-gray-900 mb-2 text-sm">{title}</p>
                  <p className="text-gray-600 text-sm">{detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">How to benchmark your own restaurant</h2>
            <p className="text-gray-600 mb-4">A restaurant with a 5% net margin is either thriving (if you are in fine dining) or struggling (if you run a ghost kitchen that should be at 12%). Always compare to your own format first.</p>
            <div className="space-y-3 text-sm">
              {[
                { step: "1", text: "Calculate your actual net margin: net profit ÷ total revenue × 100. If you are not tracking this monthly, start now." },
                { step: "2", text: "Find your format in the table above. Compare your net margin to the range for your restaurant type — not the industry average." },
                { step: "3", text: "If you are below range, isolate which cost bucket is out of line: food cost, labor cost, or occupancy cost. Each has a different fix." },
                { step: "4", text: "If food cost is high, start with your top 10 volume items. Use the MenuPricer calculator to find which dishes are eroding margin and reprice or reformulate them." },
                { step: "5", text: "If you are above range, understand why before changing anything. High margins sometimes come from pricing power that is temporary (a competitor closed, a trend is peaking)." },
              ].map(({ step, text }) => (
                <div key={step} className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-orange-500 text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">{step}</span>
                  <p className="text-gray-700">{text}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-6">Frequently asked questions</h2>
            <div className="space-y-4">
              {FAQ_SCHEMA.mainEntity.map((faq) => (
                <div key={faq.name} className="border border-gray-200 rounded-xl p-5">
                  <p className="font-bold text-gray-900 mb-2">{faq.name}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-orange-50 rounded-2xl p-6">
            <h2 className="text-xl font-black text-gray-900 mb-2">Improve your food cost margin</h2>
            <p className="text-gray-600 text-sm mb-4">Use the free MenuPricer calculator to find the food cost percentage and contribution margin for any menu item — and identify which dishes are pulling your margin down.</p>
            <Link href="/menu-cost-calculator" className="inline-block bg-orange-500 text-white font-bold px-6 py-3 rounded-xl hover:bg-orange-600 transition-colors text-sm">Open Menu Cost Calculator →</Link>
          </section>

          <section className="border-t border-gray-100 pt-8">
            <h2 className="text-lg font-black text-gray-900 mb-4">Related guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: "/blog/restaurant-profit-margin", title: "Restaurant Profit Margin: Industry Benchmarks" },
                { href: "/blog/ideal-food-cost-percentage", title: "What Is the Ideal Food Cost Percentage?" },
                { href: "/blog/prime-cost-restaurant", title: "Prime Cost in Restaurants" },
                { href: "/blog/restaurant-profit-loss-statement", title: "How to Read a Restaurant P&L" },
              ].map(({ href, title }) => (
                <Link key={href} href={href} className="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-500 bg-gray-50 rounded-xl px-4 py-3">
                  <span className="text-orange-400">→</span>{title}
                </Link>
              ))}
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
