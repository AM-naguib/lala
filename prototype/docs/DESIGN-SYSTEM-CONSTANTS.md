# lala Design System Constants

Status: Accepted implementation contract for static Batches 1–3.  
Last updated: 2026-08-21 (Africa/Cairo).

## 1. Governing rule

The application frame is invariant between routes and tabs. A screen may change its inner grid, table minimum width, or contextual sidebar, but it must not change the outer content container, shell geometry, page padding, typography scale, table density, or layer order.

All project-specific values are declared as `--lala-*` custom properties in `public/tokens.css`. Tailwind v4 theme variables reference those primitives in `@theme inline`; HTML uses named Tailwind utilities such as `max-w-app`, `p-page-mobile`, `h-table-row`, and `z-overlay`.

Arbitrary Tailwind values are prohibited when a reusable token exists. The barcode background in the print view is the only current approved arbitrary CSS-image utility.

## 2. Application frame

| Constant | Value | Tailwind utility | Usage |
|---|---:|---|---|
| App content maximum | 1440px / 90rem | `max-w-app` | Every merchant screen, product tab, gallery frame, and print-preview toolbar |
| Sidebar width | 248px / 15.5rem | `w-sidebar`, `ps-sidebar` | Desktop merchant shell |
| Header height | 64px / 4rem | `h-app-header` | Gallery and merchant top bars |
| Mobile page padding | 16px | `p-page-mobile`, `px-page-mobile` | Default viewport |
| Tablet page padding | 24px | `sm:p-page-tablet`, `sm:px-page-tablet` | `sm` and above |
| Desktop page padding | 32px | `lg:p-page-desktop`, `lg:px-page-desktop` | `lg` and above |
| Reading width | 768px / 48rem | `max-w-reading` | Long explanatory copy only |
| Medium drawer | 448px / 28rem | `max-w-drawer-md` | Variant and stock drawers |

Canonical page wrapper:

```html
<main class="p-page-mobile sm:p-page-tablet lg:p-page-desktop">
  <div class="mx-auto max-w-app">...</div>
</main>
```

The form editor stays inside `max-w-app`; its inner `grid-cols-editor` creates the narrower form/sidebar composition. Never reduce the outer wrapper to make a form feel narrower.

## 3. Inner layout presets

| Preset | Columns | Utility |
|---|---|---|
| Product editor | `minmax(0,1fr) 340px` | `xl:grid-cols-editor` |
| Order detail/create | `minmax(0,1fr) 352px` | `xl:grid-cols-detail` |
| Summary/print preview | `minmax(0,1fr) 400px` | `xl:grid-cols-summary` |
| Balanced gallery/print | `1fr 400px` | `lg:grid-cols-summary-balanced` |
| Field label row | `128px 1fr` | `sm:grid-cols-label` |
| Inventory history | `160px 1fr 130px 160px` | `sm:grid-cols-history` |

## 4. Responsive breakpoints

The project uses Tailwind v4 defaults without overrides:

| Name | Minimum width |
|---|---:|
| `sm` | 640px |
| `md` | 768px |
| `lg` | 1024px |
| `xl` | 1280px |
| `2xl` | 1536px |

The desktop sidebar begins at `lg`. Below `lg`, the main content uses the full viewport width.

## 5. Spacing system

- Base grid: 4px.
- Half steps of 2px are allowed only for compact optical alignment, badges, and label gaps.
- Page padding is always the named 16/24/32px responsive sequence.
- Card padding: 16px for compact cards, 20px standard, 24px for prominent gallery examples.
- Primary section gap: 20px or 24px depending on density.
- Form field gap: 16px or 20px.
- Inline action gap: 8px; tightly related icon/text gap: 8–12px.
- New arbitrary spacing values require a token and a documentation update.

## 6. Typography

