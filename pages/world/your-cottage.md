---
title: Your cottage
categories: [Places]
aliases: [Home, The cottage, Spawn]
summary: The cottage at the end of the south lane where every new character starts.
---

{{infobox-place "your cottage"}}

**Your cottage** is the end cottage on the south lane of [[The valley]], and the place where every new character starts, standing inside by the door. It is a wooden house of two rooms, {{n valley.sets.0.buildings.0.rect.2}} by {{n valley.sets.0.buildings.0.rect.3}} tiles inside. The living room, to the west, has a fireplace on the west wall, a table with four chairs, and, against the north wall, a chest that always holds a [[Hatchet]], a [[Shovel]], a [[Loaf of bread]], and a [[Bucket]]. The bedroom, to the east behind a partition with a door in it, has the bed along the north wall, a chest in the south-east corner, and a shelf standing against the partition. The door is on the south side, into the living room, with two windows to the south, two to the north, and one to the east, and a lantern hangs in a bracket on the inside of the west wall (see [[Torch posts and brackets]]). The [[Fireplace|fireplace]] starts unlit; light it with the [[Tinderbox]] every new character carries, and it burns nothing (see [[Fire]]).

{{devonly note="In a world made with the Dev chest (on by default at New world), the Developer chest stands in the living room, two tiles east of where you wake."}}

Round the house is a fenced garden with gates to the south and west. East of the house is a farm plot of potatoes and cabbages, some ready to harvest from the start (see [[Farming]]); south of the plot are a well to drink from and fill [[Waterskin|waterskins]] at (see [[Water]]), a barrel, and a woodpile. A [[Chicken coop]] stands south of the house, west of the well, and two [[Beehive|beehives]] along the south side of the farm plot. The coop is searched like any [[Containers|container]], for odds and ends and no eggs; each beehive has a [[Pot of honey]] to take, and more {{n tuning.work.honey.days}} game days after. The bed is where you [[Sleep]]. The chests, the shelf, the barrel, and the woodpile have drawn art, a chest or a shelf by a wall standing with its back to it.

In a small glade south of the garden, a [[Fire pit]] stands lit from the start, on a clear ring of grass of its own ([[A fire pit by your cottage]]): a fire to cook at and see by on the first night.

[[Wyn]], the guide, stands just outside the door, the first person you meet: poke them for a word.

East of the garden fence, toward the river, stands [[The tall house]], a two-storey house with a stair up to its first floor (see [[Upper floors]]).

{{place-contents "your cottage"}}

## The dead

The nearest of the dead stands in the lane to the west of the garden at the start, out of the guide's reach. More walk the lanes to the west and north.

## Sources

<!-- sources at 393acaf -->
- `tools/mapgen/valley.py:210-228` (at da57a57): the tall house east of the cottage's fence, between it and the river (game #534)
- `tools/mapgen/valley.py:156`, `tools/mapgen/valley.py:181-203`, `data/maps/valley.json:12203-12206`: the end cottage on the south lane, grown to {{n valley.sets.0.buildings.0.rect.2}} by {{n valley.sets.0.buildings.0.rect.3}} inside for the demo pass, and the spawn in its living room by the door (game #514, at 393acaf)
- `data/maps/valley.json:1304-1462`, `data/loot.json:8`: wooden walls; the partition at x 7 with its door, making a living room and a bedroom; the fireplace, the table and four chairs, and the chest of its own table (a hatchet, a shovel, a loaf, and a bucket) against the north wall; the bed, a chest, and the shelf against the partition; the door south, windows two south, two north, and one east; the bracket's lantern inside the west wall (game #514, at 393acaf)
- `tools/mapgen/mapgen.py:23-30`: a chest or shelf facing away from its wall (game #514)
- `data/maps/valley.json:1883-1910`, `data/sprites/fireplace.json`: the lit fire pit in its glade south of the cottage, a place of its own; a fireplace a switch (game #527, at c3cb736)
- `src/game.js:115-120`: the dev chest two tiles east of the spawn (game #514, at 393acaf)
- `data/maps/valley.json:1363-1373`, `src/interact.js:361-394`, `data/kit.json`: the fireplace unlit; a log and a flame light it, and the starting kit has a tinderbox (game #169)
- `data/maps/valley.json:1464-1495`: the fenced garden with gates south and west, and the farm plot east of the house
- `data/maps/valley.json:1496-1882`: the potatoes and cabbages, the well, the barrel, and the woodpile
- `data/sprites/well.json`, `src/interact.js:681-720`: the well to drink from and fill waterskins at
- `data/sprites/bed.json`: the bed (`sleep: true`)
- `tools/mapgen/valley.py:199-202`, `data/sprites/chicken_coop.json`, `data/sprites/beehive.json`: the coop south of the house and west of the well, two hives below the farm plot; the coop a container (game #338, at 232d0fb)
- `data/sprites/barrel.json`, `data/sprites/chest.json`, `data/sprites/shelf.json`, `data/sprites/woodpile.json`: drawn since art round 4 (game #514)
- `src/hives.js:113-158`, `data/tuning.json:171`: a hive gives a pot of honey, and has more some days later (game #416, at 31d330a)
- `data/maps/valley.json:12248-12251`, `tools/mapgen/valley.py:660`: the lanes' dead, the nearest at (86, 212), moved from the garden's fence (game #220)
- `data/maps/valley.json:12813-12823`, `tools/mapgen/valley.py:696-698`: Wyn outside the door (game #220)

{{navbox places}}
