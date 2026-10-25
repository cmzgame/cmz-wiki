---
title: Apple
categories: [Items, Food]
aliases: [Apples]
summary: A small food that fills a little hunger and a little thirst and heals a little; picked from apple trees, and found in barrels, pantries, the inn's counter, and the dead's pockets.
---

{{infobox-item apple}}

An **apple** is [[Food]]. Eating one adds {{n items.apple.hunger}} to your [[Hunger]] and {{n items.apple.thirst}} to your [[Thirst]], and heals {{n items.apple.heal}} [[Health]]. Every new character carries apples in their sack. More are picked from the apple trees of [[The orchard]] and three cottage gardens, between {{n sprites.tree_apple.pick.count.0}} and {{n sprites.tree_apple.pick.count.1}} a tree, after which the tree is bare for {{n sprites.tree_apple.pick.days}} days (see [[Trees#Fruit trees|Trees]]); and they are found in barrels and in the dead's pockets. An apple {{stack apple}}, and an apple on the [[Belt]] is eaten from its slot.

{{item-sections apple}}

## Sources

<!-- sources at 3c0a243 -->
- `data/items.json:17`: the apple: hunger, thirst, heal, stack, kind
- `src/entities/player.js:91-103`: eating adds the item's hunger and thirst, capped, and its heal (game #186)
- `data/kit.json:7`: the starter kit: two apples in the sack
- `data/sprites/tree_apple.json`, `src/fruit.js:30-52`: apples picked from an apple tree, the count, the days it is bare (game #192)
- `data/loot.json:3-4`: apples in the barrel table and the body table
- `src/interact.js:1193-1207`, `src/interact.js:1321-1333`: a food on the belt eaten from its slot
- `data/items.json`: only arrows, fire arrows, throwing knives and axes, bandages, and seeds stack (game #399, at ce21ffc)

{{navbox items}}
