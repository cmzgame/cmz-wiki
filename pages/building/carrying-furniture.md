---
title: Carrying furniture
categories: [Building, Mechanics]
aliases: [Carrying, Carry, Pick up furniture, Moving furniture]
summary: Picking up furniture with both hands, what you can and cannot do while carrying it, and what can be carried.
---

**Carrying furniture** lets you move chests, beds, tables, and the like. You pick a piece up with both hands empty, carry it over your head, and set it down somewhere else with the [[Placement|ghost]].

## How it works

### Picking up

With both hands empty, right-click a piece of furniture and choose "Pick up" followed by its name. You hold it over your head. A container keeps everything in it while carried.

### While carrying

While you carry something you can only walk. You cannot:

- sprint, swing, draw a bow, or block
- climb through a window
- open the bag or the character screen
- build, or use the removal tool ("Your hands are full.")

The right-click menu offers only Put down and Walk here.

### Putting down

A left click on a green ghost puts the piece down, and R turns it first. E puts it on the tile in front of you. Escape does not drop it. See [[Placement]].

If you die while carrying, the piece is set down on a free tile close by, if there is one.

### What can be carried

A piece of furniture's own art data says whether it can be carried. These can: the barrel, bed, bench, bookcase, chair, chest, cupboard, desk, lectern, pew, pumpkins, shelf, spinning wheel, strongbox, table, and woodpile.

These cannot: the [[Workbench]] and every other station, the wheelbarrow, the cart, the coffin, the counter, the stall, crops, mushrooms, rocks, trees, the well, torch posts, and fires that light a room or burn fuel.

A piece that can be carried can also be removed with the removal tool (see [[Building]]).

### Furniture you make

Some [[Workbench]] recipes make furniture rather than an item. The piece appears on a free tile near the station. It can be carried only if its kind can: a crafted chest can, a crafted workbench cannot.

## Numbers

- Reach to put down: {{n census.constants.placement.PLACE_REACH tiles}}.

## With friends

The piece you carry is part of your character, so a save and a join keep it, and everyone sees it over your head.

## See also

- [[Placement]]
- [[Building]]
- [[Workbench]]
- [[Inventory]]

## Sources

<!-- sources at 9205ad7 -->
- `src/interact.js:259-312`: Pick up with both hands empty, and the carry menu (Put down, Walk here)
- `src/entities/character.js:70-71`: the carried prop, contents and all, on the character
- `src/entities/player.js:328`: no sprint, swing, bow, or block while carrying
- `src/entities/player.js:74-79`: no climbing while carrying
- `src/main.js:698-736`: no bag, character screen, building, or removal; "Your hands are full."
- `src/placement.js:270-282`, `src/placement.js:253-268`: put down with a click, R turns it
- `src/placement.js:116-119`, `src/interact.js:292-311`: E sets it on the tile in front
- `src/game.js:276-285`: on death, set down on a free tile within 2
- `src/placement.js:69-75`: the carry rule, the sprite's flag first, then trees, the well, and fires
- `data/sprites/*.json`: each sprite's `carry` flag
- `src/placement.js:320-363`: anything carryable can be removed
- `src/stations.js:173-192`: a prop recipe set on a free tile near the station
- `data/sprites/chest.json`, `data/sprites/workbench.json`: the chest carryable, the workbench not
- `src/placement.js:24`: the reach to put down
- `src/render/entities.js:233`: the carried piece drawn over the head
