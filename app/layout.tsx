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
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
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
      </head>
      <body className="min-h-full flex flex-col">
        <SessionWrapper>{children}</SessionWrapper>
      </body>
    </html>
  );
}
