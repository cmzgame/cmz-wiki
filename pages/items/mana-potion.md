---
title: Mana potion
categories: [Items, Potions, Magic]
aliases: [Mana potions]
summary: A potion brewed at a cauldron from mageroot and a mushroom; drunk, it restores half a bar of mana at once.
---

{{infobox-item mana_potion}}

A **mana potion** restores [[Mana]]. It is brewed at a [[Cauldron]] from two [[Mageroot]], one [[Mushroom]], a [[Clay vial]], and a draught of clean water, over the cauldron's lit fire (see [[Potions]]). It stacks to {{n items.mana_potion.stack}} in one cell and may ride the [[Belt]]. Its vial has a blue seal and a blue glazed band.

## Effects

Drunk, it gives {{n tuning.potions.mana}} mana at once, up to your most ({{n tuning.player.mana}}), enough for a few more casts of the [[Fireball]]. It may be drunk with the bar full. The empty vial comes back. It is drunk the ways every potion is, and waits on the same {{n tuning.potions.between seconds}} after any potion (see [[Potions#Drinking one|Potions]]). A prayer at the [[Altar]] fills the bar for nothing but the walk.

Its card reads "Mana potion", its kind "Potion", "Drink: restores {{n tuning.potions.mana}} mana at once.", and the wait between potions.

{{item-sections mana_potion}}

## With friends

A guest's drink is sent to the host with the potion's id; the host fills that player's bar, and the guest's bar follows from their record.

## Sources

<!-- sources at 0fa02e5 -->
- `data/items.json:140`: the item, `potion: "mana"`, its stack, `belt`, its blue seal and band
- `data/recipes.json:1713-1738`: two mageroot, a mushroom, a clay vial, water, at the cauldron
- `src/potions.js:62-64`, `data/tuning.json` `potions.mana`: the mana, up to the player's most
- `src/item-info.js:251-252`: the card's lines

{{navbox items}}
