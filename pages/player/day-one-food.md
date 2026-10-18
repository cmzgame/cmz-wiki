---
title: Day-one food
categories: [Needs, Statistics, Mechanics]
aliases: [Day one food, Starting food, Food in the valley, How long the food lasts]
summary: All the food the valley holds when a world is made, in hunger points, and how long it would feed one, two, or four players before they starve.
---

**Day-one food** is all the [[Food]] the valley holds on the day a world is made: the food in each new character's kit, in the valley's containers, on its apple trees, and in the crops it starts with ripe. It says how far a player can roam on what they find before they must have [[Farming]] working and food in production, and how long the valley keeps a group of friends. Every number on this page is computed from the game's data each time the wiki is built.

Everything together comes to {{day-one-food n=total}} hunger points: enough to keep one player from [[Hunger|starving]] for about {{day-one-food n=days}} game days, or {{day-one-food n=time}} of play. Without a tool to harvest the ripe crops it is about {{day-one-food n=notools-days}} game days. The foods found this way are the plain ones, and weak on purpose: [[Cooking]] makes the same food fill more, and the regions beyond the valley could one day offer better (an idea of Michael's, not built or ruled).

## The count

Each food counts its hunger value (the Hunger column on [[Food]]); anything that is not food counts nothing.

{{day-one-food sources}}

Rolled loot is an average. A container is filled from its loot table the first time it is searched, so a given world has more in some containers and less in others than these tables say, and the total moves with it. The fixed tables are the same in every world.

### Containers

A placed container takes the loot table the map names for it, or else its kind's own: chests, shelves, cupboards, woodpiles, and the rest share the chests' table (see [[Containers]]). The tables with no food in them (the miners' tools, the stone stacks, the granaries' seed) are left out.

{{day-one-food containers}}

### Fruit trees

Each [[Trees#Fruit trees|apple tree]] is counted for one pick. A picked tree is bare and bears again {{n sprites.tree_apple.pick.days days}} later, so the trees go on feeding a player who comes back to them; that is not counted here.

### Ripe crops

The valley's fields are planted with [[Crops]] at every stage; only the ripe ones are counted, each for its harvest. A harvest needs its tool carried, named in the table's last column (see [[Farming]]). Rye and [[Flax]] stand ripe in places but are not food, and count nothing.

{{day-one-food crops}}

## How long it lasts

A full stomach is {{n tuning.player.hungerMax}} hunger and empties in {{n tuning.player.hungerDrainSeconds}} seconds of the world's clock, and a game day is {{n census.constants.clock.DAY_LENGTH}} seconds. Dividing the food by a full stomach gives the stomachs it fills, and from them the time and the days. The time is play while awake: while every living player is asleep in bed, the world's clock runs {{n tuning.player.sleepTimeScale}} times as fast, and hunger with it.

The world's food is shared by everyone in it, while each player brings a kit of their own. **Without tools** counts the kits, the containers, and the fruit trees: what a player can eat before they carry any tool a harvest needs. **The kit alone** is what a new character carries.

{{day-one-food lasts}}

These are the most the food can give. Every character starts with a full stomach, which is on top of these figures; eating when not hungry wastes food, since hunger stops at its maximum. Once hunger is empty a character loses {{n tuning.player.starveDamage}} health a second (see [[Hunger]]).

## What is not counted

- [[Fishing]]: the valley's waters give fish for as long as anyone casts.
- Fruit growing back on picked trees.
- What the dead carry in their pockets (see [[Containers]]).
- Crops not yet ripe, which go on growing, and anything a player plants.
- Cooking. Every cooked food fills more than the food that goes into it (a [[Roast potato]] against a [[Potato]], a [[Stew]] against its vegetables, grilled fish against raw), so cooking is the way to stretch the valley's food.
- The ripe rye's [[Grain]], which is not food until it is cooked into [[Porridge]] or milled and baked into a [[Loaf of bread]].
- A world's extra starting items (see [[World rules]]); the count uses the default kit.
- A world made with the Trees rule off has no apple trees, so less food than this.

## With friends

The valley's food is the world's, not each player's: two or four players share the same containers, trees, and fields, and each brings only their own kit. More players empty it sooner, as the table shows.

## See also

- [[Food]], [[Hunger]], [[Cooking]]
- [[Farming]], [[Crops]], [[Fishing]]
- [[Containers]], [[Trees]]

## Sources

<!-- sources at 63ea3be -->
- `data/items.json`: each food's `hunger`; only items of kind `food` count
- `data/kit.json`: the default starting kit
- `data/maps/valley.json`: every placed prop, a container's own `loot`, the apple trees, and the crops at each stage
- `src/map.js:1915`: a placed container takes the map's `loot`, else its sprite's `container.loot`
- `data/sprites/chest.json`, `data/sprites/barrel.json`, and the other container sprites: each kind's own loot table
- `data/loot.json`: the tables, fixed and rolled
- `src/items.js:81-104`: a fixed table in full; a rolled one rolls its count, each roll an entry by weight, and a count in its range
- `src/interact.js:340-352`: a container is filled on its first search
- `data/sprites/tree_apple.json`, `src/fruit.js:30-52`: a pick's apples, and the days a picked tree stays bare
- `data/crops.json`, `src/farming.js:233-258`: each crop's stages, harvest, and tool; ripe is the stage after the last growing one
- `data/tuning.json:52-57`, `data/tuning.json:65`: hunger's maximum, its drain, starving's damage, and the sleeping clock's speed
- `src/clock.js:5`: a game day's length, `DAY_LENGTH` (read through the census)
- `src/game.js:356`: the clock runs `sleepTimeScale` times as fast while everyone sleeps
- `src/entities/player.js:38`: a new character starts full
- the game's `docs/02-decisions.md`, 2026-10-18, "Day-one food is a tracked statistic": why the page exists, the starting foods weak on purpose, and the regions' better foods as Michael's "could"
