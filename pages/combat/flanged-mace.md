---
title: Flanged mace
categories: [Items, Weapons]
aliases: [Mace, Maces]
summary: The strongest one-hander: it always staggers, interrupts a bite, and floors more often.
---

{{infobox-item mace}}

The **Flanged mace** (the Mace until the names were made specific) is the strongest one-handed weapon. It always staggers, interrupts a bite already under way, and floors the dead more often than any other weapon.

## Combat

Left swings it. It has no other mode.

- It does {{n items.mace.weapon.damage}} damage, with a reach of {{n items.mace.weapon.range tiles}} and an arc of {{n items.mace.weapon.arc}} degrees.
- Swing {{n items.mace.weapon.swing seconds}}, stamina {{n items.mace.weapon.stamina}}, both more than the [[Arming sword]].
- Stagger chance {{n items.mace.weapon.staggerChance}}, and every hit interrupts a bite.
- It floors on {{n items.mace.weapon.knockdown}} of hits, against the default {{n combat.blow.knockdownChance}} (see [[Stagger and knockdown]]).
- It lasts about {{n items.mace.weapon.kills}} kills (see [[Durability]]).

It may be held in either hand.

{{item-sections mace}}

## Sources

<!-- sources at 9205ad7 -->
- `data/items.json`: the mace: either hand, its `weapon` block (`staggerChance`, `interrupts`, `knockdown`, `kills`)
- `src/entities/zombie.js:142-152`: `interrupts` cancels a bite under way
- `data/combat.json` `blow.knockdownChance`, `src/combat.js:348`: the default knockdown chance the mace overrides

{{navbox weapons}}
