---
title: Hunger
categories: [Player, Needs]
aliases: [Starving, Starvation]
summary: The need that food fills; empty, it costs health.
numbersOk: true
---

<!-- typed: the moodle stage thresholds (60, 35, 15) live in src/moodles.js as literals -->

**Hunger** is one of your needs. It runs from {{n tuning.player.hungerMax}} (fed) down to zero (starving), and [[Food]] fills it.

## How it works

### Draining

Hunger empties from full in {{n tuning.player.hungerDrainSeconds}} seconds of the world's clock, a steady drain awake or asleep. A game hour is {{n census.constants.map.HOUR_SECONDS}} seconds.

### Eating

Choose "Eat" on food in your bag or in an open container, or eat a food on your belt from its slot: its belt key, Eat on the slot's menu, or a double-click. Eating is instant: hunger (and thirst, for some foods) rises by the food's value, capped at the maximum, health rises a little by the food's heal, and one is used from the stack. Your character holds the food out for a moment. **At {{n tuning.player.fullAt}} hunger or more you are full**: you cannot eat, and trying says "You are full." Below that, a food that gives more hunger than you have room for heals only the share that fills (see [[Food]]).

### Stages

The hunger moodle shows the stage:

1. **Peckish**: below 60. No effect.
2. **Hungry**: below 35. [[Health]] stops regenerating.
3. **Very hungry**: below 15. [[Stamina]] recovers at ×{{n tuning.player.needsStaminaRegenMult}}.
4. **Starving**: empty. You lose {{n tuning.player.starveDamage}} health a second.

## Numbers

- Maximum: {{n tuning.player.hungerMax}}
- Full to empty: {{n tuning.player.hungerDrainSeconds}} seconds
- Full, and eating refused, at: {{n tuning.player.fullAt}}
- Starving: {{n tuning.player.starveDamage}} health a second
- A [[Loaf of bread]]: +{{n items.bread.hunger}}; an [[Apple]]: +{{n items.apple.hunger}}; [[Stew]]: +{{n items.stew.hunger}}. Every food is listed under [[Food]].

## With friends

Each player has their own hunger. Eating on a guest goes through the host like every other menu choice.

## Settings that change it

- **Survival** (default On): off, hunger is held full, so you are always full and eat nothing.

## See also

- [[Food]], [[Thirst]], [[Tiredness]], [[Moodles]], [[Health]]

## Sources

<!-- sources at 8e7538f -->
- `data/tuning.json:52`, `data/tuning.json:54-55`: the maximum, the drain time, and `fullAt`
- `src/entities/player.js:145`: the drain, every step, awake or asleep
- `src/map.js:95`: a game hour is 30 seconds
- `src/entities/player.js:81-101`: full at `fullAt`, nothing eaten; eating raises hunger and thirst, capped, and heals by the share it fills (game #186)
- `src/interact.js:1130-1139`, `src/interact.js:1193`: the "Eat" entry uses one from the stack, or says "You are full."
- `src/interact.js:1141-1155`, `src/interact.js:1267-1279`, `src/ui/inventory-actions.js:174-182`: the belt key, the slot's Eat, and a double-click eat a food on the belt (game #186)
- `data/tuning.json:61`, `src/entities/player.js:93`, `src/entities/player.js:384-385`: the held-out pose
- `src/moodles.js:55-59`: the hunger stages and their thresholds
- `src/entities/player.js:152-157`: Hungry stops regeneration
- `src/entities/player.js:162-167`, `data/tuning.json:69`: Very hungry slows stamina recovery
- `src/entities/player.js:149`, `data/tuning.json:57`: starving damage
- `data/items.json:16-17`, `data/items.json:64`: bread, apple, and stew
- `src/ui/inventory-actions.js:219`, `src/ui/inventory-actions.js:347-358`: a guest's menu choice is run by the host
- `src/entities/player.js:139-143`: Survival off holds hunger full
