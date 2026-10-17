---
title: Your cottage
categories: [Places]
aliases: [Home, The cottage, Spawn]
summary: The cottage at the end of the south lane where every new character starts.
---

{{infobox-place "your cottage"}}

**Your cottage** is the end cottage on the south lane of [[The valley]], and the place where every new character starts, standing inside. It is a small wooden house of two rooms: a main room with a fireplace, a table and two chairs, and a chest that always holds a [[Hatchet]], a [[Loaf of bread]], and a [[Bucket]], and a bedroom behind a partition with the bed, a chest, and a shelf. The door is on the south side, with windows to the south, north, and east, and a lantern hangs in a bracket on the inside of the west wall (see [[Torch posts and brackets]]). The fireplace starts unlit; light it with a [[Log]] and the [[Tinderbox]] every new character carries (see [[Fire]]).

Round the house is a fenced garden with gates to the south and west. In it are a farm plot of potatoes and cabbages, some ready to harvest from the start (see [[Farming]]), a well to drink from and fill [[Waterskin|waterskins]] at (see [[Water]]), a barrel, and a woodpile. The bed is where you [[Sleep]].

{{place-contents "your cottage"}}

## The dead

One of the dead stands just inside the garden's north fence at the start. More walk the lanes to the west and north.

## Sources

<!-- sources at cfe0203 -->
- `tools/mapgen/valley.py:180-181`, `data/maps/valley.json:11685-11688`: the end cottage on the south lane, and the spawn inside it
- `data/maps/valley.json:1305-1433`, `data/loot.json:6`: the main room's chest's own table, a hatchet, a loaf, and a bucket (game #207, #211); wooden walls; the partition at x 4 making two rooms; the fireplace, table, two chairs, and a chest west of it; the bed, a chest, and the shelf east of it; the door south, windows south, north, and east; the bracket's lantern inside the west wall
- `data/maps/valley.json:1353-1363`, `src/interact.js:360-393`, `data/kit.json`: the fireplace unlit; a log and a flame light it, and the starting kit has a tinderbox (game #169)
- `data/maps/valley.json:1436-1465`: the fenced garden with gates south and west, and the farm plot
- `data/maps/valley.json:1467-1777`: the potatoes and cabbages, the well, the barrel, and the woodpile
- `data/sprites/well.json`, `src/interact.js:665-704`: the well to drink from and fill waterskins at
- `data/sprites/bed.json`: the bed (`sleep: true`)
- `data/maps/valley.json:11730-11733`: one of the dead inside the garden's north fence
- `tools/mapgen/valley.py:589`: the lanes' dead

{{navbox places}}
