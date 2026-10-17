---
title: Innkeeper
categories: [Villagers]
summary: The Innkeeper keeps The inn on the square, and is one of the few people still alive in the valley.
---

{{infobox-villager "Innkeeper"}}

The **Innkeeper** keeps [[The inn]] on the square, and is one of the few people still alive in the valley.

Like every villager, they carry no weapon and never fight. They wander a little, never more than {{n tuning.villager.wanderRadius}} tiles from where they started and never through a wall, and stand idle between walks. A left click on them within {{n census.constants.interact.CLICK_REACH}} tiles, or **Poke** from the right-click menu, makes them stop, turn to face you, and say their line; they stay put for at least {{n tuning.villager.talkTime}} seconds before they wander again. The Innkeeper is **immune** to the dead: whatever the world rules say, the dead never hunt them and nothing harms them. See [[Villagers]].

## What they say

Poked, the Innkeeper says: “Shut that behind you.”

## Where they stand

The Innkeeper stands in the taproom of [[The inn]], near the counter, and wanders about the room.

## Sources

<!-- sources at 4be64f2 -->
- `src/entities/villager.js:1-8`, `src/entities/villager.js:26-45`: villagers carry no weapon and never fight; a swing passes through them
- `data/tuning.json:75`, `src/entities/villager.js:54-67`, `src/entities/movement.js:19`, `src/entities/movement.js:108`: the wander within the tether's radius of home, on their own side of the walls
- `src/entities/movement.js:14`, `src/entities/villager.js:50-68`: standing idle between walks
- `src/interact.js:1249`, `src/interact.js:1415-1428`, `src/interact.js:1455-1469`: a left click within reach, or Poke on the menu
- `src/entities/villager.js:141-151`, `src/entities/villager.js:84-93`, `data/tuning.json:76`: the poke stops them, turns them to you, says the line, and holds them for the talk time
- `data/maps/valley.json:5805-5814`, `src/game.js:98`, `src/entities/villager.js:32`: the Innkeeper flagged `immune` in the map (game #187)
- `src/entities/zombie.js:352-367`, `src/entities/villager.js:101-102`, `src/game.js:364`: the dead never pick an immune villager as prey, and a blow to one does nothing, whatever the world rules
- `data/maps/valley.json:5804-5869`: seven villagers in the valley
- `data/maps/valley.json:5805-5814`: the Innkeeper's line and tile
- `tools/mapgen/valley.py:433`, `data/maps/valley.json:1735-1745`: they stand in the taproom near the counter

{{navbox places}}
