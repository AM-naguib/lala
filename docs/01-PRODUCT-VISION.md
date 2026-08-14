# Product Vision

## Vision

Enable anyone to create and operate an online store through a hosted SaaS platform, with a global launch ambition from day one.

## Product shape

The founder described `lala` as a SaaS e-commerce product in the same broad category as Easy Orders, Fodera, and Shopify. These products are references for category understanding, not instructions to copy their complete feature sets.

## Intended users

The confirmed broad audience is:

> Anyone who wants to create an online store.

This can eventually include individuals, social sellers, existing online merchants, traditional shops, and larger teams. The first-use-case priority within that broad audience is still unresolved and must be derived from the MVP decisions rather than guessed.

## Market scope

- **Confirmed ambition:** global from day one.
- **Defined MVP baseline:** Arabic and English interfaces, one currency and one operating country per store, COD only, internal shipping zones, and no tax feature.
- **Not yet defined:** exact country availability, detailed address and fulfillment behavior, and legal/compliance boundaries.

“Global” must not silently be interpreted as full localization or regulatory support for every country in the first release.

## Confirmed MVP baseline

- The initial selling flow supports physical products.
- Paid digital-product selling and delivery are postponed.
- Every store is available on a hosted `lala` subdomain.
- Merchants can optionally connect their own custom domains.
- Cash on delivery is the only confirmed payment method for the initial release.
- Online payment gateways are not included in the current MVP.
- Arabic and English are required for both the merchant dashboard and customer storefront.
- Each merchant selects one operating currency for the whole store.
- Each store operates in one merchant-selected country and delivers through merchant-defined zones inside that country.
- The merchant assigns one delivery price to each shipping zone.
- Supported countries provide preloaded administrative subdivisions, such as Egypt and its governorates.
- Merchants can price subdivisions separately or group several subdivisions into a named shipping zone with one price.
- Bosta is the first optional shipping-company integration; the provider model must allow additional providers over time.
- Shipping-provider submission is merchant-initiated: the merchant selects orders and explicitly sends them rather than relying on automatic submission.
- Provider submission supports both one order and a selected group of orders.
- A failed provider submission leaves the order Not Sent, displays the provider failure reason, and can be retried manually.
- Checkout includes name, primary phone, address, city, email, notes, and an alternate phone.
- Merchants choose which supported checkout fields are required or optional.
- Storefronts support both a multi-product cart and direct Buy Now.
- Customer accounts are optional and guest checkout is the primary flow.
- COD orders are recorded immediately without OTP or pre-verification.
- Core order statuses are New, Confirmed, Processing, Shipped, Delivered, Cancelled, and Returned, with merchant-defined custom statuses also supported.
- Custom statuses are informational organization labels without automatic email, inventory, shipping, or other actions.
- Merchants can edit all order data in any status, including after delivery; product and quantity edits automatically recalculate totals and inventory differences.
- Order edits retain an audit history of who changed what and when.
- Returns do not automatically restore inventory.
- Merchants manually restock saleable returned items from the product page.
- The MVP records full-order returns only; partial returns are deferred.
- Orders can move freely between all statuses without a default or enforced path.
- Guest customers cannot cancel orders themselves and must contact the merchant.
- Inventory is deducted when a COD order is created and restored when it is cancelled.
- Products support flexible options and variants, with independent inventory per variant when tracking is enabled.
- Inventory tracking is optional but requires a quantity when enabled.
- Tracked items become Out of Stock at zero and return to sale only after restocking or disabling tracking.
- Products and variants support SKU, while barcode is deferred.
- Pricing includes selling price, compare-at price, and cost.
- Products support multiple images and an optional merchant-uploaded video file.
- Product titles and descriptions use separate Arabic and English fields, with one merchant-selected primary language; missing translations fall back to the primary-language content.
- Catalog organization includes categories, collections, and tags.
- Products can be Published or Hidden; new products are Published immediately when saved after a primary-language name and selling price are provided, and separate Draft and Archived states are not included in the MVP.
- Product deletion is soft deletion; merchants can restore products from Trash as Hidden, and stored records remain available for historical references.
- Coupon codes support percentage, fixed-amount, and free-shipping rewards, with a validity period, total usage limit, and minimum order amount.
- Coupons apply to the whole order, with a maximum of one coupon per order.
- Coupon minimum-order eligibility uses the pre-discount products subtotal and excludes shipping.
- Coupon usage has a total limit but no per-customer limit in the MVP.
- Automatic discounts are deferred beyond the MVP.
- Order notifications are available in the merchant dashboard and by email.
- The merchant receives an order-event email for a new order only.
- Customers who provide an email address receive order confirmation and core-status change emails.
- Tracked inventory supports merchant-defined low-stock thresholds with dashboard and email warnings.
- The initial release has no tax configuration, calculation, or separate tax line.

The original physical-and-digital scope was narrowed because COD has no natural collection event for a non-physical delivery. Digital sales can be reconsidered when a suitable payment and delivery flow is introduced.

## Value proposition

Not yet finalized. A working placeholder is:

> Create and run an online store without building the commerce infrastructure yourself.

This is a placeholder, not approved marketing copy.

## Unresolved differentiator

The reason a merchant should choose `lala` over existing platforms has not yet been decided. Differentiation will be explored only after the basic MVP transaction and store-creation model are clear.

## Explicit non-decisions

The following have not been selected:

- Technology stack and cloud provider.
- Pricing or subscription tiers.
- Exact merchant segment for first acquisition.
- Shipping-provider credentials, successful-submission effects, and the non-integrated fulfillment record.
- Product-video file limits, processing, and delivery behavior.
- Coupon abuse mitigation beyond the total usage limit.
- Permanent product deletion behavior.
- Themes, non-shipping integrations, applications, or marketplace scope.
