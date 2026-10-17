---
title: Villagers
categories: [Villagers, Lists]
summary: The living people of the valley.
---

A handful of people are still alive in the valley. They carry no weapons and never fight. Today they stand about or wander near home, answer when poked with a line of their own, and now and then remark unprompted when you are near (see [[Talk]]); the dead can hunt them if a setting allows, and a villager bitten to death gets up as one of the dead, in their own clothes.

Some villagers are **immune** to the dead, by a flag on each villager in the map: whatever the world rules say, the dead never hunt them and nothing harms them. In the valley [[Wyn]], the guide by your cottage's door, the [[Innkeeper]], and the [[Priest]] are immune; the others, the [[Miller]] among them, are at risk when the world rule Zombies attack villagers is on.

{{villager-table}}

{{planned doc=04 note="Villagers who flee from the dead, follow you, and stay where you ask."}}

{{planned doc=34 note="Conversations, a panel of a villager's lines and your choices between them (game issue 202); villagers who teach a skill, immune to the dead like the guide."}}

## Sources

<!-- sources at 3f11fdb -->
- `data/maps/valley.json:12287-12373`: the villagers and their map lines (the table)
- `data/talk/`: the talk files, every villager's but the Miller's (game #220)
- `src/entities/villager.js:1-8`: no weapons, never fighting
- `src/entities/villager.js:63-113`, `src/entities/villager.js:156-192`: standing, wandering near home, answering a poke, remarking unprompted
- `src/settings.js:13`, `src/rules.js:15`, `src/entities/zombie.js:345-367`, `src/entities/villager.js:139-154`: the dead hunt them behind a world rule; one bitten to death rises in their clothes
- `src/entities/villager.js:36-48`, `src/game.js:100`, `src/entities/zombie.js:357`, `src/entities/villager.js:118-119`: the `immune` flag, read from the map; the dead never pick an immune villager as prey, and a blow to one does nothing (game #187)
- `data/maps/valley.json:12288-12299`, `data/maps/valley.json:12300-12309`, `data/maps/valley.json:12327-12336`, `tools/mapgen/valley.py:605-616`: Wyn, the Innkeeper, and the Priest flagged immune, the others not
- `docs/04-npcs.md:3`: fleeing, following, staying, and conversations not built
- `docs/34-talk.md:3`, `docs/34-talk.md:67`: talk's barks and the guide built, conversations not (game issue 202); every villager who teaches a skill immune

{{navbox places}}
