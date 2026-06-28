"use client";

import { useState, useEffect } from "react";
import { useLang } from "@/lib/LanguageContext";
import { t } from "@/lib/i18n";

const STORAGE_KEY = "menupricer_onboarded";

const STEPS = [
  { icon: "🍜", stepKey: 1 },
  { icon: "🧮", stepKey: 2 },
  { icon: "🤖", stepKey: 3 },
] as const;

export default function OnboardingModal() {
  const { lang } = useLang();
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState(0);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      const timer = setTimeout(() => setVisible(true), 400);
      return () => clearTimeout(timer);
    }
  }, []);

  const dismiss = () => {
    setClosing(true);
    setTimeout(() => {
      setVisible(false);
      localStorage.setItem(STORAGE_KEY, "1");
    }, 280);
  };

  if (!visible) return null;

  const titles = [
    t("onboardStep1Title", lang),
    t("onboardStep2Title", lang),
    t("onboardStep3Title", lang),
  ];
  const descs = [
    t("onboardStep1Desc", lang),
    t("onboardStep2Desc", lang),
    t("onboardStep3Desc", lang),
  ];

  const isLast = step === STEPS.length - 1;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ animation: closing ? "fade-out 280ms ease both" : "fade-in 300ms ease both" }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={dismiss} />

      {/* Card */}
      <div
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-sm p-6 flex flex-col"
        style={{ animation: closing ? "slide-down 280ms ease both" : "slide-up 300ms ease both" }}
      >
        {/* Skip */}
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 text-xs text-gray-400 hover:text-gray-600 transition-colors"
        >
          {t("onboardSkip", lang)}
        </button>

        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="text-lg font-black text-gray-900">{t("onboardTitle", lang)}</h2>
          <p className="text-xs text-gray-400 mt-0.5">{t("onboardSubtitle", lang)}</p>
        </div>

        {/* Step dots */}
        <div className="flex justify-center gap-2 mb-5">
          {STEPS.map((_, i) => (
            <button
              key={i}
              onClick={() => setStep(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === step ? "w-6 bg-orange-500" : "w-2 bg-gray-200 hover:bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Step content */}
        <div
          key={step}
          className="flex-1 text-center px-2"
          style={{ animation: "slide-up 250ms ease both" }}
        >
          <div className="text-5xl mb-4">{STEPS[step].icon}</div>
          <div className="inline-flex items-center gap-1.5 bg-orange-100 text-orange-600 text-xs font-bold px-2.5 py-1 rounded-full mb-3">
            Step {step + 1} / {STEPS.length}
          </div>
          <h3 className="text-base font-bold text-gray-800 mb-2">{titles[step]}</h3>
          <p className="text-sm text-gray-500 leading-relaxed">{descs[step]}</p>
        </div>

        {/* Actions */}
        <div className="flex gap-2 mt-6">
          {step > 0 && (
            <button
              onClick={() => setStep(step - 1)}
              className="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-500 hover:bg-gray-50 transition-colors font-medium"
            >
              ←
            </button>
          )}
          <button
            onClick={isLast ? dismiss : () => setStep(step + 1)}
            className="flex-1 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm transition-colors"
          >
            {isLast ? t("onboardStart", lang) : t("onboardNext", lang)}
          </button>
        </div>
      </div>
    </div>
  );
}
