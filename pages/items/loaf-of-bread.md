---
title: Loaf of bread
categories: [Items, Food]
aliases: [Bread]
summary: Food that fills hunger well; every new character carries one, and chests and the dead have more.
---

{{infobox-item bread}}

A **loaf of bread** is [[Food]]. Eating one adds {{n items.bread.hunger}} to your [[Hunger]] and heals {{n items.bread.heal}} [[Health]]. Every new character carries one in their sack, and more turn up in chests and in the dead's pockets. It is also baked at the [[Oven]] from [[Flour]], ground from grain at the [[Millstones]]. A loaf does not stack.

{{item-sections bread}}

## Sources

<!-- sources at 015eabc -->
- `data/items.json:16`: bread: its hunger and heal, no stack
- `src/entities/player.js:90-102`: eating adds its hunger, and its heal (game #186)
- `data/kit.json:6`: one in the starter sack
- `data/loot.json:2`: bread in the chest table
- `data/loot.json:4`: bread in the body table
- `data/recipes.json:560-575`: bread at the oven from flour
- `data/loot.json`: no table gives flour

{{navbox items}}
