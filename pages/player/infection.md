---
title: Infection
categories: [Player, Mechanics]
aliases: [Infected, Bitten, Turning]
summary: A bite or a drink of tainted water can infect you; today the infection is a marker that counts through four stages and does nothing else.
---

**Infection** can follow a bite, or a drink of tainted water. Today it is only a marker: the infection moodle counts through its stages and then stays at the last one. It does no damage, does not turn you, and does not kill you.

## How it works

Each bite from [[The dead]] that does damage has a {{n combat.infection.chance}} chance to infect you, unless you are infected already. The bite says "The bite broke the skin."

Each drink of tainted [[Water]], from a source or from a [[Waterskin]], has a {{pct tuning.water.infectionChance}} chance to infect you too, unless you are infected already. It has no message of its own: the infection moodle appears, its first stage still named Bitten. Clean water never infects.

The infection moodle then moves through four stages, each a quarter of {{n combat.infection.days}} game days: **Bitten**, **Fevered**, **Queasy**, and **Turning**. The third stage was once named Sick; [[Sick]] is now the debuff that tainted water gives, which is not the infection. It stays at Turning. The Turning moodle says so itself: nothing happens yet.

The count follows the game's clock, so it runs faster while everyone [[Sleep|sleeps]]. Nothing in play cures it.

{{planned doc=02 note="What infection does to you, and its cure: the marker is a stand-in for both (question 29b)."}}

{{devonly note="The developer console can clear an infection: __game.infection.cure()."}}

## Numbers

- Chance a bite infects: {{n combat.infection.chance}}
- Chance a tainted drink infects: {{pct tuning.water.infectionChance}}
- From Bitten to Turning: {{n combat.infection.days}} game days
- A game day: {{n census.constants.clock.DAY_LENGTH}} seconds

## With friends

An infection belongs to whoever was bitten or drank, and the host tells a guest when a bite breaks their skin. The host rolls the infection for a guest's tainted drink as for its own.

## Settings that change it

- **Zombie aggro** (default On): off, the dead do not bite, so nobody is infected by a bite; tainted water still can.

## See also

- [[Bleeding]], [[Sick]], [[Water]], [[Health]], [[The dead]], [[Moodles]]
- [[Levers]]: the infection chance and the dial it will join

## Sources

<!-- sources at 9205ad7 -->
- `data/combat.json:5`: the chance and the length in days
- `src/game.js:300`: infection rolled on a bite that does damage, unless infected already
- `src/main.js:1445`: "The bite broke the skin."
- `src/infection.js:17-32`: four stages, each a quarter of the length, holding at the last
- `src/moodles.js:22-33`: the stage names, the third Queasy (it was Sick), and the Turning text, "Nothing happens yet" (game #435, at fa2997f)
- `src/sick.js:56-67`, `src/infection.js:34-38`, `data/tuning.json`: a tainted drink's chance of the infection, unless infected already, with no message (game #435, at fa2997f)
- `src/infection.js:24`: the count reads the game clock, so it runs fast while everyone sleeps
- `src/dev.js:50`: the console's cure
- `src/clock.js:5`: a game day is 720 seconds
- `src/host.js:187`: the host sends a guest its bite message
- `src/settings.js:12`, `src/entities/zombie.js:233,296`: the dead bite only with Zombie aggro on
