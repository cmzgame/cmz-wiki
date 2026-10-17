// The game's data as the wiki reads it: the snapshot of the game's data/ at one
// commit (snapshot/), and the census beside it (census/census.json) for what
// lives only in code. Every lookup that misses throws, so a page that names an
// item, a number, or a station the game no longer has fails the build.

import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, basename } from "node:path";

export function loadData(root) {
  const D = join(root, "snapshot", "data");
  const json = (p) => JSON.parse(readFileSync(p, "utf8"));
  const data = {
    version: json(join(root, "snapshot", "version.json")),
    items: json(join(D, "items.json")),
    recipes: json(join(D, "recipes.json")).rows,
    interactions: json(join(D, "interactions.json")).rows,
    loot: json(join(D, "loot.json")),
    tuning: json(join(D, "tuning.json")),
    combat: json(join(D, "combat.json")),
    build: json(join(D, "build.json")),
    looks: json(join(D, "looks.json")),
    wardrobes: json(join(D, "wardrobes.json")),
    valley: json(join(D, "maps", "valley.json")),
    kit: existsSync(join(D, "kit.json")) ? json(join(D, "kit.json")) : null, // the default starting kit (game #136)
    fishing: existsSync(join(D, "fishing.json")) ? json(join(D, "fishing.json")) : null, // the cast and a catch table per named water (game #193)
    sprites: Object.fromEntries(readdirSync(join(D, "sprites")).filter((f) => f.endsWith(".json")).map((f) => [basename(f, ".json"), json(join(D, "sprites", f))])),
    census: existsSync(join(root, "census", "census.json")) ? json(join(root, "census", "census.json")) : null,
  };
  data.itemById = new Map(data.items.map((i) => [i.id, i]));
  return data;
}

// A dotted path into the data: the first segment names the file (tuning,
// combat, build, looks, items, sprites, loot, valley, fishing, census), items by id.
export function lookup(data, path) {
  const parts = path.split(".");
  let v;
  const head = parts.shift();
  if (head === "items") {
    const id = parts.shift();
    v = data.itemById.get(id);
    if (!v) throw new Error(`no item "${id}"`);
  } else if (head in data && typeof data[head] === "object") v = data[head];
  else throw new Error(`no data file "${head}"`);
  for (const p of parts) {
    if (v == null || !(p in Object(v))) throw new Error(`no "${p}" in ${path}`);
    v = v[p];
  }
  return v;
}

export function item(data, id) {
  const it = data.itemById.get(id);
  if (!it) throw new Error(`no item "${id}"`);
  return it;
}

// The game's own derivations, as the code makes them (src/items.js: hitsPerKill,
// wearPerHit; the standard zombie's health from tuning).
export function hitsPerKill(data, it) {
  const dmg = it.weapon ? it.weapon.damage : it.bow ? it.bow.damage : null;
  if (!dmg) return null;
  return Math.ceil(data.tuning.zombie.hp / dmg);
}

// Every loot table entry's chance per roll, from the weights.
export function lootChances(table) {
  const entries = table.entries || [];
  const total = entries.reduce((s, e) => s + (e.weight || 1), 0);
  return entries.map((e) => ({ ...e, perRoll: (e.weight || 1) / total }));
}

// The props: every sprite the valley's map places (its own props, its places' props, the props in their buildings)
// or a recipe makes, but for the crops, which have a page of their own kind. Sorted by id, each with its definition.
export function propIds(data) {
  const ids = new Set();
  for (const p of data.valley.props || []) if (p.sprite) ids.add(p.sprite);
  for (const s of data.valley.sets || []) {
    for (const b of s.buildings || []) for (const p of b.props || []) ids.add(p.sprite || p.id);
    for (const p of s.props || []) ids.add(p.sprite || p.id);
  }
  for (const r of data.recipes) if (r.out && r.out.prop) ids.add(r.out.prop);
  return [...ids].filter((id) => !/^crop_/.test(id) && data.sprites[id]).sort().map((id) => [id, data.sprites[id]]);
}

// Where a prop stands in the valley: the map's own props and the props inside its places' buildings.
export function propPlaces(data, sprite) {
  const inRect = ([x, y], [rx, ry, rw, rh]) => x >= rx && y >= ry && x < rx + rw && y < ry + rh;
  const out = new Map();
  const add = (name) => out.set(name, (out.get(name) || 0) + 1);
  for (const s of data.valley.sets || []) {
    for (const b of s.buildings || []) for (const p of b.props || []) if ((p.sprite || p.id) === sprite) add(s.name);
    for (const p of s.props || []) if ((p.sprite || p.id) === sprite) add(s.name);
  }
  for (const p of data.valley.props || []) if (p.sprite === sprite && p.tile) {
    const s = (data.valley.sets || []).find((q) => inRect(p.tile, q.rect));
    add(s ? s.name : "the valley");
  }
  return [...out.entries()];
}
