---
title: Anvil
categories: [Stations, Crafting]
summary: The smith's station: tools and weapons from iron bars and sticks, with a hammer in hand.
---

{{infobox-station anvil}}

The **anvil** is the smith's station. From [[Iron bar|iron bars]] and [[Stick|sticks]] it makes the [[Smith's hammer]], the [[Dirk]], the [[Hatchet]], the [[Pickaxe]], the [[Scythe]], the [[Throwing spear]], the [[Flanged mace]], and the [[Arming sword]]. It needs no fire. Every recipe but the hammer's needs a hammer in hand. The chest in [[The smithy]] holds the first iron bars, and the quarryman's hut by [[The quarry]] a [[Smith's hammer]], so the anvil works from the first day; more bars are smelted at the [[Forge]] from mined [[Iron ore]].

## Using it

Right-click it and choose its entry, or press `E` beside it, and pick a recipe in the panel (see [[Crafting]]). Make the hammer first, then hold it while you make the rest ("Needs a smith's hammer in hand." otherwise). What it makes goes into the anvil's output box.

## Recipes

{{recipes anvil}}

{{where anvil}}

## With friends

A guest opens the anvil's panel on their own screen; Make is carried out by the host for that player, and the hammer must be in that player's hand.

## Sources

<!-- sources at 3c0a243 -->
- `src/stations.js:46-53`: which prop is which station
- `data/sprites/anvil.json`: the anvil is a station, not carried, with no fire
- `data/recipes.json:505-663`: the anvil's recipes: hammer, knife, hatchet, pickaxe, scythe, spear, mace, sword; every one but the hammer's has `tool: "hammer"`
- `data/loot.json:13`, `data/loot.json:16`: the quarryman's chest's hammer and the smithy's chest's iron bars (game #210)
- `src/interact.js:788-805`: the station's menu entry and `E`
- `src/stations.js:145-154`: the refusals, "Needs a smith's hammer in hand." among them
- `src/stations.js:168-204`: what is made goes to the output box
- `data/maps/valley.json`: where the anvil stands
- `src/ui/station-panel.js:71-84`: a guest's panel opens on its own screen
- `src/host.js:183-189`: a guest's Make runs on the host as the craft verb, for that player

{{navbox making}}
