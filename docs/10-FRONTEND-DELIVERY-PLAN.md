# lala Frontend Delivery Plan

> الملف التشغيلي المعتمد لاستكمال واجهات MVP بالكامل بعد Batches 1–3.  
> الحالة: **خطة تنفيذ معتمدة؛ كل Batch يحتاج مراجعة وقبول منفصلين قبل اعتباره نهائيًا.**  
> آخر تحديث: 2026-08-22 — Africa/Cairo.

## 1. الهدف

إكمال الفرونت كاملًا كواجهات Static قابلة للاستخراج لاحقًا إلى Laravel Blade + Livewire، من غير بدء Laravel أو قواعد البيانات أو التكاملات الحقيقية الآن.

الخطة تغطي أربع مساحات:

1. لوحة التاجر.
2. واجهة المتجر للعميل.
3. حساب العميل.
4. لوحة إدارة lala والدعم.

## 2. الحالة الحالية

| Batch | النطاق | الحالة |
|---|---|---|
| 1 | Tokens، App shell، Component gallery | Accepted |
| 2 | Orders list، Order detail، Manual order، Print | Delivered — awaiting review |
| 3 | Products list، Product editor، Variants، Inventory | Delivered — awaiting review |
| 3.1 | Unified constants contract | Implemented and published |
| 4 | Catalog organization، Featured products، Trash، CSV import، Results | Delivered — awaiting review |

الموقع المرجعي الحالي: https://lala-design-system.curbs-storm-80.chatgpt.site

## 3. العقد الثابت لكل الشاشات

كل الملفات القادمة تلتزم بالآتي:

- ملف HTML مستقل لكل Screen.
- Tailwind CSS v4-compatible classes وTokens تبدأ كـ CSS custom properties.
- Alpine.js CDN للتفاعل الاستعراضي فقط.
- Extraction markers بصيغة component comments.
- IBM Plex Sans Arabic لكل UI العربي والإنجليزي.
- IBM Plex Mono للأرقام والأسعار وSKU وأرقام الطلبات والتليفونات فقط.
- Arabic وEnglish حقيقيان، مع RTL/LTR فعليين.
- Outer app container ثابت 1440px.
- Sidebar ثابت 248px، Header ثابت 64px.
- Page padding متجاوب 16/24/32px.
- Table rows ثابتة 52px، والخلايا 12px رأسي × 16px أفقي، وBody 14/20.
- حالات المخزون فقط: In stock، Low stock، Out of stock.
- حالات الطلب الأساسية فقط: New، Confirmed، Processing، Shipped، Delivered، Cancelled، Returned.
- Labels منفصلة عن Core status.
- لا يوجد Payment status أو Cash collected.
- Wallet masking يطبق على أي بيانات عميل حساسة في لوحة التاجر.
- لا يتم اختراع Field أو Lifecycle أو Analytics rule غير موثق.
- أي قرار ناقص يضاف إلى Open Questions بدل إدخاله ضمن التصميم كأنه قرار.

## 4. حالات الواجهة المطلوبة

كل شاشة تعرض الحالات المناسبة من القائمة التالية، وليس فقط الحالة المثالية:

- Default/Data.
- Loading/Skeleton.
- Empty.
- No results بعد البحث أو الفلترة.
- Validation error.
- Provider أو network-style error بشكل تمثيلي.
- Disabled/Unavailable.
- Success/Confirmation.
- Destructive confirmation عند الحذف أو التعطيل.
- Wallet calm/watch/overdraft عندما تحتوي الشاشة بيانات عميل.
- Responsive desktop/tablet/mobile.
- Arabic RTL وEnglish LTR.
- Keyboard focus وTouch targets وAccessible labels.

## 5. نظام الحالة للـRoadmap

- **Planned:** موجود في هذه الخطة ولم يبدأ.
- **In progress:** Batch الحالي فقط.
- **Delivered:** منشور للمراجعة.
- **Changes requested:** توجد تعديلات مطلوبة قبل القبول.
- **Accepted:** وافق عليه المؤسس.
- **Blocked by decision:** يحتاج قرار منتج موثق قبل التصميم.

