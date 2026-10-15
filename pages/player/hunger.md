---
title: Hunger
categories: [Player, Needs]
aliases: [Eating, Starving, Starvation]
summary: The need that food fills; empty, it costs health.
numbersOk: true
---

<!-- typed: the moodle stage thresholds (60, 35, 15) live in src/moodles.js as literals -->

**Hunger** is one of your needs. It runs from {{n tuning.player.hungerMax}} (fed) down to zero (starving), and [[Food]] fills it.

## How it works

### Draining

Hunger empties from full in {{n tuning.player.hungerDrainSeconds}} seconds of the world's clock, a steady drain awake or asleep. A game hour is {{n census.constants.map.HOUR_SECONDS}} seconds.

### Eating

Choose "Eat" on food in your bag or in an open container, or press its belt key when the food sits on your belt. Eating is instant: hunger (and thirst, for some foods) rises by the food's value, capped at the maximum, and one is used from the stack. Your character holds the food out for a moment. Nothing stops you eating when full; the extra is wasted. Food does not heal.

### Stages

The hunger moodle shows the stage:

1. **Peckish**: below 60. No effect.
2. **Hungry**: below 35. [[Health]] stops regenerating.
3. **Very hungry**: below 15. [[Stamina]] recovers at ×{{n tuning.player.needsStaminaRegenMult}}.
4. **Starving**: empty. You lose {{n tuning.player.starveDamage}} health a second.

## Numbers

- Maximum: {{n tuning.player.hungerMax}}
- Full to empty: {{n tuning.player.hungerDrainSeconds}} seconds
- Starving: {{n tuning.player.starveDamage}} health a second
- A [[Loaf of bread]]: +{{n items.bread.hunger}}; an [[Apple]]: +{{n items.apple.hunger}}; [[Stew]]: +{{n items.stew.hunger}}. Every food is listed under [[Food]].

## With friends

Each player has their own hunger. Eating on a guest goes through the host like every other menu choice.

## Settings that change it

- **Survival** (default On): off, hunger is held full.

## See also

- [[Food]], [[Thirst]], [[Tiredness]], [[Moodles]], [[Health]]

## Sources

<!-- sources at 9205ad7 -->
- `data/tuning.json:45,47`: the maximum and the drain time
- `src/entities/player.js:127`: the drain, every step, awake or asleep
- `src/map.js:84`: a game hour is 30 seconds
- `src/entities/player.js:98-103`: eating raises hunger and thirst, capped
- `src/interact.js:1046-1048`: the "Eat" entry uses one from the stack
- `src/interact.js:994-1004`: the belt key eats a food on the belt
- `data/tuning.json:52`, `src/entities/player.js:363-365`: the held-out pose
- `src/moodles.js:55-61`: the hunger stages and their thresholds
- `src/entities/player.js:134-135`: Hungry stops regeneration
- `src/entities/player.js:143-148`, `data/tuning.json:61`: Very hungry slows stamina recovery
- `src/entities/player.js:131`, `data/tuning.json:49`: starving damage
- `data/items.json:16-17,50`: bread, apple, and stew
- `src/ui/inventory-actions.js:216,343-351`: a guest's menu choice is run by the host
- `src/entities/player.js:120-126`: Survival off holds hunger full
