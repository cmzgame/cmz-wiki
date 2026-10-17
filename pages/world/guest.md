---
title: Guest
categories: [Villagers]
summary: The Guest is a traveller staying at The inn who never left..
---

{{infobox-villager "Guest"}}

The **Guest** is a traveller staying at [[The inn]] who never left.

Like every villager, they carry no weapon and never fight. They wander a little, never more than {{n tuning.villager.wanderRadius}} tiles from where they started and never through a wall, and stand idle between walks. A left click on them within {{n census.constants.interact.CLICK_REACH}} tiles, or **Poke** from the right-click menu, makes them stop, turn to face you, and say their line; they stay put for at least {{n tuning.villager.talkTime}} seconds before they wander again. With the world rule Zombies attack villagers on (it is off by default), the dead hunt them, and one bitten to death gets up as one of the dead in their own clothes. Unlike the [[Innkeeper]] and the [[Priest]], they are not immune to the dead. See [[Villagers]].

## What they say

Poked, the Guest says a line of their own for the moment, from their talk (see [[Talk]]): the first group below that holds, its lines taken in turn. With a player within {{n tuning.villager.barkRadius tiles}}, they also remark unprompted, from a group marked so, at most once every {{n tuning.villager.barkCooldown seconds}} of game time, and never while talking.

{{barks guest}}

The last group always holds, so their map line (in the box above) is not heard.

**Talk to** them, from their menu or with `E` beside them, for a short conversation in their own voice (see [[Talk#Conversations|Talk]]).

## Where they stand

The Guest stands in the inn's guest wing, in the rooms south of the taproom.

## Sources

<!-- sources at 015eabc -->
- `src/entities/villager.js:1-8`, `src/entities/villager.js:39-64`: villagers carry no weapon and never fight; a swing passes through them
- `data/tuning.json:75`, `src/entities/villager.js:83-96`, `src/entities/movement.js:19`, `src/entities/movement.js:108`: the wander within the tether's radius of home, on their own side of the walls
- `src/entities/movement.js:14`, `src/entities/villager.js:79-97`: standing idle between walks
- `src/interact.js:1364`, `src/interact.js:1533-1550`, `src/interact.js:1576-1606`: a left click within reach, or Poke on the menu
- `src/entities/villager.js:246-260`, `src/entities/villager.js:113-124`, `data/tuning.json:76`: the poke stops them, turns them to you, says a line, and holds them for the talk time
- `data/talk/guest.json`, `src/talk.js:124-141`: their bark groups, the first that holds, its lines in turn (game #220)
- `data/talk/guest.json`, `src/entities/villager.js:194-222`: their conversation, on Talk to (game #230)
- `src/entities/villager.js:224-244`, `data/tuning.json:81-82`: a remark unprompted, from an `ambient` group, with a living player within `barkRadius`, not twice inside `barkCooldown`, never talking or dead (a wounded one too, game #230)
- `src/settings.js:13`, `src/rules.js:15`, `src/entities/zombie.js:345-367`, `src/entities/zombie.js:534-547`: with Zombies attack villagers on (off by default) the dead hunt them, if they are not flagged `immune` (game #187)
- `src/game.js:397`, `src/entities/villager.js:131-168`, `src/game.js:655-659`: one bitten to death gets up as one of the dead in their clothes
- `data/maps/valley.json:12310-12318`: the Guest's line and tile
- `tools/mapgen/valley.py:610`, `data/maps/valley.json:2075-2206`: they stand in the guest wing south of the taproom

{{navbox places}}
