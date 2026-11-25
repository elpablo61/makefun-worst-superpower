import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Worst Superpower — one line, at most 140 characters.
const LINE =
  "I can count every grain of rice in a bowl, perfectly, but only after you've finished eating it. Last night: 6,214.";

// The gate rejects anything over 140 characters; fail loudly instead.
if (LINE.length > 140) throw new Error(`entry too long: ${LINE.length} chars`);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
