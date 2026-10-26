---
title: Raw rabbit
categories: [Items, Food]
summary: A rabbit's meat, butchered from its carcass with a dirk carried; cooked alone at a fire, or used in dishes.
---

{{infobox-item rabbit_raw}}

**Raw rabbit** is a rabbit's [[Meat|meat]]. Butchering a rabbit's carcass with a [[Dirk]] carried gives {{n animals.species.rabbit.yields.butcher.0.count.0}} as a whole yield, at the share the kill left (see [[Hunting]]). A [[Snare]]'s catch is a rabbit too, at its whole yield. It is food, eaten as it is: it fills hunger by {{n items.rabbit_raw.hunger}} and heals {{n items.rabbit_raw.heal}}.

Cooked alone at a lit fire (see [[Cooking]]) it becomes a [[Roast rabbit]], which fills hunger by {{n items.rabbit_cooked.hunger}} and heals {{n items.rabbit_cooked.heal}}. As any meat it goes into the [[Meat pottage]], the [[Hearty stew]], a [[Meat pie]], [[Smoked meat]], and [[Pemmican]] (see [[Meat#Cooking it|Meat]]).

{{item-sections rabbit_raw}}

## Sources

<!-- sources at 6e3ab37 -->
- `data/items.json:54`: raw rabbit, food, its hunger and heal (game #456)
- `data/animals.json:12`: a rabbit's butcher yield
- `src/entities/animal.js:737-822`: the yield at the kill's share; butchering, a dirk carried
- `data/recipes.json:1130-1231`, `data/items.json:70-75`: cooked alone at a fire into the roast rabbit; any meat in the dishes (game #462, at d625844)

{{navbox items}}
