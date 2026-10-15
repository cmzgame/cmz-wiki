// Templates: `{{name key=value key2="a value"}}` in a page becomes markdown or
// HTML made from the game's data. A template that has nothing to show returns
// "" (a section with no rows is left out, as on the OSRS wiki). A template
// that names something the data does not have throws, and the build fails.
//
// Links to other pages are written as [[Title]] in what a template returns,
// and the build resolves them like any written link.

import { lookup, item, hitsPerKill, lootChances, propPlaces } from "./data.js";
import { escapeHtml } from "./markdown.js";
import { valleyPng } from "./mapimage.js";

const fmt = (n) => (typeof n === "number" ? (Number.isInteger(n) ? String(n) : String(+n.toFixed(3))) : String(n));
const pct = (p) => (p >= 0.1 ? `${Math.round(p * 100)}%` : `${+(p * 100).toFixed(1)}%`);
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

// Station names as a player reads them; a station page's title.
export const STATION_TITLES = { workbench: "Workbench", anvil: "Anvil", forge: "Forge", oven: "Oven", cooking: "Cooking", loom: "Loom", dyevat: "Dye vat" };
export const KIND_TITLES = { weapon: "Weapons", tool: "Tools", food: "Food", drink: "Drink", material: "Materials", clothing: "Clothing", bag: "Bags", medicine: "Medicine", ammo: "Ammunition", light: "Light", belt: "Belts", magic: "Magic", art: "Art items" };

export function itemTitle(it) { return it.name; }
const itemLink = (data, id, count) => {
  const it = data.itemById.get(id);
  const name = it ? `[[${it.name}]]` : id;
  return count && count !== 1 ? `${count} × ${name}` : name;
};
const inputLink = (data, x) => (x.id ? itemLink(data, x.id, x.count || 1) : x.tag ? `${x.count && x.count !== 1 ? `${x.count} × ` : ""}any *${x.tag}*` : JSON.stringify(x));
const outputText = (data, out) => (out.id ? itemLink(data, out.id, out.count || 1) : `[[${cap(out.prop)}]] (placed beside the station)`);
const stationLink = (s) => `[[${STATION_TITLES[s] || cap(s)}]]`;
const matchesInput = (it, x) => x.id === it.id || (x.tag && (it.tags || []).includes(x.tag));

// The placeholder the game draws for an item with no art: its colour and its short name.
export function itemPicture(it, big = false) {
  if (it.icon && it.icon.src) {
    const [w, h] = it.icon.size || [19, 19];
    const k = big ? 3 : 2;
    return `<img class="pixel" src="${it.icon.src.replace(/^data\//, "img/")}" width="${w * k}" height="${h * k}" alt="${escapeHtml(it.name)}">`;
  }
  const [w, h] = it.size || [1, 1];
  const cell = big ? 28 : 18;
  return `<span class="placeholder-item" style="background:${escapeHtml(it.color || "#888")};width:${w * cell}px;height:${h * cell}px" title="Placeholder art">${escapeHtml(it.short || it.name)}</span>`;
}

function parseArgs(s) {
  const args = {};
  const pos = [];
  for (const m of s.matchAll(/(\w+)=("([^"]*)"|\S+)|("([^"]*)"|\S+)/g)) {
    if (m[1]) args[m[1]] = m[3] ?? m[2];
    else pos.push(m[5] ?? m[4]);
  }
  args._ = pos;
  return args;
}

export function expand(text, ctx) {
  return text.replace(/\{\{\s*([\w-]+)([^}]*)\}\}/g, (_, name, rest) => {
    const t = TEMPLATES[name];
    if (!t) throw new Error(`unknown template {{${name}}}`);
    return t(parseArgs(rest.trim()), ctx);
  });
}

const row = (k, v) => (v === undefined || v === null || v === "" ? "" : `<tr><th>${k}</th><td>${v}</td></tr>`);

