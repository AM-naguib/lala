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

**Resolved at the product level:** Initially selected core and custom statuses in D-027; D-215 later replaced custom statuses with separate Labels.

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

**Resolved:** New, Confirmed, Processing, Shipped, Delivered, Cancelled, and Returned. D-215 later moved additional merchant organization to separate Labels. See D-055 and D-215.

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

**Resolved at the time:** Store shipment data without changing core status. D-213 and D-214 later partially superseded this with automatic Bosta-driven core status updates. See D-074.

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

## Resolved in Batch 41

### Q-113 — Unavailable variant combinations

**Resolved:** They remain visible but disabled with a clear Unavailable label. See D-123.

### Q-114 — Product quantity selection

**Resolved:** On both the product page and in the cart, up to available tracked inventory. See D-124.

### Q-115 — Related products

**Resolved:** Yes; automatically from the same category or collection. See D-125.

## Resolved in Batch 42

### Q-116 — Post-add-to-cart behavior

**Resolved:** Show a success message and keep the customer on the current page. See D-126.

### Q-117 — Guest-cart persistence

**Resolved:** 30 days. See D-127.

### Q-118 — Cart price and stock revalidation

**Resolved:** Use current prices, reduce quantities to current availability, and clearly notify the customer. See D-128.

## Resolved in Batch 43

### Q-119 — Buy Now and existing cart

**Resolved:** Checkout the current product only and preserve the existing cart unchanged. See D-129.

### Q-120 — Checkout page structure

**Resolved:** One complete page. See D-130.

### Q-121 — Coupon-entry placement

**Resolved:** In both cart and checkout, sharing the same applied coupon state. See D-131.

## Resolved in Batch 44

### Q-122 — Successful-order confirmation

**Resolved:** Order number, order summary, and current status. The tracking link is omitted because D-133 limits it to email. See D-132.

### Q-123 — Guest order tracking

**Resolved:** Through a unique link sent only by email. See D-133.

### Q-124 — Checkout policy acceptance

**Resolved:** No; the policies do not have to appear during checkout. See D-134.

## Resolved in Batch 45

### Q-125 — Tracking without customer email

**Resolved:** Show the unique tracking link once on the successful-order page. See D-135.

### Q-126 — Guest tracking-page content

**Resolved:** Status and progression, products, totals, and available shipment details. See D-136.

### Q-127 — Order-confirmation email content

**Resolved:** Order number, summary, delivery address, totals, current status, and tracking link. See D-137.

## Resolved in Batch 46

### Q-128 — Customer-account credentials

**Resolved:** Email address or phone number plus password. See D-138.

### Q-129 — Linking guest orders

**Resolved:** Automatically after verifying the matching email address or phone number. See D-139.

### Q-130 — Customer-account self-service

**Resolved:** Order history and tracking, saved addresses, and profile management. See D-140.

## Resolved in Batch 47

### Q-131 — Customer-account scope

**Resolved:** One independent account per storefront. See D-141.

### Q-132 — Customer contact verification

**Resolved:** Email link for email accounts and WhatsApp code for phone accounts. See D-142.

### Q-133 — Customer password recovery

**Resolved:** Email reset link or WhatsApp code according to the verified account channel. See D-143.

## Resolved in Batch 48

### Q-134 — Saved-address capacity

**Resolved:** Unlimited saved addresses with one default. See D-144.

### Q-135 — Changing customer contact details

**Resolved:** Verify the new value before it replaces the old one. See D-145.

### Q-136 — Customer-account deletion

**Resolved:** Delete the account profile and saved addresses while retaining historical order records. See D-146.

## Resolved in Batch 49

### Q-137 — Signed-in customer cancellation

**Resolved:** No; the customer contacts the merchant like a guest. See D-147.

### Q-138 — Repeat a past order

**Resolved:** Add currently available products at current prices and notify the customer about changes. See D-148.

### Q-139 — Default address at checkout

