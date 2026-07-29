import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "Why ChatGPT Can't Price Your Menu (And What Actually Works)",
  description: "ChatGPT can explain the food cost formula perfectly, but it can't remember your menu, recalculate when a supplier price changes, or track which dishes it already priced. What that gap actually costs you.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/why-chatgpt-cant-price-your-menu" },
  openGraph: {
    title: "Why ChatGPT Can't Price Your Menu (And What Actually Works)",
    description: "A general AI chatbot can explain pricing formulas but has no memory of your menu and no way to recalculate when costs change. Here's the specific gap.",
    url: "https://www.aimenupricer.com/blog/why-chatgpt-cant-price-your-menu",
  },
};

const SCHEMA = {
  "@context": "https://schema.org", "@type": "BlogPosting",
  headline: "Why ChatGPT Can't Price Your Menu (And What Actually Works)",
  description: "General AI chatbots can explain the food cost formula accurately but have no persistent memory of your specific menu, no way to recalculate saved dishes when a supplier price changes, and can give different answers to the same question twice.",
  author: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  publisher: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  datePublished: "2026-07-28", dateModified: "2026-07-28",
  mainEntityOfPage: "https://www.aimenupricer.com/blog/why-chatgpt-cant-price-your-menu",
};

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.aimenupricer.com/blog" },
    { "@type": "ListItem", position: 3, name: "Why ChatGPT Can't Price Your Menu", item: "https://www.aimenupricer.com/blog/why-chatgpt-cant-price-your-menu" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Can ChatGPT calculate food cost percentage correctly?", acceptedAnswer: { "@type": "Answer", text: "Yes, for a single one-off calculation with numbers you provide in the same conversation, a general AI chatbot applies the food cost formula accurately. The gap isn't the math — it's that the conversation doesn't persist as a system. Ask it to reprice the same dish next week and it has no memory of the first calculation, your ingredients, or your target margin unless you paste all of it in again." } },
    { "@type": "Question", name: "Why does asking the same pricing question twice give different answers?", acceptedAnswer: { "@type": "Answer", text: "A general-purpose chatbot generates a plausible response each time rather than looking up a stored, fixed value. Minor wording differences in how you ask, or simple response variability, can shift an estimated ingredient cost or portion assumption between two otherwise identical questions. For a single sanity check this rarely matters; for a menu of 40 dishes you're relying on for actual pricing decisions, inconsistency compounds." } },
    { "@type": "Question", name: "Can ChatGPT recalculate my menu when a supplier price changes?", acceptedAnswer: { "@type": "Answer", text: "No, not automatically. It has no saved record of your menu to begin with, so there is nothing for it to recalculate — you would need to re-paste every dish's ingredients and re-ask each time a cost changes. That manual re-entry is exactly the maintenance burden that makes spreadsheets go stale, and a chat conversation has the same failure mode without even the benefit of a saved file." } },
    { "@type": "Question", name: "What is a general AI chatbot actually good for in restaurant pricing?", acceptedAnswer: { "@type": "Answer", text: "Explaining formulas, sanity-checking a single calculation, and brainstorming menu description language are all things a general chatbot handles well. What it doesn't do is remember your specific dishes, ingredient costs, and target margins as a persistent, editable system that updates when one input changes — that requires a tool built to save and recalculate state, not a conversation." } },
  ],
};

const GAPS = [
  { title: "No memory of your actual menu", desc: "Each conversation starts blank. Ask about your burger today and your fries tomorrow, and neither conversation knows the other dish exists, let alone shares your target food cost or your specific supplier prices." },
  { title: "No recalculation when a cost changes", desc: "There's no saved dish to recalculate — you have to re-paste every ingredient and re-ask from scratch each time a supplier price moves. That's the same manual-update problem that makes spreadsheets go stale, without even a file to point to." },
  { title: "Can give different answers to the same question", desc: "General AI chatbots generate a response rather than looking up a stored figure. Ask about the same ingredient cost twice, worded slightly differently, and the estimated portion size or price can shift between answers — fine for a sanity check, risky as your only source of truth for 40 dishes." },
  { title: "No way to see your whole menu's food cost at a glance", desc: "A chat thread is linear and one-dish-at-a-time. There's no view of all your dishes' food cost percentages side by side, no way to spot which ones are running high, and no saved history to compare against last month." },
];

export default function WhyChatGPTCantPriceYourMenuPage() {
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
          <span className="text-gray-600">Why ChatGPT Can't Price Your Menu</span>
        </nav>
        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-bold bg-orange-100 text-orange-600 px-3 py-1 rounded-full">Menu Pricing</span>
            <span className="text-xs text-gray-400">6 min read · July 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-4">
            Why ChatGPT Can't Price Your Menu (And What Actually Works)
          </h1>
          <p className="text-sm text-gray-400 mb-6">Last updated: July 28, 2026 · Reviewed by the MenuPricer Team</p>
          <p className="text-lg text-gray-500 leading-relaxed">
            Ask a general AI chatbot to explain the food cost formula and it will get it exactly
            right. The problem isn't the math — it's everything around a single calculation that a
            restaurant actually needs: memory, recalculation, and consistency across a full menu.
          </p>
        </div>

        <div className="bg-gray-50 border-l-4 border-orange-400 rounded-r-xl p-5 mb-10">
          <p className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-2">Short answer</p>
          <p className="text-gray-700 leading-relaxed">
            A general-purpose chatbot has no memory of your menu between conversations, no way to
            recalculate a saved dish when a supplier price changes, and can produce slightly different
            answers to the same question asked twice. It's a genuinely useful tool for a one-off
            sanity check on a formula, but it isn't a system for managing 40 dishes' worth of pricing
            over time.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-black text-gray-900 mb-5">The specific gaps</h2>
          <div className="space-y-4">
            {GAPS.map((g, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-5">
                <p className="font-black text-gray-900 text-sm mb-2">{g.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-black text-gray-900 mb-4">What it's actually good for</h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            None of this means a general AI chatbot is useless for restaurant pricing. It's a
            genuinely fast way to double-check a formula, brainstorm menu description language, or
            sanity-check a single dish's math when you already know the ingredient costs. Those are
            all real, useful jobs.
          </p>
          <p className="text-gray-600 leading-relaxed">
            What it doesn't do is remember your specific dishes as a saved, editable system — a place
            where changing one ingredient price updates every dish that uses it, and where you can see
            your whole menu's food cost percentage side by side. That requires a tool built to save
            and recalculate state, which a chat conversation, by design, doesn't do.
          </p>
        </section>

        <section className="bg-orange-500 rounded-2xl p-7 text-white mb-10">
          <h2 className="text-xl font-black mb-2">A tool that remembers your menu</h2>
          <p className="text-orange-100 text-sm mb-5">
            MenuPricer saves every dish you price, recalculates the whole affected list when you
            update an ingredient cost, and shows your entire menu's food cost percentage in one view.
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
              { href: "/blog/recipe-costing-without-recipes", title: "Costing Without Written Recipes", desc: "Three real ways to cost a dish, including two that need no software at all." },
              { href: "/compare/menupricer-vs-spreadsheet", title: "MenuPricer vs Spreadsheets", desc: "The other common DIY approach, and where it also falls short." },
              { href: "/blog/food-cost-formula", title: "Food Cost Formula", desc: "The formula a chatbot can explain, applied consistently to your actual menu." },
              { href: "/alternatives", title: "Restaurant Software Alternatives", desc: "How MenuPricer compares to purpose-built costing platforms too." },
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
