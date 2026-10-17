---
title: Innkeeper
categories: [Villagers]
summary: The Innkeeper keeps The inn on the square, and is one of the few people still alive in the valley.
---

{{infobox-villager "Innkeeper"}}

The **Innkeeper** keeps [[The inn]] on the square, and is one of the few people still alive in the valley.

Like every villager, they carry no weapon and never fight. They wander a little, never more than {{n tuning.villager.wanderRadius}} tiles from where they started and never through a wall, and stand idle between walks. A left click on them within {{n census.constants.interact.CLICK_REACH}} tiles, or **Poke** from the right-click menu, makes them stop, turn to face you, and say their line; they stay put for at least {{n tuning.villager.talkTime}} seconds before they wander again. The Innkeeper is **immune** to the dead: whatever the world rules say, the dead never hunt them and nothing harms them. See [[Villagers]].

## What they say

Poked, the Innkeeper says a line of their own for the moment, from their talk (see [[Talk]]): the first group below that holds, its lines taken in turn. With a player within {{n tuning.villager.barkRadius tiles}}, they also remark unprompted, from a group marked so, at most once every {{n tuning.villager.barkCooldown seconds}} of game time, and never while talking.

{{barks innkeeper}}

The last group always holds, so their map line (in the box above) is not heard.

**Talk to** them, from their menu or with `E` beside them, for a short conversation in their own voice (see [[Talk#Conversations|Talk]]).

## Where they stand

The Innkeeper stands in the taproom of [[The inn]], near the counter, and wanders about the room.

## Sources

<!-- sources at 015eabc -->
- `src/entities/villager.js:1-8`, `src/entities/villager.js:39-64`: villagers carry no weapon and never fight; a swing passes through them
- `data/tuning.json:75`, `src/entities/villager.js:83-96`, `src/entities/movement.js:19`, `src/entities/movement.js:108`: the wander within the tether's radius of home, on their own side of the walls
- `src/entities/movement.js:14`, `src/entities/villager.js:79-97`: standing idle between walks
- `src/interact.js:1364`, `src/interact.js:1533-1550`, `src/interact.js:1576-1606`: a left click within reach, or Poke on the menu
- `src/entities/villager.js:246-260`, `src/entities/villager.js:113-124`, `data/tuning.json:76`: the poke stops them, turns them to you, says a line, and holds them for the talk time
- `data/talk/innkeeper.json`, `src/talk.js:124-141`: their bark groups, the first that holds, its lines in turn (game #220)
- `data/talk/innkeeper.json`, `src/entities/villager.js:194-222`: their conversation, on Talk to (game #230)
- `src/entities/villager.js:224-244`, `data/tuning.json:81-82`: a remark unprompted, from an `ambient` group, with a living player within `barkRadius`, not twice inside `barkCooldown`, never talking or dead (a wounded one too, game #230)
- `data/maps/valley.json:12300-12309`, `src/game.js:103`, `src/entities/villager.js:45`: the Innkeeper flagged `immune` in the map (game #187)
- `src/entities/zombie.js:352-367`, `src/entities/villager.js:131-132`, `src/game.js:397`: the dead never pick an immune villager as prey, and a blow to one does nothing, whatever the world rules
- `data/maps/valley.json:5806-5871`: seven villagers in the valley
- `data/maps/valley.json:12300-12309`: the Innkeeper's line and tile
- `tools/mapgen/valley.py:609`, `data/maps/valley.json:1856-1866`: they stand in the taproom near the counter

{{navbox places}}
