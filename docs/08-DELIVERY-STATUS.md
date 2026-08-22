# Delivery Status

> Operational snapshot of what has been completed, what is only a prototype, and what is awaiting review. Last updated 2026-08-22 (Africa/Cairo).

## Status legend

- **Accepted:** explicitly approved by the founder.
- **Delivered:** produced and available for review, but not yet accepted as final.
- **Not started:** no production Laravel implementation exists yet.

## Completed product and architecture work

| Area | State | Result |
|---|---|---|
| Phase 1 product discovery | Completed | MVP scope, journeys, exclusions, pilot shape, wallet model, and operational rules are documented. |
| Technology stack | Accepted | PHP 8.5, Laravel 13, MySQL, Livewire + Blade, Blade + Alpine.js, Tailwind CSS v4, Redis + Horizon, Pest, and Laravel Storage with a local pilot disk. |
| Multi-tenancy direction | Accepted | Shared MySQL schema with `store_id` isolation, separate Admin/Merchant/Customer authentication boundaries, and hostname resolution through a domains table and middleware. |
| Runtime state | Accepted | Redis/PhpRedis for sessions, cache, distributed locks, rate limits, and Horizon queues with isolated connections or prefixes. |
| Identifiers | Accepted | Unsigned BIGINT internal primary keys, separate immutable public ULIDs, and store-scoped human order numbers. |
| Authentication foundation | Accepted | Livewire starter kit/Fortify for Merchants; separate custom Laravel guard/provider flows for Admins and store-scoped Customers. |
| Repository | Accepted | Public `AM-naguib/lala`; sensitive data and secrets remain prohibited. |
| Production application | Postponed | Current delivery is static HTML only by explicit founder decision; the prototypes are not production Laravel or Livewire code. |

## Frontend delivery roadmap

**State: Accepted by the founder.**

- [`10-FRONTEND-DELIVERY-PLAN.md`](10-FRONTEND-DELIVERY-PLAN.md) is the single operating roadmap for completing the current static frontend.
- Batches 4–17 originally define 65 screen files across Merchant, Storefront, Customer account, and lala Admin surfaces; Batches 4–11 have delivered 36, leaving 29 new screen files in Batches 12–16.
- Every batch has explicit dependencies, required states, review gates, and a shared Definition of Done.
- Batch 4 — Product organization and tools is accepted after the corrected Products-module hierarchy.
- Batch 5 — Customers is accepted.
- Batch 6 — Discounts is accepted.
- Batch 7 — Shipping zones and Bosta is accepted.
- Batch 8 — Dashboard and Analytics is accepted.
- Batch 9 — Merchant access and onboarding is accepted.
- Batch 10 — Store settings and Wallet is delivered.
- Batch 11 — Storefront themes, branding, and homepage builder is delivered and is the current review gate.
- The complete portable static source is versioned under `prototype/` in the public repository.
- The unified Motion System is implemented across all current screens: modals, drawers, popovers, toasts, and state changes now share fixed timing/easing and reduced-motion behavior.
- Design Batch 2 remains delivered and available for review; Batch 3 is accepted. Revisions can be recorded without silently changing the approved roadmap.

## Design system — Batch 1

**State: Accepted by the founder.**

Delivered foundations include:

- Tailwind CSS v4 token bridge: every token starts as a CSS custom property and is then referenced by the Tailwind layer.
- Portable static HTML, one file per screen, with Tailwind class strings, Alpine.js markup, and `<!-- component: ... -->` extraction markers.
- IBM Plex Sans Arabic for Arabic and Latin UI copy, plus IBM Plex Mono only for numerals, SKUs, order numbers, and phone numbers.
- Self-hosted WOFF2 font assets.
- Real Arabic and English examples shown in RTL and LTR rather than mirrored placeholders.
- Standard merchant-table density: 52px row height, 12px × 16px cell padding, 14px/20px body text, and 12px semibold muted headers.
- Wallet states: calm, watch, and overdraft with expanded recharge banner and customer-data masking cascade.
- Motion system: 140–300ms semantic timing, logical-direction drawers, softened modal/toast transitions, and `prefers-reduced-motion` support.
- Browser-verified Arabic shaping, connected letterforms, RTL layout, LTR operational-number spans, baseline correction, and no page-level horizontal overflow.

