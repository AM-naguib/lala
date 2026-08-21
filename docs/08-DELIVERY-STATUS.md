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
- Batches 4–17 define 65 remaining screen files across Merchant, Storefront, Customer account, and lala Admin surfaces.
- Every batch has explicit dependencies, required states, review gates, and a shared Definition of Done.
- Batch 4 — Catalog operations is the next active delivery.
- Design Batches 2 and 3 remain delivered and available for review; revisions can be recorded without silently changing the approved roadmap.

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

**State: Delivered and published; awaiting founder review.**

Review site: https://lala-design-system.curbs-storm-80.chatgpt.site

| Screen | Review URL |
|---|---|
| Products list | https://lala-design-system.curbs-storm-80.chatgpt.site/products-list.html |
| Product editor | https://lala-design-system.curbs-storm-80.chatgpt.site/product-editor.html |
| Product variants | https://lala-design-system.curbs-storm-80.chatgpt.site/product-variants.html |
| Inventory management | https://lala-design-system.curbs-storm-80.chatgpt.site/inventory.html |

Implemented review states include catalog filters and empty/loading/no-results previews, bilingual media and pricing fields, flexible variants, exact inventory pills, optional thresholds, stock-adjustment history, manual adjustment drawer, return non-restock guidance, and static cross-navigation with Batches 1–2.

## Design system — Batch 4

**State: Delivered and published; awaiting founder review.**

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

