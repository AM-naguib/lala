# Open Questions

Only confirmed answers become decisions. Questions are ordered by the point at which they block Phase 1.

## Resolved in Batch 2

### Q-001 — Product types

**Resolved:** Physical and digital products. See D-007.

### Q-002 — Storefront identity

**Resolved:** Hosted `lala` subdomain plus optional custom-domain connection. See D-008.

### Q-003 — Checkout and payments

**Resolved:** COD only for the initial release. See D-009.

## Resolved in Batch 3

### Q-004 — Digital products under COD

**Resolved:** Postpone paid digital-product selling and delivery from the initial release. See D-010.

### Q-005 — Launch languages

**Resolved:** Arabic and English for both the dashboard and storefront. See D-011.

### Q-006 — Currency model

**Resolved:** Each merchant selects one operating currency for the whole store. See D-012.

## Resolved in Batch 4

### Q-007 — Shipping rate model

**Resolved:** The merchant creates shipping zones and assigns a delivery price to each zone. See D-013.

### Q-008 — Shipping coverage

**Resolved:** Each store operates in one country and delivers to zones inside that country. See D-014.

**Superseded:** D-084 removes the store-level country; D-087 and D-088 define current shipping-country capacity and Egypt-only Phase 1 availability.

### Q-009 — Taxes and extra fees

**Resolved:** The initial release has no tax section, calculation, or separate tax line. See D-015.

## Resolved in Batch 5

### Q-010 — Building shipping zones

**Resolved in two steps:** Batch 5 established preloaded country subdivisions; Batch 6 added both direct subdivision pricing and grouped custom zones. See D-016 and D-020.

### Q-011 — Delivery handoff

**Resolved in two steps:** Batch 5 established optional, extensible provider connections; Batch 6 selected Bosta as the first integration. See D-017 and D-021.

### Q-012 — Customer delivery address

**Resolved in two steps:** Batch 5 defined the supported checkout fields; Batch 6 made their requiredness merchant-configurable. See D-018 and D-022.

## Resolved in Batch 6

### Q-013 — Subdivisions and custom zones

**Resolved:** Support both direct pricing per subdivision and grouped custom zones. See D-020.

### Q-014 — First shipping provider

**Resolved:** Bosta first, followed by additional providers. See D-021.

### Q-015 — Required checkout fields

**Resolved:** The merchant configures which supported fields are required or optional. See D-022.

## Resolved in Batch 7

### Q-016 — Cart and Buy Now

**Resolved:** Support both a multi-product cart and direct Buy Now. See D-023.

### Q-017 — Guest or account checkout

**Resolved:** Customer accounts are optional and guest checkout is the default. See D-024.

### Q-018 — COD order verification

**Resolved:** Create the COD order immediately without OTP or pre-verification. See D-025.

## Resolved in Batch 8

### Q-019 — Order statuses

**Resolved at the product level:** Provide core statuses and merchant-defined custom statuses. The exact core list remains a detailed requirement. See D-027.

### Q-020 — Inventory reservation

**Resolved:** Deduct inventory immediately on order creation and restore it when the order is cancelled. See D-028.

### Q-021 — Order notifications

**Resolved:** Merchant dashboard and email. See D-029.

## Resolved in Batch 9

### Q-022 — Product variants

**Resolved:** Support flexible product options with independent inventory per variant when tracking is enabled. See D-030.

### Q-023 — Out-of-stock selling

**Resolved in two steps:** Inventory tracking is optional with quantity required when enabled; tracked items become unavailable at zero until restocked or tracking is disabled. See D-031 and D-033.

### Q-024 — Catalog organization

**Resolved:** Categories, collections, and tags. See D-032.

## Resolved in Batch 10

### Q-025 — Zero-stock behavior

**Resolved:** Mark it Out of Stock and block purchase until stock is added or tracking is disabled. See D-033.

### Q-026 — Product identifiers

**Resolved:** SKU only; barcode is not included in the current MVP. See D-034.

### Q-027 — Product price fields

**Resolved:** Selling price, compare-at price, and cost. See D-035.

## Resolved in Batch 11

### Q-028 — Product media

**Resolved:** Multiple product images and an optional video. Video source and delivery behavior remain a detailed requirement. See D-036.

