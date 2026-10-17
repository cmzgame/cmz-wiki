---
title: Workbench
categories: [Stations, Crafting]
summary: The woodworker's station: sticks, torches, bows, arrows, shields, two tools, and furniture, from planks, sticks, and cloth.
---

{{infobox-station workbench}}

The **workbench** is the station for wood. From [[Plank|planks]], [[Stick|sticks]], and cloth it makes sticks, [[Torch|torches]], a [[Bow]] and [[Arrow|arrows]], a [[Shield]], a [[Hoe]] and a [[Shovel]], a [[Fishing rod]], and furniture. It needs no fire and no tool. Everything it takes can be had in play: planks come from splitting a [[Log]], sticks from planks, and cloth from a garment. The one exception is the wheelbarrow, which needs an [[Iron bar]].

## Using it

Right-click it and choose its entry, or press `E` beside it, and pick a recipe in the panel (see [[Crafting]]). Items go into the workbench's output box; furniture is placed on a free tile beside the workbench. A chest or a shelf made here is searched like any other the first time it is opened, and rolls the chest's loot (see [[Containers]]).

A workbench can be made at a workbench.

## Recipes

{{recipes workbench}}

{{where workbench}}

## With friends

A guest opens the workbench's panel on their own screen; Make is carried out by the host for that player, and the queue and the output box are shared.

## Sources

<!-- sources at 4be64f2 -->
- `data/sprites/workbench.json`: the workbench: a station with no fire
- `data/recipes.json:4-265`: the workbench's recipes, none with fire or tool
- `data/recipes.json:23-37`: sticks from a plank
- `data/items.json:4`: planks from a log
- `data/items.json:25-30`: cloth: the garments
- `data/recipes.json:248-265`: the wheelbarrow needs an iron bar
- `src/interact.js:682-699`: the station's menu entry and `E`
- `src/stations.js:168-204`: items to the output box, furniture beside the station
- `data/sprites/chest.json`: a made chest rolls the chest table (likewise shelf.json)
- `data/recipes.json:226-247`: a workbench made at a workbench
- `data/maps/valley.json`: where the workbenches stand
- `src/host.js:183-189`: a guest's Make runs on the host

{{navbox making}}
