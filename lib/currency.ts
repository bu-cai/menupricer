export type Currency = "USD" | "CNY" | "EUR";

export const RATES: Record<Currency, number> = {
  USD: 1,
  CNY: 7.2,
  EUR: 0.92,
};

export const SYMBOLS: Record<Currency, string> = {
  USD: "$",
  CNY: "¥",
  EUR: "€",
};

export function toDisplay(usdValue: number, currency: Currency): number {
  return usdValue * RATES[currency];
}

export function fromDisplay(displayValue: number, currency: Currency): number {
  return displayValue / RATES[currency];
}

export function symbol(currency: Currency): string {
  return SYMBOLS[currency];
}

export function formatPrice(usdValue: number, currency: Currency): string {
  const val = toDisplay(usdValue, currency);
  const sym = SYMBOLS[currency];
  return currency === "CNY" ? `${sym}${val.toFixed(1)}` : `${sym}${val.toFixed(2)}`;
}
