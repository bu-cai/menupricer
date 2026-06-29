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
    default: "AI Menu Pricing Tool for Restaurants | Free Food Cost Calculator | MenuPricer",
    template: "%s | MenuPricer",
  },
  description:
    "Calculate the perfect menu price in seconds. Enter your ingredient costs and get AI-powered pricing recommendations with profit margins. Free for restaurant owners.",
  keywords: [
    "menu pricing tool",
    "food cost calculator",
    "restaurant menu pricing",
    "AI menu pricing",
    "profit margin calculator restaurant",
    "restaurant pricing software",
    "menu price calculator",
    "food cost percentage",
  ],
  authors: [{ name: "MenuPricer" }],
  creator: "MenuPricer",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "MenuPricer",
    title: "AI Menu Pricing Tool for Restaurants — MenuPricer",
    description:
      "Enter your food costs and get the perfect menu price in 30 seconds — with profit margin analysis, delivery platform pricing, and AI-written menu copy.",
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
    title: "AI Menu Pricing Tool for Restaurants — MenuPricer",
    description:
      "Enter your food costs and get the perfect menu price in 30 seconds.",
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
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              featureList: [
                "AI menu pricing recommendations",
                "Food cost calculator",
                "Profit margin analysis",
                "Delivery platform commission calculator",
                "Multi-currency support (USD, CNY, EUR)",
                "PDF menu export",
                "Recipe library",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: "87",
              },
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
