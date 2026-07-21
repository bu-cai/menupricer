import { NextResponse } from "next/server";

const BASE = "https://www.aimenupricer.com";

const POSTS = [
  {
    slug: "how-to-price-a-restaurant-menu",
    title: "How to Price a Restaurant Menu: The Complete Guide (2026)",
    description: "Step-by-step formula for calculating food cost percentage, setting markup, and pricing every dish on your menu profitably — with real examples.",
    pubDate: "Tue, 01 Jul 2026 00:00:00 GMT",
    category: "Menu Pricing",
  },
  {
    slug: "food-cost-formula",
    title: "Food Cost Formula: How to Calculate Food Cost Percentage (2026)",
    description: "The exact food cost formula restaurant owners use to calculate food cost percentage per dish — with worked examples and benchmarks.",
    pubDate: "Mon, 15 Jun 2026 00:00:00 GMT",
    category: "Food Cost",
  },
  {
    slug: "restaurant-profit-margin",
    title: "What Is a Good Restaurant Profit Margin? (2026 Benchmarks)",
    description: "Average restaurant profit margins by type, the biggest cost drivers that eat into net profit, and five strategies to improve your margin starting this week.",
    pubDate: "Tue, 01 Jul 2026 00:00:00 GMT",
    category: "Profitability",
  },
  {
    slug: "delivery-platform-commission",
    title: "DoorDash vs Uber Eats Commission: How Much Do They Take? (2026)",
    description: "Complete breakdown of DoorDash, Uber Eats, and Grubhub restaurant commission rates, processing fees, and how to price your delivery menu to stay profitable.",
    pubDate: "Tue, 01 Jul 2026 00:00:00 GMT",
    category: "Delivery",
  },
];

export async function GET() {
  const items = POSTS.map(
    (p) => `
    <item>
      <title><![CDATA[${p.title}]]></title>
      <link>${BASE}/blog/${p.slug}</link>
      <guid isPermaLink="true">${BASE}/blog/${p.slug}</guid>
      <description><![CDATA[${p.description}]]></description>
      <pubDate>${p.pubDate}</pubDate>
      <category><![CDATA[${p.category}]]></category>
    </item>`
  ).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>MenuPricer Blog — Restaurant Pricing &amp; Food Cost Guides</title>
    <link>${BASE}/blog</link>
    <description>Practical guides on menu pricing, food cost calculation, and restaurant profitability for independent restaurant owners.</description>
    <language>en-us</language>
    <lastBuildDate>Mon, 21 Jul 2026 00:00:00 GMT</lastBuildDate>
    <atom:link href="${BASE}/feed.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${BASE}/opengraph-image</url>
      <title>MenuPricer Blog</title>
      <link>${BASE}/blog</link>
    </image>
${items}
  </channel>
</rss>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
