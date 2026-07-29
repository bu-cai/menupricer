import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "Catering Quote Template: How to Price and Present Any Event",
  description: "A catering quote needs to cover food, labor, equipment, and travel while still being clear enough for a client to say yes quickly. What line items to include and how to structure the numbers.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/catering-quote-template" },
  openGraph: {
    title: "Catering Quote Template: How to Price and Present Any Event",
    description: "What line items a catering quote needs and how to structure them so a client understands the price without a phone call.",
    url: "https://www.aimenupricer.com/blog/catering-quote-template",
  },
};

const SCHEMA = {
  "@context": "https://schema.org", "@type": "BlogPosting",
  headline: "Catering Quote Template: How to Price and Present Any Event",
  description: "A catering quote needs to cover food cost, labor, equipment rental, and travel while remaining clear enough for a client to approve without a follow-up call. The structure and line items that make that possible.",
  author: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  publisher: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  datePublished: "2026-07-28", dateModified: "2026-07-28",
  mainEntityOfPage: "https://www.aimenupricer.com/blog/catering-quote-template",
};

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.aimenupricer.com/blog" },
    { "@type": "ListItem", position: 3, name: "Catering Quote Template", item: "https://www.aimenupricer.com/blog/catering-quote-template" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What line items should a catering quote include?", acceptedAnswer: { "@type": "Answer", text: "Food cost per person, labor for prep and service staff, equipment rental if needed, travel or delivery cost, a service fee or gratuity line, and applicable tax should all appear as separate, clearly labeled items. A single bundled per-person price without a breakdown makes it hard for a client to understand what they're paying for and harder for you to adjust if the event scope changes." } },
    { "@type": "Question", name: "Should a catering quote show a per-person price or a total price?", acceptedAnswer: { "@type": "Answer", text: "Show both. Lead with the total price for the guaranteed headcount, since that's the number the client needs to approve a budget, but include the per-person breakdown so they can see how the total scales if headcount changes before the event." } },
    { "@type": "Question", name: "How long should a client have to accept a catering quote?", acceptedAnswer: { "@type": "Answer", text: "Most caterers set a validity window of 14-30 days, since ingredient costs and staff availability can shift beyond that. State the expiration date directly on the quote rather than leaving it open-ended, so both sides have a clear reference point if the client comes back weeks later." } },
  ],
};

const LINE_ITEMS = [
  { item: "Food cost per person", note: "Based on the specific menu selected and guaranteed headcount, calculated the same way as any dish costing — ingredients, yield, portion size." },
  { item: "Labor (prep + service staff)", note: "Hours needed for prep before the event plus on-site service staff for the event duration, priced at your actual labor cost, not a flat guess." },
  { item: "Equipment rental (if needed)", note: "Chafing dishes, linens, tables, or serving equipment not already owned — pass through actual rental cost plus any markup for the coordination effort." },
  { item: "Travel / delivery", note: "Mileage or a flat delivery fee for the venue distance, especially important for out-of-area bookings that aren't your standard service radius." },
  { item: "Service fee or gratuity", note: "A separate line for a service charge, clearly distinguished from a tip, so the client understands what's mandatory and what's discretionary." },
  { item: "Tax", note: "Applied per local requirements — don't bury this inside the per-person price where it becomes unclear what's taxable." },
];

