---
title: Sword
categories: [Items, Weapons]
aliases: [Swords]
summary: A one-handed blade with a wide arc and the longest life of the one-handers.
---

{{infobox-item sword}}

The **Sword** is a one-handed blade found in chests. It has a wide arc, a quick swing, and lasts longer than any other one-handed weapon.

## Combat

Left swings it. It has no other mode.

- It does {{n items.sword.weapon.damage}} damage, with a reach of {{n items.sword.weapon.range tiles}} and an arc of {{n items.sword.weapon.arc}} degrees.
- Swing {{n items.sword.weapon.swing seconds}}, stamina {{n items.sword.weapon.stamina}}.
- Stagger chance {{n items.sword.weapon.staggerChance}}; it floors on the default chance (see [[Stagger and knockdown]]).
- It lasts about {{n items.sword.weapon.kills}} kills (see [[Durability]]).

It does not interrupt a bite already under way.

{{item-sections sword}}

## Sources

<!-- sources at 9205ad7 -->
- `data/loot.json`: the sword in the `chest` table
- `data/items.json`: the sword's `weapon` block, and the other one-handers' `kills` it outlasts
- `src/combat.js:37`, `src/combat.js:343`: the default knockdown chance
- `src/entities/zombie.js:142-152`: no `interrupts`, so a bite under way goes on

{{navbox weapons}}
