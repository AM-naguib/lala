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

## Current interpretation

- “Anyone who wants to create an online store” is the broad vision, not yet a sufficiently narrow first-use-case definition.
- “Global from day one” is partially defined: `lala` can host merchants in different countries, while each MVP store operates in one country. Detailed country availability and legal/compliance coverage remain unresolved.
- The earlier plan to sell physical and digital products in the MVP was narrowed: paid digital selling is postponed because COD has no physical collection event.
- Arabic and English interface support is confirmed. Whether merchants enter bilingual catalog content or choose one content language is not yet decided.
- The rule for changing a store's currency after products or orders exist is not yet decided.
- “Global from day one” now means the platform can host stores in different countries; it does not mean that a single store sells or delivers across multiple countries in the MVP.
- The detailed method for building a shipping zone (official regions versus free-form areas), delivery handoff, and customer address fields is not yet decided.
- The remaining MVP feature set and technical architecture are not decided yet.

## Active objective

Define a coherent Phase 1 MVP by answering only the decisions that materially affect the first usable release.

## Current blockers

- No repository blocker. The private source repository is `https://github.com/AM-naguib/lala` and is the synchronization target for project memory and planning.

## Next decisions to obtain

1. How does a merchant build shipping zones within the selected country?
2. Does `lala` only manage the order while the merchant arranges delivery, or must the MVP include a shipping-company connection?
3. Which customer address fields are required at checkout?

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