### Corrected controlled fields

The core order status set is fixed and ordered:

1. New — جديد
2. Confirmed — مؤكد
3. Processing — قيد المعالجة
4. Shipped — تم الشحن
5. Delivered — تم التسليم
6. Cancelled — ملغي
7. Returned — مرتجع

Merchants may rename how a core status is displayed, but cannot add, delete, or reorder the underlying set. Extra classification belongs in the separate Labels field.

Bosta normalization is:

- `accepted` → Processing
- `picked up` or `in transit` → Shipped
- `delivered` → Delivered
- `cancelled` → Cancelled
- `returned` → Returned

There is no payment-status field or payment-pill system in the MVP. COD is the only payment method. Cash collection is not modeled until the founder separately defines its field, lifecycle, and analytics effect.

Inventory presentation has three states in both scripts:

- In stock — متوفر
- Low stock — مخزون منخفض
- Out of stock — نفد من المخزون

## Design system — Batch 2

**State: Delivered; awaiting founder review. Static delivery continues after review.**

Review site: https://lala-design-system.curbs-storm-80.chatgpt.site

| Screen | Review URL |
|---|---|
| Orders list | https://lala-design-system.curbs-storm-80.chatgpt.site/orders-list.html |
| Order detail | https://lala-design-system.curbs-storm-80.chatgpt.site/order-detail.html |
| Manual order creation | https://lala-design-system.curbs-storm-80.chatgpt.site/order-create.html |
| Print views | https://lala-design-system.curbs-storm-80.chatgpt.site/order-print.html |

Batch 2 applies the exact seven core statuses, separate Labels, COD-only behavior, inventory pills, wallet masking, Bosta submission state, customer/order audit details, mobile cards, and the accepted 52px table density.

## Important boundary

Batch 1 and Batch 2 are design-system prototypes. They establish approved UI behavior and portable markup for later extraction into Laravel Blade + Livewire, but they do not mean the Laravel application, database schema, queues, authentication, Bosta integration, or tests have been implemented.


## Design system — Batch 3

**State: Accepted after the Sites version 8 information-architecture correction.**

Review site: https://lala-design-system.curbs-storm-80.chatgpt.site

## Design system — Batch 5

**State: Accepted by the founder.**

| Screen | Review URL |
|---|---|
| Customers list | https://lala-design-system.curbs-storm-80.chatgpt.site/customers-list.html |
| Customer detail | https://lala-design-system.curbs-storm-80.chatgpt.site/customer-detail.html |
| Identity conflict review | https://lala-design-system.curbs-storm-80.chatgpt.site/customer-identity-review.html |

Delivered behavior includes name/phone/email search, type/status/tag filters, customer metrics, Guest and Account states, optional email, multiple addresses, order history and spend, internal notes and tags, blocking by phone or email, empty/no-results states, and identity-conflict review without silent merging.

Wallet overdraft masks phone, email, and addresses while preserving customer IDs, order numbers, statuses, and totals. Sensitive export and conflict resolution are disabled until recharge restores the balance to at least EGP -10.00.

## Design system — Batch 6

**State: Accepted by the founder.**

| Screen | Review URL |
|---|---|
| Discounts list | https://lala-design-system.curbs-storm-80.chatgpt.site/discounts-list.html |
| Coupon editor | https://lala-design-system.curbs-storm-80.chatgpt.site/discount-editor.html |

Delivered behavior includes active/scheduled/expired/exhausted lifecycle states, search and type/state filters, percentage/fixed/free-shipping rewards, validity dates, total usage limit, optional minimum products subtotal, and previews for invalid dates, duplicate codes, exhausted usage, and expiry. The UI explicitly preserves whole-order scope, one coupon per order, and the minimum-subtotal basis before discount excluding shipping.

## Design system — Batch 7

**State: Accepted by the founder.**

