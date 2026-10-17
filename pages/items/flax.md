---
title: Flax
categories: [Items, Materials, Farming]
aliases: [Flax crop, Fibre]
summary: The sixth crop: grown from flax seed and harvested for flax, which the loom weaves into linen cloth.
---

{{infobox-item flax}}

**Flax** is the sixth crop and its harvest. It is grown like the others (see [[Farming]]): plant a [[Flax seed]] in tilled soil, keep it watered, and harvest it when it is ready, by hand with no tool, for {{n crops.crops.flax.harvest.count.0}} or {{n crops.crops.flax.harvest.count.1}} flax and {{n crops.crops.flax.seeds}} seeds back. The [[Loom]] weaves flax into [[Linen cloth]]. Flax seed is in the chest of [[The weaver]] and the granaries of [[Hollow Farm]] and [[The mill]], and [[Long Acre]] has a flax strip growing from the start. It stacks to {{n items.flax.stack}}.

Flax is not grain: the [[Scythe]] does not cut it.

{{item-sections flax}}

## Sources

<!-- sources at 0e765f7 -->
- `data/items.json:65-66`: flax seed and flax, their tags and stacks
- `data/crops.json`: the flax crop: its stage days, its harvest, its seed, two seeds back, no `grain` flag (game #216)
- `data/sprites/crop_flax_0.json` (and `_1`, `_2`): its three stages, gatherables like the other crops
- `data/loot.json:9-11`: flax seed in the two granaries (game #219) and the weaver's chest
- `tools/mapgen/valley.py:502`: Long Acre's flax strip (game #219)
- `data/recipes.json:125-139`: linen cloth at the loom from flax

{{navbox items}}
