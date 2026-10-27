---
title: Linen satchel
categories: [Items, Bags]
aliases: [Satchel]
summary: A bag woven at the loom from linen cloth, bigger than the burlap sack and smaller than the rucksack.
---

{{infobox-item satchel}}

The **linen satchel** is a bag equipped on the back, with a grid of {{n items.satchel.bag.0}} × {{n items.satchel.bag.1}} cells: bigger than the [[Burlap sack]] every character starts with, smaller than the [[Rucksack]]. It is woven at the [[Loom]] from [[Linen cloth|linen cloth]], so it can be made from [[Flax]] alone, before there is leather or wool. Its recipe is open to everyone for now. {{planned note="Crafting at level three, once the skills are built, is the satchel's gate."}}

## Using it

Equip it from the loom's output box or a container's grid, or from the floor (**Swap bags**): the bag you had is set down at your feet with everything still in it, to be emptied into the new one. Empty, a satchel can be carried inside another bag; holding things, it cannot, and **Take All** leaves it where it is ("A bag with things in it stays: empty it first.").

Taken off, it keeps what is in it: **Unequip** sets it down, and on the floor it is a container to **Open**, take from, and equip again (see [[Inventory]]). In a chest or on a body it has **Open** there too, take-only, with Take All (see [[Containers#Containers inside containers|Containers]]).

It can be dyed at a [[Dye vat]], its cloth from the cloth palette and its strap from the leather palette, each picked on its own; its hover card reads "Can be dyed at a dye vat" with the count of each. Dyed, it is drawn in its colours on your back, and its card names them, as "Cloth undyed, strap oxblood"; its icon in a bag, on the belt, and while dragged, and its portrait in the back slot, show the colours too: the linen takes the cloth's dye and the strap the strap's, each shade kept lighter or darker as it was drawn, while the outline, the buckle, and the toggle keep their paint. Lying on the floor it is still drawn in its own cream and brown.

{{item-sections satchel}}

## With friends

A guest's satchel is made, equipped, set down, and swapped by the host, by the same commands as any bag; a satchel set down travels with the floor it lies on, holding what it holds.

## Sources

<!-- sources at 6e5b20a -->
- `data/items.json`: the linen satchel: a bag on the back, its grid, its size in another bag
- `data/recipes.json` `weave_satchel`: woven at the loom from linen cloth
- `src/interact.js` `slotMenu`, `itemActions`: Unequip sets a bag down; on the floor Open, Swap bags, Pick up once empty
- `src/interact.js:1743-1752`, `src/inventory.js:93-114` (at d7cf736): Open in a chest or on a body, take-only (game #508)
- `src/inventory.js` `ensureBag`, `canStoreIn`: a bag's grid rides on its entry; a bag goes in another only empty
- `src/ui/inventory-actions.js` `takeAllFrom`, `takeAllWord`: Take All leaves a bag holding things, with its word
- `docs/39-the-valley.md`, section 5.4: open to all until Crafting 3 gates it (game #403, at 6e5b20a)
- `data/items.json:36`, `src/item-info.js:110-112`, `src/dye.js:68-79`, `src/ui/inventory-panel.js:239-240`: dyed at the vat, cloth and strap each from its palette; the card's line and its colours; the block's colour only where an item has no drawn icon (game #417, at 31d330a)
- `data/items.json:42`, `src/ui/inventory-panel.js:228-243`: its icon, picture, and portrait drawn in art round 5 (game #519, at ece297c)
- `data/items.json:42`, `src/ui/dyed-art.js:22-78`, `src/ui/inventory-panel.js:259-269`, `src/ui/inventory-panel.js:614-616`: dyed, its icon and portrait recoloured by each region's `tones` and `base`, the shades kept on the ramp, the outline and fittings painted; the bag, the slots, the belt, and the drag; the floor's picture painted (game #521, at bb52ef0)

{{navbox items}}
