---
title: Egg
categories: [Items, Food]
aliases: [Eggs]
summary: Food a fed hen lays into its chicken coop once a day; it does not stack, and it goes into eggs and bacon.
---

{{infobox-item egg}}

An **egg** is laid by a hen that has eaten that day, into a [[Chicken coop]] within {{n animals.keep.coopReach tiles}} of its home: {{n animals.species.hen.lays.count.0}} a day, and one more {{pct animals.keep.more}} of the time. The hens of [[Hollow Farm]] lay into the coop in its yard once its [[Feeding trough]] holds feed. Open the coop to take them. An egg does not stack: each takes a cell of its own, so the coop's {{n loot.coop.grid.0}} × {{n loot.coop.grid.1}} grid, six cells that its feathers share, holds only a few days of eggs before it is full and lays no more until it is emptied. Michael ruled this on 2026-10-25, open to change after playtesting.

It is food, eaten raw: "Eat: heals {{n items.egg.heal}}, fills hunger {{n items.egg.hunger}}." Its card also says "Laid by a fed hen into its coop." and "Goes into: eggs and bacon." Eggs and [[Bacon]] fried at a lit fire make [[Eggs and bacon]] (see [[Cooking]]).

{{item-sections egg}}

## With friends

The host lays the eggs into the coop; the coop's contents travel with its part of the map, so every player sees the same eggs, and whoever opens the coop first takes them.

## Sources

<!-- sources at dc10b81 -->
- `data/items.json:68`: the egg: food, its hunger and heal, no `stack` since game #475 (one a cell)
- `data/loot.json:3`: the coop's grid, which eggs and feathers share
- `data/animals.json`: the hen's `lays`, `keep.coopReach`, `keep.more`
- `src/entities/animal.js:597-623`, `src/entities/animal.js:649-663`: a fed hen lays into a coop within `coopReach` of its home, one more at `more`
- `src/item-info.js:233-239`, `src/item-info.js:330-335`: its card's Eat line and where it comes from
- `data/recipes.json:1292-1312`: eggs and bacon at a lit cooking fire (game #462, at d625844)

{{navbox items}}
