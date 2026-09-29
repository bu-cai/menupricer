import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "Catering for 100 People: Cost, Menu & Planning Guide (2026)",
  description: "Catering for 100 people costs $3,000–15,000+ depending on service style. Full breakdown of food, labor, menu options, and how to plan a 100-person event.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/catering-for-100-people" },
  openGraph: {
    title: "Catering for 100 People: Cost, Menu & Planning Guide (2026)",
    description: "How much does catering for 100 people cost? $3,000–15,000+ depending on service style. Full cost breakdown, menu planning, and what to ask your caterer.",
    url: "https://www.aimenupricer.com/blog/catering-for-100-people",
    type: "article",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "MenuPricer — AI-powered menu pricing for restaurants" }],
  },
};

const SCHEMA = {
  "@context": "https://schema.org", "@type": "BlogPosting",
  headline: "Catering for 100 People: Cost, Menu & Planning Guide (2026)",
  description: "How much catering for 100 people costs, what menu options fit different budgets, and how to plan and book catering for a 100-guest event.",
  author: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  publisher: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  datePublished: "2026-09-29", dateModified: "2026-09-29",
  mainEntityOfPage: "https://www.aimenupricer.com/blog/catering-for-100-people",
};

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.aimenupricer.com/blog" },
    { "@type": "ListItem", position: 3, name: "Catering for 100 People", item: "https://www.aimenupricer.com/blog/catering-for-100-people" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question", name: "How much does catering for 100 people cost?",
      acceptedAnswer: { "@type": "Answer", text: "Catering for 100 people costs approximately $3,000–15,000 total, depending on service style. A drop-off buffet lunch costs $2,000–4,000 ($20–40/person). A buffet dinner with setup staff runs $4,000–7,000 ($40–70/person). A plated sit-down dinner with full service costs $8,000–15,000 ($80–150/person). Wedding catering for 100 guests typically starts at $10,000 all-in and can reach $20,000+ with bar service, rentals, and gratuity." }
    },
    {
      "@type": "Question", name: "How much food do you need for 100 people?",
      acceptedAnswer: { "@type": "Answer", text: "For a buffet dinner serving 100 people, plan approximately 6–8 oz of protein per person (37–50 lbs total), 4–5 oz of each side dish (25–30 lbs each), one dinner roll per person, and salad for 80–85% of guests (buffets always have waste). For a plated dinner, portion control is easier: 6–8 oz protein, 4–5 oz starch, 3–4 oz vegetables per plate. Add 5–10% overage for buffets; plated dinners can order closer to exact count." }
    },
    {
      "@type": "Question", name: "How many servers do you need for 100 people?",
      acceptedAnswer: { "@type": "Answer", text: "For a buffet with 100 guests, plan for 3–4 servers to run food stations, clear plates, and handle drinks. For a plated sit-down dinner for 100, plan for 6–8 servers (1 per 12–15 guests) plus a captain. For a cocktail reception with 100 guests, plan for 4–5 servers passing appetizers and 2–3 bar staff if you have a bar. Most full-service caterers include staffing in their per-person price; verify this before comparing quotes." }
    },
    {
      "@type": "Question", name: "What is the cheapest way to cater for 100 people?",
      acceptedAnswer: { "@type": "Answer", text: "The most cost-effective options for catering 100 people are: (1) Drop-off catering from a restaurant or catering company ($20–35/person, no service staff); (2) Food truck catering ($15–30/person for simple formats); (3) DIY catering from a wholesale club (Costco, Sam's Club — food only, no service, roughly $10–20/person in food cost); (4) Hiring a caterer for food delivery only and using volunteers to serve. Full-service sit-down catering is always the most expensive option." }
    },
    {
      "@type": "Question", name: "How far in advance should you book catering for 100 people?",
      acceptedAnswer: { "@type": "Answer", text: "Book catering for a 100-person event at least 4–8 weeks in advance for a weekday corporate event, and 4–6 months in advance for a wedding or weekend social event. Popular caterers book out 6–12 months for peak season dates (May–October). The more guests and the higher the service level, the earlier you should book. Most caterers will hold a date with a small deposit (10–25%) and finalize the menu and final headcount closer to the event." }
    },
  ],
};

