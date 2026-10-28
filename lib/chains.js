// The Production chains page, computed from the game's data at build time: every recipe by station, every raw
// source, which items can be had in normal play, which stations work, and what is a dead end. The two hand-kept
// tables (how the chains are grouped, and what the docs plan) are lib/chains-plan.js; nothing here is typed by hand.
//
// Obtainability is a fixed point. The seeds are the non-dev sources:
//   - the default starting kit (data/kit.json, read by the census; a world's extra items and dev bag are testing
//     choices, not normal play);
//   - the loot tables that something in normal play rolls: a container the valley's map places (a container made at
//     a station starts empty and rolls nothing) and the dead's pockets (their wardrobes' `loot`), never a table whose
//     name or container starts with "dev" (the developer chest);
//   - the clothes the dead wear (their wardrobes' `worn`), taken off a body;
//   - felling a tree the world grows (a sprite with `wood`; what it drops is the census's `chop`, from the code);
//   - picking a fruit tree the map places (a sprite with a `pick` block: its `item`, game #192);
//   - a container the map places with a loot table of its own (the map's `loot` on the prop, game #207).
// Felling a tree needs, when the census says so, an item that lists the chop verb (the hatchet, game #207); a stump gives its log too.
// Felling also drops the tuning's sapling (`tuning.trees.sapling`, game #461), and any standing tree gives the tuning's sticks by hand.
// A node with a `gather` block (an herb, a mushroom) gives its item by hand, and one with a `dig` block its item to a tool carried that
// lists the block's `tool` (game #457). An animal the map keeps (`valley.animals`) gives its `yields` when killed, skinned and butchered
// with a tool carried that lists `skin` and `butcher` (game #456); a tame one fed (an item tagged `feed` in a feeding trough, a sprite
// with `feed` the map places or the palette builds) gives its `produce` to a tool carried that lists the produce's verb, and a hen lays
// its `lays` and a feather into a chicken coop the map places (game #460). The scythe's swing over grass cuts hay (src/farming.js
// `scytheSwing`, the code's HAY: an item listing `harvest` held).
// A crop (data/crops.json, game #206) is harvested, for its food and its seed, when the map places one of its kind or its seed is had
// and soil can be had (the map's farm soil, or an item that lists the till verb): its seed is the way to grow more.
// Then, until nothing changes: an item that splits (`splitsInto`) gives what it splits into; an interaction that turns
// one item into another at a fire (`args.from` to `args.to`, the dip) gives it when a fire burns; a recipe's output
// is had when every input is (a tag is met by any item with the tag), its tool is, and its station works. A station
// works when the map places it (or a working recipe makes it) and, if the recipe needs its fire, that fire's fuel is
// had and something to light it with is (an interaction whose action is "light"). Cooking is any placed fire that
// cooks. A fish (data/fishing.json, game #193) is had when a rod (an item whose `verbs` hold "fish", a verb the code has) is
// had and the map has the water whose table catches it (a named water's own table; unnamed water, the default's).

import { GROUPS, PLANNED, PLANNED_STATIONS, SKILLS, PLANNED_VILLAGERS } from "./chains-plan.js";
import { escapeHtml } from "./markdown.js";

const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const DEV = /^dev/;

// Every sprite the world has: the map's own props, its places' props, the trees, rocks, and forage its rules grow.
function worldSprites(valley) {
  const out = new Set();
  const ownLoot = new Set(); // a placed container's own loot table (the map's `loot` on the prop, game #207)
  const note = (p) => { out.add(p.sprite || p.id); if (typeof p.loot === "string") ownLoot.add(p.loot); };
  for (const p of valley.props || []) if (p.sprite) note(p);
  for (const s of valley.sets || []) {
    for (const b of s.buildings || []) for (const p of b.props || []) note(p);
    for (const p of s.props || []) note(p);
  }
  const grown = new Set();
  for (const b of Object.values(valley.biomes || {})) for (const k of Object.keys(b.kinds || {})) grown.add(k);
  for (const k of Object.keys((valley.wild && valley.wild.kinds) || {})) grown.add(k);
  for (const k of Object.keys((valley.wild && valley.wild.rocks && valley.wild.rocks.kinds) || {})) grown.add(k);
  for (const k of Object.keys((valley.forage && valley.forage.kinds) || {})) grown.add(k);
  for (const r of Object.values(valley.resources || {})) for (const k of Object.keys((r && r.sprites) || {})) grown.add(k); // the natural resources' nodes (game #453, #457)
  return { placed: out, all: new Set([...out, ...grown]), ownLoot };
}