### Q-029 — Bilingual product content

**Resolved:** Separate Arabic and English product-content fields with one merchant-selected primary language. See D-037.

### Q-030 — Discounts

**Resolved at the mechanism level:** Coupon codes are included and automatic discounts are deferred beyond the MVP. Coupon configuration details remain a later requirement. See D-038 and D-039.

### Q-030A — Automatic discounts

**Resolved:** Do not include automatic discounts in the initial release. See D-039.

## Resolved in Batch 12

### Q-031 — Product video source

**Resolved:** Upload a video file only; external video links are not part of the current MVP. See D-040.

### Q-032 — Missing translation fallback

**Resolved:** Display the primary-language content automatically. See D-041.

## Resolved in Batch 13

### Q-033 — Coupon discount types

**Resolved:** Percentage discount, fixed-amount discount, and free shipping. See D-043.

### Q-034 — Coupon controls

**Resolved:** Validity period, total usage limit, and minimum order amount. See D-044.

### Q-035 — Product publication states

**Resolved:** Published and Hidden only. See D-045.

## Resolved in Batch 14

### Q-036 — Coupon applicability

**Resolved:** The whole order only in the current MVP. See D-046.

### Q-037 — Multiple coupons per order

**Resolved:** One coupon code per order. See D-047.

### Q-038 — Product deletion

**Resolved:** Soft-delete the product instead of physically deleting its record. See D-048.

## Resolved in Batch 15

### Q-039 — New product default state

**Resolved:** Published immediately when saved. See D-049.

### Q-040 — Restore soft-deleted products

**Resolved:** Yes, through a Trash view with a restore action. See D-050.

### Q-041 — Coupon minimum-order basis

**Resolved:** Products subtotal before the coupon discount, excluding shipping. See D-051.

## Resolved in Batch 16

### Q-042 — Required fields for immediate publication

**Resolved:** Name in the store's primary language and selling price. See D-052.

### Q-043 — Visibility after restoration

**Resolved:** Hidden, so the merchant can review it before republishing. See D-053.

### Q-044 — Per-customer coupon limit

**Resolved:** No per-customer limit; only the configured total usage limit applies. See D-054.

## Resolved in Batch 17

### Q-045 — Core order statuses

**Resolved:** New, Confirmed, Processing, Shipped, Delivered, Cancelled, and Returned, plus custom statuses. See D-055.

### Q-046 — Merchant order editing

**Resolved at the scope level:** All order data. Edit cutoff, recalculation, and audit behavior remain detailed requirements. See D-056.

### Q-047 — Customer cancellation

**Resolved:** No; the customer must contact the merchant. See D-057.

## Resolved in Batch 18

### Q-048 — Order edit cutoff

**Resolved:** In every status, including after delivery. See D-058.

### Q-049 — Inventory and total recalculation

**Resolved:** Recalculate totals and apply the inventory difference automatically. See D-059.

### Q-050 — Order edit history

**Resolved:** Yes; record who changed what and when. See D-060.

## Resolved in Batch 19

### Q-051 — Full and partial returns

**Resolved after clarification:** Support full-order returns only and defer partial item or quantity returns. See D-063.

### Q-052 — Returned inventory

**Resolved:** Returned items do not go back into available inventory automatically. See D-061.

### Q-053 — Order-status transitions

**Resolved at the policy level:** Use a logical default flow with manual override. The exact transition map remains a detailed requirement. See D-062.

### Q-051A — Recording a partial return

**Resolved:** Deferred beyond the MVP. See D-063.

## Resolved in Batch 20

### Q-054 — Manual return restocking

**Resolved:** Manually adjust inventory from the product page. See D-064.

### Q-055 — Exact default status flow

**Resolved with a revised policy:** No default path; all statuses are freely selectable. See D-065, which supersedes D-062.

### Q-056 — Custom-status side effects

**Resolved after clarification:** Informational organization only, without automatic actions. See D-066.

### Q-056A — Custom status behavior

**Resolved:** Organization and classification only. See D-066.

## Partially resolved in Batch 21

### Q-057 — Merchant email events

**Resolved in Batch 22 after clarification:** Send merchant order-event email for a new order only. See D-070.

