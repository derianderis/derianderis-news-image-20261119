// News-image entry for 19 November 2026 (Node 22, standard library only).
// The front-page image lives in this repository as entry.png, and this
// program copies it to the grader's output directory as entry.png.
// Run it locally with: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.png");

if (!existsSync(source)) {
  throw new Error("entry.png is missing from the repository root");
}
mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
if (statSync(target).size !== statSync(source).size) {
  throw new Error("entry.png was not copied completely");
}
