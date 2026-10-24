---
title: Flanged mace
categories: [Items, Weapons]
aliases: [Mace, Maces]
summary: The strongest one-hander: it always staggers, and it is the only one-handed weapon that floors.
---

{{infobox-item mace}}

The **Flanged mace** (the Mace until the names were made specific) is the strongest one-handed weapon. It always staggers, and it is the only one-handed weapon that floors the dead.

## Combat

Left swings it. It has no other mode.

- It does {{n items.mace.weapon.damage}} damage, with a reach of {{n items.mace.weapon.range tiles}} and an arc of {{n items.mace.weapon.arc}} degrees.
- Swing {{n items.mace.weapon.swing seconds}}, stamina {{n items.mace.weapon.stamina}}, both more than the [[Arming sword]].
- Stagger chance {{n items.mace.weapon.staggerChance}}.
- It floors on {{n items.mace.weapon.knockdown}} of hits; other one-handed weapons never do (see [[Stagger and knockdown]]).
- It lasts about {{n items.mace.weapon.kills}} kills (see [[Durability]]).

It may be held in either hand.

{{item-sections mace}}

## Sources

<!-- sources at 37e8726 -->
- `data/items.json:10`: the mace: either hand, its `weapon` block (`staggerChance`, `knockdown`, `kills`)
- `src/entities/zombie.js:149-160`: a hit staggers by its weapon's `staggerChance`, the mace's 1, so always
- `data/items.json:10` `weapon.knockdown`, `src/combat.js:373-374`: the mace floors on its own `knockdown` chance
- `data/combat.json:10` `blow.knockdownChance`, `src/combat.js:373-374`: the default knockdown chance the mace overrides, 0, so a one-hander with no `knockdown` of its own never floors

{{navbox weapons}}
