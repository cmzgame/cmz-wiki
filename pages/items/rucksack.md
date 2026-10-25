---
title: Rucksack
categories: [Items, Bags]
summary: A bigger bag than the burlap sack; no container in the valley holds one.
---

{{infobox-item rucksack}}

The **rucksack** is a bag equipped on the back, with a grid of {{n items.rucksack.bag.0}} × {{n items.rucksack.bag.1}} cells, bigger than the [[Burlap sack]] every character starts with and the [[Linen satchel]] woven at the loom (see [[Inventory]]). No container in the valley holds one: the rucksack is to be crafted, not found. {{planned note="A crafted rucksack, of eight by six, from leather, woollen cloth, and the linen satchel it replaces, once the animals bring leather and wool."}}

Equip it from a container's grid (**Equip ({{n items.rucksack.bag.0}}×{{n items.rucksack.bag.1}})**) or from the floor (**Swap bags**): the old bag is dropped at your feet with everything still in it, to be emptied into the new one. Empty, a rucksack can be carried inside another bag; full, it cannot.

{{item-sections rucksack}}

## Sources

<!-- sources at 9205ad7 -->
- `data/items.json:32`: the rucksack: equipped on the back, grid 8 x 5
- `data/items.json:31`: the burlap sack's smaller grid
- `src/interact.js:1035-1038`: Equip (W×H) from a container's grid (game commit 9a450f2)
- `src/interact.js:168-190`: Equip or Swap bags from the floor; the old bag dropped at your feet (game commit 9a450f2)
- `src/inventory.js:159-173`: a bag goes in another only empty
- `data/loot.json`, `tools/mapgen/valley.py`: where it is found, a table per kind of container, gear placed once (game #399, at ce21ffc)
- `data/items.json`: the linen satchel's grid beside the rucksack's (game #403, at 6e5b20a)

{{navbox items}}
