import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "..", "src", "data", "case-studies.ts");
const lines = fs.readFileSync(filePath, "utf8").split(/\r?\n/);
const out = [];
let inHighlights = false;
let highlightIdx = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.trim() === "highlights: [") {
    inHighlights = true;
    highlightIdx = 0;
    out.push(line);
    continue;
  }
  if (inHighlights) {
    if (line.trim() === "],") {
      inHighlights = false;
      out.push(line);
      continue;
    }
    const m = /^(\s+)"([^"]*)"(,?)\s*$/.exec(line);
    if (m) {
      highlightIdx += 1;
      if (highlightIdx <= 3) {
        out.push(line);
      }
      continue;
    }
  }
  out.push(line);
}

fs.writeFileSync(filePath, out.join("\n"));
console.log("Trimmed highlights to 3 per study.");
