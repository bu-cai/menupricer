"use client";

import { useState } from "react";
import { useSession, signIn } from "next-auth/react";
import { useLang } from "@/lib/LanguageContext";

interface Props {
  onClose: () => void;
  reason?: "menu_limit" | "batch_pricing" | "upgrade_required" | "pdf_export";
}

// Features written as outcomes, not feature names
const FEATURES = [
  {
    en: "Unlimited dishes — price your entire menu",
    zh: "无限菜品 — 给整份菜单定价",
    icon: "🍽️",
  },
  {
    en: "Batch pricing — price 20 dishes at once",
    zh: "批量定价 — 一次定价 20 道菜",
    icon: "⚡",
  },
  {
    en: "Analytics — see which dishes make you the most money",
    zh: "分析面板 — 看清哪些菜最赚钱",
    icon: "📊",
  },
  {
    en: "PDF export — send a branded menu to your printer",
    zh: "PDF 导出 — 发给印刷厂的品牌菜单",
    icon: "📄",
  },
  {
    en: "Cloud sync — your menu saved automatically across all devices",
    zh: "云同步 — 菜单自动保存，多设备随时查看",
    icon: "☁️",
  },
];

const TESTIMONIAL = {
  en: `"My BBQ platter margin went from 48% to 71% after one repricing."`,
  zh: `"一次调价后，我的BBQ套餐利润从 48% 提升到了 71%。"`,
  author: "Marcus T. · Restaurant Owner, Texas",
};

