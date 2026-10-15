---
title: Crops
categories: [Gatherables, The world]
aliases: [Crop, Farming, Farm plot]
summary: The five crops as they stand in farm soil, each in three stages; farming is not built yet.
---

Crops stand in furrowed farm soil, their rows following the furrows. They are [[Gatherables]]: you walk through them and they sway, and a click sways them too. They do not grow, ripen, or harvest yet.

## The crops

There are five crops, each drawn at three stages from young to ready:

- Cabbage (see [[Cabbage]])
- Garlic (see [[Garlic]])
- Potato (see [[Potato]])
- Pumpkin (see [[Pumpkin]])
- Rye

A crop's stage is fixed where the map puts it.

## Where they are

In [[The valley]], the only crops are in the farm plot of [[Your cottage]]: potatoes and cabbages at the middle and last stages.

## What they do

Crops do not block anyone. You, the dead, and villagers walk through them, and each plant sways as someone passes, so a walk through a field sets it rippling. They cannot be picked up or carried.

{{planned doc=30 step=4 note="Farming: tilling, planting, growth over the days, and harvesting crops for food."}}

## See also

- [[Gatherables]]
- [[Your cottage]]
- [[Hoe]]

## Sources

<!-- sources at 9205ad7 -->
- `data/sprites/crop_cabbage_0.json` (and the other 14 `crop_*.json`): five crops at stages 0 to 2, `interactable`, `furrows`, `carry: false`
- `src/map.js:1801-1817`: a crop's rows follow its soil's furrows
- `src/interact.js:1240-1272`, `src/game.js:505`, `src/game.js:514`, `src/game.js:519`: a click sways them, and players, the dead, and villagers brush through them
- `tools/mapgen/valley.py:185`, `tools/mapgen/mapgen.py:189-198`: the cottage plot, potatoes and cabbages at stages 1 and 2, placed `solid: false`
- `data/maps/valley.json:1300-1610`: the 36 crops, the valley's only ones
