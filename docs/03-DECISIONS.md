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

## D-105 — Logo, colors, fonts, and favicon brand controls

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Let each merchant customize the storefront logo, color palette, fonts, and favicon.
- **Reason:** Founder selected the recommended brand-control set.

## D-106 — Homepage built from manageable predefined sections

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Build the storefront homepage from predefined sections that the merchant can add, hide, and reorder.
- **Reason:** Founder selected flexible section management without requiring a fully free-form page builder.
- **Resolution:** D-108 selects Hero or Slider as the initial section type. Per-section content controls remain undecided.

## D-107 — Preview themes and preserve content when switching

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Let the merchant preview a storefront theme before applying it. Applying a different theme preserves the merchant's storefront content.
- **Reason:** Founder selected a reversible evaluation step and content continuity during theme changes.
- **Open detail:** Mapping theme-specific layout settings between themes remains undecided.

## D-108 — Hero or Slider as the initial homepage section

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Include Hero or Slider as the currently selected initial homepage section type in the MVP.
- **Reason:** Founder selected only this option from the proposed initial homepage-section catalog.

## D-109 — Five editable static storefront pages

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Include editable About Us, Contact, Shipping and Returns, Privacy Policy, and Terms and Conditions pages in each storefront.
- **Reason:** Founder selected the recommended baseline page set.
- **Resolution:** D-110 adds unlimited custom pages, D-111 defines bilingual authoring, and D-112 adds a contact form plus store details. Contact-form delivery remains undecided.

## D-110 — Unlimited custom static pages

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Allow each merchant to create an unlimited number of custom static storefront pages in addition to the five built-in pages.
- **Reason:** Founder selected unrestricted custom-page creation.

## D-111 — Bilingual static pages with primary-language fallback

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Provide separate Arabic and English content fields for static pages. If the selected-language content is missing, display the store's primary-language version.
- **Reason:** Founder selected the same explicit bilingual and fallback model used for product content.

## D-112 — Contact form and store contact details

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Include both a customer contact form and merchant-configured store contact details on the Contact page.
- **Reason:** Founder selected the complete recommended contact baseline.
- **Open detail:** Form-submission destination, notifications, and retention remain undecided.

## D-113 — Storefront search by product name only

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Search the storefront product catalog using the product name only. Product descriptions, SKUs, and tags are not search inputs in the MVP.
- **Reason:** Founder explicitly selected product-name-only search for the initial release.

## D-114 — Storefront product filters

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Let customers filter storefront products by price, category or collection, availability, and product options.
- **Reason:** Founder selected the complete recommended filter set.

## D-115 — Storefront product sorting options

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Let customers sort storefront products by Featured, Newest, Price Low to High, Price High to Low, and Name.
- **Reason:** Founder selected the complete recommended sorting set.
- **Resolution:** D-117 sets Featured as the default sort, and D-118 defines manual merchant curation and ordering.

## D-116 — Automatic product loading while scrolling

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Automatically load more products as the customer scrolls through a long storefront product list.
- **Reason:** Founder selected continuous automatic loading instead of numbered pagination or a manual Load More action.

## D-117 — Featured as the default product sort

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Use Featured as the default sorting mode for storefront product lists.
- **Reason:** Founder selected Featured first while retaining merchant control over the Featured order.

## D-118 — Manual Featured-product selection and ordering

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Let the merchant manually select which products are Featured and freely control their display order.
- **Reason:** Founder selected direct manual curation over automatic ordering or sales-based selection.

## D-119 — Complete storefront product cards

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Show the product image, name, selling price, compare-at price when present, and inventory state on each storefront product card.
- **Reason:** Founder selected the complete recommended product-card information set.

## D-120 — Keep Out of Stock products in place

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Keep an Out of Stock product in its assigned storefront-list position and display a clear Out of Stock label. Do not automatically move it to the end or hide it.
- **Reason:** Founder explicitly selected position preservation with an availability label.

## D-121 — Automatically select the first available variant

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** When a customer opens a product with variants, automatically select the first available variant. The customer can change the selected product options before adding it to the cart or using Buy Now.
- **Reason:** Founder selected automatic first-available selection instead of requiring an initial manual selection or a merchant-defined default variant.

