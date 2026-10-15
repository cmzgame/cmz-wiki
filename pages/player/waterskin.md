---
title: Waterskin
categories: [Items, Drink, Player]
aliases: [Waterskins, Water skin]
summary: A leather skin of water, drunk a sip at a time and filled at a well or any water.
numbersOk: true
---

<!-- typed: a waterskin found in loot holds 0, 25, 50, 75, or 100 percent (src/items.js); filling and the starter skin set 100 in code -->

{{infobox-item waterskin}}

A **waterskin** holds water for [[Thirst]], shown as a percent. Every survivor starts with a full one in their bag, and more turn up in barrels and on the dead.

## Effects

Choose "Drink" on it in your bag, or press its belt key when it sits on the belt. The menu shows how full it is. One sip is instant and raises thirst by up to {{n tuning.player.drinkSip}}, taking the same from the skin; a sip with thirst already full still takes a little water.

To fill it, stand at a well or beside any water tile and choose "Fill waterskins". It takes {{n census.constants.interact.FILL_TIME}} seconds and fills every waterskin in your bag to full. A waterskin on the belt is not filled; put it in the bag first. Wells and water never run out.

A waterskin found in a barrel or on a body may hold 0, 25, 50, 75, or 100 percent.

{{item-sections waterskin}}

## With friends

A guest drinks and fills through the same actions; the host performs them.

## Sources

<!-- sources at 9205ad7 -->
- `data/items.json:19`: the waterskin, its size, and its capacity
- `src/game.js:110`: the starter waterskin, full
- `data/loot.json:3-4`: waterskins in barrels and on bodies
- `src/interact.js:1049-1052`: "Drink (N%)" showing the fill
- `src/interact.js:994-1004`: the belt key drinks it
- `src/entities/player.js:105-113`, `data/tuning.json:51`: the sip, with a +1 that takes water at full thirst
- `src/interact.js:48,534-582`: "Fill waterskins" at a well or water, its time, filling to 100
- `src/inventory.js:80-82`: only the bag's waterskins are filled
- `src/items.js:93`: a found waterskin's random fill
- `src/ui/inventory-actions.js:216,343-351`: a guest's menu choice is run by the host

{{navbox items}}
