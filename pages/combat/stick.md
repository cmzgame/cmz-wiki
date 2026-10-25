---
title: Stick
categories: [Items, Weapons]
aliases: [Sticks]
summary: The basic found weapon, from the pockets of the dead and the wild, and gathered under any standing tree once a day.
---

{{infobox-item stick}}

The **Stick** is the basic found weapon. It turns up in the pockets of [[The dead]] and in the wild, can be made from a [[Plank]] at the [[Workbench]], with a [[Hatchet]] on you, and is gathered by hand under any standing tree: **Gather sticks** on the tree's menu gives {{n tuning.trees.sticks.count.0}} or {{n tuning.trees.sticks.count.1}} in {{n tuning.trees.sticks.seconds seconds}}, and that tree has none again until the next day of the world's clock (see [[Trees#Sticks]]). Its card says so: "Gathered under any standing tree", and how many a day from each tree. It is also a material for other things.

## Combat

Left swings it. It has no other mode.

- It does {{n items.stick.weapon.damage}} damage, with a reach of {{n items.stick.weapon.range tiles}} and an arc of {{n items.stick.weapon.arc}} degrees.
- Swing {{n items.stick.weapon.swing seconds}}, stamina {{n items.stick.weapon.stamina}}.
- Stagger chance {{n items.stick.weapon.staggerChance}}; it never floors (see [[Stagger and knockdown]]).
- It lasts about {{n items.stick.weapon.kills}} kills (see [[Durability]]).

It is light and quick to find, but weak, and it breaks fast.

{{item-sections stick}}

## Sources

<!-- sources at 6e3ab37 -->
- `data/loot.json:5`, `data/loot.json:20`: the stick in the `body` and `wild` tables
- `data/recipes.json:200-215`, `src/stations.js:149`: sticks from a plank at the workbench, with `split`, a hatchet, carried (game #222); the recipes that take sticks
- `src/trees.js:180-248`, `data/tuning.json:195`: Gather sticks under any standing tree, the count and the seconds, once a game day a tree (game #461)
- `src/item-info.js:99-109`: the card's line, from the tuning (game #461)
- `data/items.json:7`: the stick's `weapon` block, no `knockdown` of its own
- `data/combat.json:10` `blow.knockdownChance`, `src/combat.js:373-374`: the default knockdown chance, 0, so it never floors

{{navbox weapons}}
