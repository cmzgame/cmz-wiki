---
title: Inventory
categories: [Items, Mechanics]
aliases: [Bag, Bags, The bag, Grid, Tetris grid, Floor items, Picking up, Dropping]
summary: The bag on your back is a grid of cells; every item is a rectangle in it and can be turned, and only a few things stack. There is no weight.
---

Your **inventory** is the bag on your back. You carry nothing in yourself: what you carry is in the bag's grid, in your [[Hands]], on your [[Belt]], or equipped as [[Clothing]]. With no bag on your back you have no grid at all.

## How it works

### The grid

A bag's grid is a board of cells, and every item is a rectangle of cells (its size is on its page). An item fits wherever its rectangle finds free cells. When the game puts an item in by itself (picking up, a recipe's output, a loot roll) it scans the grid from the top row down and left to right, trying the item the right way up first and then turned.

There is no weight. A full grid is the only limit on what you carry.

### Turning

While dragging an item, press `R`, right-click, or turn the mouse wheel to turn it a quarter. An item that is not square also has **Rotate** on its menu, greyed when it would not fit turned where it lies.

### Stacking

Only a few things stack: [[Arrow|arrows]], [[Fire arrow|fire arrows]], and [[Poisoned arrow|poisoned]] and [[Strongly poisoned arrow|strongly poisoned arrows]] ({{n items.arrow.stack}} to a cell), [[Throwing knife|throwing knives]] ({{n items.throwing_knife.stack}}), [[Throwing axe|throwing axes]] ({{n items.throwing_axe.stack}}), [[Bandage|bandages]] ({{n items.bandage.stack}}), [[Feather|feathers]] ({{n items.feather.stack}}), [[Hay]] ({{n items.hay.stack}}), [[Grain]] ({{n items.grain.stack}}), [[Pemmican]] ({{n items.pemmican.stack}}), seeds ({{n items.potato_seed.stack}}), the [[Unfired vial|unfired]] and [[Clay vial|clay vials]] ({{n items.clay_vial.stack}}), and the potions and poisons ({{n items.healing_potion.stack}}; see [[Potions]]). Everything else, food and materials included, takes a cell of its own, so the bag's room is the limit on how much you carry. Each item's page says how it stacks. Adding to a grid tops up the stacks already there before starting a new one.

### Tidy

The **Tidy** button repacks the bag, the biggest items first. If the repack would not fit everything, nothing moves.

### The panels

`Tab` opens the bag; `C` opens the character screen, with your clothing slots and your two hands; an eye on a worn slot hides that item's look and keeps its use (see [[Clothing#Hiding a worn item|Clothing]]). They open and close separately, and each can be dragged by its header to where you want it (the game remembers). With no bag on your back, `Tab` opens the character screen and says "No bag on your back." While you are carrying furniture, both say "Your hands are full."

An open panel does not stop the game or make you safe. The dead keep coming, and with the bag or a container open you can still fight, shoot, cast, aim a [[Use]], press `E`, `B`, and `T`, and zoom; only a click on a panel is the panel's. Only the pause menu stops play (see [[Controls]]).

In a panel:

- Drag an item to move it; drop it outside every panel to drop it on the floor.
- Shift-click or double-click sends an item across to the open container. Double-clicking an item in your own bag equips it, into a hand if it can be held, else into its clothing slot; a potion is drunk, and a poison says it is not for drinking. Double-clicking a filled slot on the character screen or the belt runs its first entry: a hand or clothing slot unequips; a belt slot does what its key does, eating a food or drawing the item into the slot's hand, or else shows the key's line (see [[Belt]]).
- Right-click for the item's menu: **Use**, the **Equip** entries, **Eat**, **Drink**, **Apply**, **Split**, **Store** or **Take**, **Drop** or **Drop all**, and **Rotate**, each where it applies.

An item that has lost [[Durability|durability]] shows a bar on its icon, and its hover card says how much is left.

### The hover card

