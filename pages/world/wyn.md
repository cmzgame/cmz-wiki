---
title: Wyn
categories: [Villagers]
aliases: [The guide, Guide]
summary: Wyn, the guide, stands just outside your cottage's door, immune to the dead, with a word for whoever is stuck.
---

{{infobox-villager "Wyn"}}

**Wyn** is the guide: a neighbour from the farm lane who came up to your yard when the chapel bell stopped, and has not gone home. They stand just outside the door of [[Your cottage]], so they are the first person you see on stepping out. Every map the game makes has its guide beside the spawn.

Like every villager, they carry no weapon and never fight. They wander a little, never more than {{n tuning.villager.wanderRadius}} tiles from where they started and never through a wall, and stand idle between walks. A left click on them within {{n census.constants.interact.CLICK_REACH}} tiles, or **Poke** from the right-click menu, makes them stop, turn to face you, and say a line. Wyn is **immune** to the dead: whatever the world rules say, the dead never hunt them and nothing harms them. See [[Villagers]].

## What they say

Poked, Wyn says a line for the moment (see [[Talk]]): the first group below that holds, its lines taken in turn. With a player within {{n tuning.villager.barkRadius tiles}}, they also remark unprompted, at most once every {{n tuning.villager.barkCooldown seconds}} of game time.

{{barks guide}}

The first poke of a new world is a welcome: the dead who stood in the lane by your cottage now stand farther down it, out of Wyn's reach.

## What they know

Wyn's talk holds a conversation that opens on these questions, each about a part of the game as it is built and each pointing to its page here:

{{talk-topics guide}}

{{planned doc=34 note="The conversation panel, where you ask the guide these questions and read the answers (game issue 202); today a poke gives a single line."}}

## With friends

A guest pokes Wyn as the host's player does, by the same command; the host picks the line, and the bubble and the chat log line reach everyone in sight.

## Sources

<!-- sources at 0e765f7 -->
- `data/maps/valley.json:12288-12299`, `tools/mapgen/valley.py:605-607`: Wyn by your cottage's door at (102, 218), wardrobe 6, their map line, `immune`, `talk: guide`, `guide` (game #220)
- `tools/mapgen/mapgen.py:15`, `tools/mapgen/mapgen.py:146-150`: a guide on every map the generator makes, within three tiles of its spawn
- `data/talk/guide.json`: the barks and the conversation's questions with their wiki links
- `src/entities/villager.js:156-192`, `src/talk.js:124-141`: a poke's line and a remark unprompted
- `data/maps/valley.json:11730-11733`: the lane's dead moved down to (86, 212), so the first poke is the welcome (game #220)
- `docs/34-talk.md:3`: conversations not built (game issue 202)
- `src/net.js:1254-1255`, `src/net.js:620-624`, `src/interact.js:1528-1531`: a guest's poke goes to the host as a command, which pokes the villager there

{{navbox places}}
