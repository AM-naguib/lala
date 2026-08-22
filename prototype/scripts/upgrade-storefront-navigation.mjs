import { readdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const publicRoot = resolve(import.meta.dirname, "..", "public");
const files = (await readdir(publicRoot)).filter((name) => name.endsWith(".html"));
let changed = 0;

for (const name of files) {
  const path = resolve(publicRoot, name);
  let source = await readFile(path, "utf8");
  if (source.includes('href="/themes.html"')) continue;

  const settingsLink = /<a href="\/store-settings-general\.html" class="([^"]+)">[\s\S]*?<span x-show="locale === 'ar'">الإعدادات<\/span><span x-show="locale === 'en'">Settings<\/span><\/a>/g;
  const next = source.replace(settingsLink, (full, className) => {
    const isMobile = className.includes("inline-flex");
    const normalized = isMobile
      ? "inline-flex h-control-md shrink-0 items-center justify-center gap-2 rounded-md px-3 text-xs font-semibold text-muted"
      : "flex h-input items-center gap-3 rounded-lg px-3 text-muted hover:bg-subtle hover:text-ink";
    const storefront = `<a href="/themes.html" class="${normalized}"><span aria-hidden="true">▱</span><span x-show="locale === 'ar'">واجهة المتجر</span><span x-show="locale === 'en'">Storefront</span></a>`;
    return storefront + full;
  });

  if (next !== source) {
    await writeFile(path, next, "utf8");
    changed += 1;
  }
}

console.log(`Added Storefront navigation to ${changed} existing static screens.`);
