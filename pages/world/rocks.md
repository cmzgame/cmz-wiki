---
title: Rocks
categories: [Gatherables, The world]
aliases: [Rock, Boulder]
summary: Big rocks in the quarry and here and there in the wild forest; mined with a pickaxe for stone, and gone.
---

Big rocks stand in [[The quarry]] and here and there in [[The wild]], the forest beyond the valley's edge. They are [[Gatherables]]: a click within reach makes one sway. With a [[Pickaxe]] in hand a rock is mined for [[Stone]], and is then gone (see [[Mining]]).

## Where they are

[[The quarry]] has eight. In the wild, the land is split into squares of {{n valley.wild.rocks.cell}} by {{n valley.wild.rocks.cell}} tiles, and {{n valley.wild.rocks.chance}} of those squares hold one rock at a spot of their own. There are four looks, equally likely. The same rocks are in the same places on every visit. The ore rocks of [[The iron workings]] are a different kind: they give iron ore and come back (see [[Mining]]).

## What they do

A rock blocks a circle of {{n sprites.rock_0.collide.radius}} tiles, like a broad trunk: you walk round it. It casts a shadow on the ground. It cannot be picked up or carried, and it does not block sight or light. Mined, it gives {{n sprites.rock_0.mine.count.0}} stone and leaves the tile clear.

## See also

- [[Mining]], [[Stone]], [[Pickaxe]]
- [[Gatherables]], [[The wild]], [[The quarry]]

## Sources

<!-- sources at 3f11fdb -->
- `data/maps/valley.json`: the wild's rock rule (`wild.rocks`: the cell, the chance, the four kinds)
- `src/map.js`: the wild's rocks placed by the cell's own roll
- `data/sprites/rock_0.json` (and `rock_1` to `rock_3`): the collision, the shadow, not carried, `interactable`, and the `mine` block
- `src/mining.js:42-55`: mined for stone and gone (game #210)
- `tools/mapgen/valley.py:547-548`: the quarry's eight rocks

{{navbox places}}
