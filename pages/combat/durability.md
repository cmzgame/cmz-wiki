---
title: Durability
categories: [Combat, Mechanics]
aliases: [Wear, Weapon durability, Breaking]
summary: Weapons wear out by landed hits, sized so each lasts about its listed number of kills.
---

**Durability** is how long a weapon lasts. Weapons wear by landed hits, sized so a weapon lasts about its listed number of kills against one of [[The dead]] at full health ({{n tuning.zombie.hp}}). When a weapon is spent it is gone from the hand, with a word on screen.

## How it works

### Wear by kills

Each weapon lists how many kills it lasts. From that and its damage the game works out its wear per hit:

- **Hits per kill** is the zombie's health divided by the weapon's damage, rounded up.
- **Wear per hit** is one part in (kills × hits per kill).

So a weapon breaks on the landed hit numbered its kills times its hits per kill. The table below gives both for every weapon.

- A miss costs nothing.
- A swing that hits several of the dead (with Multi-hit on) wears once for each.
- The [[Halberd]]'s thrust and an off-hand swing wear at the weapon's own rate per hit.
- The [[Torch]] wears like any weapon and breaks the same way.
- [[Fists]] and the [[Shove]] never wear.
- A thrown [[Throwing spear]] carries its wear with it.

### The bow

The [[Bow]] wears per arrow loosed instead: it lasts {{n items.bow.shots}} shots, and leaves the hand at the last.

## Numbers

{{weapon-table}}

## With friends

Wear is kept on the item itself and travels with the hands, so it is the same for host and guests.

## See also

- [[Weapons]]
- [[Combat]]

{{navbox weapons}}
