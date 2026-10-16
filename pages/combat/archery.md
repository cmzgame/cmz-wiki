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
- While drawing, the player walks at {{n combat.bow.drawSpeed}} of their speed.
- A release before {{n combat.bow.minDraw}} of a full draw is dry: nothing flies and nothing is spent.
- A tap of right during a draw cancels it and keeps the arrow. Sprinting, opening a right-click menu, climbing, or a pause also cancel it. An open bag, container, station, or character screen does not: a bow can be drawn and loosed with any of them up.
- After a shot there is {{n combat.bow.recoverTime seconds}} before the next draw.

Arrows are taken from the bag or the belt. With none, the game says "No arrows." With [[Fire arrow|fire arrows]] carried, the bow shoots those first and plain arrows after.

### The brace

Holding right while drawing braces the bow: a full draw takes {{n items.bow.bow.braceDrawTime seconds}}, but the player walks at {{n combat.bow.braceMove}} of their speed.

### The arc and the landing

The arrow travels along the ground at {{n combat.bow.speed tiles a second}}, with the arc drawn above it, out to at most {{n combat.bow.range tiles}}. The arc rises from {{n combat.bow.arcMin}} to {{n combat.bow.arcMax}} pixels high with the distance.

It hurts only where it comes down: the nearest of [[The dead]] within {{n combat.bow.hitRadius tiles}} of the landing point, with nothing between it and that point. The test is made at the arrow's height as it lands, which is the ground, so a wall, a fence, boards, a closed door, or any window (even an open one, whose sill is above the ground) between the landing point and the body means no hit; an open or broken doorway does not. An arrow that comes down just short of a wall never hits one of the dead standing just past it. It never hurts [[Villagers]], other players, or the archer. A full draw does {{n items.bow.bow.damage}} damage, and a partial draw less. An arrow pushes {{n items.bow.bow.knockback tiles}}, staggers with the default chance (see [[Stagger and knockdown]]), never floors, and gets no finisher bonus on a downed target.

### Fire arrows

A fire arrow flies as an arrow does, with its head burning and a small light moving with it. The one of the dead it hits is always set alight before the damage, so a body it kills burns on (see [[Burning]]). It lodges in the body, or lies where it came down, as a plain arrow. Fire arrows are made by using arrows on a lit fire (see [[Fire arrow]]).

### What stops a shot

The path is checked once, when the shot is loosed. A shot is stopped by:

- a wall, below {{n combat.bow.wallHeight}} pixels high, unless it passes through an open or broken door below its lintel, or an open or broken window without boards between its sill and its top,
- boards, always,
- tree trunks and round props, below {{n combat.bow.trunkHeight}} pixels,
- other solid props, below their own height, up to {{n combat.bow.propHeight}} pixels.

A stopped arrow falls at the foot of what stopped it and hits nothing.

### Getting arrows back

An arrow that hits one of the dead stays in the body. Arrows stack in a body, and come out with its loot when it is killed and searched (see [[Corpses]]). What does not fit on the body falls at its feet. A miss, or a shot stopped by a wall or a tree, lies where it came down as an item on the floor, picked up with E. Arrows do not break.

The bow itself loses durability with each arrow loosed (see [[Durability]]).

### The thrown spear

With the [[Throwing spear]] in the main hand, middle or Q draws a throw with the same mechanics: hold, aim, release. The spear itself flies and the hand is left empty. A throw cannot be braced.

- A full throw draws in {{n items.spear.thrown.drawTime seconds}} and reaches {{n items.spear.thrown.range tiles}}, flying at {{n items.spear.thrown.speed tiles a second}}.
- It does {{n items.spear.thrown.damage}} damage at full draw, more than the {{n tuning.zombie.hp}} health of a fresh zombie, and less for a partial draw.
- It pushes {{n items.spear.thrown.knockback tiles}}, always staggers, and interrupts a bite. It never floors.
- Its hit where it comes down follows the arrow's rule: never through a wall or a closed door to one of the dead past it.
- Each time it comes down, hit or miss, it breaks with a chance of {{n items.spear.thrown.breakChance}} and is gone. Otherwise it lodges in the body it hit or lies where it fell.

A thrown spear keeps its durability. With the [[Shield]]'s guard raised, a throw does {{n items.shield.shield.attackMult}} times its damage.

## Numbers

