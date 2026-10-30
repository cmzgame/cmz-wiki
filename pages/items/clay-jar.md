---
title: Clay jar
categories: [Items, Materials]
aliases: [Clay jars, Jar, Jars, Empty jar, Empty clay jar]
summary: The empty jar: an unfired jar fired in an oven; a beehive's honey is taken only into one, and eating the honey or spending it in a recipe gives the jar back.
---

{{infobox-item clay_jar}}

A **clay jar** is the empty jar. An [[Unfired jar]] fired in an [[Oven]] over its lit fire becomes one. It has one use: a [[Beehive|hive]]'s honey. **Take honey** needs an empty clay jar carried, in a hand, on the belt, or in your bag (never in a chest nearby), and fills it into a [[Jar of honey]]; without one the take is refused: "You need a clay jar to take honey." Eating the honey, or spending it in a recipe ([[Pemmican]]'s binder, the [[Stamina potion]]'s honey), leaves the empty jar again, so a jar is refilled, not made again, as a [[Clay vial]] is. It stacks to {{n items.clay_jar.stack}} in one cell. It is not a belt item of its own, though a jar left by honey eaten from the belt stays on the slot.

It is on placeholder art, the vial's own design in the jar's colour, until its own art comes. Its card reads "Clay jar", its kind "Material", and that it is made at an oven.

## Getting it back

A jar of honey eaten leaves its jar where the honey was when that was the last of its stack, its bag cell or its belt slot. A jar of honey spent in a recipe leaves its jar in your bag, or at your feet when the bag has no room, the moment the make starts. [[Your cottage]]'s chest starts with two.

{{item-sections clay_jar}}

## With friends

A guest fires jars at an oven through the station panel's commands, and a jar filled by a guest's take or given back by their eating or their make is that guest's own, on the host, and reaches them with their record. The cottage's two are for whoever opens the chest first.

## Sources

<!-- sources at 8d361e5 -->
- `data/items.json`: `clay_jar`, a material tagged `clay`, stack 10, no `belt`, its placeholder icon on the vial's design (game #585)
- `data/recipes.json`: `clay_jar` fired from an unfired jar at the oven, the fire lit (game #585)
- `data/items.json` `honey.jar`: the jar the honey leaves behind (game #585)
- `src/hives.js:28-56`, `src/hives.js:77`: "You need a clay jar to take honey."; the jar found in the hands, the belt, then the bag, never a container; filled in its own place, else the bag, else the feet (game #585)
- `src/interact.js:1722-1731`: eating the last of a jarred food turns the entry into the empty jar in place (game #585)
- `src/stations.js:113-163`, `src/stations.js:232-235`: a jarred ingredient's jar back into the bag, else the feet, when the make starts (game #585)
- `data/loot.json` `home_chest`: two clay jars in the cottage's chest (game #585)
- `docs/02-decisions.md` (2026-10-26, Honey goes into a clay jar), `docs/42-levers.md` (Honey's jar): the ruling and the lever

{{navbox items}}
