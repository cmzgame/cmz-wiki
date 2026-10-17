// The Production chains page's two hand-kept tables (the rest of the page is computed from the game's data by
// lib/chains.js). Edit here, not in the computation.
//
// 1. GROUPS: how the built chains are grouped on the page. Each group names the materials whose rows it draws (an
//    item id, or "tag:cloth" for any item with the tag); a material's row is where it comes from and what it makes,
//    all read from the data. A recipe no group reaches is drawn under "Other recipes", so nothing built is ever left
//    off the page. An id the data no longer has fails the build.
//
// 2. PLANNED: what the game's design docs plan and the game has not built, drawn in the same chain rows with dashed
//    chips and a "not built yet" mark, each row citing its doc and section, each registered as a planned note
//    (Special:Planned notes) like every {{planned}} on the wiki. These rows hold no numbers, and must not: a planned
//    thing has none to read. Nodes:
//      { i: "iron_ore" }       an item the data has: drawn with its computed status (works or blocked)
//      { w: "rock_0", label }  a thing the world has (a sprite): drawn as built
//      { p: "Ore rocks" }      a planned thing, not in the data: dashed. The build fails if its name becomes an
//                              item's name, so a planned chip is turned into { i } the day the item lands.
//      { via: "..." }          the verb or station between two nodes (planned unless `built: true`)
//    `doc` is the doc and section as the planned notes cite them (docs/<doc>); `note` is one short line.
//    When a planned thing is built, its row here is deleted and the computed rows show it.

export const GROUPS = [
  { key: "wood", title: "Wood", materials: ["log", "plank", "stick"] },
  { key: "metal", title: "Metal and smithing", materials: ["iron_ore", "charcoal", "iron_bar"] },
  { key: "food", title: "Crops, food, fish, and water", materials: ["tag:seed", "potato", "cabbage", "garlic", "pumpkin", "grain", "flour", "apple", "perch", "trout", "carp", "bread", "cheese", "waterskin"] },
  { key: "cloth", title: "Cloth and leather", materials: ["tag:cloth"] },
  { key: "fire", title: "Fire and light", materials: ["tinderbox", "torch", "arrow"] },
  { key: "healing", title: "Healing, herbs, and magic", materials: ["bandage"] },
  { key: "stone", title: "Stone and straw", materials: [] },
];