## D-122 — Complete independent variant data

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Allow each variant to independently define its selling price, compare-at price, cost, SKU, inventory quantity, and image.
- **Reason:** Founder selected the complete recommended variant-specific commerce-data set.

## D-123 — Visible but disabled unavailable variants

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Keep unavailable or Out of Stock variant choices visible on the product page, but disable them and show a clear Unavailable label.
- **Reason:** Founder selected transparency about existing choices without allowing customers to select an unavailable combination.

## D-124 — Quantity controls on product page and cart

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Let customers change product quantity on both the product page and in the cart. For tracked inventory, the selected quantity cannot exceed the currently available stock.
- **Reason:** Founder selected the complete recommended quantity-control behavior.

## D-125 — Automatic related products by catalog organization

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Automatically choose related products for a product page from products in the same category or collection.
- **Reason:** Founder selected automatic related-product generation instead of manual merchant curation or omitting the section.

## D-126 — Success message after Add to Cart

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** After adding an item to the cart, show a success message and keep the customer on the current page. Do not automatically open a cart drawer or navigate to the cart.
- **Reason:** Founder explicitly selected lightweight success feedback only.

## D-127 — Thirty-day guest-cart persistence

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Preserve a guest customer's cart on the same device for 30 days.
- **Reason:** Founder selected the recommended persistence period.

## D-128 — Revalidate cart price and stock with notice

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Before order submission, update cart items to their current selling prices and reduce any quantity above current available tracked stock to the available amount. Show the customer a clear notice describing the changes.
- **Reason:** Founder selected automatic reconciliation with transparent customer feedback.

## D-129 — Isolated Buy Now checkout

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Buy Now opens checkout for only the currently selected product and quantity. Products already stored in the customer's cart remain unchanged.
- **Reason:** Founder selected an isolated express purchase that does not merge with or replace the saved cart.

## D-130 — Single-page checkout

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Present checkout as one complete page rather than dividing it into multiple steps.
- **Reason:** Founder selected the recommended low-friction checkout structure.

## D-131 — Coupon entry in cart and checkout

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Allow customers to enter and apply a coupon code from both the cart and checkout. The applied coupon state is shared so the customer does not need to re-enter it.
- **Reason:** Founder selected coupon access in both purchase-flow locations.

## D-132 — Successful-order page without tracking link

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** After successful order submission, show the order number, order summary, and current order status on the confirmation page. Do not display the tracking link on that page.
- **Reason:** Founder first selected the complete confirmation set, then specified that the tracking link is sent by email only; the more specific placement decision controls.
- **Exception:** D-135 shows the tracking link once on this page when the order has no customer email address.

## D-133 — Email-only unique guest tracking link

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Let a guest customer track an order through a unique link sent only to the email address provided with the order. Do not provide order-number-and-phone lookup in the MVP.
- **Reason:** Founder explicitly selected email-only link delivery.
- **Exception:** D-135 defines one-time success-page delivery when the customer did not provide an email address.

## D-134 — No checkout policy acceptance requirement

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Do not require a Terms and Conditions or Privacy Policy acceptance checkbox at checkout. These policies remain available as storefront pages but do not have to appear in the checkout interface.
- **Reason:** Founder explicitly stated that the policies do not need to appear during payment or checkout.

## D-135 — One-time tracking-link display without email

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** If an order has no customer email address, show its unique tracking link once on the successful-order page. This is the only success-page exception to D-132 and the only non-email delivery exception to D-133.
- **Reason:** Founder selected a one-time link display so a guest without email can retain self-service tracking.

## D-136 — Complete guest tracking-page information

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Show the current order status and its progression, ordered products, order totals, and available shipment details from the connected shipping provider on the guest tracking page.
- **Reason:** Founder selected the complete recommended tracking information set.

## D-137 — Complete order-confirmation email

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Include the order number, order summary, delivery address, totals, current status, and unique tracking link in the initial order-confirmation email.
- **Reason:** Founder selected the complete recommended confirmation-email content.

## D-138 — Customer account by email or phone

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Let a customer optionally create an account using either an email address or a phone number plus a password.
- **Reason:** Founder selected both supported customer identifiers instead of limiting sign-up to one contact channel.