export default function CateringQuoteTemplatePage() {
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
          <Link href="/" className="ml-auto text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors">AI Pricing Tool →</Link>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-12">
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <Link href="/" className="hover:text-orange-500">Home</Link><span>›</span>
          <Link href="/blog" className="hover:text-orange-500">Blog</Link><span>›</span>
          <span className="text-gray-600">Catering Quote Template</span>
        </nav>
        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-bold bg-orange-100 text-orange-600 px-3 py-1 rounded-full">Catering</span>
            <span className="text-xs text-gray-400">5 min read · July 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-4">
            Catering Quote Template: How to Price and Present Any Event
          </h1>
          <p className="text-sm text-gray-400 mb-6">Last updated: July 28, 2026 · Reviewed by the MenuPricer Team</p>
          <p className="text-lg text-gray-500 leading-relaxed">
            A good catering quote does two jobs at once: it needs to actually cover food, labor,
            equipment, and travel, and it needs to be clear enough that a client can say yes without a
            follow-up phone call to ask what's included.
          </p>
        </div>

        <div className="bg-gray-50 border-l-4 border-orange-400 rounded-r-xl p-5 mb-10">
          <p className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-2">Short answer</p>
          <p className="text-gray-700 leading-relaxed">
            Break the quote into separate line items — food per person, labor, equipment rental,
            travel, service fee, and tax — rather than one bundled per-person number. Show both the
            total price for the guaranteed headcount and the per-person rate, and set a clear
            acceptance window of 14-30 days since costs can shift beyond that.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-black text-gray-900 mb-5">The line items to include</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-bold text-gray-700">Line item</th>
                  <th className="text-left px-4 py-3 font-bold text-gray-700">What it covers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {LINE_ITEMS.map((l) => (
                  <tr key={l.item}>
                    <td className="px-4 py-3 font-semibold text-gray-800 align-top">{l.item}</td>
                    <td className="px-4 py-3 text-gray-600">{l.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Why itemizing beats a single bundled price</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            A single "$45 per person" quote feels simple, but it makes two things harder: for the
            client, understanding what's actually included and where they could adjust to fit a
            budget; for you, adjusting the quote cleanly when the client asks to drop the linen rental
            or add ten more guests.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Itemized quotes handle both scenarios naturally — the client sees exactly which line to
            change, and you recalculate that line instead of re-deriving a single bundled number from
            scratch.
          </p>
        </section>

        <section className="bg-orange-500 rounded-2xl p-7 text-white mb-10">
          <h2 className="text-xl font-black mb-2">Calculate the food cost line accurately</h2>
          <p className="text-orange-100 text-sm mb-5">
            MenuPricer's catering calculator gives you an accurate per-person food cost based on your
            actual menu selections, so the biggest line item in your quote starts from real numbers.
          </p>
          <Link href="/catering-pricing-calculator" className="inline-block bg-white text-orange-600 font-black px-6 py-3 rounded-xl hover:bg-orange-50 transition-colors">
            Try the Catering Calculator →
          </Link>
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

        <section className="border-t border-gray-100 pt-8 mt-8">
          <h2 className="text-lg font-black text-gray-900 mb-4">Related guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: "/blog/catering-cost-per-person", title: "Catering Cost Per Person", desc: "Real per-person prices for 50, 100, and 150 guests." },
              { href: "/blog/how-to-start-a-catering-business", title: "How to Start a Catering Business", desc: "The full business plan this quote template supports." },
              { href: "/blog/catering-pricing-guide", title: "Catering Pricing Guide", desc: "The pricing formula behind the food cost line item." },
              { href: "/catering-pricing-calculator", title: "Catering Pricing Calculator", desc: "Calculate accurate per-person food cost for any event." },
            ].map((post) => (
              <Link key={post.href} href={post.href} className="group bg-gray-50 hover:bg-orange-50 border border-gray-200 hover:border-orange-200 rounded-xl p-4 transition-all">
                <p className="font-bold text-gray-800 text-sm group-hover:text-orange-600 transition-colors">{post.title}</p>
                <p className="text-xs text-gray-500 mt-1">{post.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <footer className="border-t border-gray-100 mt-16 py-8 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2"><LogoIcon size={20} /><span className="font-black text-gray-900 text-sm">Menu<span className="text-orange-500">Pricer</span></span></div>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <Link href="/" className="hover:text-orange-500">AI Pricing Tool</Link>
            <Link href="/blog" className="hover:text-orange-500">All Blog Posts</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
