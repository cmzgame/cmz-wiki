---
title: Arrow
categories: [Items, Ammunition, Combat]
aliases: [Arrows]
summary: The bow's ammunition, which can be recovered from bodies and the ground, and dipped in a fire to make fire arrows.
---

{{infobox-item arrow}}

The **Arrow** is the [[Bow]]'s ammunition. Arrows stack to {{n items.arrow.stack}} and are drawn from the bag or the belt. [[Use|Used]] on any lit fire that burns fuel (a campfire, a hearth, a fireplace, the [[Oven]], or the [[Forge]]), the whole stack of arrows you carry becomes [[Fire arrow|fire arrows]] at once: the dip. The fire must be lit and within reach, and only arrows you carry (in a hand, on the [[Belt]], or in the bag) are dipped; a stack in an open chest or a body is refused with "Take the arrows out first." See [[Fire arrow]].

## Combat

An arrow that hits one of [[The dead]] stays in the body and comes out with its loot when it is killed and searched (see [[Corpses]]). A miss, or a shot stopped by a wall or a tree, lies where it came down and is picked up with E. Arrows do not break. A dry release, before enough of a draw, spends nothing. See [[Archery]].

With fire arrows carried as well, the bow shoots those first. A fire arrow that hits or lands comes back as a plain arrow.

{{item-sections arrow}}

## Sources

<!-- sources at 0bd3f9c -->
- `data/items.json`: the arrow, its stack of 20
- `src/archery.js:635-649`, `src/archery.js:659-676`: arrows taken from the bag or the belt at release; a dry release spends nothing
- `src/archery.js:267-282`: a hit lodges an arrow, a miss or a stopped shot lies on the floor; no break for arrows; a fire arrow lodges or lands as a plain arrow
- `src/entities/character.js:139-162`: lodged arrows come out in the body's loot
- `src/archery.js:568-572`: fire arrows drawn before plain ones
- `data/interactions.json`, `src/burn.js:73-94`: the `dip` verb: arrows used on a lit fire become fire arrows, the whole stack; refused when the fire is out, from beyond `DIP_REACH`, or with the arrows not carried

{{navbox weapons}}
