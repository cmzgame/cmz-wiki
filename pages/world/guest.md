---
title: Guest
categories: [Villagers]
summary: The Guest is a traveller staying at The inn who never left..
---

{{infobox-villager "Guest"}}

The **Guest** is a traveller staying at [[The inn]] who never left.

Like every villager, they carry no weapon and never fight. They wander a little, never more than {{n tuning.villager.wanderRadius}} tiles from where they started and never through a wall, and stand idle between walks. A left click on them within {{n census.constants.interact.CLICK_REACH}} tiles, or **Poke** from the right-click menu, makes them stop, turn to face you, and say their line; they stay put for at least {{n tuning.villager.talkTime}} seconds before they wander again. With the world rule Zombies attack villagers on (it is off by default), the dead hunt them, and one bitten to death gets up as one of the dead in their own clothes. Unlike the [[Innkeeper]] and the [[Priest]], they are not immune to the dead. See [[Villagers]].

## What they say

Poked, the Guest says: “I only stopped for the night.”

## Where they stand

The Guest stands in the inn's guest wing, in the rooms south of the taproom.

## Sources

<!-- sources at 4be64f2 -->
- `src/entities/villager.js:1-8`, `src/entities/villager.js:26-45`: villagers carry no weapon and never fight; a swing passes through them
- `data/tuning.json:75`, `src/entities/villager.js:54-67`, `src/entities/movement.js:19`, `src/entities/movement.js:108`: the wander within the tether's radius of home, on their own side of the walls
- `src/entities/movement.js:14`, `src/entities/villager.js:50-68`: standing idle between walks
- `src/interact.js:1249`, `src/interact.js:1415-1428`, `src/interact.js:1455-1469`: a left click within reach, or Poke on the menu
- `src/entities/villager.js:141-151`, `src/entities/villager.js:84-93`, `data/tuning.json:76`: the poke stops them, turns them to you, says the line, and holds them for the talk time
- `src/settings.js:13`, `src/rules.js:15`, `src/entities/zombie.js:345-367`, `src/entities/zombie.js:534-547`: with Zombies attack villagers on (off by default) the dead hunt them, if they are not flagged `immune` (game #187)
- `src/game.js:364`, `src/entities/villager.js:101-137`, `src/game.js:618-622`: one bitten to death gets up as one of the dead in their clothes
- `data/maps/valley.json:5815-5823`: the Guest's line and tile
- `tools/mapgen/valley.py:434`, `data/maps/valley.json:1954-2085`: they stand in the guest wing south of the taproom

{{navbox places}}
