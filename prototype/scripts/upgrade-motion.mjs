import { readFile, readdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const projectRoot = resolve(import.meta.dirname, "..");
const publicRoot = resolve(projectRoot, "public");
const htmlNames = (await readdir(publicRoot)).filter((name) => name.endsWith(".html"));

const transitionAttributes = [
  'x-transition:enter="motion-enter-active"',
  'x-transition:enter-start="motion-enter-start"',
  'x-transition:enter-end="motion-enter-end"',
  'x-transition:leave="motion-leave-active"',
  'x-transition:leave-start="motion-leave-start"',
  'x-transition:leave-end="motion-leave-end"',
].join(" ");

function addClasses(tag, classes) {
  const additions = classes.filter((name) => !new RegExp(`(?:^|\\s)${name}(?:\\s|$)`).test(tag.match(/class="([^"]*)"/)?.[1] ?? ""));
  if (!additions.length) return tag;
  if (/class="/.test(tag)) return tag.replace(/class="([^"]*)"/, (_, value) => `class="${value} ${additions.join(" ")}"`);
  return tag.replace(/>$/, ` class="${additions.join(" ")}">`);
}

function addTransitions(tag) {
  if (tag.includes("x-transition:enter=")) return tag;
  if (/\sx-transition(?:\s|>)/.test(tag)) tag = tag.replace(/\sx-transition(?=\s|>)/, "");
  return tag.replace(/>$/, ` ${transitionAttributes}>`);
}

function enhanceTag(tag, classes) {
  return addTransitions(addClasses(tag, classes));
}

function enhanceDialogs(source) {
  return source
    .split("\n")
    .map((line) => {
      if (!line.includes('role="dialog"')) return line;
      const drawer = line.includes("<aside");
      line = line.replace(/<div\b(?=[^>]*role="dialog")(?=[^>]*x-show=)[^>]*>/, (tag) =>
        enhanceTag(tag, ["motion-overlay", drawer ? "motion-drawer" : "motion-modal"]),
      );
      if (drawer) {
        line = line.replace(/<button\b(?=[^>]*class="[^"]*absolute inset-0)[^>]*>/, (tag) => addClasses(tag, ["motion-backdrop"]));
        line = line.replace(/<aside\b[^>]*>/, (tag) => addClasses(tag, ["motion-drawer-panel"]));
      } else {
        line = line.replace(/<section\b[^>]*>/, (tag) => addClasses(tag, ["motion-surface"]));
      }
      return line;
    })
    .join("\n");
}

function enhanceConditionalSurfaces(source) {
  return source.replace(/<(div|section|aside)\b(?=[^>]*x-show="([^"]+)")[^>]*>/g, (tag, _name, expression) => {
    if (expression.includes("locale") || tag.includes('role="dialog"') || tag.includes("motion-overlay")) return tag;
    if (/class="[^"]*fixed[^"]*(?:bottom|top)-/.test(tag)) return enhanceTag(tag, ["motion-toast"]);
    if (/class="[^"]*absolute/.test(tag)) return enhanceTag(tag, ["motion-popover"]);
    return enhanceTag(tag, ["motion-disclosure"]);
  });
}

for (const name of htmlNames) {
  const path = resolve(publicRoot, name);
  let source = await readFile(path, "utf8");
  source = enhanceDialogs(source);
  source = enhanceConditionalSurfaces(source);
  await writeFile(path, source, "utf8");
}

console.log(`Applied the lala motion contract to ${htmlNames.length} static screens.`);
