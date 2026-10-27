---
title: Containers
categories: [Items, Mechanics]
aliases: [Container, Chest, Chests, Barrel, Barrels, Searching, Search]
summary: Chests, barrels, and other furniture hold items; each is searched once, which rolls its loot, and after that it simply opens.
numbersOk: true
---

<!-- typed: a body's grid size (src/entities/character.js) is neither data nor a named constant -->

A **container** is a piece of furniture that holds items in a grid: chests, barrels, shelves, cupboards, desks, and the rest. Bags and belts are containers too, but carried ones (see [[Inventory]]). A container in the world starts unsearched; searching it fills it from its loot table. The valley's chests, shelves, and cupboards are drawn with their backs to a wall and their doors or open fronts to the room.

## How it works

### Searching

Right-click a container, or press `E` beside it, and choose **Search**; it must be in reach with a clear line, never through a wall (see [[Rooms#Nothing in reach through a wall|Rooms]]). A bar fills over {{n census.constants.interact.SEARCH_TIME}} second, and then the container's loot table is rolled into its grid. What does not fit is never made. After that first search the container just **Open**s, and holds whatever was left in it.

An open container's grid shows beside your bag. It stays open while you are within {{n tuning.world.containerCloseDist}} tiles with a clear line to it, and closes when you walk away or a wall, a shut door, or shutters come between. From an open container you can eat, drink, equip clothing and bags, and apply bandages directly; to equip something into a hand, take it into your bag first. **Take All** in the panel's header takes everything that fits (see [[Inventory#Take All|Inventory]]). **Take** on an item's menu moves it to your bag; **Store in** on an item in your bag moves it across. Shift-click and double-click send items across too.

A container can hold a bag or a belt only while that bag or belt is empty (the one container rule; see [[Inventory]]).

### Containers inside containers

A bag or a belt lying in an open chest or on a searched body, the satchel, the rucksack, a sack, a rope or a leather belt, has **Open** on its menu there ("Open leather belt"). It opens as a panel of its own, with **Take All**, so what is in it can be had without taking it out or wearing it. Opened inside another container it is take-only: things come out, by a drag, a Take, or Take All, and nothing goes in. A belt's slots open as one row, each slot in its own place. The inner panel closes with the container that holds it, and when someone takes the bag or belt away. Only one level opens: nothing in an inner panel offers Open. A bag or a belt lying on the ground opens the same way from its own menu (see [[Inventory#Bags|Inventory]] and [[Belt#The belt as a container|Belt]]).

### Which furniture rolls which table

Each kind of container has a table of its own, and the odds of every one are on [[Drop tables]], with what the valley's containers hold all told.

- **Chests** roll the chest table: a little food, cloth, a rag, a plank or a stick, and often nothing.
- **Barrels** roll the barrel table: one or two [[Apple|apples]] or a [[Waterskin]], and empty half the time.
- **Shelves and cupboards** roll a pantry's table: bread, cheese, [[Garlic]], an apple, a [[Potato]], cloth, a rag.
- **Woodpiles** roll [[Log|logs]], [[Stick|sticks]], and planks.
- **Carts and stalls** roll goods for market: [[Flax]], planks, [[Stone]], cloth, and seed.
- **Coffins** roll a rag, or rarely a [[Dirk]], and mostly nothing.
- **The inn's counter** rolls bread, cheese, and apples.
- **Haystacks**, at [[Hollow Farm]] and [[Long Acre]], roll a stick.
- **Chicken coops**, at [[Your cottage]] and [[Hollow Farm]], roll nothing: a coop holds only the [[Egg|eggs]] and [[Feather|feathers]] its hens lay into it (see [[Chicken coop]] and [[Keeping]]). Its grid is {{n loot.coop.grid.0}} × {{n loot.coop.grid.1}}, and its menu reads **Search chicken coop**, then **Open chicken coop**.
- **Feeding troughs**, in the farms' pens and by Hollow Farm's coop, roll nothing and open at once: a [[Feeding trough]] takes only feed, and starts empty.
- **Bookcases, desks, and strongboxes** roll nothing yet: books, gems, and trinkets are to come.
- **Wheelbarrows** have their own table, which rolls nothing: an empty grid of {{n loot.wheelbarrow.grid.0}} × {{n loot.wheelbarrow.grid.1}}.
- **Some containers hold a fixed set**, the same in every world, and roll nothing: the chest in [[Your cottage]], the joiner's, the weaver's, the smithy's, and the miners' and quarry huts' chests, [[The toll house]]'s chest (an [[Arming sword]] and a [[Flanged mace]]), the barn's tool rack, the two granaries, the ore cart, the stone stacks, the charcoal sacks, and [[Hollow Farm]]'s **scarecrow**, which wears the [[Onion-head Hat]]. Each is on its place's page.

**Gear is placed once.** No rolled table holds a weapon, a tool, a bag, a hat, or a belt, but for a coffin's rare dirk: the valley's found sword and mace are in the toll house, its one leather belt and pair of work gloves on the barn's rack, its one Onion-head Hat on the scarecrow, and no container holds a [[Rucksack]].

Furniture you make is different: a chest, a shelf, or a wheelbarrow made at the [[Workbench]] appears already searched and empty, so nothing is ever rolled into it. It is set down on the nearest free tiles a body could walk to from the bench, and where there is no room for it (a counter or a cart needs more than one tile) the recipe is refused before anything is spent (see [[Crafting#The output|Crafting]]).

Each table is rolled a number of times, and each roll picks one row by its weight. "Nothing" is a row like any other.

### The dead

A body can be searched in the same way: the first search rolls the body's pockets and lays out everything it had on a grid of 6 × 6, what it held, what it wore, its pockets, and anything lodged in it. Taking a garment off the grid takes it off the body. Villagers' bodies cannot be searched. The dead's pockets roll {{n loot.body.rolls.0}} to {{n loot.body.rolls.1}} times:

{{loot-table body}}

### Carrying a container

A chest, a barrel, a shelf, a cupboard, a desk, a strongbox, a woodpile, or a bookcase can be picked up with both hands empty and carried; it keeps its contents. See [[Placement]]. One a player made can also be taken apart for half its materials, but only once it is empty: "Empty it first." (see [[Building#Taking apart|Building]]). The [[Workbench]] makes the chest, shelf, cupboard, desk, bookcase, counter, cart, stall, barrel, and wheelbarrow, and the [[Anvil]] the strongbox; each made one starts empty and already searched, so nothing is rolled into it.

{{where chest}}

## With friends

A search chosen by a guest is carried out by the host, and so is an Open of a bag or a belt inside a container, named by the item and the container that holds it. What a container holds is part of the world, so every player sees the same contents and the same items gone once someone takes them.

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
- `src/interact.js:164-190`, `src/interact.js:200-255`, `src/interact.js:1743-1752`, `src/inventory.js:60-114` (at d7cf736): Open on a bag or a belt in a chest or on a body, a take-only view, a belt's slots by their index, one level only; the address a guest sends (game #508)
- `src/interact.js:1016-1091`: eat, drink, equip clothing, apply from a container; a hand's Equip only from your bag; Take and Store in (game commit 9a450f2)
- `src/ui/inventory-panel.js:75-89`: double-click sends across
- `src/ui/inventory-panel.js:667`: shift-click sends across, with the container rule
- `src/inventory.js:159-173`: the one container rule
- `data/sprites/*.json` `container.loot`: each kind of container's own table: shelves and cupboards the pantry, woodpiles, carts and stalls the market, bookcases and desks the study, strongboxes, coffins, the inn's counter, haystacks the wild table, the scarecrow (game #399, at ce21ffc)
- `data/loot.json`, `tools/mapgen/valley.py`: no gear in a rolled table but the coffin's dirk; the toll house's chest a sword and a mace; the barn rack's belt and gloves; the scarecrow's hat (game #399, at ce21ffc)
- `data/sprites/wheelbarrow.json`, `data/loot.json`: the wheelbarrow's own empty table (game commit 2c70942)
- `data/recipes.json:125-152`: the chest and shelf recipes
- `data/recipes.json:229-246`: the wheelbarrow recipe
- `src/stations.js:178-192`: a container made at a station starts with its bag made, searched and empty (game commit 2c70942)
- `data/loot.json`: the chest, barrel, and body tables, their rolls and weights
- `data/loot.json`: the fixed tables (`fixed`, no rolls) and the wild table; `tools/mapgen/valley.py`: the farms' haystacks placed with `loot="wild"`, the fixed chests with their own (game #210, #216, #219)
- `src/entities/character.js:139-162`: a body's grid of 6 x 6, its hands, garments, pockets, and what is lodged
- `src/interact.js:1334-1358`: searching a body; villagers have no search entry
- `data/wardrobes.json`: village wardrobes have no loot
- `src/placement.js:69-75`: what can be carried
- `tools/mapgen/mapgen.py:23-30`, `data/sprites/cupboard.json`: a drawn chest, shelf, or cupboard faces away from its wall, `y` against a west wall and `x` its mirror against a north one (art rounds 4 and 5; game #519, at ece297c)
- `data/sprites/shelf.json`: a carry flag (likewise barrel, chest, cupboard, desk, strongbox, woodpile, bookcase)
- `data/maps/valley.json`: where the chests stand
- `src/host.js:212-215`: a guest's search runs on the host and its panel opens
- `data/sprites/chicken_coop.json`, `data/loot.json:3`, `tools/mapgen/valley.py:200`, `tools/mapgen/valley.py:462`: the chicken coop, a container whose table rolls nothing since game #460, at your cottage and Hollow Farm (lines at 393acaf)
- `data/sprites/feed_trough.json`, `data/loot.json:4`, `src/interact.js:401-436`: the feeding trough, never rolled, opened at once, taking feed alone (game #460, at 6e3ab37) (game #338, at 232d0fb)
- `src/placement.js:538-544`: a made container taken apart only when empty, "Empty it first." (game #413, at 31d330a)
- `data/recipes.json`: the made containers: the workbench's cupboard, desk, bookcase, counter, cart, stall, barrel, the anvil's strongbox (game #428, at 0ce54cf)
- `src/stations.js:208-275`: a made container set down on free tiles near its station, refused with no room (game #466, at d625844)
