Warning: truncated output (original token count: 29587)
Total output lines: 1972

# Decision Log

This is an append-only log. A changed decision must be marked **Superseded** and linked to the replacement; historical entries must not be deleted.

## D-001 — Product category

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Build `lala` as a SaaS e-commerce platform comparable in broad category to Easy Orders, Fodera, and Shopify.
- **Reason:** Founder-defined product direction.

## D-002 — Repository visibility and name

- **Date:** 2026-08-14
- **Status:** Superseded by D-250
- **Decision:** Use the private GitHub repository `AM-naguib/lala`.
- **Reason:** Founder originally requested persistent, private project planning and memory in GitHub.

## D-003 — Launch market ambition

- **Date:** 2026-08-14
- **Status:** Refined by D-088
- **Decision:** Design for a global launch from day one.
- **Reason:** Founder explicitly selected global rather than Egypt, the Arab region, or another limited geography.
- **Constraint:** D-014 partially defines the operational meaning for the MVP; exact country availability and legal/compliance coverage remain unresolved.
- **Effect:** D-088 limits operational Phase 1 shipping coverage to Egypt while preserving global expansion as a later product ambition.

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
- **Status:** Superseded by D-084
- **Decision:** Each store operates and delivers within one merchant-selected country in the initial release; its shipping zones are inside that country.
- **Reason:** Founder selected one country with internal delivery regions instead of multi-country delivery per store.
- **Implication:** The global launch ambition means `lala` can serve merchants in different countries, while an individual MVP store remains single-country.
- **Effect:** D-084 removes the store-level operating country entirely; shipping coverage is now configured independently.

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
- **Status:** Partially superseded by D-215
- **Decision:** Provide a core set of order statuses and allow merchants to add custom statuses.
- **Reason:** The core-status requirement remains, but D-215 replaces custom statuses with a separate Labels field.
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
- **Status:** Partially superseded by D-215
- **Decision:** Include New, Confirmed, Processing, Shipped, Delivered, Cancelled, and Returned as the built-in order statuses. Merchants can still add custom statuses under D-027.
- **Reason:** The core list remains accepted, but D-215 removes custom statuses from the status field and uses separate Labels instead.
- **Resolution:** D-065 allows free movement between all statuses without a default path.
- **Resolution:** D-066 makes custom statuses informational only; their ordering, placement, and color presentation remain open.
- **Revision:** D-215 later replaces custom statuses with separate order Labels.

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
- **Status:** Superseded by D-215
- **Decision:** Treat merchant-defined custom order statuses as informational labels for organization only. They do not trigger automatic email, inventory, shipping, or other actions in the MVP.
- **Reason:** D-215 formalizes these classifications as a separate Labels field rather than status values.
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

## D-073 — Merchant-owned shipping-provider credentials

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Let each merchant connect a supported shipping provider by entering credentials for the merchant's own account with that provider.
- **Reason:** Founder selected direct merchant account ownership rather than platform-managed shipping accounts.
- **Constraint:** Credentials are secrets and must be stored securely; they must never be written to project documentation, source control, or logs.

## D-074 — Successful submission stores shipment data without changing order status

- **Date:** 2026-08-14
- **Status:** Partially superseded by D-213
- **Decision:** After a shipping provider accepts a submission, store the provider shipment number, provider shipment status, and shipping label. Do not automatically change the order's core status.
- **Reason:** Shipment-data storage remains accepted, but D-213 later replaced manual-only core-status control for Bosta events with automatic synchronization.

## D-075 — Status-only fulfillment without a provider integration

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** If a merchant has not connected a shipping provider, fulfillment is represented only by changing the order's core status. Do not store a manual carrier name or tracking number in the MVP.
- **Reason:** Founder explicitly selected the simplest non-integrated workflow.

## D-076 — Merchant sign-up with email, phone, and password

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Require an email address, phone number, and password to create a merchant account.
- **Reason:** Founder explicitly selected these three account-creation fields.
- **Resolution:** D-079 requires phone verification only.

## D-077 — Required initial store settings

- **Date:** 2026-08-14
- **Status:** Partially superseded by D-084
- **Decision:** During initial onboarding, require the merchant to enter the store name, select the desired `lala` subdomain, operating country, operating currency, and primary language.
- **Reason:** Founder selected the recommended minimum setup set needed to create a usable store identity and operating baseline.
- **Effect:** D-084 removes operating country from initial setup. Store name, subdomain, currency, and primary language remain required.

## D-078 — Storefront is public immediately after setup

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Make the storefront publicly accessible immediately after the merchant completes initial setup. Do not require the merchant to add a product or press a separate store-publish action first.
- **Reason:** Founder selected immediate availability after setup.
- **Implication:** A newly public storefront can be empty until the merchant adds the first product.

## D-079 — Verify merchant phone number only

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Require verification of the merchant's phone number during sign-up. Do not require merchant email verification in the MVP.
- **Reason:** Founder explicitly selected phone-number verification.
- **Resolution:** D-086 selects WhatsApp as the only verification delivery channel. Code lifetime, resend rules, and attempt limits remain undecided.

## D-080 — Subdomain changes without redirect

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Let the merchant change the hosted `lala` subdomain from store settings. The previous subdomain stops serving the store and does not redirect to the new subdomain.
- **Reason:** Founder selected a self-service change without preserving the old URL through a redirect.
- **Resolution:** D-085 reserves the previous subdomain for 10 days and limits each store to three hosted-subdomain changes.

## D-081 — Store country and currency can change at any time

- **Date:** 2026-08-14
- **Status:** Partially superseded by D-084
- **Decision:** Let the merchant change the store's operating country and operating currency at any time, including after the store has received orders.
- **Reason:** Founder explicitly selected unrestricted changes rather than locking either setting after the first order.
- **Constraint:** The store still has one active country and one active currency at a time.
- **Resolution:** D-082 preserves historical order snapshots and D-083 defines existing catalog-price behavior. Shipping-zone behavior remains open.
- **Effect:** D-084 removes the store-country setting, so only unrestricted currency changes remain applicable.

## D-082 — Historical orders preserve country and currency snapshots

- **Date:** 2026-08-14
- **Status:** Partially superseded by D-084
- **Decision:** Keep the operating country and currency captured when each order was created. Later store-country or store-currency changes do not rewrite historical orders.
- **Reason:** Founder selected immutable historical context so old orders remain accurate.
- **Effect:** D-084 removes the store operating country. Historical currency and recorded delivery-destination data remain preserved; there is no store-country setting to snapshot.

