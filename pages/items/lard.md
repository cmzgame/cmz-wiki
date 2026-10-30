---
title: Lard
categories: [Items, Materials]
summary: Pig fat, butchered from a pig with a dirk carried; a binder for pemmican.
---

{{infobox-item lard}}

**Lard** is a pig's fat. Butchering a pig's carcass with a [[Dirk]] carried gives {{n animals.species.pig.yields.butcher.2.count.0}} as a whole yield, beside its pork and bacon, at the share the kill left (see [[Hunting]]). Only a pig gives it. It is a binder: [[Pemmican]] takes lard or a [[Jar of honey]] to bind its meat and plant. A line counts it as one thing: the butcher's line ends "and some lard."

{{item-sections lard}}

## Sources

<!-- sources at 6e3ab37 -->
- `data/items.json:60`: lard, a material, tagged fat (game #456)
- `data/animals.json:17`: the pig's butcher yields: pork, bacon, and lard
- `src/entities/animal.js:737-822`: the yield at the kill's share; butchering, a dirk carried
- `data/items.json:60`: lard tagged `binder`, a mass noun (games #462, #466, at d625844)
- `data/recipes.json:1324-1348`: pemmican's binder (game #462, at d625844)
- `src/entities/animal.js:764-768`, `src/items.js:65-83`: the yield said with each item's count and noun

{{navbox items}}
