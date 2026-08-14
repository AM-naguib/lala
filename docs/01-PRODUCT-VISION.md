# Product Vision

## Vision

Enable anyone to create and operate an online store through a hosted SaaS platform, starting with Egypt shipping coverage and expanding globally over time.

## Product shape

The founder described `lala` as a SaaS e-commerce product in the same broad category as Easy Orders, Fodera, and Shopify. These products are references for category understanding, not instructions to copy their complete feature sets.

## Intended users

The confirmed broad audience is:

> Anyone who wants to create an online store.

This can eventually include individuals, social sellers, existing online merchants, traditional shops, and larger teams. The first-use-case priority within that broad audience is still unresolved and must be derived from the MVP decisions rather than guessed.

## Market scope

- **Confirmed long-term ambition:** global coverage over time.
- **Defined MVP baseline:** Egypt-only shipping coverage, Arabic and English interfaces, one currency per store, no store-level country, COD only, shipping zones, and no tax feature.
- **Not yet defined:** detailed Egypt address and fulfillment behavior and legal/compliance boundaries.

The platform model permits future supported countries without assigning a country to the store, but Phase 1 operational shipping support is limited to Egypt.

## Confirmed MVP baseline

- Merchants create accounts using an email address, phone number, and password.
- Merchant phone numbers are verified through WhatsApp during sign-up; merchant email verification is not required in the MVP.
- One merchant account can own multiple stores with independent settings and data.
- The number of stores per merchant account is unlimited in the MVP.
- Store access is owner-only in the MVP; team invitations and roles are deferred.
- Initial store setup collects the store name, `lala` subdomain, currency, and primary language; it does not collect a store country.
- The storefront is publicly accessible immediately after setup, without requiring a product or a separate publish action.
- Merchants choose from multiple ready-made storefront themes.
- Theme switching includes a preview step and preserves storefront content when applied.
- Merchants can customize the logo, colors, fonts, and favicon.
- Homepage composition uses predefined sections that merchants can add, hide, and reorder.
- The initial selected homepage section type is Hero or Slider.
- Editable static pages include About Us, Contact, Shipping and Returns, Privacy Policy, and Terms and Conditions.
- Merchants can create unlimited additional custom static pages.
- Static pages use separate Arabic and English fields with primary-language fallback for missing translations.
- The Contact page includes both a customer form and store contact details.
- Disabling a store retains all of its stored data rather than deleting it.
- Disabled-store reactivation requires `lala` support, and visitors see a clear store-unavailable page while a store is disabled.
- Merchants can change the hosted `lala` subdomain from settings up to three times per store. The previous subdomain does not redirect and remains reserved for 10 days.
- The initial selling flow supports physical products.
- Paid digital-product selling and delivery are postponed.
- Every store is available on a hosted `lala` subdomain.
- Merchants can optionally connect their own custom domains.
- Cash on delivery is the only confirmed payment method for the initial release.
- Online payment gateways are not included in the current MVP.
- Arabic and English are required for both the merchant dashboard and customer storefront.
- Each merchant selects one operating currency for the whole store.
- Merchants can change the store currency at any time, including after receiving orders.
- Historical orders retain the destination and currency captured at order creation.
- A currency change updates only the currency code or symbol for existing catalog prices; all numeric price values stay unchanged and are not converted.
- Stores have no store-level operating country; merchants define delivery coverage through shipping zones.
- A store can configure zones in any number of platform-supported countries, but Egypt is the only supported shipping country in Phase 1.
- The merchant assigns one delivery price to each shipping zone.
- Supported countries provide preloaded administrative subdivisions, such as Egypt and its governorates.
- Phase 1 checkout hides the country and saves Egypt automatically; customers select a governorate followed by a city or area.
- Merchants can price subdivisions separately or group several subdivisions into a named shipping zone with one price.
- Active zones cannot overlap at the city or area level within one store.
- Shipping price is calculated and displayed immediately after the customer selects the governorate and city or area.
- Merchants can add custom cities or areas under a governorate when the platform list is missing a location.
- Merchant-added locations are store-specific and do not modify the shared platform geography.
- A shipping-zone price can be zero and is displayed as free shipping.
- Existing orders retain their captured shipping price, while orders created after a zone-price change use the new price immediately.
- Checkout blocks order submission with a clear message when the selected Egyptian location is outside every merchant-enabled shipping zone.
- Bosta is the first optional shipping-company integration; the provider model must allow additional providers over time.
- Merchants connect a supported provider using credentials for their own shipping-provider account.
- Shipping-provider submission is merchant-initiated: the merchant selects orders and explicitly sends them rather than relying on automatic submission.
- Provider submission supports both one order and a selected group of orders.
- A failed provider submission leaves the order Not Sent, displays the provider failure reason, and can be retried manually.
- A successful submission stores the provider shipment number, shipment status, and shipping label without automatically changing the order's core status.
- Without a connected provider, the merchant manages fulfillment through order-status changes only; the MVP does not store manual carrier or tracking data.
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
- Storefront product search matches product names only.
- Customers can filter products by price, category or collection, availability, and product options.
- Customers can sort products by Featured, Newest, Price Low to High, Price High to Low, and Name.
- Long product lists load automatically as the customer scrolls.
- Featured is the default product-list sort, and merchants manually select and order Featured products.
- Product cards show image, name, selling price, compare-at price when present, and inventory state.
- Out of Stock products remain in their assigned list position with a clear label.
- Variant product pages automatically select the first available variant and let customers change options afterward.
- Each variant can independently define selling price, compare-at price, cost, SKU, inventory quantity, and image.
- Unavailable or Out of Stock variant choices remain visible but disabled with a clear label.
- Customers can change quantities on the product page and in the cart, up to available tracked inventory.
- Product pages automatically show related products from the same category or collection.
- Add to Cart shows a success message and keeps the customer on the current page.
- Guest carts persist on the same device for 30 days.
- Before order submission, current prices replace stale cart prices, quantities above current stock are reduced, and the customer is clearly notified.
- Buy Now opens a single-product checkout and preserves the existing cart unchanged.
- Checkout is a single complete page.
- The coupon field is available in both cart and checkout, using one shared applied-coupon state.
- The successful-order page shows order number, summary, and current status without a tracking link.
- Guest order tracking uses a unique link sent only by email.
- When no customer email is provided, show the unique tracking link once on the successful-order page.
- The tracking page shows status progression, products, totals, and available shipping-provider shipment details.
- The initial confirmation email includes order number, summary, delivery address, totals, current status, and the tracking link.
- Customers can optionally create an account using an email address or phone number plus a password.
- Customer accounts are isolated per storefront.
- Email accounts use verification links and phone accounts use WhatsApp verification codes.
- Password recovery follows the verified channel through an email reset link or WhatsApp code.
- Verifying a matching email or phone automatically links earlier guest orders to the account.
- Customer self-service includes order history and tracking, saved addresses, and profile management.
- Customers can save unlimited addresses and choose one default.
- A changed email address or phone number is activated only after the new value is verified.
- Deleting a customer account removes its profile and saved addresses while preserving historical store order records.
- Signed-in customers cannot self-cancel orders and must contact the merchant, like guests.
- Repeat Order adds currently available products to the cart at current prices and reports unavailable products or changes.
- Checkout preselects the default address, and one-time edits are saved only when the customer explicitly chooses to save them.
- The merchant dashboard automatically consolidates customer orders by normalized email or phone and flags conflicts for review.
- Merchants can add internal customer notes and tags.
- Merchants can block future orders by customer email or phone without changing historical orders.
- Customer records show identity, addresses, order history and count, total and average spend, last order, tags, and blocked status.
- Customer-list search covers name, phone, and email, with filters for tags, blocking, order count, spend, and last order.
- Merchants can export all customers or filtered customer results as CSV.
- Dashboard home includes sales, order statuses, average order value, customers, top products, low stock, recent orders, and alerts.
- Analytics supports Today, Yesterday, Last 7 Days, Last 30 Days, and custom ranges with previous-period comparison.
- Headline sales and customer-spend metrics include all orders in every status, including Cancelled and Returned.
- Order count and value are also shown separately for each status.
- Estimated-profit reporting is deferred; product cost remains stored.
- Analytics CSV export uses the currently selected date range and filters.
- Analytics periods and displayed order timestamps use the fixed Cairo timezone in Phase 1.
- Top Products can be ranked by units ordered or total order value.
- Dashboard analytics refresh within approximately one minute.
- Product and variant CSV import previews and validates rows, imports valid rows, and produces an invalid-row error file.
- Product CSV export supports all or filtered products with variants.
- Bulk product actions cover visibility, organization, prices, inventory, and soft deletion.
- CSV import copies product and variant images from public URLs into `lala` storage.
- Existing-record matching uses `lala` ID first and SKU second; unmatched rows create new records.
- Large imports run in the background with a dashboard notification and downloadable results file.
- Conflicting `lala` ID and SKU matches reject the CSV row without modifying either record.
- Large or destructive product bulk actions require a detailed preview and explicit confirmation and produce a result file.
- Checkout does not require or display a Terms and Privacy acceptance control.
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
- Phone-verification code rules, storefront empty-state presentation, and behavior after exhausting three subdomain changes.
- Contact-form delivery, manual merchant order creation, order CSV export, and order bulk updates.
- Cross-country zone composition when a second supported country is introduced.
- Provider-specific credential validation, shipment-field validation, and duplicate-submission protection.
- Product-video file limits, processing, and delivery behavior.
- Coupon abuse mitigation beyond the total usage limit.
- Permanent product deletion behavior.
- Non-shipping integrations, applications, or marketplace scope.
