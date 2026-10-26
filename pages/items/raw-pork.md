---
title: Raw pork
categories: [Items, Food]
summary: Pork, butchered from a pig or a boar with a dirk carried; cooked alone at a fire, or used in dishes.
---

{{infobox-item pork_raw}}

**Raw pork** is the [[Meat|meat]] of both the pig and the boar. Butchering a boar's carcass with a [[Dirk]] carried gives {{n animals.species.boar.yields.butcher.0.count.0}}–{{n animals.species.boar.yields.butcher.0.count.1}} as a whole yield, and a pig's {{n animals.species.pig.yields.butcher.0.count.0}}–{{n animals.species.pig.yields.butcher.0.count.1}} beside its [[Bacon]] and [[Lard]], each at the share the kill left (see [[Hunting]]). A boar fights back when struck; a pig is tame stock, struck only when nothing else is in reach. It is food, eaten as it is: it fills hunger by {{n items.pork_raw.hunger}} and heals {{n items.pork_raw.heal}}.

Cooked alone at a lit fire (see [[Cooking]]) it becomes [[Roast pork]], which fills hunger by {{n items.pork_cooked.hunger}} and heals {{n items.pork_cooked.heal}}. As any meat it goes into the [[Meat pottage]], the [[Hearty stew]], a [[Meat pie]], [[Smoked meat]], and [[Pemmican]] (see [[Meat#Cooking it|Meat]]).

{{item-sections pork_raw}}

## Sources

<!-- sources at 6e3ab37 -->
- `data/items.json:58`: raw pork, food, its hunger and heal (game #456)
- `data/animals.json:14`, `data/animals.json:17`: the boar's and the pig's butcher yields
- `src/entities/animal.js:737-822`: the yield at the kill's share; butchering, a dirk carried
- `data/recipes.json:1130-1231`, `data/items.json:70-75`: cooked alone at a fire into the roast pork; any meat in the dishes (game #462, at d625844)

{{navbox items}}
