---
title: Potato seed
categories: [Items, Materials, Farming]
summary: A seed planted in tilled soil to grow potato; it can be had in play.
---

{{infobox-item potato_seed}}

A **potato seed** is planted in tilled soil to grow potato (see [[Farming]]). Its harvest gives [[Potato]] and {{n crops.crops.potato.seeds}} potato seeds back. It stacks to {{n items.potato_seed.stack}}. It can be had in play: harvesting a potato gives {{n crops.crops.potato.seeds}} back, and the plot by [[Your cottage]] has potatoes from the start.

{{item-sections potato_seed}}

## Sources

<!-- sources at cfe0203 -->
- `data/items.json:60-65`: the six seeds, tagged `seed`, and their stacks
- `data/crops.json`: the potato crop: its seed, its harvest, its seeds back
- `src/farming.js:179-202`, `src/farming.js:233-262`: planted on tilled soil; the harvest gives the seeds back
- `tools/mapgen/valley.py:190`, `data/loot.json:9-10`: the cottage's plot, and the two granaries' seed of every crop (game #219)

{{navbox items}}