**Resolved:** Preselect it, allow selection or editing, and save changes only after explicit customer choice. See D-149.

## Resolved in Batch 50

### Q-140 — Merchant customer-record consolidation

**Resolved:** Automatically by normalized email or phone, with a merchant alert for conflicts. See D-150.

### Q-141 — Merchant customer notes and tags

**Resolved:** Yes; both internal notes and tags. See D-151.

### Q-142 — Merchant customer blocking

**Resolved:** Yes; by matching email address or phone number without affecting old orders. See D-152.

## Resolved in Batch 51

### Q-143 — Merchant customer-record details

**Resolved:** Identity, addresses, orders and count, total and average spend, last order, tags, and blocked status. See D-153.

### Q-144 — Merchant customer search and filters

**Resolved:** Search by name, phone, and email; filter by tags, block status, order count, spend, and last order. See D-154.

### Q-145 — Customer-data export

**Resolved:** Yes; CSV for all customers or the filtered result set. See D-155.

## Resolved in Batch 52

### Q-146 — Merchant dashboard summary

**Resolved:** Sales, orders by status, average order value, customers, top products, low stock, recent orders, and alerts. See D-156.

### Q-147 — Analytics date ranges and comparison

**Resolved:** Today, Yesterday, 7 days, 30 days, and custom range with previous-period comparison. See D-157.

### Q-148 — Sales recognition

**Resolved:** Every order status, including Cancelled and Returned. See D-158.

## Resolved in Batch 53

### Q-149 — Separate status values

**Resolved:** Yes; both count and value for every status. See D-159.

### Q-150 — Estimated profit

**Resolved:** No estimated-profit report in Phase 1. See D-160.

### Q-151 — Analytics export

**Resolved:** Yes; CSV preserving the selected date range and filters. See D-161.

## Resolved in Batch 54

### Q-152 — Store reporting timezone

**Resolved:** Fixed Cairo timezone. See D-162.

### Q-153 — Top Products ranking

**Resolved:** Merchant toggle between units ordered and total order value. See D-163.

### Q-154 — Analytics freshness

**Resolved:** Within approximately one minute. See D-164.

## Resolved in Batch 55

### Q-155 — Product CSV import

**Resolved:** Preview and validate, import valid rows, and provide an error file for invalid rows. See D-165.

### Q-156 — Product CSV export

**Resolved:** Yes; all or filtered products with variants. See D-166.

### Q-157 — Product bulk editing

**Resolved:** Publication state, organization and tags, prices, inventory, and soft deletion. See D-167.

## Resolved in Batch 56

### Q-158 — Product images in CSV import

**Resolved:** Public URLs that `lala` downloads and stores as copies. See D-168.

### Q-159 — CSV updates versus new records

**Resolved:** Match by `lala` ID first, then SKU; create when unmatched. See D-169.

### Q-160 — Large CSV import processing

**Resolved:** Background job with dashboard notification and downloadable result file. See D-170.

## Resolved in Batch 57

### Q-161 — CSV identity conflict

**Resolved:** Reject the row and modify neither record. See D-171.

### Q-162 — Bulk-action safeguards

**Resolved:** Show affected count and changes, require explicit confirmation, and provide a result file. See D-172.

## Resolved in Batch 58

### Q-163 — Manual merchant order creation

**Resolved:** Use an existing customer or new customer data, with catalog products or custom line items. See D-173.

### Q-164 — Order CSV export

**Resolved:** Export all or currently filtered orders with product and line-item details. See D-174.

### Q-165 — Order bulk updates

**Resolved:** Change status, submit to shipping, and print shipping labels. See D-175.

## Resolved in Batch 59

### Q-166 — Inventory impact of manual orders

**Resolved:** Deduct tracked catalog inventory immediately on save and restore it automatically on cancellation. See D-176.

### Q-167 — Manual-order initial status

**Resolved:** Default to New and allow the merchant to select another available status. See D-177.

