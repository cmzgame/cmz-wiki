---
title: Raw pork
categories: [Items, Food]
summary: Pork, butchered from a pig or a boar with a dirk carried; eaten raw for now.
---

{{infobox-item pork_raw}}

**Raw pork** is the [[Meat|meat]] of both the pig and the boar. Butchering a boar's carcass with a [[Dirk]] carried gives {{n animals.species.boar.yields.butcher.0.count.0}}–{{n animals.species.boar.yields.butcher.0.count.1}} as a whole yield, and a pig's {{n animals.species.pig.yields.butcher.0.count.0}}–{{n animals.species.pig.yields.butcher.0.count.1}} beside its [[Bacon]] and [[Lard]], each at the share the kill left (see [[Hunting]]). A boar fights back when struck; a pig is tame stock, struck only when nothing else is in reach. It is food, eaten as it is: it fills hunger by {{n items.pork_raw.hunger}} and heals {{n items.pork_raw.heal}}. Nothing cooks it yet.

{{planned doc=45 step=4 note="Raw meat cooked alone at a fire and used in recipes."}}

{{item-sections pork_raw}}

## Sources

<!-- sources at 6e3ab37 -->
- `data/items.json:58`: raw pork, food, its hunger and heal (game #456)
- `data/animals.json:14`, `data/animals.json:17`: the boar's and the pig's butcher yields
- `src/entities/animal.js:737-822`: the yield at the kill's share; butchering, a dirk carried

{{navbox items}}
