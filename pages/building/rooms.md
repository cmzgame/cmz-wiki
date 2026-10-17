---
title: Rooms
categories: [Building, Mechanics]
aliases: [Room, Indoors, Outdoors, Sealed, Flood fill]
summary: How the game finds rooms by flood fill, what counts as indoors, and what rooms change.
---

**Rooms** are found by the game, never laid out by hand. Any area of floor closed in by walls, doors, and windows is a room. Everything else is outdoors.

## How it works

### Finding rooms

The game fills outwards from each tile until it meets [[Walls|walls]], doors, and windows. An area closed in on every side is a room, whatever state its openings are in: an open or broken door still closes a room.

An area is outdoors when:

- it is larger than {{n census.constants.map.ROOM_MAX tiles}}
- it reaches ground that has not been grown yet
- it is closed in only by see-through walls, such as [[Fences|fences]]

So a fenced field or yard is outdoors.

When a wall is built or removed, only the rooms on either side of it are worked out again. Closing the last gap in a ring of walls you [[Building|built]] makes a new room at once.

### What rooms change

- **[[Sleep]]**: a bed must be in a room. Outdoors it says "Not out here."
- **[[Light]]**: a hearth lights its whole room, and a room's daylight comes in through its openings: each one open lights {{n tuning.world.daylightTiles}} tiles of the room fully, so a larger room needs more open, and a room shut tight is dark by day.
- **[[Breaking in]]**: the dead choose a room to break into or out of.
- **Near walls**: the walls of your room on the camera's side turn see-through.

### Translucent near walls

While you are inside a room, its walls on the camera's side are drawn faded, so you can see the room and the people in it. Its doors and windows still work as usual. A corner post fades only when every wall meeting at it is a near wall. Walls never get the soft hole round the player that tree canopies get.

### Sealed

The debug corner says whether your room is sealed or open. A room is sealed when every door is shut and whole or boarded, and every window is shuttered and whole or boarded. Nothing in the game reads the mark itself: sleep and the dead do not change with it. The light follows the openings, not the mark: a room with every door and shutter shut is dark by day (see [[Light]]).

## Numbers

- Largest room: {{n census.constants.map.ROOM_MAX tiles}}.
- Faded near walls are drawn at {{n census.constants.render_scene.NEAR_WALL_ALPHA}} of their opacity.

## See also

- [[Walls]]
- [[Openings]]
- [[Fences]]
- [[Light]]
- [[Sleep]]

## Sources

<!-- sources at 9d9a5b5 -->
- `src/map.js:1493-1545`: the flood fill, stopped by walls, doors, and windows in any state
- `src/map.js:23`: the largest room
- `src/map.js:1221-1230`: a see-through wall bounds no room
- `src/map.js:1547-1609`: rooms refound only on either side of a changed edge
- `src/entities/player.js:205`: a bed outdoors says "Not out here."
- `src/light.js:54-57`, `src/light.js:124-162`, `data/tuning.json:80`: a hearth's room light; a room's daylight by its open openings in proportion to its size, a shut room dark by day (game #150)
- `src/map.js:640-678`: the dead choose a room to break
- `src/render/walls.js:354-370`, `src/render/walls.js:162-168`, `src/render/walls.js:305-315`: near walls faded, posts only when every wall is near
- `src/render/scene.js:38-43`: only trees open the hole round the player
- `src/map.js:624-638`, `src/main.js:1273`: sealed, computed only for the debug corner
- `src/render/scene.js:35`: the faded walls' opacity
