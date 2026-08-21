# lala

`lala` is a multi-tenant SaaS e-commerce platform for anyone who wants to launch and operate an online store.

Public source repository: `AM-naguib/lala`. The founder explicitly approved publishing project memory and decisions here; secrets, credentials, personal data, and production customer data remain prohibited.

**Phase 1: discovery and MVP definition is complete.** Architecture and delivery planning is now active; implementation has not started. The confirmed application stack is PHP 8.5 with Laravel 13, MySQL, Laravel's traditional structure, Livewire with Blade for the merchant dashboard, Blade with Alpine.js using plain JavaScript for the customer storefront, Tailwind CSS, Redis with Horizon, and Pest. Pilot files use local server storage through Laravel's storage abstraction before a later object-storage migration.

Multi-tenancy uses one shared MySQL database with `store_id` isolation, separate Admin, Merchant, and Customer authentication tables and guards, and a custom domain-resolution middleware backed by a domains table.

Runtime state uses Redis through PhpRedis for sessions, cache, locks, rate limits, and Horizon queues. Internal records use BIGINT primary keys with separate public ULIDs. Merchant authentication starts from the Laravel 13 Livewire starter kit and Fortify; Admin and store-scoped Customer authentication use dedicated Laravel guards and custom flows.

## Project documents

- [`docs/00-PROJECT-MEMORY.md`](docs/00-PROJECT-MEMORY.md) — compact source of truth for continuing work.
- [`docs/01-PRODUCT-VISION.md`](docs/01-PRODUCT-VISION.md) — confirmed product direction and boundaries.
- [`docs/02-PHASE-1.md`](docs/02-PHASE-1.md) — current phase, goals, and exit criteria.
- [`docs/03-DECISIONS.md`](docs/03-DECISIONS.md) — append-only decision log.
- [`docs/04-OPEN-QUESTIONS.md`](docs/04-OPEN-QUESTIONS.md) — unresolved decisions, ordered by priority.
- [`docs/05-CHANGELOG.md`](docs/05-CHANGELOG.md) — chronological documentation changes.
- [`docs/06-WORKING-AGREEMENT.md`](docs/06-WORKING-AGREEMENT.md) — rules for maintaining memory and planning.
- [`docs/07-ARCHITECTURE-PLAN.md`](docs/07-ARCHITECTURE-PLAN.md) — active architecture inputs, proposals, and unresolved technical decisions.
- [`docs/08-DELIVERY-STATUS.md`](docs/08-DELIVERY-STATUS.md) — completed and delivered work, including Design Batches 1–2.
- [`docs/09-NEXT-WORK.md`](docs/09-NEXT-WORK.md) — immediate review queue, remaining decisions, and proposed implementation sequence.

## Current snapshot

