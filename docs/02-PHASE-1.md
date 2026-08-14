# Phase 1 — Discovery and MVP Definition

## Status

- **State:** active
- **Started:** 2026-08-14
- **Planning principle:** answer only what is needed to define the first usable release.

## Purpose

Turn the broad `lala` vision into a focused, testable MVP scope before architecture or implementation begins.

## Phase goals

1. Define the merchant journey from sign-up to receiving the first order.
2. Define the customer journey from visiting a store to completing an order.
3. Select the commerce primitives required for the first release.
4. Define the Egypt-first operating baseline while preserving a path to later global expansion.
5. Establish MVP inclusion and exclusion boundaries.
6. Define success criteria that prove the MVP is useful.

## Required decisions

### Product model

- Supported product types: **revised — physical products in the initial selling flow; paid digital selling is postponed**.
- Storefront identity: **decided — hosted `lala` subdomain with optional custom domain**.
- Merchant account creation: **decided — email address, phone number, and password**.
- Stores per merchant account: **decided — multiple stores with independent settings and data**.
- Store-count limit: **decided — unlimited in the MVP**.
- Store access: **decided — account owner only; team invitations are deferred**.
- Merchant contact verification: **decided — verify the phone number through WhatsApp only; email verification is not required in the MVP**.
- Initial store setup: **revised — store name, `lala` subdomain, currency, and primary language; no store country**.
- Initial storefront availability: **decided — public immediately after setup, without requiring a product or separate publish action**.
- Storefront themes: **decided — multiple ready-made themes**.
- Theme switching: **decided — preview before applying and preserve storefront content**.
- Storefront brand controls: **decided — logo, colors, fonts, and favicon**.
- Homepage composition: **decided — predefined sections that can be added, hidden, and reordered**.
- Initial homepage section: **decided — Hero or Slider**.
- Static pages: **decided — About Us, Contact, Shipping and Returns, Privacy Policy, and Terms and Conditions**.
- Custom static pages: **decided — unlimited**.
- Static-page languages: **decided — separate Arabic and English fields with primary-language fallback**.
- Contact page: **decided — customer form plus store contact details**.
- Store removal: **decided — disable the store without deleting its data**.
- Store reactivation: **decided — through `lala` support only**.
- Disabled storefront: **decided — show visitors a clear store-unavailable page**.
- Hosted subdomain changes: **decided — self-service, maximum three changes per store, no redirect, and a 10-day reservation for the previous subdomain**.
- Phone-verification code rules, behavior after exhausting subdomain changes, and the empty-store storefront experience.
- Contact-form delivery, manual merchant order creation, order CSV export, and order bulk updates.
- Storefront product search: **decided — match product name only; do not search descriptions, SKUs, or tags**.
- Storefront product filters: **decided — price, category or collection, availability, and product options**.
- Storefront product sorting: **decided — Featured, Newest, Price Low to High, Price High to Low, and Name**.
- Product-list loading: **decided — load more products automatically as the customer scrolls**.
- Default product sort: **decided — Featured first**.
- Featured-product curation: **decided — merchant manually selects Featured products and controls their order**.
- Product-card content: **decided — image, name, selling price, compare-at price when present, and inventory state**.
- Out of Stock list presentation: **decided — keep the product in its assigned position and show an Out of Stock label**.
- Product-option selection: **decided — automatically select the first available variant and allow the customer to change options afterward**.
- Product variants: **decided — flexible options with independent inventory per variant when tracking is enabled**.
- Variant-specific data: **decided — selling price, compare-at price, cost, SKU, inventory quantity, and image**.
- Unavailable variants: **decided — remain visible but disabled with a clear Unavailable label**.
- Quantity selection: **decided — available on the product page and in the cart, capped by available tracked inventory**.
- Related products: **decided — selected automatically from the same category or collection**.
- Add-to-cart feedback: **decided — show a success message and remain on the current page without opening the cart automatically**.
- Guest-cart persistence: **decided — 30 days on the same device**.
- Cart revalidation: **decided — use current prices, reduce over-stock quantities to current availability, and clearly notify the customer before order submission**.
- Buy Now with an existing cart: **decided — checkout the current product only and preserve the saved cart unchanged**.
- Checkout structure: **decided — one complete page**.
- Coupon entry: **decided — available in both cart and checkout with one shared applied-coupon state**.
- Successful-order page: **decided — order number, order summary, and current status; no tracking link**.
- Guest tracking: **decided — unique link sent only by email; no order-number-and-phone lookup**.
- Tracking without email: **decided — show the unique tracking link once on the successful-order page**.
- Tracking-page content: **decided — status and progression, products, totals, and available shipping-provider shipment details**.
- Order-confirmation email: **decided — order number, summary, delivery address, totals, current status, and tracking link**.
- Customer-account credentials: **decided — email address or phone number plus password**.
- Customer-account scope: **decided — isolated to one storefront**.
- Customer contact verification: **decided — email link for email accounts and WhatsApp code for phone accounts**.
- Customer password recovery: **decided — email reset link or WhatsApp code according to the verified sign-in channel**.
- Saved addresses: **decided — unlimited with one customer-selected default address**.
- Customer contact changes: **decided — verify the new email address or phone number before replacing the old value**.
- Customer-account deletion: **decided — remove profile and saved addresses while retaining historical order records**.
- Signed-in customer cancellation: **decided — no self-service cancellation; contact the merchant like a guest customer**.
- Repeat Order: **decided — add currently available products at current prices and clearly report unavailable items or changes**.
- Default address at checkout: **decided — preselect it, allow selection or one-time editing, and save changes only with explicit customer consent**.
- Merchant customer consolidation: **decided — automatically match normalized email address or phone number and flag identifier conflicts for review**.
- Merchant customer annotations: **decided — internal notes and tags**.
- Merchant customer blocking: **decided — block new orders matching a selected email address or phone number without changing historical orders**.
- Merchant customer-record content: **decided — identity and contact data, addresses, order history and count, total and average spend, last order, tags, and blocked status**.
- Merchant customer search and filters: **decided — search name, phone, or email; filter tags, blocked status, order count, spend, and last-order date**.
- Customer export: **decided — CSV for all customer records or the current filtered result set**.
- Merchant dashboard home: **decided — sales, orders by status, average order value, customers, top products, low stock, recent orders, and operational alerts**.
- Analytics date controls: **decided — Today, Yesterday, Last 7 Days, Last 30 Days, and custom range with previous equivalent-period comparison**.
- Sales metric status scope: **decided — include all orders in every status, including Cancelled and Returned, without deductions**.
- Per-status reporting: **decided — show both order count and order value for every status beside the all-orders sales total**.
- Estimated profit: **decided — no profit report in Phase 1; retain product cost data for reference and future use**.
- Analytics export: **decided — CSV using the current date range and filters**.
- Reporting timezone: **decided — fixed Cairo timezone in Phase 1**.
- Top Products ranking: **decided — merchant toggle between units ordered and total order value**.
- Analytics freshness: **decided — reflect order and catalog changes within approximately one minute**.
- Product CSV import: **decided — preview and validate, import valid product and variant rows, and provide an error file for invalid rows**.
- Product CSV export: **decided — all products or the current filtered result set, including variants**.
- Product bulk editing: **decided — publication state, catalog organization and tags, prices, inventory, and soft deletion**.
- CSV-imported images: **decided — public URLs downloaded and copied into `lala` storage**.
- CSV update matching: **decided — `lala` ID first, SKU second, and create a new record when unmatched**.
- Large CSV imports: **decided — background processing with dashboard notification and downloadable result file**.
- CSV identity conflicts: **decided — reject the row and modify neither record when `lala` ID and SKU point to different records**.
- Product bulk-action safeguards: **decided — affected-count and change preview, explicit confirmation, and result file**.
- Linking guest orders: **decided — automatically after verifying the matching email address or phone number**.
- Customer-account self-service: **decided — order history and tracking, saved addresses, and profile management**.
- Checkout policy acceptance: **decided — no required checkbox or required Terms and Privacy display during checkout**.
- Inventory tracking: **decided — optional, with quantity required when enabled**.
- Zero-stock behavior: **decided — block purchasing until restocked or tracking is disabled**.
- Product identifier: **decided — SKU supported; barcode deferred**.
- Price fields: **decided — selling price, compare-at price, and cost**.
- Catalog organization: **decided — categories, collections, and tags**.
- Product media: **decided — multiple images and an optional uploaded video file; external video links deferred**.
- Bilingual content entry: **decided — separate Arabic and English fields with one merchant-selected primary language and primary-language fallback for missing translations**.
- Product publication states: **decided — Published and Hidden only; new products are Published immediately after providing a primary-language name and selling price; no separate Draft or Archived state**.
- Product deletion: **decided — soft delete rather than physical deletion, with merchant restoration from Trash as Hidden**.
- Discounts: **partially decided — percentage, fixed-amount, and free-shipping coupons with validity period, total usage limit, and minimum order amount; whole-order scope; one coupon per order; minimum based on pre-discount products subtotal excluding shipping; no per-customer usage limit; automatic discounts deferred**.
- Coupon abuse mitigation beyond the total usage limit.
- Permanent product deletion behavior.

