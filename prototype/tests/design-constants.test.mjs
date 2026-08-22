import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";
import { resolve } from "node:path";

const projectRoot = resolve(import.meta.dirname, "..");
const publicDirectory = resolve(projectRoot, "public");
const htmlNames = (await readdir(publicDirectory)).filter((name) => name.endsWith(".html"));
const htmlFiles = await Promise.all(
  htmlNames.map(async (name) => ({ name, source: await readFile(resolve(publicDirectory, name), "utf8") })),
);
const tokens = await readFile(resolve(publicDirectory, "tokens.css"), "utf8");

const appScreens = [
  "merchant-sign-in.html",
  "merchant-sign-up.html",
  "merchant-verify-phone.html",
  "merchant-password-recovery.html",
  "merchant-reset-password.html",
  "store-onboarding.html",
  "stores-list.html",
  "dashboard.html",
  "analytics-overview.html",
  "analytics-orders.html",
  "analytics-products.html",
  "app-shell.html",
  "component-gallery.html",
  "orders-list.html",
  "order-detail.html",
  "order-create.html",
  "order-print.html",
  "products-list.html",
  "product-editor.html",
  "product-variants.html",
  "inventory.html",
  "catalog-organization.html",
  "featured-products.html",
  "product-trash.html",
  "product-import.html",
  "product-import-results.html",
  "customers-list.html",
  "customer-detail.html",
  "customer-identity-review.html",
  "discounts-list.html",
  "discount-editor.html",
  "shipping-zones.html",
  "shipping-zone-editor.html",
  "custom-locations.html",
  "shipping-integrations.html",
  "bosta-connection.html",
];

const merchantNavigationScreens = [
  "dashboard.html",
  "analytics-overview.html",
  "analytics-orders.html",
  "analytics-products.html",
  "app-shell.html",
  "orders-list.html",
  "order-detail.html",
  "order-create.html",
  "products-list.html",
  "product-editor.html",
  "product-variants.html",
  "inventory.html",
  "catalog-organization.html",
  "featured-products.html",
  "product-trash.html",
  "product-import.html",
  "product-import-results.html",
  "customers-list.html",
  "customer-detail.html",
  "customer-identity-review.html",
  "discounts-list.html",
  "discount-editor.html",
  "shipping-zones.html",
  "shipping-zone-editor.html",
  "custom-locations.html",
  "shipping-integrations.html",
  "bosta-connection.html",
];

test("all application screens share the app container token", () => {
  for (const name of appScreens) {
    const file = htmlFiles.find((entry) => entry.name === name);
    assert.ok(file, `${name} is missing`);
    assert.match(file.source, /\bmax-w-app\b/, `${name} must use max-w-app`);
    assert.doesNotMatch(
      file.source,
      /max-w-(?:7xl|\[(?:1280|1360|1440)px\])/, 
      `${name} contains a legacy outer width`,
    );
  }
});

test("reusable arbitrary Tailwind values stay removed", () => {
  const found = [];
  const arbitraryUtility = /\b(?:[a-z-]+:)*[a-z-]+-\[[^\]]+\]/g;
  for (const file of htmlFiles) {
    for (const value of file.source.match(arbitraryUtility) ?? []) found.push(`${file.name}:${value}`);
  }
  assert.deepEqual(found, [
    "order-print.html:bg-[repeating-linear-gradient(90deg,#1a1d23_0,#1a1d23_2px,transparent_2px,transparent_5px)]",
  ]);
});

test("all table cells use the standardized 12 by 16 padding tokens", () => {
  for (const file of htmlFiles) {
    for (const match of file.source.matchAll(/<(?:th|td)\b[^>]*class="([^"]*)"[^>]*>/g)) {
      const classes = match[1];
      assert.match(classes, /\bpx-table-cell-x\b/, `${file.name} has a table cell without horizontal token padding`);
      assert.match(classes, /\bpy-table-cell-y\b/, `${file.name} has a table cell without vertical token padding`);
    }
  }
});

