---
title: Forge
categories: [Stations, Crafting]
summary: The station that smelts iron ore into iron bars; it burns charcoal.
---

{{infobox-station forge}}

The **forge** smelts [[Iron ore]] into [[Iron bar|iron bars]] for the [[Anvil]]. Its fire burns [[Charcoal]], not logs, and must be lit to work. Nothing in the valley gives charcoal or iron ore yet, so the forge starts cold and cannot be lit or used in play.

## Using it

Light it with charcoal and a flame, a [[Tinderbox]] or a lit [[Torch]] on you, and keep it fed (see [[Fire]]): it holds {{n sprites.forge.fire.maxFuel}} units and burns one every {{n sprites.forge.fire.hoursPerUnit}} game hours. Then open its panel from its menu or with `E` and pick a recipe (see [[Crafting]]). If the fire goes out during a job, the job waits until the fire is lit again. A forge's fire gives light but does not cook.

## Recipes

{{recipes forge}}

{{where forge}}

## With friends

A guest feeds the forge and makes bars through the host like any station; the fire and the queue are the same for every player.

## Sources

<!-- sources at 64cc711 -->
- `data/sprites/forge.json`: the forge burns charcoal, holds and burns its units, gives light, does not cook
- `data/recipes.json:247-262`: iron bar from iron ore, fire needed
- `data/loot.json`: nothing gives charcoal or ore
- `data/maps/valley.json`: the forge starts cold
- `src/interact.js:352-385`: lighting with a flame on you, and feeding (game #169)
- `src/interact.js:633-648`: the station's menu entry and `E`
- `src/stations.js:204-212`: a job waits while the fire is out
- `src/host.js:184-191`: a guest's Make runs on the host

{{navbox making}}
