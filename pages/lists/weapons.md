---
title: Weapons
categories: [Weapons, Lists, Combat]
summary: Every weapon side by side, with the numbers from the game's data.
---

Anything with a weapon block in the game's data can be swung. The numbers below are the game's own; *hits per kill* is worked out the way the game works it out, from the damage and the health of the standard dead one, and *lasts* is how many of the dead a weapon puts down before it is spent (see [[Durability]]).

## Melee weapons

{{weapon-table}}

## The bow and the shield

The [[Bow]] has its own numbers (draw times, damage, shots before the string goes), and the [[Shield]] blocks rather than strikes. See [[Archery]] and [[Combat]].

## Sources

<!-- sources at 9205ad7 -->
- `data/items.json`: every weapon block's numbers (the table)
- `src/combat.js:305-357`: anything with a weapon block swings
- `src/items.js:27-37`, `data/tuning.json:13`: hits per kill from the damage and the standard dead one's health; the wear by kills
- `data/items.json:21`, `data/items.json:34`: the bow's and the shield's own numbers

{{navbox weapons}}
