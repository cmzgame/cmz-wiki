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

It is drunk by the utility slot's key or menu, by Drink on its bag menu or on the menu of a hand holding it, or by a double-click in your own bag or on its utility slot; a hand slot's key draws it into that hand instead. After any potion, the next waits {{n tuning.potions.between seconds}}: "You can't drink another potion yet." (see [[Potions#Between potions|Potions]]).

### Thrown

Held in the main hand (Equip, a drag, or a hand slot's key) it is thrown from the middle button or Q, with the bow's draw, up to {{n items.healing_potion.thrown.range tiles}}; the left button does nothing with it in hand. It shatters where it lands, the vial gone, in a red burst and a stain, and heals {{n tuning.potions.heal}} in every player and villager within {{n items.healing_potion.thrown.splash.radius tiles}}, the thrower included. For each player it is a drink: one within {{n tuning.potions.between seconds}} of their last potion gets nothing from it, and one it heals starts their wait again. See [[Potions#Holding and throwing one|Potions]].

Its card reads "Healing potion", its kind "Potion", "Drink: heals {{n tuning.potions.heal}} at once.", the throw ("Throw (middle button or Q): shatters where it lands, up to {{n items.healing_potion.thrown.range}} tiles, splashing ... across.", "Heals {{n tuning.potions.heal}} at once in every player and villager it splashes."), and the wait between potions, a splash counting as a drink; on the utility slot it leads with "drunk", on a hand slot with "drawn".

{{item-sections healing_potion}}

## With friends

A guest's drink is sent to the host with the potion's id, and the host heals that player; the green number and the new health reach every screen. A guest's throw goes as a thrown spear's does, and the host splashes it on everyone in reach, host, guests, and villagers alike, each player's own wait kept; every screen draws the burst where the flight came down.

## Sources

<!-- sources at 0fa02e5 -->
- `data/items.json:138` `hands`, `thrown`, `src/archery.js:313-322`, `src/archery.js:631-636`, `src/potions.js:62-98`, `src/item-info.js:187-197` (at 8d361e5): held and thrown, the splash's heal on every player and villager within the radius, a splash a drink per player, the card's lines (game #586)
- `data/items.json:138`: the item, `potion: "heal"`, its stack, `belt`, its red seal and band
- `data/recipes.json:1661-1686`: two yarrow, one sage, a clay vial, water, at the cauldron, the fire lit
- `src/potions.js:53-58`, `data/tuning.json` `potions.heal`: the heal, up to the most, its green number
- `src/item-info.js:249`, `src/item-info.js:252`, `src/item-info.js:384`: the card's lines

{{navbox items}}
