// Templates: `{{name key=value key2="a value"}}` in a page becomes markdown or
// HTML made from the game's data. A template that has nothing to show returns
// "" (a section with no rows is left out, as on the OSRS wiki). A template
// that names something the data does not have throws, and the build fails.
//
// Links to other pages are written as [[Title]] in what a template returns,
// and the build resolves them like any written link.

import { lookup, item, hitsPerKill, lootChances, propPlaces, propIds } from "./data.js";
import { escapeHtml } from "./markdown.js";
import { valleyPng } from "./mapimage.js";
import { productionChains } from "./chains.js";

const fmt = (n) => (typeof n === "number" ? (Number.isInteger(n) ? String(n) : String(+n.toFixed(3))) : String(n));
const pct = (p) => (p >= 0.1 ? `${Math.round(p * 100)}%` : `${+(p * 100).toFixed(1)}%`);
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

// Station names as a player reads them; a station page's title.
export const STATION_TITLES = { workbench: "Workbench", anvil: "Anvil", forge: "Forge", oven: "Oven", cooking: "Cooking", loom: "Loom", dyevat: "Dye vat", clamp: "Charcoal clamp", millstones: "Millstones" };
export const KIND_TITLES = { weapon: "Weapons", tool: "Tools", food: "Food", drink: "Drink", material: "Materials", clothing: "Clothing", bag: "Bags", medicine: "Medicine", ammo: "Ammunition", light: "Light", belt: "Belts", magic: "Magic", art: "Art items" };

// A prop's page title: a station's name, a spelling for the ids that run words together, else the id with its
// underscores as spaces. The dev box's label (`placeholder.label`: "Barrow", "Hay") is the page's alias when it differs.
const PROP_TITLES = { marketcross: "Market cross", noticeboard: "Notice board", spinningwheel: "Spinning wheel", tree_apple: "Apple tree", tree_apple_bare: "Apple tree, bare" };
// The tools whose `verbs` list a verb (game #222: a tool found by its verb), as links: "[[Smith's hammer]]".
function toolLinks(data, verb) {
  const ts = data.items.filter((x) => x.kind === "tool" && (x.verbs || []).includes(verb));
  return ts.length ? ts.map((x) => `[[${x.name}]]`).join(" or ") : verb;
}
// A recipe's carried tool (`uses`, a verb), for a Needs column: "a [[Smith's hammer]] on you".
function usesText(data, r) {
  return r.uses ? `a ${toolLinks(data, r.uses)} on you` : "";
}

// A villager's talk id (game #220): the map's `talk`, else the name lowercased; and their file, or null.
function talkIdOf(v) {
  return v.talk || (v.name ? String(v.name).toLowerCase() : null);
}
function talkOf(data, v) {
  return (data.talk && data.talk[talkIdOf(v)]) || null;
}
// A talk `when` in words (game #220, src/talk.js's conditions): "At night, with the dead near".
function whenWords(data, when) {
  if (!when) return "";
  const TIME = { day: "By day", night: "At night", dawn: "At dawn", dusk: "At dusk" };
  const BOOL = { deadNear: ["With one of the dead within " + data.tuning.villager.barkDeadRadius + " tiles", "With none of the dead near"], deadInWorld: ["Once the dead are in the world", "With no dead in the world"], indoors: ["When they are indoors", "When they are outdoors"], hurt: ["When they are hurt", "When they are unhurt"], hungry: ["When you are hungry", "When you are not hungry"], thirsty: ["When you are thirsty", "When you are not thirsty"], tired: ["When you are tired", "When you are not tired"], bleeding: ["When you are bleeding", "When you are not bleeding"] };
  const vName = (tid) => { const v = (data.valley.villagers || []).find((q) => talkIdOf(q) === tid); return v ? `[[${v.name}]]` : tid; };
  const parts = Object.entries(when).map(([k, w]) => {
    if (k === "time") return TIME[w] || w;
    if (k in BOOL) return BOOL[k][w ? 0 : 1];
    if (k === "villagerAlive") return `While ${vName(w)} lives`;
    if (k === "villagerDead") return `Once ${vName(w)} is dead`;
    if (k === "holding") return `When you hold ${data.itemById.has(w) ? `a [[${data.itemById.get(w).name}]]` : `something ${w}`}`;
    throw new Error(`talk: unknown condition "${k}"`);
  });
  return parts.map((p, i) => (i ? p[0].toLowerCase() + p.slice(1) : p)).join(", ");
}

