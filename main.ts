// Roast the Smart Fridge: One Line, Best Laugh Wins
// u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9
// The program writes a single roast line (<=160 chars) to /output/entry.txt.
// Judge brief (in order): roast a smart home gadget in one line; be funny with
// a turn/sting at the end; be fresh (no stock milk-order joke); fit one line
// with no padding; name a real behaviour of the thing.
// Angle: the ice maker as a rigged slot machine that never pays out, then
// beeps proudly as if it invented winter. One concrete image, one sting.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ENTRY =
  "My smart fridge's ice maker coughs out one cube at a time like a rigged slot machine that never pays, then beeps proudly, as if it just invented winter.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to ${join(outDir, "entry.txt")}`);
