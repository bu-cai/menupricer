import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "Menu Engineering: How to Design a Menu That Sells Your Most Profitable Dishes",
  description: "Menu engineering uses data to place your highest-margin dishes where customers are most likely to order them. Learn the four-quadrant framework, layout tactics, and pricing psychology.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/menu-engineering" },
  openGraph: {
    title: "Menu Engineering: The Data-Driven Guide for Restaurant Owners",
    description: "How to use the Stars/Plowhorses/Puzzles/Dogs framework to redesign your menu and increase average check size without adding a single new dish.",
    url: "https://www.aimenupricer.com/blog/menu-engineering",
  },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Menu Engineering: How to Design a Menu That Sells Your Most Profitable Dishes",
  description: "The four-quadrant menu engineering framework — Stars, Plowhorses, Puzzles, Dogs — and how to use it to increase restaurant profit margin.",
  author: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  publisher: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  datePublished: "2026-07-22",
  dateModified: "2026-07-22",
  mainEntityOfPage: "https://www.aimenupricer.com/blog/menu-engineering",
};

const BREADCRUMB = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.aimenupricer.com/blog" },
    { "@type": "ListItem", position: 3, name: "Menu Engineering", item: "https://www.aimenupricer.com/blog/menu-engineering" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is menu engineering?",
      acceptedAnswer: { "@type": "Answer", text: "Menu engineering is the practice of analyzing each menu item by its profitability (contribution margin) and popularity (number sold) to strategically position items on the menu. Developed by Michael Kasavana and Donald Smith at Michigan State University in 1982, it classifies dishes into four categories: Stars (high profit, high popularity), Plowhorses (low profit, high popularity), Puzzles (high profit, low popularity), and Dogs (low profit, low popularity). The goal is to use menu layout, design, and pricing to sell more Stars and fewer Dogs." },
    },
    {
      "@type": "Question",
      name: "How does menu placement affect sales?",
      acceptedAnswer: { "@type": "Answer", text: "Research from Cornell University's Center for Hospitality Research found that items placed in the top-right corner of a menu page receive disproportionate attention — what researchers call the 'sweet spot.' Items featured in boxes, with photos, or with descriptive names sell 27% more than the same dish listed plainly. A high-margin dish moved from the middle of a section to the top can see a 15-30% sales increase with no other changes." },
    },
    {
      "@type": "Question",
      name: "What is the most profitable menu strategy?",
      acceptedAnswer: { "@type": "Answer", text: "The most profitable menu strategy combines three tactics: (1) Feature your highest contribution margin dishes in prime visual positions (top-right, boxed, with photos). (2) Price anchor items strategically — a $65 steak makes a $38 salmon look reasonable. (3) Remove or redesign your Dogs — items that are rarely ordered and have low margins dilute your kitchen focus and increase food waste. Restaurants that apply menu engineering typically see 5-15% improvements in average contribution margin per cover." },
    },
    {
      "@type": "Question",
      name: "How many items should be on a restaurant menu?",
      acceptedAnswer: { "@type": "Answer", text: "Research suggests 7 items per category is the optimal number — more than that creates 'choice overload' and customers default to familiar safe choices rather than exploring. A full-service restaurant menu with 6-8 starters, 6-8 mains, 4-6 desserts, and 4-6 sides outperforms larger menus in both average check and kitchen efficiency. The pandemic-driven menu reduction trend (many restaurants cut menus by 30-50%) confirmed that focused menus drive higher margins." },
    },
  ],
};

