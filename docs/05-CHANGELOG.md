# Documentation Changelog

## 2026-08-22 — Design Batch 11.4 current-commerce rebuild

- Rebuilt the three Storefront presets after an expanded visual-reference pass across current official Shopify Theme Store examples.
- Directed Essential from Horizon × Sleek, Editorial from Prestige × Stretch, and Bold from Impact × Zest without cloning theme content or code.
- Replaced the remaining shared-template silhouette with distinct hero geometry, 12-column editorial and campaign grids, bento merchandising, controlled overlaps, and preset-specific fixed-390px recomposition.
- Preserved one shared document, section order and visibility, Builder behavior, RTL, isolated prices, fixed Header/Footer, and all existing safety exclusions.
- Corrected Editorial mobile headline clipping found during real-browser review.
- Deterministic build, real-browser desktop/mobile review, and **21/21** automated tests pass.
- Added the implementation and review record in `storefront/08-THEME-REDESIGN-BATCH-11.4.md`.

## 2026-08-22 — Design Batch 11.3 premium visual rebuild

- Re-ran visual direction research against official Shopify Dawn, Prestige, and Impact patterns plus premium fragrance storefront references.
- Rebuilt Essential as a calm product-first system, Editorial as a cinematic image-led composition, and Bold as an expressive coral/plum campaign system without harsh yellow or comic-style outlines.
- Added three optimized original WebP storefront assets and removed the legacy flat storefront SVGs from all Batch 11 screens.
- Preserved one shared section document, RTL content, isolated prices, fixed 390px preview, and content/order/visibility invariants across theme changes.
- Visually verified all three presets on desktop and mobile in a real browser; the deterministic build and 20/20 automated tests pass.

## 2026-08-22 — Design Batch 11.2 real theme differentiation

- Kept one shared Storefront document and renderer while adding preset-specific layout composition instead of palette-only skins.
- Essential stays compact and product-first with a balanced split Hero and quiet cards.
- Editorial now uses a centered masthead, full-bleed image-led Hero, wider rhythm, feature compositions, and restrained promotional treatment.
- Bold now uses asymmetric grids, heavy outlines, high-contrast promotion blocks, emphasized price/stock cards, and a dark system frame.
- Added fixed-width mobile adaptations for the new compositions without changing section data, order, visibility, RTL, or price isolation.
- Added a Batch 11.2 regression contract and passed the deterministic build plus 19/19 automated tests.
## 2026-08-22 — Design Batch 11.1 Storefront builder correction

- Added live preview renderers for Slider, Featured Collections, and Promotional Banner so every section offered by the approved picker appears in the same shared renderer.
- Expanded Homepage Builder snapshots so Arabic and English Hero content participates in Undo/Redo together with section order and visibility.
- Replaced nested `role="button"` section actions with keyboard-operable native buttons, explicit disabled states, and 44px minimum targets.
- Added a behavioral Batch 11.1 regression test that executes the Builder state and verifies content restoration, add/undo preview behavior, renderer coverage, and accessible controls.
- Regenerated all Batch 11 renderer consumers and passed the deterministic build plus 18/18 automated tests.

## 2026-08-22 — Design Batch 10 Store settings and Wallet delivered

- Recorded founder acceptance of Batch 9 and authorization of Batch 10 in D-271.
- Added D-272 for General settings, Checkout fields, Domains, Notifications, Wallet, and Store status.
- Added Settings as one level-one Merchant module with six internal sections and kept Wallet directly reachable from every header balance chip.
- Preserved the three-change hosted-subdomain lock, 10-day reservation/no redirect, independent custom domains with fallback, no currency conversion, exact Checkout field set, COD-only/no-tax boundary, confirmed notification matrix, EGP 1 prepaid wallet fee, EGP -10 masking threshold, and support-only store reactivation.
- Added Batch 10 contract tests, advanced the review gate to Batch 10 before Batch 11, and kept Laravel implementation postponed.

## 2026-08-22 — Design Batch 9 Merchant access and onboarding delivered

- Recorded founder acceptance of Batch 8 and authorization of Batch 9 in D-269.
- Added D-270 for Merchant sign-in/sign-up, WhatsApp verification, recovery/reset, first-store onboarding, and store switching.
- Preserved the 10-minute code, 60-second cooldown, five-send rolling-hour limit, five-attempt invalidation, and no-bypass WhatsApp failure behavior.
- Limited onboarding to store name, subdomain, currency, and primary language; explicitly excluded a store-country field.
- Added empty-account, multi-store, unlimited-store, owner-only, validation, subdomain availability, delivery failure, and recovery feedback states.
- Linked the store switcher from every current Merchant screen and advanced the review gate to Batch 9 before Batch 10.

## 2026-08-22 — Design Batch 8 Dashboard and Analytics delivered

- Recorded founder acceptance of Batch 7 and authorization of Batch 8 in D-267.
- Added D-268 for Dashboard, Analytics overview, Orders analytics, and Products analytics.
- Added Analytics as a level-one Merchant module with Overview, Orders, and Products sections.
- Preserved Cairo time, the five approved date ranges, previous-equivalent comparison, all-status Sales definition, exact seven-status breakdown, Units/Value product ranking, and filtered CSV scope.
- Kept Estimated profit outside the product and added contract tests for every metric boundary.
- Advanced the review gate to Batch 8 before Batch 9 Merchant access and onboarding.

## 2026-08-22 — Design Batch 5 Customers delivered

