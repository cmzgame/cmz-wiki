---
title: Villagers
categories: [Villagers, Lists]
summary: The living people of the valley.
---

A handful of people are still alive in the valley. They carry no weapons and never fight. Today they stand about or wander near home, and answer when poked; the dead can hunt them if a setting allows, and a villager bitten to death gets up as one of the dead, in their own clothes.

Some villagers are **immune** to the dead, by a flag on each villager in the map: whatever the world rules say, the dead never hunt them and nothing harms them. In the valley the [[Innkeeper]] and the [[Priest]] are immune; the others are at risk when the world rule Zombies attack villagers is on.

{{villager-table}}

{{planned doc=04 note="Villagers who flee from the dead, follow you, and stay where you ask."}}

{{planned doc=34 note="A guide beside the spawn, and villagers who teach a skill, all immune to the dead; neither the guide nor the skills are built yet."}}

## Sources

<!-- sources at 8e7538f -->
- `data/maps/valley.json:5806-5871`: the villagers and their lines (the table)
- `src/entities/villager.js:1-8`: no weapons, never fighting
- `src/entities/villager.js:47-96`, `src/entities/villager.js:141-151`: standing, wandering near home, answering a poke
- `src/settings.js:13`, `src/rules.js:15`, `src/entities/zombie.js:345-367`, `src/entities/villager.js:122-137`: the dead hunt them behind a world rule; one bitten to death rises in their clothes
- `src/entities/villager.js:26-32`, `src/game.js:100`, `src/entities/zombie.js:357`, `src/entities/villager.js:101-102`: the `immune` flag, read from the map; the dead never pick an immune villager as prey, and a blow to one does nothing (game #187)
- `data/maps/valley.json:5807-5816`, `data/maps/valley.json:5834-5843`, `tools/mapgen/valley.py:433-439`: the Innkeeper and the Priest flagged immune, the others not
- `docs/04-npcs.md:3`: fleeing, following, and staying not built
- `docs/34-talk.md:67`: the guide, and every villager who teaches a skill, immune (not built)

{{navbox places}}
