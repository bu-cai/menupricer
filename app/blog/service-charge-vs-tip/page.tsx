import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "Service Charge vs Tip vs Gratuity: What Is the Difference?",
  description: "What is a service charge at a restaurant? How it differs from a tip and gratuity, whether you have to pay it, and what restaurant owners need to know about service charge policy.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/service-charge-vs-tip" },
  openGraph: {
    title: "Service Charge vs Tip vs Gratuity: What Is the Difference?",
    description: "Service charge, tip, and gratuity explained — definitions, legal differences, and what restaurant owners need to know.",
    url: "https://www.aimenupricer.com/blog/service-charge-vs-tip",
  },
};

const SCHEMA = {
  "@context": "https://schema.org", "@type": "BlogPosting",
  headline: "Service Charge vs Tip vs Gratuity: What Is the Difference?",
  description: "The difference between a service charge, tip, and gratuity at a restaurant — definitions, who keeps the money, and the operator perspective on setting policy.",
  author: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  publisher: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  datePublished: "2026-07-24", dateModified: "2026-07-24",
  mainEntityOfPage: "https://www.aimenupricer.com/blog/service-charge-vs-tip",
};

const BREADCRUMB = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.aimenupricer.com/blog" },
    { "@type": "ListItem", position: 3, name: "Service Charge vs Tip", item: "https://www.aimenupricer.com/blog/service-charge-vs-tip" },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is a service charge at a restaurant?", acceptedAnswer: { "@type": "Answer", text: "A service charge is a mandatory fee added to your restaurant bill by the establishment — typically 18–22% of the food and beverage total. Unlike a tip, you do not choose the amount; it is set by the restaurant and added automatically. Legally, a service charge belongs to the restaurant (not the server), though many restaurants redistribute some or all of it to staff. Service charges are subject to payroll taxes when distributed to employees, unlike cash tips." } },
    { "@type": "Question", name: "Is a service charge the same as a tip?", acceptedAnswer: { "@type": "Answer", text: "No. A tip is voluntary — you decide the amount and it goes directly to the server. A service charge is mandatory — the restaurant sets it and it belongs to the restaurant first. The restaurant then decides how to distribute it among staff. The IRS treats them differently: tips are income the employee reports; service charges are wages the employer pays, subject to payroll withholding. From the customer's perspective, both add to the total bill, but you can legally refuse to pay a service charge that was not disclosed upfront." } },
    { "@type": "Question", name: "Is a service charge the same as gratuity?", acceptedAnswer: { "@type": "Answer", text: "In casual usage, service charge and gratuity are often used interchangeably. In legal and tax terms, they are different. A gratuity (tip) is a voluntary payment from the customer to the employee. A service charge is a mandatory fee collected by the restaurant. Many restaurants label their mandatory fee as 'gratuity' on the bill, which creates confusion — if it is mandatory and set by the house, it is legally a service charge regardless of what it is called." } },
    { "@type": "Question", name: "Can you refuse to pay a service charge at a restaurant?", acceptedAnswer: { "@type": "Answer", text: "In most US states, you can refuse a service charge if it was not clearly disclosed before you ordered. If the menu or a sign at the door disclosed the service charge, most courts have upheld the restaurant's right to collect it as part of the contract of service. Best practice as a restaurant owner: print the service charge policy on the menu, on reservation confirmations, and on the bill itself. Surprise charges — disclosed only on the final bill — create disputes and chargebacks." } },
    { "@type": "Question", name: "Should my restaurant add a service charge?", acceptedAnswer: { "@type": "Answer", text: "Adding a service charge makes sense if you want to: (1) stabilize staff pay by pooling service revenue across the team, (2) reduce tip anxiety for customers, (3) fund back-of-house wages at a competitive rate, or (4) offset rising labor costs without raising menu prices. The tradeoff: some customers react negatively to mandatory fees even when they would have tipped the same amount voluntarily. Transparency is key — disclose the charge clearly, explain what it covers, and train staff to address questions graciously." } },
  ],
};