- Recorded founder acceptance of corrected Design Batch 4 in D-260.
- Added D-261 for Customers list, unified Customer detail, and identity-conflict review.
- Added Customers as a level-one Merchant module on Desktop and Mobile.
- Preserved Guest/Account records, optional email, multiple addresses, blocking by phone/email, notes, tags, order metrics/history, and safe conflict review without silent merging.
- Applied wallet-overdraft masking to phone, email, and addresses; disabled sensitive export and conflict resolution until recharge.
- Published Sites version 9 and advanced the review gate to Batch 5 before Batch 6 Discounts.

## 2026-08-22 — Products information architecture correction

### Changed

- Recorded D-259, which supersedes only the Catalog-as-level-one and peer-tabs portions of D-258.
- Reclassified current destinations as Module, Section, Tool, Flow child, or Review tooling.
- Consolidated product work under one Products module: All products, Inventory, Organization, Featured products, then separately labeled Import and Trash tools.
- Removed the rejected Organization/Featured/Import/Trash peer-tab model and excluded Component Gallery from Merchant navigation.
- Corrected Desktop/Mobile hierarchy and replaced Catalog-reachability tests with information-architecture regression tests.
- Updated project memory, delivery status, next work, frontend roadmap, and UX operating documents to match the corrected structure.
- Published the corrected hierarchy as Sites version 8 at https://lala-design-system.curbs-storm-80.chatgpt.site.

## 2026-08-22 — UX operating contract implemented

### Added

- Added `docs/ux/` with binding UX principles, information architecture, screen acceptance checklist, and prioritized backlog.
- Added D-258 and integrated the UX P0 gate into the frontend delivery roadmap.
- Added automated coverage that requires Catalog reachability and mobile primary navigation on every current merchant screen.

### Changed

- Promoted Catalog to a level-one Sidebar destination across all current merchant screens.
- Added consistent mobile primary navigation and correct active-parent semantics.
- Simplified Products list actions to one primary action, one frequent secondary action, and a More actions menu.
- Marked unbuilt App shell destinations as Disabled with “Soon / قريبًا” and fixed View all orders.
- Published Sites version 7 at https://lala-design-system.curbs-storm-80.chatgpt.site.

## 2026-08-22 — Design Batch 4 delivered and published

### Added

- Delivered Catalog organization, Featured products, Product Trash, CSV import, and Import results as five bilingual portable static screens.
- Added required empty, duplicate-name, ID/SKU conflict, public-image URL, background-processing, valid-row, rejected-row, and result-file states.
- Added all/filtered exports and destructive-action preview to Products list.
- Linked Product editor to organization management and Trash.
- Published Sites version 6 at https://lala-design-system.curbs-storm-80.chatgpt.site.
- Moved execution to the Batch 4 founder-review gate before Batch 5.

## 2026-08-22 — Complete frontend roadmap accepted

### Added

- Added `docs/10-FRONTEND-DELIVERY-PLAN.md` as the single operating roadmap for completing the static frontend.
- Defined Batches 4–17 with 65 remaining screen files across Merchant, Storefront, Customer account, and lala Admin surfaces.
- Added exact dependencies, required states, acceptance gates, execution protocol, and Definition of Done for every batch.
- Set Batch 4 — Catalog operations as the next active delivery.
- Added D-257 and linked the roadmap from project memory and next work.

## 2026-08-21 — Unified design constants implemented

### Changed

- Standardized every application route and product tab on one 1440px outer content frame.
- Added named Tailwind CSS v4 bridges for page padding, inner grids, table widths, typography details, controls, layers, and print dimensions.
- Standardized every table cell on the accepted 52px row and 12×16px padding contract.
- Added a full constants reference, component-gallery layout contract, and automated regression tests that reject legacy outer widths and reusable arbitrary utilities.
- Published Sites version 5 at https://lala-design-system.curbs-storm-80.chatgpt.site.
- Added D-256.

## 2026-08-21 — Design Batch 3 delivered and published

### Added

- Delivered Products list, Product editor, Product variants, and Inventory management as portable bilingual static HTML screens.
- Preserved Published/Hidden visibility, exact inventory states, optional low-stock thresholds, flexible variant-level commerce data, soft-delete restoration as Hidden, and visible disabled unavailable variants.
- Documented immediate COD stock deduction, cancellation restoration, and manual return restocking.
- Published Sites version 4 at https://lala-design-system.curbs-storm-80.chatgpt.site.
- Added D-255 and updated delivery status, next work, project memory, and the Draft PR summary.

## 2026-08-21 — Static-only delivery retained

### Changed

- Continued the current delivery phase as portable static HTML only.
- Explicitly postponed Laravel, Livewire, Blade application code, migrations, queues, authentication, persistence, and production integrations.
- Preserved the accepted Laravel architecture as a future implementation handoff rather than current work.
- Changed the immediate objective to Design Batch 2 review, exact Batch 3 definition, and continued static Tailwind CSS v4 + Alpine.js screen delivery.
- Added D-254.

## 2026-08-21 — Architecture baseline completed

### Added

- Superseded the original private-repository decision after the founder explicitly approved keeping `AM-naguib/lala` public.
- Selected Redis/PhpRedis for sessions, cache, distributed locks, rate limiting, and Horizon queues with isolated connections or prefixes.
- Selected unsigned BIGINT internal keys plus immutable public ULIDs and separate store-scoped human order numbers.
- Selected the Laravel 13 Livewire starter kit and Fortify as the Merchant-authentication foundation, with separate custom Admin and store-scoped Customer guard flows.
- Linked the architecture plan to the relevant official Laravel 13 documentation.

### Changed

