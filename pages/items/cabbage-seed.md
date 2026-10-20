---
title: Cabbage seed
categories: [Items, Materials, Farming]
summary: A seed planted in tilled soil to grow cabbage; it can be had in play.
---

{{infobox-item cabbage_seed}}

A **cabbage seed** is planted in tilled soil to grow cabbage (see [[Farming]]). Its harvest gives [[Cabbage]] and {{n crops.crops.cabbage.seeds}} cabbage seeds back, harvested with a [[Dirk]] on you. It stacks to {{n items.cabbage_seed.stack}}. It can be had in play: harvesting a cabbage gives {{n crops.crops.cabbage.seeds}} back, and the plot by [[Your cottage]] has cabbages from the start.

{{item-sections cabbage_seed}}

## Sources

<!-- sources at 3c0a243 -->
- `data/items.json:60-65`: the six seeds, tagged `seed`, and their stacks
- `data/crops.json`: the cabbage crop: its seed, its harvest, its seeds back, and its harvest tool (game #222)
- `src/farming.js:179-202`, `src/farming.js:233-259`: planted on tilled soil; the harvest gives the seeds back
- `tools/mapgen/valley.py:191`, `data/loot.json:9-10`: the cottage's plot, and the two granaries' seed of every crop (game #219)

{{navbox items}}