### Q-057A — Shipping-provider submission initiation

**Resolved:** The merchant selects orders and explicitly sends them to the shipping provider; there is no automatic submission. See D-067.

### Q-058 — Customer order notifications

**Resolved:** Order confirmation and core-status change emails. See D-068.

### Q-059 — Low-stock warnings

**Resolved:** A merchant-defined threshold with dashboard and email warnings. See D-069.

## Resolved in Batch 22

### Q-057B — Merchant email events clarification

**Resolved:** New order only. See D-070.

### Q-060 — Shipping submission selection

**Resolved:** Both one order and a selected group of orders. See D-071.

### Q-061 — Shipping submission failure

**Resolved:** Keep the order Not Sent, display the failure reason, and provide a retry action. See D-072.

## Resolved in Batch 23

### Q-062 — Shipping-provider account connection

**Resolved:** Enter credentials for the merchant's own provider account. See D-073.

### Q-063 — Successful shipping submission effect

**Resolved:** Store the shipment number, provider status, and label without changing the order's core status. See D-074.

### Q-064 — Fulfillment without an integration

**Resolved:** Change the order status only; do not store manual carrier or tracking data. See D-075.

## Resolved in Batch 24

### Q-065 — Merchant account creation

**Resolved:** Email address, phone number, and password. See D-076.

### Q-066 — First-time store setup

**Resolved:** Store name, `lala` subdomain, operating country, currency, and primary language. See D-077.

**Revised:** D-084 removes operating country from the setup requirements.

### Q-067 — Initial storefront availability

**Resolved:** Immediately after initial setup, without requiring a product or separate publish action. See D-078.

## Resolved in Batch 25

### Q-068 — Merchant contact verification

**Resolved:** Verify the phone number only; email verification is not required in the MVP. See D-079.

### Q-069 — Store subdomain changes

**Resolved:** Yes, from settings, without redirecting the old subdomain. See D-080.

### Q-070 — Country and currency changes after orders

**Resolved:** Both can change at any time. See D-081.

**Revised:** D-084 removes the store-country setting; unrestricted currency changes remain.

## Partially resolved in Batch 26

### Q-071 — Historical orders after store-setting changes

**Resolved:** Preserve the country and currency captured when the order was created. See D-082.

**Revised:** After D-084, orders preserve recorded destination data and currency; there is no store-country setting to snapshot.

### Q-072 — Product prices after currency change

**Resolved:** Keep the same numeric values and change only the currency code or symbol. See D-083.

### Q-073 — Shipping zones after country change

**Needs clarification:** “Hide” means keeping the previous country's zones and rates saved but inactive while another country is selected. See Q-073A.

## Resolved in Batch 27

### Q-073A — Previous-country shipping configuration

**Resolved by model correction:** The store has no country, so zones are not hidden or removed by a store-country change. See D-084.

### Q-074 — Previous subdomain reuse

**Resolved:** Reserve it for 10 days, with a maximum of three hosted-subdomain changes per store. See D-085.

### Q-075 — Phone-verification delivery channel

**Resolved:** WhatsApp only. See D-086.

## Partially resolved in Batch 28

### Q-076 — Shipping-country coverage

**Resolved:** Any number of platform-supported countries. See D-087.

### Q-077 — Delivery country at checkout

**Resolved for Phase 1:** Egypt is the only supported shipping country, so no multi-country customer choice is needed. See D-088.

### Q-078 — Cross-country shipping zones

**Not selected and deferred:** This does not affect Phase 1 while Egypt is the only supported country. Reopen when a second country is introduced.

## Resolved in Batch 29

### Q-079 — Egypt country field at checkout

**Resolved:** Hide it and store Egypt automatically. See D-089.

### Q-080 — Egypt geography depth

**Resolved:** Governorate followed by city or area. See D-090.

### Q-081 — Address outside configured zones

**Resolved:** Block order submission and explain that shipping is unavailable. See D-091.

## Resolved in Batch 30

### Q-082 — Overlapping shipping zones

**Resolved:** No; prevent overlap between active zones. See D-092.

### Q-083 — Shipping-price display timing

**Resolved:** Immediately after governorate and city or area selection. See D-093.

### Q-084 — Missing preloaded geography

