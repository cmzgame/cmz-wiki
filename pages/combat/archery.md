---
title: Archery
categories: [Combat, Mechanics]
aliases: [Shooting, Throwing, The draw, Brace]
summary: The bow's draw and brace, the arc of a shot, what stops an arrow, getting arrows back, and the spear's throw.
---

**Archery** covers the [[Bow]] and the thrown [[Throwing spear]], which share the same draw. Hold the left button to draw, aim with the cursor, and let go to loose. The shot is fixed when it leaves the hand.

## How it works

### The draw

With the bow in both hands, the left button draws. The cursor sets the direction and where a full draw comes down; it is read at chest height, so a cursor on a body aims at its feet. A partial draw falls short along the same line, gaining distance quickly at first and slowly near full.

- A full free draw takes {{n items.bow.bow.drawTime seconds}}.
- While drawing, the player walks at {{n census.constants.archery.tunables_drawSpeed}} of their speed.
- A release before {{n census.constants.archery.tunables_minDraw}} of a full draw is dry: nothing flies and nothing is spent.
- A tap of right during a draw cancels it and keeps the arrow. Sprinting, opening a panel, climbing, or a pause also cancel it.
- After a shot there is {{n census.constants.archery.tunables_recoverTime seconds}} before the next draw.

Arrows are taken from the bag or the belt. With none, the game says "No arrows."

### The brace

Holding right while drawing braces the bow: a full draw takes {{n items.bow.bow.braceDrawTime seconds}}, but the player walks at {{n census.constants.archery.tunables_braceMove}} of their speed.

### The arc and the landing

The arrow travels along the ground at {{n census.constants.archery.tunables_speed tiles a second}}, with the arc drawn above it, out to at most {{n census.constants.archery.tunables_range tiles}}. The arc rises from {{n census.constants.archery.tunables_arcMin}} to {{n census.constants.archery.tunables_arcMax}} pixels high with the distance.

It hurts only where it comes down: the nearest of [[The dead]] within {{n census.constants.archery.tunables_hitRadius tiles}} of the landing point. It never hurts [[Villagers]], other players, or the archer. A full draw does {{n items.bow.bow.damage}} damage, and a partial draw less. An arrow pushes {{n items.bow.bow.knockback tiles}}, staggers with the default chance (see [[Stagger and knockdown]]), never floors, and gets no finisher bonus on a downed target.

### What stops a shot

The path is checked once, when the shot is loosed. A shot is stopped by:

- a wall, below {{n census.constants.archery.tunables_wallHeight}} pixels high, unless it passes through an open or broken door below its lintel, or an open or broken window without boards between its sill and its top,
- boards, always,
- tree trunks and round props, below {{n census.constants.archery.tunables_trunkHeight}} pixels,
- other solid props, below their own height, up to {{n census.constants.archery.tunables_propHeight}} pixels.

A stopped arrow falls at the foot of what stopped it and hits nothing.

### Getting arrows back

An arrow that hits one of the dead stays in the body. Arrows stack in a body, and come out with its loot when it is killed and searched (see [[Corpses]]). What does not fit on the body falls at its feet. A miss, or a shot stopped by a wall or a tree, lies where it came down as an item on the floor, picked up with E. Arrows do not break.

The bow itself wears with each arrow loosed (see [[Durability]]).

### The thrown spear

With the [[Throwing spear]] in the main hand, middle or Q draws a throw with the same mechanics: hold, aim, release. The spear itself flies and the hand is left empty. A throw cannot be braced.

- A full throw draws in {{n items.spear.thrown.drawTime seconds}} and reaches {{n items.spear.thrown.range tiles}}, flying at {{n items.spear.thrown.speed tiles a second}}.
- It does {{n items.spear.thrown.damage}} damage at full draw, more than the {{n tuning.zombie.hp}} health of a fresh zombie, and less for a partial draw.
- It pushes {{n items.spear.thrown.knockback tiles}}, always staggers, and interrupts a bite. It never floors.
- Each time it comes down, hit or miss, it breaks with a chance of {{n items.spear.thrown.breakChance}} and is gone. Otherwise it lodges in the body it hit or lies where it fell.

A thrown spear keeps its wear. With the [[Shield]]'s guard raised, a throw does {{n items.shield.shield.attackMult}} times its damage.

## Numbers

- Free draw: {{n items.bow.bow.drawTime seconds}}. Braced draw: {{n items.bow.bow.braceDrawTime seconds}}.
- Bow damage: {{n items.bow.bow.damage}} at full draw.
- Range: {{n census.constants.archery.tunables_range tiles}}. Speed: {{n census.constants.archery.tunables_speed tiles a second}}.
- Hit radius: {{n census.constants.archery.tunables_hitRadius tiles}}.
- Walking while drawing: {{n census.constants.archery.tunables_drawSpeed}}; braced {{n census.constants.archery.tunables_braceMove}}.
- Spear throw: {{n items.spear.thrown.damage}} damage, {{n items.spear.thrown.range tiles}}, break chance {{n items.spear.thrown.breakChance}}.

## With friends

A guest's draw fills on the host from the button they hold, and looses at the ground point they aimed at. Arrows in flight are sent to guests each frame, and arrows on the floor or lodged in bodies travel with the world.

## Settings that change it

- **Bow aim guide** (default on): a landing marker and a dotted line while drawing.

## See also

- [[Bow]]
- [[Arrow]]
- [[Throwing spear]]
- [[Combat]]

{{navbox weapons}}
