---
title: Shield
categories: [Items, Weapons]
aliases: [Shields, Guard, Block, Blocking]
summary: An off-hand shield: hold right to raise the guard and block bites from the front.
---

{{infobox-item shield}}

The **Shield** is held in the off hand. Holding right raises the guard, which blocks bites from the front and halves them from the sides. It never counts as a weapon.

## Combat

Holding right raises the guard. It also holds with the bag or a menu open.

- A bite from inside the front {{n items.shield.shield.arc}} degrees does nothing, and staggers the biter for {{n items.shield.shield.stagger seconds}} with a small push. This stagger always cancels the bite.
- A bite from the sides (out to {{n items.shield.shield.sideArc}} degrees) does {{n items.shield.shield.sideThrough}} of its damage.
- A bite from behind lands whole.
- Each block, front or side, costs {{n items.shield.shield.stamina}} [[Stamina]]. With less than that, the guard breaks: the bite lands whole, stamina drops to nothing, and the player is winded.
- While the guard is up, no stamina comes back, the player walks at {{n items.shield.shield.moveMult}} of their speed, and cannot sprint.
- The player can still attack from behind the guard (swing, stab, or throw), at {{n items.shield.shield.attackMult}} times the damage.

A fully blocked bite opens no wound and gives no infection (see [[Bleeding]] and [[Infection]]). Exposure from [[Dual wielding]] is applied after the guard.

{{item-sections shield}}

## With friends

A guest's guard shows at once on their screen, and the host applies it to the bite.

## Sources

<!-- sources at 9205ad7 -->
- `data/items.json`: the shield: off hand, its `shield` block
- `src/combat.js:105-110`: a shield is never an off-hand weapon
- `src/player-controller.js:23-24`: holding right raises the guard, with the bag or a menu open too
- `src/combat.js:113-151`: front block, side through, behind whole, the stamina cost, the guard breaking
- `src/entities/zombie.js:75-85`: a shield stagger ignores immunity and cancels the bite
- `src/entities/player.js:328-334`: no regeneration and no sprint while blocking
- `src/player-controller.js:52`: walking speed with the guard up
- `src/combat.js:155-158`, `src/combat.js:345`, `src/archery.js:560`: the attack multiplier on blows and throws
- `src/bleed.js:59`, `src/infection.js:48`: a blocked bite opens no wound and gives no infection
- `src/game.js:294-302`: the guard, then the exposure
- `src/net.js:675`: `blocking` in every character record

{{navbox weapons}}
