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
4. Clarify what “global from day one” means for the MVP.
5. Establish MVP inclusion and exclusion boundaries.
6. Define success criteria that prove the MVP is useful.

## Required decisions

### Product model

- Supported product types: **revised — physical products in the initial selling flow; paid digital selling is postponed**.
- Storefront identity: **decided — hosted `lala` subdomain with optional custom domain**.
- Merchant onboarding and store setup flow.
- Product variants: **decided — flexible options with independent inventory per variant when tracking is enabled**.
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
- Shipping submission initiation: **decided — merchant selects orders and explicitly sends them; no automatic provider submission**.
- Shipping submission selection: **decided — submit one order or a selected group of orders**.
- Failed shipping submission: **decided — keep the order Not Sent, show the failure reason, and provide manual retry**.
- Successful-submission effects, non-integrated/manual fallback flow, provider credentials, and provider-specific validation.

### Global baseline

- Interface languages at launch: **decided — Arabic and English for dashboard and storefront**.
- Product-video file limits, processing, and delivery behavior.
- Store currency model: **decided — one merchant-selected operating currency per store**.
- Store-currency change rules after products or orders exist.
- Store country: **decided — one merchant-selected operating country per store**.
- Shipping coverage: **decided — zones inside the selected country only**.
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
