---
title: Miller
categories: [Villagers]
summary: The Miller keeps the mill on the river, alive and not immune to the dead.
---

{{infobox-villager "Miller"}}

The **Miller** keeps [[The mill]] on the river's west bank.

Like every villager, they carry no weapon and never fight. They wander a little, never more than {{n tuning.villager.wanderRadius}} tiles from where they started and never through a wall, and stand idle between walks. A left click on them within {{n census.constants.interact.CLICK_REACH}} tiles, or **Poke** from the right-click menu, makes them stop, turn to face you, and say their line. With the world rule Zombies attack villagers on (it is off by default), the dead hunt them, and one bitten to death gets up as one of the dead in their own clothes. Unlike the [[Innkeeper]] and the [[Priest]], they are not immune to the dead. See [[Villagers]].

## What they say

Poked, the Miller says: “Grain is grain. Bring it, I will grind it.”

## Where they stand

The Miller stands inside [[The mill]], by the [[Millstones]].

## Sources

<!-- sources at cfe0203 -->
- `data/maps/valley.json:12352-12360`: the Miller's line and tile, no `immune` flag (game #219)
- `src/entities/villager.js:26-45`, `src/entities/villager.js:141-151`: a villager's wander and poke
- `src/settings.js:13`, `src/entities/zombie.js:345-367`: the dead hunt villagers behind the world rule

{{navbox places}}
