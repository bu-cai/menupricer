import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "How to Start a Catering Business: Startup Costs, Pricing & Business Plan",
  description: "How to start a catering business from scratch — startup costs, catering business plan template, pricing strategy, licenses, and how to find your first clients.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/how-to-start-a-catering-business" },
  openGraph: {
    title: "How to Start a Catering Business: Startup Costs, Pricing & Business Plan",
    description: "Complete guide to starting a catering business — costs, pricing, licensing, and business plan tips.",
    url: "https://www.aimenupricer.com/blog/how-to-start-a-catering-business",
  },
};

const SCHEMA = {
  "@context": "https://schema.org", "@type": "BlogPosting",
  headline: "How to Start a Catering Business: Startup Costs, Pricing & Business Plan",
  description: "Step-by-step guide to starting a catering business, including startup costs, catering business plan, pricing strategy, licensing requirements, and marketing tips.",
  author: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  publisher: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  datePublished: "2026-07-25", dateModified: "2026-07-25",
  mainEntityOfPage: "https://www.aimenupricer.com/blog/how-to-start-a-catering-business",
};

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.aimenupricer.com/blog" },
    { "@type": "ListItem", position: 3, name: "How to Start a Catering Business", item: "https://www.aimenupricer.com/blog/how-to-start-a-catering-business" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does it cost to start a catering business?", acceptedAnswer: { "@type": "Answer", text: "Starting a catering business costs $10,000–50,000 for a home-based or small operation, and $50,000–150,000 for a commercial kitchen setup. The biggest variables are whether you rent or build a commercial kitchen, the quantity and quality of equipment you buy upfront, and whether you hire staff or start solo. Many caterers start with $15,000–30,000 by renting kitchen space and buying used equipment." } },
    { "@type": "Question", name: "How do I price catering?", acceptedAnswer: { "@type": "Answer", text: "Price catering by calculating your food cost per person (ingredient cost ÷ guest count), then multiply by 3–4x for a food cost target of 25–35%. Add a labor charge (typically $20–35/person for seated dinners), and factor in rental, transportation, and service fees. Most catering businesses charge $25–150 per person depending on event type and cuisine. Always price by the event, not the hour — and calculate your actual costs first." } },
    { "@type": "Question", name: "Do I need a license to start a catering business?", acceptedAnswer: { "@type": "Answer", text: "Yes. Most states require: (1) a business license from your city/county, (2) a food handler's permit or food manager certification for you and your staff, (3) a catering or mobile food service license from your state health department, and (4) commercial liability insurance. Some states require you to operate from a licensed commercial kitchen — you cannot legally prepare food at home for paying clients in most jurisdictions. Check your specific state's department of health for exact requirements." } },
    { "@type": "Question", name: "How do I write a catering business plan?", acceptedAnswer: { "@type": "Answer", text: "A catering business plan should cover: (1) Executive summary — what you do and why it will work, (2) Market analysis — who you serve and who the competition is, (3) Services — your event types and menu offerings, (4) Pricing strategy — how you price by event type, (5) Operations plan — kitchen setup, staffing, equipment, (6) Marketing plan — how you acquire clients, (7) Financial projections — startup costs, monthly expenses, revenue targets, and break-even analysis. Keep it focused: a 10-page plan beats a 40-page document no one reads." } },
    { "@type": "Question", name: "Is catering a profitable business?", acceptedAnswer: { "@type": "Answer", text: "Yes — catering profit margins of 10–15% net are achievable, and some caterers hit 20%+. The keys to profitability are: accurate food cost calculation (target 28–35%), efficient staffing ratios (1 staff per 15–20 guests for buffet, 1 per 8–10 for plated dinner), minimum event size requirements, and pricing that covers your overhead even on slow weeks. Caterers who underestimate food cost or staffing are the ones who go out of business — price every event before you agree to it." } },
  ],
};

