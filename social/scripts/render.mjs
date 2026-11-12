// Renders reels to out/<composition-id>.mp4.
// Usage: npm run render                      → everything
//        npm run render -- log-in-seconds    → compositions whose id contains the text
import path from "node:path";
import { bundle } from "@remotion/bundler";
import { getCompositions, renderMedia } from "@remotion/renderer";

const filter = process.argv[2] ?? "";
const root = path.resolve(import.meta.dirname, "..");
const browserExecutable = process.env.REMOTION_BROWSER || null;

const serveUrl = await bundle({ entryPoint: path.join(root, "src/index.ts") });
const comps = (await getCompositions(serveUrl, { browserExecutable })).filter((c) => c.id.includes(filter));
if (!comps.length) throw new Error(`No compositions match "${filter}"`);

for (const composition of comps) {
  const outputLocation = path.join(root, "out", `${composition.id}.mp4`);
  const started = Date.now();
  await renderMedia({ composition, serveUrl, codec: "h264", outputLocation, browserExecutable, crf: 20, audioCodec: "aac" });
  console.log(`✓ ${composition.id}  ${(composition.durationInFrames / composition.fps).toFixed(1)}s  (${((Date.now() - started) / 1000).toFixed(0)}s to render)`);
}