- Closed Q-236 through Q-238 and the repository-visibility question.
- Removed stale statements that treated the accepted stack, verification rules, empty storefront, Contact delivery, manual orders, and Bosta controls as undecided.
- Marked the application shape as accepted and advanced the active objective to production Laravel bootstrapping.
- Left only Design Batch 2 review, exact Batch 3 scope, pilot-specific pricing, and deployment infrastructure as future decisions.

## 2026-08-21 — Design delivery memory refreshed

### Added

- Added `08-DELIVERY-STATUS.md` for accepted, delivered, and not-started work.
- Added `09-NEXT-WORK.md` for the review queue, open architecture decisions, deferred scope, and proposed implementation order.
- Recorded Design Batch 1 as accepted and Batch 2 as delivered for review.
- Recorded the Tailwind CSS v4 token bridge, self-hosted IBM Plex font policy, 52px density, and browser-verified RTL/Mono behavior.
- Reconfirmed the exact seven core statuses, separate Labels, no payment-status model, three inventory states, and Bosta mappings.
- Added active questions for Batch 2 review, Batch 3 scope, runtime state stores, identifiers, and authentication foundation.
- Recorded the founder's explicit approval to publish these memory documents while the repository is public.

### Changed

- Updated the project-memory date and active objective.
- Replaced outdated pre-architecture wording now that the technology stack is accepted.
- Clarified that the static design batches are prototypes and production Laravel implementation has not started.

## 2026-08-15 — Architecture planning started

### Added

- Started the architecture and delivery-planning phase after Phase 1 product-definition completion.
- Recorded that the founder will build the first release with AI assistance.
- Limited Phase 1 delivery to Web applications without a mobile app.
- Recorded that no fixed pilot delivery deadline currently constrains the architecture.
- Added `07-ARCHITECTURE-PLAN.md` for proposals and technical decisions.
- Advanced the GitHub synchronization counter to 3/50 without uploading.

## 2026-08-15 — Laravel backend selected

### Changed

- Rejected the unaccepted TypeScript/NestJS backend proposal.
- Selected PHP with Laravel for the complete backend, matching the founder's existing experience.
- Narrowed active architecture questions to the frontend boundary, frontend language, and primary relational database.
- Advanced the GitHub synchronization counter to 4/50 without uploading.

## 2026-08-15 — MySQL and traditional Laravel structure selected

### Changed

- Selected MySQL as the primary relational database instead of the proposed PostgreSQL option.
- Selected Laravel's traditional application structure instead of the proposed explicit domain-module structure.
- Left the frontend approach unanswered after the founder made no selection.
- Advanced the GitHub synchronization counter to 6/50; the skipped frontend question was not counted.

## 2026-08-15 — Frontend constraints recorded

### Added

- Recorded that the founder has no strong existing frontend-framework experience and wants a concrete comparison before selection.
- Confirmed that the customer storefront and merchant dashboard will use different frontend technologies.
- Kept the Laravel-integrated versus separately deployed frontend boundary unresolved.
- Advanced the GitHub synchronization counter to 8/50; the unresolved comparison answer was not counted as a decision.

## 2026-08-15 — Laravel-integrated frontend selected

### Added

- Selected Livewire with Blade for the merchant dashboard.
- Selected Blade with Alpine.js for the customer storefront.
- Kept both interfaces inside the same Laravel application and excluded React, Vue, Inertia, Next.js, and a separate frontend API from Phase 1.
- Resolved the earlier frontend-boundary comparison questions.
- Advanced the GitHub synchronization counter to 10/50.

## 2026-08-15 — Runtime and frontend language stack completed

### Added

- Selected Laravel 13 on PHP 8.5 for initial implementation.
- Selected Tailwind CSS for the dashboard and storefront.
- Selected plain JavaScript for Alpine.js behavior and excluded TypeScript from the initial stack.
- Advanced the GitHub synchronization counter to 13/50.

## 2026-08-15 — Queue, testing, and pilot storage selected

### Added

- Selected Redis as the queue backend and Laravel Horizon for queue monitoring.
- Selected Pest for automated PHP tests.
- Selected local server file storage for the pilot with mandatory Laravel filesystem abstraction and a later S3-compatible migration path.
- Added persistent-volume and backup requirements for pilot files.
- Advanced the GitHub synchronization counter to 16/50.

## 2026-08-15 — Shared-database multi-tenancy selected

### Added

- Selected one shared MySQL database and schema with `store_id` on every store-owned table.
- Required layered tenant isolation through context resolution, Eloquent scopes, policies, relationships, database constraints, and cross-store tests.
- Selected separate Admin, Merchant, and Customer tables, guards, and providers.
- Selected a custom exact-host tenant resolver backed by a domains table for hosted subdomains and verified custom domains.
- Advanced the GitHub synchronization counter to 19/50.

## 2026-08-15 — Architecture planning GitHub synchronization completed

### Changed

- Prepared the complete architecture-planning documentation through Q-235 and D-241 for upload to private `AM-naguib/lala` on `main` at the founder's explicit request.
- Included the accepted Laravel application stack, queues, tests, pilot storage, shared-database tenancy, identity boundaries, and hostname tenant resolution.
- Reset the GitHub synchronization counter to 0/50 and recorded no pending unpushed documentation.

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

## 2026-08-14 — Shipping connection, accepted shipments, and manual fulfillment

### Added

- Required merchants to connect their own shipping-provider accounts using their provider credentials.
- Stored the provider shipment number, shipment status, and label after successful submission without automatically changing the core order status.
- Limited non-integrated fulfillment to manual order-status changes without a manual carrier or tracking record.
- Advanced active questions to merchant account creation, first-time store setup, and initial storefront availability.
- Advanced the GitHub synchronization counter to 3/50 without uploading.

