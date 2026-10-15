---
title: Plank
categories: [Items, Weapons, Materials]
aliases: [Planks]
summary: A building material that also swings as a weapon.
---

{{infobox-item plank}}

The **Plank** is a building material: doors, windows, and boards for [[Openings]] are made from planks (see [[Building]]). It is part of the starting bag, and it also swings as a weapon.

## Combat

Left swings it. It has no other mode.

- It does {{n items.plank.weapon.damage}} damage, with a reach of {{n items.plank.weapon.range tiles}} and an arc of {{n items.plank.weapon.arc}} degrees.
- Swing {{n items.plank.weapon.swing seconds}}, stamina {{n items.plank.weapon.stamina}}.
- Stagger chance {{n items.plank.weapon.staggerChance}}; it floors on the default chance (see [[Stagger and knockdown]]).
- It lasts about {{n items.plank.weapon.kills}} kills (see [[Durability]]), so a plank used as a weapon is a plank lost for building.

In the off hand it counts as a weapon (see [[Dual wielding]]).

{{item-sections plank}}

## Sources

<!-- sources at 9205ad7 -->
- `data/build.json`: doors and windows cost planks
- `src/interact.js:485-496`: boarding an opening takes a plank
- `src/game.js:113`: a plank in the starting bag
- `data/items.json`: the plank's `weapon` block
- `src/combat.js:37`, `src/combat.js:343`: the default knockdown chance
- `src/combat.js:105-110`: in the off hand it is a weapon

{{navbox weapons}}
