# Portable static frontend

This folder contains the actual static UI prototype used by the published `lala` design site. It is intentionally independent from Laravel so each screen can be reviewed now and later extracted into Blade + Livewire.

## Open it

Serve `prototype/public` as the web root with any static HTTP server, then open `app-shell.html`. The HTML files use root-relative asset links, so opening them directly with `file://` is not supported.

## Contract

- One plain `.html` file per screen.
- Tailwind CSS v4 Browser CDN and portable v4 class strings.
- Design tokens start as CSS custom properties in `public/tokens.css` and are bridged through `@theme inline`.
- Alpine.js 3 CDN markup is used only for prototype interactions.
- IBM Plex Sans Arabic is self-hosted for both Arabic and Latin UI; Plex Mono is reserved for operational numbers.
- Real Arabic/English copy, RTL/LTR switching, and `<!-- component: … -->` extraction markers.
- Merchant tables use 52px rows, 12px vertical padding, 16px horizontal padding, and 14px/20px body text.
- Shared semantic motion covers modals, drawers, popovers, toasts, and conditional surfaces with reduced-motion support.
- Batch 7 adds the five Shipping and Bosta screens plus single/bulk shipment states inside Orders.
- Batch 11 adds Themes, Theme preview, Branding, and a predefined-section Homepage builder under one Storefront module.
- Merchant Admin keeps the 90rem container; Storefront preview uses a separate 80rem content contract and 390px mobile viewport.

`docs/DESIGN-SYSTEM-CONSTANTS.md` records the invariant layout and component rules. `docs/MOTION-SYSTEM.md` records motion, `docs/BATCH-7-SHIPPING.md` records the shipping/Bosta boundary, and repository-level `docs/storefront/` records the theme/builder contract. `tests/design-constants.test.mjs` guards the portable HTML contract.
