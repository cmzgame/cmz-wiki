---
title: Moodles
categories: [Player]
summary: The small icons down the right of the screen that show how you are.
---

Slow needs show as moodles down the right edge of the screen: an icon each, always shown and green when all is well, that grows worse in stages, with the number behind it hidden. Fast things, like health, stamina, and [[Mana]], are bars instead. A specific harm with a time on it, like [[Bleeding]], is not a moodle but a debuff, shown in its own row at the top right (see [[Interface#Top right: debuffs|Interface]]); a buff with a time on it, like a [[Stamina potion]]'s, shows in that row too, in gold.

## The moodles and their stages

{{moodles}}

## Sources

<!-- sources at 9205ad7 -->
- `src/moodles.js:1-2`, `src/moodles.js:22-80`, `src/debuffs.js:1-5`: four moodles, infection, hunger, thirst, tiredness; bleeding left them for the row of debuffs (game #315, at 8af4eed)
- `src/moodles.js:23-102`: the moodles and their stages (the list)
- `src/moodles.js:113-126`, `src/ui/moodles.js:141-177`: every moodle always shown down the right edge, green when fine
- `src/ui/hud.js:32-123`: health and stamina as bars
- `src/ui/hud.js:108-114`, `src/debuffs.js:42-50`: mana a bar; the stamina potion's buff in the row of debuffs (games #488 and #491, at 0fa02e5)

{{navbox items}}
