import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "Pricing — MenuPricer Pro | $9/month or $79/year",
  description:
    "MenuPricer Pro gives restaurant owners unlimited menu pricing, batch pricing, analytics, and PDF export. Start free, upgrade when ready.",
  alternates: { canonical: "https://www.aimenupricer.com/pricing" },
  openGraph: {
    title: "MenuPricer Pricing — Free & Pro Plans",
    description: "Start free with 5 dishes. Upgrade to Pro for $9/month or $79/year.",
    url: "https://www.aimenupricer.com/pricing",
  },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "MenuPricer Pro",
  description: "AI-powered menu pricing tool for restaurant owners. Unlimited dishes, batch pricing, analytics, and PDF export.",
  url: "https://www.aimenupricer.com/pricing",
  brand: { "@type": "Brand", name: "MenuPricer" },
  offers: [
    {
      "@type": "Offer",
      name: "Free Plan",
      price: "0",
      priceCurrency: "USD",
      description: "Price up to 5 dishes. No credit card required.",
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "Pro Monthly",
      price: "9.00",
      priceCurrency: "USD",
      priceSpecification: { "@type": "UnitPriceSpecification", price: "9.00", priceCurrency: "USD", unitCode: "MON" },
      description: "Unlimited dishes, batch pricing, PDF export, analytics.",
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "Pro Annual",
      price: "79.00",
      priceCurrency: "USD",
      priceSpecification: { "@type": "UnitPriceSpecification", price: "79.00", priceCurrency: "USD", unitCode: "ANN" },
      description: "Best value — save $29 vs monthly. All Pro features.",
      availability: "https://schema.org/InStock",
    },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I cancel anytime?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Cancel from your account dashboard — no questions asked. You keep Pro access until the end of your billing period." },
    },
    {
      "@type": "Question",
      name: "What happens when I hit the 5-dish free limit?",
      acceptedAnswer: { "@type": "Answer", text: "Your existing dishes stay saved. You can view and edit them — you just can't add more until you upgrade." },
    },
    {
      "@type": "Question",
      name: "Is the annual plan worth it?",
      acceptedAnswer: { "@type": "Answer", text: "If you're actively managing your menu, yes. You save $29 vs monthly — that's over 3 months free. Most restaurant owners reprice seasonally, so annual makes sense." },
    },
    {
      "@type": "Question",
      name: "Do you offer refunds?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — if you're not satisfied within 7 days of subscribing, contact us for a full refund." },
    },
  ],
};

const FREE_FEATURES = [
  "5 menu items",
  "AI pricing (3 tiers per dish)",
  "Food cost calculator",
  "Delivery commission calculator",
  "AI-written menu copy",
];

const PRO_FEATURES = [
  { text: "Unlimited menu items", highlight: true },
  { text: "Batch pricing — 20 dishes at once", highlight: true },
  { text: "Analytics — see your best-margin dishes", highlight: true },
  { text: "PDF export with your branding", highlight: true },
  { text: "Cloud sync across all devices", highlight: true },
  { text: "Everything in Free", highlight: false },
];

