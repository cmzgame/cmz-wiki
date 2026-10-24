---
title: Trees
categories: [Gatherables, The world]
aliases: [Tree, Oak, Spire, Chopping, Woodcutting, Felling, Chop down, Apple tree, Apple trees, Fruit trees, Picking, Pick apples]
summary: The forest's trees, oaks and spires in three sizes, and the apple trees picked for apples; a hatchet fells any tree for logs and leaves a stump.
---

Trees stand all over [[The valley]] outside the village and its reserves, and fill [[The wild]] beyond it. They are [[Gatherables]]: a click sways them, and any tree can be chopped down for [[Log|logs]] with a [[Hatchet]] in hand, leaving a [[Stump]].

## Kinds

The forest has two shapes, the round oak and the tall spire, each in six colours (green, blue, orange, purple, red, and yellow) and three sizes: medium, large, and old. The valley's forest grows the green, orange, red, and yellow trees of both shapes; blue and purple trees appear in no map. Each tree drops leaves of its own colour on the ground round it.

| Size | Blocks a circle of | Logs when chopped | Canopy reaches |
|---|---|---|---|
| Medium | {{n sprites.tree_oak_m.collide.radius}} tiles | {{n sprites.tree_oak_m.wood}} | {{n sprites.tree_oak_m.canopy.reach}} tiles |
| Large | {{n sprites.tree_oak_l.collide.radius}} tiles | {{n sprites.tree_oak_l.wood}} | {{n sprites.tree_oak_l.canopy.reach}} tiles |
| Old | {{n sprites.tree_oak_old.collide.radius}} tiles | {{n sprites.tree_oak_old.wood}} | {{n sprites.tree_oak_old.canopy.reach}} tiles |

## Fruit trees

An **apple tree** is a short, round tree with red apples in its canopy. [[The orchard]] is planted with them in staggered rows, and three cottage gardens have one each: those of the cottage by the merchant's, the cottage by the baker's, and the first cottage on the lane. Like any tree it sways when clicked, blocks a circle of {{n sprites.tree_apple.collide.radius}} tiles, and gives {{n sprites.tree_apple.wood}} logs when chopped.

Right-click a laden tree and pick **Pick apples**, standing within {{n tuning.world.pickReach tiles}} of its trunk with nothing that blocks sight between you (a wall, a shut door, or closed shutters; a fence or an open window does not). It takes {{n sprites.tree_apple.pick.seconds}} seconds and gives between {{n sprites.tree_apple.pick.count.0}} and {{n sprites.tree_apple.pick.count.1}} [[Apple|apples]], and says how many ("You pick ... apples."). They go into your bag, and any that do not fit fall at your feet, and the line says how many fell.

A picked tree is **bare**: its menu shows "Bare (fruit in about N days)", greyed, and it bears again {{n sprites.tree_apple.pick.days}} days of the world's clock after it was picked, at the next check of the bare trees (every {{n tuning.world.fruitCheckSeconds seconds}}). Time asleep counts, since sleep runs the clock fast. A bare tree can still be chopped down; chopping a laden one loses its apples.

## Walking among them

Only a small circle at the trunk blocks you, so you can slip between trees. Walking into a trunk slides you round it. The dead and villagers find their paths round the whole tile. The ground under a canopy is drawn a little darker, and a tree casts a shadow.

When you walk behind a tall tree, a soft hole opens in its canopy so you can see yourself. See [[Sight]].

## Chopping

Chopping needs a [[Hatchet]] in a hand. With one, a tree's menu offers **Chop down**, naming how many logs it will give; without one the entry reads "Chop down (need a hatchet)" and is greyed. You must stand within {{n tuning.world.pickReach tiles}} of the trunk, with a clear line to it: never through a wall or a shut door ("There is a wall in the way."). It takes {{n tuning.world.chopSeconds seconds}}. The tree is gone, its logs lie on the ground on its tile, and a [[Stump]] stands where it stood: "... logs on the ground, and a stump." An apple tree leaves a stump too, and chopping a laden one loses its apples.

The stump is chopped up the same way, with the hatchet, for {{n sprites.stump.wood}} more log, and then the tile is clear. Felled logs are the wood that comes back: the forest does not regrow, so a stump is only a last log.

