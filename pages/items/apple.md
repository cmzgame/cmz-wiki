---
title: Apple
categories: [Items, Food]
aliases: [Apples]
summary: A small food that fills a little hunger and a little thirst; found in barrels and the dead's pockets.
---

{{infobox-item apple}}

An **apple** is [[Food]]. Eating one adds {{n items.apple.hunger}} to your [[Hunger]] and {{n items.apple.thirst}} to your [[Thirst]]. Every new character carries apples in their sack, and more are found in barrels and in the dead's pockets. Apples stack to {{n items.apple.stack}}, and a stack on the [[Belt]] is eaten one at a time with its key.

{{item-sections apple}}

## Sources

<!-- sources at 9205ad7 -->
- `data/items.json:17`: the apple: hunger, thirst, stack, kind
- `src/entities/player.js:98-103`: eating adds the item's hunger and thirst, capped
- `src/game.js:103-116`: the starter kit: two apples in the sack
- `data/loot.json:3-4`: apples in the barrel table and the body table
- `src/inventory.js:237-260`: food on the belt is eaten one at a time by its key

{{navbox items}}
