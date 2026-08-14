# Documentation Changelog

## 2026-08-14 — Initial project memory

### Added

- Created the initial project documentation structure.
- Recorded the SaaS e-commerce product category and reference products.
- Recorded private repository requirement and the repository name `lala`.
- Recorded global launch ambition.
- Recorded the broad audience as anyone who wants to create an online store.
- Defined Phase 1 as discovery and MVP definition.
- Added decision, question, memory, and working-agreement files.

### Pending

- Resolve Phase 1 question batch 22: merchant email events, shipping submission selection, and failed-submission handling.

## 2026-08-14 — Phase 1 question batch 2

### Added

- Confirmed physical and digital products as the MVP product types.
- Confirmed a hosted `lala` subdomain with optional custom-domain connection.
- Confirmed COD as the only payment method for the initial release.
- Recorded the unresolved conflict between paid digital products and COD-only collection.
- Advanced the active questions to digital fulfillment, launch languages, and currency behavior.

## 2026-08-14 — Partial resolution of Phase 1 question batch 3

### Changed

- Superseded the earlier physical-and-digital MVP selling scope.
- Limited the initial selling flow to physical products and postponed paid digital-product selling and delivery.
- Confirmed Arabic and English for both the merchant dashboard and storefront.
- Clarified the currency question with examples; the currency model remains unanswered.

## 2026-08-14 — GitHub repository connected

### Changed

- Verified `AM-naguib/lala` as the private project repository.
- Removed the repository-creation blocker.
- Set the repository as the synchronization target for project memory and planning.

## 2026-08-14 — Phase 1 currency model

### Added

- Confirmed one merchant-selected operating currency per store.
- Applied that currency to all product prices and COD orders in the store.
- Left post-order currency-change rules explicitly unresolved.
- Advanced active questions to shipping coverage, delivery pricing, and tax/fee behavior.

## 2026-08-14 — Phase 1 shipping scope and tax exclusion

### Added

- Confirmed merchant-defined shipping zones with one delivery price per zone.
- Confirmed one operating country per store, with delivery zones inside it.
- Clarified that global launch supports stores across different countries while each MVP store remains single-country.
- Excluded tax configuration, calculation, and a separate tax line from the initial release.
- Advanced active questions to zone construction, delivery handoff, and customer address fields.

## 2026-08-14 — Phase 1 geography, shipping connections, and checkout fields

### Added

- Confirmed preloaded geographic subdivisions for supported store countries, using Egypt and its governorates as the example.
- Confirmed optional shipping-company connections and an extensible provider-integration model; Bosta is an example provider.
- Added name, primary phone, address, city, email, notes, and alternate phone to the checkout data model.
- Kept subdivision grouping, first launch provider, and mandatory-field rules explicitly unresolved.

## 2026-08-14 — GitHub synchronization cadence

### Changed

- Switched from pushing after each answer batch to pushing after every 20 answered planning questions.
- Kept continuous local and durable memory updates between GitHub pushes.
- Added an explicit immediate-push override when requested by the founder.
- Reset the post-push question counter to 0 after the commit containing Q-010 through Q-012.

## 2026-08-14 — Shipping pricing, first provider, and checkout requiredness

### Added

- Confirmed both direct per-subdivision shipping prices and grouped custom shipping zones.
- Selected Bosta as the first shipping integration, with other providers to follow.
- Confirmed merchant control over which supported checkout fields are required or optional.
- Advanced active questions to cart behavior, guest checkout, and COD order verification.
- Advanced the GitHub synchronization counter to 3/20 without pushing.

## 2026-08-14 — Cart, guest checkout, and COD submission

### Added

- Confirmed both a multi-product cart and direct Buy Now.
- Confirmed guest checkout as the default flow with optional customer accounts.
- Confirmed immediate COD order creation without OTP or pre-verification.
- Advanced active questions to order statuses, inventory reservation, and notifications.
- Advanced the GitHub synchronization counter to 6/20 without pushing.

## 2026-08-14 — Interactive question format

### Changed