## 2026-08-14 — Merchant sign-up and immediate storefront availability

### Added

- Defined merchant account creation using email address, phone number, and password.
- Required store name, `lala` subdomain, operating country, currency, and primary language during first-time setup.
- Made the storefront publicly accessible immediately after setup, without requiring a product or separate publish action.
- Advanced active questions to merchant contact verification, subdomain changes, and country or currency changes after orders.
- Advanced the GitHub synchronization counter to 6/50 without uploading.

## 2026-08-14 — Phone verification and mutable store identity

### Added

- Required merchant phone-number verification and excluded merchant email verification from the MVP.
- Allowed self-service hosted-subdomain changes without redirecting the previous subdomain.
- Allowed merchants to change the store country and currency at any time, including after receiving orders.
- Advanced active questions to historical-order preservation, product-price handling, and shipping-zone handling after these changes.
- Advanced the GitHub synchronization counter to 9/50 without uploading.

## 2026-08-14 — Historical order snapshots and unchanged catalog numbers

### Added

- Preserved each historical order's country and currency as captured at order creation.
- Kept all existing product and variant price numbers unchanged when the store currency changes, updating only the currency code or symbol without conversion.
- Clarified that hiding previous-country shipping zones means retaining them saved but inactive while another country is selected; the founder's choice remains open.
- Advanced the GitHub synchronization counter to 11/50 without uploading.

## 2026-08-14 — Store-country model removed

### Changed

- Removed the store-level operating country, superseding the earlier one-country-per-store model and removing country from initial onboarding.
- Made shipping geography independent from a store-country setting; multi-country coverage and zone composition remain to be defined.
- Reserved a previous hosted subdomain for 10 days after a change and limited each store to three hosted-subdomain changes.
- Selected WhatsApp as the only merchant phone-verification delivery channel in the MVP.
- Advanced the GitHub synchronization counter to 14/50 without uploading.

## 2026-08-14 — Egypt-only Phase 1 shipping coverage

### Changed

- Allowed each store to configure zones in any number of platform-supported shipping countries.
- Limited the actual Phase 1 supported shipping-country catalog to Egypt, so customers do not choose between delivery countries yet.
- Reframed global coverage as a later expansion ambition rather than full Phase 1 operational country support.
- Deferred cross-country zone composition because no selection was made and it does not affect the Egypt-only MVP.
- Advanced the GitHub synchronization counter to 16/50 without uploading.

## 2026-08-14 — Egypt checkout geography and coverage blocking

### Added

- Hid the country field at checkout and stored Egypt automatically for Phase 1 orders.
- Added preloaded governorate followed by city or area selection for Egyptian checkout and shipping configuration.
- Blocked order submission with a shipping-unavailable message when the selected location is outside all merchant-enabled zones.
- Advanced active questions to overlapping zones, shipping-price display timing, and missing preloaded geography.
- Advanced the GitHub synchronization counter to 19/50 without uploading.

## 2026-08-14 — Conflict-free zones and extensible Egypt geography

### Added

- Prevented a city or area from belonging to more than one active zone in the same store.
- Displayed shipping cost immediately after the customer selects the governorate and city or area.
- Allowed merchants to add custom cities or areas beneath a governorate when the preloaded list is incomplete.
- Advanced active questions to custom-location visibility, zero-price zones, and zone-price changes.
- Advanced the GitHub synchronization counter to 22/50 without uploading.

## 2026-08-14 — Store-specific geography and immutable shipping snapshots

### Added

- Limited merchant-added custom cities and areas to the merchant's own store.
- Allowed a zero-price shipping zone and displayed it as free shipping.
- Preserved shipping prices on existing orders while applying zone-price changes immediately to later orders.
- Advanced active questions to stores per merchant account, team access, and store deletion.
- Advanced the GitHub synchronization counter to 25/50 without uploading.

## 2026-08-14 — Multi-store ownership with owner-only access

### Added

- Allowed one merchant account to own multiple stores with independent settings and data.
- Limited MVP store access to the account owner and deferred team invitations and roles.
- Defined store removal as data-preserving deactivation rather than deletion.
- Advanced active questions to store-count limits, reactivation, and the disabled-store visitor experience.
- Advanced the GitHub synchronization counter to 28/50 without uploading.

## 2026-08-14 — Unlimited stores and support-controlled reactivation

### Added

- Removed the per-account store-count limit in the MVP.
- Required `lala` support to reactivate a disabled store.
- Added a clear visitor-facing store-unavailable page for disabled hosted and custom domains.
- Advanced active questions to storefront themes, brand controls, and homepage composition.
- Advanced the GitHub synchronization counter to 31/50 without uploading.

## 2026-08-14 — Ready storefront themes and section-based homepage

### Added

- Added multiple ready-made storefront themes.
- Added merchant brand controls for logo, colors, fonts, and favicon.
- Defined the homepage as predefined sections that merchants can add, hide, and reorder.
- Advanced active questions to theme switching, the initial homepage-section catalog, and static storefront pages.
- Advanced the GitHub synchronization counter to 34/50 without uploading.

## 2026-08-14 — Theme preview and baseline storefront pages

### Added

- Added theme preview before application and preserved storefront content when switching themes.
- Selected Hero or Slider as the currently included homepage section type.
- Added editable About Us, Contact, Shipping and Returns, Privacy Policy, and Terms and Conditions pages.
- Advanced active questions to custom pages, bilingual page authoring, and Contact-page functionality.
- Advanced the GitHub synchronization counter to 37/50 without uploading.