لا يبدأ أكثر من Batch Feature واحد في نفس الوقت. يجوز تنفيذ إصلاحات صغيرة في Batches سابقة بالتوازي إذا لم تغيّر Scope الـBatch الجاري.

# Wave A — إكمال عمليات التاجر الأساسية

## Batch 4 — Catalog operations

**الحالة:** Delivered and published as Sites version 6 — awaiting founder review.  

**الهدف:** إكمال الأدوات المحيطة بالمنتج بعد list/editor/variants/inventory.

| File | Screen |
|---|---|
| public/catalog-organization.html | Categories، Collections، Tags في Tabs واضحة |
| public/featured-products.html | اختيار وترتيب Featured products |
| public/product-trash.html | Trash، restore as Hidden، ومرجع الحذف الناعم |
| public/product-import.html | CSV mapping، preview، validation، progress |
| public/product-import-results.html | Valid rows، rejected rows، error download، conflicts |

تعديلات داخل الملفات القائمة:

- Products list: Export all/current filters.
- Products list: Preview قبل bulk destructive actions.
- Product editor: روابط organization وTrash عند الحاجة.

الحالات الإلزامية:

- Organization فارغ.
- Duplicate names كعرض غير مانع ما لم يوجد قرار يمنعه.
- CSV ID/SKU conflict يرفض الصف بدون تعديل.
- Large import يظهر Background processing state.
- Public image URL success/failure.
- Result file وInvalid-row file.

**اعتماديات:** Batch 3.  
**بوابة القبول:** التاجر يقدر ينظم الكتالوج، يرتب Featured، يسترجع المحذوف، ويمر في import كامل من البداية للنتيجة.

## Batch 5 — Customers

**الهدف:** تقديم سجل موحد للعميل مرتبط بالطلبات مع حماية البيانات عند عجز المحفظة.

| File | Screen |
|---|---|
| public/customers-list.html | Search، filters، metrics، tags، blocked state، export |
| public/customer-detail.html | Identity، addresses، orders، spend، notes، tags، block |
| public/customer-identity-review.html | مراجعة تعارض تطابق email/phone بدون دمج صامت |

الحالات الإلزامية:

- Guest وAccount customer.
- Customer بلا email.
- Multiple addresses.
- Blocked by phone أو email.
- Identity conflict.
- Empty order history.
- Wallet overdraft: إخفاء phone/email/address وتعطيل export الحساس.

**اعتماديات:** Batches 1–3، خصوصًا Orders وwallet masking.  
**بوابة القبول:** كل بيانات العميل المؤكدة موجودة من غير اختراع CRM features جديدة.

## Batch 6 — Discounts

**الهدف:** إدارة Coupons فقط طبقًا للـMVP.

| File | Screen |
|---|---|
| public/discounts-list.html | Active، scheduled، expired، exhausted، search/filter |
| public/discount-editor.html | Percentage، fixed، free shipping، dates، usage، minimum subtotal |

الحالات الإلزامية:

- Whole-order scope فقط.
- Coupon واحد لكل order.
- Minimum يعتمد على products subtotal قبل الخصم ومن غير shipping.
- Total usage limit فقط؛ لا per-customer limit.
- No automatic discounts.
- Invalid dates، duplicate code، exhausted limit، expired preview.

**اعتماديات:** Orders وProducts.  
**بوابة القبول:** لا يظهر أي نوع Discount غير مؤكد في قرارات المشروع.

## Batch 7 — Shipping zones and Bosta

**الهدف:** إكمال إعدادات التوصيل والتكامل المطلوبة لإرسال الطلبات.

| File | Screen |
|---|---|
| public/shipping-zones.html | Zones list، enabled state، coverage، prices |
| public/shipping-zone-editor.html | Governorates/cities/areas grouping، free shipping |
| public/custom-locations.html | Store-specific custom city/area management |
| public/shipping-integrations.html | Providers overview، connected/not connected |
| public/bosta-connection.html | Credentials form، validation، connected/error state |

تعديلات داخل Orders:

- Not sent، sending، sent، failed، retry.
- Duplicate active shipment blocked مع link للتفاصيل.
- Bulk submission summary.
- Exact provider mapping إلى Core statuses.
- No manual carrier/tracking fields عند عدم وجود provider.

