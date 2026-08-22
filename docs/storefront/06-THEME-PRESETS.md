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

## Implemented layout contract — Batch 11.2

| Component | Essential | Editorial | Bold |
|---|---|---|---|
| Header | Compact conventional navigation | Centered masthead | Dark high-contrast system bar |
| Hero | Balanced 50/50 split | Full-bleed image with editorial overlay | Asymmetric 5/7 grid with hard outline |
| Products | Quiet three-card grid | Feature-first wide composition | Outlined cards with emphasized price and stock |
| Collections | Even compact cards | Wide lead collection plus supporting cards | Framed lead collection with dense supporting cards |
| Promotion | Direct accent strip | Restrained bordered announcement | Dark campaign block with yellow CTA |
| Mobile | Familiar single-column collapse | Preserved image-led overlay and spacing | Single-column outlined stack |

These are renderer variants only. They do not branch content, section order, visibility, catalog references, language fallback, price values, or inventory behavior.
## Font policy for Batch 11

The current prototype loads only self-hosted IBM Plex Sans Arabic for all interface/body/display text and IBM Plex Mono for operational values. Brand Settings exposes the font choice as a curated-control pattern but does not introduce additional network requests. Exact extra bilingual-safe production families remain deferred until licensing, Arabic shaping, weight coverage, and performance are verified.
