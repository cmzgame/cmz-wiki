---
title: Cooking
categories: [Stations, Crafting]
aliases: [Cook, Cook here]
summary: Any lit campfire, hearth, or fireplace is a station for cooking: roast potatoes, stew, and porridge.
---

{{infobox-station cooking}}

**Cooking** is done at any lit fire that cooks: a campfire, a hearth, or a fireplace. Its menu has **Cook here**, which opens the station panel with the cooking recipes. The [[Oven]] and the [[Forge]] do not offer them. Fish can be cooked: a [[Perch]], a [[Trout]], or a [[Carp]] caught by [[Fishing]] grills into its grilled kind. A [[Potato]] grown by [[Farming]] roasts. The stew also needs garlic and the porridge grain, which cannot be had in play yet, so those two cannot be made.

## Using it

Light the fire and keep it fed (see [[Fire]]), then choose **Cook here** or press `E` beside it, and pick a recipe (see [[Crafting]]). What is cooked goes into the fire's output box. If the fire goes out during a job, the job waits until it is fed again.

{{planned doc=30 note="Seeds for garlic and rye, which would give the stew and the porridge their ingredients (game issue 201)."}}

## Recipes

{{recipes cooking}}

{{where fireplace}}

## With friends

A guest cooks through the host like any station; the fire and the queue are the same for every player.

## Sources

<!-- sources at 8e7538f -->
- `data/sprites/campfire.json`: the campfire cooks
- `data/sprites/hearth.json`: the hearth cooks
- `data/sprites/fireplace.json:30-34`: the fireplace cooks
- `src/interact.js:741-758`: Cook here on a cooking fire's menu
- `src/stations.js:45-52`: the oven's own station wins; the forge does not cook
- `data/recipes.json:441-544`: the cooking recipes, each needing fire, the grilled fish among them (game #193)
- `data/fishing.json`: the fish caught at the waters
- `data/loot.json`: no table gives potatoes, cabbages, garlic, or grain
- `src/farming.js:227-251`: potatoes and cabbages harvested (game #206); nothing gives garlic or rye seed
- `src/interact.js:358-391`: lighting and feeding a fire
- `src/stations.js:168-204`: what is made goes to the output box
- `src/stations.js:205-225`: a job waits while the fire is out
- `data/maps/valley.json`: where the fireplaces are
- `src/host.js:183-189`: a guest's Make runs on the host

{{navbox making}}