export const PLANNED = {
  wood: [
    { nodes: [{ p: "The woodcutters' log and plank stacks" }, { via: "take" }, { i: "log" }, { i: "plank" }], doc: "29/06, The woodcutters; 30, section 4", note: "Stacks at the woodcutters' camp that give their material." },
  ],
  metal: [
    { nodes: [{ p: "Ore rocks" }, { p: "The mine's crate" }, { via: "mine, with a [[Pickaxe]]" }, { i: "iron_ore" }], doc: "30, section 10; 29/06, The iron workings", note: "Iron ore from the iron workings in the east woods." },
    { nodes: [{ p: "Charcoal clamps" }, { p: "The burners' sacks" }, { p: "The smithies' coal bins" }, { via: "take" }, { i: "charcoal" }], doc: "30, section 7; 29/06, The charcoal burners; 29/08, the resource table", note: "Charcoal from the charcoal burners; the clamp is a fire kind, and no doc gives charcoal a recipe." },
    { nodes: [{ p: "The smithy's bar rack" }, { p: "The armoury's broken gear" }, { via: "take" }, { i: "iron_bar" }], doc: "30, section 11, step 3; 29/08, the resource table", note: "Iron bars found ready-made before any ore is smelted." },
  ],
  food: [
    { nodes: [{ p: "The granaries, the storehouse, and the farms" }, { via: "take" }, { i: "garlic_seed" }, { i: "pumpkin_seed" }, { i: "rye_seed" }], doc: "30, section 8; game issue 201", note: "Seeds for the crops the valley does not grow yet." },
    { nodes: [{ p: "Rye and wheat fields" }, { via: "harvest a row, with a [[Scythe]]" }, { i: "grain" }], doc: "30, sections 8 and 10", note: "The scythe harvests grain a row at a swing." },
    { nodes: [{ i: "grain" }, { via: "Millstones, at the mill" }, { i: "flour" }], doc: "30, section 6; 30, section 11, step 4", note: "The millstones grind grain to flour." },
    { nodes: [{ w: "tree_apple", label: "Apple trees" }, { via: "pick", built: true }, { i: "apple" }, { via: "Cider press" }, { p: "Cider" }], doc: "30, section 6; 29/05, Hollow Farm (the orchard)", note: "Apples pressed to cider at the orchard's press." },
    { nodes: [{ via: "[[Oven]] or [[Cooking]]" }, { p: "Pie" }], doc: "30, section 6", note: "A pie at the oven and the cooking hearth; the doc names no ingredients." },
    { nodes: [{ p: "Hops" }, { p: "Ale" }], doc: "30, section 5.1; 29/05, the new crops", note: "Hops are the inn's crop and ale a planned drink; no doc names a station that brews it." },
    { nodes: [{ p: "New crops: turnip, wheat, beans, hops, flax, onion, carrot" }], doc: "30, section 8; 30, section 15", note: "New crops as they are drawn; which come first is an open question." },
    { nodes: [{ p: "Deer" }, { via: "hunt with the [[Bow]], butcher with a [[Knife]]" }, { p: "Raw meat" }, { via: "Smoking rack, at the hunter's lodge" }, { p: "Smoked meat" }], doc: "30, section 6; 30, section 11, step 8", note: "Deer and the smoking rack, with the animals, the last step." },
    { nodes: [{ p: "Chickens" }, { via: "collect from a nest" }, { p: "Eggs" }], doc: "30, section 4; 30, section 11, step 8", note: "Eggs from the nests daily; no doc gives eggs a recipe." },
  ],
  cloth: [
    { nodes: [{ p: "Flax" }, { via: "cut, with a [[Knife]]" }, { p: "Fibre" }, { p: "Thread" }, { via: "[[Loom]]" }, { p: "Cloth" }], doc: "30, sections 6 and 10; 29/05, Long Acre", note: "Flax from Long Acre to cloth at the loom; no doc says what spins fibre to thread." },
    { nodes: [{ p: "Wool" }, { via: "[[Loom]]" }, { p: "Cloth" }], doc: "30, section 6; 29/08, the resource table", note: "Wool to cloth; the plan's only wool is the croft's scraps, with no sheep." },
    { nodes: [{ p: "Cloth" }, { via: "[[Loom]]" }, { i: "bandage" }, { i: "tunic" }, { i: "breeches" }, { i: "cap" }], doc: "30, section 6", note: "The loom's first recipes: bandages and clothes from cloth." },
    { nodes: [{ i: "tunic" }, { p: "A dye plant" }, { via: "[[Dye vat]]" }, { p: "A dyed garment" }], doc: "30, section 6", note: "A garment and a dye plant to the dyed garment; no doc names a dye plant." },
    { nodes: [{ p: "Deer" }, { via: "skin, with a [[Knife]]; the tannery" }, { p: "Leather" }, { via: "[[Loom]]" }, { p: "Leather jerkin" }], doc: "30, section 11, step 8", note: "Leather and the tannery, with the animals; a leather jerkin at the loom." },
  ],
  fire: [
    { nodes: [{ p: "The chandler's candles" }, { p: "Lamp oil" }], doc: "29/08, the resource table; 30, section 7", note: "Candles and lamp oil, found in the plan, with no recipe." },
    { nodes: [{ i: "charcoal" }, { via: "fuel" }, { p: "Braziers" }], doc: "30, section 7; 29/03, item 5; 29/08, the resource table", note: "The castle's braziers burn charcoal." },
  ],
  healing: [
    { nodes: [{ p: "Herbs: sage, yarrow, feverfew, nettle" }, { p: "Mushrooms, picked" }, { via: "Cauldron, at the witch's" }, { p: "Herb tea" }, { p: "The cure" }], doc: "30, sections 3.4, 5.1, and 6", note: "The cauldron: a herb tea for stamina, and the cure with the mushrooms when infection is real." },
    { nodes: [{ p: "The wizard" }, { via: "teaches" }, { p: "Magic" }, { p: "Potions" }], doc: "02, 2026-10-18", note: "A friendly wizard in the valley teaches magic and potions; only potions heal big." },
  ],
  stone: [
    { nodes: [{ w: "rock_0", label: "Rocks" }, { via: "mine, with a [[Pickaxe]]" }, { p: "Stone blocks" }, { via: "build, with a [[Hammer]]" }, { p: "Stone walls" }], doc: "30, section 10", note: "Mining a rock for stone blocks; building stone walls asks for the hammer." },
    { nodes: [{ p: "The quarry's blocks" }, { p: "Rubble" }, { via: "take" }, { p: "Stone blocks" }], doc: "29/06, The quarry; 29/08, the resource table", note: "Stone from the quarry up the track from the weir." },
    { nodes: [{ p: "Hay" }, { via: "cut, with a [[Scythe]]" }, { p: "Straw" }], doc: "30, sections 5.1 and 10", note: "The scythe cuts hay; no doc gives straw a recipe." },
  ],
};