const STEPS = [
  { num: "1", title: "Choose Your Catering Niche", desc: "Corporate lunches, weddings, private events, and food festivals all have different margins and sales cycles. Corporate catering offers steady volume but lower prices. Weddings command premium prices but require months of lead time. Pick the niche that fits your skills and target customers before writing a business plan." },
  { num: "2", title: "Write a Simple Business Plan", desc: "Cover: what events you cater, your pricing model, startup costs, target monthly revenue, and break-even point. You don't need a 40-page document — a clear one-page financial model showing when you turn profitable is more useful than an executive summary with no numbers." },
  { num: "3", title: "Register Your Business & Get Licensed", desc: "Register as an LLC or sole proprietor with your state. Get a business license, food handler certification, and catering or mobile food service permit from your health department. Secure commercial general liability insurance ($1M minimum). Do not skip this step — operating without proper licensing puts every event at risk." },
  { num: "4", title: "Set Up Your Commercial Kitchen", desc: "Most states require food to be prepared in a licensed commercial kitchen. Options: rent shared commercial kitchen space ($15–40/hour), lease a dedicated kitchen unit ($500–2,000/month), or use a restaurant's kitchen during off-hours. Starting with a shared kitchen is the most capital-efficient way to launch." },
  { num: "5", title: "Buy Equipment", desc: "Prioritize: sheet pans and chafing dishes, a large capacity cooler or refrigeration unit, serving equipment (utensils, serving spoons, tongs), and transport containers. Buy used where possible — restaurant auction sites and Facebook Marketplace regularly have commercial equipment at 10–30% of retail price." },
  { num: "6", title: "Price Your Catering Menus", desc: "Calculate the ingredient cost for each menu package per person. Your food cost should be 28–35% of your selling price. Add a labor charge, transportation fee, and rental markup. Use our catering pricing calculator to run the numbers before quoting any client." },
  { num: "7", title: "Find Your First Clients", desc: "Start with your network — friends' weddings, local corporate offices, community events. Build a portfolio from your first 3–5 events (document with photos and reviews). Join local wedding vendor networks, contact event venues about preferred caterer relationships, and set up a Google Business Profile. Your first clients will come from people who already trust you." },
  { num: "8", title: "Systemize and Scale", desc: "Once you have a repeatable process, document it: event prep checklist, packing list, day-of timeline, staff assignments. This is what lets you take on multiple events simultaneously and hire staff without being physically present at every task." },
];

