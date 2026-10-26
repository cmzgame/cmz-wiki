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
- open the bag or the character screen
- build, or take anything apart ("Your hands are full.")

The right-click menu offers only Put down and Walk here.

### Putting down

A left click on a green ghost puts the piece down, and R turns it first. E puts it on the tile in front of you. Escape does not drop it. Nothing can be put down on either tile of a door or a gate. See [[Placement]].

If you die while carrying, the piece is set down on a free tile close by, if there is one, by the same rules.

### What can be carried

A piece of furniture's own art data says whether it can be carried. These can: the barrel, bed, bench, bookcase, chair, chest, cupboard, desk, lectern, pew, pumpkins, shelf, strongbox, table, wheelbarrow, and woodpile.

These cannot: the [[Workbench]] and every other station (the [[Spinning wheel]], the [[Smoking rack]], and the [[Tanning vat]] among them), the cart, the coffin, the counter, the stall, crops, mushrooms, rocks, trees, the well, torch posts, and fires that light a room or burn fuel.

Carrying and taking apart are separate. **Pick up** keeps a thing whole, with what it holds; **Take apart** destroys a thing a player made for half its materials, and only once it is empty (see [[Building#Taking apart|Building]]). The village's own furniture is carried, never taken apart.

### Furniture you make

Some [[Workbench]] recipes make furniture rather than an item. The piece appears on the nearest free tiles a body could walk to from the station, never past a wall or a shut door, and never beside a door; with no such spot it is not made (see [[Crafting#The output|Crafting]]). It can be carried only if its kind can: a crafted chest can, a crafted workbench cannot.

Under the world rule **Village stations** the village's forge, anvil, oven, millstones, and dye vats can be carried, but a station is never picked up while it is still making something: its entry reads "Pick up oven (it is still making something)".

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
- `src/main.js:698-736`: no bag, character screen, building, or removal; "Your hands are full."
- `src/placement.js:270-282`, `src/placement.js:253-268`: put down with a click, R turns it
- `src/placement.js:116-119`, `src/interact.js:292-311`: E sets it on the tile in front
- `src/game.js:276-285`: on death, set down on a free tile within 2
- `src/placement.js:95-115`, `src/game.js:343-350`: never on a door's tiles, on death too (game commit 82106de)
- `src/placement.js:69-75`: the carry rule, the sprite's flag first, then trees, the well, and fires
- `data/sprites/*.json`: each sprite's `carry` flag
- `src/placement.js:316-336`: removal takes only what players made, carryable or not (game commit 2c70942)
- `data/sprites/wheelbarrow.json`: the wheelbarrow's `carry` flag (game commit 2c70942)
- `src/stations.js:173-192`: a prop recipe set on a free tile near the station
- `src/stations.js:178-181`: never on a door's tiles (game commit 82106de)
- `data/sprites/chest.json`, `data/sprites/workbench.json`: the chest carryable, the workbench not
- `src/placement.js:24`: the reach to put down
- `src/render/entities.js:233`: the carried piece drawn over the head
- `src/placement.js:518-576`, `src/interact.js:290-310`: Take apart only what a player made, empty, for half its materials; Pick up keeps it whole (game #413, at 31d330a)
- `data/sprites/spinningwheel.json`, `data/sprites/smoking_rack.json`, `data/sprites/tanning_vat.json`: the spinning wheel a station and no longer carried; the rack and the vat not carried (game #462, at d625844)
- `src/interact.js:320-338`: no station picked up while its queue runs (game #462, at d625844)
- `src/stations.js:208-259`: a made prop on the nearest free tiles a body could walk to (game #466, at d625844)
