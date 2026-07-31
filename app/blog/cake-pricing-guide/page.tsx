import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "Cake Pricing Guide: How Much to Charge for a Custom Cake (2026)",
  description:
    "How to price a custom cake by serving size and tier — the per-serving formula, a servings chart for round and tiered cakes, and why home bakers undercharge friends and family.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/cake-pricing-guide" },
  openGraph: {
    title: "Cake Pricing Guide: How Much to Charge for a Custom Cake (2026)",
    description: "Per-serving cake pricing formula, a servings chart by cake size, and how to quote tiered and novelty cakes without underpricing your labor.",
    url: "https://www.aimenupricer.com/blog/cake-pricing-guide",
  },
};

const SCHEMA = {
  "@context": "https://schema.org", "@type": "BlogPosting",
  headline: "Cake Pricing Guide: How Much to Charge for a Custom Cake (2026)",
  description: "Per-serving cake pricing formula, servings chart by cake size, and how independent cake decorators avoid underpricing labor and design time.",
  author: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  publisher: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  datePublished: "2026-07-30", dateModified: "2026-07-30",
  mainEntityOfPage: "https://www.aimenupricer.com/blog/cake-pricing-guide",
};

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.aimenupricer.com/blog" },
    { "@type": "ListItem", position: 3, name: "Cake Pricing Guide", item: "https://www.aimenupricer.com/blog/cake-pricing-guide" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How do you price a cake per serving?", acceptedAnswer: { "@type": "Answer", text: "Per-serving cake pricing formula: (Ingredient cost + Labor hours × hourly rate + Overhead) ÷ number of servings = cost per serving. Most independent cake decorators price finished cakes at $3.50-$6.50 per serving for standard buttercream designs, and $6-12+ per serving for fondant, sculpted, or highly detailed cakes. A 20-serving cake at $4.50/serving prices at $90 total — a useful sanity check even if you quote a flat price." } },
    { "@type": "Question", name: "How many servings does a cake tier make?", acceptedAnswer: { "@type": "Answer", text: "Standard serving charts (based on a 1-inch by 2-inch party slice) give roughly: 6-inch round = 8-12 servings, 8-inch round = 20-24 servings, 10-inch round = 30-38 servings, 12-inch round = 45-56 servings. A 3-tier cake (6/8/10-inch) yields around 55-75 servings total. Always confirm servings with the client before quoting — wedding-slice cuts yield roughly double a party-slice count." } },
    { "@type": "Question", name: "Why do home bakers undercharge for custom cakes?", acceptedAnswer: { "@type": "Answer", text: "The most common mistake is pricing from ingredient cost alone and forgetting design labor, which is usually the largest cost component on a decorated cake. A 3-hour design session at even $20/hour is $60 that many home bakers never add to the quote — especially for friends and family, where the instinct is to charge 'just for ingredients.' Track your hours on a few orders and you will usually find your true cost is 2-3× what you have been charging." } },
    { "@type": "Question", name: "Should I charge friends and family less for a cake?", acceptedAnswer: { "@type": "Answer", text: "Decide this deliberately, not by default. If you want to give a discount, apply it visibly to your full-price quote (for example, '20% family discount off my usual $220 price') rather than silently undercharging from the start. Otherwise the discount becomes the expectation, referrals get quoted the discounted rate, and the business never reflects your actual cost to produce the cake." } },
  ],
};

const SERVINGS_CHART = [
  { size: "6-inch round", party: "8-12", wedding: "12-18" },
  { size: "8-inch round", party: "20-24", wedding: "24-32" },
  { size: "10-inch round", party: "30-38", wedding: "38-50" },
  { size: "12-inch round", party: "45-56", wedding: "56-70" },
  { size: "2-tier (6\"+8\")", party: "28-36", wedding: "36-48" },
  { size: "3-tier (6\"+8\"+10\")", party: "58-74", wedding: "74-98" },
];

