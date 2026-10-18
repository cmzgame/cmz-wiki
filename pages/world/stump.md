---
title: Stump
categories: [Gatherables, The world]
aliases: [Stumps, Tree stump, Chop up the stump]
summary: What a felled tree leaves: an outlined stump that blocks like a trunk, chopped up with a hatchet for one more log.
---

A **stump** is what a tree leaves when it is chopped down with a [[Hatchet]] (see [[Trees]]). It stands on the tree's tile, a short block of wood with a dark outline all the way round, as every [[Gatherables|gatherable]] has. A click sways it, and it blocks bodies like a trunk, a circle of {{n sprites.stump.collide.radius}} tiles.

## Chopping it up

With a hatchet in a hand, its menu offers **Chop up the stump**, naming its log; without one the entry is greyed: "Chop up the stump (need a hatchet)". You must stand within {{n tuning.world.pickReach tiles}} of it. After {{n tuning.world.chopSeconds seconds}} it gives {{n sprites.stump.wood}} [[Log]] on its tile, "... from the stump, and the ground is clear.", and nothing is left: no second stump.

## With friends

Chopping a stump is a menu action the host performs for whoever asked. The stump, and the tile cleared, reach every player with the changed part of the map, and are kept in the save.

## See also

- [[Trees]], [[Hatchet]], [[Log]], [[Gatherables]]

## Sources

<!-- sources at 29a9f8e -->
- `data/sprites/stump.json`: the stump: `interactable`, outlined, its collision, `wood`, `felled` (game #207)
- `data/tuning.json:115`, `src/chop.js:41-46`: a felled tree with a canopy leaves the stump sprite on its tile
- `src/chop.js:23-24`, `src/chop.js:26-51`: a stump is a prop marked `felled`; chopped, it gives its log and leaves nothing
- `src/interact.js:654-676`, `data/tuning.json:114`: Chop up the stump with a hatchet in a hand, else greyed; within `pickReach`; `chopSeconds`
- `src/map.js:506-540`: the stump placed and removed through the map, so the chunk is saved and sent

{{navbox props}}
