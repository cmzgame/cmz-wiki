---
title: Crops
categories: [Gatherables, The world]
aliases: [Crop, Farm plot]
summary: The six crops as they stand in farm soil, each in three stages from young to ready, grown and harvested by farming.
---

Crops stand in furrowed farm soil, their rows following the furrows. They are [[Gatherables]]: you walk through them and they sway, and a click sways them too. They are planted from seed, grow on the clock while their soil is wet, and are harvested when ready; see [[Farming]].

## The crops

There are six crops, each drawn at three stages from young to ready:

- Cabbage (see [[Cabbage]])
- Garlic (see [[Garlic]])
- Potato (see [[Potato]])
- Pumpkin (see [[Pumpkin]])
- Rye (its harvest is [[Grain]])
- Flax (see [[Flax]])

A crop's picture follows its stage as it grows. Its right-click menu says how long it has to go, offers Water, and offers Harvest once it is ready, with the crop's tool on you: a [[Scythe]] for rye, a [[Shovel]] for potatoes and garlic, a [[Belt knife]] for cabbages and pumpkins, none for flax (see [[Farming]]).

## Where they are

In [[The valley]], crops stand in the farm plot of [[Your cottage]] (potatoes and cabbages), the fields of [[Hollow Farm]] (pumpkins, potatoes, cabbages, and garlic), and those of [[Long Acre]] (rye, flax, and a kitchen garden), at mixed stages with many ready to harvest from the start. The farms' granaries hold seed of every crop, so every crop can be grown in play.

## What they do

Crops do not block anyone. You, the dead, and villagers walk through them, and each plant sways as someone passes, so a walk through a field sets it rippling. They cannot be picked up or carried, only harvested.



## See also

- [[Gatherables]]
- [[Your cottage]]
- [[Farming]], [[Hoe]]

## Sources

<!-- sources at 015eabc -->
- `data/sprites/crop_cabbage_0.json` (and the other `crop_*.json`): six crops at stages 0 to 2, `interactable`, `furrows`, `carry: false`, each naming its crop and stage
- `src/map.js:2231-2246`: a crop's rows follow its soil's furrows
- `src/farming.js:89-95`, `src/farming.js:298-319`, `src/interact.js:550-571`: the picture follows the stage; the menu's days, Water, and Harvest (game #206), greyed without the crop's tool (game #222)
- `data/crops.json`: each crop's harvest `tool` (game #222)
- `src/interact.js:1449-1481`, `src/game.js:640`, `src/game.js:649`, `src/game.js:654`: a click sways them, and players, the dead, and villagers brush through them
- `tools/mapgen/valley.py:191`, `tools/mapgen/mapgen.py:216-231`: the cottage plot, potatoes and cabbages at stages 1 and 2, placed `solid: false`
- `tools/mapgen/valley.py:455-506`: Hollow Farm's pumpkin, potato, cabbage, and garlic plots, and Long Acre's rye, flax, and kitchen garden, at mixed stages (game #219)
- `data/loot.json:9-10`: the granaries' seed of every crop