| Screen | Review URL |
|---|---|
| Shipping zones | https://lala-design-system.curbs-storm-80.chatgpt.site/shipping-zones.html |
| Shipping zone editor | https://lala-design-system.curbs-storm-80.chatgpt.site/shipping-zone-editor.html |
| Custom locations | https://lala-design-system.curbs-storm-80.chatgpt.site/custom-locations.html |
| Shipping integrations | https://lala-design-system.curbs-storm-80.chatgpt.site/shipping-integrations.html |
| Bosta connection | https://lala-design-system.curbs-storm-80.chatgpt.site/bosta-connection.html |

Orders list and Order detail are also updated with bulk submission results and the complete Not sent, Sending, Sent, Failed/retry, and duplicate-active-shipment states. Creating a shipment remains separate from changing the controlled core order status.

## Design system — Batch 8

**State: Accepted by the founder.**

| Screen | Review URL |
|---|---|
| Dashboard | https://lala-design-system.curbs-storm-80.chatgpt.site/dashboard.html |
| Analytics overview | https://lala-design-system.curbs-storm-80.chatgpt.site/analytics-overview.html |
| Orders analytics | https://lala-design-system.curbs-storm-80.chatgpt.site/analytics-orders.html |
| Products analytics | https://lala-design-system.curbs-storm-80.chatgpt.site/analytics-products.html |

Delivered behavior includes direct operational alerts, fixed Cairo periods, previous-equivalent comparison, a visible once-a-minute refresh contract, all-status Sales definition, exact seven-status count/value breakdown, Units/Value product ranking, and CSV export tied to the visible range and filters. No Estimated profit metric was introduced.

## Design system — Batch 9

**State: Accepted by the founder.**

| Screen | Review URL |
|---|---|
| Merchant sign in | https://lala-design-system.curbs-storm-80.chatgpt.site/merchant-sign-in.html |
| Merchant sign up | https://lala-design-system.curbs-storm-80.chatgpt.site/merchant-sign-up.html |
| Verify phone | https://lala-design-system.curbs-storm-80.chatgpt.site/merchant-verify-phone.html |
| Password recovery | https://lala-design-system.curbs-storm-80.chatgpt.site/merchant-password-recovery.html |
| Reset password | https://lala-design-system.curbs-storm-80.chatgpt.site/merchant-reset-password.html |
| Store onboarding | https://lala-design-system.curbs-storm-80.chatgpt.site/store-onboarding.html |
| Store switcher | https://lala-design-system.curbs-storm-80.chatgpt.site/stores-list.html |

Delivered behavior includes email-or-phone sign-in, WhatsApp-only phone verification, exact expiry/resend/send/attempt limits, safe recovery feedback, onboarding validation, subdomain availability, immediate public-store communication, an empty merchant account, unlimited independent stores, and an owner-only store switcher. No store-country field, team roles, verification bypass, or Laravel authentication was introduced.

## Design system — Batch 10

**State: Delivered; awaiting founder review.**

| Screen | Review URL |
|---|---|
| General settings | https://lala-design-system.curbs-storm-80.chatgpt.site/store-settings-general.html |
| Checkout fields | https://lala-design-system.curbs-storm-80.chatgpt.site/store-settings-checkout.html |
| Domains | https://lala-design-system.curbs-storm-80.chatgpt.site/store-settings-domains.html |
| Notifications | https://lala-design-system.curbs-storm-80.chatgpt.site/store-settings-notifications.html |
| Wallet | https://lala-design-system.curbs-storm-80.chatgpt.site/wallet.html |
| Store status | https://lala-design-system.curbs-storm-80.chatgpt.site/store-status.html |

Settings is one level-one Merchant module with six coherent sections. The Wallet also opens directly from every Merchant-header balance chip. Delivered states cover current/changed/permanently locked hosted domains, custom-domain verification/fallback, exact Required/Optional Checkout fields, confirmed merchant/customer notifications, wallet calm/watch/overdraft and masking, amount-only recharge, and enabled/disabled store status with support-only reactivation. COD-only, no-tax, no-subscription, no-payment-method-invention, and static-only boundaries remain explicit.

## Design system — Batch 11

**State: Corrected in Batch 11.2; awaiting founder review.**

