import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DISH_DATA, ALL_DISHES } from "./data";
import DishPriceClient from "./DishPriceClient";

interface Props {
  params: Promise<{ dish: string }>;
}

export async function generateStaticParams() {
  return ALL_DISHES.map((d) => ({ dish: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { dish } = await params;
  const data = DISH_DATA[dish];
  if (!data) return {};
  const base = "https://www.aimenupricer.com";
  return {
    title: `How to Price ${data.name}`,
    description: `${data.name} typically runs a food cost of ${data.foodCostRange}, supporting a menu price of ${data.typicalPriceRange}. Full ingredient cost breakdown, worked example, and common pricing mistakes.`,
    keywords: [
      `how to price ${data.name.toLowerCase()}`,
      `${data.name.toLowerCase()} food cost`,
      `${data.name.toLowerCase()} pricing`,
      `${data.name.toLowerCase()} menu price`,
    ],
    alternates: { canonical: `${base}/how-to-price/${dish}` },
    openGraph: {
      title: `How to Price ${data.name}: Food Cost Breakdown & Menu Price Guide`,
      description: `Food cost breakdown, worked example, and common pricing mistakes for ${data.name.toLowerCase()}.`,
      url: `${base}/how-to-price/${dish}`,
    },
  };
}

export default async function DishPricePage({ params }: Props) {
  const { dish } = await params;
  const data = DISH_DATA[dish];
  if (!data) notFound();

  const base = "https://www.aimenupricer.com";
  const suggestedPrice = data.worked.totalCost / (data.worked.targetFoodCostPct / 100);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `How to Price ${data.name}: Food Cost Breakdown & Menu Price Guide`,
            description: `Food cost breakdown, worked example, and common pricing mistakes for ${data.name.toLowerCase()}.`,
            author: { "@type": "Organization", name: "MenuPricer", url: base },
            publisher: { "@type": "Organization", name: "MenuPricer", url: base },
            datePublished: "2026-07-28",
            dateModified: "2026-07-28",
            mainEntityOfPage: `${base}/how-to-price/${dish}`,
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: data.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: base },
              { "@type": "ListItem", position: 2, name: "How to Price", item: `${base}/how-to-price` },
              { "@type": "ListItem", position: 3, name: data.name, item: `${base}/how-to-price/${dish}` },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: `How to Price ${data.name}`,
            description: `Calculate the right menu price for ${data.name.toLowerCase()} from ingredient cost and target food cost percentage.`,
            totalTime: "PT3M",
            estimatedCost: { "@type": "MonetaryAmount", currency: "USD", value: "0" },
            step: data.worked.items.map((it, i) => ({
              "@type": "HowToStep",
              position: i + 1,
              name: `Cost the ${it.ingredient.toLowerCase()}`,
              text: `${it.amount !== "—" ? it.amount + " — " : ""}$${it.cost.toFixed(2)}`,
              url: `${base}/how-to-price/${dish}#worked-example`,
            })).concat([{
              "@type": "HowToStep",
              position: data.worked.items.length + 1,
              name: "Divide total cost by target food cost percentage",
              text: `Total ingredient cost of $${data.worked.totalCost.toFixed(2)} divided by a ${data.worked.targetFoodCostPct}% target gives a suggested menu price of $${suggestedPrice.toFixed(2)}.`,
              url: `${base}/how-to-price/${dish}#worked-example`,
            }]),
          }),
        }}
      />
      <DishPriceClient data={data} />
    </>
  );
}
