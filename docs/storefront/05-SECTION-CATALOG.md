# Predefined homepage section catalog

This is the closed Batch 11 catalog. Adding another section type requires a documented product decision and schema change; the builder cannot create arbitrary types.

## System regions

### Header

Required and non-reorderable relative to homepage content. Batch 11 preview includes store identity, primary navigation, search, and cart affordance. Detailed header configuration is deferred.

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

## Explicitly not in Batch 11

- Free-form canvas blocks.
- Raw HTML or custom CSS blocks.
- Newsletter/customer data capture.
- Reviews/testimonials lifecycle.
- Countdown timers.
- Video autoplay.
- Nested arbitrary block trees.
- Permanent section deletion.
