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

## Sources

<!-- sources at 9205ad7 -->
- `src/map.js:441-451`, `src/map.js:993-1007`: walls on the `n` and `w` edges of a tile
- `src/map.js:490-500`: doors and windows are walls with a kind
- `src/map.js:1019-1032`, `src/map.js:1155-1209`: a wall blocks sight and bodies
- `src/map.js:497`: a plain wall has unending health; `src/map.js:598-624`: the dead breach only openings
- `src/render/walls.js`: corner posts take the heaviest material
- `data/sprites/wall_wood.json`, `data/sprites/wall_stone.json`, `data/sprites/wall_log.json`, `data/sprites/wall_fence.json`: each material's height and thickness
- `data/maps/valley.json:1130-4910`: which buildings are wood and which stone
- `data/build.json`: the log wall is the only wall you can build
- `src/map.js:1672`, `data/maps/valley.json:4906-4911`: a material per side
- `src/placeholders.js:88-91`: openings and the bracket at fixed heights
- `src/placement.js:320-363`, `src/map.js:469`: only built walls can be removed
- `src/map.js:125-199`, `src/interact.js:401-440`: brackets, their torches, E to take or mount
- `data/items.json`: the torch's `fire`; `src/light.js:59-64`: a mounted torch's light, never burning out
- `src/map.js:1717-1724`: brackets only where the map authors them
- `src/render/walls.js:354-370`: near walls faded
