export interface RestaurantTypeData {
  slug: string;
  name: string;
  nameFull: string;
  tagline: string;
  targetMargin: number;
  foodCostPct: number;
  marginRange: string;
  avgCheckSize: string;
  keyChallenge: string;
  dishes: { name: string; cost: number; price: number; margin: number }[];
  tips: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

export const RESTAURANT_TYPES: Record<string, RestaurantTypeData> = {
  "fine-dining": {
    slug: "fine-dining",
    name: "Fine Dining",
    nameFull: "Fine Dining Restaurant",
    tagline: "Premium pricing strategy for upscale restaurants",
    targetMargin: 75,
    foodCostPct: 25,
    marginRange: "72–80%",
    avgCheckSize: "$80–$150 per person",
    keyChallenge: "Justifying premium prices with quality, presentation, and experience",
    dishes: [
      { name: "Pan-Seared Duck Breast", cost: 14.5, price: 58, margin: 75 },
      { name: "Wagyu Beef Tenderloin", cost: 28, price: 110, margin: 75 },
      { name: "Lobster Bisque", cost: 8.5, price: 34, margin: 75 },
      { name: "Truffle Risotto", cost: 11, price: 44, margin: 75 },
      { name: "Chocolate Fondant", cost: 3.5, price: 18, margin: 81 },
    ],
    tips: [
      { title: "Price for experience, not just food", desc: "Fine dining guests pay for ambiance, service, and presentation. Your ingredient cost can go up to 28% without hurting profitability." },
      { title: "Use psychological pricing", desc: "Drop the dollar sign on menus — studies show guests spend 8–12% more without the $ symbol. Use '58' instead of '$58.00'." },
      { title: "Engineer your menu sections", desc: "Place your highest-margin items in the top-right of each section — where eyes naturally land first on a printed menu." },
      { title: "Build in seasonal flexibility", desc: "Price proteins based on seasonal availability. A spring lamb dish priced at 72% margin can be repriced quarterly as costs fluctuate." },
    ],
    faqs: [
      { q: "What food cost percentage should fine dining restaurants target?", a: "Fine dining restaurants typically target 25–30% food cost (70–75% gross margin). Higher-end establishments can sustain up to 32% because premium pricing covers the gap. The key is total prime cost (food + labor) staying below 60% of revenue." },
      { q: "How do I price a tasting menu?", a: "Calculate the total ingredient cost of all courses, then price the tasting menu at 3.5–4x that cost. For example, if 7 courses cost $45 in ingredients, price the menu at $160–$180. Include wine pairing at 40–50% additional markup." },
      { q: "Should fine dining prices include service?", a: "In the US, most fine dining adds 18–22% gratuity automatically. In European-style service-included models, build a 15% service charge into menu prices and communicate it clearly." },
    ],
  },

  "fast-casual": {
    slug: "fast-casual",
    name: "Fast Casual",
    nameFull: "Fast Casual Restaurant",
    tagline: "Efficient menu pricing for fast casual concepts",
    targetMargin: 70,
    foodCostPct: 30,
    marginRange: "67–73%",
    avgCheckSize: "$12–$18 per person",
    keyChallenge: "Competing on value while maintaining healthy margins at high volume",
    dishes: [
      { name: "Build-Your-Own Bowl", cost: 3.8, price: 13, margin: 71 },
      { name: "Signature Burger", cost: 4.2, price: 14, margin: 70 },
      { name: "Chicken Sandwich", cost: 3.5, price: 12, margin: 71 },
      { name: "Street Tacos (3pc)", cost: 2.8, price: 10, margin: 72 },
      { name: "Fresh-Pressed Juice", cost: 1.5, price: 6, margin: 75 },
    ],
    tips: [
      { title: "Bundle to boost average ticket", desc: "A combo (entrée + drink + side) priced at $16 with 68% margin beats three separate items at 72% margin if it increases attachment rate. Bundles increase revenue per transaction by 20–35%." },
      { title: "Price drinks and sides high", desc: "Beverages typically carry 75–85% margins. A $4 fountain drink with $0.40 cost is your most profitable menu item. Sides like fries at $3.50 with 78% margin anchor your profit." },
      { title: "Streamline modifiers", desc: "Every customization option adds labor cost. Limit protein upgrades to +$2–$3 and premium add-ons to +$1–$2. Price upgrades at 80%+ margin." },
      { title: "Monitor food cost weekly", desc: "At fast casual volumes, a 2% food cost increase equals $20K–$40K less profit annually. Use MenuPricer to recalculate prices whenever supplier costs change." },
    ],
    faqs: [
      { q: "What is the ideal food cost for fast casual restaurants?", a: "Fast casual restaurants typically target 28–32% food cost (68–72% gross margin). Chains like Chipotle run at 29–31%. The higher volume compared to fine dining compensates for the tighter margins per item." },
      { q: "How do fast casual restaurants price delivery orders?", a: "Add 15–20% to your in-restaurant prices for delivery to offset platform commissions (15–30% from DoorDash, Uber Eats, etc.). Many fast casual operators maintain separate delivery menus priced 18–22% higher than in-store." },
      { q: "How often should fast casual menus be repriced?", a: "Review food costs monthly and adjust prices quarterly. With volatile protein and produce costs, fast casual restaurants that don't adjust prices for 6+ months often see food cost creep from 30% to 35–37%, significantly eroding margins." },
    ],
  },

  "food-truck": {
    slug: "food-truck",
    name: "Food Truck",
    nameFull: "Food Truck",
    tagline: "Lean menu pricing strategy for food trucks",
    targetMargin: 68,
    foodCostPct: 32,
    marginRange: "65–72%",
    avgCheckSize: "$10–$16 per person",
    keyChallenge: "Covering high operational costs (fuel, permits, commissary) with a small, fast-moving menu",
    dishes: [
      { name: "Signature Tacos (2pc)", cost: 2.5, price: 8, margin: 69 },
      { name: "BBQ Brisket Sandwich", cost: 4.5, price: 14, margin: 68 },
      { name: "Loaded Fries", cost: 1.8, price: 7, margin: 74 },
      { name: "Korean Fried Chicken Bowl", cost: 3.8, price: 12, margin: 68 },
      { name: "Fresh Lemonade", cost: 0.6, price: 4, margin: 85 },
    ],
    tips: [
      { title: "Keep your menu to 6–8 items max", desc: "A tight menu reduces waste, prep time, and inventory costs. Every extra menu item adds 3–5% to your food cost through spoilage and over-ordering." },
      { title: "Price for your event premium", desc: "Festival and event pricing can be 20–30% higher than street pricing. A $10 taco at your regular spot becomes $12–$13 at a food festival — guests expect it and pay it." },
      { title: "Track waste ruthlessly", desc: "Food trucks lose 8–12% of revenue to waste on average. Track daily waste per item and cut anything that consistently goes unsold. One cut item can recover 2–3% food cost." },
      { title: "Drinks are your profit anchor", desc: "A $3 can of soda or $4 bottled water at 85–90% margin can subsidize a signature dish you price competitively. Always push drink attachment." },
    ],
    faqs: [
      { q: "How do food trucks calculate menu prices?", a: "Food trucks typically target 28–35% food cost (65–72% gross margin). Apply the formula: Menu Price = Ingredient Cost ÷ (1 − Target Margin). For a dish costing $3.50 at 68% margin: $3.50 ÷ 0.32 = $10.94, round to $11." },
      { q: "How do commissary costs affect food truck pricing?", a: "Commissary kitchen rental ($400–$1,500/month), fuel ($300–$800/month), and permits ($500–$3,000/year) add significant overhead. Factor these into your pricing by targeting food cost no higher than 32%— leaving enough gross margin to cover these fixed costs." },
      { q: "Should food truck prices match nearby restaurants?", a: "Benchmark against nearby quick-service restaurants, not sit-down restaurants. Food truck guests expect street food pricing but understand the premium for specialty, chef-driven concepts. You can charge 10–15% more than a comparable fast food item if your product is differentiated." },
    ],
  },

  "bakery": {
    slug: "bakery",
    name: "Bakery & Café",
    nameFull: "Bakery and Café",
    tagline: "Margin-focused pricing for bakeries and cafés",
    targetMargin: 70,
    foodCostPct: 30,
    marginRange: "68–75%",
    avgCheckSize: "$8–$15 per person",
    keyChallenge: "Managing high labor and ingredient costs while competing on quality and experience",
    dishes: [
      { name: "Sourdough Loaf", cost: 1.8, price: 9, margin: 80 },
      { name: "Croissant", cost: 0.9, price: 4.5, margin: 80 },
      { name: "Specialty Latte", cost: 0.85, price: 5.5, margin: 85 },
      { name: "Custom Cake (per slice)", cost: 2.5, price: 9, margin: 72 },
      { name: "Breakfast Sandwich", cost: 2.8, price: 9.5, margin: 71 },
    ],
    tips: [
      { title: "Price bread by perceived value, not just cost", desc: "A $1.80 sourdough loaf can sell for $9–$12 at a specialty bakery. Customers pay for craft, sourcing story, and quality. Train staff to explain your fermentation process and local grain sourcing." },
      { title: "Coffee is your highest-margin product", desc: "A specialty latte with $0.85 COGS priced at $5.50 delivers 85% gross margin. Push coffee attachment with every baked good sale — a 'coffee + pastry' combo at $8.50 beats both items sold separately." },
      { title: "Custom orders need separate pricing", desc: "Custom cakes and catering orders should target only 65% margin (higher cost, more labor) but require a minimum order of $50–$100 to be worthwhile. Always charge a deposit." },
      { title: "Use end-of-day markdown strategically", desc: "Discount day-old items by 30–40% in the last hour before closing. This reduces waste and brings in price-sensitive customers who become regulars." },
    ],
    faqs: [
      { q: "What is a good profit margin for a bakery?", a: "Bakeries typically target 68–75% gross margin (25–32% food cost). Bread and pastries can achieve 78–85% margin on ingredients alone, but high labor costs (30–35% of revenue for scratch bakeries) eat into net profit. Target net profit of 8–15%." },
      { q: "How do I price custom cakes?", a: "Custom cake pricing formula: (Ingredient cost × 3) + (Hours of labor × $15–$25/hr) + overhead allocation ($5–$15 per cake). A 3-tier wedding cake with $45 in ingredients and 8 hours of labor: ($45 × 3) + (8 × $20) = $295 minimum. Most wedding cakes sell for $400–$800." },
      { q: "Should bakeries charge more at farmers markets?", a: "Yes — add 15–25% for farmers market pricing to cover booth fees ($50–$200/day), extra prep, and transportation. Market customers expect slight premiums and prioritize quality over price." },
    ],
  },

  "pizza": {
    slug: "pizza",
    name: "Pizza Restaurant",
    nameFull: "Pizza Restaurant",
    tagline: "Profit-optimized pricing for pizza restaurants",
    targetMargin: 72,
    foodCostPct: 28,
    marginRange: "70–76%",
    avgCheckSize: "$15–$30 per order",
    keyChallenge: "Balancing low food costs with delivery platform commissions eating into margins",
    dishes: [
      { name: "Margherita Pizza (12\")", cost: 3.2, price: 14, margin: 77 },
      { name: "Pepperoni Pizza (14\")", cost: 4.5, price: 18, margin: 75 },
      { name: "BBQ Chicken Pizza (12\")", cost: 4.8, price: 17, margin: 72 },
      { name: "Garlic Bread", cost: 0.8, price: 5, margin: 84 },
      { name: "2L Soda", cost: 0.9, price: 4.5, margin: 80 },
    ],
    tips: [
      { title: "Size pricing is your biggest lever", desc: "The jump from 12\" to 14\" pizza uses ~36% more dough but charge only 20–25% more. Most guests choose the larger size, boosting revenue per order without proportional cost increase." },
      { title: "Price delivery menus separately", desc: "Set delivery menu prices 18–22% higher than dine-in. With DoorDash/Uber Eats taking 20–30% commission, a $14 pizza nets you $9.80–$11.20. At delivery pricing of $17, you net $11.90–$13.60." },
      { title: "Bundle deals boost average order value", desc: "A family bundle (large pizza + 2 sides + 2L drink) at $32 with 72% margin outperforms 4 separate items. Bundles increase order frequency and average ticket by 25–40%." },
      { title: "Topping pricing strategy", desc: "Price the first 2 toppings 'free' in your base pizza price, then charge $1.50–$2.50 for additional toppings. Specialty toppings (truffle, prosciutto) can command $3–$5 premium each." },
    ],
    faqs: [
      { q: "What food cost percentage should pizza restaurants target?", a: "Pizza restaurants can achieve some of the lowest food costs in the industry: 22–30% (70–78% gross margin). Dough, sauce, and cheese are inexpensive at scale. A well-run pizza operation targets 25–28% food cost, leaving strong margins to cover labor and rent." },
      { q: "How do pizza restaurants handle delivery pricing?", a: "Most pizza restaurants run dual pricing: in-store prices and delivery prices 15–25% higher. This is increasingly accepted by consumers. Be transparent — list your delivery prices clearly on the app rather than hiding the markup." },
      { q: "How do I price specialty vs. classic pizzas?", a: "Classic pizzas (Margherita, Pepperoni) should be priced at 74–78% margin to attract customers. Specialty pizzas (truffle, seafood) can be priced at 70–72% margin — they cost more but customers expect a premium and the higher absolute price covers it." },
    ],
  },

  "cafe": {
    slug: "cafe",
    name: "Café",
    nameFull: "Café and Coffee Shop",
    tagline: "Smart menu pricing for cafés and coffee shops",
    targetMargin: 72,
    foodCostPct: 28,
    marginRange: "70–80%",
    avgCheckSize: "$7–$14 per person",
    keyChallenge: "Maximizing revenue per seat-hour with high-margin beverages and fast table turns",
    dishes: [
      { name: "Flat White", cost: 0.65, price: 5, margin: 87 },
      { name: "Cold Brew (12oz)", cost: 0.7, price: 5.5, margin: 87 },
      { name: "Avocado Toast", cost: 2.8, price: 11, margin: 75 },
      { name: "Eggs Benedict", cost: 3.5, price: 13, margin: 73 },
      { name: "Açaí Bowl", cost: 3.2, price: 12, margin: 73 },
    ],
    tips: [
      { title: "Coffee is your highest-ROI item — price it confidently", desc: "A flat white at $5 with $0.65 COGS delivers 87% gross margin. Raising it to $5.50 is a 10% revenue increase with zero cost increase. Specialty coffee customers are less price-sensitive than you think." },
      { title: "Push food attachment at POS", desc: "A customer buying a $5 latte is already spending. A prompted 'Would you like a pastry with that?' captures 15–25% of customers for an incremental $3–$6 at 75%+ margin. Train every barista on this." },
      { title: "Merchandise high-margin items visibly", desc: "Retail bags of your coffee beans ($18–$24 at 65% margin) and branded merchandise near the counter capture impulse purchases from loyal customers." },
      { title: "Seasonal drinks justify premium pricing", desc: "A seasonal pumpkin spice or holiday drinks priced $1–$2 above your standard menu creates urgency and novelty. Seasonal specials drive 20–30% higher purchase rates when promoted correctly." },
    ],
    faqs: [
      { q: "What is a good profit margin for a coffee shop?", a: "Coffee and espresso drinks achieve 80–90% gross margin on ingredients. Overall café gross margin (including food) typically runs 65–75%. Net profit for cafés is 6–15% after labor, rent, and equipment costs. The key metric is revenue per labor hour." },
      { q: "How should cafés price specialty coffee vs. drip coffee?", a: "Drip coffee at $2.50–$3.50 acts as a traffic driver and loyalty builder. Specialty espresso drinks at $4.50–$6.50 are your margin drivers. Maintain at least a $2 price gap between drip and specialty to guide customers toward higher-margin choices." },
      { q: "How do I price café food items vs. a bakery?", a: "Café food items should match local bakery/café competitors within 10–15%. If nearby competitors charge $10 for avocado toast, you can charge $10–$11.50 with a quality differentiation story. Café guests anchor food prices to nearby options." },
    ],
  },
};

export const ALL_TYPES = Object.values(RESTAURANT_TYPES);
