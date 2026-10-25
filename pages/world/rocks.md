---
title: Rocks
categories: [Gatherables, The world]
aliases: [Rock, Boulder]
summary: Big rocks about the valley, the quarry's among them, and in the wild forest; mined with a pickaxe for stone, and in the valley another rises elsewhere a game day or two later.
---

Big rocks stand in [[The quarry]], about [[The valley]] on open ground, and here and there in [[The wild]], the forest beyond the valley's edge. They are [[Gatherables]]: a click within reach makes one sway. With a [[Pickaxe]] in hand a rock is mined for [[Stone]], and is then gone; inside the valley another rises out of the ground somewhere else a game day or two later (see [[Mining]]).

## Where they are

The valley keeps {{n valley.resources.stone.count}} rocks. At the start, eight stand in [[The quarry]] and the rest at spots chosen at random on natural ground about the valley, the quarry's floor included, the same spots in every new world. In the wild, the land is split into squares of {{n valley.wild.rocks.cell}} by {{n valley.wild.rocks.cell}} tiles, and {{n valley.wild.rocks.chance}} of those squares hold one rock at a spot of their own. There are four looks, equally likely. The same rocks are in the same places on every visit. The ore rocks of [[The iron workings]] are a different kind: they give iron ore (see [[Mining]]).

## Coming back

A rock mined inside the valley is owed back: {{n tuning.resources.days.0}} to {{n tuning.resources.days.1}} game days later a new one rises at a random spot on natural ground anywhere in the valley: plain grass, or the dirt floor of the quarry. Never on the tile it was mined from, a road, water, a built floor, tilled soil, a rug, or under anything; never against a wall, inside a room, or inside a fenced yard or pen; never on anyone, living or dead, or an animal. It comes up whole through the ground line over {{n tuning.resources.riseSeconds seconds}}, with a little soil and dust at its foot, so the valley's count stays about the same. A rock mined in the wild is gone for good. See [[Mining#Coming back|Mining]].

## What they do

A rock blocks a circle of {{n sprites.rock_0.collide.radius}} tiles, like a broad trunk: you walk round it. It casts a shadow on the ground. It cannot be picked up or carried, and it does not block sight or light. Mined, it gives {{n sprites.rock_0.mine.count.0}} stone and leaves the tile clear.

## With friends

The rocks still owed are the host's, saved with the world. A new rock reaches every player with its part of the map, and every screen draws it rising from the same moment.

## See also

- [[Mining]], [[Stone]], [[Pickaxe]]
- [[Gatherables]], [[The wild]], [[The quarry]]

## Sources

<!-- sources at 261cd7a -->
- `data/maps/valley.json` `resources.stone`: the valley's count of rocks, the four kinds, the quarry open to them and its dirt (game #453, at 261cd7a)
- `src/map.js:2545-2582`: the count made up at the load, by hash, on the authored tiles (game #453, at 261cd7a)
- `data/maps/valley.json`: the wild's rock rule (`wild.rocks`: the cell, the chance, the four kinds)
- `src/map.js`: the wild's rocks placed by the cell's own roll
- `data/sprites/rock_0.json` (and `rock_1` to `rock_3`): the collision, the shadow, not carried, `interactable`, and the `mine` block
- `src/mining.js:41-55`: mined for stone and gone (game #210)
- `src/resources.js:33-87`, `src/map.js:612-636`, `data/tuning.json` `resources`: a rock mined inside the valley owed back after its days, at a spot that passes the one test; none for a rock in the wild (game #453, at 261cd7a)
- `src/resources.js:89-99`, `src/render/props.js:124-214`: the rise (game #453, at 261cd7a)
- `tools/mapgen/valley.py:548-549`: the quarry's eight rocks

{{navbox places}}
