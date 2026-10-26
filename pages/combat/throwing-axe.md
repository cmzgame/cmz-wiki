---
title: Throwing axe
categories: [Items, Weapons]
aliases: [Throwing Axe, Throwing axes]
summary: A small axe thrown from a stack in the main hand on the left button; heavy and short-ranged, every hit staggers and some knock the dead down. Smithed at the anvil, two from an iron bar and a plank.
numbersOk: true
---

<!-- typed: the hover card's own figure quoted: 15 is the damage at the least draw that flies, worked out from the data by archery.shotDamage; "two axes from a bar and a plank" is the recipe's counts in data/recipes.json, which no lookup reads (game #494) -->
{{infobox-item throwing_axe}}

The **Throwing axe** is a small axe thrown from the hand. Axes stack to {{n items.throwing_axe.stack}} in a cell, and a stack held in the main hand is thrown one at a time. Two are made at the [[Anvil]] from one [[Iron bar]] and one [[Plank]] (the plank for their hafts), with a [[Smith's hammer]] carried. Beside the [[Throwing knife]], the axe is the heavy, short throw that stops one of the dead coming in: every hit staggers, and some put it on the floor. It is not the [[Hatchet]], which fells trees and is swung.

## Combat

- **Left** throws it, from the main hand only, with the bow's draw: hold, aim with the cursor, and release (see [[Archery]]). A stack in the off hand is only held and never throws. A full draw takes {{n items.throwing_axe.thrown.drawTime seconds}}, reaches {{n items.throwing_axe.thrown.range tiles}}, flies at {{n items.throwing_axe.thrown.speed tiles a second}}, and does {{n items.throwing_axe.thrown.damage}} damage; a partial draw falls short and does less.
- Each throw takes one axe from the stack, and the hand is empty when the last one goes.
- A hit pushes {{n items.throwing_axe.thrown.knockback tiles}} and always staggers one of [[The dead]]. It knocks the dead one down {{pct items.throwing_axe.thrown.knockdown}} of the time, rolled where the axe comes down, but never one already down and never with a hit that kills (see [[Stagger and knockdown]]). Like any hit, it cancels a bite being wound up.
- In flight the axe spins, {{n items.throwing_axe.thrown.spin}} turns a second, clockwise when thrown to the right and the other way when thrown to the left.
- Each time an axe comes down, hit or miss, it breaks {{pct items.throwing_axe.thrown.breakChance}} of the time and is gone, and the thrower is told "The throwing axe breaks."

An axe that does not break ends up where an arrow would. One that hits stays in the body, and comes out with its loot when the body is searched (see [[Corpses]]), or when an animal's carcass is butchered (see [[Hunting]]). One that misses lies where it came down, drawn as its own picture turned the way it flew. Its hit follows the arrow's rule: never through a wall or a closed door to one of the dead past it.

**E**, or **Pick up** on its menu, on an axe lying on the ground takes every throwing axe on that tile and the tiles round it at once, and the label counts them, as "Pick up Throwing axe (3)". An axe past a wall, a shut door, or shut shutters is left where it lies, and what the bag has no room for stays on the ground.

Its hover card says: "Throw (left button, from the main hand): 15 to {{n items.throwing_axe.thrown.damage}} damage by the draw, up to {{n items.throwing_axe.thrown.range tiles}}.", "Every hit staggers the dead.", "A hit knocks the dead down {{pct items.throwing_axe.thrown.knockdown}} of the time.", and "It lands to be picked up again, or stays in the body it hits; it may break ({{pct items.throwing_axe.thrown.breakChance}})." Before game #494 the axe did not throw: its card said "To come: thrown.", and it swung as [[Fists]].

A throwing axe is not one of the blades a [[Poison]] coats.

{{item-sections throwing_axe}}

## With friends

A guest's draw and release are resolved by the host, as the spear's are, and the host takes the axe from the guest's stack as a new entry of its own; the guest's count in hand follows in their record. The knockdown is rolled on the host. The flight reaches every screen, spinning the same way. A guest's E or Pick up takes the pile through the host, and what is left on the ground reaches everyone.

## See also

- [[Throwing knife]], [[Throwing spear]]
- [[Archery]], [[Anvil]], [[Stagger and knockdown]]

## Sources

<!-- sources at 307ed34 -->
- `data/items.json:14`: the axe: either hand, its stack, its `thrown` block (damage, range, speed, draw, push, stagger, knockdown, break, spin) (game #494)
- `data/recipes.json:875-893`: two axes from an iron bar and a plank at the anvil, a smith's hammer carried
- `src/archery.js:809-829` `launcherOf`: a pure throwable (a `thrown` block and no `weapon`) throws on the left button, from the main hand
- `src/archery.js:919-950` `releaseDraw`: one from the stack as a new entry with its own uid; the hand empties with the last
- `src/archery.js:284-335` `land`: the break rolled on every landing; the knockdown rolled on the host, never on one down or a killing hit; the hit lodged as itself, a miss lying at its angle; never through a wall
- `src/archery.js:734-776`: the spin sheet and the lying picture, turned from the item's art; the spin's direction by the throw's
- `src/main.js:1824-1825`, `src/host.js:243-245`: "The throwing axe breaks.", a guest's by the host
- `src/interact.js:262-310`: E and Pick up take the pile from the tile and its neighbours within reach; the label counts it
- `src/item-info.js:168-185` `shotLines`: the card's lines, read from the `thrown` block
- `src/poison.js:50`: a blade is the `blade` tag, which the axe does not have

{{navbox weapons}}
