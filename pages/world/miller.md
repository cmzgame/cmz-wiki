---
title: Miller
categories: [Villagers]
summary: The Miller keeps the mill on the river, alive and not immune to the dead.
---

{{infobox-villager "Miller"}}

The **Miller** keeps [[The mill]] on the river's west bank.

Like every villager, they carry no weapon and never fight. They wander a little, never more than {{n tuning.villager.wanderRadius}} tiles from where they started and never through a wall, and stand idle between walks. A left click on them within {{n census.constants.interact.CLICK_REACH}} tiles, or **Poke** from the right-click menu, makes them stop, turn to face you, and say their line. With the world rule Zombies attack villagers on (it is off by default), the dead hunt them, and one bitten to death gets up as one of the dead in their own clothes. Unlike the [[Innkeeper]] and the [[Priest]], they are not immune to the dead. See [[Villagers]].

## What they say

Poked, the Miller says: “Grain is grain. Bring it, I will grind it.” They have no talk of their own yet, so it is their map line, every time, and they make no remark unprompted (see [[Talk]]). **Talk to** the Miller gets the same line, as a poke does: with no talk of their own, they hold no conversation.

## Where they stand

The Miller stands inside [[The mill]], by the [[Millstones]].

## Sources

<!-- sources at 3c0a243 -->
- `data/maps/valley.json:12364-12372`: the Miller's line and tile, no `immune` flag (game #219)
- `src/entities/villager.js:39-64`, `src/entities/villager.js:246-260`: a villager's wander and poke; with no talk file, the map line
- `data/talk/`: no file for the Miller (game #220)
- `src/entities/villager.js:194-210`: Talk to without a file is a poke (game #230)
- `src/settings.js:13`, `src/entities/zombie.js:345-367`: the dead hunt villagers behind the world rule

{{navbox places}}
