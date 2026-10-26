---
title: Forge
categories: [Stations, Crafting]
summary: The station that smelts iron ore into iron bars; it burns charcoal.
---

{{infobox-station forge}}

The **forge** smelts [[Iron ore]] into [[Iron bar|iron bars]] for the [[Anvil]]. Its fire burns [[Charcoal]], not logs, and must be lit to work. The forge starts cold. The chest beside it in [[The smithy]] holds the first charcoal and iron bars; more charcoal is burned from logs in a [[Charcoal clamp]], one of which stands in the smithy's yard, and iron ore is mined at [[The iron workings]] (see [[Mining]]).

## Using it

Light it with charcoal and a flame, a [[Tinderbox]] or a lit [[Torch]] on you, and keep it fed (see [[Fire]]): it holds {{n sprites.forge.fire.maxFuel}} units and burns one every {{n sprites.forge.fire.hoursPerUnit}} game hours. Then open its panel from its menu or with `E` and pick a recipe (see [[Crafting]]). If the fire goes out during a job, the job waits until the fire is lit again. A forge's fire gives light but does not cook.

## Recipes

{{recipes forge}}

{{where forge}}

## Village stations

The village's forge stays where it stands, and none is made, unless the world was made with the rule **Village stations** set to Movable and craftable (see [[World rules]]). Then it can be picked up and carried like furniture, and another forge at the [[Workbench]]; one a player made works as the village's does. One a player made can be taken apart (see [[Building#Taking apart|Building]]), but not while it is lit: "Let it burn down first.", since its fire cannot be put out.

## With friends

A guest feeds the forge and makes bars through the host like any station; the fire and the queue are the same for every player.

## Sources

<!-- sources at 3c0a243 -->
- `src/placement.js:611-622`, `src/map.js:336-341` (at 5eb40e6): a lit forge's Take apart says "Let it burn down first." (game #501)
- `data/sprites/forge.json`: the forge burns charcoal, holds and burns its units, gives light, does not cook
- `data/recipes.json:489-504`: iron bar from iron ore, fire needed
- `data/loot.json:12`, `data/loot.json:14`, `data/loot.json:16-17`: charcoal and ore in the smithy's chest, the burners', the miners', and the ore cart (game #210)
- `data/recipes.json:473-488`, `src/mining.js:42-55`: charcoal from a clamp, ore mined
- `data/maps/valley.json`: the forge starts cold
- `src/interact.js:361-394`: lighting with a flame on you, and feeding (game #169)
- `src/interact.js:788-803`: the station's menu entry and `E`
- `src/stations.js:204-212`: a job waits while the fire is out
- `src/host.js:184-191`: a guest's Make runs on the host
- `data/sprites/forge.json`, `data/recipes.json`, `src/placement.js:105-117`: the village's forge fixed unless Village stations moves it; its recipe behind the rule (game #431, at 49b8c44)

{{navbox making}}