### Transaction model

- Purchase actions: **decided — support both cart and direct Buy Now**.
- Customer identity: **decided — optional accounts with guest checkout as the default flow**.
- COD submission: **decided — create the order immediately without OTP or pre-verification**.
- Payment baseline: **decided — COD only for the initial release**.
- Paid digital-product handling: **decided — postponed from the initial release**.
- Core order statuses: **decided — New, Confirmed, Processing, Shipped, Delivered, Cancelled, and Returned, plus custom statuses**.
- Merchant order editing: **decided — all order data can be edited in any status, including after delivery; product and quantity edits automatically recalculate totals and inventory differences; every edit is audited**.
- Customer cancellation: **decided — no guest self-service cancellation; the customer contacts the merchant**.
- Returned inventory: **decided — recording a return does not automatically restore stock; merchants manually adjust saleable returned inventory from the product page**.
- Return scope: **decided — full-order return only; partial item or quantity returns deferred**.
- Status transitions: **decided — all statuses are freely selectable without a default or enforced path**.
- Custom-status behavior: **decided — informational labels only, without automatic side effects**.
- Custom-status presentation and merchant fulfillment workflow.
- Shipping pricing: **decided — merchant-defined shipping zones with one delivery price per zone**.
- Shipping geography source: **decided — preloaded country subdivisions, such as governorates for Egypt**.
- Zone construction: **decided — support direct subdivision pricing and grouping multiple subdivisions into custom zones**.
- Delivery connections: **decided — optional shipping-provider integrations with an extensible provider model**.
- First shipping provider: **decided — Bosta first, then additional providers**.
- Shipping-provider account connection: **decided — merchant enters credentials for the merchant's own provider account**.
- Shipping submission initiation: **decided — merchant selects orders and explicitly sends them; no automatic provider submission**.
- Shipping submission selection: **decided — submit one order or a selected group of orders**.
- Failed shipping submission: **decided — keep the order Not Sent, show the failure reason, and provide manual retry**.
- Successful shipping submission: **decided — store shipment number, provider status, and label without automatically changing the core order status**.
- Fulfillment without an integration: **decided — merchant changes order status only; no manual carrier or tracking record**.
- Provider credential validation, shipment-field validation, label operations, and duplicate-submission protection.

