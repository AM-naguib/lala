# Decision Log

This is an append-only log. A changed decision must be marked **Superseded** and linked to the replacement; historical entries must not be deleted.

## D-001 — Product category

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Build `lala` as a SaaS e-commerce platform comparable in broad category to Easy Orders, Fodera, and Shopify.
- **Reason:** Founder-defined product direction.

## D-002 — Repository visibility and name

- **Date:** 2026-08-14
- **Status:** Accepted; connected
- **Decision:** Use the private GitHub repository `AM-naguib/lala`.
- **Reason:** Founder requested persistent, private project planning and memory in GitHub.

## D-003 — Launch market ambition

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Design for a global launch from day one.
- **Reason:** Founder explicitly selected global rather than Egypt, the Arab region, or another limited geography.
- **Constraint:** D-014 partially defines the operational meaning for the MVP; exact country availability and legal/compliance coverage remain unresolved.

## D-004 — Broad target audience

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** The broad audience is anyone who wants to create an online store.
- **Reason:** Founder does not want the product vision restricted to one merchant category.
- **Constraint:** Phase 1 still needs a concrete first-use-case definition to make MVP tradeoffs; this does not narrow the eventual audience.

## D-005 — Planning cadence and scope

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Ask small batches of questions limited to the current phase, then continuously update planning and memory files.
- **Reason:** Founder wants to plan collaboratively without premature later-phase questions.

## D-006 — Documentation as project memory

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Maintain product vision, current-phase plan, decision log, open questions, compact memory, and change history as version-controlled project documents.
- **Reason:** These files will provide continuity for future work.

## D-007 — MVP product types

- **Date:** 2026-08-14
- **Status:** Superseded by D-010
- **Decision:** Support physical and digital products in the MVP.
- **Reason:** Founder selected both categories for the first release.
- **Constraint:** This was revised after resolving the paid digital-product conflict with COD-only payment.

## D-008 — Storefront publishing and domains

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Give every store a hosted `lala` subdomain and allow the merchant to connect a custom domain optionally.
- **Reason:** Founder selected both the instant hosted option and custom-domain support for the first release.

## D-009 — Initial payment method

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Support cash on delivery (COD) only in the initial release.
- **Reason:** Founder explicitly deferred other payment methods for now.
- **Constraint:** Online payment gateways are outside the current MVP.

## D-010 — Postpone paid digital products

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** The initial selling flow supports physical products; paid digital-product selling and delivery are postponed.
- **Reason:** COD is the only current payment method and cannot naturally collect payment for a non-physical delivery.
- **Effect:** Supersedes D-007 for the initial release. Digital sales can be reconsidered after a suitable payment and delivery flow is defined.

## D-011 — Launch interface languages

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Support Arabic and English in both the merchant dashboard and the customer storefront in the initial release.
- **Reason:** Founder explicitly selected both languages across both surfaces.
- **Open detail:** Whether merchants maintain bilingual catalog content or select one catalog-content language is not yet decided.

## D-012 — One operating currency per store

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Each merchant selects one operating currency for the entire store; all product prices and COD orders in that store use it.
- **Reason:** Founder selected a single merchant-chosen currency rather than multi-currency selling or one platform-wide currency.
- **Open detail:** The rules for changing currency after products or orders exist are not yet decided.

## D-013 — Shipping zones and delivery prices

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** A merchant defines shipping zones and assigns one delivery price to each zone in the initial release.
- **Reason:** Founder selected zone-based shipping pricing rather than one platform-wide rate or pricing after an order is placed.
- **Resolution:** D-016 establishes preloaded subdivisions and D-020 supports both direct subdivision pricing and grouped custom zones.

## D-014 — One operating country per store

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Each store operates and delivers within one merchant-selected country in the initial release; its shipping zones are inside that country.
- **Reason:** Founder selected one country with internal delivery regions instead of multi-country delivery per store.
- **Implication:** The global launch ambition means `lala` can serve merchants in different countries, while an individual MVP store remains single-country.

## D-015 — No tax feature in the initial release

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Do not add a tax section to the initial release. The platform does not configure or calculate tax and does not add a separate tax line to an order.
- **Reason:** Founder explicitly excluded the tax part from the MVP.

