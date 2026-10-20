---
title: Bleeding
categories: [Player, Mechanics]
aliases: [Wounds, Wound, Bleed]
summary: Wounds from bites, which stack, drain health, and stop with a bandage.
---

**Bleeding** comes from bites. A wound drains [[Health]] every second, faster the more stacks it has, and closes by itself if you go long enough without another bite. A [[Bandage]] stops it at once.

## How it works

### Wounds and stacks

Each bite from [[The dead]] that does damage has a {{n combat.bleed.chance}} chance to open a wound, or to widen an open one by one stack, up to {{n combat.bleed.max}} stacks. The first wound brings the message "You are bleeding. A bandage will stop it."

Each new bite resets a timer of {{n combat.bleed.duration}} seconds. When the timer runs out without another bite, the wound closes by itself.

While any wound is open, [[Health]] does not regenerate.

### The debuff

Bleeding is a debuff, not a moodle. While a wound is open, a red drop shows in the row of debuffs at the top right of the screen (see [[Interface#Top right: debuffs|Interface]]), with the time left under it and, from two stacks on, the number of stacks in its corner. The time is whole seconds rounded up under a minute (`34s`) and whole minutes rounded up from a minute (`10m`); since a wound lasts {{n combat.bleed.duration}} seconds from its last bite, bleeding always shows seconds. The drop goes when the wound closes or is bandaged.

Hovering over the drop shows a card: **Bleeding**, "Debuff" with the stacks and the time left, how much health it takes a second at its stacks now, "A bandage stops it.", and "Another bite makes it worse and starts the time again."

### Stopping it

Choose "Apply" on a [[Bandage]] in your bag. It stops all bleeding at once, uses one bandage, and says "The bleeding stops." While you are not bleeding the entry reads "Apply (not bleeding)" and cannot be chosen.

## Numbers

- Chance a bite opens or widens a wound: {{n combat.bleed.chance}}
- Most stacks: {{n combat.bleed.max}}
- The wound closes after: {{n combat.bleed.duration}} seconds without a bite
- Health lost a second, by stacks:
  - one: {{n combat.bleed.dpsByStacks.0}}
  - two: {{n combat.bleed.dpsByStacks.1}}
  - three: {{n combat.bleed.dpsByStacks.2}}
  - four: {{n combat.bleed.dpsByStacks.3}}
  - five: {{n combat.bleed.dpsByStacks.4}}

## With friends

A wound belongs to whoever was bitten, and the host tells a guest when they start bleeding. The wound, its stacks and its time, travels in each player's record, so a guest's row of debuffs shows the same as the host's would; it is part of the multiplayer sync check.

## Settings that change it

- **Zombie aggro** (default On): off, the dead do not bite, so nobody bleeds.

## See also

- [[Bandage]], [[Health]], [[Infection]], [[Combat]], [[Interface]]

## Sources

<!-- sources at 9205ad7 -->
- `src/debuffs.js:9-47`, `src/ui/debuff-row.js:1-87`, `src/ui/debuff-icons.js:7-18`, `style.css:504-519`: bleeding as a debuff, the red drop at the top right with its time (seconds under a minute, minutes rounded up) and its stacks, and its card; it left the moodles (game #315, at 8af4eed)
- `src/net.js:825`, `src/game.js:418`: the wound in a player's record on the wire and in the sync check (game #315, at 8af4eed)
- `data/combat.json:4`: the wound chance, the most stacks, the timer, and the drain by stacks
- `src/bleed.js:12`: the code's defaults match the data
- `src/bleed.js:45-60`: each bite opens or widens a wound and resets the timer; the drain; the wound closing by itself
- `src/game.js:294-301`: the bite hook, only for a bite that does damage
- `src/main.js:1446`: "You are bleeding. A bandage will stop it."
- `src/entities/player.js:134-135`: no health regeneration while any stack is open
- `src/interact.js:1037-1045`: "Apply" stops all bleeding and uses one bandage
- `src/game.js:488`, `src/host.js:185-189`: bleeding stepped per player; the host sends a guest its bite messages
- `src/settings.js:12`, `src/entities/zombie.js:233,296`: Zombie aggro on by default; the dead bite only with it on (game commit 2c70942)
