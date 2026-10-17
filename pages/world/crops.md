---
title: Crops
categories: [Gatherables, The world]
aliases: [Crop, Farm plot]
summary: The five crops as they stand in farm soil, each in three stages from young to ready, grown and harvested by farming.
---

Crops stand in furrowed farm soil, their rows following the furrows. They are [[Gatherables]]: you walk through them and they sway, and a click sways them too. They are planted from seed, grow on the clock while their soil is wet, and are harvested when ready; see [[Farming]].

## The crops

There are five crops, each drawn at three stages from young to ready:

- Cabbage (see [[Cabbage]])
- Garlic (see [[Garlic]])
- Potato (see [[Potato]])
- Pumpkin (see [[Pumpkin]])
- Rye

A crop's picture follows its stage as it grows. Its right-click menu says how long it has to go, offers Water, and offers Harvest once it is ready.

## Where they are

In [[The valley]], the only crops the map places are in the farm plot of [[Your cottage]]: potatoes and cabbages at the middle and last stages, so some are ready to harvest from the start. They are the only source of seeds today, so only potatoes and cabbages can be grown in play.

## What they do

Crops do not block anyone. You, the dead, and villagers walk through them, and each plant sways as someone passes, so a walk through a field sets it rippling. They cannot be picked up or carried, only harvested.

{{planned doc=30 note="Seeds for garlic, pumpkins, and rye, from the farms and the granaries (game issue 201)."}}

## See also

- [[Gatherables]]
- [[Your cottage]]
- [[Farming]], [[Hoe]]

## Sources

<!-- sources at 8e7538f -->
- `data/sprites/crop_cabbage_0.json` (and the other 14 `crop_*.json`): five crops at stages 0 to 2, `interactable`, `furrows`, `carry: false`, each naming its crop and stage
- `src/map.js:2202-2217`: a crop's rows follow its soil's furrows
- `src/farming.js:87-93`, `src/farming.js:253-274`, `src/interact.js:532-553`: the picture follows the stage; the menu's days, Water, and Harvest (game #206)
- `src/interact.js:1395-1427`, `src/game.js:607`, `src/game.js:616`, `src/game.js:621`: a click sways them, and players, the dead, and villagers brush through them
- `tools/mapgen/valley.py:190`, `tools/mapgen/mapgen.py:196-205`: the cottage plot, potatoes and cabbages at stages 1 and 2, placed `solid: false`
- `data/maps/valley.json:1347-1657`: the 36 crops, the valley's only ones
