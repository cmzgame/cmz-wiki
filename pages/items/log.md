---
title: Log
categories: [Items, Materials]
aliases: [Logs, Wood]
summary: A log from a felled tree: split into planks with a hatchet or sawn at the sawpit, burned as fuel, or built into a log wall.
---

{{infobox-item log}}

A **log** comes from chopping down a tree, or the stump it leaves, with a [[Hatchet]], and turns up in woodpiles. It is split into [[Plank|planks]] with a hatchet or sawn into them at the [[Sawpit]], burned in most fires, and built into log walls. It is large, and takes up a good part of a bag.

## Getting logs

With a [[Hatchet]] in a hand, right-click a tree and choose **Chop down**. After {{n tuning.world.chopSeconds seconds}} the tree is gone, its logs lie on its tile (sometimes with a [[Sapling]]), and a [[Stump]] is left, which the hatchet chops up for {{n sprites.stump.wood}} more log. Without a hatchet the entry is greyed: "Chop down (need a hatchet)". The menu says how many logs a tree gives: a young tree {{n sprites.tree_oak_m.wood}}, a grown one {{n sprites.tree_oak_l.wood}}, and an old one {{n sprites.tree_oak_old.wood}}.

## Splitting

**Split into {{n items.log.splitsInto.count}} planks** on a log's menu, in your own bag, turns it into {{n items.log.splitsInto.count}} planks, with a [[Hatchet]] anywhere on you (a hand, the belt, or the bag). Without one the entry ends "(need a hatchet)" and is greyed. Planks that do not fit fall to the floor ("Some planks fell to the floor.").

## The sawpit

The [[Sawpit]] in the lumber yard of [[The joiner]] saws a log into the same {{n items.log.splitsInto.count}} planks with no hatchet, from a log anywhere on you: **Saw a log into {{n items.log.splitsInto.count}} planks** on its menu, or `E` beside it, in {{n tuning.work.saw.seconds seconds}}. The planks go into your bag, and those that do not fit fall at your feet. A log's hover card says so: "A sawpit saws it into planks with no hatchet."

## As fuel and for building

A log is the fuel of a [[Campfire]] and the [[Oven]]; a hearth and a fireplace burn nothing (see [[Fire]]). A log added to a cold campfire does not light it. A campfire is built from {{n build.campfire.cost.log}} logs and {{n build.campfire.cost.stone}} stone, its logs its first fuel. A log wall costs {{n build.wall.cost.log}} log, and building one asks for a [[Hatchet]] on you (see [[Building]]).

{{item-sections log}}

## Sources

<!-- sources at 3c0a243 -->
- `data/items.json:4`: the log: 2 x 3, fuel, splits into 3 planks
- `src/interact.js:654-676`, `src/chop.js:26-51`: Chop down with a hatchet in a hand, the logs on the tile, the count in the label, the stump left and chopped for its log (game #207)
- `data/tuning.json:117`, `data/sprites/stump.json`: the chop's seconds, the stump's log
- `src/chop.js:45-50` (at 6e3ab37): a felled tree sometimes drops a sapling beside its logs (game #461)
- `data/sprites/tree_oak_m.json`: a young tree's wood (likewise tree_oak_l, tree_oak_old)
- `data/loot.json:2-3`: logs in the chest and barrel tables
- `src/interact.js:1251-1267`, `data/tuning.json:113`: Split, in your own bag, with the split tool, a hatchet, carried, greyed "(need a hatchet)" without it; "Some planks fell to the floor." (game #222)
- `src/sawpit.js:25-75`, `data/tuning.json:170`, `src/item-info.js:119`: the sawpit saws a carried log into its `splitsInto` with no hatchet, `E` with a log on you, the planks to the bag or the feet; the card's line (game #416, at 31d330a)
- `src/interact.js:1398-1414`: the Split entry's label names the count (at 31d330a)
- `data/sprites/campfire.json`: log as fuel (likewise the oven); `data/sprites/fireplace.json`, `data/sprites/hearth.json`: switches, no fuel; `data/build.json:112-124`: the campfire's cost (game #421, at 1bcb6ed)
- `data/build.json:2-10`: a log wall's cost, and its tool, `notch` (game #222)
- `src/placement.js:157-163`: the cost taken from hands, belt, and bag
- `data/loot.json`, `tools/mapgen/valley.py`: where it is found, a table per kind of container, gear placed once (game #399, at ce21ffc)

{{navbox items}}