### Q-168 — Manual-order customer confirmation

**Resolved:** Send confirmation automatically when an email address exists, without a send toggle. See D-178.

## Partially resolved in Batch 60

### Q-169 — Custom line-item fields

**Clarification requested at the time:** The later Q-169 follow-up rejected non-catalog items entirely. See D-181.

### Q-170 — Manual-order shipping and discounts

**Resolved:** Select a shipping zone or enter shipping manually, add a manual percentage or fixed discount, and calculate the total automatically. See D-179.

### Q-171 — Merchant notification for self-created orders

**Resolved:** Send the same new-order email to the merchant. See D-180.

## Resolved in Batch 61

### Q-169 — Clarified custom order item

**Resolved:** Do not allow non-catalog items in manual orders. See D-181, which partially supersedes D-173.

### Q-172 — Order search fields

**Resolved:** Search by order number, customer name, and customer phone only. See D-182.

### Q-173 — Order-list filters

**Resolved:** Status, date, order source, shipping-submission status, and shipping zone. See D-183.

## Resolved in Batch 62

### Q-174 — Order-list sorting

**Resolved:** Newest first by default, plus oldest first and value high-to-low or low-to-high. See D-184.

### Q-175 — Phase 1 order sources

**Resolved:** Storefront and Dashboard Manual. See D-185.

### Q-176 — Printable order documents

**Resolved:** Invoice and packing slip, printable individually or in bulk. See D-186.

## Resolved in Batch 63

### Q-177 — Invoice content

**Resolved:** Complete store, order, customer, product, price, shipping, discount, total, and note details. See D-187.

### Q-178 — Packing-slip content

**Resolved:** Order and fulfillment details without prices. See D-188.

### Q-179 — Printed-document language

**Resolved:** Use the store's primary language only. See D-189.

## Resolved in Batch 64

### Q-180 — Built-in status mutability

**Resolved:** Rename displayed labels only; built-in statuses cannot be deleted or semantically changed. See D-190.

### Q-181 — Custom-status presentation

**Resolved:** Arabic and English names, color, and manual ordering. See D-191.

### Q-182 — Deleting an in-use custom status

**Resolved:** Require a replacement status, migrate affected orders, then delete. See D-192.

## Resolved in Batch 65

### Q-183 — Bilingual core-status renaming

**Resolved:** Enter one label that appears identically in Arabic and English. See D-193.

### Q-184 — Custom-status count limit

**Resolved at the time:** Maximum 10 custom statuses. D-215 later reinterpreted this as a maximum of 10 Label definitions per store. See D-194 and D-215.

### Q-185 — Notifications during status deletion migration

**Resolved:** No emails; record the administrative migration in audit history. See D-195.

## Resolved in Batch 66

### Q-186 — Merchant verification-code lifetime

**Resolved:** 10 minutes. See D-196.

### Q-187 — Merchant verification-code resend rules

**Resolved:** 60-second cooldown and maximum five sends per rolling hour. See D-197.

### Q-188 — Incorrect merchant verification attempts

**Resolved:** Invalidate the code after five incorrect entries and require a new code. See D-198.

## Resolved in Batch 67

### Q-189 — Customer WhatsApp code rules

**Resolved:** Apply the same rules to customer verification and recovery. See D-199.

### Q-190 — Customer account activation

**Resolved:** Activate only after verification; guest checkout remains available. See D-200.

### Q-191 — Failed merchant WhatsApp delivery

**Resolved:** Remain unverified and retry later or contact support; no fallback or bypass. See D-201.

## Resolved in Batch 68

### Q-192 — Exhausted subdomain changes

**Resolved:** Hosted-subdomain changes stop permanently, including through support. See D-202.

### Q-193 — Empty-store visitor experience

**Resolved:** Render the complete storefront with a no-products message. See D-203.

### Q-194 — Contact-form delivery

**Resolved:** Dashboard inbox plus merchant email notification. See D-204.