const TEMPLATES = {
  // A number from the data, inline: {{n tuning.zombie.speed}}, with an optional unit after it.
  n(a, { data }) {
    const v = lookup(data, a._[0]);
    if (typeof v === "object") throw new Error(`{{n ${a._[0]}}} is not a number`);
    return fmt(v) + (a._[1] ? ` ${a._.slice(1).join(" ")}` : "");
  },
  // A planned thing: a marked note, listed by every build until it is replaced.
  planned(a, ctx) {
    ctx.planned.push({ page: ctx.page.title, doc: a.doc, note: a.note || "" });
    const doc = a.doc ? ` (docs/${a.doc}${a.step ? `, step ${a.step}` : ""})` : "";
    return `<div class="note planned"><strong>Planned.</strong> ${escapeHtml(a.note || "Not in the game yet.")}${escapeHtml(doc)}</div>`;
  },
  stub(_, ctx) {
    ctx.page.stub = true;
    return `<div class="note stub">This page is a stub: its tables come from the game's data, and its prose has not been written yet.</div>`;
  },
  devonly(a) {
    return `<div class="note dev"><strong>Development.</strong> ${escapeHtml(a.note || "A tool for testing, not part of play.")}</div>`;
  },

  "infobox-item"(a, { data }) {
    const it = item(data, a._[0] || a.item);
    const w = it.weapon;
    const hpk = hitsPerKill(data, it);
    const rows = [
      row("Kind", cap(it.kind)),
      row("Size in the bag", `${it.size[0]} × ${it.size[1]}`),
      row("Hands", it.hands ? cap(it.hands) : ""),
      row("Stacks to", it.stack || ""),
      row("Worn on", it.wear ? cap(it.wear) : ""),
      row("Bag grid", it.bag ? `${it.bag[0]} × ${it.bag[1]}` : ""),
      row("Belt slots", it.beltSlots || ""),
      row("Hunger", it.hunger ? `+${it.hunger}` : ""),
      row("Holds water", it.capacity ? `${it.capacity}%` : ""),
      row("Tags", (it.tags || []).join(", ")),
    ];
    if (w) rows.push(`<tr><th colspan="2" class="sub">Weapon</th></tr>`,
      row("Damage", w.damage), row("Swing", w.swing != null ? `${fmt(w.swing)} s` : ""), row("Reach", w.range != null ? `${fmt(w.range)} tiles` : ""),
      row("Arc", w.arc != null ? `${w.arc}°` : ""), row("Stamina", w.stamina), row("Stagger chance", w.staggerChance != null ? pct(w.staggerChance) : ""),
      row("Style", w.style ? w.style.replace(/_/g, " ") : ""), row("Lasts", w.kills ? `${w.kills} kills` : ""), row("Hits per kill", hpk || ""));
    if (it.bow) rows.push(`<tr><th colspan="2" class="sub">Bow</th></tr>`, row("Damage", it.bow.damage), row("Draw", `${fmt(it.bow.drawTime)} s (${fmt(it.bow.braceDrawTime)} s braced)`), row("Lasts", it.shots ? `${it.shots} shots` : ""));
    if (it.shield) rows.push(`<tr><th colspan="2" class="sub">Shield</th></tr>`, row("Blocks", `all in a ${it.shield.arc}° front arc, ${pct(it.shield.sideThrough)} to ${it.shield.sideArc}°`), row("Stamina a block", it.shield.stamina), row("Walking while raised", `${pct(it.shield.moveMult)} speed`));
    rows.push(`<tr><th colspan="2" class="sub">Advanced</th></tr>`, row("Item id", `<code>${it.id}</code>`), row("Art", it.icon ? "Drawn" : "Placeholder"));
    return `<table class="infobox"><caption>${escapeHtml(it.name)}</caption><tr><td colspan="2" class="pic">${itemPicture(it, true)}</td></tr>${rows.join("")}</table>`;
  },

  // Creation: the recipes that make it.
  creation(a, { data }) {
    const it = item(data, a._[0] || a.item);
    const rs = data.recipes.filter((r) => r.out && r.out.id === it.id);
    if (!rs.length) return "";
    return `## Creation\n\n| Station | Materials | Makes | Time | Needs |\n|---|---|---|---|---|\n${rs.map((r) => `| ${stationLink(r.station)} | ${(r.in || []).map((x) => inputLink(data, x)).join(", ")} | ${outputText(data, r.out)} | ${fmt(r.seconds)} s | ${[r.fire ? "the fire lit" : "", r.tool ? `${itemLink(data, r.tool)} in hand` : ""].filter(Boolean).join(", ") || "-"} |`).join("\n")}\n`;
  },

  // Uses: the recipes and interactions that take it.
  uses(a, { data }) {
    const it = item(data, a._[0] || a.item);
    const rs = data.recipes.filter((r) => (r.in || []).some((x) => matchesInput(it, x)) || r.tool === it.id);
    const ix = data.interactions.filter((x) => x.use === it.id || x.on === it.id);
    const extra = [];
    if (it.splitsInto) extra.push(`Split into ${itemLink(data, it.splitsInto.id, it.splitsInto.count)} from its menu.`);
    for (const [name, sp] of Object.entries(data.sprites)) if (sp.fire && sp.fire.fuel === it.id) extra.push(`Fuel for the [[${cap(name)}]] (${fmt(sp.fire.hoursPerUnit)} hours each).`);
    if (!rs.length && !ix.length && !extra.length) return "";
    let s = "## Uses\n\n";
    if (extra.length) s += extra.map((e) => `- ${e}`).join("\n") + "\n\n";
    if (rs.length) s += `| Station | Makes | Materials | Time |\n|---|---|---|---|\n${rs.map((r) => `| ${stationLink(r.station)} | ${outputText(data, r.out)} | ${(r.in || []).map((x) => inputLink(data, x)).join(", ")}${r.tool ? `; ${itemLink(data, r.tool)} in hand` : ""} | ${fmt(r.seconds)} s |`).join("\n")}\n\n`;
    if (ix.length) s += ix.map((x) => `- Use on ${x.on}: ${x.message || x.verb || x.action}`).join("\n") + "\n";
    return s;
  },

  // Item sources: the loot tables, the starter kit, the dev chest.
  sources(a, { data }) {
    const it = item(data, a._[0] || a.item);
    const rows = [];
    for (const [name, t] of Object.entries(data.loot)) {
      const e = lootChances(t).find((x) => x.item === it.id);
      if (!e) continue;
      const count = Array.isArray(e.count) ? `${e.count[0]}–${e.count[1]}` : e.count || 1;
      const rolls = Array.isArray(t.rolls) ? `${t.rolls[0]}–${t.rolls[1]}` : t.rolls ?? 1;
      rows.push(`| ${LOOT_TITLES[name] || name} | ${count} | ${pct(e.perRoll)} a roll | ${rolls} |`);
    }
    if (!rows.length) return "";
    return `## Item sources\n\n| Found in | Quantity | Chance | Rolls |\n|---|---|---|---|\n${rows.join("\n")}\n`;
  },

  // The three generated sections of an item page, in the OSRS order.
  "item-sections"(a, ctx) {
    const id = a._[0] || a.item;
    return [TEMPLATES.creation({ _: [id] }, ctx), TEMPLATES.uses({ _: [id] }, ctx), TEMPLATES.sources({ _: [id] }, ctx)].filter(Boolean).join("\n");
  },

  // A station's recipes.
  recipes(a, { data }) {
    const st = a._[0] || a.station;
    const rs = data.recipes.filter((r) => r.station === st);
    if (!rs.length) throw new Error(`no recipes for station "${st}"`);
    return `| Makes | Materials | Time | Needs |\n|---|---|---|---|\n${rs.map((r) => `| ${outputText(data, r.out)} | ${(r.in || []).map((x) => inputLink(data, x)).join(", ")} | ${fmt(r.seconds)} s | ${[r.fire ? "the fire lit" : "", r.tool ? `${itemLink(data, r.tool)} in hand` : ""].filter(Boolean).join(", ") || "-"} |`).join("\n")}\n`;
  },

  // Where a prop stands in the valley.
  where(a, { data }) {
    const places = propPlaces(data, a._[0] || a.prop);
    if (!places.length) return "";
    return `## Where found\n\n${places.map(([p, n]) => `- ${placeLink(p)}${n > 1 ? ` (${n})` : ""}`).join("\n")}\n`;
  },

  // A list of items, optionally of one kind, as a table.
  "item-table"(a, { data }) {
    const its = data.items.filter((i) => !a.kind || i.kind === a.kind);
    return `| | Item | Kind | Size | Hands |\n|---|---|---|---|---|\n${its.map((i) => `| ${itemPicture(i)} | [[${i.name}]] | ${cap(i.kind)} | ${i.size.join(" × ")} | ${i.hands ? cap(i.hands) : "-"} |`).join("\n")}\n`;
  },

  // Every weapon side by side.
  "weapon-table"(_, { data }) {
    const ws = data.items.filter((i) => i.weapon);
    return `| Weapon | Damage | Swing | Reach | Arc | Stamina | Stagger | Lasts | Hits per kill |\n|---|---|---|---|---|---|---|---|---|\n${ws.map((i) => { const w = i.weapon; return `| [[${i.name}]] | ${w.damage} | ${fmt(w.swing)} s | ${fmt(w.range)} | ${w.arc}° | ${w.stamina} | ${w.staggerChance != null ? pct(w.staggerChance) : "-"} | ${w.kills ? `${w.kills} kills` : "-"} | ${hitsPerKill(data, i)} |`; }).join("\n")}\n`;
  },

  "recipe-table"(_, { data }) {
    return `| Station | Makes | Materials | Time |\n|---|---|---|---|\n${data.recipes.map((r) => `| ${stationLink(r.station)} | ${outputText(data, r.out)} | ${(r.in || []).map((x) => inputLink(data, x)).join(", ")} | ${fmt(r.seconds)} s |`).join("\n")}\n`;
  },

  "loot-table"(a, { data }) {
    const t = data.loot[a._[0]];
    if (!t) throw new Error(`no loot table "${a._[0]}"`);
    return `| Item | Quantity | Chance a roll |\n|---|---|---|\n${lootChances(t).map((e) => `| ${e.item === "nothing" ? "Nothing" : itemLink(data, e.item)} | ${Array.isArray(e.count) ? e.count.join("–") : e.count || 1} | ${pct(e.perRoll)} |`).join("\n")}\n`;
  },

  // The moodles from the code (the census reads them out of src/moodles.js).
  moodles(_, { data }) {
    if (!data.census) throw new Error("the census has not been run");
    return data.census.moodles.map((m) => `### ${cap(m.id === "tired" ? "tiredness" : m.id === "bleed" ? "bleeding" : m.id)}\n\n${m.stages.map((s, i) => `${i + 1}. **${s.name}**: ${s.text}`).join("\n")}\n`).join("\n");
  },

  "infobox-place"(a, { data }) {
    const s = (data.valley.sets || []).find((q) => q.name === (a._[0] || a.place));
    if (!s) throw new Error(`no place "${a._[0]}"`);
    const inRect = ([x, y], [rx, ry, rw, rh]) => x >= rx && y >= ry && x < rx + rw && y < ry + rh;
    const dead = (data.valley.zombies || []).filter((z) => inRect(z, s.rect)).length;
    const villagers = (data.valley.villagers || []).filter((v) => inRect(v.tile, s.rect)).map((v) => `[[${v.name}]]`);
    const rooms = (s.buildings || []).reduce((n, b) => n + 1 + (b.partitions || []).length, 0);
    return `<table class="infobox"><caption>${escapeHtml(cap(s.name))}</caption>${row("Where", `${s.rect[0]}, ${s.rect[1]}`)}${row("Size", `${s.rect[2]} × ${s.rect[3]} tiles`)}${row("Buildings", (s.buildings || []).length)}${row("Rooms", rooms || "")}${row("The dead placed", dead)}${row("Villagers", villagers.join(", "))}</table>`;
  },

  // A place's furniture and fittings, counted.
  "place-contents"(a, { data }) {
    const s = (data.valley.sets || []).find((q) => q.name === (a._[0] || a.place));
    if (!s) throw new Error(`no place "${a._[0]}"`);
    const counts = new Map();
    for (const b of s.buildings || []) for (const p of b.props || []) counts.set(p.sprite, (counts.get(p.sprite) || 0) + 1);
    for (const p of s.props || []) counts.set(p.sprite, (counts.get(p.sprite) || 0) + 1);
    if (!counts.size) return "";
    return `## What is there\n\n${[...counts.entries()].sort().map(([sp, n]) => `- ${propLabel(data, sp)}${n > 1 ? ` × ${n}` : ""}`).join("\n")}\n`;
  },

  "place-table"(_, { data }) {
    return `| Place | Buildings | Rooms | The dead | Villagers |\n|---|---|---|---|---|\n${(data.valley.sets || []).map((s) => { const inRect = ([x, y], [rx, ry, rw, rh]) => x >= rx && y >= ry && x < rx + rw && y < ry + rh; return `| ${placeLink(s.name)} | ${(s.buildings || []).length} | ${(s.buildings || []).reduce((n, b) => n + 1 + (b.partitions || []).length, 0)} | ${(data.valley.zombies || []).filter((z) => inRect(z, s.rect)).length} | ${(data.valley.villagers || []).filter((v) => inRect(v.tile, s.rect)).map((v) => `[[${v.name}]]`).join(", ") || "-"} |`; }).join("\n")}\n`;
  },

  "infobox-villager"(a, { data }) {
    const v = (data.valley.villagers || []).find((q) => q.name === (a._[0] || a.name));
    if (!v) throw new Error(`no villager "${a._[0]}"`);
    const s = (data.valley.sets || []).find((q) => v.tile[0] >= q.rect[0] && v.tile[1] >= q.rect[1] && v.tile[0] < q.rect[0] + q.rect[2] && v.tile[1] < q.rect[1] + q.rect[3]);
    return `<table class="infobox"><caption>${escapeHtml(v.name)}</caption>${row("Home", s ? placeLink(s.name) : `${v.tile.join(", ")}`)}${row("Says when poked", `“${escapeHtml(v.line || "Hey!")}”`)}${row("Wardrobe", `village ${v.wardrobe ?? 0}`)}</table>`;
  },

  "villager-table"(_, { data }) {
    return `| Villager | Says when poked |\n|---|---|\n${(data.valley.villagers || []).map((v) => `| [[${v.name}]] | “${v.line || "Hey!"}” |`).join("\n")}\n`;
  },

  "infobox-station"(a, { data }) {
    const st = a._[0] || a.station;
    const sp = Object.entries(data.sprites).find(([, d]) => d.station === st);
    const def = sp ? sp[1] : null;
    const fire = def && def.fire;
    const n = data.recipes.filter((r) => r.station === st).length;
    return `<table class="infobox"><caption>${escapeHtml(STATION_TITLES[st] || cap(st))}</caption>${row("Recipes", n)}${row("Footprint", def && def.placeholder && def.placeholder.footprint ? def.placeholder.footprint.join(" × ") : "")}${row("Fire", fire ? `burns ${fire.fuel}, ${fmt(fire.hoursPerUnit)} hours each` : st === "cooking" ? "any lit fire that cooks" : "none")}${row("Art", def && (def.image || def.images) ? "Drawn" : "Placeholder")}</table>`;
  },

  // Settings from the code, with their defaults.
  settings(_, { data }) {
    if (!data.census) throw new Error("the census has not been run");
    return data.census.settings.map((s) => `- **${s.key}** (default ${s.default})${s.note ? `: ${s.note}` : ""}`).join("\n") + "\n";
  },

  // The valley's map, drawn from the map file at the screen's angle, with its places named on it.
  "valley-map"(a, ctx) {
    const { data } = ctx;
    // {{valley-map}} the whole valley, unlabelled; {{valley-map village}} the village's reserve, its places named.
    const crop = a._[0] === "village" ? (data.valley.reserve || [])[0] : null;
    const img = valleyPng(data.valley, crop ? 12 : 4, crop);
    const file = crop ? "img/village.png" : "img/valley.png";
    ctx.assets.set(file, img.png);
    const inCrop = (s) => !crop || (s.rect[0] >= crop[0] && s.rect[1] >= crop[1] && s.rect[0] < crop[0] + crop[2] && s.rect[1] < crop[1] + crop[3]);
    const labels = crop ? (data.valley.sets || []).filter(inCrop).map((s) => {
      const [x, y] = img.toPx(s.rect[0] + s.rect[2] / 2, s.rect[1] + s.rect[3] / 2);
      return `<span class="map-label" style="left:${((x / img.width) * 100).toFixed(2)}%;top:${((y / img.height) * 100).toFixed(2)}%">[[${placeTitle(s.name)}]]</span>`;
    }) : [];
    return `<div class="valley-map"><img class="pixel" src="${file}" width="${img.width}" height="${img.height}" alt="${crop ? "The village" : "The valley"}, drawn from the map file">${labels.join("")}<span class="compass" title="Map north is up and to the right, as on screen">N ↗</span></div>`;
  },

  navbox(a, { data }) {
    const which = a._[0];
    if (which === "items") {
      const kinds = [...new Set(data.items.map((i) => i.kind))].sort();
      return navbox("Items", kinds.map((k) => [KIND_TITLES[k] || cap(k), data.items.filter((i) => i.kind === k).map((i) => `[[${i.name}]]`)]));
    }
    if (which === "weapons") return navbox("Weapons", [["Weapons", data.items.filter((i) => i.weapon || i.bow || i.shield).map((i) => `[[${i.name}]]`)]]);
    if (which === "places") return navbox("The valley", [["Places", (data.valley.sets || []).map((s) => placeLink(s.name))], ["Villagers", (data.valley.villagers || []).map((v) => `[[${v.name}]]`)]]);
    if (which === "making") return navbox("Making things", [["Stations", [...new Set(data.recipes.map((r) => r.station))].map(stationLink)], ["See also", ["[[Crafting]]", "[[Fire]]", "[[Recipes]]"]]]);
    throw new Error(`no navbox "${which}"`);
  },
};

const LOOT_TITLES = { chest: "Chests", barrel: "Barrels", body: "The dead's pockets", dev_kit: "The dev chest", wild: "The wild" };
export function placeTitle(name) { return cap(name); }
function placeLink(name) { return name === "the valley" ? "[[The valley]]" : `[[${placeTitle(name)}]]`; }
function propLabel(data, sp) {
  const d = data.sprites[sp];
  const label = d && d.placeholder && d.placeholder.label ? d.placeholder.label : sp.replace(/_\d+$/, "").replace(/_/g, " ");
  return cap(label);
}
function navbox(title, groups) {
  const body = groups.filter(([, links]) => links.length).map(([g, links]) => `<tr><th>${g}</th><td>${links.join(" · ")}</td></tr>`).join("");
  return `<table class="navbox"><caption>${escapeHtml(title)}</caption>${body}</table>`;
}
