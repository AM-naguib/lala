import { readFile, readdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const publicRoot = resolve(import.meta.dirname, "..", "public");
const names = (await readdir(publicRoot)).filter((name) => name.endsWith(".html"));

const replacements = new Map([
  ["سارة محمود", "عميل تجريبي"],
  ["عمر خالد", "عميل تجريبي"],
  ["مريم أحمد", "عميل تجريبي"],
  ["يوسف علي", "عميل تجريبي"],
  ["منى", "عميل تجريبي"],
  ["Sara Mahmoud", "Demo Customer"],
  ["Omar Khaled", "Demo Customer"],
  ["Mariam Ahmed", "Demo Customer"],
  ["Youssef Ali", "Demo Customer"],
  ["Mona", "Demo Customer"],
  ["Ahmed Mostafa", "Merchant User"],
  ["Ahmed", "Merchant User"],
  ["أحمد", "مستخدم التاجر"],
  ["+20 100 123 4567", "+20 100 000 0000"],
  ["+20 100 456 8892", "+20 100 000 0000"],
  ["+20 111 820 4471", "+20 100 000 0000"],
  ["+20 122 304 1187", "+20 100 000 0000"],
  ["+20 111 862 9040", "+20 100 000 0000"],
  ["+20 122 430 1872", "+20 100 000 0000"],
  ["+20 109 771 2031", "+20 100 000 0000"],
  ["+20 100••••123", "+20 100••••000"],
  ["+20 10•• ••• ••67", "+20 10•• ••• ••00"],
]);

for (const name of names) {
  const path = resolve(publicRoot, name);
  let source = await readFile(path, "utf8");
  for (const [from, to] of replacements) source = source.replaceAll(from, to);
  source = source.replaceAll(/(?:[a-z0-9._%+-]+)@(?:[a-z0-9.-]+\.[a-z]{2,})/gi, "demo.customer@example.invalid");
  source = source.replaceAll(">AM<", ">MU<");
  source = source.replaceAll("bosta_test_demo_token", "demo_key_not_a_secret");
  await writeFile(path, source, "utf8");
}

console.log(`Sanitized ${names.length} public HTML fixtures.`);
