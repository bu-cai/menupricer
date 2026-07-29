export interface DishPriceData {
  slug: string;
  name: string;
  category: string;
  foodCostRange: string;
  typicalPriceRange: string;
  costBreakdown: { ingredient: string; note: string; costShare: string }[];
  worked: {
    items: { ingredient: string; amount: string; cost: number }[];
    totalCost: number;
    targetFoodCostPct: number;
  };
  mistakes: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

export const DISH_DATA: Record<string, DishPriceData> = {
  pizza: {
    slug: "pizza",
    name: "Pizza",
    category: "Italian",
    foodCostRange: "25–30%",
    typicalPriceRange: "$14–$22 (12-inch)",
    costBreakdown: [
      { ingredient: "Dough", note: "Cheapest component by far — flour, yeast, water, salt", costShare: "8–12%" },
      { ingredient: "Cheese", note: "Usually the single biggest line item", costShare: "30–38%" },
      { ingredient: "Sauce", note: "Low cost if made in-house from canned tomatoes", costShare: "5–8%" },
      { ingredient: "Toppings", note: "The variable that actually swings your margin", costShare: "35–50%" },
    ],
    worked: {
      items: [
        { ingredient: "Dough ball (14 oz)", amount: "1", cost: 0.45 },
        { ingredient: "Mozzarella", amount: "6 oz", cost: 1.35 },
        { ingredient: "Sauce", amount: "4 oz", cost: 0.25 },
        { ingredient: "Pepperoni", amount: "3 oz", cost: 0.9 },
        { ingredient: "Box + labor allowance", amount: "—", cost: 0.6 },
      ],
      totalCost: 3.55,
      targetFoodCostPct: 27,
    },
    mistakes: [
      { title: "Costing cheese by weight before melt loss", desc: "Cheese loses moisture and shrinks during baking. Cost against the pre-bake weight you actually portion, not a theoretical post-bake amount." },
      { title: "Flat pricing every topping the same", desc: "A pepperoni pizza and a prosciutto-and-arugula pizza should not share a menu price if the ingredient cost gap is $1.50 or more per pie." },
      { title: "Ignoring box and delivery packaging cost", desc: "Pizza boxes cost more than most operators assume, and delivery-bound pies need sturdier (pricier) packaging than dine-in." },
    ],
    faqs: [
      { q: "What is a good food cost percentage for pizza?", a: "Most pizzerias target 25–30% food cost. The dough and sauce base is cheap, so cheese and toppings are what actually determine where in that range a specific pizza lands." },
      { q: "How much should a 12-inch pizza cost to make?", a: "A standard cheese-and-one-topping 12-inch pizza typically costs $3.00–$4.50 in ingredients depending on cheese blend and topping choice, supporting a $14–$18 menu price at a 27% food cost target." },
      { q: "Should specialty pizzas cost more than the base menu price?", a: "Yes. Price by actual ingredient cost per pizza, not a flat markup across the menu. A pizza with $2 more in toppings needs roughly $7–$8 more on the menu to hold the same food cost percentage." },
    ],
  },

  burger: {
    slug: "burger",
    name: "Burger",
    category: "American",
    foodCostRange: "28–33%",
    typicalPriceRange: "$11–$16",
    costBreakdown: [
      { ingredient: "Beef patty", note: "The dominant cost, scales directly with patty weight and grade", costShare: "45–55%" },
      { ingredient: "Bun", note: "Brioche and specialty buns cost meaningfully more than standard", costShare: "8–12%" },
      { ingredient: "Cheese + toppings", note: "Bacon and specialty sauces are the common margin killers", costShare: "20–30%" },
      { ingredient: "Fries or side (if included)", note: "Often the item that quietly erodes the combo margin", costShare: "10–15%" },
    ],
    worked: {
      items: [
        { ingredient: "80/20 beef patty (6 oz)", amount: "1", cost: 1.8 },
        { ingredient: "Brioche bun", amount: "1", cost: 0.55 },
        { ingredient: "Cheese slice", amount: "1", cost: 0.3 },
        { ingredient: "Lettuce, tomato, onion, pickle", amount: "—", cost: 0.35 },
        { ingredient: "Sauce", amount: "—", cost: 0.15 },
      ],
      totalCost: 3.15,
      targetFoodCostPct: 30,
    },
    mistakes: [
      { title: "Costing the patty at ground price, not portioned price", desc: "Bulk ground beef price per pound doesn't account for the exact patty weight you portion and cook. Weigh actual patties, not the case label." },
      { title: "Treating bacon as a flat add-on charge", desc: "A $2 bacon upcharge on a burger where bacon actually costs $1.40 barely moves margin. Price add-ons against their real cost, not a round number that feels fair." },
      { title: "Forgetting the bun upgrade cost when menu-testing specialty burgers", desc: "Swapping a standard bun for brioche or pretzel can add $0.30–0.50 that needs to show up in the price, not just the description." },
    ],
    faqs: [
      { q: "What is a good food cost percentage for burgers?", a: "Most burger-focused menus target 28–33% food cost. Beef is volatile, so burgers need more frequent repricing checks than lower-protein items." },
      { q: "How much does a standard burger cost to make?", a: "A 6 oz single-patty cheeseburger with standard toppings typically costs $2.80–$3.60 in ingredients, supporting an $11–$14 menu price at a 30% target." },
      { q: "Should combo pricing be lower than à la carte?", a: "Combos should still hit your target food cost blended across the items, not be priced lower out of habit. Calculate the combined ingredient cost of burger + fries + drink before setting the bundle discount." },
    ],
  },

  coffee: {
    slug: "coffee",
    name: "Coffee (Espresso Drinks)",
    category: "Café",
    foodCostRange: "12–20%",
    typicalPriceRange: "$4.50–$6.50 (16 oz latte)",
    costBreakdown: [
      { ingredient: "Espresso beans", note: "Surprisingly small share of total cost for milk-based drinks", costShare: "10–18%" },
      { ingredient: "Milk", note: "The largest cost driver on lattes and cappuccinos", costShare: "25–40%" },
      { ingredient: "Cup, lid, sleeve", note: "Often larger than the coffee cost itself on to-go orders", costShare: "20–30%" },
      { ingredient: "Syrup / flavoring (if used)", note: "Adds cost fast if pumps aren't standardized", costShare: "10–20%" },
    ],
    worked: {
      items: [
        { ingredient: "Espresso (double shot)", amount: "2 shots", cost: 0.35 },
        { ingredient: "Whole milk", amount: "10 oz", cost: 0.4 },
        { ingredient: "16oz cup + lid + sleeve", amount: "1 set", cost: 0.32 },
      ],
      totalCost: 1.07,
      targetFoodCostPct: 18,
    },
    mistakes: [
      { title: "Not costing packaging separately from the drink", desc: "Cup, lid, and sleeve can be 25-30% of a to-go latte's total cost. Leaving packaging out of the calculation makes every to-go drink look more profitable than it is." },
      { title: "Free-pouring syrup instead of standardized pumps", desc: "Uncounted syrup pumps are one of the most common sources of drink-to-drink cost variance in cafés. Standardize pump counts per size." },
      { title: "Pricing flavored drinks the same as plain ones", desc: "A vanilla latte with 3 pumps of syrup costs meaningfully more than a plain latte. A flat $0.50 upcharge across all flavors ignores that syrup costs vary." },
    ],
    faqs: [
      { q: "What is a good food cost percentage for coffee drinks?", a: "Espresso-based drinks typically run 12-20% food cost — much lower than food, because coffee and milk are cheap relative to the price customers accept for a made-to-order drink." },
      { q: "Why is milk more expensive than coffee in a latte?", a: "A double shot of espresso costs roughly $0.30-0.40, while 10oz of milk for a 16oz latte costs $0.35-0.50 depending on milk type. Oat and other alternative milks can push this higher, up to $0.80-1.00." },
      { q: "How much should packaging add to a to-go coffee price?", a: "Cup, lid, and sleeve for a 16oz drink typically cost $0.25-0.40 combined. If your to-go price matches your for-here price, you are absorbing that packaging cost out of margin." },
    ],
  },

  tacos: {
    slug: "tacos",
    name: "Tacos",
    category: "Mexican",
    foodCostRange: "26–32%",
    typicalPriceRange: "$3.25–$4.50 per taco",
    costBreakdown: [
      { ingredient: "Protein", note: "The main cost driver, varies widely by protein choice", costShare: "40–55%" },
      { ingredient: "Tortillas", note: "Cheap per unit but easy to under-count in costing", costShare: "5–8%" },
      { ingredient: "Toppings (salsa, onion, cilantro, cheese)", note: "Small individually, adds up across volume", costShare: "20–30%" },
      { ingredient: "Garnish / lime", note: "Frequently omitted from costing entirely", costShare: "3–5%" },
    ],
    worked: {
      items: [
        { ingredient: "Carne asada", amount: "2.5 oz cooked", cost: 0.85 },
        { ingredient: "Corn tortillas (2, doubled)", amount: "2", cost: 0.1 },
        { ingredient: "Onion, cilantro, salsa", amount: "—", cost: 0.25 },
        { ingredient: "Lime wedge", amount: "—", cost: 0.05 },
      ],
      totalCost: 1.25,
      targetFoodCostPct: 30,
    },
    mistakes: [
      { title: "Costing one tortilla when the recipe uses two", desc: "Doubled corn tortillas are standard for street-style tacos. Costing only one tortilla per taco understates cost across every order." },
      { title: "Averaging protein cost across the whole menu", desc: "Carne asada, al pastor, and shrimp have very different costs. A single flat taco price across all proteins overprices the cheap ones and underprices the expensive ones." },
      { title: "Skipping garnish in the cost calculation", desc: "Lime, extra salsa, and cotija cheese are individually cheap but omitted so consistently that they become a real, invisible margin leak at volume." },
    ],
    faqs: [
      { q: "What is a good food cost percentage for tacos?", a: "Tacos typically run 26-32% food cost. Protein choice is the main lever — a shrimp or steak taco costs meaningfully more than chicken or vegetarian options." },
      { q: "How many tortillas should be costed per taco?", a: "If your recipe doubles corn tortillas per taco (standard for street-style), cost two tortillas, not one. This is one of the most common under-costing errors in taco pricing." },
      { q: "Should every taco on the menu be priced the same?", a: "No. Price each protein separately based on its actual ingredient cost. A flat price across chicken, steak, and shrimp tacos either overcharges for the cheap ones or loses money on the expensive ones." },
    ],
  },

  sushi: {
    slug: "sushi",
    name: "Sushi Rolls",
    category: "Japanese",
    foodCostRange: "28–35%",
    typicalPriceRange: "$8–$16 per roll",
    costBreakdown: [
      { ingredient: "Fish / seafood", note: "By far the dominant and most volatile cost", costShare: "40–60%" },
      { ingredient: "Rice", note: "Cheap per roll but requires labor-intensive prep", costShare: "8–12%" },
      { ingredient: "Nori, vegetables, sauces", note: "Low individual cost, standardize portions carefully", costShare: "10–15%" },
      { ingredient: "Specialty toppings (tempura flakes, spicy mayo, eel sauce)", note: "Can push a roll from standard to premium pricing tier", costShare: "10–20%" },
    ],
    worked: {
      items: [
        { ingredient: "Sushi rice", amount: "4 oz", cost: 0.35 },
        { ingredient: "Nori sheet", amount: "1", cost: 0.15 },
        { ingredient: "Salmon", amount: "2 oz", cost: 1.6 },
        { ingredient: "Avocado, cucumber", amount: "—", cost: 0.4 },
        { ingredient: "Spicy mayo, sesame", amount: "—", cost: 0.2 },
      ],
      totalCost: 2.7,
      targetFoodCostPct: 32,
    },
    mistakes: [
      { title: "Costing fish at wholesale case price without yield loss", desc: "Whole fish loin loses weight to trimming and portioning. Cost against the usable, portioned weight, not the raw purchase weight." },
      { title: "Not repricing when seafood market prices spike", desc: "Salmon and tuna prices move significantly week to week. Rolls costed once at opening and never revisited are the fastest way to silently erode margin." },
      { title: "Underpricing specialty rolls with multiple premium components", desc: "A roll combining tempura, eel, and spicy mayo has three above-average cost components stacked together — pricing it like a standard roll loses money on every order." },
    ],
    faqs: [
      { q: "What is a good food cost percentage for sushi?", a: "Sushi typically runs 28-35% food cost, higher than many other cuisines because fish and seafood are both expensive and price-volatile." },
      { q: "How do I price sushi when fish prices change weekly?", a: "Track your top 2-3 fish costs weekly rather than monthly. A 15% jump in salmon price that goes unaddressed for a month can meaningfully erode margin on every salmon-based roll sold in that window." },
      { q: "Should specialty rolls cost more to make than they're priced?", a: "They shouldn't, but they often do when multiple premium ingredients stack. Cost each specialty roll individually rather than assuming a standard markup covers it." },
    ],
  },

  wings: {
    slug: "wings",
    name: "Chicken Wings",
    category: "American",
    foodCostRange: "30–38%",
    typicalPriceRange: "$11–$15 per 8-10 pieces",
    costBreakdown: [
      { ingredient: "Wings (raw)", note: "Price swings significantly with wing market cycles", costShare: "55–65%" },
      { ingredient: "Sauce", note: "House-made sauces are cheaper than bottled at volume", costShare: "10–15%" },
      { ingredient: "Frying oil (allocated)", note: "Frequently left out of per-order costing entirely", costShare: "8–12%" },
      { ingredient: "Celery, ranch/blue cheese", note: "Small but consistent add-on cost", costShare: "8–12%" },
    ],
    worked: {
      items: [
        { ingredient: "Raw wings (10 pieces)", amount: "1 lb", cost: 3.2 },
        { ingredient: "Sauce", amount: "3 oz", cost: 0.45 },
        { ingredient: "Frying oil allocation", amount: "—", cost: 0.3 },
        { ingredient: "Celery + dip", amount: "—", cost: 0.4 },
      ],
      totalCost: 4.35,
      targetFoodCostPct: 34,
    },
    mistakes: [
      { title: "Ignoring wing market price cycles", desc: "Wing prices are historically among the most volatile in the protein category, sometimes swinging 30%+ within a single quarter. Menus priced once and left alone are especially exposed here." },
      { title: "Not allocating frying oil cost per order", desc: "Oil is consumed continuously across many orders, which makes it tempting to skip entirely. Even a rough per-order allocation is more accurate than zero." },
      { title: "Underpricing dip and celery as a 'free' add-on", desc: "Ranch or blue cheese dip and celery are commonly treated as complimentary, but they carry a real, non-trivial per-order cost that needs to be built into the wing price itself." },
    ],
    faqs: [
      { q: "What is a good food cost percentage for wings?", a: "Wings typically run 30-38% food cost — higher than many proteins because wing prices are unusually volatile and don't always track other chicken cuts." },
      { q: "Why do wing prices need more frequent review than other menu items?", a: "Wing market prices have historically swung more than 30% within a single quarter due to supply cycles. A wing menu priced once at opening and revisited annually is exposed to real margin risk." },
      { q: "Should sauce flavor affect wing pricing?", a: "If some sauces use significantly more expensive ingredients (specialty hot sauces, honey, real butter) than your house buffalo sauce, price those flavors slightly higher rather than absorbing the cost gap." },
    ],
  },

  pasta: {
    slug: "pasta",
    name: "Pasta",
    category: "Italian",
    foodCostRange: "22–28%",
    typicalPriceRange: "$14–$22",
    costBreakdown: [
      { ingredient: "Pasta (dry or fresh)", note: "One of the cheapest base ingredients on any menu", costShare: "5–10%" },
      { ingredient: "Sauce base", note: "Cream and butter sauces cost more than tomato-based", costShare: "15–25%" },
      { ingredient: "Protein add-in (if included)", note: "The component that actually determines the price tier", costShare: "35–50%" },
      { ingredient: "Cheese, herbs, finishing", note: "Small individually, meaningful in aggregate", costShare: "10–15%" },
    ],
    worked: {
      items: [
        { ingredient: "Dry pasta", amount: "5 oz", cost: 0.4 },
        { ingredient: "Cream sauce components", amount: "—", cost: 1.1 },
        { ingredient: "Chicken breast", amount: "4 oz", cost: 1.3 },
        { ingredient: "Parmesan, herbs", amount: "—", cost: 0.35 },
      ],
      totalCost: 3.15,
      targetFoodCostPct: 25,
    },
    mistakes: [
      { title: "Pricing all pasta dishes the same regardless of protein", desc: "A plain marinara pasta and a chicken-and-cream pasta share a base but differ by $1.50+ in cost once protein is added. Flat pricing across the pasta section leaves money on the table for premium versions." },
      { title: "Underestimating cream and butter sauce cost", desc: "Cream-based sauces cost noticeably more than tomato-based ones once heavy cream, butter, and parmesan are all counted — a gap that's easy to underestimate when costing from memory." },
      { title: "Not costing the reduction loss in sauce prep", desc: "Cream and wine sauces reduce during cooking, meaning the finished sauce yield is less than the raw ingredient volume. Cost against the finished, reduced yield." },
    ],
    faqs: [
      { q: "What is a good food cost percentage for pasta dishes?", a: "Pasta dishes typically run 22-28% food cost — among the lower end for entrées, because the pasta base itself is cheap. Added protein is what pushes cost toward the higher end of the range." },
      { q: "Why do cream sauces cost more than tomato sauces?", a: "Heavy cream, butter, and parmesan cost meaningfully more per ounce than canned tomatoes and basic aromatics. A cream-based pasta sauce can cost 2-3x a comparable tomato-based one." },
      { q: "Should protein add-ins be priced as a fixed upcharge?", a: "Price the upcharge to match the actual added ingredient cost. A $3 chicken upcharge on chicken that costs $1.30 per portion maintains a healthy margin; pricing all proteins the same upcharge does not." },
    ],
  },

  ramen: {
    slug: "ramen",
    name: "Ramen",
    category: "Japanese",
    foodCostRange: "28–34%",
    typicalPriceRange: "$14–$18",
    costBreakdown: [
      { ingredient: "Broth", note: "Long-simmered broths carry real labor cost beyond ingredients", costShare: "20–30%" },
      { ingredient: "Noodles", note: "Cheap per bowl, easy to under-portion or over-portion inconsistently", costShare: "8–12%" },
      { ingredient: "Protein (chashu pork, chicken, egg)", note: "The main lever between budget and premium bowls", costShare: "30–40%" },
      { ingredient: "Toppings (scallion, nori, corn, bamboo)", note: "Small per item, meaningful when a bowl is fully loaded", costShare: "15–20%" },
    ],
    worked: {
      items: [
        { ingredient: "Tonkotsu broth", amount: "16 oz", cost: 1.4 },
        { ingredient: "Fresh ramen noodles", amount: "5 oz", cost: 0.55 },
        { ingredient: "Chashu pork", amount: "3 oz", cost: 1.5 },
        { ingredient: "Soft egg, scallion, nori, bamboo", amount: "—", cost: 0.8 },
      ],
      totalCost: 4.25,
      targetFoodCostPct: 30,
    },
    mistakes: [
      { title: "Not costing broth labor and simmer time separately from ingredients", desc: "A broth simmered 12+ hours has real labor and utility cost embedded in it beyond the bones and aromatics themselves — a cost that's easy to leave out of the calculation entirely." },
      { title: "Treating all toppings as included at one flat bowl price", desc: "A fully loaded bowl with egg, extra chashu, and corn costs meaningfully more than a basic bowl. À la carte topping pricing protects margin on customized orders." },
      { title: "Costing noodles at dry weight instead of cooked, portioned weight", desc: "Noodles absorb water and expand when cooked. Cost against what you actually portion into the bowl, not the dry package weight." },
    ],
    faqs: [
      { q: "What is a good food cost percentage for ramen?", a: "Ramen typically runs 28-34% food cost. Broth complexity and protein choice (chashu pork vs. simpler options) are the main drivers within that range." },
      { q: "Should broth labor time be factored into ramen pricing?", a: "Yes, at least directionally. A broth simmered over 12+ hours carries real labor and utility cost that a quick-simmered broth doesn't, even if the raw ingredients are similar in cost." },
      { q: "How should topping add-ons be priced?", a: "Price each topping (extra egg, extra chashu, corn) at roughly 3x its ingredient cost, consistent with your overall menu markup approach, rather than bundling everything into one flat bowl price." },
    ],
  },

  "fried-chicken": {
    slug: "fried-chicken",
    name: "Fried Chicken",
    category: "American",
    foodCostRange: "30–36%",
    typicalPriceRange: "$12–$17 (2-3 pieces + sides)",
    costBreakdown: [
      { ingredient: "Chicken (bone-in or tenders)", note: "The dominant cost, varies by cut", costShare: "45–55%" },
      { ingredient: "Breading and seasoning", note: "Low individual cost but easy to under-count across volume", costShare: "8–12%" },
      { ingredient: "Frying oil (allocated)", note: "Frequently omitted from per-order costing", costShare: "10–15%" },
      { ingredient: "Sides (if bundled)", note: "Often the item that quietly narrows the combo margin", costShare: "15–25%" },
    ],
    worked: {
      items: [
        { ingredient: "Bone-in chicken thigh/leg (2 pc)", amount: "10 oz raw", cost: 2.1 },
        { ingredient: "Breading and seasoning", amount: "—", cost: 0.4 },
        { ingredient: "Frying oil allocation", amount: "—", cost: 0.45 },
        { ingredient: "Side (mashed potatoes or slaw)", amount: "—", cost: 0.7 },
      ],
      totalCost: 3.65,
      targetFoodCostPct: 33,
    },
    mistakes: [
      { title: "Not allocating fry oil cost per plate", desc: "Frying oil is a real, continuous cost that's easy to treat as overhead rather than building into per-dish cost. Even a rough per-order allocation improves pricing accuracy." },
      { title: "Costing bone-in chicken at raw weight without accounting for bone weight", desc: "A significant share of bone-in chicken's raw weight is inedible bone. Menu price should reflect edible yield, not gross purchase weight." },
      { title: "Bundling a side into the price without costing it separately", desc: "A combo that bundles fried chicken with a side priced as an afterthought can quietly run a higher blended food cost than the chicken alone would suggest." },
    ],
    faqs: [
      { q: "What is a good food cost percentage for fried chicken?", a: "Fried chicken dishes typically run 30-36% food cost, on the higher side because bone-in cuts have edible-yield loss and frying oil adds a cost that's easy to undercount." },
      { q: "Should frying oil be included in dish costing?", a: "Yes, at least as a rough per-order allocation. Oil is consumed continuously across many orders, but it is a real cost, and leaving it out understates true food cost." },
      { q: "How does bone-in vs. boneless affect pricing?", a: "Bone-in cuts have lower edible yield per pound purchased, since bone weight doesn't translate to servable food. Price bone-in and boneless versions of the same dish differently to reflect this." },
    ],
  },

  "poke-bowl": {
    slug: "poke-bowl",
    name: "Poke Bowl",
    category: "Hawaiian / Build-Your-Own",
    foodCostRange: "30–36%",
    typicalPriceRange: "$13–$17",
    costBreakdown: [
      { ingredient: "Base protein (fish, tofu, chicken)", note: "Fish drives the price tier; tofu and chicken are much cheaper substitutes", costShare: "40–50%" },
      { ingredient: "Rice or greens base", note: "Cheap per bowl", costShare: "8–12%" },
      { ingredient: "Mix-ins and toppings", note: "Build-your-own models make this the hardest cost to control", costShare: "25–35%" },
      { ingredient: "Sauce", note: "Small per bowl but adds up at volume if unmeasured", costShare: "5–10%" },
    ],
    worked: {
      items: [
        { ingredient: "Ahi tuna", amount: "5 oz", cost: 3.2 },
        { ingredient: "Sushi rice", amount: "6 oz", cost: 0.5 },
        { ingredient: "Edamame, cucumber, avocado, onion", amount: "—", cost: 1.1 },
        { ingredient: "Sauce (spicy mayo, ponzu)", amount: "—", cost: 0.3 },
      ],
      totalCost: 5.1,
      targetFoodCostPct: 33,
    },
    mistakes: [
      { title: "Not standardizing scoop sizes on a build-your-own model", desc: "Poke bowls built with unmeasured scoops are one of the most common sources of cost creep in fast-casual, since a slightly generous fish or avocado scoop compounds across hundreds of bowls." },
      { title: "Pricing all proteins the same regardless of actual cost", desc: "Ahi tuna, salmon, tofu, and chicken have very different costs. A flat base price across all protein choices either overprices the cheap ones or loses money on fish." },
      { title: "Underpricing 'premium' mix-ins like avocado or extra fish", desc: "Avocado and extra protein upcharges need to reflect actual market cost, which for avocado specifically can swing significantly by season." },
    ],
    faqs: [
      { q: "What is a good food cost percentage for poke bowls?", a: "Poke bowls typically run 30-36% food cost, on the higher end because fish is expensive, though offering tofu or chicken base options can bring blended cost down." },
      { q: "How do build-your-own models make poke bowls harder to price?", a: "Unmeasured scoop sizes across many mix-in options are one of the most common sources of cost creep in fast-casual concepts. Standardized scoop sizes per ingredient are essential to controlling cost." },
      { q: "Should extra protein or avocado upcharges vary seasonally?", a: "Ideally yes for avocado, since its market price swings meaningfully by season. Extra protein upcharges should track the actual protein's cost, not a flat rate across fish and tofu alike." },
    ],
  },

  "grilled-cheese": {
    slug: "grilled-cheese",
    name: "Grilled Cheese Sandwich",
    category: "American / Comfort Food",
    foodCostRange: "18–24%",
    typicalPriceRange: "$8–$12",
    costBreakdown: [
      { ingredient: "Bread", note: "Cheap per sandwich even with artisan bread", costShare: "10–15%" },
      { ingredient: "Cheese", note: "The dominant cost, scales with blend and quantity", costShare: "45–55%" },
      { ingredient: "Butter", note: "Small but consistent per-sandwich cost", costShare: "10–15%" },
      { ingredient: "Add-ins (bacon, tomato, caramelized onion)", note: "What differentiates a $8 sandwich from a $12 one", costShare: "15–25%" },
    ],
    worked: {
      items: [
        { ingredient: "Sourdough bread (2 slices)", amount: "—", cost: 0.5 },
        { ingredient: "Cheese blend", amount: "3 oz", cost: 1.1 },
        { ingredient: "Butter", amount: "—", cost: 0.2 },
      ],
      totalCost: 1.8,
      targetFoodCostPct: 20,
    },
    mistakes: [
      { title: "Underpricing gourmet cheese blends", desc: "A blend of gruyère, fontina, and cheddar costs significantly more than standard American cheese, but menus often price all grilled cheese variations too close together." },
      { title: "Not costing add-ins like bacon or caramelized onion as real line items", desc: "These feel like garnish but carry real cost — bacon especially. Cost them explicitly rather than folding them into a vague upcharge." },
      { title: "Treating this as a low-effort menu item that doesn't need real costing", desc: "Because ingredients are simple, grilled cheese is one of the most under-costed items on comfort food menus, despite cheese being genuinely expensive per ounce." },
    ],
    faqs: [
      { q: "What is a good food cost percentage for grilled cheese?", a: "A well-priced grilled cheese runs 18-24% food cost, low relative to entrées, but only if the cheese blend and add-ins are actually costed rather than assumed cheap." },
      { q: "Why is cheese the dominant cost on a grilled cheese sandwich?", a: "Bread and butter are both cheap per sandwich, so cheese — especially specialty blends like gruyère or fontina — ends up representing 45-55% of total ingredient cost." },
      { q: "How should add-ins like bacon be priced?", a: "Cost each add-in explicitly against its real ingredient cost rather than a flat feel-good upcharge. Bacon in particular costs more per ounce than most operators initially assume." },
    ],
  },

  salad: {
    slug: "salad",
    name: "Entrée Salad",
    category: "Health / Fast Casual",
    foodCostRange: "26–32%",
    typicalPriceRange: "$11–$15",
    costBreakdown: [
      { ingredient: "Greens base", note: "Cheap per portion but has real spoilage/waste risk", costShare: "10–15%" },
      { ingredient: "Protein add-in", note: "The main driver of where the salad sits in its price range", costShare: "35–45%" },
      { ingredient: "Cheese, nuts, dried fruit", note: "Small individually, adds up fast when several are included", costShare: "20–30%" },
      { ingredient: "Dressing", note: "Easy to over-portion since it's poured rather than weighed", costShare: "8–12%" },
    ],
    worked: {
      items: [
        { ingredient: "Mixed greens", amount: "4 oz", cost: 0.6 },
        { ingredient: "Grilled chicken", amount: "4 oz", cost: 1.3 },
        { ingredient: "Feta, candied walnuts, dried cranberries", amount: "—", cost: 1.1 },
        { ingredient: "Vinaigrette", amount: "2 oz", cost: 0.35 },
      ],
      totalCost: 3.35,
      targetFoodCostPct: 29,
    },
    mistakes: [
      { title: "Not accounting for greens spoilage and waste", desc: "Leafy greens have a shorter shelf life and higher trim waste than most kitchen staples. Costing against invoice price alone, without a waste allowance, understates real cost." },
      { title: "Free-pouring dressing instead of portioning it", desc: "Dressing poured by eye rather than a measured ladle or portion cup is one of the most common sources of inconsistent salad cost." },
      { title: "Stacking premium add-ins without adjusting price", desc: "A salad with feta, candied nuts, and dried fruit all included costs meaningfully more than a basic house salad — the price needs to reflect that stacking, not just the protein choice." },
    ],
    faqs: [
      { q: "What is a good food cost percentage for entrée salads?", a: "Entrée salads typically run 26-32% food cost. Protein choice and how many premium add-ins (cheese, nuts, dried fruit) are included drive where in that range a specific salad lands." },
      { q: "Why do salads have more waste than other menu items?", a: "Leafy greens spoil faster than most pantry staples and carry more trim loss. A waste allowance built into the costing is more accurate than costing against invoice price alone." },
      { q: "Should dressing be portioned rather than free-poured?", a: "Yes. Free-poured dressing is one of the most common sources of cost inconsistency on a salad menu — a measured portion (ladle or portion cup) keeps cost predictable." },
    ],
  },

  "ice-cream": {
    slug: "ice-cream",
    name: "Ice Cream (Scoop Shop)",
    category: "Dessert",
    foodCostRange: "20–28%",
    typicalPriceRange: "$5–$8 (2-scoop cup or cone)",
    costBreakdown: [
      { ingredient: "Base ice cream", note: "Premium and house-made bases cost more than commodity tubs", costShare: "40–55%" },
      { ingredient: "Cone or cup", note: "Waffle cones cost meaningfully more than standard cake cones", costShare: "8–12%" },
      { ingredient: "Toppings and mix-ins", note: "Where most of the margin risk actually lives", costShare: "25–40%" },
    ],
    worked: {
      items: [
        { ingredient: "Premium ice cream base", amount: "2 scoops (5 oz)", cost: 1.1 },
        { ingredient: "Waffle cone", amount: "1", cost: 0.45 },
        { ingredient: "Hot fudge, whipped cream, sprinkles", amount: "—", cost: 0.5 },
      ],
      totalCost: 2.05,
      targetFoodCostPct: 25,
    },
    mistakes: [
      { title: "Not standardizing scoop size", desc: "Scoop size is one of the easiest things to drift upward over time without anyone deciding to change it, and it directly multiplies base ice cream cost per order." },
      { title: "Pricing waffle cones the same as cake cones", desc: "Waffle cones cost meaningfully more per unit. A flat cone price across both options either undercharges for waffle or overcharges for cake." },
      { title: "Underpricing loaded sundaes with multiple toppings", desc: "A sundae with hot fudge, whipped cream, nuts, and a cherry stacks several cost components that a base 2-scoop price was never built to cover." },
    ],
    faqs: [
      { q: "What is a good food cost percentage for scoop shop ice cream?", a: "Ice cream typically runs 20-28% food cost. Base ice cream quality (commodity vs. premium/house-made) is the biggest lever within that range." },
      { q: "How much does scoop size affect cost?", a: "Significantly — scoop size drift is one of the easiest things to happen gradually without anyone deciding to change it, and it directly multiplies your most expensive ingredient." },
      { q: "Should sundaes be priced as a flat markup over a base scoop price?", a: "No. A loaded sundae stacks several cost components (extra scoops, sauce, toppings) that should each be priced against their real cost rather than folded into one flat upcharge." },
    ],
  },

  "bubble-tea": {
    slug: "bubble-tea",
    name: "Bubble Tea",
    category: "Café / Beverage",
    foodCostRange: "15–22%",
    typicalPriceRange: "$5–$7",
    costBreakdown: [
      { ingredient: "Tea base", note: "Cheap per cup even with premium loose-leaf tea", costShare: "8–12%" },
      { ingredient: "Milk / creamer", note: "Varies by dairy vs. non-dairy choice", costShare: "10–18%" },
      { ingredient: "Tapioca pearls or toppings", note: "Requires daily prep labor beyond just ingredient cost", costShare: "15–25%" },
      { ingredient: "Sugar / syrup", note: "Easy to over-pour without a standardized pump or ratio", costShare: "10–15%" },
      { ingredient: "Cup, lid, straw", note: "A meaningful share of total cost, often overlooked", costShare: "20–30%" },
    ],
    worked: {
      items: [
        { ingredient: "Brewed black tea", amount: "8 oz", cost: 0.2 },
        { ingredient: "Milk", amount: "4 oz", cost: 0.25 },
        { ingredient: "Tapioca pearls (cooked)", amount: "2 oz", cost: 0.35 },
        { ingredient: "Sugar syrup", amount: "—", cost: 0.15 },
        { ingredient: "Cup, dome lid, straw", amount: "1 set", cost: 0.4 },
      ],
      totalCost: 1.35,
      targetFoodCostPct: 20,
    },
    mistakes: [
      { title: "Not costing packaging as its own line item", desc: "The cup, dome lid, and wide straw specific to bubble tea can be 20-30% of total cost — comparable to or larger than the tea itself." },
      { title: "Free-pouring sugar syrup instead of standardized pumps", desc: "Sweetness level customization (0%, 50%, 100% sugar) needs a standardized pump system, or actual syrup cost varies unpredictably order to order." },
      { title: "Not accounting for daily tapioca prep labor and waste", desc: "Fresh tapioca pearls must be cooked daily and don't hold well, creating real prep labor and end-of-day waste cost beyond the raw pearl price." },
    ],
    faqs: [
      { q: "What is a good food cost percentage for bubble tea?", a: "Bubble tea typically runs 15-22% food cost, low compared to food, though specialty packaging (dome lids, wide straws) narrows that gap more than in typical beverage service." },
      { q: "Why does bubble tea packaging cost more than standard drink cups?", a: "Bubble tea requires a dome lid or heat-sealed film plus a wide straw for the tapioca pearls, both of which cost more than a standard cup and lid used for coffee or soda." },
      { q: "How should sugar level customization be priced?", a: "It shouldn't need separate pricing if syrup is dispensed through standardized pumps per sweetness level — the goal is consistent cost regardless of which sweetness a customer picks." },
    ],
  },

  "caesar-salad": {
    slug: "caesar-salad",
    name: "Caesar Salad",
    category: "Classic / Starter",
    foodCostRange: "18–24%",
    typicalPriceRange: "$9–$13",
    costBreakdown: [
      { ingredient: "Romaine lettuce", note: "Cheap but has real trim waste from outer leaves", costShare: "15–20%" },
      { ingredient: "Parmesan", note: "Costs more per ounce than most operators assume", costShare: "20–28%" },
      { ingredient: "Croutons", note: "Cheap if made in-house from bread scraps", costShare: "8–12%" },
      { ingredient: "Dressing", note: "House-made anchovy-based dressing has a real ingredient cost often underestimated", costShare: "30–40%" },
      { ingredient: "Protein add-in (chicken, shrimp)", note: "Turns a starter into an entrée and changes the pricing tier entirely", costShare: "varies" },
    ],
    worked: {
      items: [
        { ingredient: "Romaine", amount: "4 oz trimmed", cost: 0.5 },
        { ingredient: "Parmesan", amount: "1 oz", cost: 0.55 },
        { ingredient: "Croutons", amount: "—", cost: 0.2 },
        { ingredient: "Caesar dressing", amount: "2 oz", cost: 0.6 },
      ],
      totalCost: 1.85,
      targetFoodCostPct: 20,
    },
    mistakes: [
      { title: "Underestimating parmesan cost per ounce", desc: "Real parmesan costs significantly more per ounce than pre-shredded blends, and a generous shave on top of the salad can add more cost than the recipe assumes." },
      { title: "Not costing dressing as its own recipe", desc: "House-made caesar dressing has real ingredient cost (egg, anchovy, oil, parmesan) that's easy to treat as negligible because it's 'just dressing.'" },
      { title: "Pricing the protein add-on as an afterthought", desc: "Adding grilled chicken or shrimp turns a $10 starter into a $16+ entrée-sized item, and the upcharge needs to reflect the actual protein cost, not a round number." },
    ],
    faqs: [
      { q: "What is a good food cost percentage for Caesar salad?", a: "A well-priced Caesar salad runs 18-24% food cost, assuming the dressing and parmesan are actually costed as real ingredients rather than treated as negligible." },
      { q: "Why is Caesar dressing more expensive than it looks?", a: "A proper house-made Caesar dressing includes egg, anchovy, garlic, parmesan, and oil — ingredients that add up to a real per-portion cost, even though the dressing is a small volume." },
      { q: "How much should a chicken or shrimp add-on cost?", a: "Price it against the actual protein cost you'd use elsewhere on the menu (typically $1.30-2.00 for 4oz chicken, more for shrimp), not a flat round-number upcharge." },
    ],
  },
  steak: {
    slug: "steak",
    name: "Steak",
    category: "American / Steakhouse",
    foodCostRange: "35–45%",
    typicalPriceRange: "$28–$55 (8-12oz cut)",
    costBreakdown: [
      { ingredient: "Beef cut", note: "Dominates cost more than almost any other menu category — grade and cut matter enormously", costShare: "70–85%" },
      { ingredient: "Compound butter / sauce", note: "Small cost, meaningful perceived value add", costShare: "3–5%" },
      { ingredient: "Sides (if included)", note: "Often costed as an afterthought despite real impact on plate cost", costShare: "10–20%" },
      { ingredient: "Aging and trim loss", note: "Dry-aged cuts lose 15-20% of weight to moisture loss and trim — rarely priced in", costShare: "built into cut cost" },
    ],
    worked: {
      items: [
        { ingredient: "Ribeye (12oz, USDA Choice)", amount: "12 oz", cost: 9.5 },
        { ingredient: "Compound herb butter", amount: "—", cost: 0.4 },
        { ingredient: "Side (potato or vegetable)", amount: "—", cost: 1.1 },
      ],
      totalCost: 11.0,
      targetFoodCostPct: 38,
    },
    mistakes: [
      { title: "Not costing dry-aging weight and moisture loss", desc: "Dry-aged beef loses 15-20% of its weight during the aging process before any trimming even happens. Costing against the pre-aged purchase weight significantly understates true cost." },
      { title: "Pricing all grades the same across the menu", desc: "USDA Select, Choice, and Prime carry meaningfully different costs per pound. A flat markup applied uniformly either overprices Select cuts or loses money on Prime." },
      { title: "Treating the side dish as free", desc: "A steakhouse plate with a $9-12 cut and an uncosted side can still run a healthy blended food cost on paper while the side itself quietly loses money." },
    ],
    faqs: [
      { q: "What is a good food cost percentage for steak?", a: "Steak typically runs 35-45% food cost — higher than almost any other menu category because beef, especially higher grades, is genuinely expensive. Steakhouses offset this with higher overall check averages and beverage margin." },
      { q: "Why does steak have a higher food cost than other proteins?", a: "Beef, particularly aged or higher-grade cuts, costs significantly more per pound than chicken, pork, or most seafood. Guests also expect steak pricing to reflect genuine market value, limiting how much markup the category can bear." },
      { q: "Should dry-aged steak be priced differently than fresh?", a: "Yes. Dry-aging causes 15-20% weight loss from moisture evaporation before trimming, meaning the usable yield per pound purchased is meaningfully lower. Dry-aged cuts need a price premium that reflects this real cost, not just a marketing premium." },
    ],
  },

  sandwich: {
    slug: "sandwich",
    name: "Sandwich",
    category: "American / Deli",
    foodCostRange: "28–34%",
    typicalPriceRange: "$9–$14",
    costBreakdown: [
      { ingredient: "Protein filling", note: "The main cost lever, varies widely by choice", costShare: "40–50%" },
      { ingredient: "Bread", note: "Artisan or specialty bread costs more than standard sliced", costShare: "8–12%" },
      { ingredient: "Cheese, spreads, condiments", note: "Small individually but frequently under-counted in aggregate", costShare: "15–25%" },
      { ingredient: "Side (chips, fries, salad)", note: "Bundled sides quietly move overall plate cost", costShare: "10–20%" },
    ],
    worked: {
      items: [
        { ingredient: "Roasted turkey", amount: "4 oz", cost: 1.4 },
        { ingredient: "Artisan sourdough", amount: "2 slices", cost: 0.55 },
        { ingredient: "Cheese, bacon, spread", amount: "—", cost: 0.9 },
        { ingredient: "Side of chips", amount: "—", cost: 0.35 },
      ],
      totalCost: 3.2,
      targetFoodCostPct: 30,
    },
    mistakes: [
      { title: "Costing deli meat at case price without portion discipline", desc: "Sandwich protein portions drift easily when sliced by hand rather than weighed. A consistently 20% heavier portion than spec meaningfully erodes margin across volume." },
      { title: "Bundling a side without costing it into the sandwich price", desc: "Chips or fries included 'free' with a sandwich still carry real cost that needs to be reflected in the total plate price, not treated as a value-add that costs nothing." },
      { title: "Pricing premium bread upgrades the same as standard", desc: "Swapping to artisan sourdough or a specialty roll can add $0.30-0.50 that should show up in the price of that specific sandwich, not get absorbed into the general menu markup." },
    ],
    faqs: [
      { q: "What is a good food cost percentage for sandwiches?", a: "Sandwiches typically run 28-34% food cost. Protein choice and whether a side is bundled into the price are the two biggest levers within that range." },
      { q: "How much protein should be costed per sandwich?", a: "Weigh actual portions rather than estimating by eye — 4oz is a common standard for deli meats, but drift toward 5-6oz is common when meat is hand-sliced without a scale, which can add $0.35-0.50 in uncounted cost per sandwich." },
      { q: "Should a bundled side be priced separately?", a: "Cost it explicitly even if it's presented as included. A sandwich-plus-chips combo needs the chips' real cost built into the total price, not treated as a free value-add." },
    ],
  },

  brunch: {
    slug: "brunch",
    name: "Brunch (Eggs Benedict)",
    category: "Brunch / Breakfast",
    foodCostRange: "24–30%",
    typicalPriceRange: "$14–$19",
    costBreakdown: [
      { ingredient: "Eggs (poached)", note: "Cheap individually, but hollandaise and protein add up fast", costShare: "10–15%" },
      { ingredient: "English muffin", note: "Low cost per serving", costShare: "5–8%" },
      { ingredient: "Protein (Canadian bacon, salmon)", note: "The main differentiator between a $14 and $19 version", costShare: "25–35%" },
      { ingredient: "Hollandaise sauce", note: "Butter-heavy sauce that's easy to underestimate in cost", costShare: "15–20%" },
      { ingredient: "Side (potatoes, fruit)", note: "Standard inclusion that needs its own cost line", costShare: "10–15%" },
    ],
    worked: {
      items: [
        { ingredient: "Eggs (2, poached)", amount: "2", cost: 0.5 },
        { ingredient: "English muffin", amount: "1", cost: 0.35 },
        { ingredient: "Canadian bacon", amount: "2 oz", cost: 0.9 },
        { ingredient: "Hollandaise", amount: "2 oz", cost: 0.75 },
        { ingredient: "Home fries", amount: "—", cost: 0.6 },
      ],
      totalCost: 3.1,
      targetFoodCostPct: 27,
    },
    mistakes: [
      { title: "Underestimating hollandaise cost", desc: "A proper butter-and-egg-yolk hollandaise costs more per ounce than most sauces on the menu, and it's easy to treat as a negligible finishing touch rather than a real cost line." },
      { title: "Not differentiating protein swaps in pricing", desc: "Swapping Canadian bacon for smoked salmon meaningfully changes ingredient cost, but menus sometimes price all Benedict variations within a dollar of each other regardless of protein cost." },
      { title: "Treating the side as free because it's 'standard'", desc: "Home fries or fruit included with every brunch plate still cost money per serving and need to be part of the total dish cost calculation." },
    ],
    faqs: [
      { q: "What is a good food cost percentage for brunch dishes?", a: "Brunch entrées like eggs Benedict typically run 24-30% food cost. Protein choice (Canadian bacon vs. smoked salmon vs. crab) is the main driver of where a specific version lands." },
      { q: "Why is hollandaise more expensive than it seems?", a: "A proper hollandaise made with butter and egg yolks costs more per ounce than most sauces used elsewhere on a menu, since both core ingredients carry real per-unit cost even in small quantities." },
      { q: "Should salmon Benedict cost more than the standard version?", a: "Yes — smoked salmon costs meaningfully more than Canadian bacon per ounce, and the menu price should reflect that gap rather than treating all protein options as interchangeable." },
    ],
  },

  cake: {
    slug: "cake",
    name: "Custom Cake",
    category: "Bakery",
    foodCostRange: "20–28%",
    typicalPriceRange: "$45–$150+ (based on size and design)",
    costBreakdown: [
      { ingredient: "Cake base (batter, filling)", note: "Relatively low cost compared to labor and decoration", costShare: "15–25%" },
      { ingredient: "Buttercream / fondant", note: "Fondant costs meaningfully more than buttercream per pound", costShare: "15–20%" },
      { ingredient: "Decoration (fondant details, sugar flowers, toppers)", note: "Highly variable — this is where custom cakes differ most from standard ones", costShare: "10–30%" },
      { ingredient: "Labor (decorating time)", note: "Often the largest true cost, even though it's not an ingredient", costShare: "not in food cost %, but essential to total pricing" },
    ],
    worked: {
      items: [
        { ingredient: "Cake batter + filling (2-tier, serves 30)", amount: "—", cost: 12.0 },
        { ingredient: "Buttercream", amount: "—", cost: 8.5 },
        { ingredient: "Fondant details + topper", amount: "—", cost: 6.0 },
        { ingredient: "Box + board", amount: "—", cost: 3.5 },
      ],
      totalCost: 30.0,
      targetFoodCostPct: 22,
    },
    mistakes: [
      { title: "Pricing custom cakes on ingredients alone, ignoring decorating labor", desc: "A hand-piped, multi-hour decorated cake has real labor cost that dwarfs the ingredient cost, but many bakers price purely off ingredients and undercharge for design complexity." },
      { title: "Quoting a flat per-serving price regardless of design complexity", desc: "A simple buttercream cake and an elaborate sugar-flower fondant cake serving the same number of guests have very different true costs — flat per-serving pricing loses money on complex designs." },
      { title: "Not costing the box, board, and delivery separately", desc: "Cake boxes, boards, and delivery/setup for large tiered cakes carry real cost that's easy to treat as incidental rather than building into the quote." },
    ],
    faqs: [
      { q: "What is a good food cost percentage for custom cakes?", a: "Custom cakes typically run 20-28% food cost on ingredients alone, but decorating labor is usually the larger true cost driver and needs to be priced separately from the food cost percentage." },
      { q: "How should decorating time be factored into cake pricing?", a: "Estimate hours of decorating labor at your effective hourly rate and add it explicitly to the ingredient cost, rather than trying to fold labor into a single 'food cost' markup — the two need to be priced as separate components." },
      { q: "Should all cakes serving the same number of guests cost the same?", a: "No. A simple buttercream design and an elaborate hand-piped fondant design serving 30 guests have very different labor costs, even with similar ingredient costs. Price by total complexity, not just serving count." },
    ],
  },

  "wine-by-the-glass": {
    slug: "wine-by-the-glass",
    name: "Wine by the Glass",
    category: "Beverage / Bar",
    foodCostRange: "25–35%",
    typicalPriceRange: "$10–$16 per glass",
    costBreakdown: [
      { ingredient: "Wine bottle cost per glass", note: "Standard pour is 5oz, meaning a 750ml bottle yields about 5 glasses", costShare: "90%+" },
      { ingredient: "Waste and spoilage allowance", note: "Opened bottles oxidize and lose sellable glasses over time", costShare: "built into effective cost" },
    ],
    worked: {
      items: [
        { ingredient: "Bottle cost ÷ 5 glasses (5oz pour)", amount: "1 glass from $18 bottle", cost: 3.6 },
      ],
      totalCost: 3.6,
      targetFoodCostPct: 30,
    },
    mistakes: [
      { title: "Assuming a full 5 glasses per bottle with zero waste", desc: "In practice, an opened bottle rarely yields a perfectly clean 5 glasses due to pour variance and the last glass often being sold below ideal freshness or discarded. Build in a waste allowance rather than assuming perfect yield." },
      { title: "Not accounting for bottles that don't sell out before oxidizing", desc: "A by-the-glass wine that sells slowly can lose 1-2 glasses to oxidation before the bottle is finished, which effectively raises the true cost per glass sold." },
      { title: "Pricing all wines at the same pour cost percentage regardless of category", desc: "Sparkling, entry-level reds, and premium by-the-glass pours often warrant different target pour costs — treating them identically can overprice easy-sell categories and underprice premium ones." },
    ],
    faqs: [
      { q: "What is a good pour cost for wine by the glass?", a: "Most restaurants target 25-35% pour cost for wine by the glass, similar to or slightly higher than spirits, since wine carries less labor cost per serving than mixed cocktails." },
      { q: "How many glasses does a wine bottle actually yield?", a: "A standard 750ml bottle yields about 5 glasses at a 5oz pour, but real-world yield is often slightly lower due to pour variance and the practical loss of a partial last glass." },
      { q: "Should slow-selling wines by the glass be priced differently?", a: "Consider it. A wine that takes several days to sell through a bottle risks losing 1-2 glasses to oxidation, effectively raising its true cost per glass sold compared to a fast-moving bottle." },
    ],
  },

  bbq: {
    slug: "bbq",
    name: "BBQ Platter",
    category: "American / BBQ",
    foodCostRange: "32–38%",
    typicalPriceRange: "$18–$26",
    costBreakdown: [
      { ingredient: "Smoked meat (brisket, ribs, pulled pork)", note: "Dominant cost, and smoking causes significant weight loss", costShare: "55–65%" },
      { ingredient: "Sides (2 included)", note: "Individually cheap but two sides add up meaningfully per plate", costShare: "15–25%" },
      { ingredient: "Sauce and bread", note: "Small cost, high perceived value", costShare: "5–10%" },
    ],
    worked: {
      items: [
        { ingredient: "Smoked brisket (cooked weight)", amount: "6 oz", cost: 4.2 },
        { ingredient: "Two sides", amount: "—", cost: 1.4 },
        { ingredient: "Sauce, bread, pickles", amount: "—", cost: 0.5 },
      ],
      totalCost: 6.1,
      targetFoodCostPct: 34,
    },
    mistakes: [
      { title: "Costing brisket at raw weight instead of smoked, trimmed weight", desc: "Brisket can lose 35-45% of its raw weight during smoking through moisture loss and trimming the fat cap. Costing against the pre-smoke purchase weight dramatically understates true cost." },
      { title: "Not weighing portions consistently at the cutting board", desc: "Hand-cutting brisket and ribs at the counter is one of the easiest places for portion sizes to drift upward without anyone deciding to change them." },
      { title: "Underpricing platters with two premium meats", desc: "A combo plate with both brisket and ribs stacks two expensive proteins — pricing it like a single-meat plate with a small upcharge usually loses money." },
    ],
    faqs: [
      { q: "What is a good food cost percentage for BBQ?", a: "BBQ platters typically run 32-38% food cost, on the higher side because smoked meats lose significant weight during cooking, meaning the edible yield is much lower than the raw purchase weight." },
      { q: "How much weight does brisket lose during smoking?", a: "Brisket commonly loses 35-45% of its raw weight through moisture evaporation and fat cap trimming during a long smoke. This yield loss must be factored into cost per serving, not just the raw per-pound purchase price." },
      { q: "Should a two-meat combo platter cost proportionally more?", a: "It should reflect the actual combined ingredient cost of both proteins, not a flat small upcharge over a single-meat plate — two premium smoked meats on one plate meaningfully changes total cost." },
    ],
  },

  breakfast: {
    slug: "breakfast",
    name: "Breakfast Plate",
    category: "Breakfast / Diner",
    foodCostRange: "26–32%",
    typicalPriceRange: "$10–$15",
    costBreakdown: [
      { ingredient: "Eggs", note: "One of the cheapest proteins on any menu, though prices can spike seasonally", costShare: "10–15%" },
      { ingredient: "Breakfast meat (bacon, sausage)", note: "The main protein cost lever", costShare: "25–35%" },
      { ingredient: "Potatoes / hash browns", note: "Cheap per serving", costShare: "8–12%" },
      { ingredient: "Toast / pancakes", note: "Low individual cost, easy to underprice as an afterthought", costShare: "10–15%" },
    ],
    worked: {
      items: [
        { ingredient: "Eggs (2)", amount: "2", cost: 0.5 },
        { ingredient: "Bacon (3 strips)", amount: "—", cost: 0.75 },
        { ingredient: "Hash browns", amount: "—", cost: 0.4 },
        { ingredient: "Toast (2 slices) + butter", amount: "—", cost: 0.3 },
      ],
      totalCost: 1.95,
      targetFoodCostPct: 28,
    },
    mistakes: [
      { title: "Not adjusting for egg price volatility", desc: "Egg prices can spike significantly during supply disruptions (avian flu outbreaks have historically caused 50%+ price swings). A breakfast menu priced once and left alone is exposed to this volatility more than most categories." },
      { title: "Treating toast and butter as a free garnish", desc: "Bread and butter included with every breakfast plate carry real, if small, per-serving cost that should be counted rather than assumed negligible." },
      { title: "Pricing all-day breakfast the same as morning-only breakfast", desc: "If breakfast is offered all day, consider whether the value proposition and willingness to pay differs enough by daypart to warrant different pricing or portion sizes." },
    ],
    faqs: [
      { q: "What is a good food cost percentage for a breakfast plate?", a: "Classic breakfast plates typically run 26-32% food cost. Eggs and potatoes are cheap; the breakfast meat choice (bacon vs. sausage vs. ham) is the main cost lever." },
      { q: "Why do egg prices matter so much for breakfast menu costing?", a: "Egg prices have historically been prone to significant spikes during supply disruptions, sometimes 50% or more within weeks. Breakfast-heavy menus should monitor egg costs more frequently than other ingredients." },
      { q: "Should toast and butter be costed separately?", a: "Yes, even though the cost per serving is small. It's a real, countable cost that adds up across volume and should be included in the total plate cost rather than treated as free." },
    ],
  },

  "chocolate-cake-slice": {
    slug: "chocolate-cake-slice",
    name: "Chocolate Cake Slice",
    category: "Dessert",
    foodCostRange: "18–25%",
    typicalPriceRange: "$7–$10",
    costBreakdown: [
      { ingredient: "Cake (baked, per slice)", note: "Cheap per slice when baked in bulk", costShare: "35–45%" },
      { ingredient: "Chocolate ganache / frosting", note: "Quality chocolate costs meaningfully more than cocoa-based substitutes", costShare: "30–40%" },
      { ingredient: "Garnish (berries, sauce, whipped cream)", note: "Small but easy to under-count across many desserts sold", costShare: "15–25%" },
    ],
    worked: {
      items: [
        { ingredient: "Chocolate cake (1/12 of a whole cake)", amount: "1 slice", cost: 0.85 },
        { ingredient: "Chocolate ganache", amount: "—", cost: 0.75 },
        { ingredient: "Berries + whipped cream", amount: "—", cost: 0.4 },
      ],
      totalCost: 2.0,
      targetFoodCostPct: 22,
    },
    mistakes: [
      { title: "Using low-quality chocolate cost assumptions for a premium-positioned dessert", desc: "If the menu markets a dessert as made with premium or single-origin chocolate, the costing needs to reflect that ingredient's actual higher price, not a generic cocoa-based estimate." },
      { title: "Not costing garnish consistently across every slice sold", desc: "Berries, sauce drizzle, and whipped cream are individually cheap but compound across dozens of desserts sold nightly into a real, countable cost." },
      { title: "Cutting slices inconsistently from a whole cake", desc: "A cake meant to yield 12 slices that's actually cut into 10 larger portions changes the effective cost per slice significantly — standardized cutting guides help control this." },
    ],
    faqs: [
      { q: "What is a good food cost percentage for cake slices?", a: "Dessert slices typically run 18-25% food cost, on the lower end for a menu, because baked goods produced in bulk have low per-slice ingredient cost relative to their price." },
      { q: "How much does chocolate quality affect dessert cost?", a: "Significantly — premium or single-origin chocolate can cost multiples of standard cocoa-based products. If a dessert is marketed as premium, its costing should reflect the actual chocolate used, not a generic estimate." },
      { q: "Does slice size affect food cost percentage?", a: "Yes, directly. A cake meant to yield 12 slices that's cut into 10 larger ones raises the ingredient cost per slice by 20%, which needs to be reflected in either the price or a corrected portion standard." },
    ],
  },

  croissant: {
    slug: "croissant",
    name: "Croissant",
    category: "Bakery",
    foodCostRange: "22–30%",
    typicalPriceRange: "$4–$6.50 (plain), $6–$9 (filled)",
    costBreakdown: [
      { ingredient: "Butter", note: "The single largest cost driver in laminated dough, and butter prices are volatile", costShare: "35–45%" },
      { ingredient: "Flour and dough base", note: "Cheap relative to butter", costShare: "15–20%" },
      { ingredient: "Filling (chocolate, almond, ham & cheese)", note: "Turns a plain croissant into a premium item with meaningfully higher cost", costShare: "20–35%" },
    ],
    worked: {
      items: [
        { ingredient: "Laminated dough (butter-heavy)", amount: "1 croissant", cost: 0.75 },
        { ingredient: "Chocolate filling", amount: "—", cost: 0.5 },
      ],
      totalCost: 1.25,
      targetFoodCostPct: 24,
    },
    mistakes: [
      { title: "Not adjusting pricing when butter prices spike", desc: "Butter is a genuinely volatile commodity, and croissants are unusually butter-intensive relative to most bakery items. A butter price spike hits croissant margin harder than almost any other product on a typical bakery menu." },
      { title: "Pricing filled croissants too close to plain ones", desc: "A ham-and-cheese or almond croissant costs meaningfully more than a plain butter croissant, and the price gap needs to reflect that rather than a token $0.50-1.00 upcharge." },
      { title: "Costing lamination waste inconsistently", desc: "Laminated dough production has real trim and scrap loss that should be factored into the effective cost per finished croissant, not costed as if 100% of dough becomes sellable product." },
    ],
    faqs: [
      { q: "What is a good food cost percentage for croissants?", a: "Croissants typically run 22-30% food cost. Butter content makes this category more exposed to commodity price swings than most other bakery items." },
      { q: "Why is butter such a large share of croissant cost?", a: "Traditional lamination requires a high ratio of butter to dough — often 20% or more of total dough weight — making croissants one of the most butter-intensive items on a typical bakery menu." },
      { q: "How much more should a filled croissant cost than a plain one?", a: "Enough to reflect the actual added filling cost — for chocolate or almond, that's often $0.40-0.70 in ingredients, which should translate to at least a $1.50-2.50 higher menu price to maintain target food cost." },
    ],
  },

  smoothie: {
    slug: "smoothie",
    name: "Smoothie",
    category: "Café / Beverage",
    foodCostRange: "22–30%",
    typicalPriceRange: "$6–$9",
    costBreakdown: [
      { ingredient: "Fruit (fresh or frozen)", note: "The main cost driver, varies by seasonality and whether fresh or frozen is used", costShare: "35–50%" },
      { ingredient: "Liquid base (juice, milk, yogurt)", note: "Moderate cost, protein or specialty milk add-ins raise it", costShare: "20–30%" },
      { ingredient: "Add-ins (protein powder, superfoods)", note: "Where the real premium-pricing opportunity — and cost risk — lives", costShare: "15–30%" },
      { ingredient: "Cup, lid, straw", note: "A meaningful share of total cost, frequently underestimated", costShare: "10–15%" },
    ],
    worked: {
      items: [
        { ingredient: "Frozen mixed berries", amount: "4 oz", cost: 0.9 },
        { ingredient: "Banana", amount: "1/2", cost: 0.2 },
        { ingredient: "Yogurt + juice base", amount: "8 oz", cost: 0.65 },
        { ingredient: "Cup, lid, straw", amount: "1 set", cost: 0.35 },
      ],
      totalCost: 2.1,
      targetFoodCostPct: 26,
    },
    mistakes: [
      { title: "Not costing protein powder or superfood add-ins as real upcharges", desc: "Protein powder, collagen, and superfood boosts can cost $0.50-1.50 per serving depending on quality — pricing these add-ons below their actual cost is common and quietly erodes margin on 'upgraded' smoothies." },
      { title: "Using fresh fruit pricing assumptions when fruit is out of season", desc: "Fresh berries and stone fruit can cost 2-3x more out of season. Frozen fruit avoids this volatility and is often the better cost-control choice for year-round menu items." },
      { title: "Underestimating packaging cost on larger sizes", desc: "A large smoothie cup, dome lid, and wide straw cost meaningfully more than a small size, and the price gap between sizes should reflect both the added fruit and the larger packaging." },
    ],
    faqs: [
      { q: "What is a good food cost percentage for smoothies?", a: "Smoothies typically run 22-30% food cost. Fruit choice (fresh vs. frozen, in-season vs. out) and add-ins like protein powder are the main levers within that range." },
      { q: "Should protein powder add-ons be priced to match their cost?", a: "Yes. Quality protein powder or collagen add-ins can cost $0.50-1.50 per serving, and pricing the upcharge below that erodes margin every time a customer adds it, even though it feels like 'just an add-on.'" },
      { q: "Is frozen fruit cheaper than fresh for smoothies?", a: "Often yes, especially out of season. Frozen fruit avoids the seasonal price volatility of fresh berries and stone fruit, which can cost 2-3x more when out of season, making it a more predictable cost base for year-round menu items." },
    ],
  },

  "fish-and-chips": {
    slug: "fish-and-chips",
    name: "Fish and Chips",
    category: "British / Pub Food",
    foodCostRange: "30–36%",
    typicalPriceRange: "$15–$20",
    costBreakdown: [
      { ingredient: "White fish (cod, haddock)", note: "The dominant cost, and one of the more volatile seafood commodities", costShare: "45–55%" },
      { ingredient: "Batter", note: "Cheap per portion", costShare: "5–8%" },
      { ingredient: "Fries", note: "Low cost but a full portion adds up more than expected", costShare: "10–15%" },
      { ingredient: "Frying oil (allocated)", note: "Continuous cost that's easy to leave out of per-plate costing", costShare: "10–15%" },
      { ingredient: "Tartar sauce, lemon, mushy peas", note: "Small individually, consistently forgotten in costing", costShare: "5–10%" },
    ],
    worked: {
      items: [
        { ingredient: "Cod fillet", amount: "7 oz raw", cost: 4.9 },
        { ingredient: "Batter", amount: "—", cost: 0.4 },
        { ingredient: "Fries (large portion)", amount: "—", cost: 0.85 },
        { ingredient: "Frying oil allocation", amount: "—", cost: 0.5 },
        { ingredient: "Tartar sauce, lemon, peas", amount: "—", cost: 0.45 },
      ],
      totalCost: 7.1,
      targetFoodCostPct: 33,
    },
    mistakes: [
      { title: "Not tracking cod/haddock market price weekly", desc: "White fish prices can move significantly week to week depending on catch volume. A fish and chips menu priced once and revisited quarterly is exposed to real margin risk in a volatile month." },
      { title: "Costing the fries portion as an afterthought", desc: "A generous pub-style fries portion costs more than a standard side, and treating it as a minor addition to the fish price understates total plate cost." },
      { title: "Not allocating frying oil cost per order", desc: "Oil is a real, continuous cost across many fried orders that's easy to skip in individual dish costing because no single order consumes a measurable amount." },
    ],
    faqs: [
      { q: "What is a good food cost percentage for fish and chips?", a: "Fish and chips typically runs 30-36% food cost. White fish is the dominant and most volatile cost, so this category benefits from more frequent price monitoring than lower-protein dishes." },
      { q: "How much does fish and chips cost to make?", a: "A standard cod-based portion with fries typically costs $6-8 in ingredients, supporting a $15-18 menu price at a 33% food cost target, depending on current fish market prices." },
      { q: "Should the fries portion be costed separately from the fish?", a: "Yes — cost each component of the plate individually. A generous pub-style fries portion adds more cost than a token side, and combining everything into one vague estimate risks underpricing the full plate." },
    ],
  },

  "mac-and-cheese": {
    slug: "mac-and-cheese",
    name: "Mac and Cheese",
    category: "American / Comfort Food",
    foodCostRange: "20–28%",
    typicalPriceRange: "$9–$14",
    costBreakdown: [
      { ingredient: "Pasta", note: "One of the cheapest base ingredients on the menu", costShare: "8–12%" },
      { ingredient: "Cheese sauce", note: "The dominant cost, scales with cheese quality and blend", costShare: "45–55%" },
      { ingredient: "Breadcrumb topping (if baked)", note: "Cheap addition with high perceived value", costShare: "5–8%" },
      { ingredient: "Mix-ins (bacon, lobster, truffle)", note: "What separates a $10 side from a $18 entrée", costShare: "varies widely" },
    ],
    worked: {
      items: [
        { ingredient: "Elbow pasta", amount: "6 oz", cost: 0.5 },
        { ingredient: "Cheese sauce (cheddar/gruyère blend)", amount: "6 oz", cost: 1.6 },
        { ingredient: "Breadcrumb topping", amount: "—", cost: 0.2 },
      ],
      totalCost: 2.3,
      targetFoodCostPct: 24,
    },
    mistakes: [
      { title: "Not distinguishing cheese blend cost across menu variants", desc: "A basic cheddar mac and a gruyère-and-fontina version have meaningfully different cheese costs, but menus sometimes price all versions within a dollar of each other." },
      { title: "Underpricing premium mix-ins like lobster or truffle", desc: "Adding lobster or truffle oil to mac and cheese can double or triple the ingredient cost, and the upcharge needs to reflect that gap, not a flat round-number premium." },
      { title: "Treating this as a 'cheap' side that doesn't need real costing", desc: "Because the base ingredients feel humble, mac and cheese is one of the more commonly under-costed comfort food items, despite quality cheese being genuinely expensive per ounce." },
    ],
    faqs: [
      { q: "What is a good food cost percentage for mac and cheese?", a: "Mac and cheese typically runs 20-28% food cost as a side, though entrée-sized or premium versions with lobster or truffle can run higher due to expensive mix-ins." },
      { q: "Why is cheese sauce the dominant cost, not the pasta?", a: "Pasta is one of the cheapest ingredients on any menu. A quality cheese blend, especially with gruyère or other specialty cheeses, costs significantly more per ounce and dominates the total dish cost." },
      { q: "How should a lobster mac and cheese be priced versus the classic version?", a: "Price it against the actual added lobster cost, which is substantial, rather than a flat upcharge. Lobster mac and cheese commonly costs 2-3x the classic version in ingredients alone." },
    ],
  },

  dumplings: {
    slug: "dumplings",
    name: "Dumplings (Pork Potstickers)",
    category: "Asian / Dim Sum",
    foodCostRange: "25–32%",
    typicalPriceRange: "$9–$14 (6-8 pieces)",
    costBreakdown: [
      { ingredient: "Filling (ground pork, vegetables)", note: "Moderate cost, protein choice is the main lever", costShare: "40–50%" },
      { ingredient: "Wrapper", note: "Cheap per piece, whether store-bought or house-made", costShare: "10–15%" },
      { ingredient: "Dipping sauce", note: "Small but consistent per-order cost", costShare: "8–12%" },
      { ingredient: "Labor (hand-folding)", note: "Not in food cost %, but a genuine cost driver for hand-made dumplings", costShare: "significant, tracked separately" },
    ],
    worked: {
      items: [
        { ingredient: "Ground pork + cabbage + scallion filling", amount: "6 pieces", cost: 1.8 },
        { ingredient: "Wrappers (6)", amount: "6", cost: 0.3 },
        { ingredient: "Dipping sauce", amount: "—", cost: 0.25 },
      ],
      totalCost: 2.35,
      targetFoodCostPct: 28,
    },
    mistakes: [
      { title: "Not accounting for hand-folding labor time separately from ingredient cost", desc: "Hand-folded dumplings take real time per piece that a machine-made or frozen alternative doesn't. This labor cost needs its own consideration beyond the food cost percentage." },
      { title: "Costing filling by recipe theory instead of actual fill weight per dumpling", desc: "Fill weight per dumpling can drift if not portioned with a scoop or scale, changing effective cost per piece without anyone deciding to change the recipe." },
      { title: "Pricing pan-fried and steamed versions identically", desc: "If the pan-fried version uses more oil and a slightly different cooking process, the marginal cost difference, however small, is worth accounting for if the two versions are priced the same." },
    ],
    faqs: [
      { q: "What is a good food cost percentage for dumplings?", a: "Dumplings typically run 25-32% food cost. Hand-folded versions carry meaningful labor cost beyond ingredients that should factor into the overall pricing decision, even if it doesn't show up in food cost percentage." },
      { q: "How much filling should be costed per dumpling?", a: "Weigh actual fill amounts with a scoop or scale rather than estimating — fill weight is one of the easiest things to drift upward per piece without a standardized portioning tool." },
      { q: "Should hand-made dumplings cost more than frozen ones on the menu?", a: "The ingredient cost difference may be small, but hand-folding carries real labor time that a frozen alternative doesn't. This labor cost should be factored into the price even though it's separate from food cost percentage." },
    ],
  },

  pho: {
    slug: "pho",
    name: "Pho",
    category: "Vietnamese",
    foodCostRange: "26–32%",
    typicalPriceRange: "$13–$17",
    costBreakdown: [
      { ingredient: "Broth", note: "Long-simmered bone broth carries real labor and utility cost beyond ingredients", costShare: "20–28%" },
      { ingredient: "Rice noodles", note: "Cheap per bowl", costShare: "8–10%" },
      { ingredient: "Protein (beef, chicken)", note: "The main lever between a basic and premium bowl", costShare: "35–45%" },
      { ingredient: "Herbs and garnish plate (basil, bean sprouts, lime)", note: "Small individually, consistently under-costed in aggregate", costShare: "10–15%" },
    ],
    worked: {
      items: [
        { ingredient: "Beef bone broth", amount: "16 oz", cost: 1.3 },
        { ingredient: "Rice noodles", amount: "5 oz", cost: 0.5 },
        { ingredient: "Sliced beef + brisket", amount: "4 oz", cost: 2.6 },
        { ingredient: "Herb plate (basil, sprouts, lime, jalapeño)", amount: "—", cost: 0.55 },
      ],
      totalCost: 4.95,
      targetFoodCostPct: 30,
    },
    mistakes: [
      { title: "Not costing the long-simmer broth's labor and utility cost", desc: "A properly made pho broth simmers for many hours, consuming real labor time and utility cost beyond just the bones and aromatics — a cost that's easy to leave out entirely." },
      { title: "Treating the herb garnish plate as free", desc: "Basil, bean sprouts, lime, and jalapeño served alongside every bowl carry real per-order cost that compounds significantly across volume, even though each component is individually cheap." },
      { title: "Pricing the beef combination bowl the same as the basic bowl", desc: "A combination bowl with multiple cuts of beef (brisket, tendon, tripe) costs meaningfully more than a single-cut basic bowl, and the price gap should reflect that." },
    ],
    faqs: [
      { q: "What is a good food cost percentage for pho?", a: "Pho typically runs 26-32% food cost. Broth labor time and protein choice (single cut vs. combination) are the main cost levers within that range." },
      { q: "Why does pho broth carry labor cost beyond its ingredients?", a: "A proper pho broth simmers for many hours, which consumes real kitchen labor time and utility cost — factors that don't show up in a simple ingredient list but are genuine costs of production." },
      { q: "Should the herb garnish plate be priced separately?", a: "It doesn't need a separate menu price, but it should be costed into the bowl's total ingredient cost rather than assumed to be negligible — the herb plate adds up meaningfully across volume." },
    ],
  },

  gyro: {
    slug: "gyro",
    name: "Gyro",
    category: "Mediterranean / Greek",
    foodCostRange: "28–34%",
    typicalPriceRange: "$10–$14",
    costBreakdown: [
      { ingredient: "Meat (lamb, beef, or chicken)", note: "The dominant cost, and spit-roasted meat has real trim and cooking loss", costShare: "45–55%" },
      { ingredient: "Pita", note: "Cheap per serving", costShare: "8–10%" },
      { ingredient: "Tzatziki sauce", note: "Yogurt-based, moderate cost, easy to over-portion", costShare: "10–15%" },
      { ingredient: "Vegetables (tomato, onion, lettuce)", note: "Small but adds up across volume", costShare: "10–15%" },
    ],
    worked: {
      items: [
        { ingredient: "Gyro meat (lamb/beef blend)", amount: "5 oz cooked", cost: 2.4 },
        { ingredient: "Pita bread", amount: "1", cost: 0.4 },
        { ingredient: "Tzatziki", amount: "2 oz", cost: 0.35 },
        { ingredient: "Tomato, onion, lettuce", amount: "—", cost: 0.3 },
      ],
      totalCost: 3.45,
      targetFoodCostPct: 30,
    },
    mistakes: [
      { title: "Costing spit meat at raw weight before cooking loss", desc: "Vertical spit-roasted meat loses significant weight to rendered fat and moisture during cooking. Costing against the raw, pre-cook weight understates true cost." },
      { title: "Free-pouring tzatziki instead of portioning it", desc: "Yogurt-based sauces are easy to over-pour without a standardized portion tool, and tzatziki has real ingredient cost that adds up when inconsistently applied." },
      { title: "Not differentiating lamb-blend pricing from all-chicken options", desc: "Lamb typically costs more than chicken, and a menu offering both should price them to reflect the actual cost gap rather than a single flat gyro price." },
    ],
    faqs: [
      { q: "What is a good food cost percentage for gyros?", a: "Gyros typically run 28-34% food cost. Meat choice (lamb blend vs. chicken) is the main driver, since lamb costs meaningfully more per pound than chicken." },
      { q: "Why does spit-roasted meat cost more than the raw purchase price suggests?", a: "Vertical spit cooking causes real weight loss from rendered fat and moisture over the cooking time. The effective cost per usable ounce is higher than the raw purchase price implies." },
      { q: "Should tzatziki be portioned with a measuring tool?", a: "Yes. Free-pouring yogurt-based sauces is one of the more common sources of cost inconsistency in Mediterranean menus — a standardized portion cup keeps cost predictable order to order." },
    ],
  },

  nachos: {
    slug: "nachos",
    name: "Nachos",
    category: "Mexican / Bar Food",
    foodCostRange: "24–30%",
    typicalPriceRange: "$11–$16 (shareable)",
    costBreakdown: [
      { ingredient: "Tortilla chips", note: "Cheap in bulk, but portion size on a shareable plate matters", costShare: "10–15%" },
      { ingredient: "Cheese sauce or shredded cheese", note: "The dominant cost on a fully-loaded plate", costShare: "25–35%" },
      { ingredient: "Protein (if added)", note: "Turns a basic nacho plate into a premium one", costShare: "20–35%" },
      { ingredient: "Toppings (jalapeño, sour cream, guac, pico)", note: "Individually small, adds up fast when a plate is fully loaded", costShare: "20–30%" },
    ],
    worked: {
      items: [
        { ingredient: "Tortilla chips (shareable portion)", amount: "6 oz", cost: 0.6 },
        { ingredient: "Cheese sauce", amount: "6 oz", cost: 1.5 },
        { ingredient: "Seasoned beef", amount: "4 oz", cost: 1.4 },
        { ingredient: "Jalapeño, sour cream, guac, pico", amount: "—", cost: 1.3 },
      ],
      totalCost: 4.8,
      targetFoodCostPct: 27,
    },
    mistakes: [
      { title: "Not standardizing the topping load on a shareable plate", desc: "Nachos are one of the easiest dishes for topping portions to drift, since they're often built by eye rather than measured — a generous guac scoop or extra cheese pour compounds fast across volume." },
      { title: "Underpricing the fully-loaded version relative to the basic version", desc: "A basic cheese-only nacho plate and a fully-loaded version with protein, guac, and sour cream can differ by $3+ in ingredient cost — pricing them $1-2 apart loses money on the loaded version." },
      { title: "Not costing guacamole separately given avocado price volatility", desc: "Avocado prices swing meaningfully by season, and guac-topped items should be monitored more closely than most menu components for this reason." },
    ],
    faqs: [
      { q: "What is a good food cost percentage for nachos?", a: "Shareable nacho plates typically run 24-30% food cost. Whether protein and guacamole are included is the main driver of where a specific version lands in that range." },
      { q: "How should a fully-loaded nacho plate be priced versus a basic one?", a: "Price the gap to reflect actual added ingredient cost. A fully-loaded plate with protein, guac, and sour cream can cost $3 or more per serving than a basic cheese-only version, and the menu price gap should match that." },
      { q: "Why does guacamole need closer cost monitoring than other toppings?", a: "Avocado prices are seasonally volatile and can move significantly within a few months. Menu items built around guacamole benefit from more frequent cost review than items with stable ingredients." },
    ],
  },

  bagel: {
    slug: "bagel",
    name: "Bagel with Cream Cheese",
    category: "Bakery / Breakfast",
    foodCostRange: "18–26%",
    typicalPriceRange: "$4–$7",
    costBreakdown: [
      { ingredient: "Bagel", note: "Cheap per unit, whether baked in-house or sourced", costShare: "20–30%" },
      { ingredient: "Cream cheese", note: "The main cost lever, especially for flavored or specialty spreads", costShare: "35–45%" },
      { ingredient: "Add-ins (lox, tomato, capers)", note: "Turns a $4 bagel into a $12+ item", costShare: "varies widely" },
    ],
    worked: {
      items: [
        { ingredient: "Bagel", amount: "1", cost: 0.55 },
        { ingredient: "Cream cheese", amount: "2 oz", cost: 0.5 },
      ],
      totalCost: 1.05,
      targetFoodCostPct: 22,
    },
    mistakes: [
      { title: "Not costing flavored cream cheese variants separately", desc: "Vegetable, herb, or specialty cream cheese blends can cost more per ounce than plain, and pricing all variants the same absorbs that gap into margin." },
      { title: "Underpricing lox and specialty bagel add-ons", desc: "Smoked salmon is a significant cost jump from a basic bagel and cream cheese. The upcharge needs to reflect real lox cost, which is substantial per ounce, not a flat round number." },
      { title: "Over-portioning cream cheese without a standard scoop", desc: "Cream cheese applied by eye rather than a measured scoop or portion tool is one of the easiest places for cost to drift upward on a high-volume breakfast item." },
    ],
    faqs: [
      { q: "What is a good food cost percentage for a bagel with cream cheese?", a: "A standard bagel and cream cheese typically runs 18-26% food cost. Lox or specialty add-ons push cost meaningfully higher and need separate pricing consideration." },
      { q: "How much should a lox bagel cost compared to a plain one?", a: "Smoked salmon costs substantially more per ounce than cream cheese alone, often $2-4 more per serving. The lox bagel's price should reflect that real cost gap, not just a token upcharge." },
      { q: "Should cream cheese be portioned with a scoop?", a: "Yes. Cream cheese applied by eye rather than measured is a common source of cost drift on high-volume breakfast items — a standard 2oz scoop keeps cost predictable." },
    ],
  },

  donut: {
    slug: "donut",
    name: "Donut",
    category: "Bakery",
    foodCostRange: "15–22%",
    typicalPriceRange: "$3–$5.50 (glazed), $4.50–$7 (filled/specialty)",
    costBreakdown: [
      { ingredient: "Dough (fried)", note: "Cheap per unit even accounting for frying oil", costShare: "30–40%" },
      { ingredient: "Glaze or icing", note: "Low cost, high perceived value", costShare: "10–15%" },
      { ingredient: "Filling (if applicable)", note: "The main differentiator between basic and premium donuts", costShare: "20–35%" },
      { ingredient: "Specialty toppings (bacon, sprinkles, gourmet glazes)", note: "Where premium donut pricing is actually earned", costShare: "15–30%" },
    ],
    worked: {
      items: [
        { ingredient: "Yeast-raised dough (fried)", amount: "1", cost: 0.35 },
        { ingredient: "Glaze", amount: "—", cost: 0.15 },
        { ingredient: "Custard filling", amount: "—", cost: 0.4 },
      ],
      totalCost: 0.9,
      targetFoodCostPct: 18,
    },
    mistakes: [
      { title: "Pricing filled and unfilled donuts too close together", desc: "A custard or fruit-filled donut costs meaningfully more than a basic glazed one, and pricing them $0.50 apart when the ingredient cost gap is $0.30-0.40 barely protects margin." },
      { title: "Underpricing specialty gourmet donuts with multiple toppings", desc: "A donut with bacon, specialty glaze, and a garnish stacks several cost components that a basic glazed donut price was never built to cover." },
      { title: "Not allocating frying oil cost per unit", desc: "Frying oil is consumed continuously and easy to treat as overhead rather than a real per-donut cost, even though it's a genuine expense worth at least a rough allocation." },
    ],
    faqs: [
      { q: "What is a good food cost percentage for donuts?", a: "Basic donuts typically run 15-22% food cost. Filled and specialty gourmet versions with multiple premium toppings can run higher due to added ingredient cost, and should be priced accordingly." },
      { q: "How much more should a filled donut cost than a glazed one?", a: "The filling itself commonly adds $0.30-0.50 in ingredient cost, which should translate to at least $1-1.50 more on the menu price to maintain a consistent food cost percentage." },
      { q: "Should specialty donuts be priced individually rather than by a flat markup?", a: "Yes. A gourmet donut with bacon, specialty glaze, and multiple toppings has real, stacked ingredient costs that a single flat markup across the whole donut case will misprice in one direction or the other." },
    ],
  },

  milkshake: {
    slug: "milkshake",
    name: "Milkshake",
    category: "Café / Dessert",
    foodCostRange: "18–26%",
    typicalPriceRange: "$6–$9",
    costBreakdown: [
      { ingredient: "Ice cream base", note: "The dominant cost, scales with quality and quantity used", costShare: "50–60%" },
      { ingredient: "Milk", note: "Low individual cost", costShare: "8–12%" },
      { ingredient: "Mix-ins (cookies, candy, syrup)", note: "The main lever for specialty/premium shake pricing", costShare: "15–30%" },
      { ingredient: "Whipped cream, cherry, cup", note: "Small but consistently under-costed garnish", costShare: "8–12%" },
    ],
    worked: {
      items: [
        { ingredient: "Vanilla ice cream", amount: "10 oz", cost: 1.6 },
        { ingredient: "Milk", amount: "4 oz", cost: 0.2 },
        { ingredient: "Whipped cream, cherry, cup/lid", amount: "—", cost: 0.35 },
      ],
      totalCost: 2.15,
      targetFoodCostPct: 22,
    },
    mistakes: [
      { title: "Underpricing specialty mix-in shakes", desc: "A shake blended with cookies, candy, or specialty syrup costs meaningfully more in ingredients than a classic vanilla or chocolate shake, and the price gap should reflect the actual mix-in cost." },
      { title: "Not standardizing ice cream scoop count per shake size", desc: "Shake size and ice cream quantity are easy to drift without a standardized scoop count or fill line, directly multiplying your most expensive ingredient." },
      { title: "Treating whipped cream and cherry garnish as free", desc: "These finishing touches carry small but real per-serving cost that should be counted rather than assumed negligible, especially across high volume." },
    ],
    faqs: [
      { q: "What is a good food cost percentage for milkshakes?", a: "Milkshakes typically run 18-26% food cost. Specialty mix-in versions with cookies, candy, or premium syrups run toward the higher end due to added ingredient cost." },
      { q: "Why is ice cream the dominant cost in a milkshake?", a: "Ice cream typically makes up 50-60% of a milkshake's total ingredient cost, since it's used in larger quantity than any other component and is generally the most expensive ingredient per ounce." },
      { q: "Should specialty shakes cost more than classic vanilla or chocolate?", a: "Yes, if they include cookies, candy, or specialty syrups, since those mix-ins add real cost beyond the base ice cream and milk. Pricing them the same as classic flavors absorbs that gap into reduced margin." },
    ],
  },

  "hot-dog": {
    slug: "hot-dog",
    name: "Hot Dog",
    category: "American / Ballpark",
    foodCostRange: "22–28%",
    typicalPriceRange: "$5–$9",
    costBreakdown: [
      { ingredient: "Hot dog (sausage)", note: "Quality tier (standard vs. all-beef vs. specialty) is the main cost lever", costShare: "40–50%" },
      { ingredient: "Bun", note: "Cheap per serving", costShare: "10–15%" },
      { ingredient: "Toppings (mustard, relish, onion, chili, cheese)", note: "Individually cheap, but a fully-loaded version adds up meaningfully", costShare: "25–40%" },
    ],
    worked: {
      items: [
        { ingredient: "All-beef hot dog", amount: "1", cost: 1.1 },
        { ingredient: "Bun", amount: "1", cost: 0.35 },
        { ingredient: "Chili, cheese, onion", amount: "—", cost: 0.9 },
      ],
      totalCost: 2.35,
      targetFoodCostPct: 25,
    },
    mistakes: [
      { title: "Pricing a loaded chili-cheese dog too close to the plain version", desc: "Adding chili and cheese can nearly double the ingredient cost of a basic hot dog, and pricing the loaded version only $1-2 higher often fails to protect margin." },
      { title: "Not distinguishing sausage quality tiers in pricing", desc: "Standard, all-beef, and specialty/artisan sausages have meaningfully different costs per unit, and a menu offering multiple tiers should price them to reflect that." },
      { title: "Treating condiments as free regardless of quantity offered", desc: "Self-serve or generously-applied toppings like relish, onion, and sauerkraut carry real per-order cost that adds up across volume, even if each individual squeeze feels negligible." },
    ],
    faqs: [
      { q: "What is a good food cost percentage for hot dogs?", a: "Hot dogs typically run 22-28% food cost. Sausage quality tier and topping load (plain vs. fully-loaded chili-cheese) are the main drivers within that range." },
      { q: "How much more should a chili-cheese dog cost than a plain one?", a: "Chili and cheese can add $0.80-1.20 in ingredient cost over a plain hot dog, which should translate to at least $2-3 more on the menu price to maintain the target food cost percentage." },
      { q: "Should specialty or artisan hot dogs be priced higher than standard ones?", a: "Yes — artisan or all-beef sausages cost meaningfully more per unit than standard options, and the menu price should reflect that real cost difference rather than a single flat hot dog price across quality tiers." },
    ],
  },
};

export const ALL_DISHES = Object.values(DISH_DATA);
