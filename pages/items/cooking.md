---
title: Cooking
categories: [Stations, Crafting]
aliases: [Cook, Cook here]
summary: Any lit campfire, hearth, or fireplace is a station for cooking: roast potatoes, stew, and porridge.
---

{{infobox-station cooking}}

**Cooking** is done at any lit fire that cooks: a campfire, a hearth, or a fireplace. Its menu has **Cook here**, which opens the station panel with the cooking recipes. The [[Oven]] and the [[Forge]] do not offer them. The ingredients (potatoes, cabbages, garlic, grain) are not found anywhere in the valley yet, so nothing can be cooked in play.

## Using it

Light the fire and keep it fed (see [[Fire]]), then choose **Cook here** or press `E` beside it, and pick a recipe (see [[Crafting]]). What is cooked goes into the fire's output box. If the fire goes out during a job, the job waits until it is fed again.

{{planned doc=30 note="Harvesting the fields' crops, which would give the cooking recipes their ingredients."}}

## Recipes

{{recipes cooking}}

{{where fireplace}}

## With friends

A guest cooks through the host like any station; the fire and the queue are the same for every player.

## Sources

<!-- sources at 9205ad7 -->
- `data/sprites/campfire.json`: the campfire cooks
- `data/sprites/hearth.json`: the hearth cooks
- `data/sprites/fireplace.json:30-34`: the fireplace cooks
- `src/interact.js:622-639`: Cook here on a cooking fire's menu
- `src/stations.js:45-52`: the oven's own station wins; the forge does not cook
- `data/recipes.json:422-477`: the cooking recipes, each needing fire
- `data/loot.json`: no table gives potatoes, cabbages, garlic, or grain
- `src/interact.js:350-380`: lighting and feeding a fire
- `src/stations.js:168-191`: what is made goes to the output box
- `src/stations.js:193-205`: a job waits while the fire is out
- `data/maps/valley.json`: where the fireplaces are
- `src/host.js:161-167`: a guest's Make runs on the host

{{navbox making}}
