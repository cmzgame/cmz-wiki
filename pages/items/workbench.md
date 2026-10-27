---
title: Workbench
categories: [Stations, Crafting]
summary: The woodworker's station: sticks, torches, bows, arrows, shields, tools, furniture, the smoking rack and the tanning vat, and butter.
---

{{infobox-station workbench}}

The **workbench** is the station for wood. From [[Plank|planks]], [[Stick|sticks]], and cloth it makes sticks, [[Torch|torches]], a [[Hunting bow]] and [[Arrow|arrows]] (fletched with a [[Feather]]), a [[Wooden shield]], a [[Hoe]] and a [[Shovel]], a [[Fishing rod]], a [[Bucket]], a [[Snare]] and a [[Lead]], furniture, and two stations of your own, the [[Smoking rack]] and the [[Tanning vat]]; it tears a garment into [[Rag|rags]], churns a [[Jug of milk]] into [[Butter]], and shapes [[Clay]] into [[Unfired vial|unfired vials]] for [[Potions]]. It needs no fire and no tool in hand, but most of its rows ask for a tool **on you**, anywhere you carry it (a hand, the belt, or the bag): a [[Smith's hammer]] for the furniture, the wheelbarrow, the shield, the hoe, the shovel, and the bucket; a [[Dirk]] for the bow, the arrows, the rod, and tearing a garment; a [[Hatchet]] for sticks from a plank. Each row's Needs below names its tool, and the panel says "needs a ... on you". A torch needs none. The joiner's chest holds a hatchet and a hammer, and the weaver's a knife. Everything it takes can be had in play: planks come from splitting a [[Log]], sticks from planks, and cloth from the [[Loom]], a rag, or a garment. The one exception is the wheelbarrow, which needs an [[Iron bar]].

## Using it

The workbench is a long, heavy plank bench across **two tiles**, as the table is, on four stout legs with a shelf below, a leg vice at one end, chisels racked along its back, and a saw, a plane, and a mallet on its top. It stands either way round, its worker's side to the front. The two in the valley each take two tiles: the joiner's in [[The joiner]]'s workshop, and the chandler's along the west wall of the lean-to at [[The chandler's house]], its front to the room. It cannot be carried.

Right-click it and choose its entry, or press `E` beside it, and pick a recipe in the panel (see [[Crafting]]). Items go into the workbench's output box. Furniture and the two stations are set down on the nearest free tiles a body could walk to from the bench, never past a wall or a shut door, every tile of the thing free and none beside a door; with no such spot the recipe is refused before anything is spent, "There is no room beside it for a counter." (see [[Crafting#The output|Crafting]]). The chandler's lean-to is too full for a counter, so a counter is refused there; the joiner's has room. A chest, a shelf, or any other container made here starts empty and already searched, so nothing is ever rolled into it (see [[Containers]]). A [[Torch post]] and a [[Campfire]] are made here as items, each set down outdoors from the bag (the output box is big enough to take the campfire's item); a [[Jack-o'-lantern]] is carved from a [[Pumpkin]] with a [[Dirk]] on you.

A workbench can be made at a workbench. It needs two free tiles side by side near the bench, as any two-tile furniture does, and is set down along them.

## Recipes

{{recipes workbench}}

{{where workbench}}

## With friends

A guest opens the workbench's panel on their own screen; Make is carried out by the host for that player, and the queue and the output box are shared.

## Sources

<!-- sources at 879d0a7 -->
- `data/recipes.json:789-808`, `src/stations.js:26`: the campfire made here as an item, the output box 3 by 3 (game #527, at c3cb736)
- `data/sprites/workbench.json`: the workbench: a station with no fire, not carried; drawn in art round 5 across two tiles, `facingFootprint` 1 by 2 as drawn and 2 by 1 as its mirror, as the table (game #519, at ece297c)
- `tools/mapgen/valley.py:150`, `tools/mapgen/valley.py:356`: the chandler's bench on two tiles along the lean-to's west wall, the joiner's on two tiles (game #519, at ece297c)
- `data/recipes.json:4-124`, `data/recipes.json:231-782`: the workbench's recipes, none with fire or a tool in hand; each but the torch with a carried tool by its verb, `uses`: `build` (a hammer), `cut` (a knife), `split` (a hatchet) (game #222)
- `src/stations.js:170-181`, `src/ui/station-panel.js:153`, `src/inventory.js:94-112`: a row's tool carried anywhere, "needs a ... on you"
- `data/loot.json:9`, `data/loot.json:13`: the joiner's hatchet and hammer, the weaver's knife
- `data/recipes.json:231-246`: sticks from a plank, with a hatchet
- `data/items.json:4`: planks from a log
- `data/items.json:27-32`, `data/items.json:106-107`: cloth: the garments, linen cloth, and rags
- `data/recipes.json:584-602`: the wheelbarrow needs an iron bar
- `src/interact.js:1068-1085`: the station's menu entry and `E`
- `src/stations.js:294-324`: items to the output box; a chest or shelf made here starts with its bag made, searched and empty
- `src/stations.js:210-276`: a made prop on the nearest free tiles a body could walk to, its whole footprint free; refused before anything is spent with no such spot (game #466)
- `tools/mapgen/valley.py:140-151`, `tools/mapgen/valley.py:352`: the chandler's workbench in its lean-to, the joiner's in the workshop; the lean-to too full for a counter (Primary's pane run on game #466)
- `data/recipes.json:327-441`: the arrows fletched with a feather, the snare, the lead, butter, the smoking rack, and the tanning vat (game #462)
- `data/recipes.json:567-585`, `src/map.js:2418-2428`: a workbench made at a workbench, its footprint two tiles, its facing the one that fits them
- `data/maps/valley.json`: where the workbenches stand
- `src/host.js:185-192`: a guest's Make runs on the host
- `data/recipes.json`: the workbench's furniture, the barrel, the jack-o'-lantern, the torch post as an item (game #428)
- `data/recipes.json:1611-1626`: one clay into two unfired vials, no tool (game #491, at 0fa02e5)

{{navbox making}}
