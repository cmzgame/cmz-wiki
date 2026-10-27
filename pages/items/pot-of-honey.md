---
title: Pot of honey
categories: [Items, Food]
aliases: [Honey, Pots of honey]
summary: Food taken from the valley's beehives, a pot a hive, with more some game days later.
---

{{infobox-item honey}}

A **pot of honey** is [[Food]]. Eating one adds {{n items.honey.hunger}} to your [[Hunger]] and heals {{n items.honey.heal}} [[Health]]. It comes from the [[Beehive|beehives]] at [[Your cottage]], [[Hollow Farm]], and [[The manor]]: **Take honey** on a hive's menu gives {{n tuning.work.honey.count.0}} pot, and the hive has more {{n tuning.work.honey.days}} [[The day|game days]] later. Every hive has honey at the start. No container holds it and no recipe makes it. A pot {{stack honey}}. Honey is a binder: [[Pemmican]] takes a pot of honey or [[Lard]] to bind its meat and plant. One pot goes into each [[Stamina potion]], with two [[Nettle]], at a [[Cauldron]] (see [[Potions]]).

{{planned doc=02 note="Ruled 2026-10-26, not built (game #500): honey will go into an empty clay jar, made as a clay vial is, and Take honey will be refused without one ('You need a clay jar to take honey.'). Eating the honey, or spending it in a recipe, will leave the jar, the item will become the Jar of honey, and your cottage will start with a couple of empty jars."}}

{{item-sections honey}}

## With friends

Honey is taken on the host for the player who asked, and the hive's wait is the same for everyone: a hive one player has emptied is empty for all until its honey is back.

## Sources

<!-- sources at 31d330a -->
- `docs/02-decisions.md` (at 5eb40e6): honey goes into a clay jar, ruled and not built (game #499, #500)
- `data/items.json:19`: the pot of honey: food, its hunger and heal, no stack
- `src/entities/player.js:93-103`: eating adds its hunger and its heal
- `src/hives.js:113-158`, `data/tuning.json:171`: Take honey at a hive, the count, the days until more; every hive starts with honey
- `tools/mapgen/valley.py:201-202`, `tools/mapgen/valley.py:320`, `tools/mapgen/valley.py:464-466` (at 393acaf): the hives at the cottage, the manor, and Hollow Farm
- `data/loot.json`, `data/recipes.json`: no table gives honey and no recipe makes it
- `src/net.js:600-610`, `src/hives.js:130-131`: a guest's Take honey run on the host; the hive's `honeyAt` sent with its chunk
- `data/items.json:19`, `data/recipes.json:1324-1348`: honey tagged `binder`, pemmican's binder (game #462, at d625844)
- `data/recipes.json:1687-1712`: a pot of honey in the stamina potion (game #491, at 0fa02e5)

{{navbox items}}
