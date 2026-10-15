---
title: Tiredness
categories: [Player, Needs]
aliases: [Tired, Exhausted, Rest]
summary: The need that only sleep in a bed restores; it never kills.
numbersOk: true
---

<!-- typed: the moodle stage thresholds (60, 35, 15) live in src/moodles.js as literals -->

**Tiredness** is one of your needs. It runs from {{n tuning.player.tiredMax}} (rested) down to zero (falling asleep). It drains while you are awake and comes back only while you [[Sleep]] in a bed. It never kills, but each stage takes something away.

## How it works

### Draining and restoring

Awake, tiredness empties from full in {{n tuning.player.tiredDrainSeconds}} seconds of the world's clock. A new world starts at {{n census.constants.clock.START_HOUR}}:00 with everyone rested.

Asleep in a bed, it refills from empty in {{n tuning.player.sleepRestoreSeconds}} seconds (a game hour is {{n census.constants.map.HOUR_SECONDS}} seconds).

### Stages

1. **Yawning**: below 60. No effect, but it lets you sleep in the day.
2. **Tired**: below 35. [[Stamina]] recovers at ×{{n tuning.player.tiredStaminaRegenMult}}.
3. **Exhausted**: below 15. You cannot sprint.
4. **Falling asleep**: empty. [[Health]] stops regenerating.

## Numbers

- Maximum: {{n tuning.player.tiredMax}}
- Awake, full to empty: {{n tuning.player.tiredDrainSeconds}} seconds
- Asleep, empty to full: {{n tuning.player.sleepRestoreSeconds}} seconds

## With friends

Each player has their own tiredness.

## Settings that change it

- **Survival** (default On): off, tiredness is held full.

## See also

- [[Sleep]], [[Stamina]], [[Hunger]], [[Thirst]], [[Moodles]]

## Sources

<!-- sources at 9205ad7 -->
- `data/tuning.json:54-56`: the maximum, the awake drain, and the sleep restore
- `src/entities/player.js:129-130`: drained awake, restored only asleep
- `src/clock.js:18`: a new world starts at 08:00
- `src/map.js:84`: a game hour is 30 seconds
- `src/moodles.js:95-102`: the tiredness stages
- `src/entities/player.js:203`: Yawning or worse allows sleep by day
- `src/entities/player.js:146`, `data/tuning.json:62`: Tired slows stamina recovery
- `src/entities/player.js:328`: Exhausted stops sprinting
- `src/entities/player.js:135`: Falling asleep stops regeneration
- `src/entities/player.js:120-126`: Survival off holds tiredness full