## D-016 — Preloaded country geography

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Provide preloaded geographic subdivisions for supported store countries, such as Egypt and its governorates, for merchants to use when configuring shipping.
- **Reason:** Founder prefers ready geographic data instead of requiring each merchant to enter areas manually.
- **Resolution:** D-020 supports both a direct price per subdivision and grouping subdivisions into custom shipping zones.

## D-017 — Optional and extensible shipping-provider connections

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Allow merchants to optionally connect a supported shipping company. Design the provider model so integrations such as Bosta and additional companies can be added over time.
- **Reason:** Founder wants merchants to choose whether to connect a shipping company rather than making a single provider mandatory.
- **Resolution:** D-021 selects Bosta as the first integration while preserving the extensible provider model.

## D-018 — Checkout contact and address field set

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Include name, primary phone, address, city, email, notes, and an alternate phone in the checkout contact/address data model.
- **Reason:** Founder explicitly listed these customer details.
- **Resolution:** D-022 lets each merchant configure which supported fields are required or optional.

## D-019 — Batched GitHub synchronization cadence

- **Date:** 2026-08-14
- **Status:** Superseded by D-042
- **Decision:** Continue updating project memory after each material answer, but push accumulated planning changes to GitHub after every 20 answered planning questions.
- **Reason:** Founder prefers fewer GitHub updates while preserving continuously updated working memory.
- **Override:** An explicit request to push immediately triggers a GitHub synchronization before the 20-question threshold.
- **Counter:** Reset to 0 after the latest push, which already included answers through Q-012.

## D-020 — Two shipping-zone pricing modes

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Support both pricing a preloaded subdivision separately and grouping multiple subdivisions into a named shipping zone with one delivery price.
- **Reason:** Founder selected both approaches so merchants can use precise per-area rates or simpler grouped rates.

## D-021 — Bosta as the first shipping integration

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Build Bosta as the first shipping-company integration, then add other providers through the extensible provider model.
- **Reason:** Founder selected Bosta first while preserving multi-provider expansion.
- **Constraint:** Connecting a shipping provider remains optional for the merchant.

## D-022 — Merchant-configurable checkout requiredness

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Let each merchant configure which supported checkout fields are required and which are optional.
- **Reason:** Different merchants and delivery workflows need different customer data.
- **Open detail:** Provider-specific integrations may require additional validation; those rules are not yet defined.

## D-023 — Cart and Buy Now

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Support both a multi-product cart and a direct Buy Now action in the storefront.
- **Reason:** Founder wants both multi-item shopping and a faster single-product path.

## D-024 — Guest-first checkout with optional accounts

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Customer accounts are optional; guest checkout is the default purchase path, while customers may create or use an account if they want.
- **Reason:** Founder wants checkout to work without forcing registration while retaining optional customer accounts.

## D-025 — Immediate COD order creation

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Create the COD order immediately after the customer submits checkout, without OTP or other pre-verification.
- **Reason:** Founder selected the lowest-friction order-submission flow for the initial release.
- **Implication:** Fraud controls, confirmation operations, and invalid-order handling occur after order creation if introduced later.

## D-026 — Interactive planning questions with recommendations

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Ask planning questions using interactive buttons in batches of up to three. Put the recommended MVP option first and label it “(Recommended)”.
- **Reason:** Founder prefers the interactive format and wants a clear recommendation with each decision.
- **Counter effect:** This is a workflow preference, not an answered product-planning question, so the GitHub synchronization counter remains 6/20.

## D-027 — Core and custom order statuses

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Provide a core set of order statuses and allow merchants to add custom statuses.
- **Reason:** Founder selected a usable default workflow with merchant flexibility.
- **Resolution:** D-055 defines the core status list.
- **Open detail:** Permitted transitions are not yet defined.

## D-028 — Immediate inventory deduction for COD orders

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Deduct inventory immediately when a COD order is created and restore the deducted quantity automatically when that order is cancelled.
- **Reason:** Founder selected immediate stock protection with automatic cancellation recovery.
- **Open detail:** Partial cancellations, returns, edits, and overselling behavior are not yet defined.

