---
title: Rucksack
categories: [Items, Bags]
summary: A bigger bag than the burlap sack, found in chests.
---

{{infobox-item rucksack}}

The **rucksack** is a bag equipped on the back, with a grid of {{n items.rucksack.bag.0}} × {{n items.rucksack.bag.1}} cells, bigger than the [[Burlap sack]] every character starts with (see [[Inventory]]). It is found in chests.

Equip it from a chest's grid (**Equip ({{n items.rucksack.bag.0}}×{{n items.rucksack.bag.1}})**) or from the floor (**Swap bags**): the old bag is dropped at your feet with everything still in it, to be emptied into the new one. Empty, a rucksack can be carried inside another bag; full, it cannot.

{{item-sections rucksack}}

## Sources

<!-- sources at 9205ad7 -->
- `data/items.json:32`: the rucksack: equipped on the back, grid 8 x 5
- `data/items.json:31`: the burlap sack's smaller grid
- `data/loot.json:2`: the rucksack in the chest table
- `src/interact.js:1035-1038`: Equip (W×H) from a container's grid (game commit 9a450f2)
- `src/interact.js:168-190`: Equip or Swap bags from the floor; the old bag dropped at your feet (game commit 9a450f2)
- `src/inventory.js:159-173`: a bag goes in another only empty

{{navbox items}}
