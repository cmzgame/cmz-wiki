---
title: Hands
categories: [Items, Mechanics]
aliases: [Main hand, Off hand, Equipping, Equip, Two-handed]
summary: You have two hands, the main and the off; an item says which it may go in, and a two-handed item takes both.
---

You have two **hands**: the **main hand** and the **off hand**. What you hold is what you fight with, light the way with, and use as a tool. The two hand slots are on the character screen (`C`), and the "Hands" line at the top left names what is in each.

## How it works

### Which hand

Every item that can be held says where it may go:

- **Main**: the main hand only (the [[Throwing spear]]).
- **Off**: the off hand only (the [[Wooden shield]]).
- **Both**: it takes both hands (the [[Hunting bow]], the [[Halberd]]).
- **Either**: whichever hand you choose. Its menu offers **Equip (main hand)** and **Equip (off hand)**. Equipped with no choice (a double-click, or picking it up), it goes to the main hand if that is free, else the off hand if that is free, else it swaps with what is in the main hand.

Items that cannot be held (food, materials) have no hand Equip entry. Clothing and bags have an **Equip** of their own, which puts them on rather than in a hand (see [[Clothing]]).

### Equipping and unequipping

**Equip** is on an item's menu in your own bag. Whatever was in that hand goes into your bag, or onto your [[Belt]]; if there is nowhere to put it, the equip is refused ("Your hands are full."). An item in a container must be taken into your bag first.

**Unequip** on a hand's menu, or a double-click on the hand, puts the item away in the bag or on the belt ("Nowhere to put it." if neither has room). Dragging one hand's item onto the other hand swaps them. **Drop** on a hand's menu drops the item at your feet.

### Two-handed items

Equipping a two-handed item pushes the off hand's item into your bag and remembers it. The next one-handed item you put in your main hand brings the remembered item back to the off hand, once.

### Two weapons

With a weapon in each hand you fight with both in turn (see [[Combat]]). The [[Throwing spear]] is never held beside another weapon, though a shield or a torch beside it is fine. A [[Torch]] counts as a light, not a weapon, for this rule.

Picking up a single holdable item puts it in a free hand before the bag, so picking up a sword with a torch in one hand leaves you holding both.

## With friends

A guest's equips, unequips, and swaps are sent to the host by the item's id and the slot, and the host performs them for that player. What each player holds is drawn for everyone.

## See also

- [[Inventory]], [[Belt]], [[Clothing]]
- [[Combat]]

## Sources

<!-- sources at 9205ad7 -->
- `src/ui/hud.js:111-116`: the "Hands" line
- `data/items.json`: each item's `hands`
- `src/items.js:112-172`: canHold, pickHand, hold, release
- `src/inventory.js:199`: either with no choice: main, else off, else main
- `src/interact.js:1015-1090`: the Equip entries, only in your own bag
- `src/inventory.js:194-224`: equip stows the old item or refuses
- `src/interact.js:890-898`: "Your hands are full."
- `src/interact.js:877-887`: Unequip, "Nowhere to put it."
- `src/ui/inventory-actions.js:89-98`: hand to hand swaps
- `src/interact.js:1095-1147`: Drop on a hand's menu
- `src/inventory.js:226-234`: the off hand's item brought back once
- `src/combat.js:272-283`: two weapons swing in turn
- `src/items.js:121-123`: what counts as a weapon for the spear's rule; a torch does not
- `src/interact.js:157-162`: a single holdable item goes to a free hand first
- `src/ui/inventory-actions.js:200-358`: a guest's equips sent by uid and slot
