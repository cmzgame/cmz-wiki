---
title: Dual wielding
categories: [Combat, Mechanics]
aliases: [Exposure, Off hand, Two weapons]
summary: Fighting with a weapon in each hand, and the exposure each off-hand swing leaves you in.
---

**Dual wielding** is holding a weapon in each hand. The left mouse button swings the main hand when it is ready and the off hand when the main hand is still recovering, so fast clicking alternates between them. The price is **exposure**: every off-hand swing leaves the player open to bites for a while.

## How it works

### Taking turns

Each hand has its own cooldown. After any swing with two weapons, the other hand waits {{n combat.dual.lockout}} of that swing's time before it may swing. An off-hand blow does {{n combat.dual.offDamage}} times its weapon's damage.

Any item with a weapon block counts as an off-hand weapon, including the [[Torch]], the [[Plank]], and the tools. The [[Shield]] never does. So a weapon with a torch in the other hand is dual wielding as soon as the player clicks faster than the main weapon recovers.

### Exposure

An off-hand swing leaves the player exposed for {{n combat.dual.window seconds}}, and each further off-hand swing starts that time again. A red bar over the player's head drains through the exposure. While exposed, a bite does:

- {{n combat.dual.front}} times its damage from the front ({{n combat.dual.arc}} degrees),
- {{n combat.dual.side}} times from the sides (out to {{n combat.dual.sideArc}} degrees),
- {{n combat.dual.behind}} times from behind, which is always fatal.

Exposure is applied after the shield's guard.

### What the hands may hold

- An item for both hands needs two empty hands.
- An item for either hand goes in the main hand first.
- The [[Throwing spear]] is refused beside any other weapon. A torch does not count as a weapon for this rule, so a spear and a torch may be held together, and the torch then swings as the off hand.
- When a two-handed item pushes the off-hand item into the bag, the game remembers it and puts it back in the hand later.

## Numbers

- Off-hand damage: {{n combat.dual.offDamage}} times.
- Lockout: {{n combat.dual.lockout}} of a swing.
- Exposure: {{n combat.dual.window seconds}}.
- Bite while exposed: {{n combat.dual.front}} times (front), {{n combat.dual.side}} times (sides), {{n combat.dual.behind}} times (behind).

## With friends

Each player's cooldowns and exposure travel exactly to the guest, so a guest's swing is allowed or refused on the same step as on the host.

## See also

- [[Combat]]
- [[Shield]]
- [[Weapons]]
