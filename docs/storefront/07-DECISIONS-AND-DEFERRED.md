# Decisions and deferred items

## Locked for Batch 11

- Shared components plus presets.
- Three presets: Essential, Editorial, Bold.
- Predefined-section builder plus live preview.
- Static HTML, Tailwind Browser CDN v4, Alpine CDN 3.x.
- Storefront is a level-one admin module after Shipping and before Settings.
- Storefront subnavigation: Themes, Branding, Homepage.
- Admin max width remains 90rem everywhere.
- Storefront content max is 80rem.
- Mobile storefront preview is 390px logical width.
- Theme apply uses explicit confirmation and preserves all content.
- Slider does not autoplay.
- Hiding is supported; permanent deletion is not.
- Existing IBM Plex files are the only fonts loaded in the prototype.

## Deferred without inventing behavior

- Exact additional curated font families.
- Section-level permanent deletion and its recovery window.
- Maximum number of slider slides and benefits.
- Header and footer builders.
- Draft persistence and concurrent editing.
- Storefront SEO, structured data, and social sharing controls.
- Customer accounts and saved carts.
- Newsletter, reviews, countdowns, video, and third-party blocks.
- Publishing/scheduling individual section changes.
- Actual public storefront routes, which belong to Batch 13.

## Non-negotiable existing product constraints

- Physical products and cash on delivery only at this stage.
- Inventory states remain In stock / متوفر, Low stock / مخزون منخفض, and Out of stock / نفد من المخزون.
- Out-of-stock products remain visible with a clear label.
- Core order statuses remain exactly New, Confirmed, Processing, Shipped, Delivered, Cancelled, and Returned.
- No payment-status field is introduced.
