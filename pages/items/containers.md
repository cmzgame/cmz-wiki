---
title: Containers
categories: [Items, Mechanics]
aliases: [Container, Chest, Chests, Barrel, Barrels, Searching, Search, Loot, Loot tables]
summary: Chests, barrels, and other furniture hold items; each is searched once, which rolls its loot, and after that it simply opens.
numbersOk: true
---

<!-- typed: a body's grid size (src/entities/character.js) is neither data nor a named constant -->

A **container** is a piece of furniture that holds items in a grid: chests, barrels, shelves, cupboards, desks, and the rest. Bags and belts are containers too, but carried ones (see [[Inventory]]). A container in the world starts unsearched; searching it fills it from its loot table.

## How it works

### Searching

Right-click a container, or press `E` beside it, and choose **Search**. A bar fills over {{n census.constants.interact.SEARCH_TIME}} second, and then the container's loot table is rolled into its grid. What does not fit is never made. After that first search the container just **Open**s, and holds whatever was left in it.

An open container's grid shows beside your bag. It stays open while you are within {{n tuning.world.containerCloseDist}} tiles and closes when you walk away. From an open container you can eat, drink, wear, and apply bandages directly; to equip something, take it into your bag first. **Take** on an item's menu moves it to your bag; **Store in** on an item in your bag moves it across. Shift-click and double-click send items across too.

A container can hold a bag or a belt only while that bag or belt is empty (the one container rule; see [[Inventory]]).

### Which furniture rolls which table

- **Barrels** roll the barrel table.
- **Chests**, and every other container in the village (bookcases, carts, coffins, counters, cupboards, desks, haystacks, shelves, stalls, strongboxes, woodpiles), roll the chest table.
- **Wheelbarrows** roll the same fixed contents as the [[Developer chest]].

This holds for furniture you make as well: a chest or a shelf made at the [[Workbench]] is unsearched when it appears, and its first search rolls the chest table like any other. A wheelbarrow made there fills, on its first search, with the dev chest's contents.

Each table is rolled a number of times, and each roll picks one row by its weight. "Nothing" is a row like any other.

#### Chest

Rolled {{n loot.chest.rolls.0}} to {{n loot.chest.rolls.1}} times.

{{loot-table chest}}

#### Barrel

Rolled {{n loot.barrel.rolls.0}} to {{n loot.barrel.rolls.1}} times.

{{loot-table barrel}}

### The dead

A body can be searched in the same way: the first search rolls the body's pockets and lays out everything it had on a grid of 6 × 6, what it held, what it wore, its pockets, and anything lodged in it. Taking a garment off the grid takes it off the body. Villagers' bodies cannot be searched. The dead's pockets roll {{n loot.body.rolls.0}} to {{n loot.body.rolls.1}} times:

{{loot-table body}}

### Carrying a container

A chest, a barrel, a shelf, a cupboard, a desk, a strongbox, a woodpile, or a bookcase can be picked up with both hands empty and carried; it keeps its contents. See [[Placement]].

{{where chest}}

## With friends

A search chosen by a guest is carried out by the host. What a container holds is part of the world, so every player sees the same contents and the same items gone once someone takes them.

## See also

- [[Inventory]]
- [[Developer chest]]
- [[Crafting]]
