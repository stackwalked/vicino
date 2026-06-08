# Vicino marketing website plan

## Purpose

`apps/www` is Vicino’s own marketing website. Its first job is to make restaurant owners understand why their online presence matters before a guest ever walks through the door, and then move them toward a clear first conversation or website quote.

The site should feel premium, specific, and local — not like a generic agency template. It should prove that Vicino can create polished, atmosphere-driven websites for restaurants, cafés, gelato shops, street-food spots, bars, and small hospitality groups.

## Primary audience

- Restaurant owners and managers.
- Cafés, bakeries, gelato shops, kebab/street-food businesses, bars, small hospitality groups.
- Restaurant and hospitality businesses that rely on search, maps, photos, reviews, menus, reservations, and direct customer trust.
- Especially businesses that currently have no website, an outdated website, or rely too heavily on Instagram, Google Maps, delivery apps, or booking platforms.

## Core message

Most guests choose a restaurant before they ever walk in.

They check the restaurant online first: photos, menu, hours, reviews, address, booking options, and whether the place feels trustworthy. Vicino builds fast, polished, localized websites that turn that first look into a visit, booking, order, or enquiry.

## Positioning goals

1. **Make the problem obvious**
   - The website is not decoration.
   - It is part of the customer’s decision before they arrive.
   - A weak, missing, or outdated online presence makes the business look smaller than it really is.

2. **Show range without feeling generic**
   - The same strategic framework should adapt to different restaurant types.
   - A fine-dining site, neighborhood café site, street-food site, and gelato site should feel meaningfully different.
   - The current `BrandWorldShowcase` section already supports this direction.

3. **Explain the offer clearly**
   - Vicino provides website design/build, brand atmosphere, local visibility, and launch support.
   - More advanced marketing and AI services can be visible as future direction, but must not be sold as currently available if they are not ready.

4. **Move visitors toward action**
   - Primary CTA for the current site: `Start a conversation`.
   - Secondary CTA: explore style studies or understand the offer.
   - Future CTA: interactive price builder.

## Current site structure in `apps/www`

The current homepage is composed from these sections:

1. `HeroSection`
2. `ConceptBridge`
3. `BrandWorldShowcase`
4. `ServicesSection`
5. `ProcessSection`
6. `FinalCta`

The current direction is strong: premium dark hero, localized hospitality copy, style studies, service explanation, process, and final CTA. The next iteration should sharpen the conversion flow and introduce a more explicit offer/pricing path.

## Recommended homepage flow

### 1. Hero

**Goal:** immediately communicate the restaurant-specific value proposition.

Recommended copy direction:

- Eyebrow: `Websites & marketing for local restaurants`
- Headline: `Most guests choose your restaurant before they ever walk in.`
- Intro: `They check you online first — your photos, your menu, your reviews, your hours. Vicino builds polished websites that turn that first look into a booking, visit, or order.`
- Primary CTA: `Start a conversation`
- Secondary CTA: `See style studies`
- Optional microcopy near future builder CTA: `Preview your scope and price in real time`

Notes:

- Keep the current premium atmosphere.
- The offer should feel restaurant-specific, not like a general web agency.
- Until the builder is implemented, the primary CTA should point to `#contact` and use `Start a conversation`.

### 2. Decision-before-the-door section

This can replace or evolve the current `ConceptBridge` section.

**Fixed visible layer:**

- Kicker: `Any style, any kind of restaurant. Built around yours.`
- Headline: `By the time a guest reaches your door, the choice is already made.`
- One-line text: `It happened earlier, on a phone — your photos, your menu, your reviews, next to two other places. If you are hard to find or look out of date, you lose that guest before they ever taste your food.`
- CTA: `See what yours could look like →`
- Optional microcopy: `The same system, different restaurants. Yours is next.`

**Interactive benefit labels:**

Use six short visible labels. Each label reveals a short detail on hover/focus on desktop and tap on mobile.

| Label | Detail |
| --- | --- |
| Found on Google | Guests search by area and cuisine before choosing. Your site helps them find you first. |
| Keep the margin | Direct bookings and orders help reduce reliance on commission-heavy platforms. |
| Bigger tables | Special occasions and groups choose places that look ready for them. |
| Always current | Hours, menus, phone numbers, and links should be controlled in one trusted place. |
| Quieter phone | Clear booking and enquiry paths reduce missed calls during service. |
| Look established | A polished site helps the business look as strong as the experience inside. |

Interaction requirements:

- Desktop: hover and keyboard focus reveal one detail card at a time.
- Mobile: tap opens one detail, second tap or outside tap closes it.
- Tap target at least `44px`.
- Use actual focusable buttons, not plain spans.
- Use `aria-expanded` and connect labels/details for accessibility.
- The revealed text should be short, with no internal scroll and no CTA inside.
- The animation/background can continue independently; benefit cards should not obscure the main visual focus.

