import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "How to Write Menu Descriptions That Sell (With Examples)",
  description: "Menu descriptions increase sales by up to 27%. Learn the exact words, techniques, and formulas that make customers order — with before/after examples for every dish type.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/how-to-write-menu-descriptions" },
  openGraph: {
    title: "How to Write Menu Descriptions That Sell (With Examples)",
    description: "The copywriting guide for restaurant menus — words that increase perceived value, sensory language, and before/after examples.",
    url: "https://www.aimenupricer.com/blog/how-to-write-menu-descriptions",
  },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "How to Write Menu Descriptions That Sell (With Examples)",
  description: "Words that increase perceived value on restaurant menus — sensory language, origin stories, and the before/after formula that boosts dish sales by up to 27%.",
  author: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  publisher: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://www.aimenupricer.com/blog/how-to-write-menu-descriptions",
};

const BREADCRUMB = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.aimenupricer.com/blog" },
    { "@type": "ListItem", position: 3, name: "How to Write Menu Descriptions", item: "https://www.aimenupricer.com/blog/how-to-write-menu-descriptions" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do menu descriptions actually increase sales?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. A Cornell University study by Brian Wansink found that descriptive menu labels increased sales of targeted dishes by 27% and improved customer satisfaction ratings for those dishes by 12%. The effect is strongest for dishes with distinctive ingredients, preparation methods, or origins that customers would not otherwise know about. Plain dish names ('Grilled Salmon') consistently underperform descriptive ones ('Atlantic Salmon, cedar-planked with lemon caper butter')." },
    },
    {
      "@type": "Question",
      name: "How long should a menu description be?",
      acceptedAnswer: { "@type": "Answer", text: "20-40 words is the optimal length for a menu description. Short enough to read quickly, long enough to paint a picture. One sentence for the dish itself, optionally one sentence for an origin story or pairing suggestion. Descriptions longer than 50 words cause customers to skip them entirely — they scan menus, they do not read them." },
    },
    {
      "@type": "Question",
      name: "What words sell more food on a menu?",
      acceptedAnswer: { "@type": "Answer", text: "Sensory words (crispy, velvety, smoky, slow-braised, wood-fired), origin words (Sicilian, Vermont farm, 28-day dry-aged), nostalgic words (grandmother's recipe, house-made since 1987), and texture words (flaky, tender, crunchy) all increase perceived value and sales. Avoid generic marketing words like 'delicious,' 'amazing,' or 'fresh' — customers have learned to ignore them. Specificity sells: '28-day aged' beats 'premium aged' every time." },
    },
    {
      "@type": "Question",
      name: "Should I list all the ingredients in a menu description?",
      acceptedAnswer: { "@type": "Answer", text: "No. List only the ingredients that add value or signal quality — highlight what is special, local, seasonal, or house-made. Listing every component ('chicken, flour, eggs, salt, pepper, oil') reads like a recipe card and reduces perceived value. A description for fried chicken that mentions '72-hour brine' and 'buttermilk coating' implies the rest without listing it all." },
    },
  ],
};

const EXAMPLES = [
  {
    dish: "Pasta",
    before: "Penne with tomato sauce and basil",
    after: "Hand-rolled penne in a slow-cooked San Marzano tomato sauce, finished with torn fresh basil and a drizzle of Sicilian extra-virgin olive oil",
    why: "Adds origin (San Marzano), technique (slow-cooked, hand-rolled), and a sensory finish (drizzle).",
  },
  {
    dish: "Steak",
    before: "8oz ribeye with fries and salad",
    after: "28-day dry-aged USDA Prime ribeye, served with truffle-salted fries and a watercress salad with shaved parmesan",
    why: "Aging period (28-day) and grade (USDA Prime) justify a higher price. Specific sides feel more considered.",
  },
  {
    dish: "Fish",
    before: "Grilled salmon with vegetables",
    after: "Wild-caught Pacific salmon, cedar-planked and grilled over hardwood, with roasted root vegetables and a preserved lemon crème fraîche",
    why: "Wild-caught vs farmed is a meaningful distinction. Cooking method (cedar-planked) is a differentiator.",
  },
  {
    dish: "Burger",
    before: "Cheeseburger with lettuce, tomato, onion",
    after: "Double smash patty of locally-sourced grass-fed beef, aged cheddar, caramelized onion, house pickles, and our 10-year-old secret sauce on a toasted brioche bun",
    why: "Local sourcing + age of sauce (storytelling) + specific cheese type all increase perceived value.",
  },
  {
    dish: "Dessert",
    before: "Chocolate cake with ice cream",
    after: "Warm Valrhona dark chocolate fondant with a molten center, served with Madagascan vanilla bean ice cream",
    why: "Brand name (Valrhona) and geographic origin (Madagascan) signal premium quality without adding cost.",
  },
];

export default function HowToWriteMenuDescriptionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2"><LogoIcon size={28} /><span className="font-black text-gray-900 tracking-tight text-lg">Menu<span className="text-orange-500">Pricer</span></span></Link>
          <span className="text-gray-300 text-sm">·</span>
          <Link href="/blog" className="text-sm text-gray-500 hover:text-orange-500 transition-colors">Blog</Link>
          <span className="text-gray-300 text-sm">·</span>
          <span className="text-sm text-gray-500 truncate">Menu Descriptions</span>
          <Link href="/" className="ml-auto text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors whitespace-nowrap">Try AI Pricer →</Link>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-12">
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <Link href="/" className="hover:text-orange-500">Home</Link><span>›</span>
          <Link href="/blog" className="hover:text-orange-500">Blog</Link><span>›</span>
          <span className="text-gray-600">How to Write Menu Descriptions</span>
        </nav>
        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-bold bg-orange-100 text-orange-600 px-3 py-1 rounded-full">Menu Design</span>
            <span className="text-xs text-gray-400">6 min read · July 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-4">How to Write Menu Descriptions That Sell</h1>
          <p className="text-lg text-gray-500 leading-relaxed">A Cornell study found that descriptive menu copy increases dish sales by up to 27% — with no change to the food itself. The right words make customers perceive more value, feel better about their choice, and rate the dish higher after eating it.</p>
        </div>
        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5 mb-10 grid grid-cols-3 gap-4 text-center">
          {[{ n: "+27%", label: "Sales lift from descriptive menu labels (Cornell)" }, { n: "+12%", label: "Customer satisfaction increase" }, { n: "20-40", label: "Ideal word count per description" }].map(({ n, label }) => (
            <div key={n}><p className="text-2xl font-black text-orange-500">{n}</p><p className="text-xs text-gray-500 mt-1 leading-tight">{label}</p></div>
          ))}
        </div>
        <div className="prose prose-gray max-w-none space-y-10">
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">The five types of words that sell</h2>
            <div className="space-y-4">
              {[
                { type: "Sensory words", examples: "crispy, velvety, smoky, charred, slow-braised, wood-fired, silky, flaky, golden", why: "Triggers the imagination. Customers who can picture the dish are more likely to order it." },
                { type: "Origin words", examples: "Sicilian, Vermont-farmed, Pacific wild-caught, Oaxacan, Kentucky bourbon, Normandy butter", why: "Geographic specificity implies quality sourcing. 'Normandy butter' sounds more premium than 'European-style butter' — even if they are the same product." },
                { type: "Technique words", examples: "28-day dry-aged, 72-hour brined, hand-rolled, stone-ground, cold-pressed, house-made", why: "Technique implies effort, which justifies price. Customers understand that '72-hour brined' takes longer than 'seasoned.'" },
                { type: "Nostalgic words", examples: "grandmother's recipe, slow-cooked like Sunday dinner, house-made since 1987, our original", why: "Emotional connection increases satisfaction. A dish described as a family recipe tastes better — literally. This is documented in food psychology research." },
                { type: "Brand/producer words", examples: "Valrhona chocolate, Murray's cheese, Niman Ranch beef, Acme bread, Cabot cheddar", why: "Named suppliers signal that you care about ingredients. Only use real supplier names — this is not a place to fabricate." },
              ].map(({ type, examples, why }) => (
                <div key={type} className="bg-gray-50 rounded-xl p-4">
                  <p className="font-bold text-gray-800 text-sm mb-1">{type}</p>
                  <p className="text-xs text-orange-600 font-medium mb-2">Examples: {examples}</p>
                  <p className="text-xs text-gray-500">{why}</p>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Words to avoid</h2>
            <div className="bg-red-50 border border-red-100 rounded-2xl p-5">
              <p className="text-sm text-gray-600 mb-3">These words have been used so often that customers have learned to ignore them — or worse, treat them as empty claims:</p>
              <div className="flex flex-wrap gap-2">
                {["delicious", "amazing", "incredible", "fresh", "premium", "quality", "best", "finest", "perfect", "world-class"].map((w) => (
                  <span key={w} className="text-xs bg-red-100 text-red-600 px-2.5 py-1 rounded-full font-medium line-through">{w}</span>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-3">Replace with specifics. Instead of "fresh ingredients," write "delivered daily from the farmers market." Instead of "premium beef," write "USDA Prime, 28-day dry-aged."</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-5">Before and after examples</h2>
            <div className="space-y-5">
              {EXAMPLES.map(({ dish, before, after, why }) => (
                <div key={dish} className="border border-gray-200 rounded-2xl overflow-hidden">
                  <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
                    <p className="font-bold text-gray-700 text-sm">{dish}</p>
                  </div>
                  <div className="p-5 space-y-3">
                    <div>
                      <p className="text-[10px] font-bold text-red-400 uppercase tracking-widest mb-1">Before</p>
                      <p className="text-sm text-gray-500 italic">{before}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-green-600 uppercase tracking-widest mb-1">After</p>
                      <p className="text-sm text-gray-800 font-medium">{after}</p>
                    </div>
                    <div className="border-t border-gray-100 pt-3">
                      <p className="text-xs text-gray-400"><span className="font-bold text-gray-600">Why it works: </span>{why}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">The formula for a great menu description</h2>
            <div className="bg-gray-900 text-white rounded-2xl p-6 space-y-3 text-sm font-mono">
              <p className="text-gray-400 text-xs">// Two-sentence structure</p>
              <p><span className="text-orange-400">[Technique/origin]</span> <span className="text-white">[main protein or ingredient],</span> <span className="text-blue-300">[cooking method]</span> <span className="text-white">with</span> <span className="text-green-300">[key accompaniments]</span></p>
              <p className="text-gray-500">Optional: [Origin story or pairing note in one sentence]</p>
              <div className="border-t border-gray-700 pt-3 mt-3">
                <p className="text-gray-400 text-xs mb-1">Example output:</p>
                <p className="text-white">"<span className="text-orange-300">72-hour brined</span> <span className="text-white">half chicken,</span> <span className="text-blue-300">roasted over hardwood</span> with <span className="text-green-300">smoked paprika butter, roasted garlic, and charred lemon.</span> Our most-requested dish since 2019."</p>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">MenuPricer generates menu copy automatically</h2>
            <p className="text-gray-600 leading-relaxed">When you price a dish in MenuPricer, the AI generates a ready-to-use menu description alongside your pricing recommendation — pulling in sensory language, preparation details, and positioning copy that matches the dish name and price tier you select.</p>
            <div className="mt-4">
              <Link href="/" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-black px-6 py-3 rounded-xl transition-colors">Generate Menu Copy Free →</Link>
            </div>
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
                { href: "/blog/menu-engineering", title: "Menu Engineering", desc: "Use data to place your most profitable dishes in prime positions." },
                { href: "/blog/how-to-price-a-restaurant-menu", title: "How to Price a Restaurant Menu", desc: "Food cost formula and markup strategy." },
                { href: "/blog/how-to-raise-menu-prices", title: "How to Raise Menu Prices", desc: "When and how to raise prices without losing customers." },
                { href: "/blog/food-cost-formula", title: "Food Cost Formula", desc: "Calculate food cost percentage per dish." },
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
            <Link href="/food-cost-calculator" className="hover:text-orange-500">Food Cost Calculator</Link>
            <Link href="/blog" className="hover:text-orange-500">All Blog Posts</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}