## 2026-08-14 — Unlimited bilingual pages and complete Contact page

### Added

- Allowed unlimited custom static pages in addition to the five built-in pages.
- Added separate Arabic and English static-page fields with primary-language fallback.
- Added a customer contact form and store contact details to the Contact page.
- Advanced active questions to storefront product search, filters, and sorting.
- Advanced the GitHub synchronization counter to 40/50 without uploading.

## 2026-08-14 — Storefront search, filters, and sorting

### Added

- Limited storefront catalog search to product names only.
- Added product filters for price, category or collection, availability, and product options.
- Added sorting by Featured, Newest, ascending or descending price, and Name.
- Advanced active questions to product-list loading, the default sort, and Featured-product curation.
- Advanced the GitHub synchronization counter to 43/50 without uploading.

## 2026-08-14 — Infinite product loading and merchant-curated Featured order

### Added

- Selected automatic loading while the customer scrolls through long product lists.
- Set Featured as the default storefront product sort.
- Gave merchants manual control over Featured-product selection and display order.
- Advanced active questions to product-card content, Out of Stock list presentation, and product-option selection.
- Advanced the GitHub synchronization counter to 46/50 without uploading.

## 2026-08-14 — Product cards, stock labels, and default variant selection

### Added

- Added product image, name, selling price, compare-at price, and inventory state to storefront product cards.
- Kept Out of Stock products in their assigned list positions with a clear label.
- Automatically selected the first available variant while allowing customers to change product options.
- Advanced the active question to variant-specific product data.
- Advanced the GitHub synchronization counter to 49/50 without uploading.

## 2026-08-14 — Complete variant-specific commerce data

### Added

- Allowed every variant to independently define selling price, compare-at price, cost, SKU, inventory quantity, and image.
- Advanced active questions to unavailable variants, product quantity selection, and related products.
- Reached the 50/50 GitHub synchronization threshold and prepared the accumulated planning batch for upload.

## 2026-08-14 — Fifty-answer GitHub synchronization completed

### Changed

- Uploaded the accumulated planning documentation through D-122 and Q-112 to the private `AM-naguib/lala` repository on `main`.
- Reset the GitHub synchronization counter to 0/50.
- Retained unavailable variants, product quantity selection, and related products as the next active storefront decisions.

## 2026-08-14 — Unavailable variants, quantity controls, and related products

### Added

- Kept unavailable variant choices visible but disabled with a clear label.
- Added quantity controls to both the product page and cart, limited by available tracked inventory.
- Added automatically selected related products from the same category or collection.
- Advanced active questions to cart feedback, guest-cart persistence, and price or stock revalidation.
- Advanced the GitHub synchronization counter to 3/50 without uploading.

## 2026-08-14 — Cart feedback, persistence, and revalidation

### Added

- Added success-message-only feedback after Add to Cart while keeping the customer on the current page.
- Preserved guest carts on the same device for 30 days.
- Revalidated current prices and stock before order submission, reduced excessive quantities, and added a clear customer notice.
- Advanced active questions to Buy Now behavior, checkout structure, and coupon-entry placement.
- Advanced the GitHub synchronization counter to 6/50 without uploading.

## 2026-08-14 — Isolated Buy Now and single-page checkout

### Added

- Made Buy Now open a single-product checkout while preserving the existing cart unchanged.
- Selected a one-page checkout flow.
- Made coupon entry available in both cart and checkout with a shared applied-coupon state.
- Advanced active questions to successful-order confirmation, guest tracking, and checkout policy acceptance.
- Advanced the GitHub synchronization counter to 9/50 without uploading.

## 2026-08-14 — Order confirmation and email-only guest tracking

### Added

- Added order number, summary, and current status to the successful-order page.
- Limited guest self-service tracking to a unique link sent only by email and omitted the link from the successful-order page.
- Removed any checkout requirement to display or explicitly accept the store's Terms and Privacy policies.
- Advanced active questions to tracking without an email, tracking-page content, and order-confirmation email content.
- Advanced the GitHub synchronization counter to 12/50 without uploading.

## 2026-08-14 — Tracking fallback and complete order communications

### Added

- Added a one-time successful-order-page tracking link when the customer does not provide an email address.
- Added status progression, products, totals, and available shipment details to the guest tracking page.
- Added order number, summary, address, totals, current status, and tracking link to the confirmation email.
- Advanced active questions to optional customer-account credentials, guest-order linking, and account self-service.
- Advanced the GitHub synchronization counter to 15/50 without uploading.

## 2026-08-14 — Optional customer accounts and historical-order linking

### Added

- Added customer account creation by email address or phone number plus password.
- Automatically linked earlier guest orders after verification of a matching email address or phone number.
- Added order history and tracking, saved addresses, and profile management to customer accounts.
- Advanced active questions to account scope, contact verification, and password recovery.
- Advanced the GitHub synchronization counter to 18/50 without uploading.

## 2026-08-14 — Storefront-scoped customer identity and recovery

### Added

- Scoped customer accounts independently to each storefront.
- Added email-link verification for email accounts and WhatsApp-code verification for phone accounts.
- Added password recovery through the account's verified email or WhatsApp channel.
- Advanced active questions to saved addresses, contact changes, and account deletion with historical orders.
- Advanced the GitHub synchronization counter to 21/50 without uploading.

## 2026-08-14 — Customer addresses, contact changes, and account deletion

### Added

