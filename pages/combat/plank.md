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
- Stagger chance {{n items.plank.weapon.staggerChance}}; it never floors (see [[Stagger and knockdown]]).
- It lasts about {{n items.plank.weapon.kills}} kills (see [[Durability]]), so a plank used as a weapon is a plank lost for building.

In the off hand it counts as a weapon (see [[Dual wielding]]).

{{item-sections plank}}

## Sources

<!-- sources at 37e8726 -->
- `data/build.json:73-90`: doors and windows cost planks
- `src/interact.js:554-572`: boarding an opening takes a plank
- `data/kit.json:8`, `src/game.js:137-139`: a plank in the starting bag
- `data/items.json:5`: the plank's `weapon` block
- `data/combat.json:10` `blow.knockdownChance`, `src/combat.js:373-374`: no `knockdown` of its own, so the default chance, 0: it never floors
- `src/combat.js:115-126`: in the off hand it is a weapon

{{navbox weapons}}