## D-029 — Dashboard and email order notifications

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Provide order notifications through the merchant dashboard and email in the initial release.
- **Reason:** Founder selected the recommended baseline channels without adding WhatsApp, SMS, or push notifications at this stage.
- **Resolution:** D-068 defines customer emails, D-070 limits merchant order-event email to new orders, and D-069 separately defines low-stock dashboard and email warnings.

## D-030 — Flexible product variants with independent inventory

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Support flexible product options and variants, such as size and color, and track inventory independently for each variant when inventory tracking is enabled.
- **Reason:** Founder selected flexible options rather than fixed size/color templates or postponing variants.

## D-031 — Optional inventory tracking with required quantity

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Inventory tracking is optional. When a merchant enables it for a product or variant, the merchant must enter the available quantity.
- **Reason:** Some merchants need stock control while others sell without tracked quantities.
- **Resolution:** D-033 defines the zero-stock behavior.

## D-032 — Categories, collections, and tags

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Support categories, collections, and tags for organizing products in the initial release.
- **Reason:** Founder selected all three catalog-organization tools.

## D-033 — Zero inventory blocks purchasing

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** When tracked inventory reaches zero, mark the product or variant Out of Stock and prevent purchase. The merchant can restore availability by adding stock or disabling inventory tracking.
- **Reason:** Founder wants tracked stock to prevent overselling while allowing merchants to switch to untracked selling deliberately.

## D-034 — SKU without barcode in the MVP

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Support SKU for products and variants in the MVP; do not include barcode support at this point.
- **Reason:** Founder selected SKU only.

## D-035 — Product price fields

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Include selling price, compare-at price, and cost for products and variants.
- **Reason:** Founder selected the complete recommended price set to support storefront discounts and merchant margin data.

## D-036 — Multiple product images and optional video

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Allow multiple images for each product and support an optional product video.
- **Reason:** Founder selected the recommended media baseline.
- **Open detail:** Whether videos are uploaded, embedded through external links, or both is not yet defined.

## D-037 — Separate bilingual product fields with a primary language

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Provide separate Arabic and English fields for product content and let the merchant select one primary language.
- **Reason:** Founder selected explicit bilingual authoring rather than automatic translation or a single-language catalog.
- **Open detail:** Fallback behavior when the secondary-language field is empty is not yet defined.

## D-038 — Coupon discounts included

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Include coupon-code discounts in the initial release.
- **Reason:** Founder explicitly accepted coupons.
- **Resolution:** D-039 defers automatic discounts beyond the MVP.
- **Open detail:** Coupon discount types, eligibility, validity, and usage limits remain undecided.

## D-039 — Automatic discounts deferred

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Do not include automatic discounts in the initial release. Campaign discounts require the customer to enter a valid coupon code.
- **Reason:** Founder selected coupons only for the MVP, avoiding automatic-rule evaluation, conflicts, and stacking complexity.

## D-040 — Product video by file upload only

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Merchants add an optional product video by uploading a video file. External video links are not included in the current MVP.
- **Reason:** Founder explicitly selected file upload only.
- **Open detail:** Accepted formats, maximum file size and duration, transcoding, and playback delivery are not yet defined.

## D-041 — Primary-language fallback for missing translations

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** If product content is missing in the visitor's selected language, display the product's primary-language content automatically.
- **Reason:** Founder selected a storefront fallback that keeps products available without requiring both translations before publication.

## D-042 — GitHub synchronization every 50 answers

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Continue updating and committing project memory locally after material answers, but push accumulated planning changes to GitHub after every 50 answered planning questions.
- **Reason:** Founder found the GitHub upload process slow and requested less frequent synchronization.
- **Effect:** Supersedes D-019 before the planned 20-answer upload was performed. The existing post-push counter continues at 20/50 rather than resetting.
- **Override:** An explicit request to push immediately still triggers synchronization before the 50-question threshold.

## D-043 — Percentage, fixed-amount, and free-shipping coupons

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Support three coupon reward types in the MVP: percentage discount, fixed-amount discount, and free shipping.
- **Reason:** Founder selected the complete recommended coupon-type baseline.
- **Resolution:** D-046 limits coupon applicability to the whole order in the MVP.

