"use client";

import { useState } from "react";
import { useSession, signIn } from "next-auth/react";
import { useLang } from "@/lib/LanguageContext";

interface Props {
  onClose: () => void;
  reason?: "menu_limit";
}

const FEATURES = [
  { en: "Unlimited menu items", zh: "无限菜品数量" },
  { en: "Cloud sync across devices", zh: "跨设备云同步" },
  { en: "PDF menu export with branding", zh: "品牌 PDF 菜单导出" },
  { en: "Batch pricing (up to 20 dishes)", zh: "批量定价（最多 20 道）" },
  { en: "Analytics dashboard", zh: "分析 Dashboard" },
  { en: "Dish tags & categories", zh: "菜品标签与分类" },
];

export default function UpgradeModal({ onClose, reason }: Props) {
  const { data: session } = useSession();
  const { lang } = useLang();
  const isZH = lang === "ZH";
  const [loading, setLoading] = useState(false);

  async function handleUpgrade() {
    if (!session) {
      signIn("google");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/stripe/checkout", { method: "POST" });
      const { url } = await res.json();
      if (url) window.location.href = url;
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-8 text-white text-center relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          {reason === "menu_limit" && (
            <div className="inline-block bg-white/20 rounded-full px-3 py-1 text-sm mb-3">
              {isZH ? "已达免费版上限" : "Free plan limit reached"}
            </div>
          )}
          <div className="text-5xl mb-3">🚀</div>
          <h2 className="text-2xl font-bold">
            {isZH ? "升级到 Pro" : "Upgrade to Pro"}
          </h2>
          <div className="mt-3">
            <span className="text-4xl font-bold">$9</span>
            <span className="text-white/80 ml-1">{isZH ? "/ 月" : "/ month"}</span>
          </div>
        </div>

        {/* Features */}
        <div className="p-6">
          <ul className="space-y-3 mb-6">
            {FEATURES.map((f, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700">
                <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold flex-shrink-0">
                  ✓
                </span>
                {isZH ? f.zh : f.en}
              </li>
            ))}
          </ul>

          <div className="space-y-3">
            <button
              onClick={handleUpgrade}
              disabled={loading}
              className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-bold py-4 rounded-xl transition-colors text-lg"
            >
              {loading
                ? (isZH ? "跳转中..." : "Redirecting...")
                : (isZH ? "立即升级 — $9/月" : "Upgrade Now — $9/month")}
            </button>
            <button
              onClick={onClose}
              className="w-full py-3 text-gray-400 text-sm hover:text-gray-600 transition-colors"
            >
              {isZH ? "继续使用免费版" : "Continue with free plan"}
            </button>
          </div>

          <p className="text-center text-xs text-gray-400 mt-4">
            {isZH
              ? "随时取消 · 安全支付（Stripe）"
              : "Cancel anytime · Secure payment via Stripe"}
          </p>
        </div>
      </div>
    </div>
  );
}
