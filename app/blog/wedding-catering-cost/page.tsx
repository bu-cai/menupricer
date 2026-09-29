import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "Wedding Catering Cost: Average Prices Per Person (2026)",
  description: "Wedding catering costs $85–175 per person on average. Full breakdown by service style, guest count, and what's included — plus how to get accurate quotes.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/wedding-catering-cost" },
  openGraph: {
    title: "Wedding Catering Cost: Average Prices Per Person (2026)",
    description: "Wedding catering costs $85–175/person on average. Full price breakdown by service style, guest count, and what drives the final bill.",
    url: "https://www.aimenupricer.com/blog/wedding-catering-cost",
    type: "article",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "MenuPricer — AI-powered menu pricing for restaurants" }],
  },
};

const SCHEMA = {
  "@context": "https://schema.org", "@type": "BlogPosting",
  headline: "Wedding Catering Cost: Average Prices Per Person (2026)",
  description: "How much wedding catering costs per person, broken down by service style, guest count, what is included, and how to read a caterer quote.",
  author: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  publisher: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  datePublished: "2026-09-29", dateModified: "2026-09-29",
  mainEntityOfPage: "https://www.aimenupricer.com/blog/wedding-catering-cost",
};

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.aimenupricer.com/blog" },
    { "@type": "ListItem", position: 3, name: "Wedding Catering Cost", item: "https://www.aimenupricer.com/blog/wedding-catering-cost" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question", name: "How much does wedding catering cost per person?",
      acceptedAnswer: { "@type": "Answer", text: "Wedding catering typically costs $85–175 per person for full-service events in the US. Budget caterers start around $50–75/person for simple buffets. Mid-range plated dinners with servers run $100–150/person. Premium or luxury catering exceeds $175/person. These figures usually exclude bar service ($20–45/person extra), gratuity (18–22%), and rentals (tables, linens, chairs). Total all-in wedding catering for 100 guests commonly runs $12,000–25,000." }
    },
    {
      "@type": "Question", name: "How much does wedding catering for 100 people cost?",
      acceptedAnswer: { "@type": "Answer", text: "Wedding catering for 100 guests costs approximately $10,000–20,000 all-in for a full-service dinner. Food and labor alone run $8,000–15,000 ($80–150/person). Add $2,000–4,500 for bar service, $1,000–2,500 for rentals, and $1,800–3,300 for gratuity (18–22% on food and labor). A mid-range wedding caterer for 100 people in most US cities will quote $12,000–16,000 all-in before the venue fee." }
    },
    {
      "@type": "Question", name: "What is included in a wedding catering package?",
      acceptedAnswer: { "@type": "Answer", text: "Most wedding catering packages include: cocktail hour appetizers, the main reception dinner (usually 2–3 courses), service staff, food setup and cleanup, and basic serving equipment. What is often NOT included: the wedding cake cutting fee ($1–3/person), bar and alcohol (usually quoted separately), table and chair rentals, linens, wedding cake, and gratuity. Always ask for an itemized quote and confirm exactly what is and is not in the per-person price before comparing caterers." }
    },
    {
      "@type": "Question", name: "Is buffet or plated dinner cheaper for weddings?",
      acceptedAnswer: { "@type": "Answer", text: "Buffet catering is typically 15–25% less expensive than plated dinners for weddings. A buffet for 100 guests might cost $8,000–12,000 while the equivalent plated service runs $11,000–17,000. The difference is labor: plated dinners require more servers to time courses and clear plates. However, buffets tend to use more food (guests go back for seconds), which partially offsets the labor savings. Stations and family-style service fall between the two in cost." }
    },
    {
      "@type": "Question", name: "How much should I budget for wedding catering?",
      acceptedAnswer: { "@type": "Answer", text: "A realistic wedding catering budget for most US couples is $150–225 per person all-in (food, labor, bar, rentals, tax, and gratuity). For a 100-person wedding that is $15,000–22,500. On the low end, $75–100/person all-in is possible with drop-off buffet catering and a beer/wine-only bar. On the high end, full-service plated dinners with premium bar and rentals regularly exceed $250/person in major cities. Catering typically represents 30–40% of the total wedding budget." }
    },
  ],
};

const STYLE_TABLE = [
  { style: "Drop-off buffet (no staff)", pp: "$45–75/pp", per100: "$5,000–8,000", notes: "Setup only, no servers" },
  { style: "Buffet with attendants", pp: "$75–110/pp", per100: "$8,000–12,000", notes: "Staff replenish food stations" },
  { style: "Food stations", pp: "$85–130/pp", per100: "$9,500–14,000", notes: "Chef-manned stations" },
  { style: "Family-style service", pp: "$90–135/pp", per100: "$10,000–15,000", notes: "Platters at each table" },
  { style: "Plated dinner (2 courses)", pp: "$95–145/pp", per100: "$11,000–16,500", notes: "Full service staff" },
  { style: "Plated dinner (3–4 courses)", pp: "$120–175/pp", per100: "$14,000–20,000", notes: "Premium full service" },
  { style: "Cocktail reception only", pp: "$60–95/pp", per100: "$7,000–11,000", notes: "No seated dinner" },
];

