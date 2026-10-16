---
title: Survival
categories: [Player, Settings]
aliases: [Survival setting, Needs]
summary: The world rule that switches hunger, thirst, and tiredness on or off.
---

**Survival** is a world rule on the [[Settings]] screen that switches the needs on or off. It is on by default.

## How it works

With Survival **on**, [[Hunger]], [[Thirst]], and [[Tiredness]] drain, their [[Moodles]] move, and empty hunger or thirst costs [[Health]]. A [[Waterskin]] you carry sips by itself once you are Thirsty (see [[Thirst]]).

With Survival **off**, all three are held full every moment, so their moodles stay green, nobody starves or dies of thirst, and no waterskin drinks by itself; one is drunk only by hand. Health still comes back by itself, as it does for anyone fed, watered, and awake enough (see [[Health]]). [[Bleeding]] and [[Infection]] are not needs and still work as usual.

On the Settings screen it is a switch on the World rules tab, explained as "Hunger, thirst, and tiredness. Off, the body has no needs."

## With friends

Survival is a world rule: the host's choice applies to everyone in the world, and guests use it. A guest's waterskin drinks by itself under it as the host's does, the sip taken by the host's world. The owner of a world kept on the server can change it from the Owner screen.

## See also

- [[Settings]], [[Player]], [[Hunger]], [[Thirst]], [[Tiredness]], [[Health]]

## Sources

<!-- sources at 1c7ed26 -->
- `src/settings.js:22`, `src/settings.js:56`: on by default; a switch on the World rules tab and its line (game #114)
- `src/rules.js:9-15`, `src/rules.js:33-37`: the sim reads it as a world rule
- `src/entities/player.js:141-154`: off holds hunger, thirst, and tiredness full, with no need damage
- `src/entities/player.js:155-160`: regeneration runs either way
- `src/entities/player.js:117-124`, `src/game.js:547-550`: a waterskin drinks by itself only with Survival on, on the host for everyone (game #121)
- `src/bleed.js`, `src/infection.js`: bleeding and infection live in their own modules
- `src/rules.js:21-25`: a guest uses the host's rules
- `src/ui/screens.js:720-724`: the owner's switch on the Owner screen (game #114)
