import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "MenuPricer terms of service — the rules and conditions for using our restaurant pricing tool.",
  alternates: { canonical: "https://www.aimenupricer.com/terms" },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <LogoIcon size={28} />
            <span className="font-black text-gray-900 tracking-tight text-lg">Menu<span className="text-orange-500">Pricer</span></span>
          </Link>
          <span className="text-gray-300 text-sm">·</span>
          <span className="text-sm text-gray-500">Terms of Service</span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-black text-gray-900 mb-2">Terms of Service</h1>
        <p className="text-sm text-gray-400 mb-10">Last updated: January 1, 2026</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Acceptance of Terms</h2>
            <p>By accessing or using MenuPricer at <strong>aimenupricer.com</strong> ("the Service"), you agree to be bound by these Terms of Service. If you do not agree, do not use the Service.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Description of Service</h2>
            <p>MenuPricer is an AI-powered menu pricing tool that helps restaurant owners calculate food costs, set menu prices, and analyze profit margins. The Service includes both free and paid (Pro) tiers.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Accounts</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You may use basic features without an account. An account is required for saving recipes, cloud sync, and Pro features.</li>
              <li>You are responsible for maintaining the security of your account.</li>
              <li>You must provide accurate information when creating an account.</li>
              <li>You may not share your account credentials with others.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Pro Subscription</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Pro plans are billed monthly ($9/month) or annually ($79/year).</li>
              <li>Subscriptions auto-renew unless cancelled before the renewal date.</li>
              <li>You may cancel at any time. Access continues until the end of the billing period.</li>
              <li>We do not offer refunds for partial billing periods, except where required by law.</li>
              <li>We reserve the right to change pricing with 30 days' notice to existing subscribers.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the Service for any unlawful purpose</li>
              <li>Attempt to reverse-engineer, scrape, or copy the Service's AI models or pricing logic</li>
              <li>Use automated tools to access the Service at scale without prior written consent</li>
              <li>Resell or redistribute the Service's outputs as a competing product</li>
              <li>Interfere with the security or performance of the Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. AI Pricing Disclaimer</h2>
            <p>MenuPricer's AI pricing suggestions are for informational purposes only. They are based on general market data and the costs you provide. They are not a guarantee of profitability. You are solely responsible for your pricing decisions. MenuPricer is not liable for any business losses resulting from using our suggestions.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Intellectual Property</h2>
            <p>The MenuPricer software, design, and brand are owned by MenuPricer and protected by copyright and trademark law. You retain ownership of the recipe and cost data you enter into the Service.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, MenuPricer shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Service. Our total liability shall not exceed the amount you paid us in the 12 months preceding the claim.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">9. Service Availability</h2>
            <p>We aim for high availability but do not guarantee uninterrupted access. We reserve the right to modify, suspend, or discontinue the Service at any time with reasonable notice.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">10. Termination</h2>
            <p>We may suspend or terminate your account if you violate these Terms. You may delete your account at any time. Upon termination, your data will be deleted in accordance with our Privacy Policy.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">11. Governing Law</h2>
            <p>These Terms are governed by the laws of the United States. Disputes shall be resolved through binding arbitration, except where prohibited by law.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">12. Changes to Terms</h2>
            <p>We may update these Terms. Material changes will be communicated with at least 14 days' notice. Continued use after changes constitutes acceptance.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">13. Contact</h2>
            <p>For questions about these Terms, contact us at <a href="mailto:xiaocaiwang14@gmail.com" className="text-orange-500 hover:underline">xiaocaiwang14@gmail.com</a>.</p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 flex gap-6 text-sm text-gray-400">
          <Link href="/privacy" className="hover:text-gray-600 transition-colors">Privacy Policy</Link>
          <Link href="/" className="hover:text-gray-600 transition-colors">Back to MenuPricer</Link>
        </div>
      </main>
    </div>
  );
}
