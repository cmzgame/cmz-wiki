---
title: Potato seed
categories: [Items, Materials, Farming]
summary: A seed planted in tilled soil to grow potato; it can be had in play.
---

{{infobox-item potato_seed}}

A **potato seed** is planted in tilled soil to grow potato (see [[Farming]]). Its harvest gives [[Potato]] and {{n crops.crops.potato.seeds}} potato seeds back. It stacks to {{n items.potato_seed.stack}}. It can be had in play: harvesting a potato gives two back, and the plot by [[Your cottage]] has potatoes from the start.

{{item-sections potato_seed}}

## Sources

<!-- sources at 8e7538f -->
- `data/items.json:58-62`: the five seeds, tagged `seed`, and their stacks
- `data/crops.json`: the potato crop: its seed, its harvest, its seeds back
- `src/farming.js:167-190`, `src/farming.js:227-251`: planted on tilled soil; the harvest gives the seeds back
- `tools/mapgen/valley.py:190`, `data/loot.json`: only potatoes and cabbages grow in the valley, and no loot table gives a seed

{{navbox items}}
