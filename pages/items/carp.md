---
title: Carp
categories: [Items, Food, Fish]
summary: A raw fish caught in the pond with a fishing rod; eaten raw, or grilled at a fire into grilled carp.
---

{{infobox-item carp}}

A **carp** is a fish, and [[Food]]. It is caught with a [[Fishing rod]] in the pond (see [[Fishing]]); the chance a cast catches one is in the table below. Eaten raw it adds {{n items.carp.hunger}} to your [[Hunger]] and heals {{n items.carp.heal}} [[Health]]. Grilled at a lit fire that cooks ([[Cooking]]) it becomes [[Grilled carp]], which adds {{n items.grilled_carp.hunger}} hunger and heals {{n items.grilled_carp.heal}}. It stacks to {{n items.carp.stack}}.

{{item-sections carp}}

## Sources

<!-- sources at 0e765f7 -->
- `data/items.json:41-46`: the carp and its grilled kind: hunger, heal, stack, tags
- `data/fishing.json`: the waters that catch it, and how often
- `src/fishing.js:57-81`: a catch into the bag, or at your feet when it is full
- `data/recipes.json:720-767`: grilled at a cooking fire, the fire lit
- `src/entities/player.js:89-101`: eating adds its hunger and its heal

{{navbox items}}
