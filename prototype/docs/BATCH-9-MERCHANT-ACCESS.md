# Batch 9 — Merchant access and onboarding

This file records the portable static contract implemented in Batch 9.

## Screens

- `merchant-sign-in.html` — email-or-phone and password access.
- `merchant-sign-up.html` — email, phone, password, and phone-verification entry.
- `merchant-verify-phone.html` — WhatsApp verification and failure states.
- `merchant-password-recovery.html` — recovery start and channel feedback.
- `merchant-reset-password.html` — new-password states.
- `store-onboarding.html` — first-store setup.
- `stores-list.html` — empty account, store switching, and creating another store.

## Fixed verification rules

- Merchant phone verification uses WhatsApp only.
- A code is valid for 10 minutes.
- Resend becomes available after 60 seconds.
- Each phone number may receive at most five sends per rolling hour.
- Five wrong attempts invalidate the current code.
- WhatsApp delivery failure keeps the account unverified. Later retry or support contact is available, but there is no email fallback or bypass.
- Merchant email verification is not part of the MVP.

## First-store rules

- Setup asks only for store name, desired `lala` subdomain, operating currency, and primary language.
- A store-country field is not present; Egypt coverage is configured separately through Shipping zones.
- Subdomain availability is checked before creation.
- The storefront becomes public immediately after setup, even with an empty catalog.
- One owner can create and switch among unlimited independent stores.
- Team invitations and member roles remain excluded.

## UX placement

Access and recovery screens use a focused shell before any store context exists. Store onboarding and the store list use an account-level shell. The current store card in every Merchant sidebar links to `stores-list.html`.

## Boundary

The implementation is static HTML with Tailwind CSS v4 classes and Alpine.js prototype state. It does not add real authentication, WhatsApp delivery, persistence, subdomain reservation, or Laravel code.
