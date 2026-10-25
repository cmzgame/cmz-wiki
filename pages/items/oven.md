---
title: Oven
categories: [Stations, Crafting]
summary: The baker's station: it bakes bread from flour, with its fire lit.
---

{{infobox-station oven}}

The **oven** bakes from [[Flour]], which the [[Millstones]] grind, and it cooks every recipe a fire cooks as well ([[Cooking]]): its panel lists its own recipes first, then the fire's. Its fire burns [[Log|logs]] and must be lit. The baker's oven in the valley starts lit.

## Using it

Keep its fire fed (see [[Fire]]); lighting it when it is out needs a [[Tinderbox]] or a lit [[Torch]] on you as well as a log. It holds {{n sprites.oven.fire.maxFuel}} logs and burns one every {{n sprites.oven.fire.hoursPerUnit}} game hours. Open its panel from its menu or with `E` and pick a recipe (see [[Crafting]]). If the fire goes out during a job, the job waits until the fire is lit again.

## Recipes

{{recipes oven}}

{{where oven}}

## With friends

A guest feeds the oven and bakes through the host like any station; the fire and the queue are the same for every player.

## Sources

<!-- sources at 64cc711 -->
- `data/sprites/oven.json`: the oven: a station whose fire burns logs, its most and hours a unit
- `data/recipes.json:478-493`: bread from flour, fire needed
- `data/maps/valley.json`: the baker's oven starts lit
- `data/loot.json`: no table gives flour
- `src/stations.js:45-52`: the oven's own station wins over cooking
- `src/interact.js:352-385`: lighting its fire with a flame on you, and feeding it (game #169)
- `src/interact.js:633-648`: the station's menu entry and `E`
- `src/stations.js:204-212`: a job waits while the fire is out
- `src/host.js:184-191`: a guest's Make runs on the host
- `src/stations.js:47-55`, `src/ui/station-panel.js`: the oven is two stations, its own and cooking, its panel both lists, its menu "Use the oven" (game #421, at 1bcb6ed)

{{navbox making}}
