# Project Memory

> Read this file first whenever work on `lala` resumes. It is the compact source of truth; detailed evidence lives in the linked documents.

## Identity

- **Project name:** lala
- **Product category:** multi-tenant SaaS e-commerce platform.
- **Reference products named by the founder:** Easy Orders, Fodera, and Shopify.
- **Current phase:** Phase 1 — product discovery and MVP definition.
- **Status date:** 2026-08-14 (Africa/Cairo).

## Confirmed decisions

1. The GitHub repository must be private and named `lala`.
2. The product keeps a global long-term ambition, while Phase 1 supports shipping coverage in Egypt only.
3. The broad intended audience is anyone who wants to create an online store.
4. Planning questions must stay limited to the current phase; do not jump ahead to later phases.
5. Project memory, planning, decisions, open questions, and change history must be updated continuously and synchronized to GitHub.
6. The initial selling flow supports physical products. Paid digital-product selling and delivery are postponed; services are not included at this point.
7. Each store receives a hosted `lala` subdomain and can optionally connect a custom domain.
8. The only payment method in the initial release is cash on delivery (COD); online payment gateways are not part of the current MVP.
9. Arabic and English are required for both the merchant dashboard and customer storefront in the initial release.
10. Each merchant selects one operating currency for the entire store; product prices and COD orders use that currency.
11. A store has no store-level operating country; shipping coverage is configured independently through shipping zones.
12. The merchant defines shipping zones and sets one delivery price for each zone.
13. The initial release has no tax section: no tax configuration, automatic calculation, or separate tax line in an order.
14. `lala` provides preloaded geographic subdivisions for supported countries, such as Egypt and its governorates, so merchants select known areas instead of typing all geography manually.
15. Shipping-company connections are optional for merchants. The integration design must support providers such as Bosta and allow other providers to be added over time.
16. Checkout captures these customer contact/address fields: name, primary phone, address, city, email, notes, and an alternate phone.
17. Update project memory continuously, but batch GitHub synchronization after every 50 answered planning questions unless the founder explicitly requests an earlier push.
18. Support both shipping-pricing modes: a separate price for each preloaded subdivision, and custom zones that group multiple subdivisions under one price.
19. Bosta is the first shipping-company integration; additional providers are added later through the extensible provider model.
20. The merchant chooses which supported checkout fields are required and which are optional.
21. The storefront supports both a multi-product cart and a direct Buy Now action.
22. Customer accounts are optional, and guest checkout is the default purchase path.
23. A COD order is created immediately after checkout submission without OTP or other pre-verification.
24. Ask planning questions through interactive buttons in batches of up to three, placing the recommended MVP choice first and labeling it “(Recommended)”.
25. Provide core order statuses and allow merchants to add custom statuses.
26. Deduct inventory immediately when a COD order is created and restore it automatically if the order is cancelled.
27. Provide order notifications through the merchant dashboard and email in the initial release.
28. Products support flexible options and variants, such as size and color, with independent inventory per variant when inventory tracking is enabled.
29. Inventory tracking is optional. If a merchant enables it for a product or variant, entering the available quantity is mandatory.
30. Organize products using categories, collections, and tags.
31. When tracked inventory reaches zero, the product or variant becomes Out of Stock and cannot be purchased. The merchant can restore availability by adding stock or disabling inventory tracking.
32. Support SKU as the product/variant identifier in the MVP; barcode is not included at this point.
33. Product and variant price data includes selling price, compare-at price, and cost.
34. Products support multiple images and an optional video.
35. Product content is entered in separate Arabic and English fields, with one merchant-selected primary language.
36. Coupon-code discounts are included in the initial release.
37. Automatic discounts are deferred beyond the MVP; customers must enter a valid coupon code to receive a campaign discount.
38. Product videos are added by uploading a video file; external video links are not included in the current MVP.
39. When product content is missing in the visitor's selected language, the storefront falls back to the merchant-selected primary-language content.
40. Coupon codes can provide a percentage discount, a fixed-amount discount, or free shipping.
41. Coupons support a validity period, a total usage limit, and a minimum order amount in the MVP.
42. Products have two publication states in the MVP: Published and Hidden. Draft and Archived states are not included.
43. Coupons apply to the entire order in the MVP; product-specific and collection-specific coupon targeting is deferred.
44. A customer can apply only one coupon code to an order.
45. Product deletion uses soft deletion rather than physically removing the record.
46. A newly created product is Published immediately when the merchant saves it.
47. Merchants can restore soft-deleted products from a Trash view in the dashboard.
48. Coupon minimum-order eligibility is calculated from the products subtotal before applying the coupon and excludes shipping charges.
49. A product requires a name in the store's primary language and a selling price before it can be saved and Published.
50. A product restored from Trash returns as Hidden so the merchant can review it before republishing.
51. The MVP does not enforce a coupon usage limit per customer; only the configured total usage limit applies.
52. The built-in order statuses are New, Confirmed, Processing, Shipped, Delivered, Cancelled, and Returned; merchants can still add custom statuses.
53. Merchants can edit all order data after a COD order is created.
54. Guest customers cannot cancel orders themselves; cancellation requires contacting the merchant.
55. Merchants can edit all order data in any order status, including after delivery.
56. Editing order products or quantities automatically recalculates totals and adjusts inventory by the resulting difference.
57. Keep an audit history for every order edit showing who changed what and when.
58. Recording returned items does not automatically restore them to available inventory.
59. Merchants can move orders freely between all statuses; the MVP has no default or enforced status progression.
60. The MVP supports recording a full-order return only; partial item or quantity returns are deferred.
61. If a returned item is saleable, the merchant adds it back to inventory manually from the product page.
62. Merchant-defined custom order statuses are informational labels only and do not trigger automatic email, inventory, shipping, or other actions.
63. Orders are not submitted to a shipping company automatically. The merchant selects the orders to ship and explicitly sends them to the connected provider.
64. When a customer provides an email address, send an order confirmation and email notifications for changes to core order statuses.
65. For tracked inventory, the merchant can define a low-stock threshold per product or variant and receive dashboard and email warnings when it is reached.
66. Send the merchant an order-event email when a new order is created; do not send merchant emails for later order-status changes or shipping-submission failures in the MVP.
67. The merchant can submit either one order or a selected group of orders to the connected shipping provider.
68. If shipping-provider submission fails, keep the affected order marked as Not Sent, show the failure reason, and provide a manual retry action.
69. A merchant connects a supported shipping provider by entering credentials for the merchant's own account with that provider.
70. After the provider accepts a shipment, store the shipment number, provider shipment status, and shipping label; do not change the order's core status automatically.
71. If no shipping provider is connected, the merchant fulfills the order by changing its core status only; do not add a manual carrier or tracking record in the MVP.
72. A merchant creates a `lala` account using an email address, phone number, and password.
73. Initial store setup requires the store name, desired `lala` subdomain, operating currency, and primary language; it does not ask for a store country.
74. The storefront becomes publicly accessible immediately after initial store setup is completed; adding a product or pressing a separate publish action is not required.
75. Verify the merchant's phone number through a WhatsApp message during account creation; merchant email verification is not required in the MVP.
76. The merchant can change the store's `lala` subdomain from settings at most three times per store. The previous subdomain does not redirect and remains reserved for 10 days.
77. The merchant can change the store's operating currency at any time, including after orders exist.
78. Existing orders retain the destination information and currency captured when each order was created, even if current store settings later change.
79. Changing the store currency keeps the numeric values of all existing product and variant price fields unchanged and only changes the displayed currency code or symbol; no automatic conversion occurs.
80. A store can configure shipping zones in any number of countries that the platform supports.
81. Egypt is the only platform-supported shipping country in Phase 1, so customers do not choose between multiple delivery countries yet.
82. Hide the country field at checkout and store Egypt automatically for every Phase 1 order.
83. Provide preloaded Egyptian geography in two levels: governorate, then city or area, for checkout and shipping configuration.
84. If the customer's selected address is outside all merchant-enabled shipping zones, prevent order submission and explain that shipping is unavailable.
85. Prevent the same city or area from belonging to more than one active shipping zone in the same store.
86. Calculate and display the shipping price immediately after the customer selects the governorate and city or area.
87. If a city or area is missing from the preloaded Egypt list, the merchant can add a custom location under its governorate.
88. A merchant-added custom city or area is visible only within that merchant's store and does not alter the platform-wide geography list.
89. A merchant can set a shipping-zone price to zero, which the storefront displays as free shipping.
90. Changing a zone's shipping price does not modify existing orders; orders created after the change use the new price immediately.
91. One merchant account can own multiple stores, and each store has independent settings and data.
92. Only the merchant account owner can access and manage stores in the MVP; inviting team members is deferred.
93. When the owner removes a store, disable it without deleting any stored store data.
94. Do not impose a maximum number of stores per merchant account in the MVP.
95. A disabled store can be reactivated only by `lala` support, not directly by the owner.
96. Visitors opening a disabled store's hosted subdomain or custom domain see a clear page stating that the store is currently unavailable.
97. Offer multiple ready-made storefront themes in the MVP.
98. Let merchants customize store logo, colors, fonts, and favicon.
99. Build the storefront homepage from predefined sections that merchants can add, hide, and reorder.
100. Let merchants preview a theme before applying it, and preserve storefront content when switching themes.
101. Include Hero or Slider as the currently selected initial homepage section type.
102. Include editable About Us, Contact, Shipping and Returns, Privacy Policy, and Terms and Conditions pages.
103. Allow merchants to create an unlimited number of additional custom static pages.
104. Static pages use separate Arabic and English fields and fall back to the store's primary-language content when a translation is missing.
105. The Contact page includes both a customer contact form and merchant-configured store contact details.
106. Storefront product search matches the product name only; descriptions, SKUs, and tags are excluded from search.
107. Storefront product filters include price, category or collection, availability, and product options.
108. Storefront product sorting options are Featured, Newest, Price Low to High, Price High to Low, and Name.
109. Long storefront product lists load automatically as the customer scrolls.
110. Featured is the default product-list sort.
111. Merchants manually select Featured products and control their display order.
112. Storefront product cards show the product image, name, selling price, compare-at price when present, and inventory state.
113. Out of Stock products remain in their assigned list position and display an Out of Stock label.
114. A product page automatically selects the first available variant, while allowing the customer to change the selected options.
115. Every variant can independently define selling price, compare-at price, cost, SKU, inventory quantity, and image.
116. Unavailable or Out of Stock variant options remain visible but disabled with a clear Unavailable label.
117. Customers can change product quantity on the product page and in the cart, up to available tracked inventory.
118. Product pages automatically select related products from the same category or collection.
119. Adding an item to the cart displays a success message and keeps the customer on the current page without automatically opening the cart.
120. A guest customer's cart remains available on the same device for 30 days.
121. Before order submission, cart items update to current prices and quantities above current stock are reduced to the available amount, with a clear customer notice.
122. Buy Now opens checkout for the currently selected product only and leaves every existing cart item unchanged.
123. Checkout is presented as one complete page rather than multiple steps.
124. Customers can enter and apply a coupon code in both the cart and checkout, with the same applied coupon state shared between them.
125. After successful order submission, the confirmation page shows the order number, order summary, and current status, but not the tracking link.
126. A guest customer tracks an order through a unique link sent only to the provided email address; order-number-and-phone lookup is not included.
127. Checkout does not require acceptance of Terms and Conditions or Privacy Policy, and those policy links do not have to appear during checkout.
128. If the customer does not provide an email address, the unique tracking link is shown once on the successful-order page as an exception to email delivery.
129. The guest tracking page shows order status and progression, products, totals, and available shipment details from the connected shipping provider.
130. The initial order-confirmation email includes order number, order summary, delivery address, totals, current status, and the unique tracking link.
131. A customer can optionally create an account using either an email address or a phone number plus a password.
132. After a matching email address or phone number is verified, earlier guest orders are linked to the new customer account automatically.
133. A signed-in customer can view order history and tracking, manage saved addresses, and manage a customer profile.
134. A customer account belongs to one storefront and is not shared across other `lala` stores.
135. Verify an email-based customer account through an email link and a phone-based account through a WhatsApp code.
136. Customer password recovery uses an email reset link or WhatsApp code according to the account's verified sign-in channel.
137. A customer can save an unlimited number of delivery addresses and choose one default address.
138. A changed customer email address or phone number replaces the old value only after the new value is verified.
139. Deleting a customer account removes the account profile and saved addresses but retains historical order records for the store.
140. Signed-in customers cannot cancel orders themselves and must contact the merchant, matching the guest-customer flow.
141. Repeat Order adds currently available products to the cart at current prices and informs the customer about unavailable products or other changes.
142. Checkout preselects the default saved address; the customer can select or edit an address, and changes are saved only after explicit customer consent.
143. Merchant customer records automatically consolidate guest and registered-customer orders by matching normalized email address or phone number, with a review alert when identifiers conflict.
144. Merchants can add internal notes and tags to customer records; these are not customer-visible.
145. Merchants can block new order submissions by customer email address or phone number without changing existing orders.
146. Merchant customer records show identity and contact data, addresses, order history and count, total and average spend, last order, tags, and blocked status.
147. Merchant customer-list search covers name, phone number, and email address; filters cover tags, blocked status, order count, spend, and last-order date.
148. Merchants can export either all customer records or the current filtered result set as a CSV file.
149. The merchant dashboard home shows sales, orders by status, average order value, customers, top products, low-stock items, recent orders, and operational alerts.
150. Analytics date controls include Today, Yesterday, Last 7 Days, Last 30 Days, and a custom range, with comparison to the immediately previous equivalent period.
151. Headline sales and customer-spend metrics include every order regardless of status, including Cancelled and Returned orders, without deducting those statuses.
152. Show order count and order value separately for every status beside the headline all-orders sales total.
153. Phase 1 does not include estimated-profit reporting; product cost remains stored for merchant reference and future use.
154. Analytics and sales reports can be exported as CSV using the currently selected date range and filters.
155. Phase 1 analytics periods and displayed order timestamps use the fixed Cairo timezone.
156. Merchants can switch Top Products ranking between units ordered and total order value.
157. Dashboard analytics reflect order and catalog changes within approximately one minute.
158. Product and variant CSV import provides preview and validation, imports valid rows, and produces an error file for invalid rows.
159. Merchants can export all products or the current filtered product result set, including variant rows, as CSV.
160. Product bulk editing supports Published and Hidden state changes, category, collection, and tag organization, price and inventory updates, and soft deletion.
161. CSV imports accept public product and variant image URLs, and `lala` downloads and stores its own copies instead of hotlinking them.
162. CSV import matches an existing record by `lala` ID first and SKU second; a row without either match creates a new product or variant.
163. Large CSV imports run as background jobs and provide a dashboard completion notification plus a downloadable results file.
164. If a CSV row's `lala` ID and SKU identify different existing records, reject the row as an error and modify neither record.
165. Before a large or destructive product bulk action, show the affected record count and proposed changes, require explicit confirmation, and generate a results file.

