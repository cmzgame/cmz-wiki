---
title: Drop tables
categories: [Lists, Items]
aliases: [Loot tables, Loot, Drop rates, What the valley holds, Container loot]
summary: Every container's loot table, with each item's chance a roll and how many a container holds on average, and what the valley's containers hold all told.
---

A container in the world is filled the first time it is searched, from its **loot table** (see [[Containers]]). This page lists every table, generated from the game's data, so it changes when the game does.

## How to read a table

- A table is **rolled** a number of times, each count as likely as any other.
- Each roll picks one row by its weight. **Chance a roll** is that weight over the table's total: most tables total thirty-two, so a weight of three is three chances in thirty-two. **Nothing** is a row like any other: a roll that lands on it gives nothing.
- **Expected per container** is how many of an item one container holds on average: the average number of rolls, times the chance a roll, times the average quantity.
- **Empty** is the chance that every roll lands on Nothing.
- A **fixed** table gives the same things every time: every item on it is there, always.
- Gear (a weapon, a tool, a bag, a hat, a belt) is in no rolled table but one, the coffins' rare [[Dirk]]: each piece is placed once, in a fixed table, or not at all.

## Rolled tables

{{drop-tables rolled}}

## Fixed tables

{{drop-tables fixed}}

## Tables that roll nothing yet

{{drop-tables empty}}

The [[Developer chest]] has a fixed table of its own, for testing.

## What the valley holds

Every container the valley's map places, its table rolled at the average: fixed tables counted in full, rolled tables by their expected count. A world rolls its containers as they are searched, so a real world holds about these numbers, more of one thing and less of another. The [[Developer chest]] is left out, and so are the dead's pockets and what grows (for food, see [[Day-one food]]).

{{valley-holds}}

## With friends

A search chosen by a guest is rolled by the host, so every player sees the same contents.

## See also

- [[Containers]]
- [[Inventory]]
- [[Day-one food]]
- [[Levers]]

## Sources

<!-- sources at ce21ffc -->
- `data/loot.json`: every table, its rolls, its weights and quantities, its fixed items, its grid
- `src/items.js:81-106`: a table rolled: fixed in full, else a count of rolls between its two numbers, each roll an entry by weight, Nothing a row, a quantity between its two numbers; a waterskin at a random level
- `src/map.js`, `data/sprites/*.json`: a container fills from its own `loot` on the map, else its sprite's `container.loot`
- `data/maps/valley.json`, `tools/mapgen/valley.py`: the containers the valley places, the toll house's chest and the scarecrow among them (game #399)
