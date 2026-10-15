---
title: Mushrooms
categories: [Gatherables, The world]
aliases: [Mushroom, Forage, Foraging]
summary: Small mushrooms that grow near trees, inside the valley and in the wild.
---

Small mushrooms grow on the grass near trees, both inside [[The valley]] and out in [[The wild]]. They are [[Gatherables]]: they sway when clicked and when anyone walks through them. They cannot be picked yet.

## Where they grow

A mushroom can grow on any plain grass tile within {{n valley.forage.near}} tiles of a tree, at a chance of {{n valley.forage.chance}} a tile. Inside the valley they grow only where nothing else has been laid: never on roads, floors, or in buildings. There are five looks, equally likely. Each sits a little off the middle of its tile so they do not line up in rows. The same mushrooms grow in the same places on every visit.

## What they do

Mushrooms do not block anyone: you, the dead, and villagers walk straight through them, and they sway as each one passes. A click within reach sways them too. They cannot be carried.

{{planned doc=30 step=4 note="Picking a mushroom."}}

## See also

- [[Gatherables]]
- [[Trees]]
- [[The wild]]

## Sources

<!-- sources at 9205ad7 -->
- `data/maps/valley.json:5597-5608`, `tools/mapgen/valley.py:399`: five kinds equally, the chance a tile, within 2 tiles of a tree
- `src/map.js:1783-1796`: inside the valley only on plain grass with nothing authored
- `src/map.js:301-310`: the offset in the tile, and the roll by tile and seed
- `data/sprites/mushroom_0.json`: `interactable: true`, `carry: false`
- `src/interact.js:1240-1272`, `src/game.js:505-519`: a click and anyone walking through sway them