const BUDGET_TIERS = [
  { tier: "Budget ($20–40/pp)", total: "$2,000–4,000", style: "Drop-off buffet or box lunch", includes: "Food delivery only, no service staff", bestFor: "Corporate lunch, informal party" },
  { tier: "Mid-range ($40–80/pp)", total: "$4,000–8,000", style: "Buffet with setup and serving staff", includes: "Food, delivery, setup, staff to replenish", bestFor: "Corporate dinner, grad party, birthday" },
  { tier: "Full-service ($80–130/pp)", total: "$8,000–13,000", style: "Plated or stations with full staff", includes: "Food, labor, service, cleanup, some rentals", bestFor: "Wedding, gala, upscale corporate event" },
  { tier: "Premium ($130–175/pp+)", total: "$13,000–18,000+", style: "Multi-course plated with bar", includes: "All of above plus premium bar, florals, linens", bestFor: "Weddings, charity galas, award dinners" },
];

const FOOD_QUANTITIES = [
  { item: "Protein (beef, chicken, fish)", amount: "6–8 oz per person", total100: "37–50 lbs" },
  { item: "Starch (pasta, rice, potatoes)", amount: "4–5 oz per person", total100: "25–31 lbs" },
  { item: "Vegetables / sides", amount: "3–4 oz per person", total100: "19–25 lbs" },
  { item: "Salad greens", amount: "2–3 oz per person", total100: "12–19 lbs" },
  { item: "Bread / rolls", amount: "1–2 pieces per person", total100: "100–200 pieces" },
  { item: "Dessert (individual portions)", amount: "1 portion per person", total100: "100–110 portions" },
  { item: "Coffee / tea", amount: "1.5–2 cups per person", total100: "150–200 cups" },
];

