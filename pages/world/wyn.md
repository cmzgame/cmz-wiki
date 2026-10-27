---
title: Wyn
categories: [Villagers]
aliases: [The guide, Guide]
summary: Wyn, the guide, stands just outside your cottage's door, immune to the dead, with a word for whoever is stuck.
---

{{infobox-villager "Wyn"}}

**Wyn** is the guide: a neighbour from the farm lane who came up to your yard when the chapel bell stopped, and has not gone home. They stand just outside the door of [[Your cottage]], so they are the first person you see on stepping out. Every map the game makes has its guide beside the spawn.

Like every villager, they carry no weapon and never fight. They wander a little, never more than {{n tuning.villager.wanderRadius}} tiles from where they started and never through a wall, and stand idle between walks. A left click on them within {{n census.constants.interact.CLICK_REACH}} tiles, or **Poke** from the right-click menu, makes them stop, turn to face you, and say a line. Wyn is **immune** to the dead: whatever the world rules say, the dead never hunt them and nothing harms them. They still fear them: one of the dead within {{n tuning.villager.cowerRadius tiles}} and in sight makes Wyn cower with a "{{n tuning.villager.cowerBubble}}", run a few tiles off, and stand wary until it is gone, then walk back (see [[Villagers#The immune cower|Villagers]]).

## What they say

Poked, Wyn says a line for the moment (see [[Talk]]): the first group below that holds, its lines taken in turn. With a player within {{n tuning.villager.barkRadius tiles}}, they also remark unprompted, at most once every {{n tuning.villager.barkCooldown seconds}} of game time.

{{barks guide}}

By day, with none of the dead near, the first poke of a new world says "Ask me anything, if you are stuck.": the dead who stood in the lane by your cottage now stand farther down it, beyond the {{n tuning.villager.barkDeadRadius tiles}} that would make it a warning.

## What they know

**Talk to Wyn**, from their menu or with `E` beside them, and a conversation opens (see [[Talk#Conversations|Talk]]). It opens on these questions: who they are, why they are here, what happened, and then a part of the game as it is built, each of those with a link to its page here:

{{talk-topics guide}}

Each answer comes a line at a time, with a question or two to follow it up, and **That's all for now** ends it. Wyn is the answer to "now what?": a question for each thing the game does, kept true to the game as it is.

## With friends

A guest pokes Wyn, or talks to them, as the host's player does, by the same command; the host picks a poke's line, and the bubble and the chat log line reach everyone in sight. A conversation opens on the guest's own screen, and several players can talk to Wyn at once.

## Sources

<!-- sources at 3c0a243 -->
- `data/maps/valley.json:12813-12823`, `tools/mapgen/valley.py:696-698`: Wyn by your cottage's door at (102, 220), wardrobe 6, their map line, `immune`, `talk: guide`, `guide` (game #220)
- `tools/mapgen/mapgen.py:15`, `tools/mapgen/mapgen.py:146-150`: a guide on every map the generator makes, within three tiles of its spawn
- `data/talk/guide.json`: the barks and the conversation's questions with their wiki links
- `src/entities/villager.js:224-260`, `src/talk.js:124-141`: a poke's line and a remark unprompted
- `src/entities/villager.js:194-222`, `src/ui/talk-panel.js:1-12`: Talk to opens the conversation (game #230)
- `data/maps/valley.json:11730-11733`: the lane's dead moved down to (86, 212), so the first poke by day is the plain line, not a warning (game #220)
- `src/net.js:1279-1280`, `src/net.js:634-638`, `src/interact.js:1533-1538`: a guest's poke goes to the host as a command, which pokes the villager there

- `src/entities/villager.js:77-188`, `data/tuning.json:149-154`: an immune villager cowers, runs, stands wary, and walks back (game #434, at fa2997f)

{{navbox places}}
