# Research findings

Research date: 2026-08-22. Sources are primary documentation where available, plus Baymard benchmark research for ecommerce usability.

## 1. Theme architecture

Shopify structures storefronts as templates containing ordered sections, with reusable blocks inside sections. It also supports section groups for merchant-controlled areas and presets that provide a valid default configuration. WordPress style variations take the same architectural direction: one theme codebase, multiple token/style variations.

Decision for lala:

- Build one renderer and one content model.
- Treat a theme as a preset of tokens and allowed layout variants.
- Keep content, section order, visibility, products, and collections outside the theme preset.
- Applying a theme changes `themePresetId`; it does not replace the homepage document.

Sources:

- Shopify theme architecture: https://shopify.dev/docs/storefronts/themes/architecture
- Shopify theme settings and preset data: https://shopify.dev/docs/storefronts/themes/architecture/config/settings-data-json
- Shopify sections and blocks: https://help.shopify.com/en/manual/online-store/themes/theme-structure/sections-and-blocks
- WordPress style variations: https://developer.wordpress.org/themes/global-settings-and-styles/style-variations/

## 2. Builder interaction model

The clearest established editor model combines a structure tree, a settings area, and a direct preview. Shopify's editor also adapts from two sidebars to one and provides preview selection, responsive modes, and undo/redo. This gives merchants an explicit source of truth for order and visibility while preserving a visual feedback loop.

Decision for lala:

- Desktop uses structure/settings beside a live preview.
- Direct clicking in the preview selects the corresponding section.
- Reordering is performed in the structure list with explicit up/down controls in Batch 11; a drag handle communicates future drag support without making pointer input the only path.
- Mobile uses mode tabs and a settings sheet rather than compressing three columns.
- Undo/redo covers local changes made in the current editing session.

Sources:

- Shopify theme editor overview: https://help.shopify.com/en/manual/online-store/themes/customizing-themes/theme-editor/features-overview
- Shopify preview inspector: https://help.shopify.com/en/manual/online-store/themes/customizing-themes/theme-editor/preview-inspector

## 3. Ecommerce navigation and content hierarchy

Baymard's current benchmarks continue to find widespread mobile navigation and product-list usability problems. The recurring risks are unclear link scope, mobile tunnel vision, weak visual hierarchy, and category pages that fail to distinguish navigation from product listings.

Decision for lala previews and later public storefront screens:

- Header navigation destinations must be explicit.
- Featured collections use identifying imagery and labels, not decorative art alone.
- Product cards preserve price, stock availability, and clear tap targets.
- The preview must be available at a real mobile width, not merely a scaled desktop.
- No hover-only meaning or actions.

Sources:

- Baymard ecommerce navigation benchmark: https://baymard.com/blog/ecommerce-navigation-best-practice
- Baymard ecommerce product lists: https://baymard.com/research/ecommerce-product-lists
- Baymard ecommerce category page guidance: https://baymard.com/learn/ecommerce-category-page

## 4. RTL and mixed-direction content

W3C guidance recommends isolating phrases whose direction differs from the surrounding sentence. Dynamic values with unknown direction should be isolated with `bdi` or an equivalent `dir="auto"` boundary. CSS logical properties prevent mirrored layout bugs.

Decision for lala:

- Arabic is authored as real Arabic; it is not a mirrored English screenshot.
- Use logical properties and Tailwind `start`/`end` utilities.
- Wrap order numbers, SKUs, phones, domains, and prices in `dir="ltr"` plus an inline isolation boundary.
- Preserve IBM Plex Sans Arabic for both scripts and IBM Plex Mono only for operational values.
- Use Arabic line-height tokens in both admin controls and storefront content.

Sources:

- W3C inline bidi markup: https://www.w3.org/International/articles/inline-bidi-markup/
- W3C CSS Writing Modes: https://www.w3.org/TR/css-writing-modes-3/

## 5. Accessibility and interaction

WCAG 2.2 defines a 24×24 CSS pixel minimum target size in the applicable success criterion, while 44×44 remains the stricter enhanced target. The existing lala design-system contract already standardizes 44px mobile targets and will remain stricter than the minimum. Text contrast stays at 4.5:1 for normal text and 3:1 for large text. Focus appearance must be visible against adjacent colors.

Decision for lala:

- Keep 44×44 minimum interactive targets on touch layouts.
- Every visual selection also has text and programmatic state.
- Keyboard users can select, hide, move, apply, save, cancel, undo, and redo.
- Never use color as the only status signal.
- Respect `prefers-reduced-motion`.

Sources:

- W3C target size: https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html
- W3C focus appearance: https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html
- W3C text contrast: https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum

## 6. Performance and visual stability

Shopify's performance guidance explicitly warns against lazy-loading the LCP/first-viewport image and against animations that delay its appearance. The hero should use a real `<img>` element rather than a CSS background. web.dev defines a good CLS score as 0.1 or less.

Decision for lala:

- Hero images have explicit dimensions and use `<img>`.
- The first visible hero image is eager and high priority; lower images are lazy.
- Slider does not autoplay in Batch 11.
- Preview frames reserve image space before assets load.
- Production targets: LCP ≤ 2.5s, CLS ≤ 0.1, INP ≤ 200ms at the 75th percentile.

Sources:

- Shopify theme performance: https://shopify.dev/docs/storefronts/themes/best-practices/performance
- web.dev CLS: https://web.dev/articles/cls
- web.dev LCP optimization: https://web.dev/articles/optimize-lcp

## Research conclusion

The approved architecture is not only simpler to maintain; it is also the safest way to guarantee content preservation. The editor will therefore treat content as a separate immutable-by-theme document, expose a curated structure tree, and make theme application an explicit confirmed operation.
