---
title: Building
categories: [Building, Mechanics]
aliases: [Build, Build palette, Build mode, Removal, Removal tool, Remove]
summary: Building log walls, doors, and windows from the palette on N, and removing furniture and what you built with X.
---

**Building** is how you put up walls, doors, and windows of your own. You open the build palette with N, pick a piece, and lay it on the edge of a tile; a timed bar runs, and the materials are spent when it finishes. The removal tool on X takes away furniture and anything you built. Everything you build is a [[Walls|wall]] on a tile's edge, made of logs.

## How it works

### The palette

N opens a short list on the left of the screen. It has three pieces and a Remove row:

- **Log wall**, costing {{n build.wall.cost.log}} [[Log]], built in {{n build.wall.seconds seconds}}.
- **Door**, costing {{n build.door.cost.plank}} [[Plank|planks]], built in {{n build.door.seconds seconds}}.
- **Window**, costing {{n build.window.cost.plank}} planks, built in {{n build.window.seconds seconds}}.

A piece you cannot afford is greyed. Every right-click menu also ends in a "Build" entry, which opens the same list. A door or a window is built in the log material. A log splits into {{n items.log.splitsInto.count}} planks from its item menu, with no tool.

N does nothing while you are [[Carrying furniture|carrying furniture]] ("Your hands are full.") or while the bag is open.

### Laying a piece

Once a piece is picked, a ghost of it follows the cursor, snapped to the nearest edge of the tile under it. The ghost is green where the piece can go and red where it cannot, with the reason:

- **Too far**: the edge's midpoint is more than {{n census.constants.placement.BUILD_REACH tiles}} from you.
- **Already a wall**: the edge already holds a wall, door, or window. This includes a doorway the dead have broken open.
- **No room**: a single solid piece of furniture spans both tiles of the edge. A door also needs both tiles walkable, so it cannot stand in water or against a solid prop. A wall or a window may be built over water or beside furniture.
- **Step back**: you are standing closer than {{n census.constants.placement.EDGE_CLEARANCE tiles}} to the edge.
- **Need**: you lack the materials, and it names them.

A click on a green ghost starts the build. A bar runs for the piece's time. Nothing is spent until the bar finishes, and every rule is checked again then. Moving cancels the build, as does going a little beyond the build reach. Only one build runs at a time.

Build mode stays on after a piece is finished, so a run of wall can be laid click by click. N or Escape leaves it.

When a wall goes up or comes down, the [[Rooms|rooms]] on either side of it are worked out again, so closing the last gap in a ring of walls makes a room.

### Removal

X, or the palette's Remove row, turns on the removal tool. The front-most removable thing under the cursor lights up green, or red with "Too far" when it is more than {{n census.constants.placement.REMOVE_REACH tiles}} away. A click destroys it at once, and the tool stays on. X, N, or Escape leaves it.

Two kinds of thing can be removed:

- any piece of furniture that can be carried (see [[Carrying furniture]]), including the village's own, not only what you placed
- any wall, door, or window you built

Walls that are part of the map, trees, the well, fires, torch posts, and anything that cannot be carried never light up.

Nothing is refunded. A removed container spills what it held onto its tile, but only if it was ever opened: a chest nobody has searched has rolled no loot yet, so it drops nothing. A removed wall takes its [[Boards|boards]] and any torch bracket with it.

The removal tool cannot be used while carrying furniture ("Your hands are full.") or with the bag open.

## Numbers

- Log wall: {{n build.wall.cost.log}} log, {{n build.wall.seconds seconds}}.
- Door: {{n build.door.cost.plank}} planks, {{n build.door.seconds seconds}}.
- Window: {{n build.window.cost.plank}} planks, {{n build.window.seconds seconds}}.
- Build reach: {{n census.constants.placement.BUILD_REACH tiles}} to the edge's midpoint.
- Closest you may stand to the edge: {{n census.constants.placement.EDGE_CLEARANCE tiles}}.
- Removal reach: {{n census.constants.placement.REMOVE_REACH tiles}}.

## With friends

A guest's click is sent to the host as a build command. The host checks the guest's reach and materials again and runs the timed build on the guest's own character, spending the guest's own items. Removal works the same way: the guest names what it clicked, and the host checks that it can be removed and that it is in reach.

## Settings that change it

{{devonly note="Free building is for testing structures."}}

- **Free building** (default Off): every cost becomes free. The build time still applies. It is a world rule: on a guest it is the host's.

## See also

- [[Walls]]
- [[Openings]]
- [[Boards]]
- [[Rooms]]
- [[Placement]]
- [[Carrying furniture]]
- [[Workbench]], which makes furniture
