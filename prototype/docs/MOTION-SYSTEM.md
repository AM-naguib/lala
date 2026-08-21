# lala Motion System

> عقد الحركة المعتمد للـStatic prototype ثم للاستخراج لاحقًا إلى Blade + Livewire. الحركة تشرح ما حدث وأين ظهر العنصر؛ لا تُستخدم كزينة.

## 1. المبادئ

1. الدخول أهدأ وأطول قليلًا من الخروج.
2. لا نحرّك Width أو Height أو موضع الـlayout الأساسي؛ الحركة تقتصر على `opacity` و`transform` والألوان والحدود والظلال.
3. الـDrawer يتحرك من `end` المنطقي: اليمين في LTR واليسار في RTL.
4. كل حركة لها نسخة `prefers-reduced-motion` شبه فورية.
5. لا Bounce، لا Overshoot، ولا حركة زخرفية مستمرة في شاشة تشغيلية.

## 2. التوقيت

| النوع | المدة | الاستخدام |
|---|---:|---|
| Fast | 140ms | Hover، pressed، خروج العناصر |
| Base | 220ms | Menus، popovers، تبديل الحالات |
| Toast | 240ms | رسائل النجاح والتنبيه المؤقتة |
| Modal | 260ms | Fade للخلفية مع lift/scale للسطح |
| Drawer | 300ms | دخول اللوحة من logical end |

## 3. منحنيات الحركة

- Standard: `cubic-bezier(0.2, 0, 0, 1)` للتغييرات الصغيرة.
- Emphasized: `cubic-bezier(0.16, 1, 0.3, 1)` للدخول والحركة المكانية.
- Exit: `cubic-bezier(0.4, 0, 1, 1)` للخروج القصير والواضح.

## 4. وصف كل Pattern

- Modal: الـbackdrop يعمل fade؛ السطح يبدأ أقل 8px وبحجم `0.985` ثم يستقر.
- Drawer: اللوحة تدخل 100% من logical end والـbackdrop يعمل fade في نفس الوقت.
- Popover: يبدأ أعلى 4px وبحجم `0.98` مع origin ناحية الزر.
- Toast: يبدأ أسفل 8px وبحجم `0.98` ثم يستقر، ويخرج أسرع.
- Disclosure / state change: Fade مع حركة رأسية 4px فقط لتقليل القفزة البصرية.
- Buttons and fields: تغير اللون والحد والظل خلال 140ms؛ لا تحريك للمقاس.

## 5. التنفيذ المحمول

- القيم الأصلية في `public/tokens.css` تحت `--lala-*`.
- Alpine transitions تستخدم أسماء موحدة: `motion-enter-active/start/end` و`motion-leave-active/start/end`.
- `scripts/upgrade-motion.mjs` يضيف العقد تلقائيًا لكل HTML عند البناء.
- كل Modal يحمل `motion-overlay motion-modal` وسطحه `motion-surface`.
- كل Drawer يحمل `motion-overlay motion-drawer` ولوحته `motion-drawer-panel`.
- Gallery تعرض Modal وDrawer وToast للاختبار المبكر.

## 6. بوابة المراجعة

- لا Modal أو Drawer يظهر أو يختفي فجأة.
- لا Drawer يخرج من الجهة الخطأ في العربية.
- لا حركة تتجاوز 300ms في لوحة التاجر.
- الخروج لا ينتظر مدة الدخول كاملة.
- Reduced Motion يلغي كل الحركة غير الضرورية.
- الاختبار الآلي يفشل لو ظهر Dialog خارج العقد.
