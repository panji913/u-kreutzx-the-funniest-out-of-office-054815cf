// The Funniest Out-of-Office — make.fun entry.
// Writes one line, the funniest out-of-office auto-reply I could write,
// to /output/entry.txt. The gate wants UTF-8 text of 1-140 characters,
// not only white space, so the line is kept short, single-line and exact.
// Deterministic: no clock, no randomness, no network — two runs write
// byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Out of office: I've traded my inbox for a hammock. The hammock has no Wi-Fi and, frankly, better boundaries than I do.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
