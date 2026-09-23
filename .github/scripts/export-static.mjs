// Export the prerendered React app as plain static files for GitHub Pages.
// CWD-independent: all paths derive from this file's location.
// Usage: build first (PAGES_BASE=./ NITRO_PRESET=node-server), then:
//   node .github/scripts/export-static.mjs   (from repo root, or anywhere)
import { spawn } from "node:child_process";
import { cpSync, mkdirSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const ROOT = path.resolve(fileURLToPath(new URL("../..", import.meta.url)));
const PROJ = path.join(ROOT, "project-prospect-boost-main");
const OUT = path.join(ROOT, "pages-dist");
const HOST = "127.0.0.1";
const PORT = 4311;

if (!existsSync(path.join(PROJ, ".output/server/index.mjs"))) {
  console.error("missing .output/server/index.mjs — build first");
  process.exit(1);
}
const server = spawn("node", [".output/server/index.mjs"], {
  cwd: PROJ,
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
  .replaceAll('content="/', 'content="./')
  .replaceAll('"././', '"./');

mkdirSync(OUT, { recursive: true });
cpSync(path.join(PROJ, ".output/public"), OUT, { recursive: true });
writeFileSync(path.join(OUT, "index.html"), html);
if (!existsSync(path.join(OUT, "404.html"))) {
  writeFileSync(path.join(OUT, "404.html"), html);
}
console.log("static export ok:", html.length, "bytes ->", OUT);
