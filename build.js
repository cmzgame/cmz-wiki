// The wiki's build: pages (markdown with templates) plus the game's data in,
// a static site out. No dependencies.
//
//   node build.js            build into site/
//   node build.js --check    build, and fail on anything the report counts as wrong
//
// What a page is: pages/**/*.md, front matter between --- lines (title,
// categories, aliases, summary), then markdown. [[Title]] links another page
// (red if it does not exist); {{template ...}} is filled from the data. Every
// item, station, place, and villager the data has gets a generated page unless
// a written one has its title, so nothing in the game is without a page.

import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync, copyFileSync, existsSync, rmSync } from "node:fs";
import { join, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { loadData } from "./lib/data.js";
import { expand, STATION_TITLES, KIND_TITLES, placeTitle } from "./lib/templates.js";
import { render, slugify, escapeHtml } from "./lib/markdown.js";

const root = dirname(fileURLToPath(import.meta.url));
const outArg = process.argv.indexOf("--out");
const OUT = outArg > 0 ? join(root, process.argv[outArg + 1]) : join(root, "site");
const REPO = "https://github.com/michaeldippold/cmz-wiki";
const strict = process.argv.includes("--check");
const data = loadData(root);
const errors = [];
const planned = [];
const assets = new Map(); // generated files a template asks for (the valley map)

// ---------- the pages ----------
function walk(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).flatMap((n) => {
    const p = join(dir, n);
    return statSync(p).isDirectory() ? walk(p) : p.endsWith(".md") ? [p] : [];
  });
}
function frontMatter(text) {
  const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(text);
  if (!m) return { meta: {}, body: text };
  const meta = {};
  for (const line of m[1].split(/\r?\n/)) {
    const kv = /^(\w+):\s*(.*)$/.exec(line);
    if (!kv) continue;
    let v = kv[2].trim();
    if (/^\[.*\]$/.test(v)) v = v.slice(1, -1).split(",").map((s) => s.trim()).filter(Boolean);
    meta[kv[1]] = v;
  }
  return { meta, body: text.slice(m[0].length) };
}

const pages = [];
for (const file of walk(join(root, "pages"))) {
  const { meta, body } = frontMatter(readFileSync(file, "utf8"));
  if (!meta.title) { errors.push(`${relative(root, file)}: no title`); continue; }
  pages.push({ title: meta.title, meta, body, source: relative(root, file).replace(/\\/g, "/"), written: true });
}
const have = new Set(pages.map((p) => p.title.toLowerCase()));
const generate = (title, body, categories, summary) => { if (!have.has(title.toLowerCase())) { pages.push({ title, meta: { categories, summary }, body, written: false }); have.add(title.toLowerCase()); } };

const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const article = (w) => (/^[aeiou]/i.test(w) ? "an" : "a");
for (const it of data.items) {
  const kind = it.kind;
  const lead = `The **${it.name}** is ${article(kind)} ${kind}${it.hands ? `, held in ${it.hands === "both" ? "both hands" : it.hands === "either" ? "either hand" : `the ${it.hands} hand`}` : ""}${it.wear ? `, worn on the ${it.wear}` : ""}.`;
  const cats = ["Items", KIND_TITLES[kind] || cap(kind)];
  if (it.weapon || it.bow) cats.push("Weapons");
  generate(it.name, `{{infobox-item ${it.id}}}\n\n${lead}\n\n{{stub}}\n\n{{item-sections ${it.id}}}\n\n{{navbox items}}\n`, cats, lead.replace(/\*\*/g, ""));
}
for (const st of [...new Set(data.recipes.map((r) => r.station))]) {
  const title = STATION_TITLES[st] || cap(st);
  const sprite = Object.entries(data.sprites).find(([, d]) => d.station === st);
  generate(title, `{{infobox-station ${st}}}\n\nThe **${title}** is a station: open it, pick a recipe, and it makes it from what you carry and what lies in the containers within reach.\n\n{{stub}}\n\n## Recipes\n\n{{recipes ${st}}}\n\n${sprite ? `{{where ${sprite[0]}}}\n\n` : ""}{{navbox making}}\n`, ["Stations"], `${title}: a station with ${data.recipes.filter((r) => r.station === st).length} recipes.`);
}
for (const s of data.valley.sets || []) {
  const title = placeTitle(s.name);
  generate(title, `{{infobox-place "${s.name}"}}\n\n**${title}** is a place in [[The valley]].\n\n{{stub}}\n\n{{place-contents "${s.name}"}}\n\n{{navbox places}}\n`, ["Places"], `${title}, a place in the valley.`);
}
for (const v of data.valley.villagers || []) {
  generate(v.name, `{{infobox-villager "${v.name}"}}\n\nThe **${v.name}** is one of the valley's villagers. Poked, they say: “${v.line || "Hey!"}”\n\n{{stub}}\n\n{{navbox places}}\n`, ["Villagers"], `${v.name}, a villager.`);
}

