---
title: Halberd
categories: [Items, Weapons]
aliases: [Halberds, Polearm]
summary: A two-handed polearm with a wide, slow sweep and a long, narrow thrust.
---

{{infobox-item halberd}}

The **Halberd** is a two-handed polearm. It leaves no hand for a [[Shield]] or a [[Torch]]. It has the longest reach of any weapon held in the hand, and the longest life.

## Combat

- **Left** is a wide, long, slow sweep: {{n items.halberd.weapon.damage}} damage, a reach of {{n items.halberd.weapon.range tiles}}, an arc of {{n items.halberd.weapon.arc}} degrees, swing {{n items.halberd.weapon.swing seconds}}, stamina {{n items.halberd.weapon.stamina}}, stagger chance {{n items.halberd.weapon.staggerChance}}.
- **Middle** or **Q** is a thrust at the end of the pole: {{n items.halberd.weapon.alt.damage}} damage, a reach of {{n items.halberd.weapon.alt.range tiles}}, an arc of only {{n items.halberd.weapon.alt.arc}} degrees, swing {{n items.halberd.weapon.alt.swing seconds}}, stamina {{n items.halberd.weapon.alt.stamina}}. The thrust always staggers, interrupts a bite, and hits only the nearest target, even with Multi-hit on.

Both modes floor on the default chance (see [[Stagger and knockdown]]) and share one cooldown. The halberd lasts about {{n items.halberd.weapon.kills}} kills (see [[Durability]]); the thrust wears at the same rate per hit as the sweep.

{{item-sections halberd}}

## Sources

<!-- sources at 9205ad7 -->
- `data/items.json`: the halberd: both hands, the sweep's `weapon` block, the thrust's `weapon.alt`, `kills`
- `src/items.js:112-133`: a two-hander leaves no hand free
- `src/combat.js:97-101`: the thrust laid over the sweep's numbers
- `src/combat.js:171-175`: the thrust's `multiHit: false`
- `data/combat.json` `blow.knockdownChance`, `src/combat.js:348`: the default knockdown chance
- `src/combat.js:306`, `src/combat.js:315`: one cooldown for both modes
- `src/items.js:27-37`: wear per hit from the base damage

{{navbox weapons}}