## Current interpretation

- “Anyone who wants to create an online store” is the broad vision, not yet a sufficiently narrow first-use-case definition.
- The global ambition is now a later expansion direction rather than full Phase 1 country coverage. Phase 1 shipping is Egypt only, although the model allows a store to use any number of platform-supported countries when more are introduced.
- The earlier plan to sell physical and digital products in the MVP was narrowed: paid digital selling is postponed because COD has no physical collection event.
- Arabic and English interface support and bilingual catalog entry are confirmed. Products have separate fields for each language and one primary language.
- Merchant sign-up requires WhatsApp phone-number verification only. Code lifetime, resend rules, and attempt limits are not yet defined.
- Currency can change after orders exist. Historical orders keep their original destination and currency snapshots. Current catalog price numbers remain unchanged when the currency code changes, so a value of 100 becomes 100 in the newly selected currency without conversion.
- Because the store has no operating country, shipping zones are independent from store identity. Egypt is the only supported shipping country in Phase 1; cross-country zone composition is deferred until a second country is introduced.
- Egypt is implicit at checkout. Customers select a governorate and then a city or area from preloaded geography; checkout cannot continue when that location is not covered by an enabled merchant zone.
- Active shipping zones cannot overlap at the city or area level. Shipping cost appears as soon as the location is selected, and merchants can extend their own geography with custom cities or areas.
- Custom locations remain store-specific. Zero-price zones provide free shipping. Every order snapshots its shipping price at creation, while later orders use the current zone price.
- A changed subdomain stops serving the store without redirecting, remains reserved for 10 days, and each store has a maximum of three hosted-subdomain changes.
- The store is public immediately after onboarding and may initially be empty. Storefront empty-state presentation is not yet defined.
- The storefront supports multiple ready themes, theme preview with content preservation, brand controls, and reorderable predefined homepage sections. Hero or Slider is the initial selected section type. Five built-in pages plus unlimited custom pages use bilingual fields with primary-language fallback. Contact includes a form and store details; form-delivery behavior remains unresolved.
- Storefront catalog discovery uses product-name-only search, filters for price, category or collection, availability, and product options, and sorting by Featured, Newest, ascending or descending price, and Name. Featured is the default sort, Featured products are selected and ordered manually by the merchant, and long product lists load automatically as the customer scrolls.
- Product cards include image, name, selling and compare-at prices, and inventory state. Out of Stock products remain in their current list positions with a clear label. Variant products initially select the first available variant automatically, after which the customer can change options.
- Variant-level commerce data includes independent selling price, compare-at price, cost, SKU, inventory quantity, and image.
- Unavailable variants stay visible as disabled choices. Customers can select quantity on both the product page and cart within available-stock limits. Related products are generated automatically from the same category or collection.
- Add to Cart uses lightweight success feedback without navigation or an automatic cart drawer. Guest carts persist for 30 days on the same device. Prices and available stock are revalidated before order submission, with quantity correction and a visible change notice.
- Buy Now uses an isolated single-product checkout without modifying the saved cart. The normal checkout is a one-page flow, and the same coupon can be entered from either the cart or checkout.
- Successful checkout shows order number, summary, and status. Guest tracking uses a unique link sent by email; when no email exists, the link is shown once on the success page. There is no order-number-and-phone lookup. The tracking page contains status progression, products, totals, and shipment details. Store policies remain accessible as static pages but are not required in checkout and have no acceptance checkbox.
- Optional customer accounts support email-or-phone credentials with a password. Verified contact matching links earlier guest orders automatically, and the account provides order history and tracking, saved addresses, and profile management.
- Customer identity is isolated per storefront. Verification and password recovery follow the chosen channel: email links for email accounts and WhatsApp codes for phone accounts.
- Customer accounts support unlimited saved addresses with one default. Contact changes are pending until the new value is verified. Account deletion removes profile and saved-address data while preserving the store's historical transaction records.
- Signed-in customers follow the same merchant-contact cancellation policy as guests. Repeat Order reconstructs a cart from current catalog data and reports differences. Checkout preselects the default address without silently overwriting saved addresses after a one-time edit.
- Merchant customer management consolidates orders by normalized email or phone and flags conflicts, supports internal notes and tags, and allows identifier-based blocking of future order submissions while preserving order history.
- Customer records and lists expose complete identity, address, order, value, annotation, and blocking information, with focused search and filters. Customer CSV export supports both all records and the current filtered selection. Total and average customer spend include orders in every status.
- The merchant dashboard combines sales and order KPIs, customers, product performance, stock warnings, recent activity, and operational alerts. Analytics supports common and custom periods with previous-period comparisons. Per founder direction, headline sales and customer-spend metrics are gross created-order values across every status, including Cancelled and Returned; separate status views remain necessary for interpretation.
- Status views expose both count and value for every order status. Profit reporting is deferred even though cost data is stored. Analytics CSV export preserves the selected reporting period and filters.
- Reporting uses Cairo time across Phase 1 stores. Top Products supports units and order-value ranking modes, and operational analytics refresh within approximately one minute.
- Catalog bulk tooling includes partial-success CSV import with validation feedback, all-or-filtered product and variant CSV export, and bulk lifecycle, organization, price, inventory, and soft-delete actions.
- Imported media is copied from public URLs into `lala` storage. Round-trip updates prefer `lala` IDs and fall back to SKU, while unmatched rows create catalog records. Large imports do not block the dashboard and return structured completion results.
- Conflicting CSV identities are rejected safely without modifying either candidate record. Large or destructive bulk catalog actions require a detailed preview and explicit confirmation, then return a result file.
- Merchant accounts can own unlimited stores, but access is owner-only in the MVP. Store removal means deactivation with retained data, reactivation is support-only, and visitors see a store-unavailable page while disabled.
- Provider credentials belong to each merchant's own shipping account and must be stored securely outside source control. Provider-specific required fields and credential-validation behavior are not yet defined.
- Shipping-provider submission is merchant-initiated and supports individual or bulk selection. Failed submissions remain Not Sent with the reason and a manual retry action.
- Successful submission stores provider shipment data and a label without changing the core order status. A store without an integration manages fulfillment through order statuses only.
- Order statuses are freely selectable. Customer emails cover confirmation and core-status changes; merchant order-event email covers new orders only. Low-stock warnings remain separate dashboard and email notifications.
- Because editing remains available after delivery, downstream reporting behavior and status-specific inventory safeguards still need definition; the audit history preserves the original change trail.
- Custom-status placement, colors, and ordering are not yet defined.
- Coupon abuse mitigation beyond the total usage limit is not yet defined.
- Permanent product deletion behavior is not yet defined.
- The remaining MVP feature set and technical architecture are not decided yet.

