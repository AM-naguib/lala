# Batch 11.4 — Current storefront theme rebuild

**Status:** Implemented, verified, and ready for founder review.  
**Date:** 2026-08-22 (Africa/Cairo).

## Why this rebuild exists

Batch 11.3 proved that the three presets could differ, but the visual language still read as an older template system: the same familiar storefront skeleton, timid scale, and insufficiently current composition. Batch 11.4 rebuilds the presentation layer around current commerce patterns while preserving the accepted Storefront system contract.

This is a renderer and art-direction rebuild, not a change to merchant content or Builder behavior.

## Visual reference map

The direction was grounded in current official Shopify Theme Store examples:

- Essential: [Horizon](https://themes.shopify.com/themes/horizon/styles/horizon) × [Sleek](https://themes.shopify.com/themes/sleek/styles/sleek)
- Editorial: [Prestige](https://themes.shopify.com/themes/prestige/styles/prestige) × [Stretch](https://themes.shopify.com/themes/stretch/styles/stretch)
- Bold: [Impact](https://themes.shopify.com/themes/impact/styles/impact) × [Zest](https://themes.shopify.com/themes/zest/styles/zest)
- Additional pattern checks: [Broadcast](https://themes.shopify.com/themes/broadcast/styles/broadcast), [Motion](https://themes.shopify.com/themes/motion/styles/classic), and [Impulse](https://themes.shopify.com/themes/impulse/styles/modern)

The goal is not to clone any theme. The references establish current expectations for scale, media dominance, asymmetry, bento composition, typography, restraint, and mobile recomposition.

## Preset directions

| Preset | Direction | Key composition |
|---|---|---|
| Essential | Calm modern commerce | Dark forest system shell, clean white space, orange action, rounded media-led split hero, soft product cards |
| Editorial | Cinematic editorial luxury | Warm ivory, centered masthead, full-image hero, large restrained type, asymmetric magazine grids, collage collections |
| Bold | Expressive campaign commerce | Purple/pink campaign frame, controlled lime accent, oversized type, pill media, overlapping benefits, bento merchandising |

## Shared contract preserved

All presets continue to use one shared Storefront document and one renderer.

- Theme changes never modify section content, order, visibility, or catalog references.
- Header and Footer remain fixed system regions.
- Homepage Builder remains section-based rather than free-form.
- The available section types remain Hero, Slider, Featured Products, Featured Collections, Image with Text, Promotional Banner, and Benefits.
- No custom code, permanent delete, autoplay, or undocumented controls were introduced.
- Arabic and RTL remain first-class; prices and operational values stay isolated using IBM Plex Mono.
- Desktop and fixed 390px mobile previews remain supported.

## Renderer implementation

- Essential uses a 42/58 media-led hero and calm rounded commerce surfaces.
- Editorial uses a cinematic image overlay, 12-column magazine layouts, an asymmetric product feature, and a collage-style collection composition.
- Bold uses a 12-column campaign hero, oversized pill media, overlapping benefit panels, and bento product and collection grids.
- Standalone Theme Preview shows every approved section for visual review.
- Homepage Builder still respects each section's stored visibility state.
- Theme gallery thumbnails now preview hierarchy and composition instead of only palette changes.
- Existing optimized WebP storefront photography remains the shared media source.

## Responsive rules

The 390px preview is intentionally recomposed per preset:

- Essential places the message before the image and preserves generous but controlled spacing.
- Editorial keeps the image-led overlay and adjusts the headline to avoid clipping.
- Bold collapses into a campaign story with media and cards in a deliberate sequence.
- Every preset avoids horizontal overflow and maintains Arabic shaping and price isolation.

## Verification

- Deterministic Batch 11 build completed.
- Static suite: **21/21 passing**.
- `git diff --check`: clean.
- Real-browser review completed for Essential, Editorial, and Bold on desktop and fixed 390px mobile.
- Verified Arabic shaping, mobile composition, theme switching, shared content, section visibility, and Builder behavior.
- One issue found during review—Editorial mobile headline clipping—was corrected and rechecked.

## Review gate

Batch 11.4 is the active founder review gate. Batch 12 — Store pages and Contact inbox — must not start until this correction is accepted or further revisions are recorded.
