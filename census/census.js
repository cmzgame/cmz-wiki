// The census, part one: the automatic inventory of what the game contains, read
// from the snapshot (snapshot/data, the game's data at one commit) and the code
// beside it (.game/src, from the same commit). Writes census/census.json and a
// readable census/census.md. Run `node sync.js` first.
//
// Data is read as data. Things that live only in code (keys, verbs, menu
// entries, moodles, events, checks) are found by pattern, and the report says
// so: they are a list to check, not a proof.

import { readFileSync, readdirSync, writeFileSync, existsSync, statSync } from "node:fs";
import { join, dirname, basename } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const D = join(root, "snapshot", "data");
const SRC = join(root, ".game", "src");
const TOOLS = join(root, ".game", "tools");
const json = (p) => JSON.parse(readFileSync(p, "utf8"));
const version = json(join(root, "snapshot", "version.json"));

function walk(dir, ext) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...walk(p, ext));
    else if (!ext || p.endsWith(ext)) out.push(p);
  }
  return out;
}
const srcFiles = walk(SRC, ".js").map((p) => ({ path: p.slice(SRC.length + 1).replace(/\\/g, "/"), text: readFileSync(p, "utf8") }));
function found(re, group = 1) {
  const hits = new Map();
  for (const f of srcFiles) {
    const lines = f.text.split("\n");
    lines.forEach((line, i) => {
      for (const m of line.matchAll(re)) {
        const key = m[group];
        if (!hits.has(key)) hits.set(key, []);
        hits.get(key).push(`${f.path}:${i + 1}`);
      }
    });
  }
  return [...hits.entries()].sort((a, b) => a[0].localeCompare(b[0])).map(([key, at]) => ({ key, at }));
}

// ---------- data ----------
const items = json(join(D, "items.json"));
const recipes = json(join(D, "recipes.json")).rows;
const interactions = json(join(D, "interactions.json")).rows;
const loot = json(join(D, "loot.json"));
const tuning = json(join(D, "tuning.json"));
const combat = json(join(D, "combat.json"));
const wardrobes = json(join(D, "wardrobes.json"));
const build = json(join(D, "build.json"));
const looks = json(join(D, "looks.json"));
const poses = json(join(D, "poses.json"));
const valley = json(join(D, "maps", "valley.json"));
const sprites = Object.fromEntries(readdirSync(join(D, "sprites")).filter((f) => f.endsWith(".json")).map((f) => [basename(f, ".json"), json(join(D, "sprites", f))]));
const hair = existsSync(join(D, "hair", "index.json")) ? json(join(D, "hair", "index.json")) : null;

const itemIds = new Set(items.map((i) => i.id));
const ref = (x) => x.id || (x.tag ? `tag:${x.tag}` : x.prop ? `prop:${x.prop}` : JSON.stringify(x));

// Loot: every table's entries with their chance per roll worked out from the weights.
const lootTables = Object.entries(loot).map(([name, t]) => {
  const entries = t.entries || [];
  const total = entries.reduce((s, e) => s + (e.weight || 1), 0);
  return {
    name,
    grid: t.grid,
    rolls: t.rolls,
    entries: entries.map((e) => ({ item: e.item, count: e.count ?? 1, weight: e.weight || 1, perRoll: +((e.weight || 1) / total).toFixed(4) })),
  };
});

// Sprite definitions sorted by what they are, first rule that fits.
function spriteKind(id, d) {
  if (id.startsWith("floor_")) return "floor";
  if (d.wall || id.startsWith("wall_")) return "wall";
  if (d.station) return "station";
  if (d.fire) return "fire";
  if (d.container) return "container";
  if (d.canopy) return "tree";
  if (d.furrows) return "crop";
  if (d.interactable) return "gatherable";
  if (d.sleep || d.carry) return "furniture";
  if (d.placeholder) return "placeholder box";
  return "other";
}
const spriteList = Object.entries(sprites).map(([id, d]) => ({
  id,
  kind: spriteKind(id, d),
  label: d.placeholder && d.placeholder.label ? d.placeholder.label : undefined,
  drawn: !!(d.image || d.images || d.drawings),
  station: d.station, fire: d.fire ? { fuel: d.fire.fuel, hoursPerUnit: d.fire.hoursPerUnit, maxFuel: d.fire.maxFuel, radius: d.fire.radius, cooks: d.fire.cooks } : undefined,
  container: d.container ? true : undefined, carry: d.carry, collide: d.collide, interactable: d.interactable, water: d.water, walk: d.walk, drink: d.drink, sleep: d.sleep, wood: d.wood,
  note: d.note,
}));

