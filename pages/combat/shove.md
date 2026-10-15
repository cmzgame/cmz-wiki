---
title: Shove
categories: [Combat, Mechanics]
aliases: [Push, Space]
summary: Space pushes the dead in front of you away and always staggers them, whatever is in your hands.
---

The **shove** is done with Space. It pushes the dead in front of the [[Player]] away, with anything or nothing in their hands. It does no damage, but it always staggers and interrupts a bite, and it sometimes floors its target.

## How it works

The shove uses the same wedge as a swing (see [[Combat]]): a reach of {{n combat.shove.range tiles}} and an arc of {{n combat.shove.arc}} degrees. It needs a clear line to the target, ignores the dead lying on the floor, and obeys the Multi-hit setting.

A shove:

- pushes {{n combat.shove.knockback tiles}},
- always staggers, for {{n combat.shove.stagger seconds}}, and interrupts a bite under way,
- floors the target on {{n combat.shove.knockdown}} of shoves,
- costs {{n combat.shove.stamina}} [[Stamina]], with {{n combat.shove.cooldown seconds}} before the next.

It never wears a weapon (see [[Durability]]).

## Numbers

- Reach: {{n combat.shove.range tiles}}. Arc: {{n combat.shove.arc}} degrees.
- Push: {{n combat.shove.knockback tiles}}.
- Stagger: {{n combat.shove.stagger seconds}}.
- Knockdown chance: {{n combat.shove.knockdown}}.
- Stamina: {{n combat.shove.stamina}}. Cooldown: {{n combat.shove.cooldown seconds}}.

## With friends

A guest's shove is not shown ahead on their own screen: the host performs it from the guest's input.

## Settings that change it

- **Multi-hit** (default off): on, the shove reaches everything in its wedge.

## See also

- [[Combat]]
- [[Stagger and knockdown]]

## Sources

<!-- sources at 9205ad7 -->
- `src/combat.js:376-394`: the shove: the wedge, line of sight, downed targets skipped, multi-hit, no damage, stagger forced with `interrupts`
- `data/combat.json`: the `shove` numbers
- `src/combat.js:362-372`: wear only from weapon hits
- `src/player-controller.js:53`: performed on the host, not predicted on a guest
- `src/settings.js:19`: Multi-hit, off by default