- Repository: public GitHub repository `AM-naguib/lala` by explicit founder approval.
- Market ambition: global over time; Phase 1 shipping coverage is Egypt only.
- Broad target audience: anyone who wants to create an online store.
- Merchant account creation requires an email address, phone number, and password.
- The merchant phone number must be verified through WhatsApp during sign-up; email verification is not required in the MVP.
- One merchant account can own multiple stores, each with independent settings and data.
- The number of stores per merchant account is unlimited in the MVP.
- Only the account owner can access and manage stores in the MVP; team invitations are deferred.
- Initial store setup requires store name, `lala` subdomain, currency, and primary language; the store has no store-level operating country.
- The storefront becomes publicly accessible immediately after the merchant completes initial setup, even before adding a product.
- Merchants choose from multiple ready-made storefront themes.
- Merchants preview a theme before applying it, and switching themes preserves storefront content.
- Store branding controls include logo, colors, fonts, and favicon.
- The homepage uses predefined sections that the merchant can add, hide, and reorder.
- The initial homepage section catalog contains a Hero or Slider section.
- Editable static pages include About Us, Contact, Shipping and Returns, Privacy Policy, and Terms and Conditions.
- Merchants can create an unlimited number of additional custom static pages.
- Static pages have separate Arabic and English fields and fall back to the store's primary language when a translation is missing.
- The Contact page includes a customer contact form and merchant-configured store contact details.
- Removing a store from active use disables it without deleting its stored data.
- A disabled store can be reactivated only through `lala` support, and visitors see a clear store-unavailable page while it is disabled.
- Merchants can change the `lala` subdomain from settings up to three times per store. The old subdomain does not redirect and remains reserved for 10 days.
- MVP selling scope: physical products; paid digital-product selling is postponed.
- Storefront publishing: a hosted `lala` subdomain with optional custom-domain connection.
- Initial payment method: cash on delivery (COD) only.
- `lala` monetization uses a prepaid wallet per store and a configurable fee per created order, initially EGP 1; wallets can reach EGP -10 before customer data is masked pending recharge.
- Launch interface languages: Arabic and English for both the merchant dashboard and storefront.
- Currency model: each merchant selects one operating currency for the entire store.
- Merchants can change the store currency at any time, including after receiving orders.
- Existing orders preserve the destination and currency captured when each order was created.
- Changing the store currency keeps every existing product and variant price number unchanged and only changes the currency code/symbol; no conversion is performed.
- Shipping model: no store-level operating country. A store can use any number of platform-supported shipping countries, but Egypt is the only supported country in Phase 1, with one delivery price per zone.
- Geography: use preloaded country subdivisions, such as Egypt and its governorates, instead of requiring merchants to type every area from scratch.
- Checkout hides the country field and stores Egypt automatically. The customer selects a preloaded governorate, then a city or area.
- Zone pricing: merchants can either price each subdivision separately or group several subdivisions into a named zone with one price.
- A city or area cannot belong to more than one active shipping zone in the same store.
- Checkout calculates and displays shipping immediately after the customer selects the governorate and city or area.
- Merchants can add a store-specific custom city or area under a governorate when it is missing from the preloaded list.
- Custom cities and areas are visible only within the merchant's own store.
- A zone price of zero is allowed and appears to customers as free shipping.
- Existing orders keep the shipping price captured at creation; orders created after a zone-price change use the new price immediately.
- If the selected address is outside all merchant-enabled shipping zones, checkout is blocked with a shipping-unavailable message.
- Fulfillment: Bosta is the first shipping integration; the provider model must support adding more companies later, and connecting a provider remains optional.
- A merchant connects a supported shipping provider using the credentials for the merchant's own provider account.
- Orders are never sent to a shipping provider automatically; the merchant selects the orders and explicitly triggers submission.
- The merchant can submit one order or a selected group of orders to the connected shipping provider.
- If provider submission fails, the affected order remains Not Sent, shows the failure reason, and provides a retry action.
- After a successful submission, store the provider shipment number, shipment status, and shipping label; normalized Bosta events automatically update the core order status and trigger its standard customer email.
- Without a connected provider, fulfillment is managed only by changing the order status; the MVP does not store manual carrier or tracking data.
- Checkout contact/address fields include name, primary phone, address, city, email, notes, and an alternate phone.
- Merchants choose which supported checkout fields are required or optional.
- Storefront purchase actions include both a multi-product cart and direct Buy Now.
- Customer accounts are optional; guest checkout is the default purchase path.
- COD orders are created immediately after checkout submission without OTP or pre-verification.
- Core order statuses are New, Confirmed, Processing, Shipped, Delivered, Cancelled, and Returned. Additional merchant organization uses a separate Labels field.
- Labels do not trigger automatic email, inventory, shipping, or other actions.
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
- Storefront product search matches the product name only; it does not search descriptions, SKUs, or tags.
- Product browsing filters include price, category or collection, availability, and product options.
- Product sorting options are Featured, Newest, Price Low to High, Price High to Low, and Name.
- Long product lists load automatically as the customer scrolls.
- Featured is the default product-list sort.
- Merchants choose which products are Featured and manually control their order.
- Product cards show the product image, name, selling price, compare-at price when present, and inventory state.
- Out of Stock products remain in their assigned list position and display an Out of Stock label.
- On a product page with variants, the first available variant is selected automatically; customers can then change the option selections.
- Each variant can have its own selling price, compare-at price, cost, SKU, inventory quantity, and image.
- Unavailable or Out of Stock variant choices remain visible but disabled with a clear Unavailable label.
- Customers can change product quantity on both the product page and in the cart, up to the currently available tracked inventory.
- Product pages automatically show related products from the same category or collection.
- Adding an item to the cart shows a success message while keeping the customer on the current page; no cart drawer opens automatically.
- A guest cart persists on the same device for 30 days.
- Before order submission, cart items use current prices and available inventory; quantities above current stock are reduced and the customer receives a clear notice.
- Buy Now opens a checkout containing only the currently selected product and leaves the customer's existing cart unchanged.
- Checkout uses one complete page rather than a multi-step flow.
- Customers can enter and apply the same coupon code from either the cart or checkout.
- After a successful order, the confirmation page shows the order number, order summary, and current status; the tracking link is not displayed there.
- Guest self-service tracking uses a unique link sent only by email; there is no order-number-and-phone lookup in the MVP.
- If no email is provided, the unique tracking link is shown once on the successful-order page instead.
- The tracking page shows status and its progression, ordered products, totals, and available shipping-provider shipment details.
- The order-confirmation email includes the order number, summary, delivery address, totals, current status, and unique tracking link.
- Customers can optionally create an account using either an email address or phone number plus a password.
- Customer accounts are isolated per storefront rather than shared across all `lala` stores.
- Email-based accounts are verified through an email link; phone-based accounts are verified through a WhatsApp code.
- Password recovery uses an email reset link or WhatsApp code according to the account's verified sign-in channel.
- After a matching email address or phone number is verified, earlier guest orders are linked to the customer account automatically.
- Customer self-service includes order history and tracking, saved addresses, and profile management.
- Customers can save an unlimited number of delivery addresses and select one as the default.
- Changing a customer email address or phone number requires verification of the new value before it replaces the old one.
- Customer-account deletion removes the account profile and saved addresses while preserving historical order records for the store.
- Signed-in customers cannot cancel orders themselves and must contact the merchant, matching the guest flow.
- Repeat Order adds currently available products to the cart at current prices and clearly reports unavailable items or other changes.
- Checkout preselects the customer's default address; temporary edits are not saved unless the customer explicitly chooses to save them.
- Merchant customer records automatically consolidate guest and account orders by matching normalized email address or phone number and flag identity conflicts for review.
- Merchants can attach internal notes and tags to customer records.
- Merchants can block new checkout submissions that match a selected customer email address or phone number without changing historical orders.
- A merchant customer record shows identity and contact data, addresses, order history and count, total and average spend, last order, tags, and blocked status.
- The merchant customer list supports search by name, phone, or email and filters for tags, blocked status, order count, spend, and last-order date.
- Merchants can export all customers or the current filtered customer result set as CSV.
- The merchant dashboard home shows sales, orders by status, average order value, customers, top products, low-stock items, recent orders, and operational alerts.
- Analytics provides Today, Yesterday, Last 7 Days, Last 30 Days, and custom date ranges, with comparison to the immediately previous equivalent period.
- Sales totals include every order regardless of status, including Cancelled and Returned orders; those statuses are not deducted from the headline sales value.
- Beside the all-orders sales total, the dashboard shows order count and order value separately for every status.
- Estimated-profit reporting is not included in Phase 1; product cost remains stored for merchant reference and future reporting.
- Merchants can export analytics as CSV using the currently selected date range and filters.
- Merchant analytics periods and displayed order timestamps use the fixed Cairo timezone in Phase 1.
- Top Products can be ranked by either units ordered or total order value, with a merchant-controlled toggle.
- Dashboard analytics reflect order and catalog changes within approximately one minute.
- Product and variant CSV import includes preview and validation, imports valid rows, and returns an error file for invalid rows.
- Merchants can export all products or the current filtered product result set, including variants, as CSV.
- Product bulk actions cover publishing and hiding, categories, collections, and tags, prices, inventory, and soft deletion.
- CSV imports accept public product and variant image URLs, and `lala` downloads and stores its own image copies.
- CSV update matching uses a `lala` record ID first and SKU second; a row with no match creates a new product or variant.
- Large CSV imports run in the background and finish with a dashboard notification and downloadable result file.
- If a CSV row's `lala` ID and SKU point to different existing records, the row is rejected and neither record is modified.
- Large or destructive product bulk actions show the affected count and proposed changes, require explicit confirmation, and produce a result file.
- Checkout does not require a Terms or Privacy acceptance checkbox, and those policies do not have to appear in the checkout interface.
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
- Immediate focus: remain static, review Design Batch 2, define the exact Batch 3 scope, and continue portable Tailwind CSS v4 + Alpine.js HTML screens. Laravel implementation is postponed until explicit founder approval.

Last updated: 2026-08-21 (Africa/Cairo)
