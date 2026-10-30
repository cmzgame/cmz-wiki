---
title: Stamina potion
categories: [Items, Potions]
aliases: [Stamina potions, Stamina buff, Buff, Buffs]
summary: A potion brewed at a cauldron from nettle and honey; drunk, it fills your stamina and doubles how fast it comes back for a while, a buff shown in gold.
---

{{infobox-item stamina_potion}}

A **stamina potion** fills your [[Stamina]] and speeds its recovery for a while. It is brewed at a [[Cauldron]] from two [[Nettle]], one [[Jar of honey]], a [[Clay vial]], and a draught of clean water, over the cauldron's lit fire (see [[Potions]]). It stacks to {{n items.stamina_potion.stack}} in one cell and may ride the [[Belt]]. Its vial has a gold seal and a gold glazed band.

## Effects

Drunk, it fills the stamina bar at once and ends being winded. For {{n tuning.potions.staminaSeconds seconds}} after, stamina comes back {{n tuning.potions.staminaMult}} times as fast as it would; the slowing from hunger, thirst, and tiredness still applies on top. A second one drunk while the first lasts starts the time again; it does not add to it. The empty vial comes back.

It is drunk the ways every potion is, and waits on the same {{n tuning.potions.between seconds}} after any potion (see [[Potions#Drinking one|Potions]]). The jar of honey the brew spends leaves its empty [[Clay jar]] in your bag as the make starts.

### Thrown

Held in the main hand it is thrown from the middle button or Q, up to {{n items.stamina_potion.thrown.range tiles}}, and shatters where it lands in a gold burst, the vial gone: every player within {{n items.stamina_potion.thrown.splash.radius tiles}} has their stamina filled and the buff started, the thrower included; a villager has no stamina and gets nothing. For each player it is a drink, with the same wait. See [[Potions#Holding and throwing one|Potions]].

### The buff

While it lasts, a gold bolt in a gold frame shows in the row of debuffs at the top right, with its time left under it (see [[Interface#Top right: debuffs|Interface]]). It is the game's first buff: a buff sits in the same row as the debuffs, framed in gold where a debuff is framed in red. Hovering shows its card: **Stamina potion**, "Buff" with the time left, "Stamina comes back twice as fast.", and "It passes." It goes when the time runs out.

Its card in the bag reads "Stamina potion", its kind "Potion", "Drink: fills your stamina, and it comes back twice as fast for {{n tuning.potions.staminaSeconds}} seconds.", the throw and "Fills stamina in every player it splashes, coming back twice as fast for {{n tuning.potions.staminaSeconds}} seconds.", and the wait between potions.

{{item-sections stamina_potion}}

## With friends

The host runs the buff down for every player; it is kept on the player, in the save and in each player's record, so a guest's own row shows their buff in gold, and a guest's own screen regenerates their stamina at the buff's rate. It is part of the multiplayer sync check.

## Sources

<!-- sources at 0fa02e5 -->
- `data/items.json:139` `hands`, `thrown`, `src/archery.js:631-636`, `src/potions.js:66-98`, `src/item-info.js:187-197` (at 8d361e5): held and thrown, the splash filling every player's stamina within the radius, never a villager's; the card (game #586)
- `src/stations.js:113-163`, `src/stations.js:232-235` (at 8d361e5): the honey's jar back as the brew starts (game #585)
- `data/items.json:139`: the item, `potion: "stamina"`, its stack, `belt`, its gold seal and band
- `data/recipes.json:1687-1712`: two nettle, a jar of honey, a clay vial, water, at the cauldron
- `src/potions.js:58-62`, `data/tuning.json` `potions.staminaMult`, `potions.staminaSeconds`: the bar filled, winded ended, the buff started again, never added
- `src/entities/player.js:192-197`: the buff multiplies regeneration with the needs' slowing
- `src/potions.js:130-140`: the buff run down in the host's step
- `src/debuffs.js:42-50`, `src/ui/debuff-icons.js:36-40`, `style.css:580`: the buff in the row: a gold bolt, the gold frame, its card
- `src/item-info.js:250`, `src/item-info.js:252`: the card's lines
- `src/game.js:476`, `src/net.js:141-143`: the buff in the record and the sync check

{{navbox items}}