Logs are fuel for a [[Fire|fireplace]], and can be split into [[Plank|planks]].

## A world without trees

**Trees** is one of the [[World rules|world rules]], chosen when a world is made (on by default) and never changed after. Off, no tree is made anywhere: not in the valley's forests, not in [[The wild]], however far anyone walks, and not in [[The orchard]] or the gardens, so a world without trees has no apples from trees. Everything else is where it would be, the [[Mushrooms]] included: they grow beside where the trees would have stood, the same ones in the same places as in a world with trees.

## With friends

Chopping and picking are menu actions the host performs for whoever asked, the hatchet checked in that player's own hands. The tree's removal, the logs, and the stump, a picked tree going bare, and a bare one bearing again reach every player with the changed part of the map, and the day a bare tree bears again is saved with it. Whether the world has trees is the host's choice, made with the world; a guest's copy has the host's.

## See also

- [[Gatherables]]
- [[Log]], [[Apple]], [[Hatchet]], [[Stump]]
- [[The orchard]]
- [[The wild]]
- [[Sight]]

## Sources

<!-- sources at 3c0a243 -->
- `src/map.js:2158-2197`, `data/maps/valley.json:11646-11661`: trees scattered over the valley except the village and the reserves
- `data/maps/valley.json:11615-11645`: the zone's green, orange, red, and yellow oaks and spires; blue and purple in no map
- `data/sprites/tree_oak_m.json`, `data/sprites/tree_oak_l.json`, `data/sprites/tree_oak_old.json`: per size the collision radius, wood, canopy reach, shadow, and leaf colour
- `src/map.js:1539-1550`, `src/map.js:1605-1647`: only a circle at the trunk blocks, and a body slides round it
- `src/map.js:1498-1508`: a path treats a tree's whole tile as blocked
- `data/ground.json`, `src/ground.js`: the canopy's darkening and the shadow
- `src/render/scene.js:97-121`: the hole in the canopy
- `src/interact.js:654-676`, `data/tuning.json:116-118`: Chop down with the count of logs with a hatchet in a hand, else "(need a hatchet)" greyed; `chopSeconds`; the stump's entry (game #207)
- `src/chop.js:14-51`, `data/items.json`: a chopper is any item in a hand listing the verb `chop` (the hatchet); within `pickReach` and with a clear line (the line, game #227); the tree removed, its logs dropped on its tile, a stump placed where a tree with a canopy stood; the stump chopped for its log and the tile cleared
- `data/items.json:4`, `data/sprites/fireplace.json`: logs split into planks and feed a fireplace
- `src/interact.js:70-92`, `src/map.js:924-931`: a guest's chop run on the host; the change travels in the touched chunk
- `src/rules.js:19`, `src/rules.js:28-30`, `src/map.js:46-54`, `src/map.js:399-411`, `src/map.js:2019-2027`, `src/map.js:2193`: the Trees rule, fixed at creation: no tree in the scatter or the wild, the other picks as ever
- `data/sprites/tree_apple.json`, `data/sprites/tree_apple_bare.json`: the apple tree laden and bare: its collision, wood, canopy, and `pick` block (the apples, the count, the days, the seconds), and what the bare one ripens to (game #192)
- `tools/mapgen/valley.py:101-118`, `tools/mapgen/valley.py:384-388`, `tools/mapgen/valley.py:399-406`, `data/maps/valley.json`: the orchard's rows and one tree in three cottage gardens
- `src/interact.js:599-624`, `src/interact.js:777`, `data/tuning.json:116`: Pick apples, a timed action within `pickReach`; a bare tree's greyed entry with the days left; Chop down beside it
- `src/fruit.js:30-52`: the pick: within reach and a clear line (game #206), the count rolled, into the bag or at the feet, the tree turned bare with the day it bears again, and its line
- `src/fruit.js:54-73`, `src/game.js:557`, `data/tuning.json:115`, `src/clock.js:5`: bare trees bear again at the first check at or after their day, in the world's clock
- `src/map.js:518-527`: a tree changed in place, its day saved with it and its chunk sent to guests
- `src/map.js:2046`: Trees off: an authored tree, an orchard's or a garden's, is not placed either (game #192)
- `src/map.js:413-447`: the mushrooms placed against where the trees would have stood, never on such a tile (game #149)
