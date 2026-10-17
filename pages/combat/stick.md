---
title: Stick
categories: [Items, Weapons]
aliases: [Sticks]
summary: The basic found weapon, from the pockets of the dead and the wild.
---

{{infobox-item stick}}

The **Stick** is the basic found weapon. It turns up in the pockets of [[The dead]] and in the wild, and can be made from a [[Plank]] at the [[Workbench]], with a [[Hatchet]] on you. It is also a material for other things.

## Combat

Left swings it. It has no other mode.

- It does {{n items.stick.weapon.damage}} damage, with a reach of {{n items.stick.weapon.range tiles}} and an arc of {{n items.stick.weapon.arc}} degrees.
- Swing {{n items.stick.weapon.swing seconds}}, stamina {{n items.stick.weapon.stamina}}.
- Stagger chance {{n items.stick.weapon.staggerChance}}; it floors on the default chance (see [[Stagger and knockdown]]).
- It lasts about {{n items.stick.weapon.kills}} kills (see [[Durability]]).

It is light and quick to find, but weak, and it breaks fast.

{{item-sections stick}}

## Sources

<!-- sources at 015eabc -->
- `data/loot.json:4`, `data/loot.json:19`: the stick in the `body` and `wild` tables
- `data/recipes.json:200-215`: sticks from a plank at the workbench, with `split`, a hatchet, carried (game #222); the recipes that take sticks
- `data/items.json:7`: the stick's `weapon` block, no `knockdown` of its own
- `data/combat.json` `blow.knockdownChance`, `src/combat.js:354`: the default knockdown chance

{{navbox weapons}}
