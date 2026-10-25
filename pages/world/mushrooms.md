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

Mushrooms do not block anyone: you, the dead, villagers, and [[Animals|animals]] walk straight through them, and they sway as each one passes. A click within reach sways them too. They cannot be carried.

## Coming back

The valley keeps a count of {{n valley.resources.mushrooms.count}} mushrooms. A mushroom taken inside the valley is owed back: {{n tuning.resources.days.0}} to {{n tuning.resources.days.1}} game days later a new one appears, simply there, at a random spot elsewhere in the valley within {{n valley.resources.mushrooms.near}} tiles of a tree, on plain grass with nothing on it, never inside a room or a fenced yard and never under anyone. In a world made with Trees off, the trees that would have stood count. Nothing takes a mushroom yet, so none has come back in play.

{{planned doc=46 step=2 note="Foraging a mushroom, at Herbalism 3 once the skills are built; until then no one will be refused."}}

## With friends

The mushrooms still owed will be the host's, saved with the world; a new one reaches every player with its part of the map.

## See also

- [[Gatherables]]
- [[Trees]]
- [[The wild]]

## Sources

<!-- sources at 261cd7a -->
- `data/maps/valley.json` `forage`, `tools/mapgen/valley.py`: five kinds equally, the chance a tile, within 2 tiles of a tree
- `src/map.js:2529-2543`: inside the valley only on plain grass with nothing authored
- `src/map.js:507-519`: the roll by tile and seed, near a tree, and the offset in the tile
- `src/map.js:48-49`, `src/map.js:489-493`, `src/map.js:513`: with Trees off, the trees that would have stood still count for the mushrooms near them, and no mushroom on such a tree's tile (game #149)
- `data/sprites/mushroom_0.json`: `interactable: true`, `carry: false`
- `src/interact.js:1694-1761`, `src/game.js:666-696`: a click and anyone walking through sway them
- `data/maps/valley.json` `resources.mushrooms`, `src/map.js:612-636`, `src/resources.js:33-87`, `data/tuning.json` `resources`: the valley's count, near trees, owed back after its days at a free spot elsewhere, simply appearing; nothing calls the take yet (game #453)
