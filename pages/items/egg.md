---
title: Egg
categories: [Items, Food]
aliases: [Eggs]
summary: Food a fed hen lays into its chicken coop once a day; eaten raw for now, and it stacks.
---

{{infobox-item egg}}

An **egg** is laid by a hen that has eaten that day, into a [[Chicken coop]] within {{n animals.keep.coopReach tiles}} of its home: {{n animals.species.hen.lays.count.0}} a day, and one more {{pct animals.keep.more}} of the time. The hens of [[Hollow Farm]] lay into the coop in its yard once its [[Feeding trough]] holds feed. Open the coop to take them. It stacks up to {{n items.egg.stack}} in a cell, so a coop does not soon fill.

It is food, eaten raw for now: "Eat: heals {{n items.egg.heal}}, fills hunger {{n items.egg.hunger}}." Its card also says "Laid by a fed hen into its coop." {{planned doc=45 step=4 note="Eggs in recipes: eggs and bacon (Cooking 4)."}}

{{item-sections egg}}

## With friends

The host lays the eggs into the coop; the coop's contents travel with its part of the map, so every player sees the same eggs, and whoever opens the coop first takes them.

## Sources

<!-- sources at 6e3ab37 -->
- `data/items.json:68`: the egg: food, its hunger and heal, its stack
- `data/animals.json`: the hen's `lays`, `keep.coopReach`, `keep.more`
- `src/entities/animal.js:597-623`, `src/entities/animal.js:649-663`: a fed hen lays into a coop within `coopReach` of its home, one more at `more`
- `src/item-info.js:147-153`, `src/item-info.js:224-229`: its card's Eat line and where it comes from
- `docs/45-animals.md:39`: eggs and bacon, not built

{{navbox items}}
