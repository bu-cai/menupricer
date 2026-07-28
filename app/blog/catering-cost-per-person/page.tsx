import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "Catering Cost Per Person: Prices for 50, 100 & 150 Guests (2026)",
  description: "How much does catering cost per person? Average catering prices for 50, 100, and 150 guests — by service style, event type, and what is included in the quote.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/catering-cost-per-person" },
  openGraph: {
    title: "Catering Cost Per Person: Prices for 50, 100 & 150 Guests (2026)",
    description: "Average catering costs per person for different event sizes and service styles — what to expect and what drives the price.",
    url: "https://www.aimenupricer.com/blog/catering-cost-per-person",
  },
};

const SCHEMA = {
  "@context": "https://schema.org", "@type": "BlogPosting",
  headline: "Catering Cost Per Person: Prices for 50, 100 & 150 Guests (2026)",
  description: "What catering costs per person for different event sizes, service styles, and event types — with average price ranges and what is included.",
  author: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  publisher: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  datePublished: "2026-07-24", dateModified: "2026-07-24",
  mainEntityOfPage: "https://www.aimenupricer.com/blog/catering-cost-per-person",
};

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.aimenupricer.com/blog" },
    { "@type": "ListItem", position: 3, name: "Catering Cost Per Person", item: "https://www.aimenupricer.com/blog/catering-cost-per-person" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does catering cost per person?", acceptedAnswer: { "@type": "Answer", text: "Catering costs per person range from $20–30 for simple drop-off buffets to $150–300+ for full-service plated dinners with staffing, rentals, and bar service. The most common range for a corporate lunch or casual social event is $35–75 per person. Wedding catering typically runs $85–175 per person for full-service events. Breakfast and brunch catering is generally $25–55 per person. Cocktail-style reception catering (appetizers, no seated meal) runs $45–95 per person." } },
    { "@type": "Question", name: "How much does catering for 50 people cost?", acceptedAnswer: { "@type": "Answer", text: "Catering for 50 people costs approximately $1,500–$7,500 total depending on the service style. A simple buffet lunch for 50 runs $1,500–3,000 ($30–60/person). A seated dinner with servers and rentals for 50 runs $4,000–7,500 ($80–150/person). Corporate box lunch delivery for 50 runs $700–1,500 ($14–30/person). The final quote also depends on your location, the caterer's minimum order requirements, and whether rentals (tables, linens, chairs) are included." } },
    { "@type": "Question", name: "How much does catering for 100 people cost?", acceptedAnswer: { "@type": "Answer", text: "Catering for 100 people costs approximately $3,000–$15,000 total. A casual buffet lunch runs $3,000–6,000 ($30–60/person). A full-service dinner with servers and bar runs $8,000–15,000 ($80–150/person). Wedding catering for 100 guests typically starts at $8,000–10,000 all-in and can reach $25,000+ for premium catering. Most caterers have lower per-person rates at 100 guests vs 50 because fixed costs (staff travel, vehicle, setup) spread across more covers." } },
    { "@type": "Question", name: "What is included in a catering quote?", acceptedAnswer: { "@type": "Answer", text: "A standard catering quote includes: food and ingredients, preparation and cooking labor, delivery and setup, and serving staff during the event (for full-service catering). It typically does NOT include: venue rental, table/chair rentals, linens, alcohol (often quoted separately), gratuity (usually added as 18–22%), and sales tax. Always ask what is and is not included before comparing quotes from different caterers — the same per-person price can represent very different levels of service." } },
    { "@type": "Question", name: "Does catering cost less for larger groups?", acceptedAnswer: { "@type": "Answer", text: "Yes, generally. Catering cost per person decreases as group size increases because fixed costs (chef labor, vehicle, equipment) spread across more guests. A caterer might charge $65/person for 50 guests and $50/person for 150 guests. However, the savings plateau — a group of 200 and a group of 500 might have similar per-person costs because both require similar staffing ratios and equipment scale. Minimums also play a role: many caterers have a minimum order of $1,000–$2,500, which can make very small events (under 20 guests) disproportionately expensive." } },
  ],
};

const PRICE_TABLE = [
  { style: "Drop-off / delivery (no staff)", per50: "$700–1,500", per100: "$1,200–2,800", per150: "$1,600–4,000", pp: "$14–28/pp" },
  { style: "Buffet (with setup staff, no servers)", per50: "$1,500–3,000", per100: "$2,800–5,500", per150: "$4,000–7,500", pp: "$28–55/pp" },
  { style: "Buffet + attendants (food replenished)", per50: "$2,200–4,000", per100: "$4,000–7,000", per150: "$5,500–10,000", pp: "$40–70/pp" },
  { style: "Plated dinner (full service staff)", per50: "$4,000–7,500", per100: "$7,500–14,000", per150: "$11,000–20,000", pp: "$80–140/pp" },
  { style: "Cocktail reception (passed appetizers)", per50: "$2,500–5,000", per100: "$4,500–8,500", per150: "$6,500–12,000", pp: "$50–85/pp" },
  { style: "Wedding dinner (premium service)", per50: "$5,000–10,000", per100: "$9,000–18,000", per150: "$13,000–25,000", pp: "$95–170/pp" },
];