// Stations the docs plan and the game has not built (30, section 6's table: `station: true`), and two places the
// docs name beside them that are not stations (`kind` says what the docs make them; they are not counted).
// `fire` and `home` are the doc's words.
export const PLANNED_STATIONS = [
  { station: true, name: "Millstones", fire: "none", home: "the mill", doc: "30, section 6; 30, section 11, step 4", note: "Grain to flour." },
  { station: true, name: "Cauldron", fire: "its own, logs", home: "the witch", doc: "30, section 6; 30, section 11, step 6", note: "A herb tea, and the cure when infection is real." },
  { station: true, name: "Cider press", fire: "none", home: "the orchard", doc: "30, section 6", note: "Apples to cider." },
  { station: true, name: "Smoking rack", fire: "its own, logs", home: "the hunter", doc: "30, section 6; 30, section 11, step 8", note: "Raw meat to smoked, with the animals." },
  { name: "Tannery", kind: "a loot stop in 1.0 (29/04), back from the cut list with leather and the animals (30, step 8); no doc calls it a station or gives it a recipe", fire: "none", home: "downstream of the village", doc: "29/04, The tannery; 30, section 11, step 8", note: "A loot stop, and leather with the animals." },
  { name: "Charcoal clamp", kind: "a fire kind (30, section 7), not a station; no doc gives it a recipe", fire: "burns a day, smoke, no light", home: "the charcoal burners", doc: "30, section 7; 29/06, The charcoal burners", note: "A fire kind at the charcoal burners." },
];

// The skills (02, 2026-10-13: one per station family at most, off the battlefield; magic and potions are not one, but
// learned from the wizard, 02, 2026-10-18, which the page says below the table). The
// stations are the wiki's grouping by trade (the ruling names the families, not their stations): `stations` are
// station ids the data has, drawn with their computed status; `planned` are PLANNED_STATIONS names. `workers` are the
// planned cast's villagers whose job in 29/08 ("Who is alive") is at those stations: candidates, not ruled teachers.
// Only the wizard is ruled a teacher (02, 2026-10-18).
export const SKILLS = [
  { name: "Cooking", stations: ["cooking", "oven"], planned: ["Millstones", "Cider press", "Smoking rack"], workers: ["the innkeeper (the inn's taproom)", "the miller (the mill)"], doc: "02, 2026-10-13; 29/08, Who is alive" },
  { name: "Farming", stations: [], planned: [], workers: ["the miller (the granary)", "the shepherd (the croft)"], doc: "02, 2026-10-13; 29/08, Who is alive" },
  { name: "Healing", stations: [], planned: ["Cauldron"], workers: ["the witch (the cauldron, at the mere)"], doc: "02, 2026-10-13; 29/08, Who is alive" },
  { name: "Smithing", stations: ["forge", "anvil"], planned: [], workers: [], doc: "02, 2026-10-13; 29/08, Where the dead are (the smith is among the dead)" },
  { name: "Cloth and leather", stations: ["loom", "dyevat"], planned: [], workers: ["the shepherd (the fold)", "the hunter (the lodge)"], doc: "02, 2026-10-13; 29/08, Who is alive" },
];

// The villagers the plan adds (29/08, Who is alive; the wizard, 02, 2026-10-18), not yet in the map's data. A name
// here that the map's villagers gain fails the build, so this list shrinks as they are placed.
export const PLANNED_VILLAGERS = [
  { name: "Miller", home: "the mill", doc: "29/08, Who is alive" },
  { name: "Witch", home: "the mere", doc: "29/08, Who is alive" },
  { name: "Shepherd", home: "the croft", doc: "29/08, Who is alive" },
  { name: "Woodcutters", home: "the woodcutters' camp (two)", doc: "29/08, Who is alive" },
  { name: "Hunter", home: "the hunter's lodge", doc: "29/08, Who is alive" },
  { name: "Prisoner", home: "the bandits' cage", doc: "29/08, Who is alive" },
  { name: "Wizard", home: "the valley", doc: "02, 2026-10-18" },
];
