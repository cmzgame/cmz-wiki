---
title: Waterskin
categories: [Items, Drink, Player]
aliases: [Waterskins, Water skin]
summary: A leather skin of water, drunk a sip at a time, by hand or by itself when you are thirsty, and filled at a well or any water.
numbersOk: true
---

<!-- typed: a waterskin found in loot holds 0, 25, 50, 75, or 100 percent (src/items.js); filling and the starter skin set 100 in code -->

{{infobox-item waterskin}}

A **waterskin** holds water for [[Thirst]], shown as a percent. Every survivor starts with a full one in their bag, and more turn up in barrels and on the dead.

## Effects

Choose "Drink" on it in your bag; when it sits on the belt, press its belt key, choose "Drink" on its slot, or double-click the slot. The menu shows how full it is. One sip is instant and raises thirst by up to {{n tuning.player.drinkSip}}, taking the same from the skin; a sip with thirst already full still takes a little water.

It also drinks by itself. Once your [[Thirst]] falls to **Thirsty** (the moodle's stage {{n tuning.player.autoDrinkStage}}), you take the same sip from a waterskin you carry, on the [[Belt]] or in your bag, and "You drink from your waterskin." shows. The emptiest skin that still holds water goes first, so one is finished before the next is started. It waits until you are not swinging, drawing, casting, guarding, or asleep, and not already holding a drink or food out. It needs [[Survival]] on.

It also waters crops: **Water** on a crop's menu, or a [[Use]] of the skin on a crop or tilled soil, takes some of its water (see [[Farming]]).

To fill it, stand at a well or beside any water tile and choose "Fill waterskins". It takes {{n census.constants.interact.FILL_TIME}} seconds and fills every waterskin in your bag to full. A waterskin on the belt is not filled; put it in the bag first. Wells and water never run out.

A waterskin found in a barrel or on a body may hold 0, 25, 50, 75, or 100 percent.

{{item-sections waterskin}}

## With friends

A guest drinks and fills through the same actions; the host performs them. A guest's skin drinks by itself as the host's does: the host's world takes the sip, and the word shows on the guest's screen.

## Sources

<!-- sources at 8e7538f -->
- `data/items.json:20`: the waterskin, its size, and its capacity
- `data/kit.json:5`: the starter waterskin, full
- `data/loot.json:3-4`: waterskins in barrels and on bodies
- `src/interact.js:1196-1197`: "Drink (N%)" showing the fill
- `src/interact.js:1141-1155`, `src/interact.js:1267-1279`, `src/ui/inventory-actions.js:174-182`: the belt key, the slot's Drink, or a double-click drinks it (game #186)
- `src/entities/player.js:104-112`, `data/tuning.json:59`: the sip, with a +1 that takes water at full thirst
- `src/entities/player.js:113-131`, `data/tuning.json:60`: drinking by itself at Thirsty, belt and bag, the emptiest with water first, what holds it off, Survival (game #121)
- `src/game.js:582-585`, `src/main.js:1643-1645`, `src/host.js:239-242`: in the world's step on the host, the word to whoever drank
- `src/interact.js:54`, `src/interact.js:635-674`: "Fill waterskins" at a well or water, its time, filling to 100
- `src/inventory.js:80-82`: only the bag's waterskins are filled
- `src/items.js:93`: a found waterskin's random fill
- `src/farming.js:128-137`, `src/farming.js:204-225`, `data/interactions.json:20-22`: watering a crop takes the fill a watering costs, from the fullest skin with enough (game #206)
- `src/ui/inventory-actions.js:219`, `src/ui/inventory-actions.js:347-358`: a guest's menu choice is run by the host

{{navbox items}}
