// Loads the reel definitions (TypeScript) from Node scripts by bundling them on the fly.
import path from "node:path";
import { build } from "esbuild";

export async function loadReels() {
  const root = path.resolve(import.meta.dirname, "..");
  const out = await build({
    entryPoints: [path.join(root, "src/reels/index.ts")],
    bundle: true,
    format: "esm",
    platform: "node",
    write: false,
  });
  const mod = await import(`data:text/javascript;base64,${Buffer.from(out.outputFiles[0].text).toString("base64")}`);
  return mod.reels;
}

export async function loadOutro() {
  const src = (await import("node:fs")).readFileSync(path.resolve(import.meta.dirname, "../src/AppDemoReel.tsx"), "utf8");
  const m = src.match(/narration: \{\s*en: "([^"]+)",\s*hi: "([^"]+)"/);
  return { en: m[1], hi: m[2] };
}
