# Next Work

> Current execution queue for `lala`. Only items marked **Accepted** are binding decisions; proposed sequencing is planning guidance until the founder approves or implementation makes it concrete. Last updated 2026-08-21 (Africa/Cairo).

## Immediate static-design queue

1. **Review Design Batches 2 and 3** — inspect Orders plus Products and Inventory screens and record acceptance or requested revisions.
2. **Define the exact next static batch** — Batch 4+ is not approved yet; do not invent its screens.
3. **Continue portable static delivery after approval** — one plain HTML file per screen, Tailwind CSS v4-compatible tokens and classes, Alpine.js CDN markup, extraction markers, real Arabic/English, and RTL/LTR parity.
4. **Keep Laravel implementation postponed** — do not create application code, migrations, queues, authentication, or integrations until the founder explicitly starts implementation.
5. **Keep pilot-specific pricing deferred** until pilot preparation.

The future Laravel architecture remains documented and accepted, but it is not part of the current work queue.

## Future implementation sequence — postponed

This sequence is retained only as a future handoff. Do not execute it during the current static-design phase.

1. Bootstrap Laravel 13 on PHP 8.5 with MySQL, Redis/Horizon, Pest, Tailwind CSS v4, Livewire, Blade, and Alpine.js.
2. Establish tenant context, `store_id` isolation, domains resolution, authorization boundaries, and mandatory cross-tenant tests.
3. Implement Admin, Merchant, and store-scoped Customer authentication plus WhatsApp/email verification boundaries.
4. Move the accepted design tokens, fonts, shell, and primitives into reusable Blade/Livewire components.
5. Build the Orders vertical slice: COD order creation, inventory deduction, wallet charging/masking, seven core statuses, Labels, editing, audit history, print views, and CSV/bulk behavior.
6. Add Bosta connection, manual single/bulk submission, idempotent webhook mapping, shipment storage, retryable failures, and customer notifications.
7. Continue through catalog, checkout, customer records, discounts, shipping zones, analytics, imports/exports, storefront themes, and static pages according to the accepted Phase 1 documents.
8. Prepare the 10-merchant, 30-day pilot and validate the success rule: at least 7 merchants publish and each receives at least 10 real orders.

## Explicitly deferred beyond the MVP

- Paid digital products.
- Online payment gateways and any payment-status or COD-collection lifecycle.
- Tax configuration and calculation.
- Partial returns and automatic restocking of returns.
- Merchant team invitations and roles.
- Native or cross-platform mobile apps.
- Barcode support.
- Estimated-profit reporting.
- Automatic discounts and per-customer coupon limits.
- Manual carrier/tracking records when no provider is connected.

## Required handoff discipline

- Update `00-PROJECT-MEMORY.md` after every material decision.
- Append accepted or superseded decisions to `03-DECISIONS.md`.
- Keep unresolved work in `04-OPEN-QUESTIONS.md`.
- Record deliveries in `08-DELIVERY-STATUS.md`.
- Update this file when ordering or scope changes.
- Never commit secrets, provider credentials, or production customer data.
