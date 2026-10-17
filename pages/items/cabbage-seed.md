---
title: Cabbage seed
categories: [Items, Materials, Farming]
summary: A seed planted in tilled soil to grow cabbage; it can be had in play.
---

{{infobox-item cabbage_seed}}

A **cabbage seed** is planted in tilled soil to grow cabbage (see [[Farming]]). Its harvest gives [[Cabbage]] and {{n crops.crops.cabbage.seeds}} cabbage seeds back. It stacks to {{n items.cabbage_seed.stack}}. It can be had in play: harvesting a cabbage gives two back, and the plot by [[Your cottage]] has cabbages from the start.

{{item-sections cabbage_seed}}

## Sources

<!-- sources at cfe0203 -->
- `data/items.json:60-64`: the five seeds, tagged `seed`, and their stacks
- `data/crops.json`: the cabbage crop: its seed, its harvest, its seeds back
- `src/farming.js:179-202`, `src/farming.js:233-262`: planted on tilled soil; the harvest gives the seeds back
- `tools/mapgen/valley.py:190`, `data/loot.json:9-10`: the cottage's plot, and the two granaries' seed of every crop (game #219)

{{navbox items}}
