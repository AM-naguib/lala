# lala

`lala` is a multi-tenant SaaS e-commerce platform for anyone who wants to launch and operate an online store.

Private source repository: `AM-naguib/lala`.

The product is currently in **Phase 1: discovery and MVP definition**. No implementation stack has been selected yet.

## Project documents

- [`docs/00-PROJECT-MEMORY.md`](docs/00-PROJECT-MEMORY.md) — compact source of truth for continuing work.
- [`docs/01-PRODUCT-VISION.md`](docs/01-PRODUCT-VISION.md) — confirmed product direction and boundaries.
- [`docs/02-PHASE-1.md`](docs/02-PHASE-1.md) — current phase, goals, and exit criteria.
- [`docs/03-DECISIONS.md`](docs/03-DECISIONS.md) — append-only decision log.
- [`docs/04-OPEN-QUESTIONS.md`](docs/04-OPEN-QUESTIONS.md) — unresolved decisions, ordered by priority.
- [`docs/05-CHANGELOG.md`](docs/05-CHANGELOG.md) — chronological documentation changes.
- [`docs/06-WORKING-AGREEMENT.md`](docs/06-WORKING-AGREEMENT.md) — rules for maintaining memory and planning.

## Current snapshot

- Repository target: private GitHub repository named `lala`.
- Launch ambition: global from day one.
- Broad target audience: anyone who wants to create an online store.
- MVP selling scope: physical products; paid digital-product selling is postponed.
- Storefront publishing: a hosted `lala` subdomain with optional custom-domain connection.
- Initial payment method: cash on delivery (COD) only.
- Launch interface languages: Arabic and English for both the merchant dashboard and storefront.
- Currency model: each merchant selects one operating currency for the entire store.
- Shipping model: one operating country per store, with merchant-defined shipping zones and one delivery price per zone.
- Geography: use preloaded country subdivisions, such as Egypt and its governorates, instead of requiring merchants to type every area from scratch.
- Zone pricing: merchants can either price each subdivision separately or group several subdivisions into a named zone with one price.
- Fulfillment: Bosta is the first shipping integration; the provider model must support adding more companies later, and connecting a provider remains optional.
- Orders are never sent to a shipping provider automatically; the merchant selects the orders and explicitly triggers submission.
- The merchant can submit one order or a selected group of orders to the connected shipping provider.
- If provider submission fails, the affected order remains Not Sent, shows the failure reason, and provides a retry action.
- Checkout contact/address fields include name, primary phone, address, city, email, notes, and an alternate phone.
- Merchants choose which supported checkout fields are required or optional.
- Storefront purchase actions include both a multi-product cart and direct Buy Now.
- Customer accounts are optional; guest checkout is the default purchase path.
- COD orders are created immediately after checkout submission without OTP or pre-verification.
- Core order statuses are New, Confirmed, Processing, Shipped, Delivered, Cancelled, and Returned, plus merchant-defined custom statuses.
- Custom statuses are informational labels for organizing orders and do not trigger automatic email, inventory, shipping, or other actions.
- Merchants can edit all order data in any status, including after delivery.
- Product and quantity edits automatically recalculate order totals and apply the inventory difference.
- Every order edit is recorded with who changed what and when.
- Recording a return does not automatically add returned quantities back to available inventory.
- To restock a saleable returned item, the merchant manually adjusts its inventory from the product page.
- The MVP records full-order returns only; partial item or quantity returns are deferred.
- Merchants can move orders freely between all statuses; the MVP has no default or enforced status path.
- Guest customers cannot cancel orders themselves and must contact the merchant.
- Inventory is deducted immediately when a COD order is created and restored when the order is cancelled.
- Products support flexible options and variants, with inventory tracked independently per variant when tracking is enabled.
- Inventory tracking is optional; enabling it requires the merchant to enter an available quantity.
- A tracked product or variant at zero inventory is Out of Stock and cannot be purchased until stock is added or tracking is disabled.
- Products and variants support an optional SKU; barcode support is not included in the current MVP.
- Price data includes selling price, compare-at price, and product cost.
- Products support multiple images and one optional merchant-uploaded video file.
- Product content uses separate Arabic and English fields, with one merchant-selected primary language; missing translations fall back to that primary-language content.
- Products can be organized using categories, collections, and tags.
- Products have two storefront visibility states: Published and Hidden.
- New products are Published immediately when saved.
- Immediate publication requires a product name in the store's primary language and a selling price.
- Deleting a product uses soft deletion; merchants can restore it from a Trash view, and the record remains available for historical references.
- Restored products return as Hidden so the merchant can review them before republishing.
- Coupon-code discounts support percentage, fixed-amount, and free-shipping rewards.
- Coupons can have a validity period, a total usage limit, and a minimum order amount; automatic discounts are deferred beyond the MVP.
- A coupon applies to the entire order, and only one coupon can be used per order.
- Coupon minimum-order eligibility uses the products subtotal before discounts and excludes shipping.
- The MVP does not enforce a per-customer coupon usage limit; only the coupon's total usage limit applies.
- Order notifications are provided through the merchant dashboard and email.
- Merchant order-event email is sent for a new order only; separate inventory warnings still follow their own notification rule.
- When a customer provides an email address, send an order confirmation and notifications for core-status changes.
- Tracked products and variants support a merchant-defined low-stock threshold with dashboard and email warnings.
- Taxes: no tax configuration, calculation, or separate tax line in the initial release.
- Immediate focus: define the smallest useful Phase 1 MVP before choosing architecture or writing product code.

Last updated: 2026-08-14 (Africa/Cairo)
