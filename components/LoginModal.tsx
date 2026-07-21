"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useLang } from "@/lib/LanguageContext";

interface Props {
  onClose: () => void;
}

export default function LoginModal({ onClose }: Props) {
  const { lang } = useLang();
  const isZH = lang === "ZH";
  const [loading, setLoading] = useState(false);

  async function handleSignIn() {
    setLoading(true);
    await signIn("google");
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-sm shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-7 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
            aria-label="Close"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>

          <div className="inline-block bg-white/15 rounded-full px-3 py-1 text-xs font-semibold mb-3">
            {isZH ? "已达今日免费次数" : "Free limit reached"}
          </div>
          <h2 className="text-xl font-black leading-snug mb-1">
            {isZH ? "登录继续使用 AI 定价" : "Sign in to keep pricing"}
          </h2>
          <p className="text-sm text-gray-300 mt-1">
            {isZH
              ? "免费账号每天 3 次 AI 定价，登录后立即继续"
              : "Free accounts get 3 AI pricings per day — sign in to continue"}
          </p>
        </div>

        <div className="p-6">
          {/* What they get */}
          <ul className="space-y-2.5 mb-6">
            {[
              { icon: "🤖", en: "3 AI pricings per day — free forever", zh: "每天 3 次 AI 定价 — 永久免费" },
              { icon: "💾", en: "Save up to 5 dishes to your menu", zh: "菜单最多保存 5 道菜" },
              { icon: "📱", en: "Access from any device", zh: "任何设备都可以访问" },
              { icon: "🔒", en: "Your data stays private", zh: "数据安全私密" },
            ].map((f, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                <span className="text-base">{f.icon}</span>
                {isZH ? f.zh : f.en}
              </li>
            ))}
          </ul>

          {/* Google sign in */}
          <button
            onClick={handleSignIn}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-bold py-3.5 rounded-xl transition-all hover:shadow-sm disabled:opacity-60 text-sm"
          >
            {loading ? (
              <span className="w-5 h-5 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
            )}
            {loading
              ? (isZH ? "跳转中..." : "Redirecting...")
              : (isZH ? "用 Google 账号登录" : "Continue with Google")}
          </button>

          <button
            onClick={onClose}
            className="w-full mt-2 py-2.5 text-gray-400 text-xs hover:text-gray-500 transition-colors"
          >
            {isZH ? "暂时继续浏览" : "Maybe later"}
          </button>

          <p className="text-center text-xs text-gray-400 mt-2">
            {isZH ? "登录即同意我们的服务条款" : "By signing in you agree to our terms of service"}
          </p>
        </div>
      </div>
    </div>
  );
}