const FAQS = [
  {
    q: "Can I cancel anytime?",
    a: "Yes. Cancel from your account dashboard — no questions asked. You keep Pro access until the end of your billing period.",
  },
  {
    q: "What happens when I hit the 5-dish free limit?",
    a: "Your existing dishes stay saved. You can view and edit them — you just can't add more until you upgrade.",
  },
  {
    q: "Is the annual plan worth it?",
    a: "If you're actively managing your menu, yes. You save $29 vs monthly — that's over 3 months free. Most restaurant owners reprice seasonally, so annual makes sense.",
  },
  {
    q: "Do you offer refunds?",
    a: "Yes — if you're not satisfied within 7 days of subscribing, contact us for a full refund.",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <LogoIcon size={28} />
            <span className="font-black text-gray-900 tracking-tight text-lg">
              Menu<span className="text-orange-500">Pricer</span>
            </span>
          </Link>
          <Link href="/" className="ml-auto text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors">
            Try it free →
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-4">
          Simple, honest pricing
        </h1>
        <p className="text-lg text-gray-500 max-w-xl mx-auto">
          Start free. Upgrade when your menu grows past 5 dishes — or when you want to price your whole menu in one afternoon.
        </p>
      </section>

      {/* Plans */}
      <section className="max-w-4xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">

          {/* Free */}
          <div className="border border-gray-200 rounded-2xl p-7">
            <div className="mb-5">
              <p className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-1">Free</p>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-gray-900">$0</span>
              </div>
              <p className="text-sm text-gray-400 mt-1">No credit card needed</p>
            </div>
            <Link
              href="/"
              className="block w-full text-center border-2 border-gray-200 hover:border-orange-300 text-gray-700 font-bold py-3 rounded-xl transition-colors mb-6"
            >
              Start free
            </Link>
            <ul className="space-y-3">
              {FREE_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600">
                  <span className="text-gray-400 mt-0.5">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Pro Monthly */}
          <div className="border border-gray-200 rounded-2xl p-7">
            <div className="mb-5">
              <p className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-1">Pro Monthly</p>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-gray-900">$9</span>
                <span className="text-gray-400 text-sm">/ month</span>
              </div>
              <p className="text-sm text-gray-400 mt-1">Cancel anytime</p>
            </div>
            <Link
              href="/?upgrade=1"
              className="block w-full text-center bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 rounded-xl transition-colors mb-6"
            >
              Get Pro Monthly
            </Link>
            <ul className="space-y-3">
              {PRO_FEATURES.map((f) => (
                <li key={f.text} className="flex items-start gap-2.5 text-sm text-gray-600">
                  <span className={f.highlight ? "text-orange-500 mt-0.5" : "text-gray-400 mt-0.5"}>✓</span>
                  {f.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Pro Annual — recommended */}
          <div className="border-2 border-orange-500 rounded-2xl p-7 relative shadow-lg shadow-orange-100">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-black px-4 py-1 rounded-full whitespace-nowrap">
              BEST VALUE — Save $29
            </div>
            <div className="mb-5">
              <p className="text-sm font-bold text-orange-500 uppercase tracking-wide mb-1">Pro Annual</p>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-gray-900">$79</span>
                <span className="text-gray-400 text-sm">/ year</span>
              </div>
              <p className="text-sm text-orange-500 font-semibold mt-1">≈ $6.6/month · 2 months free</p>
            </div>
            <Link
              href="/?upgrade=annual"
              className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-black py-3 rounded-xl transition-colors mb-6"
            >
              Get Pro Annual
            </Link>
            <ul className="space-y-3">
              {PRO_FEATURES.map((f) => (
                <li key={f.text} className="flex items-start gap-2.5 text-sm text-gray-600">
                  <span className={f.highlight ? "text-orange-500 mt-0.5" : "text-gray-400 mt-0.5"}>✓</span>
                  {f.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Social proof bar */}
      <section className="max-w-3xl mx-auto px-6 py-6">
        <div className="bg-orange-50 rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          <blockquote className="flex-1">
            <p className="text-sm text-gray-700 italic leading-relaxed">
              &ldquo;My BBQ platter margin went from 48% to 71% after one repricing. Paid for itself in two days.&rdquo;
            </p>
            <p className="text-xs text-gray-400 mt-2 font-semibold">Marcus T. · Restaurant Owner, Texas</p>
          </blockquote>
          <div className="flex sm:flex-col items-center gap-4 sm:gap-1 shrink-0">
            <span className="text-2xl font-black text-orange-500">500+</span>
            <span className="text-xs text-gray-400">restaurant owners</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-black text-gray-900 mb-8 text-center">Common questions</h2>
        <div className="space-y-6">
          {FAQS.map((faq) => (
            <div key={faq.q}>
              <p className="font-bold text-gray-900 mb-1">{faq.q}</p>
              <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 py-14 mt-6">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
            Start free — no credit card needed
          </h2>
          <p className="text-orange-100 mb-8 text-sm">
            Price your first 5 dishes free. Upgrade when you&apos;re ready.
          </p>
          <Link
            href="/"
            className="inline-block bg-white text-orange-600 font-black px-8 py-3.5 rounded-xl hover:bg-orange-50 transition-colors shadow-lg shadow-orange-600/20"
          >
            Price My First Dish Free →
          </Link>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-100 py-6">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <LogoIcon size={20} />
            <span className="font-black text-gray-900 text-sm">Menu<span className="text-orange-500">Pricer</span></span>
          </div>
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <Link href="/" className="hover:text-orange-500 transition-colors">AI Pricing Tool</Link>
            <Link href="/menu-pricing" className="hover:text-orange-500 transition-colors">Menu Pricing Guide</Link>
            <Link href="/menu-cost-calculator" className="hover:text-orange-500 transition-colors">Cost Calculator</Link>
          </div>
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} MenuPricer</p>
        </div>
      </footer>
    </div>
  );
}