export default function HowToStartCateringBusinessPage() {
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
          <Link href="/catering-pricing-calculator" className="ml-auto text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors">Catering Pricing Tool →</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <Link href="/" className="hover:text-gray-600">Home</Link>
          <span>›</span>
          <Link href="/blog" className="hover:text-gray-600">Blog</Link>
          <span>›</span>
          <span className="text-gray-600">How to Start a Catering Business</span>
        </nav>

        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">Catering</div>
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-4">
          How to Start a Catering Business: Startup Costs, Pricing & Business Plan
        </h1>
        <p className="text-sm text-gray-400 mb-6">Last updated: July 25, 2026</p>
        <p className="text-lg text-gray-500 leading-relaxed mb-8">
          Starting a catering business is one of the lowest-overhead ways to enter the food industry — but most new caterers fail because they underestimate costs or underprice their events. This guide covers everything: startup budget, licensing, pricing, and how to land your first clients.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Catering Business Startup Costs</h2>
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
              <p className="text-2xl font-black text-green-600">$10k–30k</p>
              <p className="text-sm text-gray-600 mt-1">Home-based / shared kitchen setup</p>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 text-center">
              <p className="text-2xl font-black text-orange-500">$30k–75k</p>
              <p className="text-sm text-gray-600 mt-1">Leased kitchen + proper equipment</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
              <p className="text-2xl font-black text-gray-700">$75k–150k</p>
              <p className="text-sm text-gray-600 mt-1">Full commercial kitchen build-out</p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Cost Item</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Low</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">High</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Commercial kitchen (6-month deposit + first month)", "$1,500", "$12,000"],
                  ["Equipment (used: pans, chafing dishes, coolers)", "$2,000", "$15,000"],
                  ["Serving equipment & smallwares", "$500", "$3,000"],
                  ["Business registration & licenses", "$300", "$1,500"],
                  ["Food handler certifications", "$100", "$500"],
                  ["Insurance (first 6 months)", "$600", "$2,500"],
                  ["Website & marketing materials", "$300", "$3,000"],
                  ["Initial food inventory (2-3 events)", "$500", "$3,000"],
                  ["Vehicle / transport setup", "$0", "$5,000"],
                  ["Emergency fund (3 months overhead)", "$2,000", "$8,000"],
                ].map(([item, low, high], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 text-gray-800 border-b border-gray-100">{item}</td>
                    <td className="px-4 py-3 text-right font-semibold text-green-700 border-b border-gray-100">{low}</td>
                    <td className="px-4 py-3 text-right font-semibold text-orange-600 border-b border-gray-100">{high}</td>
                  </tr>
                ))}
                <tr className="bg-orange-50">
                  <td className="px-4 py-3 font-black text-gray-900 border-t-2 border-orange-200">TOTAL</td>
                  <td className="px-4 py-3 text-right font-black text-green-700 border-t-2 border-orange-200">~$7,800</td>
                  <td className="px-4 py-3 text-right font-black text-orange-600 border-t-2 border-orange-200">~$53,500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">8 Steps to Start a Catering Business</h2>
          <div className="space-y-4">
            {STEPS.map((step) => (
              <div key={step.num} className="flex gap-4 border border-gray-200 rounded-xl p-5">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-500 text-white font-black text-lg rounded-full flex items-center justify-center">{step.num}</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">How to Price Catering Events</h2>
          <p className="text-gray-600 mb-5">The biggest mistake new caterers make is pricing based on what they think sounds reasonable — not on what their actual costs require. Here is the right way to price a catering event:</p>
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-4">
            <h3 className="font-bold text-gray-900 mb-3">Example: 50-Person Buffet Dinner</h3>
            <div className="space-y-2 text-sm">
              {[
                ["Food cost (ingredients)", "$7.50/person", "$375 total"],
                ["Labor (3 staff × 6 hrs × $20/hr)", "$7.20/person", "$360 total"],
                ["Equipment rental", "$2.00/person", "$100 total"],
                ["Transport & supplies", "$1.00/person", "$50 total"],
                ["Overhead (kitchen, insurance, admin)", "$2.30/person", "$115 total"],
                ["Total cost", "$20.00/person", "$1,000 total"],
                ["Selling price (30% food cost target)", "$25.00/person", "$1,250 total"],
                ["Gross profit (20% margin)", "$5.00/person", "$250 total"],
              ].map(([label, per, total], i) => (
                <div key={i} className={`flex justify-between py-2 ${i >= 6 ? "border-t border-orange-200 font-bold" : "border-b border-orange-100"}`}>
                  <span className={i >= 6 ? "text-gray-900" : "text-gray-700"}>{label}</span>
                  <span className="text-right">
                    <span className="text-orange-600 font-semibold mr-4">{per}</span>
                    <span className="text-gray-500 w-20 inline-block text-right">{total}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-gray-600 text-sm">Use our <Link href="/catering-pricing-calculator" className="text-orange-500 hover:underline font-medium">catering pricing calculator</Link> to run these numbers for any event size and menu combination.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Catering Business Plan Outline</h2>
          <p className="text-gray-600 mb-4">Your business plan does not need to be long — it needs to answer these questions clearly:</p>
          <div className="space-y-3">
            {[
              { section: "Executive Summary", content: "What type of catering you do, who your clients are, and your one-line competitive advantage" },
              { section: "Market Analysis", content: "Who else is catering in your area, what events are underserved, and why your approach wins" },
              { section: "Services & Menu", content: "What event types you take, menu packages with price ranges, any signature offerings" },
              { section: "Pricing Model", content: "How you charge (per person, flat fee, or package), minimum event size, deposit policy" },
              { section: "Operations Plan", content: "Kitchen setup, equipment list, staff model, event workflow from inquiry to invoice" },
              { section: "Marketing Plan", content: "How you get the first 10 clients, which platforms to build presence on, referral strategy" },
              { section: "Financial Projections", content: "Startup costs, monthly fixed expenses, target revenue by month 3 / 6 / 12, break-even event count" },
            ].map((row, i) => (
              <div key={i} className="flex gap-3 border-l-4 border-orange-400 pl-4 py-2">
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{row.section}</p>
                  <p className="text-gray-600 text-sm">{row.content}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-orange-500 rounded-2xl p-8 text-center mb-10">
          <h2 className="text-2xl font-bold text-white mb-2">Price Your Catering Events Accurately</h2>
          <p className="text-orange-100 mb-5">Enter your ingredient costs, guest count, and labor hours — get the right price per person so every event is profitable from day one.</p>
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
              { href: "/blog/catering-cost-per-person", title: "Catering Cost Per Person", desc: "What caterers actually charge and how to calculate your per-person price." },
              { href: "/blog/food-cost-formula", title: "Food Cost Formula", desc: "Calculate food cost percentage for any dish or event menu." },
              { href: "/catering-pricing-calculator", title: "Catering Pricing Calculator", desc: "Free tool: enter your costs and get the right price per person." },
              { href: "/blog/food-truck-startup-costs", title: "Food Truck Startup Costs", desc: "Starting a food truck vs a catering business — costs compared." },
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