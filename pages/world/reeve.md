---
title: Reeve
categories: [Villagers]
summary: The Reeve looks after the village's affairs, and lives in The reeve's house at the end of the south lane by the green..
---

{{infobox-villager "Reeve"}}

The **Reeve** looks after the village's affairs, and lives in [[The reeve's house]] at the end of the south lane by the green.

Like every villager, they carry no weapon and never fight. They wander a little, never more than {{n tuning.villager.wanderRadius}} tiles from where they started and never through a wall, and stand idle between walks. A left click on them within {{n census.constants.interact.CLICK_REACH}} tiles, or **Poke** from the right-click menu, makes them stop, turn to face you, and say their line; they stay put for at least {{n tuning.villager.talkTime}} seconds before they wander again. With the world rule Zombies attack villagers on (it is off by default), the dead hunt them, and one bitten to death gets up as one of the dead in their own clothes. See [[Villagers]].

## What they say

Poked, the Reeve says: “I have the keys and no one to give them to.”

## Where they stand

The Reeve stands inside [[The reeve's house]], next door to [[Your cottage]], to its west along the lane.

## Sources

<!-- sources at 9205ad7 -->
- `src/entities/villager.js:1-8`, `src/entities/villager.js:26-44`: villagers carry no weapon and never fight; a swing passes through them
- `data/tuning.json:67`, `src/entities/villager.js:53-66`, `src/entities/movement.js:19`, `src/entities/movement.js:103`: the wander within the tether's radius of home, on their own side of the walls
- `src/entities/movement.js:14`, `src/entities/villager.js:49-67`: standing idle between walks
- `src/interact.js:1156`, `src/interact.js:1326-1329`, `src/interact.js:1356-1370`: a left click within reach, or Poke on the menu
- `src/entities/villager.js:140-150`, `src/entities/villager.js:83-92`, `data/tuning.json:68`: the poke stops them, turns them to you, says the line, and holds them for the talk time
- `src/settings.js:13`, `src/entities/zombie.js:268-289`: with Zombies attack villagers on (off by default) the dead hunt them
- `src/entities/villager.js:100-136`, `src/game.js:522-524`: one bitten to death gets up as one of the dead in their clothes
- `tools/mapgen/valley.py:381-382`: the reeve's house at the row's end by the green
- `data/maps/valley.json:5645-5653`: the Reeve's line and tile
- `tools/mapgen/valley.py:420`, `data/maps/valley.json:4889-5023`: they stand inside the reeve's house, west of your cottage along the lane

{{navbox places}}