## D-083 — Currency changes keep existing numeric prices unchanged

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** When the merchant changes the store currency, keep the numeric values of all existing product and variant selling prices, compare-at prices, and costs unchanged. Change only the currency code or symbol and perform no conversion.
- **Reason:** Founder explicitly selected retaining the same numbers rather than manual or automatic conversion.
- **Implication:** For example, a numeric price of 100 remains 100 after the currency change, but it is displayed in the newly selected currency.

## D-084 — No store-level operating country

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Do not assign an operating country to a store. Shipping geography is configured independently through shipping zones rather than activated, hidden, or replaced by changing a store-country setting.
- **Reason:** Founder explicitly corrected the previous model and stated that the store has no country.
- **Effect:** Supersedes D-014, removes country from D-077 onboarding, and removes the country-change portion of D-081 and D-082.
- **Resolution:** D-087 permits any number of platform-supported shipping countries per store, and D-088 makes Egypt the only supported Phase 1 country. Cross-country zone composition is deferred until a second country is supported.

## D-085 — Ten-day old-subdomain reservation and three-change limit

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** After a hosted-subdomain change, reserve the previous subdomain for 10 days without redirecting it. Limit each store to a maximum of three hosted-subdomain changes.
- **Reason:** Founder explicitly selected the reservation duration and change limit.

## D-086 — Merchant phone verification through WhatsApp only

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Deliver the merchant phone-verification code through WhatsApp only in the MVP.
- **Reason:** Founder explicitly selected WhatsApp rather than SMS or a merchant choice of channels.

## D-087 — Any number of platform-supported shipping countries per store

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Allow one store to configure shipping zones in any number of countries that `lala` supports.
- **Reason:** Founder selected no per-store country-count limit.
- **Constraint:** D-088 limits the actual Phase 1 supported-country catalog to Egypt only.

## D-088 — Egypt-only shipping coverage in Phase 1

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Make Egypt the only supported shipping country in Phase 1. Customers do not choose between multiple delivery countries while Egypt is the only available country.
- **Reason:** Founder narrowed current shipping availability to Egypt only.
- **Effect:** Refines D-003 from global launch coverage to global expansion ambition and postpones cross-country zone behavior until another country is supported.
- **Resolution:** D-089 hides the country field and stores Egypt automatically, D-090 defines the preloaded geography depth, and D-091 blocks uncovered addresses.

## D-089 — Egypt is implicit at checkout

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Hide the delivery-country field from Phase 1 checkout and store Egypt automatically on the order.
- **Reason:** Founder selected the recommended single-country checkout behavior for the Egypt-only MVP.

## D-090 — Preloaded governorate then city or area

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Provide preloaded Egyptian geography in two checkout and shipping-configuration levels: first governorate, then city or area.
- **Reason:** Founder selected a structured location hierarchy rather than governorate-only pricing or free-text cities.

## D-091 — Uncovered locations cannot submit an order

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** If the customer's selected governorate and city or area are outside every merchant-enabled shipping zone, prevent order submission and show that shipping is unavailable to the selected location.
- **Reason:** Founder selected explicit blocking rather than accepting an order with free or unresolved shipping cost.

## D-092 — Prevent overlap between active shipping zones

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Prevent the same city or area from belonging to more than one active shipping zone in the same store.
- **Reason:** Founder selected the recommended conflict-free model rather than resolving overlapping prices by rate or priority.

## D-093 — Show shipping price immediately after location selection

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Calculate and display the shipping price immediately after the customer selects the governorate and city or area at checkout.
- **Reason:** Founder selected early price visibility rather than delaying delivery cost until the final step or after order creation.

## D-094 — Merchant can add missing custom geography

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Allow a merchant to add a custom city or area under an Egyptian governorate when that location is missing from the preloaded list.
- **Reason:** Founder selected merchant self-service rather than free-text customer geography or waiting for platform administration.
- **Resolution:** D-095 makes merchant-added locations store-specific.

## D-095 — Custom geography is store-specific

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Make a merchant-added custom city or area visible only within that merchant's store. Do not add it automatically to the platform-wide geography list.
- **Reason:** Founder selected the recommended isolated customization model.

## D-096 — Zero-price zones provide free shipping

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Allow a merchant to set a shipping-zone price to zero and display it to customers as free shipping.
- **Reason:** Founder selected zone-level free shipping without requiring a coupon.

## D-097 — Zone-price changes affect only later orders

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Preserve the shipping price captured by every existing order. After a merchant changes a zone's price, orders created afterward use the new price immediately.
- **Reason:** Founder selected immutable historical order totals with immediate application to new purchases.

## D-098 — Multiple independent stores per merchant account

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Allow one merchant account to own multiple stores, with independent settings and data for each store.
- **Reason:** Founder selected multi-store ownership rather than one store per account or a parent-and-branch model.
- **Resolution:** D-101 makes the store count unlimited in the MVP.

## D-099 — Owner-only store access in the MVP

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Allow only the merchant account owner to access and manage the account's stores in the MVP. Do not include team-member invitations or roles.
- **Reason:** Founder explicitly selected owner-only access for now.

## D-100 — Store removal disables without deleting data

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** When the owner removes a store from active use, disable the store without deleting its stored data.
- **Reason:** Founder selected data-preserving deactivation rather than permanent deletion or time-limited soft deletion.
- **Resolution:** D-102 makes reactivation support-only and D-103 defines the disabled-store visitor page.

## D-101 — Unlimited stores per merchant account

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Do not impose a maximum number of stores that one merchant account can own in the MVP.
- **Reason:** Founder explicitly selected an unlimited store count.

## D-102 — Disabled-store reactivation through support only

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Require the owner to contact `lala` support to reactivate a disabled store; do not provide owner self-service reactivation in the MVP.
- **Reason:** Founder selected support-controlled restoration.

## D-103 — Disabled stores show an unavailable page

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** When a visitor opens a disabled store's hosted subdomain or custom domain, show a clear page stating that the store is currently unavailable.
- **Reason:** Founder selected an explicit visitor-facing status rather than a 404 page or redirect to the `lala` website.

## D-104 — Multiple ready-made storefront themes

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Offer multiple ready-made storefront themes in the MVP.
- **Reason:** Founder selected theme choice rather than one default theme or a completely free design editor.

