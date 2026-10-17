---
title: Durability
categories: [Combat, Mechanics]
aliases: [Weapon durability, Breaking]
summary: Weapons lose durability by landed hits, sized so each lasts about its listed number of kills.
---

**Durability** is how long a weapon lasts. Weapons lose durability by landed hits, sized so a weapon lasts about its listed number of kills against one of [[The dead]] at full health ({{n tuning.zombie.hp}}). When a weapon is spent it is gone from the hand, with a word on screen.

## How it works

### Durability by kills

Each weapon lists how many kills it lasts. From that and its damage the game works out the durability each hit costs:

- **Hits per kill** is the zombie's health divided by the weapon's damage, rounded up.
- **Each hit costs** one part in (kills × hits per kill).

So a weapon breaks on the landed hit numbered its kills times its hits per kill. The table below gives both for every weapon.

- A miss costs nothing.
- A swing that hits several of the dead (with Multi-hit on) costs durability once for each.
- The [[Halberd]]'s thrust and an off-hand swing cost durability at the weapon's own rate per hit.
- The [[Torch]] loses durability like any weapon and breaks the same way. It also burns down while it is lit, on the same meter, faster in a hand than on the belt or in a holder, so a lit torch runs out without a blow struck (see [[Torch#Burning down|Torch]]).
- [[Fists]] and the [[Shove]] cost no durability.
- A thrown [[Throwing spear]] keeps its durability.

### The bow

The [[Bow]] loses durability per arrow loosed instead: it lasts {{n items.bow.shots}} shots, and leaves the hand at the last.

## Numbers

{{weapon-table}}

## With friends

Durability is kept on the item itself and travels with the hands, so it is the same for host and guests.

## See also

- [[Weapons]]
- [[Combat]]

## Sources

<!-- sources at 64cc711 -->
- `src/items.js:27-37`: hits per kill and the durability each hit costs (the code's `wearPerHit`) from `data/tuning.json` (`zombie.hp`)
- `src/combat.js:371`, `src/combat.js:377-389`: durability spent on each landed hit and target; the weapon gone with a word when none is left
- `data/items.json`: each weapon's `kills`; the bow's `shots`
- `src/game.js:494-520`, `data/tuning.json:84-85`: a lit torch burns down on the same `wear`, spent with the same word
- `src/combat.js:393-411`, `src/combat.js:76-80`: the shove and fists cost no durability
- `src/archery.js:702-704`: a thrown spear keeps its durability (the entry itself thrown)
- `src/archery.js:710-719`, `src/items.js:39-41`: the bow loses durability per arrow loosed and leaves the hand at the last

{{navbox weapons}}
