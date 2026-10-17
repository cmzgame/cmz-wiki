---
title: Workbench
categories: [Stations, Crafting]
summary: The woodworker's station: sticks, torches, bows, arrows, shields, two tools, and furniture, from planks, sticks, and cloth.
---

{{infobox-station workbench}}

The **workbench** is the station for wood. From [[Plank|planks]], [[Stick|sticks]], and cloth it makes sticks, [[Torch|torches]], a [[Hunting bow]] and [[Arrow|arrows]], a [[Wooden shield]], a [[Hoe]] and a [[Shovel]], a [[Fishing rod]], a [[Bucket]], and furniture, and it tears a garment into [[Rag|rags]]. It needs no fire and no tool in hand, though tearing needs a [[Belt knife]] on you. Everything it takes can be had in play: planks come from splitting a [[Log]], sticks from planks, and cloth from the [[Loom]], a rag, or a garment. The one exception is the wheelbarrow, which needs an [[Iron bar]].

## Using it

Right-click it and choose its entry, or press `E` beside it, and pick a recipe in the panel (see [[Crafting]]). Items go into the workbench's output box; furniture is placed on a free tile beside the workbench. A chest or a shelf made here is searched like any other the first time it is opened, and rolls the chest's loot (see [[Containers]]).

A workbench can be made at a workbench.

## Recipes

{{recipes workbench}}

{{where workbench}}

## With friends

A guest opens the workbench's panel on their own screen; Make is carried out by the host for that player, and the queue and the output box are shared.

## Sources

<!-- sources at cfe0203 -->
- `data/sprites/workbench.json`: the workbench: a station with no fire
- `data/recipes.json:4-124`, `data/recipes.json:200-457`: the workbench's recipes, none with fire or a tool in hand; the tears with a knife on you (game #216); the bucket (game #211)
- `data/recipes.json:200-214`: sticks from a plank
- `data/items.json:4`: planks from a log
- `data/items.json:26-31`, `data/items.json:67-68`: cloth: the garments, linen cloth, and rags
- `data/recipes.json:440-457`: the wheelbarrow needs an iron bar
- `src/interact.js:772-789`: the station's menu entry and `E`
- `src/stations.js:173-209`: items to the output box, furniture beside the station
- `data/sprites/chest.json`: a made chest rolls the chest table (likewise shelf.json)
- `data/recipes.json:418-439`: a workbench made at a workbench
- `data/maps/valley.json`: where the workbenches stand
- `src/host.js:183-189`: a guest's Make runs on the host

{{navbox making}}
