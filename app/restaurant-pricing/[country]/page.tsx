import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { COUNTRY_DATA, ALL_COUNTRIES } from "./data";
import CountryPricingClient from "./CountryPricingClient";

interface Props {
  params: Promise<{ country: string }>;
}

export async function generateStaticParams() {
  return ALL_COUNTRIES.map((c) => ({ country: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country } = await params;
  const data = COUNTRY_DATA[country];
  if (!data) return {};
  const base = "https://www.aimenupricer.com";
  return {
    title: `Restaurant Menu Pricing in ${data.name}`,
    description: `How ${data.taxName} (${data.taxRate}) and local labor cost rules affect restaurant menu pricing in ${data.name}. Benchmarks, a ${data.currencyCode} price calculator, and what's different from US pricing.`,
    keywords: [
      `restaurant pricing ${data.name.toLowerCase()}`,
      `food cost calculator ${data.name.toLowerCase()}`,
      `menu pricing ${data.name.toLowerCase()}`,
      `${data.taxName.toLowerCase()} restaurant menu`,
    ],
    alternates: { canonical: `${base}/restaurant-pricing/${country}` },
    openGraph: {
      title: `Restaurant Menu Pricing in ${data.name} | MenuPricer`,
      description: `${data.taxName} treatment, labor cost structure, and benchmarks for pricing a restaurant menu in ${data.name}.`,
      url: `${base}/restaurant-pricing/${country}`,
    },
  };
}

export default async function CountryPricingPage({ params }: Props) {
  const { country } = await params;
  const data = COUNTRY_DATA[country];
  if (!data) notFound();

  const base = "https://www.aimenupricer.com";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `Restaurant Menu Pricing in ${data.name}`,
            description: `${data.taxName} treatment, labor cost structure, and benchmarks for pricing a restaurant menu in ${data.name}.`,
            author: { "@type": "Organization", name: "MenuPricer", url: base },
            publisher: { "@type": "Organization", name: "MenuPricer", url: base },
            datePublished: "2026-07-28",
            dateModified: "2026-07-28",
            mainEntityOfPage: `${base}/restaurant-pricing/${country}`,
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
              { "@type": "ListItem", position: 2, name: "Restaurant Pricing", item: `${base}/restaurant-pricing` },
              { "@type": "ListItem", position: 3, name: data.name, item: `${base}/restaurant-pricing/${country}` },
            ],
          }),
        }}
      />
      <CountryPricingClient data={data} />
    </>
  );
}
