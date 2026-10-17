---
title: Priest
categories: [Villagers]
summary: The Priest keeps The chapel in the graveyard, where the dead are thickest.
---

{{infobox-villager "Priest"}}

The **Priest** keeps [[The chapel]] in the graveyard, where the dead are thickest.

Like every villager, they carry no weapon and never fight. They wander a little, never more than {{n tuning.villager.wanderRadius}} tiles from where they started and never through a wall, and stand idle between walks. A left click on them within {{n census.constants.interact.CLICK_REACH}} tiles, or **Poke** from the right-click menu, makes them stop, turn to face you, and say their line; they stay put for at least {{n tuning.villager.talkTime}} seconds before they wander again. The Priest is **immune** to the dead: whatever the world rules say, the dead never hunt them and nothing harms them. See [[Villagers]].

## What they say

Poked, the Priest says a line of their own for the moment, from their talk (see [[Talk]]): the first group below that holds, its lines taken in turn. With a player within {{n tuning.villager.barkRadius tiles}}, they also remark unprompted, from a group marked so, at most once every {{n tuning.villager.barkCooldown seconds}} of game time, and never while hurt or talking.

{{barks priest}}

The last group always holds, so their map line (in the box above) is not heard.

## Where they stand

The Priest stands inside [[The chapel]], in the small room in its north-east corner, behind a partition. Their own house, [[The priest's house]], is next door.

## Sources

<!-- sources at 3f11fdb -->
- `src/entities/villager.js:1-8`, `src/entities/villager.js:36-61`: villagers carry no weapon and never fight; a swing passes through them
- `data/tuning.json:75`, `src/entities/villager.js:71-84`, `src/entities/movement.js:19`, `src/entities/movement.js:108`: the wander within the tether's radius of home, on their own side of the walls
- `src/entities/movement.js:14`, `src/entities/villager.js:67-85`: standing idle between walks
- `src/interact.js:1359`, `src/interact.js:1525-1538`, `src/interact.js:1565-1579`: a left click within reach, or Poke on the menu
- `src/entities/villager.js:178-192`, `src/entities/villager.js:101-110`, `data/tuning.json:76`: the poke stops them, turns them to you, says a line, and holds them for the talk time
- `data/talk/priest.json`, `src/talk.js:124-141`: their bark groups, the first that holds, its lines in turn (game #220)
- `src/entities/villager.js:156-176`, `data/tuning.json:79-80`: a remark unprompted, from an `ambient` group, with a living player within `barkRadius`, not twice inside `barkCooldown`, never hurt, talking, or dead
- `data/maps/valley.json:12327-12336`, `src/game.js:100`, `src/entities/villager.js:44`: the Priest flagged `immune` in the map (game #187)
- `src/entities/zombie.js:352-367`, `src/entities/villager.js:118-119`, `src/game.js:391`: the dead never pick an immune villager as prey, and a blow to one does nothing, whatever the world rules
- `tools/mapgen/valley.py:592`: the graveyard's eight dead, the largest group placed
- `data/maps/valley.json:12327-12336`: the Priest's line and tile
- `tools/mapgen/valley.py:611`, `data/maps/valley.json:2314-2327`: they stand in the chapel's north-east room, behind its partition
- `tools/mapgen/valley.py:279-280`: the priest's house next door, east of the chapel

{{navbox places}}
