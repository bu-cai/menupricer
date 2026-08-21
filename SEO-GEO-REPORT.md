# SEO/GEO Report — aimenupricer.com

**Date:** 2026-08-20
**Scope:** Audit + targeted fixes. No changes to pricing, payment, or AI pricing logic.

---

## 1. Audit findings (before this pass)

| Area | Status |
|---|---|
| Title / Meta / H1 | Good — homepage title already contains "AI Menu Pricing" + "Food Cost Calculator"; meta description was 167 chars (over Google's ~155-160 truncation limit), fixed in a prior pass to 139 chars |
| Canonical tags | Present on all page types checked |
| Sitemap.xml | 152 URLs, **all return HTTP 200** — zero dead links (full scan, not sampled) |
| Robots.txt | Correctly allows all major AI citation bots (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.) |
| Schema/JSON-LD | Valid on every page type spot-checked (calculator, blog, how-to-price): SoftwareApplication, WebSite, Organization, WebApplication/Article/BlogPosting, FAQPage, BreadcrumbList, HowTo — all parse correctly, no malformed JSON |
| Images/Alt | Zero missing alt attributes on pages checked |
| Page speed | ~0.4–0.5s per page (Vercel edge cache HIT). No Core Web Vitals red flags found |
| Mobile SEO | Fixed in a prior pass: hidden "My Menu" tab, duplicate submit CTA, cramped ingredient-name input |
| Keyword repetition | "cost" flagged at ~3.2% density by third-party GEO tool, but traced to legitimate calculator/page names in nav (Food Cost Calculator, Prime Cost Calculator, etc.) — not stuffing. No action taken; renaming real page links would hurt UX for a false positive |
| Search intent | Homepage: transactional (try the tool). Calculators: transactional. Blog posts: informational, already answer their target question in the opening paragraph |

**GEO audit score (geo-optimizer-skill, third-party tool): 75/100**, up from a 51/100 baseline earlier this project. Remaining gaps are either false positives (keyword density) or require real external assets not fabricated here (Wikipedia/LinkedIn `sameAs` links, which need real accounts to exist first).

---

## 2. Why no new pages were created

The request listed five candidate pages: `/menu-pricing-calculator`, `/food-cost-calculator`, `/restaurant-profit-margin-calculator`, `/menu-engineering`, `/restaurant-menu-pricing`.

Checked each against the existing site before creating anything, per the "no duplicate/low-quality pages" instruction:

| Requested page | Existing equivalent | Decision |
|---|---|---|
| `/food-cost-calculator` | Already exists at this exact path | No action needed |
| `/menu-pricing-calculator` | `/menu-cost-calculator` — title "Menu Cost Calculator — Price Any Dish", already targets "menu pricing calculator" in its keywords array and OG title | **Not created** — a new page would duplicate this one. Strengthened internal linking instead. |
| `/restaurant-profit-margin-calculator` | `/restaurant-profit-calculator` — title is literally "Restaurant Profit Margin Calculator" already | **Not created** — exact keyword already targeted |
| `/menu-engineering` | `/blog/menu-engineering` — full guide already covers the concept, quadrant framework, and worked examples | **Not created** — added missing internal links to/from it instead |
| `/restaurant-menu-pricing` | `/blog/how-to-price-a-restaurant-menu` + `/menu-pricing` (hub by restaurant type) | **Not created** — two pages already cover this intent from different angles; a third would cannibalize both |

Creating five new thin pages that restate what these existing pages already say would have been exactly the "duplicate, low-quality" outcome the brief warned against. The higher-value fix was closing the internal-linking gaps between them (see §4).

---

## 3. GEO — direct-answer content added

Added 3 new Q&As covering the specific questions requested, each leading with a 1–3 sentence direct answer before explanation — matching the pattern GEO tools (ChatGPT, Perplexity, Google AI Overviews) extract most reliably:

- **What is AI menu pricing?**
- **What is menu engineering?**
- **How can restaurants increase menu profitability?**

("What is a good food cost percentage?" and "How do you calculate restaurant menu prices?" were already present as existing FAQ entries — not duplicated.)

Added in two places, kept in sync:
- `lib/i18n.ts` — visible FAQ accordion on the homepage (EN + ZH)
- `app/page.tsx` `HOME_FAQ_SCHEMA` — the FAQPage JSON-LD (EN)

Schema now matches visible content exactly (Google's FAQPage guidelines require this — mismatched schema risks losing rich-result eligibility). No fabricated Review, Rating, or AggregateRating schema was added anywhere, per instruction.

---

## 4. Internal linking — chain closed

The requested chain was: **Restaurant Menu Pricing → Menu Pricing Calculator → Food Cost Calculator → Menu Engineering → AI Menu Pricer**, mapped onto real existing pages since no new ones were created:

```
/blog/how-to-price-a-restaurant-menu  (Restaurant Menu Pricing)
        ↕
/menu-cost-calculator                  (Menu Pricing Calculator)
        ↕
/food-cost-calculator                  (Food Cost Calculator)
        ↕
/blog/menu-engineering                 (Menu Engineering)
        ↕
/  (homepage)                          (AI Menu Pricer)
```

Before this pass, the chain had gaps — `/food-cost-calculator` and `/menu-cost-calculator` never linked to `/blog/menu-engineering`, and `/blog/menu-engineering` never linked back to either calculator. Fixed:

- `app/food-cost-calculator/page.tsx` — added links to Menu Cost Calculator and Menu Engineering in its "Related guides" block
- `app/menu-cost-calculator/MenuCostCalculatorClient.tsx` — this page had **no** related-content block at all (only 3 thin footer links); added a full "Related guides" section linking to Food Cost Calculator, Restaurant Menu Pricing guide, Menu Engineering, and Restaurant Profit Margin Calculator
- `app/blog/menu-engineering/page.tsx` — added Menu Pricing Calculator and Restaurant Profit Margin Calculator to its "Related guides" list

Every node in the chain now links to its neighbors in both directions, and every calculator ultimately points back to the homepage via existing "Try MenuPricer Free" CTAs.

---

## 5. What was NOT touched (by design)

- **Homepage H1/title/meta**: already well-optimized from prior work this project (title contains "AI Menu Pricing Tool & Food Cost Calculator", H1 was already fixed for brand-name consistency, meta description already trimmed to fit SERP). Re-touching it now would have been change for its own sake.
- **Pricing/payment logic, AI pricing engine**: untouched, per instruction.
- **The 3 low-value items from the last GEO audit** (keyword density false-positive, `sameAs` Knowledge Graph links needing real external accounts, WebMCP attributes on an immature standard): left as-is — already evaluated as low ROI in a prior pass, re-confirmed here.

---

## 6. Verified

- All edited pages loaded with zero console errors (dev server, browser-checked)
- New FAQ questions render in the visible accordion on both EN and ZH
- FAQPage JSON-LD parses as valid JSON with all 10 questions (7 original + 3 new)
- New internal links resolve correctly (`/blog/menu-engineering`, `/restaurant-profit-calculator`, `/menu-cost-calculator` all confirmed present with correct `href`s)
- Full sitemap re-confirmed clean (152/152 URLs return 200) before making changes, so any regression would be attributable to this pass — none found

Not yet verified: production GEO score after deploy (was 75/100 before this pass; expect a small increase from the FAQ/schema additions and internal-linking density, not a big jump — the biggest remaining lever is off-page, see below).

---

## 7. What's most worth doing next

Technical SEO/GEO is now close to its ceiling for a site this size — the last two GEO audits found no new structural issues, and the remaining flagged items are either false positives or need real external assets (a LinkedIn company page, a Wikipedia mention) that can't be created programmatically.

The highest-leverage next step is **off-page, not on-page**: Google Search Console shows an average ranking position in the low-to-mid 20s with near-zero CTR — the site is being crawled and indexed correctly, but doesn't yet have the backlink/authority signal to rank on page 1 for competitive terms like "food cost calculator." That comes from real inbound links and mentions (Product Hunt launch, relevant subreddits, directory listings), not further code changes.
