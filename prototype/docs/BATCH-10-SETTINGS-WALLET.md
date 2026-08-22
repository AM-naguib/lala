# Batch 10 — Store Settings and Wallet

Status: Delivered for founder review. Static HTML only.

## Screens

- `store-settings-general.html` — store name, currency, primary language, and hosted `lala` subdomain.
- `store-settings-checkout.html` — the exact supported Checkout fields with Required/Optional control.
- `store-settings-domains.html` — custom-domain connection, verification, primary routing, HTTPS, and failure fallback.
- `store-settings-notifications.html` — the confirmed merchant and customer notification events.
- `wallet.html` — balance, per-order fee, activity, recharge amount, and calm/watch/overdraft states.
- `store-status.html` — enabled, disable confirmation, visitor unavailable page, and support-only reactivation.

## Information architecture

Settings is one level-one Merchant module with General, Checkout, Domains, Notifications, Wallet, and Store status as internal sections. Wallet has a second intentional entry point: every Merchant-header balance chip opens `wallet.html`.

## Binding product rules

- A hosted subdomain can change at most three times. The old name does not redirect and remains reserved for 10 days. After the third change it is permanently locked, including for support.
- Custom domains are independent and have no numeric change cap. A verified custom domain becomes primary and the hosted subdomain redirects to it. If the custom domain fails, the hosted address becomes primary again and the merchant is alerted.
- Currency changes never convert existing numeric product or variant prices. Historical orders retain their captured currency.
- Checkout supports only Name, Primary phone, Address, City/area, Email, Alternate phone, and Order notes. Each is Required or Optional. Country is hidden in Phase 1 and Egypt is stored automatically.
- Cash on delivery is the only payment method and there are no tax settings or payment-status fields.
- Merchants receive Dashboard and email notifications for new orders and low stock only. Customers receive order confirmation and core-status emails only when an email exists. Labels never notify.
- The wallet is prepaid, has no recurring subscription, and starts with an EGP 1 fee per created order.
- Orders continue below EGP -10, but customer data is masked until the balance returns to EGP -10 or higher.
- Recharge captures an amount only; this prototype does not select or assume a payment method.
- Disabling a store retains all stored data. Visitors see an unavailable page, and only `lala` support can reactivate the store.

## Static implementation contract

Every screen is a portable plain `.html` file using Tailwind CSS v4 CDN classes, Alpine.js CDN markup, real Arabic and English copy, RTL/LTR support, the shared `max-w-app` frame, and `<!-- component: ... -->` extraction markers. No persistence, DNS calls, notifications, wallet charging, payment processing, authentication, or Laravel code is implemented.