const COMPARISON = [
  { feature: "Mandatory or voluntary?", tip: "Voluntary", service: "Mandatory", gratuity: "Usually voluntary (but see note)" },
  { feature: "Who sets the amount?", tip: "Customer", service: "Restaurant", gratuity: "Customer (or restaurant if mandatory)" },
  { feature: "Who owns the money?", tip: "Employee (directly)", service: "Restaurant first, then distributes", gratuity: "Depends — see policy" },
  { feature: "IRS tax treatment", tip: "Employee income (self-reported)", service: "Restaurant wage (payroll tax)", gratuity: "Same as tip if voluntary" },
  { feature: "Typical amount", tip: "15–22%", service: "18–22%", gratuity: "18–20% (if mandatory)" },
  { feature: "Appears on bill as", tip: "Blank line — you write it in", service: "Line item, pre-filled", gratuity: "Sometimes pre-filled at large tables" },
];

export default function ServiceChargeVsTipPage() {
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
          <Link href="/" className="ml-auto text-sm font-semibold text-orange-500 hover:text-orange-600 whitespace-nowrap">Menu Pricing Tool →</Link>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-12">
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <Link href="/" className="hover:text-orange-500">Home</Link><span>›</span>
          <Link href="/blog" className="hover:text-orange-500">Blog</Link><span>›</span>
          <span className="text-gray-600">Service Charge vs Tip</span>
        </nav>
        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-bold bg-orange-100 text-orange-600 px-3 py-1 rounded-full">Menu Pricing</span>
            <span className="text-xs text-gray-400">6 min read · July 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-4">Service Charge vs Tip vs Gratuity: What Is the Difference?</h1>
        <p className="text-sm text-gray-400 mb-6">Last updated: July 24, 2026 · Reviewed by the MenuPricer Team</p>
          <p className="text-lg text-gray-500 leading-relaxed">Three terms that look similar on a restaurant bill but mean very different things legally, operationally, and for your staff. Here is exactly how they differ — and what restaurant owners need to know before setting policy.</p>
        </div>

        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 mb-10">
          <p className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-3">One-line definitions</p>
          <div className="space-y-2 text-sm">
            <div className="flex gap-3"><span className="font-black text-gray-900 w-28 shrink-0">Tip</span><span className="text-gray-600">Voluntary payment from customer directly to staff — customer chooses the amount</span></div>
            <div className="flex gap-3"><span className="font-black text-gray-900 w-28 shrink-0">Service charge</span><span className="text-gray-600">Mandatory fee set by the restaurant and added to the bill automatically</span></div>
            <div className="flex gap-3"><span className="font-black text-gray-900 w-28 shrink-0">Gratuity</span><span className="text-gray-600">Usually a tip — but when mandatory (large parties), it functions as a service charge</span></div>
          </div>
        </div>

        <div className="prose prose-gray max-w-none space-y-10">
          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">What is a service charge?</h2>
            <p className="text-gray-600 leading-relaxed">A service charge is a mandatory fee that a restaurant adds to every bill — or sometimes only to large parties — as a fixed percentage of the food and beverage total. Unlike a tip, the customer does not choose the amount; it is set by the restaurant and appears as a pre-filled line item.</p>
            <p className="text-gray-600 leading-relaxed mt-3">Legally, a service charge belongs to the restaurant, not the server. The restaurant collects it and then decides how to distribute it — to servers only, to all staff (including kitchen), or to a wage pool that supplements hourly pay. This is the critical difference from a tip, which goes directly to the employee.</p>
            <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 mt-4 text-sm">
              <p className="font-bold text-amber-800">Tax note for operators:</p>
              <p className="text-amber-700 mt-1">Service charges distributed to employees are treated as wages — subject to payroll taxes (FICA, state withholding). Tips reported by employees are income they pay taxes on. This distinction affects your payroll cost calculations.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">What is a tip?</h2>
            <p className="text-gray-600 leading-relaxed">A tip (gratuity in casual usage) is a voluntary payment made by the customer, at their discretion, directly to service staff. The customer decides whether to tip and how much. In the US, the cultural norm is 18–20% for good service at a sit-down restaurant, but it is not legally required.</p>
            <p className="text-gray-600 leading-relaxed mt-3">Tips belong to the employee immediately. The employer cannot legally keep tips under federal law (the FLSA). However, restaurants can require tip pooling — sharing tips among servers, bussers, and bartenders — as long as tip-pooled funds do not go to managers or the restaurant itself.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-5">Service charge vs tip vs gratuity: full comparison</h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full text-sm">
                <thead><tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-bold text-gray-700">Feature</th>
                  <th className="text-center px-4 py-3 font-bold text-blue-600">Tip</th>
                  <th className="text-center px-4 py-3 font-bold text-orange-600">Service charge</th>
                  <th className="text-center px-4 py-3 font-bold text-gray-600">Gratuity</th>
                </tr></thead>
                <tbody>
                  {COMPARISON.map((row, i) => (
                    <tr key={i} className="border-b border-gray-100 last:border-0">
                      <td className="px-4 py-3 font-medium text-gray-800">{row.feature}</td>
                      <td className="px-4 py-3 text-center text-blue-700">{row.tip}</td>
                      <td className="px-4 py-3 text-center text-orange-700 font-medium">{row.service}</td>
                      <td className="px-4 py-3 text-center text-gray-600 text-xs">{row.gratuity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">Why restaurants are switching to service charges</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Service charges have grown significantly since 2020. Several factors are driving the shift:</p>
            <div className="space-y-3">
              {[
                { t: "Back-of-house wage equity", b: "Kitchen staff traditionally earn far less than front-of-house servers, even though both contribute equally to the guest experience. A service charge lets the restaurant pool and redistribute revenue across all staff, including cooks, dishwashers, and prep workers." },
                { t: "Minimum wage increases", b: "As minimum wage rises, tip credits (which allow lower direct wages for tipped employees) become less valuable. A service charge model simplifies payroll and makes labor cost more predictable." },
                { t: "Tip fatigue and confusion", b: "Customers increasingly find tipping stressful — especially with tablet POS systems defaulting to 25–30% prompts. A transparent service charge removes the guesswork and often results in the same outcome for staff." },
                { t: "Hospitality included (HI) model", b: "Some restaurants have moved to no-tipping, higher-price models where the service charge replaces tipping entirely. The restaurant raises base wages, prices menu items to cover labor, and removes tip lines from the bill." },
              ].map(({ t, b }) => (
                <div key={t} className="border-l-4 border-orange-300 pl-4">
                  <p className="font-bold text-gray-800 text-sm">{t}</p>
                  <p className="text-sm text-gray-500 mt-1">{b}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">How to implement a service charge: what operators need to know</h2>
            <div className="space-y-4">
              {[
                { n: "1", t: "Disclose it clearly before the customer orders", b: "Put the service charge policy on your menu, on your website, and on the reservation confirmation. Disclosing it only on the final bill creates disputes and chargebacks. In many states, undisclosed mandatory fees are legally unenforceable." },
                { n: "2", t: "Decide how you will distribute it", b: "Will 100% go to servers? Split between FOH and BOH? Held by the restaurant to fund above-minimum wages? Document your distribution policy in writing — especially important if you employ tipped workers who rely on service charge distributions as wages." },
                { n: "3", t: "Update your payroll processing", b: "Service charges distributed as wages require FICA withholding, employer payroll tax, and proper W-2 reporting. Work with your accountant before launch." },
                { n: "4", t: "Train staff to explain it graciously", b: "Guests will ask. Train servers to say: \"We include an 18% service charge that goes directly to our entire team, including the kitchen\" — a simple, honest explanation that most guests appreciate." },
                { n: "5", t: "Remove or grey out the tip line if appropriate", b: "If your service charge replaces tipping, remove the tip prompt from your POS or mark it zero. Showing a service charge line AND a tip line creates confusion and double-charging risk." },
              ].map(({ n, t, b }) => (
                <div key={n} className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-orange-500 text-white font-black text-sm flex items-center justify-center shrink-0 mt-0.5">{n}</span>
                  <div><p className="font-bold text-gray-800">{t}</p><p className="text-sm text-gray-500 mt-1">{b}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-4">How service charges affect menu pricing</h2>
            <p className="text-gray-600 leading-relaxed mb-4">If you switch from a tipping model to a service charge model, your menu prices and your labor math both change:</p>
            <div className="bg-gray-50 rounded-2xl p-5 text-sm">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="font-black text-gray-800 mb-3">Tipping model</p>
                  <div className="space-y-1.5 text-gray-600">
                    <div className="flex justify-between"><span>Menu price</span><span>$18</span></div>
                    <div className="flex justify-between"><span>Customer tips (20%)</span><span>+$3.60</span></div>
                    <div className="flex justify-between font-bold text-gray-900 border-t border-gray-200 pt-1"><span>Total paid</span><span>$21.60</span></div>
                    <div className="flex justify-between text-gray-500 text-xs mt-1"><span>Restaurant gets</span><span>$18</span></div>
                    <div className="flex justify-between text-gray-500 text-xs"><span>Server gets</span><span>$3.60 (voluntary)</span></div>
                  </div>
                </div>
                <div>
                  <p className="font-black text-gray-800 mb-3">Service charge model</p>
                  <div className="space-y-1.5 text-gray-600">
                    <div className="flex justify-between"><span>Menu price</span><span>$18</span></div>
                    <div className="flex justify-between"><span>Service charge (20%)</span><span>+$3.60</span></div>
                    <div className="flex justify-between font-bold text-gray-900 border-t border-gray-200 pt-1"><span>Total paid</span><span>$21.60</span></div>
                    <div className="flex justify-between text-gray-500 text-xs mt-1"><span>Restaurant gets</span><span>$21.60</span></div>
                    <div className="flex justify-between text-gray-500 text-xs"><span>Staff get (per policy)</span><span>$3.60 (distributed)</span></div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-4">Customer pays the same. The difference: where the money flows first, how it is taxed, and who decides the distribution.</p>
            </div>
          </section>

          <section className="bg-orange-500 rounded-2xl p-7 text-white">
            <h2 className="text-xl font-black mb-2">Price your menu to cover labor — with or without a service charge</h2>
            <p className="text-orange-100 text-sm mb-5">MenuPricer calculates the right price for every dish based on your food cost, labor target, and overhead — so your menu prices work whether you tip, charge, or go hospitality-included.</p>
            <Link href="/" className="inline-block bg-white text-orange-600 font-black px-6 py-3 rounded-xl hover:bg-orange-50 transition-colors">Try MenuPricer Free →</Link>
          </section>

          <section>
            <h2 className="text-2xl font-black text-gray-900 mb-6">FAQ</h2>
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
                { href: "/blog/how-to-price-a-restaurant-menu", title: "How to Price a Restaurant Menu", desc: "The complete pricing guide for every dish." },
                { href: "/blog/restaurant-profit-margin", title: "Restaurant Profit Margin", desc: "Average margins and how to improve yours." },
                { href: "/blog/corkage-fee", title: "What Is a Corkage Fee?", desc: "When guests bring their own wine." },
                { href: "/blog/prime-cost-restaurant", title: "What Is Prime Cost?", desc: "Food cost + labor cost explained." },
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
            <Link href="/" className="hover:text-orange-500">AI Menu Pricing</Link>
            <Link href="/blog" className="hover:text-orange-500">All Guides</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}