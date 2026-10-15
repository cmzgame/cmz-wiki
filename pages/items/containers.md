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

## Sources

<!-- sources at 9205ad7 -->
- `data/sprites/chest.json`: a container prop with a loot table
- `src/interact.js:323-345`: Search, then Open
- `src/interact.js:43`: the search time
- `src/items.js:76-101`: rolling a loot table; what does not fit is never made
- `src/interact.js:314-321`: a container's grid from its table
- `data/tuning.json:75`: the close distance
- `src/main.js:762-767`: the container closes when you walk away
- `src/interact.js:1015-1090`: eat, drink, wear, apply from a container; equip only from your bag; Take and Store in
- `src/ui/inventory-panel.js:75-89`: double-click sends across
- `src/ui/inventory-panel.js:667`: shift-click sends across, with the container rule
- `src/inventory.js:159-173`: the one container rule
- `data/sprites/barrel.json`: barrels roll the barrel table
- `data/sprites/wheelbarrow.json`: the wheelbarrow rolls the dev kit
- `data/recipes.json:125-152`: the chest and shelf recipes
- `data/recipes.json:229-246`: the wheelbarrow recipe
- `data/loot.json:2-4`: the chest, barrel, and body tables, their rolls and weights
- `src/entities/character.js:139-162`: a body's grid of 6 x 6, its hands, garments, pockets, and what is lodged
- `src/interact.js:1334-1358`: searching a body; villagers have no search entry
- `data/wardrobes.json`: village wardrobes have no loot
- `src/placement.js:69-75`: what can be carried
- `data/sprites/shelf.json`: a carry flag (likewise barrel, chest, cupboard, desk, strongbox, woodpile, bookcase)
- `data/maps/valley.json`: where the chests stand
- `src/host.js:212-215`: a guest's search runs on the host and its panel opens
