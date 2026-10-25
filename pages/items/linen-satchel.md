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

Taken off, it keeps what is in it: **Unequip** sets it down, and on the floor it is a container to **Open**, take from, and equip again (see [[Inventory]]).

It can be dyed at a [[Dye vat]], its cloth from the cloth palette and its strap from the leather palette, each picked on its own; its hover card reads "Can be dyed at a dye vat" with the count of each. Dyed, it is drawn in its colours on your back and as a block of the cloth's colour in a bag, and its card names them, as "Cloth undyed, strap oxblood".

{{item-sections satchel}}

## With friends

A guest's satchel is made, equipped, set down, and swapped by the host, by the same commands as any bag; a satchel set down travels with the floor it lies on, holding what it holds.

## Sources

<!-- sources at 6e5b20a -->
- `data/items.json`: the linen satchel: a bag on the back, its grid, its size in another bag
- `data/recipes.json` `weave_satchel`: woven at the loom from linen cloth
- `src/interact.js` `slotMenu`, `itemActions`: Unequip sets a bag down; on the floor Open, Swap bags, Pick up once empty
- `src/inventory.js` `ensureBag`, `canStoreIn`: a bag's grid rides on its entry; a bag goes in another only empty
- `src/ui/inventory-actions.js` `takeAllFrom`, `takeAllWord`: Take All leaves a bag holding things, with its word
- `docs/39-the-valley.md`, section 5.4: open to all until Crafting 3 gates it (game #403, at 6e5b20a)
- `data/items.json:36`, `src/item-info.js:110-112`, `src/dye.js:68-79`, `src/ui/inventory-panel.js:239-240`: dyed at the vat, cloth and strap each from its palette; the card's line and its colours; the block's colour (game #417, at 31d330a)

{{navbox items}}