## D-139 — Automatic verified guest-order linking

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** After the customer verifies an email address or phone number, automatically link earlier guest orders that contain the matching verified contact value to the new account.
- **Reason:** Founder selected automatic historical-order recovery after ownership of the contact channel is confirmed.

## D-140 — Complete customer self-service account

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Give signed-in customers access to order history and tracking, saved addresses, and profile management.
- **Reason:** Founder selected the complete recommended customer-account feature set.

## D-141 — Storefront-scoped customer accounts

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Scope every customer account to one storefront. A customer account and credentials are not automatically shared with other `lala` storefronts.
- **Reason:** Founder selected isolated store-branded customer identity over a platform-wide account.

## D-142 — Channel-specific customer verification

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Verify an email-based customer account through an email link and a phone-based account through a WhatsApp code.
- **Reason:** Founder selected the recommended verification channel for each supported identifier.

## D-143 — Channel-specific customer password recovery

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Reset a customer password using an email reset link for an email account or a WhatsApp code for a phone account.
- **Reason:** Founder selected recovery through the same verified contact channel used by the account.

## D-144 — Unlimited saved addresses with a default

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Allow a customer to save an unlimited number of delivery addresses and select one saved address as the default.
- **Reason:** Founder selected unrestricted address storage with a default-address convenience.

## D-145 — Verify new customer contact before replacement

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** When a customer changes the account email address or phone number, keep the existing verified value active until the new value is successfully verified through its supported channel.
- **Reason:** Founder selected verification of the new contact before replacement.

## D-146 — Delete customer account but retain order history

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Customer-account deletion removes the login account, profile data, and saved addresses. Historical order records remain stored for the merchant as transaction history.
- **Reason:** Founder selected removal of reusable account data without deleting the store's historical orders.

## D-147 — No signed-in customer self-cancellation

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Do not let a signed-in customer cancel an order directly. The customer must contact the merchant, matching the existing guest-customer cancellation policy.
- **Reason:** Founder selected one consistent merchant-controlled cancellation flow for guests and account holders.

## D-148 — Repeat orders use current catalog data

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Repeat Order adds products that are currently available to the cart using current prices. Clearly notify the customer about unavailable products, price changes, or other differences from the original order.
- **Reason:** Founder selected a safe cart reconstruction instead of blindly copying historical order data.

## D-149 — Default address with explicit save after editing

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Preselect the customer's default saved address at checkout. Allow the customer to choose another saved address or make a one-time edit, but do not modify saved address data unless the customer explicitly chooses to save the change.
- **Reason:** Founder selected checkout convenience without silently overwriting the customer's address book.

## D-150 — Automatic merchant customer-record consolidation

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Automatically consolidate guest and registered-customer orders into one merchant customer record when a normalized email address or phone number matches. If the identifiers imply conflicting customer records, preserve the records and show the merchant a review alert instead of silently merging them.
- **Reason:** Founder selected automatic consolidation with explicit conflict handling.

## D-151 — Internal merchant customer notes and tags

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Let merchants attach internal notes and tags to customer records. These annotations are visible only in the merchant dashboard.
- **Reason:** Founder selected both recommended customer-organization tools.

## D-152 — Identifier-based customer blocking

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Let a merchant block new order submissions that match a selected customer email address or phone number. Blocking does not cancel, delete, or otherwise modify existing orders.
- **Reason:** Founder selected future-order blocking with historical-order preservation.

## D-153 — Complete merchant customer record

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Show customer identity and contact data, saved or observed addresses, order history and order count, total spend, average spend per order, last order, tags, and blocked status in the merchant customer record.
- **Reason:** Founder selected the complete recommended customer detail and metric set.
- **Resolution:** D-158 includes every order status in customer total-spend and average-spend metrics.

## D-154 — Complete merchant customer search and filters

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Support customer search by name, phone number, and email address. Support filters for tags, blocked status, order count, spend, and last-order date.
- **Reason:** Founder selected the complete recommended customer-list discovery set.

## D-155 — All-or-filtered customer CSV export

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Let merchants export customer records as CSV for either the full customer list or the currently filtered result set.
- **Reason:** Founder selected flexible CSV export scope.

