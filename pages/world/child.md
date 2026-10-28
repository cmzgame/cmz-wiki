---
title: Child
categories: [Villagers]
summary: The Child lives at The inn with the Innkeeper..
---

{{infobox-villager "Child"}}

The **Child** lives at [[The inn]] with the [[Innkeeper]].

Like every villager, they carry no weapon and never fight. They wander a little, never more than {{n tuning.villager.wanderRadius}} tiles from where they started and never through a wall, and stand idle between walks. A left click on them within {{n census.constants.interact.CLICK_REACH}} tiles, or **Poke** from the right-click menu, makes them stop, turn to face you, and say their line; they stay put for at least {{n tuning.villager.talkTime}} seconds before they wander again. They are **immune** to the dead, as every villager is: the dead never hunt or bite them. They still fear them: one of the dead near and in sight makes them cower, run a few tiles off, and stand wary until it is gone, then walk back (see [[Villagers#Fleeing the dead|Villagers]]).

## What they say

Poked, the Child says a line of their own for the moment, from their talk (see [[Talk]]): the first group below that holds, its lines taken in turn. With a player within {{n tuning.villager.barkRadius tiles}}, they also remark unprompted, from a group marked so, at most once every {{n tuning.villager.barkCooldown seconds}} of game time, and never while talking.

{{barks child}}

The last group always holds, so their map line (in the box above) is not heard.

**Talk to** them, from their menu or with `E` beside them, for a short conversation in their own voice (see [[Talk#Conversations|Talk]]).

## Where they stand

The Child stands in the taproom of [[The inn]], not far from the Innkeeper.

## Sources

<!-- sources at 3c0a243 -->
- `src/entities/villager.js:1-8`, `src/entities/villager.js:39-64`: villagers carry no weapon and never fight; a swing passes through them
- `data/tuning.json:83`, `src/entities/villager.js:83-96`, `src/entities/movement.js:19`, `src/entities/movement.js:108`: the wander within the tether's radius of home, on their own side of the walls
- `src/entities/movement.js:14`, `src/entities/villager.js:79-97`: standing idle between walks
- `src/interact.js:1364`, `src/interact.js:1533-1550`, `src/interact.js:1576-1606`: a left click within reach, or Poke on the menu
- `src/entities/villager.js:246-260`, `src/entities/villager.js:113-124`, `data/tuning.json:84`: the poke stops them, turns them to you, says a line, and holds them for the talk time
- `data/talk/child.json`, `src/talk.js:124-141`: their bark groups, the first that holds, its lines in turn (game #220)
- `data/talk/child.json`, `src/entities/villager.js:194-222`: their conversation, on Talk to (game #230)
- `src/entities/villager.js:224-244`, `data/tuning.json:89-90`: a remark unprompted, from an `ambient` group, with a living player within `barkRadius`, not twice inside `barkCooldown`, never talking or dead (a wounded one too, game #230)
- `src/entities/villager.js:35-38`, `src/game.js:128`, `src/game.js:347-354`, `src/entities/zombie.js:442-458`, `src/entities/villager.js:244-247` (at 26a0a8f): immune, as every villager is (a map entry would have to say `immune: false`, and none does), read from the map again at a restore; never the dead's prey, a bite taking nothing (game #559)
- `src/entities/villager.js:84-156`, `src/entities/villager.js:161`, `data/tuning.json` `villager` (at 26a0a8f): the cowering, the flight, standing wary, and the walk back, for every villager (game #434, #559)
- `data/maps/valley.json:12319-12326`: the Child has no map line of their own
- `src/entities/villager.js:44`: a villager with no map line falls back on "Hey!"
- `tools/mapgen/valley.py:609-611`, `data/maps/valley.json:1789-2074`: the Child stands in the taproom (west of the kitchen's partition), near the Innkeeper

{{navbox places}}
