---
title: Villagers
categories: [Villagers, Lists]
summary: The living people of the valley.
---

A handful of people are still alive in the valley. They carry no weapons and never fight. Today they stand about or wander near home, answer when poked with a line of their own, now and then remark unprompted when you are near, and talk with you when you **Talk to** them, from their menu or with `E` (see [[Talk]]). Poking or talking needs a clear line to them, never through a wall. The dead can hunt them if a setting allows, and a villager bitten to death gets up as one of the dead, in their own clothes. One the dead have hurt but not killed heals slowly, {{n tuning.villager.regenPerMinute}} health a minute, as a player does, starting {{n tuning.villager.regenPause seconds}} after the last hit; a wounded villager still talks.

Some villagers are **immune** to the dead, by a flag on each villager in the map: whatever the world rules say, the dead never hunt them and nothing harms them. In the valley [[Wyn]], the guide by your cottage's door, the [[Innkeeper]], and the [[Priest]] are immune; the others, the [[Miller]] among them, are at risk when the world rule Zombies attack villagers is on.

{{villager-table}}

{{planned doc=04 note="Villagers who flee from the dead, follow you, and stay where you ask."}}

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

{{navbox places}}
