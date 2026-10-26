---
title: Arming sword
categories: [Items, Weapons]
aliases: [Sword, Swords]
summary: A one-handed blade with a wide arc and the longest life of the one-handers.
---

{{infobox-item sword}}

The **Arming sword** (the Sword until the names were made specific) is a one-handed blade. The valley's one found sword lies in the chest of [[The toll house]], beside a [[Flanged mace]]. It has a wide arc, a quick swing, and lasts longer than any other one-handed weapon.

## Combat

Left swings it. It has no other mode.

- It does {{n items.sword.weapon.damage}} damage, with a reach of {{n items.sword.weapon.range tiles}} and an arc of {{n items.sword.weapon.arc}} degrees.
- Swing {{n items.sword.weapon.swing seconds}}, stamina {{n items.sword.weapon.stamina}}.
- Stagger chance {{n items.sword.weapon.staggerChance}}; it never floors (see [[Stagger and knockdown]]).
- It lasts about {{n items.sword.weapon.kills}} kills (see [[Durability]]).

Like any hit, it cancels a bite being wound up.

**Poison:** it is a blade, so a [[Poison]] or [[Strong poison]] [[Use|used]] on it coats it for {{n combat.poison.hits}} landed hits. A swing that lands spends one hit, however many bodies it strikes, and poisons every one of them; a miss spends none. See [[Poison#Coating a blade|Poison]].

{{item-sections sword}}

## Sources

<!-- sources at 37e8726 -->
- `data/items.json` `tags` `blade`, `src/combat.js:392-435` (at 307ed34): a blade, coated by a poison; a landed swing spends one hit and poisons every body it strikes (game #496)
- `data/loot.json:2`: the sword in the `chest` table
- `data/items.json:8`: the sword's `weapon` block
- `data/items.json`: the other one-handers' `kills` it outlasts
- `data/combat.json:10` `blow.knockdownChance`, `src/combat.js:373-374`: no `knockdown` of its own, so the default chance, 0: it never floors
- `src/combat.js:383`, `src/entities/zombie.js:140-148`: like any landed hit, it cancels a bite being wound up
- `data/loot.json`, `tools/mapgen/valley.py`: where it is found, a table per kind of container, gear placed once (game #399, at ce21ffc)

{{navbox weapons}}