export default function CateringFor100PeoplePage() {
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
          <span className="text-gray-600">Catering for 100 People</span>
        </nav>

        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-bold bg-orange-100 text-orange-600 px-3 py-1 rounded-full">Catering</span>
            <span className="text-xs text-gray-400">8 min read · September 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-4">Catering for 100 People: Cost, Menu & Planning Guide (2026)</h1>
          <p className="text-sm text-gray-400 mb-6">Last updated: September 29, 2026 · Reviewed by the MenuPricer Team</p>
          <p className="text-lg text-gray-500 leading-relaxed">A 100-person event is one of the most common catering requests — large enough to negotiate rates, small enough that most caterers handle it comfortably. Here is everything you need to plan, price, and book catering for 100 guests.</p>
        </div>

        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 mb-10">
          <p className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-3">Catering for 100 people — cost summary</p>
          <div className="grid grid-cols-3 gap-3 text-center text-sm">
            {[
              { label: "Drop-off buffet", range: "$2,000–4,000", sub: "total" },
              { label: "Buffet + staff", range: "$4,000–8,000", sub: "total" },
              { label: "Plated dinner", range: "$8,000–15,000", sub: "total" },
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
            <h2 className="text-2xl font-black text-gray-900 mb-5">Catering budget tiers for 100 guests</h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full text-sm">
                <thead><tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-bold text-gray-700">Budget tier</th>
                  <th className="text-center px-4 py-3 font-bold text-orange-600">Total (100 guests)</th>
                  <th className="text-left px-4 py-3 font-bold text-gray-700 hidden sm:table-cell">What is included</th>
                  <th className="text-left px-4 py-3 font-bold text-gray-700 hidden md:table-cell">Best for</th>
                </tr></thead>
                <tbody>
                  {BUDGET_TIERS.map((row, i) => (
                    <tr key={i} className="border-b border-gray-100 last:border-0">
                      <td className="px-4 py-3 font-bold text-gray-800 text-xs sm:text-sm whitespace-nowrap">{row.tier}</td>
                      <td className="px-4 py-3 text-center font-black text-orange-600 text-xs whitespace-nowrap">{row.total}</td>
                      <td className="px-4 py-3 text-gray-600 text-xs hidden sm:table-cell">{row.includes}</td>
                      <td className="px-4 py-3 text-gray-500 text-xs hidden md:table-cell">{row.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-2">US averages for 2026. Excludes gratuity (18–22%), alcohol, and venue rental unless noted. Major cities run 20–35% higher.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">How much food do you need for 100 people?</h2>
            <p className="text-gray-600 mb-4">These quantities are planning guidelines for a full dinner. Adjust down 10–15% for a lunch event, up 10% for a buffet where guests serve themselves.</p>
            <div className="overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full text-sm">
                <thead><tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-bold text-gray-700">Food item</th>
                  <th className="text-center px-4 py-3 font-bold text-gray-700">Per person</th>
                  <th className="text-center px-4 py-3 font-bold text-orange-600">Total for 100</th>
                </tr></thead>
                <tbody>
                  {FOOD_QUANTITIES.map((row, i) => (
                    <tr key={i} className="border-b border-gray-100 last:border-0">
                      <td className="px-4 py-3 font-medium text-gray-800">{row.item}</td>
                      <td className="px-4 py-3 text-center text-gray-600 text-xs">{row.amount}</td>
                      <td className="px-4 py-3 text-center font-bold text-orange-600 text-xs">{row.total100}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Menu options by budget for 100 people</h2>
            <div className="space-y-4">
              {[
                {
                  budget: "Under $5,000 total",
                  label: "Budget",
                  color: "bg-gray-50",
                  options: [
                    "Sandwich and salad buffet: assorted deli sandwiches, two salads, fruit platter, cookies",
                    "Taco bar: choice of protein (chicken or beef), rice, beans, toppings, chips and salsa",
                    "Italian buffet: penne pasta with two sauces, garlic bread, caesar salad",
                    "BBQ drop-off: pulled pork or chicken, coleslaw, baked beans, cornbread",
                  ]
                },
                {
                  budget: "$5,000–9,000 total",
                  label: "Mid-range",
                  color: "bg-blue-50",
                  options: [
                    "Stationed buffet: carving station, two protein options, three sides, bread, dessert display",
                    "Mediterranean spread: hummus, falafel, grilled chicken, rice, salads, pita",
                    "Brunch buffet: eggs to order, pastries, fruit, mimosa station (bar add-on)",
                    "Asian stations: sushi rolls, hibachi chicken/shrimp, fried rice, miso soup",
                  ]
                },
                {
                  budget: "$9,000–15,000 total",
                  label: "Full-service",
                  color: "bg-orange-50",
                  options: [
                    "3-course plated dinner: appetizer, choice of two entrées, dessert, coffee service",
                    "Family-style service: multiple platters of proteins, sides, salads shared at each table",
                    "Chef-manned stations with sit-down dessert course",
                    "Cocktail reception + plated dinner: one hour of passed appetizers followed by seated entrée",
                  ]
                },
              ].map(({ budget, label, color, options }) => (
                <div key={budget} className={`${color} rounded-xl p-5`}>
                  <div className="flex items-center gap-2 mb-3">
                    <p className="font-black text-gray-900">{budget}</p>
                    <span className="text-xs font-bold bg-white text-gray-600 px-2 py-0.5 rounded-full border border-gray-200">{label}</span>
                  </div>
                  <ul className="space-y-1">
                    {options.map(o => <li key={o} className="text-sm text-gray-700 flex gap-2"><span className="text-orange-400 shrink-0">→</span>{o}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Planning checklist for a 100-person catered event</h2>
            <div className="space-y-2">
              {[
                { when: "4–6 months before (or earlier for weekends)", task: "Confirm the date, venue, and approximate guest count. Begin contacting caterers for availability." },
                { when: "2–3 months before", task: "Get itemized quotes from 3 caterers. Confirm what is and is not included in each quote. Check for minimum spend requirements." },
                { when: "6–8 weeks before", task: "Sign the contract and pay the deposit. Finalize the menu selection. Confirm dietary restrictions." },
                { when: "2–3 weeks before", task: "Give the caterer a guest count update. Confirm setup and arrival time, parking for the catering van, and kitchen access." },
                { when: "1 week before", task: "Final headcount. Reconfirm dietary accommodations. Verify rental delivery schedule if separate from catering." },
                { when: "Day before", task: "Confirm arrival time and point of contact. Verify gratuity policy — most caterers auto-add 18–22%." },
              ].map(({ when, task }) => (
                <div key={when} className="flex gap-3 text-sm">
                  <span className="text-orange-500 font-bold shrink-0 w-5">✓</span>
                  <div>
                    <p className="font-bold text-gray-900">{when}</p>
                    <p className="text-gray-500">{task}</p>
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
            <h2 className="text-xl font-black text-gray-900 mb-2">Estimate your catering budget</h2>
            <p className="text-gray-600 text-sm mb-4">Use the free MenuPricer catering calculator to estimate costs by guest count, service style, and food selections.</p>
            <Link href="/catering-pricing-calculator" className="inline-block bg-orange-500 text-white font-bold px-6 py-3 rounded-xl hover:bg-orange-600 transition-colors text-sm">Open Catering Calculator →</Link>
          </section>

          <section className="border-t border-gray-100 pt-8">
            <h2 className="text-lg font-black text-gray-900 mb-4">Related guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: "/blog/catering-cost-per-person", title: "Catering Cost Per Person: Full Breakdown" },
                { href: "/blog/wedding-catering-cost", title: "Wedding Catering Cost Guide" },
                { href: "/blog/catering-pricing-guide", title: "How to Price Catering Services" },
                { href: "/blog/catering-quote-template", title: "Catering Quote Template" },
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
