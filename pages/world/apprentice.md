---
title: Apprentice
categories: [Villagers]
summary: The Apprentice minds the stock at The merchant's house..
---

{{infobox-villager "Apprentice"}}

The **Apprentice** minds the stock at [[The merchant's house]].

Like every villager, they carry no weapon and never fight. They wander a little, never more than {{n tuning.villager.wanderRadius}} tiles from where they started and never through a wall, and stand idle between walks. A left click on them within {{n census.constants.interact.CLICK_REACH}} tiles, or **Poke** from the right-click menu, makes them stop, turn to face you, and say their line; they stay put for at least {{n tuning.villager.talkTime}} seconds before they wander again. With the world rule Zombies attack villagers on (it is off by default), the dead hunt them, and one bitten to death gets up as one of the dead in their own clothes. Unlike the [[Innkeeper]] and the [[Priest]], they are not immune to the dead. See [[Villagers]].

## What they say

Poked, the Apprentice says a line of their own for the moment, from their talk (see [[Talk]]): the first group below that holds, its lines taken in turn. With a player within {{n tuning.villager.barkRadius tiles}}, they also remark unprompted, from a group marked so, at most once every {{n tuning.villager.barkCooldown seconds}} of game time, and never while hurt or talking.

{{barks apprentice}}

The last group always holds, so their map line (in the box above) is not heard.

## Where they stand

The Apprentice stands in the wooden storehouse in the yard of [[The merchant's house]], with one of the dead in there too.

## Sources

<!-- sources at 3f11fdb -->
- `src/entities/villager.js:1-8`, `src/entities/villager.js:36-61`: villagers carry no weapon and never fight; a swing passes through them
- `data/tuning.json:75`, `src/entities/villager.js:71-84`, `src/entities/movement.js:19`, `src/entities/movement.js:108`: the wander within the tether's radius of home, on their own side of the walls
- `src/entities/movement.js:14`, `src/entities/villager.js:67-85`: standing idle between walks
- `src/interact.js:1359`, `src/interact.js:1525-1538`, `src/interact.js:1565-1579`: a left click within reach, or Poke on the menu
- `src/entities/villager.js:178-192`, `src/entities/villager.js:101-110`, `data/tuning.json:76`: the poke stops them, turns them to you, says a line, and holds them for the talk time
- `data/talk/apprentice.json`, `src/talk.js:124-141`: their bark groups, the first that holds, its lines in turn (game #220)
- `src/entities/villager.js:156-176`, `data/tuning.json:79-80`: a remark unprompted, from an `ambient` group, with a living player within `barkRadius`, not twice inside `barkCooldown`, never hurt, talking, or dead
- `src/settings.js:13`, `src/rules.js:15`, `src/entities/zombie.js:345-367`, `src/entities/zombie.js:534-547`: with Zombies attack villagers on (off by default) the dead hunt them, if they are not flagged `immune` (game #187)
- `src/game.js:391`, `src/entities/villager.js:118-154`, `src/game.js:647-651`: one bitten to death gets up as one of the dead in their clothes
- `data/maps/valley.json:12346-12354`: the Apprentice's line and tile
- `tools/mapgen/valley.py:613`, `data/maps/valley.json:3230-3312`: they stand in the wooden storehouse in the merchant's yard
- `data/maps/valley.json:11830-11833`: one of the dead in the storehouse with them

{{navbox places}}
