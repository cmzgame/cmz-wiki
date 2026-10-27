---
title: Archery
categories: [Combat, Mechanics]
aliases: [Shooting, Throwing, The draw, Brace]
summary: The bow's draw and brace, the arc of a shot, what stops an arrow, getting arrows back, and the throws of the spear, the throwing knife, and the throwing axe.
numbersOk: true
---

<!-- typed: the damage formula 0.4 + 0.6 times the draw and the damages at the least draw that flies (19, 74, 22, and the knife's 7 and the axe's 15), from archery.shotDamage and the data (games #471, #494) -->
**Archery** covers the [[Hunting bow]] and the thrown weapons, the [[Throwing spear]], the [[Throwing knife]], and the [[Throwing axe]], which share the same draw. Hold the left button to draw, aim with the cursor, and let go to loose. The shot is fixed when it leaves the hand.

## How it works

### The draw

With the bow in both hands, the left button draws. The cursor sets the direction and where a full draw comes down; it is read at chest height, so a cursor on a body aims at its feet. A partial draw falls short along the same line, gaining distance quickly at first and slowly near full.

- A full free draw takes {{n items.bow.bow.drawTime seconds}}.
- While drawing, the player walks at {{n combat.bow.drawSpeed}} of their speed.
- A release before {{n combat.bow.minDraw}} of a full draw is dry: nothing flies and nothing is spent.
- A tap of right during a draw cancels it and keeps the arrow. Sprinting, opening a right-click menu, or a pause also cancel it. An open bag, container, station, or character screen does not: a bow can be drawn and loosed with any of them up.
- After a shot there is {{n combat.bow.recoverTime seconds}} before the next draw.

Arrows are taken from the bag or the belt. With none, the game says "No arrows." The bow takes its arrows in an order: [[Fire arrow|fire arrows]] first, then [[Strongly poisoned arrow|strongly poisoned arrows]], then [[Poisoned arrow|poisoned arrows]], then plain ones.

### The brace

Holding right while drawing braces the bow: a full draw takes {{n items.bow.bow.braceDrawTime seconds}}, but the player walks at {{n combat.bow.braceMove}} of their speed.

### The arc and the landing

The arrow travels along the ground at {{n combat.bow.speed tiles a second}}, with the arc drawn above it, out to at most {{n combat.bow.range tiles}}. The arc rises from {{n combat.bow.arcMin}} to {{n combat.bow.arcMax}} pixels high with the distance.

It hurts only where it comes down: the nearest of [[The dead]], or of the wild game, within {{n combat.bow.hitRadius tiles}} of the landing point, with nothing between it and that point; a tame animal only when nothing else is there, and never by a spell (see [[Hunting]]). The test is made at the arrow's height as it lands, which is the ground, so a wall, a fence, boards, a closed door, or any window (even an open one, whose sill is above the ground) between the landing point and the body means no hit; an open or broken doorway does not. An arrow that comes down just short of a wall never hits one of the dead standing just past it. It never hurts [[Villagers]], other players, or the archer. A full draw does {{n items.bow.bow.damage}} damage, and a partial draw less. An arrow pushes {{n items.bow.bow.knockback tiles}}, staggers with the default chance (see [[Stagger and knockdown]]), never floors, and gets no finisher bonus on a downed target.

### Damage by the draw

A shot does its full damage times 0.4 plus 0.6 times the share of a full draw it was loosed at, rounded. So the least draw that flies ({{n combat.bow.minDraw}} of a full one) does a little under half: 19 for the bow's {{n items.bow.bow.damage}}, 74 for the spear's {{n items.spear.thrown.damage}}, 7 for the throwing knife's {{n items.throwing_knife.thrown.damage}}, 15 for the throwing axe's {{n items.throwing_axe.thrown.damage}}, and 22 for the [[Fireball]]'s {{n items.book_of_fire.book.spell.damage}}. A weapon's hover card gives the range worked out the same way, as "19 to 38 damage by the draw".

### Fire arrows

A fire arrow flies as an arrow does, with its head burning and a small light moving with it. The one of the dead it hits is always set alight before the damage, so a body it kills burns on (see [[Burning]]). It lodges in the body, or lies where it came down, as a plain arrow. Fire arrows are made by using arrows on a lit fire (see [[Fire arrow]]).

### Poisoned arrows

A [[Poisoned arrow|poisoned]] or [[Strongly poisoned arrow|strongly poisoned arrow]] flies as an arrow does, with a green head. The one of the dead or the animal it hits is poisoned after the damage (see [[Poison#Poisoned|Poison]]), and it lodges or lies as a plain arrow. They are made by using a [[Poison]] on arrows.

### What stops a shot

The path is checked once, when the shot is loosed. A shot is stopped by:

- a wall, below the wall's own height: a house wall's {{n sprites.wall_wood.wall.height}} pixels, a [[Fences|fence]]'s {{n sprites.wall_fence.wall.height}} (a wall with no height of its own, {{n combat.bow.wallHeight}}), unless it passes through an open or broken door below its lintel, or an open or broken window without boards between its sill and its top,
- boards, always,
- tree trunks and round props, below {{n combat.bow.trunkHeight}} pixels,
- other solid props, below their own height, up to {{n combat.bow.propHeight}} pixels.

A stopped arrow falls at the foot of what stopped it and hits nothing.

A flight rises from the hand and falls to its landing point, so what stops it depends on where along the path it stands. At the top of its arc a full-range bow shot or a full throw of the spear is above a house wall, and a full throw of a [[Throwing knife]] or a [[Throwing axe]] is above a fence but never a house wall; a shorter shot arcs lower.

### Pulling from afar

An arrow, a throw, or a fireball can start a fight from afar. One of the dead hit and not killed learns where the shot came from, and, if it was not yet hunting a player, calls once to the dead near it that can see it, and they come too. A shot at one at the edge of a group, out of the others' line or in the dark, brings that one alone. See [[Sight-pull]].

### Getting arrows back

An arrow that hits one of the dead stays in the body. Arrows stack in a body, and come out with its loot when it is killed and searched (see [[Corpses]]). What does not fit on the body falls at its feet. An arrow or a thrown weapon that hits an animal stays in it too, and comes back when its carcass is butchered (see [[Hunting]]). A miss, or a shot stopped by a wall or a tree, lies where it came down as an item on the floor, picked up with E. Arrows do not break.

The bow itself loses durability with each arrow loosed (see [[Durability]]).

### The thrown spear

With the [[Throwing spear]] in the main hand, middle or Q draws a throw with the same mechanics: hold, aim, release. The spear itself flies and the hand is left empty. A throw cannot be braced.

- A full throw draws in {{n items.spear.thrown.drawTime seconds}} and reaches {{n items.spear.thrown.range tiles}}, flying at {{n items.spear.thrown.speed tiles a second}}.
- It does {{n items.spear.thrown.damage}} damage at full draw, as much as the {{n tuning.zombie.hp}} health of a fresh zombie, so a full throw kills one outright, and less for a partial draw.
- It pushes {{n items.spear.thrown.knockback tiles}} and always staggers. It never floors. Like any hit, it cancels a bite being wound up.
- Its hit where it comes down follows the arrow's rule: never through a wall or a closed door to one of the dead past it.
- Each time it comes down, hit or miss, it breaks with a chance of {{n items.spear.thrown.breakChance}} and is gone, and the thrower is told "The throwing spear breaks." Otherwise it lodges in the body it hit or lies where it fell.

A thrown spear keeps its wear, whether it lies where it fell or comes out of a body's search. With the [[Wooden shield]]'s guard raised, a throw does {{n items.shield.shield.attackMult}} times its damage. A coated spear poisons what its landing hit strikes (see [[Poison]]).

### Throwing knives and axes

The [[Throwing knife]] and the [[Throwing axe]] have no other mode, so **left** throws them, from a stack in the main hand only; a stack in the off hand is only held. The draw is the bow's: hold, aim, release, and a throw cannot be braced. Each throw takes one from the stack, and the hand is empty after the last.

- The knife: {{n items.throwing_knife.thrown.damage}} damage at a full draw, {{n items.throwing_knife.thrown.range tiles}}, a draw of {{n items.throwing_knife.thrown.drawTime seconds}}; it staggers {{pct items.throwing_knife.thrown.staggerChance}} of the time and breaks {{pct items.throwing_knife.thrown.breakChance}} of the time.
- The axe: {{n items.throwing_axe.thrown.damage}} damage at a full draw, {{n items.throwing_axe.thrown.range tiles}}, a draw of {{n items.throwing_axe.thrown.drawTime seconds}}; it always staggers, knocks the dead down {{pct items.throwing_axe.thrown.knockdown}} of the time, and breaks {{pct items.throwing_axe.thrown.breakChance}} of the time.

Both spin in flight and end up as arrows do: lodged in the body they hit, or lying where they came down, drawn turned the way they flew. **E** or **Pick up** on one lying on the ground takes every one of its kind on that tile and the tiles round it that you can reach, and the label counts them.

## Numbers

- Free draw: {{n items.bow.bow.drawTime seconds}}. Braced draw: {{n items.bow.bow.braceDrawTime seconds}}.
- Bow damage: {{n items.bow.bow.damage}} at full draw.
- Range: {{n combat.bow.range tiles}}. Speed: {{n combat.bow.speed tiles a second}}.
- Hit radius: {{n combat.bow.hitRadius tiles}}.
- Walking while drawing: {{n combat.bow.drawSpeed}}; braced {{n combat.bow.braceMove}}.
- Spear throw: {{n items.spear.thrown.damage}} damage, {{n items.spear.thrown.range tiles}}, break chance {{n items.spear.thrown.breakChance}}.
- Knife throw: {{n items.throwing_knife.thrown.damage}} damage, {{n items.throwing_knife.thrown.range tiles}}, break chance {{n items.throwing_knife.thrown.breakChance}}.
- Axe throw: {{n items.throwing_axe.thrown.damage}} damage, {{n items.throwing_axe.thrown.range tiles}}, knockdown {{n items.throwing_axe.thrown.knockdown}}, break chance {{n items.throwing_axe.thrown.breakChance}}.

## The sound it makes

A drawn bow creaks for as long as it is held, rising as the draw fills; letting go twangs, and the arrow thumps where it comes down. A draw let go too early makes no twang. A spell makes one sound as it is cast, and a thrown spear, knife, or axe none yet. See [[Sound]].

## With friends

A guest's draw fills on the host from the button they hold, and looses at the ground point they aimed at. A guest's right tap reaches the host as part of their input, so it ends the draw there and keeps the arrow. A flight is sent to guests once, when it is loosed, and once more when it comes down; each guest then draws it moving every step from where it was loosed, on the same clock as the bodies it flies among, so an arrow, a thrown spear, and a fireball fly as smoothly on a guest's screen as on the host's, a fire arrow burning and lit there too. The host still decides what a flight hits and where it lands, and a fireball's flare shows where the host's fireball burst. Arrows on the floor or lodged in bodies travel with the world. Because a guest draws flights a few steps behind the host, as it draws the bodies, a guest's own shot appears a few steps later than it used to, and an arrow that lands can show for a moment both in the air and on the ground. An arrow never hurts another player: on the host the dead are its only targets.

## Settings that change it

- **Aim guide** (default on): a landing marker and a dotted line while you draw a bow, wind up a throw, or cast. Turn it off for the challenge of learning the draw by feel. It is each player's own: it changes only what their own screen draws, never the shot. A browser that chose it keeps its own choice, and so does one whose settings an older version saved (see [[Settings#Defaults|Settings]]).

## See also

- [[Hunting bow]]
- [[Arrow]], [[Fire arrow]], [[Poisoned arrow]], [[Strongly poisoned arrow]]
- [[Throwing spear]], [[Throwing knife]], [[Throwing axe]]
- [[Combat]]

## Sources

<!-- sources at 125bffb -->
- `src/archery.js:312`, `src/entities/zombie.js:126-136`, `src/entities/zombie.js:559-587` (at 5eb40e6): a shot's hit tells the dead one where it was loosed from, and one it does not kill calls the dead that see it (game #504)
- `src/archery.js:809-829`, `src/archery.js:919-950`, `src/archery.js:284-335`, `src/archery.js:734-776`, `src/interact.js:262-310`, `data/items.json:13-14` (at 307ed34): the throwing knife and axe: the left button from the main hand, one from the stack, the knockdown and break rolled at the landing, the spin and the lying picture, the pile taken with E (game #494)
- `data/items.json:24` `bow.ammo`, `src/archery.js:298-313`, `src/archery.js:714-719` (at 307ed34): the bow's order with the poisoned arrows, their hit poisoning, their green heads (game #496)
- `src/archery.js:64-70` (at dc10b81): `shotDamage`, the damage by the draw, shared by every hit and by the hover card
- `src/archery.js:592-607`: the bow and the spear share the launcher and the draw
- `src/archery.js:66-68`, `src/archery.js:630-655`, `src/archery.js:751-753`: the draw fills by time, the cursor's ground point read at chest height, the ramp of a partial draw
- `data/items.json`: the bow's `drawTime` and `braceDrawTime`, `damage`, `knockback`, `shots`; the spear's `thrown` block
- `data/combat.json:11`, `src/archery.js:29-61`: the bow's and the flight's numbers as data (range, speed, arc heights, minDraw, drawSpeed, braceMove, recoverTime, hit radius, wall, trunk, and prop heights)
- `src/archery.js:667-724`: begin, cancel, and release; a dry release spends nothing; "No arrows." when the hands, belt, and bag hold none
- `src/main.js:797-813`, `src/game.js:625`, `src/net.js:429`: a right tap during a draw cancels it in the world's step, a guest's too
- `src/archery.js:745`, `src/main.js:1182`: sprinting, a right-click menu, or a pause cancels a draw; an open panel does not
- `src/archery.js:751-752`: the braced draw time
- `src/player-controller.js:55`: walking speed while drawing and braced
- `src/game.js:106`, `src/archery.js:303-330`: what a shot can hit is what `setTargets` hands in, the dead; never a villager, a player, or the archer
- `docs/31-multiplayer/03-the-game-with-more-than-one-player.md`: play with friends as built, system by system; this page's With friends checked against it (game commit 490addf)
- `src/archery.js:95-142`: the shot fixed at release, travelling along the ground with the arc above
- `src/archery.js:261-299`: the landing: the nearest of the dead within the hit radius, damage scaled by the draw, no knockdown, no finisher, lodging, a miss lying on the floor
- `src/archery.js:276`, `src/entities/zombie.js:110`, `src/entities/zombie.js:140-151`: a shot's hit staggers by its own chance (an arrow the default, the spear always), never floors, and cancels a bite being wound up
- `src/archery.js:271`, `src/archery.js:315-349`: the landing's hit, an arrow's and a spear's alike, counts only a body with no wall, boards, or closed door between it and the landing point at the shot's height as it lands, the ground for an arc; an open or broken door passes there, a window does not
- `src/archery.js:156-162`, `src/placeholders.js:88-90`: the wall test by height: a door passes open or broken below its top, a window open or broken between its sill and its top
- `src/archery.js:179-199`, `src/archery.js:81-83`, `data/combat.json:11` `bow.wallHeight`, `data/items.json` `spear.thrown.arcMax` (at 91bafc1): each wall stops a flight below its own definition's height, a fence's its own, `wallHeight` the fallback; the arc's height along the path from `z0` and the peak; the spear's full throw over a house wall, the knife's and the axe's over a fence only (game #529)
- `src/archery.js:301-308`, `src/archery.js:315-330`: who can be hit (the dead alone, at this commit)
- `src/archery.js:272-292`, `src/archery.js:319-346` (at 6e3ab37): an animal hit at the landing, the tame only alone and never by a spell; what lodges in it comes back when it is butchered (game #456)
- `src/archery.js:144-215`: what stops a shot, scanned once at release, the arrow falling at the obstacle's foot
- `src/entities/character.js:149-178`, `src/archery.js:281-288`: lodged arrows come out in the body's loot by count, made fresh, and a lodged spear as itself, its wear kept; the rest at its feet
- `src/archery.js:600-604`: fire arrows before plain ones, as their own projectile, setting alight
- `src/archery.js:275`, `src/burn.js:26-33`: a fire arrow's hit sets alight before the damage
- `src/archery.js:281-288`, `src/archery.js:296-297`: a fire arrow lodges or lands as a plain arrow
- `src/archery.js:369-377`, `src/archery.js:550-553`: the fire arrow's light in flight and its burning head
- `src/archery.js:713-722`, `src/items.js:39-41`: the bow loses durability per arrow loosed
- `src/player-controller.js:40-44`: middle or Q throws the spear; no brace for a throw
- `src/archery.js:273`, `data/items.json:22` `spear.thrown.breakChance`: the spear's break chance rolled on every landing, hit or miss
- `src/main.js:1751-1754`, `src/host.js:230-234`: the thrower told the spear breaks, a guest's thrower by the host
- `src/archery.js:705-709`: the thrown spear leaves the hand with its durability; the guard's attack multiplier on a throw
- `src/archery.js:633-641`, `src/net.js:892`, `src/net.js:1132`, `src/archery.js:364-367`: a guest's aim point on the host; arrows in flight, by projectile, sent each frame and drawn on the guest
- `src/settings.js:15`, `src/settings.js:67`, `src/main.js:1314`, `src/archery.js:755-759`: the Aim guide, on by default (game #390, at 9be007c), read only where the viewer's own screen is drawn; the marker always computed
- `src/sound-cues.js`, `data/sounds.json`: the sound it makes, heard as this client sees it (game #381 and #386, at 3c68f9c)
- `src/archery.js`, `src/net.js`, `src/netsmooth.js`: a flight's launch and end sent once (`go`, `end`), stepped every step on a guest from its launch on the draw clock (`drawClock`), the host's end and landing kept (game #463, at d625844)

{{navbox weapons}}