- Added unlimited saved customer addresses with one default address.
- Required verification of a new customer email address or phone number before replacing the existing contact.
- Removed account profiles and saved addresses on customer-account deletion while retaining historical store order records.
- Advanced active questions to signed-in cancellation, repeat orders, and default-address checkout behavior.
- Advanced the GitHub synchronization counter to 24/50 without uploading.

## 2026-08-14 — Customer cancellation, repeat orders, and checkout addresses

### Added

- Applied the merchant-contact cancellation policy to signed-in customers as well as guests.
- Added Repeat Order using current availability and prices with clear change notices.
- Preselected the default address at checkout while requiring explicit consent to save one-time edits.
- Advanced active questions to merchant customer records, internal notes and tags, and customer blocking.
- Advanced the GitHub synchronization counter to 27/50 without uploading.

## 2026-08-14 — Merchant customer consolidation and blocking

### Added

- Consolidated guest and account orders by normalized email address or phone number and flagged identity conflicts for merchant review.
- Added internal merchant notes and tags to customer records.
- Added email-or-phone blocking for future order submissions without changing historical orders.
- Advanced active questions to customer-record metrics, search and filters, and customer-data export.
- Advanced the GitHub synchronization counter to 30/50 without uploading.

## 2026-08-14 — Complete merchant customer records and export

### Added

- Added identity, addresses, order and spend metrics, last order, tags, and block status to merchant customer records.
- Added customer search by name, phone, and email plus filters for tags, blocking, orders, spend, and last order.
- Added CSV export for all customers or the current filtered result set.
- Advanced active questions to dashboard metrics, analytics date comparisons, and sales recognition.
- Advanced the GitHub synchronization counter to 33/50 without uploading.

## 2026-08-14 — Merchant dashboard and all-status sales metrics

### Added

- Added sales, order, customer, product, stock, recent-order, and alert summaries to the merchant dashboard home.
- Added standard and custom analytics date ranges with previous equivalent-period comparison.
- Included all order statuses, including Cancelled and Returned, in headline sales and customer-spend metrics.
- Advanced active questions to separate status values, estimated profit, and analytics export.
- Advanced the GitHub synchronization counter to 36/50 without uploading.

## 2026-08-14 — Per-status analytics and filtered report export

### Added

- Added separate order count and value for every status beside the all-orders sales total.
- Deferred estimated-profit reporting while retaining product cost data.
- Added CSV analytics export using the current date range and filters.
- Advanced active questions to reporting timezone, Top Products ranking, and analytics freshness.
- Advanced the GitHub synchronization counter to 39/50 without uploading.

## 2026-08-14 — Cairo-time near-real-time merchant analytics

### Added

- Fixed analytics periods and displayed order timestamps to the Cairo timezone for Phase 1.
- Added a Top Products toggle between units ordered and total order value.
- Set dashboard analytics freshness to approximately one minute.
- Advanced active questions to product CSV import, product CSV export, and product bulk editing.
- Advanced the GitHub synchronization counter to 42/50 without uploading.

## 2026-08-14 — Product CSV and bulk catalog operations

### Added

- Added previewed and validated product-and-variant CSV import with valid-row success and an invalid-row error file.
- Added all-or-filtered product and variant CSV export.
- Added bulk visibility, organization, price, inventory, and soft-delete operations.
- Advanced active questions to imported images, existing-record matching, and large-import processing.
- Advanced the GitHub synchronization counter to 45/50 without uploading.

## 2026-08-14 — Imported media, CSV identity, and background processing

### Added

- Added public image URLs to product and variant CSV import and copied downloaded images into `lala` storage.
- Matched CSV updates by `lala` ID first and SKU second, creating unmatched records.
- Processed large CSV imports in the background with dashboard notification and a downloadable result file.
- Advanced active questions to CSV identity conflicts and bulk-action safeguards.
- Advanced the GitHub synchronization counter to 48/50 without uploading.

## 2026-08-14 — CSV conflict safety and guarded bulk changes

### Added

- Rejected CSV rows whose `lala` ID and SKU point to different records without modifying either record.
- Added affected-count and change previews, explicit confirmation, and result files to large or destructive product bulk actions.
- Advanced active questions to manual order creation, order CSV export, and order bulk updates.
- Reached the 50/50 GitHub synchronization threshold and prepared the accumulated planning batch for upload.

## 2026-08-14 — Fifty-answer GitHub synchronization completed

### Changed

- Uploaded the accumulated planning documentation through D-172 and Q-162 to the private `AM-naguib/lala` repository on `main`.
- Reset the GitHub synchronization counter to 0/50.
- Retained manual order creation, order CSV export, and order bulk updates as the next active decisions.

## 2026-08-14 — Manual orders, order export, and bulk processing

### Added

- Added manual dashboard order creation using an existing or newly entered customer and catalog products or custom line items.
- Added detailed CSV export for all orders or the current filtered result set.
- Added bulk order-status changes, shipping-provider submission, and shipping-label printing.
- Advanced active questions to manual-order inventory, initial values, and customer confirmation.
- Advanced the GitHub synchronization counter to 3/50 without uploading.

## 2026-08-15 — Manual-order inventory, status, and confirmation

### Added

- Applied immediate tracked-inventory deduction and automatic cancellation restoration to manually created orders.
- Defaulted manual orders to New while allowing a different initial status at creation.
- Made customer order-confirmation email automatic for manual orders containing an email address.
- Advanced active questions to custom line-item data, manual shipping and discounts, and merchant self-notifications.
- Advanced the GitHub synchronization counter to 6/50 without uploading.

## 2026-08-15 — Manual-order totals and merchant notification

### Added

