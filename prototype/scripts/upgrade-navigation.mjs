import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const projectRoot = resolve(import.meta.dirname, "..");
const publicRoot = resolve(projectRoot, "public");

const merchantScreens = [
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
];

const orderScreens = new Set(["orders-list.html", "order-detail.html", "order-create.html"]);
const customerScreens = new Set(["customers-list.html", "customer-detail.html", "customer-identity-review.html"]);
const discountScreens = new Set(["discounts-list.html", "discount-editor.html"]);
const productScreens = new Set([
  "products-list.html",
  "product-editor.html",
  "product-variants.html",
  "inventory.html",
  "catalog-organization.html",
  "featured-products.html",
  "product-trash.html",
  "product-import.html",
  "product-import-results.html",
]);

const productSectionByScreen = {
  "products-list.html": "all",
  "product-editor.html": "all",
  "product-variants.html": "all",
  "inventory.html": "inventory",
  "catalog-organization.html": "organization",
  "featured-products.html": "featured",
  "product-import.html": "import",
  "product-import-results.html": "import",
  "product-trash.html": "trash",
};

function bilingual(arabic, english) {
  return `<span x-show="locale === 'ar'">${arabic}</span><span x-show="locale === 'en'">${english}</span>`;
}

function topLink({ href, icon, arabic, english, active, badge = "" }) {
  const classes = active
    ? "flex h-input items-center gap-3 rounded-lg bg-accent-soft px-3 font-semibold text-accent"
    : "flex h-input items-center gap-3 rounded-lg px-3 text-muted hover:bg-subtle hover:text-ink";
  return `<a href="${href}" class="${classes}"${active ? ' aria-current="page"' : ""}><span aria-hidden="true">${icon}</span>${bilingual(arabic, english)}${badge}</a>`;
}

function productChild({ href, arabic, english, active, badge = "" }) {
  const classes = active
    ? "flex min-h-9 items-center rounded-md bg-card px-3 py-2 text-xs font-semibold text-accent shadow-xs"
    : "flex min-h-9 items-center rounded-md px-3 py-2 text-xs font-semibold text-muted hover:bg-card hover:text-ink";
  return `<a href="${href}" class="${classes}"${active ? ' aria-current="page"' : ""}>${bilingual(arabic, english)}${badge}</a>`;
}

