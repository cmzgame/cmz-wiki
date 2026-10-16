---
title: Torch
categories: [Items, Weapons, Light]
aliases: [Torches]
summary: A light held in either hand that is also a weak weapon, whose blow may set the dead alight.
---

{{infobox-item torch}}

The **Torch** is a light first. Held in either hand it lights the way, out to {{n items.torch.fire.radius tiles}}, and at night it draws the eye of [[The dead]]. It is made at the [[Workbench]] and is also a weak weapon.

## Combat

Left swings it. It has no other mode.

- It does {{n items.torch.weapon.damage}} damage, with a reach of {{n items.torch.weapon.range tiles}} and an arc of {{n items.torch.weapon.arc}} degrees.
- Stagger chance {{n items.torch.weapon.staggerChance}}; it floors on the default chance (see [[Stagger and knockdown]]).
- Each of the dead a blow lands on has a {{n items.torch.weapon.ignite}} chance to be set alight, in either hand (see [[Burning]]). The spark comes before the damage, so a body the blow kills burns on.
- It loses durability like any weapon and breaks after about {{n items.torch.weapon.kills}} kills (see [[Durability]]).

In the off hand beside a weapon such as the [[Sword]] it counts as a weapon: clicking faster than the main weapon recovers swings the torch and leaves the player exposed (see [[Dual wielding]]). It may be held beside the [[Throwing spear]], and there it is only a light: it never swings.

At night, a torch in hand counts as a sighting of its carrier for the dead that see its flame. Two torches are seen from farther, and a torch on the belt from less far (see [[The dead]] and [[Light]]).

{{item-sections torch}}

## Sources

<!-- sources at 3b7cb9a -->
- `data/items.json`: the torch: either hand, `fire.radius`, its `weapon` block, `kills`, `ignite`
- `data/recipes.json`: the torch recipe at the workbench
- `data/combat.json` `blow.knockdownChance`, `src/combat.js:355`: the default knockdown chance
- `src/combat.js:321`, `src/combat.js:359-361`, `src/burn.js:25-32`: the blow's `ignite` chance rolled on each body it lands on, in the off hand too, before the damage
- `src/combat.js:369`, `src/combat.js:377-387`: it loses durability and breaks like any weapon
- `src/combat.js:113-122`, `src/combat.js:286-295`: in the off hand it swings when the main hand is recovering, never beside the spear
- `src/items.js:112-133`: a torch is not a weapon beside the spear
- `src/entities/zombie.js:308-327`, `src/game.js:618-627`: a torch seen at night, two torches, the belt

{{navbox weapons}}
