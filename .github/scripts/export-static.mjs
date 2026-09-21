// Export the prerendered React app as plain static files for GitHub Pages.
// Usage (CI): build first (PAGES_BASE=./ NITRO_PRESET=node-server),
// then: node .github/scripts/export-static.mjs
// Serves .output locally, captures /, rewrites root-absolute URLs to relative.
import { spawn } from "node:child_process";
import { cpSync, mkdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";

const HOST = "127.0.0.1";
const PORT = 4311;
const OUT = new URL("../../pages-dist/", import.meta.url);

if (!existsSync(".output/server/index.mjs")) {
  console.error("missing .output/server/index.mjs — build first");
  process.exit(1);
}
const server = spawn("node", [".output/server/index.mjs"], {
  env: { ...process.env, HOST, NITRO_HOST: HOST, PORT: String(PORT), NITRO_PORT: String(PORT) },
  stdio: ["ignore", "pipe", "pipe"],
});
let logged = "";
server.stdout?.on("data", (d) => { logged += d; });
server.stderr?.on("data", (d) => { logged += d; });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let html = "";
for (let i = 0; i < 45; i++) {
  await sleep(1000);
  try {
    const res = await fetch(`http://${HOST}:${PORT}/`);
    if (res.ok) { html = await res.text(); break; }
  } catch {}
}
server.kill();
if (!html) { console.error("capture failed: no HTML. server said:\n" + logged.slice(-2000)); process.exit(1); }

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
