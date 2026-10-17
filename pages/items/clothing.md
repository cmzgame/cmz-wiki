---
title: Clothing
categories: [Items, Mechanics]
aliases: [Equipped slots, Clothing slots, Clothes, Garments]
summary: Seven slots for what you have on: head, chest, hands, legs, feet, the waist for a belt, and the back for a bag.
---

**Clothing** is anything you put on rather than hold. The character screen (`C`) has seven slots for it: **head**, **chest**, **hands** (gloves), **legs**, **feet**, **waist** (the [[Belt]]), and **back** (the bag; see [[Inventory]]). Every garment names its one slot.

## How it works

### Equipping

**Equip** is on a garment's menu in your bag or an open container; on a bag it names the bag's grid, as **Equip ({{n items.rucksack.bag.0}}×{{n items.rucksack.bag.1}})** for the [[Rucksack]]. A garment lying on the floor offers **Equip** with its name in its right-click menu (**Equip cap**, or **Equip cap (swap)** when that slot is filled); `E` picks it up instead. A bag on the floor offers **Equip** the same way, or **Swap bags** when you already have one on your back. Double-clicking a garment in your bag equips it. Dragging a garment onto the wrong slot is refused.

Equipping over a filled slot swaps the old garment into your bag; with no room the game says "No room in your bag to unequip the old one." A new bag on the back drops the old bag at your feet with everything in it.

### Unequipping

**Unequip** on a slot's menu, or a double-click on the slot, puts the garment in your bag, or on the floor if the bag is full ("No room in your bag; it is on the floor."). Unequipping the bag sets it down. **Drop** on a slot's menu puts the garment at your feet; a bag or belt dropped this way keeps everything in it.

### What clothes do

Clothes do nothing beyond being drawn on your figure. A belt gives belt slots and a bag gives a grid; the rest are for looks. Every garment except the belts and bags is cloth, which some recipes take (see [[Crafting]]). At the [[Workbench]], with a [[Belt knife]] on you, any of them tears into two [[Rag|rags]]; the [[Loom]] makes the [[Linen cap]], the [[Linen breeches]], and the [[Linen tunic]] from [[Linen cloth]].

A new character starts in a [[Linen tunic]], [[Linen breeches]], [[Hobnail boots]], a [[Rope belt]], and a [[Burlap sack]], with the head bare. [[Work gloves]] and an [[Onion-head Hat]] turn up in chests. The dead are dressed too, and searching a body lays their clothes out to be taken.

### Garments

{{item-table kind=clothing}}

## With friends

Equipping and unequipping, the double-click included, are sent to the host and carried out for that player, and what each player has on is drawn for everyone.

## See also

- [[Inventory]], [[Hands]], [[Belt]]

## Sources

<!-- sources at 0e765f7 -->
- `src/inventory.js:9`: the seven slots, the code's `worn` slots
- `data/items.json:26-36`: each garment's `wear` slot
- `src/interact.js:1207-1229`: Equip on an item's menu, Equip (W×H) for a bag, in your bag or a container (game commit 9a450f2)
- `src/interact.js:177-199`, `src/interact.js:201-227`: Equip cap and Equip cap (swap) on a garment on the floor, Swap bags for a bag; not a simple action, so `E` picks the garment up (game commit 9a450f2)
- `src/ui/inventory-actions.js:167-173`: a double-click in your bag equips a garment (game commit 9a450f2)
- `src/ui/inventory-actions.js:66`: a drag onto the wrong slot is refused
- `src/interact.js:1064-1103`: equipping over a filled slot swaps; "No room in your bag to unequip the old one." (game commit 9a81879)
- `src/interact.js:1290-1350`: Unequip: to the bag or the floor; the bag is set down; Drop (game commit 9a450f2)
- `src/ui/inventory-actions.js:174-182`, `src/ui/inventory-panel.js:75-89`: a double-click on a slot runs its Equip or Unequip (game commit 9a450f2)
- `data/items.json:26-36`: belts give slots; every garment but the belts and bags is tagged cloth
- `data/recipes.json:23-124`, `data/recipes.json:155-199`: a garment torn into rags with a knife carried (`uses: cut`, game #222); the linen clothes at the loom (game #216)
- `data/recipes.json`: the recipes that take any cloth
- `data/kit.json:3`: the starter clothes, the head bare
- `data/loot.json:2`: gloves and the hood in the chest table
- `data/wardrobes.json`: what the dead have on
- `src/entities/character.js:148-171`: a body's garments laid out on its grid
- `src/ui/inventory-actions.js:203-366`: a guest's equip and unequip go to the host as commands; a guest's double-click on a slot sends the same entry (game commit 9a450f2)
- `src/net.js:229`: what each character has on travels in its record
