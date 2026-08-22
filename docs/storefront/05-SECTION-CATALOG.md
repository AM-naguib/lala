# Predefined homepage section catalog

This is the closed Batch 11 catalog. Adding another section type requires a documented product decision and schema change; the builder cannot create arbitrary types.

## System regions

### Header

Required and non-reorderable relative to homepage content. Batch 11.5 preview includes an announcement bar, store identity, primary navigation, search, and cart affordance. The announcement bar is part of the Header system region, not a reorderable homepage section. Detailed header configuration is deferred.

### Footer

Required and non-reorderable relative to homepage content. Batch 11 preview includes store identity, contact/support links, and policy-link placeholders. Detailed footer configuration is deferred.

## Reorderable homepage sections

### 1. Hero

Purpose: establish the primary campaign or brand message.

Fields: Arabic heading, English heading, Arabic body, English body, image reference, image alt text, CTA label, CTA destination, text alignment.

Constraints: one primary image; real `<img>` element; no delayed entrance animation; CTA destination must be an existing store route or configured URL.

### 2. Slider

Purpose: rotate multiple campaigns under explicit customer control.

Fields per slide: bilingual heading/body, image and alt text, CTA label/destination.

Constraints: manual navigation in Batch 11; no autoplay; slide count limit remains a future implementation constant and is not invented here.

### 3. Featured products

Purpose: promote selected catalog items.

Fields: bilingual title, product references, card layout variant.

Constraints: only existing visible products; out-of-stock products remain visible with an Out of stock / نفد من المخزون label.

### 4. Featured collections

Purpose: let customers enter important catalog groups.

Fields: bilingual title, collection references, card layout variant.

Constraints: collection imagery must identify the collection; empty collections are surfaced to the merchant before publishing.

### 5. Image with text

Purpose: communicate brand story, craft, guarantee, or service context.

Fields: bilingual heading/body, image and alt text, image side, optional CTA.

Constraints: semantic reading order remains textually correct when the visual image side changes.

### 6. Promotional banner

Purpose: announce one promotion or operational message.

Fields: bilingual message, optional CTA, color scheme.

Constraints: no new discount lifecycle is created; the banner only links to an already configured destination.

### 7. Benefits

Purpose: show concise store promises such as delivery, support, or product authenticity.

Fields per benefit: icon from curated set, bilingual title, bilingual description.

Constraints: presentational only; do not promise product capabilities that are not configured.

### 8. Shoppable lookbook

Purpose: connect an editorial campaign image to a small set of existing products.

Fields: bilingual heading/body, campaign image and alt text, two or more product references, hotspot coordinates.

Constraints: every hotspot references an existing visible product; keyboard and non-visual access must expose the same product links; no arbitrary overlay content.

### 9. Customer quote

Purpose: present one merchant-curated customer note without introducing a reviews system.

Fields: bilingual quote, customer display name, optional city/context label.

Constraints: no rating, moderation workflow, automatic publishing, verified-purchase claim, or customer submission flow. The merchant is responsible for permission and accuracy.

### 10. Shop feed

Purpose: show a curated visual grid that links to products, collections, or configured social destinations.

Fields per item: image, alt text, destination type, destination reference.

Constraints: static merchant-curated items only; no live third-party feed, tracking pixel, or embedded social script in Batch 11.5.

### 11. Logo list

Purpose: display a restrained list of merchant-owned lines, stockists, press marks, or partners.

Fields per item: logo/text mark, accessible label, optional destination.

Constraints: manual merchant content only; no implied endorsement or unverified partner claim.

## Explicitly not in Batch 11

- Free-form canvas blocks.
- Raw HTML or custom CSS blocks.
- Newsletter/customer data capture.
- Reviews, ratings, or customer-submission lifecycle. The curated Customer quote section above is presentational only.
- Countdown timers.
- Video autoplay.
- Nested arbitrary block trees.
- Permanent section deletion.
