---
title: Mushrooms
categories: [Gatherables, The world]
aliases: [Mushroom, Forage, Foraging]
summary: Small mushrooms that grow near trees, inside the valley and in the wild.
---

Small mushrooms grow on the grass near trees, both inside [[The valley]] and out in [[The wild]]. They are [[Gatherables]]: they sway when clicked and when anyone walks through them. They cannot be picked yet.

## Where they grow

A mushroom can grow on any plain grass tile within {{n valley.forage.near}} tiles of a tree, at a chance of {{n valley.forage.chance}} a tile. Inside the valley they grow only where nothing else has been laid: never on roads, floors, or in buildings. There are five looks, equally likely. Each sits a little off the middle of its tile so they do not line up in rows. The same mushrooms grow in the same places on every visit.

A world made with the Trees [[World rules|world rule]] off has the same mushrooms in the same places as a world with trees: each grows where it would beside the trees that are not there, and never on a tile where one of those trees would have stood.

## What they do

Mushrooms do not block anyone: you, the dead, and villagers walk straight through them, and they sway as each one passes. A click within reach sways them too. They cannot be carried.

{{planned doc=30 step=4 note="Picking a mushroom."}}

## See also

- [[Gatherables]]
- [[Trees]]
- [[The wild]]

## Sources

<!-- sources at 9d9a5b5 -->
- `data/maps/valley.json:5558-5569`, `tools/mapgen/valley.py:405`: five kinds equally, the chance a tile, within 2 tiles of a tree
- `src/map.js:1949-1964`: inside the valley only on plain grass with nothing authored
- `src/map.js:326-338`: the roll by tile and seed, near a tree, and the offset in the tile
- `src/map.js:304-324`, `src/map.js:1931`, `src/map.js:332`: with Trees off, the trees that would have stood still count for the mushrooms near them, and no mushroom on such a tree's tile (game #149)
- `data/sprites/mushroom_0.json`: `interactable: true`, `carry: false`
- `src/interact.js:1226-1258`, `src/game.js:574-594`: a click and anyone walking through sway them
