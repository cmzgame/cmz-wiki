---
title: Thirst
categories: [Player, Needs]
aliases: [Drinking, Dehydration, Drink]
summary: The need that water fills, from a waterskin, a well, or any water.
numbersOk: true
---

<!-- typed: the moodle stage thresholds (60, 35, 15) live in src/moodles.js as literals; the drink action becomes the E action below 90 thirst (src/interact.js) -->

**Thirst** is one of your needs. It runs from {{n tuning.player.thirstMax}} (watered) down to zero, and it drains faster than [[Hunger]]. Water fills it.

## How it works

### Draining

Thirst empties from full in {{n tuning.player.thirstDrainSeconds}} seconds of the world's clock, awake or asleep: one game day.

### Drinking

There are three ways to drink:

- **A [[Waterskin]].** Choose "Drink" on it in your bag; on the belt, press its belt key, choose "Drink" on its slot, or double-click the slot. One sip is instant and raises thirst by up to {{n tuning.player.drinkSip}}, taken from the skin's water. A skin you carry also sips by itself once you are Thirsty (below).
- **Some foods.** An [[Apple]] gives +{{n items.apple.thirst}} thirst, [[Stew]] +{{n items.stew.thirst}}.
- **A well or any water.** Stand at a well, or beside any water tile (a river, a pond, shallow water), and choose "Drink from the well" (or the trough, or the font) or "Drink from the water". It takes {{n census.constants.interact.DRINK_TIME}} seconds and fills thirst all the way. It becomes the E action once thirst is below 90.

At the same well or water, "Fill waterskins" takes {{n census.constants.interact.FILL_TIME}} seconds and fills every waterskin in your bag and on your belt. Wells and water never run out.

### Drinking by itself

Once thirst falls to **Thirsty** (stage {{n tuning.player.autoDrinkStage}} below), you take a sip by yourself from a waterskin you carry, on the [[Belt]] or in your bag, and "You drink from your waterskin." shows. It is the same sip as one taken by hand. The emptiest skin that still holds water goes first, so one skin is finished before the next is started.

It waits while you swing, draw a bow or a throw, cast, hold a guard, or sleep, and while you are already holding a drink or food out; it comes as soon as that ends. With no water in any skin nothing happens, so the Thirsty moodle means you are out of water. With [[Survival]] off, thirst is held full and it never comes.

### Stages

1. **Slightly thirsty**: below 60. No effect.
2. **Thirsty**: below 35. [[Health]] stops regenerating.
3. **Parched**: below 15. [[Stamina]] recovers at ×{{n tuning.player.needsStaminaRegenMult}}.
4. **Dying of thirst**: empty. You lose {{n tuning.player.dehydrateDamage}} health a second.

## Numbers

- Maximum: {{n tuning.player.thirstMax}}
- Full to empty: {{n tuning.player.thirstDrainSeconds}} seconds
- A sip from a waterskin: up to {{n tuning.player.drinkSip}}
- A carried waterskin sips by itself from stage: {{n tuning.player.autoDrinkStage}} (Thirsty)
- Drinking at a well or water: {{n census.constants.interact.DRINK_TIME}} seconds
- Filling waterskins: {{n census.constants.interact.FILL_TIME}} seconds
- Dying of thirst: {{n tuning.player.dehydrateDamage}} health a second

## With friends

Each player has their own thirst. A guest drinks and fills through the same actions, performed by the host. A guest's waterskin sips by itself in the same way: the host's world takes the sip, and "You drink from your waterskin." shows on the guest's screen, not the host's.

## Settings that change it

- **Survival** (default On): off, thirst is held full.

## See also

- [[Waterskin]], [[Water]], [[Hunger]], [[Food]], [[Moodles]]

## Sources

<!-- sources at 3f11fdb -->
- `data/tuning.json:53`, `data/tuning.json:56`: the maximum and the drain time
- `src/entities/player.js:146`: the drain, awake or asleep
- `src/clock.js:5`: a game day is 720 seconds
- `src/interact.js:1243-1244`, `src/entities/player.js:104-112`, `data/tuning.json:59`: the "Drink" entry and the sip
- `src/interact.js:1188-1202`, `src/interact.js:1316-1328`, `src/ui/inventory-actions.js:174-182`: the belt key, the slot's Drink, or a double-click drinks a waterskin on the belt (game #186)
- `src/entities/player.js:113-131`, `data/tuning.json:60`: drinking by itself: the stage, every skin on the belt and in the bag, the emptiest with water first, what holds it off, Survival (game #121)
- `src/archery.js:590-591`, `src/archery.js:606-619`, `src/archery.js:664-678`: a throw and a cast are draws too
- `src/game.js:607-610`, `src/main.js:1650-1652`: in the world's step, the word on the drinker's screen
- `data/items.json:17`, `data/items.json:70`: the apple's and the stew's thirst
- `src/interact.js:678-717`, `src/map.js:1408-1417`: the well's and the water's actions, named for the prop; floors with `drink`
- `src/interact.js:55`, `src/interact.js:683`, `src/interact.js:689-694`: drinking's time, the E action below 90, thirst set to full
- `src/interact.js:56`, `src/interact.js:679`, `src/interact.js:697-711`, `src/inventory.js:85-87`: filling's time and every waterskin in the bag and on the belt to full (the belt's game #222)
- `src/moodles.js:64-78`: the thirst stages
- `src/entities/player.js:152-154`: Thirsty stops regeneration
- `src/entities/player.js:160-165`, `data/tuning.json:69`: Parched slows stamina recovery
- `src/entities/player.js:150`, `data/tuning.json:58`: dehydration damage
- `src/ui/inventory-actions.js:219`, `src/ui/inventory-actions.js:352-363`: a guest's menu choice is run by the host
- `src/host.js:239-242`: a guest's sip by itself, its word sent to the guest
- `src/entities/player.js:138-143`: Survival off holds thirst full
