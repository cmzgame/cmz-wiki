---
title: Dual wielding
categories: [Combat, Mechanics]
aliases: [Exposure, Two weapons]
summary: Fighting with a weapon in each hand, and the exposure each off-hand swing leaves you in.
---

**Dual wielding** is holding a weapon in each hand. The left mouse button swings the main hand when it is ready and the off hand when the main hand is still recovering, so fast clicking alternates between them. The price is **exposure**: every off-hand swing leaves the player open to bites for a while.

## How it works

### Taking turns

Each hand has its own cooldown. After any swing with two weapons, the other hand waits {{n combat.dual.lockout}} of that swing's time before it may swing. An off-hand blow does {{n combat.dual.offDamage}} times its weapon's damage.

### The off hand's swing

An off-hand swing is drawn on the off arm: it swings the off weapon in that weapon's own style, mirrored, with the weapon following the off forearm, while the main arm holds what it holds. In the side facings the off arm is the far one, so its swing shows behind the body. Each hand's swing makes its own whoosh, the off hand's chosen by the off weapon: a light one, or a heavier one for a weapon whose swing takes {{n sounds.swing.heavyAt seconds}} or more (see [[Sound]]).

Any item with a weapon block counts as an off-hand weapon, including the [[Torch]], the [[Plank]], and the tools. The [[Wooden shield]] never does. So a weapon with a torch in the other hand is dual wielding as soon as the player clicks faster than the main weapon recovers.

### Exposure

An off-hand swing leaves the player exposed for {{n combat.dual.window seconds}}, and each further off-hand swing starts that time again. A red bar over the player's head drains through the exposure. While exposed, a bite does:

- {{n combat.dual.front}} times its damage from the front ({{n combat.dual.arc}} degrees),
- {{n combat.dual.side}} times from the sides (out to {{n combat.dual.sideArc}} degrees),
- {{n combat.dual.behind}} times from behind, which is always fatal.

Exposure is applied after the shield's guard.

### What the hands may hold

- An item for both hands needs two empty hands.
- An item for either hand goes in the main hand first.
- A key on the [[Belt]] draws an item into **its slot's hand**: a main-hand slot's into the main hand, an off-hand slot's into the off hand. So flipping through weapons on the main-hand slots is never dual wielding by accident; a weapon is drawn beside another only from an off-hand slot. A weapon put away with the bag full goes to a main-hand slot or the utility slot, never an off-hand slot.
- The [[Throwing spear]] is refused beside any other weapon. A torch does not count as a weapon for this rule, so a spear and a torch may be held together, but the torch is then only a light: it never takes the off hand's turn, and the spear is never dual wielded. Beside any other weapon, such as an [[Arming sword]], a torch does swing as the off hand when clicked faster than the main weapon recovers.
- When a two-handed item pushes the off-hand item into the bag, the game remembers it and puts it back in the hand later.

## Numbers

- Off-hand damage: {{n combat.dual.offDamage}} times.
- Lockout: {{n combat.dual.lockout}} of a swing.
- Exposure: {{n combat.dual.window seconds}}.
- Bite while exposed: {{n combat.dual.front}} times (front), {{n combat.dual.side}} times (sides), {{n combat.dual.behind}} times (behind).

## With friends

Each player's cooldowns and exposure travel exactly to the guest, so a guest's swing is allowed or refused on the same step as on the host. A guest's own off-hand swing is drawn on the off arm at once, and a friend's is drawn and heard the same way on every screen.

## See also

- [[Combat]]
- [[Wooden shield]]
- [[Weapons]]

## Sources

<!-- sources at 261cd7a -->
- `src/inventory.js:224-243`, `src/inventory.js:344-445` (at 78116b1): a belt key draws into its slot's hand by the slot's role; a one-hander stowed never to an off-hand slot (game #478)
- `src/combat.js:267-283`: the left click swings the main hand when ready, else the off hand
- `src/combat.js:305-323`: each hand's cooldown; the lockout after a swing with two weapons
- `data/combat.json`: `dual.offDamage`, `lockout`, `window`, `front`, `arc`, `side`, `sideArc`, `behind`
- `src/combat.js:106-115`: any item with a weapon block in the off hand is an off-hand weapon; a shield never; nothing beside a `noDual` main hand (the spear) (game commit 2c70942)
- `src/combat.js:320`: each off-hand swing restarts the exposure
- `src/ui/swing-timer.js`: the red exposure bar over the head
- `src/combat.js:289-298`: the bite multipliers by direction
- `src/game.js:294-302`: exposure applied after the guard
- `src/items.js:112-133`: which hands may hold what; the spear refused beside a weapon, a torch not counted
- `src/inventory.js:219-220`: the off-hand item remembered and put back
- `src/net.js:222`: cooldowns and exposure travel exactly
- `src/combat.js:356-364`, `src/figure/rig.js:166-198`, `src/figure/rig.js:335`: the off hand's swing plays `attack_off`, the off weapon's style with the arms swapped, on every player's sheet; the main arm holds (game #450, at 261cd7a)
- `src/render/entities.js:247-248`: the off weapon follows the off forearm in its swing (game #450, at 261cd7a)
- `src/sound-cues.js:191-192`, `src/sound-cues.js:228-231`, `data/sounds.json` `swing`: each hand's swing heard when its cooldown rises, the off hand's slot from the off weapon, heavy from `heavyAt` (game #450, at 261cd7a)
