---
title: Neighbour
categories: [Villagers]
summary: The Neighbour has shut themselves inside The shut cottage on the south lane and will not come out..
---

{{infobox-villager "Neighbour"}}

The **Neighbour** has shut themselves inside [[The shut cottage]] on the south lane and will not come out.

Like every villager, they carry no weapon and never fight. They wander a little, never more than {{n tuning.villager.wanderRadius}} tiles from where they started and never through a wall, and stand idle between walks. A left click on them within {{n census.constants.interact.CLICK_REACH}} tiles, or **Poke** from the right-click menu, makes them stop, turn to face you, and say their line; they stay put for at least {{n tuning.villager.talkTime}} seconds before they wander again. With the world rule Zombies attack villagers on (it is off by default), the dead hunt them, and one bitten to death gets up as one of the dead in their own clothes. See [[Villagers]].

## What they say

Poked, the Neighbour says: “Go away.”

## Where they stand

The Neighbour stands inside [[The shut cottage]], next door but one to [[Your cottage]] along the lane. Its door starts closed and its one bracket is empty, so it is dark inside.

## Sources

<!-- sources at 9205ad7 -->
- `src/entities/villager.js:1-8`, `src/entities/villager.js:26-44`: villagers carry no weapon and never fight; a swing passes through them
- `data/tuning.json:67`, `src/entities/villager.js:53-66`, `src/entities/movement.js:19`, `src/entities/movement.js:103`: the wander within the tether's radius of home, on their own side of the walls
- `src/entities/movement.js:14`, `src/entities/villager.js:49-67`: standing idle between walks
- `src/interact.js:1156`, `src/interact.js:1326-1329`, `src/interact.js:1356-1370`: a left click within reach, or Poke on the menu
- `src/entities/villager.js:140-150`, `src/entities/villager.js:83-92`, `data/tuning.json:68`: the poke stops them, turns them to you, says the line, and holds them for the talk time
- `src/settings.js:13`, `src/entities/zombie.js:268-289`: with Zombies attack villagers on (off by default) the dead hunt them
- `src/entities/villager.js:100-136`, `src/game.js:522-524`: one bitten to death gets up as one of the dead in their clothes
- `data/maps/valley.json:5663-5671`: the Neighbour's line and tile
- `tools/mapgen/valley.py:380`, `tools/mapgen/valley.py:422`: inside the shut cottage, "a neighbour inside who will not open"
- `data/maps/valley.json:1129-1611`, `data/maps/valley.json:4889-5023`, `data/maps/valley.json:4757-4888`: your cottage at x 98, the reeve's house at 90, the shut cottage at 80: next door but one
- `data/maps/valley.json:4777-4782`, `data/maps/valley.json:4868-4873`: its door closed and its one bracket empty

{{navbox places}}