export default function UpgradeModal({ onClose, reason }: Props) {
  const { data: session } = useSession();
  const { lang } = useLang();
  const isZH = lang === "ZH";
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState<"monthly" | "annual">("annual");

  async function handleUpgrade() {
    if (!session) {
      signIn("google");
      return;
    }
    setLoading(true);
    try {
      const qs = plan === "annual" ? "?plan=annual" : "";
      const res = await fetch(`/api/stripe/checkout${qs}`, { method: "POST" });
      const { url } = await res.json();
      if (url) window.location.href = url;
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden">

        {/* Header — outcome-focused, not "upgrade to pro" */}
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-7 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
            aria-label="Close"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>

          {/* Context-aware headline — shows what they've built */}
          {reason === "menu_limit" ? (
            <>
              <div className="inline-block bg-white/20 rounded-full px-3 py-1 text-xs font-semibold mb-3">
                {isZH ? "你的菜单正在成长" : "Your menu is growing"}
              </div>
              <h2 className="text-xl font-black leading-snug mb-1">
                {isZH
                  ? "已定价 5 道菜 — 解锁整份菜单"
                  : "You've priced 5 dishes — unlock your full menu"}
              </h2>
              <p className="text-sm text-orange-100">
                {isZH
                  ? "Pro 用户平均在 30 天内定价 18 道菜"
                  : "Pro users price an average of 18 dishes in their first month"}
              </p>
            </>
          ) : reason === "pdf_export" ? (
            <>
              <div className="inline-block bg-white/20 rounded-full px-3 py-1 text-xs font-semibold mb-3">
                {isZH ? "Pro 专属功能" : "Pro feature"}
              </div>
              <h2 className="text-xl font-black leading-snug mb-1">
                {isZH
                  ? "导出品牌菜单 PDF — 直接发给印刷厂"
                  : "Export a branded menu PDF — ready for print"}
              </h2>
              <p className="text-sm text-orange-100">
                {isZH
                  ? "含餐厅名、口号、价格分档，一键生成专业菜单"
                  : "Your restaurant name, tagline, and tiered prices — one click"}
              </p>
            </>
          ) : reason === "batch_pricing" || reason === "upgrade_required" ? (
            <>
              <div className="inline-block bg-white/20 rounded-full px-3 py-1 text-xs font-semibold mb-3">
                {isZH ? "Pro 专属功能" : "Pro feature"}
              </div>
              <h2 className="text-xl font-black leading-snug mb-1">
                {isZH
                  ? "批量定价 — 一次定价整份菜单"
                  : "Batch pricing — price your whole menu at once"}
              </h2>
              <p className="text-sm text-orange-100">
                {isZH
                  ? "输入 20 道菜，AI 自动定价全部"
                  : "Enter 20 dishes, AI prices them all in seconds"}
              </p>
            </>
          ) : (
            <>
              <h2 className="text-xl font-black leading-snug mb-1">
                {isZH
                  ? "解锁完整定价工具包"
                  : "Unlock the full pricing toolkit"}
              </h2>
              <p className="text-sm text-orange-100">
                {isZH
                  ? "给整份菜单定价 — 不只是前 5 道"
                  : "Price your entire menu — not just the first 5 dishes"}
              </p>
            </>
          )}

          {/* Plan toggle */}
          <div className="mt-4 flex items-center gap-2">
            <div className="flex bg-white/15 rounded-lg p-0.5 gap-0.5">
              <button
                onClick={() => setPlan("monthly")}
                className={`px-3 py-1.5 rounded-md text-xs font-bold transition-colors ${plan === "monthly" ? "bg-white text-orange-600" : "text-white/80 hover:text-white"}`}
              >
                {isZH ? "月付 $9" : "Monthly $9"}
              </button>
              <button
                onClick={() => setPlan("annual")}
                className={`px-3 py-1.5 rounded-md text-xs font-bold transition-colors ${plan === "annual" ? "bg-white text-orange-600" : "text-white/80 hover:text-white"}`}
              >
                {isZH ? "年付 $79" : "Annual $79"}
              </button>
            </div>
            {plan === "annual" && (
              <span className="bg-yellow-400 text-yellow-900 text-xs font-black px-2 py-0.5 rounded-full">
                {isZH ? "省 $29" : "Save $29"}
              </span>
            )}
          </div>
          <p className="text-xs text-orange-200 mt-1.5">
            {plan === "annual"
              ? (isZH ? "≈ $6.6/月 · 随时取消" : "≈ $6.6/mo · Cancel anytime")
              : (isZH ? "$9/月 · 随时取消" : "$9/mo · Cancel anytime")}
          </p>
        </div>

        <div className="p-6">
          {/* Features as outcomes */}
          <ul className="space-y-2.5 mb-5">
            {FEATURES.map((f, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                <span className="text-base">{f.icon}</span>
                {isZH ? f.zh : f.en}
              </li>
            ))}
          </ul>

          {/* Social proof — real testimonial */}
          <blockquote className="bg-orange-50 border-l-2 border-orange-400 rounded-r-xl px-4 py-3 mb-5">
            <p className="text-xs text-gray-600 italic leading-relaxed">
              {isZH ? TESTIMONIAL.zh : TESTIMONIAL.en}
            </p>
            <p className="text-xs text-gray-400 mt-1 font-medium">{TESTIMONIAL.author}</p>
          </blockquote>

          {/* CTA — action + outcome, price is secondary */}
          <div className="space-y-2">
            <button
              onClick={handleUpgrade}
              disabled={loading}
              className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-black py-4 rounded-xl transition-colors text-base"
            >
              {loading
                ? (isZH ? "跳转中..." : "Redirecting...")
                : plan === "annual"
                  ? (isZH ? "解锁完整菜单 — $79/年" : "Unlock My Full Menu — $79/yr")
                  : (isZH ? "解锁完整菜单 — $9/月" : "Unlock My Full Menu — $9/mo")}
            </button>
            <button
              onClick={onClose}
              className="w-full py-2.5 text-gray-400 text-xs hover:text-gray-500 transition-colors"
            >
              {isZH ? "暂时继续使用免费版" : "Keep using the free plan for now"}
            </button>
          </div>

          <p className="text-center text-xs text-gray-400 mt-3">
            {isZH
              ? "500+ 餐厅老板正在使用 · Stripe 安全支付"
              : "500+ restaurant owners · Secure payment via Stripe"}
          </p>
        </div>
      </div>
    </div>
  );
}
