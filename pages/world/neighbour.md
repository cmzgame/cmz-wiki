---
title: Neighbour
categories: [Villagers]
summary: The Neighbour has shut themselves inside The shut cottage on the south lane and will not come out..
---

{{infobox-villager "Neighbour"}}

The **Neighbour** has shut themselves inside [[The shut cottage]] on the south lane and will not come out.

Like every villager, they carry no weapon and never fight. They wander a little, never more than {{n tuning.villager.wanderRadius}} tiles from where they started and never through a wall, and stand idle between walks. A left click on them within {{n census.constants.interact.CLICK_REACH}} tiles, or **Poke** from the right-click menu, makes them stop, turn to face you, and say their line; they stay put for at least {{n tuning.villager.talkTime}} seconds before they wander again. With the world rule Zombies attack villagers on (it is off by default), the dead hunt them, and one bitten to death gets up as one of the dead in their own clothes. Unlike the [[Innkeeper]] and the [[Priest]], they are not immune to the dead. See [[Villagers]].

## What they say

Poked, the Neighbour says: “Go away.”

## Where they stand

The Neighbour stands inside [[The shut cottage]], next door but one to [[Your cottage]] along the lane. Its door starts closed and its one bracket is empty, so it is dark inside.

## Sources

<!-- sources at 4be64f2 -->
- `src/entities/villager.js:1-8`, `src/entities/villager.js:26-45`: villagers carry no weapon and never fight; a swing passes through them
- `data/tuning.json:75`, `src/entities/villager.js:54-67`, `src/entities/movement.js:19`, `src/entities/movement.js:108`: the wander within the tether's radius of home, on their own side of the walls
- `src/entities/movement.js:14`, `src/entities/villager.js:50-68`: standing idle between walks
- `src/interact.js:1249`, `src/interact.js:1415-1428`, `src/interact.js:1455-1469`: a left click within reach, or Poke on the menu
- `src/entities/villager.js:141-151`, `src/entities/villager.js:84-93`, `data/tuning.json:76`: the poke stops them, turns them to you, says the line, and holds them for the talk time
- `src/settings.js:13`, `src/rules.js:15`, `src/entities/zombie.js:345-367`, `src/entities/zombie.js:534-547`: with Zombies attack villagers on (off by default) the dead hunt them, if they are not flagged `immune` (game #187)
- `src/game.js:364`, `src/entities/villager.js:101-137`, `src/game.js:618-622`: one bitten to death gets up as one of the dead in their clothes
- `data/maps/valley.json:5860-5868`: the Neighbour's line and tile
- `tools/mapgen/valley.py:388`, `tools/mapgen/valley.py:439`: inside the shut cottage, "a neighbour inside who will not open"
- `data/maps/valley.json:1175-1657`, `data/maps/valley.json:4957-5091`, `data/maps/valley.json:4825-4956`: your cottage at x 98, the reeve's house at 90, the shut cottage at 80: next door but one
- `data/maps/valley.json:4845-4850`, `data/maps/valley.json:4936-4941`: its door closed and its one bracket empty

{{navbox places}}