الحالات الإلزامية:

- Overlapping active zones blocked.
- Zero-price zone = Free shipping.
- Unsupported location.
- Credential validation failure.
- Provider submission failure مع reason.
- Shipment already active.

**اعتماديات:** Batch 2.  
**بوابة القبول:** رحلة zone setup ثم Bosta connect ثم order submission مفهومة من الواجهات.

## Batch 8 — Dashboard and Analytics

**الهدف:** بناء مساحة المتابعة التي يفتحها التاجر يوميًا.

| File | Screen |
|---|---|
| public/dashboard.html | Sales، status counts، AOV، customers، top products، alerts |
| public/analytics-overview.html | Date ranges، comparison، totals، export |
| public/analytics-orders.html | Count/value لكل Core status |
| public/analytics-products.html | Top products units/value toggle |

القواعد الإلزامية:

- Today، Yesterday، 7 days، 30 days، custom range.
- Previous equivalent-period comparison.
- Cairo timezone.
- Headline sales تشمل كل الحالات بما فيها Cancelled وReturned.
- Breakdown منفصل لكل Core status.
- لا Estimated profit.
- Refresh indicator حوالي دقيقة.
- CSV export يحترم date range وfilters.

**اعتماديات:** Batches 2–7.  
**بوابة القبول:** كل Metric لها تعريف مطابق للقرارات ولا يوجد Revenue interpretation جديد.

# Wave B — الوصول والإعداد وتصميم المتجر

## Batch 9 — Merchant access and onboarding

**الهدف:** إكمال رحلة دخول التاجر وإنشاء أول متجر.

| File | Screen |
|---|---|
| public/merchant-sign-in.html | Email/phone + password |
| public/merchant-sign-up.html | Email، phone، password |
| public/merchant-verify-phone.html | WhatsApp code، resend، limits |
| public/merchant-password-recovery.html | Recovery start and channel feedback |
| public/merchant-reset-password.html | New password |
| public/store-onboarding.html | Store name، subdomain، currency، primary language |
| public/stores-list.html | Multiple stores، switcher، create another store |

الحالات الإلزامية:

- Code valid for 10 minutes.
- 60-second resend cooldown.
- Maximum 5 sends per rolling hour.
- 5 wrong attempts invalidate current code.
- WhatsApp delivery failure بدون bypass.
- Subdomain availability.
- Onboarding validation.
- Empty merchant account before first store.

**اعتماديات:** Batch 1 shell.  
**بوابة القبول:** التاجر يصل من sign-up إلى متجر عام جديد بدون إضافة إعدادات غير مقررة.

## Batch 10 — Store settings and Wallet

**الهدف:** تجميع الإعدادات التشغيلية المؤكدة وإدارة حالة المتجر والمحفظة.

| File | Screen |
|---|---|
| public/store-settings-general.html | Name، currency، primary language، subdomain |
| public/store-settings-checkout.html | Required/optional checkout fields |
| public/store-settings-domains.html | Custom domains، verification، health، fallback |
| public/store-settings-notifications.html | Confirmed merchant/customer email events |
| public/wallet.html | Balance، order charges، calm/watch/overdraft، recharge entry |
| public/store-status.html | Disable store، suspended state، support reactivation |

القواعد الإلزامية:

- Subdomain: maximum 3 changes، old name reserved 10 days، no redirect.
- After third change: permanent lock.
- Custom-domain changes independent and unlimited.
- Verified custom domain becomes primary، hosted subdomain redirects.
- Domain failure returns hosted subdomain as primary and alerts merchant.
- Currency numeric prices do not convert.
- Wallet initial order fee display EGP 1.
- Overdraft allowance to EGP -10؛ below threshold customer data masked.
- Recharge UI لا يخترع payment method غير متفق عليها.
- Disabling store retains data؛ reactivation through support.

**اعتماديات:** Batches 1، 5، 7، 9.  
**بوابة القبول:** Settings تعكس القرارات الحالية فقط، مع فصل واضح بين store state وwallet state.

## Batch 11 — Storefront design

