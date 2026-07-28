import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

const PUBLISHED = "2026-07-28";
const LAST_UPDATED = "July 28, 2026";

export const metadata: Metadata = {
  title: "You Don't Have Written Recipes. Here's How to Cost Your Menu Anyway",
  description:
    "Most recipe costing tools assume you already have written recipes. Most kitchens don't. Three practical ways to cost a menu when the recipes only exist in someone's head.",
  alternates: {
    canonical: "https://www.aimenupricer.com/blog/recipe-costing-without-recipes",
  },
  openGraph: {
    title: "You Don't Have Written Recipes. Here's How to Cost Your Menu Anyway",
    description:
      "Three practical ways to cost a restaurant menu when the recipes were never written down.",
    url: "https://www.aimenupricer.com/blog/recipe-costing-without-recipes",
  },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "You Don't Have Written Recipes. Here's How to Cost Your Menu Anyway",
  description:
    "Recipe costing software assumes you have written recipes to import. Many working kitchens do not. Three methods for costing a menu without them, including two that need no software at all.",
  author: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  publisher: { "@type": "Organization", name: "MenuPricer", url: "https://www.aimenupricer.com" },
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  mainEntityOfPage: "https://www.aimenupricer.com/blog/recipe-costing-without-recipes",
};

const BREADCRUMB = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aimenupricer.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.aimenupricer.com/blog" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Recipe Costing Without Recipes",
      item: "https://www.aimenupricer.com/blog/recipe-costing-without-recipes",
    },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can you cost a menu without written recipes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. There are three practical approaches. You can weigh a batch as it is actually made and back into per-portion cost from the batch total. You can reverse-engineer from purchase invoices by dividing what you spent on an ingredient over a period by the number of dishes sold that used it. Or you can start from an AI-drafted ingredient list based on the dish name and correct it against how your kitchen actually cooks. All three produce a usable number without anyone stopping to write formal recipe cards first.",
      },
    },
    {
      "@type": "Question",
      name: "Why do chefs not write down recipes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Traditional kitchen training passed recipes down verbally and through repetition rather than documentation, and cooks were expected to retain them. Even kitchens that do issue recipe sheets often see them used for a week after a menu change and then abandoned as cooks adjust by taste and feel. The result is that in many working restaurants the authoritative version of a dish exists only in the head of whoever cooks it most often.",
      },
    },
    {
      "@type": "Question",
      name: "How accurate is costing a dish without a written recipe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Batch weighing is the most accurate method because it measures what the kitchen actually does rather than what a document claims. Invoice back-calculation is accurate at the category level but blurs across dishes that share ingredients. An AI-drafted starting list is the least accurate before correction and the fastest to get to a first number. In practice, a corrected estimate that exists beats a precise recipe card that never gets written, because you cannot reprice a dish you have never costed.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need recipe costing software to price my menu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The two manual methods described in this article require only a kitchen scale, your invoices, and a spreadsheet. Software helps with the part manual methods handle badly: keeping costs current. A spreadsheet is not hard to build, but almost nobody goes back to update it when supplier prices move, which is how a carefully costed menu silently goes stale within a few months.",
      },
    },
  ],
};

const METHODS = [
  {
    n: "1",
    title: "Weigh a batch as it is actually made",
    forWho: "Best when the dish is made in batches and one person owns it",
    accuracy: "Highest accuracy",
    accuracyColor: "bg-green-100 text-green-700",
    needsTool: "Kitchen scale only",
    steps: [
      "Put a scale next to the person who actually makes the dish and ask them to cook it exactly as they normally would. Do not hand them a recipe to follow, because that measures the document rather than the kitchen.",
      "Weigh each ingredient as it goes in. Record it in whatever unit is convenient — grams, ounces, ladles — as long as you are consistent.",
      "Count how many finished portions the batch produced. Count real portions, not theoretical ones.",
      "Total the ingredient cost for the batch, then divide by the portion count.",
    ],
    catch:
      "You have to catch the dish being made, which means this scales at roughly one or two dishes per service. For a 40-item menu, plan on several weeks of opportunistic measuring rather than one afternoon.",
  },
  {
    n: "2",
    title: "Back-calculate from your invoices",
    forWho: "Best for high-volume dishes built on a few dominant ingredients",
    accuracy: "Good at category level",
    accuracyColor: "bg-blue-100 text-blue-700",
    needsTool: "Invoices and POS sales data",
    steps: [
      "Pick a period long enough to smooth out delivery timing, usually four weeks.",
      "Total what you spent on one specific ingredient over that period, for example chicken thigh.",
      "Pull the number of dishes sold in that period that use that ingredient.",
      "Divide spend by units sold to get the real per-dish cost of that ingredient, waste and over-portioning already baked in.",
    ],
    catch:
      "This blurs whenever an ingredient appears in several dishes, so it works best for proteins that anchor one dish. Its hidden advantage is that it captures actual usage, including the over-portioning that recipe cards never show.",
  },
  {
    n: "3",
    title: "Start from a drafted ingredient list and correct it",
    forWho: "Best when you need every dish costed and you need it this week",
    accuracy: "Fastest to a first number",
    accuracyColor: "bg-orange-100 text-orange-700",
    needsTool: "MenuPricer",
    steps: [
      "Enter the dish name. MenuPricer drafts the ingredient list and typical quantities for that dish.",
      "Correct it against how your kitchen actually cooks — your portion size, your protein grade, the two things you add that nobody else does.",
      "Enter your real supplier prices, which are the numbers no tool can guess for you.",
      "Save it. From then on, changing an ingredient price recalculates every dish that uses it.",
    ],
    catch:
      "A drafted list is a starting point, not a measurement. If you skip the correction step you are costing a generic version of the dish rather than yours. The value is that it removes the blank page, not that it knows your kitchen.",
  },
];

export default function RecipeCostingWithoutRecipesPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <LogoIcon size={28} />
            <span className="font-black text-gray-900 tracking-tight text-lg">
              Menu<span className="text-orange-500">Pricer</span>
            </span>
          </Link>
          <span className="text-gray-300 text-sm">·</span>
          <Link href="/blog" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
            Blog
          </Link>
          <Link
            href="/"
            className="ml-auto text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors"
          >
            AI Pricing Tool →
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <Link href="/" className="hover:text-gray-600">Home</Link>
          <span>›</span>
          <Link href="/blog" className="hover:text-gray-600">Blog</Link>
          <span>›</span>
          <span className="text-gray-600">Recipe Costing Without Recipes</span>
        </nav>

        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
          Food Cost
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-3">
          You Don&apos;t Have Written Recipes. Here&apos;s How to Cost Your Menu Anyway
        </h1>
        <p className="text-sm text-gray-400 mb-6">Last updated: {LAST_UPDATED} · Reviewed by the MenuPricer Team</p>

        {/* Direct answer box */}
        <div className="bg-gray-50 border-l-4 border-orange-400 rounded-r-xl p-5 mb-8">
          <p className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-2">Short answer</p>
          <p className="text-gray-700 leading-relaxed">
            You can cost a menu without written recipes in three ways: weigh a batch as it is
            actually cooked and divide by portions produced; back-calculate an ingredient&apos;s real
            per-dish cost from four weeks of invoices and POS sales; or start from a drafted
            ingredient list and correct it to your kitchen. The first two need nothing but a scale
            and your invoices. None of them require you to stop and write formal recipe cards first.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            The step-zero problem nobody puts in the sales deck
          </h2>
          <p className="text-gray-600 mb-4">
            Every recipe costing product starts the same way: import your recipes. Onboarding docs
            open with it, sales demos assume it, and implementation timelines are built around it.
          </p>
          <p className="text-gray-600 mb-4">
            The awkward part is that a large number of working kitchens have no recipes to import.
            Not disorganized kitchens. Good ones.
          </p>
          <p className="text-gray-600 mb-4">
            A thread in{" "}
            <a
              href="https://www.reddit.com/r/Chefit/comments/1v6mra5/is_it_normal_for_chefrestaurant_owners_to_not/"
              className="text-orange-500 hover:underline"
              rel="noopener"
            >
              r/Chefit
            </a>{" "}
            in July 2026 asked whether it is normal for chefs and owners not to have recipes written
            down. It drew 84 comments, and the consensus was that this is not an aberration but the
            historical norm. The top reply, at 127 upvotes:
          </p>
          <blockquote className="border-l-4 border-gray-200 pl-5 py-1 mb-4">
            <p className="text-gray-700 italic leading-relaxed">
              &ldquo;Yes. Old school chefs would train you and teach you the recipes and plates. It
              was on you to retain it and take notes if necessary.&rdquo;
            </p>
            <p className="text-xs text-gray-400 mt-2">u/donotlookatmeee · 127 upvotes</p>
          </blockquote>
          <p className="text-gray-600 mb-4">Another, from someone who eventually did start writing them down:</p>
          <blockquote className="border-l-4 border-gray-200 pl-5 py-1 mb-4">
            <p className="text-gray-700 italic leading-relaxed">
              &ldquo;Took me 10 years to finally start writing recipes down, definitely lost a few to
              my memory as I got older and hadn&apos;t made them in a long time.&rdquo;
            </p>
            <p className="text-xs text-gray-400 mt-2">u/blueturtle00 · 54 upvotes</p>
          </blockquote>
          <p className="text-gray-600">
            This is the actual reason recipe costing implementations quote six to twelve weeks. The
            software is not slow. The first two months are someone reconstructing, from scratch, a
            body of knowledge that lives in a cook&apos;s hands. That project is what stalls, and when
            it stalls the subscription keeps billing against a system nobody has finished populating.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Why this quietly costs you money</h2>
          <p className="text-gray-600 mb-4">
            An uncosted dish is not a neutral state. It is a dish whose margin you cannot see, which
            means:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                t: "You cannot tell winners from losers",
                d: "Menu engineering needs a cost number per dish. Without one, your best seller and your worst margin item look identical on the P&L.",
              },
              {
                t: "Supplier increases pass through invisibly",
                d: "When a protein moves 15%, you feel it in the monthly food cost line without knowing which dishes caused it.",
              },
              {
                t: "You reprice across the board instead of surgically",
                d: "Blanket price rises annoy guests on dishes that were already profitable, while the real problem items stay underpriced.",
              },
              {
                t: "Portion drift goes unnoticed",
                d: "Without a baseline cost, a portion creeping up over months looks like nothing at all until the year-end numbers arrive.",
              },
            ].map((x, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-4">
                <p className="font-semibold text-gray-900 text-sm mb-1">{x.t}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{x.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Three ways to cost without recipes</h2>
          <div className="space-y-6">
            {METHODS.map((m) => (
              <div key={m.n} className="border border-gray-200 rounded-xl p-6">
                <div className="flex items-start gap-4 mb-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-black text-sm">
                    {m.n}
                  </span>
                  <div className="flex-1">
                    <p className="font-bold text-gray-900 text-lg leading-snug mb-2">{m.title}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${m.accuracyColor}`}>
                        {m.accuracy}
                      </span>
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                        {m.needsTool}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">{m.forWho}</p>
                  </div>
                </div>
                <ol className="space-y-2 mb-4">
                  {m.steps.map((s, i) => (
                    <li key={i} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                      <span className="text-orange-400 font-bold flex-shrink-0">{i + 1}.</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ol>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-600 leading-relaxed">
                    <span className="font-bold text-gray-800">The catch: </span>
                    {m.catch}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Which one should you use?</h2>
          <p className="text-gray-600 mb-4">
            Most kitchens end up using more than one. A reasonable split:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">
                    Your situation
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">
                    Start with
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["A handful of signature dishes drive most of your revenue", "Method 1 — weigh those dishes properly, they are worth the time"],
                  ["One protein dominates your food spend", "Method 2 — invoice back-calculation will find it fastest"],
                  ["You need the whole menu costed before a price change", "Method 3 — get every dish to a first number, refine later"],
                  ["You are opening and have no sales history at all", "Method 3 — there are no invoices or batches to measure yet"],
                  ["You suspect portions have drifted", "Method 2 — it measures real usage, not intended usage"],
                ].map(([a, b], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 text-gray-800 border-b border-gray-100">{a}</td>
                    <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            The part that actually decides whether this was worth doing
          </h2>
          <p className="text-gray-600 mb-4">
            Whichever method you use, the costing is the easy half. The half that fails is keeping it
            current.
          </p>
          <p className="text-gray-600 mb-4">
            A spreadsheet built during a slow February is accurate in February. By August, half the
            supplier prices in it have moved and nobody has touched the file, because updating it
            means opening thirty tabs and retyping numbers during a week when you are short two
            cooks. This is not a discipline failure. It is the predictable outcome of a system that
            requires manual effort at exactly the moments you have none.
          </p>
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong className="text-gray-900">The test to apply:</strong> whatever you build,
              ask what happens when chicken goes up 20% next month. If the answer involves someone
              remembering to open a file and edit multiple dishes by hand, it will not survive
              contact with a busy service. Structure it so one price change updates every dish that
              uses the ingredient.
            </p>
          </div>
        </section>

        <div className="bg-orange-500 rounded-2xl p-8 text-center mb-10">
          <h2 className="text-2xl font-bold text-white mb-2">Start from a dish name, not a blank page</h2>
          <p className="text-orange-100 mb-5">
            MenuPricer drafts the ingredient breakdown from the dish name so you are correcting a
            list instead of building one. Save it once, and a supplier price change recalculates
            every dish that uses it.
          </p>
          <Link
            href="/"
            className="inline-block bg-white text-orange-500 font-bold px-8 py-3 rounded-xl hover:bg-orange-50 transition-colors"
          >
            Price your first dish free →
          </Link>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQ_SCHEMA.mainEntity.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-2">{faq.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-gray-100 pt-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Related Articles</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                href: "/blog/food-cost-formula",
                title: "How to Calculate Food Cost",
                desc: "Once you have an ingredient list, this is the arithmetic that turns it into a price.",
              },
              {
                href: "/blog/recipe-yield",
                title: "What Is Recipe Yield?",
                desc: "Why raw purchase weight overstates what you can actually plate, and how to adjust.",
              },
              {
                href: "/blog/food-costing-template",
                title: "Food Costing Template",
                desc: "How to structure the spreadsheet if you would rather build it yourself.",
              },
              {
                href: "/blog/restaurant-seasonality",
                title: "Restaurant Seasonality",
                desc: "What to do when the costs you just captured start moving underneath you.",
              },
            ].map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="border border-gray-200 rounded-xl p-4 hover:border-orange-300 transition-colors group"
              >
                <p className="font-semibold text-gray-900 group-hover:text-orange-500 transition-colors text-sm mb-1">
                  {link.title}
                </p>
                <p className="text-xs text-gray-500">{link.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-100 mt-16 py-8">
        <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <LogoIcon size={24} />
            <span className="font-black text-gray-900 text-sm">
              Menu<span className="text-orange-500">Pricer</span>
            </span>
          </Link>
          <p className="text-xs text-gray-400">
            © 2026 MenuPricer. AI-powered menu pricing for restaurant owners.
          </p>
        </div>
      </footer>
    </div>
  );
}
