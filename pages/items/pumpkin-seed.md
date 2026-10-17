---
title: Pumpkin seed
categories: [Items, Materials, Farming]
summary: A seed planted in tilled soil to grow pumpkin; it cannot be had in play yet.
---

{{infobox-item pumpkin_seed}}

A **pumpkin seed** is planted in tilled soil to grow pumpkin (see [[Farming]]). Its harvest gives [[Pumpkin]] and {{n crops.crops.pumpkin.seeds}} pumpkin seeds back. It stacks to {{n items.pumpkin_seed.stack}}. It cannot be had in play yet: the valley grows no pumpkins in soil, and nothing gives the seed.

{{item-sections pumpkin_seed}}

## Sources

<!-- sources at 8e7538f -->
- `data/items.json:58-62`: the five seeds, tagged `seed`, and their stacks
- `data/crops.json`: the pumpkin crop: its seed, its harvest, its seeds back
- `src/farming.js:167-190`, `src/farming.js:227-251`: planted on tilled soil; the harvest gives the seeds back
- `tools/mapgen/valley.py:190`, `data/loot.json`: only potatoes and cabbages grow in the valley, and no loot table gives a seed

{{navbox items}}
