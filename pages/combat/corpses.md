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

An arrow or thrown spear that hits one of the dead stays in the body, and arrows stack there. A [[Fire arrow]] stays as a plain arrow. They come out with the loot on the first search (see [[Archery]]).

## A burning body

One of the dead that dies while [[Burning]] burns on as a corpse until its fire's timer runs out, its flames lying low along the body. A corpse loses nothing to the fire.

## With friends

What has been taken from a body, and what is lodged in it, travels with the world, so every player sees the same corpse.

## See also

- [[The dead]]
- [[Inventory]]
- [[Archery]]

## Sources

<!-- sources at 9205ad7 -->
- `src/entities/zombie.js:113-123`, `src/entities/zombie.js:357-364`: the fall, then a still body
- `src/entities/character.js:139-185`: a body as a container: worn clothes, hands, pockets, lodged items on its 6x6 grid, the overflow at its feet, redrawn as it is stripped
- `src/interact.js:43`, `src/interact.js:1333-1355`: the first search's time and the pockets rolled
- `data/wardrobes.json`: the dead's pockets
- `src/game.js:524-535`: corpses leave the thinking list
- `data/loot.json`: the `body` table and its rolls
- `src/archery.js:244-259`: arrows and spears lodge in a body hit
- `src/archery.js:272-276`: a fire arrow lodges as a plain arrow (game commit 3b7cb9a)
- `src/burn.js:34-51`, `src/fire.js:48-49`: a corpse burns on until its timer runs out, losing nothing; its flames low and spread (game commit 3b7cb9a)
