---
title: Hatchet
categories: [Items, Weapons, Tools]
aliases: [Hatchets, Axe]
summary: A one-handed tool and a solid weapon, found in chests.
---

{{infobox-item hatchet}}

The **Hatchet** is a one-handed tool found in chests. It is a solid weapon in either hand.

## Combat

Left swings it. It has no other mode.

- It does {{n items.hatchet.weapon.damage}} damage, with a reach of {{n items.hatchet.weapon.range tiles}} and an arc of {{n items.hatchet.weapon.arc}} degrees.
- Swing {{n items.hatchet.weapon.swing seconds}}, stamina {{n items.hatchet.weapon.stamina}}.
- Stagger chance {{n items.hatchet.weapon.staggerChance}}; it floors on the default chance (see [[Stagger and knockdown]]).
- It lasts about {{n items.hatchet.weapon.kills}} kills (see [[Durability]]).

Its arc is narrower than the [[Sword]]'s.

{{item-sections hatchet}}

## Sources

<!-- sources at 9205ad7 -->
- `data/loot.json`: the hatchet in the `chest` table
- `data/items.json`: the hatchet: either hand, its `weapon` block
- `src/combat.js:37`, `src/combat.js:343`: the default knockdown chance

{{navbox weapons}}
