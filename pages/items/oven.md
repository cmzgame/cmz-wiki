---
title: Oven
categories: [Stations, Crafting]
summary: The baker's station: it bakes bread from flour, with its fire lit.
---

{{infobox-station oven}}

The **oven** bakes a [[Loaf of bread]] from [[Flour]]. Its fire burns [[Log|logs]] and must be lit. The baker's oven in the valley starts lit. Nothing in the valley gives flour yet, so the oven's one recipe cannot be made in play. The cooking recipes ([[Cooking]]) are not offered at the oven, only its own.

## Using it

Keep its fire fed (see [[Fire]]): it holds {{n sprites.oven.fire.maxFuel}} logs and burns one every {{n sprites.oven.fire.hoursPerUnit}} game hours. Open its panel from its menu or with `E` and pick a recipe (see [[Crafting]]). If the fire goes out during a job, the job waits until the fire is fed again.

## Recipes

{{recipes oven}}

{{where oven}}

## With friends

A guest feeds the oven and bakes through the host like any station; the fire and the queue are the same for every player.

## Sources

<!-- sources at 9205ad7 -->
- `data/sprites/oven.json`: the oven: a station whose fire burns logs, its most and hours a unit
- `data/recipes.json:478-493`: bread from flour, fire needed
- `data/maps/valley.json`: the baker's oven starts lit
- `data/loot.json`: no table gives flour
- `src/stations.js:45-52`: the oven's own station wins over cooking
- `src/interact.js:350-380`: feeding its fire
- `src/interact.js:622-639`: the station's menu entry and `E`
- `src/stations.js:193-205`: a job waits while the fire is out
- `src/host.js:161-167`: a guest's Make runs on the host

{{navbox making}}