const EVENT_TYPES = [
  { type: "Corporate lunch", typical: "$30–55/pp", note: "Boxed, buffet, or working lunch" },
  { type: "Corporate dinner / gala", typical: "$65–130/pp", note: "Often plated with AV and bar" },
  { type: "Wedding reception", typical: "$85–175/pp", note: "Varies hugely by region and tier" },
  { type: "Birthday party", typical: "$35–85/pp", note: "Depends on formality" },
  { type: "Graduation party", typical: "$25–60/pp", note: "Usually buffet style" },
  { type: "Holiday party", typical: "$45–95/pp", note: "Often includes bar" },
  { type: "Breakfast / brunch", typical: "$25–55/pp", note: "Lower food cost, popular format" },
  { type: "Cocktail reception only", typical: "$45–90/pp", note: "No seated dinner, passed apps" },
];

export default function CateringCostPerPersonPage() {
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
          <span className="text-gray-600">Catering Cost Per Person</span>
        </nav>
        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-bold bg-orange-100 text-orange-600 px-3 py-1 rounded-full">Catering</span>
            <span className="text-xs text-gray-400">6 min read · July 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-4">Catering Cost Per Person: Prices for 50, 100 & 150 Guests (2026)</h1>
        <p className="text-sm text-gray-400 mb-6">Last updated: July 24, 2026 · Reviewed by the MenuPricer Team</p>
          <p className="text-lg text-gray-500 leading-relaxed">Catering prices vary widely depending on service style, event type, and what is included in the quote. This guide breaks down average costs per person for different group sizes so you know what to expect before you call a caterer.</p>
        </div>

        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 mb-10">
          <p className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-3">Average catering cost per person (2026)</p>
          <div className="grid grid-cols-3 gap-3 text-center text-sm">
            {[
              { label: "Simple buffet", range: "$28–55", sub: "per person" },
              { label: "Full-service dinner", range: "$80–140", sub: "per person" },
              { label: "Wedding catering", range: "$95–175", sub: "per person" },
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
            <h2 className="text-2xl font-black text-gray-900 mb-5">Catering prices by service style and group size</h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full text-sm">
                <thead><tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-bold text-gray-700">Service style</th>
                  <th className="text-center px-4 py-3 font-bold text-gray-700">50 guests</th>
                  <th className="text-center px-4 py-3 font-bold text-gray-700">100 guests</th>
                  <th className="text-center px-4 py-3 font-bold text-gray-700 hidden sm:table-cell">150 guests</th>
                  <th className="text-center px-4 py-3 font-bold text-orange-600">Per person</th>
                </tr></thead>
                <tbody>
                  {PRICE_TABLE.map((row, i) => (
                    <tr key={i} className="border-b border-gray-100 last:border-0">
                      <td className="px-4 py-3 font-medium text-gray-800 text-xs sm:text-sm">{row.style}</td>
                      <td className="px-4 py-3 text-center text-gray-600 text-xs">{row.per50}</td>
                      <td className="px-4 py-3 text-center text-gray-600 text-xs">{row.per100}</td>
                      <td className="px-4 py-3 text-center text-gray-600 text-xs hidden sm:table-cell">{row.per150}</td>
                      <td className="px-4 py-3 text-center font-black text-orange-600 text-xs whitespace-nowrap">{row.pp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-2">Prices are US averages for 2026. Major cities (NYC, SF, LA) run 25–40% higher. Prices exclude gratuity (18–22%), alcohol, and venue rental unless noted.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-5">Average catering cost by event type</h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full text-sm">
                <thead><tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-bold text-gray-700">Event type</th>
                  <th className="text-center px-4 py-3 font-bold text-orange-600">Typical range</th>
                  <th className="text-left px-4 py-3 font-bold text-gray-700 hidden sm:table-cell">Notes</th>
                </tr></thead>
                <tbody>
                  {EVENT_TYPES.map((row, i) => (
                    <tr key={i} className="border-b border-gray-100 last:border-0">
                      <td className="px-4 py-3 font-medium text-gray-800">{row.type}</td>
                      <td className="px-4 py-3 text-center font-black text-orange-600">{row.typical}</td>
                      <td className="px-4 py-3 text-gray-500 text-xs hidden sm:table-cell">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">What is included in a catering quote — and what is not</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="bg-green-50 rounded-xl p-4">
                <p className="font-black text-green-800 mb-3">Usually included</p>
                <div className="space-y-1 text-green-700">
                  {["Food ingredients and preparation", "Delivery and transportation", "Setup of food service area", "Serving staff (full-service only)", "Disposable serving ware (buffet)", "Cleanup of food prep area"].map(t => <p key={t}>✓ {t}</p>)}
                </div>
              </div>
              <div className="bg-red-50 rounded-xl p-4">
                <p className="font-black text-red-700 mb-3">Usually NOT included</p>
                <div className="space-y-1 text-red-600">
                  {["Alcohol and bar service", "Table, chair, and linen rentals", "Venue fee", "Gratuity (typically 18–22%)", "Sales tax", "Parking or travel fees (sometimes)"].map(t => <p key={t}>✗ {t}</p>)}
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-3">Always ask your caterer for a full itemized quote. A $55/person base price with gratuity, tax, rentals, and bar can easily become $90–110/person all-in.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">What drives catering prices up or down</h2>
            <div className="space-y-3">
              {[
                { t: "Service style is the biggest factor", b: "Drop-off vs staffed buffet vs plated service can triple the cost. Food is often 40–50% of the total quote; labor is the other major component. Full-service staffing (servers, bartenders, captains) adds $20–50/person to the cost." },
                { t: "Menu complexity and ingredient quality", b: "A steak and lobster menu costs more to produce than a chicken and pasta menu, and that difference flows through to the quote. Premium catering companies also use higher-quality base ingredients that show in flavor and in cost." },
                { t: "Guest count and minimum orders", b: "Most caterers have a minimum order ($1,000–$3,000 is common). At 20 guests you may hit that minimum and pay far above the nominal per-person rate. At 150 guests, you benefit from economies of scale — fixed costs like staffing and transport spread further." },
                { t: "Location and travel", b: "Urban catering (NYC, SF, LA, Chicago) runs 25–40% higher than national averages due to higher ingredient, labor, and logistics costs. Remote venues often add a travel or fuel surcharge." },
                { t: "Day of week and seasonality", b: "Saturday evening events cost more than Tuesday lunches. Peak wedding season (May–October) is often priced 10–20% above off-peak dates. Booking 6–12 months out gives you more options and sometimes better pricing." },
              ].map(({ t, b }) => (
                <div key={t} className="border-l-4 border-orange-300 pl-4">
                  <p className="font-bold text-gray-800 text-sm">{t}</p>
                  <p className="text-sm text-gray-500 mt-1">{b}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">For caterers: how to price your own services</h2>
            <p className="text-gray-600 leading-relaxed mb-4">If you are a caterer building your pricing, the guest-count tables above reflect market rates. Your job is to price high enough to cover your costs and margin while staying competitive. The food costing formula for catering:</p>
            <div className="bg-orange-50 rounded-xl p-5 text-sm font-mono mb-4">
              <p className="text-gray-800">Per-person price = (Food cost per person ÷ 0.30) + Labor allocation + Overhead share</p>
              <p className="text-gray-500 mt-2">Target 25–30% food cost, then layer on labor and overhead to arrive at your quote.</p>
            </div>
            <Link href="/blog/catering-pricing-guide" className="inline-flex items-center gap-2 text-orange-500 font-bold text-sm hover:text-orange-600">
              Read the full catering pricing guide for operators →
            </Link>
          </section>

          <section className="bg-orange-500 rounded-2xl p-7 text-white">
            <h2 className="text-xl font-black mb-2">Calculate your catering cost and quote</h2>
            <p className="text-orange-100 text-sm mb-5">MenuPricer helps caterers price every menu item by food cost — so your per-person quotes are always built on accurate ingredient costs, not guesswork.</p>
            <Link href="/catering-pricing-calculator" className="inline-block bg-white text-orange-600 font-black px-6 py-3 rounded-xl hover:bg-orange-50 transition-colors">Open Catering Pricing Calculator →</Link>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-6">FAQ</h2>
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
                { href: "/blog/catering-pricing-guide", title: "Catering Pricing Guide for Operators", desc: "How to set your catering prices and quote profitably." },
                { href: "/blog/food-cost-percentage-calculator", title: "Food Cost Percentage", desc: "Calculate your food cost % for any dish." },
                { href: "/blog/food-cost-percentage-calculator", title: "How to Do Food Costing", desc: "Step-by-step food costing process." },
                { href: "/blog/prime-cost-restaurant", title: "What Is Prime Cost?", desc: "Food cost + labor = prime cost explained." },
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
            <Link href="/catering-pricing-calculator" className="hover:text-orange-500">Catering Calculator</Link>
            <Link href="/blog" className="hover:text-orange-500">All Guides</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}