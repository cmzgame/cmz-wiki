---
title: Raw venison
categories: [Items, Food]
summary: A deer's meat, butchered from its carcass with a dirk carried; cooked alone at a fire, or used in dishes.
---

{{infobox-item venison_raw}}

**Raw venison** is a deer's [[Meat|meat]]. Butchering a deer's carcass with a [[Dirk]] carried gives {{n animals.species.deer.yields.butcher.0.count.0}}–{{n animals.species.deer.yields.butcher.0.count.1}} as a whole yield, at the share the kill left (see [[Hunting]]). It is food, eaten as it is: it fills hunger by {{n items.venison_raw.hunger}} and heals {{n items.venison_raw.heal}}.

Cooked alone at a lit fire (see [[Cooking]]) it becomes a [[Venison steak]], which fills hunger by {{n items.venison_cooked.hunger}} and heals {{n items.venison_cooked.heal}}. As any meat it goes into the [[Meat pottage]], the [[Hearty stew]], a [[Meat pie]], [[Smoked meat]], and [[Pemmican]] (see [[Meat#Cooking it|Meat]]).

{{item-sections venison_raw}}

## Sources

<!-- sources at 6e3ab37 -->
- `data/items.json:55`: raw venison, food, its hunger and heal (game #456)
- `data/animals.json:13`: a deer's butcher yield
- `src/entities/animal.js:737-822`: the yield at the kill's share; butchering, a dirk carried
- `data/recipes.json:1130-1231`, `data/items.json:70-75`: cooked alone at a fire into the venison steak; any meat in the dishes (game #462, at d625844)

{{navbox items}}
