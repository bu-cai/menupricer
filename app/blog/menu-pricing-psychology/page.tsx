import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "Menu Pricing Psychology: 9 Techniques That Increase Order Value (2026)",
  description: "How restaurants use anchoring, price formatting, menu layout, and cognitive biases to influence what guests order. Evidence-based guide for operators.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/menu-pricing-psychology" },
  openGraph: {
    title: "Menu Pricing Psychology: 9 Techniques That Increase Order Value (2026)",
    description: "How anchoring, price formatting, menu position, and cognitive biases influence guest ordering decisions — and how to use them in your menu.",
    url: "https://www.aimenupricer.com/blog/menu-pricing-psychology",
    type: "article",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "MenuPricer — AI-powered menu pricing for restaurants" }],
  },
};

const SCHEMA = {
  "@context": "https://schema.org", "@type": "BlogPosting",
  headline: "Menu Pricing Psychology: 9 Techniques That Increase Order Value (2026)",
  description: "How restaurants use anchoring, price formatting, visual layout, and cognitive biases to guide guests toward higher-margin items.",
  author: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  publisher: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  datePublished: "2026-09-29", dateModified: "2026-09-29",
  mainEntityOfPage: "https://www.aimenupricer.com/blog/menu-pricing-psychology",
};

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.aimenupricer.com/blog" },
    { "@type": "ListItem", position: 3, name: "Menu Pricing Psychology", item: "https://www.aimenupricer.com/blog/menu-pricing-psychology" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question", name: "What is menu pricing psychology?",
      acceptedAnswer: { "@type": "Answer", text: "Menu pricing psychology refers to the design and layout choices restaurants make to influence guest ordering behavior. These techniques include how prices are formatted (with or without dollar signs, rounded vs. precise), where high-margin items appear on the page, how anchor prices work, and how descriptions affect perceived value. The goal is to guide guests toward items that are more profitable for the restaurant while genuinely improving the guest's ordering experience." }
    },
    {
      "@type": "Question", name: "Does removing the dollar sign from menus actually work?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, according to research from Cornell University's Center for Hospitality Research. A 2009 study found that guests who received a menu with prices shown as numerals only (e.g., '14' instead of '$14.00') spent significantly more than those who received menus with dollar signs or fully written-out prices like 'fourteen dollars.' The dollar sign activates what researchers call the 'pain of paying,' while a bare numeral is processed more neutrally." }
    },
    {
      "@type": "Question", name: "What is the anchor item technique on a menu?",
      acceptedAnswer: { "@type": "Answer", text: "An anchor item is a high-priced option placed prominently on the menu to make other items appear more reasonably priced by comparison. If a tasting menu at $120 is listed first, a $65 main course feels moderate rather than expensive. The anchor does not need to sell in high volume to do its job — its purpose is to reframe the price context for everything around it. This is one of the most well-documented effects in menu pricing psychology research." }
    },
    {
      "@type": "Question", name: "Which part of the menu do guests look at first?",
      acceptedAnswer: { "@type": "Answer", text: "Eye-tracking research shows that on a single-page menu, guests look at the upper right corner first — what menu designers call the 'sweet spot.' On a multi-page menu or digital menu, guests spend the most time on the first page and the first items in each section. Items placed in these prime positions receive disproportionate attention, which is why restaurants typically place their highest-margin items there, often highlighted with a box, a photo, or a 'chef's recommendation' label." }
    },
  ],
};