const QUADRANTS = [
  {
    name: "Stars ⭐",
    desc: "High margin · High popularity",
    action: "Feature prominently. Protect the price. Do not change the recipe.",
    color: "bg-green-50 border-green-200",
    badge: "bg-green-100 text-green-700",
    examples: "Your best-selling dish that customers rave about AND makes you money.",
  },
  {
    name: "Plowhorses 🐴",
    desc: "Low margin · High popularity",
    action: "Raise price slowly (5-8% at a time). Reduce ingredient cost. Reposition on menu away from prime spots.",
    color: "bg-amber-50 border-amber-200",
    badge: "bg-amber-100 text-amber-700",
    examples: "The pasta everyone orders because it's cheap — but you barely make money on it.",
  },
  {
    name: "Puzzles ❓",
    desc: "High margin · Low popularity",
    action: "Rename it. Add a photo. Move to a prime menu position. Train staff to suggest it.",
    color: "bg-blue-50 border-blue-200",
    badge: "bg-blue-100 text-blue-700",
    examples: "A dish with great margins that nobody orders — often because it sounds boring or is buried on page 3.",
  },
  {
    name: "Dogs 🐕",
    desc: "Low margin · Low popularity",
    action: "Remove from menu, or completely redesign (different ingredients, different price point).",
    color: "bg-red-50 border-red-200",
    badge: "bg-red-100 text-red-600",
    examples: "That dish you keep because the owner likes it. It costs you money and attention every service.",
  },
];