## D-105 — Logo, colors, fonts, and favicon brand …7587 tokens truncated…lected the proposed set that prioritizes recent fulfillment work while supporting chronological and value-based review.

## D-185 — Storefront and dashboard-manual order sources

- **Date:** 2026-08-15
- **Status:** Accepted
- **Decision:** Identify each Phase 1 order as either Storefront when submitted by a customer or Dashboard Manual when created by the merchant. No additional source types are included initially.
- **Reason:** Founder selected explicit source visibility for the two order-entry paths in scope.

## D-186 — Individual and bulk invoice and packing-slip printing

- **Date:** 2026-08-15
- **Status:** Accepted
- **Decision:** In addition to shipping-provider labels, allow merchants to print an invoice and a packing slip for one order or a selected group of orders.
- **Reason:** Founder selected both customer-facing and fulfillment-facing documents with individual and bulk operation support.

## D-187 — Complete printable invoice content

- **Date:** 2026-08-15
- **Status:** Accepted
- **Decision:** The printable invoice contains store details, order number and date, customer and delivery details, products and variants, quantities and prices, shipping charge, discount, final total, and order notes.
- **Reason:** Founder selected the complete proposed invoice rather than a reduced summary.

## D-188 — Price-free packing slip

- **Date:** 2026-08-15
- **Status:** Accepted
- **Decision:** The packing slip contains order number, customer name, delivery address, phone number, products and variants, quantities, and order notes. It does not display product prices or order totals.
- **Reason:** Founder selected a fulfillment-focused document that can be used for picking and packing without exposing financial values.

## D-189 — Primary-language-only printed documents

- **Date:** 2026-08-15
- **Status:** Accepted
- **Decision:** Render invoices and packing slips in the store's current primary language only. Do not provide a print-time Arabic or English selector and do not render both languages together.
- **Reason:** Founder selected the simplest consistent language behavior for Phase 1 printed documents.

## D-190 — Rename-only built-in order statuses

- **Date:** 2026-08-15
- **Status:** Accepted
- **Decision:** Allow merchants to rename the displayed labels of New, Confirmed, Processing, Shipped, Delivered, Cancelled, and Returned. Do not allow deleting a built-in status or changing its stable semantic identity and associated automatic behavior.
- **Reason:** Founder chose naming flexibility without permitting the core workflow concepts to be removed.

## D-191 — Bilingual colored and ordered custom statuses

- **Date:** 2026-08-15
- **Status:** Reinterpreted as order-Label presentation by D-215
- **Decision:** A custom order status has separate Arabic and English names, a merchant-selected color, and a merchant-controlled display position among available statuses.
- **Reason:** Founder selected the complete proposed presentation controls.

## D-192 — Replacement migration before deleting an in-use status

- **Date:** 2026-08-15
- **Status:** Superseded by D-215
- **Decision:** When deleting a custom status assigned to existing orders, require the merchant to choose another available status. Move all affected orders to that replacement and only then delete the custom status.
- **Reason:** Labels no longer occupy the required core-status field, so replacement status migration is not part of the revised model.

## D-193 — One shared label for renamed core statuses

- **Date:** 2026-08-15
- **Status:** Accepted
- **Decision:** When a merchant renames a built-in core status, accept one replacement label and display that exact label in both Arabic and English interfaces. Do not provide separate translated rename fields.
- **Reason:** Founder selected one shared name across both interface languages.

## D-194 — Ten custom statuses per store

- **Date:** 2026-08-15
- **Status:** Reinterpreted as a ten-Label limit by D-215
- **Decision:** Limit each store to 10 custom order statuses in Phase 1. Built-in core statuses do not count toward this limit.
- **Reason:** Founder selected a fixed, manageable limit rather than unlimited custom statuses.

## D-195 — Silent audited status-deletion migration

- **Date:** 2026-08-15
- **Status:** Superseded by D-215
- **Decision:** Moving orders to a replacement status as part of deleting a custom status does not send customer status-change emails, even when the replacement is a core status. Record the administrative migration in every affected order's audit history.
- **Reason:** D-215 removes custom statuses from the core-status field; Label changes remain non-notifying organizational metadata.

## D-196 — Ten-minute merchant WhatsApp code

- **Date:** 2026-08-15
- **Status:** Accepted
- **Decision:** A WhatsApp verification code for a merchant phone number expires 10 minutes after issuance.
- **Reason:** Founder selected the proposed balance between delivery delay tolerance and security.

## D-197 — Merchant verification resend throttling

- **Date:** 2026-08-15
- **Status:** Accepted
- **Decision:** Allow another merchant verification-code request after a 60-second cooldown and permit at most five code sends to the same phone number in a rolling hour.
- **Reason:** Founder selected the proposed resend controls to limit abuse while allowing recovery from delayed messages.

## D-198 — Five attempts per merchant verification code

- **Date:** 2026-08-15
- **Status:** Accepted
- **Decision:** Invalidate the current merchant WhatsApp verification code after five incorrect entries. The merchant must request and use a new code to continue verification.
- **Reason:** Founder selected per-code invalidation after five failed attempts rather than a longer account lockout.

## D-199 — Shared customer WhatsApp verification limits

- **Date:** 2026-08-15
- **Status:** Accepted
- **Decision:** Apply the merchant WhatsApp code rules to customer phone verification and phone-based password recovery: 10-minute validity, 60-second resend cooldown, maximum five sends per phone number per rolling hour, and invalidation after five incorrect entries.
- **Reason:** Founder selected one consistent WhatsApp verification policy for merchants and customers.

## D-200 — Customer activation only after contact verification

- **Date:** 2026-08-15
- **Status:** Accepted
- **Decision:** Keep a newly registered customer account inactive until its selected email address or phone number is verified. Before activation, the person can still place orders through the standard guest checkout flow.
- **Reason:** Founder selected verified account identity without blocking the guest-first purchase path.

## D-201 — No fallback activation after failed merchant WhatsApp delivery

- **Date:** 2026-08-15
- **Status:** Accepted
- **Decision:** If merchant phone-verification messages cannot be delivered after the allowed attempts, keep the account unverified. Offer another attempt after the limits reset or contact with `lala` support; do not send an email code or let support bypass verification manually.
- **Reason:** Founder selected the proposed recovery path while preserving WhatsApp-only phone verification.

## D-202 — Permanent hosted-subdomain lock after three changes