## Resolved in Batch 69

### Q-195 — Custom domains after hosted-subdomain lock

**Resolved:** Yes; custom-domain changes are independent and unlimited. See D-205.

### Q-196 — Contact-form fields

**Resolved:** Required name, email, subject, and message; optional phone. See D-206.

### Q-197 — Contact-message replies

**Resolved:** Reply from the dashboard, deliver by email, and retain conversation history. See D-207.

## Resolved in Batch 70

### Q-198 — Primary custom domain

**Resolved:** Custom domain becomes primary and the hosted subdomain redirects to it. See D-208.

### Q-199 — Custom-domain HTTPS

**Resolved:** `lala` issues and renews HTTPS automatically without extra charge. See D-209.

### Q-200 — Custom-domain failure fallback

**Resolved:** Hosted subdomain remains available, becomes primary, and merchant is alerted. See D-210.

## Resolved in Batch 71

### Q-201 — Bosta credential validation

**Resolved:** Test immediately on save and show Connected or the failure reason. See D-211.

### Q-202 — Duplicate shipment prevention

**Resolved:** Block submission and open the current shipment details. See D-212.

### Q-203 — Bosta shipment-status synchronization

**Resolved:** Synchronize automatically and update the core order status. See D-213, which partially supersedes D-074.

## Resolved in Batch 72

### Q-204 — Bosta-to-order status mapping

**Resolved:** Accepted to Processing; picked up or in transit to Shipped; delivered, cancelled, and returned to their matching core statuses; other exceptions alert only. See D-214.

### Q-205 — Manual override versus future Bosta events

**Resolved by model revision:** Keep known lifecycle state in the synchronized core status and put every additional merchant classification in a separate Labels field. See D-215.

### Q-206 — Customer emails for Bosta-driven status changes

**Resolved:** Yes, send the standard core-status emails. See D-216.

## Resolved in Batch 73

### Q-207 — First pilot merchant profile

**Resolved:** Use a mix of new and already-selling merchants. See D-217.

### Q-208 — Pilot size and duration

**Resolved:** 10 merchants for 30 days. See D-218.

### Q-209 — Pilot success metric

**Resolved:** At least 7 publish and each receives at least 10 real orders. See D-219.

## Partially resolved in Batch 74

### Q-210 — Pilot pricing

**Skipped:** Pilot-specific pricing remains open.

### Q-211 — Initial recurring pricing model

**Resolved by replacement:** Use a prepaid per-store wallet and pay-per-order model instead of recurring subscriptions. See D-220.

### Q-212 — Order transaction fee

**Resolved:** Platform-owner-configurable fee on every created order, initially EGP 1, with no recurring subscription. See D-221.

## Resolved in Batch 75

### Q-213 — Insufficient store-wallet balance

**Resolved:** Allow balance to EGP -10; below that, keep recording orders but mask customer data until sufficient recharge. See D-222.

## Phase 1 closure

- No active Phase 1 product questions remain.
- Q-210 pilot-specific pricing was skipped and is deferred to pilot preparation; it does not block architecture planning.
- Operational limits and implementation-level details not explicitly decided remain architecture or delivery-planning inputs, not implied product decisions.

## Explicitly deferred beyond Phase 1

- Final technology stack.
- Full enterprise feature set.
- App/integration marketplace.
- Later-phase growth roadmap.
- Cross-country shipping-zone composition, to be reopened when a second shipping country is supported.

## Architecture planning — Resolved Batch 1

### Q-214 — First-release implementer

**Resolved:** The founder will build the first release with AI assistance. See D-223.

### Q-215 — Phase 1 mobile applications

**Resolved:** Web only; no merchant or customer mobile app in Phase 1. See D-224.

### Q-216 — Pilot delivery deadline

**Resolved:** There is currently no fixed delivery deadline. See D-225.

## Architecture planning — Active Batch 2

### Q-217 — Backend programming language and framework