**الهدف:** تصميم أدوات اختيار Theme والهوية وبناء الصفحة الرئيسية.

| File | Screen |
|---|---|
| public/themes.html | Theme gallery and current theme |
| public/theme-preview.html | Preview before apply، content preserved |
| public/brand-settings.html | Logo، colors، fonts، favicon |
| public/homepage-builder.html | Add/hide/reorder predefined sections، Hero/Slider |

الحالات الإلزامية:

- Current/applied theme.
- Preview without applying.
- Apply confirmation.
- Missing logo/favicon.
- Reorder and hidden sections.
- Mobile/desktop storefront preview.
- No free-form page-builder blocks beyond confirmed predefined sections.

**اعتماديات:** Products، Store settings.  
**بوابة القبول:** التاجر يختار Theme ويعدل الهوية وترتيب Home من غير فقد المحتوى.

## Batch 12 — Pages and Contact inbox

**الهدف:** إكمال المحتوى الثابت ورسائل Contact.

| File | Screen |
|---|---|
| public/pages-list.html | Built-in and unlimited custom pages |
| public/page-editor.html | Arabic/English fields، primary-language fallback |
| public/contact-inbox.html | Conversations list، unread/read، search |
| public/contact-thread.html | Message details، merchant reply by email |

القواعد الإلزامية:

- Built-in pages: About، Contact، Shipping & Returns، Privacy، Terms.
- Custom pages unlimited.
- Separate Arabic/English fields with fallback.
- Contact form fields: name، email، subject، message، optional phone.
- Replies saved in history and delivered to customer by email.
- Wallet overdraft masks customer email/phone in merchant inbox.

**اعتماديات:** Batches 5، 10، 11.  
**بوابة القبول:** دورة page creation ورسالة Contact ورد التاجر مكتملة بصريًا.

# Wave C — واجهة المتجر والشراء وحساب العميل

## Batch 13 — Storefront discovery

**الهدف:** بناء تجربة تصفح متجر كاملة ثنائية اللغة.

| File | Screen |
|---|---|
| public/storefront-home.html | Theme home، Hero/Slider، sections، featured products |
| public/storefront-collection.html | Category/collection listing، filters، infinite loading |
| public/storefront-search.html | Name-only search، results/no results |
| public/storefront-product.html | Media، options، variants، quantity، related products |
| public/storefront-static-page.html | Built-in/custom content page |
| public/storefront-contact.html | Contact form + store details |
| public/storefront-unavailable.html | Disabled store message |

الحالات الإلزامية:

- Empty catalog مع بقاء Theme/navigation/pages ظاهرين.
- Featured default order.
- Filters: price، category/collection، availability، options.
- Sort: Featured، Newest، price both directions، Name.
- Out-of-stock cards remain in position.
- First available variant auto-selected.
- Unavailable variants visible and disabled.
- Add-to-cart success without leaving product page.
- Arabic/English fallback.

**اعتماديات:** Batches 3، 4، 10–12.  
**بوابة القبول:** المستخدم يقدر يتصفح من Home إلى Product بوضوح على mobile وdesktop.

## Batch 14 — Cart, Checkout, Success, Tracking

**الهدف:** إكمال رحلة COD من اختيار المنتجات حتى تتبع الطلب.

| File | Screen |
|---|---|
| public/cart.html | Items، quantities، coupon، totals |
| public/checkout.html | Single page checkout، delivery coverage، coupon |
| public/order-success.html | Number، summary، current status، tracking fallback |
| public/guest-tracking.html | Status progression، items، totals، shipment details |

القواعد الإلزامية:

- Guest checkout هو Default.
- Buy Now يفتح single-product checkout ويحافظ على cart الحالي.
- Guest cart persists 30 days on same device.
- Quantities limited by tracked stock.
- Before submit: stale price replaced، excessive quantity reduced، clear notice.
- Egypt hidden and automatic؛ governorate ثم city/area.
- Shipping price appears after location.
- Out-of-zone blocks submit.
- COD only؛ no payment status.
- Terms/Privacy acceptance غير مطلوب وغير ظاهر.
- Email tracking link؛ without email يظهر مرة واحدة في success.
- Customer cannot self-cancel.