export function computeChains(data) {
  const { items, recipes, interactions, loot, sprites, valley, wardrobes, build, census } = data;
  const byId = data.itemById;
  const world = worldSprites(valley);
  const has = new Set(); // obtainable item ids
  const how = new Map(); // id -> [{ kind, label, ... }] every non-recipe source
  const addSource = (id, src) => { if (!byId.has(id)) return; if (!how.has(id)) how.set(id, []); if (!how.get(id).some((s) => s.key === src.key)) how.get(id).push(src); };

  // ---- the seeds ----
  const kit = census && census.starterKit;
  if (kit) for (const k of kit.items) addSource(k.id, { key: "kit", kind: "kit", label: "[[Getting started|Starter kit]]", count: k.count });
  const tables = new Map(); // name -> { label, link }
  for (const id of world.placed) {
    const d = sprites[id];
    if (d && d.container && d.container.loot && !DEV.test(id) && !DEV.test(d.container.loot)) tables.set(d.container.loot, { via: "container" });
  }
  for (const l of world.ownLoot) if (!DEV.test(l)) tables.set(l, { via: "container" }); // a placed container's own table (game #207)
  const deadPlaced = (valley.zombies || []).length > 0 || (valley.wild && [].concat(valley.wild.zombiesPerChunk || 0).some((n) => n > 0));
  if (deadPlaced) for (const w of wardrobes.zombie || []) {
    if (w.loot && !DEV.test(w.loot)) tables.set(w.loot, { via: "body" });
    for (const slot of Object.values(w.worn || {})) if (slot && slot.item) addSource(slot.item, { key: "worn", kind: "worn", label: "[[Corpses|The dead's clothes]]" });
  }
  for (const [name] of tables) {
    const t = loot[name];
    if (!t) throw new Error(`a container or wardrobe names loot table "${name}", which data/loot.json lacks`);
    for (const e of [...(t.entries || []), ...(t.fixed || [])]) if (e.item !== "nothing") addSource(e.item, { key: `loot:${name}`, kind: "loot", label: LOOT_LABELS[name] || `[[Containers|${cap(name)}]]` });
  }
  const chop = census && census.chop;
  const trees = [...world.all].filter((id) => sprites[id] && sprites[id].wood);
  const verbsBuilt = new Set(((census && census.verbs) || []).map((v) => v.key));
  const toolBuilt = new Set(((census && census.toolVerbs) || []).map((v) => v.key)); // verbs whose code asks for an item in hand
  const choppers = chop && chop.tool ? items.filter((it) => (it.verbs || []).includes(chop.tool) && toolBuilt.has(chop.tool)) : [];
  const chopFree = !!(chop && trees.length && !chop.tool);
  if (chopFree) addSource(chop.gives, { key: "chop", kind: "chop", label: "[[Trees]]: chop" });
  for (const id of world.placed) {
    const pk = sprites[id] && sprites[id].pick;
    if (pk && byId.has(pk.item)) addSource(pk.item, { key: `pick:${id}`, kind: "pick", label: `[[Trees#Fruit trees|${byId.get(pk.item).name} trees]]: pick` });
  }
  for (const id of how.keys()) has.add(id);
  // Fishing: which tables the map's waters use (a named water's own; unnamed water, the default's), and what each catches.
  const fishing = data.fishing;
  const fishWaters = new Map(); // item id -> [water names]
  if (fishing) {
    const named = new Set();
    let unnamed = false;
    const noteWater = (r) => { if (String(r.sprite || "").startsWith("floor_water")) { if (r.group) named.add(r.group); else unnamed = true; } };
    for (const f of valley.features || []) noteWater(f);
    for (const r of valley.floorRects || []) noteWater(r);
    for (const s of valley.sets || []) for (const r of s.floorRects || []) noteWater(r);
    const used = new Set([...named].filter((n) => fishing.waters[n]));
    if (unnamed || [...named].some((n) => !fishing.waters[n])) used.add(fishing.default);
    for (const w of used) for (const c of (fishing.waters[w] && fishing.waters[w].catch) || []) {
      if (!fishWaters.has(c.item)) fishWaters.set(c.item, []);
      if (!fishWaters.get(c.item).includes(w)) fishWaters.get(c.item).push(w);
    }
  }
  // Farming: the kinds the map places, the seed of each, whether soil can be had.
  const crops = data.crops;
  const placedCrops = new Set([...world.placed].map((id) => sprites[id] && sprites[id].crop && sprites[id].crop.kind).filter(Boolean));
  const mapSoil = [...(valley.features || []), ...(valley.floorRects || []), ...(valley.sets || []).flatMap((s) => s.floorRects || [])].some((r) => sprites[r.sprite] && sprites[r.sprite].furrows) || placedCrops.size > 0;
  // The tool rule (game #222): a carried tool found by its verb, the verb named in the data (a recipe's `uses`, a crop's `tool`,
  // a build kind's `tool`, the tuning's board and split tools), which the code reads generically.
  const species = Object.entries((data.animals && data.animals.species) || {});
  const keptSpecies = new Set((valley.animals || []).map((h) => h.species));
  const yieldVerbs = species.flatMap(([, sp]) => Object.entries(sp.yields || {}).filter(([, ys]) => ys.length).map(([v]) => v)); // skin, butcher: src/entities/animal.js workProblem asks toolProblem(player, verb)
  const produceVerbs = species.map(([, sp]) => sp.produce && sp.produce.verb); // milk, shear: produceProblem asks toolProblem(player, pr.verb)
  const nodeTools = Object.values(sprites).flatMap((d) => [d.gather && d.gather.tool, d.dig && d.dig.tool]); // src/gather.js asks toolProblem(player, b.tool)
  const dataVerbs = new Set([...recipes.map((r) => r.uses), ...Object.values((data.crops && data.crops.crops) || {}).map((c) => c.tool), ...Object.values(build || {}).map((b) => b && b.tool), data.tuning && data.tuning.world && data.tuning.world.boardTool, data.tuning && data.tuning.world && data.tuning.world.splitTool, ...yieldVerbs, ...produceVerbs, ...nodeTools, verbsBuilt.has("lead") ? "lead" : null].filter(Boolean));
  const toolsFor = (verb) => items.filter((it) => it.kind === "tool" && (it.verbs || []).includes(verb));
  const toolHad = (verb) => toolsFor(verb).some((t) => has.has(t.id));
  const splitTool = data.tuning && data.tuning.world && data.tuning.world.splitTool;
  const tillers = items.filter((it) => (it.verbs || []).includes("till") && toolBuilt.has("till"));
  const grows = (kind) => {
    const c = crops.crops[kind];
    if (!verbsBuilt.has("harvest")) return false;
    if (c.tool && !toolHad(c.tool)) return false; // harvested with a tool carried (game #222)
    if (placedCrops.has(kind)) return true;
    return has.has(c.seed) && verbsBuilt.has("plant") && (mapSoil || tillers.some((t) => has.has(t.id)));
  };
  const fishVerb = ((census && census.toolVerbs) || []).some((v) => v.key === "fish");
  const rods = items.filter((it) => fishVerb && (it.verbs || []).includes("fish"));
  // Mining (game #210): a sprite with a `mine` block the world has (a rock, an ore rock) gives its item to an item in hand that lists `mine`.
  const mineables = [...world.all].filter((id) => sprites[id] && sprites[id].mine && byId.has(sprites[id].mine.item));
  const picks = items.filter((it) => (it.verbs || []).includes("mine") && toolBuilt.has("mine"));
  // Gathering by hand and digging (game #457): a node the world grows with a `gather` or a `dig` block.
  const gathers = [...world.all].filter((id) => sprites[id] && sprites[id].gather && byId.has(sprites[id].gather.item) && verbsBuilt.has("gather"));
  const digs = [...world.all].filter((id) => sprites[id] && sprites[id].dig && byId.has(sprites[id].dig.item) && verbsBuilt.has("dig"));
  for (const id of gathers) if (!sprites[id].gather.tool) addSource(sprites[id].gather.item, { key: `gather:${sprites[id].gather.item}`, kind: "gather", label: gatherLabel(sprites[id], byId.get(sprites[id].gather.item)) });
  // Trees (game #461): sticks by hand under any standing tree; a sapling from a felling.
  const TT = (data.tuning && data.tuning.trees) || {};
  const sticksItem = TT.sticks && verbsBuilt.has("sticks") && trees.length ? TT.sticks.item : null;
  if (sticksItem) addSource(sticksItem, { key: "sticks", kind: "sticks", label: "[[Trees#Sticks|Trees]]: gather sticks" });
  const saplingItem = TT.sapling && chop && trees.length ? TT.sapling.item : null;
  // The animals the map keeps (game #456, #460).
  const kept = species.filter(([name]) => keptSpecies.has(name));
  const troughOk = () => Object.entries(sprites).some(([id, d]) => d.feed && (world.placed.has(id) || Object.values(build || {}).some((b) => b && b.sprite === id && Object.keys(b.cost || {}).every((k) => has.has(k)) && (!b.tool || toolHad(b.tool)))));
  const fedOk = () => tagHad("feed") && troughOk();
  const coopPlaced = world.placed.has("chicken_coop");

  // ---- the fixed point ----
  const lighters = interactions.filter((x) => x.action === "light").map((x) => x.use);
  const fires = Object.entries(sprites).filter(([id, d]) => d.fire && d.fire.burns && world.placed.has(id));
  const fireBurns = (d) => !!(d && d.fire && d.fire.burns && (!d.fire.fuel || has.has(d.fire.fuel)) && lighters.some((l) => has.has(l)));
  const tagHad = (tag) => items.some((it) => has.has(it.id) && (it.tags || []).includes(tag));
  const inputHad = (x) => (x.id ? has.has(x.id) : x.tag ? tagHad(x.tag) : false);
  const madeProps = new Set();
  const stationPlaced = (st) => st === "cooking" ? fires.some(([, d]) => d.fire.cooks) : Object.entries(sprites).some(([id, d]) => d.station === st && (world.placed.has(id) || madeProps.has(id)));
  const stationFireOk = (st) => st === "cooking" ? fires.some(([, d]) => d.fire.cooks && fireBurns(d)) : (() => { const d = Object.values(sprites).find((s) => s.station === st); return !d || !d.fire || fireBurns(d); })();
  const recipeWorks = (r) => stationPlaced(r.station) && (r.in || []).every(inputHad) && (!r.tool || has.has(r.tool)) && (!r.uses || toolHad(r.uses)) && (!r.fire || stationFireOk(r.station));
  for (let changed = true; changed;) {
    changed = false;
    const gain = (id) => { if (id && byId.has(id) && !has.has(id)) { has.add(id); changed = true; } };
    for (const it of items) if (it.splitsInto && has.has(it.id) && (!splitTool || toolHad(splitTool))) gain(it.splitsInto.id);
    if (rods.some((r) => has.has(r.id))) for (const id of fishWaters.keys()) gain(id);
    if (picks.some((p) => has.has(p.id))) for (const id of mineables) gain(sprites[id].mine.item);
    if (chop && chop.tool && trees.length && choppers.some((c) => has.has(c.id))) gain(chop.gives);
    if (saplingItem && (chopFree || choppers.some((c) => has.has(c.id)))) gain(saplingItem);
    if (sticksItem) gain(sticksItem);
    for (const id of gathers) { const g = sprites[id].gather; if (!g.tool || toolHad(g.tool)) gain(g.item); }
    for (const id of digs) { const g = sprites[id].dig; if (!g.tool || toolHad(g.tool)) gain(g.item); }
    for (const [, sp] of kept) {
      for (const [v, ys] of Object.entries(sp.yields || {})) if (toolHad(v) && (v === "skin" || !(sp.yields.skin || []).length || toolHad("skin"))) for (const y of ys) gain(y.id);
      if (sp.produce && fedOk() && toolHad(sp.produce.verb)) gain(sp.produce.item);
      if (sp.lays && coopPlaced && fedOk()) { gain(sp.lays.item); if (data.animals.keep && data.animals.keep.feather > 0) gain("feather"); }
    }
    if (byId.has("hay") && items.some((it) => (it.verbs || []).includes("harvest") && toolBuilt.has("harvest") && has.has(it.id))) gain("hay");
    if (crops) for (const [kind, c] of Object.entries(crops.crops)) if (grows(kind)) { gain(c.harvest.item); gain(c.seed); }
    for (const x of interactions) if (x.args && x.args.from && x.args.to && has.has(x.args.from) && x.on === "fire" && fires.some(([, d]) => fireBurns(d))) gain(x.args.to);
    for (const r of recipes) if (recipeWorks(r)) {
      if (r.out.id) gain(r.out.id);
      else if (r.out.prop && !madeProps.has(r.out.prop)) { madeProps.add(r.out.prop); changed = true; }
    }
  }
  if (chop && chop.tool && trees.length) addSource(chop.gives, { key: "chop", kind: "chop", label: `[[Trees]] and [[Stump|stumps]]: chop, with ${choppers.map((c) => `a [[${c.name}]]`).join(" or ") || "a tool"}`, ok: choppers.some((c) => has.has(c.id)) });
  if (crops) for (const [kind, c] of Object.entries(crops.crops)) {
    const ok = grows(kind);
    const label = `[[Farming]]: harvest ${kind}${c.tool ? `, with ${toolsFor(c.tool).map((t) => `a [[${t.name}]]`).join(" or ") || "a tool"} on you` : ""}`;
    addSource(c.harvest.item, { key: `harvest:${kind}`, kind: "harvest", label, ok });
    addSource(c.seed, { key: `harvest:${kind}`, kind: "harvest", label, ok });
  }
  // one row per item mined, naming each kind of rock once: the plain rocks are "rocks", an ore rock is named for what it gives
  const mineKinds = new Map();
  for (const id of mineables) {
    const m = sprites[id].mine;
    if (!mineKinds.has(m.item)) mineKinds.set(m.item, new Set());
    mineKinds.get(m.item).add(/^rock_/.test(id) ? "rocks" : `${byId.get(m.item).name.toLowerCase()} rocks`); // the plain rocks by their kind's name, an ore rock by its ore (since game #453 both go when mined)
  }
  for (const [item, kinds] of mineKinds) addSource(item, { key: `mine:${item}`, kind: "mine", label: `[[Mining]]: ${[...kinds].join(", ")}, with ${picks.map((p) => `a [[${p.name}]]`).join(" or ") || "a tool"}`, ok: picks.some((p) => has.has(p.id)) });
  if (saplingItem) addSource(saplingItem, { key: "sapling", kind: "sapling", label: `[[Trees]]: felled, sometimes${chop.tool ? `, with ${choppers.map((c) => `a [[${c.name}]]`).join(" or ") || "a tool"}` : ""}`, ok: chopFree || choppers.some((c) => has.has(c.id)) });
  for (const id of gathers) { const g = sprites[id].gather; if (g.tool) addSource(g.item, { key: `gather:${g.item}`, kind: "gather", label: `${gatherLabel(sprites[id], byId.get(g.item))}, with ${toolsFor(g.tool).map((t) => `a [[${t.name}]]`).join(" or ") || "a tool"} on you`, ok: toolHad(g.tool) }); }
  for (const id of digs) { const g = sprites[id].dig; addSource(g.item, { key: `dig:${g.item}`, kind: "dig", label: `[[Gatherables|Dig]] ${sprites[id].name ? `a ${sprites[id].name}` : "it"}${g.tool ? `, with ${toolsFor(g.tool).map((t) => `a [[${t.name}]]`).join(" or ") || "a tool"} on you` : ""}`, ok: !g.tool || toolHad(g.tool) }); }
  const byYield = new Map(); // `${verb}:${item}` -> { verb, id, kinds }
  for (const [name, sp] of kept) for (const [v, ys] of Object.entries(sp.yields || {})) for (const y of ys) {
    const k = `${v}:${y.id}`;
    if (!byYield.has(k)) byYield.set(k, { verb: v, id: y.id, kinds: [] });
    byYield.get(k).kinds.push(name);
  }
  for (const { verb, id, kinds } of byYield.values()) addSource(id, { key: `animal:${verb}:${id}`, kind: "animal", label: `[[Hunting]]: ${verb} ${kinds.map((k) => `a ${k}`).join(", ")}, with ${toolsFor(verb).map((t) => `a [[${t.name}]]`).join(" or ") || "a tool"} on you`, ok: toolHad(verb) });
  for (const [name, sp] of kept) {
    if (sp.produce) addSource(sp.produce.item, { key: `produce:${sp.produce.item}`, kind: "produce", label: `[[Keeping]]: ${sp.produce.verb} a fed ${name}, with ${toolsFor(sp.produce.verb).map((t) => (/[^s]s$/.test(t.name) ? `[[${t.name}]]` : `a [[${t.name}]]`)).join(" or ") || "a tool"} on you`, ok: fedOk() && toolHad(sp.produce.verb) });
    if (sp.lays && coopPlaced) {
      addSource(sp.lays.item, { key: `lays:${sp.lays.item}`, kind: "lays", label: `[[Keeping]]: laid by a fed ${name} into its [[Chicken coop|coop]]`, ok: fedOk() });
      if (data.animals.keep && data.animals.keep.feather > 0) addSource("feather", { key: "lays:feather", kind: "lays", label: `[[Keeping]]: left by a fed ${name} in its [[Chicken coop|coop]]`, ok: fedOk() });
    }
  }
  if (byId.has("hay")) { const sc = items.filter((it) => (it.verbs || []).includes("harvest") && toolBuilt.has("harvest")); addSource("hay", { key: "hay", kind: "hay", label: `cut from grass, with ${sc.map((t) => `a [[${t.name}]]`).join(" or ") || "a tool"} swung`, ok: sc.some((t) => has.has(t.id)) }); }
  for (const [id, ws] of fishWaters) addSource(id, { key: "fish", kind: "fish", label: `[[Fishing]]: ${ws.map((w) => `the ${w}`).join(", ")}`, ok: rods.some((r) => has.has(r.id)) });
  for (const it of items) if (it.splitsInto) addSource(it.splitsInto.id, { key: `split:${it.id}`, kind: "split", label: `split a [[${it.name}]]${splitTool ? `, with ${toolsFor(splitTool).map((t) => `a [[${t.name}]]`).join(" or ") || "a tool"} on you` : ""}`, ok: has.has(it.id) && (!splitTool || toolHad(splitTool)) });
  for (const x of interactions) if (x.args && x.args.from && x.args.to && byId.has(x.args.to)) addSource(x.args.to, { key: `ix:${x.args.from}`, kind: "interaction", label: `${(x.verb || x.action).toLowerCase()} [[${byId.get(x.args.from).name}]] in a [[Fire|fire]]`, ok: has.has(x.args.from) });

  // ---- why a recipe or a station fails, in words ----
  const itemName = (id) => (byId.has(id) ? `[[${byId.get(id).name}]]` : id);
  const why = (r) => {
    const out = [];
    if (!stationPlaced(r.station)) out.push(`no ${STATION(r.station)} stands in the valley`);
    for (const x of r.in || []) if (!inputHad(x)) out.push(x.id ? `${itemName(x.id)} cannot be had` : `nothing *${x.tag}* can be had`);
    if (r.tool && !has.has(r.tool)) out.push(`its tool, ${itemName(r.tool)}, cannot be had`);
    if (r.uses && !toolHad(r.uses)) out.push(`the ${toolsFor(r.uses).map((t) => itemName(t.id)).join(" or ") || r.uses} it needs on you cannot be had`);
    if (r.fire && !stationFireOk(r.station)) {
      const d = r.station === "cooking" ? null : Object.values(sprites).find((s) => s.station === r.station);
      out.push(d && d.fire && d.fire.fuel && !has.has(d.fire.fuel) ? `its fire's fuel, ${itemName(d.fire.fuel)}, cannot be had` : "no fire it needs can be lit");
    }
    return out;
  };

  // ---- what each item is for (a use, for the dead-end list) ----
  const builtVerbs = new Set([...((census && census.toolVerbs) || []).map((v) => v.key), ...dataVerbs]); // a tool's verb is built when the code asks for an item listing it, or the data names it for a carried tool
  const tableVerbs = new Set(((census && census.verbs) || []).map((v) => v.key));
  const fuelOf = new Set(Object.values(sprites).filter((d) => d.fire && d.fire.fuel).map((d) => d.fire.fuel));
  const isUsed = (it) => {
    if (recipes.some((r) => (r.in || []).some((x) => x.id === it.id || (x.tag && (it.tags || []).includes(x.tag))) || r.tool === it.id)) return true;
    if (fuelOf.has(it.id) || interactions.some((x) => x.use === it.id || x.on === it.id) || it.splitsInto) return true;
    if (Object.values(build || {}).some((b) => b && b.cost && it.id in b.cost)) return true;
    if (it.verbs && it.verbs.some((v) => builtVerbs.has(v))) return true;
    if (data.crops && Object.values(data.crops.crops).some((c) => c.seed === it.id) && tableVerbs.has("plant")) return true; // a seed is planted (game #206)
    if (it.place) return true; // set down from the bag (a snare, a sapling: src/setdown.js)
    if (Object.values(sprites).some((d) => d.accepts && (it.tags || []).includes(d.accepts))) return true; // feed in a feeding trough (game #460)
    return !!(it.hunger || it.thirst || it.heal || it.capacity || it.vessel || it.wear || it.weapon || it.bow || it.shield || it.book || it.staff || it.bandage || it.kind === "ammo" || it.fire);
  };

  // A tool whose own verbs (`verbs`: mine, till, ...) none of which the verb table has, and no recipe asks for in hand:
  // it swings as a weapon, but its job is not built yet.
  const verbIdle = (it) => !!(it.verbs && !it.verbs.some((v) => builtVerbs.has(v)) && !recipes.some((r) => r.tool === it.id));

  return { toolsFor, toolHad, dataVerbs, mineables, picks, grows, crops, fishWaters, rods, verbIdle, has, how, recipeWorks, stationPlaced, why, isUsed, builtVerbs, world, tables, kit, chop, trees, fires, fireBurns, lighters, deadPlaced, madeProps };
}

