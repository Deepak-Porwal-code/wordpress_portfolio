// Export the prerendered React app as plain static files for GitHub Pages.
// Usage (CI): build first (PAGES_BASE=./ NITRO_PRESET=node-server),
// then: node .github/scripts/export-static.mjs
// Serves .output locally, captures /, rewrites root-absolute URLs to relative.
import { spawn } from "node:child_process";
import { cpSync, mkdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";

const PORT = 4311;
const OUT = new URL("../../pages-dist/", import.meta.url);

const server = spawn("node", [".output/server/index.mjs"], {
  env: { ...process.env, PORT: String(PORT), NITRO_PORT: String(PORT) },
  stdio: "ignore",
});

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let html = "";
for (let i = 0; i < 30; i++) {
  await sleep(1000);
  try {
    const res = await fetch(`http://localhost:${PORT}/`);
    if (res.ok) { html = await res.text(); break; }
  } catch {}
}
server.kill();
if (!html) { console.error("capture failed: no HTML"); process.exit(1); }

// ponytail: relative-ize so it works under /wordpress_portfolio/ (or any path)
html = html
  .replaceAll('href="/', 'href="./')
  .replaceAll('src="/', 'src="./')
  .replaceAll('content="/', 'content="./');

mkdirSync(OUT, { recursive: true });
cpSync(".output/public", OUT, { recursive: true });
writeFileSync(new URL("index.html", OUT), html);
if (!existsSync(new URL("404.html", OUT))) {
  writeFileSync(new URL("404.html", OUT), html);
}
console.log("static export ok:", html.length, "bytes ->", new URL(".", OUT).pathname);
