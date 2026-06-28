"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Currency } from "./currency";

const CurrencyContext = createContext<{
  currency: Currency;
  setCurrency: (c: Currency) => void;
}>({ currency: "USD", setCurrency: () => {} });

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<Currency>("USD");

  useEffect(() => {
    const saved = localStorage.getItem("menupricer_currency") as Currency | null;
    if (saved && ["USD", "CNY", "EUR"].includes(saved)) setCurrency(saved);
  }, []);

  const handleSet = (c: Currency) => {
    setCurrency(c);
    localStorage.setItem("menupricer_currency", c);
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency: handleSet }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  return useContext(CurrencyContext);
}
