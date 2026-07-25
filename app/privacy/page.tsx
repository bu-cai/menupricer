import type { Metadata } from "next";
import Link from "next/link";
import LogoIcon from "@/components/LogoIcon";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "MenuPricer privacy policy — how we collect, use, and protect your data.",
  alternates: { canonical: "https://www.aimenupricer.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <LogoIcon size={28} />
            <span className="font-black text-gray-900 tracking-tight text-lg">Menu<span className="text-orange-500">Pricer</span></span>
          </Link>
          <span className="text-gray-300 text-sm">·</span>
          <span className="text-sm text-gray-500">Privacy Policy</span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-black text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-400 mb-10">Last updated: January 1, 2026</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Who We Are</h2>
            <p>MenuPricer ("we", "us", or "our") operates <strong>aimenupricer.com</strong>, an AI-powered menu pricing tool for restaurant owners. We are committed to protecting your privacy.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Account data:</strong> When you sign in with Google, we receive your name, email address, and profile picture from Google OAuth.</li>
              <li><strong>Usage data:</strong> Dish names, ingredient costs, and pricing results you enter into the tool. This data is used to provide the service and is stored only when you are signed in.</li>
              <li><strong>Analytics:</strong> We use anonymized usage analytics (page views, feature usage) to improve the product. No personally identifiable information is included in analytics data.</li>
              <li><strong>Cookies:</strong> We use session cookies necessary for authentication. We do not use advertising cookies or third-party tracking cookies.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and improve the MenuPricer service</li>
              <li>To authenticate your account and sync your data across devices (Pro plan)</li>
              <li>To send transactional emails (receipts, account notifications)</li>
              <li>To respond to support requests</li>
            </ul>
            <p className="mt-3">We do not sell your personal data to third parties. We do not use your recipe or cost data for advertising purposes.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Data Storage and Security</h2>
            <p>Your data is stored on servers in the United States. We use industry-standard encryption (TLS) for data in transit and at rest. Access to your data is restricted to authorized personnel only.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Third-Party Services</h2>
            <p>We use the following third-party services to operate MenuPricer:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Google OAuth</strong> — authentication (subject to Google's Privacy Policy)</li>
              <li><strong>Anthropic / OpenAI</strong> — AI pricing analysis (dish names and costs may be sent to AI APIs; we do not send personal identifiers)</li>
              <li><strong>Stripe</strong> — payment processing for Pro subscriptions (subject to Stripe's Privacy Policy; we do not store payment card data)</li>
              <li><strong>Vercel</strong> — hosting and edge delivery</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Your Rights</h2>
            <p>You may at any time:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the data we hold about you by contacting us</li>
              <li>Request deletion of your account and all associated data</li>
              <li>Export your saved recipes and pricing history</li>
            </ul>
            <p className="mt-3">To exercise these rights, email us at <a href="mailto:xiaocaiwang14@gmail.com" className="text-orange-500 hover:underline">xiaocaiwang14@gmail.com</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Data Retention</h2>
            <p>We retain your account and recipe data for as long as your account is active. If you delete your account, your data is permanently deleted within 30 days. Anonymized usage analytics are retained indefinitely.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Children's Privacy</h2>
            <p>MenuPricer is not directed at children under 13. We do not knowingly collect personal information from children under 13.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Material changes will be communicated via email or a notice on the site. Continued use of MenuPricer after changes constitutes acceptance of the updated policy.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">10. Contact</h2>
            <p>For privacy-related questions, contact us at <a href="mailto:xiaocaiwang14@gmail.com" className="text-orange-500 hover:underline">xiaocaiwang14@gmail.com</a>.</p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 flex gap-6 text-sm text-gray-400">
          <Link href="/terms" className="hover:text-gray-600 transition-colors">Terms of Service</Link>
          <Link href="/" className="hover:text-gray-600 transition-colors">Back to MenuPricer</Link>
        </div>
      </main>
    </div>
  );
}
