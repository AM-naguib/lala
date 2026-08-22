# Theme presets

All presets share the same section schema and rendering interfaces. The descriptions below define meaningful visual differentiation without creating three maintenance branches.

## Essential — default

Position: clear, dependable, product-first.

- Neutral warm-white surface.
- Compact header.
- Split hero with balanced copy and image.
- Medium corner radius.
- Quiet product cards with persistent price and inventory state.
- Best starting point for broad catalogs and merchants who want low setup effort.

## Editorial

Position: premium, image-led, spacious.

- Softer sand surface and restrained dark accent.
- Larger display scale and wider vertical rhythm.
- Image-dominant hero.
- Minimal card chrome and stronger typographic hierarchy.
- Best for fashion, beauty, fragrance, and curated collections.

## Bold

Position: energetic, promotion-forward, high contrast.

- Bright accent with dark ink blocks.
- Stronger borders and tighter spacing.
- Promotional hero treatment with visible CTA.
- Product cards emphasize price and stock state.
- Best for launches, frequent campaigns, and value-forward stores.

## Allowed differences

- Color token values.
- Type scale and weight role.
- Radius and border strength.
- Section spacing.
- Header, hero, product-card, and collection-card layout variants.
- Decorative treatment that does not alter reading order.

## Forbidden differences

- Section data or order.
- Product, collection, route, price, inventory, or checkout behavior.
- Supported languages or direction handling.
- Accessibility minimums.
- Content disappearing because a preset has no renderer.
- A theme-only section type.

## Implemented layout contract — Batch 11.3

| Component | Essential | Editorial | Bold |
|---|---|---|---|
| Header | Compact conventional navigation | Centered editorial masthead | Deep-plum campaign frame |
| Hero | Calm 46/54 product split | Cinematic full-image overlay | Expressive 52/48 coral-gradient composition |
| Products | Quiet elevated three-card grid | Magazine-style feature composition | Rounded elevated cards with a tinted lead product |
| Collections | Even compact cards | Wide lead collection plus supporting stories | High-energy campaign tiles without heavy outlines |
| Promotion | Direct dark accent strip | Restrained typographic announcement | Deep-plum campaign block with a light CTA |
| Mobile | Product message then image | Preserved image-led overlay and editorial rhythm | Coral story followed by rounded campaign imagery |

These are renderer variants only. Batch 11.3 also replaces the legacy flat SVG placeholders with optimized original WebP storefront photography. It does not branch content, section order, visibility, catalog references, language fallback, price values, or inventory behavior.
## Font policy for Batch 11

The current prototype loads only self-hosted IBM Plex Sans Arabic for all interface/body/display text and IBM Plex Mono for operational values. Brand Settings exposes the font choice as a curated-control pattern but does not introduce additional network requests. Exact extra bilingual-safe production families remain deferred until licensing, Arabic shaping, weight coverage, and performance are verified.
