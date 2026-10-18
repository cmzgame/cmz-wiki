---
title: Workbench
categories: [Stations, Crafting]
summary: The woodworker's station: sticks, torches, bows, arrows, shields, two tools, and furniture, from planks, sticks, and cloth.
---

{{infobox-station workbench}}

The **workbench** is the station for wood. From [[Plank|planks]], [[Stick|sticks]], and cloth it makes sticks, [[Torch|torches]], a [[Hunting bow]] and [[Arrow|arrows]], a [[Wooden shield]], a [[Hoe]] and a [[Shovel]], a [[Fishing rod]], a [[Bucket]], and furniture, and it tears a garment into [[Rag|rags]]. It needs no fire and no tool in hand, but most of its rows ask for a tool **on you**, anywhere you carry it (a hand, the belt, or the bag): a [[Smith's hammer]] for the furniture, the wheelbarrow, the shield, the hoe, the shovel, and the bucket; a [[Belt knife]] for the bow, the arrows, the rod, and tearing a garment; a [[Hatchet]] for sticks from a plank. Each row's Needs below names its tool, and the panel says "needs a ... on you". A torch needs none. The joiner's chest holds a hatchet and a hammer, and the weaver's a knife. Everything it takes can be had in play: planks come from splitting a [[Log]], sticks from planks, and cloth from the [[Loom]], a rag, or a garment. The one exception is the wheelbarrow, which needs an [[Iron bar]].

## Using it

Right-click it and choose its entry, or press `E` beside it, and pick a recipe in the panel (see [[Crafting]]). Items go into the workbench's output box; furniture is placed on a free tile beside the workbench. A chest or a shelf made here starts empty and already searched, so nothing is ever rolled into it (see [[Containers]]).

A workbench can be made at a workbench.

## Recipes

{{recipes workbench}}

{{where workbench}}

## With friends

A guest opens the workbench's panel on their own screen; Make is carried out by the host for that player, and the queue and the output box are shared.

## Sources

<!-- sources at 29a9f8e -->
- `data/sprites/workbench.json`: the workbench: a station with no fire
- `data/recipes.json:4-124`, `data/recipes.json:200-472`: the workbench's recipes, none with fire or a tool in hand; each but the torch with a carried tool by its verb, `uses`: `build` (a hammer), `cut` (a knife), `split` (a hatchet) (game #222)
- `src/stations.js:145-154`, `src/ui/station-panel.js:145`, `src/inventory.js:88-108`: a row's tool carried anywhere, "needs a ... on you"
- `data/loot.json:7`, `data/loot.json:11`: the joiner's hatchet and hammer, the weaver's knife
- `data/recipes.json:200-215`: sticks from a plank, with a hatchet
- `data/items.json:4`: planks from a log
- `data/items.json:26-31`, `data/items.json:67-68`: cloth: the garments, linen cloth, and rags
- `data/recipes.json:454-472`: the wheelbarrow needs an iron bar
- `src/interact.js:788-805`: the station's menu entry and `E`
- `src/stations.js:168-204`: items to the output box, furniture beside the station
- `src/stations.js:178-202`: a chest or shelf made here starts with its bag made, searched and empty
- `data/recipes.json:431-453`: a workbench made at a workbench
- `data/maps/valley.json`: where the workbenches stand
- `src/host.js:183-189`: a guest's Make runs on the host

{{navbox making}}
