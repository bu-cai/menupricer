import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "Restaurant Menu Design Tips: 12 Rules That Increase Sales (2026)",
  description: "Proven restaurant menu design tips — how to use layout zones, anchor pricing, decoy items, visual hierarchy, and psychological pricing to increase average check size.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/restaurant-menu-design-tips" },
  openGraph: {
    title: "Restaurant Menu Design Tips: 12 Rules That Increase Sales (2026)",
    description: "12 restaurant menu design principles: layout zones, anchor pricing, decoy items, typography, and psychological pricing tactics to increase revenue per table.",
    url: "https://www.aimenupricer.com/blog/restaurant-menu-design-tips",
  },
};

const SCHEMA = {
  "@context": "https://schema.org", "@type": "BlogPosting",
  headline: "Restaurant Menu Design Tips: 12 Rules That Increase Sales (2026)",
  description: "Restaurant menu design strategies backed by research — eye-tracking studies, menu engineering principles, and psychological pricing tactics that increase average check size.",
  author: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  publisher: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  datePublished: "2026-07-22", dateModified: "2026-07-22",
  mainEntityOfPage: "https://www.aimenupricer.com/blog/restaurant-menu-design-tips",
};

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.aimenupricer.com/blog" },
    { "@type": "ListItem", position: 3, name: "Restaurant Menu Design Tips", item: "https://www.aimenupricer.com/blog/restaurant-menu-design-tips" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is the most important rule in restaurant menu design?", acceptedAnswer: { "@type": "Answer", text: "The most important rule is item placement. Eye-tracking research from Cornell University shows customers most often look at the upper-right corner of a two-panel menu first — a zone called the 'golden triangle.' Place your highest-margin dishes in these prime locations. The items in the best positions sell 20-30% more than identical items placed elsewhere on the menu." } },
    { "@type": "Question", name: "How many items should a restaurant menu have?", acceptedAnswer: { "@type": "Answer", text: "Research suggests the ideal menu size is 7 items per category (the Hick's Law principle for decision-making). More choices increase decision fatigue and slow table turns. Fine dining can go as low as 5-6 per category; fast casual can extend to 10-12 if categories are well-organized. The golden rule: if adding an item doesn't either serve a new customer segment or significantly increase margin, remove an item instead." } },
    { "@type": "Question", name: "Should restaurants use $ signs on their menus?", acceptedAnswer: { "@type": "Answer", text: "No. Research from Cornell University's Center for Hospitality Research found that removing $ signs from menus increases spending by an average of 8.15%. The dollar sign triggers 'pain of paying' psychology. Instead, list prices as plain numbers (e.g., 18 instead of $18.00). Also avoid decimal points unless necessary — '18' reads better than '18.00' and reduces price salience." } },
    { "@type": "Question", name: "What is menu anchoring and how does it work?", acceptedAnswer: { "@type": "Answer", text: "Menu anchoring means placing an expensive item prominently to make other items seem more reasonably priced by comparison. A $68 prime rib at the top of your entrees list makes the $34 salmon look like a great value — even if $34 is above your normal price range. The anchor doesn't need to sell well; its job is to shift price perception for everything around it. Most restaurants see a 10-20% increase in average entree sales after strategic anchoring." } },
  ],
};