## D-044 — Coupon validity, total usage limit, and minimum order

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Let merchants configure a coupon validity period, a total usage limit, and a minimum order amount.
- **Reason:** Founder selected the recommended baseline controls.
- **Resolution:** D-047 limits each order to one coupon.
- **Resolution:** D-051 defines the minimum-order calculation basis.
- **Resolution:** D-054 excludes per-customer usage limits from the MVP.

## D-045 — Published and Hidden product states only

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Use two product publication states in the MVP: Published and Hidden. Do not add separate Draft or Archived states.
- **Reason:** Founder explicitly selected the simpler two-state model.
- **Resolution:** D-048 defines product deletion as soft deletion.
- **Resolution:** D-049 makes Published the default state for new products.

## D-046 — Coupons apply to the whole order only

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Apply coupons to the entire order in the MVP. Do not target coupons to selected products or collections at this stage.
- **Reason:** Founder selected whole-order coupons for the current release.

## D-047 — One coupon per order

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Allow a customer to apply only one coupon code to an order.
- **Reason:** Founder selected the recommended simple combination rule, avoiding coupon stacking.

## D-048 — Soft-delete products

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Deleting a product performs a soft delete rather than physically removing its stored record.
- **Reason:** Founder explicitly selected soft deletion, allowing historical references to remain intact.
- **Resolution:** D-050 provides merchant restoration through a Trash view.
- **Resolution:** D-053 returns restored products as Hidden.
- **Open detail:** Permanent purge is not yet defined.

## D-049 — New products are Published on save

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** A newly created product becomes Published immediately when the merchant saves it.
- **Reason:** Founder explicitly selected immediate publication rather than defaulting to Hidden or asking for a state during creation.
- **Resolution:** D-052 requires a primary-language name and selling price.

## D-050 — Restore products from Trash

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Provide a Trash view in the merchant dashboard with an action to restore soft-deleted products.
- **Reason:** Founder selected the recommended self-service restoration flow.
- **Resolution:** D-053 returns restored products as Hidden.

## D-051 — Coupon minimum based on product subtotal

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Evaluate a coupon's minimum-order requirement against the products subtotal before the coupon discount, excluding shipping charges.
- **Reason:** Founder selected the recommended stable calculation basis, independent of delivery cost.

## D-052 — Minimum fields for immediate product publication

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Require a product name in the store's primary language and a selling price before the product can be saved and Published.
- **Reason:** Founder selected the recommended minimal publishing requirements.

## D-053 — Restored products return as Hidden

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** A product restored from Trash returns in the Hidden state and requires merchant review before it is republished.
- **Reason:** Founder selected the safer restoration behavior.

## D-054 — No per-customer coupon limit in the MVP

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Do not enforce a coupon usage limit per customer in the MVP. Only the coupon's configured total usage limit applies.
- **Reason:** Founder selected the simpler rule for a guest-first checkout where customer identity is not reliably authenticated.

## D-055 — Core order status list

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Include New, Confirmed, Processing, Shipped, Delivered, Cancelled, and Returned as the built-in order statuses. Merchants can still add custom statuses under D-027.
- **Reason:** Founder selected the recommended end-to-end COD fulfillment baseline.
- **Resolution:** D-065 allows free movement between all statuses without a default path.
- **Resolution:** D-066 makes custom statuses informational only; their ordering, placement, and color presentation remain open.

## D-056 — Merchant can edit all order data

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Allow the merchant to edit all order data after a COD order is created.
- **Reason:** Founder explicitly requested unrestricted field scope rather than limiting edits to customer or address data.
- **Resolution:** D-058 allows edits in every status, D-059 defines automatic recalculation, and D-060 requires an audit history.

## D-057 — No guest self-service cancellation

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** A guest customer cannot cancel an order through self-service; the customer must contact the merchant, who handles cancellation.
- **Reason:** Founder explicitly declined customer self-service cancellation in the MVP.

## D-058 — Order editing in every status

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Allow merchants to edit all order data in any status, including after the order has been Delivered.
- **Reason:** Founder explicitly selected unrestricted editing through and after fulfillment.
- **Constraint:** D-060 requires a detailed audit history so post-delivery edits remain traceable.