- **Date:** 2026-08-15
- **Status:** Accepted
- **Decision:** Once a store uses its three allowed hosted-subdomain changes, permanently disable further hosted-subdomain changes for that store. `lala` support cannot override or reset the limit.
- **Reason:** Founder explicitly selected a final hard stop rather than support-assisted or periodically renewed changes.

## D-203 — Complete empty-store storefront

- **Date:** 2026-08-15
- **Status:** Accepted
- **Decision:** If a public store has no Published products, continue rendering its theme, homepage sections, navigation, and static pages. Product areas display a clear localized message that no products are currently available.
- **Reason:** Founder selected the full storefront experience instead of replacing it with a Coming Soon or unavailable page.

## D-204 — Dashboard Contact inbox with merchant email alerts

- **Date:** 2026-08-15
- **Status:** Accepted
- **Decision:** Store every storefront Contact-form submission in a merchant-dashboard inbox and send the merchant an email notification for each new submission.
- **Reason:** Founder selected persistent in-product message management plus immediate external awareness.

## D-205 — Unlimited custom-domain changes independent of subdomain lock

- **Date:** 2026-08-15
- **Status:** Accepted
- **Decision:** Treat the store's custom domain independently from its hosted-subdomain change counter. Allow the merchant to connect, replace, or remove a custom domain without a numeric change limit, including after the hosted subdomain is permanently locked.
- **Reason:** Founder selected unrestricted custom-domain management while retaining the hard hosted-subdomain limit.

## D-206 — Contact-form field set

- **Date:** 2026-08-15
- **Status:** Accepted
- **Decision:** The storefront Contact form requires customer name, email address, subject, and message. Phone number is supported but optional.
- **Reason:** Founder selected the proposed contact set with guaranteed email reply capability and optional phone context.

## D-207 — Dashboard Contact replies with email delivery and history

- **Date:** 2026-08-15
- **Status:** Accepted
- **Decision:** Allow the merchant to reply to a Contact-form submission from the dashboard. Send the reply to the customer's submitted email address and retain the outgoing reply with the original message as a dashboard conversation history.
- **Reason:** Founder selected an integrated merchant workflow rather than requiring replies from an external mailbox.

## D-208 — Custom domain as primary storefront address

- **Date:** 2026-08-15
- **Status:** Accepted
- **Decision:** After a connected custom domain is verified and active, make it the storefront's primary canonical address and redirect requests from the hosted `lala` subdomain to that custom domain.
- **Reason:** Founder selected one clear customer-facing address rather than serving duplicate storefront URLs independently.

## D-209 — Automatically managed custom-domain HTTPS

- **Date:** 2026-08-15
- **Status:** Accepted
- **Decision:** Issue and renew HTTPS certificates for connected custom domains automatically through `lala`, without an additional certificate charge to the merchant. Do not require merchant-uploaded certificates or permit HTTP-only operation.
- **Reason:** Founder selected secure zero-maintenance custom-domain operation.

## D-210 — Automatic hosted-subdomain fallback

- **Date:** 2026-08-15
- **Status:** Accepted
- **Decision:** If a custom domain is removed or no longer resolves correctly to `lala`, keep the hosted subdomain available, automatically restore it as the storefront's primary address, stop redirecting it to the failed custom domain, and alert the merchant.
- **Reason:** Founder selected continuous storefront availability with an explicit merchant warning.

## D-211 — Immediate Bosta credential validation

- **Date:** 2026-08-15
- **Status:** Accepted
- **Decision:** Test the merchant's Bosta credentials immediately when they are saved. Show Connected on success or the provider's actionable failure reason on failure, and do not mark the connection active when validation fails.
- **Reason:** Founder selected early connection feedback rather than discovering invalid credentials during shipment submission.

## D-212 — Block duplicate active Bosta shipments

- **Date:** 2026-08-15
- **Status:** Accepted
- **Decision:** If an order already has an active Bosta shipment, block another Bosta submission and take the merchant to the existing shipment details instead of creating a duplicate.
- **Reason:** Founder selected strict duplicate prevention with direct access to the current shipment.

## D-213 — Bosta events automatically update core order status

- **Date:** 2026-08-15
- **Status:** Accepted; partially supersedes D-074
- **Decision:** Synchronize Bosta shipment-status changes automatically and use those events to update the order's core status. The normalized event-to-status mapping, manual-override behavior, and customer-email behavior are decided separately.
- **Reason:** Founder explicitly replaced manual-only order-status control for connected Bosta shipments with automatic synchronization.

## D-214 — Normalized Bosta event mapping

- **Date:** 2026-08-15
- **Status:** Accepted
- **Decision:** Map normalized Bosta shipment events to core order statuses as follows: provider Accepted to Processing; provider picked up or in transit to Shipped; delivered to Delivered; cancelled to Cancelled; and returned to Returned. Other delivery exceptions or unrecognized events do not change the core status and instead create a merchant alert.
- **Reason:** Founder selected the proposed lifecycle mapping with alert-only handling for exceptional events.

## D-215 — Separate core order status and merchant Labels

- **Date:** 2026-08-15
- **Status:** Accepted; supersedes the custom-status model in D-027, D-055, D-066, D-192, and D-195
- **Decision:** Keep one controlled core order-status field for known lifecycle states such as New, Confirmed, Processing, Shipped, Delivered, Cancelled, and Returned. Put any additional merchant-defined classification in a separate Labels field rather than creating custom statuses. Existing presentation and count decisions for custom statuses are reinterpreted as Label-definition rules; Labels do not drive lifecycle automation or customer status emails.
- **Reason:** Founder explicitly separated recognized order lifecycle state from arbitrary merchant organization.

## D-216 — Customer emails for Bosta-driven core status changes

- **Date:** 2026-08-15
- **Status:** Accepted
- **Decision:** When a synchronized Bosta event changes the core order status, send the customer the same core-status email that would be sent after a merchant-driven change, provided the order has a customer email address.
- **Reason:** Founder selected consistent customer communication regardless of who caused the core status change.

## D-217 — Mixed-experience first pilot cohort

- **Date:** 2026-08-15
- **Status:** Accepted
- **Decision:** Recruit a mix of merchants who are starting to sell online and merchants who already sell for the first Phase 1 pilot. Do not restrict the cohort to only one experience level.
- **Reason:** Founder selected a mixed cohort to validate both first-time setup and adoption by existing sellers.

## D-218 — Ten-merchant 30-day pilot

- **Date:** 2026-08-15
- **Status:** Accepted
- **Decision:** Run the first Phase 1 pilot with 10 merchants for a 30-day measurement period.
- **Reason:** Founder selected the proposed small, time-boxed validation cohort.

