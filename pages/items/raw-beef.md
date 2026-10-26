---
title: Raw beef
categories: [Items, Food]
summary: A cow's meat, butchered from its carcass with a dirk carried; cooked alone at a fire, or used in dishes.
---

{{infobox-item beef_raw}}

**Raw beef** is a cow's [[Meat|meat]]. Butchering a cow's carcass with a [[Dirk]] carried gives {{n animals.species.cow.yields.butcher.0.count.0}}–{{n animals.species.cow.yields.butcher.0.count.1}} as a whole yield, at the share the kill left (see [[Hunting]]). A cow is tame stock: a blow strikes one only when nothing else is in reach (see [[Hunting]]). It is food, eaten as it is: it fills hunger by {{n items.beef_raw.hunger}} and heals {{n items.beef_raw.heal}}.

Cooked alone at a lit fire (see [[Cooking]]) it becomes a [[Beef steak]], which fills hunger by {{n items.beef_cooked.hunger}} and heals {{n items.beef_cooked.heal}}. As any meat it goes into the [[Meat pottage]], the [[Hearty stew]], a [[Meat pie]], [[Smoked meat]], and [[Pemmican]] (see [[Meat#Cooking it|Meat]]).

{{item-sections beef_raw}}

## Sources

<!-- sources at 6e3ab37 -->
- `data/items.json:56`: raw beef, food, its hunger and heal (game #456)
- `data/animals.json:15`: a cow's butcher yield
- `src/entities/animal.js:737-822`: the yield at the kill's share; butchering, a dirk carried
- `data/recipes.json:1130-1231`, `data/items.json:70-75`: cooked alone at a fire into the beef steak; any meat in the dishes (game #462, at d625844)

{{navbox items}}