## D-059 — Automatic totals and inventory-difference recalculation

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** When order products or quantities are edited, automatically recalculate the order totals and adjust inventory by the resulting quantity difference.
- **Reason:** Founder selected automatic consistency rather than requiring manual total or stock corrections.
- **Open detail:** Status-specific behavior for Cancelled and Returned orders remains to be defined.

## D-060 — Detailed order edit audit history

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Keep an audit history for order edits that records who made the change, what changed, and when it changed.
- **Reason:** Founder selected the recommended traceability requirement, which is especially important because editing remains available after delivery.

## D-061 — Returns do not automatically restore inventory

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Recording a return does not automatically add the returned quantities back to available inventory.
- **Reason:** Founder explicitly selected non-automatic stock restoration, avoiding the assumption that every returned item is saleable.
- **Resolution:** D-064 requires manual restocking from the product page.

## D-062 — Logical status flow with manual override

- **Date:** 2026-08-14
- **Status:** Superseded by D-065
- **Decision:** Provide a logical default progression for order statuses while allowing merchants to override it manually and move an order to another status.
- **Reason:** Founder selected guided operations without enforcing a rigid workflow.
- **Effect:** Replaced when the founder subsequently chose a fully open status model without a default path.

## D-063 — Partial returns deferred

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Support recording a full-order return in the MVP and defer partial item or quantity returns.
- **Reason:** Founder explicitly postponed the partial-return capability after the distinction was clarified.

## D-064 — Returned stock is adjusted from the product page

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** If a returned item is saleable, the merchant manually increases its inventory from the product page rather than through the return record.
- **Reason:** Founder selected the existing product-inventory workflow instead of adding a return-specific restocking action.

## D-065 — Fully open order-status movement

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Allow merchants to move an order freely between all statuses, without a suggested default path or enforced transition sequence.
- **Reason:** Founder selected a fully open status model after previously choosing a logical flow with override.
- **Effect:** Supersedes D-062.

## D-066 — Custom statuses are informational only

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Treat merchant-defined custom order statuses as informational labels for organization only. They do not trigger automatic email, inventory, shipping, or other actions in the MVP.
- **Reason:** Founder selected the recommended low-complexity custom-status behavior after the distinction was clarified.
- **Open detail:** Custom-status ordering, placement, and color presentation are not yet defined.

## D-067 — Merchant-initiated shipping-provider submission

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Do not submit orders to a connected shipping provider automatically. The merchant selects the orders to ship and explicitly triggers submission.
- **Reason:** Founder corrected the automatic-shipping assumption and specified merchant-controlled handoff.
- **Resolution:** D-071 supports both individual and bulk selection, and D-072 defines failed-submission handling.

## D-068 — Customer email confirmation and core-status updates

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** When the customer provides an email address, send an order-confirmation email and emails for changes to core order statuses.
- **Reason:** Founder selected the recommended customer email baseline.
- **Constraint:** Custom statuses remain informational under D-066 and do not trigger automatic emails.

## D-069 — Configurable low-stock warnings

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Let the merchant configure a low-stock threshold for each tracked product or variant and send warnings through the dashboard and email when the threshold is reached.
- **Reason:** Founder selected proactive configurable stock warnings rather than waiting for zero inventory.

## D-070 — Merchant order email on new order only

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Send the merchant an order-event email when a new order is created. Do not send merchant emails for later order-status changes or shipping-submission failures in the MVP.
- **Reason:** Founder explicitly selected new-order email only.
- **Constraint:** D-069 remains a separate inventory-warning rule and still sends low-stock warnings through dashboard and email.

## D-071 — Individual and bulk shipping submission

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Let the merchant submit either one order or a selected group of orders to the connected shipping provider.
- **Reason:** Founder selected both individual and bulk submission so merchants can handle isolated orders and daily operational batches.

## D-072 — Failed shipping submission remains Not Sent and retryable

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** If a shipping-provider submission fails, keep the affected order marked as Not Sent, display the failure reason, and provide a manual retry action.
- **Reason:** Founder selected explicit recoverability without silently switching fulfillment modes or adding automatic retries.
- **Constraint:** A bulk submission must preserve and show the result for each affected order independently.
