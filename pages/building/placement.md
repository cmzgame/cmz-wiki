---
title: Placement
categories: [Building, Mechanics]
aliases: [Ghost, Putting down, Put down, Placing]
summary: The ghost that shows where a carried piece of furniture or a new wall will go, turning it with R, reach, and putting it down.
---

**Placement** is how things are put into the world: a carried piece of furniture set down, or a wall, door, or window built. In both, a **ghost** of the thing follows the cursor, green where it can go and red where it cannot.

## How it works

### The ghost

While you carry furniture, or have a piece picked in the build palette, a see-through copy of it follows the cursor.

- A piece of furniture is centred on the tile under the cursor.
- A wall, door, or window snaps to the nearest edge of the tile under the cursor (see [[Building]]).

The ghost is green when the thing can go there and red when it cannot.

### Turning with R

R turns a carried piece of furniture. A piece drawn with facings, such as a chair, steps to its next facing, and its footprint follows. A piece without facings swaps its length and width, so a long table turns across.

### Putting furniture down

A carried piece goes down where:

- every tile of its footprint is free of furniture and walkable
- none of its tiles is too close to you
- no wall runs between two of its own tiles
- the tile under the cursor is within {{n census.constants.placement.PLACE_REACH tiles}} of you

Put it down with a left click on a green ghost, or with E, which sets it on the tile in front of you. Escape does not drop it. A lit piece, such as a jack-o'-lantern, lights again when it is put down.

Solid furniture blocks the whole of its tile: nobody walks through it and no path goes through it. Round things, such as barrels, block only a circle, so you can slip between them.

## Numbers

- Reach to put down furniture: {{n census.constants.placement.PLACE_REACH tiles}}.
- Reach to build: {{n census.constants.placement.BUILD_REACH tiles}}.

## With friends

On a guest, the ghost is drawn from what the host says it carries. A click sends where it wants the piece and how many times it turned it; the host turns its own copy the same way and checks the rules. If the host refuses, the piece turns back.

## See also

- [[Carrying furniture]]
- [[Building]]
- [[Controls]]