const TECHNIQUES = [
  {
    num: "01",
    title: "Remove the dollar sign",
    summary: "Eliminating currency symbols reduces the 'pain of paying' and correlates with higher average check size.",
    detail: "A Cornell study found guests spent more when prices appeared as bare numerals ('14') compared to prices with dollar signs ('$14') or written-out amounts. The dollar sign is a subconscious payment reminder. Many fine-dining restaurants go further by listing prices in small, light type to reduce their visual prominence. Even on casual menus, dropping the '$' while keeping the number is a low-effort, high-impact change.",
    impact: "Medium",
  },
  {
    num: "02",
    title: "Use an anchor item",
    summary: "Place one obviously expensive item at the top of each section to make everything else look reasonable.",
    detail: "The anchor effect works because humans judge prices relationally, not absolutely. A $38 salmon entrée seems fair when the menu opened with a $58 dry-aged ribeye. The anchor does not need to sell — it just needs to exist. A well-designed anchor is 40–60% more expensive than your target items. Place it at the top of the section, give it a photo or box treatment, and let it do the psychological work.",
    impact: "High",
  },
  {
    num: "03",
    title: "Position high-margin items in the prime spot",
    summary: "Eye-tracking research consistently identifies the upper right of a two-panel menu as the highest-attention zone.",
    detail: "On a bi-fold menu, guests spend the most time at the upper-right section — traditionally where steaks or seafood appear in a steakhouse, or pasta entrées in an Italian restaurant. On a single-column menu, the third and fourth items in a list receive the most attention (the first is a landmark, not a choice). Items placed in these zones are ordered more frequently than statistically equivalent items in lower-attention zones, regardless of price.",
    impact: "High",
  },
  {
    num: "04",
    title: "Describe food with specific, sensory language",
    summary: "Longer, evocative descriptions increase perceived value and willingness to pay.",
    detail: "A dish described as 'pan-seared Atlantic salmon, Meyer lemon beurre blanc, local asparagus, crispy capers' is ordered more often and rated as tasting better than the same dish listed as 'salmon with lemon sauce and asparagus.' Origin labels ('Idaho potatoes,' 'Gulf shrimp') add credibility. Avoid generic adjectives like 'delicious' or 'fresh' — specificity is what creates value in the reader's mind.",
    impact: "Medium",
  },
  {
    num: "05",
    title: "Use charm pricing selectively",
    summary: "Prices ending in .95 or .99 read as budget-tier; .00 or no decimal reads as upscale.",
    detail: "Charm pricing ($14.99 instead of $15) signals bargain to guests, which is appropriate for fast-casual or lunch specials but undermines a premium dinner menu. Research from MIT and the University of Chicago confirmed that round numbers and .00 endings are associated with quality and luxury, while .99 endings are associated with value. Match your pricing format to the image you are trying to project, not just the amount.",
    impact: "Medium",
  },
  {
    num: "06",
    title: "Use visual hierarchy to guide attention",
    summary: "Boxes, photos, icons, and bold type direct the eye and signal which items the restaurant wants guests to consider.",
    detail: "A single box around one item per section — labeled 'chef's pick' or 'most popular' — increases that item's order frequency by 20–25% in restaurant trials. Photos have an even stronger effect, but only if the photo quality is high; a poor photo actively hurts ordering. On digital menus, the 'popular' badge is the most clicked filter. These signals work because guests use them as decision shortcuts in the cognitively demanding task of reading a full menu.",
    impact: "Very high",
  },
  {
    num: "07",
    title: "Limit choices per category",
    summary: "The paradox of choice: more options cause decision fatigue and lower satisfaction.",
    detail: "Barry Schwartz's paradox-of-choice research, combined with restaurant-specific studies, shows that menus with 6–8 items per category outperform menus with 12+ items per category in both guest satisfaction and per-cover spend. Too many choices cause guests to default to familiar, often lower-priced items. Streamlining the menu to your best performers is both a psychological strategy and a kitchen efficiency gain.",
    impact: "High",
  },
  {
    num: "08",
    title: "Group prices vertically instead of in a price column",
    summary: "A right-aligned price column makes guests shop by price; scattered prices prevent direct comparison.",
    detail: "When prices are listed in a tidy right-hand column, guests' eyes travel down the price column comparing amounts — a behavior called 'price scanning.' Embedding prices directly after the description breaks this scanning pattern and encourages guests to choose based on the food rather than the price. This is standard practice in fine dining and increasingly common in casual restaurants as well.",
    impact: "Medium",
  },
  {
    num: "09",
    title: "Use relative pricing within sections",
    summary: "Within any section, the second-most-expensive item is ordered most frequently.",
    detail: "Across multiple restaurant studies, the second option from the top of a price-sorted list is the most popular — a pattern known as 'compromise effect' or 'Goldilocks pricing.' Guests avoid the cheapest (seems low-quality) and the most expensive (seems wasteful) and default to the second-best. Knowing this, restaurants place their highest-margin items at position 2 within each section rather than listing items by food cost alone.",
    impact: "High",
  },
];

