# Phase 1 — Discovery and MVP Definition

## Status

- **State:** active
- **Started:** 2026-08-14
- **Planning principle:** answer only what is needed to define the first usable release.

## Purpose

Turn the broad `lala` vision into a focused, testable MVP scope before architecture or implementation begins.

## Phase goals

1. Define the merchant journey from sign-up to receiving the first order.
2. Define the customer journey from visiting a store to completing an order.
3. Select the commerce primitives required for the first release.
4. Clarify what “global from day one” means for the MVP.
5. Establish MVP inclusion and exclusion boundaries.
6. Define success criteria that prove the MVP is useful.

## Required decisions

### Product model

- Supported product types: **revised — physical products in the initial selling flow; paid digital selling is postponed**.
- Storefront identity: **decided — hosted `lala` subdomain with optional custom domain**.
- Merchant onboarding and store setup flow.
- Minimum catalog, inventory, order, and customer capabilities.

### Transaction model

- Cart and checkout behavior.
- Payment baseline: **decided — COD only for the initial release**.
- Paid digital-product handling: **decided — postponed from the initial release**.
- Order lifecycle and merchant fulfillment workflow.
- Shipping pricing: **decided — merchant-defined shipping zones with one delivery price per zone**.
- Delivery handoff and shipping-company integration scope.

### Global baseline

- Interface languages at launch: **decided — Arabic and English for dashboard and storefront**.
- Merchant catalog-content translation behavior.
- Store currency model: **decided — one merchant-selected operating currency per store**.
- Store-currency change rules after products or orders exist.
- Store country: **decided — one merchant-selected operating country per store**.
- Shipping coverage: **decided — zones inside the selected country only**.
- Customer address fields and zone-matching behavior.
- Taxes: **decided — no tax feature or separate tax line in the initial release**.

### Business validation

- MVP success metric.
- Pilot/beta approach.
- Monetization assumptions only to the depth needed to validate the MVP.

## Phase exit criteria

Phase 1 is complete when all of the following exist:

- One-sentence target use case for the MVP.
- End-to-end merchant and buyer journeys.
- Prioritized feature list with explicit exclusions.
- Defined global baseline and known regional limitations.
- Testable MVP success metrics.
- Sufficient requirements to make an informed architecture decision.

## Not part of this phase

- Writing production application code.
- Finalizing a long-term architecture prematurely.
- Planning an app marketplace or broad enterprise feature set without MVP evidence.
- Building every feature found in reference platforms.
- Tax configuration, tax calculation, and separate tax display.

These exclusions govern the planning process, not the eventual product roadmap.
