# Architecture and Delivery Plan

This file tracks architecture inputs, proposed technology choices, accepted technical decisions, and their rationale. A proposal is not a decision until the founder accepts it.

## Status

- **Phase:** Architecture and delivery planning
- **Started:** 2026-08-15 (Africa/Cairo)
- **Implementation:** Intentionally postponed. Current work is portable static HTML only; Design Batch 1 is accepted and Design Batch 2 is delivered for review.
- **Accepted technology stack:** PHP 8.5; Laravel 13; MySQL; traditional Laravel structure; Livewire with Blade for the merchant dashboard; Blade with Alpine.js and plain JavaScript for the storefront; Tailwind CSS; Redis queues with Horizon; Pest; local pilot file storage

## Delivery sequencing

- Continue static HTML design batches only.
- Do not bootstrap Laravel, create migrations, or implement authentication, queues, persistence, or provider integrations until the founder explicitly starts implementation.
- Preserve this architecture plan as the future production handoff; D-254 changes timing, not the accepted stack.

## Confirmed delivery inputs

- The founder will build the first release with AI assistance.
- Phase 1 is Web-only: merchant dashboard and customer storefront, with no mobile app.
- There is no fixed pilot delivery deadline.
- The architecture must preserve the completed Phase 1 product scope and support multiple independent stores on one multi-tenant platform.
- The founder has no strong existing frontend-framework experience.
- The storefront and merchant dashboard use different Laravel-integrated frontend technologies.
- Multi-tenancy uses a shared MySQL schema with row-level `store_id` isolation.
- Admin, Merchant, and Customer identities have separate authentication boundaries.
- Storefront tenant resolution uses a custom hostname middleware and domains table.

## Design-system delivery input

- Portable design source uses one plain HTML file per screen, Tailwind CSS v4-compatible class strings and token variables, Alpine.js markup, and extraction markers for later Blade/Livewire conversion.
- IBM Plex Sans Arabic is the single UI family for both scripts; IBM Plex Mono is restricted to operational numerals and identifiers.
- The merchant-table standard is 52px rows with 12px × 16px cell padding and 14px/20px body text.
- Design Batch 1 foundations are accepted.
- Design Batch 2 Orders screens are delivered for review.
- These prototypes do not implement Laravel rules, persistence, authentication, queues, provider integrations, or tests.

## Accepted backend direction

| Layer | Decision | Why it fits |
|---|---|---|
| Backend language | PHP | Matches the founder's production backend experience. |
| Backend framework | Laravel 13 on PHP 8.5 | Provides the core Web, database, queue, notification, authorization, scheduler, and testing building blocks needed by the MVP. |
| Code organization | Traditional Laravel structure | Matches the founder's selected organization model and existing Laravel experience. |
| Primary database | MySQL | Explicitly selected by the founder for transactional application data. |
| Queue backend | Redis + Horizon | Supports retryable background work with Laravel-native monitoring. |
| Test framework | Pest | Provides the selected concise syntax on top of Laravel's testing facilities. |

## Accepted frontend direction

| Layer | Decision | Why it fits |
|---|---|---|
| Merchant dashboard | Livewire + Blade | Keeps interactive dashboard development in PHP and Laravel while supporting components, forms, filters, and operational actions. |
| Customer storefront | Blade + Alpine.js | Keeps storefront rendering in Laravel, favors direct HTML delivery and straightforward theme composition, and uses focused browser-side interaction. |
| Styling | Tailwind CSS | Provides one utility and design-token system across dashboard components and customizable storefront themes. |
| Browser language | Plain JavaScript | Fits the limited Alpine.js behavior without introducing a TypeScript toolchain policy. |
| Pilot file storage | Local Laravel disk | Reduces initial infrastructure while retaining a disk-agnostic path to S3-compatible storage. |
| Repository | One Laravel repository | Minimizes operational and code-navigation overhead for a founder working with AI. |

## Accepted runtime, identifiers, and authentication

