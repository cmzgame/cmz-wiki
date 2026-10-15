---
title: Survival
categories: [Player, Settings]
aliases: [Survival setting, Needs]
summary: The world rule that switches hunger, thirst, and tiredness on or off.
---

**Survival** is a world rule on the [[Settings]] screen that switches the needs on or off. It is on by default.

## How it works

With Survival **on**, [[Hunger]], [[Thirst]], and [[Tiredness]] drain, their [[Moodles]] move, and empty hunger or thirst costs [[Health]].

With Survival **off**, all three are held full every moment, so their moodles stay green and nobody starves or dies of thirst. Health still comes back by itself, as it does for anyone fed, watered, and awake enough (see [[Health]]). [[Bleeding]] and [[Infection]] are not needs and still work as usual.

The Settings screen offers "On (hunger, thirst, tiredness)" and "Off (no needs)".

## With friends

Survival is a world rule: the host's choice applies to everyone in the world, and guests use it. The owner of a world kept on the server can change it from the Owner screen.

## See also

- [[Settings]], [[Player]], [[Hunger]], [[Thirst]], [[Tiredness]], [[Health]]

## Sources

<!-- sources at 9205ad7 -->
- `src/settings.js:22,55`: on by default, and the two choices on the Settings screen
- `src/rules.js:13,34-37`: the sim reads it as a world rule
- `src/entities/player.js:120-125`: off holds hunger, thirst, and tiredness full, with no need damage (game commit 2c70942)
- `src/entities/player.js:134-139`: regeneration runs either way
- `src/bleed.js`, `src/infection.js`: bleeding and infection live in their own modules
- `src/rules.js:21-25`: a guest uses the host's rules
- `src/ui/screens.js:682`: the owner's toggle on the Owner screen