const PRICE_EXAMPLES = [
  { style: "Simple buttercream, single tier", perServing: "$3.50–4.50", example: "8-inch (22 servings) ≈ $80–100" },
  { style: "Piped buttercream detail, single tier", perServing: "$4.50–6.00", example: "8-inch (22 servings) ≈ $100–130" },
  { style: "Fondant-covered, 2-tier", perServing: "$6.00–8.50", example: "2-tier (32 servings) ≈ $190–270" },
  { style: "Sculpted / novelty 3D cake", perServing: "$9.00–15.00+", example: "Priced by design hours, not servings alone" },
  { style: "3-tier wedding, moderate detail", perServing: "$7.00–10.00", example: "3-tier (66 servings) ≈ $460–660" },
];

export default function CakePricingGuidePage() {
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
          <span className="text-gray-300 text-sm">·</span>
          <span className="text-sm text-gray-500 truncate">Cake Pricing Guide</span>
          <Link href="/bakery-pricing-calculator" className="ml-auto text-sm font-semibold text-orange-500 hover:text-orange-600 whitespace-nowrap">Bakery Calculator →</Link>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-12">
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <Link href="/" className="hover:text-orange-500">Home</Link><span>›</span>
          <Link href="/blog" className="hover:text-orange-500">Blog</Link><span>›</span>
          <span className="text-gray-600">Cake Pricing Guide</span>
        </nav>
        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-bold bg-orange-100 text-orange-600 px-3 py-1 rounded-full">Bakery</span>
            <span className="text-xs text-gray-400">6 min read · July 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-4">Cake Pricing Guide: How Much to Charge for a Custom Cake</h1>
          <p className="text-sm text-gray-400 mb-6">Last updated: July 30, 2026 · Reviewed by the MenuPricer Team</p>
          <p className="text-lg text-gray-500 leading-relaxed">Most independent cake decorators price from ingredient cost alone and forget the thing that actually takes the most time: design labor. Here is how to quote by serving size, tier count, and design complexity — without giving your work away.</p>
        </div>
        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5 mb-10 grid grid-cols-3 gap-4 text-center">
          {[{ n: "$3.50–15+", label: "Typical price per serving, by design complexity" }, { n: "8-12", label: "Servings from a 6-inch round tier" }, { n: "2-3×", label: "How much most home bakers undercharge" }].map(({ n, label }) => (
            <div key={n}><p className="text-xl font-black text-orange-500">{n}</p><p className="text-xs text-gray-500 mt-1 leading-tight">{label}</p></div>
          ))}
        </div>
        <div className="prose prose-gray max-w-none space-y-10">
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">The per-serving cake pricing formula</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Cakes are priced per serving, not per cake — this is what lets you quote consistently across different sizes and tier counts instead of guessing a flat number each time.</p>
            <div className="bg-gray-900 rounded-2xl p-5 text-sm font-mono text-white space-y-3">
              <p className="text-gray-400 text-xs">// Custom cake pricing, per serving</p>
              <p><span className="text-orange-400">Ingredient cost</span> = Total ingredients for the whole cake ÷ servings</p>
              <p><span className="text-blue-300">Design labor</span> = (Decorating hours × hourly rate) ÷ servings</p>
              <p><span className="text-green-300">Overhead</span> = Boxes, boards, dowels, delivery ÷ servings</p>
              <p className="border-t border-gray-700 pt-3"><span className="text-yellow-300">Cost per serving</span> = Ingredient + Labor + Overhead</p>
              <p className="text-white font-bold">Price per serving = Cost per serving × 2 to 2.5</p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4 text-sm">
              <p className="font-bold text-amber-800 mb-1">The mistake this formula fixes</p>
              <p className="text-amber-700">Pricing from ingredients alone ($30-50 for a tiered cake) ignores 3-8 hours of decorating time. At even $20/hour, that is $60-160 in labor most home bakers never add to the quote — the single biggest reason custom cake work feels unprofitable.</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-5">Servings chart by cake size</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Confirm servings with your client before quoting — a wedding-slice cut (thinner) yields noticeably more servings than a party-slice cut.</p>
            <div className="overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full text-sm">
                <thead><tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-bold text-gray-700">Cake size</th>
                  <th className="text-right px-4 py-3 font-bold text-gray-700">Party servings</th>
                  <th className="text-right px-4 py-3 font-bold text-gray-700">Wedding servings</th>
                </tr></thead>
                <tbody>
                  {SERVINGS_CHART.map((row, i) => (
                    <tr key={i} className="border-b border-gray-100 last:border-0">
                      <td className="px-4 py-3 font-medium text-gray-800">{row.size}</td>
                      <td className="px-4 py-3 text-right text-gray-600">{row.party}</td>
                      <td className="px-4 py-3 text-right text-gray-600">{row.wedding}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-2">Party slice ≈ 1" × 2". Wedding slice ≈ 1" × 1", roughly 25-30% more servings per tier.</p>
          </section>
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-5">Price per serving by design complexity</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Design complexity drives price more than flavor or size. A plain buttercream cake and a fondant sculpted cake at the same serving count can differ by 3-4× in price, because the difference is entirely decorating hours.</p>
            <div className="overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full text-sm">
                <thead><tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-bold text-gray-700">Style</th>
                  <th className="text-right px-4 py-3 font-bold text-gray-700">Per serving</th>
                  <th className="text-right px-4 py-3 font-bold text-gray-700 hidden sm:table-cell">Example</th>
                </tr></thead>
                <tbody>
                  {PRICE_EXAMPLES.map((row, i) => (
                    <tr key={i} className="border-b border-gray-100 last:border-0">
                      <td className="px-4 py-3 font-medium text-gray-800">{row.style}</td>
                      <td className="px-4 py-3 text-right font-black text-orange-600">{row.perServing}</td>
                      <td className="px-4 py-3 text-right text-gray-500 text-xs hidden sm:table-cell">{row.example}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Quoting friends and family without losing money</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Decide on a discount deliberately, rather than defaulting to "just cover ingredients." Two ways to do it without eroding your business:</p>
            <div className="space-y-3">
              {[
                { label: "Visible discount", note: "Quote the full price, then apply a stated discount: \"My usual price is $220 — for you, $175.\" The client sees your real value and a referral gets quoted correctly." },
                { label: "Cost-plus-minimum", note: "Never go below ingredient cost + a flat minimum labor charge (e.g. $15/hour), even for family. This keeps every order at least break-even on hard costs." },
              ].map((row) => (
                <div key={row.label} className="bg-gray-50 rounded-xl p-4">
                  <p className="font-bold text-gray-800 text-sm mb-1">{row.label}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{row.note}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="bg-orange-500 rounded-2xl p-7 text-white">
            <h2 className="text-xl font-black mb-2">Price your next cake order in seconds</h2>
            <p className="text-orange-100 text-sm mb-5">The bakery pricing calculator handles ingredient costing, labor, and markup — enter servings and design hours to get a price you can quote with confidence.</p>
            <Link href="/bakery-pricing-calculator" className="inline-block bg-white text-orange-600 font-black px-6 py-3 rounded-xl hover:bg-orange-50 transition-colors">Open Bakery Calculator →</Link>
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
                { href: "/blog/bakery-pricing-guide", title: "Bakery Pricing Guide", desc: "Ingredient, labor, and overhead pricing for a full bakery menu." },
                { href: "/blog/food-cost-formula", title: "Food Cost Formula", desc: "The food cost percentage formula for any menu item." },
                { href: "/blog/how-to-cost-a-dish", title: "How to Cost a Dish", desc: "Ingredient breakdown with yield adjustments." },
                { href: "/blog/catering-pricing-guide", title: "Catering Pricing Guide", desc: "Per-person catering pricing for any event type." },
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
            <Link href="/bakery-pricing-calculator" className="hover:text-orange-500">Bakery Calculator</Link>
            <Link href="/blog" className="hover:text-orange-500">All Blog Posts</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
