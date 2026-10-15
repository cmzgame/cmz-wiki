---
title: Villagers
categories: [Villagers, Lists]
summary: The living people of the valley.
---

A handful of people are still alive in the valley. They carry no weapons and never fight. Today they stand about or wander near home, and answer when poked; the dead can hunt them if a setting allows, and a villager bitten to death gets up as one of the dead, in their own clothes.

{{villager-table}}

{{planned doc=04 note="Villagers who flee from the dead, follow you, and stay where you ask."}}

## Sources

<!-- sources at 9205ad7 -->
- `data/maps/valley.json:5609-5672`: the villagers and their lines (the table)
- `src/entities/villager.js:1-8`: no weapons, never fighting
- `src/entities/villager.js:46-95`, `src/entities/villager.js:140-150`: standing, wandering near home, answering a poke
- `src/settings.js:13`, `src/entities/zombie.js:268-289`, `src/entities/villager.js:121-136`: the dead hunt them behind a setting; one bitten to death rises in their clothes
- `docs/04-npcs.md:3-7`: fleeing, following, and staying not built

{{navbox places}}