// ---------- titles, links, and the first pass ----------
const bySlug = new Map();
const byTitle = new Map();
for (const p of pages) {
  p.slug = p.title.toLowerCase() === "main page" ? "index" : slugify(p.title);
  if (bySlug.has(p.slug)) errors.push(`two pages share the address ${p.slug}: "${bySlug.get(p.slug).title}" and "${p.title}"`);
  bySlug.set(p.slug, p);
  byTitle.set(p.title.toLowerCase(), p);
  for (const a of [].concat(p.meta.aliases || [])) byTitle.set(a.toLowerCase(), p);
}
// The special pages answer to [[Special:Name]] (they are made after the pages, so their addresses are known here).
for (const [t, slug] of [["Special:Red links", "special-red-links"], ["Special:Planned notes", "special-planned-notes"], ["Special:All pages", "special-all-pages"], ["Special:Categories", "special-categories"]]) byTitle.set(t.toLowerCase(), { title: t, slug });
const redlinks = new Map(); // title -> pages linking it
const backlinks = new Map(); // slug -> set of titles

for (const p of pages) {
  const ctx = { data, page: p, planned, assets };
  let text;
  try {
    text = expand(p.body, ctx);
  } catch (e) {
    errors.push(`${p.source || p.title}: ${e.message}`);
    text = `<div class="note error">Build error: ${escapeHtml(e.message)}</div>`;
  }
  // [[Title]], [[Title|shown]], [[Title#section|shown]]
  text = text.replace(/\[\[([^\]|#]+)(#[^\]|]*)?(?:\|([^\]]+))?\]\]/g, (_, target, hash, shown) => {
    const t = target.trim();
    const label = escapeHtml(shown || t);
    const dest = byTitle.get(t.toLowerCase());
    if (!dest) {
      if (!redlinks.has(t)) redlinks.set(t, new Set());
      redlinks.get(t).add(p.title);
      return `<a class="new" href="special-red-links.html" title="${escapeHtml(t)} (page does not exist)">${label}</a>`;
    }
    if (!backlinks.has(dest.slug)) backlinks.set(dest.slug, new Set());
    if (dest !== p) backlinks.get(dest.slug).add(p.title);
    return `<a href="${dest.slug}.html${hash ? "#" + slugify(hash.slice(1)) : ""}">${label}</a>`;
  });
  const { html, headings } = render(text);
  p.html = html;
  p.headings = headings;
  p.categories = [].concat(p.meta.categories || []);
  if (p.stub) p.categories.push("Stubs");
  p.summary = p.meta.summary || (html.match(/<p>([\s\S]*?)<\/p>/) || [, ""])[1].replace(/<[^>]+>/g, "").slice(0, 200);
}

// ---------- special pages ----------
const categories = new Map();
for (const p of pages) for (const c of p.categories) { if (!categories.has(c)) categories.set(c, []); categories.get(c).push(p); }
const specials = [];
const special = (title, slug, html) => specials.push({ title, slug, html, headings: [], categories: [], special: true });
const list = (ps) => `<ul class="columns">${ps.slice().sort((a, b) => a.title.localeCompare(b.title)).map((p) => `<li><a href="${p.slug}.html">${escapeHtml(p.title)}</a></li>`).join("")}</ul>`;
for (const [c, ps] of categories) special(`Category: ${c}`, `category-${slugify(c)}`, `<p>${ps.length} page${ps.length === 1 ? "" : "s"} in this category.</p>${list(ps)}`);
special("All pages", "special-all-pages", `<p>${pages.length} pages: ${pages.filter((p) => p.written).length} written, ${pages.filter((p) => !p.written).length} generated from the game's data alone.</p>${list(pages)}`);
special("Categories", "special-categories", `<ul class="columns">${[...categories.keys()].sort().map((c) => `<li><a href="category-${slugify(c)}.html">${escapeHtml(c)}</a> (${categories.get(c).length})</li>`).join("")}</ul>`);
special("Red links", "special-red-links", `<p>Pages that are linked to but not written yet: the list of what to write next.</p><ul>${[...redlinks.entries()].sort((a, b) => b[1].size - a[1].size || a[0].localeCompare(b[0])).map(([t, from]) => `<li><strong>${escapeHtml(t)}</strong>, linked from ${[...from].map((f) => { const d = byTitle.get(f.toLowerCase()); return d ? `<a href="${d.slug}.html">${escapeHtml(f)}</a>` : escapeHtml(f); }).join(", ")}</li>`).join("")}</ul>`);
special("Planned notes", "special-planned-notes", `<p>Every note on the wiki about something not in the game yet. When the thing is built, its note is replaced with the real section.</p><ul>${planned.map((n) => `<li><a href="${byTitle.get(n.page.toLowerCase()).slug}.html">${escapeHtml(n.page)}</a>: ${escapeHtml(n.note)}${n.doc ? ` (docs/${escapeHtml(n.doc)})` : ""}</li>`).join("")}</ul>`);

// ---------- the layout ----------
const v = data.version;
const NAV = [
  ["The game", ["Main page", "Getting started", "Controls", "The valley", "Updates", "Planned"]],
  ["Playing", ["Player", "The dead", "Combat", "Weapons", "Items", "Crafting", "Fire", "Building", "Openings", "Villagers", "Multiplayer"]],
];
function navHtml() {
  return NAV.map(([h, ts]) => `<h3>${h}</h3><ul>${ts.map((t) => { const p = byTitle.get(t.toLowerCase()); return p ? `<li><a href="${p.slug}.html">${escapeHtml(t)}</a></li>` : `<li><a class="new" href="special-red-links.html">${escapeHtml(t)}</a></li>`; }).join("")}</ul>`).join("") +
    `<h3>Tools</h3><ul><li><a href="special-all-pages.html">All pages</a></li><li><a href="special-categories.html">Categories</a></li><li><a href="special-red-links.html">Red links</a></li><li><a href="special-planned-notes.html">Planned notes</a></li></ul>`;
}
function tocHtml(headings) {
  const hs = headings.filter((h) => h.level === 2 || h.level === 3);
  if (hs.length < 3) return "";
  return `<nav class="toc"><div class="toc-title">Contents</div><ol>${hs.map((h) => `<li class="l${h.level}"><a href="#${h.id}">${h.text}</a></li>`).join("")}</ol></nav>`;
}
function layout(p) {
  const back = backlinks.get(p.slug);
  const editUrl = p.special ? null : p.written ? `${REPO}/edit/main/${p.source}` : `${REPO}/new/main/pages?filename=${encodeURIComponent(slugify(p.title))}.md`;
  const cats = p.categories.length ? `<div class="catlinks">Categories: ${p.categories.map((c) => `<a href="category-${slugify(c)}.html">${escapeHtml(c)}</a>`).join(" · ")}</div>` : "";
  const html = p.html.replace(/(<\/table>|<\/div>|<\/p>)/, (m) => m); // the infobox floats; the contents box follows the lead
  const withToc = insertToc(html, tocHtml(p.headings));
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(p.title)} · Cozy Medieval Zombies Wiki</title>
<meta name="description" content="${escapeHtml(p.summary || "")}">
<link rel="stylesheet" href="style.css">
</head><body>
<header class="top"><a class="brand" href="index.html">Cozy Medieval Zombies <span>Wiki</span></a>
<form class="search" onsubmit="return false"><input id="q" type="search" placeholder="Search the wiki" autocomplete="off" aria-label="Search the wiki"><ul id="results"></ul></form></header>
<div class="wrap"><aside class="side">${navHtml()}</aside>
<main class="page"><div class="page-head"><h1>${escapeHtml(p.title)}</h1>${editUrl ? `<a class="edit" href="${editUrl}">${p.written ? "Edit this page" : "Write this page"}</a>` : ""}</div>
<article class="content">${withToc}</article>
${back && back.size ? `<details class="whatlinks"><summary>What links here (${back.size})</summary>${[...back].sort().map((t) => `<a href="${byTitle.get(t.toLowerCase()).slug}.html">${escapeHtml(t)}</a>`).join(" · ")}</details>` : ""}
${cats}
<footer class="foot">Describes the game at <a href="https://github.com/michaeldippold/cozy-medieval-zombies/commit/${v.commit}"><code>main</code> @ <code>${v.short}</code></a> (${v.date.slice(0, 10)}).${p.written ? "" : p.special ? "" : " Generated from the game's data."} The game is in development; things change.</footer>
</main></div>
<script src="search.js" defer></script>
</body></html>
`;
}
function insertToc(html, toc) {
  if (!toc) return html;
  const i = html.indexOf("<h2");
  return i < 0 ? html + toc : html.slice(0, i) + toc + html.slice(i);
}

// ---------- write ----------
rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });
for (const p of [...pages, ...specials]) writeFileSync(join(OUT, `${p.slug}.html`), layout(p));
writeFileSync(join(OUT, "search.json"), JSON.stringify(pages.map((p) => ({ t: p.title, u: `${p.slug}.html`, s: p.summary || "" }))));
for (const f of ["style.css", "search.js"]) copyFileSync(join(root, "assets", f), join(OUT, f));
// Art: the item icons the data names, and the font.
mkdirSync(join(OUT, "img"), { recursive: true });
for (const it of data.items) if (it.icon && it.icon.src) {
  const src = join(root, "snapshot", it.icon.src);
  const dst = join(OUT, it.icon.src.replace(/^data\//, "img/"));
  mkdirSync(dirname(dst), { recursive: true });
  if (existsSync(src)) copyFileSync(src, dst); else errors.push(`missing icon ${it.icon.src}`);
}
const fontDir = join(root, "snapshot", "data", "fonts");
if (existsSync(fontDir)) for (const f of readdirSync(fontDir)) copyFileSync(join(fontDir, f), join(OUT, f));
writeFileSync(join(OUT, ".nojekyll"), "");
for (const [path, buf] of assets) { mkdirSync(dirname(join(OUT, path)), { recursive: true }); writeFileSync(join(OUT, path), buf); }

// ---------- the report ----------
const written = pages.filter((p) => p.written).length;
console.log(`built ${pages.length} pages (${written} written, ${pages.length - written} generated) and ${specials.length} special pages for game ${v.short}`);
console.log(`red links: ${redlinks.size}${redlinks.size ? ` (${[...redlinks.keys()].slice(0, 12).join(", ")}${redlinks.size > 12 ? ", ..." : ""})` : ""}`);
console.log(`planned notes standing: ${planned.length}`);
if (errors.length) {
  console.error(`\n${errors.length} error(s):\n${errors.map((e) => `  - ${e}`).join("\n")}`);
  process.exit(1);
}
if (strict && pages.some((p) => p.written && /\d/.test(p.body.replace(/\{\{[^}]*\}\}/g, "").replace(/`[^`]*`/g, "").replace(/\[\[[^\]]*\]\]/g, "")) && !p.meta.numbersOk)) {
  // A typed number in prose goes stale; the check names the pages so they can be turned into {{n ...}}.
  const flagged = pages.filter((p) => p.written && !p.meta.numbersOk && /\b\d+(\.\d+)?\b/.test(p.body.replace(/^---[\s\S]*?---/, "").replace(/\{\{[^}]*\}\}/g, "").replace(/`[^`]*`/g, "").replace(/\[\[[^\]]*\]\]/g, "").replace(/\(docs\/[^)]*\)/g, "").replace(/^\s*\d+\.\s/gm, "").replace(/\d{4}-\d{2}-\d{2}/g, "").replace(/<!--[\s\S]*?-->/g, "")));
  if (flagged.length) { console.error(`typed numbers in prose on: ${flagged.map((p) => p.title).join(", ")}`); process.exit(1); }
}
