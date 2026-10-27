---
title: Rugs
categories: [Items, Decor, Mechanics]
aliases: [Rug, Laying a rug, Place a rug, Laid rug]
summary: A rug is an item carried rolled up in the bag; Place lays it flat on the floor, under the furniture you can carry, and Pick up rolls it back.
---

A **rug** is an item you carry rolled up in your bag and lay on the floor where you like. There are two, the [[Bearskin rug]] and the [[Regal red rug]]. Laid, a rug lies flat under everything: you walk over it, things dropped on it lie on it, and the furniture you can carry may stand on it. Picked up again, it rolls back into the bag. Nothing makes a rug yet, and nothing in the valley holds one; both are in the [[Developer chest]], and so they can be added to a new world's **Extra starting items** (see [[World rules]]).

## How it works

### Rolled up

In the bag a rug is rolled, {{n items.rug_bearskin.size.0}} by {{n items.rug_bearskin.size.1}} cells. Its kind is Decor, and its [[Inventory#The hover card|hover card]] says "**Place**: lay on the floor."

### Placing it

A rug in your own bag has **Place** on its right-click menu, after **Use**. Place starts a ghost of the laid rug over the floor, {{n sprites.rug_bearskin.facingFootprint.y.0}} by {{n sprites.rug_bearskin.facingFootprint.y.1}} tiles, centred on the cursor, with "Click to lay the rug · R turn · Esc cancel" beside it. `R` turns it, so it runs the other way across the floor. The ghost is green where the rug can lie and red where it cannot, with the reason in place of that line:

- **Too far**: the nearest tile of the rug is more than {{n census.constants.rugs.REACH tiles}} from you.
- **There is a wall in the way.**: a wall, a shut door, or closed shutters stand between you and the rug.
- **No room**: a tile has no ground to lie on, such as water.
- **A rug is already there**: rugs do not overlap.
- **There is a ... in the way**: something on a tile that cannot be picked up and carried, which it names ("There is a tree in the way"): a tree, a rock, a crop, the anvil, the cart. A rug lies only under what can be lifted off it again (see [[Carrying furniture#What can be carried|what can be carried]]).
- **A wall is in the way**: a wall runs between two of the rug's own tiles. A rug lies within a room or on open ground, never across a wall.

Furniture that can be carried, items on the floor, and bodies do not stop it. A click on a green ghost lays the rug and it leaves your bag; a click on a red one says why. `Escape` or a right click cancels, and the rug stays in the bag. The ghost goes away if the rug leaves your bag some other way or your hands fill.

### Laid

A laid rug is drawn on the ground under everything that stands there: a chair, a table, a chest, an item, a body, or a wall on it is drawn over it. It is lit and fogged like the floor, so it is dark at night. It never blocks a step or a line of sight. A piece of furniture can be set down on it (see [[Placement]]), and things dropped on it lie on it. [[Settings|Object Highlight]] outlines it under the pointer. A wall cannot be built through a laid rug, only along its outer edge (see [[Building]]).

### Picking it up

Right-click a laid rug for **Pick up bearskin rug** (or the regal red rug), beside **Walk here**; a villager standing on it comes first in the menu. It rolls back into your bag, or, with the bag full, it lies at your feet: "Your bag is full: the rug is at your feet." Items lying on it stay where they are.

While a piece of furniture stands on it the rug cannot come up, and it names what is in the way: "Move the chest off it first." Carry the furniture off, then pick the rug up.

`E` picks a rug up only when nothing else is in reach: a rug is often under your feet, and `E` would otherwise take it before the chest you meant.

## Numbers

- Bag size, rolled: {{n items.rug_bearskin.size.0}} by {{n items.rug_bearskin.size.1}}.
- Laid: {{n sprites.rug_bearskin.facingFootprint.y.0}} by {{n sprites.rug_bearskin.facingFootprint.y.1}} tiles, or {{n sprites.rug_bearskin.facingFootprint.x.0}} by {{n sprites.rug_bearskin.facingFootprint.x.1}} turned.
- Reach to lay or pick up: {{n census.constants.rugs.REACH tiles}}.

## With friends

A guest lays and picks up rugs as the host does. Place only starts the ghost on the guest's own screen; the click sends where and which way to the host, who runs the same reach and fit and tells the guest why if it refuses. A guest's Pick up is sent by the rug's place on the map and run on the host. A laid rug is saved with the world and sent to everyone with the ground it lies on. If two players pick up the same rug at once, only the first gets it.

## See also

- [[Bearskin rug]], [[Regal red rug]]
- [[Inventory]]
- [[Placement]]
- [[Carrying furniture]]

## Sources

<!-- sources at 499e344 -->
- `data/items.json:73-74`: the two rugs, kind decor, 1 by 4 in the bag, each naming its laid sprite; no recipe or loot table of the valley holds one (game #339, at 499e344)
- `data/loot.json:19`: both in the dev kit (game #339, at 499e344)
- `data/sprites/rug_bearskin.json`, `data/sprites/rug_regal_red.json`: the laid rug, 2 by 3 along y, 3 by 2 along x, not carried, a rug (game #339, at 499e344)
- `src/item-info.js:97`: the hover card's Place line (game #339, at 499e344)
- `src/interact.js:1307-1308`: Place on a rug in your own bag (game #339, at 499e344)
- `src/placement.js:225-240`, `src/placement.js:301-306`, `src/placement.js:480-491`, `src/placement.js:525-538`, `src/placement.js:698-700`: the ghost centred on the cursor, R, the click, Escape, the mode ended when the rug leaves the bag or the hands fill, its label (game #339, at 499e344)
- `src/rugs.js:15`, `src/rugs.js:34-63`, `src/reach.js:8-9`, `src/placement.js:690-701`: the reach and the line, and each refusal (game #339, at 499e344)
- `src/rugs.js:74-96`: laid on the host, the item out of the bag (game #339, at 499e344)
- `src/map.js:506-509`, `src/render/rugs.js`, `src/render/scene.js:164`: a rug in the tile's own slot, drawn after the ground and before everything that stands, outlined by Object Highlight (game #339, at 499e344)
- `src/map.js:624-625`: no wall through a laid rug (game #339, at 499e344)
- `src/interact.js:300-316`, `src/interact.js:938-947`, `src/rugs.js:98-130`: Pick up, after the characters' entries; refused under furniture; at your feet with the bag full; the second pick-up of one rug gets nothing (game #339, at 499e344)
- `src/interact.js:998-1010`: E takes a rug only when nothing else is in reach (game #339, at 499e344)
- `src/placement.js:584-586`, `src/ui/inventory-actions.js:270`, `src/map.js:1055`: a guest's Place as a command run on the host, Place local to the screen, the rug in the chunk's record (game #339, at 499e344)

{{navbox items}}