**Resolved:** Yes; add a custom location under its governorate. See D-094.

## Resolved in Batch 31

### Q-085 — Custom-location visibility

**Resolved:** Only within that merchant's store. See D-095.

### Q-086 — Zero-price shipping zone

**Resolved:** Yes; display it as free shipping. See D-096.

### Q-087 — Zone-price changes

**Resolved:** Existing orders retain their captured price; orders created afterward use the new price immediately. See D-097.

## Resolved in Batch 32

### Q-088 — Stores per merchant account

**Resolved:** Multiple stores with independent settings and data. See D-098.

### Q-089 — Store team access

**Resolved:** No; owner-only access in the MVP. See D-099.

### Q-090 — Store deletion

**Resolved:** Disable it without deleting its data. See D-100.

## Resolved in Batch 33

### Q-091 — Store-count limit

**Resolved:** Unlimited. See D-101.

### Q-092 — Store reactivation

**Resolved:** Through `lala` support only. See D-102.

### Q-093 — Disabled-store visitor experience

**Resolved:** A clear page stating that the store is currently unavailable. See D-103.

## Resolved in Batch 34

### Q-094 — Storefront theme choice

**Resolved:** Multiple ready-made themes. See D-104.

### Q-095 — Storefront brand controls

**Resolved:** Logo, colors, fonts, and favicon. See D-105.

### Q-096 — Homepage composition

**Resolved:** Add, hide, and reorder predefined sections. See D-106.

## Resolved in Batch 35

### Q-097 — Theme switching

**Resolved:** Preview before applying and preserve storefront content. See D-107.

### Q-098 — Initial homepage sections

**Resolved:** Hero or Slider only from the proposed initial set. See D-108.

### Q-099 — Static storefront pages

**Resolved:** About Us, Contact, Shipping and Returns, Privacy Policy, and Terms and Conditions. See D-109.

## Resolved in Batch 36

### Q-100 — Custom static pages

**Resolved:** Yes; unlimited custom static pages. See D-110.

### Q-101 — Bilingual static-page content

**Resolved:** Separate fields with primary-language fallback. See D-111.

### Q-102 — Contact-page functionality

**Resolved:** Customer contact form plus store contact details. See D-112.

## Resolved in Batch 37

### Q-103 — Storefront product search

**Resolved:** Product name only. See D-113.

### Q-104 — Storefront product filters

**Resolved:** Price, category or collection, availability, and product options. See D-114.

### Q-105 — Storefront product sorting

**Resolved:** Featured, Newest, Price Low to High, Price High to Low, and Name. See D-115.

## Resolved in Batch 38

### Q-106 — Product-list loading

**Resolved:** Automatically while the customer scrolls. See D-116.

### Q-107 — Default product sort

**Resolved:** Featured. See D-117.

### Q-108 — Featured-product curation

**Resolved:** The merchant manually selects Featured products and freely controls their order. See D-118.

## Resolved in Batch 39

### Q-109 — Product-card content

**Resolved:** Product image, name, selling price, compare-at price when present, and inventory state. See D-119.

### Q-110 — Out of Stock list presentation

**Resolved:** They remain in their assigned position and show an Out of Stock label. See D-120.

### Q-111 — Product-option selection

**Resolved:** The first available variant is selected automatically, and the customer can change options afterward. See D-121.

## Resolved in Batch 40

### Q-112 — Variant-specific data

**Resolved:** Selling price, compare-at price, cost, SKU, inventory quantity, and image. See D-122.

## Now — Batch 41

### Q-113 — Unavailable variant combinations

How are unavailable or Out of Stock variant combinations presented to the customer?

### Q-114 — Product quantity selection

Where can the customer choose the quantity of a product?

### Q-115 — Related products

Does the product page include related products, and how are they selected?

## Later in Phase 1

- Merchant onboarding steps.
- Catalog variants, inventory, discounts, and order-management depth.
- MVP success metric and beta approach.
- Initial monetization hypothesis.

## Explicitly deferred beyond Phase 1

- Final technology stack.
- Full enterprise feature set.
- App/integration marketplace.
- Later-phase growth roadmap.
- Cross-country shipping-zone composition, to be reopened when a second shipping country is supported.
