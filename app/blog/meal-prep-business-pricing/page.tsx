import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "Meal Prep Business Pricing: Subscription Margin Model",
  description: "Meal prep pricing works differently from a restaurant menu — batch production changes the cost structure, and subscription cancellations change the revenue model. How to price meals and plans correctly.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/meal-prep-business-pricing" },
  openGraph: {
    title: "Meal Prep Business Pricing: Subscription Margin Model",
    description: "How batch production cost and subscription churn change meal prep pricing compared to a standard restaurant menu.",
    url: "https://www.aimenupricer.com/blog/meal-prep-business-pricing",
  },
};

const SCHEMA = {
  "@context": "https://schema.org", "@type": "BlogPosting",
  headline: "Meal Prep Business Pricing: Subscription Margin Model",
  description: "Meal prep businesses need a different pricing model than a restaurant menu because batch production cost and subscription-based revenue create a different cost and cancellation structure.",
  author: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  publisher: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  datePublished: "2026-07-28", dateModified: "2026-07-28",
  mainEntityOfPage: "https://www.aimenupricer.com/blog/meal-prep-business-pricing",
};

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.aimenupricer.com/blog" },
    { "@type": "ListItem", position: 3, name: "Meal Prep Business Pricing", item: "https://www.aimenupricer.com/blog/meal-prep-business-pricing" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What food cost percentage should a meal prep business target?", acceptedAnswer: { "@type": "Answer", text: "Meal prep businesses often target a slightly lower food cost than a full-service restaurant, commonly 25-32%, because batch cooking reduces labor cost per meal significantly, which creates room to either run a leaner food cost or invest more in ingredients while still hitting a healthy overall margin." } },
    { "@type": "Question", name: "How should meal prep packaging cost be factored into pricing?", acceptedAnswer: { "@type": "Answer", text: "Packaging is a much larger share of total cost for meal prep than for a restaurant meal, since every meal is individually containerized for transport and reheating, often with an insulated bag or ice pack for delivery. This can represent 8-15% of total cost per meal and needs to be counted explicitly, not folded into a vague overhead estimate." } },
    { "@type": "Question", name: "How does subscription pricing change the margin calculation compared to one-off orders?", acceptedAnswer: { "@type": "Answer", text: "Subscription plans need to account for churn and the cost of acquiring a replacement customer when someone cancels. A slightly lower per-meal price on a subscription can still be more profitable than a higher one-off price, if the subscription's average customer lifetime spans enough weeks to offset the acquisition cost — a calculation restaurants pricing single dine-in meals never have to make." } },
  ],
};

const COST_FACTORS = [
  { title: "Batch production lowers labor cost per meal", desc: "Cooking 200 identical portions in one batch costs far less labor per portion than cooking 200 different à la carte dishes to order. This labor efficiency is meal prep's biggest structural cost advantage over a restaurant." },
  { title: "Packaging is a much bigger cost share", desc: "Every meal needs an individual, often microwave-safe or reheating-suitable container, sometimes with an insulated bag or ice pack for delivery. This can represent 8-15% of total cost — several times the share packaging typically represents for a dine-in restaurant meal." },
  { title: "Ingredient waste is lower with planned batch quantities", desc: "Knowing exact subscriber counts in advance means buying closer to exact needed quantities, reducing the spoilage waste that an unpredictable daily restaurant service has to build into its cost assumptions." },
  { title: "Delivery or shipping cost needs its own line item", desc: "Whether it's a driver route or a shipped cooler box, this is a real per-order cost that's separate from ingredient cost and easy to underestimate if it's bundled into a vague 'overhead' bucket instead of being calculated per meal." },
];

export default function MealPrepBusinessPricingPage() {
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
          <span className="text-gray-600">Meal Prep Business Pricing</span>
        </nav>
        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-bold bg-orange-100 text-orange-600 px-3 py-1 rounded-full">Meal Prep</span>
            <span className="text-xs text-gray-400">5 min read · July 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-4">
            Meal Prep Business Pricing: Subscription Margin Model
          </h1>
          <p className="text-sm text-gray-400 mb-6">Last updated: July 28, 2026 · Reviewed by the MenuPricer Team</p>
          <p className="text-lg text-gray-500 leading-relaxed">
            A meal prep business isn't a restaurant with a different delivery method — batch
            production changes the cost structure and subscriptions change the revenue model.
            Pricing it like a standard menu item misses both.
          </p>
        </div>

        <div className="bg-gray-50 border-l-4 border-orange-400 rounded-r-xl p-5 mb-10">
          <p className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-2">Short answer</p>
          <p className="text-gray-700 leading-relaxed">
            Meal prep can often target a lower food cost (25-32%) than a full-service restaurant
            because batch cooking reduces labor cost per meal significantly. But packaging and
            delivery need their own explicit cost line items, since they represent a much bigger share
            of total cost than in a typical restaurant meal, and subscription pricing needs to account
            for customer churn, not just per-meal margin.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-black text-gray-900 mb-5">What makes meal prep cost different</h2>
          <div className="space-y-4">
            {COST_FACTORS.map((c, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-5">
                <p className="font-black text-gray-900 text-sm mb-2">{c.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Pricing the subscription, not just the meal</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            A single meal's food cost percentage is only part of the picture for a subscription
            business. The other part is customer lifetime — how many weeks does an average subscriber
            stay before cancelling, and does the margin across those weeks cover what it cost to
            acquire that customer in the first place.
          </p>
          <p className="text-gray-600 leading-relaxed">
            This means a slightly lower per-meal price that improves retention can be more profitable
            overall than a higher price that looks better on a single order but drives faster churn.
            It's a calculation a restaurant pricing individual dine-in meals never has to make, since
            there's no ongoing subscription relationship to protect.
          </p>
        </section>

        <section className="bg-orange-500 rounded-2xl p-7 text-white mb-10">
          <h2 className="text-xl font-black mb-2">Cost every meal in your rotation</h2>
          <p className="text-orange-100 text-sm mb-5">
            MenuPricer costs each meal from its ingredients and recalculates automatically when a
            supplier price changes — useful for a rotating weekly menu where dozens of meals need
            checking on a schedule.
          </p>
          <Link href="/" className="inline-block bg-white text-orange-600 font-black px-6 py-3 rounded-xl hover:bg-orange-50 transition-colors">
            Price My Menu Free →
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
              { href: "/blog/food-cost-percentage-by-restaurant-type", title: "Food Cost Benchmarks by Type", desc: "How meal prep's target range compares to other concepts." },
              { href: "/portion-cost-calculator", title: "Portion Cost Calculator", desc: "Turn a batch recipe cost into cost per meal instantly." },
              { href: "/blog/ghost-kitchen-pricing", title: "Ghost Kitchen Pricing", desc: "Another delivery-only model with its own cost structure." },
              { href: "/blog/how-to-cost-a-dish", title: "How to Cost a Dish", desc: "The full ingredient costing process this pricing builds on." },
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