const TIPS = [
  {
    n: "01", title: "Place high-margin items in the golden triangle",
    body: "Eye-tracking studies show customers scan two-panel menus starting upper-right, then upper-left, then center. These zones — the golden triangle — get disproportionate attention. Put your Stars (high-margin, high-popularity) here. Items in prime positions sell 20-30% more than the same dish placed elsewhere.",
    tag: "Layout"
  },
  {
    n: "02", title: "Remove the $ sign from every price",
    body: "Cornell University research found removing $ signs increases average spending by 8.15%. The dollar sign activates 'pain of paying' in the brain. Write prices as plain numbers: 18 not $18.00. While you're at it, remove decimal points too — 18 not 18.00 reduces price salience further.",
    tag: "Psychology"
  },
  {
    n: "03", title: "Use an anchor item to shift price perception",
    body: "Place a high-priced item at the top of each category. A $65 wagyu entry makes your $38 steak look reasonable. The anchor rarely needs to sell — its job is to recalibrate customer expectations. Most restaurants see 10-15% higher entree averages after anchoring.",
    tag: "Pricing"
  },
  {
    n: "04", title: "Limit items per category to 7 or fewer",
    body: "Hick's Law: the more options people have, the longer they take to decide. Decision fatigue slows table turns and frustrates guests. Cap each category at 7 items. If you have 14 pasta dishes, build two tighter categories. Every item that stays should either serve a distinct occasion or protect a margin.",
    tag: "Layout"
  },
  {
    n: "05", title: "Use decoy pricing to upsell",
    body: "A decoy is an item priced to make the option next to it feel like obvious value. Classic example: small wine $9, medium $14, large $16. Most people skip small (too little) and large (price jump is small, but feels like a lot). Medium sells most — often at your highest total margin. Design your decoy intentionally.",
    tag: "Psychology"
  },
  {
    n: "06", title: "Use boxes and borders to highlight profit leaders",
    body: "Visual emphasis works. A subtle box, a slightly larger font, or a 'chef's recommendation' label draws eyes to the item you're highlighting. Use sparingly — if everything is highlighted, nothing is. Pick 1-2 items per category to visually elevate.",
    tag: "Design"
  },
  {
    n: "07", title: "Write descriptions that sell outcomes, not ingredients",
    body: "\"Tender braised short rib slow-cooked for 8 hours with rosemary and garlic jus\" outperforms \"Braised beef with herbs and sauce.\" Sensory words, cooking methods, and origin references all increase perceived value and willingness to pay. See our full guide on how to write menu descriptions.",
    tag: "Copy"
  },
  {
    n: "08", title: "Never list prices in a column",
    body: "A price column turns your menu into a price list — customers scan down the column choosing by price, not dish. Embed prices directly after the description, in a slightly smaller font. This keeps the reading experience on the food, not the numbers.",
    tag: "Design"
  },
  {
    n: "09", title: "Use fewer fonts and more whitespace",
    body: "Most restaurant menus are over-designed. Two fonts maximum: one display font for headings, one clean body font for descriptions. Generous whitespace signals quality and gives descriptions room to breathe. Cluttered menus feel cheap even when the food is expensive.",
    tag: "Design"
  },
  {
    n: "10", title: "Add photos selectively — not for everything",
    body: "Photos increase sales of the specific item shown by 20-30%. But photos for every item cheapen the menu and signal a chain restaurant aesthetic. Use 1-3 curated photos per menu spread, of your most photogenic and highest-margin dishes. Avoid stock photography — use real photos of your actual food.",
    tag: "Visual"
  },
  {
    n: "11", title: "Engineer your first and last items in each section",
    body: "The serial position effect: people remember and order from the beginning and end of lists more than the middle. Put strong items in positions 1-2 and the last position of each category. Bury your lower-margin items in the middle where they are least likely to be ordered.",
    tag: "Psychology"
  },
  {
    n: "12", title: "Re-evaluate your menu every 6 months",
    body: "Menu engineering is not a one-time design project. Run a quarterly analysis: classify every item into Stars, Plowhorses, Puzzles, and Dogs. Reprice underperformers, remove Dogs that are not earning their space, and test new items in prime positions. Your menu should evolve as your food cost and customer mix change.",
    tag: "Strategy"
  },
];

const TAG_COLORS: Record<string, string> = {
  Layout: "bg-blue-100 text-blue-700",
  Psychology: "bg-purple-100 text-purple-700",
  Pricing: "bg-orange-100 text-orange-700",
  Design: "bg-green-100 text-green-700",
  Copy: "bg-yellow-100 text-yellow-700",
  Visual: "bg-pink-100 text-pink-700",
  Strategy: "bg-gray-100 text-gray-700",
};

