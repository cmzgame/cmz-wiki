---
title: Jar of honey
categories: [Items, Food]
aliases: [Honey, Jars of honey, Pot of honey, Pots of honey]
summary: Food taken from the valley's beehives into an empty clay jar, a jar a hive, with more some game days later; eating it leaves the jar.
---

{{infobox-item honey}}

A **jar of honey** is [[Food]]. Eating one adds {{n items.honey.hunger}} to your [[Hunger]] and heals {{n items.honey.heal}} [[Health]], and leaves the empty [[Clay jar]] behind. It comes from the [[Beehive|beehives]] at [[Your cottage]], [[Hollow Farm]], and [[The manor]]: **Take honey** on a hive's menu, with an empty clay jar carried, fills the jar, {{n tuning.work.honey.count.0}} jar of honey a take, and the hive has more {{n tuning.work.honey.days}} [[The day|game days]] later. Without a jar on you the take is refused: "You need a clay jar to take honey." Every hive has honey at the start. No recipe makes honey. A jar of honey {{stack honey}}. Honey is a binder: [[Pemmican]] takes a jar of honey or [[Lard]] to bind its meat and plant. One jar goes into each [[Stamina potion]], with two [[Nettle]], at a [[Cauldron]] (see [[Potions]]). Spent in either recipe, the empty jar comes back into your bag, or at your feet, as the make starts.

It was the Pot of honey, taken with no jar at all, until the jar came (2026-10-29, the build of Michael's ruling of 2026-10-26).

## The jar

The jar is filled where it was: when the empty jar was the last of its stack, the honey takes its cell or its belt slot; otherwise the honey goes into your bag, or falls at your feet when the bag is full: "Your bag is full: a jar of honey is at your feet." The line for the take is "You take a jar of honey from the hive." Eating the last jar of a stack leaves the empty jar in the same place, as drinking a potion leaves its vial. See [[Clay jar]].

{{item-sections honey}}

## With friends

Honey is taken on the host for the player who asked, into that player's own jar, and the hive's wait is the same for everyone: a hive one player has emptied is empty for all until its honey is back.

## Sources

<!-- sources at 8d361e5 -->
- `data/items.json:19`: the jar of honey: food, its hunger and heal, `jar` the clay jar, no stack (game #585)
- `src/entities/player.js:93-103`: eating adds its hunger and its heal
- `src/hives.js:28-56`, `src/hives.js:74-91`, `data/tuning.json` `work.honey`: Take honey at a hive with an empty jar carried, refused without one; the jar filled in its own place, else the bag, else the feet with its line; the days until more; every hive starts with honey (games #416, #585)
- `src/interact.js:1722-1731`: eating the last jar leaves the empty jar in its place (game #585)
- `src/stations.js:113-163`, `src/stations.js:232-235`: the jar back from a recipe as the make starts (game #585)
- `tools/mapgen/valley.py:201-202`, `tools/mapgen/valley.py:320`, `tools/mapgen/valley.py:464-466` (at 393acaf): the hives at the cottage, the manor, and Hollow Farm
- `data/loot.json`, `data/recipes.json`: no table gives honey and no recipe makes it; the cottage's chest holds two empty jars (game #585)
- `src/net.js:600-610`, `src/hives.js:85-86`: a guest's Take honey run on the host; the hive's `honeyAt` sent with its chunk
- `data/items.json:19`, `data/recipes.json:1324-1348`: honey tagged `binder`, pemmican's binder (game #462, at d625844)
- `data/recipes.json:1687-1712`: a jar of honey in the stamina potion (game #491, at 0fa02e5)
- `docs/02-decisions.md` (2026-10-26, Honey goes into a clay jar): the ruling

{{navbox items}}