Every item drawn in a grid or a slot shows a card when the pointer rests on it: in your bag, on your [[Belt]], in your [[Hands]], in a worn slot of the character screen, in a chest or a bag on the ground, on a searched body, and in a station's output. It is a small, dark, rounded box with a thin light border, in the style of the item tooltips of World of Warcraft. It shows almost at once, follows the pointer, and flips up or to the left rather than leave the screen; it takes the place of the browser's slower tooltip. It hides while you drag an item, aim a [[Use]], or have a menu open.

The card says, from the top:

- The item's full **name**, in white.
- Its **kind** (Food, Tool, Material, Clothing, Bag, Seed, Bow, Shield, "Tool, weapon", and so on), then the stack's count, a fill, and the durability left as a percentage, where they apply.
- What it does, a short line each, read from the game's data and never written by hand per item: **Eat** with what it heals and how much hunger it fills; **Drink** with how full it is, or for a potion what it does and the wait between potions; **Apply** for a bandage; a weapon's damage and reach; **Equip** with the hand or hands it takes ("main or off hand" for what fits either; for a two-handed item, "both hands; on the belt, a main-hand slot or the utility slot"), or the slot it is worn on, with a bag's grid or a belt's slots; the actions a tool is for; whether it gives light; **Use** on what, and to do what (a tinderbox is Used on a campfire or a torch post, to light it); what a seed grows; what it splits into; where it is made; what it goes into; what it builds and how many it takes; and that it burns as fuel. The word **Use** is drawn in the Use mode's gold, the other menu words in bold white. A card holds at most {{n census.constants.item-info.MAX_LINES}} of these lines.
- "Right-click for actions.", in small grey letters.

