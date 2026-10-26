---
title: Bacon
categories: [Items, Food]
summary: Butchered from a pig with a dirk carried, beside its pork and lard; fried with eggs into eggs and bacon.
---

{{infobox-item bacon}}

**Bacon** comes only from a pig. Butchering a pig's carcass with a [[Dirk]] carried gives {{n animals.species.pig.yields.butcher.1.count.0}}–{{n animals.species.pig.yields.butcher.1.count.1}} as a whole yield, beside its [[Raw pork|pork]] and [[Lard]], at the share the kill left (see [[Hunting]]). A pig is tame stock, struck only when nothing else is in reach. It is food, eaten as it is: it fills hunger by {{n items.bacon.hunger}} and heals {{n items.bacon.heal}}. Its one recipe is [[Eggs and bacon]], fried with eggs at a lit fire. Bacon is not one of the raw meats a recipe's "any meat" takes, so it never goes into the pottage, the stew, a pie, smoked meat, or pemmican, and it does not cook alone. A line counts it as one thing, as "some bacon". See [[Meat]] for every meat.

{{item-sections bacon}}

## Sources

<!-- sources at 6e3ab37 -->
- `data/items.json:59`: bacon, food, its hunger and heal (game #456)
- `data/animals.json:17`: the pig's butcher yields
- `src/entities/animal.js:737-822`: the yield at the kill's share; butchering, a dirk carried
- `data/items.json:59`: bacon out of the `meat` tag, a mass noun (games #462, #466, at d625844)
- `data/recipes.json:1286-1306`: eggs and bacon at a lit cooking fire (game #462, at d625844)

{{navbox items}}