## Active objective

Define a coherent Phase 1 MVP by answering only the decisions that materially affect the first usable release.

## Current blockers

- No repository blocker. The private source repository is `https://github.com/AM-naguib/lala` and is the synchronization target for project memory and planning.

## GitHub sync status

- **Cadence:** push after every 50 answered planning questions, or earlier on explicit request.
- **Counter reset point:** after the completed GitHub synchronization containing Q-113 through Q-162.
- **Answered questions since last push:** 0/50.
- **Pending unpushed documentation:** none.

## Next decisions to obtain

1. Can merchants create orders manually from the dashboard?
2. Can merchants export all or filtered orders as CSV?
3. Which order fields and actions support bulk updates?

## Guardrails for future sessions

- Never treat an unanswered question as a decision.
- Do not choose a technology stack before the MVP and non-functional requirements justify it.
- Preserve earlier decisions unless the founder explicitly changes them.
- When a decision changes, mark the old one as superseded; do not erase its history.
- Ask only a small batch of questions about the active phase.

## Detailed references

- Product direction: [`01-PRODUCT-VISION.md`](01-PRODUCT-VISION.md)
- Current phase: [`02-PHASE-1.md`](02-PHASE-1.md)
- Decisions: [`03-DECISIONS.md`](03-DECISIONS.md)
- Open questions: [`04-OPEN-QUESTIONS.md`](04-OPEN-QUESTIONS.md)
- History: [`05-CHANGELOG.md`](05-CHANGELOG.md)
