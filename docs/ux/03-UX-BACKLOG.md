# UX Review Backlog

> قائمة المشاكل والتحسينات المرتبة حسب تأثيرها على نجاح مهمة التاجر.  
> Audit baseline: 2026-08-22.

## ملخص المراجعة الحالية

### نقاط قوية نحافظ عليها

- إطار 1440px وكثافة 52px ثابتان، فلا تتغير الذاكرة المكانية بين الشاشات.
- العربية والإنجليزية حقيقيتان مع RTL/LTR فعليين.
- حالات Loading، Empty، No results، Validation، Success، Error، وDestructive confirmation ظاهرة في الـPrototype.
- Wallet masking موثق ومتسق مع حماية بيانات العميل.
- الحذف والاسترجاع والاستيراد يشرحان ما تغير وما لم يتغير.

### المشاكل التي ظهرت

1. Catalog كان شاشة يتيمة وغير ظاهر في الـSidebar.
2. معظم الشاشات بعد App shell لم توفر تنقلًا رئيسيًا usable على الموبايل.
3. Products وCatalog استخدما نفس Active state رغم اختلاف المهمة.
4. Header قائمة المنتجات كان مزدحمًا بخمسة إجراءات متساوية بصريًا.
5. App shell عرض روابط مستقبلية تبدو قابلة للنقر رغم عدم وجود شاشاتها.
6. بعض الروابط المفيدة استخدمت `#` رغم وجود وجهة فعلية، مثل View all orders.
7. الأيقونات الحالية رموز نصية مؤقتة وغير موحدة دلاليًا.

## P0 — تم إصلاحه الآن

| المشكلة | الإصلاح | الحالة |
|---|---|---|
| Catalog غير قابل للاكتشاف | إضافة Catalog كوجهة رئيسية في كل Sidebars الحالية | Done — Sites v7 |
| لا يوجد Mobile navigation | إضافة شريط Primary navigation متجاوب لكل الشاشات الحالية | Done — Sites v7 |
| Active state غير صحيح | فصل Products عن Catalog وإضافة `aria-current` | Done — Sites v7 |
| Actions مزدحمة في Products | إبقاء Add product أساسيًا، Import ثانويًا، والباقي داخل More actions | Done — Sites v7 |
| روابط مستقبلية مضللة | عرضها Disabled مع “قريبًا” بدل رابط يوحي أنه يعمل | Done — Sites v7 |
| View all orders لا يعمل | ربطه بقائمة الطلبات | Done — Sites v7 |
| منع رجوع المشكلة | إضافة اختبارات Catalog reachability وMobile navigation | Done — Sites v7 |

## P1 — يطبق مع كل Batch قادم

| البند | التطبيق | أول Batch |
|---|---|---|
| Parent وEntry/Exit لكل شاشة | إضافتها في تعريف الشاشة قبل التنفيذ | 5 |
| مسار المهمة الأساسي | كتابة Task flow قبل تصميم الواجهة | 5 |
| أولوية أعمدة الموبايل | تحديد Must-see / Secondary / Hidden لكل جدول | 5 |
| Filters memory | تعريف ما يبقى عند الرجوع من Detail إلى List | 5 |
| Unsaved changes | إضافة Warning للمحررات الطويلة | 5–6 |
| Keyboard/Focus contract | تحديد Focus order وDialog return point | 5 |
| Empty-state next step | منع الرسائل التي لا تقدم إجراءً مفيدًا | 5 |
| Sensitive export rules | تطبيق Wallet masking على Customers export | 5 |
| Navigation availability | عدم إظهار الوجهة Active قبل وجود شاشة مفيدة | كل Batch |

## P2 — تحسين النظام بعد اكتمال المسارات الأساسية

| البند | النتيجة المطلوبة |
|---|---|
| Icon system | استبدال الرموز النصية بحزمة SVG موحدة، مع labels وRTL behavior |
| Command search | بحث اختياري للوصول السريع بعد زيادة عدد الوحدات، وليس بديلًا للقائمة |
| Saved views | لا يبدأ قبل قرار منتج موثق عن الفلاتر المحفوظة |
| Usage analytics | قياس المسارات المتعثرة بعد بدء Pilot حقيقي |
| Personalization | يؤجل لما بعد ثبوت أن الهيكل الأساسي مفهوم بدون تخصيص |

## خطة اختبار قابلية الاستخدام

بعد اكتمال Orders + Catalog + Customers + Shipping:

1. اختبر مع 5 تجار يمثلون خبرات تقنية مختلفة.
2. أعط كل تاجر نفس المهام بدون شرح أماكن الأزرار:
   - العثور على طلب وتغيير حالته.
   - إضافة منتج وتنظيمه داخل Category.
   - استرجاع منتج محذوف وفهم أنه عاد Hidden.
   - رفع CSV ومعرفة الصفوف التي لم تتغير.
   - العثور على عميل مع Wallet masking.
3. سجّل لكل مهمة:
   - Task success.
   - Time on task.
   - Wrong turns.
   - طلب المساعدة.
   - فهم النتيجة بعد الإجراء.
4. أي مهمة يفشل فيها أكثر من مستخدم تصبح P0 قبل الـPilot.

## Definition of Done للـUX

- كل P0 في [Checklist](02-SCREEN-CHECKLIST.md) ناجح.
- لا توجد Screen orphan أو Dead link.
- Desktop وMobile لهما نفس خريطة الوجهات.
- Primary action واضح.
- Recovery path موثق.
- أي دين UX متبقٍ مسجل هنا بموعد تنفيذه.