const ADD_ONS = [
  { item: "Bar service (beer + wine)", cost: "$18–30/pp", note: "Most common add-on" },
  { item: "Full open bar", cost: "$30–55/pp", note: "Premium spirits included" },
  { item: "Cocktail hour appetizers", cost: "$12–25/pp", note: "Often not in base quote" },
  { item: "Late-night snack station", cost: "$8–18/pp", note: "Trending at receptions" },
  { item: "Cake cutting fee", cost: "$1–3/pp", note: "Charged by caterer, not bakery" },
  { item: "Table/chair/linen rental", cost: "$12–35/pp", note: "Varies by venue" },
  { item: "Gratuity", cost: "18–22% of subtotal", note: "Non-negotiable at most caterers" },
];

export default function WeddingCateringCostPage() {
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
          <Link href="/catering-pricing-calculator" className="ml-auto text-sm font-semibold text-orange-500 hover:text-orange-600 whitespace-nowrap">Catering Calculator →</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <Link href="/" className="hover:text-orange-500">Home</Link><span>›</span>
          <Link href="/blog" className="hover:text-orange-500">Blog</Link><span>›</span>
          <span className="text-gray-600">Wedding Catering Cost</span>
        </nav>

        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-bold bg-orange-100 text-orange-600 px-3 py-1 rounded-full">Catering</span>
            <span className="text-xs text-gray-400">7 min read · September 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-4">Wedding Catering Cost: Average Prices Per Person (2026)</h1>
          <p className="text-sm text-gray-400 mb-6">Last updated: September 29, 2026 · Reviewed by the MenuPricer Team</p>
          <p className="text-lg text-gray-500 leading-relaxed">Wedding catering is typically the largest single line item in a wedding budget. This guide breaks down what you will actually pay — by service style, guest count, and what is and is not included — so you can evaluate quotes accurately.</p>
        </div>

        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 mb-10">
          <p className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-3">Average wedding catering cost (2026)</p>
          <div className="grid grid-cols-3 gap-3 text-center text-sm">
            {[
              { label: "Buffet style", range: "$75–110", sub: "per person" },
              { label: "Plated dinner", range: "$95–175", sub: "per person" },
              { label: "100 guests all-in", range: "$15–22k", sub: "total" },
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
            <h2 className="text-2xl font-black text-gray-900 mb-5">Wedding catering cost by service style</h2>
            <p className="text-gray-600 mb-4">Service style is the single biggest cost driver. The price differences below are based on labor, not food: a plated dinner requires 1 server per 10–15 guests; a buffet needs 1 per 25–30.</p>
            <div className="overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full text-sm">
                <thead><tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-bold text-gray-700">Service style</th>
                  <th className="text-center px-4 py-3 font-bold text-orange-600">Per person</th>
                  <th className="text-center px-4 py-3 font-bold text-gray-700 hidden sm:table-cell">100 guests</th>
                  <th className="text-left px-4 py-3 font-bold text-gray-700 hidden sm:table-cell">Notes</th>
                </tr></thead>
                <tbody>
                  {STYLE_TABLE.map((row, i) => (
                    <tr key={i} className="border-b border-gray-100 last:border-0">
                      <td className="px-4 py-3 font-medium text-gray-800 text-xs sm:text-sm">{row.style}</td>
                      <td className="px-4 py-3 text-center font-black text-orange-600 text-xs whitespace-nowrap">{row.pp}</td>
                      <td className="px-4 py-3 text-center text-gray-600 text-xs hidden sm:table-cell">{row.per100}</td>
                      <td className="px-4 py-3 text-gray-500 text-xs hidden sm:table-cell">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-2">US averages for 2026. Food only — bar, rentals, and gratuity are additional. Cities like NYC, SF, and LA run 25–40% higher.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">What is not in that per-person price</h2>
            <p className="text-gray-600 mb-4">Most wedding caterers quote food and labor only. The items below are almost always billed separately and can add $40–100+ per person to the final bill.</p>
            <div className="overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full text-sm">
                <thead><tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-bold text-gray-700">Add-on</th>
                  <th className="text-center px-4 py-3 font-bold text-orange-600">Typical cost</th>
                  <th className="text-left px-4 py-3 font-bold text-gray-700 hidden sm:table-cell">Note</th>
                </tr></thead>
                <tbody>
                  {ADD_ONS.map((row, i) => (
                    <tr key={i} className="border-b border-gray-100 last:border-0">
                      <td className="px-4 py-3 font-medium text-gray-800">{row.item}</td>
                      <td className="px-4 py-3 text-center font-bold text-gray-700 text-xs">{row.cost}</td>
                      <td className="px-4 py-3 text-gray-500 text-xs hidden sm:table-cell">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">How to read a wedding catering quote</h2>
            <p className="text-gray-600 mb-4">Two quotes at the same per-person price can represent very different total bills. Before comparing caterers, confirm the following:</p>
            <div className="space-y-3">
              {[
                { q: "Is bar service included?", a: "Most quotes exclude alcohol. A beer-and-wine package adds $18–30/person; a full open bar adds $30–55/person." },
                { q: "What is the gratuity policy?", a: "Most caterers automatically add 18–22% to the food and labor subtotal. On a $14,000 quote, that is $2,520–3,080 extra." },
                { q: "Are rentals in or out?", a: "If the caterer provides tables, chairs, and linens, confirm they are in the quote. If not, budget $12–35/person separately." },
                { q: "Is there a minimum?", a: "Many caterers have a minimum spend of $5,000–15,000 regardless of guest count. Small weddings (under 50 guests) can end up paying a higher effective per-person rate as a result." },
                { q: "What is the overtime policy?", a: "If the reception runs long, hourly staffing fees apply — typically $25–50 per server per hour." },
              ].map(({ q, a }) => (
                <div key={q} className="bg-gray-50 rounded-xl p-4">
                  <p className="font-bold text-gray-900 text-sm mb-1">{q}</p>
                  <p className="text-gray-600 text-sm">{a}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Wedding catering cost by guest count</h2>
            <p className="text-gray-600 mb-4">The per-person rate often drops as guest count increases because fixed costs (chef travel, equipment loading, setup) spread across more covers.</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-sm">
              {[
                { guests: "50 guests", range: "$7,500–14,000", pp: "~$150–280/pp all-in" },
                { guests: "75 guests", range: "$10,000–18,000", pp: "~$133–240/pp all-in" },
                { guests: "100 guests", range: "$13,000–22,000", pp: "~$130–220/pp all-in" },
                { guests: "150 guests", range: "$18,000–30,000", pp: "~$120–200/pp all-in" },
              ].map(({ guests, range, pp }) => (
                <div key={guests} className="bg-orange-50 rounded-xl p-4">
                  <p className="font-black text-gray-900 text-sm">{guests}</p>
                  <p className="text-orange-600 font-bold text-sm mt-1">{range}</p>
                  <p className="text-xs text-gray-500 mt-1">{pp}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-3">All-in estimates include food, labor, bar (beer + wine), basic rentals, and gratuity. Excludes venue fee, sales tax, and wedding cake.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">5 ways to reduce wedding catering costs</h2>
            <div className="space-y-3">
              {[
                { tip: "Choose buffet or stations over plated service", detail: "The same food served buffet-style typically costs 20–30% less because fewer servers are needed. Guests at most weddings prefer the flexibility anyway." },
                { tip: "Limit the open bar to beer and wine", detail: "A full open bar adds $30–55/person. A beer-and-wine package adds $18–30/person. For a 100-person wedding, that difference is $1,200–2,500." },
                { tip: "Cut the cocktail hour", detail: "A cocktail hour with passed appetizers adds $12–25/person. A simple grazing table or display is far less expensive and serves the same social function." },
                { tip: "Book on an off-peak day or month", detail: "Saturday night in June is the most expensive slot. Friday evening and Sunday afternoon weddings sometimes qualify for 10–15% caterer discounts." },
                { tip: "Negotiate the minimum, not the per-person rate", detail: "Caterers are more flexible on their minimums than their published per-person prices. Ask whether they can reduce the minimum for a guest count below their standard threshold." },
              ].map(({ tip, detail }) => (
                <div key={tip} className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-orange-500 text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">✓</span>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{tip}</p>
                    <p className="text-gray-500 text-sm">{detail}</p>
                  </div>
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
            <h2 className="text-xl font-black text-gray-900 mb-2">Calculate your catering budget</h2>
            <p className="text-gray-600 text-sm mb-4">Use the free MenuPricer catering calculator to estimate food costs and per-person pricing for any event size.</p>
            <Link href="/catering-pricing-calculator" className="inline-block bg-orange-500 text-white font-bold px-6 py-3 rounded-xl hover:bg-orange-600 transition-colors text-sm">Open Catering Calculator →</Link>
          </section>

          <section className="border-t border-gray-100 pt-8">
            <h2 className="text-lg font-black text-gray-900 mb-4">Related guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: "/blog/catering-cost-per-person", title: "Catering Cost Per Person: All Event Types" },
                { href: "/blog/catering-for-100-people", title: "Catering for 100 People: Full Cost Guide" },
                { href: "/blog/catering-pricing-guide", title: "How to Price Catering Services" },
                { href: "/blog/how-to-start-a-catering-business", title: "How to Start a Catering Business" },
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
