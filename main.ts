// One-Line Office Joke Laugh-Off — entry program.
// Writes one original one-line office joke to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I wrote 'as discussed' in an email about a meeting that never happened, and three people replied 'agreed'.";

// The gate wants 1-200 characters of non-blank text on a single line.
// Normalize defensively: keep the first line, trim it, and fail loudly
// rather than shipping a blank or over-long entry.
function normalizeLine(line: string): string {
  const first = line.split("\n")[0].trim();
  if (first.length < 1 || first.length > 200) {
    throw new Error(`entry line must be 1-200 chars, got ${first.length}`);
  }
  return first;
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), normalizeLine(JOKE), "utf8");
