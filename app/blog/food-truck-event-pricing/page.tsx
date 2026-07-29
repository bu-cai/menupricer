import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "Food Truck Pricing by Event Type",
  description: "A food truck's cost structure changes completely between a daily street lunch spot, a private catering booking, and a weekend festival with a vendor fee. How to price each event type differently instead of using one flat menu.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/food-truck-event-pricing" },
  openGraph: {
    title: "Food Truck Pricing by Event Type",
    description: "Why the same food truck menu needs different pricing for street spots, festivals, and private catering bookings.",
    url: "https://www.aimenupricer.com/blog/food-truck-event-pricing",
  },
};

const SCHEMA = {
  "@context": "https://schema.org", "@type": "BlogPosting",
  headline: "Food Truck Pricing by Event Type",
  description: "A food truck's real cost structure shifts significantly between a daily street lunch spot, a weekend festival with a vendor fee, and a private catering booking — and pricing should shift with it.",
  author: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  publisher: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  datePublished: "2026-07-28", dateModified: "2026-07-28",
  mainEntityOfPage: "https://www.aimenupricer.com/blog/food-truck-event-pricing",
};

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.aimenupricer.com/blog" },
    { "@type": "ListItem", position: 3, name: "Food Truck Event Pricing", item: "https://www.aimenupricer.com/blog/food-truck-event-pricing" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Should food truck prices be the same at every event?", acceptedAnswer: { "@type": "Answer", text: "No. A festival with a 15-20% vendor fee or flat booking cost needs prices that absorb that fee, while a daily street spot with no event cost can run closer to standard restaurant food cost targets. Charging identical prices everywhere means either overcharging at low-cost locations or losing money at high-fee events." } },
    { "@type": "Question", name: "How much should festival vendor fees affect menu prices?", acceptedAnswer: { "@type": "Answer", text: "Calculate the fee as a percentage of expected event revenue, then build that percentage into the pricing the same way you would build in a delivery platform commission — work backwards from the payout you need per item after the fee, rather than adding a flat surcharge to your standard price." } },
    { "@type": "Question", name: "How is private catering priced differently from street service?", acceptedAnswer: { "@type": "Answer", text: "Private catering usually involves a guaranteed minimum headcount, a fixed time commitment, and no walk-up sales risk, which changes the economics substantially compared to a street spot where sales volume is unpredictable. Catering bookings are typically priced per-person with a minimum guarantee, closer to how a catering business prices events, rather than by individual item like the daily truck menu." } },
  ],
};

const EVENT_TYPES = [
  { type: "Daily street spot", costFactor: "No event fee, standard rent-free overhead", pricingApproach: "Standard food truck food cost target (25-35%), priced item by item as usual." },
  { type: "Weekend festival with vendor fee", costFactor: "Flat booking fee or 15-20% of revenue as commission to the event", pricingApproach: "Build the fee into pricing like a delivery commission — work backwards from the payout needed per item after the fee, not a flat surcharge on the street price." },
  { type: "Private catering booking", costFactor: "Guaranteed minimum headcount, fixed time commitment, no walk-up sales risk", pricingApproach: "Price per-person with a minimum guarantee, similar to a catering business quote, rather than by individual menu item." },
  { type: "Corporate lunch program (recurring)", costFactor: "Predictable volume, often a negotiated bulk rate expectation", pricingApproach: "A modest volume discount can make sense given guaranteed, predictable sales — but calculate it against real cost savings from batch prep, not just goodwill." },
];

export default function FoodTruckEventPricingPage() {
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
          <span className="text-gray-600">Food Truck Event Pricing</span>
        </nav>
        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-bold bg-orange-100 text-orange-600 px-3 py-1 rounded-full">Food Truck</span>
            <span className="text-xs text-gray-400">5 min read · July 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-4">
            Food Truck Pricing by Event Type
          </h1>
          <p className="text-sm text-gray-400 mb-6">Last updated: July 28, 2026 · Reviewed by the MenuPricer Team</p>
          <p className="text-lg text-gray-500 leading-relaxed">
            The same burger costs the same to make whether you're parked on a street corner or paying
            a $400 booking fee at a weekend festival — but the price it needs to sell at is not the
            same at all. Here's how to price by event type instead of running one flat menu everywhere.
          </p>
        </div>

        <div className="bg-gray-50 border-l-4 border-orange-400 rounded-r-xl p-5 mb-10">
          <p className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-2">Short answer</p>
          <p className="text-gray-700 leading-relaxed">
            A festival with a vendor fee or commission needs prices that absorb that cost, calculated
            like a delivery platform commission — work backwards from the payout you need. A private
            catering booking is usually priced per-person with a minimum, closer to a catering
            business model. A daily street spot with no event cost can run standard food truck food
            cost targets.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-black text-gray-900 mb-5">Pricing by event type</h2>
          <div className="space-y-4">
            {EVENT_TYPES.map((e, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-5">
                <p className="font-black text-gray-900 text-sm mb-2">{e.type}</p>
                <p className="text-xs text-gray-500 mb-2"><span className="font-semibold">Cost factor: </span>{e.costFactor}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{e.pricingApproach}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-black text-gray-900 mb-4">The mistake: one flat menu everywhere</h2>
          <p className="text-gray-600 leading-relaxed">
            Trucks that use identical prices at every location are usually leaving money at high-fee
            events and potentially overcharging at low-cost ones. A $12 taco plate that comfortably
            hits 30% food cost on a street corner might actually run closer to 40% effective food cost
            once a festival's 18% vendor commission is subtracted from that same $12 — the ingredients
            didn't get more expensive, but the event took a bigger bite before the truck sees the money.
          </p>
        </section>

        <section className="bg-orange-500 rounded-2xl p-7 text-white mb-10">
          <h2 className="text-xl font-black mb-2">Price each event scenario correctly</h2>
          <p className="text-orange-100 text-sm mb-5">
            MenuPricer's delivery platform pricing logic works the same way for any commission or
            vendor fee — enter the fee percentage and get the price that protects your margin.
          </p>
          <Link href="/food-truck-pricing-calculator" className="inline-block bg-white text-orange-600 font-black px-6 py-3 rounded-xl hover:bg-orange-50 transition-colors">
            Try the Food Truck Calculator →
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
              { href: "/blog/food-truck-startup-costs", title: "Food Truck Startup Costs", desc: "The full cost breakdown this event pricing fits into." },
              { href: "/blog/delivery-platform-commission", title: "Delivery Platform Commission", desc: "The same fee-absorbing math, applied to DoorDash and Uber Eats." },
              { href: "/blog/catering-cost-per-person", title: "Catering Cost Per Person", desc: "The per-person pricing model that private truck bookings borrow from." },
              { href: "/food-truck-pricing-calculator", title: "Food Truck Pricing Calculator", desc: "Price any dish with event fees factored in." },
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
