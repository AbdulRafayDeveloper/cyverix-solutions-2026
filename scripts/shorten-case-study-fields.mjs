import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "..", "src", "data", "case-studies.ts");
const lines = fs.readFileSync(filePath, "utf8").split(/\r?\n/);
const fields = new Set(["summary", "challenge", "solution"]);

function shorten(text) {
  const parts = text.split(/(?<=[.!?])\s+/).filter(Boolean);
  if (parts.length < 3) return text;
  return parts.slice(0, -1).join(" ");
}

const out = [];
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const head = line.match(/^(\s+)(summary|challenge|solution):\s*$/);
  if (head && fields.has(head[2])) {
    out.push(line);
    const next = lines[i + 1];
    if (next && /^\s+"/.test(next)) {
      const m = next.match(/^(\s+)"(.*)",\s*$/);
      if (m) {
        const shortened = shorten(m[2]);
        out.push(`${m[1]}"${shortened}",`);
        i += 1;
        continue;
      }
    }
    continue;
  }
  out.push(line);
}

fs.writeFileSync(filePath, out.join("\n"));
console.log("Shortened multi-sentence summary/challenge/solution where 3+ sentences.");
