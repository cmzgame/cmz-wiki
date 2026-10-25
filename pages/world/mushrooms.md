---
title: Mushrooms
categories: [Gatherables, The world]
aliases: [Forage, Foraging, Forage mushroom]
summary: Small mushrooms that grow near trees, inside the valley and in the wild; foraged by hand for a mushroom, and in the valley another grows elsewhere a game day or two later.
---

Small mushrooms grow on the grass near trees, both inside [[The valley]] and out in [[The wild]]. They are [[Gatherables]]: they sway when clicked and when anyone walks through them, and each can be foraged by hand for a [[Mushroom]].

## Where they grow

A mushroom can grow on any plain grass tile within {{n valley.forage.near}} tiles of a tree, at a chance of {{n valley.forage.chance}} a tile. Inside the valley they grow only where nothing else has been laid: never on roads, floors, or in buildings. There are five looks, equally likely. Each sits a little off the middle of its tile so they do not line up in rows. The same mushrooms grow in the same places on every visit.

A world made with the Trees [[World rules|world rule]] off has the same mushrooms in the same places as a world with trees: each grows where it would beside the trees that are not there, and never on a tile where one of those trees would have stood.

## What they do

Mushrooms do not block anyone: you, the dead, villagers, and [[Animals|animals]] walk straight through them, and they sway as each one passes. A click within reach sways them too. They cannot be carried.

## Foraging

Right-click a mushroom and choose **Forage mushroom**, or press `E` beside it, within {{n tuning.world.pickReach tiles}} with no wall in the way. It takes {{n sprites.mushroom_0.gather.seconds seconds}} and gives {{n sprites.mushroom_0.gather.count.0}} [[Mushroom]], into the bag, or at your feet when the bag is full; the mushroom on the ground is then gone. No tool is needed. All five looks give the same mushroom. A small Herbalism number floats up over you as you forage. The game's data records Herbalism {{n sprites.mushroom_0.gather.level}} for foraging; the skills are not built, so no one is refused. Nothing uses a mushroom yet.

## Coming back

The valley keeps a count of {{n valley.resources.mushrooms.count}} mushrooms. A mushroom taken inside the valley is owed back: {{n tuning.resources.days.0}} to {{n tuning.resources.days.1}} game days later a new one appears, simply there, at a random spot elsewhere in the valley within {{n valley.resources.mushrooms.near}} tiles of a tree, on plain grass with nothing on it, never inside a room or a fenced yard and never under anyone. In a world made with Trees off, the trees that would have stood count. A mushroom foraged in the wild, past the valley's edge, is not owed back.

## With friends

A guest forages through the same menu entry, sent to the host with the mushroom's id; the mushroom goes into the guest's bag, and the one on the ground goes for every player with its part of the map. The mushrooms still owed are the host's, saved with the world; a new one reaches every player with its part of the map.

## See also

- [[Mushroom]], the item
- [[Gatherables]], [[Herbs]]
- [[Trees]]
- [[The wild]]

## Sources

<!-- sources at 6e3ab37 -->
- `data/maps/valley.json` `forage`, `tools/mapgen/valley.py`: five kinds equally, the chance a tile, within 2 tiles of a tree
- `src/map.js:2529-2543`: inside the valley only on plain grass with nothing authored
- `src/map.js:507-519`: the roll by tile and seed, near a tree, and the offset in the tile
- `src/map.js:48-49`, `src/map.js:489-493`, `src/map.js:513`: with Trees off, the trees that would have stood still count for the mushrooms near them, and no mushroom on such a tree's tile (game #149)
- `data/sprites/mushroom_0.json` (and `mushroom_1` to `mushroom_4`): `interactable: true`, `carry: false`; the `gather` block (the mushroom, its count, seconds, level, the word "Forage") (game #457)
- `src/gather.js:41-85`, `src/gather.js:92-119`, `src/interact.js:994`, `src/interact.js:1149-1171`: Forage mushroom, its reach, the bag or the feet, the mushroom gone and owed back; `E` runs it
- `src/interact.js:1694-1761`, `src/game.js:666-696`: a click and anyone walking through sway them
- `data/maps/valley.json` `resources.mushrooms`, `src/map.js:619-653`, `src/resources.js:36-90`, `data/tuning.json` `resources`: the valley's count, near trees, owed back after its days at a free spot elsewhere, simply appearing; inside the valley only (games #453, #457)
