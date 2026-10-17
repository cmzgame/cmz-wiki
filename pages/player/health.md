---
title: Health
categories: [Player, Mechanics]
aliases: [HP, Hitpoints, Health regeneration, Regeneration]
summary: Your health, what takes it away, and when it comes back by itself.
numbersOk: true
---

<!-- typed: the moodle stage thresholds (60, 35, 15) live in src/moodles.js as literals -->

**Health** is how much harm your [[Player|character]] can take. You have {{n tuning.player.hp}}, shown as a bar at the top left with the current and the maximum; the bar turns yellow and then red as it falls. At zero you [[Death|die]].

## How it works

### What takes it

- **Bites.** A bite from [[The dead]] does {{n tuning.zombie.damage}} damage, with {{n tuning.zombie.cooldown}} seconds between bites from one of them. A [[Shield]] raised toward the bite reduces or stops it (see [[Combat]]). A bite may also open a wound ([[Bleeding]]) or leave an [[Infection]].
- **Bleeding.** An open wound drains health every second, faster the more stacks it has.
- **Starving.** At empty [[Hunger]] you lose {{n tuning.player.starveDamage}} health a second.
- **Dying of thirst.** At empty [[Thirst]] you lose {{n tuning.player.dehydrateDamage}} health a second. Both together add up.

The dead hunt and bite only while the world rule Zombie aggro is on, as it is by default (see [[Settings]]).

### Regeneration

Health comes back by itself, slowly, only while all of these hold:

- You are better than "Hungry": hunger is at 35 or more.
- You are better than "Thirsty": thirst is at 35 or more.
- No wound is [[Bleeding]].
- You are not "Falling asleep" ([[Tiredness]] above empty).

With the [[Survival]] setting off the needs are held full, so health comes back at the same rates as long as nothing bleeds.

Awake, you regain {{n tuning.player.healthRegenPerMinute}} health a minute. Asleep in a bed, you regain {{n tuning.player.sleepRegenPerMinute}} a minute (see [[Sleep]]). A minute here is a minute of the world's own clock, so while everyone sleeps it passes much faster.

[[Food]] heals a little: each food adds its heal value when eaten, a stopgap, and only the share whose hunger your stomach has room for; a full stomach eats nothing (see [[Food]]). Eating also raises hunger and thirst, which lets regeneration start again.

## Numbers

- Maximum: {{n tuning.player.hp}}
- Regeneration awake: {{n tuning.player.healthRegenPerMinute}} a minute
- Regeneration asleep: {{n tuning.player.sleepRegenPerMinute}} a minute
- Starving: {{n tuning.player.starveDamage}} a second
- Dying of thirst: {{n tuning.player.dehydrateDamage}} a second
- A bite: {{n tuning.zombie.damage}}
- Bleeding, one to five stacks: {{n combat.bleed.dpsByStacks.0}}, {{n combat.bleed.dpsByStacks.1}}, {{n combat.bleed.dpsByStacks.2}}, {{n combat.bleed.dpsByStacks.3}}, {{n combat.bleed.dpsByStacks.4}} a second

## With friends

Each player has their own health. A sleeper among players who are awake still regains health at the sleeping rate, though time runs at normal speed.

## Settings that change it

- **Survival** (default On): off, needs never drain, and health still regenerates as a fed body's does.
- **Zombie aggro** (default On): on, the dead hunt and bite.

## See also

- [[Stamina]], [[Bleeding]], [[Hunger]], [[Thirst]], [[Death]], [[Moodles]]

## Sources

<!-- sources at 4be64f2 -->
- `data/tuning.json:45`: the maximum health
- `src/ui/hud.js:90-93`: the bar, its colours by fraction, and the current / max text
- `data/tuning.json:11-12`: a bite's damage and the time between bites
- `src/game.js:355-363`, `src/combat.js:131-163`: a bite through the shield guard, and the bleed and infection hooks
- `data/combat.json:4`: the bleeding drain by stacks
- `data/tuning.json:57-58`, `src/entities/player.js:149-150`: starving and dehydration damage, which add up
- `src/settings.js:12`, `src/entities/zombie.js:307-308`: the dead bite only with Zombie aggro on
- `src/entities/player.js:152-157`: regeneration, its conditions (hunger and thirst stage below 2, no bleed stacks, tired stage below 4), and the awake and asleep rates, in the world's time
- `src/moodles.js:47-78`: hunger and thirst stage 2 begins below 35
- `src/entities/player.js:139-143`: with Survival off the needs are held full and regeneration still runs
- `data/tuning.json:67-68`: the regeneration rates, per sim minute
- `src/entities/player.js:81-101`, `data/items.json`: `eat` adds each food's `heal`, times the share of its hunger that fills, and nothing at `fullAt` (game #186)
