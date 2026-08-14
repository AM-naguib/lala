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
2. The product is intended to launch globally from day one.
3. The broad intended audience is anyone who wants to create an online store.
4. Planning questions must stay limited to the current phase; do not jump ahead to later phases.
5. Project memory, planning, decisions, open questions, and change history must be updated continuously and synchronized to GitHub.
6. The initial selling flow supports physical products. Paid digital-product selling and delivery are postponed; services are not included at this point.
7. Each store receives a hosted `lala` subdomain and can optionally connect a custom domain.
8. The only payment method in the initial release is cash on delivery (COD); online payment gateways are not part of the current MVP.
9. Arabic and English are required for both the merchant dashboard and customer storefront in the initial release.
10. Each merchant selects one operating currency for the entire store; product prices and COD orders use that currency.
11. Each store operates and delivers within one merchant-selected country in the initial release.
12. The merchant defines shipping zones inside the store's country and sets one delivery price for each zone.
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

## Current interpretation

- “Anyone who wants to create an online store” is the broad vision, not yet a sufficiently narrow first-use-case definition.
- “Global from day one” is partially defined: `lala` can host merchants in different countries, while each MVP store operates in one country. Detailed country availability and legal/compliance coverage remain unresolved.
- The earlier plan to sell physical and digital products in the MVP was narrowed: paid digital selling is postponed because COD has no physical collection event.
- Arabic and English interface support and bilingual catalog entry are confirmed. Products have separate fields for each language and one primary language.
- The rule for changing a store's currency after products or orders exist is not yet decided.
- Shipping-provider-specific data requirements, credentials, successful-submission effects, and non-integrated fallback behavior are not yet defined.
- Shipping-provider submission is merchant-initiated and supports individual or bulk selection. Failed submissions remain Not Sent with the reason and a manual retry action.
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
- **Counter reset point:** after the completed GitHub synchronization containing Q-013 through Q-061.
- **Answered questions since last push:** 0/50.
- **Pending unpushed documentation:** none.

## Next decisions to obtain

1. How does a merchant connect their own shipping-provider account?
2. What happens to the order after a shipping submission succeeds?
3. What fulfillment record is available when no shipping provider is connected?

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