- Free draw: {{n items.bow.bow.drawTime seconds}}. Braced draw: {{n items.bow.bow.braceDrawTime seconds}}.
- Bow damage: {{n items.bow.bow.damage}} at full draw.
- Range: {{n combat.bow.range tiles}}. Speed: {{n combat.bow.speed tiles a second}}.
- Hit radius: {{n combat.bow.hitRadius tiles}}.
- Walking while drawing: {{n combat.bow.drawSpeed}}; braced {{n combat.bow.braceMove}}.
- Spear throw: {{n items.spear.thrown.damage}} damage, {{n items.spear.thrown.range tiles}}, break chance {{n items.spear.thrown.breakChance}}.

## With friends

A guest's draw fills on the host from the button they hold, and looses at the ground point they aimed at. A guest's right tap reaches the host as part of their input, so it ends the draw there and keeps the arrow. Arrows in flight are sent to guests each frame, a fire arrow burning and lit there too, and arrows on the floor or lodged in bodies travel with the world.

## Settings that change it

- **Bow aim guide** (default on): a landing marker and a dotted line while drawing.

## See also

- [[Bow]]
- [[Arrow]], [[Fire arrow]]
- [[Throwing spear]]
- [[Combat]]

## Sources

<!-- sources at 3b7cb9a -->
- `src/archery.js:560-575`: the bow and the spear share the launcher and the draw
- `src/archery.js:62-64`, `src/archery.js:603-623`, `src/archery.js:719-721`: the draw fills by time, the cursor's ground point read at chest height, the ramp of a partial draw
- `data/items.json`: the bow's `drawTime` and `braceDrawTime`, `damage`, `knockback`, `shots`; the spear's `thrown` block
- `data/combat.json` `bow`, `src/archery.js:29-57`: the bow's and the flight's numbers as data (range, speed, arc heights, minDraw, drawSpeed, braceMove, recoverTime, hit radius, wall, trunk, and prop heights)
- `src/archery.js:635-692`: begin, cancel, and release; a dry release spends nothing; "No arrows." when the hands, belt, and bag hold none
- `src/main.js:625-640`, `src/game.js:554`, `src/net.js:418`: a right tap during a draw cancels it in the world's step, a guest's too
- `src/archery.js:713`, `src/main.js:1001`: sprinting, a right-click menu, climbing, or a pause cancels a draw; an open panel does not (game commit 57df52e)
- `src/archery.js:719-720`: the braced draw time
- `src/player-controller.js:52`: walking speed while drawing and braced
- `src/archery.js:93-139`: the shot fixed at release, travelling along the ground with the arc above
- `src/archery.js:254-284`: the landing: the nearest of the dead within the hit radius, damage scaled by the draw, no knockdown, no finisher, lodging, a miss lying on the floor
- `src/archery.js:264`, `src/archery.js:300-334`: the landing's hit, an arrow's and a spear's alike, counts only a body with no wall, boards, or closed door between it and the landing point at the shot's height as it lands, the ground for an arc; an open or broken door passes there, a window does not
- `src/archery.js:153-159`, `src/placeholders.js:88-90`: the wall test by height: a door passes open or broken below its top, a window open or broken between its sill and its top
- `src/archery.js:286-293`, `src/archery.js:300-315`: only the dead are hit
- `src/archery.js:141-212`: what stops a shot, scanned once at release, the arrow falling at the obstacle's foot
- `src/entities/character.js:139-162`: lodged arrows come out in the body's loot, the rest at its feet
- `src/archery.js:568-572`: fire arrows before plain ones, as their own projectile, setting alight
- `src/archery.js:267-269`, `src/burn.js:25-32`: a fire arrow's hit sets alight before the damage
- `src/archery.js:272-282`: a fire arrow lodges or lands as a plain arrow
- `src/archery.js:356-364`, `src/archery.js:520-523`: the fire arrow's light in flight and its burning head
- `src/archery.js:681-690`, `src/items.js:39-41`: the bow loses durability per arrow loosed
- `src/player-controller.js:39-45`: middle or Q throws the spear; no brace for a throw
- `src/archery.js:266`: the spear's break chance rolled on every landing
- `src/archery.js:673-677`: the thrown spear leaves the hand with its durability; the guard's attack multiplier on a throw
- `src/archery.js:603-609`, `src/net.js:867`, `src/net.js:1106`, `src/archery.js:349-352`: a guest's aim point on the host; arrows in flight, by projectile, sent each frame and drawn on the guest
- `src/settings.js:17`: the Bow aim guide setting, on by default

{{navbox weapons}}
