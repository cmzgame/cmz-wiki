---
title: Perch
categories: [Items, Food, Fish]
summary: A raw fish caught in the river and the pond with a fishing rod; eaten raw, or grilled at a fire into grilled perch.
---

{{infobox-item perch}}

A **perch** is a fish, and [[Food]]. It is caught with a [[Fishing rod]] in the river and the pond (see [[Fishing]]); the chance a cast catches one is in the table below. Eaten raw it adds {{n items.perch.hunger}} to your [[Hunger]] and heals {{n items.perch.heal}} [[Health]]. Grilled at a lit fire that cooks ([[Cooking]]) it becomes [[Grilled perch]], which adds {{n items.grilled_perch.hunger}} hunger and heals {{n items.grilled_perch.heal}}. It stacks to {{n items.perch.stack}}.

{{item-sections perch}}

## Sources

<!-- sources at 0e765f7 -->
- `data/items.json:41-46`: the perch and its grilled kind: hunger, heal, stack, tags
- `data/fishing.json`: the waters that catch it, and how often
- `src/fishing.js:57-81`: a catch into the bag, or at your feet when it is full
- `data/recipes.json:720-767`: grilled at a cooking fire, the fire lit
- `src/entities/player.js:89-101`: eating adds its hunger and its heal

{{navbox items}}
