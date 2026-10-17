---
title: Inventory
categories: [Items, Mechanics]
aliases: [Bag, Bags, The bag, Grid, Tetris grid, Floor items, Picking up, Dropping]
summary: The bag on your back is a grid of cells; every item is a rectangle in it, can be turned, and stacks with its like. There is no weight.
---

Your **inventory** is the bag on your back. You carry nothing in yourself: what you carry is in the bag's grid, in your [[Hands]], on your [[Belt]], or equipped as [[Clothing]]. With no bag on your back you have no grid at all.

## How it works

### The grid

A bag's grid is a board of cells, and every item is a rectangle of cells (its size is on its page). An item fits wherever its rectangle finds free cells. When the game puts an item in by itself (picking up, a recipe's output, a loot roll) it scans the grid from the top row down and left to right, trying the item the right way up first and then turned.

There is no weight. A full grid is the only limit on what you carry.

### Turning

While dragging an item, press `R`, right-click, or turn the mouse wheel to turn it a quarter. An item that is not square also has **Rotate** on its menu, greyed when it would not fit turned where it lies.

### Stacking

Some items stack: apples, arrows, bandages, charcoal, and others (the most a stack holds is on each item's page as "Stacks to"). Adding to a grid tops up the stacks already there before starting a new one. A [[Waterskin]] stacks only with one holding the same amount of water.

### Tidy

The **Tidy** button repacks the bag, the biggest items first. If the repack would not fit everything, nothing moves.

### The panels

`Tab` opens the bag; `C` opens the character screen, with your clothing slots and your two hands. They open and close separately, and each can be dragged by its header to where you want it (the game remembers). With no bag on your back, `Tab` opens the character screen and says "No bag on your back." While you are carrying furniture, both say "Your hands are full."

An open panel does not stop the game or make you safe. The dead keep coming, and with the bag or a container open you can still fight, shoot, cast, aim a [[Use]], press `E`, `B`, and `T`, and zoom; only a click on a panel is the panel's. Only the pause menu stops play (see [[Controls]]).

In a panel:

- Drag an item to move it; drop it outside every panel to drop it on the floor.
- Shift-click or double-click sends an item across to the open container. Double-clicking an item in your own bag equips it, into a hand if it can be held, else into its clothing slot. Double-clicking a filled slot on the character screen or the belt runs its first entry: a hand or clothing slot unequips; a belt slot eats a food, drinks from a waterskin, or else equips into a hand.
- Right-click for the item's menu: **Use**, the **Equip** entries, **Eat**, **Drink**, **Apply**, **Split**, **Store** or **Take**, **Drop** or **Drop all**, and **Rotate**, each where it applies.

An item that has lost [[Durability|durability]] shows a bar on its icon and "(N% left)" in its name.

### The one container rule

A container (any item with a grid or belt slots, so every bag and every belt) can go inside another container only while it is empty. A full bag must be equipped or dropped. The menus say so: "(empty it first)", or "(empty it first, or equip it)"; dragging a full one into a grid says "Empty it first, or equip it."

### Bags

Three bags exist. Each is equipped on the back and gives a grid of its own size:

- [[Burlap sack]]: {{n items.small_sack.bag.0}} × {{n items.small_sack.bag.1}}. Every new character starts with one.
- [[Rucksack]]: {{n items.rucksack.bag.0}} × {{n items.rucksack.bag.1}}. Found in chests.
- [[Developer Bag]]: {{n items.dev_bag.bag.0}} × {{n items.dev_bag.bag.1}}. A testing item.

Equipping a new bag swaps bags: the old one is dropped at your feet with everything still in it. A bag on the floor is a container you can **Open**; you can **Equip** it (**Swap bags** if you have one on), and **Pick up** it while it is empty.

### Dropping and picking up

Dropped items lie on the tile where they fell. **Drop** on an item's menu drops it at your feet; **Drop all** drops the whole stack. A bag or belt dropped from its slot keeps everything in it.

`E` picks up the nearest thing within {{n census.constants.interact.INTERACT_RANGE tiles}}; a loose item beats a container on the same tile. Right-clicking a tile with items on it offers **Pick up** for each, and **Equip** for clothing (as **Equip cap**).

A single item that can be held goes into a free hand first, then the bag, then the belt. A stack goes into the bag; if only part of it fits, the rest stays on the floor. With no room the game says "No room in your bag."; with no bag, "You have no bag."

## With friends

A guest's panels show their own character's bag, and every drag, drop, double-click, Tidy, Rotate, and menu entry is sent to the host, who carries it out for that player. A container that is not the guest's own must be within reach of the guest's character on the host. Items on the floor are the same for everyone.

## See also

- [[Hands]], [[Belt]], [[Clothing]]
- [[Containers]]
- [[Use]]
- [[Items]]

## Sources

<!-- sources at 0e765f7 -->
- `src/main.js:1079-1164`, `src/input.js:61`, `src/input.js:88`: an open panel stops no click, key, or zoom; the world takes the mouse only from the canvas (game commit 57df52e)
- `src/inventory.js:43`: your grid is the bag on your back
- `src/inventory.js:27-32`: a bag's grid travels with the bag
- `src/grid.js:45-56`: the placement scan, unrotated first
- `src/ui/inventory-panel.js:117-125`: R, a right click, or the wheel turns a dragged item
- `src/ui/inventory-panel.js:682-696`: Rotate for non-square items, greyed when it will not fit
- `data/items.json`: each item's `stack`
- `src/grid.js:58-84`: stacks merge on equal fill and top up first
- `src/grid.js:158-181`: Tidy, biggest first, nothing moves on failure
- `src/main.js:893-907`: Tab and C, "No bag on your back.", "Your hands are full."
- `src/ui/inventory-panel.js:340-359`: panels dragged by the header, remembered
- `src/ui/inventory-panel.js:75-89`, `src/ui/inventory-actions.js:166-182`, `src/interact.js:1316-1328`: double-click equips from the bag, runs a slot's Equip or Unequip, or a belt slot's Eat or Drink (game #186), or sends across
- `src/ui/inventory-panel.js:673`: shift-click sends across
- `src/interact.js:1207-1284`: the item menu's entries, Equip for garments and bags (game commit 9a450f2)
- `src/ui/inventory-panel.js:243-244`: the durability bar (the code's `wear`) and "(N% left)"
- `src/inventory.js:185-199`, `src/interact.js:243`, `src/ui/inventory-actions.js:129`: the one container rule and its labels, "or equip it" (game commit 9a450f2)
- `data/items.json:34-36`: the three bags' grids
- `data/kit.json:3`: the starting sack
- `data/loot.json:2`: the rucksack in the chest table
- `src/interact.js:175-199`: equipping a new bag drops the old one; Equip and Swap bags on the floor (game commit 9a450f2)
- `src/interact.js:333-355`: a bag on the floor opens as a container
- `src/map.js:461-492`: items lie on tiles
- `src/interact.js:1268-1284`, `src/interact.js:1290-1350`: a dropped bag or belt keeps its contents
- `src/interact.js:51`: E's reach
- `src/interact.js:888-901`: a loose item beats a container
- `src/interact.js:201-267`: Pick up and Equip on the floor; only an empty bag is picked up (game commit 9a450f2)
- `src/interact.js:166-171`: a free hand first; "No room in your bag.", "You have no bag."
- `src/ui/inventory-actions.js:203-366`: a guest's panel actions run on the host
- `src/ui/inventory-actions.js:280-288`: a container not the guest's own must be within reach
