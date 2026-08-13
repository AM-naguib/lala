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
- **Open detail:** How geographic areas are assigned to zones is not yet decided.

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
