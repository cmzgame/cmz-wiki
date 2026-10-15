---
title: Loaf of bread
categories: [Items, Food]
aliases: [Bread]
summary: Food that fills hunger well; every new character carries one, and chests and the dead have more.
---

{{infobox-item bread}}

A **loaf of bread** is [[Food]]. Eating one adds {{n items.bread.hunger}} to your [[Hunger]]. Every new character carries one in their sack, and more turn up in chests and in the dead's pockets. It is also baked at the [[Oven]] from [[Flour]], though nothing in the valley gives flour yet. A loaf does not stack.

{{item-sections bread}}

## Sources

<!-- sources at 9205ad7 -->
- `data/items.json:16`: bread: its hunger, no stack
- `src/entities/player.js:98-103`: eating adds its hunger
- `src/game.js:103-116`: one in the starter sack
- `data/loot.json:2`: bread in the chest table
- `data/loot.json:4`: bread in the body table
- `data/recipes.json:478-493`: bread at the oven from flour
- `data/loot.json`: no table gives flour

{{navbox items}}
