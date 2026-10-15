---
title: Log
categories: [Items, Materials]
aliases: [Logs, Wood]
summary: A log from a felled tree: split into planks, burned as fuel, or built into a log wall.
---

{{infobox-item log}}

A **log** comes from chopping down a tree, and turns up in chests and barrels. It is split into [[Plank|planks]], burned in most fires, and built into log walls. It is large, and takes up a good part of a bag.

## Getting logs

Right-click a tree and choose **Chop down**. After {{n census.constants.interact.CHOP_TIME}} seconds the tree is gone and its logs lie on its tile. No tool is needed. The menu says how many logs a tree gives: a young tree {{n sprites.tree_oak_m.wood}}, a grown one {{n sprites.tree_oak_l.wood}}, and an old one {{n sprites.tree_oak_old.wood}}.

## Splitting

**Split into planks** on a log's menu, in your own bag, turns it into {{n items.log.splitsInto.count}} planks. Planks that do not fit fall to the floor ("Some planks fell to the floor.").

## As fuel and for building

A log is the fuel of the campfire, the hearth, the fireplace, and the [[Oven]] (see [[Fire]]). A log wall costs {{n build.wall.cost.log}} log (see [[Building]]).

{{item-sections log}}

## Sources

<!-- sources at 9205ad7 -->
- `data/items.json:4`: the log: 2 x 3, fuel, splits into 3 planks
- `src/interact.js:516-532`: Chop down, no tool needed, the logs on the tile, the count in the label
- `src/interact.js:46`: the chop time
- `data/sprites/tree_oak_m.json`: a young tree's wood (likewise tree_oak_l, tree_oak_old)
- `data/loot.json:2-3`: logs in the chest and barrel tables
- `src/interact.js:1053-1066`: Split, in your own bag; "Some planks fell to the floor."
- `data/sprites/campfire.json`: log as fuel (likewise hearth, fireplace, oven)
- `data/build.json:2-9`: a log wall's cost
- `src/placement.js:144-150`: the cost taken from hands, belt, and bag

{{navbox items}}