| Screen | Review URL |
|---|---|
| Themes | https://lala-design-system.curbs-storm-80.chatgpt.site/themes.html |
| Theme preview | https://lala-design-system.curbs-storm-80.chatgpt.site/theme-preview.html |
| Branding | https://lala-design-system.curbs-storm-80.chatgpt.site/brand-settings.html |
| Homepage builder | https://lala-design-system.curbs-storm-80.chatgpt.site/homepage-builder.html |

The approved architecture uses one shared section document and renderer plus Essential, Editorial, and Bold presets. Applying a theme preserves content, order, visibility, and catalog references. Batch 11.1 completed renderer and Builder correctness; Batch 11.2 adds real layout differentiation across Header, Hero, Slider, Benefits, products, collections, story, promotion, and Footer. Essential is compact and product-first, Editorial is image-led and spacious, and Bold is asymmetric, outlined, and promotion-forward. Desktop and fixed 390px mobile compositions remain RTL-safe, prices stay isolated, and the deterministic build plus 19/19 automated tests pass.

The dedicated [`storefront/`](storefront/README.md) folder contains the research, architecture contract, editor UX, section catalog, theme definitions, execution plan, and deferred decisions used to implement this batch.

| Screen | Review URL |
|---|---|
| Products list | https://lala-design-system.curbs-storm-80.chatgpt.site/products-list.html |
| Product editor | https://lala-design-system.curbs-storm-80.chatgpt.site/product-editor.html |
| Product variants | https://lala-design-system.curbs-storm-80.chatgpt.site/product-variants.html |
| Inventory management | https://lala-design-system.curbs-storm-80.chatgpt.site/inventory.html |

Implemented review states include catalog filters and empty/loading/no-results previews, bilingual media and pricing fields, flexible variants, exact inventory pills, optional thresholds, stock-adjustment history, manual adjustment drawer, return non-restock guidance, and static cross-navigation with Batches 1–2.

## Design system — Batch 4

**State: Accepted by the founder after the information-architecture correction.**

Published as Sites version 6: https://lala-design-system.curbs-storm-80.chatgpt.site

| Screen | Review URL |
|---|---|
| Catalog organization | https://lala-design-system.curbs-storm-80.chatgpt.site/catalog-organization.html |
| Featured products | https://lala-design-system.curbs-storm-80.chatgpt.site/featured-products.html |
| Product Trash | https://lala-design-system.curbs-storm-80.chatgpt.site/product-trash.html |
| CSV import | https://lala-design-system.curbs-storm-80.chatgpt.site/product-import.html |
| Import results | https://lala-design-system.curbs-storm-80.chatgpt.site/product-import-results.html |

Delivered behavior includes Categories/Collections/Tags tabs, review-only similar-name warnings, featured-product ordering, soft-delete restoration as Hidden, CSV mapping and validation, lala ID/SKU conflict rejection without mutation, public-image URL success/failure, large-import background processing, valid/rejected results, and downloadable result/error states.

Existing Products list now includes all/filtered export controls and a destructive bulk-action preview. Product editor links directly to organization management and Trash.

## UX navigation and ease-of-use remediation

**State: Version 7 structure rejected; corrected structure published as Sites version 8 and accepted.**

- Products is one level-one module across all current product, inventory, organization, merchandising, import, and recovery screens.
- Desktop expands Products into All products, Inventory, Organization, Featured products, then separately labeled Product tools for Import and Trash.
- Mobile primary navigation is Dashboard, Orders, Products; a second product-level navigation exposes the sections and tools without pretending they are separate modules.
- Organization, Featured, Import, and Trash are no longer rendered as one peer-tab set.
- Import results remains a child of the Import flow, not a permanent navigation destination.
- Component Gallery is removed from Merchant navigation and remains review-only.
- Products list action hierarchy remains simplified; infrequent export/Trash actions stay in More actions.
- Automated tests enforce the corrected hierarchy and block the rejected peer-tab pattern.
- `docs/ux/` records the classification rules for Module, Section, Tool, Flow child, and Review tooling.

Review site: https://lala-design-system.curbs-storm-80.chatgpt.site