## D-156 — Complete merchant dashboard home

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Show sales, orders grouped by status, average order value, customer metrics, top products, low-stock items, recent orders, and operational alerts on the merchant dashboard home.
- **Reason:** Founder selected the complete recommended dashboard summary.

## D-157 — Standard and custom analytics periods with comparison

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Provide Today, Yesterday, Last 7 Days, Last 30 Days, and custom date ranges. Compare the selected period with the immediately previous period of equal length.
- **Reason:** Founder selected the complete recommended date and comparison controls.

## D-158 — All order statuses count toward sales

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Include every order in headline sales, average-order-value, and customer-spend metrics regardless of its status. Cancelled and Returned orders remain included and are not deducted from these totals.
- **Reason:** Founder explicitly selected all orders rather than limiting sales recognition to delivered or non-cancelled orders.
- **Interpretation:** These metrics represent gross created-order value, even when labeled as sales in the merchant interface.

## D-159 — Separate count and value for every order status

- **Date:** 2026-08-14
- **Status:** Partially superseded by D-215
- **Decision:** Beside the headline all-orders sales total, show order count and order value separately for every core and custom order status.
- **Reason:** Per-core-status count and value remain accepted; D-215 removes custom statuses and treats Labels as separate filters instead.

## D-160 — No estimated-profit report in Phase 1

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Do not calculate or display estimated profit in Phase 1. Continue storing product and variant cost for merchant reference and possible future reporting.
- **Reason:** Founder explicitly deferred profit reporting.

## D-161 — Filtered analytics CSV export

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Let merchants export sales and analytics data as CSV using the currently selected date range and filters.
- **Reason:** Founder selected filter-preserving report export.

## D-162 — Fixed Cairo reporting timezone

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Use the Cairo timezone for analytics period boundaries and displayed order timestamps for every Phase 1 store.
- **Reason:** Founder explicitly selected fixed Cairo time instead of a merchant-selected or browser-derived timezone.

## D-163 — Top Products ranking toggle

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Let merchants switch Top Products ranking between units ordered and total order value.
- **Reason:** Founder selected both ranking perspectives with a merchant-controlled toggle.
- **Metric scope:** Both modes follow D-158 and include products from orders in every status.

## D-164 — Analytics freshness within one minute

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Reflect new orders and catalog changes in dashboard analytics within approximately one minute.
- **Reason:** Founder selected near-real-time dashboard updates.

## D-165 — Partial-success product and variant CSV import

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Preview and validate a product-and-variant CSV before confirmation. Import valid rows and generate a downloadable error file for invalid rows instead of rejecting the entire import.
- **Reason:** Founder selected the recommended partial-success import flow with actionable validation feedback.

## D-166 — All-or-filtered product and variant CSV export

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Export products and their variants as CSV for either the full catalog or the current filtered product result set.
- **Reason:** Founder selected complete filtered export including variant data.

## D-167 — Complete product bulk-edit actions

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Support bulk changes to Published or Hidden state; category, collection, and tag assignments; price fields; inventory; and product soft deletion.
- **Reason:** Founder selected the complete recommended bulk-action set.

## D-168 — Copy imported images from public URLs

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Let product and variant CSV rows contain public image URLs. Download successful images into `lala`-managed storage and serve the stored copies instead of continuing to depend on the source URLs.
- **Reason:** Founder selected URL-based media import with platform-owned copies.

## D-169 — CSV matching by `lala` ID then SKU

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** When importing a CSV row, match an existing product or variant by `lala` record ID first, then by SKU when no ID match exists. Create a new record when neither identifier matches.
- **Reason:** Founder selected stable round-trip identity with an external-friendly SKU fallback.

## D-170 — Background CSV import with dashboard results

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Run large CSV imports in the background so the merchant can continue using the dashboard. On completion, show a dashboard notification and provide a downloadable result file with successes and errors.
- **Reason:** Founder selected non-blocking processing with in-product completion feedback.

## D-171 — Reject conflicting CSV identities

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** If a CSV row contains a `lala` ID and SKU that point to different existing records, reject that row as an error and do not modify either record.
- **Reason:** Founder selected the safest conflict behavior instead of silently trusting one identifier.

## D-172 — Detailed confirmation for large or destructive bulk actions

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Before a large or destructive product bulk action, show the affected record count and a summary of proposed changes, then require explicit merchant confirmation. After processing, provide a downloadable results file.
- **Reason:** Founder selected complete preview, confirmation, and outcome safeguards.

