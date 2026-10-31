---
title: Feeding trough
categories: [Props, Containers, Farming]
aliases: [Feeding troughs, Feed trough, Feed troughs]
summary: A trough for feed, not water: built from planks, it holds only feed, and the tame animals near it eat from it once a day. One stands in each of the farms' pens and by Hollow Farm's coop.
numbersOk: true
---

<!-- typed: "four" troughs is the map's props counted -->

{{infobox-prop feed_trough}}

A **feeding trough** holds feed for tame animals. It is not the water [[Trough|trough]], which is for drinking: a feeding trough takes only **feed**, an item tagged feed ([[Grain]], [[Potato|potatoes]], [[Cabbage|cabbages]], [[Pumpkin|pumpkins]], and [[Hay]]), and refuses anything else. Every tame animal that can reach a trough with feed in it eats one unit a day from it, and a fed animal gives its milk, wool, or eggs that day (see [[Keeping]]).

## Using it

A trough opens at once, with **Open feeding trough**: it is never searched, and starts empty. Its grid is {{n loot.feed_trough.grid.0}} × {{n loot.feed_trough.grid.1}}; put feed in as you would into any [[Containers|container]]. Grain and hay stack to {{n items.grain.stack}} in a cell, so a full trough lasts the animals many days.

Which animals eat from it:

- **In a pen** (a fenced yard with its gates shut; see [[Keeping#Pens|Keeping]]), an animal eats only from a trough on that pen's own fences or inside it, never from one over the fence in another pen.
- **Out of a pen**, an animal eats from a trough within {{n animals.keep.feedReach tiles}} of its home.

They eat as soon as the trough holds feed, whether or not anyone is near.

## The valley's troughs

Four stand in the valley, each empty until a player fills it:

- in [[Hollow Farm's yard]], beside the [[Chicken coop]], for the farm's hens;
- in [[Hollow Farm's byre]], for the cows;
- in [[Hollow Farm's pigsty]], for the pigs;
- in [[The croft's sheepfold]], for the sheep.

More can be built from the [[Building|build palette]]: **Feeding trough**, from {{n build.feed_trough.cost.plank}} [[Plank|planks]], built at once, with a [[Smith's hammer]] on you. It is placed on the ground like any piece of the palette.

{{prop-sections feed_trough}}

## With friends

A guest fills a trough through the container panel, as with any chest; its contents travel with its part of the map, so every player sees what is left in it. The feeding itself runs on the host.

## Sources

<!-- sources at 6e3ab37 -->
- `data/sprites/feed_trough.json`: the feeding trough: a container with its own table, `feed`, `searched`, `accepts: "feed"`, its name
- `data/loot.json:4`: its grid, empty
- `src/interact.js:401-413`, `src/interact.js:415-436`: made on first use, taking only its `accepts`, opened at once as itself
- `src/grid.js:25`: a grid for one kind of thing refuses the rest
- `src/entities/animal.js:556-595`: in a pen, a trough on that pen's fences; out of one, within `feedReach` of home; one unit eaten
- `tools/mapgen/valley.py:459`, `tools/mapgen/valley.py:593-602`: the troughs by Hollow Farm's coop, in the byre, the pigsty, and the sheepfold
- `data/build.json:136-147`: built from the palette, planks, with `build` carried
- `data/items.json:69`, `data/items.json:77-81`: the feed, and its stacks

{{navbox props}}