function desktopSidebar(name) {
  const dashboardActive = name === "app-shell.html";
  const ordersActive = orderScreens.has(name);
  const productsActive = productScreens.has(name);
  const customersActive = customerScreens.has(name);
  const discountsActive = discountScreens.has(name);
  const section = productSectionByScreen[name];
  const orderBadge = '<span class="ms-auto rounded-full bg-accent-soft px-2 py-0.5 font-mono text-2xs text-accent">12</span>';
  const lowStockBadge = '<span class="ms-auto rounded-full bg-warning-soft px-2 py-0.5 font-mono text-2xs text-warning">7</span>';
  const trashBadge = '<span class="ms-auto rounded-full bg-danger-soft px-2 py-0.5 font-mono text-2xs text-danger">3</span>';

  const productChildren = productsActive
    ? `<div class="ms-5 mt-1 space-y-1 border-s border-border ps-2">
          ${productChild({ href: "/products-list.html", arabic: "كل المنتجات", english: "All products", active: section === "all" })}
          ${productChild({ href: "/inventory.html", arabic: "المخزون", english: "Inventory", active: section === "inventory", badge: lowStockBadge })}
          ${productChild({ href: "/catalog-organization.html", arabic: "التنظيم", english: "Organization", active: section === "organization" })}
          ${productChild({ href: "/featured-products.html", arabic: "المنتجات المميزة", english: "Featured products", active: section === "featured" })}
          <p class="px-3 pb-1 pt-3 text-micro font-semibold uppercase tracking-overline text-faint">${bilingual("أدوات المنتجات", "Product tools")}</p>
          ${productChild({ href: "/product-import.html", arabic: "استيراد المنتجات", english: "Import products", active: section === "import" })}
          ${productChild({ href: "/product-trash.html", arabic: "سلة المحذوفات", english: "Trash", active: section === "trash", badge: trashBadge })}
        </div>`
    : "";

  return `<aside class="fixed inset-y-0 start-0 z-sidebar hidden w-sidebar flex-col border-e border-border bg-card lg:flex">
      <div class="flex h-app-header items-center gap-2.5 border-b border-border px-5"><a href="/app-shell.html" class="flex items-center gap-2.5" aria-label="lala dashboard"><span class="grid size-8 place-items-center rounded-lg bg-accent font-bold text-white">l</span><span class="text-xl font-bold">lala</span></a></div>
      <div class="px-3 pt-4"><div class="flex items-center gap-3 rounded-lg border border-border bg-subtle p-3"><span class="grid size-8 place-items-center rounded-md bg-ink text-xs font-semibold text-white">LN</span><div class="min-w-0"><p class="truncate text-sm font-semibold">${bilingual("متجر لونا", "Luna Store")}</p><p class="truncate text-xs text-muted">luna.lala.store</p></div></div></div>
      <nav class="flex-1 overflow-y-auto px-3 py-5" :aria-label="locale === 'ar' ? 'القائمة الرئيسية' : 'Main navigation'">
        <div class="space-y-1">
          ${topLink({ href: "/app-shell.html", icon: "◫", arabic: "لوحة التحكم", english: "Dashboard", active: dashboardActive })}
          ${topLink({ href: "/orders-list.html", icon: "▤", arabic: "الطلبات", english: "Orders", active: ordersActive, badge: orderBadge })}
          ${topLink({ href: "/products-list.html", icon: "◇", arabic: "المنتجات", english: "Products", active: productsActive })}
          ${productChildren}
          ${topLink({ href: "/customers-list.html", icon: "◎", arabic: "العملاء", english: "Customers", active: customersActive })}
          ${topLink({ href: "/discounts-list.html", icon: "%", arabic: "الخصومات", english: "Discounts", active: discountsActive })}
        </div>
      </nav>
      <div class="border-t border-border px-5 py-4"><p class="text-xs font-semibold text-muted">${bilingual("مساحة عمل التاجر", "Merchant workspace")}</p></div>
    </aside>`;
}

function mobileTopLink({ href, icon, arabic, english, active }) {
  const classes = active
    ? "inline-flex h-control-md shrink-0 items-center justify-center gap-2 rounded-md bg-accent-soft px-3 text-xs font-semibold text-accent"
    : "inline-flex h-control-md shrink-0 items-center justify-center gap-2 rounded-md px-3 text-xs font-semibold text-muted";
  return `<a href="${href}" class="${classes}"${active ? ' aria-current="page"' : ""}><span aria-hidden="true">${icon}</span>${bilingual(arabic, english)}</a>`;
}

function mobilePrimaryNavigation(name) {
  return `<!-- component: mobile-primary-navigation -->
      <nav class="flex gap-1 overflow-x-auto border-b border-border bg-card px-page-mobile py-2 sm:px-page-tablet lg:hidden" :aria-label="locale === 'ar' ? 'التنقل الرئيسي' : 'Primary navigation'">
        ${mobileTopLink({ href: "/app-shell.html", icon: "◫", arabic: "الرئيسية", english: "Dashboard", active: name === "app-shell.html" })}
        ${mobileTopLink({ href: "/orders-list.html", icon: "▤", arabic: "الطلبات", english: "Orders", active: orderScreens.has(name) })}
        ${mobileTopLink({ href: "/products-list.html", icon: "◇", arabic: "المنتجات", english: "Products", active: productScreens.has(name) })}
        ${mobileTopLink({ href: "/customers-list.html", icon: "◎", arabic: "العملاء", english: "Customers", active: customerScreens.has(name) })}
        ${mobileTopLink({ href: "/discounts-list.html", icon: "%", arabic: "الخصومات", english: "Discounts", active: discountScreens.has(name) })}
      </nav>
      <!-- /component: mobile-primary-navigation -->`;
}

function mobileProductLink({ href, arabic, english, active }) {
  const classes = active
    ? "inline-flex h-control-sm shrink-0 items-center rounded-md bg-ink px-3 text-xs font-semibold text-white"
    : "inline-flex h-control-sm shrink-0 items-center rounded-md px-3 text-xs font-semibold text-muted hover:bg-subtle";
  return `<a href="${href}" class="${classes}"${active ? ' aria-current="page"' : ""}>${bilingual(arabic, english)}</a>`;
}

