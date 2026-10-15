---
title: Torch
categories: [Items, Weapons, Light]
aliases: [Torches]
summary: A light held in either hand that is also a weak weapon.
---

{{infobox-item torch}}

The **Torch** is a light first. Held in either hand it lights the way, out to {{n items.torch.fire.radius tiles}}, and at night it draws the eye of [[The dead]]. It is made at the [[Workbench]] and is also a weak weapon.

## Combat

Left swings it. It has no other mode.

- It does {{n items.torch.weapon.damage}} damage, with a reach of {{n items.torch.weapon.range tiles}} and an arc of {{n items.torch.weapon.arc}} degrees.
- Stagger chance {{n items.torch.weapon.staggerChance}}; it floors on the default chance (see [[Stagger and knockdown]]).
- It wears like any weapon and breaks after about {{n items.torch.weapon.kills}} kills (see [[Durability]]).

In the off hand it counts as a weapon: clicking faster than the main weapon recovers swings the torch and leaves the player exposed (see [[Dual wielding]]). It may be held beside the [[Throwing spear]].

At night, a torch in hand counts as a sighting of its carrier for the dead that see its flame. Two torches are seen from farther, and a torch on the belt from less far (see [[The dead]] and [[Light]]).

{{item-sections torch}}

## Sources

<!-- sources at 9205ad7 -->
- `data/items.json`: the torch: either hand, `fire.radius`, its `weapon` block, `kills`
- `data/recipes.json`: the torch recipe at the workbench
- `src/combat.js:37`, `src/combat.js:343`: the default knockdown chance
- `src/combat.js:362-372`: it wears and breaks like any weapon
- `src/combat.js:105-110`, `src/combat.js:267-283`: in the off hand it swings when the main hand is recovering
- `src/items.js:112-133`: a torch is not a weapon beside the spear
- `src/entities/zombie.js:295-311`, `src/game.js:561`: a torch seen at night, two torches, the belt

{{navbox weapons}}