export default function MenuEngineeringPage() {
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
          <span className="text-sm text-gray-500 truncate">Menu Engineering</span>
          <Link href="/" className="ml-auto text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors whitespace-nowrap">Try AI Pricer →</Link>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-12">
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <Link href="/" className="hover:text-orange-500">Home</Link><span>›</span>
          <Link href="/blog" className="hover:text-orange-500">Blog</Link><span>›</span>
          <span className="text-gray-600">Menu Engineering</span>
        </nav>
        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-bold bg-orange-100 text-orange-600 px-3 py-1 rounded-full">Menu Pricing</span>
            <span className="text-xs text-gray-400">8 min read · July 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-4">Menu Engineering: Design Your Menu to Sell More Profitable Dishes</h1>
          <p className="text-lg text-gray-500 leading-relaxed">Menu engineering is one of the highest-ROI changes a restaurant can make — and it costs nothing except an afternoon of analysis. By mapping your dishes across profit and popularity, you can redesign your menu to naturally steer customers toward the dishes that make you the most money.</p>
        </div>

        <div className="prose prose-gray max-w-none space-y-10">
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">The four-quadrant framework</h2>
            <p className="text-gray-600 leading-relaxed mb-6">Every dish on your menu falls into one of four categories based on two factors: how profitable it is (contribution margin = price minus food cost) and how popular it is (number sold per week). Plot your menu and you get four quadrants:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {QUADRANTS.map((q) => (
                <div key={q.name} className={`border rounded-2xl p-5 ${q.color}`}>
                  <div className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-3 ${q.badge}`}>{q.desc}</div>
                  <h3 className="font-black text-gray-900 text-lg mb-2">{q.name}</h3>
                  <p className="text-xs text-gray-500 mb-3 italic">{q.examples}</p>
                  <p className="text-sm font-semibold text-gray-700"><span className="text-gray-400">Action: </span>{q.action}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">How to classify your dishes</h2>
            <p className="text-gray-600 leading-relaxed mb-4">You need two numbers for each dish: contribution margin and units sold per week.</p>
            <div className="space-y-3">
              {[
                { step: "1", title: "Calculate contribution margin per dish", body: "Contribution margin = Menu price − Food cost. If a burger sells for $16 and costs $4.80 in ingredients, the contribution margin is $11.20. This is more useful than food cost percentage because it tells you the actual dollars you keep per order." },
                { step: "2", title: "Find your average contribution margin", body: "Add up all your dishes' contribution margins and divide by the number of dishes. This is your threshold — dishes above average are 'high margin,' dishes below are 'low margin.'" },
                { step: "3", title: "Find your average popularity", body: "Count how many of each dish you sold last month. Divide total covers by number of dishes. Dishes selling above average are 'high popularity,' below average are 'low popularity.'" },
                { step: "4", title: "Plot each dish", body: "High margin + high popularity = Star. High margin + low popularity = Puzzle. Low margin + high popularity = Plowhorse. Low margin + low popularity = Dog." },
              ].map(({ step, title, body }) => (
                <div key={step} className="flex gap-4 bg-gray-50 rounded-xl p-4">
                  <div className="w-8 h-8 rounded-full bg-orange-500 text-white font-black text-sm flex items-center justify-center shrink-0">{step}</div>
                  <div><p className="font-bold text-gray-800 text-sm">{title}</p><p className="text-sm text-gray-500 mt-1">{body}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Menu layout: where the eye goes</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Cornell research established a reading pattern for restaurant menus — use it to place your Stars in prime positions:</p>
            <div className="bg-gray-900 text-white rounded-2xl p-6 text-sm space-y-3">
              <div className="grid grid-cols-2 gap-3 text-center text-xs">
                <div className="bg-orange-500/20 border border-orange-400 rounded-xl p-3"><p className="font-black text-orange-400 text-base">① BEST</p><p className="text-gray-300">Top-right of first page — highest attention zone. Place your most profitable Star here.</p></div>
                <div className="bg-blue-500/10 border border-blue-400/40 rounded-xl p-3"><p className="font-bold text-blue-300">② Good</p><p className="text-gray-400">Top-left of first page — second most viewed position.</p></div>
                <div className="bg-gray-700 border border-gray-600 rounded-xl p-3"><p className="text-gray-400">③ Average</p><p className="text-gray-500">Middle sections — where Plowhorses belong.</p></div>
                <div className="bg-red-500/5 border border-red-400/20 rounded-xl p-3"><p className="text-gray-500">④ Lowest</p><p className="text-gray-600">Last page, bottom sections. Reserve for Dogs you are phasing out.</p></div>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed mt-4">Additional layout tactics: use a box or border around one item per section (draws 30% more attention). Use a photo on 1-2 dishes per page maximum — more than that and the effect disappears. Never put a currency symbol next to prices — it activates price sensitivity. "$14" triggers less resistance than "14.00" or "Fourteen dollars."</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Anchor pricing: make everything else look reasonable</h2>
            <p className="text-gray-600 leading-relaxed">Place one high-priced item at the top of each section — not because you expect to sell many of them, but because it makes everything else look more affordable by comparison. A $68 dry-aged ribeye makes a $36 salmon feel like a bargain. This is the anchor effect, and it genuinely works.</p>
            <p className="text-gray-600 leading-relaxed mt-3">The anchor dish should ideally be a Puzzle — high margin, currently low sales. Its new role is not to sell well, but to make your Stars look like good value.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">How often to re-engineer your menu</h2>
            <p className="text-gray-600 leading-relaxed">Run a full menu engineering analysis every 6 months, or whenever: you add more than 3 new dishes, ingredient costs shift significantly, or your average check drops for two consecutive months. The quadrant positions of dishes change as customer preferences shift and as competitors enter or exit your market.</p>
          </section>

          <section className="bg-orange-500 rounded-2xl p-7 text-white">
            <h2 className="text-xl font-black mb-2">Find your Stars and Dogs in minutes</h2>
            <p className="text-orange-100 text-sm mb-5">MenuPricer calculates contribution margin for every dish and flags low-margin items — the first step in any menu engineering analysis.</p>
            <Link href="/" className="inline-block bg-white text-orange-600 font-black px-6 py-3 rounded-xl hover:bg-orange-50 transition-colors shadow-lg shadow-orange-700/20">Analyze My Menu Margins Free →</Link>
            <p className="text-orange-200 text-xs mt-3">No credit card · Free for 5 dishes</p>
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
                { href: "/blog/how-to-price-a-restaurant-menu", title: "How to Price a Restaurant Menu", desc: "The complete formula for food cost and markup." },
                { href: "/blog/how-to-raise-menu-prices", title: "How to Raise Menu Prices", desc: "When and how to raise prices without losing customers." },
                { href: "/blog/food-cost-percentage-by-restaurant-type", title: "Food Cost Benchmarks by Concept", desc: "Industry averages for fine dining, fast casual, and more." },
                { href: "/blog/how-to-write-menu-descriptions", title: "How to Write Menu Descriptions", desc: "Words that sell — the copywriting guide for restaurant menus." },
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