test("the required constants and Tailwind v4 bridges are declared", () => {
  const required = [
    "--lala-content-max: 90rem",
    "--lala-shell-sidebar: 15.5rem",
    "--lala-shell-header: 4rem",
    "--lala-page-padding-mobile: 1rem",
    "--lala-page-padding-tablet: 1.5rem",
    "--lala-page-padding-desktop: 2rem",
    "--lala-table-row: 3.25rem",
    "--lala-table-cell-x: 1rem",
    "--lala-table-cell-y: 0.75rem",
    "--container-app: var(--lala-content-max)",
    "--spacing-table-cell-x: var(--lala-table-cell-x)",
    "--spacing-table-cell-y: var(--lala-table-cell-y)",
    "--z-index-header: var(--lala-z-header)",
    "--z-index-sidebar: var(--lala-z-sidebar)",
    "--z-index-overlay: var(--lala-z-overlay)",
    "--lala-duration-modal: 260ms",
    "--lala-duration-drawer: 300ms",
    "--lala-ease-emphasized: cubic-bezier(0.16, 1, 0.3, 1)",
    "@media (prefers-reduced-motion: reduce)",
  ];
  for (const declaration of required) assert.ok(tokens.includes(declaration), `Missing token declaration: ${declaration}`);
});

test("dialogs, drawers, and transient feedback use the motion contract", () => {
  for (const file of htmlFiles) {
    for (const match of file.source.matchAll(/<div\b(?=[^>]*role="dialog")[^>]*>/g)) {
      const tag = match[0];
      assert.match(tag, /motion-overlay/, `${file.name} dialog must animate its overlay`);
      assert.match(tag, /x-transition:enter="motion-enter-active"/, `${file.name} dialog must define enter motion`);
      assert.match(tag, /x-transition:leave="motion-leave-active"/, `${file.name} dialog must define exit motion`);
    }
    if (/role="dialog"[\s\S]*?<aside\b/.test(file.source)) assert.match(file.source, /motion-drawer-panel/, `${file.name} drawer must animate from logical end`);
    if (/role="dialog"[\s\S]*?<section\b/.test(file.source)) assert.match(file.source, /motion-surface/, `${file.name} modal must animate its surface`);
    for (const match of file.source.matchAll(/<(?:div|section)\b(?=[^>]*x-show=)(?=[^>]*class="[^"]*fixed[^"]*(?:bottom|top)-)[^>]*>/g)) {
      assert.match(match[0], /motion-toast/, `${file.name} transient feedback must use toast motion`);
    }
  }
});

function componentSource(file, name) {
  const match = file.source.match(new RegExp(`<!-- component: ${name} -->([\\s\\S]*?)<!-- \\/component: ${name} -->`));
  assert.ok(match, `${file.name} is missing ${name}`);
  return match[1];
}

test("merchant primary navigation exposes current modules and no separate Catalog destination", () => {
  for (const name of merchantNavigationScreens) {
    const file = htmlFiles.find((entry) => entry.name === name);
    assert.ok(file, `${name} is missing`);
    const mobilePrimary = componentSource(file, "mobile-primary-navigation");
    assert.match(mobilePrimary, /href="\/dashboard\.html"/, `${name} must expose Dashboard navigation`);
    assert.match(mobilePrimary, /href="\/analytics-overview\.html"/, `${name} must expose Analytics navigation`);
    assert.match(mobilePrimary, /href="\/products-list\.html"/, `${name} must expose Products navigation`);
    assert.match(mobilePrimary, /href="\/customers-list\.html"/, `${name} must expose Customers navigation`);
    assert.match(mobilePrimary, /href="\/discounts-list\.html"/, `${name} must expose Discounts navigation`);
    assert.match(mobilePrimary, /href="\/shipping-zones\.html"/, `${name} must expose Shipping navigation`);
    assert.doesNotMatch(mobilePrimary, /catalog-organization|Catalog|الكتالوج/, `${name} must not expose Catalog as a primary destination`);
    const aside = file.source.match(/<aside\b[\s\S]*?<\/aside>/)?.[0] ?? "";
    assert.match(aside, /href="\/stores-list\.html"/, `${name} must expose the store switcher`);
    assert.doesNotMatch(aside, /component-gallery\.html/, `${name} must not expose review tooling to merchants`);
  }
});

test("Batch 6 discounts preserve the approved coupon model", () => {
  const list = htmlFiles.find((entry) => entry.name === "discounts-list.html");
  const editor = htmlFiles.find((entry) => entry.name === "discount-editor.html");
  assert.ok(list && editor, "Batch 6 discount screens are missing");
  for (const file of [list, editor]) {
    assert.match(file.source, /خصم|Discount|Coupon/, `${file.name} must contain real bilingual discount copy`);
    assert.doesNotMatch(file.source, /per-customer|per customer|لكل عميل|automatic discount|خصم تلقائي/i, `${file.name} must not introduce unsupported discount behavior`);
  }
  assert.match(editor.source, /Percentage|نسبة مئوية/, "Percentage reward is required");
  assert.match(editor.source, /Fixed amount|مبلغ ثابت/, "Fixed reward is required");
  assert.match(editor.source, /Free shipping|شحن مجاني/, "Free-shipping reward is required");
  assert.match(editor.source, /before discount|قبل الخصم/, "Minimum subtotal basis must be explicit");
  assert.match(editor.source, /excludes shipping|لا تشمل الشحن/, "Shipping exclusion must be explicit");
  assert.match(editor.source, /one coupon|كوبون واحد/, "One-coupon-per-order rule must be explicit");
});

test("Batch 7 shipping screens preserve the approved Egypt and Bosta model", () => {
  const names = ["shipping-zones.html", "shipping-zone-editor.html", "custom-locations.html", "shipping-integrations.html", "bosta-connection.html"];
  const files = names.map((name) => htmlFiles.find((entry) => entry.name === name));
  for (const file of files) {
    assert.ok(file, "Batch 7 shipping screen is missing");
    assert.match(file.source, /Shipping|الشحن|Bosta/, `${file.name} must contain real bilingual shipping copy`);
    assert.match(file.source, /component: shipping-section-navigation/, `${file.name} must stay inside the Shipping module`);
    assert.match(file.source, /href="\/shipping-zones\.html"/, `${file.name} must expose Shipping zones`);
    assert.match(file.source, /href="\/shipping-integrations\.html"/, `${file.name} must expose Integrations`);
    assert.doesNotMatch(file.source, /name=["'](?:manual_)?(?:carrier|tracking_number)["']/i, `${file.name} must not introduce unsupported manual carrier fields`);
  }

  const zones = files[0];
  const editor = files[1];
  const integrations = files[3];
  const bosta = files[4];
  assert.match(zones.source, /Free shipping|شحن مجاني/, "Zero-price shipping must be presented as Free shipping");
  assert.match(editor.source, /overlap|تداخل/i, "Active-zone overlap blocking must be visible");
  assert.match(editor.source, /Unsupported location|الموقع غير مدعوم/, "Unsupported location state must be visible");
  assert.match(integrations.source, /does not automatically change|لا يغيّر حالة الطلب تلقائيًا/, "Shipment creation must not silently change the order status");
  for (const mapping of ["accepted", "picked up / in transit", "delivered", "cancelled", "returned"]) {
    assert.match(bosta.source, new RegExp(mapping, "i"), `Bosta mapping is missing ${mapping}`);
  }
});

test("Orders expose the complete Batch 7 submission lifecycle", () => {
  const list = htmlFiles.find((entry) => entry.name === "orders-list.html");
  const detail = htmlFiles.find((entry) => entry.name === "order-detail.html");
  assert.match(list.source, /Bulk submission summary|ملخص الإرسال الجماعي/, "Orders list needs a bulk submission summary");
  assert.match(list.source, /active shipment|شحنة نشطة/, "Bulk submission must explain duplicate blocking");
  for (const label of ["Not sent", "Sending", "Sent", "Failed", "Duplicate"]) assert.match(detail.source, new RegExp(label), `Order detail is missing ${label}`);
  assert.match(detail.source, /does not change the core order status|لا يغيّر حالة الطلب الأساسية/, "Shipment creation and core order status must stay separate");
});

test("current merchant screens expose primary navigation on mobile", () => {
  for (const name of merchantNavigationScreens) {
    const file = htmlFiles.find((entry) => entry.name === name);
    assert.match(file.source, /component: mobile-primary-navigation/, `${name} must expose mobile primary navigation`);
  }
});

test("product screens expose coherent sections and separate product tools", () => {
  const productScreens = ["products-list.html", "product-editor.html", "product-variants.html", "inventory.html", "catalog-organization.html", "featured-products.html", "product-trash.html", "product-import.html", "product-import-results.html"];
  for (const name of productScreens) {
    const file = htmlFiles.find((entry) => entry.name === name);
    const productNavigation = componentSource(file, "mobile-product-navigation");
    assert.match(productNavigation, /catalog-organization\.html/, `${name} must expose product organization`);
    assert.match(productNavigation, /featured-products\.html/, `${name} must expose merchandising`);
    assert.match(productNavigation, /product-import\.html/, `${name} must expose import as a tool`);
    assert.match(productNavigation, /product-trash\.html/, `${name} must expose Trash as a tool`);
  }
});

test("customer screens preserve masking, exports, and conflict review boundaries", () => {
  const customerFiles = ["customers-list.html", "customer-detail.html", "customer-identity-review.html"].map((name) => htmlFiles.find((entry) => entry.name === name));
  for (const file of customerFiles) {
    assert.ok(file, "Batch 5 customer screen is missing");
    assert.match(file.source, /wallet==='overdraft'|wallet === 'overdraft'/, `${file.name} must expose overdraft masking`);
    assert.match(file.source, /customers-list\.html/, `${file.name} must preserve the Customers parent`);
  }
  const list = customerFiles[0];
  assert.match(list.source, /:disabled="wallet === 'overdraft'"/, "Sensitive customer export must be disabled during masking");
  const review = customerFiles[2];
  assert.match(review.source, /بدون دمج|without merging|No orders were moved or merged/, "Identity review must prevent silent merging");
});

test("Batch 4 screens do not mix unrelated destinations as peer tabs", () => {
  for (const name of ["catalog-organization.html", "featured-products.html", "product-import.html", "product-trash.html"]) {
    const file = htmlFiles.find((entry) => entry.name === name);
    assert.doesNotMatch(file.source, /mt-6 flex min-w-max gap-1 overflow-x-auto border-b/, `${name} still contains the rejected peer-tab pattern`);
  }
});

test("Batch 8 analytics preserve the approved metric and date-range contract", () => {
  const names = ["dashboard.html", "analytics-overview.html", "analytics-orders.html", "analytics-products.html"];
  const files = names.map((name) => htmlFiles.find((entry) => entry.name === name));
  for (const file of files) {
    assert.ok(file, "Batch 8 analytics screen is missing");
    for (const range of ["Today", "Yesterday", "7 days", "30 days", "Custom range"]) {
      assert.match(file.source, new RegExp(range, "i"), `${file.name} is missing ${range}`);
    }
    assert.match(file.source, /Cairo|القاهرة/, `${file.name} must define Cairo time`);
    assert.match(file.source, /Compare previous period|قارن بالفترة السابقة/, `${file.name} must expose prior-period comparison`);
    assert.match(file.source, /Export CSV|تصدير CSV/, `${file.name} must expose CSV export`);
  }

  const overview = files[1];
  for (const status of ["New", "Confirmed", "Processing", "Shipped", "Delivered", "Cancelled", "Returned"]) {
    assert.match(overview.source, new RegExp(status), `Sales definition is missing ${status}`);
  }
  assert.match(overview.source, /CSV export uses the visible date range and filters/, "CSV scope must match visible filters");
  assert.doesNotMatch(overview.source, /Estimated profit[^<]*EGP|Gross profit|Net profit/i, "Analytics must not introduce a profit metric");

  const orders = files[2];
  for (const status of ["New", "Confirmed", "Processing", "Shipped", "Delivered", "Cancelled", "Returned"]) {
    assert.match(orders.source, new RegExp(status), `Orders analytics is missing ${status}`);
  }
  assert.match(orders.source, /Order count/, "Orders analytics needs a count view");
  assert.match(orders.source, /Order value/, "Orders analytics needs a value view");

  const products = files[3];
  assert.match(products.source, /Rank by:/, "Products analytics must expose ranking controls");
  assert.match(products.source, />Units</, "Products analytics needs the Units ranking");
  assert.match(products.source, />Value</, "Products analytics needs the Value ranking");
  assert.match(products.source, /Switching Units and Value reorders the ranking/, "The Units/Value behavior must be explicit");
});

test("Batch 9 preserves merchant verification and first-store boundaries", () => {
  const names = [
    "merchant-sign-in.html",
    "merchant-sign-up.html",
    "merchant-verify-phone.html",
    "merchant-password-recovery.html",
    "merchant-reset-password.html",
    "store-onboarding.html",
    "stores-list.html",
  ];
  const files = Object.fromEntries(names.map((name) => [name, htmlFiles.find((entry) => entry.name === name)]));
  for (const [name, file] of Object.entries(files)) {
    assert.ok(file, `${name} is missing`);
    assert.match(file.source, /locale === 'ar'/, `${name} needs real Arabic and English state`);
    assert.match(file.source, /component:/, `${name} needs extraction markers`);
  }

  assert.match(files["merchant-sign-in.html"].source, /Email or phone number/, "Merchant sign-in needs email-or-phone access");
  assert.match(files["merchant-sign-in.html"].source, /Password/, "Merchant sign-in needs a password");
  assert.match(files["merchant-sign-up.html"].source, /Email address/, "Merchant sign-up needs email");
  assert.match(files["merchant-sign-up.html"].source, /Phone number/, "Merchant sign-up needs phone");
  assert.match(files["merchant-sign-up.html"].source, /Email verification is not required/, "Merchant email must not gain a verification step");

  const verify = files["merchant-verify-phone.html"].source;
  assert.match(verify, /10 minutes/, "Merchant code lifetime must be 10 minutes");
  assert.match(verify, /60/, "Merchant resend cooldown must expose 60 seconds");
  assert.match(verify, /5 times per phone number in a rolling hour/, "Merchant send limit must stay five per rolling hour");
  assert.match(verify, /5 attempts|2 \/ 5/, "Merchant code must be invalidated after five wrong attempts");
  assert.match(verify, /no email fallback or bypass/i, "WhatsApp delivery failure must not bypass verification");

  const onboarding = files["store-onboarding.html"].source;
  for (const field of ["Store name", "lala subdomain", "Store currency", "Primary language"]) {
    assert.match(onboarding, new RegExp(field), `Store onboarding is missing ${field}`);
  }
  assert.match(onboarding, /public even when the catalog is empty/, "The storefront must become public immediately");
  assert.match(onboarding, /No store country is requested/, "Onboarding must not ask for a store country");
  assert.doesNotMatch(onboarding, /name=["']country["']|id=["']country["']/, "Onboarding must not add a country field");
  assert.match(onboarding, /That subdomain is taken/, "Subdomain availability needs an unavailable state");

  const stores = files["stores-list.html"].source;
  assert.match(stores, /no store-count limit/, "One merchant can own unlimited stores");
  assert.match(stores, /first store|Empty account/, "The empty merchant account must be reviewable");
  assert.match(stores, /owner-only/, "The MVP must remain owner-only");
  assert.doesNotMatch(stores, /Invite member|Invite team|Add teammate/i, "Team invitations are not part of Batch 9");

  const recovery = files["merchant-password-recovery.html"].source;
  assert.match(recovery, /Email link/, "Recovery needs email-channel feedback");
  assert.match(recovery, /WhatsApp code/, "Recovery needs WhatsApp-channel feedback");
  assert.match(recovery, /same feedback is shown whether or not an account matches/, "Recovery must not disclose account existence");
});
