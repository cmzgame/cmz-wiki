---
title: Strong poison
categories: [Items, Potions]
aliases: [Vial of strong poison, Vials of strong poison]
summary: A vial of strong poison brewed at a cauldron from wolfsbane and grave moss; never drunk, and meant for a blade or arrows, which it cannot coat yet.
---

{{infobox-item strong_poison}}

**Strong poison**, a vial of it, is brewed at a [[Cauldron]] from two [[Wolfsbane]], one [[Grave moss]], a [[Clay vial]], and a draught of clean water, over the cauldron's lit fire (see [[Potions]]). It is the stronger of the two poisons; [[Poison]] is the other. It stacks to {{n items.strong_poison.stack}} in one cell and may ride the [[Belt]]. Its vial has a black seal and a darker green glazed band.

## Effects

None yet. It is **never drunk**: it has no Drink, and its key in any belt slot, or a double-click on it in your own bag, says "Poison isn't for drinking. Use it on a blade or on arrows." and does nothing else.

Its card reads "Strong poison", its kind "Poison", "**Use** on a blade or on arrows.", and "Strong poison: never drunk."; on a belt slot it leads with "carried only". No blade or arrow can be coated with it yet.

{{planned doc=47 step=3 note="Use strong poison on a blade or on arrows; it drains twice as fast as ordinary poison."}}

{{item-sections strong_poison}}

## Sources

<!-- sources at 0fa02e5 -->
- `data/items.json:142`: the item, `poison: { tier: 2 }`, "a vial of", its stack, `belt`, its black seal and darker band
- `data/recipes.json:1765-1790`: two wolfsbane, a grave moss, a clay vial, water, at the cauldron
- `src/inventory.js:343-356`, `src/ui/inventory-actions.js:254`: never drunk: the line for its key and its double-click
- `src/item-info.js:253-256`, `src/item-info.js:385`: the card's lines
- `docs/47-potions-poisons-mana.md` section 6: the coat, step 3, not built

{{navbox items}}