## D-173 — Flexible manual order creation

- **Date:** 2026-08-14
- **Status:** Partially superseded by D-181
- **Decision:** Allow merchants to create orders manually from the dashboard using either an existing customer or newly entered customer data. The order may contain catalog products, merchant-defined custom line items, or both.
- **Reason:** Founder retained flexible customer selection but later excluded custom non-catalog line items in D-181.

## D-174 — Detailed all-or-filtered order CSV export

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Allow merchants to export either all orders or the current filtered order result set as CSV, including the products and custom line items within each order.
- **Reason:** Founder selected a filter-preserving operational export with item-level detail.

## D-175 — Core bulk order operations

- **Date:** 2026-08-14
- **Status:** Accepted
- **Decision:** Bulk order operations support changing the order status, submitting selected orders to a connected shipping provider, and printing shipping labels.
- **Reason:** Founder selected the operationally complete MVP set for processing groups of orders.

## D-176 — Immediate inventory handling for manual orders

- **Date:** 2026-08-15
- **Status:** Accepted
- **Decision:** When a merchant saves a manually created order, immediately deduct tracked inventory for its catalog products. If that order is cancelled, restore the deducted inventory automatically. Custom line items have no catalog inventory to adjust.
- **Reason:** Founder selected the same predictable inventory lifecycle used by customer-created COD orders.

## D-177 — New default with selectable manual-order status

- **Date:** 2026-08-15
- **Status:** Partially superseded by D-215
- **Decision:** A manually created order defaults to New, but the merchant can choose another available core or custom status during creation.
- **Reason:** The New default and selectable core status remain accepted; D-215 moves additional classification to separate Labels.

## D-178 — Automatic customer confirmation for manual orders

- **Date:** 2026-08-15
- **Status:** Accepted
- **Decision:** If a manually created order includes a customer email address, send its order-confirmation email automatically when the order is saved. Do not present a per-order send toggle.
- **Reason:** Founder selected automatic customer communication rather than optional or suppressed confirmation.

## D-179 — Calculated manual orders with flexible shipping and discounts

- **Date:** 2026-08-15
- **Status:** Accepted
- **Decision:** During manual order creation, let the merchant select a configured shipping zone or enter a shipping price manually and add either a percentage or fixed-amount manual discount. Calculate the final order total automatically from the entered components rather than allowing an arbitrary final-total override.
- **Reason:** Founder selected operational flexibility while preserving transparent and consistent order arithmetic.

## D-180 — Merchant email for self-created manual orders

- **Date:** 2026-08-15
- **Status:** Accepted
- **Decision:** Send the merchant the same new-order email for a manually created order that is sent for a storefront-created order, even though the merchant created it.
- **Reason:** Founder explicitly chose consistent merchant email notifications across order sources.

## D-181 — Catalog-only manual orders

- **Date:** 2026-08-15
- **Status:** Accepted; partially supersedes D-173
- **Decision:** A manually created order can contain saved catalog products only. Do not allow custom products, services, fees, or other non-catalog line items. The merchant may still use an existing customer or enter new customer data.
- **Reason:** After clarification, the founder explicitly rejected adding anything that is not already present in the store catalog.

## D-182 — Focused order-list search

- **Date:** 2026-08-15
- **Status:** Accepted
- **Decision:** Search the merchant order list by order number, customer name, and customer phone number only. Do not include customer email or shipment number in Phase 1 order search.
- **Reason:** Founder selected the smaller operational search set.

## D-183 — Operational order-list filters

- **Date:** 2026-08-15
- **Status:** Accepted
- **Decision:** Filter the merchant order list by order status, date, order source, shipping-submission status, and shipping zone.
- **Reason:** Founder selected the complete proposed operational filter set.

## D-184 — Newest-first order sorting with operational alternatives

- **Date:** 2026-08-15
- **Status:** Accepted
- **Decision:** Sort the merchant order list by newest order first by default. Also allow oldest first, highest order value first, and lowest order value first.
- **Reason:** Founder selected the proposed set that prioritizes recent fulfillment work while supporting chronological and value-based review.

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
