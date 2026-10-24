---
title: Shove
categories: [Combat, Mechanics]
aliases: [Push, Space]
summary: Space pushes up to three of the dead in front of you away and staggers them, whatever is in your hands; then you cannot swing for a moment.
---

The **shove** is done with Space. It is the tool for a crowd: it pushes up to {{n combat.shove.targets}} of the dead in front of the [[Player]] away and staggers them, with anything or nothing in their hands. It does no damage, and it sometimes floors a target. After a shove, no swing starts for {{n combat.shove.cooldown seconds}}.

## How it works

The shove uses the same wedge as a swing (see [[Combat]]): a reach of {{n combat.shove.range tiles}} and an arc of {{n combat.shove.arc}} degrees. It reaches the nearest {{n combat.shove.targets}} of the dead in the wedge whatever the Multi-hit setting says, needs a clear line to each, and passes over the dead lying on the floor.

Each one shoved:

- is pushed {{n combat.shove.knockback tiles}},
- is staggered for {{n combat.shove.stagger seconds}}, and loses a bite it was winding up (see [[Stagger and knockdown]]),
- is floored on {{pct combat.shove.knockdown}} of shoves.

A **tired shove**, one the [[Stamina]] bar cannot pay for, still happens, but pushes, staggers, and floors at {{pct combat.blow.tiredDamage}} of all three, as a tired blow lands at that share of its damage. So an empty bar cannot hold a crowd in a stagger for ever.

A shove costs {{n combat.shove.stamina}} [[Stamina]]. Its cooldown, {{n combat.shove.cooldown seconds}}, is also a recovery: until it ends, a left click swings nothing and the next shove waits. The player draws a shove of their own, both arms out.

It costs a weapon no durability (see [[Durability]]).

## Numbers

- Reach: {{n combat.shove.range tiles}}. Arc: {{n combat.shove.arc}} degrees. Targets: up to {{n combat.shove.targets}}.
- Push: {{n combat.shove.knockback tiles}}.
- Stagger: {{n combat.shove.stagger seconds}}.
- Knockdown chance: {{pct combat.shove.knockdown}}.
- A tired shove: {{pct combat.blow.tiredDamage}} of the push, the stagger, and the knockdown chance.
- Stamina: {{n combat.shove.stamina}}. Recovery: {{n combat.shove.cooldown seconds}}.

## The sound it makes

A shove has a short push of its own as it is made, whether or not it reaches anyone. See [[Sound]].

## With friends

A guest's own shove shows at once on their screen, its pose and its recovery included, so a click during the recovery swings nothing there as it does on the host. The push itself is the host's, worked out from the guest's input.

## See also

- [[Combat]]
- [[Stagger and knockdown]]
- [[Levers]]: the shove's numbers still being balanced

## Sources

<!-- sources at 37e8726 -->
- `src/combat.js:410-436`: the shove: the cooldown and stamina, the pose, the wedge, the nearest of the dead to `targets` whatever Multi-hit, downed targets skipped, no damage, the stagger, the knockdown by chance
- `src/combat.js:183-194`: a cap on targets for the shove alone, ahead of the Multi-hit rule
- `src/combat.js:329-333`: no swing starts while the shove's cooldown runs
- `data/combat.json`: the `shove` numbers
- `src/combat.js:418-421`, `src/combat.js:432`: a tired shove at `blow.tiredDamage` of its push, stagger, and knockdown (game #389, at 9be007c)
- `src/figure/rig.js:19`, `data/poses.json`: the shove's own pose, the player's alone
- `src/combat.js:390`, `src/combat.js:398-408`: durability spent only by a weapon's landed hits
- `src/player-controller.js:28`: a guest predicts its own shove's pose and recovery; the push is the host's
- `src/sound-cues.js`, `data/sounds.json`: the sound it makes, heard as this client sees it (game #381 and #386, at 3c68f9c)
