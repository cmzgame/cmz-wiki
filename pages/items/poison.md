---
title: Poison
categories: [Items, Potions]
aliases: [Vial of poison, Vials of poison, Ordinary poison]
summary: A vial of poison brewed at a cauldron from nightshade and grave moss; never drunk, and meant for a blade or arrows, which it cannot coat yet.
---

{{infobox-item poison}}

**Poison**, a vial of it, is brewed at a [[Cauldron]] from two [[Nightshade]], one [[Grave moss]], a [[Clay vial]], and a draught of clean water, over the cauldron's lit fire (see [[Potions]]). It is the ordinary of the two poisons; [[Strong poison]] is the other. It stacks to {{n items.poison.stack}} in one cell and may ride the [[Belt]]. Its vial has a green seal and a green glazed band. Grave moss grows only in the graveyard of [[The chapel]], so poison is scarce.

## Effects

None yet. It is **never drunk**: it has no Drink, and its key in any belt slot, or a double-click on it in your own bag, says "Poison isn't for drinking. Use it on a blade or on arrows." and does nothing else.

Its card reads "Poison", its kind "Poison", "**Use** on a blade or on arrows.", and "Ordinary poison: never drunk."; on a belt slot it leads with "carried only". No blade or arrow can be coated with it yet.

{{planned doc=47 step=3 note="Use poison on a blade or on arrows, poisoning the dead and wild game they strike: up to three stacks draining health for a while."}}

{{item-sections poison}}

## Sources

<!-- sources at 0fa02e5 -->
- `data/items.json:141`: the item, `poison: { tier: 1 }`, "a vial of", its stack, `belt`, its green seal and band
- `data/recipes.json:1739-1764`: two nightshade, a grave moss, a clay vial, water, at the cauldron
- `src/inventory.js:343-356`, `src/ui/inventory-actions.js:254`: never drunk: the line for its key and its double-click
- `src/item-info.js:253-256`, `src/item-info.js:385`: the card's lines
- `docs/47-potions-poisons-mana.md` section 6: the coat on a blade and the poisoned arrows, step 3, not built

{{navbox items}}
