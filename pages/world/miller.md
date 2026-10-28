---
title: Miller
categories: [Villagers]
summary: The Miller keeps the mill on the river, immune to the dead as every villager is.
---

{{infobox-villager "Miller"}}

The **Miller** keeps [[The mill]] on the river's west bank.

Like every villager, they carry no weapon and never fight. They wander a little, never more than {{n tuning.villager.wanderRadius}} tiles from where they started and never through a wall, and stand idle between walks. A left click on them within {{n census.constants.interact.CLICK_REACH}} tiles, or **Poke** from the right-click menu, makes them stop, turn to face you, and say their line. They are **immune** to the dead, as every villager is: the dead never hunt or bite them. They still fear them: one of the dead near and in sight makes them cower, run a few tiles off, and stand wary until it is gone, then walk back (see [[Villagers#Fleeing the dead|Villagers]]).

## What they say

Poked, the Miller says: “Grain is grain. Bring it, I will grind it.” They have no talk of their own yet, so it is their map line, every time, and they make no remark unprompted (see [[Talk]]). **Talk to** the Miller gets the same line, as a poke does: with no talk of their own, they hold no conversation.

## Where they stand

The Miller stands inside [[The mill]], by the [[Millstones]].

## Sources

<!-- sources at 3c0a243 -->
- `data/maps/valley.json:12364-12372`: the Miller's line and tile (game #219); no `immune` flag, which means immune (game #559)
- `src/entities/villager.js:39-64`, `src/entities/villager.js:246-260`: a villager's wander and poke; with no talk file, the map line
- `data/talk/`: no file for the Miller (game #220)
- `src/entities/villager.js:194-210`: Talk to without a file is a poke (game #230)
- `src/entities/villager.js:35-38`, `src/game.js:128`, `src/game.js:347-354`, `src/entities/zombie.js:442-458`, `src/entities/villager.js:244-247` (at 26a0a8f): immune, as every villager is (a map entry would have to say `immune: false`, and none does), read from the map again at a restore; never the dead's prey, a bite taking nothing (game #559)
- `src/entities/villager.js:84-156`, `src/entities/villager.js:161`, `data/tuning.json` `villager` (at 26a0a8f): the cowering, the flight, standing wary, and the walk back, for every villager (game #434, #559)

{{navbox places}}