// Day-one food (Michael, 2026-10-18): every food the valley holds when a world is made, in hunger points (each food's
// `hunger`), from four sources: the starting kit (each player's), the containers (a prop's own `loot`, else its sprite's
// `container.loot`, as src/map.js has it; fixed loot in full, rolled loot as its expected value), the fruit trees' first
// pick, and the crops the map plants ripe. Midpoints of every range; "nothing" and non-food count zero. Computed once.
const dayOneCache = new WeakMap();
const mid = (n) => (Array.isArray(n) ? (n[0] + n[1]) / 2 : n ?? 1);
function dayOneFood(data) {
  if (dayOneCache.has(data)) return dayOneCache.get(data);
  if (!data.kit) throw new Error("day-one-food: no data/kit.json in the snapshot");
  if (!data.crops) throw new Error("day-one-food: no data/crops.json in the snapshot");
  const food = (id) => { const it = item(data, id); return it.kind === "food" ? it.hunger || 0 : 0; };
  // Every placed prop, wherever the map nests it (its own props, a place's, a building's).
  const props = [];
  (function walk(o) {
    if (Array.isArray(o)) return o.forEach(walk);
    if (!o || typeof o !== "object") return;
    if (typeof o.sprite === "string" && data.sprites[o.sprite]) props.push(o);
    for (const k in o) walk(o[k]);
  })(data.valley);
  // A loot table's food as the game rolls it (src/items.js rollLoot): fixed in full, else rolls × each entry's share × its count.
  const tableFood = (name) => {
    const t = data.loot[name];
    if (!t) throw new Error(`day-one-food: no loot table "${name}"`);
    if (t.fixed) return t.fixed.reduce((s, e) => s + (e.count || 1) * food(e.item), 0);
    const total = (t.entries || []).reduce((s, e) => s + e.weight, 0);
    if (!total) return 0;
    return mid(t.rolls) * t.entries.reduce((s, e) => s + (e.item === "nothing" ? 0 : (e.weight / total) * mid(e.count) * food(e.item)), 0);
  };
  const kit = data.kit.items.reduce((s, e) => s + (e.count || 1) * food(e.item), 0);
  const tables = new Map(); // loot table -> { each, sprites: Map(sprite -> count) }
  const trees = new Map(); // sprite -> { count, each, pick }
  const crops = new Map(); // crop kind -> { count, each, def }
  for (const p of props) {
    const def = data.sprites[p.sprite];
    if (def.container) {
      const name = typeof p.loot === "string" ? p.loot : def.container.loot;
      if (!tables.has(name)) tables.set(name, { each: tableFood(name), sprites: new Map() });
      const sp = tables.get(name).sprites;
      sp.set(p.sprite, (sp.get(p.sprite) || 0) + 1);
    }
    if (def.pick) {
      const t = trees.get(p.sprite) || { count: 0, each: mid(def.pick.count) * food(def.pick.item), pick: def.pick };
      t.count++;
      trees.set(p.sprite, t);
    }
    if (def.crop) {
      const c = data.crops.crops[def.crop.kind];
      if (!c) throw new Error(`day-one-food: no crop "${def.crop.kind}" in data/crops.json`);
      if (def.crop.stage !== c.stages.length) continue; // ready is the stage after the last growing one (src/farming.js)
      const r = crops.get(def.crop.kind) || { count: 0, each: mid(c.harvest.count) * food(c.harvest.item), def: c };
      r.count++;
      crops.set(def.crop.kind, r);
    }
  }
  const sum = (m) => [...m.values()].reduce((s, x) => s + x.each * (x.count ?? [...x.sprites.values()].reduce((a, b) => a + b, 0)), 0);
  const count = (m) => [...m.values()].reduce((s, x) => s + (x.count ?? [...x.sprites.values()].reduce((a, b) => a + b, 0)), 0);
  const handCrops = [...crops.values()].filter((c) => !c.def.tool).reduce((s, c) => s + c.each * c.count, 0);
  const day = data.census && data.census.constants && data.census.constants.clock && data.census.constants.clock.DAY_LENGTH; // src/clock.js, read by the census
  if (!day) throw new Error("day-one-food: no census.constants.clock.DAY_LENGTH (run census/census.js)");
  const out = {
    kit, tables, trees, crops, day,
    containers: sum(tables), fruit: sum(trees), ripe: sum(crops), handCrops,
    counts: { containers: [...tables.values()].filter((t) => t.each > 0).reduce((s, t) => s + [...t.sprites.values()].reduce((a, b) => a + b, 0), 0), trees: count(trees), crops: [...crops.values()].filter((c) => c.each > 0).reduce((s, c) => s + c.count, 0) },
  };
  out.world = out.containers + out.fruit + out.ripe; // the world's, shared; the kit is each player's
  out.worldNoTools = out.containers + out.fruit + handCrops;
  dayOneCache.set(data, out);
  return out;
}
// How long hunger points last `players` sharing them: full stomachs each, world seconds, game days.
function lasts(data, points, players) {
  const P = data.tuning.player;
  const stomachs = points / players / P.hungerMax;
  const seconds = stomachs * P.hungerDrainSeconds;
  return { stomachs, seconds, days: seconds / dayOneFood(data).day };
}
const sumOf = (m) => [...m.values()].reduce((a, b) => a + b, 0);
const one = (n) => (Math.abs(n - Math.round(n)) < 0.05 ? String(Math.round(n)) : n.toFixed(1));
const whole = (n) => Math.round(n).toLocaleString("en-GB");
function duration(s) {
  const h = Math.floor(s / 3600), m = Math.round((s - h * 3600) / 60);
  const hm = m === 60 ? [h + 1, 0] : [h, m];
  const part = (n, w) => `${n} ${w}${n === 1 ? "" : "s"}`;
  return hm[0] ? `${part(hm[0], "hour")}${hm[1] ? ` ${part(hm[1], "minute")}` : ""}` : part(hm[1], "minute");
}

