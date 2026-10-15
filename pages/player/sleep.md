---
title: Sleep
categories: [Player, Mechanics]
aliases: [Sleeping, Bed, Beds, Time scale]
summary: Lie down in a bed indoors to restore tiredness; while everyone sleeps, the world runs fast.
numbersOk: true
---

<!-- typed: the bed's reach (1.6 tiles), the "not tired" day window ending at 20:00, and the wake window ending at 22:00 are literals in src/entities/player.js -->

**Sleep** is how you restore [[Tiredness]]. Choose "Sleep" on a bed, or press E near one, and your character lies down until morning. While every living player in the world is asleep, the whole world runs {{n tuning.player.sleepTimeScale}} times faster.

## How it works

### Lying down

You can sleep when:

- You are within 1.6 tiles of the bed.
- The bed is indoors, in a room.
- Your hands are free: you are not carrying a prop.
- By day, you are at least "Yawning". From 20:00 until {{n tuning.player.wakeHour}}:00 you may sleep rested.

Otherwise the game says why: "Too far from the bed.", "Not out here.", "Your hands are full.", or "You are not tired."

"Sleep" becomes the E action on a bed once you are Yawning or worse, or from 20:00 at night.

### While you sleep

Nothing moves you, and nothing wakes you. [[Hunger]] and [[Thirst]] keep draining. Tiredness refills from empty in {{n tuning.player.sleepRestoreSeconds}} seconds of the world's clock, and [[Health]] regenerates at {{n tuning.player.sleepRegenPerMinute}} a minute instead of {{n tuning.player.healthRegenPerMinute}}, as long as you are fed, watered, and not [[Bleeding]].

If you are the only player, or every living player is asleep, the world runs at ×{{n tuning.player.sleepTimeScale}}: the clock, [[The dead]], [[Fire|fires]], and [[Crafting]] queues all move that much faster, and a night passes in a few seconds. The game says "You lie down. The night goes on without you."

### Waking

You get up when you are fully rested and the hour is between {{n tuning.player.wakeHour}}:00 and 22:00, or at once if the bed is taken away. Someone who becomes rested late at night sleeps on until {{n tuning.player.wakeHour}}:00. On waking, the game says the day and time and how many hours you slept.

Beds stand in the valley's houses, and a bed can be made at the [[Workbench]] (see [[Crafting]]).

## Numbers

- Time scale while everyone sleeps: ×{{n tuning.player.sleepTimeScale}}
- Tiredness, empty to full: {{n tuning.player.sleepRestoreSeconds}} seconds
- Health asleep: {{n tuning.player.sleepRegenPerMinute}} a minute
- Earliest waking hour: {{n tuning.player.wakeHour}}:00
- A game hour: {{n census.constants.map.HOUR_SECONDS}} seconds

## With friends

Time runs fast only while **every living player** in the world is asleep. Players who have died, or who have stepped away and gone dormant, do not count. Until the last one lies down, the game says "You lie down. Time will pass faster once everyone in the world is asleep.", and you sleep at normal speed, still restoring tiredness and health at the sleeping rate. If a sleeper leaves, goes dormant, or dies, the speed is put right at once. A guest lies down through the same Sleep action as the host.

## Settings that change it

- **Survival** (default On): off, tiredness is held full, so you never need to sleep.

## See also

- [[Tiredness]], [[Health]], [[Multiplayer]], [[Light]], [[Crafting]]

## Sources

<!-- sources at 9205ad7 -->
- `data/sprites/bed.json:32`: a bed is a prop with `sleep`
- `data/tuning.json:57`: the time scale
- `src/entities/player.js:193-210`: the verb, its reach (1.6 tiles), indoors, free hands, and the refusals with the day window ending at 20:00
- `src/interact.js:381-398`: Sleep as the E action from Yawning or from 20:00
- `src/entities/player.js:165-191`: asleep, nothing moves you, needs drain, tiredness restores, health at the sleeping rate
- `data/tuning.json:56,59-60`: the restore time and the regeneration rates
- `src/game.js:257-264,496`, `src/world.js:25-29`, `src/loop.js:15,114-116`: the scale while every living player sleeps, re-evaluated each step, the loop running many steps a frame
- `src/main.js:1464-1465`: the two lying-down messages
- `src/entities/player.js:178,188-190`, `data/tuning.json:58`: waking when rested between the wake hour and 22:00, or when the bed is gone; the waking message's hours
- `data/maps/valley.json`: the valley's beds
- `data/recipes.json:186-205`: the bed recipe at the workbench
- `src/map.js:84`: a game hour is 30 seconds
- `src/game.js:254-263,270,368,383-386`: dead and dormant players do not count; the scale put right on a leave, a dormancy, or a death
- `src/entities/player.js:120-126`: Survival off holds tiredness full
