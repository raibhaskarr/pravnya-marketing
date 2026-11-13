// Copies the website's app screenshots and logo into public/ so reels always use the latest ones.
import fs from "node:fs";
import path from "node:path";

const site = path.resolve(import.meta.dirname, "../../website/public/assets");
const pub = path.resolve(import.meta.dirname, "../public");
for (const [from, to] of [["screenshots", "screens"], ["brand", "brand"]]) {
  fs.mkdirSync(path.join(pub, to), { recursive: true });
  for (const f of fs.readdirSync(path.join(site, from))) {
    if (/\.(webp|png|svg)$/.test(f)) fs.copyFileSync(path.join(site, from, f), path.join(pub, to, f));
  }
}
console.log("assets synced");
