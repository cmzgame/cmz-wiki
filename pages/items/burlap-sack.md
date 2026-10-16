---
title: Burlap sack
categories: [Items, Bags]
aliases: [Sack, Small sack, Starting bag]
summary: The bag every new character starts with, on the back.
---

{{infobox-item small_sack}}

The **burlap sack** is the bag every new character starts with on their back. It gives a grid of {{n items.small_sack.bag.0}} × {{n items.small_sack.bag.1}} cells, the smallest of the bags (see [[Inventory]]). A fallen player's body keeps its sack, and searching the body lays it out with what is in it. A [[Rucksack]] from a chest holds more.

Equipping another bag drops the sack at your feet with everything in it. Empty, it can be carried inside another bag; full, it cannot.

{{item-sections small_sack}}

## Sources

<!-- sources at 9205ad7 -->
- `data/items.json:31`: the sack: equipped on the back, grid 6 x 4, the smallest bag
- `src/game.js:103-116`: every new character starts with one on
- `src/entities/character.js:139-162`: a body's grid lays out the sack on its back with what is in it
- `data/wardrobes.json`: no wardrobe of the dead has a sack
- `data/items.json:32`: the rucksack's bigger grid
- `data/loot.json:2`: the rucksack in the chest table
- `src/interact.js:168-189`: equipping another bag drops the old one at your feet with its contents
- `src/inventory.js:159-173`: a bag goes in another container only empty

{{navbox items}}
