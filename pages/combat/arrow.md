---
title: Arrow
categories: [Items, Ammunition, Combat]
aliases: [Arrows]
summary: The bow's ammunition, which can be recovered from bodies and the ground.
---

{{infobox-item arrow}}

The **Arrow** is the [[Bow]]'s ammunition. Arrows stack to {{n items.arrow.stack}} and are drawn from the bag or the belt.

## Combat

An arrow that hits one of [[The dead]] stays in the body and comes out with its loot when it is killed and searched (see [[Corpses]]). A miss, or a shot stopped by a wall or a tree, lies where it came down and is picked up with E. Arrows do not break. A dry release, before enough of a draw, spends nothing. See [[Archery]].

{{item-sections arrow}}

## Sources

<!-- sources at 9205ad7 -->
- `data/items.json`: the arrow, its stack of 20
- `src/archery.js:522-575`: arrows taken from the bag or the belt; a dry release spends nothing
- `src/archery.js:244-259`: a hit lodges the arrow, a miss or a stopped shot lies on the floor; no break for arrows
- `src/entities/character.js:139-162`: lodged arrows come out in the body's loot

{{navbox weapons}}
