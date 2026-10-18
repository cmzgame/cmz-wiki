---
title: Trout
categories: [Items, Food, Fish]
summary: A raw fish caught in the river with a fishing rod; eaten raw, or grilled at a fire into grilled trout.
---

{{infobox-item trout}}

A **trout** is a fish, and [[Food]]. It is caught with a [[Fishing rod]] in the river (see [[Fishing]]); the chance a cast catches one is in the table below. Eaten raw it adds {{n items.trout.hunger}} to your [[Hunger]] and heals {{n items.trout.heal}} [[Health]]. Grilled at a lit fire that cooks ([[Cooking]]) it becomes [[Grilled trout]], which adds {{n items.grilled_trout.hunger}} hunger and heals {{n items.grilled_trout.heal}}. It stacks to {{n items.trout.stack}}.

{{item-sections trout}}

## Sources

<!-- sources at 3c0a243 -->
- `data/items.json:41-46`: the trout and its grilled kind: hunger, heal, stack, tags
- `data/fishing.json`: the waters that catch it, and how often
- `src/fishing.js:57-81`: a catch into the bag, or at your feet when it is full
- `data/recipes.json:720-767`: grilled at a cooking fire, the fire lit
- `src/entities/player.js:91-103`: eating adds its hunger and its heal

{{navbox items}}
