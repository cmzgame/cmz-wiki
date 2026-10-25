---
title: Placement
categories: [Building, Mechanics]
aliases: [Ghost, Putting down, Put down, Placing]
summary: The ghost that shows where a carried piece of furniture or a new wall will go, turning it with R, reach, and putting it down.
---

**Placement** is how things are put into the world: a carried piece of furniture set down, a [[Rugs|rug]] laid from the bag, a [[Paintings|painting]] hung from the bag, or a wall, door, or window built. In both, a **ghost** of the thing follows the cursor, green where it can go and red where it cannot.

## How it works

### The ghost

While you carry furniture, have a piece picked in the build palette, or have chosen **Place** on a rug or a painting in your bag, a see-through copy of it follows the cursor.

- A piece of furniture is centred on the tile under the cursor, and so is a rug; a rug's own rules are on [[Rugs]].
- A painting goes on the face of the wall under the cursor; its own rules are on [[Paintings]].
- A wall, door, or window snaps to the nearest edge of the tile under the cursor (see [[Building]]).

The ghost is green when the thing can go there and red when it cannot.

### Turning with R

R turns a carried piece of furniture. A piece drawn with facings, such as a chair, steps to its next facing, and its footprint follows. A piece without facings swaps its length and width, so a long table turns across.

### Putting furniture down

A carried piece goes down where:

- every tile of its footprint is free of furniture and walkable (a laid rug is not furniture: a piece can stand on one)
- none of its tiles is either of the two tiles a door or a gate stands between, so [[The dead|the dead]] can always stand at a door (see [[Openings]])
- none of its tiles is too close to you
- no wall runs between two of its own tiles
- the tile under the cursor is within {{n census.constants.placement.PLACE_REACH tiles}} of you, with a clear line to it: through a wall, a shut door, or shutters the ghost is red with "There is a wall in the way."

Put it down with a left click on a green ghost, or with E, which sets it on the tile in front of you. Escape does not drop it. A lit piece, such as a jack-o'-lantern, lights again when it is put down.

Solid furniture blocks the whole of its tile: nobody walks through it and no path goes through it. Round things, such as barrels, block only a circle, so you can slip between them.

### Setting things down from the bag

Some things are set down from the bag rather than carried: a [[Campfire]], a [[Torch post]] (outdoors only), and a [[Decorative pumpkin]] (any open floor). **Place** on the item's menu starts a ghost on the tile under the cursor, green where it may stand and red with the reason; a click sets it down and Escape cancels. A [[Pumpkin]] has **Place as decoration**, which sets it down as a decorative pumpkin: picked up again it is no longer food. A [[Wall bracket]] is hung on a wall's face instead, as a painting is. Each comes up again into the bag with **Pick up** on its menu.

## Numbers

- Reach to put down furniture: {{n census.constants.placement.PLACE_REACH tiles}}.
- Reach to build: {{n census.constants.placement.BUILD_REACH tiles}}.

## With friends

On a guest, the ghost is drawn from what the host says it carries. A click sends where it wants the piece and how many times it turned it; the host turns its own copy the same way and checks the rules. If the host refuses, the piece turns back.

## See also

- [[Carrying furniture]]
- [[Building]]
- [[Controls]]

## Sources

<!-- sources at 9205ad7 -->
- `src/placement.js:250`, `src/placement.js:534-536`: a painting's ghost on the face of the wall under the cursor (game #344, at 9ac68a2)
- `src/placement.js`, `putDownReach`: putting down needs the reach and a clear line (game #227)
- `src/placement.js:402-415`: the furniture ghost centred on the cursor
- `src/placement.js:160-175`: a built piece snapped to the nearest edge
- `src/placement.js:253-268`: R steps the facing or swaps the footprint
- `src/placement.js:102-117`, `src/map.js:506-509`, `src/placement.js:480-491`: a laid rug is in its own slot on the tile, so furniture goes down over it; the rug's ghost centred as a prop's (game #339, at 499e344)
- `src/placement.js:97-113`: the put-down rules
- `src/placement.js:95-115`, `src/map.js:478-487`: not on a door's tiles (game commit 82106de)
- `src/placement.js:24`, `src/placement.js:402-415`: the reach to put down
- `src/placement.js:270-282`, `src/placement.js:116-119`, `src/interact.js:292-311`: a click, or E on the tile in front
- `src/map.js:369-392`: a lit prop lights again when put down
- `src/map.js:1495`, `src/map.js:1114-1117`: props solid by default, a solid tile never walked
- `src/map.js:1155-1209`, `data/sprites/barrel.json`: round props block only a circle
- `src/placement.js:25`: the build reach
- `src/placement.js:488-508`: a guest's put-down as a command with its turns, turned back on a refusal
- `src/setdown.js`, `src/placement.js:324-356`, `src/placement.js:717-745`: set down from the bag, Place as decoration, a bracket hung (game #428, at 0ce54cf)
