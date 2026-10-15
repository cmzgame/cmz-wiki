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

- **A [[Waterskin]].** Choose "Drink" on it in your bag, or press its belt key. One sip is instant and raises thirst by up to {{n tuning.player.drinkSip}}, taken from the skin's water.
- **Some foods.** An [[Apple]] gives +{{n items.apple.thirst}} thirst, [[Stew]] +{{n items.stew.thirst}}.
- **A well or any water.** Stand at a well, or beside any water tile (a river, a pond, shallow water), and choose "Drink from the well" or "Drink from the water". It takes {{n census.constants.interact.DRINK_TIME}} seconds and fills thirst all the way. It becomes the E action once thirst is below 90.

At the same well or water, "Fill waterskins" takes {{n census.constants.interact.FILL_TIME}} seconds and fills every waterskin in your bag. Wells and water never run out.

### Stages

1. **Slightly thirsty**: below 60. No effect.
2. **Thirsty**: below 35. [[Health]] stops regenerating.
3. **Parched**: below 15. [[Stamina]] recovers at ×{{n tuning.player.needsStaminaRegenMult}}.
4. **Dying of thirst**: empty. You lose {{n tuning.player.dehydrateDamage}} health a second.

## Numbers

- Maximum: {{n tuning.player.thirstMax}}
- Full to empty: {{n tuning.player.thirstDrainSeconds}} seconds
- A sip from a waterskin: up to {{n tuning.player.drinkSip}}
- Drinking at a well or water: {{n census.constants.interact.DRINK_TIME}} seconds
- Filling waterskins: {{n census.constants.interact.FILL_TIME}} seconds
- Dying of thirst: {{n tuning.player.dehydrateDamage}} health a second

## With friends

Each player has their own thirst. A guest drinks and fills through the same actions, performed by the host.

## Settings that change it

- **Survival** (default On): off, thirst is held full.

## See also

- [[Waterskin]], [[Water]], [[Hunger]], [[Food]], [[Moodles]]

## Sources

<!-- sources at 9205ad7 -->
- `data/tuning.json:46,48`: the maximum and the drain time
- `src/entities/player.js:128`: the drain, awake or asleep
- `src/clock.js:5`: a game day is 720 seconds
- `src/interact.js:1049-1052`, `src/entities/player.js:105-113`, `data/tuning.json:51`: the "Drink" entry and the sip
- `src/interact.js:994-1004`: the belt key drinks a waterskin on the belt
- `data/items.json:17,50`: the apple's and the stew's thirst
- `src/interact.js:534-582`, `src/map.js:1125-1127`: the well's and the water's actions; floors with `drink`
- `src/interact.js:47,545,552-555`: drinking's time, the E action below 90, thirst set to full
- `src/interact.js:48,538,566`: filling's time and every bag waterskin to full
- `src/moodles.js:72-78`: the thirst stages
- `src/entities/player.js:134-135`: Thirsty stops regeneration
- `src/entities/player.js:143-148`, `data/tuning.json:61`: Parched slows stamina recovery
- `src/entities/player.js:132`, `data/tuning.json:50`: dehydration damage
- `src/ui/inventory-actions.js:216,343-351`: a guest's menu choice is run by the host
- `src/entities/player.js:120-126`: Survival off holds thirst full