### 3. Style studies / brand worlds

Keep and refine the current `BrandWorldShowcase` concept.

**Goal:** prove that Vicino does not sell generic templates.

Current style studies:

- Fine dining
- Neighborhood café
- Kebab & street food
- Gelato / dessert shop

Recommended improvements:

- Tie each study to a real business outcome: reservation, repeat visit, order, share.
- Keep the copy short and visual.
- Maintain mobile fallback cards.
- Ensure reduced-motion users still get the content without relying on scroll morphing.

### 4. Services / offer overview

The current three-card structure is good for a simple overview. Expand it carefully when the pricing builder is introduced.

Recommended top-level service pillars:

1. **Website design & build**
   - Fast Astro site.
   - Mobile-first layout, always included.
   - Multi-language foundation, always included.
   - Clear pages for menu, bookings, location, and story.
   - Static-first performance.

2. **Brand atmosphere**
   - Visual direction.
   - Typography, colors, spacing, image mood, layout system.
   - Bespoke restaurant feel rather than generic template aesthetics.

3. **Local visibility**
   - SEO-ready structure.
   - Localized metadata.
   - Google-friendly business information.
   - Analytics foundation for future campaigns.

4. **Optional growth modules**
   - Digital menu.
   - Reservations.
   - Orders/delivery links, marked as coming soon for now.
   - Gallery/reviews.
   - Events.
   - Google Business Profile setup.

### 5. Website builder / pricing preview

Add a future interactive section that lets a visitor build a rough website scope and see the price update live.

**Goal:** make pricing feel transparent and make the lead more qualified before the first conversation.

Recommended CTA language:

- Section title: `Build your website plan`
- Text: `Choose the pieces your restaurant needs now. We will turn this into a clear launch scope before work begins.`
- Primary action: `Send this plan`
- Helper action: `How does this work?`

A small tutorial/help popover is useful, but the builder should be understandable without a tutorial.

#### Builder element types

| Type | Meaning |
| --- | --- |
| Base | Required foundation. Always included. Sets the starting price. |
| Module | Main bundle toggle. Includes a group of related features at a better bundled price. |
| Feature | Individual feature inside a module. Can be selected separately if the full module is not selected. |
| Add-on | Optional premium extra, priced individually. |
| Coming soon / unavailable | Visible future offer. Disabled or marked as coming soon. Does not count toward price. |

#### Pricing rules

- `total = Base + selected modules/features/add-ons that count toward total`.
- If a module is enabled, use the module bundle price.
- If only individual features inside a module are enabled, sum those feature prices.
- Individual feature prices should make the full set roughly 25–30% more expensive than the bundle.
- If the user selects at least 60% of a module’s features without selecting the bundle, show a nudge: `Add the full [module] bundle and save €Y`.
- If a module is enabled, included feature toggles should appear locked as `Included` and should not be charged twice.
- If a feature requires another feature/module, either disable it until the requirement is selected or explain the dependency clearly.
- Coming-soon/unavailable items must not count toward the total and must not show a firm price unless the business is ready to sell them.
- Public prices can be shown as exact package prices, while still allowing final project scope to be confirmed in conversation.

## Proposed pricing/catalog

These are the public package prices for the current plan. Keep the implementation data-driven so pricing can be adjusted later without editing component logic.

### Base package

| Item | Status | Price | Notes |
| --- | --- | ---: | --- |
| Foundation | Available | €690 | Required. Includes mobile-responsive build, mobile layout, multi-language foundation, 1 landing page, basic SEO title/meta/indexing, SSL, hosting setup, contact block, map embed, contact form, and social links. |

### Website modules

| Module | Status | Price | Includes | Dependencies |
| --- | --- | ---: | --- | --- |
| Full Site Structure | Available | €450 | Multi-page structure, About/Story, Menu page shell, navigation, full footer, section copy. | Foundation |
| Premium Design & Animation | Available | €550 | Premium visual direction, selected style system, custom layouts, hover states, scroll animation. | Foundation |
| Digital Menu | Available | €290 | Structured menu, categories, allergens, dietary filters, dish photos. | Foundation |
| Reservations | Available | €350 | Booking form, embedded booking widget, confirmation flow, availability notes. | Foundation |
| Orders & Delivery | Coming soon | Not shown | Future online-order path, cart or order enquiry path, aggregator links, and pickup messaging. Disabled until ready. | Digital Menu |
| Get Found | Available | €350 | Local SEO, schema, geo metadata, indexable local terms, GA4, Meta Pixel. | Foundation |
| Multi-language | Included | Included | Language switcher, English plus one additional language, translated page content. Included as part of the foundation and scaled across selected pages. | Foundation |
| Gallery & Reviews | Partially available | €250 | Photo gallery and Google reviews. AI-generated video content is coming soon. | Foundation |
| Events | Available | €180 | Events page, enquiry form, simple calendar/listing structure. | Full Site Structure recommended |