- Added zone-based or manually entered shipping and manual percentage or fixed discounts to manual orders while retaining automatic total calculation.
- Applied the standard merchant new-order email to manually created orders.
- Kept custom line-item fields open and added a concrete clarification for the next question batch.
- Advanced active questions to the clarified custom item, order search, and order-list filters.
- Advanced the GitHub synchronization counter to 8/50 without uploading.

## 2026-08-15 — Catalog-only manual orders and order-list discovery

### Changed

- Partially superseded D-173 by limiting manual orders to saved catalog products while retaining existing-or-new customer selection.
- Added order-list search by order number, customer name, and phone number.
- Added filters for status, date, order source, shipping-submission status, and shipping zone.
- Advanced active questions to order sorting, Phase 1 source labels, and printable documents.
- Advanced the GitHub synchronization counter to 11/50 without uploading.

## 2026-08-15 — Order sorting, sources, and printable documents

### Added

- Added newest-first default order sorting with oldest-first and value-based alternatives.
- Defined Storefront and Dashboard Manual as the two Phase 1 order sources.
- Added individual and bulk invoice and packing-slip printing alongside shipping labels.
- Advanced active questions to invoice content, packing-slip content, and print language.
- Advanced the GitHub synchronization counter to 14/50 without uploading.

## 2026-08-15 — Invoice and packing-slip content

### Added

- Defined a complete priced invoice containing store, order, customer, item, shipping, discount, total, and note details.
- Defined a fulfillment packing slip with customer, address, item, variant, quantity, and note details but no prices.
- Limited both printed documents to the store's primary language without a print-time language selector.
- Advanced active questions to built-in and custom order-status management.
- Advanced the GitHub synchronization counter to 17/50 without uploading.

## 2026-08-15 — Configurable order-status presentation and safe deletion

### Added

- Allowed merchant renaming of built-in status labels while preserving their core identities and preventing deletion.
- Added Arabic and English names, color selection, and manual ordering to custom statuses.
- Required an explicit replacement status and order migration before deleting an in-use custom status.
- Advanced active questions to bilingual core labels, custom-status limits, and migration notifications.
- Advanced the GitHub synchronization counter to 20/50 without uploading.

## 2026-08-15 — Core-label language and custom-status safeguards

### Added

- Made a renamed core-status label one shared value displayed in both interface languages.
- Limited each store to 10 custom order statuses.
- Made status-deletion migrations silent for customers while recording every affected order in audit history.
- Advanced active questions to WhatsApp merchant verification-code lifetime, resend rules, and failed attempts.
- Advanced the GitHub synchronization counter to 23/50 without uploading.

## 2026-08-15 — Merchant WhatsApp verification limits

### Added

- Set merchant verification-code lifetime to 10 minutes.
- Added a 60-second resend cooldown and a maximum of five code sends per phone number per rolling hour.
- Invalidated the active code after five incorrect entries and required a new code.
- Advanced active questions to customer verification rules, account activation, and failed merchant-message delivery.
- Advanced the GitHub synchronization counter to 26/50 without uploading.

## 2026-08-15 — Customer activation and WhatsApp failure handling

### Added

- Reused merchant WhatsApp code limits for customer phone verification and password recovery.
- Required customer contact verification before account activation while preserving guest checkout.
- Kept merchant accounts unverified after failed WhatsApp delivery, with later retry or support contact and no fallback bypass.
- Advanced active questions to exhausted subdomain changes, the empty storefront, and Contact-form delivery.
- Advanced the GitHub synchronization counter to 29/50 without uploading.

## 2026-08-15 — Permanent subdomain lock and storefront Contact inbox

### Added

- Permanently locked a store's hosted subdomain after its third change, without support override.
- Kept the complete storefront visible when no products are Published and added a clear empty-catalog message.
- Stored Contact-form messages in the merchant dashboard and added merchant email alerts.
- Advanced active questions to custom-domain independence, Contact-form fields, and dashboard replies.
- Advanced the GitHub synchronization counter to 32/50 without uploading.

## 2026-08-15 — Independent custom domains and dashboard Contact replies

### Added

- Made custom-domain connection and replacement unlimited and independent from hosted-subdomain change limits.
- Defined required Contact-form name, email, subject, and message fields with optional phone number.
- Added dashboard replies delivered to customer email and retained in the Contact conversation history.
- Advanced active questions to custom-domain primary routing, HTTPS, and failure fallback.
- Advanced the GitHub synchronization counter to 35/50 without uploading.

## 2026-08-15 — Primary custom domains with secure fallback

### Added

- Made a verified custom domain the primary storefront address and redirected the hosted subdomain to it.
- Added automatic no-extra-charge HTTPS certificate issuance and renewal for custom domains.
- Restored the hosted subdomain as primary and alerted the merchant when custom-domain health fails.
- Advanced active questions to Bosta connection validation, duplicate protection, and shipment-status synchronization.
- Advanced the GitHub synchronization counter to 38/50 without uploading.

## 2026-08-15 — Validated Bosta connections and automatic order-status sync

### Added

- Added immediate Bosta credential validation with Connected or actionable failure feedback.
- Blocked duplicate submission when an order already has an active Bosta shipment and linked to its details.
- Partially superseded D-074 by allowing synchronized Bosta events to update core order statuses automatically.
- Advanced active questions to provider-event mapping, manual overrides, and customer emails.
- Advanced the GitHub synchronization counter to 41/50 without uploading.

## 2026-08-15 — Bosta mapping and separate order Labels

### Changed