**Resolved:** Use PHP with Laravel for the complete backend. The TypeScript/NestJS backend proposal was rejected before acceptance. See D-226.

### Q-218 — Frontend approach and application boundary

**Resolved after comparison:** Both interfaces remain inside Laravel. The dashboard uses Livewire with Blade and the storefront uses Blade with Alpine.js. See D-231 and D-232.

### Q-219 — Primary relational database

**Resolved:** Use MySQL. See D-227.

### Q-220 — Frontend programming language

**Superseded:** React and Vue were not selected. Whether Alpine-related modules use plain JavaScript or TypeScript remains a smaller implementation decision.

### Q-221 — Laravel code organization

**Resolved:** Use Laravel's traditional application structure rather than explicit domain modules or microservices. See D-228.

## Architecture planning — Frontend discovery

### Q-222 — Existing frontend experience

**Resolved as a delivery input:** No strong existing frontend-framework experience; compare the realistic options before choosing. See D-229.

### Q-223 — Laravel-integrated or separate frontend

**Resolved after comparison:** Keep the storefront and dashboard integrated with Laravel without a separate frontend application or frontend API. See D-231 and D-232.

### Q-224 — Shared or different frontend technology

**Resolved:** Use different frontend technologies for the storefront and merchant dashboard. See D-230.

### Q-225 — Merchant dashboard technology

**Resolved:** Livewire with Blade inside Laravel. See D-231.

### Q-226 — Customer storefront technology

**Resolved:** Blade with Alpine.js inside Laravel. See D-232.

## Architecture planning — Runtime and styling

### Q-227 — Laravel and PHP versions

**Resolved:** Laravel 13 on PHP 8.5. See D-233.

### Q-228 — CSS framework

**Resolved:** Tailwind CSS for both interfaces. See D-234.

### Q-229 — Alpine.js source language

**Resolved:** Plain JavaScript rather than TypeScript. See D-235.

## Architecture planning — Queues, tests, and files

### Q-230 — Queue backend

**Resolved:** Redis with Laravel Horizon. See D-236.

### Q-231 — PHP test framework

**Resolved:** Pest. See D-237.

### Q-232 — Pilot file storage

**Resolved:** Local server storage during the pilot, designed for a later S3-compatible object-storage migration. See D-238.

## Architecture planning — Multi-tenancy and identities

### Q-233 — MySQL tenant-isolation model

**Resolved:** One shared database and schema with `store_id` on store-owned tables. See D-239.

### Q-234 — Authentication boundaries

**Resolved:** Separate tables and guards for platform admins, merchant accounts, and storefront customers. See D-240.

### Q-235 — Store resolution from domains

**Resolved:** A domains table and custom Laravel middleware for hosted subdomains and verified custom domains. See D-241.


## Architecture planning — Active decisions after Q-235

### Q-236 — Runtime state stores

Which stores should Laravel use for sessions, cache, distributed locks, and rate limits during the pilot and production rollout?

### Q-237 — Internal and public identifiers

Which primary-key strategy and externally exposed identifier format should orders, products, customers, and other resources use?

### Q-238 — Authentication foundation

Which Laravel authentication foundation should be used, and which Merchant, Customer, and Admin flows require custom implementation?

## Design delivery — Active review

### Q-239 — Design Batch 2 acceptance

Does the delivered Orders list, order detail, manual creation, and print-view batch require revisions before it becomes the accepted foundation for production extraction?

### Q-240 — Design Batch 3 scope

Which exact screen group should be designed next? The approved plan retrieved so far does not define Batch 3+, so later screen groups must not be invented.

## Repository administration — Resolved

### Q-241 — Public repository disclosure

**Resolved:** The founder explicitly approved publishing the project memory and decision files while `AM-naguib/lala` remains public.

## Pilot preparation — Deferred

### Q-210 — Pilot-specific pricing

Pilot-specific pricing remains intentionally deferred and does not block architecture or design work.
