---
title: The day
categories: [Mechanics, The world]
aliases: [Day and night, Night, Clock, Time]
summary: The clock, how long a day lasts, and the hours of dawn, day, dusk, and night.
---

The world keeps one clock. A day passes in a few real minutes, a new world starts in the morning of the first day, and the heads-up display shows the day and the hour. Night darkens the picture but is never black.

## How it works

### The clock

A full day lasts {{n census.constants.clock.DAY_LENGTH}} real seconds, so one game hour is {{n census.constants.map.HOUR_SECONDS}} real seconds. A new world starts at {{n census.constants.clock.START_HOUR}} o'clock on the first day. The clock reads "Day", the day's number, and the time.

### The phases

- **Day:** from the end of dawn at {{n census.constants.clock.DAWN_END}} o'clock until dusk begins at {{n census.constants.clock.DUSK_START}} o'clock. The sky's brightness is {{n census.constants.clock.DAY_B}}.
- **Dusk:** from {{n census.constants.clock.DUSK_START}} o'clock to {{n census.constants.clock.NIGHT_START}} o'clock, the light falling away.
- **Night:** from {{n census.constants.clock.NIGHT_START}} o'clock to {{n census.constants.clock.NIGHT_END}} o'clock. The sky's brightness is {{n census.constants.clock.NIGHT_B}}: dark and tinted, but never black.
- **Dawn:** from {{n census.constants.clock.NIGHT_END}} o'clock to {{n census.constants.clock.DAWN_END}} o'clock, the light coming back.

The sky's brightness is the outdoor part of [[Light]]. Indoors, a room's light comes from its fire and its openings instead.

### What the hour changes

- How bright the world is drawn, outside and in rooms lit only through their windows and doors.
- How far [[The dead]] can see you: they see farther in brighter light.
- How far you can see the dead: by day everything in your line of sight, at night only close by, to your torch's reach, or where they stand in light (see [[Sight#Darkness|Sight]]). A room with its shutters and doors shut is dark by day too.
- How far the dead notice a flame: a lit [[Torch]] or a fire draws them only at night, and from farthest at full night.
- [[Fire|Fires]] burn their fuel by game hours, so a fire's hours left are counted on this clock. A lit [[Torch]] burns down on this clock too.
- The siege: from dusk, the dead that see you go into a house wait about it until {{n tuning.zombie.siegeEndHour}} o'clock, and you cannot sleep while they are near; by day there is no siege (see [[Breaking in#The siege|Breaking in]]).

### Sleeping through the night

While every living player sleeps, the world runs {{n tuning.player.sleepTimeScale}} times as fast, so a night passes in a few real seconds; the sleeper's screen fades to black, and any key or click wakes them early. See [[Sleep]].

### The hour keys

{{devonly note="The ] and [ keys move the clock an hour forward or back. They stay within the current day: going back from just after midnight lands late on the same day."}}

## Numbers

- Length of a day: {{n census.constants.clock.DAY_LENGTH}} real seconds.
- Length of a game hour: {{n census.constants.map.HOUR_SECONDS}} real seconds.
- A new world starts at hour {{n census.constants.clock.START_HOUR}}.
- Dusk {{n census.constants.clock.DUSK_START}} to {{n census.constants.clock.NIGHT_START}}, night {{n census.constants.clock.NIGHT_START}} to {{n census.constants.clock.NIGHT_END}}, dawn {{n census.constants.clock.NIGHT_END}} to {{n census.constants.clock.DAWN_END}}.
- Sky brightness: {{n census.constants.clock.DAY_B}} by day, {{n census.constants.clock.NIGHT_B}} at night.
- Speed while everyone sleeps: {{n tuning.player.sleepTimeScale}} times.

## With friends

The clock belongs to the host. A guest's clock is set from every frame the host sends, so everyone sees the same hour. The hour keys on a guest move only its own clock, and only until the next frame; on the host they move everyone's.

## See also

- [[Light]]
- [[Sleep]]
- [[Fire]]
- [[The dead]]

## Sources

<!-- sources at 64cc711 -->
- `src/clock.js:5-19`, `src/map.js:95`: the day's length, the game hour, the start hour, the phases' hours and brightness
- `src/clock.js:94-102`, `src/ui/hud.js:118-122`: the clock's "Day N, HH:MM"
- `src/clock.js:68-74`, `src/clock.js:91-93`: the phases and the night factor
- `src/light.js:120-122`, `src/light.js:155-173`: the sky is the outdoor ambient; rooms take theirs from fires and openings
- `src/sight.js:18-29`, `src/light.js:130-168`: the dead seen in the dark by light and nearness; a shut room dark by day (game #150)
- `src/entities/zombie.js:298-303`, `src/entities/zombie.js:361-377`: the dead's sight by light, and flames seen only at night
- `src/map.js:98-114`: fires burn by game hours
- `src/game.js:494-520`: a lit torch burns down in the world's time
- `src/entities/zombie.js:424-450`, `src/entities/zombie.js:552-560`, `data/tuning.json:28`: a siege starts only at dusk or night and ends at `siegeEndHour`
- `data/tuning.json:61`, `src/game.js:323-333`: the world's speed while every living player sleeps
- `src/main.js:1065-1066`, `src/clock.js:41-44`: the hour keys, within the day
- `src/net.js:1120`: a guest's clock set from every frame