function mobileProductNavigation(name) {
  if (!productScreens.has(name)) return "";
  const section = productSectionByScreen[name];
  const moreActive = section === "import" || section === "trash";
  return `
      <!-- component: mobile-product-navigation -->
      <nav class="border-b border-border bg-subtle/70 px-page-mobile py-2 sm:px-page-tablet lg:hidden" :aria-label="locale === 'ar' ? 'أقسام المنتجات' : 'Product sections'">
        <div class="flex gap-1 overflow-x-auto">
          ${mobileProductLink({ href: "/products-list.html", arabic: "الكل", english: "All", active: section === "all" })}
          ${mobileProductLink({ href: "/inventory.html", arabic: "المخزون", english: "Inventory", active: section === "inventory" })}
          ${mobileProductLink({ href: "/catalog-organization.html", arabic: "التنظيم", english: "Organization", active: section === "organization" })}
          ${mobileProductLink({ href: "/featured-products.html", arabic: "المميزة", english: "Featured", active: section === "featured" })}
          <details class="relative shrink-0">
            <summary class="flex h-control-sm cursor-pointer list-none items-center gap-1 rounded-md px-3 text-xs font-semibold ${moreActive ? "bg-ink text-white" : "text-muted hover:bg-subtle"}">${bilingual("أدوات", "Tools")}<span aria-hidden="true">⌄</span></summary>
            <div class="fixed inset-x-4 z-overlay mt-1 rounded-lg border border-border bg-card p-1 shadow-sm sm:absolute sm:inset-x-auto sm:end-0 sm:w-52">
              <a href="/product-import.html" class="block rounded-md px-3 py-2 text-xs font-semibold hover:bg-subtle">${bilingual("استيراد المنتجات", "Import products")}</a>
              <a href="/product-trash.html" class="flex items-center rounded-md px-3 py-2 text-xs font-semibold text-danger hover:bg-danger-soft">${bilingual("سلة المحذوفات", "Trash")}<span class="ms-auto font-mono">3</span></a>
            </div>
          </details>
        </div>
      </nav>
      <!-- /component: mobile-product-navigation -->`;
}

for (const name of merchantScreens) {
  const path = resolve(publicRoot, name);
  let source = await readFile(path, "utf8");

  const asidePattern = /<aside\b[\s\S]*?<\/aside>/;
  if (!asidePattern.test(source)) throw new Error(`${name}: sidebar was not found`);
  source = source.replace(asidePattern, desktopSidebar(name));

  const existingMobile = /\s*<!-- component: mobile-primary-navigation -->[\s\S]*?<!-- \/component: mobile-primary-navigation -->/;
  source = source.replace(existingMobile, "");
  const headerEnd = source.indexOf("</header>");
  if (headerEnd === -1) throw new Error(`${name}: header was not found`);
  const insertionPoint = headerEnd + "</header>".length;
  const responsiveNavigation = `\n      ${mobilePrimaryNavigation(name)}${mobileProductNavigation(name)}`;
  source = `${source.slice(0, insertionPoint)}${responsiveNavigation}${source.slice(insertionPoint)}`;

  source = source.replaceAll('href="/component-gallery.html" class="font-semibold lg:hidden"', 'href="/app-shell.html" class="font-semibold lg:hidden"');

  if (["catalog-organization.html", "featured-products.html", "product-trash.html", "product-import.html"].includes(name)) {
    source = source.replace(/\s*<nav class="mt-6 flex min-w-max gap-1 overflow-x-auto border-b border-border">[\s\S]*?<\/nav>/, "");
    source = source.replaceAll("Batch 4 · Catalog operations", "Batch 4 · Products");
  }

  if (name === "catalog-organization.html") {
    source = source
      .replaceAll("lala — Catalog organization", "lala — Product organization")
      .replaceAll("Luna Store / Catalog organization", "Luna Store / Product organization")
      .replaceAll("تنظيم الكتالوج", "تنظيم المنتجات")
      .replaceAll("Catalog organization", "Product organization");
  }

  await writeFile(path, source, "utf8");
}

console.log("Organized current merchant modules and their child navigation.");
