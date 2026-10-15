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

### The moodle

The bleeding moodle names the stage: Bleeding, Bleeding badly, Bleeding heavily, and Bleeding out. Four stacks and five stacks both show as Bleeding out.

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

A wound belongs to whoever was bitten, and the host tells a guest when they start bleeding.

## Settings that change it

- **Zombie aggro** (default Off): off, the dead do not bite, so nobody bleeds.

## See also

- [[Bandage]], [[Health]], [[Infection]], [[Combat]], [[Moodles]]