**اعتماديات:** Discounts، Shipping، Storefront discovery.  
**بوابة القبول:** رحلة Cart → Checkout → Success → Tracking مكتملة بكل أخطاء المخزون والتغطية والكوبون.

## Batch 15 — Customer account

**الهدف:** إضافة الحساب الاختياري من غير تعطيل guest checkout.

| File | Screen |
|---|---|
| public/customer-sign-in.html | Store-scoped login |
| public/customer-sign-up.html | Email or phone + password |
| public/customer-verification.html | Email link or WhatsApp code states |
| public/customer-password-recovery.html | Verified-channel recovery |
| public/account-orders.html | Linked guest/account orders |
| public/account-order-detail.html | Order and tracking details، repeat order |
| public/account-addresses.html | Unlimited addresses، default address |
| public/account-profile.html | Contact change verification، account deletion |

القواعد الإلزامية:

- Customer identity isolated per storefront.
- Earlier guest orders attach after matching contact verification.
- New email/phone active only after verification.
- Default address preselected at checkout.
- One-time checkout edits saved only by explicit choice.
- Repeat Order uses current availability/prices and reports changes.
- Delete profile/addresses but retain historical order records.
- No self-cancel.

**اعتماديات:** Batch 14.  
**بوابة القبول:** Guest وAccount flows يظلان متوافقين من غير إجبار العميل على التسجيل.

# Wave D — إدارة المنصة والإقفال النهائي

## Batch 16 — lala Admin and Support

**الهدف:** أقل واجهات Admin مطلوبة لتشغيل القرارات المؤكدة، بدون توسيع النطاق.

| File | Screen |
|---|---|
| public/admin-sign-in.html | Separate Admin access |
| public/admin-dashboard.html | Platform operational overview |
| public/admin-merchants.html | Merchants and stores lookup |
| public/admin-store-detail.html | Store status، wallet، support reactivation |
| public/admin-platform-settings.html | Global per-order fee |
| public/admin-geography.html | Supported Egypt locations and review context |

الحدود:

- لا Team roles أو enterprise permissions.
- لا tax/payment-gateway administration.
- لا marketplace أو app ecosystem.
- لا production infrastructure console.
- أي Admin metric غير موثق يبقى placeholder واضح أو يؤجل.

**اعتماديات:** كل merchant operational flows.  
**بوابة القبول:** Admin يستطيع دعم store suspended وتعديل global order fee ومراجعة التشغيل الأساسي فقط.

## Batch 17 — Frontend release hardening

**الهدف:** قفل الاتساق قبل تحويل الواجهات إلى Laravel لاحقًا. لا Features جديدة.

قائمة الفحص:

1. تحديث Component Gallery وروابط كل الملفات.
2. Route and screen inventory نهائي.
3. كل Screen عليها default/loading/empty/error states المطلوبة.
4. RTL/LTR وArabic shaping وMono baselines.
5. Mobile/tablet/desktop وعدم وجود horizontal page overflow.
6. Keyboard navigation، focus، labels، disabled semantics، contrast.
7. Exact order statuses، inventory states، no payment status.
8. Wallet masking في Orders، Customers، Contact، exports، وأي customer-data surface.
9. Fixed 1440px frame وكل Design constants tests.
10. Extraction marker balance.
11. Print invoice/packing/shipping-label checks.
12. Shared copy glossary عربي/إنجليزي.
13. Shared component inventory للـLaravel handoff.
14. Final cross-flow review:
    - Merchant sign-up → onboarding → product → shipping → order.
    - Storefront browse → cart → checkout → success → tracking.
    - Customer account linking and repeat order.
    - Wallet overdraft and recovery.
    - Admin store support.
15. Final acceptance matrix signed off Batch by Batch.

**بوابة القبول:** لا توجد Screen في MVP خارج الـinventory، ولا توجد قيمة أو حالة متناقضة مع القرارات.

## 6. ترتيب التنفيذ المختصر

