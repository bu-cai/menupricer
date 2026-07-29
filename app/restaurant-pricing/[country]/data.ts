export interface CountryPricingData {
  slug: string;
  name: string;
  currencyCode: "GBP" | "CAD" | "AUD";
  currencySymbol: string;
  taxName: string;
  taxRate: string;
  taxNote: string;
  foodCostRange: string;
  laborCostRange: string;
  keyDifference: { title: string; body: string };
  taxDetails: { title: string; body: string }[];
  benchmarks: { type: string; foodCost: string; labor: string }[];
  faqs: { q: string; a: string }[];
}

export const COUNTRY_DATA: Record<string, CountryPricingData> = {
  uk: {
    slug: "uk",
    name: "United Kingdom",
    currencyCode: "GBP",
    currencySymbol: "£",
    taxName: "VAT",
    taxRate: "20%",
    taxNote: "included in the menu price, not added at the till",
    foodCostRange: "28–35%",
    laborCostRange: "28–34%",
    keyDifference: {
      title: "Menu prices must include VAT — this is the single biggest pricing difference from the US",
      body: "In the UK, the price printed on the menu is what the customer pays. VAT at the standard 20% rate is already built into that number, not added at the register the way US sales tax is. This means every dish's menu price calculation needs to work backwards from a VAT-inclusive target, and food cost percentage should be calculated against the VAT-exclusive portion of revenue, not the sticker price. Getting this backwards is the most common pricing mistake UK operators new to costing make.",
    },
    taxDetails: [
      { title: "VAT is included in the sticker price", body: "Unlike US sales tax added at checkout, UK menu prices are VAT-inclusive by law for consumer-facing pricing. A £15.00 dish already has VAT built in — the customer never sees a different final total." },
      { title: "Hot food and dine-in are usually standard-rated", body: "Most hot food consumed on the premises is taxed at the standard 20% VAT rate. Some cold food and takeaway items can qualify for zero-rating or reduced rates — this affects margin differently by menu category, so check current HMRC guidance for your specific items rather than assuming a blanket rate." },
      { title: "Food cost percentage should be calculated net of VAT", body: "When calculating food cost percentage, divide ingredient cost by the VAT-exclusive revenue (menu price ÷ 1.20 at the standard rate), not the VAT-inclusive sticker price. Using the sticker price directly understates your true food cost percentage." },
    ],
    benchmarks: [
      { type: "Gastropub", foodCost: "30–35%", labor: "28–32%" },
      { type: "Fine dining", foodCost: "26–32%", labor: "32–38%" },
      { type: "Fast casual", foodCost: "28–33%", labor: "26–30%" },
      { type: "Café / coffee shop", foodCost: "20–28%", labor: "28–34%" },
    ],
    faqs: [
      { q: "Do UK restaurant menu prices include VAT?", a: "Yes. UK consumer-facing menu prices must be VAT-inclusive — the price shown is the price paid, with the standard 20% VAT already built in. This is different from US pricing, where sales tax is added at checkout on top of the menu price." },
      { q: "How do I calculate food cost percentage correctly with VAT?", a: "Calculate food cost percentage against VAT-exclusive revenue, not the sticker price. Divide the menu price by 1.20 (at the standard 20% rate) to get the VAT-exclusive amount, then divide ingredient cost by that number. Using the VAT-inclusive sticker price directly will understate your true food cost percentage." },
      { q: "Is service charge common on UK restaurant bills?", a: "An optional service charge, typically 10-12.5%, is common in UK restaurants, especially for larger parties, and is usually discretionary rather than automatically added the way it sometimes is in the US for large groups. It should be itemized separately from the VAT-inclusive food and drink prices." },
    ],
  },

  canada: {
    slug: "canada",
    name: "Canada",
    currencyCode: "CAD",
    currencySymbol: "C$",
    taxName: "GST/HST/PST",
    taxRate: "5–15% (varies by province)",
    taxNote: "added at checkout, not included in the menu price",
    foodCostRange: "28–34%",
    laborCostRange: "28–33%",
    keyDifference: {
      title: "Sales tax varies significantly by province — there is no single 'Canadian' tax rate to price against",
      body: "Unlike the UK's single national VAT rate, Canada's tax on restaurant meals depends entirely on which province you operate in. Some provinces use a combined Harmonized Sales Tax (HST), others charge federal GST plus a separate provincial sales tax (PST), and rates range from 5% to 15% depending on location. A menu pricing strategy that works in Ontario doesn't automatically transfer to Alberta or British Columbia — check your specific province's current rate before finalizing prices.",
    },
    taxDetails: [
      { title: "Tax is added at checkout, not included in the menu price", body: "Following the North American convention, Canadian menu prices are typically shown before tax, with GST/HST/PST added at the register — the opposite convention from the UK's VAT-inclusive pricing." },
      { title: "HST provinces vs. GST+PST provinces", body: "Provinces like Ontario use a combined Harmonized Sales Tax (13% in Ontario). Others, like British Columbia, charge federal GST (5%) plus a separate provincial sales tax on top. Alberta charges only the federal 5% GST with no provincial sales tax. Always confirm your specific province's current combined rate rather than assuming a national figure." },
      { title: "Tipping culture is similar to the US, unlike the UK or Australia", body: "Canada shares the North American tipping norm of 15-20% expected on top of the bill, which affects total guest spend perception differently than in the UK (where service charge is often optional) or Australia (where tipping is uncommon and staff wages are structured accordingly)." },
    ],
    benchmarks: [
      { type: "Casual dining", foodCost: "29–34%", labor: "28–32%" },
      { type: "Fine dining", foodCost: "26–31%", labor: "33–38%" },
      { type: "Fast casual", foodCost: "28–32%", labor: "25–29%" },
      { type: "Café / coffee shop", foodCost: "20–27%", labor: "27–32%" },
    ],
    faqs: [
      { q: "What sales tax applies to restaurant meals in Canada?", a: "It depends entirely on the province. Provinces with Harmonized Sales Tax (HST) charge a single combined rate, such as 13% in Ontario. Other provinces charge federal GST (5%) plus a separate provincial sales tax, and rates can total anywhere from 5% to 15% depending on location. Always confirm your specific province's current rate." },
      { q: "Are Canadian menu prices shown before or after tax?", a: "Before tax, following the North American convention. GST/HST/PST is added at checkout, unlike the UK where VAT is built into the sticker price. This is the same convention used in the US." },
      { q: "Does tipping culture affect how Canadian restaurants should price menus?", a: "Tipping in Canada follows US-style norms of 15-20% expected on the bill, which is a different guest cost expectation than the UK's optional service charge model or Australia's no-tipping culture. This affects perceived total cost to the guest even though it doesn't directly change your menu pricing formula." },
    ],
  },

  australia: {
    slug: "australia",
    name: "Australia",
    currencyCode: "AUD",
    currencySymbol: "A$",
    taxName: "GST",
    taxRate: "10%",
    taxNote: "included in the menu price, and labor cost is driven heavily by penalty rates",
    foodCostRange: "28–33%",
    laborCostRange: "30–38%",
    keyDifference: {
      title: "Penalty rates on weekends and public holidays are the single biggest cost factor unique to Australia",
      body: "Australian award wages require significantly higher pay rates for staff working evenings, weekends, and public holidays — commonly 25-50% above weekday rates on Saturdays, higher again on Sundays, and often close to double time on public holidays. This is a structural labor cost that does not exist in the same form in the US, UK, or Canada, and it means Australian restaurants often need higher weekend menu prices or a different staffing model just to maintain the same margin they hit on a Tuesday.",
    },
    taxDetails: [
      { title: "GST is included in the menu price, similar to UK VAT", body: "Australia's 10% GST is built into the sticker price the customer sees, following a similar convention to UK VAT rather than the North American added-at-checkout model." },
      { title: "Penalty rates dramatically change labor cost by day and time", body: "Award-based penalty rates mean the same staff member doing the same job costs meaningfully more to schedule on a Saturday evening or Sunday than a Tuesday afternoon, and public holiday rates can approach double the base rate. This needs to be factored into both staffing decisions and, in many cases, weekend or public holiday surcharges on the menu." },
      { title: "No tipping culture, unlike the US or Canada", body: "Tipping is not an expected part of dining out in Australia. Menu prices and wages are structured on the assumption that staff are paid a proper wage without relying on tips to supplement income, which is a fundamentally different cost and staffing model than tip-reliant markets." },
    ],
    benchmarks: [
      { type: "Casual dining", foodCost: "28–33%", labor: "30–36%" },
      { type: "Fine dining", foodCost: "26–31%", labor: "35–42%" },
      { type: "Fast casual", foodCost: "28–32%", labor: "27–32%" },
      { type: "Café / coffee shop", foodCost: "22–28%", labor: "30–36%" },
    ],
    faqs: [
      { q: "What are penalty rates and how do they affect restaurant pricing in Australia?", a: "Penalty rates are legally mandated higher pay rates for staff working evenings, weekends, and public holidays under Australian awards — commonly 25-50% above weekday rates on Saturdays, more on Sundays, and often close to double time on public holidays. Many restaurants need higher weekend prices or a leaner weekend staffing model to maintain consistent margin across the week." },
      { q: "Does the Australian menu price include GST?", a: "Yes. Australia's 10% GST is included in the displayed menu price, similar to how UK VAT works, rather than being added at checkout the way US and Canadian sales tax typically is." },
      { q: "Should Australian restaurants tip staff into their pricing model?", a: "No — tipping is not an expected part of Australian dining culture. Staff are paid award wages (with penalty rate loadings for weekends and holidays) without an assumption that tips will supplement income, which is a different foundational cost structure than tip-reliant markets like the US or Canada." },
    ],
  },
};

export const ALL_COUNTRIES = Object.values(COUNTRY_DATA);
