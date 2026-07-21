import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RESTAURANT_TYPES, ALL_TYPES } from "./data";
import MenuPricingClient from "./MenuPricingClient";

interface Props {
  params: Promise<{ type: string }>;
}

export async function generateStaticParams() {
  return ALL_TYPES.map((t) => ({ type: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { type } = await params;
  const data = RESTAURANT_TYPES[type];
  if (!data) return {};
  const base = "https://www.aimenupricer.com";
  return {
    title: `${data.name} Menu Pricing Calculator — Free Tool for ${data.nameFull}s | MenuPricer`,
    description: `Free menu pricing calculator for ${data.nameFull.toLowerCase()}s. Target ${data.marginRange} gross margin with our AI tool. See real dish examples, pricing benchmarks, and industry tips.`,
    keywords: [
      `${data.name.toLowerCase()} menu pricing`,
      `${data.name.toLowerCase()} menu pricing calculator`,
      `${data.name.toLowerCase()} food cost`,
      `how to price a ${data.name.toLowerCase()} menu`,
      `${data.name.toLowerCase()} restaurant pricing`,
      `menu cost calculator ${data.name.toLowerCase()}`,
    ],
    alternates: { canonical: `${base}/menu-pricing/${type}` },
    openGraph: {
      title: `${data.name} Menu Pricing Calculator — MenuPricer`,
      description: `Calculate the right menu prices for your ${data.nameFull.toLowerCase()}. Target ${data.marginRange} gross margin with free AI-powered pricing.`,
      url: `${base}/menu-pricing/${type}`,
    },
  };
}

export default async function MenuPricingPage({ params }: Props) {
  const { type } = await params;
  const data = RESTAURANT_TYPES[type];
  if (!data) notFound();

  const base = "https://www.aimenupricer.com";
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: `${data.name} Menu Pricing Calculator`,
            url: `${base}/menu-pricing/${type}`,
            description: `Free menu pricing calculator for ${data.nameFull.toLowerCase()}s. Calculate food cost percentage and optimal menu prices.`,
            applicationCategory: "BusinessApplication",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
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
              { "@type": "ListItem", position: 2, name: "Menu Pricing", item: `${base}/menu-pricing` },
              { "@type": "ListItem", position: 3, name: `${data.name} Pricing`, item: `${base}/menu-pricing/${type}` },
            ],
          }),
        }}
      />
      <MenuPricingClient data={data} />
    </>
  );
}
