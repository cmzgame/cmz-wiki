---
title: Chicken coop
categories: [Props, Containers, Farming]
aliases: [Chicken coops, Coop, Coops, Hen house]
summary: A plank hut on legs where hens lay: a fed hen lays its egg, and most days a feather, into a coop near its home. Coops stand at Hollow Farm and your cottage.
---

{{infobox-prop chicken_coop}}

A **chicken coop** is a small plank hut on legs, with a ramp and a nesting box. It is a [[Containers|container]] that holds only what hens lay: each day a hen eats from a [[Feeding trough]], it lays an [[Egg]] into a coop within {{n animals.keep.coopReach tiles}} of its home, and on {{pct animals.keep.feather}} of those days a [[Feather]] too (see [[Keeping]]). Nothing else fills it: it rolls no loot. A full coop takes no more until it is emptied.

## Using it

The first time, its menu reads **Search chicken coop**; after that, **Open chicken coop**. Searching finds whatever the hens have laid, and adds nothing. Its grid is {{n loot.coop.grid.0}} × {{n loot.coop.grid.1}}, six cells. An [[Egg]] does not stack, so each takes a cell of its own; [[Feather|feathers]] stack to {{n items.feather.stack}}, and so take only the one cell. The eggs and feathers share the six cells, and once they are full the hens lay no more until the coop is emptied.

## The valley's coops

- In [[Hollow Farm's yard]], at its west end, with the farm's hens about it and their feeding trough beside it. Fill the trough and the coop fills with eggs.
- In the garden of [[Your cottage]], south of the house. No hens live there, so it stays empty until a hen is led home on a [[Lead]] and let go near it, with a feeding trough it can reach.

{{prop-sections chicken_coop}}

## With friends

The host lays the eggs and feathers into the coop, and its contents travel with its part of the map, so every player sees the same eggs; whoever opens it first takes them.

## Sources

<!-- sources at dc10b81 -->
- `data/sprites/chicken_coop.json`: the drawn coop, a container with the `coop` table, fixed
- `data/loot.json:3`: the coop's table, empty since game #460: it holds only what its hens lay; its grid of three by two
- `data/items.json:68`: the egg has no `stack` since game #475, so it takes a cell; the feather stacks (game #475, Michael's ruling of 2026-10-25)
- `src/entities/animal.js:597-623`: a hen's coop within `coopReach` of its home each way, its grid made on first use; the egg, one more at `more`, a feather at `feather`; a full coop takes no more
- `src/interact.js:434-457`: Search, then Open; a search rolls nothing into a grid that holds something
- `tools/mapgen/valley.py:200`, `tools/mapgen/valley.py:462-463` (at 393acaf): the coops at your cottage and Hollow Farm, and the hens' trough beside the farm's
- `data/maps/valley.json` `animals`: Hollow Farm's hens, at the coop

{{navbox props}}
