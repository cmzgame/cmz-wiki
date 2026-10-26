---
title: Leather belt
aliases: [Good belt]
categories: [Items, Clothing, Belts]
summary: A leather belt with more slots than the rope belt; the valley's one hangs on Hollow Farm's tool rack.
---

{{infobox-item good_belt}}

The **leather belt** (the good belt until the names were made specific) is equipped at the waist and gives {{n items.good_belt.beltSlots}} belt slots, pressed with the number keys (see [[Belt]]), against the [[Rope belt]]'s {{n items.belt.beltSlots}}: a second main-hand slot and a second off-hand slot beside the rope belt's main-hand, off-hand, and utility slots. The valley's one leather belt hangs on the tool rack in [[Hollow Farm]]'s great barn, with a pair of [[Work gloves]].

Equipping it swaps the old belt into your bag. Empty, it can be carried in a bag; with anything on it, it cannot.

It can be dyed at a [[Dye vat]], leather and buckle together, as one of {{n items.good_belt.dye.schemes.length}} schemes (natural leather and brass, dark brown and brass, black and brass, black and iron, oxblood and bronze, tan and iron), or back to its own colours; the [[Rope belt]] cannot. Its own buckle is the vat's brass, so a brass scheme's buckle is named "undyed" on its card, as "Black and undyed".

{{item-sections good_belt}}

## Sources

<!-- sources at 78116b1 -->
- `data/items.json:34`, `src/inventory.js:295`: its slot count, and each slot's role by its place (game #478)
- `data/items.json:29-30`: the good belt's and the rope belt's slots
- `data/loot.json:2`: the good belt in the chest table
- `src/interact.js:901-923`: equipping it swaps the old belt into your bag
- `src/inventory.js:159-173`: a belt goes in a bag only empty
- `data/loot.json`, `tools/mapgen/valley.py`: where it is found, a table per kind of container, gear placed once (game #399, at ce21ffc)
- `data/items.json:34`, `data/dyes.json:20-28`, `src/dye.js:68-79`: dyed by its schemes at the vat; the rope belt has no `dye` block; the brass buckle read as undyed (game #417, at 31d330a)

{{navbox items}}
