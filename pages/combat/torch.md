---
title: Torch
categories: [Items, Weapons, Light]
aliases: [Torches]
summary: A light held in either hand that is also a weak weapon, whose blow may set the dead alight.
---

{{infobox-item torch}}

The **Torch** is a light first. Held in either hand it lights the way, out to {{n items.torch.fire.radius tiles}}, and gives back your sight of [[The dead]] in the dark to that reach; at night it also draws their eye. It is made at the [[Workbench]] and is also a weak weapon.

## Combat

Left swings it. It has no other mode.

- It does {{n items.torch.weapon.damage}} damage, with a reach of {{n items.torch.weapon.range tiles}} and an arc of {{n items.torch.weapon.arc}} degrees.
- Stagger chance {{n items.torch.weapon.staggerChance}}; it floors on the default chance (see [[Stagger and knockdown]]).
- Each of the dead a blow lands on has a {{n items.torch.weapon.ignite}} chance to be set alight, in either hand (see [[Burning]]). The spark comes before the damage, so a body the blow kills burns on.
- It loses durability like any weapon and breaks after about {{n items.torch.weapon.kills}} kills (see [[Durability]]).

In the off hand beside a weapon such as the [[Sword]] it counts as a weapon: clicking faster than the main weapon recovers swings the torch and leaves the player exposed (see [[Dual wielding]]). It may be held beside the [[Throwing spear]], and there it is only a light: it never swings.

In the dark you see the dead whole as far as your own torch's light reaches, where without one you see them only close by; the dead in its light are seen by your friends too (see [[Sight#Darkness|Sight]]). At night, a torch in hand counts as a sighting of its carrier for the dead that see its flame. Two torches are seen from farther, and a torch on the belt from less far (see [[The dead]] and [[Light]]).

{{item-sections torch}}

## Sources

<!-- sources at 9d9a5b5 -->
- `data/items.json`: the torch: either hand, `fire.radius`, its `weapon` block, `kills`, `ignite`
- `data/recipes.json`: the torch recipe at the workbench
- `data/combat.json` `blow.knockdownChance`, `src/combat.js:354`: the default knockdown chance
- `src/combat.js:320`, `src/combat.js:358-360`, `src/burn.js:25-32`: the blow's `ignite` chance rolled on each body it lands on, in the off hand too, before the damage
- `src/combat.js:368`, `src/combat.js:376-386`: it loses durability and breaks like any weapon
- `src/combat.js:113-122`, `src/combat.js:285-294`: in the off hand it swings when the main hand is recovering, never beside the spear
- `src/items.js:112-133`: a torch is not a weapon beside the spear
- `src/entities/zombie.js:313-332`, `src/game.js:628-637`: a torch seen at night, two torches, the belt
- `src/sight.js:16-27`, `src/game.js:629-638`: the carrier's own torch sets how far it sees the dead in the dark (game #150)

{{navbox weapons}}
