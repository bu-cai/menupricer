import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "Restaurant Budget Template: How to Forecast Food Cost, Labor & Revenue",
  description: "How to build a restaurant budget — monthly P&L template, food cost and labor targets, revenue forecasting, and weekly actual vs budget tracking.",
  alternates: { canonical: "https://www.aimenupricer.com/blog/restaurant-budget-template" },
  openGraph: { url: "https://www.aimenupricer.com/blog/restaurant-budget-template" },
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How do you create a restaurant budget?", acceptedAnswer: { "@type": "Answer", text: "Start with revenue projection (covers x average check), then set food cost target at 28-35 percent of revenue, labor at 25-35 percent, and add fixed and variable overhead. Compare actual vs budget weekly." } },
    { "@type": "Question", name: "What should be in a restaurant monthly budget?", acceptedAnswer: { "@type": "Answer", text: "Revenue (food, beverage, bar), COGS (food cost, beverage cost), Labor (kitchen, FOH, management, payroll taxes), Occupancy (rent, utilities), Marketing, Supplies, Insurance, Technology, and a Contingency reserve." } },
    { "@type": "Question", name: "How much should a restaurant spend on food each month?", acceptedAnswer: { "@type": "Answer", text: "Budget 28-35 percent of food revenue for food cost. On $40,000 in food sales that is $11,200 to $14,000. Budget as a percentage, not a flat dollar amount, so it scales with sales volume." } },
  ],
};

const TEMPLATE_ROWS = [
  { category: "REVENUE", items: [
    { name: "Food Sales", budget: "$35,000", pct: "85%", notes: "Primary revenue", bold: false },
    { name: "Beverage Sales", budget: "$3,500", pct: "8%", notes: "", bold: false },
    { name: "Alcohol / Bar Sales", budget: "$2,800", pct: "7%", notes: "", bold: false },
    { name: "TOTAL REVENUE", budget: "$41,300", pct: "100%", notes: "", bold: true },
  ]},
  { category: "COST OF GOODS SOLD", items: [
    { name: "Food Cost", budget: "$12,250", pct: "35%", notes: "% of food sales", bold: false },
    { name: "Beverage Cost", budget: "$840", pct: "24%", notes: "", bold: false },
    { name: "Liquor/Bar Cost", budget: "$504", pct: "18%", notes: "", bold: false },
    { name: "TOTAL COGS", budget: "$13,594", pct: "32.9%", notes: "", bold: true },
  ]},
  { category: "LABOR", items: [
    { name: "Kitchen Labor", budget: "$7,500", pct: "18.2%", notes: "", bold: false },
    { name: "FOH Labor", budget: "$5,000", pct: "12.1%", notes: "", bold: false },
    { name: "Management Salary", budget: "$3,500", pct: "8.5%", notes: "", bold: false },
    { name: "Payroll Taxes and Benefits", budget: "$1,900", pct: "4.6%", notes: "", bold: false },
    { name: "TOTAL LABOR", budget: "$17,900", pct: "43.3%", notes: "HIGH — target 35-38%", bold: true },
  ]},
  { category: "OPERATING EXPENSES", items: [
    { name: "Rent / Base Lease", budget: "$5,500", pct: "13.3%", notes: "Fixed", bold: false },
    { name: "Utilities", budget: "$1,800", pct: "4.4%", notes: "", bold: false },
    { name: "Insurance", budget: "$600", pct: "1.5%", notes: "", bold: false },
    { name: "Supplies and Smallwares", budget: "$400", pct: "1.0%", notes: "", bold: false },
    { name: "Marketing", budget: "$600", pct: "1.5%", notes: "", bold: false },
    { name: "Credit card processing", budget: "$660", pct: "1.6%", notes: "", bold: false },
    { name: "Accounting and software", budget: "$350", pct: "0.8%", notes: "", bold: false },
    { name: "TOTAL OPERATING EXP.", budget: "$9,910", pct: "24.0%", notes: "", bold: true },
  ]},
  { category: "NET PROFIT", items: [
    { name: "NET PROFIT", budget: "-$104", pct: "-0.3%", notes: "Near break-even — fix labor to get to 6-9%", bold: true },
  ]},
];

