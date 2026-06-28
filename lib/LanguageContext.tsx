"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Lang } from "./i18n";

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
}>({ lang: "EN", setLang: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("EN");

  useEffect(() => {
    const saved = localStorage.getItem("menupricer_lang") as Lang | null;
    if (saved === "ZH") setLang("ZH");
  }, []);

  const handleSet = (l: Lang) => {
    setLang(l);
    localStorage.setItem("menupricer_lang", l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSet }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
