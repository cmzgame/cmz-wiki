---
title: Priest
categories: [Villagers]
summary: The Priest keeps The chapel in the graveyard, where the dead are thickest.
---

{{infobox-villager "Priest"}}

The **Priest** keeps [[The chapel]] in the graveyard, where the dead are thickest.

Like every villager, they carry no weapon and never fight. They wander a little, never more than {{n tuning.villager.wanderRadius}} tiles from where they started and never through a wall, and stand idle between walks. A left click on them within {{n census.constants.interact.CLICK_REACH}} tiles, or **Poke** from the right-click menu, makes them stop, turn to face you, and say their line; they stay put for at least {{n tuning.villager.talkTime}} seconds before they wander again. The Priest is **immune** to the dead: whatever the world rules say, the dead never hunt them and nothing harms them. See [[Villagers]].

## What they say

Poked, the Priest says: “The bell stopped on the third day.”

## Where they stand

The Priest stands inside [[The chapel]], in the small room in its north-east corner, behind a partition. Their own house, [[The priest's house]], is next door.

## Sources

<!-- sources at 4be64f2 -->
- `src/entities/villager.js:1-8`, `src/entities/villager.js:26-45`: villagers carry no weapon and never fight; a swing passes through them
- `data/tuning.json:75`, `src/entities/villager.js:54-67`, `src/entities/movement.js:19`, `src/entities/movement.js:108`: the wander within the tether's radius of home, on their own side of the walls
- `src/entities/movement.js:14`, `src/entities/villager.js:50-68`: standing idle between walks
- `src/interact.js:1249`, `src/interact.js:1415-1428`, `src/interact.js:1455-1469`: a left click within reach, or Poke on the menu
- `src/entities/villager.js:141-151`, `src/entities/villager.js:84-93`, `data/tuning.json:76`: the poke stops them, turns them to you, says the line, and holds them for the talk time
- `data/maps/valley.json:5832-5841`, `src/game.js:98`, `src/entities/villager.js:32`: the Priest flagged `immune` in the map (game #187)
- `src/entities/zombie.js:352-367`, `src/entities/villager.js:101-102`, `src/game.js:364`: the dead never pick an immune villager as prey, and a blow to one does nothing, whatever the world rules
- `tools/mapgen/valley.py:425`: the graveyard's eight dead, the largest group placed
- `data/maps/valley.json:5832-5841`: the Priest's line and tile
- `tools/mapgen/valley.py:436`, `data/maps/valley.json:2193-2206`: they stand in the chapel's north-east room, behind its partition
- `tools/mapgen/valley.py:279-280`: the priest's house next door, east of the chapel

{{navbox places}}
