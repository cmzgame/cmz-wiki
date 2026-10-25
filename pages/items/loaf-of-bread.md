---
title: Loaf of bread
categories: [Items, Food]
aliases: [Bread]
summary: Food that fills hunger well; every new character carries one, and chests, shelves, cupboards, the inn's counter, and the dead have more.
---

{{infobox-item bread}}

A **loaf of bread** is [[Food]]. Eating one adds {{n items.bread.hunger}} to your [[Hunger]] and heals {{n items.bread.heal}} [[Health]]. Every new character carries one in their sack, and more turn up in chests, on shelves and in cupboards, on the inn's counter, and in the dead's pockets. It is also baked at the [[Oven]] from [[Flour]], ground from grain at the [[Millstones]]. A loaf does not stack.

{{item-sections bread}}

## Sources

<!-- sources at 3c0a243 -->
- `data/items.json:16`: bread: its hunger and heal, no stack
- `src/entities/player.js:91-103`: eating adds its hunger, and its heal (game #186)
- `data/kit.json:6`: one in the starter sack
- `data/loot.json:2`: bread in the chest table
- `data/loot.json:4`: bread in the body table
- `data/recipes.json:560-575`: bread at the oven from flour
- `data/loot.json`: no table gives flour
- `data/loot.json`, `tools/mapgen/valley.py`: where it is found, a table per kind of container, gear placed once (game #399, at ce21ffc)

{{navbox items}}
