---
title: Inventory
categories: [Items, Mechanics]
aliases: [Bag, Bags, The bag, Grid, Tetris grid, Floor items, Picking up, Dropping]
summary: The bag on your back is a grid of cells; every item is a rectangle in it, can be turned, and stacks with its like. There is no weight.
---

Your **inventory** is the bag on your back. You carry nothing in yourself: what you carry is in the bag's grid, in your [[Hands]], on your [[Belt]], or worn as [[Clothing]]. With no bag on your back you have no grid at all.

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

`Tab` opens the bag; `C` opens the character screen, with your worn slots and your two hands. They open and close separately, and each can be dragged by its header to where you want it (the game remembers). With no bag worn, `Tab` opens the character screen and says "No bag on your back." While you are carrying furniture, both say "Your hands are full."

An open panel does not stop the game or make you safe. The dead keep coming, and with the bag or a container open you can still fight, shoot, cast, aim a [[Use]], press `E`, `B`, and `T`, and zoom; only a click on a panel is the panel's. Only the pause menu stops play (see [[Controls]]).

In a panel:

- Drag an item to move it; drop it outside every panel to drop it on the floor.
- Shift-click or double-click sends an item across to the open container. Double-clicking an item in your own bag equips it (if it can be held) or wears it.
- Right-click for the item's menu: **Use**, the **Equip** and **Wear** entries, **Eat**, **Drink**, **Apply**, **Split**, **Store** or **Take**, **Drop** or **Drop all**, and **Rotate**, each where it applies.

An item that has been worn down shows a bar on its icon and "(N% left)" in its name.

### The one container rule

A container (any item with a grid or belt slots, so every bag and every belt) can go inside another container only while it is empty. A full bag must be worn or dropped. The menus say so: "(empty it first)", or "(empty it first, or wear it)".

### Bags

Three bags exist. Each is worn on the back and gives a grid of its own size:

- [[Burlap sack]]: {{n items.small_sack.bag.0}} × {{n items.small_sack.bag.1}}. Every new character starts with one.
- [[Rucksack]]: {{n items.rucksack.bag.0}} × {{n items.rucksack.bag.1}}. Found in chests.
- [[Developer Bag]]: {{n items.dev_bag.bag.0}} × {{n items.dev_bag.bag.1}}. A testing item.

Wearing a new bag swaps bags: the old one is dropped at your feet with everything still in it. A bag on the floor is a container you can **Open**; you can **Wear** it, and **Pick up** it while it is empty.

### Dropping and picking up

Dropped items lie on the tile where they fell. **Drop** on an item's menu drops it at your feet; **Drop all** drops the whole stack. A worn bag or belt dropped from its slot keeps everything in it.

`E` picks up the nearest thing within {{n census.constants.interact.INTERACT_RANGE tiles}}; a loose item beats a container on the same tile. Right-clicking a tile with items on it offers **Pick up** for each, and **Wear** for clothing.

A single item that can be held goes into a free hand first, then the bag, then the belt. A stack goes into the bag; if only part of it fits, the rest stays on the floor. With no room the game says "No room in your bag."; with no bag, "You have no bag."

## With friends

A guest's panels show their own character's bag, and every drag, drop, double-click, Tidy, Rotate, and menu entry is sent to the host, who carries it out for that player. A container that is not the guest's own must be within reach of the guest's character on the host. Items on the floor are the same for everyone.

## See also

- [[Hands]], [[Belt]], [[Clothing]]
- [[Containers]]
- [[Use]]
- [[Items]]

## Sources

<!-- sources at 9205ad7 -->
- `src/main.js:918-1001`, `src/input.js:61`, `src/input.js:88`: an open panel stops no click, key, or zoom; the world takes the mouse only from the canvas (game commit 57df52e)
- `src/inventory.js:43`: your grid is the bag on your back
- `src/inventory.js:27-32`: a bag's grid travels with the bag
- `src/grid.js:45-56`: the placement scan, unrotated first
- `src/ui/inventory-panel.js:117-125`: R, a right click, or the wheel turns a dragged item
- `src/ui/inventory-panel.js:676-690`: Rotate for non-square items, greyed when it will not fit
- `data/items.json`: each item's `stack`
- `src/grid.js:58-84`: stacks merge on equal fill and top up first
- `src/grid.js:155-178`: Tidy, biggest first, nothing moves on failure
- `src/main.js:735-749`: Tab and C, "No bag on your back.", "Your hands are full."
- `src/ui/inventory-panel.js:334-353`: panels dragged by the header, remembered
- `src/ui/inventory-panel.js:75-89`: double-click equips, wears, or sends across
- `src/ui/inventory-panel.js:667`: shift-click sends across
- `src/interact.js:1015-1090`: the item menu's entries
- `src/ui/inventory-panel.js:237-238`: the wear bar and "(N% left)"
- `src/inventory.js:159-173`: the one container rule and its labels
- `data/items.json:31-33`: the three bags' grids
- `src/game.js:103-116`: the starting sack
- `data/loot.json:2`: the rucksack in the chest table
- `src/interact.js:168-189`: wearing a new bag drops the old one; Wear on the floor
- `src/interact.js:323-345`: a bag on the floor opens as a container
- `src/map.js:335-362`: items lie on tiles
- `src/interact.js:1095-1147`: a dropped bag or belt keeps its contents
- `src/interact.js:42`: E's reach
- `src/interact.js:713-726`: a loose item beats a container
- `src/interact.js:192-261`: Pick up and Wear on the floor; only an empty bag is picked up
- `src/interact.js:157-162`: a free hand first; "No room in your bag.", "You have no bag."
- `src/ui/inventory-actions.js:200-358`: a guest's panel actions run on the host
- `src/ui/inventory-actions.js:276-284`: a container not the guest's own must be within reach