### Add-ons

| Add-on | Status | Price | Notes |
| --- | --- | ---: | --- |
| Custom Animations | Available | €150 | Extra motion beyond the design module. Must remain performant and accessible. |
| Advanced Booking | Coming soon | Not shown | Deposits, table management, no-show rules. Requires Reservations, but should be disabled until operationally ready. |
| Loyalty Program | Coming soon | Not shown | Future customer retention feature. Do not include in live price yet. |
| Membership Area | Coming soon | Not shown | Future gated/customer account area. Do not include in live price yet. |
| Premium Conversion Copywriting | Available | €250 | Done-for-you copywriting beyond normal section copy. |
| Google Business Profile setup | Available | €290 | One-time setup or cleanup for businesses missing or misusing their Google profile. Cross-sell near Get Found. |

### AI ecosystem

| Item | Status | Price | Notes |
| --- | --- | ---: | --- |
| AI Assistant — answers, bookings, calls | Coming soon | Not shown | Visible as a future direction only. Default off, disabled, and excluded from total. Explain that AI support for calls, messages, FAQs, and booking workflows is being explored after the website foundation. |
| AI-generated marketing videos | Coming soon | Not shown | Can be mentioned inside Gallery & Reviews as a future enhancement only. Do not sell as ready yet. |

## Availability policy

Use clear labels so visitors are not misled:

- **Available**: can be sold and delivered now.
- **Partially available**: part of the module is ready, but some named sub-features are not ready.
- **Coming soon**: visible to show direction, but disabled and excluded from price.
- **Custom quote**: possible, but not enough pricing certainty for a public fixed price.

Do not hide future ideas completely if they help explain Vicino’s roadmap, but never make the visitor think they can currently buy a feature that is not ready.

## Content and localization goals

- Keep all visitor-facing copy in locale files, currently `src/i18n/en.ts` and `src/i18n/it.ts`.
- English and Italian should both be maintained from the beginning, with a friendly/local tone rather than overly formal sales copy.
- Avoid Russian notes in planning or implementation files unless they are clearly internal and temporary.
- SEO metadata should be localized.
- Pricing and builder labels should be data-driven and translatable.

## Technical goals

- Astro + TypeScript.
- Tailwind CSS v4 utilities with project-owned design tokens.
- Static-first build.
- Keep interactivity small and progressive.
- Avoid heavy UI libraries.
- Use accessible buttons, forms, and ARIA patterns for interactive sections.
- Prefer structured data/config for builder modules, pricing, navigation, and repeated business content.
- Run validation for implementation changes with:
  - `bun --filter @vicino/www check`
  - `bun --filter @vicino/www build`

## Implementation roadmap

### Phase 1 — Clarify current homepage

- Tighten hero copy around the decision-before-the-door message.
- Update `ConceptBridge` into the interactive benefits section or a simpler static version first.
- Keep `BrandWorldShowcase` and improve copy/outcomes if needed.
- Update service copy to introduce the future pricing-builder structure without overloading the page.
- Ensure English and Italian copy stay aligned.

### Phase 2 — Add pricing preview

- Create a data file for packages/modules/add-ons.
- Build a client-side Astro island or small vanilla script for the calculator.
- Show total price, selected scope, unavailable items, and bundle savings.
- Add a `Send this plan` CTA that leads to contact or a form.
- Keep coming-soon features disabled and excluded from price.

### Phase 3 — Lead capture and refinement

- Add a simple contact/project enquiry flow.
- Include selected builder scope in the enquiry where possible.
- Add analytics events for CTA clicks, builder interactions, and form submissions.
- Refine copy based on real conversations with restaurant owners.

### Phase 4 — Future offer expansion

- Make AI assistant offering real only after the workflow, tooling, pricing, and operational support are validated.
- Add advanced booking, loyalty, membership, and AI video generation only when they can be delivered reliably.
- Consider moving reusable builder/service patterns into `packages/site-kit` only after reuse value is proven.

## Confirmed decisions

- Keep the public niche restaurant-only for now, including cafés, bars, gelato shops, street-food spots, and small hospitality groups.
- Mobile layout is always included.
- Multi-language is always included.
- Orders & Delivery is unavailable for now and should be marked as coming soon.
- Exact public prices are acceptable.
- Current primary CTA: `Start a conversation`.
- Italian tone: friendly/local, not overly formal or aggressively sales-oriented.