- Mapped normalized Bosta events to Processing, Shipped, Delivered, Cancelled, and Returned, with alert-only exception handling.
- Replaced merchant-defined custom statuses with a separate Labels field while preserving one controlled core lifecycle status.
- Reinterpreted bilingual name, color, ordering, and ten-definition limits as Label rules and retired replacement-status migration.
- Applied standard customer core-status emails to Bosta-driven status changes.
- Advanced active questions to pilot merchant profile, pilot shape, and MVP success measurement.
- Advanced the GitHub synchronization counter to 44/50 without uploading.

## 2026-08-15 — Phase 1 pilot and measurable success

### Added

- Selected a mixed cohort of new and already-selling merchants for the first pilot.
- Set the pilot at 10 merchants for 30 days.
- Defined success as at least 7 merchants publishing and each receiving at least 10 real orders during the pilot.
- Advanced active questions to pilot pricing, recurring monetization, and order transaction fees.
- Advanced the GitHub synchronization counter to 47/50 without uploading.

## 2026-08-15 — Prepaid per-order wallet monetization

### Changed

- Replaced recurring store subscriptions with a prepaid pay-per-order wallet for each store.
- Gave the `lala` platform owner control over the per-created-order fee and set the initial fee to EGP 1.
- Left pilot-specific pricing open after the founder skipped that question.
- Advanced the final active question to insufficient store-wallet balance behavior.
- Advanced the GitHub synchronization counter to 49/50 without uploading.

## 2026-08-15 — Wallet overdraft and Phase 1 completion

### Added

- Allowed a store wallet overdraft down to EGP -10.
- Continued order creation below the overdraft limit while masking customer data until the merchant recharges sufficiently.
- Completed Phase 1 product discovery and MVP definition, with pilot-specific pricing deferred as a non-blocking pilot-preparation decision.
- Reached the 50/50 GitHub synchronization threshold through D-222 and Q-213, excluding skipped Q-210.

## 2026-08-15 — Phase 1 GitHub synchronization completed

### Changed

- Uploaded the completed Phase 1 planning documentation through D-222 and Q-213 to private `AM-naguib/lala` on `main`.
- Reset the GitHub synchronization counter to 0/50.
- Left Q-210 pilot-specific pricing explicitly deferred and recorded no active Phase 1 product questions.

## 2026-08-22 — Batch 6 Discounts and portable source publication

### Added

- Accepted Batch 5 Customers after founder review.
- Delivered Discounts list and Coupon editor with only the three approved reward types and the controlled coupon lifecycle states.
- Added the complete portable static frontend source under `prototype/`, including all current HTML screens, token and font assets, Alpine markup, extraction markers, constants reference, and the static contract test.

### Changed

- Added Discounts as a level-one Merchant module on desktop and mobile navigation.
- Advanced the frontend review gate to Batch 6 before Batch 7 Shipping zones and Bosta.

## 2026-08-22 — Unified motion system

### Added

- Added motion tokens for fast, base, toast, modal, and drawer timing plus standard, emphasized, and exit easing.
- Added portable Alpine transition patterns for modals, drawers, popovers, toasts, and conditional state surfaces.
- Added a Motion section to the Component Gallery and a dedicated `prototype/docs/MOTION-SYSTEM.md` contract.
- Added automated checks requiring every dialog, drawer, and toast to follow the motion contract.

### Changed

- Replaced abrupt modal and drawer appearance across current screens with directional, reduced-motion-safe transitions.
- Added the motion upgrader to the static build so future HTML screens inherit the contract automatically.

## 2026-08-22 — Batch 7 Shipping zones and Bosta

### Added

- Accepted Batch 6 Discounts and advanced the static roadmap to Batch 7.
- Added Shipping zones, Zone editor, Custom locations, Shipping integrations, and Bosta connection screens.
- Added overlap, unsupported-location, free-shipping, credential-error, disconnected, and connected states.
- Added exact Bosta event mapping and clear separation between shipment creation and core order status.
- Added single-order Not sent, Sending, Sent, Failed/retry, and duplicate-active-shipment states.
- Added a bulk Bosta submission summary with sent, blocked, and failed outcomes.

### Changed

- Added Shipping as one coherent level-one Merchant module on desktop and mobile.
- Updated the Component Gallery through Batch 7.
- Advanced the frontend review gate to Batch 7 before Batch 8 Dashboard and Analytics.

## 2026-08-22 — Batch 11 Storefront themes and homepage builder

### Added

- Added a research-backed `docs/storefront/` folder covering theme architecture, builder UX, section catalog, token boundaries, execution plan, and deferred decisions.
- Added Themes, Theme preview, Branding, and Homepage builder static screens.
- Added Essential, Editorial, and Bold presets over one shared storefront renderer.
- Added missing logo/favicon, contrast warning, desktop/mobile preview, content-preserving apply confirmation, section reorder, hide/show, add, undo/redo, and save states.
- Added purpose-built Luna fragrance imagery as static local SVG assets.
- Added Batch 11 contract tests and extended the shared build to regenerate the screens and Storefront navigation.

### Changed

- Added Storefront as a level-one Merchant module after Shipping and before Settings across current desktop and mobile navigation.
- Added separate 80rem Storefront and 390px mobile-preview constants without changing the 90rem Merchant Admin container.
- Advanced the frontend review gate to Batch 11 before Batch 12 Pages and Contact inbox.

### Verified

- Passed the full production build and 18 automated tests.
- Verified IBM Plex Sans Arabic shaping, IBM Plex Mono loading, RTL direction, LTR price/domain isolation, modal and builder interactions, true 390px preview layout, and zero horizontal overflow in a real browser.