// The map's places: name, rect, buildings, and what is placed inside each rect.
const inRect = ([x, y], [rx, ry, rw, rh]) => x >= rx && y >= ry && x < rx + rw && y < ry + rh;
const places = (valley.sets || []).map((s) => {
  const r = s.rect;
  const props = (valley.props || []).filter((p) => p.tile && inRect(p.tile, r)).map((p) => p.sprite);
  const setProps = (s.buildings || []).flatMap((b) => (b.props || []).map((p) => p.sprite || p.id || p.name)).filter(Boolean);
  return {
    name: s.name, rect: r,
    buildings: (s.buildings || []).length,
    rooms: (s.buildings || []).reduce((n, b) => n + 1 + (b.partitions || []).length, 0),
    dead: (valley.zombies || []).filter((z) => inRect(z, r)).length,
    villagers: (valley.villagers || []).filter((v) => inRect(v.tile, r)).map((v) => v.name),
    props: [...props, ...setProps].sort(),
  };
});

// ---------- code, by pattern ----------
const keys = found(/(?:wasPressed|isDown)\("([A-Za-z0-9]+)"\)/g);
const verbs = found(/verbs?\.define\("([a-z_]+)"/g);
// The verbs whose code asks for an item in hand that lists them (`(def.verbs || []).includes("chop")`, `heldWith(player, "till")`):
// a tool's verb is built only when one of these asks for it, not because some verb of the same name exists (the hand harvest
// is `harvest`, and so is the scythe's unbuilt one; the review of wiki #14).
const toolVerbs = found(/(?:\.verbs \|\| \[\]\)\.includes\(|heldWith\([^,()]+,\s*)"([a-z_]+)"\)/g);
const menuLabels = found(/label:\s*((?:`[^`]*`|"[^"]*"))/g).map((x) => ({ ...x, key: x.key.replace(/^[`"]|[`"]$/g, "") }));
const events = found(/\bemit\("([a-zA-Z]+)"/g);
const settingsText = readFileSync(join(SRC, "settings.js"), "utf8");
const defaultsBlock = settingsText.slice(settingsText.indexOf("export const DEFAULTS"), settingsText.indexOf("};", settingsText.indexOf("export const DEFAULTS")));
const settings = [...defaultsBlock.matchAll(/^\s*([a-zA-Z]+):\s*([^,]+),\s*(?:\/\/\s*(.*))?$/gm)].map((m) => ({ key: m[1], default: m[2].trim(), note: (m[3] || "").trim() }));
const rulesText = readFileSync(join(SRC, "rules.js"), "utf8");
// The world's rules are the keys of rules.js's DEFAULTS (since game #128 the live object is a copy of it); FIXED names
// the ones chosen once, when a world is made (game #131).
const rulesBlock = rulesText.includes("export const DEFAULTS") ? rulesText.slice(rulesText.indexOf("export const DEFAULTS")).split("};")[0] : rulesText.slice(rulesText.indexOf("export const rules")).split("};")[0];
const rules = [...rulesBlock.matchAll(/^\s*([a-zA-Z]+):\s*([^,]+),/gm)].map((m) => m[1]);
const fixedRules = [...((/export const FIXED\s*=\s*\[([^\]]*)\]/.exec(rulesText) || [])[1] || "").matchAll(/"([a-zA-Z]+)"/g)].map((m) => m[1]);
const moodleText = readFileSync(join(SRC, "moodles.js"), "utf8");
const moodles = [...moodleText.matchAll(/id:\s*"([a-z]+)",[\s\S]*?stages:\s*\[([\s\S]*?)\]/g)].map((m) => ({ id: m[1], stages: [...m[2].matchAll(/name:\s*"([^"]+)",\s*text:\s*"([^"]+)"/g)].map((s) => ({ name: s[1], text: s[2] })) }));
const checks = existsSync(join(TOOLS, "checks")) ? readdirSync(join(TOOLS, "checks")).filter((f) => f.endsWith(".js")).map((f) => basename(f, ".js")) : [];
// Named numbers in code (const NAME = 1.5; and the properties of an object named `tunables`), by module,
// so a page can say {{n census.constants.combat.POINT_BLANK}} rather than type a number the code owns.
const constants = {};
for (const f of srcFiles) {
  const mod = f.path.replace(/\.js$/, "").replace(/\//g, "_");
  const put = (k, v) => { (constants[mod] = constants[mod] || {})[k] = v; };
  for (const m of f.text.matchAll(/^(?:export\s+)?const\s+([A-Z][A-Z0-9_]*)\s*=\s*(-?\d+(?:\.\d+)?)\s*;/gm)) put(m[1], +m[2]);
  const tb = /(?:export\s+)?const\s+tunables\s*=\s*\{([\s\S]*?)\n\};/.exec(f.text);
  if (tb) for (const m of tb[1].matchAll(/^\s*([a-zA-Z]\w*):\s*(-?\d+(?:\.\d+)?)\s*,/gm)) put(`tunables_${m[1]}`, +m[2]);
}
const modules = srcFiles.map((f) => ({ path: f.path, lines: f.text.split("\n").length })).sort((a, b) => b.lines - a.lines);

// A top-level function's text, from `function name` to the brace that closes it at the start of a line (either line
// ending), and the line range it spans, for a citation.
function functionAt(file, name) {
  const f = srcFiles.find((s) => s.path === file);
  const start = f ? f.text.indexOf(`function ${name}`) : -1;
  if (start < 0) return null;
  const end = /\r?\n\}\r?\n/.exec(f.text.slice(start));
  const body = f.text.slice(start, end ? start + end.index + end[0].length : f.text.length);
  const first = f.text.slice(0, start).split("\n").length;
  return { body, at: `src/${file}:${first}-${first + body.trimEnd().split("\n").length - 1}` };
}