## D-219 — Seven activated merchants with ten real orders each

- **Date:** 2026-08-15
- **Status:** Accepted
- **Decision:** Consider the Phase 1 MVP pilot successful when at least 7 of the 10 participating merchants publish their storefronts and each of those merchants receives at least 10 real customer orders during the 30-day pilot.
- **Reason:** Founder selected a behavioral outcome that measures both successful activation and repeated real-world commerce use.

## D-220 — Prepaid pay-per-order store wallet

- **Date:** 2026-08-15
- **Status:** Accepted
- **Decision:** Use a prepaid pay-per-order monetization model instead of recurring store subscriptions. Give each store its own `lala` operating wallet, funded by the merchant, and charge that wallet for use of the order intake and management flow.
- **Reason:** Founder explicitly replaced the proposed subscription model with usage-based order monetization.

## D-221 — Owner-configurable fee starting at EGP 1 per created order

- **Date:** 2026-08-15
- **Status:** Accepted
- **Decision:** Let the `lala` platform owner configure the fee charged for every order created by a store. Set the initial Phase 1 fee to EGP 1 per created order.
- **Reason:** Founder selected centrally controlled per-order pricing and specified the initial amount.

## D-222 — EGP 10 wallet overdraft with customer-data masking

- **Date:** 2026-08-15
- **Status:** Accepted
- **Decision:** Allow each store wallet to fall as low as EGP -10 while the merchant can continue seeing order customer data. If the balance falls below EGP -10, continue recording orders and applying their configured fees, but replace customer identity, contact, and delivery data in merchant order views with `****`. Restore visibility when the wallet is recharged to EGP -10 or higher.
- **Reason:** Founder selected a limited overdraft followed by data-level access restriction rather than stopping customer order creation.

## D-223 — Founder and AI implementation model

- **Date:** 2026-08-15
- **Status:** Accepted
- **Decision:** The founder will implement the first `lala` release with AI assistance rather than beginning with a hired software team or external agency.
- **Reason:** Founder selected this as the intended Phase 1 delivery model.
- **Architecture effect:** Favor a small number of languages, strong static checking, established frameworks, generated types, automated tests, and low operational overhead.

## D-224 — Web-only Phase 1 delivery

- **Date:** 2026-08-15
- **Status:** Accepted
- **Decision:** Deliver the merchant dashboard and customer storefront as Web applications in Phase 1. Do not build a native or cross-platform mobile app in this phase.
- **Reason:** Founder explicitly selected Web only for the initial release.
- **Architecture effect:** Mobile code sharing does not need to influence the initial framework or repository design.

## D-225 — No fixed pilot delivery deadline

- **Date:** 2026-08-15
- **Status:** Accepted
- **Decision:** Architecture planning and MVP implementation currently have no fixed pilot delivery deadline.
- **Reason:** Founder selected no specific deadline.
- **Architecture effect:** Prefer maintainability and correctness over deadline-driven shortcuts while keeping the system appropriately simple for one founder.

## D-226 — PHP and Laravel for the complete backend

- **Date:** 2026-08-15
- **Status:** Accepted
- **Decision:** Implement the complete `lala` backend in PHP using Laravel. Do not use TypeScript, NestJS, or another language/framework for core backend application code.
- **Reason:** The founder is a Laravel backend developer and explicitly selected PHP with Laravel for the backend.
- **Architecture effect:** Use Laravel-native routing, controllers, Eloquent, validation, authorization, queues, events, scheduled jobs, notifications, and testing as the default backend building blocks. Keep the initial system a modular Laravel monolith unless a measured operational need later justifies extracting a service.

## D-227 — MySQL as the primary database

- **Date:** 2026-08-15
- **Status:** Accepted
- **Decision:** Use MySQL as the primary relational database for `lala` instead of PostgreSQL.
- **Reason:** Founder explicitly selected MySQL.
- **Architecture effect:** Design orders, inventory, wallet ledger entries, coupons, audit records, and tenant isolation around MySQL transactions, constraints, indexes, and Laravel migrations.

## D-228 — Traditional Laravel application structure

- **Date:** 2026-08-15
- **Status:** Accepted; supersedes the modular-monolith architecture recommendation attached to D-226
- **Decision:** Organize the initial backend using Laravel's traditional application structure rather than introducing explicit domain modules or microservices.
- **Reason:** Founder explicitly selected the traditional Laravel structure.
- **Architecture effect:** Use standard Laravel directories and conventions for controllers, models, requests, policies, services, jobs, events, listeners, notifications, and console commands. Domain boundaries may be expressed through naming and focused service classes without adding a module framework.

## D-229 — No strong existing frontend-framework experience

- **Date:** 2026-08-15
- **Status:** Accepted delivery input
- **Decision:** Treat the founder as not having strong prior experience in React, Vue, Livewire, or another frontend framework when choosing the initial frontend technologies.
- **Reason:** Founder explicitly stated that there is no strong current frontend experience and requested a comparison before choosing.
- **Architecture effect:** Prefer conventional, well-documented frontend choices with strong Laravel integration and predictable AI-assisted development. Budget learning and frontend testing into delivery planning.

## D-230 — Different frontend technologies for storefront and dashboard

- **Date:** 2026-08-15
- **Status:** Accepted
- **Decision:** Use different frontend technologies for the customer storefront and merchant dashboard rather than one shared frontend framework across both surfaces.
- **Reason:** Founder explicitly selected two different technologies.
- **Open detail:** The technology for each surface and whether the storefront is deployed separately from Laravel are not yet selected.

## D-231 — Livewire and Blade merchant dashboard

- **Date:** 2026-08-15
- **Status:** Accepted; resolves the dashboard part of D-230
- **Decision:** Build the merchant dashboard with Laravel Livewire and Blade. Do not use React, Vue, Inertia, or a separately deployed dashboard application in Phase 1.
- **Reason:** Founder selected Livewire with Blade after comparing the realistic frontend combinations.
- **Architecture effect:** Dashboard routes, authorization, validation, and UI state remain integrated with Laravel. Use Livewire components for interactive tables, filters, forms, bulk actions, and dashboard widgets.

## D-232 — Blade and Alpine.js customer storefront

