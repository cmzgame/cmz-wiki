---
title: Villagers
categories: [Villagers, Lists]
summary: The living people of the valley.
---

A handful of people are still alive in the valley. They carry no weapons and never fight. Today they stand about or wander near home, answer when poked with a line of their own, now and then remark unprompted when you are near, and talk with you when you **Talk to** them, from their menu or with `E` (see [[Talk]]). Poking or talking needs a clear line to them, never through a wall. The dead can hunt them if a setting allows, and a villager bitten to death gets up as one of the dead, in their own clothes. One the dead have hurt but not killed heals slowly, {{n tuning.villager.regenPerMinute}} health a minute, as a player does, starting {{n tuning.villager.regenPause seconds}} after the last hit; a wounded villager still talks.

Some villagers are **immune** to the dead, by a flag on each villager in the map: whatever the world rules say, the dead never hunt them and nothing harms them. In the valley [[Wyn]], the guide by your cottage's door, the [[Innkeeper]], and the [[Priest]] are immune; the others, the [[Miller]] among them, are at risk when the world rule Zombies attack villagers is on.

## The immune cower

An immune villager still fears the dead. When one of the dead comes within {{n tuning.villager.cowerRadius tiles}} of them, with a clear line between (a wall hides it), they stop what they were doing, ambling, standing, standing wary, or talking (a conversation with them closes), turn to face it, and cower for {{n tuning.villager.cowerSeconds seconds}}, arms up across the face, with a "{{n tuning.villager.cowerBubble}}" over their head. The "{{n tuning.villager.cowerBubble}}" is a bubble with no words and goes in no chat log. Then they run, at {{n tuning.villager.fleeSpeed}} times their walk, to a spot about {{n tuning.villager.fleeTiles tiles}} away from the dead one on their own side of the walls (straight away if they can, else turning aside), and stand wary there; with nowhere to run they stand wary where they are. Once none of the dead is within {{n tuning.villager.cowerClearRadius tiles}} of them, wall or no wall, they walk back to their spot and wander as before. One of the dead coming near again while they stand wary sets them cowering again. While they cower or run, a poke gets no answer.

Only immune villagers cower; the others do not yet run from the dead.

{{villager-table}}

{{planned doc=04 note="Villagers who flee from the dead (beyond the cowering of the immune), follow you, and stay where you ask."}}

{{planned doc=34 note="Villagers who teach a skill, immune to the dead like the guide."}}

## Sources

<!-- sources at 3c0a243 -->
- `data/maps/valley.json:12287-12373`: the villagers and their map lines (the table)
- `data/talk/`: the talk files, every villager's but the Miller's (game #220)
- `src/entities/villager.js:1-8`: no weapons, never fighting
- `src/entities/villager.js:73-126`, `src/entities/villager.js:173-260`: standing, wandering near home, answering a poke, remarking unprompted, holding a conversation (game #230)
- `src/interact.js:1533-1550`, `src/interact.js:1576-1606`, `src/reach.js`: a poke and Talk to within reach and with a clear line (game #227, #230)
- `src/entities/villager.js:66-71`, `src/entities/villager.js:131-134`, `data/tuning.json:87-88`: a hurt villager heals `regenPerMinute`, not inside `regenPause` of a hit, never past full or once dead (game #238)
- `src/settings.js:13`, `src/rules.js:15`, `src/entities/zombie.js:345-367`, `src/entities/villager.js:153-168`: the dead hunt them behind a world rule; one bitten to death rises in their clothes
- `src/entities/villager.js:37-49`, `src/game.js:103`, `src/entities/zombie.js:357`, `src/entities/villager.js:131-132`: the `immune` flag, read from the map; the dead never pick an immune villager as prey, and a blow to one does nothing (game #187)
- `data/maps/valley.json:12288-12299`, `data/maps/valley.json:12300-12309`, `data/maps/valley.json:12327-12336`, `tools/mapgen/valley.py:606-617`: Wyn, the Innkeeper, and the Priest flagged immune, the others not
- `docs/04-npcs.md:3`: fleeing, following, and staying not built
- `docs/34-talk.md:67`: every villager who teaches a skill immune
- `src/entities/villager.js:77-114`, `src/entities/villager.js:143-188`, `data/tuning.json:149-154`: the cowering: one of the dead in sight within `cowerRadius`; what it breaks off, the conversation ended; `cowerSeconds`, the "!", the flight at `fleeSpeed` to `fleeTiles` (or half) on its own side of the walls, wary until none within `cowerClearRadius`, then home (game #434, at fa2997f)
- `src/entities/villager.js:45`, `src/entities/villager.js:63-64`, `src/entities/villager.js:154`: the states cower, flee, and wary, for immune villagers alone, in the villager's record for every client (game #434, at fa2997f)
- `src/entities/villager.js:360`, `src/ui/speech.js:96-98`: no answer to a poke while cowering or running; the "!" kept out of the log (game #434, at fa2997f)

{{navbox places}}
