---
title: Apprentice
categories: [Villagers]
summary: The Apprentice minds the stock at The merchant's house..
---

{{infobox-villager "Apprentice"}}

The **Apprentice** minds the stock at [[The merchant's house]].

Like every villager, they carry no weapon and never fight. They wander a little, never more than {{n tuning.villager.wanderRadius}} tiles from where they started and never through a wall, and stand idle between walks. A left click on them within {{n census.constants.interact.CLICK_REACH}} tiles, or **Poke** from the right-click menu, makes them stop, turn to face you, and say their line; they stay put for at least {{n tuning.villager.talkTime}} seconds before they wander again. With the world rule Zombies attack villagers on (it is off by default), the dead hunt them, and one bitten to death gets up as one of the dead in their own clothes. Unlike the [[Innkeeper]] and the [[Priest]], they are not immune to the dead. See [[Villagers]].

## What they say

Poked, the Apprentice says: “It is all here. Every bale. Nobody to buy it.”

## Where they stand

The Apprentice stands in the wooden storehouse in the yard of [[The merchant's house]], with one of the dead in there too.

## Sources

<!-- sources at 5baaa63 -->
- `src/entities/villager.js:1-8`, `src/entities/villager.js:26-45`: villagers carry no weapon and never fight; a swing passes through them
- `data/tuning.json:74`, `src/entities/villager.js:54-67`, `src/entities/movement.js:19`, `src/entities/movement.js:108`: the wander within the tether's radius of home, on their own side of the walls
- `src/entities/movement.js:14`, `src/entities/villager.js:50-68`: standing idle between walks
- `src/interact.js:1184`, `src/interact.js:1350-1363`, `src/interact.js:1390-1404`: a left click within reach, or Poke on the menu
- `src/entities/villager.js:141-151`, `src/entities/villager.js:84-93`, `data/tuning.json:75`: the poke stops them, turns them to you, says the line, and holds them for the talk time
- `src/settings.js:13`, `src/rules.js:15`, `src/entities/zombie.js:345-367`, `src/entities/zombie.js:534-547`: with Zombies attack villagers on (off by default) the dead hunt them, if they are not flagged `immune` (game #187)
- `src/game.js:361`, `src/entities/villager.js:101-137`, `src/game.js:614-618`: one bitten to death gets up as one of the dead in their clothes
- `data/maps/valley.json:5614-5622`: the Apprentice's line and tile
- `tools/mapgen/valley.py:427`, `data/maps/valley.json:3062-3144`: they stand in the wooden storehouse in the merchant's yard
- `data/maps/valley.json:5266-5269`: one of the dead in the storehouse with them

{{navbox places}}
