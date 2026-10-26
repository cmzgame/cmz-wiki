---
title: Loom
categories: [Stations, Crafting]
aliases: [Looms, Weaving]
summary: The weaver's station: flax into linen cloth, yarn into woollen cloth, and cloth into bandages, linen clothes, and the linen satchel.
---

{{infobox-station loom}}

The **loom** stands in [[The weaver]]'s workroom. It weaves [[Flax]] into [[Linen cloth]] and [[Woollen yarn]], spun at the [[Spinning wheel]] beside it, into [[Woollen cloth]], and makes the linen into [[Bandage|bandages]], the [[Linen cap]], the [[Linen breeches]], the [[Linen tunic]], and the [[Linen satchel]], a bag bigger than the sack. It needs no fire and no tool. The weaver's chest and the farms' granaries hold flax seed, and [[Long Acre]] grows flax from the start, so a whole run, from seed to cloth, can be had in play (see [[Farming]]). Woollen cloth serves any recipe that takes any cloth (a torch, a bow, a bed), but the loom's own linen recipes take linen cloth alone.

## Using it

Right-click it and choose its entry, or press `E` beside it, and pick a recipe in the panel (see [[Crafting]]). What it makes goes into the loom's output box.

## Recipes

{{recipes loom}}

{{where loom}}

## With friends

A guest opens the loom's panel on their own screen; Make is carried out by the host for that player.

## Sources

<!-- sources at 3c0a243 -->
- `data/sprites/loom.json`: the loom, a station with no fire
- `data/recipes.json:125-199`: the loom's recipes: cloth from flax; bandages, a cap, breeches, and a tunic from cloth (game #216)
- `tools/mapgen/valley.py:360`: the loom in the weaver's workroom, and the chest's flax seed
- `src/interact.js:788-803`, `src/stations.js:145-202`: the station's entry and `E`; Make and the output box
- `data/recipes.json` `weave_satchel`: the linen satchel woven from cloth (game #403, at 6e5b20a)
- `data/recipes.json:215-230`: yarn woven to woollen cloth (game #462, at d625844)

{{navbox making}}
