# Information Architecture and Navigation

> خريطة الوصول الرسمية للوحة التاجر. أي Screen جديدة يجب أن يكون لها Parent وEntry point قبل بنائها.

## قاعدة التصنيف

لا نضع كل ما له علاقة بالمنتجات في مستوى واحد لمجرد أنه “قريب” من نفس المجال. كل وجهة تُصنف أولًا حسب نوعها:

| النوع | معناه | أمثلة |
|---|---|---|
| Module | مساحة عمل يومية مستقلة | Dashboard، Orders، Analytics، Products، Customers، Discounts، Shipping |
| Section | جزء دائم داخل Module | Inventory، Organization، Featured products |
| Tool | عملية تشغيلية تُستخدم عند الحاجة | Import products، Trash |
| Flow child | خطوة أو نتيجة داخل مسار | Import results، Product editor، Variants |
| Review tooling | أدوات بناء ومراجعة ليست للتاجر | Component gallery |

لا يجوز عرض Section أو Tool أو Flow child كأنه Module مستقل. ولا يجوز وضع أنواع مختلفة في صف Tabs واحد كأنها بدائل متساوية.

## الهيكل الحالي المعتمد

| المستوى الأول | الوجهة | المستوى الثاني | الشاشات التابعة |
|---|---|---|---|
| لوحة التحكم / Dashboard | `dashboard.html` | — | الملخص اليومي والتنبيهات والاختصارات التشغيلية |
| الطلبات / Orders | `orders-list.html` | — | القائمة، التفاصيل، الإنشاء اليدوي، الطباعة |
| التحليلات / Analytics | `analytics-overview.html` | نظرة عامة / Overview | الفترات، المقارنة، التعريفات، والتصدير |
| التحليلات / Analytics | `analytics-orders.html` | الطلبات / Orders | عدد وقيمة الطلبات لكل حالة أساسية |
| التحليلات / Analytics | `analytics-products.html` | المنتجات / Products | ترتيب المنتجات بالقطع أو القيمة |
| المنتجات / Products | `products-list.html` | كل المنتجات | القائمة، المحرر، الخيارات والمتغيرات |
| المنتجات / Products | `inventory.html` | المخزون / Inventory | الكميات، الحدود، التعديل، السجل |
| المنتجات / Products | `catalog-organization.html` | التنظيم / Organization | Categories، Collections، Tags |
| المنتجات / Products | `featured-products.html` | المنتجات المميزة / Featured | اختيار وترتيب الظهور في المتجر |
| المنتجات / Products | `product-import.html` | أدوات المنتجات / Import | رفع CSV، المطابقة، المراجعة، و`product-import-results.html` كنتيجة للمسار |
| المنتجات / Products | `product-trash.html` | أدوات المنتجات / Trash | المحذوف مؤقتًا والاسترجاع كـHidden |
| العملاء / Customers | `customers-list.html` | — | القائمة، تفاصيل العميل، ومراجعة تعارض الهوية |
| الخصومات / Discounts | `discounts-list.html` | — | قائمة الكوبونات ومحرر الكوبون |
| الشحن / Shipping | `shipping-zones.html` | مناطق الشحن / Zones | القائمة ومحرر المنطقة |
| الشحن / Shipping | `custom-locations.html` | المواقع المخصصة / Custom locations | مدن ومناطق خاصة بالمتجر |
| الشحن / Shipping | `shipping-integrations.html` | التكاملات / Integrations | نظرة المزودين و`bosta-connection.html` كمسار ربط تابع |

## لماذا Products هي الـModule الوحيدة هنا؟

- التاجر يبدأ من المنتج ثم يدير مخزونه وتنظيمه وظهوره وعملياته الجماعية.
- Inventory وOrganization وFeatured وجهات دائمة داخل نفس نموذج العمل، وليست منتجات مستقلة.
- Import وTrash عمليات تشغيلية قليلة التكرار؛ تظهر تحت عنوان **Product tools** وليس كتـTabs مساوية للتنظيم أو Featured.
- Import results ليست وجهة تنقل؛ هي Child داخل مسار Import ويكون الرجوع منه إلى Import أو Products.
- Component gallery تبقى صفحة مراجعة للمشروع من الرابط المرجعي، ولا تظهر داخل تنقل التاجر.

## قواعد التنقل

### Desktop

- Sidebar بعرض 248px هو المستوى الأول الثابت: Dashboard، Orders، Analytics، Products، Customers، Discounts، Shipping.
- عند دخول أي شاشة منتج، تتوسع Products وتعرض Sections أولًا ثم Product tools في مجموعة معنونة منفصلة.
- Parent وChild الصحيحان فقط يأخذان Active state و`aria-current="page"`.
- لا يتغير عرض الـSidebar أو الـContainer أو موضع المحتوى بين الشاشات.

### Mobile وTablet

- Primary navigation يعرض Dashboard، Orders، Analytics، Products، Customers، Discounts، Shipping في المرحلة الحالية، ويستخدم تمريرًا أفقيًا عند ضيق العرض بدل ضغط العناصر.
- داخل Analytics يظهر شريط Sections: Overview، Orders، Products.
- داخل Shipping يظهر شريط Sections: Zones، Custom locations، Integrations. صفحة Bosta connection تظل Flow child داخل Integrations.
- داخل Products يظهر شريط Sections: All، Inventory، Organization، Featured، ثم Tools.
- Tools تفتح Import وTrash؛ لا تظهر Catalog أو Inventory كوجهات مستوى أول منفصلة.
- نفس Parent المستخدم على Desktop يظل Active على Mobile.

### داخل الشاشة

- Tabs تستخدم فقط لبدائل متساوية داخل نفس المهمة، مثل Categories / Collections / Tags داخل Organization، أو Imported / Rejected داخل Import results.
- Breadcrumbs تستخدم مع Flow child أو كيان محدد، مثل Product editor أو Import result.
- Contextual links تربط مهمة مرتبطة، وليست بديلًا للتنقل الرئيسي.
- Page actions تمثل أفعالًا، لا وجهات تنقل. Import يمكن أن يظهر Action في Products list ويظل أيضًا داخل Product tools.

## الهيكل القادم حسب الـRoadmap

| المجموعة | المستوى الأول المخطط | Batch |
|---|---|---|
| تصميم المتجر | Storefront | 11–13 |
| الإعدادات | Settings | 9–12 |

لا تظهر ميزة جديدة كـModule قبل وجود شاشة مفيدة لها ومراجعة علاقتها بما حولها. ظهورها Disabled مع “قريبًا” استثنائي ومخصص لتوضيح خريطة قريبة، وليس قائمة أمنيات طويلة.

## قاعدة الحد الأقصى للوصول

- المهمة اليومية: ضغطة واحدة من المستوى الأول أو من القسم المفتوح.
- المهمة التابعة: ضغطتان بحد أقصى — Parent ثم Section/Tool.
- Flow child يصل إليه المستخدم من الخطوة السابقة، لا من قائمة عامة.
- لا يتطلب الوصول معرفة URL أو المرور عبر Component Gallery.

## اختبار إضافة أي وجهة

قبل إضافة Link أو Tab جديد أجب بالترتيب:

1. هل هو Module أم Section أم Tool أم Flow child؟
2. ما المهمة التي يبدأها المستخدم منه؟
3. هل يتكرر بما يكفي ليستحق الظهور الدائم؟
4. ما Parent والـExit والـRecovery path؟
5. هل وضعه بجوار العناصر الحالية يعني فعلًا أنها متساوية؟

إذا لم تكن الإجابات واضحة، لا تُضاف الوجهة إلى التنقل وتُسجل كمسألة UX للمراجعة.