- **Date:** 2026-08-15
- **Status:** Accepted; resolves the storefront part of D-230 and closes Q-218/Q-223
- **Decision:** Build the customer storefront with Blade and Alpine.js inside the same Laravel application. Do not use Next.js or another separately deployed storefront in Phase 1.
- **Reason:** Founder selected the recommended Laravel-integrated storefront after comparison.
- **Architecture effect:** Render storefront HTML through Laravel and use Alpine.js for focused browser interactions such as variants, cart feedback, filters, quantity controls, and UI state. No separate public frontend API is required for the first release.

## D-233 — Laravel 13 on PHP 8.5

- **Date:** 2026-08-15
- **Status:** Accepted
- **Decision:** Start implementation with Laravel 13 running on PHP 8.5.
- **Reason:** Founder selected the current recommended stable framework and runtime combination.
- **Architecture effect:** Pin compatible framework, runtime, extension, Composer-package, CI, local-development, and production-environment versions. Reassess upgrades deliberately rather than drifting automatically.

## D-234 — Tailwind CSS for both interfaces

- **Date:** 2026-08-15
- **Status:** Accepted
- **Decision:** Use Tailwind CSS to style both the merchant dashboard and customer storefront.
- **Reason:** Founder selected the recommended Laravel-compatible styling approach.
- **Architecture effect:** Define shared design tokens for colors, spacing, typography, directionality, breakpoints, and reusable Blade components while allowing each storefront theme to map those tokens differently.

## D-235 — Plain JavaScript for Alpine.js behavior

- **Date:** 2026-08-15
- **Status:** Accepted
- **Decision:** Write Alpine.js behavior in plain JavaScript rather than TypeScript for the initial release.
- **Reason:** Founder selected the simpler language choice for the deliberately limited browser-side behavior.
- **Architecture effect:** Keep JavaScript components small and focused, use linting and browser tests for safety, and do not introduce TypeScript unless frontend complexity later provides a concrete reason.

## D-236 — Redis queues with Laravel Horizon

- **Date:** 2026-08-15
- **Status:** Accepted
- **Decision:** Use Redis as the Laravel queue backend and Laravel Horizon for queue configuration and monitoring.
- **Reason:** Founder selected the recommended queue stack.
- **Architecture effect:** Execute email, WhatsApp, CSV import/export, Bosta submission and webhook follow-up, media processing, report generation, and other slow work as retryable jobs. Define queue names, retry limits, timeouts, backoff, idempotency, and failed-job handling explicitly.

## D-237 — Pest for automated PHP tests

- **Date:** 2026-08-15
- **Status:** Accepted
- **Decision:** Use Pest as the primary automated PHP testing framework for the initial application.
- **Reason:** Founder selected the recommended concise Laravel testing style.
- **Architecture effect:** Cover tenant isolation, authorization, checkout, inventory, wallet charging and masking, coupon limits, order edits, shipping integration, and webhook idempotency primarily through feature tests, with focused unit and browser tests where appropriate.

## D-238 — Local pilot file storage with later object-storage migration

- **Date:** 2026-08-15
- **Status:** Accepted
- **Decision:** Store uploaded and generated files on the application server's local Laravel filesystem during the pilot, then migrate them to S3-compatible object storage later.
- **Reason:** Founder selected local pilot storage rather than object storage from the first deployment.
- **Architecture effect:** All feature code must use Laravel's `Storage` abstraction and configured disks, never hard-coded filesystem paths. The pilot deployment requires persistent storage and backups. Store logical disk and object path metadata so a controlled copy-and-switch migration can preserve product media, videos, CSV results, invoices, and shipping labels.

## D-239 — Shared MySQL schema with store_id isolation

- **Date:** 2026-08-15
- **Status:** Accepted
- **Decision:** Use one shared MySQL database and shared schema for all stores. Add `store_id` to every store-owned record instead of creating a separate database per store or a hybrid database model.
- **Reason:** Founder selected the recommended row-level multi-tenancy model.
- **Architecture effect:** Resolve one tenant context per store request and job, apply a store scope to tenant-owned Eloquent models, authorize every resource through its store relationship, use composite indexes and uniqueness constraints beginning with `store_id`, and test cross-store denial. Global platform tables remain unscoped by design.

## D-240 — Separate Admin, Merchant, and Customer authentication boundaries

- **Date:** 2026-08-15
- **Status:** Accepted
- **Decision:** Store platform admins, merchant accounts, and storefront customers in separate database tables and authenticate them through separate Laravel guards and providers.
- **Reason:** Founder selected explicit identity boundaries rather than one polymorphic users table with roles.
- **Architecture effect:** Merchant identities remain global and can own multiple stores; customer identities include `store_id` and remain isolated per storefront; platform admins use a separate protected entry point. Password reset, verification, session cookie, rate-limit, and authorization rules are configured per identity class.

## D-241 — Domains table and custom tenant-resolution middleware

- **Date:** 2026-08-15
- **Status:** Accepted
- **Decision:** Resolve the current storefront by exact hostname lookup in a domains table through custom Laravel middleware. Use this model for both hosted `lala` subdomains and verified custom domains rather than a third-party tenancy package or subdomain-only parsing.
- **Reason:** Founder selected the recommended lightweight custom resolution model.
- **Architecture effect:** Store normalized hostname, store reference, domain type, verification and health state, canonical state, and timestamps. Resolve only active exact matches, establish the tenant context before model access, reject unknown hosts safely, and keep central platform and merchant-dashboard hosts outside storefront tenant resolution.


## D-242 — Portable design delivery format

- **Date:** 2026-08-21
- **Status:** Accepted
- **Decision:** Deliver design-system screens as plain static HTML files, one file per screen, using portable Tailwind class strings, Alpine.js CDN markup, and `<!-- component: ... -->` extraction markers for the Laravel Blade + Livewire pipeline. Do not use a workspace-specific component format.
- **Reason:** Founder explicitly required portable production-oriented source.

## D-243 — Tailwind CSS v4 token bridge

- **Date:** 2026-08-21
- **Status:** Accepted
- **Decision:** Define every token as a CSS custom property first, then reference it from the Tailwind layer so it can move into a Tailwind CSS v4 `@theme` block without rewriting token values. Avoid renamed or removed v4 utilities.
- **Reason:** Laravel 13 production styling will use Tailwind CSS v4.

## D-244 — One bilingual UI family plus operational Mono

- **Date:** 2026-08-21
- **Status:** Accepted
- **Decision:** Use self-hosted IBM Plex Sans Arabic for display, UI, and body text in both scripts. Use IBM Plex Mono only for numerals, SKUs, order numbers, and phone numbers.
- **Reason:** This avoids a duplicate Latin-family request while preserving a dedicated operational-data face.

