---
title: Survival
categories: [Player, Settings]
aliases: [Survival setting, Needs]
summary: The world rule that switches hunger, thirst, and tiredness on or off.
---

**Survival** is one of the [[World rules|world rules]]: it switches the needs on or off. It is on by default.

## How it works

With Survival **on**, [[Hunger]], [[Thirst]], and [[Tiredness]] drain, their [[Moodles]] move, and empty hunger or thirst costs [[Health]]. A [[Waterskin]] you carry sips by itself once you are Thirsty (see [[Thirst]]).

With Survival **off**, all three are held full every moment, so their moodles stay green, nobody starves or dies of thirst, and no waterskin drinks by itself; one is drunk only by hand. Health still comes back by itself, as it does for anyone fed, watered, and awake enough (see [[Health]]). [[Bleeding]] and [[Infection]] are not needs and still work as usual.

It is chosen at New world under How it plays and can be changed later from World rules on the pause menu, a switch explained as "Hunger, thirst, and tiredness. Off, the body has no needs." A change applies at once.

## With friends

Survival is a world rule: the host's choice applies to everyone in the world, and a guest sees it locked. A guest's waterskin drinks by itself under it as the host's does, the sip taken by the host's world. The owner of a world kept on the server can change it from the Owner screen.

## See also

- [[World rules]], [[Player]], [[Hunger]], [[Thirst]], [[Tiredness]], [[Health]]

## Sources

<!-- sources at 2a9a308 -->
- `src/settings.js:22`, `src/settings.js:60`, `src/ui/screens.js:845-873`, `src/ui/screens.js:992-1008`: on by default; a switch at the Sandbox step and on the pause menu's World rules, and its line
- `src/rules.js:13-30`: the sim reads it as a world rule
- `src/entities/player.js:141-154`: off holds hunger, thirst, and tiredness full, with no need damage
- `src/entities/player.js:155-160`: regeneration runs either way
- `src/entities/player.js:117-124`, `src/game.js:555-558`: a waterskin drinks by itself only with Survival on, on the host for everyone (game #121)
- `src/bleed.js`, `src/infection.js`: bleeding and infection live in their own modules
- `src/rules.js:40-43`, `src/net.js:1113`: a guest uses the host's rules
- `src/ui/screens.js:935-941`: the owner's switch on the Owner screen (game #114)