- Kept planning questions in interactive-button batches of up to three.
- Required the recommended MVP choice to appear first and be labeled clearly.
- Left the GitHub synchronization counter at 6/20 because this is a workflow preference, not a product answer.

## 2026-08-14 — Order statuses, inventory timing, and notifications

### Added

- Confirmed core order statuses with merchant-defined custom statuses.
- Confirmed immediate inventory deduction on COD order creation and automatic restoration on cancellation.
- Confirmed merchant-dashboard and email order notifications.
- Advanced active questions to product variants, out-of-stock behavior, and catalog organization.
- Advanced the GitHub synchronization counter to 9/20 without pushing.

## 2026-08-14 — Product variants, optional inventory, and catalog organization

### Added

- Confirmed flexible product options and variants with independent tracked inventory per variant.
- Confirmed optional inventory tracking with mandatory quantity entry when enabled.
- Confirmed categories, collections, and tags for catalog organization.
- Kept zero-stock purchase behavior explicitly unresolved.
- Advanced active questions to zero-stock behavior, product identifiers, and price fields.
- Advanced the GitHub synchronization counter to 12/20 without pushing.

## 2026-08-14 — Zero stock, SKU, and price fields

### Added

- Confirmed Out-of-Stock blocking at zero tracked inventory, with availability restored through restocking or disabling tracking.
- Selected SKU without barcode support for the current MVP.
- Confirmed selling price, compare-at price, and cost fields.
- Advanced active questions to product media, bilingual product content, and discounts.
- Advanced the GitHub synchronization counter to 15/20 without pushing.

## 2026-08-14 — Product media, bilingual content, and coupons

### Added

- Confirmed multiple product images with an optional product video.
- Confirmed separate Arabic and English product-content fields with one merchant-selected primary language.
- Included coupon-code discounts in the initial release.
- Kept automatic discounts explicitly unresolved pending clarification.
- Advanced the GitHub synchronization counter to 17/20 without pushing.

## 2026-08-14 — Automatic discounts deferred

### Changed

- Limited MVP campaign discounts to coupon codes.
- Deferred automatic discounts and their rule-conflict complexity beyond the MVP.
- Advanced active questions to product-video source and missing-translation fallback.
- Advanced the GitHub synchronization counter to 18/20 without pushing.

## 2026-08-14 — Uploaded video and translation fallback

### Added

- Selected merchant-uploaded video files as the only product-video source in the current MVP.
- Confirmed primary-language fallback when product content is missing in the visitor's selected language.
- Advanced active questions to coupon configuration and product publication states.
- Advanced the GitHub synchronization counter to 20 answers; the founder changed the cadence before the planned upload was performed.

## 2026-08-14 — GitHub synchronization cadence increased

### Changed

- Increased the GitHub synchronization batch from every 20 answered planning questions to every 50.
- Preserved the explicit immediate-push override.
- Continued the existing counter at 20/50 without uploading to GitHub.

## 2026-08-14 — Coupon controls and product visibility

### Added

- Added percentage, fixed-amount, and free-shipping coupon types.
- Added coupon validity period, total usage limit, and minimum order amount controls.
- Limited MVP product publication states to Published and Hidden.
- Advanced active questions to coupon applicability, multiple-coupon behavior, and product deletion.
- Advanced the GitHub synchronization counter to 23/50 without uploading.

## 2026-08-14 — Whole-order coupons and soft deletion

### Added

- Limited coupon applicability to the whole order in the current MVP.
- Limited each order to one coupon code and excluded coupon stacking.
- Selected soft deletion for products so stored records and historical references are preserved.
- Advanced active questions to new-product default visibility, deleted-product restoration, and coupon minimum-order calculation.
- Advanced the GitHub synchronization counter to 26/50 without uploading.

## 2026-08-14 — Immediate publication, Trash restoration, and coupon basis

### Added

