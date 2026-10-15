---
title: Rucksack
categories: [Items, Bags]
summary: A bigger bag than the burlap sack, found in chests.
---

{{infobox-item rucksack}}

The **rucksack** is a bag worn on the back, with a grid of {{n items.rucksack.bag.0}} × {{n items.rucksack.bag.1}} cells, bigger than the [[Burlap sack]] every character starts with (see [[Inventory]]). It is found in chests.

Wear it from a chest's grid or from the floor: the old bag is dropped at your feet with everything still in it, to be emptied into the new one. Empty, a rucksack can be carried inside another bag; full, it cannot.

{{item-sections rucksack}}

## Sources

<!-- sources at 9205ad7 -->
- `data/items.json:32`: the rucksack: worn on the back, grid 8 x 5
- `data/items.json:31`: the burlap sack's smaller grid
- `data/loot.json:2`: the rucksack in the chest table
- `src/interact.js:1015-1090`: Wear from a container's grid
- `src/interact.js:168-189`: Wear from the floor; the old bag dropped at your feet
- `src/inventory.js:159-173`: a bag goes in another only empty

{{navbox items}}
