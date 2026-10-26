---
title: Feather
categories: [Items, Materials]
aliases: [Feathers]
summary: A hen's feather: butchered from a hen with a dirk carried, or left in its coop by a fed hen most days; every batch of arrows is fletched with one.
numbersOk: true
---

<!-- typed: the refusal "Short of 1 feather." is the game's own words for the arrows recipe, whose count is in data/recipes.json rows, which no lookup reads -->

{{infobox-item feather}}

A **feather** comes from hens, two ways. Butchering a hen's carcass with a [[Dirk]] carried gives {{n animals.species.hen.yields.butcher.1.count.0}} to {{n animals.species.hen.yields.butcher.1.count.1}} as a whole yield, at the share the kill left (see [[Hunting]]). And a hen fed for the day lays its egg into its [[Chicken coop]], with a feather beside it {{pct animals.keep.feather}} of the days (see [[Keeping]]), so feathers can be farmed. Feathers stack, up to {{n items.feather.stack}} in a cell.

A feather fletches [[Arrow|arrows]]: the [[Workbench]]'s arrows recipe takes a [[Stick]] and a feather for a batch, with a [[Dirk]] on you, and without a feather it is refused, "Short of 1 feather." So new arrows wait on the hens of [[Hollow Farm]], by butchering or by keeping. The design names Crafting for fletching; it is open to all until the skills are built.

{{item-sections feather}}

## Sources

<!-- sources at 6e3ab37 -->
- `data/items.json:62`: the feather, a material, stacking (game #456)
- `data/animals.json:9`, `data/animals.json:11`: the hen's butcher yield of feathers; `keep.feather`, a fed hen's feather a day
- `src/entities/animal.js:613-623`: a fed hen lays into its coop, and a feather at `keep.feather` (game #460)
- `src/entities/animal.js:737-822`: the yield at the kill's share; butchering, a dirk carried
- `data/recipes.json:327-347`: the arrows recipe: a stick and a feather, a dirk carried (game #462, at d625844)
- `src/stations.js:168-179`: "Short of ..." when an ingredient is missing

{{navbox items}}
