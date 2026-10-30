---
title: Villagers
categories: [Villagers, Lists]
summary: The living people of the valley.
---

A handful of people are still alive in the valley. They carry no weapons and never fight. Today they stand about or wander near home, answer when poked with a line of their own, now and then remark unprompted when you are near, and talk with you when you **Talk to** them, from their menu or with `E` (see [[Talk]]). Poking or talking needs a clear line to them, never through a wall.

Every villager is **immune** to the dead: the dead never hunt, chase, or bite one, and nothing harms one. So a villager never draws one of the dead away from you, from a window or a door it is breaking, or from a house it is waiting about. There is no world rule or setting for it. The game's decisions call it immune for now and changeable later: the immunity is a flag on each villager in the map, true unless the map says otherwise, and no villager in the valley is marked otherwise.

## Fleeing the dead

A villager still fears the dead, on its own floor alone: one of the dead a storey up neither frightens it nor stops it talking. When one of the dead comes within {{n tuning.villager.cowerRadius tiles}} of them, with a clear line between (a wall hides it), they stop what they were doing, ambling, standing, standing wary, or talking (a conversation with them closes), turn to face it, and cower for {{n tuning.villager.cowerSeconds seconds}}, arms up across the face, with a "{{n tuning.villager.cowerBubble}}" over their head. The "{{n tuning.villager.cowerBubble}}" is a bubble with no words and goes in no chat log. Then they run, at {{n tuning.villager.fleeSpeed}} times their walk, to a spot about {{n tuning.villager.fleeTiles tiles}} away from the dead one on their own side of the walls (straight away if they can, else turning aside), and stand wary there; with nowhere to run they stand wary where they are. Once none of the dead is within {{n tuning.villager.cowerClearRadius tiles}} of them, wall or no wall, they walk back to their spot and wander as before. One of the dead coming near again while they stand wary sets them cowering again. While they cower or run, neither a poke nor **Talk to** gets an answer: no conversation opens and the flight goes on. Standing wary, they talk as before.

{{villager-table}}

{{planned doc=04 note="Villagers who flee from the dead (beyond the cowering), follow you, and stay where you ask."}}

{{planned doc=34 note="Villagers who teach a skill."}}

## Sources

<!-- sources at 3c0a243 -->
- `data/maps/valley.json:12287-12373`: the villagers and their map lines (the table)
- `data/talk/`: the talk files, every villager's but the Miller's (game #220)
- `src/entities/villager.js:1-8`: no weapons, never fighting
- `src/entities/villager.js:73-126`, `src/entities/villager.js:173-260`: standing, wandering near home, answering a poke, remarking unprompted, holding a conversation (game #230)
- `src/interact.js:1533-1550`, `src/interact.js:1576-1606`, `src/reach.js`: a poke and Talk to within reach and with a clear line (game #227, #230)
- `src/entities/villager.js:35-38`, `src/entities/villager.js:48-54`, `src/game.js:128`, `src/game.js:347-354` (at 26a0a8f): the `immune` flag, true unless a map entry says `immune: false`, read from the map at creation and again at a restore, never from a save (game #559)
- `src/entities/zombie.js:442-458`, `src/entities/zombie.js:722`, `src/entities/villager.js:244-247` (at 26a0a8f): the dead never pick an immune villager as prey, drop one they had, and a bite on one does nothing (game #187, #559)
- `src/settings.js`, `src/rules.js:13-14` (at 26a0a8f): no setting and no world rule for it; Zombies attack villagers removed (game #559)
- `data/maps/valley.json:12287-12373`, `tools/mapgen/mapgen.py` (at 26a0a8f): Wyn, the Innkeeper, and the Priest flagged immune, the others with no flag, which means immune; none marked `immune: false`
- `docs/04-npcs.md:3`: fleeing, following, and staying not built
- `src/entities/villager.js:77-114`, `src/entities/villager.js:143-188`, `data/tuning.json:149-154`: the cowering: one of the dead in sight within `cowerRadius`; what it breaks off, the conversation ended; `cowerSeconds`, the "!", the flight at `fleeSpeed` to `fleeTiles` (or half) on its own side of the walls, wary until none within `cowerClearRadius`, then home (game #434, at fa2997f)
- `src/entities/villager.js:45`, `src/entities/villager.js:63-64`, `src/entities/villager.js:154`: the states cower, flee, and wary, in the villager's record for every client (game #434, at fa2997f); `src/entities/villager.js:161` (at 26a0a8f): for every immune villager, so every villager (game #559)
- `src/entities/villager.js:360`, `src/ui/speech.js:96-98`: no answer to a poke while cowering or running; the "!" kept out of the log (game #434, at fa2997f)
- `src/entities/villager.js:305-308`: no conversation while cowering or running; a wary one talks (game #454, at 6e3ab37)

{{navbox places}}
