---
title: Neighbour
categories: [Villagers]
summary: The Neighbour has shut themselves inside The shut cottage on the south lane and will not come out..
---

{{infobox-villager "Neighbour"}}

The **Neighbour** has shut themselves inside [[The shut cottage]] on the south lane and will not come out.

Like every villager, they carry no weapon and never fight. They wander a little, never more than {{n tuning.villager.wanderRadius}} tiles from where they started and never through a wall, and stand idle between walks. A left click on them within {{n census.constants.interact.CLICK_REACH}} tiles, or **Poke** from the right-click menu, makes them stop, turn to face you, and say their line; they stay put for at least {{n tuning.villager.talkTime}} seconds before they wander again. With the world rule Zombies attack villagers on (it is off by default), the dead hunt them, and one bitten to death gets up as one of the dead in their own clothes. Unlike the [[Innkeeper]] and the [[Priest]], they are not immune to the dead. See [[Villagers]].

## What they say

Poked, the Neighbour says a line of their own for the moment, from their talk (see [[Talk]]): the first group below that holds, its lines taken in turn. With a player within {{n tuning.villager.barkRadius tiles}}, they also remark unprompted, from a group marked so, at most once every {{n tuning.villager.barkCooldown seconds}} of game time, and never while talking.

{{barks neighbour}}

The last group always holds, so their map line (in the box above) is not heard.

**Talk to** them, from their menu or with `E` beside them, for a short conversation in their own voice (see [[Talk#Conversations|Talk]]).

## Where they stand

The Neighbour stands inside [[The shut cottage]], next door but one to [[Your cottage]] along the lane. Its door starts closed and its one bracket is empty, so it is dark inside.

## Sources

<!-- sources at 015eabc -->
- `src/entities/villager.js:1-8`, `src/entities/villager.js:39-64`: villagers carry no weapon and never fight; a swing passes through them
- `data/tuning.json:75`, `src/entities/villager.js:83-96`, `src/entities/movement.js:19`, `src/entities/movement.js:108`: the wander within the tether's radius of home, on their own side of the walls
- `src/entities/movement.js:14`, `src/entities/villager.js:79-97`: standing idle between walks
- `src/interact.js:1364`, `src/interact.js:1533-1550`, `src/interact.js:1576-1606`: a left click within reach, or Poke on the menu
- `src/entities/villager.js:246-260`, `src/entities/villager.js:113-124`, `data/tuning.json:76`: the poke stops them, turns them to you, says a line, and holds them for the talk time
- `data/talk/neighbour.json`, `src/talk.js:124-141`: their bark groups, the first that holds, its lines in turn (game #220)
- `data/talk/neighbour.json`, `src/entities/villager.js:194-222`: their conversation, on Talk to (game #230)
- `src/entities/villager.js:224-244`, `data/tuning.json:81-82`: a remark unprompted, from an `ambient` group, with a living player within `barkRadius`, not twice inside `barkCooldown`, never talking or dead (a wounded one too, game #230)
- `src/settings.js:13`, `src/rules.js:15`, `src/entities/zombie.js:345-367`, `src/entities/zombie.js:534-547`: with Zombies attack villagers on (off by default) the dead hunt them, if they are not flagged `immune` (game #187)
- `src/game.js:397`, `src/entities/villager.js:131-168`, `src/game.js:655-659`: one bitten to death gets up as one of the dead in their clothes
- `data/maps/valley.json:5862-5870`: the Neighbour's line and tile
- `tools/mapgen/valley.py:390`, `tools/mapgen/valley.py:615`: inside the shut cottage, "a neighbour inside who will not open"
- `data/maps/valley.json:1295-1778`, `data/maps/valley.json:5092-5226`, `data/maps/valley.json:4960-5091`: your cottage at x 98, the reeve's house at 90, the shut cottage at 80: next door but one
- `data/maps/valley.json:4980-4985`, `data/maps/valley.json:5071-5076`: its door closed and its one bracket empty

{{navbox places}}
