# Information Architecture and Navigation

> خريطة الوصول الرسمية للوحة التاجر. أي Screen جديدة يجب أن يكون لها Parent وEntry point قبل بنائها.

## الهيكل الحالي

| المستوى الأول | الوجهة | الصفحات التابعة |
|---|---|---|
| لوحة التحكم / Dashboard | `app-shell.html` | الملخص والتنبيهات والاختصارات |
| الطلبات / Orders | `orders-list.html` | القائمة، التفاصيل، الإنشاء اليدوي، الطباعة |
| المنتجات / Products | `products-list.html` | القائمة، المحرر، الخيارات والمتغيرات |
| الكتالوج / Catalog | `catalog-organization.html` | التنظيم، Featured، CSV import، Import results، Trash |
| المخزون / Inventory | `inventory.html` | الكميات، الحدود، التعديل، السجل |

## الفرق بين Products وCatalog

- **Products:** إنشاء المنتج وتعديل محتواه وسعره ومتغيراته.
- **Catalog:** تنظيم مجموعة المنتجات وتشغيل عمليات متعددة عليها: Categories، Collections، Tags، Featured، Import، وTrash.
- **Inventory:** متابعة الكميات والحركة والتنبيهات.

الفصل مقصود لأن كل مجموعة تمثل مهمة مختلفة للتاجر. الكتالوج يجب أن يظهر في القائمة الرئيسية، وليس كرابط داخلي مدفون في Products.

## الهيكل القادم حسب الـRoadmap

| المجموعة | المستوى الأول المخطط | Batch |
|---|---|---|
| العملاء | Customers | 5 |
| الخصومات | Discounts | 6 |
| الشحن | Shipping | 7 |
| التقارير | Analytics | 8 |
| تصميم المتجر | Storefront | 11–13 |
| الإعدادات | Settings | 9–12 |

الميزة لا تظهر كرابط طبيعي قابل للنقر قبل وجود شاشة مفيدة لها. أثناء الـPrototype يمكن إظهارها Disabled مع “قريبًا” إذا احتجنا توضيح الخريطة المستقبلية.

## قواعد التنقل

### Desktop

- Sidebar بعرض 248px هو المستوى الأول الثابت.
- ترتيب الوجهات يتبع تكرار الاستخدام، وليس ترتيب بناء الـBatches.
- العنصر الحالي فقط يأخذ Active state و`aria-current="page"`.
- لا يتغير عرض الـSidebar أو مكانه بين الشاشات.

### Mobile وTablet

- كل الشاشات الحالية تعرض Primary navigation أفقيًا تحت الهيدر حتى يتم اعتماد Mobile drawer موحّد.
- الوجهات الأساسية: Dashboard، Orders، Products، Catalog، Inventory.
- العنصر الحالي ظاهر ومميز.
- الـTabs الداخلية تبقى منفصلة عن Primary navigation.

### داخل المجموعة

- استخدم Tabs للصفحات المتساوية داخل نفس المهمة، مثل أدوات Catalog.
- استخدم Breadcrumbs عندما تكون الشاشة Child لكيان محدد، مثل Product editor أو Order detail.
- استخدم Contextual links للانتقال إلى شيء مرتبط، وليس كبديل للتنقل الرئيسي.

## قاعدة الحد الأقصى للوصول

- المهمة اليومية: ضغطة واحدة من التنقل الرئيسي.
- المهمة التابعة: ضغطتان بحد أقصى — Parent ثم Child.
- لا يتطلب الوصول البحث في Component Gallery أو معرفة URL.

## تسمية الوجهات

- الاسم يصف مهمة التاجر، وليس اسم جدول أو Implementation detail.
- الاسم العربي والإنجليزي يحملان نفس المعنى.
- نستخدم نفس الاسم في Sidebar، Breadcrumb، Page title، وDocumentation.
- لا نستخدم “Tools” إذا كان الاسم الوظيفي الأوضح متاحًا.

## ملكية الشاشة

كل Screen في الخطة تسجل:

- Primary navigation parent.
- Entry point.
- Back/exit destination.
- Primary action.
- Secondary actions.
- Empty-state next action.
- Error recovery destination.