| Role | Size | Line-height | Utility |
|---|---:|---:|---|
| Nano operational mark | 9px | contextual | `text-nano` |
| Micro label | 10px | contextual | `text-micro` |
| Compact metadata | 11px | contextual | `text-2xs` |
| Caption/header | 12px | 16px typical | `text-xs` |
| UI/table body | 14px | 20px | `text-sm leading-5` |
| Body | 16px | 24px | `text-base` |
| Arabic prose | inherited size | 1.65 | `leading-arabic` |
| Inline Mono in Arabic | 0.92em | 1 | `text-mono-inline` plus the existing baseline rule |

IBM Plex Sans Arabic is the only display/UI/body family in both languages. IBM Plex Mono is reserved for numerals, prices, SKUs, order numbers, and phone numbers.

Named tracking values:

- `tracking-section`: 0.14em.
- `tracking-overline`: 0.16em.
- `tracking-display`: 0.18em.
- `tracking-barcode`: 0.22em.

## 7. Controls, surfaces, and density

| Constant | Value | Utility |
|---|---:|---|
| Standard input/filter | 40px | `h-input` |
| Medium action | 36px | `h-control-md` |
| Small action | 32px | `h-control-sm` |
| Table row | 52px | `h-table-row` |
| Table horizontal cell padding | 16px | `px-table-cell-x` |
| Table vertical cell padding | 12px | `py-table-cell-y` |
| Standard table minimum | 1000px | `min-w-table-standard` |
| Wide table minimum | 1080px | `min-w-table-wide` |
| Extra-wide table minimum | 1120px | `min-w-table-xwide` |

Table headers and body cells use the same 12×16px padding contract. Responsive mobile cards are separate components rather than compressed desktop table rows.

Radii are fixed at 6px (`sm`), 8px (`md`), 12px (`lg`), and 16px (`xl`). Shadows are `shadow-xs` for cards and `shadow-sm` for overlays or raised print sheets.

## 8. Layer order

| Layer | Value | Utility |
|---|---:|---|
| Sticky header | 30 | `z-header` |
| Desktop sidebar/mobile navigation | 40 | `z-sidebar` |
| Modal, drawer, and blocking overlay | 50 | `z-overlay` |

No component may invent a z-index between these layers without documenting a collision case.

## 9. Motion

| Token | Value | Use |
|---|---:|---|
| Fast duration | 140ms | Hover, pressed, and exit feedback |
| Base duration | 220ms | Menus, disclosure, and state transitions |
| Modal duration | 260ms | Backdrop fade plus subtle lift and scale |
| Drawer duration | 300ms | Logical-end drawer travel in RTL/LTR |
| Toast duration | 240ms | Confirmation and transient feedback |
| Standard easing | `cubic-bezier(0.2, 0, 0, 1)` | Small property changes |
| Emphasized easing | `cubic-bezier(0.16, 1, 0.3, 1)` | Entrances and spatial motion |
| Exit easing | `cubic-bezier(0.4, 0, 1, 1)` | Short, decisive exits |

Motion communicates hierarchy and cause; it is not decoration. Modals fade with an 8px lift and 0.985 scale, drawers enter from logical `end`, popovers originate from their trigger side, and toasts use a short lift. Entry is longer and softer than exit. Layout-critical sizes are never animated. Every effect collapses to 0.01ms under `prefers-reduced-motion: reduce`.

## 10. Print exceptions

Physical print dimensions are intentional tokens, not application-container alternatives:

- A4 minimum height: 297mm — `min-h-print-a4`.
- Shipping-label width: 100mm — `max-w-print-label-width`.
- Shipping-label height: 150mm — `h-print-label-height`.

## 11. Change control

A design-system constant change is complete only when all of the following are updated together:

1. The primitive `--lala-*` variable in `public/tokens.css`.
2. Its Tailwind v4 `@theme inline` bridge when a utility is required.
3. This document.
4. The component gallery when the value is user-visible.
5. Automated constants tests.

Do not place a replacement literal directly in a screen file.
