// Ensure the library entry auto-loads the compiled stylesheet, so consumers get
// styles just by importing the package (no separate CSS import required).
// The `sideEffects` field keeps this import from being tree-shaken away.
import { readFileSync, writeFileSync, existsSync } from "node:fs";

const entry = "dist/index.js";
const banner = 'import "./style.css";\n';

if (!existsSync(entry)) {
  console.error(`[postbuild] ${entry} not found — run build:lib first.`);
  process.exit(1);
}

const src = readFileSync(entry, "utf8");
if (!src.startsWith(banner)) {
  writeFileSync(entry, banner + src);
  console.log("[postbuild] injected CSS import into dist/index.js");
} else {
  console.log("[postbuild] CSS import already present");
}