## D-245 — Standard table density and RTL verification

- **Date:** 2026-08-21
- **Status:** Accepted
- **Decision:** Standardize merchant tables at 52px row height, 12px × 16px cell padding, 14px/20px body text, and 12px semibold muted headers. Verify real Arabic shaping and LTR Mono spans inside RTL sentences in a browser.
- **Reason:** Orders is the merchant's primary working surface.

## D-246 — No payment-status model in the MVP

- **Date:** 2026-08-21
- **Status:** Accepted clarification of D-009
- **Decision:** Do not add payment-status fields or pills. Every MVP order is COD; a future cash-collection model requires a separately approved field, lifecycle, and analytics definition.
- **Reason:** Payment-status UI would introduce an unapproved lifecycle and alter revenue analytics.

## D-247 — Three inventory presentation states

- **Date:** 2026-08-21
- **Status:** Accepted
- **Decision:** Present inventory as In stock, Low stock, or Out of stock in Arabic and English. Out-of-stock products remain visible with a clear label.
- **Reason:** These states reflect the accepted optional low-stock threshold and catalog behavior.

## D-248 — Design Batch 1 accepted

- **Date:** 2026-08-21
- **Status:** Accepted
- **Decision:** Accept the Batch 1 token stylesheet, app shell, component gallery, font policy, Tailwind CSS v4 bridge, 52px density, bilingual examples, and wallet masking cascade.
- **Reason:** Founder explicitly approved Batch 1 after the controlled-field corrections.

## D-249 — Design Batch 2 scope

- **Date:** 2026-08-21
- **Status:** Accepted scope; delivered output awaiting review
- **Decision:** Batch 2 contains Orders list, order detail, manual order creation, and print views using the accepted Batch 1 system and corrected order model.
- **Reason:** Founder explicitly authorized this batch.


## D-250 — Public project repository

- **Date:** 2026-08-21
- **Status:** Accepted; supersedes D-002 only for visibility
- **Decision:** Keep `AM-naguib/lala` public and publish the project memory and decision documents there.
- **Reason:** Founder explicitly approved publishing the files and project decisions while the repository is public.
- **Constraint:** Secrets, provider credentials, personal data, and production customer data remain prohibited from the repository.

## D-251 — Redis for sessions, cache, locks, and rate limits

- **Date:** 2026-08-21
- **Status:** Accepted under the founder's instruction to complete remaining technical decisions
- **Decision:** Use Redis through PhpRedis for Laravel sessions, application cache, distributed locks, and rate-limit counters as well as the already accepted Horizon queues. Configure separate named connections or key prefixes for sessions, cache, queues, and rate limits.
- **Reason:** Redis is already required for Horizon, supports shared state across Web and worker processes, and avoids adding another runtime service.
- **Fallback:** Tests may use isolated in-memory or array drivers; production behavior must be exercised against Redis in integration tests.

## D-252 — BIGINT internal keys with public ULIDs

- **Date:** 2026-08-21
- **Status:** Accepted under the founder's instruction to complete remaining technical decisions
- **Decision:** Use unsigned auto-incrementing BIGINT primary keys internally. Add an immutable, unique, indexed ULID `public_id` to records exposed in URLs, exports, webhooks, or external integrations, and never expose the internal primary key. Keep human-facing order numbers as a separate store-scoped immutable sequence.
- **Reason:** BIGINT keeps MySQL joins and tenant-scoped indexes compact, while ULIDs provide non-sequential public identifiers without making every relationship key a string.
- **Constraint:** Every store-scoped uniqueness rule and lookup still includes or verifies `store_id`; public IDs do not replace tenant authorization.

## D-253 — Authentication foundation and customization boundary

- **Date:** 2026-08-21
- **Status:** Accepted under the founder's instruction to complete remaining technical decisions
- **Decision:** Use the Laravel 13 Livewire starter kit and its Fortify foundation for Merchant authentication, with custom actions, responses, views, rate limiters, and WhatsApp phone verification. Implement Admin authentication with Laravel's built-in guard, provider, password broker, and invitation/seeded-account flow with no public registration. Implement store-scoped Customer authentication with a dedicated guard/provider and custom Blade flows supporting email-link or WhatsApp-code verification and recovery.
- **Reason:** This reuses Laravel's maintained Merchant authentication baseline while keeping the already accepted Admin, Merchant, and Customer identity boundaries explicit.
- **Exclusion:** Do not add Sanctum, Passport, social login, WorkOS, or API tokens until a concrete API or external-client requirement exists.


## D-254 — Static design delivery before Laravel implementation

- **Date:** 2026-08-21
- **Status:** Accepted
- **Decision:** Continue the current delivery phase using portable static HTML screens only. Do not bootstrap or write Laravel, Livewire, Blade application code, database migrations, queues, authentication, or production integrations until the founder explicitly starts the implementation phase.
- **Reason:** Founder explicitly chose to remain static for now.
- **Effect:** D-226 through D-253 remain the accepted future production architecture, but they are implementation inputs rather than current work.


## D-255 — Design Batch 3 products and inventory scope

- **Date:** 2026-08-21
- **Status:** Delivered; awaiting founder review
- **Decision:** Design Batch 3 covers four portable static screens: Products list, Product editor, Product variants, and Inventory management.
- **Rules preserved:** Product visibility is Published or Hidden; a product publishes on save when its primary-language name and selling price exist; soft-deleted products move to Trash and restore as Hidden; variants independently carry price, compare-at price, cost, SKU, stock, and image; unavailable variants remain visible but disabled; low-stock thresholds are optional; COD orders deduct tracked stock immediately; cancellation restores it; returns never auto-restock.
- **Delivery:** Published as Sites version 4 at https://lala-design-system.curbs-storm-80.chatgpt.site on 2026-08-21.
- **Boundary:** Delivery remains static HTML, Tailwind CSS v4, and Alpine.js only; this decision does not start Laravel implementation.


## D-256 — Unified design constants contract

