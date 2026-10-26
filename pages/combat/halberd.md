---
title: Halberd
categories: [Items, Weapons]
aliases: [Halberds, Polearm]
summary: A two-handed polearm with a wide, slow sweep and a long, narrow thrust.
---

{{infobox-item halberd}}

The **Halberd** is a two-handed polearm. It leaves no hand for a [[Wooden shield]] or a [[Torch]]. It has the longest reach of any weapon held in the hand, and the longest life. An animal killed with it is hacked to ruin: its carcass gives {{n animals.kills.halberd}} of every yield (see [[Hunting]]).

## Combat

- **Left** is a wide, long, slow sweep: {{n items.halberd.weapon.damage}} damage, a reach of {{n items.halberd.weapon.range tiles}}, an arc of {{n items.halberd.weapon.arc}} degrees, swing {{n items.halberd.weapon.swing seconds}}, stamina {{n items.halberd.weapon.stamina}}, stagger chance {{n items.halberd.weapon.staggerChance}}.
- **Middle** or **Q** is a thrust at the end of the pole: {{n items.halberd.weapon.alt.damage}} damage, a reach of {{n items.halberd.weapon.alt.range tiles}}, an arc of only {{n items.halberd.weapon.alt.arc}} degrees, swing {{n items.halberd.weapon.alt.swing seconds}}, stamina {{n items.halberd.weapon.alt.stamina}}. The thrust always staggers, floors on {{n items.halberd.weapon.alt.knockdown}} of hits, and hits only the nearest target, even with Multi-hit on.

On the [[Belt]] it goes in a **main-hand slot**, whose key draws it into both hands, or in the **utility slot**, where it is stored in one cell and never drawn by the key. An off-hand slot refuses it: "The halberd needs both hands: it goes in a main-hand slot or the utility slot." Its hover card says "Equip: both hands; on the belt, a main-hand slot or the utility slot."

The sweep never floors (see [[Stagger and knockdown]]). Both modes share one cooldown. The halberd lasts about {{n items.halberd.weapon.kills}} kills (see [[Durability]]); the thrust costs the same durability per hit as the sweep.

{{item-sections halberd}}

## Sources

<!-- sources at 37e8726 -->
- `data/items.json:9`: the halberd: both hands, the sweep's `weapon` block, the thrust's `weapon.alt`, `kills`
- `src/items.js:117-123`, `src/items.js:154-164`: a two-hander leaves no hand free
- `src/player-controller.js:42-43`: the thrust on the middle button or Q
- `src/combat.js:109-113`: the thrust laid over the sweep's numbers
- `src/combat.js:180-193`: the thrust's `multiHit: false`
- `src/inventory.js:323-363`, `src/item-info.js:268-272` (at 78116b1): a two-hander on the belt: a main-hand slot draws it into both hands, the utility slot stores it, an off-hand slot refuses it with its words; its card says so (game #478, which took away `noBelt`)
- `data/items.json:9` `weapon.alt.knockdown`, `weapon.alt.staggerChance`, `src/combat.js:373-374`: the thrust floors on its own `alt.knockdown` chance and always staggers
- `data/combat.json:10` `blow.knockdownChance`, `src/combat.js:373-374`: the sweep has no `knockdown` of its own, so it takes the default chance, 0, and never floors
- `src/combat.js:330`, `src/combat.js:342`: one cooldown for both modes
- `src/items.js:24-37`: durability per hit from the base damage
- `data/animals.json:4-5` (at 6e3ab37): the halberd's own kill class, whose share is none (game #456)

{{navbox weapons}}
