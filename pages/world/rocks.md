---
title: Rocks
categories: [Gatherables, The world]
aliases: [Rock, Boulder]
summary: Big rocks found now and then in the wild forest beyond the valley.
---

Big rocks lie here and there in [[The wild]], the forest beyond the valley's edge. None stand inside [[The valley]] itself. They are [[Gatherables]]: a click within reach makes one sway. There is nothing else to do with them yet.

## Where they are

The wild is split into squares of {{n valley.wild.rocks.cell}} by {{n valley.wild.rocks.cell}} tiles, and {{n valley.wild.rocks.chance}} of those squares hold one rock at a spot of their own. There are four looks, equally likely. The same rocks are in the same places on every visit.

## What they do

A rock blocks a circle of {{n sprites.rock_0.collide.radius}} tiles, like a broad trunk: you walk round it. It casts a shadow on the ground. It cannot be picked up or carried, and it does not block sight or light.

{{planned doc=30 step=6 note="Mining a rock with the pickaxe for stone, the rock gone."}}

## See also

- [[Gatherables]]
- [[The wild]]
- [[Pickaxe]]

## Sources

<!-- sources at 9205ad7 -->
- `src/map.js:263-273`: rocks are rolled only in the wild, never inside the valley
- `data/maps/valley.json:5098-5120`: the cell size, the chance, four kinds equally
- `data/sprites/rock_0.json`: the collision radius, the shadow, `interactable`, `carry: false`
- `src/interact.js:607-619`: no action for a rock
- `src/map.js:1500`: `opaque` read only from map entries, so a rock blocks no sight or light
