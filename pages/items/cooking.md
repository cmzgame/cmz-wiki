---
title: Cooking
categories: [Stations, Crafting]
aliases: [Cook, Cook here]
summary: Any lit campfire, hearth, or fireplace, and the oven, is a station for cooking: roast potatoes, stew, porridge, and grilled fish.
---

{{infobox-station cooking}}

**Cooking** is done at any lit fire that cooks: a [[Campfire]], a hearth, a fireplace, or the [[Oven]]. A campfire's, a hearth's, or a fireplace's menu has **Cook here**, which opens the station panel with the cooking recipes; the oven's panel lists its own recipes and then these. The [[Forge]] does not offer them. Fish can be cooked: a [[Perch]], a [[Trout]], or a [[Carp]] caught by [[Fishing]] grills into its grilled kind. A [[Potato]] grown by [[Farming]] roasts, and every cooking recipe's ingredients can be grown: garlic for the stew, rye's grain for the porridge.

## Using it

Light the fire, and keep a campfire or the oven fed (a hearth or a fireplace burns nothing; see [[Fire]]), then choose **Cook here** or press `E` beside it, and pick a recipe (see [[Crafting]]). What is cooked goes into the fire's output box. If the fire goes out during a job, the job waits until it is fed again.



## Recipes

{{recipes cooking}}

{{where fireplace}}

## With friends

A guest cooks through the host like any station; the fire and the queue are the same for every player.

## Sources

<!-- sources at 3c0a243 -->
- `data/sprites/campfire.json`: the campfire cooks
- `data/sprites/hearth.json`: the hearth cooks
- `data/sprites/fireplace.json:30-34`: the fireplace cooks
- `src/interact.js:788-805`: Cook here on a cooking fire's menu
- `src/stations.js:46-53`: the oven's own station wins; the forge does not cook
- `data/recipes.json:664-767`: the cooking recipes, each needing fire, the grilled fish among them (game #193)
- `data/fishing.json`: the fish caught at the waters
- `data/loot.json`: no table gives potatoes, cabbages, garlic, or grain
- `src/farming.js:233-259`, `data/loot.json:9-10`: crops harvested (game #206); the granaries' seed of every crop (game #219)
- `src/interact.js:361-394`: lighting and feeding a fire
- `src/stations.js:168-204`: what is made goes to the output box
- `src/stations.js:205-225`: a job waits while the fire is out
- `data/maps/valley.json`: where the fireplaces are
- `src/host.js:183-189`: a guest's Make runs on the host
- `src/stations.js:47-55`, `src/ui/station-panel.js`: a prop's stations as a list, the oven its own and cooking, its panel both lists (game #421, at 1bcb6ed)

{{navbox making}}
