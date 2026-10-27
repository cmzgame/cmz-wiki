---
title: Things left behind
categories: [About]
summary: What this game takes from survival games like Project Zomboid, and what it swears off.
---

Cozy Medieval Zombies is a survival simulation in the spirit of Project Zomboid, boiled down to a few rules that collide: light, sight, hunger, thirst, sleep, a fire you keep lit, a garden you tend, a home you furnish and defend. It is not Zomboid with cute art, and that is on purpose. This page is the list of things the game leaves behind, kept by Michael as he plays; a line here is a promise to the player, not a plan.

## Left behind

- **No body map.** [[Health]] is one number; a wound is [[Bleeding]] or [[Infection]], not a diagram.
- **No vision cone stance.** You see what the light and the walls let you see ([[Sight]]); no stance narrows it, and sprinting (Shift) costs stamina, not sight.
- **No water shutoff, no power cut.** Nothing in the world switches off on a schedule. Things run out because you used them: a campfire burns the logs you fed it ([[Fire]]), the waterskin empties as you drink ([[Thirst]]).
- **No danger that grows with the days.** No world decay, no scheduled horde. Every rise in danger is one a player chose: you went to the bog and brought some of the bog home with you.
- **No skill grind on the battlefield.** Skills, when they come, are off the battlefield and never make you hit harder; a sword does what a sword does ([[Combat]]).
- **No guns.** Ever. Medieval, low-fantasy: a sword, a bow, a torch, and a book of fire ([[Weapons]]).
- **A short moodle row.** The needs ([[Hunger]], [[Thirst]], [[Tiredness]]) and [[Infection]], and never boredom or sanity; a specific harm such as [[Bleeding]] is a debuff of its own, with its time left; cold may come with seasons, if seasons come.

## Kept

- One continuous world with real line of sight: look through the inn's window before you open the door ([[Openings]], [[Sight]]).
- The dead that remember where they last saw you, and break in ([[The dead]], [[Breaking in]]).
- A home worth defending: boards, doors, a fireplace, a bed ([[Building]], [[Sleep]]).

## With friends

The same rules for everyone in a world; nothing above changes with more than one player ([[Multiplayer]]).

## Sources

<!-- sources at 636acc4 -->
- `docs/00-vision.md`: "What it is not" (Not Zomboid with cute art) and the Laws (never harder on a clock; no guns).
- `CLAUDE.md`: "The laws of the design".
- `docs/02-decisions.md`: 2026-10-13, "What this game is"; 2026-10-12, the moodles (never boredom or sanity; cold kept for seasons); 2026-10-16, the four lines of `00` ruled.
- `src/moodles.js:22-80`, `src/debuffs.js:1-5`: the row now infection, hunger, thirst, tiredness; bleeding a debuff (game #315, at 8af4eed)
- `data/tuning.json`: `player.sprintMult`, the sprint that costs stamina and not sight.