- **Date:** 2026-08-21
- **Status:** Accepted and implemented
- **Decision:** Every merchant route and tab uses one invariant 1440px outer application container. The sidebar is 248px, the header is 64px, responsive page padding is 16/24/32px, and inner content grids—not the outer frame—adapt to forms, details, tables, and summaries.
- **Component constants:** Standard inputs are 40px, medium actions 36px, small actions 32px, and merchant tables use 52px rows with 12px vertical and 16px horizontal cell padding.
- **Token policy:** All project-specific values are CSS custom properties first and are bridged through Tailwind CSS v4 `@theme inline` variables. Reusable arbitrary Tailwind values are prohibited; named utilities and automated constants tests enforce the contract.
- **Recorded scope:** Layout, breakpoints, spacing, typography, controls, table minimum widths, radii, shadows, layers, motion, RTL/Mono behavior, and print dimensions are documented in the design-system source and component gallery.
- **Delivery:** Published as Sites version 5 at https://lala-design-system.curbs-storm-80.chatgpt.site on 2026-08-21.
- **Boundary:** This standardization remains portable static HTML, Tailwind CSS v4, and Alpine.js; it does not start Laravel implementation.


## D-257 — Complete frontend delivery roadmap

- **Date:** 2026-08-22
- **Status:** Accepted as the working execution plan
- **Decision:** Continue the static frontend through Batches 4–17 using the sequence and screen inventory in `10-FRONTEND-DELIVERY-PLAN.md`.
- **Scope:** Complete the Merchant dashboard, Storefront, Customer account, and minimum confirmed lala Admin/Support surfaces. The roadmap plans 65 remaining static screen files plus updates to existing screens and a final hardening batch.
- **Review rule:** Each feature Batch is Delivered for founder review and needs separate acceptance or requested revisions; approving this roadmap does not pre-accept individual screen designs.
- **Delivery rule:** One plain HTML file per screen, Tailwind CSS v4 token bridge, Alpine.js demo behavior, extraction markers, real Arabic/English, RTL/LTR parity, full state coverage, fixed design constants, and no invented product fields.
- **Boundary:** Laravel, Livewire/Blade application code, persistence, real integrations, and production implementation remain postponed until the founder explicitly starts that phase.
- **Effect:** The next active scope is Batch 4 — Catalog operations. Later batches must not be reordered or expanded silently; record any change in Decisions, Next Work, and the roadmap.

## D-258 — UX operating contract and Catalog navigation

- **Date:** 2026-08-22
- **Status:** Accepted and implemented
- **Decision:** Treat `docs/ux/` as the binding UX reference for every current and future frontend Batch. Every screen must have a documented navigation parent, entry point, exit/recovery path, one clear primary action, complete critical states, and a passing P0 UX checklist before delivery.
- **Discoverability rule:** No orphan screens. Daily tasks are reachable from level-one navigation; dependent tasks are reachable within two navigation levels at most.
- **Catalog information architecture:** Products owns product creation/content/variants; Catalog owns Categories, Collections, Tags, Featured products, Import/results, and Trash; Inventory owns stock operations. Catalog is a distinct level-one navigation destination.
- **Responsive rule:** Desktop Sidebar and Mobile primary navigation expose the same current destinations and identify exactly one active parent with `aria-current="page"`.
- **Dead-link rule:** Unbuilt destinations must be hidden or explicitly Disabled with “Soon / قريبًا”; they must not look operational.
- **Action hierarchy:** Each screen has one primary action. Infrequent actions move into secondary or More actions patterns instead of crowding the page header.
- **Delivery:** Navigation and action-hierarchy fixes were implemented across current merchant screens and published as Sites version 7 at https://lala-design-system.curbs-storm-80.chatgpt.site.
- **Boundary:** This is a UX and static-frontend contract; it does not start Laravel implementation or add new product fields.

## D-259 — Products-module information architecture correction

- **Date:** 2026-08-22
- **Status:** Accepted correction; supersedes only the Catalog-as-level-one and peer-tabs parts of D-258
- **Decision:** Products is one level-one Merchant module. All products, Inventory, Organization, and Featured products are its permanent sections. Import products and Trash are separately labeled Product tools. Product editor, Variants, and Import results are child screens reached from their parent flow.
- **Navigation rule:** Desktop expands the Products module into sections and tools. Mobile keeps Dashboard, Orders, and Products as the current primary destinations, then exposes a Product section navigation inside the module.
- **Peer rule:** Categories/Collections/Tags may be peer tabs inside Organization, and Imported/Rejected may be peer tabs inside Import results. Organization, Featured, Import, and Trash must not be presented as one peer-tab set because they have different purposes and frequencies.
- **Review-tool boundary:** Component Gallery remains accessible from the design review entry point but is excluded from Merchant navigation.
- **Reason:** The previous version mixed organization entities, merchandising, operations, and recovery at one level, and split Catalog from the product work merchants understand as one module.
- **Delivery:** Implemented across the current static screens with regression tests and published as Sites version 8 at https://lala-design-system.curbs-storm-80.chatgpt.site.
- **Unchanged:** The general UX contract, two-level discoverability target, action hierarchy, dead-link rule, and static-only boundary from D-258 remain accepted.

## D-260 — Design Batch 4 accepted after information-architecture correction

- **Date:** 2026-08-22
- **Status:** Accepted
- **Decision:** Accept Product organization, Featured products, Product Trash, CSV import, Import results, and the corrected D-259 Products-module hierarchy delivered in Sites version 8.
- **Reason:** The founder reviewed the corrected hierarchy and explicitly instructed the work to continue to the next Batch.
- **Boundary:** Acceptance remains for the portable static design; it does not start Laravel implementation.

## D-261 — Design Batch 5 Customers scope and delivery

- **Date:** 2026-08-22
- **Status:** Delivered; awaiting founder review
- **Decision:** Batch 5 contains Customers list, Customer detail, and Customer identity-conflict review as three portable static screens. Customers becomes a level-one Merchant module because customer search and record review are independent daily tasks.
- **Data rules:** Preserve Guest and Account customers, optional email, multiple addresses, tags, notes, order metrics/history, blocking by phone or email, and conflict review without silent merging.
- **Masking rule:** Wallet overdraft hides phone, email, and address data, keeps non-sensitive record/order context visible, disables sensitive export and identity resolution, and explains the recharge threshold.
- **Product boundary:** Manual record merging and additional CRM fields remain excluded because they are not approved product decisions. The safe conflict action can confirm separate records or leave the case for later review.
- **Delivery:** Published as Sites version 9 at https://lala-design-system.curbs-storm-80.chatgpt.site with ten passing static-contract tests.
- **Boundary:** Static HTML, Tailwind CSS v4, and Alpine.js only; no persistence, authentication, or Laravel implementation.
