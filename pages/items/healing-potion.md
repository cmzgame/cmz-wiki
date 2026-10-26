---
title: Healing potion
categories: [Items, Potions, Medicine]
aliases: [Healing potions, Health potion]
summary: A potion brewed at a cauldron from yarrow and sage; drunk, it heals a large share of your health at once.
---

{{infobox-item healing_potion}}

A **healing potion** is the game's one big heal. It is brewed at a [[Cauldron]] from two [[Yarrow]], one [[Sage]], a [[Clay vial]], and a draught of clean water, over the cauldron's lit fire (see [[Potions]]). It stacks to {{n items.healing_potion.stack}} in one cell and may ride the [[Belt]]. Its vial has a red seal and a red glazed band.

## Effects

Drunk, it heals {{n tuning.potions.heal}} health at once, up to your most, with a green number over you; [[Food]] heals only a little. It does not stop [[Bleeding]] (a [[Bandage]] does) and does nothing to the [[Infection]]. It may be drunk at full health. The empty vial comes back.

It is drunk by any belt slot's key, by Drink on its belt slot's or bag menu, or by a double-click in your own bag or on its slot. After any potion, the next waits {{n tuning.potions.between seconds}}: "You can't drink another potion yet." (see [[Potions#Between potions|Potions]]).

Its card reads "Healing potion", its kind "Potion", "Drink: heals {{n tuning.potions.heal}} at once.", and the wait between potions; on a belt slot it leads with "drunk".

{{item-sections healing_potion}}

## With friends

A guest's drink is sent to the host with the potion's id, and the host heals that player; the green number and the new health reach every screen.

## Sources

<!-- sources at 0fa02e5 -->
- `data/items.json:138`: the item, `potion: "heal"`, its stack, `belt`, its red seal and band
- `data/recipes.json:1661-1686`: two yarrow, one sage, a clay vial, water, at the cauldron, the fire lit
- `src/potions.js:53-58`, `data/tuning.json` `potions.heal`: the heal, up to the most, its green number
- `src/item-info.js:249`, `src/item-info.js:252`, `src/item-info.js:384`: the card's lines

{{navbox items}}