- Made Published the default state for a newly saved product.
- Added a merchant-facing Trash view with product restoration.
- Defined coupon minimum-order eligibility as the pre-discount products subtotal excluding shipping.
- Advanced active questions to publication requirements, restored-product visibility, and per-customer coupon limits.
- Advanced the GitHub synchronization counter to 29/50 without uploading.

## 2026-08-14 — Publication requirements and coupon customer limits

### Added

- Required a primary-language product name and selling price before immediate publication.
- Made restored products Hidden until the merchant reviews and republishes them.
- Excluded per-customer coupon usage limits from the guest-first MVP; only the total usage limit applies.
- Advanced active questions to core order statuses, merchant order editing, and customer cancellation.
- Advanced the GitHub synchronization counter to 32/50 without uploading.

## 2026-08-14 — Core order workflow and merchant editing

### Added

- Defined New, Confirmed, Processing, Shipped, Delivered, Cancelled, and Returned as core order statuses while preserving custom statuses.
- Allowed merchants to edit all order data after creation, with operational safeguards still to be defined.
- Excluded guest self-service cancellation; customers contact the merchant instead.
- Advanced active questions to order edit cutoff, inventory and total recalculation, and edit history.
- Advanced the GitHub synchronization counter to 35/50 without uploading.

## 2026-08-14 — Unrestricted audited order editing

### Added

- Allowed merchants to edit all order data in every status, including after delivery.
- Added automatic order-total recalculation and inventory-difference adjustment for product and quantity edits.
- Required an audit history that records who changed what and when.
- Advanced active questions to full and partial returns, returned inventory, and order-status transitions.
- Advanced the GitHub synchronization counter to 38/50 without uploading.

## 2026-08-14 — Returned inventory and status-flow policy

### Added

- Confirmed that recording returned items does not automatically restore available inventory.
- Added a logical default order-status progression with manual merchant override.
- Kept full-versus-partial return scope open pending a clarified example.
- Advanced the GitHub synchronization counter to 40/50 without uploading.

## 2026-08-14 — Partial returns deferred

### Changed

- Limited the MVP to recording full-order returns.
- Deferred partial item and quantity returns beyond the MVP.
- Advanced active questions to manual return restocking, exact default status flow, and custom-status side effects.
- Advanced the GitHub synchronization counter to 41/50 without uploading.

## 2026-08-14 — Manual return restocking and open status movement

### Changed

- Required merchants to restock saleable returned items manually from the product page.
- Replaced the logical default status flow with freely selectable statuses and no default path.
- Kept custom-status side effects open pending a clarified example.
- Advanced the GitHub synchronization counter to 43/50 without uploading.

## 2026-08-14 — Informational custom order statuses

### Added

- Limited custom order statuses to organization and classification.
- Excluded automatic email, inventory, shipping, and other actions from custom statuses in the MVP.
- Advanced active questions to merchant email events, customer order notifications, and low-stock warnings.
- Advanced the GitHub synchronization counter to 44/50 without uploading.

## 2026-08-14 — Manual shipping handoff and email/stock notifications

### Added

- Required merchants to select orders and explicitly submit them to the connected shipping provider; no automatic submission occurs.
- Added customer order-confirmation and core-status change emails when an email address is provided.
- Added merchant-defined low-stock thresholds with dashboard and email warnings for tracked products and variants.
- Kept merchant email events open after correcting the shipping-submission assumption.
- Advanced the GitHub synchronization counter to 47/50 without uploading.

## 2026-08-14 — Merchant email and recoverable shipping submission

### Added

- Limited merchant order-event email to new-order creation; later status changes and shipping-submission failures do not send merchant emails in the MVP.
- Added both individual and bulk submission to a connected shipping provider.
- Kept failed submissions Not Sent, with the provider failure reason and a manual retry action.
- Reached the 50/50 GitHub synchronization threshold and prepared the accumulated planning batch for upload.

## 2026-08-14 — Fifty-answer GitHub synchronization completed

### Changed

- Synchronized the accumulated Phase 1 planning documents through Q-061 to the private `AM-naguib/lala` repository.
- Reset the post-push planning-question counter to 0/50 with no pending documentation.
