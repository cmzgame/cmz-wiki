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

Right-click a container, or press `E` beside it, and choose **Search**; it must be in reach with a clear line, never through a wall (see [[Rooms#Nothing in reach through a wall|Rooms]]). A bar fills over {{n census.constants.interact.SEARCH_TIME}} second, and then the container's loot table is rolled into its grid. What does not fit is never made. After that first search the container just **Open**s, and holds whatever was left in it.

An open container's grid shows beside your bag. It stays open while you are within {{n tuning.world.containerCloseDist}} tiles with a clear line to it, and closes when you walk away or a wall, a shut door, or shutters come between. From an open container you can eat, drink, equip clothing and bags, and apply bandages directly; to equip something into a hand, take it into your bag first. **Take All** in the panel's header takes everything that fits (see [[Inventory#Take All|Inventory]]). **Take** on an item's menu moves it to your bag; **Store in** on an item in your bag moves it across. Shift-click and double-click send items across too.

A container can hold a bag or a belt only while that bag or belt is empty (the one container rule; see [[Inventory]]).

### Which furniture rolls which table

- **Barrels** roll the barrel table.
- **Chests**, and the other furniture containers (bookcases, carts, coffins, counters, cupboards, desks, haystacks, shelves, stalls, strongboxes, woodpiles), roll the chest table, except where a place gives one its own.
- **The farms' haystacks**, at [[Hollow Farm]] and [[Long Acre]], roll the wild table instead: a stick.
- **Some containers hold a fixed set**, the same in every world, and roll nothing: the chest in [[Your cottage]], the joiner's, the weaver's, the smithy's, and the miners' and quarry huts' chests, the barn's tool rack, the two granaries, the ore cart, the stone stack, and the charcoal sacks. Each is on its place's page.
- **Chicken coops**, at [[Your cottage]] and [[Hollow Farm]], roll the coop table, a placeholder: rags, sticks, a little [[Grain]], and often nothing. There are no eggs. Its grid is {{n loot.coop.grid.0}} × {{n loot.coop.grid.1}}, and its menu reads **Search chicken coop**, then **Open chicken coop**.
- **Wheelbarrows** have their own table, which rolls nothing: an empty grid of {{n loot.wheelbarrow.grid.0}} × {{n loot.wheelbarrow.grid.1}}.

Furniture you make is different: a chest, a shelf, or a wheelbarrow made at the [[Workbench]] appears already searched and empty, so nothing is ever rolled into it.

Each table is rolled a number of times, and each roll picks one row by its weight. "Nothing" is a row like any other.

#### Chest

Rolled {{n loot.chest.rolls.0}} to {{n loot.chest.rolls.1}} times.

{{loot-table chest}}

#### Barrel

Rolled {{n loot.barrel.rolls.0}} to {{n loot.barrel.rolls.1}} times.

{{loot-table barrel}}

#### Chicken coop

Rolled {{n loot.coop.rolls.0}} to {{n loot.coop.rolls.1}} times.

{{loot-table coop}}

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
- `src/ui/inventory-actions.js`, `takeAllFrom`, `src/ui/inventory-panel.js`: Take All on a container's panel (game #251)
- `src/reach.js`, `src/main.js`, `src/interact.js` `runAction`: a container searched or opened only within reach and a clear line, and closed when a wall comes between (game #227)
- `data/sprites/chest.json`: a container prop with a loot table
- `src/interact.js:323-345`: Search, then Open
- `src/interact.js:43`: the search time
- `src/items.js:76-101`: rolling a loot table; what does not fit is never made
- `src/interact.js:314-321`: a container's grid from its table
- `data/tuning.json:75`: the close distance
- `src/main.js:762-767`: the container closes when you walk away
- `src/interact.js:1016-1091`: eat, drink, equip clothing, apply from a container; a hand's Equip only from your bag; Take and Store in (game commit 9a450f2)
- `src/ui/inventory-panel.js:75-89`: double-click sends across
- `src/ui/inventory-panel.js:667`: shift-click sends across, with the container rule
- `src/inventory.js:159-173`: the one container rule
- `data/sprites/barrel.json`: barrels roll the barrel table
- `data/sprites/wheelbarrow.json`, `data/loot.json`: the wheelbarrow's own empty table (game commit 2c70942)
- `data/recipes.json:125-152`: the chest and shelf recipes
- `data/recipes.json:229-246`: the wheelbarrow recipe
- `src/stations.js:178-192`: a container made at a station starts with its bag made, searched and empty (game commit 2c70942)
- `data/loot.json:2-4`: the chest, barrel, and body tables, their rolls and weights
- `data/loot.json`: the fixed tables (`fixed`, no rolls) and the wild table; `tools/mapgen/valley.py`: the farms' haystacks placed with `loot="wild"`, the fixed chests with their own (game #210, #216, #219)
- `src/entities/character.js:139-162`: a body's grid of 6 x 6, its hands, garments, pockets, and what is lodged
- `src/interact.js:1334-1358`: searching a body; villagers have no search entry
- `data/wardrobes.json`: village wardrobes have no loot
- `src/placement.js:69-75`: what can be carried
- `data/sprites/shelf.json`: a carry flag (likewise barrel, chest, cupboard, desk, strongbox, woodpile, bookcase)
- `data/maps/valley.json`: where the chests stand
- `src/host.js:212-215`: a guest's search runs on the host and its panel opens
- `data/sprites/chicken_coop.json`, `data/loot.json:3`, `tools/mapgen/valley.py:195-198`, `tools/mapgen/valley.py:453-457`: the chicken coop, a container with the coop table (a placeholder, no eggs), at your cottage and Hollow Farm (game #338, at 232d0fb)