// A gathered node's source, by what its item is: an herb's [[Herbs]], a mushroom's [[Mushrooms]], else [[Gatherables]].
function gatherLabel(d, it) {
  const word = (d.gather && d.gather.word) || "Gather";
  const page = (it.tags || []).includes("herb") ? "Herbs" : (it.tags || []).includes("mushroom") ? "Mushrooms" : "Gatherables";
  return `[[${page}]]: ${word.toLowerCase()} by hand${d.gather && d.gather.night ? ", at night" : ""}`;
}

const LOOT_LABELS = { chest: "[[Containers|Chests]]", barrel: "[[Containers|Barrels]]", body: "[[Corpses|The dead's pockets]]", home_chest: "[[Your cottage]]'s chest", joiner_chest: "[[The joiner]]'s chest", weaver_chest: "[[The weaver]]'s chest", miners_chest: "[[The miners' hut]]'s chest", quarry_chest: "[[The quarryman's hut]]'s chest", ore_cart: "[[The iron workings]]' ore cart", stone_stack: "[[The quarry]]'s stacks of cut stone", smithy_chest: "[[The smithy]]'s chest", charcoal_sacks: "[[The charcoal burners]]' sacks", barn_rack: "[[Hollow Farm]]'s tool rack", granary_hollow: "[[Hollow Farm]]'s granary", granary_mill: "[[The mill]]'s granary" };
let STATION = (s) => cap(s);

