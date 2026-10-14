import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const outDir = process.argv[2] ?? "dist";

async function htmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) => {
      const path = join(dir, entry.name);
      if (entry.isDirectory()) return htmlFiles(path);
      return entry.name.endsWith(".html") ? [path] : [];
    }),
  );
  return nested.flat();
}

const files = await htmlFiles(outDir);
for (const file of files) {
  const html = await readFile(file, "utf8");
  const stripped = html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "")
    .replace(/<link\b[^>]*\bas="script"[^>]*\/?>/g, "")
    .replace(/<link\b[^>]*\brel="modulepreload"[^>]*\/?>/g, "");
  await writeFile(file, stripped);
  console.log(
    `strip-js: ${file} ${html.length} -> ${stripped.length} bytes`,
  );
}