### Global baseline

- Interface languages at launch: **decided — Arabic and English for dashboard and storefront**.
- Product-video file limits, processing, and delivery behavior.
- Store currency model: **decided — one merchant-selected operating currency per store**.
- Store currency changes: **decided — the currency can change at any time, including after orders exist**.
- Historical orders after a setting change: **decided — retain destination information and currency captured at order creation**.
- Product prices after a currency change: **decided — retain all numeric values and change only the currency code or symbol; no conversion**.
- Store country: **revised — no store-level operating country**.
- Shipping-country capacity: **decided — a store can use any number of platform-supported countries**.
- Phase 1 shipping-country availability: **decided — Egypt only, so no multi-country customer selection is needed yet**.
- Egypt country field: **decided — hidden at checkout, with Egypt stored automatically**.
- Egypt geography depth: **decided — preloaded governorate followed by city or area**.
- Uncovered addresses: **decided — block checkout and explain that shipping is unavailable**.
- Zone overlap: **decided — one city or area cannot belong to more than one active zone in the same store**.
- Shipping-price display: **decided — calculate and show it immediately after governorate and city or area selection**.
- Missing geography: **decided — merchant can add a custom city or area under the governorate**.
- Custom-location visibility: **decided — store-specific only**.
- Zero-price zones: **decided — allowed and displayed as free shipping**.
- Zone-price changes: **decided — existing orders keep their captured shipping price; later orders use the new price immediately**.
- Cross-country zone composition is deferred until a second country is supported.
- Checkout field set: **decided — name, primary phone, address, city, email, notes, and alternate phone**.
- Checkout field requiredness: **decided — configurable by the merchant**.
- Order statuses: **decided — New, Confirmed, Processing, Shipped, Delivered, Cancelled, and Returned, plus merchant-defined custom statuses**.
- Inventory timing: **decided — deduct on COD order creation and restore on cancellation**.
- Order notification channels: **decided — merchant dashboard and email**.
- Customer email events: **decided — order confirmation and core-status changes when an email address is provided**.
- Low-stock warnings: **decided — merchant-defined threshold for tracked products or variants, with dashboard and email warnings**.
- Merchant order-event email: **decided — new order only**.
- Product and variant stock deduction follows the immediate COD-order rule in D-028.
- Taxes: **decided — no tax feature or separate tax line in the initial release**.

### Business validation

- MVP success metric.
- Pilot/beta approach.
- Monetization assumptions only to the depth needed to validate the MVP.

## Phase exit criteria

Phase 1 is complete when all of the following exist:

- One-sentence target use case for the MVP.
- End-to-end merchant and buyer journeys.
- Prioritized feature list with explicit exclusions.
- Defined global baseline and known regional limitations.
- Testable MVP success metrics.
- Sufficient requirements to make an informed architecture decision.

## Not part of this phase

- Writing production application code.
- Finalizing a long-term architecture prematurely.
- Planning an app marketplace or broad enterprise feature set without MVP evidence.
- Building every feature found in reference platforms.
- Tax configuration, tax calculation, and separate tax display.

These exclusions govern the planning process, not the eventual product roadmap.