// The default starting kit, for the Production chains page: what every new character starts with, from
// data/kit.json (game #136): `worn` (ids, each into its slot) and `items` (`item`, `count`, `fill`, `hold`). A world may
// add to it or wear the Developer Bag in place of the sack (the rules extraKit and devBag, chosen at the Sandbox
// step); those are a world's testing choices, not normal play, so they are not read here. Null without the file.
function readStarterKit() {
  const kitFile = join(D, "kit.json");
  if (!existsSync(kitFile)) return null;
  const k = json(kitFile);
  const rows = [...(k.worn || []).map((id) => ({ id, count: 1, worn: true })), ...(k.items || []).map((r) => ({ id: r.item, count: r.count || 1, ...(r.hold ? { hold: r.hold } : {}), ...(r.fill != null ? { fill: r.fill } : {}) }))];
  return { from: "data/kit.json", items: rows.filter((r) => itemIds.has(r.id)), unknown: rows.filter((r) => !itemIds.has(r.id)).map((r) => r.id) };
}
const starterKit = readStarterKit();

// What felling a tree gives (a tree's sprite says how many: its `wood`): from the `chop` verb in src/chop.js (game #207, a hatchet in
// hand; a stump left, which gives its own `wood`), or before it from the tree's action in src/interact.js. `tool` is the verb an item
// must list to chop, when chopping needs one.
function readChop() {
  const f = srcFiles.find((s) => s.path === "chop.js");
  if (f) {
    const start = f.text.indexOf('verbs.define("chop"');
    const end = start < 0 ? null : /\r?\n\}\);\r?\n/.exec(f.text.slice(start));
    const body = start < 0 ? "" : f.text.slice(start, end ? start + end.index + end[0].length : f.text.length);
    const m = /dropItem\([^{]*\{\s*id:\s*"([a-z_]+)"/.exec(body);
    if (m) {
      const first = f.text.slice(0, start).split("\n").length;
      const tool = toolVerbs.some((v) => v.key === "chop" && v.at.some((a) => a.startsWith("chop.js:"))) ? "chop" : undefined; // read from the code: chop.js asks for a held item listing `chop`
      return { gives: m[1], field: "wood", ...(tool ? { tool } : {}), at: `src/chop.js:${first}-${first + body.trimEnd().split("\n").length - 1}` };
    }
  }
  const fn = functionAt("interact.js", "treeActions");
  const m = fn && /dropItem\([^{]*\{\s*id:\s*"([a-z_]+)"/.exec(fn.body);
  return m ? { gives: m[1], field: "wood", at: fn.at } : null;
}
const chop = readChop();

// Every prop the game's own map loader places inside the valley's bounds, counted by sprite: the authored props and what
// the scatter and forage passes grow, which the map file names only as rules (src/map.js loadMap, run headless on the
// snapshot's data, as the game's server/boot.js runs it without the art). The wild beyond the bounds is grown as it is
// walked, without end, so it is not counted. The Dead ends page reads it. Null, with a problem, if the loader cannot run.
async function readValleyProps() {
  try {
    const url = (p) => pathToFileURL(join(SRC, p)).href;
    const assets = await import(url("assets.js"));
    assets.setHeadless(true);
    assets.setJsonReader(async (p) => json(join(root, "snapshot", p)));
    assets.setManifest(json(join(D, "manifest.json")));
    await assets.loadAll();
    const map = await import(url("map.js"));
    map.loadMap(valley);
    const [bx, by, bw, bh] = valley.bounds;
    const counts = {};
    for (const p of map.allProps()) {
      const [x, y] = p.tile;
      if (x >= bx && y >= by && x < bx + bw && y < by + bh) counts[p.sprite] = (counts[p.sprite] || 0) + 1;
    }
    return { from: "src/map.js loadMap, inside data/maps/valley.json's bounds", bounds: valley.bounds, counts: Object.fromEntries(Object.entries(counts).sort()) };
  } catch (e) {
    return { error: String((e && e.message) || e) };
  }
}
const valleyPropsRead = await readValleyProps();
const valleyProps = valleyPropsRead.error ? null : valleyPropsRead;

// ---------- items, cross-referenced ----------
const itemRows = items.map((i) => ({
  id: i.id, name: i.name, kind: i.kind, size: i.size, hands: i.hands, stack: i.stack, tags: i.tags || [],
  weapon: i.weapon, shots: i.shots, bow: i.bow ? true : undefined, shield: i.shield ? true : undefined, thrown: i.thrown ? true : undefined,
  hunger: i.hunger, thirst: i.thirst, bandage: i.bandage, bag: i.bag, beltSlots: i.beltSlots, wear: i.wear, verbs: i.verbs, splitsInto: i.splitsInto, fire: i.fire,
  art: { icon: !!i.icon, held: !!i.held, drawn: !!(i.art || i.icon) },
  madeBy: recipes.filter((r) => r.out && r.out.id === i.id).map((r) => r.station),
  usedIn: recipes.filter((r) => (r.in || []).some((x) => x.id === i.id || (x.tag && (i.tags || []).includes(x.tag)))).map((r) => `${r.station}: ${r.out.id || "prop:" + r.out.prop}`),
  foundIn: lootTables.filter((t) => t.entries.some((e) => e.item === i.id)).map((t) => t.name),
  interactions: interactions.filter((x) => x.use === i.id || x.on === i.id).map((x) => `${x.use} on ${x.on}: ${x.verb || x.action || ""}`),
  note: i.note,
}));

// Problems the data shows by itself.
const problems = [];
for (const r of recipes) for (const x of [...(r.in || []), r.out]) if (x && x.id && !itemIds.has(x.id)) problems.push(`recipe at ${r.station} names unknown item ${x.id}`);
for (const t of lootTables) for (const e of t.entries) if (e.item !== "nothing" && !itemIds.has(e.item)) problems.push(`loot table ${t.name} names unknown item ${e.item}`);
for (const r of recipes) if (r.out && r.out.prop && !sprites[r.out.prop]) problems.push(`recipe at ${r.station} makes unknown prop ${r.out.prop}`);
const stationsInData = new Set(spriteList.filter((s) => s.station).map((s) => s.station).concat(["cooking"]));
for (const r of recipes) if (!stationsInData.has(r.station)) problems.push(`recipe names station ${r.station} that no sprite definition is`);
for (const id of (starterKit && starterKit.unknown) || []) problems.push(`data/kit.json names unknown item ${id}`);
if (!starterKit) problems.push("no data/kit.json: the starting kit is unknown");
if (valleyPropsRead.error) problems.push(`the valley's props could not be counted with the game's map loader: ${valleyPropsRead.error}`);

const census = {
  version,
  counts: {
    items: items.length, recipes: recipes.length, interactions: interactions.length, lootTables: lootTables.length, sprites: spriteList.length,
    places: places.length, villagers: (valley.villagers || []).length, authoredDead: (valley.zombies || []).length, mapProps: (valley.props || []).length,
    zombieWardrobes: (wardrobes.zombie || []).length, villageWardrobes: (wardrobes.village || []).length,
    settings: settings.length, rules: rules.length, fixedRules: fixedRules.length, liveRules: rules.length - fixedRules.length, keys: keys.length, verbs: verbs.length, menuLabels: menuLabels.length, events: events.length, checks: checks.length, modules: modules.length,
  },
  items: itemRows, recipes, interactions, lootTables, sprites: spriteList,
  map: { name: valley.name, spawn: valley.spawn, bounds: valley.bounds, places, villagers: valley.villagers, wild: valley.wild },
  tuning, combat, build, looks, poseSets: Object.keys(poses), hairStyles: hair,
  wardrobes: { zombie: (wardrobes.zombie || []).length, village: (wardrobes.village || []).length },
  settings, rules, fixedRules, keys, verbs, toolVerbs, menuLabels, events, moodles, checks, modules, problems, constants,
  starterKit, chop, valleyProps,
};
writeFileSync(join(root, "census", "census.json"), JSON.stringify(census, null, 1) + "\n");

// ---------- the readable report ----------
const L = [];
const h = (t) => L.push("", `## ${t}`, "");
L.push(`# The census: what is in the game`, "", `Game \`main\` @ \`${version.short}\` (${version.date.slice(0, 10)}): ${version.subject.slice(0, 140)}`, "",
  "Generated by `census/census.js` from the game's data and code at that commit. Data is read as data; the lists from code (keys, verbs, menu entries, events) are found by pattern and are a list to check, not a proof.");
h("Counts");
for (const [k, v] of Object.entries(census.counts)) L.push(`- ${k}: ${v}`);
h("Problems the data shows by itself");
L.push(...(problems.length ? problems.map((p) => `- ${p}`) : ["- none found"]));
h("Items");
for (const k of [...new Set(itemRows.map((i) => i.kind))].sort()) {
  L.push(`### ${k}`, "");
  for (const i of itemRows.filter((x) => x.kind === k)) {
    const bits = [`${i.size.join("×")}`, i.hands ? `hands: ${i.hands}` : null, i.stack ? `stacks ${i.stack}` : null,
      i.weapon ? `weapon: ${i.weapon.damage ?? "?"} dmg, ${i.weapon.swing ?? "?"} s, reach ${i.weapon.range ?? "?"}, ${i.weapon.style || ""}, kills ${i.weapon.kills ?? "-"}` : null,
      i.shots ? `${i.shots} shots` : null, i.hunger ? `hunger +${i.hunger}` : null, i.thirst ? `thirst +${i.thirst}` : null,
      i.madeBy.length ? `made at ${i.madeBy.join(", ")}` : null, i.foundIn.length ? `in loot: ${i.foundIn.join(", ")}` : null,
      i.usedIn.length ? `used in ${i.usedIn.length} recipe(s)` : null, i.art.drawn ? "drawn art" : "placeholder art"].filter(Boolean);
    L.push(`- **${i.name}** (\`${i.id}\`): ${bits.join("; ")}`);
  }
  L.push("");
}
h("Recipes");
for (const st of [...new Set(recipes.map((r) => r.station))]) {
  L.push(`### ${st}`, "");
  for (const r of recipes.filter((x) => x.station === st)) L.push(`- ${r.out.id ? `${r.out.count || 1} ${r.out.id}` : `prop ${r.out.prop}`} from ${(r.in || []).map((x) => `${x.count || 1} ${ref(x)}`).join(", ")}; ${r.seconds ?? "?"} s${r.fire ? ", fire lit" : ""}${r.tool ? `, ${r.tool} in hand` : ""}`);
  L.push("");
}
h("Interactions (data/interactions.json)");
L.push(...interactions.map((x) => `- ${JSON.stringify(x)}`));
h("Loot tables");
for (const t of lootTables) L.push(`- **${t.name}** (grid ${t.grid ? t.grid.join("×") : "-"}, rolls ${JSON.stringify(t.rolls)}): ${t.entries.map((e) => `${e.item} ${Math.round(e.perRoll * 100)}%`).join(", ")}`);
h("Props and other sprite definitions, by kind");
for (const k of [...new Set(spriteList.map((s) => s.kind))].sort()) L.push(`- **${k}** (${spriteList.filter((s) => s.kind === k).length}): ${spriteList.filter((s) => s.kind === k).map((s) => s.id + (s.drawn ? "" : "*")).join(", ")}`);
L.push("", "(* placeholder art, generated at boot)");
h("The valley's places");
for (const p of places) L.push(`- **${p.name}** at ${p.rect.slice(0, 2).join(",")} (${p.rect[2]}×${p.rect[3]}): ${p.buildings} building(s), ${p.rooms} room(s), ${p.dead} dead${p.villagers.length ? `, villagers: ${p.villagers.join(", ")}` : ""}`);
h("Villagers");
L.push(...(valley.villagers || []).map((v) => `- **${v.name}** at ${v.tile.join(",")}: "${v.line || "Hey!"}"`));
h("The dead (data/tuning.json, zombie)");
L.push(...Object.entries(tuning.zombie).map(([k, v]) => `- ${k}: ${JSON.stringify(v)}`));
h("The player (data/tuning.json, player)");
L.push(...Object.entries(tuning.player).map(([k, v]) => `- ${k}: ${JSON.stringify(v)}`));
h("Combat (data/combat.json)");
L.push(...Object.entries(combat).filter(([k]) => k !== "note").map(([k, v]) => `- ${k}: ${JSON.stringify(v)}`));
h("Building (data/build.json)");
L.push("```", JSON.stringify(build, null, 1).slice(0, 1500), "```");
h("Moodles");
for (const m of moodles) L.push(`- **${m.id}**: ${m.stages.map((s) => s.name).join(" → ")}`);
h("Settings (src/settings.js DEFAULTS)");
L.push(...settings.map((s) => `- \`${s.key}\` = ${s.default}${s.note ? `: ${s.note}` : ""}`));
h("World rules (src/rules.js)");
L.push(rules.map((r) => `\`${r}\`${fixedRules.includes(r) ? " (fixed at creation)" : ""}`).join(", "));
h("Keys the game reads (by pattern)");
L.push(...keys.map((k) => `- \`${k.key}\`: ${k.at.join(", ")}`));
h("Verbs in the table (by pattern)");
L.push(...verbs.map((k) => `- \`${k.key}\`: ${k.at.join(", ")}`));
h("Verbs that need a tool in hand (by pattern)");
L.push(...toolVerbs.map((k) => `- \`${k.key}\`: ${k.at.join(", ")}`));
h("Menu entry labels (by pattern)");
L.push(...menuLabels.map((k) => `- ${k.key}  (${k.at[0]}${k.at.length > 1 ? ` +${k.at.length - 1}` : ""})`));
h("Events on the bus (by pattern)");
L.push(menuLabels.length ? events.map((e) => `\`${e.key}\``).join(", ") : "");
h("The starting kit (data/kit.json)");
L.push(starterKit ? `${starterKit.items.map((k) => `${k.count} ${k.id}`).join(", ")} (from ${starterKit.from})` : "- not found");
h("Felling a tree (by pattern)");
L.push(chop ? `a tree with \`${chop.field}\` drops that many \`${chop.gives}\`${chop.tool ? `, with an item in hand that lists \`${chop.tool}\`, and leaves a stump with its own \`${chop.field}\`` : ""} (${chop.at})` : "- not found");
h("The valley's props, counted by the game's map loader");
L.push(valleyProps ? Object.entries(valleyProps.counts).map(([k, n]) => `${k} ${n}`).join(", ") + ` (${valleyProps.from})` : "- not counted");
h("Checks (tools/checks)");
L.push(checks.map((c) => `\`${c}\``).join(", "));
h("Modules by size");
L.push(...modules.map((m) => `- ${m.path}: ${m.lines}`));
writeFileSync(join(root, "census", "census.md"), L.join("\n") + "\n");
console.log(`census of ${version.short}: ${Object.entries(census.counts).map(([k, v]) => `${v} ${k}`).join(", ")}; ${problems.length} problem(s)`);
