---
title: Garlic seed
categories: [Items, Materials, Farming]
summary: A seed planted in tilled soil to grow garlic; it cannot be had in play yet.
---

{{infobox-item garlic_seed}}

A **garlic seed** is planted in tilled soil to grow garlic (see [[Farming]]). Its harvest gives [[Garlic]] and {{n crops.crops.garlic.seeds}} garlic seeds back. It stacks to {{n items.garlic_seed.stack}}. It cannot be had in play yet: the valley grows no garlic, and nothing gives the seed.

{{item-sections garlic_seed}}

## Sources

<!-- sources at 8e7538f -->
- `data/items.json:58-62`: the five seeds, tagged `seed`, and their stacks
- `data/crops.json`: the garlic crop: its seed, its harvest, its seeds back
- `src/farming.js:167-190`, `src/farming.js:227-251`: planted on tilled soil; the harvest gives the seeds back
- `tools/mapgen/valley.py:190`, `data/loot.json`: only potatoes and cabbages grow in the valley, and no loot table gives a seed

{{navbox items}}