// ---------- drawing ----------
const chip = (label, status, opts = {}) => `<span class="chip chip-${status}${opts.cls ? " " + opts.cls : ""}" title="${escapeHtml(opts.title || STATUS_WORDS[status])}">${label}</span>`;
const STATUS_WORDS = { works: "Works: can be had in normal play", blocked: "Blocked: in the game, but cannot be had in normal play", planned: "Planned: in a design doc, not built yet", src: "A source in the game" };
const arrow = `<span class="chain-arrow" aria-hidden="true">→</span>`;
const via = (text, planned) => `<span class="chain-via${planned ? " chain-via-planned" : ""}">${text}</span>`;

export function productionChains(data, ctx, helpers) {
  const { STATION_TITLES, propTitle, itemPicture } = helpers;
  STATION = (s) => STATION_TITLES[s] || cap(s);
  const C = computeChains(data);
  const { items, recipes, sprites, build, valley } = data;
  const byId = data.itemById;
  const stationLink = (s) => `[[${STATION(s)}]]`;
  const itemName = (id) => (byId.has(id) ? `[[${byId.get(id).name}]]` : id);
  const itemStatus = (id) => (C.has.has(id) ? "works" : "blocked");
  // An item's chip is coloured by the item's own obtainability; `recipe`, when given, is the recipe the row draws it
  // from: if that recipe cannot be made but the item can be had elsewhere, the chip says so in a note.
  const plain = (s) => s.replace(/\[\[([^\]|]+\|)?([^\]]+)\]\]/g, "$2").replace(/\*/g, "");
  const itemChip = (id, count, recipe) => {
    const it = byId.get(id);
    if (!it) throw new Error(`production chains: no item "${id}"`);
    const st = itemStatus(id);
    const idle = !C.isUsed(it);
    const verbless = !idle && C.verbIdle(it);
    const notHere = recipe && !C.recipeWorks(recipe) && st === "works";
    const notes = [idle ? "no use yet" : "", verbless ? `${it.verbs.join(", ")} not built` : "", notHere ? "not made here" : ""].filter(Boolean);
    const title = [STATUS_WORDS[st], idle ? "nothing uses it yet" : "", verbless ? `it swings as a weapon, but its ${it.verbs.join(", ")} ${it.verbs.length > 1 ? "are" : "is"} not built yet` : "", notHere ? `this recipe cannot be made (${plain(C.why(recipe).join("; "))}), but it can be had elsewhere` : ""].filter(Boolean).join("; ");
    return chip(`[[${it.name}]]${count && count !== 1 ? ` ×${count}` : ""}${notes.map((n) => ` <small>${n}</small>`).join("")}`, st, { title });
  };
  // A prop a recipe makes: had if the recipe works or the valley places one.
  const outChip = (r) => {
    if (r.out.id) return itemChip(r.out.id, r.out.count, r);
    const placed = C.world.placed.has(r.out.prop);
    const ok = C.recipeWorks(r);
    return chip(`[[${propTitle(r.out.prop, sprites[r.out.prop])}]]${!ok && placed ? " <small>not made here</small>" : ""}`, ok || placed ? "works" : "blocked", { title: ok ? STATUS_WORDS.works : placed ? `One stands in the valley; this recipe cannot be made (${plain(C.why(r).join("; "))})` : STATUS_WORDS.blocked });
  };
  const plannedNote = (doc, note) => { ctx.planned.push({ page: ctx.page.title, doc, note }); };
  const planNames = new Set(items.map((i) => i.name.toLowerCase()));

  // ---- a material's row: where it comes from, it, and what it makes ----
  const usedRecipes = new Set(); // every recipe some group's rows draw
  let drawn = new Set(); // the recipes the current group's rows draw
  const materialRow = (m) => {
    const parts = [];
    let center, uses;
    if (m.startsWith("tag:")) {
      const tag = m.slice(4);
      const its = items.filter((i) => (i.tags || []).includes(tag));
      if (!its.length) throw new Error(`production chains: no item has the tag "${tag}"`);
      const srcs = [...new Map(its.flatMap((i) => C.how.get(i.id) || []).map((s) => [s.key, s])).values()];
      parts.push(srcs.length ? srcs.map((s) => chip(s.label, "src", { cls: "chip-source" })).join("") : chip("no source", "blocked"));
      parts.push(arrow, its.map((i) => itemChip(i.id)).join(""), arrow);
      center = chip(`any <em>${tag}</em>`, its.some((i) => C.has.has(i.id)) ? "works" : "blocked");
      uses = recipes.filter((r) => (r.in || []).some((x) => x.tag === tag));
    } else {
      const it = byId.get(m);
      if (!it) throw new Error(`production chains: no item "${m}"`);
      const srcs = (C.how.get(m) || []);
      const made = recipes.filter((r) => r.out.id === m);
      const srcChips = [...srcs.map((s) => chip(s.label, s.ok === false ? "blocked" : "src", { cls: "chip-source" })), ...made.map((r) => chip(`${stationLink(r.station)}`, C.recipeWorks(r) ? "src" : "blocked", { cls: "chip-source", title: C.recipeWorks(r) ? "Made at this station" : `Made at this station, but blocked: ${C.why(r).join("; ").replace(/\[\[([^\]|]+\|)?([^\]]+)\]\]/g, "$2")}` }))];
      parts.push(srcChips.length ? srcChips.join("") : chip("no source", "blocked", { title: "Nothing in normal play gives it" }), arrow);
      center = itemChip(m);
      uses = recipes.filter((r) => (r.in || []).some((x) => x.id === m) || r.tool === m);
    }
    parts.push(`<strong class="chain-center">${center}</strong>`);
    const segs = [];
    const byStation = new Map();
    for (const r of uses) { usedRecipes.add(r); drawn.add(r); if (!byStation.has(r.station)) byStation.set(r.station, []); byStation.get(r.station).push(r); }
    for (const [st, rs] of byStation) segs.push(`${arrow}${via(stationLink(st) + (rs.every((r) => r.tool === m) ? ", as the tool" : "") + (rs.some((r) => C.recipeWorks(r)) ? "" : " <span class=\"via-blocked\" title=\"None of these recipes can be made in normal play\">✕ recipes blocked</span>"))}${rs.map(outChip).join("")}`);
    if (!m.startsWith("tag:")) {
      const it = byId.get(m);
      if (it.splitsInto) segs.push(`${arrow}${via("split")}${itemChip(it.splitsInto.id, it.splitsInto.count)}`);
      const builds = Object.values(build || {}).filter((b) => b && b.cost && m in b.cost);
      if (builds.length) segs.push(`${arrow}${via("[[Building|build]]")}${builds.map((b) => chip(escapeHtml(b.label) + (b.tool ? `, with ${C.toolsFor(b.tool).map((x) => `a [[${x.name}]]`).join(" or ") || "a tool"} on you` : ""), Object.keys(b.cost).every((k) => C.has.has(k)) && (!b.tool || C.toolHad(b.tool)) ? "works" : "blocked")).join("")}`);
      const burns = Object.entries(sprites).filter(([id, d]) => d.fire && d.fire.fuel === m && C.world.placed.has(id));
      if (burns.length) segs.push(`${arrow}${via("fuel for")}${burns.map(([id, d]) => chip(`[[${propTitle(id, d)}]]`, C.has.has(m) ? "works" : "blocked")).join("")}`);
      for (const x of data.interactions.filter((y) => y.use === m && y.args && y.args.to)) segs.push(`${arrow}${via(`${(x.verb || x.action).toLowerCase()} in a fire`)}${itemChip(x.args.to)}`);
      // A container of water (`capacity`) is filled, and drunk from, at any prop with `water` and any water tile
      // beside you (src/interact.js, waterActions and waterTileActions).
      if (it.capacity) {
        const wells = [...C.world.placed].filter((id) => sprites[id] && sprites[id].water).sort();
        segs.push(`${arrow}${via("fill at")}${[...wells.map((id) => chip(`[[${propTitle(id, sprites[id])}]]`, "works")), chip("[[Water|the river and ponds]]", "works")].join("")}`);
      }
      const lights = data.interactions.filter((y) => y.use === m && y.action === "light");
      if (lights.length) segs.push(`${arrow}${via("light")}${chip(`${[...new Set(lights.map((y) => y.on))].map((o) => (o === "fire" ? "a fire" : o.replace(/_/g, " "))).join(", ")}`, C.has.has(m) ? "works" : "blocked")}`);
    }
    return `<div class="chain-row">${parts.join("")}${segs.join("")}</div>`;
  };
  const nodeHtml = (n) => {
    if (n.via) return `${arrow}${via(n.via, !n.built)}${arrow}`;
    if (n.i) return itemChip(n.i);
    if (n.w) {
      if (!sprites[n.w]) throw new Error(`production chains: planned row names sprite "${n.w}", which the data lacks`);
      return chip(escapeHtml(n.label || n.w), C.world.all.has(n.w) ? "works" : "blocked", { title: "In the world today" });
    }
    if (planNames.has(n.p.toLowerCase())) throw new Error(`production chains: planned "${n.p}" is an item now; make it { i: id } in lib/chains-plan.js`);
    return chip(escapeHtml(n.p), "planned");
  };
  const plannedRow = (row) => {
    plannedNote(row.doc, row.note);
    const html = row.nodes.map(nodeHtml).join("").replace(new RegExp(`(${arrow.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}){2,}`, "g"), arrow).replace(new RegExp(`^${arrow.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`), "");
    return `<div class="chain-row chain-row-planned"><span class="chain-tag" title="Not in the game yet">not built yet</span>${html}<span class="chain-cite">${escapeHtml(row.note)} (docs/${escapeHtml(row.doc)})</span></div>`;
  };

  // ---- the summary ----
  const recipeOk = recipes.filter((r) => C.recipeWorks(r));
  const stationIds = [...new Set([...recipes.map((r) => r.station), ...Object.values(sprites).filter((d) => d.station).map((d) => d.station)])];
  const stationRecipes = (st) => recipes.filter((r) => r.station === st);
  const stationWorks = (st) => stationRecipes(st).some((r) => C.recipeWorks(r));
  const obtainable = items.filter((i) => C.has.has(i.id));
  const out = [];
  out.push(`<div class="chain-legend"><span>${chip("works", "works")} can be had in normal play</span><span>${chip("blocked", "blocked")} in the game, but cannot be had in normal play</span><span>${chip("planned", "planned")} in a design doc, not built yet</span><span>${chip("source", "src", { cls: "chip-source" })} where a thing comes from</span></div>`);
  out.push(`<div class="chain-stats"><div class="chain-stat"><b>${recipeOk.length} of ${recipes.length}</b> recipes can be made in normal play</div><div class="chain-stat"><b>${obtainable.length} of ${items.length}</b> items can be had</div><div class="chain-stat"><b>${stationIds.filter(stationWorks).length} of ${stationIds.length}</b> stations have a recipe that works</div><div class="chain-stat chain-stat-planned"><b>${PLANNED_STATIONS.filter((p) => p.station).length}</b> stations planned, not built</div></div>`);

  // ---- the chains ----
  out.push(`## The chains`);
  // A group's status: by the recipes its rows draw (every one its materials feed), or, with none, by its materials.
  const groupHtml = (title, rows, planned, recipesIn, materials) => {
    const ok = recipesIn.filter((r) => C.recipeWorks(r)).length;
    const had = materials.filter((m) => (m.startsWith("tag:") ? items.some((i) => (i.tags || []).includes(m.slice(4)) && C.has.has(i.id)) : C.has.has(m))).length;
    const [n, of] = recipesIn.length ? [ok, recipesIn.length] : [had, materials.length];
    const st = !rows.length ? "planned" : n === of ? "works" : n ? "part" : "blocked";
    const word = { works: "works", part: "works in part", blocked: "blocked", planned: "planned" }[st];
    const sub = !rows.length ? "nothing built yet" : recipesIn.length ? `${ok} of ${recipesIn.length} recipes it feeds can be made` : `${had} of ${materials.length} of its materials can be had`;
    return `### ${title}\n\n<div class="chain"><div class="chain-head">${chip(word, st === "part" ? "works" : st)}<span class="chain-sub">${sub}</span></div>${rows.join("")}${planned.join("")}</div>\n`;
  };
  for (const g of GROUPS) {
    drawn = new Set();
    const rows = g.materials.map(materialRow);
    out.push(groupHtml(g.title, rows, (PLANNED[g.key] || []).map(plannedRow), recipes.filter((r) => drawn.has(r)), g.materials));
  }
  const rest = recipes.filter((r) => !usedRecipes.has(r));
  if (rest.length) out.push(groupHtml("Other recipes", rest.map((r) => `<div class="chain-row">${(r.in || []).map((x) => (x.id ? itemChip(x.id, x.count) : chip(`any <em>${x.tag}</em>`, "works"))).join("")}${arrow}${via(stationLink(r.station))}${arrow}${outChip(r)}</div>`), [], rest, []));

  // ---- now what? ----
  out.push(`## Now what?\n\nThe dead ends in normal play today, worked out from the data. Each is a place where making things stops.\n`);
  const nw = [];
  for (const st of stationIds) {
    const rs = stationRecipes(st);
    if (!rs.length && st === "dyevat") continue; // the dye vat makes nothing: it dyes what you wear (game #417)
    if (!rs.length) { nw.push(`**The [[${STATION(st)}]] has no recipes.**`); continue; }
    if (!stationWorks(st)) {
      const reasons = [...new Set(rs.flatMap((r) => C.why(r)))];
      nw.push(`**${st === "cooking" ? "No [[Cooking|cooking]] recipe" : `No recipe at the [[${STATION(st)}]]`} can be made:** ${reasons.join("; ")}.`);
    }
  }
  const needed = new Set();
  for (const r of recipes) { for (const x of r.in || []) if (x.id) needed.add(x.id); if (r.tool) needed.add(r.tool); }
  for (const d of Object.values(sprites)) if (d.fire && d.fire.fuel) needed.add(d.fire.fuel);
  const fromNowhere = [...needed].filter((id) => byId.has(id) && !C.has.has(id) && !(C.how.get(id) || []).length && !recipes.some((r) => r.out.id === id) && !items.some((i) => i.splitsInto && i.splitsInto.id === id));
  if (fromNowhere.length) nw.push(`**Needed, but nothing gives them:** ${fromNowhere.map(itemName).join(", ")}. A recipe or a fire asks for each, and no source, loot table, or recipe in the game gives it.`);
  // A crop's food that is needed but not had, whose only way is a harvest whose seed cannot be had (game #206).
  const unsown = C.crops ? Object.entries(C.crops.crops).filter(([kind, c]) => needed.has(c.harvest.item) && !C.has.has(c.harvest.item) && !C.has.has(c.seed)) : [];
  if (unsown.length) nw.push(`**Grown, but no seed can be had:** ${unsown.map(([, c]) => `${itemName(c.harvest.item)} (${itemName(c.seed)})`).join(", ")}. [[Farming]] grows each, but nothing gives its seed and the map places none of its crop.`);
  const madeIdle = items.filter((i) => recipes.some((r) => r.out.id === i.id) && !C.isUsed(i));
  if (madeIdle.length) nw.push(`**Made, but nothing uses them yet:** ${madeIdle.map((i) => `[[${i.name}]]${i.verbs ? ` (${i.verbs.join(", ")}: not built)` : ""}`).join(", ")}.`);
  const verbIdle = items.filter((i) => C.verbIdle(i));
  if (verbIdle.length) nw.push(`**Tools whose own verbs are not built yet:** ${verbIdle.map((i) => `[[${i.name}]] (${i.verbs.join(", ")})`).join(", ")}. They can be swung as weapons, but not used for their work.`);
  // A collectible (`collectible: true`: the rugs and paintings, game #526) is found and kept, never made (the game's docs/02, 2026-10-27), so
  // it is never a dead end for having no recipe: it is left out of the dead ends and named on a line of its own while nothing gives it.
  const inDev = (i) => Object.entries(data.loot).some(([n, t]) => DEV.test(n) && [...(t.entries || []), ...(t.fixed || [])].some((e) => e.item === i.id));
  const devOnly = items.filter((i) => !i.collectible && !C.has.has(i.id) && inDev(i));
  if (devOnly.length) nw.push(`**Only in the [[Developer chest]]:** ${devOnly.map((i) => `[[${i.name}]]`).join(", ")}; no source in normal play gives them${devOnly.some((i) => i.bandage) ? ". Without a bandage nothing stops a bleed at once, though a wound left alone closes by itself in time (see [[Bleeding]])" : ""}.`);
  const unfound = items.filter((i) => i.collectible && !C.has.has(i.id));
  if (unfound.length) nw.push(`**Collectibles not yet found anywhere:** ${unfound.map((i) => `[[${i.name}]]`).join(", ")}. They are made to be found and kept, never made, so they are no dead end; but no place in normal play holds them yet${unfound.some(inDev) ? ` (${unfound.filter(inDev).map((i) => `[[${i.name}]]`).join(" and ")} ${unfound.filter(inDev).length > 1 ? "are" : "is"} in the [[Developer chest]])` : ""}.`);
  const gatherIdle = new Map();
  for (const id of C.world.all) {
    const d = sprites[id];
    if (d && d.interactable && !d.wood && !d.water && !d.container && !d.crop && !d.pick && !(d.fire && d.fire.burns) && !(d.mine && byId.has(d.mine.item)) && !(d.gather && byId.has(d.gather.item)) && !(d.dig && byId.has(d.dig.item)) && !d.sapling && !d.hive) {
      const label = /^crop_/.test(id) ? "Crops" : /^rock_/.test(id) ? "Rocks" : /^mushroom_/.test(id) ? "Mushrooms" : /^pumpkin/.test(id) ? "Pumpkins" : propTitle(id, d);
      gatherIdle.set(label, true);
    }
  }
  if (gatherIdle.size) nw.push(`**Gatherables that give nothing yet:** ${[...gatherIdle.keys()].map((l) => `[[${l}]]`).join(", ")}; a click sways them (see [[Gatherables]]).`);
  const rolled = new Set(C.tables.keys());
  const unrolled = Object.keys(data.loot).filter((n) => !rolled.has(n) && !DEV.test(n) && (data.loot[n].entries || []).length);
  if (unrolled.length) nw.push(`**Loot tables nothing rolls:** ${unrolled.map((n) => `\`${n}\``).join(", ")}; no container the map places and no wardrobe names ${unrolled.length > 1 ? "them" : "it"}.`);
  out.push(nw.map((l, i) => `${i + 1}. ${l}`).join("\n") + "\n");

  // ---- stations ----
  out.push(`## Stations\n`);
  const fireText = (st) => {
    if (st === "cooking") return "any lit fire that cooks";
    const d = Object.values(sprites).find((s) => s.station === st);
    return d && d.fire ? `its fire, burning ${d.fire.fuel ? itemName(d.fire.fuel) : "fuel"}` : "-";
  };
  const tools = (st) => [...new Set(stationRecipes(st).map((r) => r.tool).filter(Boolean))].map(itemName).join(", ");
  const carried = (st) => [...new Set(stationRecipes(st).map((r) => r.uses).filter(Boolean))].map((v) => C.toolsFor(v).map((x) => itemName(x.id)).join(" or ") || v).join(", "); // a carried tool by its verb (game #222)
  const srows = stationIds.map((st) => {
    const rs = stationRecipes(st);
    const ok = rs.filter((r) => C.recipeWorks(r)).length;
    const status = !rs.length && st === "dyevat" ? chip("dyes, makes nothing", "works") : !rs.length ? chip("no recipes", "blocked") : ok ? chip(ok === rs.length ? "works" : "works in part", "works") : chip("blocked", "blocked");
    return `| ${stationLink(st)} | ${fireText(st)} | ${tools(st) || "-"} | ${carried(st) || "-"} | ${ok} of ${rs.length} | ${status} |`;
  });
  for (const p of PLANNED_STATIONS) {
    plannedNote(p.doc, `${p.name}: ${p.note}`);
    srows.push(`| ${chip(escapeHtml(p.name), "planned")} | ${escapeHtml(p.fire)} | - | - | - | ${chip("not built yet", "planned")} ${p.station ? "" : `${escapeHtml(p.kind)}; `}${escapeHtml(p.home)} (docs/${escapeHtml(p.doc)}) |`);
  }
  out.push(`| Station | Fire | Tool in hand | Tool on you | Recipes that work | Status |\n|---|---|---|---|---|---|\n${srows.join("\n")}\n`);

  // ---- skills and the villagers ----
  out.push(`## Skills, and who might teach them\n\nNo skill is in the game yet. The game's decisions rule one skill per station family, off the battlefield (docs/02, 2026-10-13), and that every villager is immune to the dead, teachers and all (docs/02, 2026-10-28). Which villager teaches which skill is not ruled, but for the wizard; the villagers below are those whose work in the plan is at the skill's stations.\n`);
  const krows = SKILLS.map((k) => {
    plannedNote(k.doc, `The ${k.name.toLowerCase()} skill.`);
    for (const s of k.stations) if (!stationIds.includes(s)) throw new Error(`production chains: skill ${k.name} names station "${s}", which the data lacks`);
    for (const s of k.planned) if (!PLANNED_STATIONS.some((p) => p.name === s)) throw new Error(`production chains: skill ${k.name} names planned station "${s}", not in PLANNED_STATIONS`);
    const st = [...k.stations.map((s) => chip(stationLink(s), stationWorks(s) ? "works" : "blocked")), ...k.planned.map((s) => chip(escapeHtml(s), "planned"))].join(" ") || "-";
    return `| ${chip(escapeHtml(k.name), "planned")} | ${st} | ${k.workers.length ? k.workers.map((w) => chip(escapeHtml(w), "planned")).join(" ") : "none in the plan"} | docs/${escapeHtml(k.doc)} |`;
  });
  out.push(`| Skill | Its stations | Who works there in the plan | Planned in |\n|---|---|---|---|\n${krows.join("\n")}\n`);
  plannedNote("02, 2026-10-18", "Magic and potions, learned from the wizard.");
  out.push(`Magic and potions are not a skill: they are learned from a friendly wizard in the valley, the one villager ruled a teacher (docs/02, 2026-10-18). ${chip("Wizard", "planned")} teaches ${chip("Magic", "planned")} ${chip("Potions", "planned")}\n`);
  const vs = valley.villagers || [];
  const immuneCol = vs.some((v) => "immune" in v);
  const inRect = ([x, y], [rx, ry, rw, rh]) => x >= rx && y >= ry && x < rx + rw && y < ry + rh;
  const vrows = vs.map((v) => {
    const s = (valley.sets || []).find((q) => inRect(v.tile, q.rect));
    return `| ${chip(`[[${v.name}]]`, "works")} | ${s ? `[[${cap(s.name)}]]` : "the valley"} |${immuneCol ? ` ${v.immune !== false ? "Yes" : "No"} |` : ""}`;
  });
  for (const p of PLANNED_VILLAGERS) {
    if (vs.some((v) => v.name.toLowerCase() === p.name.toLowerCase())) throw new Error(`production chains: the villager "${p.name}" is placed now; take it out of PLANNED_VILLAGERS`);
    plannedNote(p.doc, `The ${p.name.toLowerCase()}, a villager.`);
    vrows.push(`| ${chip(escapeHtml(p.name), "planned")} | ${escapeHtml(p.home)} (docs/${escapeHtml(p.doc)}) |${immuneCol ? " - |" : ""}`);
  }
  out.push(`### The villagers\n\n${vs.length} live in the valley today, from the map's data${immuneCol ? "" : "; no villager has an immunity flag in the data yet"}. The plan adds the rest.\n\n| Villager | Home |${immuneCol ? " Immune to the dead |" : ""}\n|---|---|${immuneCol ? "---|" : ""}\n${vrows.join("\n")}\n`);

  // ---- food ----
  const foods = items.filter((i) => i.hunger || i.thirst || i.heal || i.kind === "food");
  out.push(`## Food\n\nWhat each food restores when eaten, from the items' data. Eating also adds a food's heal value to health${foods.some((i) => i.heal) ? "" : ", but no food has one yet"}.\n\n| | Food | | Hunger | Thirst | Heals |\n|---|---|---|---|---|---|\n${foods.map((i) => `| ${itemPicture(i)} | [[${i.name}]] | ${chip(C.has.has(i.id) ? "works" : "blocked", itemStatus(i.id))} | ${i.hunger ? `+${i.hunger}` : "-"} | ${i.thirst ? `+${i.thirst}` : "-"} | ${i.heal ? `+${i.heal}` : "-"} |`).join("\n")}\n`);

  // ---- art ----
  const drawnArt = items.filter((i) => i.icon && i.icon.src);
  const placeholder = items.filter((i) => !(i.icon && i.icon.src));
  const tile = (i) => `<span class="art-tile">${itemPicture(i)}<span>[[${i.name}]]</span></span>`;
  out.push(`## Item art\n\nEach item's bag picture: drawn art from its icon, or the coloured block the game draws until art arrives.\n\n### Drawn (${drawnArt.length})\n\n<div class="art-grid">${drawnArt.map(tile).join("")}</div>\n\n### Placeholder (${placeholder.length})\n\n<div class="art-grid">${placeholder.map(tile).join("")}</div>\n`);

  // ---- sources ----
  out.push(`## Sources\n\n- \`data/recipes.json\`: every recipe, its station, inputs, output, time, fire, and tool\n- \`data/items.json\`: the items, their tags, \`splitsInto\`, food values, tool verbs, and icons\n- \`data/loot.json\`: the loot tables\n- \`data/sprites\`: which props are stations, containers, fires (and their fuel), water, trees (\`wood\`), fruit trees (\`pick\`: \`src/fruit.js\`), and gatherables\n- \`data/maps/valley.json\`: what the map places and grows, its named waters, and its villagers\n- \`data/fishing.json\`: what each water catches (a rod in hand casts: \`src/fishing.js\`)\n- \`data/crops.json\`: each crop's harvest and seed (\`src/farming.js\`)\n- \`data/wardrobes.json\`: the dead's clothes and pockets\n- \`data/interactions.json\`: lighting a fire, and dipping arrows\n- \`data/build.json\`: what building costs\n${C.kit ? `- \`${C.kit.from}\`: the starter kit\n` : ""}${C.chop ? `- \`${C.chop.at}\`: felling a tree drops logs${C.chop.tool ? ", with a tool that chops in hand, and its stump its own \`wood\`" : ""}\n` : ""}- \`src/interact.js\` (\`waterActions\`, \`waterTileActions\`): drinking and filling at a prop with water and at a water tile\n- \`src/entities/player.js\` (\`eat\`): eating adds a food's hunger, thirst, and heal values\n- \`src/stations.js\`: a recipe needs its station's fire lit and its tool in hand\n- The game's \`docs/30-the-big-pass-spec.md\`, \`docs/29-world/\`, and \`docs/02-decisions.md\`: everything marked planned, each with its section\n`);
  return out.join("\n");
}