| Order | Batch | Area | Planned files |
|---:|---:|---|---:|
| 1 | 4 | Catalog operations | 5 |
| 2 | 5 | Customers | 3 |
| 3 | 6 | Discounts | 2 |
| 4 | 7 | Shipping + Bosta | 5 |
| 5 | 8 | Dashboard + Analytics | 4 |
| 6 | 9 | Merchant access + onboarding | 7 |
| 7 | 10 | Store settings + Wallet | 6 |
| 8 | 11 | Storefront design | 4 |
| 9 | 12 | Pages + Contact | 4 |
| 10 | 13 | Storefront discovery | 7 |
| 11 | 14 | Cart + Checkout + Tracking | 4 |
| 12 | 15 | Customer account | 8 |
| 13 | 16 | Admin + Support | 6 |
| 14 | 17 | Release hardening | 0 new feature screens |

المتبقي المخطط: **65 Screen files**، بالإضافة إلى تحديثات في الملفات القائمة. العدد قد يقل فقط إذا أثبت التنفيذ أن حالتين مناسبتان داخل Screen واحدة من غير إخفاء رحلة أو كسر قاعدة one-file-per-screen.

## 7. طريقة تنفيذ كل Batch

1. قراءة هذا الملف والقرارات المرتبطة و`docs/ux/README.md`.
2. تثبيت قائمة الملفات والحالات وParent/Entry/Exit وPrimary action قبل الكتابة.
3. تحديث Component Gallery بروابط الـBatch.
4. تنفيذ Static HTML وAlpine behavior.
5. تطبيق `docs/ux/02-SCREEN-CHECKLIST.md` وإغلاق كل بنود P0.
6. تشغيل constants، navigation، status، marker، build، test، وlint checks.
7. نشر Checkpoint على موقع المراجعة.
8. تحديث:
   - Project Memory.
   - Decisions عند وجود قرار جديد أو تغيير.
   - Delivery Status.
   - Next Work.
   - Changelog.
9. تحديث `docs/ux/03-UX-BACKLOG.md` بأي دين UX متبقٍ.
10. التوقف لمراجعة المؤسس.
11. تسجيل Accepted أو Changes requested.
12. بدء الـBatch التالي بعد قفل السابق أو بموافقة صريحة على الاستمرار.

## 8. Definition of Done لكل Screen

الشاشة تعتبر Delivered فقط عندما:

- تستخدم App frame وTokens المعتمدة.
- تحتوي Arabic وEnglish حقيقيين.
- تعمل RTL/LTR من نفس الملف.
- Responsive بدون page-level overflow.
- تعرض الحالات المطلوبة لنوعها.
- لا تضيف Product field أو status غير مقرر.
- تحافظ على wallet masking عند وجود بيانات حساسة.
- تحتوي extraction markers متوازنة.
- لها Parent وEntry point وExit/Recovery path واضحان.
- Primary action واحد واضح، ولا توجد Dead links أو Screens orphan.
- Desktop وMobile يعرضان نفس بنية التنقل مع Active state صحيح.
- كل بنود P0 في `docs/ux/02-SCREEN-CHECKLIST.md` ناجحة.
- روابطها الداخلية صحيحة.
- تمر في الاختبارات الآلية والبناء.
- مضافة إلى Component Gallery أو route inventory.
- منشورة على موقع المراجعة.

## 9. القرارات التي لا توقف الفرونت

تظل مؤجلة ولا تمنع تنفيذ الخطة:

- Pilot-specific pricing.
- Production hosting topology.
- Product-video processing limits.
- Permanent deletion beyond Trash.
- Final marketing differentiator.
- Future countries after Egypt.

عندما يصل تصميم إلى نقطة تعتمد مباشرة على قرار مؤجل، يستخدم أقل UI محايد ممكن أو يتوقف ذلك الجزء فقط ويسجل السؤال؛ لا يتم اختراع القرار.

## 10. خارج نطاق الخطة

- Laravel/Livewire/Blade production implementation.
- Database schema and migrations.
- Real authentication، queues، storage، email، WhatsApp، Bosta، domains، or payment execution.
- Online payment gateways.
- Payment status أو COD collection lifecycle.
- Taxes.
- Paid digital products.
- Partial returns.
- Merchant teams.
- Mobile apps.
- Barcode.
- Estimated profit.
- Automatic discounts.
- Manual carrier/tracking without provider.
