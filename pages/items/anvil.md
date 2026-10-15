---
title: Anvil
categories: [Stations, Crafting]
summary: The smith's station: tools and weapons from iron bars and sticks, with a hammer in hand.
---

{{infobox-station anvil}}

The **anvil** is the smith's station. From [[Iron bar|iron bars]] and [[Stick|sticks]] it makes the [[Hammer]], the [[Knife]], the [[Hatchet]], the [[Pickaxe]], the [[Scythe]], the [[Throwing spear]], the [[Mace]], and the [[Sword]]. It needs no fire. Every recipe but the hammer's needs a hammer in hand. Nothing in the valley gives iron bars yet, so the anvil cannot be used in play.

## Using it

Right-click it and choose its entry, or press `E` beside it, and pick a recipe in the panel (see [[Crafting]]). Make the hammer first, then hold it while you make the rest ("Needs a hammer in hand." otherwise). What it makes goes into the anvil's output box.

## Recipes

{{recipes anvil}}

{{where anvil}}

## With friends

A guest opens the anvil's panel on their own screen; Make is carried out by the host for that player, and the hammer must be in that player's hand.

## Sources

<!-- sources at 9205ad7 -->
- `src/stations.js:45-52`: which prop is which station
- `data/sprites/anvil.json`: the anvil is a station, not carried, with no fire
- `data/recipes.json:263-421`: the anvil's recipes: hammer, knife, hatchet, pickaxe, scythe, spear, mace, sword; every one but the hammer's has `tool: "hammer"`
- `data/loot.json`: no loot table holds iron bars
- `src/interact.js:622-639`: the station's menu entry and `E`
- `src/stations.js:146-154`: the refusals, "Needs a hammer in hand." among them
- `src/stations.js:168-191`: what is made goes to the output box
- `data/maps/valley.json`: where the anvil stands
- `src/ui/station-panel.js:60-73`: a guest's panel opens on its own screen
- `src/host.js:161-167`: a guest's Make runs on the host as the craft verb, for that player

{{navbox making}}
