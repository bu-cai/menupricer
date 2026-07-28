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
};

export const ALL_DISHES = Object.values(DISH_DATA);