An empty slot shows a card with its name and "Empty slot": a hand slot's name is its side, as "Main hand (right)" (see [[Hands#Right- or left-handed|Hands]]). On a [[Belt]] slot the card leads with what its key does there ("From this main-hand slot: drawn into your main hand."), and an empty belt slot's card says what its role is for (see [[Belt#The look and the cards|Belt]]). The card changes as the item does: eat from a stack under the pointer and the count on the card goes down.

Some items' cards do not yet say everything the item does.

### Take All

An open container's panel has a **Take All** button in its header, beside Tidy and the X: a chest, a shelf, or a barrel, a bag on the ground, a searched body, or a station's output. One click moves everything into your bag, top row first, left to right. What does not fit the bag but can go on the belt (something held in a hand, a food, a waterskin, the tinderbox) goes to a free belt slot, and what fits neither stays where it was: "Your bag is full.", or "Your bag is full: the rest stays." when some of it moved. A stack that fits in part goes in as far as it fits. A bag with things in it stays, because a bag holds a bag only when it is empty: "A bag with things in it stays: empty it first." With no bag on your back it says "You have no bag." It is never on your own bag or the character screen.

### The one container rule

A container (any item with a grid or belt slots, so every bag and every belt) can go inside another container only while it is empty. A full bag must be equipped or dropped. The menus say so: "(empty it first)", or "(empty it first, or equip it)"; dragging a full one into a grid says "Empty it first, or equip it."

### Bags

Four bags exist. Each is equipped on the back and gives a grid of its own size:

- [[Burlap sack]]: {{n items.small_sack.bag.0}} × {{n items.small_sack.bag.1}}. Every new character starts with one.
- [[Linen satchel]]: {{n items.satchel.bag.0}} × {{n items.satchel.bag.1}}. Woven at the [[Loom]] from [[Linen cloth|linen cloth]], so it can be made before the animals come.
- [[Rucksack]]: {{n items.rucksack.bag.0}} × {{n items.rucksack.bag.1}}. No container in the valley holds one.
- [[Developer Bag]]: {{n items.dev_bag.bag.0}} × {{n items.dev_bag.bag.1}}. A testing item.

Only the bag on your back is your inventory. **A bag taken off keeps what is in it:** **Unequip** on the back slot sets it down at your feet ("You set the burlap sack down."), and equipping a new bag swaps bags, the old one dropped at your feet with everything still in it. A bag on the floor stands as a container you can **Open** and take from, **Take All** included; you can **Equip** it (**Swap bags** if you have one on), and **Pick up** it once it is empty.

### Placing a rug

A [[Rugs|rug]] in your bag has **Place** on its menu, after Use: a ghost of the laid rug follows the cursor over the floor, `R` turns it, and a click lays it within reach, out of the bag. A laid rug's own menu has **Pick up**, which rolls it back into the bag, refused while furniture stands on it ("Move the chest off it first."). See [[Rugs]].

### Hanging a painting

A [[Paintings|painting]] in your bag has **Place** on its menu, after Use: a ghost of it follows the cursor onto the face of a wall, and a click hangs it within reach, out of the bag. A hung painting's own menu has **Pick up**, which takes it down into the bag. See [[Paintings]].

### Dropping and picking up

Dropped items lie on the tile where they fell. **Drop** on an item's menu drops it at your feet; **Drop all** drops the whole stack. A bag or belt dropped from its slot keeps everything in it.

`E` picks up the nearest thing within {{n census.constants.interact.INTERACT_RANGE tiles}}; a loose item beats a container on the same tile. Right-clicking a tile with items on it offers **Pick up** for each, and **Equip** for clothing (as **Equip cap**).

A single item that can be held goes into a free hand first, then the bag, then the belt. A stack goes into the bag; if only part of it fits, the rest stays on the floor. Things that do not stack lie on the floor one by one, each its own item: three apples dropped from a full bag are three items to pick up. With no room the game says "No room in your bag."; with no bag, "You have no bag."

## With friends

A guest's panels show their own character's bag, and every drag, drop, double-click, Tidy, Take All, Rotate, and menu entry is sent to the host, who carries it out for that player, by the same rules as the host's own: an item dragged to a belt, worn, or hand slot it cannot go in is refused, with "That does not go there." A container that is not the guest's own must be within reach of the guest's character on the host. Items on the floor are the same for everyone.

## See also

- [[Hands]], [[Belt]], [[Clothing]]
- [[Containers]]
- [[Use]]
- [[Items]]

## Sources

<!-- sources at 3c0a243 -->
- `src/item-info.js:268-272`, `src/item-info.js:355-393` (at 78116b1): the card's Equip line, a two-hander's belt slots; a belt slot's leading line; an empty belt slot's and a locked place's cards (game #478)
- `src/ui/inventory-panel.js:318-331`, `src/handed.js` (at 78116b1): a hand slot named by its side (game #477)
- `src/interact.js:1336-1337`, `src/interact.js:324-337`: a painting's Place, and its Pick up (game #344, at 9ac68a2)
- `src/inventory.js:184-198`, `src/ui/inventory-panel.js:289-297`: the eye on a worn slot (game #243)
- `src/main.js:1098-1183`, `src/input.js:61`, `src/input.js:88`: an open panel stops no click, key, or zoom; the world takes the mouse only from the canvas (game commit 57df52e)
- `src/inventory.js:43`: your grid is the bag on your back
- `src/inventory.js:27-32`: a bag's grid travels with the bag
- `src/grid.js:45-56`: the placement scan, unrotated first
- `src/ui/inventory-panel.js:131-139`: R, a right click, or the wheel turns a dragged item
- `src/ui/inventory-panel.js:701-715`: Rotate for non-square items, greyed when it will not fit
- `data/items.json`: each item's `stack`
- `src/grid.js:58-84`: stacks merge on equal fill and top up first
- `src/grid.js:158-181`: Tidy, biggest first, nothing moves on failure
- `src/ui/inventory-actions.js:46-83`, `src/ui/inventory-actions.js:188-194`, `src/ui/inventory-panel.js:107-112`, `src/ui/inventory-panel.js:279`: Take All on a container's panel: the grid's order into the bag, then a free belt slot that takes it; a stack in part; a bag with things in it stays; its words (game #251)
- `src/interact.js:1307-1308`, `src/rugs.js:107-130`: a rug's Place, and its Pick up refused under furniture (game #339, at 499e344)
- `src/ui/inventory-actions.js:300-303`, `src/ui/inventory-actions.js:370-379`: a guest's Take All by the container's address, run on the host with the same reach, a body redrawn, the chest's grid sent
- `src/main.js:909-923`: Tab and C, "No bag on your back.", "Your hands are full."
- `src/ui/inventory-panel.js:359-378`: panels dragged by the header, remembered
- `src/ui/inventory-panel.js:75-90`, `src/ui/inventory-actions.js:213-229`, `src/interact.js:1321-1333`: double-click equips from the bag, runs a slot's Equip or Unequip, or a belt slot's Eat or Drink (game #186), or sends across
- `src/ui/inventory-panel.js:692`: shift-click sends across
- `src/interact.js:1212-1289`: the item menu's entries, Equip for garments and bags (game commit 9a450f2)
- `src/ui/inventory-panel.js:257-258`: the durability bar (the code's `wear`) and "(N% left)"
- `src/item-info.js:1-127`, `src/ui/hover-card.js`, `src/ui/inventory-panel.js:93-98`, `src/ui/inventory-panel.js:428-456`, `style.css:521-542`, `data/tuning.json`: `hoverCard`: the hover card over every item in a grid or slot and an empty slot's name; its look, its lines from the data, Use in gold, the count, fill, and wear; following the pointer, kept on screen, hidden while dragging, aiming, or in a menu; redrawn as the item changes; the browser's title tooltip gone (game #313, at 8af4eed)
- `src/inventory.js:199-213`, `src/interact.js:244`, `src/ui/inventory-actions.js:169`: the one container rule and its labels, "or equip it" (game commit 9a450f2)
- `data/items.json:34-36`: the three bags' grids
- `data/kit.json:3`: the starting sack
- `data/loot.json:2`: the rucksack in the chest table
- `src/interact.js:176-200`: equipping a new bag drops the old one; Equip and Swap bags on the floor (game commit 9a450f2)
- `src/interact.js:334-356`: a bag on the floor opens as a container
- `src/map.js:461-492`: items lie on tiles
- `src/interact.js:1273-1289`, `src/interact.js:1295-1355`: a dropped bag or belt keeps its contents
- `src/interact.js:52`: E's reach
- `src/interact.js:891-904`: a loose item beats a container
- `src/interact.js:202-268`: Pick up and Equip on the floor; only an empty bag is picked up (game commit 9a450f2)
- `src/interact.js:167-172`: a free hand first; "No room in your bag.", "You have no bag."
- `src/ui/inventory-actions.js:254-436`: a guest's panel actions run on the host
- `src/ui/inventory-actions.js:102-116`, `src/ui/inventory-actions.js:387-395`: a guest's slot command meets the host's `canPlace`; "That does not go there." (game #226)
- `src/ui/inventory-actions.js:338-346`: a container not the guest's own must be within reach
- `data/items.json`: only arrows, fire arrows, throwing knives and axes, bandages, and seeds stack (game #399, at ce21ffc)
- `src/map.js` `dropItem`: what does not stack is laid on the floor as single entries (game #399, at ce21ffc)
- `src/interact.js` `slotMenu`, `itemActions`, `src/inventory.js` `ensureBag`, `src/map.js` `dropItem`: a bag's grid rides on its entry; Unequip sets it down; on the floor Open, Equip or Swap bags, Pick up once empty; the linen satchel (game #403, at 6e5b20a)
- `data/items.json:136-142`, `src/ui/inventory-actions.js:249-256`, `src/item-info.js:248-256`: the vials and potions stack; a double-click drinks a potion in your own bag; the potions' Drink lines (game #491, at 0fa02e5)
