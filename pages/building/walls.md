---
title: Walls
categories: [Building, Mechanics]
aliases: [Wall, Log wall, Wood wall, Stone wall, Wall materials]
summary: Walls sit on the edges between tiles; their materials, heights, and thickness.
---

**Walls** in the game sit on the edges between tiles, not on the tiles themselves. Each tile can hold a wall on its north edge and on its west edge; its other two sides belong to its neighbours. Doors and windows are walls of another kind (see [[Openings]]).

## How it works

### Edges

On screen the north edge is the upper-right side of a tile's diamond, and the west edge is the upper-left side. A wall blocks bodies and [[Sight|sight]] across its edge. A plain wall cannot be damaged by anything: [[The dead|the dead]] never attack one.

### Materials

Every wall has a material, which is its art. The corner posts take the heaviest material that meets there: stone over log over wood.

- **Wood**: {{n sprites.wall_wood.wall.height}} pixels tall, {{n sprites.wall_wood.wall.thickness}} thick. The cottages and most houses of the village.
- **Stone**: {{n sprites.wall_stone.wall.height}} pixels tall, {{n sprites.wall_stone.wall.thickness}} thick. The manor, the crypt, and other stone buildings.
- **Log**: {{n sprites.wall_log.wall.height}} pixels tall, {{n sprites.wall_log.wall.thickness}} thick. The only wall you can [[Building|build]].
- **Fence**: {{n sprites.wall_fence.wall.height}} pixels tall, {{n sprites.wall_fence.wall.thickness}} thick, and see-through. See [[Fences]].

A building may mix materials, with a different wall on each side.

Doors and windows sit at the same heights in every wall, whatever its material.

### Building and removing walls

You can build log walls, doors, and windows from the palette on N, and remove what you built with X. Walls that are part of the map cannot be removed. See [[Building]].

### Torch brackets

Some walls carry a torch bracket on one side. A bracket can hold a [[Torch]], which lights the area and never burns out; E takes the torch or mounts one you carry. Brackets exist only where the map puts them, and you cannot make new ones.

### Near walls

While you are inside a room, its walls on the camera's side are drawn faded. See [[Rooms]].

## Numbers

- Wood wall: {{n sprites.wall_wood.wall.height}} tall, {{n sprites.wall_wood.wall.thickness}} thick.
- Stone wall: {{n sprites.wall_stone.wall.height}} tall, {{n sprites.wall_stone.wall.thickness}} thick.
- Log wall: {{n sprites.wall_log.wall.height}} tall, {{n sprites.wall_log.wall.thickness}} thick.
- Fence: {{n sprites.wall_fence.wall.height}} tall, {{n sprites.wall_fence.wall.thickness}} thick.
- Top of a door: {{n census.constants.placeholders.DOOR_TOP}} pixels up.
- Window: from {{n census.constants.placeholders.WINDOW_SILL}} to {{n census.constants.placeholders.WINDOW_TOP}} pixels up.
- Torch bracket: {{n census.constants.placeholders.BRACKET_UP}} pixels up.

## See also

- [[Openings]]
- [[Fences]]
- [[Rooms]]
- [[Building]]
