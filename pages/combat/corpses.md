---
title: Corpses
categories: [Creatures, Combat]
aliases: [Corpse, Body, Bodies, Looting the dead, The dead's pockets]
summary: Searching a fallen body: what is on it, what its pockets may hold, and the arrows lodged in it.
---

A **corpse** is the body of one of [[The dead]], or of a fallen player, once it has stopped moving. It can be searched like a chest, and is redrawn as it is stripped.

## Searching a body

The first search takes {{n census.constants.interact.SEARCH_TIME seconds}} and rolls the body's pockets. Everything on it is then laid out on the body's own grid:

- the clothes it wears,
- what is in its hands,
- its pockets ({{n wardrobes.zombie.0.pockets.0}} × {{n wardrobes.zombie.0.pockets.1}}),
- any [[Arrow|arrows]] and [[Throwing spear|spears]] lodged in it.

Anything that does not fit falls at its feet. Taking the clothes off changes the body's picture. The fallen stop thinking: a corpse no longer moves, groans, or bites.

## The pockets

Each of the dead rolls {{n loot.body.rolls.0}} to {{n loot.body.rolls.1}} times on this table when first searched:

{{loot-table body}}

## Lodged arrows

An arrow or thrown spear that hits one of the dead stays in the body, and arrows stack there. They come out with the loot on the first search (see [[Archery]]).

## With friends

What has been taken from a body, and what is lodged in it, travels with the world, so every player sees the same corpse.

## See also

- [[The dead]]
- [[Inventory]]
- [[Archery]]
