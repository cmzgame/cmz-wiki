---
title: Throwing knife
categories: [Items, Weapons]
aliases: [Throwing Knife, Throwing knives]
summary: A small knife thrown from a stack in the main hand on the left button; quick and far-reaching, it staggers some of the time and breaks often. Smithed at the anvil, ten from an iron bar.
numbersOk: true
---

<!-- typed: the hover card's own figure quoted: 7 is the damage at the least draw that flies, worked out from the data by archery.shotDamage; "ten knives a bar" is the recipe's out count in data/recipes.json, which no lookup reads (game #494) -->
{{infobox-item throwing_knife}}

The **Throwing knife** is a small knife thrown from the hand. Knives stack to {{n items.throwing_knife.stack}} in a cell, and a stack held in the main hand is thrown one at a time. Ten are made at the [[Anvil]] from one [[Iron bar]], with a [[Smith's hammer]] carried. Beside the [[Throwing axe]], the knife is the quick, long throw that pulls one of the dead out of a crowd: it hits for less and staggers less often, but flies farther and faster.

## Combat

- **Left** throws it, from the main hand only, with the bow's draw: hold, aim with the cursor, and release (see [[Archery]]). A stack in the off hand is only held and never throws. A full draw takes {{n items.throwing_knife.thrown.drawTime seconds}}, reaches {{n items.throwing_knife.thrown.range tiles}}, flies at {{n items.throwing_knife.thrown.speed tiles a second}}, and does {{n items.throwing_knife.thrown.damage}} damage; a partial draw falls short and does less.
- Each throw takes one knife from the stack, and the hand is empty when the last one goes.
- A hit pushes {{n items.throwing_knife.thrown.knockback tiles}} and staggers one of [[The dead]] {{pct items.throwing_knife.thrown.staggerChance}} of the time (see [[Stagger and knockdown]]). It never floors. Like any hit, it cancels a bite being wound up.
- In flight the knife spins, {{n items.throwing_knife.thrown.spin}} turns a second, clockwise when thrown to the right and the other way when thrown to the left.
- Each time a knife comes down, hit or miss, it breaks {{pct items.throwing_knife.thrown.breakChance}} of the time and is gone, and the thrower is told "The throwing knife breaks."

A knife that does not break ends up where an arrow would. One that hits stays in the body, and comes out with its loot when the body is searched (see [[Corpses]]), or when an animal's carcass is butchered (see [[Hunting]]). One that misses lies where it came down, drawn as its own picture turned the way it flew. Its hit follows the arrow's rule: never through a wall or a closed door to one of the dead past it.

**E**, or **Pick up** on its menu, on a knife lying on the ground takes every throwing knife on that tile and the tiles round it at once, and the label counts them: "Pick up Throwing knife (6)". A knife past a wall, a shut door, or shut shutters is left where it lies, and what the bag has no room for stays on the ground.

Its hover card says: "Throw (left button, from the main hand): 7 to {{n items.throwing_knife.thrown.damage}} damage by the draw, up to {{n items.throwing_knife.thrown.range tiles}}.", "A hit staggers the dead {{pct items.throwing_knife.thrown.staggerChance}} of the time.", and "It lands to be picked up again, or stays in the body it hits; it may break ({{pct items.throwing_knife.thrown.breakChance}})." Before game #494 the knife did not throw: its card said "To come: thrown.", and it swung as [[Fists]].

A throwing knife is not one of the blades a [[Poison]] coats.

{{item-sections throwing_knife}}

## With friends

A guest's draw and release are resolved by the host, as the spear's are, and the host takes the knife from the guest's stack as a new entry of its own; the guest's count in hand follows in their record. The flight reaches every screen, spinning the same way. A guest's E or Pick up takes the pile through the host, and what is left on the ground reaches everyone.

## See also

- [[Throwing axe]], [[Throwing spear]]
- [[Archery]], [[Anvil]]

## Sources

<!-- sources at 307ed34 -->
- `data/items.json:13`: the knife: either hand, its stack, its `thrown` block (damage, range, speed, draw, push, stagger, break, spin) (game #494)
- `data/recipes.json:858-874`: ten knives from an iron bar at the anvil, a smith's hammer carried
- `src/archery.js:809-829` `launcherOf`: a pure throwable (a `thrown` block and no `weapon`) throws on the left button, from the main hand
- `src/archery.js:919-950` `releaseDraw`: one from the stack as a new entry with its own uid; the hand empties with the last
- `src/archery.js:284-335` `land`: the break rolled on every landing, the hit lodged as itself, a miss lying at its angle; never through a wall
- `src/archery.js:734-776`: the spin sheet and the lying picture, turned from the item's art; the spin's direction by the throw's
- `src/main.js:1824-1825`, `src/host.js:243-245`: "The throwing knife breaks.", a guest's by the host
- `src/interact.js:262-310`: E and Pick up take the pile from the tile and its neighbours within reach; the label counts it
- `src/item-info.js:168-185` `shotLines`: the card's lines, read from the `thrown` block
- `src/poison.js:50`: a blade is the `blade` tag, which the knife does not have

{{navbox weapons}}
