---
title: Hollow Farm
categories: [Places]
aliases: [The farm]
summary: The big farm south of the lane: the great barn with a hoe on its rack, the farmhouse, a granary of every seed, a chicken coop with its hens and beehives, the byre and the pigsty, the pumpkin field, and potato, cabbage, and garlic plots.
---

**Hollow Farm** lies in the south of [[The valley]], below the lane, the south lane running on into its yard. [[The orchard]] is its west end. Its fields are planted from the start, with plenty ripe, so it is the place to begin farming in earnest (see [[Farming]]).

## What is there

- **The great barn**, the biggest wooden building on the farm, with a double door on the yard. Its tool rack holds a [[Hoe]].
- **The farmhouse**, with a kitchen, a bedroom, and a store.
- **The granary**, whose chest holds seed of every crop: potato, cabbage, garlic, pumpkin, rye, and flax. It is never refilled.
- **The yard**, with a well, woodpiles, and the farm pond; a [[Chicken coop]] at its west end with the farm's hens about it and a [[Feeding trough]] beside it: fill the trough with feed and the hens lay [[Egg|eggs]] into the coop (see [[Keeping]]); and three [[Beehive|beehives]] in a row east of the lane, each with a [[Pot of honey]] to take, and more {{n tuning.work.honey.days}} game days after.
- **The pumpkin field**, the biggest field on the map, fenced with a gate on the yard, a scarecrow in its middle. The scarecrow is a container: searched, it gives up the [[Onion-head Hat]] it wears, the valley's only one.
- Fenced plots of **potatoes**, **cabbages**, and **garlic**, all at mixed stages.
- **The byre** and **the pigsty**, two fenced pens west of [[The orchard]], each with a gate on the farm's side: the cows in the byre, the pigs in the pigsty, held while the gates are shut (see [[Animals]]). Each pen has a feeding trough inside it, empty until a player fills it; fed, the cows give milk to a [[Bucket]] (see [[Keeping]]).

Each part is a place of its own on the map: [[Hollow Farm's yard]] (its well, woodpiles, cart, trough, coop, feeding trough, and hives), [[Hollow Farm's great barn]], [[Hollow Farm's farmhouse]], [[Hollow Farm's granary]], [[Hollow Farm's pumpkin field]], [[Hollow Farm's potatoes]], [[Hollow Farm's cabbages]], [[Hollow Farm's garlic]], [[Hollow Farm's byre]], and [[Hollow Farm's pigsty]].

## The dead

Five of the dead stand in the yard: the family.

## With friends

The fields, the crops, the animals, and what the granary held are the world's, the same for every player.

## Sources

<!-- sources at 3c0a243 -->
- `tools/mapgen/valley.py:408-467`, `data/maps/valley.json:5396-8458`: the farm's yard, the great barn and its tool rack, the farmhouse, the granary, the well, the pond, the pumpkin field and its scarecrow, the potato, cabbage, and garlic plots (game #219)
- `data/loot.json:8-9`: the barn rack's hoe; the granary's seed of every crop, fixed
- `tools/mapgen/valley.py:453-457`, `data/loot.json:3`: the coop at the yard's west end with the coop table, and three hives east of the lane (game #338, at 232d0fb); the coop's table rolls nothing since game #460
- `tools/mapgen/valley.py:459`, `tools/mapgen/valley.py:593-597`: the hens' feeding trough beside the coop, and one in the byre and the pigsty (game #460, at 6e3ab37)
- `tools/mapgen/valley.py:597`: five of the dead in the yard
- `tools/mapgen/valley.py:449-462`: the yard's well, woodpiles, cart, trough, coop, and hives in a place of their own, Hollow Farm's yard, at the same tiles (game #340, at 499e344)
- `data/sprites/scarecrow.json`, `data/loot.json`: the scarecrow a container, its fixed table the Onion-head Hat (game #399, at ce21ffc)
- `src/hives.js:113-158`, `data/tuning.json:171`: a hive gives a pot of honey, and has more some days later (game #416, at 31d330a)
- `tools/mapgen/valley.py:588-595`, `tools/mapgen/valley.py:655-657`, `data/maps/valley.json` `animals`: the byre and the pigsty, fenced with gates on the east, their cows and pigs, and the hens at the coop (game #452, at 261cd7a)

{{navbox places}}