| Concern | Decision |
|---|---|
| Sessions | Redis via PhpRedis, using a dedicated connection or prefix. |
| Cache | Redis via PhpRedis, isolated from sessions and queues by connection or prefix. |
| Distributed locks | Laravel cache locks backed by Redis. |
| Rate limiting | Laravel RateLimiter backed by the Redis cache store with named limiters per identity and endpoint class. |
| Internal keys | Unsigned auto-incrementing BIGINT primary keys. |
| Public identifiers | Separate immutable indexed ULID `public_id` values; internal IDs are never exposed. |
| Merchant authentication | Laravel 13 Livewire starter kit and Fortify foundation, customized for the Merchant model and WhatsApp verification. |
| Admin authentication | Separate Admin guard/provider and password broker; no public registration. |
| Customer authentication | Store-scoped Customer guard/provider with custom Blade email/WhatsApp verification and recovery flows. |
| API authentication | None in the MVP; do not add Sanctum or Passport without an API requirement. |

Official Laravel references:

- Sessions: https://laravel.com/docs/13.x/session
- Cache and locks: https://laravel.com/docs/13.x/cache
- Rate limiting: https://laravel.com/docs/13.x/rate-limiting
- Eloquent UUID/ULID support: https://laravel.com/docs/13.x/eloquent#uuid-and-ulid-keys
- Livewire starter kit and Fortify: https://laravel.com/docs/13.x/starter-kits and https://laravel.com/docs/13.x/fortify

## Current language policy

- Use PHP for all backend application code, domain rules, HTTP endpoints, queues, scheduled jobs, integrations, and server-side tests.
- Use Laravel-native backend features before adding separate backend frameworks or runtimes.
- No JavaScript SPA framework or TypeScript is part of the initial stack. Alpine.js behavior uses plain JavaScript.
- Use SQL for schema design, migrations, constraints, indexes, and performance-sensitive queries, even when an ORM is used.
- Use HTML/CSS through the selected Laravel frontend approach and styling system.
- Use YAML, shell scripts, or infrastructure configuration only as supporting configuration, not as core product languages.
- Do not introduce a second backend language or framework into the MVP unless a later requirement gives a concrete reason.

## Accepted application shape

- One Laravel application and repository unless the frontend decision later requires a separate application.
- Standard Laravel directories and conventions without a module framework.
- Focused controllers, form requests, policies, Eloquent models, service/action classes where useful, jobs, events, listeners, notifications, and console commands.
- Livewire components and Blade templates for the merchant dashboard.
- Blade templates and focused Alpine.js behavior for the storefront.
- Laravel queue workers for email, WhatsApp, imports, exports, Bosta events, and media processing. Workers are separately running processes from the same codebase, not microservices.
- Laravel `Storage` disks for every upload and generated file; no feature code may depend on an absolute local path.
- A dedicated platform-owner area in the same application with separate authorization boundaries.
- Separate `admins`, `merchants`, and store-scoped `customers` identity models, guards, providers, verification, and reset flows.
- A `domains` table and tenant-resolution middleware that supports hosted and verified custom hostnames.

## Architecture guardrails

- Start as one traditional Laravel application, not microservices.
- Keep every store-owned record tenant-scoped and enforce tenant isolation centrally.
- Treat tenant isolation as defense in depth: context, global scope, scoped relationships, policies, composite constraints and indexes, and mandatory cross-tenant tests.
- Never accept `store_id` from customer or merchant request input as the source of tenant truth.
- Re-establish and clear tenant context explicitly for every queued job.
- Use database transactions and idempotency for order creation, inventory changes, wallet charging, coupon usage, and Bosta webhook handling.
- Snapshot mutable commercial data on orders so historical totals and customer-visible records remain stable.
- Keep provider credentials encrypted and out of source control and logs.
- Masking customer data for wallet debt is an authorization/presentation rule; do not destroy or overwrite the stored order snapshot.

## Remaining implementation-level choices

No architecture choice blocks bootstrapping the Laravel application.

The following are implementation details to record through focused ADRs when encountered rather than reopening the accepted stack:

1. Exact Redis connection names, database numbers, prefixes, and eviction policy.
2. Exact `public_id` storage representation and indexes after MySQL benchmark verification.
3. Production hosting provider, deployment topology, backups, monitoring, and recovery targets.
4. Exact human-facing order-number format and starting sequence.
