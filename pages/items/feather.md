---
title: Feather
categories: [Items, Materials]
aliases: [Feathers]
summary: A hen's feather: butchered from a hen with a dirk carried, or left in its coop by a fed hen most days; for fletching arrows, which is not built yet.
---

{{infobox-item feather}}

A **feather** comes from hens, two ways. Butchering a hen's carcass with a [[Dirk]] carried gives {{n animals.species.hen.yields.butcher.1.count.0}} to {{n animals.species.hen.yields.butcher.1.count.1}} as a whole yield, at the share the kill left (see [[Hunting]]). And a hen fed for the day lays its egg into its [[Chicken coop]], with a feather beside it {{pct animals.keep.feather}} of the days (see [[Keeping]]), so feathers can be farmed. Feathers stack, up to {{n items.feather.stack}} in a cell. Nothing uses them yet.

{{planned doc=45 step=4 note="Fletching: a feather fletches arrows (Crafting 4)."}}

{{item-sections feather}}

## Sources

<!-- sources at 6e3ab37 -->
- `data/items.json:62`: the feather, a material, stacking (game #456)
- `data/animals.json:9`, `data/animals.json:11`: the hen's butcher yield of feathers; `keep.feather`, a fed hen's feather a day
- `src/entities/animal.js:613-623`: a fed hen lays into its coop, and a feather at `keep.feather` (game #460)
- `src/entities/animal.js:737-822`: the yield at the kill's share; butchering, a dirk carried

{{navbox items}}