export function propTitle(id, def) {
  if (def && def.station && STATION_TITLES[def.station]) return STATION_TITLES[def.station];
  return PROP_TITLES[id] || cap(id.replace(/_/g, " "));
}
// What a prop is, in a word, from its definition: the first rule that fits.
export function propKind(def) {
  if (def.station) return "station";
  if (def.fire && def.fire.burns) return "fire";
  if (def.container) return "container";
  if (def.water) return "water";
  if (def.sleep) return "bed";
  return def.carry ? "furniture" : "fitting";
}
const PROP_KIND_TITLES = { station: "Stations", fire: "Fires", container: "Containers", water: "Water", bed: "Beds", furniture: "Furniture", fitting: "Fittings" };

export function itemTitle(it) { return it.name; }
const itemLink = (data, id, count) => {
  const it = data.itemById.get(id);
  const name = it ? `[[${it.name}]]` : id;
  return count && count !== 1 ? `${count} × ${name}` : name;
};
const inputLink = (data, x) => (x.id ? itemLink(data, x.id, x.count || 1) : x.tag ? `${x.count && x.count !== 1 ? `${x.count} × ` : ""}any *${x.tag}*` : JSON.stringify(x));
const outputText = (data, out) => (out.id ? itemLink(data, out.id, out.count || 1) : `[[${propTitle(out.prop, data.sprites[out.prop])}]] (placed beside the station)`);
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
    const unit = a._.slice(1);
    if (v === 1 && unit.length && /[^s]s$/.test(unit[0])) unit[0] = unit[0].slice(0, -1); // "1 second", "1 tile a second"
    return fmt(v) + (unit.length ? ` ${unit.join(" ")}` : "");
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
      row("Equipped on", it.wear ? cap(it.wear) : ""),
      row("Bag grid", it.bag ? `${it.bag[0]} × ${it.bag[1]}` : ""),
      row("Belt slots", it.beltSlots || ""),
      row("Hunger", it.hunger ? `+${it.hunger}` : ""),
      row("Thirst", it.thirst ? `+${it.thirst}` : ""),
      row("Heals", it.heal ? `+${it.heal}` : ""),
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
    return `## Creation\n\n| Station | Materials | Makes | Time | Needs |\n|---|---|---|---|---|\n${rs.map((r) => `| ${stationLink(r.station)} | ${(r.in || []).map((x) => inputLink(data, x)).join(", ")} | ${outputText(data, r.out)} | ${fmt(r.seconds)} s | ${[r.fire ? "the fire lit" : "", r.tool ? `${itemLink(data, r.tool)} in hand` : "", usesText(data, r)].filter(Boolean).join(", ") || "-"} |`).join("\n")}\n`;
  },

  // Uses: the recipes and interactions that take it.
  uses(a, { data }) {
    const it = item(data, a._[0] || a.item);
    const rs = data.recipes.filter((r) => (r.in || []).some((x) => matchesInput(it, x)) || r.tool === it.id || (r.uses && (it.verbs || []).includes(r.uses)));
    const ix = data.interactions.filter((x) => x.use === it.id || x.on === it.id);
    const extra = [];
    if (it.splitsInto) extra.push(`Split into ${itemLink(data, it.splitsInto.id, it.splitsInto.count)} from its menu.`);
    for (const [name, sp] of Object.entries(data.sprites)) if (sp.fire && sp.fire.fuel === it.id) extra.push(`Fuel for the [[${propTitle(name, sp)}]] (${fmt(sp.fire.hoursPerUnit)} hours each).`);
    if (!rs.length && !ix.length && !extra.length) return "";
    let s = "## Uses\n\n";
    if (extra.length) s += extra.map((e) => `- ${e}`).join("\n") + "\n\n";
    if (rs.length) s += `| Station | Makes | Materials | Time |\n|---|---|---|---|\n${rs.map((r) => `| ${stationLink(r.station)} | ${outputText(data, r.out)} | ${(r.in || []).map((x) => inputLink(data, x)).join(", ")}${r.tool ? `; ${itemLink(data, r.tool)} in hand` : ""}${r.uses ? `; ${usesText(data, r)}` : ""} | ${fmt(r.seconds)} s |`).join("\n")}\n\n`;
    if (ix.length) s += ix.map((x) => `- Use on ${x.on}: ${x.message || x.verb || x.action}`).join("\n") + "\n";
    return s;
  },

  // Item sources: the loot tables, the starter kit, the dev chest; a fruit tree's pick and a water's catch (game #192, #193).
  sources(a, { data }) {
    const it = item(data, a._[0] || a.item);
    const rows = [];
    for (const [name, sp] of Object.entries(data.sprites)) {
      const pk = sp.pick;
      if (!pk || pk.item !== it.id) continue;
      rows.push(`| [[Trees#Fruit trees|${cap(name.replace(/^tree_/, "").replace(/_/g, " "))} trees]], picked | ${Array.isArray(pk.count) ? `${pk.count[0]}–${pk.count[1]}` : pk.count} | Every pick; bare for ${fmt(pk.days)} days after | - |`);
    }
    const mineRows = new Set();
    for (const [name, sp] of Object.entries(data.sprites)) {
      const m = sp.mine;
      if (!m || m.item !== it.id) continue;
      const tools = data.items.filter((x) => (x.verbs || []).includes("mine")).map((x) => `[[${x.name}]]`);
      const then = m.gone ? "Every rock, which is then gone" : m.spent ? `Every mining; spent for ${fmt(m.days)} days after` : "Every mining";
      const row = `| [[Mining]]: ${m.gone ? "a rock" : `a rock of ${it.name.toLowerCase()}`}${tools.length ? `, with a ${tools.join(" or ")}` : ""} | ${Array.isArray(m.count) ? (m.count[0] === m.count[1] ? m.count[0] : `${m.count[0]}–${m.count[1]}`) : m.count} | ${then} | - |`;
      if (!mineRows.has(row)) { mineRows.add(row); rows.push(row); }
    }
    const chop = data.census && data.census.chop;
    if (chop && chop.gives === it.id) {
      const trees = Object.entries(data.sprites).filter(([, d]) => d.wood && d.canopy).map(([, d]) => d.wood);
      const stump = data.sprites.stump && data.sprites.stump.wood;
      const tools = data.items.filter((x) => chop.tool && (x.verbs || []).includes(chop.tool)).map((x) => `[[${x.name}]]`);
      if (trees.length) rows.push(`| [[Trees]]: chop${tools.length ? `, with a ${tools.join(" or ")}` : ""} | ${Math.min(...trees) === Math.max(...trees) ? trees[0] : `${Math.min(...trees)}–${Math.max(...trees)}`} | Every tree | - |`);
      if (stump) rows.push(`| [[Stump|Stumps]]: chop | ${stump} | Every stump | - |`);
    }
    if (data.crops) for (const [kind, c] of Object.entries(data.crops.crops)) {
      if (c.harvest.item === it.id) rows.push(`| [[Farming]]: harvesting ${kind} | ${Array.isArray(c.harvest.count) ? `${c.harvest.count[0]}–${c.harvest.count[1]}` : c.harvest.count} | Every harvest | - |`);
      if (c.seed === it.id) rows.push(`| [[Farming]]: harvesting ${kind} | ${c.seeds} | Every harvest | - |`);
    }
    if (data.fishing) for (const [w, tb] of Object.entries(data.fishing.waters)) {
      const total = (tb.catch || []).reduce((s, c) => s + c.weight, 0);
      const c = (tb.catch || []).find((x) => x.item === it.id);
      if (c) rows.push(`| [[Fishing]]: the ${w} | 1 | ${pct((1 - tb.miss) * c.weight / total)} a cast | - |`);
    }
    for (const [name, t] of Object.entries(data.loot)) {
      const f = (t.fixed || []).find((x) => x.item === it.id);
      if (f) rows.push(`| ${LOOT_TITLES[name] || name} | ${f.count || 1} | Always | - |`);
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

  // Every real-world reference in the game, one entry each (data/references.json, game #218): the thing, its name, the work, how, since, from.
  "references-table"(_, { data }) {
    if (!data.references) throw new Error("no data/references.json in the snapshot");
    const esc = (s) => escapeHtml(String(s)).replace(/\|/g, "&#124;"); // a table cell
    const thing = (t) => (t.item ? itemLink(data, t.item) : esc(Object.entries(t).map(([k, v]) => `${k} ${v}`).join(", ")));
    const work = (w) => [`*${esc(w.title)}*`, w.by ? `by ${esc(w.by)}` : "", w.kind ? `(${esc(w.kind)}${w.year ? `, ${w.year}` : ""})` : w.year ? `(${w.year})` : ""].filter(Boolean).join(" ");
    const rows = data.references.map((r) => `| ${thing(r.thing)} | ${esc(r.name || "")} | ${work(r.work || {})} | ${esc(r.how || "")} | ${esc(r.since || "")} | ${esc(r.from || "")} |`);
    return `| In the game | Its name | The work | How | Since | From |\n|---|---|---|---|---|---|\n${rows.join("\n")}\n`;
  },

  // Farming: each crop's days, harvest, and seed (data/crops.json, game #206).
  "crops-table"(_, { data }) {
    if (!data.crops) throw new Error("no data/crops.json in the snapshot");
    const range = (n) => (Array.isArray(n) ? `${n[0]}–${n[1]}` : n);
    const rows = Object.entries(data.crops.crops).map(([kind, c]) => `| ${cap(kind)} | ${itemLink(data, c.seed)} | ${fmt(c.stages[0])} + ${fmt(c.stages[1])} days | ${range(c.harvest.count)} × ${itemLink(data, c.harvest.item)} | ${c.seeds} | ${c.tool ? toolLinks(data, c.tool) : "By hand"} |`);
    return `| Crop | Seed | Young to growing, growing to ready | Harvest | Seeds back | Harvested with |\n|---|---|---|---|---|---|\n${rows.join("\n")}\n`;
  },

  // Fishing: each water's table (data/fishing.json, game #193): what bites, the chance a cast catches it, the chance of nothing.
  "fishing-table"(_, { data }) {
    if (!data.fishing) throw new Error("no data/fishing.json in the snapshot");
    const rows = Object.entries(data.fishing.waters).map(([w, tb]) => {
      const total = (tb.catch || []).reduce((s, c) => s + c.weight, 0);
      return `| The ${w}${w === data.fishing.default ? " (and any water the map does not name)" : ""} | ${(tb.catch || []).map((c) => `${itemLink(data, c.item)} ${pct((1 - tb.miss) * c.weight / total)}`).join(", ")} | ${pct(tb.miss)} |`;
    });
    return `| Water | Catch, the chance a cast | Nothing bites |\n|---|---|---|\n${rows.join("\n")}\n`;
  },

  // A station's recipes.
  recipes(a, { data }) {
    const st = a._[0] || a.station;
    const rs = data.recipes.filter((r) => r.station === st);
    if (!rs.length) throw new Error(`no recipes for station "${st}"`);
    return `| Makes | Materials | Time | Needs |\n|---|---|---|---|\n${rs.map((r) => `| ${outputText(data, r.out)} | ${(r.in || []).map((x) => inputLink(data, x)).join(", ")} | ${fmt(r.seconds)} s | ${[r.fire ? "the fire lit" : "", r.tool ? `${itemLink(data, r.tool)} in hand` : "", usesText(data, r)].filter(Boolean).join(", ") || "-"} |`).join("\n")}\n`;
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
    return `<table class="infobox"><caption>${escapeHtml(v.name)}</caption>${row("Home", s ? placeLink(s.name) : `${v.tile.join(", ")}`)}${talkOf(data, v) ? row("Talk", `Lines of their own (see [[Talk]])${v.guide ? "; the guide" : ""}`) + row("Map line", `“${escapeHtml(v.line || "Hey!")}”, said when their talk has nothing for the moment`) : row("Says when poked", `“${escapeHtml(v.line || "Hey!")}”`)}${row("Wardrobe", `village ${v.wardrobe ?? 0}`)}</table>`;
  },

  // What a villager says, from their talk file (game #220): each bark group in order, when it holds, whether it is also said
  // unprompted, and its lines, said in turn. A poke takes the first group that holds; a remark unprompted only an ambient group.
  barks(a, { data }) {
    const id = a._[0] || a.talk;
    const file = data.talk && data.talk[id];
    if (!file) throw new Error(`no talk file "${id}"`);
    const rows = (file.barks || []).map((g) => {
      const when = whenWords(data, g.when);
      const lines = (g.lines || []).map((l) => `“${l}”`).join(", ");
      return `- **${when || "Otherwise"}**${g.ambient ? ", also unprompted" : ", when poked only"}: ${lines}`;
    });
    return rows.join("\n") + "\n";
  },

  // The questions a villager's conversation opens with (game #220), each with the wiki page it links to, if any.
  "talk-topics"(a, { data }) {
    const id = a._[0] || a.talk;
    const file = data.talk && data.talk[id];
    if (!file) throw new Error(`no talk file "${id}"`);
    const start = file.nodes && file.nodes[file.start];
    if (!start) throw new Error(`talk file "${id}" has no start node`);
    return (start.options || []).map((o) => `- “${o.text}”${o.wiki ? ` ([[${o.wiki}]])` : ""}${o.when ? ` (${whenWords(data, o.when).toLowerCase()})` : ""}`).join("\n") + "\n";
  },

  "villager-table"(_, { data }) {
    return `| Villager | Map line | Talk |\n|---|---|---|\n${(data.valley.villagers || []).map((v) => `| [[${v.name}]] | “${v.line || "Hey!"}” | ${talkOf(data, v) ? `Yes${v.guide ? ", the guide" : ""}` : "No: says the map line"} |`).join("\n")}\n`;
  },

  "infobox-station"(a, { data }) {
    const st = a._[0] || a.station;
    const sp = Object.entries(data.sprites).find(([, d]) => d.station === st);
    const def = sp ? sp[1] : null;
    const fire = def && def.fire;
    const n = data.recipes.filter((r) => r.station === st).length;
    return `<table class="infobox"><caption>${escapeHtml(STATION_TITLES[st] || cap(st))}</caption>${row("Recipes", n)}${row("Footprint", def && def.placeholder && def.placeholder.footprint ? def.placeholder.footprint.join(" × ") : "")}${row("Fire", fire ? `burns ${fire.fuel}, ${fmt(fire.hoursPerUnit)} hours each` : st === "cooking" ? "any lit fire that cooks" : "none")}${row("Art", def && (def.image || def.images) ? "Drawn" : "Placeholder")}</table>`;
  },

  // A prop (furniture, a fitting, a container, a station with no recipes): what its sprite definition says it is.
  "infobox-prop"(a, { data }) {
    const id = a._[0] || a.prop;
    const def = data.sprites[id];
    if (!def) throw new Error(`no sprite definition "${id}"`);
    const kind = propKind(def);
    const fp = def.facingFootprint;
    const loot = def.container && data.loot[def.container.loot];
    const rows = [
      row("Kind", cap(kind)),
      row("Footprint", fp ? `${fp.y[0]} × ${fp.y[1]} tiles, or turned ${fp.x[0]} × ${fp.x[1]}` : "1 × 1 tile"),
      row("Carried", def.carry ? "Yes: picked up and carried (see [[Carrying furniture]])" : "No: fixed where it stands"),
      row("Holds", loot ? `a ${loot.grid[0]} × ${loot.grid[1]} grid${(loot.entries || []).length ? `, filled from the ${LOOT_TITLES[def.container.loot] || def.container.loot} table on its first search (see [[Containers]])` : ", empty"}` : ""),
      row("Fire", def.fire && def.fire.burns ? `burns ${def.fire.fuel ? itemLink(data, def.fire.fuel) : "fuel"}${def.fire.hoursPerUnit ? `, ${fmt(def.fire.hoursPerUnit)} hours each` : ""}${def.fire.cooks ? "; cooks" : ""}` : ""),
      row("Station", def.station ? `${data.recipes.filter((r) => r.station === def.station).length} recipes` : ""),
      row("Water", def.water ? "drink here, and fill a [[Waterskin]] (see [[Water]])" : ""),
      row("Sleep", def.sleep ? "Yes (see [[Sleep]])" : ""),
      `<tr><th colspan="2" class="sub">Advanced</th></tr>`,
      row("Sprite id", `<code>${escapeHtml(id)}</code>`),
      row("Art", def.image || def.images || def.drawings ? "Drawn" : `Placeholder${def.placeholder && def.placeholder.label ? `, labelled “${escapeHtml(def.placeholder.label)}”` : ""}`),
    ];
    return `<table class="infobox"><caption>${escapeHtml(propTitle(id, def))}</caption>${rows.join("")}</table>`;
  },

  // A prop page's generated sections: Creation (the recipes that make it) and Where found.
  "prop-sections"(a, ctx) {
    const { data } = ctx;
    const id = a._[0] || a.prop;
    const rs = data.recipes.filter((r) => r.out && r.out.prop === id);
    const creation = rs.length ? `## Creation\n\n| Station | Materials | Time | Needs |\n|---|---|---|---|\n${rs.map((r) => `| ${stationLink(r.station)} | ${(r.in || []).map((x) => inputLink(data, x)).join(", ")} | ${fmt(r.seconds)} s | ${[r.fire ? "the fire lit" : "", r.tool ? `${itemLink(data, r.tool)} in hand` : "", usesText(data, r)].filter(Boolean).join(", ") || "-"} |`).join("\n")}\n` : "";
    return [creation, TEMPLATES.where({ _: [id] }, ctx)].filter(Boolean).join("\n");
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

  // The default starting kit, from data/kit.json (game #136): what is worn, what is in the bag on the back, what is in
  // hand, in the file's order. A world's extra items and the dev bag are the World rules page's.
  "starting-kit"(_, { data }) {
    const k = data.kit;
    if (!k) throw new Error("no data/kit.json in the snapshot");
    const an = (w) => (/^[aeiou]/i.test(w) ? "an" : "a");
    const name = (id, n = 1) => { const it = item(data, id); return n === 1 ? `${/s$/.test(it.name) ? "" : an(it.name) + " "}[[${it.name}]]` : `${n} [[${it.name}|${it.name.toLowerCase()}s]]`; };
    const back = k.worn.find((id) => item(data, id).wear === "back");
    if (!back) throw new Error("data/kit.json: nothing worn on the back");
    const worn = k.worn.map((id) => { const it = item(data, id); return `${name(id)}${it.beltSlots ? ` (${it.beltSlots} belt slots)` : ""}${id === back ? " on the back" : ""}`; });
    const inBag = k.items.filter((e) => !e.hold).map((e) => (e.fill != null && e.fill >= 100 ? `a full [[${item(data, e.item).name}]]` : name(e.item, e.count || 1)));
    const held = k.items.filter((e) => e.hold).map((e) => `${name(e.item)}${e.hold === "off" ? " in the off hand" : ""}`);
    const list = (xs) => (xs.length > 1 ? `${xs.slice(0, -1).join(", ")}, and ${xs[xs.length - 1]}` : xs[0] || "nothing");
    return `- Equipped: ${list(worn)}.\n- In the ${item(data, back).name.toLowerCase()}: ${list(inBag)}.\n- In hand: ${list(held)}.\n`;
  },

  // The Day-one food page (Michael, 2026-10-18): the valley's food when a world is made, from the data at build time.
  //   {{day-one-food sources}}     the four sources and the total, in hunger points
  //   {{day-one-food containers}}  the containers by loot table, only those with food
  //   {{day-one-food crops}}       the ripe crops, each with its harvest and its tool
  //   {{day-one-food lasts}}       how long it lasts 1, 2, and 4 players: everything, without tools, the kit alone
  //   {{day-one-food n=<key> players=<p>}}  one number inline: kit, containers, fruit, ripe, total, stomachs, time, days,
  //     notools-days, kit-days, kit-time, count-containers, count-trees, count-crops, pick-days, day-hours
  "day-one-food"(a, { data }) {
    const f = dayOneFood(data);
    const P = data.tuning.player;
    const players = Number(a.players || 1);
    const total = (p) => f.world + f.kit * p;
    const noTools = (p) => f.worldNoTools + f.kit * p;
    if (a.n) {
      const v = {
        kit: () => whole(f.kit), containers: () => whole(f.containers), fruit: () => whole(f.fruit), ripe: () => whole(f.ripe), total: () => whole(total(players)),
        stomachs: () => one(lasts(data, total(players), players).stomachs), time: () => duration(lasts(data, total(players), players).seconds), days: () => one(lasts(data, total(players), players).days),
        "notools-days": () => one(lasts(data, noTools(players), players).days), "kit-days": () => one(lasts(data, f.kit, 1).days), "kit-time": () => duration(lasts(data, f.kit, 1).seconds),
        "count-containers": () => String(f.counts.containers), "count-trees": () => String(f.counts.trees), "count-crops": () => String(f.counts.crops),
        "pick-days": () => { const ds = [...new Set([...f.trees.values()].map((t) => t.pick.days))]; return ds.join(" or "); },
      }[a.n];
      if (!v) throw new Error(`{{day-one-food n=${a.n}}}: no such number`);
      return v();
    }
    const which = a._[0];
    if (which === "sources") {
      const rows = [
        ["[[Player#The starter kit|The starting kit]], each player's", "One kit", f.kit],
        ["Containers searched", `${f.counts.containers} on tables that hold food`, f.containers],
        ["[[Trees#Fruit trees|Fruit trees]], picked once", `${f.counts.trees} trees`, f.fruit],
        ["[[Crops]] planted ripe, harvested", `${f.counts.crops} plants that are food`, f.ripe],
      ];
      return `| Source | How many | Hunger points |\n|---|---|---|\n${rows.map(([s, n, v]) => `| ${s} | ${n} | ${whole(v)} |`).join("\n")}\n| **Total, one player** | | **${whole(total(1))}** |\n`;
    }
    if (which === "containers") {
      const rows = [...f.tables.entries()].filter(([, t]) => t.each > 0).sort((x, y) => y[1].each * sumOf(y[1].sprites) - x[1].each * sumOf(x[1].sprites)).map(([name, t]) => {
        const what = [...t.sprites.entries()].sort((x, y) => y[1] - x[1]).map(([sp, n]) => `${n} × [[${propTitle(sp, data.sprites[sp])}]]`).join(", ");
        const tb = data.loot[name];
        const how = tb.fixed ? "Always the same" : `${Array.isArray(tb.rolls) ? `${tb.rolls[0]}–${tb.rolls[1]}` : tb.rolls} rolls, an average`;
        return `| ${LOOT_TITLES[name] || name} | ${what} | ${how} | ${one(t.each)} | ${whole(t.each * sumOf(t.sprites))} |`;
      });
      return `| Loot table | Containers on it | Filled | Hunger points in each | Hunger points |\n|---|---|---|---|---|\n${rows.join("\n")}\n`;
    }
    if (which === "crops") {
      const rows = [...f.crops.entries()].sort((x, y) => y[1].each * y[1].count - x[1].each * x[1].count).map(([kind, c]) => {
        const h = c.def.harvest;
        return `| ${cap(kind)} | ${c.count} | ${Array.isArray(h.count) ? `${h.count[0]}–${h.count[1]}` : h.count} × ${itemLink(data, h.item)} | ${whole(c.each * c.count)} | ${c.def.tool ? toolLinks(data, c.def.tool) : "By hand"} |`;
      });
      return `| Crop | Ripe plants | Each gives | Hunger points | Harvested with |\n|---|---|---|---|---|\n${rows.join("\n")}\n`;
    }
    if (which === "lasts") {
      const row = (label, pts, p) => { const l = lasts(data, pts, p); return `| ${label} | ${p} | ${whole(pts)} | ${one(l.stomachs)} | ${duration(l.seconds)} | ${one(l.days)} |`; };
      const rows = [];
      for (const p of [1, 2, 4]) rows.push(row("Everything", total(p), p));
      for (const p of [1, 2, 4]) rows.push(row("Without tools", noTools(p), p));
      const k = lasts(data, f.kit, 1);
      rows.push(`| The kit alone | each | ${whole(f.kit)} | ${one(k.stomachs)} | ${duration(k.seconds)} | ${one(k.days)} |`);
      return `| Food counted | Players | Hunger points | Full stomachs each | Time each, awake | Game days |\n|---|---|---|---|---|---|\n${rows.join("\n")}\n`;
    }
    throw new Error(`{{day-one-food ${which || ""}}}: say sources, containers, crops, lasts, or n=<key>`);
  },

  // The Production chains page: every chain from raw to product, computed from the data (lib/chains.js; its two
  // hand-kept tables, the grouping and what the docs plan, are lib/chains-plan.js).
  "production-chains"(_, ctx) {
    return productionChains(ctx.data, ctx, { STATION_TITLES, propTitle, itemPicture });
  },

  navbox(a, { data }) {
    const which = a._[0];
    if (which === "items") {
      const kinds = [...new Set(data.items.map((i) => i.kind))].sort();
      return navbox("Items", [...kinds.map((k) => [KIND_TITLES[k] || cap(k), data.items.filter((i) => i.kind === k).map((i) => `[[${i.name}]]`)]), ["See also", ["[[Production chains]]", "[[Recipes]]"]]]);
    }
    if (which === "weapons") return navbox("Weapons", [["Weapons", data.items.filter((i) => i.weapon || i.bow || i.shield).map((i) => `[[${i.name}]]`)]]);
    if (which === "places") return navbox("The valley", [["Places", (data.valley.sets || []).map((s) => placeLink(s.name))], ["Villagers", (data.valley.villagers || []).map((v) => `[[${v.name}]]`)]]);
    if (which === "making") return navbox("Making things", [["Stations", [...new Set(data.recipes.map((r) => r.station))].map(stationLink)], ["See also", ["[[Crafting]]", "[[Fire]]", "[[Recipes]]", "[[Production chains]]"]]]);
    if (which === "props") {
      const props = propIds(data);
      return navbox("Furniture and fittings", Object.entries(PROP_KIND_TITLES).map(([k, t]) => [t, props.filter(([, d]) => propKind(d) === k).map(([id, d]) => `[[${propTitle(id, d)}]]`)]));
    }
    throw new Error(`no navbox "${which}"`);
  },
};

const LOOT_TITLES = { chest: "Chests", barrel: "Barrels", body: "The dead's pockets", dev_kit: "[[Developer chest|The dev chest]] (testing only)", wild: "The wild", home_chest: "[[Your cottage]]'s chest", joiner_chest: "[[The joiner]]'s chest", weaver_chest: "[[The weaver]]'s chest", miners_chest: "[[The miners' hut]]'s chest", quarry_chest: "[[The quarryman's hut]]'s chest", ore_cart: "[[The iron workings]]' ore cart", stone_stack: "[[The quarry]]'s stacks of cut stone", smithy_chest: "[[The smithy]]'s chest", charcoal_sacks: "[[The charcoal burners]]' sacks", barn_rack: "[[Hollow Farm]]'s tool rack", granary_hollow: "[[Hollow Farm]]'s granary", granary_mill: "[[The mill]]'s granary" };
export function placeTitle(name) { return cap(name); }
function placeLink(name) { return name === "the valley" ? "[[The valley]]" : `[[${placeTitle(name)}]]`; }
// A prop in a place's list: its label, linked to its page (a crop to [[Crops]]).
function propLabel(data, sp) {
  const d = data.sprites[sp];
  const label = d && d.placeholder && d.placeholder.label ? d.placeholder.label : sp.replace(/_\d+$/, "").replace(/_/g, " ");
  const crop = /^crop_(\w+?)_\d+$/.exec(sp);
  if (crop) return `[[Crops|${cap(crop[1])} crop]]`;
  if (!d) return cap(label);
  if (PROP_TITLES[sp]) return `[[${PROP_TITLES[sp]}]]`; // a named prop (the apple tree) by its title, not its id
  const title = propTitle(sp, d);
  return title === cap(label) ? `[[${title}]]` : `[[${title}|${cap(label)}]]`;
}
function navbox(title, groups) {
  const body = groups.filter(([, links]) => links.length).map(([g, links]) => `<tr><th>${g}</th><td>${links.join(" · ")}</td></tr>`).join("");
  return `<table class="navbox"><caption>${escapeHtml(title)}</caption>${body}</table>`;
}
