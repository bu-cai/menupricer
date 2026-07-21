import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SessionWrapper from "@/components/SessionWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://www.aimenupricer.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "AI Menu Pricing Tool & Menu Calculator for Restaurants | Free Food Cost Calculator | MenuPricer",
    template: "%s | MenuPricer",
  },
  description:
    "Free menu calculator and AI pricing tool for restaurants. Enter ingredient costs and get profit-optimized menu prices in seconds — with margin analysis and PDF export.",
  keywords: [
    "menu calculator",
    "menu pricing tool",
    "food cost calculator",
    "restaurant menu pricing",
    "AI menu pricing",
    "profit margin calculator restaurant",
    "restaurant pricing software",
    "menu price calculator",
    "food cost percentage",
    "menu metric",
  ],
  authors: [{ name: "MenuPricer" }],
  creator: "MenuPricer",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "MenuPricer",
    title: "Free Menu Calculator & AI Pricing Tool for Restaurants — MenuPricer",
    description:
      "Free menu calculator for restaurant owners. Enter ingredient costs and get AI-powered menu prices in seconds — with profit margin analysis and PDF export.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MenuPricer — AI-powered menu pricing for restaurants",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Menu Calculator & AI Pricing Tool — MenuPricer",
    description:
      "Free menu calculator for restaurants. AI-powered pricing with profit margin analysis.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "MenuPricer",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              url: BASE_URL,
              description:
                "AI-powered menu pricing tool for restaurant owners. Enter ingredient costs and get optimal pricing recommendations with profit margin analysis.",
              offers: [
                {
                  "@type": "Offer",
                  name: "Free Plan",
                  price: "0",
                  priceCurrency: "USD",
                  description: "Price up to 5 dishes free. No credit card required.",
                },
                {
                  "@type": "Offer",
                  name: "Pro Monthly",
                  price: "9.00",
                  priceCurrency: "USD",
                  description: "Unlimited dishes, batch pricing, PDF export.",
                },
                {
                  "@type": "Offer",
                  name: "Pro Annual",
                  price: "79.00",
                  priceCurrency: "USD",
                  description: "Best value — save $29 vs monthly.",
                },
              ],
              featureList: [
                "AI menu pricing recommendations",
                "Food cost calculator",
                "Profit margin analysis",
                "Menu calculator",
                "Delivery platform commission calculator",
                "Multi-currency support (USD, CNY, EUR)",
                "PDF menu export",
                "Recipe library",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is a good food cost percentage for a restaurant?",
                  acceptedAnswer: { "@type": "Answer", text: "A good food cost percentage is 28–35% of the menu price. Fine dining can go up to 38%; fast casual should stay below 30%. MenuPricer calculates this automatically for every dish." },
                },
                {
                  "@type": "Question",
                  name: "How do I calculate menu pricing?",
                  acceptedAnswer: { "@type": "Answer", text: "Divide your ingredient cost by your target food cost percentage. If a dish costs $4 to make and you want 30% food cost, the menu price is $4 ÷ 0.30 = $13.33. MenuPricer automates this and shows Budget, Standard, and Premium price tiers." },
                },
                {
                  "@type": "Question",
                  name: "How much does DoorDash charge restaurants?",
                  acceptedAnswer: { "@type": "Answer", text: "DoorDash charges 15–30% commission depending on plan (Basic: 25–30%, Plus: 20–25%, Premier: 15%), plus ~2.9% payment processing. MenuPricer calculates a delivery-adjusted price that offsets these fees." },
                },
                {
                  "@type": "Question",
                  name: "Is MenuPricer free to use?",
                  acceptedAnswer: { "@type": "Answer", text: "Yes. MenuPricer is free for up to 5 dishes with no credit card required. The Pro plan ($9/month or $79/year) unlocks unlimited dishes, batch pricing, and PDF export." },
                },
                {
                  "@type": "Question",
                  name: "What currencies does MenuPricer support?",
                  acceptedAnswer: { "@type": "Answer", text: "MenuPricer supports USD, CNY (Chinese Yuan), and EUR. You can switch currencies from the settings panel at the top of the page." },
                },
                {
                  "@type": "Question",
                  name: "How do I price a dish for delivery vs. dine-in?",
                  acceptedAnswer: { "@type": "Answer", text: "Set your dine-in price based on food cost + target margin. Then add 15–25% for delivery platforms to offset commissions. MenuPricer shows both prices in every pricing report." },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <SessionWrapper>{children}</SessionWrapper>
      </body>
    </html>
  );
}
