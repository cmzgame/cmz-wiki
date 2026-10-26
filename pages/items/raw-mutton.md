---
title: Raw mutton
categories: [Items, Food]
summary: A sheep's meat, butchered from its carcass with a dirk carried; cooked alone at a fire, or used in dishes.
---

{{infobox-item mutton_raw}}

**Raw mutton** is a sheep's [[Meat|meat]]. Butchering a sheep's carcass with a [[Dirk]] carried gives {{n animals.species.sheep.yields.butcher.0.count.0}}–{{n animals.species.sheep.yields.butcher.0.count.1}} as a whole yield, at the share the kill left (see [[Hunting]]). A sheep is tame stock: a blow strikes one only when nothing else is in reach (see [[Hunting]]). It is food, eaten as it is: it fills hunger by {{n items.mutton_raw.hunger}} and heals {{n items.mutton_raw.heal}}.

Cooked alone at a lit fire (see [[Cooking]]) it becomes [[Roast mutton]], which fills hunger by {{n items.mutton_cooked.hunger}} and heals {{n items.mutton_cooked.heal}}. As any meat it goes into the [[Meat pottage]], the [[Hearty stew]], a [[Meat pie]], [[Smoked meat]], and [[Pemmican]] (see [[Meat#Cooking it|Meat]]).

{{item-sections mutton_raw}}

## Sources

<!-- sources at 6e3ab37 -->
- `data/items.json:57`: raw mutton, food, its hunger and heal (game #456)
- `data/animals.json:16`: a sheep's butcher yield
- `src/entities/animal.js:737-822`: the yield at the kill's share; butchering, a dirk carried
- `data/recipes.json:1130-1231`, `data/items.json:70-75`: cooked alone at a fire into the roast mutton; any meat in the dishes (game #462, at d625844)

{{navbox items}}
