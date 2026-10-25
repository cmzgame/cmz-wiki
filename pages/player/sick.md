---
title: Sick
categories: [Player, Mechanics]
aliases: [Sickness, Sick debuff, Tainted water sickness]
summary: A debuff from drinking tainted water: tiredness builds faster and food heals less until it passes.
---

**Sick** is a debuff that can follow a drink of tainted [[Water]]. While you are Sick, [[Tiredness]] builds faster and [[Food]] heals less. It passes by itself; more tainted water makes it last longer. It is not the [[Infection]], whose third stage is called Queasy so the two are never confused.

## How it works

### Getting it

Every fixed source of water in the valley is tainted: the river, the ponds, the wells, the troughs, and the chapel's font. So is the water in a [[Waterskin]] filled at one, until it is boiled clean at a cooking fire (see [[Water#Boiling|Water]]). Drinking tainted water always quenches, and two chances are rolled each time:

- **Sick.** If you are not Sick already, a tainted drink makes you Sick {{pct tuning.water.sickChance}} of the time: "Your stomach turns. You feel sick." If you are Sick already, every tainted drink adds a stack, with no roll: "The water sits badly. You feel worse."
- **The infection.** A tainted drink also has a {{pct tuning.water.infectionChance}} chance to infect you, unless you are infected already (see [[Infection]]). It has no message of its own; the infection moodle appears.

Both are rolled on every tainted drink, whatever they bring: a drink from a well, a trough, the font, or any water tile, and every sip from a tainted waterskin, the one taken with thirst already full included. A sip of clean water rolls nothing. The waterskin's sip by itself takes only clean water, so it never makes you Sick.

### What it does

- **Tiredness** drains {{n tuning.water.sickTiredMult}} times as fast while you are awake. Sleep restores it at the usual rate.
- **Food** heals {{pct tuning.water.sickHealMult}} of its usual amount. Its hunger and thirst are unchanged, and health that comes back on its own is unchanged.

The effects are the same at every stack: stacks only make it last longer.

### Stacks and time

The first stack lasts {{n tuning.water.sickDays}} of a game day. Each tainted drink while Sick adds a stack and another {{n tuning.water.sickDays}} of a game day to the time left, up to {{n tuning.water.sickMaxStacks}} stacks and that many stacks' time. A drink at the most stacks tops the time back up to the most. This is unlike [[Bleeding]], whose time starts again with each bite rather than adding up.

The time runs on the world's clock, so it passes faster while everyone [[Sleep|sleeps]]. When it runs out, Sick ends and every stack goes with it.

### The debuff

Sick shows in the row of debuffs at the top right of the screen, beside [[Bleeding]] (see [[Interface#Top right: debuffs|Interface]]): a green face with its eyes screwed up and a wavy mouth, placeholder art. Under it is the time left, in whole minutes rounded up from a minute and whole seconds under one, and, from two stacks on, the number of stacks in its corner.

Hovering over it shows a card: **Sick**, "Debuff" with the stacks and the time left, how much faster tiredness builds, how much less food heals, and "It passes. More tainted water makes it last longer."

### Curing it

Nothing cures Sick. It ends when its time runs out. To keep from getting it, drink clean water: the [[Waterskin]] every survivor starts with is full of clean water, and a skin of tainted water comes out clean after boiling at a lit cooking fire.

## Numbers

- Chance a tainted drink makes you Sick: {{pct tuning.water.sickChance}}
- Chance a tainted drink infects: {{pct tuning.water.infectionChance}}
- A stack lasts: {{n tuning.water.sickDays}} of a game day
- A game day: {{n census.constants.clock.DAY_LENGTH}} seconds
- Most stacks: {{n tuning.water.sickMaxStacks}}
- Tiredness drains: ×{{n tuning.water.sickTiredMult}}
- Food heals: {{pct tuning.water.sickHealMult}} of its value

## With friends

Sick belongs to whoever drank. The host rolls it, for a guest's drink as for its own, and the word goes to the drinker's screen. Its stacks and time travel in each player's record and in the save, so a guest's row of debuffs shows the same as the host's would; it is part of the multiplayer sync check.

## Settings that change it

- **Survival** (default On): off, tiredness is held full, so Sick's effect on it does nothing; a tainted drink still rolls, and food still heals less.

## See also

- [[Water]], [[Waterskin]], [[Thirst]], [[Infection]], [[Bleeding]], [[Tiredness]], [[Food]], [[Cooking]], [[Interface]]

## Sources

<!-- sources at fa2997f -->
- `src/interact.js:858-861`, `src/water.js:25-36`, `data/tuning.json`: no fixed source is clean (`water.clean` empty); a skin's water tainted unless its entry is marked clean
- `src/sick.js:56-67`, `src/interact.js:880-885`, `src/entities/player.js:118-129`: one host function for a source's Drink and a skin's sip; both rolls every tainted drink; Sick at its chance, a stack without a roll once Sick; the infection's chance; the two messages
- `src/infection.js:34-38`: the infection taken only if not infected already
- `src/entities/player.js:131-149`: the sip by itself takes only clean water
- `src/sick.js:52-54`, `src/entities/player.js:106-115`, `src/entities/player.js:163-166`: tiredness's awake drain and an eaten food's heal, the same at every stack
- `src/sick.js:19-36`, `src/sick.js:44-50`: a stack's time, each drink adding a stack and its time up to the most; the time running down in the world's step, and its end
- `src/loop.js:121`, `src/clock.js:5`: the step's time runs faster while everyone sleeps; a game day is 720 seconds
- `src/debuffs.js:10-15`, `src/debuffs.js:31-41`, `src/debuffs.js:54-59`, `src/ui/debuff-icons.js:19-35`: Sick's row beside bleeding, its time label, its card, and its green face
- `src/game.js:424`, `src/game.js:626`, `src/net.js:826`, `src/entities/player.js:65`, `src/entities/character.js:64-74`: Sick on the player, stepped on the host, in the player's record on the wire, in the save, and in the sync check
- `src/ui/prompt.js:53-68`: a message goes to the acting player's screen
- `src/entities/player.js:156-162`: Survival off holds tiredness full