export default function RestaurantMenuDesignTipsPage() {
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
          <span className="text-gray-300 text-sm">·</span>
          <span className="text-sm text-gray-500 truncate">Menu Design Tips</span>
          <Link href="/" className="ml-auto text-sm font-semibold text-orange-500 hover:text-orange-600 whitespace-nowrap">AI Pricing Tool →</Link>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-12">
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <Link href="/" className="hover:text-orange-500">Home</Link><span>›</span>
          <Link href="/blog" className="hover:text-orange-500">Blog</Link><span>›</span>
          <span className="text-gray-600">Restaurant Menu Design Tips</span>
        </nav>
        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-bold bg-orange-100 text-orange-600 px-3 py-1 rounded-full">Menu Design</span>
            <span className="text-xs text-gray-400">7 min read · July 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-4">Restaurant Menu Design Tips: 12 Rules That Increase Sales in 2026</h1>
          <p className="text-lg text-gray-500 leading-relaxed">Your menu is your most cost-effective salesperson. A well-engineered menu raises average check, steers customers toward high-margin items, and builds perceived value — without a single extra server. Here are the 12 rules that drive measurable results.</p>
        </div>
        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5 mb-10 grid grid-cols-3 gap-4 text-center">
          {[{ n: "8.15%", label: "Sales increase from removing $ signs (Cornell)" }, { n: "20–30%", label: "Sales lift from prime menu placement" }, { n: "7", label: "Ideal items per menu category (Hick's Law)" }].map(({ n, label }) => (
            <div key={n}><p className="text-xl font-black text-orange-500">{n}</p><p className="text-xs text-gray-500 mt-1 leading-tight">{label}</p></div>
          ))}
        </div>
        <div className="space-y-6 mb-12">
          {TIPS.map((tip) => (
            <div key={tip.n} className="border border-gray-200 rounded-2xl p-6 hover:border-orange-200 transition-colors">
              <div className="flex items-start gap-4">
                <span className="text-2xl font-black text-gray-200 shrink-0 leading-none mt-0.5">{tip.n}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h2 className="font-black text-gray-900 text-base">{tip.title}</h2>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${TAG_COLORS[tip.tag]}`}>{tip.tag}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {tip.body.includes("how to write menu descriptions") ? (
                      <>
                        {tip.body.split("how to write menu descriptions")[0]}
                        <Link href="/blog/how-to-write-menu-descriptions" className="text-orange-500 hover:underline">how to write menu descriptions</Link>
                        {tip.body.split("how to write menu descriptions")[1]}
                      </>
                    ) : tip.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <section className="bg-orange-500 rounded-2xl p-7 text-white mb-10">
          <h2 className="text-xl font-black mb-2">Get the prices right, then design around them</h2>
          <p className="text-orange-100 text-sm mb-5">Menu design amplifies your pricing strategy — but the prices have to be right first. MenuPricer calculates the correct price for every dish before you put it on the menu.</p>
          <Link href="/" className="inline-block bg-white text-orange-600 font-black px-6 py-3 rounded-xl hover:bg-orange-50 transition-colors">Price My Menu Free →</Link>
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
              { href: "/blog/menu-engineering", title: "Menu Engineering", desc: "Classify dishes as Stars, Plowhorses, Puzzles, and Dogs." },
              { href: "/blog/how-to-write-menu-descriptions", title: "How to Write Menu Descriptions", desc: "Sell with words: sensory, origin, and technique language." },
              { href: "/blog/how-to-price-a-restaurant-menu", title: "Menu Pricing Guide", desc: "The complete formula for restaurant menu pricing." },
              { href: "/blog/how-to-raise-menu-prices", title: "How to Raise Menu Prices", desc: "When and how to increase prices without losing customers." },
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