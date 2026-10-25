---
title: Your cottage
categories: [Places]
aliases: [Home, The cottage, Spawn]
summary: The cottage at the end of the south lane where every new character starts.
---

{{infobox-place "your cottage"}}

**Your cottage** is the end cottage on the south lane of [[The valley]], and the place where every new character starts, standing inside. It is a small wooden house of two rooms: a main room with a fireplace, a table and two chairs, and a chest that always holds a [[Hatchet]], a [[Shovel]], a [[Loaf of bread]], and a [[Bucket]], and a bedroom behind a partition with the bed, a chest, and a shelf. The door is on the south side, with windows to the south, north, and east, and a lantern hangs in a bracket on the inside of the west wall (see [[Torch posts and brackets]]). The fireplace starts unlit; light it with a [[Log]] and the [[Tinderbox]] every new character carries (see [[Fire]]).

Round the house is a fenced garden with gates to the south and west. In it are a farm plot of potatoes and cabbages, some ready to harvest from the start (see [[Farming]]), a well to drink from and fill [[Waterskin|waterskins]] at (see [[Water]]), a barrel, and a woodpile. A [[Chicken coop]] stands south of the house, west of the well, and two [[Beehive|beehives]] along the south side of the farm plot. The coop is searched like any [[Containers|container]], for odds and ends and no eggs; each beehive has a [[Pot of honey]] to take, and more {{n tuning.work.honey.days}} game days after. The bed is where you [[Sleep]].

[[Wyn]], the guide, stands just outside the door, the first person you meet: poke them for a word.

{{place-contents "your cottage"}}

## The dead

The nearest of the dead stands in the lane to the west of the garden at the start, out of the guide's reach. More walk the lanes to the west and north.

## Sources

<!-- sources at 3c0a243 -->
- `tools/mapgen/valley.py:181-182`, `data/maps/valley.json:11685-11688`: the end cottage on the south lane, and the spawn inside it
- `data/maps/valley.json:1305-1433`, `data/loot.json:6`: the main room's chest's own table, a hatchet, a shovel, a loaf, and a bucket (game #207, #211, #222); wooden walls; the partition at x 4 making two rooms; the fireplace, table, two chairs, and a chest west of it; the bed, a chest, and the shelf east of it; the door south, windows south, north, and east; the bracket's lantern inside the west wall
- `data/maps/valley.json:1353-1363`, `src/interact.js:361-394`, `data/kit.json`: the fireplace unlit; a log and a flame light it, and the starting kit has a tinderbox (game #169)
- `data/maps/valley.json:1436-1465`: the fenced garden with gates south and west, and the farm plot
- `data/maps/valley.json:1467-1777`: the potatoes and cabbages, the well, the barrel, and the woodpile
- `data/sprites/well.json`, `src/interact.js:681-720`: the well to drink from and fill waterskins at
- `data/sprites/bed.json`: the bed (`sleep: true`)
- `tools/mapgen/valley.py:195-198`, `data/sprites/chicken_coop.json`, `data/sprites/beehive.json`: the coop south of the house and west of the well, two hives below the farm plot; the coop a container (game #338, at 232d0fb)
- `src/hives.js:113-158`, `data/tuning.json:171`: a hive gives a pot of honey, and has more some days later (game #416, at 31d330a)
- `data/maps/valley.json:11730-11733`, `tools/mapgen/valley.py:590`: the lanes' dead, the nearest at (86, 212), moved from the garden's fence (game #220)
- `data/maps/valley.json:12288-12299`, `tools/mapgen/valley.py:606-608`: Wyn outside the door (game #220)

{{navbox places}}
