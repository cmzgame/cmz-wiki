---
title: Waterskin
categories: [Items, Drink, Player]
aliases: [Waterskins, Water skin]
summary: A leather skin of water, drunk a sip at a time, by hand or by itself when you are thirsty, filled at a well or any water, and boiled clean at a cooking fire.
numbersOk: true
---

<!-- typed: a waterskin found in loot holds 0, 25, 50, 75, or 100 percent (src/items.js); filling and the starter skin set 100 in code -->

{{infobox-item waterskin}}

A **waterskin** holds water for [[Thirst]], shown as a percent, and its water is either clean or tainted. Every survivor starts with one full of clean water in their bag, and more turn up in barrels and on the dead. Every fixed source of water is tainted, so a skin filled at one is tainted until it is boiled at a cooking fire.

## Effects

Choose "Drink" on it in your bag; when it sits on the belt, press its belt key, choose "Drink" on its slot, or double-click the slot. The menu shows how full it is, and "tainted" when its water is: "Drink (tainted, 40%)", or "Drink (40%)" for clean water. One sip is instant and raises thirst by up to {{n tuning.player.drinkSip}}, taking the same from the skin; a sip with thirst already full still takes a little water. Each sip of tainted water has a {{pct tuning.water.sickChance}} chance to make you [[Sick]] (a stack more, with no roll, once you are Sick) and a {{pct tuning.water.infectionChance}} chance of the [[Infection]]; a sip of clean water rolls nothing.

It also drinks by itself, clean water only. Once your [[Thirst]] falls to **Thirsty** (the moodle's stage {{n tuning.player.autoDrinkStage}}), you take the same sip from a waterskin of clean water you carry, on the [[Belt]] or in your bag, and "You drink from your waterskin." shows; a skin of tainted water is never sipped by itself. The emptiest clean skin that still holds water goes first, so one is finished before the next is started. It waits until you are not swinging, drawing, casting, guarding, or asleep, and not already holding a drink or food out. It needs [[Survival]] on.

It also waters crops: **Water** on a crop's menu, or a [[Use]] of the skin on a crop or tilled soil, takes some of its water (see [[Farming]]).

To fill it, stand at a well, a trough, or the chapel's font, or beside any water tile, and choose "Fill waterskins". It takes {{n census.constants.interact.FILL_TIME}} seconds and fills every waterskin in your bag and on your [[Belt]] to full. Every fixed source is tainted, and a fill at one makes the whole skin tainted, whatever it held before; a skin already full is not filled, and keeps its water as it is. Wells and water never run out.

A waterskin found in a barrel or on a body may hold 0, 25, 50, 75, or 100 percent, and its water is tainted.

## Clean and tainted

The hover card of a skin holding water says "Clean water." or "Tainted water: drinking it may make you Sick.", and a small brown drop in the top right corner of its icon marks tainted water. The name stays "Waterskin" either way. An empty skin says nothing about water.

**Boiling** makes a tainted skin clean. At a lit cooking fire (a campfire, a hearth, a fireplace, or the oven), [[Use]] the skin on the fire, choose **Boil water** on the skin's menu in the bag or on the belt (greyed "Boil water (no lit fire in reach)" with none in reach), or choose **Boil water** on the fire's menu, which takes the fullest tainted skin you carry (greyed "Boil water (no tainted water carried)" with none). A bar runs for {{n tuning.water.boilSeconds}} seconds within {{n tuning.water.boilReach}} tiles of the fire; at its end the water is clean and the fill is kept: "The water boils. It is clean now." The menus offer Boil water only on a skin that holds tainted water. See [[Water#Boiling|Water]].

{{item-sections waterskin}}

## With friends

A guest drinks, fills, and boils through the same actions; the host performs them, and rolls for [[Sick]] on the guest's tainted drinks. Whether a skin's water is clean travels with it in the guest's inventory and in the save. A guest's skin drinks by itself as the host's does: the host's world takes the sip, and the word shows on the guest's screen.

## Sources

<!-- sources at 3c0a243 -->
- `data/items.json:20`: the waterskin, its size, and its capacity
- `data/kit.json`, `src/kit.js:15-16`: the starter waterskin, full of clean water (game #435, at fa2997f)
- `src/interact.js:858-861`, `src/entities/player.js:118-129`, `src/sick.js:56-67`: the Drink's label says "tainted" only for tainted water; a tainted sip's chance of Sick and of the infection (game #435, at fa2997f)
- `src/entities/player.js:131-149`: the sip by itself takes only clean water (game #435, at fa2997f)
- `src/interact.js:867-906`, `src/water.js:38-43`: a fill at a tainted source taints the skin; only skins under full are filled (game #435, at fa2997f)
- `src/item-info.js:97-98`, `src/ui/inventory-panel.js:273`, `style.css:959-967`: the card's clean or tainted line and the brown drop (game #435, at fa2997f)
- `src/water.js:51-148`, `src/interact.js:975`, `src/interact.js:983-1006`, `src/interact.js:1531-1536`, `src/interact.js:1618-1623`, `data/interactions.json:37`, `data/tuning.json`: Boil water at a lit cooking fire, by Use, the skin's menu, or the fire's, the bar, the fill kept (game #435, at fa2997f)
- `src/game.js:418`, `src/entities/character.js:64-74`: a skin's clean water in the sync check and the save (game #435, at fa2997f)
- `data/loot.json:3-4`: waterskins in barrels and on bodies
- `src/interact.js:1248-1249`: "Drink (N%)" showing the fill
- `src/interact.js:1193-1207`, `src/interact.js:1321-1333`, `src/ui/inventory-actions.js:221-229`: the belt key, the slot's Drink, or a double-click drinks it (game #186)
- `src/entities/player.js:106-114`, `data/tuning.json:59`: the sip, with a +1 that takes water at full thirst
- `src/entities/player.js:115-133`, `data/tuning.json:60`: drinking by itself at Thirsty, belt and bag, the emptiest with water first, what holds it off, Survival (game #121)
- `src/game.js:615-618`, `src/main.js:1686-1688`, `src/host.js:248-251`: in the world's step on the host, the word to whoever drank
- `src/interact.js:57`, `src/interact.js:681-716`: "Fill waterskins" at a well or water, its time, filling to 100
- `src/inventory.js:80-87`: the bag's waterskins and the belt's are filled (the belt's game #222)
- `src/items.js:98`, `src/water.js:35-36`: a found waterskin's random fill, its water not marked clean
- `src/farming.js:140-149`, `src/farming.js:216-231`, `data/interactions.json:20-22`: watering a crop takes the fill a watering costs, from the fullest skin with enough (game #206)
- `src/ui/inventory-actions.js:270`, `src/ui/inventory-actions.js:421-432`: a guest's menu choice is run by the host

{{navbox items}}