export default function MenuPricingPsychologyPage() {
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
          <Link href="/menu-cost-calculator" className="ml-auto text-sm font-semibold text-orange-500 hover:text-orange-600 whitespace-nowrap">Menu Calculator →</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <Link href="/" className="hover:text-orange-500">Home</Link><span>›</span>
          <Link href="/blog" className="hover:text-orange-500">Blog</Link><span>›</span>
          <span className="text-gray-600">Menu Pricing Psychology</span>
        </nav>

        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-bold bg-orange-100 text-orange-600 px-3 py-1 rounded-full">Menu Design</span>
            <span className="text-xs text-gray-400">9 min read · September 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-4">Menu Pricing Psychology: 9 Techniques That Increase Order Value (2026)</h1>
          <p className="text-sm text-gray-400 mb-6">Last updated: September 29, 2026 · Reviewed by the MenuPricer Team</p>
          <p className="text-lg text-gray-500 leading-relaxed">Menu pricing is not just about the numbers — it is about how those numbers are presented, where items appear, and what the design tells guests before they read a single word. These nine evidence-based techniques come from hospitality research and real operator results.</p>
        </div>

        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5 mb-10">
          <p className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-3">Key findings from menu psychology research</p>
          <div className="space-y-2 text-sm text-gray-700">
            <p>→ Removing currency symbols correlates with higher average spend (Cornell, 2009)</p>
            <p>→ Second-most-expensive item in a section is ordered most often (compromise effect)</p>
            <p>→ Items in the upper-right zone of a two-panel menu receive the most attention</p>
            <p>→ A single photo per section can increase that item's sales by 30%+ (if the photo is good)</p>
          </div>
        </div>

        <div className="prose prose-gray max-w-none space-y-10">

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-6">9 menu psychology techniques</h2>
            <div className="space-y-6">
              {TECHNIQUES.map(({ num, title, summary, detail, impact }) => (
                <div key={num} className="border border-gray-200 rounded-2xl p-6">
                  <div className="flex items-start gap-4 mb-3">
                    <span className="text-3xl font-black text-orange-200 leading-none">{num}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-lg font-black text-gray-900">{title}</h3>
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                          impact === "Very high" ? "bg-orange-500 text-white" :
                          impact === "High" ? "bg-orange-100 text-orange-700" :
                          "bg-gray-100 text-gray-600"
                        }`}>{impact} impact</span>
                      </div>
                      <p className="text-sm font-medium text-gray-600">{summary}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed pl-0 sm:pl-14">{detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">The difference between menu psychology and menu engineering</h2>
            <p className="text-gray-600 mb-4">These two disciplines are often confused but address different problems:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-xl p-4">
                <p className="font-black text-blue-900 mb-2">Menu engineering</p>
                <p className="text-sm text-blue-800">Classifies menu items into Stars, Plowhorses, Puzzles, and Dogs based on popularity and contribution margin. Tells you which items to keep, drop, or reprice based on historical sales data.</p>
                <Link href="/blog/menu-engineering" className="text-xs text-blue-600 hover:text-blue-800 mt-2 inline-block">→ Menu Engineering Guide</Link>
              </div>
              <div className="bg-orange-50 rounded-xl p-4">
                <p className="font-black text-orange-900 mb-2">Menu psychology</p>
                <p className="text-sm text-orange-800">Deals with how price presentation, layout, and language influence what guests order before they have any data on individual items. It is front-end design; menu engineering is back-end analysis.</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm mt-4">The most effective menu strategy uses both: engineering to identify your best performers, psychology to make sure those items get the attention and framing they deserve.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">How to apply these techniques this week</h2>
            <div className="space-y-3">
              {[
                { step: "1", action: "Audit price formatting", detail: "Are dollar signs, decimal places, and alignment consistent? Remove currency symbols or right-aligned columns if you have a mid-range or upscale menu." },
                { step: "2", action: "Identify your highest-margin items", detail: "Use your food cost data to find your top 2–3 margin performers in each section. These are the items that should occupy the anchor and prime positions." },
                { step: "3", action: "Move one item to the prime position per section", detail: "Restructure each section so your top margin item appears second from the top. Add a 'chef's pick' label or box treatment to the first item as an anchor." },
                { step: "4", action: "Rewrite descriptions for your top performers", detail: "If your best-margin items have plain descriptions, rewrite them with specific, sensory language. Include the origin of one or two key ingredients." },
                { step: "5", action: "Measure before and after", detail: "Pull a two-week sales mix report before and after making changes. Even a 2–3 percentage point shift toward higher-margin items adds up at scale over a year." },
              ].map(({ step, action, detail }) => (
                <div key={step} className="flex gap-3">
                  <span className="w-7 h-7 rounded-full bg-orange-500 text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">{step}</span>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{action}</p>
                    <p className="text-gray-500 text-sm">{detail}</p>
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
            <h2 className="text-xl font-black text-gray-900 mb-2">Calculate your menu item margins</h2>
            <p className="text-gray-600 text-sm mb-4">Before you can position your high-margin items, you need to know which ones they are. Use the free MenuPricer calculator to find food cost percentage and contribution margin for any dish.</p>
            <Link href="/menu-cost-calculator" className="inline-block bg-orange-500 text-white font-bold px-6 py-3 rounded-xl hover:bg-orange-600 transition-colors text-sm">Open Menu Cost Calculator →</Link>
          </section>

          <section className="border-t border-gray-100 pt-8">
            <h2 className="text-lg font-black text-gray-900 mb-4">Related guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { href: "/blog/menu-engineering", title: "Menu Engineering: Stars, Dogs, Plowhorses & Puzzles" },
                { href: "/blog/restaurant-menu-pricing-strategies", title: "Restaurant Menu Pricing Strategies" },
                { href: "/blog/menu-pricing-formula", title: "The Menu Pricing Formula" },
                { href: "/blog/how-to-write-menu-descriptions", title: "How to Write Menu Descriptions" },
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
