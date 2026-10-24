---
title: Arming sword
categories: [Items, Weapons]
aliases: [Sword, Swords]
summary: A one-handed blade with a wide arc and the longest life of the one-handers.
---

{{infobox-item sword}}

The **Arming sword** (the Sword until the names were made specific) is a one-handed blade found in chests. It has a wide arc, a quick swing, and lasts longer than any other one-handed weapon.

## Combat

Left swings it. It has no other mode.

- It does {{n items.sword.weapon.damage}} damage, with a reach of {{n items.sword.weapon.range tiles}} and an arc of {{n items.sword.weapon.arc}} degrees.
- Swing {{n items.sword.weapon.swing seconds}}, stamina {{n items.sword.weapon.stamina}}.
- Stagger chance {{n items.sword.weapon.staggerChance}}; it never floors (see [[Stagger and knockdown]]).
- It lasts about {{n items.sword.weapon.kills}} kills (see [[Durability]]).

Like any hit, it cancels a bite being wound up.

{{item-sections sword}}

## Sources

<!-- sources at 37e8726 -->
- `data/loot.json:2`: the sword in the `chest` table
- `data/items.json:8`: the sword's `weapon` block
- `data/items.json`: the other one-handers' `kills` it outlasts
- `data/combat.json:10` `blow.knockdownChance`, `src/combat.js:373-374`: no `knockdown` of its own, so the default chance, 0: it never floors
- `src/combat.js:383`, `src/entities/zombie.js:140-148`: like any landed hit, it cancels a bite being wound up

{{navbox weapons}}