export default function RestaurantBudgetTemplatePage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}></script>
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <LogoIcon size={28}></LogoIcon>
            <span className="font-black text-gray-900 tracking-tight text-lg">Menu<span className="text-orange-500">Pricer</span></span>
          </Link>
          <Link href="/blog" className="text-sm text-gray-500 ml-4">Blog</Link>
          <Link href="/" className="ml-auto text-sm font-semibold text-orange-500">AI Pricing Tool</Link>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-black text-gray-900 mb-4">Restaurant Budget Template</h1>
        <p className="text-lg text-gray-500 mb-8">A restaurant without a monthly budget is flying blind. Here is the P&amp;L template, target cost percentages, and weekly review process.</p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Monthly Budget Template</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse"><thead><tr className="bg-gray-100">
              <th className="text-left px-4 py-2 font-semibold text-gray-700 border-b border-gray-300">Line Item</th>
              <th className="text-right px-4 py-2 font-semibold text-gray-700 border-b border-gray-300">Budget</th>
              <th className="text-right px-4 py-2 font-semibold text-gray-700 border-b border-gray-300">% Rev</th>
              <th className="text-left px-4 py-2 font-semibold text-gray-700 border-b border-gray-300">Notes</th>
            </tr></thead>
            <tbody>{TEMPLATE_ROWS.map((group, gi) => (<><tr key={"h"+gi}><td colSpan={4} className="px-4 py-2 bg-gray-800 text-white font-bold text-xs uppercase">{group.category}</td></tr>{group.items.map((row,ri) => (<tr key={gi+"-"+ri} className={row.bold?"bg-orange-50":(ri%2===0?"bg-white":"bg-gray-50")}><td className={"px-4 py-2.5 border-b border-gray-100 "+(row.bold?"font-black text-gray-900":"text-gray-700")}>{row.name}</td><td className={"px-4 py-2.5 border-b border-gray-100 text-right font-semibold "+(row.name.startsWith("NET")?"text-red-600":"text-gray-800")}>{row.budget}</td><td className={"px-4 py-2.5 border-b border-gray-100 text-right text-xs "+(row.bold?"font-bold text-orange-600":"text-gray-500")}>{row.pct}</td><td className="px-4 py-2.5 border-b border-gray-100 text-xs text-gray-400">{row.notes}</td></tr>))}</>))}</tbody>
          </table></div>
        </section>
        <section className="mb-10"><h2 className="text-2xl font-bold text-gray-900 mb-3">Target Cost Percentages</h2>
          <div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr className="bg-gray-50">
            <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b">Category</th>
            <th className="text-center px-4 py-3 font-semibold text-gray-700 border-b">Target</th>
            <th className="text-center px-4 py-3 font-semibold text-gray-700 border-b">Warning</th>
          </tr></thead><tbody>
            {[["Food Cost","28-35%",">38%"],["Total Labor","28-35%",">40%"],["Rent","5-8%",">10%"],["Prime Cost","55-65%",">70%"],["Net Profit","6-9%","<3%"]].map(([c,t,w],i) => (<tr key={i} className={i%2===0?"bg-white":"bg-gray-50"}><td className="px-4 py-3 text-gray-800 border-b">{c}</td><td className="px-4 py-3 text-center border-b"><span className="bg-green-100 text-green-700 font-bold text-xs px-2 py-0.5 rounded-full">{t}</span></td><td className="px-4 py-3 text-center border-b"><span className="bg-red-100 text-red-700 font-bold text-xs px-2 py-0.5 rounded-full">{w}</span></td></tr>))}
          </tbody></table></div>
        </section>
        <section className="mb-10"><h2 className="text-2xl font-bold text-gray-900 mb-3">Weekly Actual vs. Budget Review</h2>
          <div className="space-y-3">{[{day:"Monday",task:"Pull last week sales from POS. Record actual revenue vs. budget."},{day:"Tuesday",task:"Complete inventory count. Calculate actual food cost percent."},{day:"Wednesday",task:"Run payroll summary. Calculate labor cost percent."},{day:"Thursday",task:"Compare actual vs. budget. Flag any category more than 2 points off."},{day:"Friday",task:"Take corrective action: reprice a dish, adjust schedule, investigate variance."}].map((item)=>(<div key={item.day} className="flex gap-4 items-start"><span className="text-xs font-bold text-orange-600 bg-orange-100 px-2 py-1 rounded-full w-24 text-center flex-shrink-0">{item.day}</span><p className="text-sm text-gray-600 pt-1">{item.task}</p></div>))}</div>
        </section>
        <div className="bg-orange-500 rounded-2xl p-8 text-center mb-10"><h2 className="text-2xl font-bold text-white mb-2">Keep Your Food Cost on Budget</h2><p className="text-orange-100 mb-5">A budget sets your food cost target. MenuPricer prices your menu to hit it.</p><Link href="/" className="inline-block bg-white text-orange-500 font-bold px-8 py-3 rounded-xl">Try MenuPricer Free</Link></div>
        <section className="mb-10"><h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2><div className="space-y-4">{FAQ_SCHEMA.mainEntity.map((faq,i)=>(<div key={i} className="border border-gray-200 rounded-xl p-5"><h3 className="font-bold text-gray-900 mb-2">{faq.name}</h3><p className="text-gray-600 text-sm">{faq.acceptedAnswer.text}</p></div>))}</div></section>
        <section className="border-t border-gray-100 pt-8"><h2 className="text-lg font-bold text-gray-900 mb-4">Related Articles</h2><div className="grid sm:grid-cols-2 gap-4">{[{href:"/blog/restaurant-kpis",title:"8 Restaurant KPIs to Track",desc:"The metrics that go in your budget variance analysis every week."},{href:"/blog/restaurant-bookkeeping",title:"Restaurant Bookkeeping 101",desc:"The bookkeeping setup that makes budget vs actual tracking easy."},{href:"/blog/prime-cost-restaurant",title:"Restaurant Prime Cost Guide",desc:"Deep dive into the most important budget line."},{href:"/blog/how-to-calculate-food-cost",title:"How to Calculate Food Cost",desc:"Calculate the food cost input for your budget accurately."}].map((link,i)=>(<Link key={i} href={link.href} className="border border-gray-200 rounded-xl p-4 hover:border-orange-300 transition-colors group"><p className="font-semibold text-gray-900 group-hover:text-orange-500 text-sm mb-1">{link.title}</p><p className="text-xs text-gray-500">{link.desc}</p></Link>))}</div></section>
      </main>
      <footer className="border-t border-gray-100 mt-16 py-8"><div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4"><Link href="/" className="flex items-center gap-2"><LogoIcon size={24}></LogoIcon><span className="font-black text-gray-900 text-sm">Menu<span className="text-orange-500">Pricer</span></span></Link><p className="text-xs text-gray-400">2026 MenuPricer.</p></div></footer>
    </div>
  );
}
