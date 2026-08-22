# lala Storefront — Batch 11 plan

Status: approved for implementation on 2026-08-22.

This folder is the working contract for the storefront theme system and homepage builder. It is deliberately separate from the merchant-admin design system: the admin keeps the fixed lala UI tokens, while the public storefront is rendered from a shared component contract plus a selected theme preset.

## Approved product decisions

1. One shared set of storefront components with theme presets, not three independent codebases.
2. Three initial presets: Essential, Editorial, and Bold.
3. A predefined-section builder with live preview, not a free-form canvas.
4. Batch 11 remains static HTML with Tailwind Browser v4 and Alpine 3.
5. Theme changes must never delete, reorder, hide, or rewrite merchant content.

## Documents

- `01-RESEARCH-FINDINGS.md` — evidence and implications.
- `02-STOREFRONT-SYSTEM-CONTRACT.md` — architecture, state, tokens, and invariants.
- `03-HOMEPAGE-BUILDER-UX.md` — editor behavior and responsive model.
- `04-BATCH-11-EXECUTION-PLAN.md` — implementation order and acceptance tests.
- `05-SECTION-CATALOG.md` — allowed sections and their settings.
- `06-THEME-PRESETS.md` — the three themes and the boundaries of theming.
- `07-DECISIONS-AND-DEFERRED.md` — locked decisions and deliberately deferred work.

## Batch 11 output

- `public/themes.html`
- `public/theme-preview.html`
- `public/brand-settings.html`
- `public/homepage-builder.html`

The actual customer-facing home, collection, product, search, and cart screens remain Batch 13. Batch 11 includes a faithful storefront preview renderer so merchants can evaluate themes and homepage changes before applying them.
