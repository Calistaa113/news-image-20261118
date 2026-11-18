// News-image entry (Node 22, standard library only): the front page drawn
// for 18 November 2026 sits beside this file as entry.png, and the program
// copies it to the output directory the grader provides. The copy is exact,
// so two runs write the same bytes.

import { copyFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
copyFileSync(new URL("./entry.png", import.meta.url),
  join(outDir, "entry.png"));
