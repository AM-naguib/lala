# Next Work

> Current execution queue for `lala`. Only items marked **Accepted** are binding decisions; proposed sequencing is planning guidance until the founder approves or implementation makes it concrete. Last updated 2026-08-21 (Africa/Cairo).

## Immediate review queue

1. **Review Design Batch 2** — inspect Orders list, order detail, manual creation, and print views.
2. **Define the exact Batch 3 scope** — the approved design plan retrieved so far ends after Batch 2 and does not name Batch 3+ screens. Do not invent later batches.
3. **Resolve repository visibility** — project decision D-002 requires a private repository, while GitHub currently reports `AM-naguib/lala` as public.
4. **Decide the remaining architecture inputs:**
   - session, cache, distributed-lock, and rate-limit storage;
   - internal primary-key and public identifier formats;
   - Laravel authentication foundation and custom-flow boundaries.
5. **Keep pilot-specific pricing deferred** until pilot preparation unless the founder chooses to decide it earlier.

## Proposed implementation sequence

This sequence is not yet an accepted product decision.

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
